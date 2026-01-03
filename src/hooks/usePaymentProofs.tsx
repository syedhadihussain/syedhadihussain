import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface PaymentProof {
  id: string;
  invoice_id: string;
  file_url: string;
  file_name: string;
  message: string | null;
  status: string;
  reviewed_by: string | null;
  reviewed_at: string | null;
  review_notes: string | null;
  created_at: string;
}

export const usePaymentProofs = (invoiceId?: string) => {
  const [paymentProofs, setPaymentProofs] = useState<PaymentProof[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPaymentProofs = async (targetInvoiceId?: string) => {
    setLoading(true);
    try {
      let query = supabase
        .from("payment_proofs")
        .select("*")
        .order("created_at", { ascending: false });

      if (targetInvoiceId || invoiceId) {
        query = query.eq("invoice_id", targetInvoiceId || invoiceId);
      }

      const { data, error } = await query;
      if (error) throw error;
      setPaymentProofs(data || []);
    } catch (error) {
      console.error("Error fetching payment proofs:", error);
      toast.error("Failed to fetch payment proofs");
    } finally {
      setLoading(false);
    }
  };

  const uploadPaymentProof = async (
    invoiceId: string,
    file: File,
    message?: string
  ): Promise<{ success: boolean; error?: string }> => {
    try {
      // Upload file to storage
      const fileExt = file.name.split(".").pop();
      const fileName = `payment-proof-${invoiceId}-${Date.now()}.${fileExt}`;
      const filePath = `payment-proofs/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("project-files")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: urlData } = supabase.storage
        .from("project-files")
        .getPublicUrl(filePath);

      // Create payment proof record
      const { error: insertError } = await supabase
        .from("payment_proofs")
        .insert({
          invoice_id: invoiceId,
          file_url: urlData.publicUrl,
          file_name: file.name,
          message: message || null,
          status: "pending_review",
        });

      if (insertError) throw insertError;

      // Update invoice status
      await supabase
        .from("invoices")
        .update({ status: "payment_submitted" })
        .eq("id", invoiceId);

      toast.success("Payment proof uploaded successfully");
      fetchPaymentProofs(invoiceId);
      return { success: true };
    } catch (error) {
      console.error("Error uploading payment proof:", error);
      toast.error("Failed to upload payment proof");
      return { success: false, error: "Upload failed" };
    }
  };

  const reviewPaymentProof = async (
    proofId: string,
    status: "approved" | "rejected",
    notes?: string
  ): Promise<{ success: boolean }> => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      const { error } = await supabase
        .from("payment_proofs")
        .update({
          status,
          reviewed_by: user?.id,
          reviewed_at: new Date().toISOString(),
          review_notes: notes || null,
        })
        .eq("id", proofId);

      if (error) throw error;

      // Get the invoice ID to update its status
      const { data: proof } = await supabase
        .from("payment_proofs")
        .select("invoice_id")
        .eq("id", proofId)
        .single();

      if (proof) {
        await supabase
          .from("invoices")
          .update({ 
            status: status === "approved" ? "paid" : "pending",
            paid_at: status === "approved" ? new Date().toISOString() : null,
          })
          .eq("id", proof.invoice_id);

        // If approved, update client onboarding status
        if (status === "approved") {
          const { data: invoice } = await supabase
            .from("invoices")
            .select("client_id")
            .eq("id", proof.invoice_id)
            .single();

          if (invoice) {
            await supabase
              .from("client_profiles")
              .update({ 
                onboarding_status: "payment_approved",
                portal_access_level: "agreement_only",
              })
              .eq("id", invoice.client_id);
          }
        }
      }

      toast.success(`Payment ${status === "approved" ? "approved" : "rejected"}`);
      fetchPaymentProofs();
      return { success: true };
    } catch (error) {
      console.error("Error reviewing payment proof:", error);
      toast.error("Failed to review payment proof");
      return { success: false };
    }
  };

  useEffect(() => {
    fetchPaymentProofs();
  }, [invoiceId]);

  return {
    paymentProofs,
    loading,
    uploadPaymentProof,
    reviewPaymentProof,
    refreshPaymentProofs: fetchPaymentProofs,
  };
};
