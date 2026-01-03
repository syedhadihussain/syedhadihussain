import { useState, useEffect } from "react";
import PortalLayout from "@/components/portal/PortalLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { format } from "date-fns";
import {
  CheckCircle,
  XCircle,
  Eye,
  Clock,
  FileImage,
  Download,
  Loader2,
  RefreshCw,
} from "lucide-react";

interface PaymentProofWithDetails {
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
  invoice?: {
    id: string;
    amount: number;
    currency: string;
    status: string;
    client_id: string;
  };
  client?: {
    id: string;
    company_name: string | null;
    client_id: string;
    user_id: string;
    onboarding_status: string | null;
  };
}

const AdminPaymentProofsPage = () => {
  const [paymentProofs, setPaymentProofs] = useState<PaymentProofWithDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProof, setSelectedProof] = useState<PaymentProofWithDetails | null>(null);
  const [reviewNotes, setReviewNotes] = useState("");
  const [processing, setProcessing] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);

  const fetchPaymentProofs = async () => {
    setLoading(true);
    try {
      const { data: proofs, error: proofsError } = await supabase
        .from("payment_proofs")
        .select("*")
        .order("created_at", { ascending: false });

      if (proofsError) throw proofsError;

      // Fetch related invoice and client data
      const enrichedProofs = await Promise.all(
        (proofs || []).map(async (proof) => {
          const { data: invoice } = await supabase
            .from("invoices")
            .select("id, amount, currency, status, client_id")
            .eq("id", proof.invoice_id)
            .maybeSingle();

          let client = null;
          if (invoice?.client_id) {
            const { data: clientData } = await supabase
              .from("client_profiles")
              .select("id, company_name, client_id, user_id, onboarding_status")
              .eq("id", invoice.client_id)
              .maybeSingle();
            client = clientData;
          }

          return { ...proof, invoice, client };
        })
      );

      setPaymentProofs(enrichedProofs);
    } catch (error) {
      console.error("Error fetching payment proofs:", error);
      toast.error("Failed to fetch payment proofs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPaymentProofs();
  }, []);

  const handleReview = async (status: "approved" | "rejected") => {
    if (!selectedProof) return;

    setProcessing(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();

      // Update payment proof status
      const { error: proofError } = await supabase
        .from("payment_proofs")
        .update({
          status,
          reviewed_by: user?.id,
          reviewed_at: new Date().toISOString(),
          review_notes: reviewNotes || null,
        })
        .eq("id", selectedProof.id);

      if (proofError) throw proofError;

      // Update invoice status
      const { error: invoiceError } = await supabase
        .from("invoices")
        .update({
          status: status === "approved" ? "paid" : "pending",
          paid_at: status === "approved" ? new Date().toISOString() : null,
        })
        .eq("id", selectedProof.invoice_id);

      if (invoiceError) throw invoiceError;

      // Update client onboarding status if approved
      if (status === "approved" && selectedProof.client) {
        const { error: clientError } = await supabase
          .from("client_profiles")
          .update({
            onboarding_status: "payment_approved",
            portal_access_level: "agreement_only",
          })
          .eq("id", selectedProof.client.id);

        if (clientError) throw clientError;
      }

      // Send email notification to client
      if (selectedProof.client?.user_id) {
        try {
          const { data: profile } = await supabase
            .from("profiles")
            .select("email, full_name")
            .eq("id", selectedProof.client.user_id)
            .maybeSingle();

          if (profile?.email) {
            await supabase.functions.invoke("send-notification-email", {
              body: {
                type: status === "approved" ? "payment_approved" : "payment_rejected",
                recipientEmail: profile.email,
                recipientName: profile.full_name || selectedProof.client.company_name || "Client",
                data: {
                  invoiceAmount: selectedProof.invoice?.amount?.toLocaleString() || "0",
                  invoiceCurrency: selectedProof.invoice?.currency || "USD",
                  reviewNotes: reviewNotes || undefined,
                },
              },
            });
            console.log("Payment notification email sent successfully");
          }
        } catch (emailError) {
          console.error("Failed to send email notification:", emailError);
          // Don't fail the whole operation if email fails
        }
      }

      toast.success(`Payment ${status === "approved" ? "approved" : "rejected"} successfully`);
      setSelectedProof(null);
      setReviewNotes("");
      fetchPaymentProofs();
    } catch (error) {
      console.error("Error reviewing payment:", error);
      toast.error("Failed to process review");
    } finally {
      setProcessing(false);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending_review":
        return <Badge variant="outline" className="bg-yellow-500/10 text-yellow-600"><Clock className="w-3 h-3 mr-1" />Pending Review</Badge>;
      case "approved":
        return <Badge variant="outline" className="bg-green-500/10 text-green-600"><CheckCircle className="w-3 h-3 mr-1" />Approved</Badge>;
      case "rejected":
        return <Badge variant="outline" className="bg-red-500/10 text-red-600"><XCircle className="w-3 h-3 mr-1" />Rejected</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <PortalLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Payment Proofs</h1>
            <p className="text-muted-foreground">Review and approve client payment submissions</p>
          </div>
          <Button variant="outline" onClick={fetchPaymentProofs} disabled={loading}>
            <RefreshCw className={`w-4 h-4 mr-2 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileImage className="w-5 h-5" />
              All Payment Proofs
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : paymentProofs.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No payment proofs submitted yet
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Client</TableHead>
                    <TableHead>Invoice Amount</TableHead>
                    <TableHead>File</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paymentProofs.map((proof) => (
                    <TableRow key={proof.id}>
                      <TableCell>
                        {format(new Date(proof.created_at), "MMM d, yyyy HH:mm")}
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{proof.client?.company_name || "N/A"}</p>
                          <p className="text-sm text-muted-foreground">{proof.client?.client_id}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        {proof.invoice ? (
                          <span className="font-medium">
                            {proof.invoice.currency} {proof.invoice.amount.toLocaleString()}
                          </span>
                        ) : (
                          "N/A"
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span className="text-sm truncate max-w-[150px]">{proof.file_name}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              setSelectedProof(proof);
                              setPreviewOpen(true);
                            }}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            asChild
                          >
                            <a href={proof.file_url} target="_blank" rel="noopener noreferrer" download>
                              <Download className="w-4 h-4" />
                            </a>
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(proof.status)}</TableCell>
                      <TableCell>
                        {proof.status === "pending_review" && (
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-green-600 hover:bg-green-50"
                              onClick={() => {
                                setSelectedProof(proof);
                                setReviewNotes("");
                              }}
                            >
                              <CheckCircle className="w-4 h-4 mr-1" />
                              Review
                            </Button>
                          </div>
                        )}
                        {proof.status !== "pending_review" && proof.review_notes && (
                          <span className="text-sm text-muted-foreground truncate max-w-[200px] block">
                            {proof.review_notes}
                          </span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>

        {/* Review Dialog */}
        <Dialog open={!!selectedProof && !previewOpen} onOpenChange={(open) => !open && setSelectedProof(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Review Payment Proof</DialogTitle>
            </DialogHeader>
            {selectedProof && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Client</p>
                    <p className="font-medium">{selectedProof.client?.company_name || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Client ID</p>
                    <p className="font-medium">{selectedProof.client?.client_id}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Invoice Amount</p>
                    <p className="font-medium">
                      {selectedProof.invoice?.currency} {selectedProof.invoice?.amount.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Onboarding Status</p>
                    <p className="font-medium">{selectedProof.client?.onboarding_status || "N/A"}</p>
                  </div>
                </div>

                {selectedProof.message && (
                  <div>
                    <p className="text-sm text-muted-foreground">Client Message</p>
                    <p className="p-3 bg-muted rounded-md">{selectedProof.message}</p>
                  </div>
                )}

                <div>
                  <p className="text-sm text-muted-foreground mb-2">Payment Proof</p>
                  <a
                    href={selectedProof.file_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 bg-muted rounded-md hover:bg-muted/80 transition-colors"
                  >
                    <FileImage className="w-5 h-5" />
                    <span>{selectedProof.file_name}</span>
                    <Eye className="w-4 h-4 ml-auto" />
                  </a>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">Review Notes (Optional)</p>
                  <Textarea
                    value={reviewNotes}
                    onChange={(e) => setReviewNotes(e.target.value)}
                    placeholder="Add notes about this review..."
                    rows={3}
                  />
                </div>
              </div>
            )}
            <DialogFooter className="gap-2">
              <Button
                variant="outline"
                onClick={() => setSelectedProof(null)}
                disabled={processing}
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={() => handleReview("rejected")}
                disabled={processing}
              >
                {processing ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <XCircle className="w-4 h-4 mr-2" />}
                Reject
              </Button>
              <Button
                onClick={() => handleReview("approved")}
                disabled={processing}
                className="bg-green-600 hover:bg-green-700"
              >
                {processing ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <CheckCircle className="w-4 h-4 mr-2" />}
                Approve
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Preview Dialog */}
        <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh]">
            <DialogHeader>
              <DialogTitle>Payment Proof Preview</DialogTitle>
            </DialogHeader>
            {selectedProof && (
              <div className="flex items-center justify-center p-4">
                <img
                  src={selectedProof.file_url}
                  alt="Payment proof"
                  className="max-w-full max-h-[70vh] object-contain rounded-lg"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden text-center p-8 bg-muted rounded-lg">
                  <FileImage className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">Unable to preview this file type</p>
                  <Button asChild className="mt-4">
                    <a href={selectedProof.file_url} target="_blank" rel="noopener noreferrer">
                      <Download className="w-4 h-4 mr-2" />
                      Download File
                    </a>
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </PortalLayout>
  );
};

export default AdminPaymentProofsPage;
