import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./useAuth";

export type OnboardingStatus = 
  | "pending_invoice"
  | "invoice_sent"
  | "payment_submitted"
  | "payment_approved"
  | "payment_rejected"
  | "access_granted"
  | "agreement_pending"
  | "agreement_signed"
  | "full_access";

export type PortalAccessLevel = 
  | "none"
  | "invoice_only"
  | "agreement_only"
  | "full";

interface ClientOnboardingState {
  onboardingStatus: OnboardingStatus;
  portalAccessLevel: PortalAccessLevel;
  agreementRequired: boolean;
  agreementSigned: boolean;
  hasUnpaidInvoice: boolean;
  hasPendingPaymentProof: boolean;
  clientProfileId: string | null;
  planName: string | null;
  planDetails: Record<string, unknown> | null;
  isLoading: boolean;
  error: string | null;
}

export const useClientOnboarding = () => {
  const { user, isLoading: authLoading } = useAuth();
  const [state, setState] = useState<ClientOnboardingState>({
    onboardingStatus: "pending_invoice",
    portalAccessLevel: "none",
    agreementRequired: true,
    agreementSigned: false,
    hasUnpaidInvoice: false,
    hasPendingPaymentProof: false,
    clientProfileId: null,
    planName: null,
    planDetails: null,
    isLoading: true,
    error: null,
  });

  const fetchOnboardingState = async () => {
    if (!user) {
      setState(prev => ({ ...prev, isLoading: false }));
      return;
    }

    try {
      // Fetch client profile with onboarding status
      const { data: profile, error: profileError } = await supabase
        .from("client_profiles")
        .select(`
          id,
          onboarding_status,
          portal_access_level,
          agreement_required,
          subscription_plan,
          active_plan_details
        `)
        .eq("user_id", user.id)
        .maybeSingle();

      if (profileError) throw profileError;

      if (!profile) {
        setState(prev => ({
          ...prev,
          isLoading: false,
          error: "No client profile found",
        }));
        return;
      }

      // Check for unpaid invoices
      const { data: invoices } = await supabase
        .from("invoices")
        .select("id, status")
        .eq("client_id", profile.id)
        .in("status", ["pending", "overdue"]);

      const hasUnpaidInvoice = (invoices?.length || 0) > 0;

      // Check for pending payment proofs
      const { data: paymentProofs } = await supabase
        .from("payment_proofs")
        .select("id, status")
        .eq("status", "pending_review");

      const hasPendingPaymentProof = (paymentProofs?.length || 0) > 0;

      // Check if agreement is signed
      const { data: agreements } = await supabase
        .from("document_agreements")
        .select("id, status")
        .eq("status", "signed");

      const agreementSigned = (agreements?.length || 0) > 0;

      // Determine portal access level based on status
      let portalAccessLevel: PortalAccessLevel = "none";
      const status = (profile.onboarding_status as OnboardingStatus) || "pending_invoice";

      if (status === "full_access" || (status === "agreement_signed" && agreementSigned)) {
        portalAccessLevel = "full";
      } else if (status === "agreement_pending" || status === "access_granted") {
        portalAccessLevel = "agreement_only";
      } else if (["invoice_sent", "payment_submitted", "payment_approved"].includes(status)) {
        portalAccessLevel = "invoice_only";
      }

      setState({
        onboardingStatus: status,
        portalAccessLevel: (profile.portal_access_level as PortalAccessLevel) || portalAccessLevel,
        agreementRequired: profile.agreement_required ?? true,
        agreementSigned,
        hasUnpaidInvoice,
        hasPendingPaymentProof,
        clientProfileId: profile.id,
        planName: profile.subscription_plan,
        planDetails: profile.active_plan_details as Record<string, unknown> | null,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      console.error("Error fetching onboarding state:", error);
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: "Failed to fetch onboarding state",
      }));
    }
  };

  useEffect(() => {
    if (!authLoading) {
      fetchOnboardingState();
    }
  }, [user, authLoading]);

  const canAccessFeature = (feature: string): boolean => {
    const { portalAccessLevel, agreementSigned, agreementRequired } = state;

    // Full access can access everything
    if (portalAccessLevel === "full") return true;

    // Define feature access by level
    const accessMap: Record<PortalAccessLevel, string[]> = {
      none: [],
      invoice_only: ["invoices", "payment-upload"],
      agreement_only: ["invoices", "agreement", "plan-summary"],
      full: ["all"],
    };

    const allowedFeatures = accessMap[portalAccessLevel] || [];
    
    // Special case: if agreement is required and not signed, block most features
    if (agreementRequired && !agreementSigned && portalAccessLevel !== "invoice_only") {
      return ["invoices", "agreement", "plan-summary"].includes(feature);
    }

    return allowedFeatures.includes(feature) || allowedFeatures.includes("all");
  };

  const refreshState = () => {
    setState(prev => ({ ...prev, isLoading: true }));
    fetchOnboardingState();
  };

  return {
    ...state,
    canAccessFeature,
    refreshState,
  };
};
