import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";
import {
  ArrowLeft,
  Download,
  History,
  Send,
  Lock,
  Unlock,
  Edit,
  Save,
  X,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { EnhancedAgreement } from "@/hooks/useEnhancedAgreements";

import { AgreementHeader } from "./AgreementHeader";
import { AgreementLockedBanner } from "./AgreementLockedBanner";
import { ServicesSection } from "./ServicesSection";
import { PricingSection } from "./PricingSection";
import { ExtraServicesSection } from "./ExtraServicesSection";
import { PaymentRulesSection } from "./PaymentRulesSection";
import { TermsConditionsSection } from "./TermsConditionsSection";
import { DigitalSignatureSection } from "./DigitalSignatureSection";

interface Service {
  name: string;
  description?: string;
  deliveryTimeline?: string;
  included: boolean;
}

interface ExtraService {
  name: string;
  price: number;
  billingType: "one-time" | "recurring";
  approved: boolean;
}

interface PricingData {
  monthlyFee: number | null;
  setupFee: number | null;
  contractLength: string;
  currency: string;
  billingCycle: string;
  paymentDueDate: string;
  paymentMethods: string[];
}

interface PaymentRules {
  latePaymentGrace: string;
  lateFeePercentage: string;
  suspensionConditions: string;
  reactivationFee: string;
  noRefundsClause: string;
}

interface AgreementDetailViewProps {
  agreement: EnhancedAgreement;
  clientName: string;
  companyName: string | null;
  isAdmin: boolean;
  isClient: boolean;
  userId: string;
  onBack: () => void;
  onRefresh: () => void;
}

export const AgreementDetailView = ({
  agreement,
  clientName,
  companyName,
  isAdmin,
  isClient,
  userId,
  onBack,
  onRefresh,
}: AgreementDetailViewProps) => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [showAuditLog, setShowAuditLog] = useState(false);
  const [auditLog, setAuditLog] = useState<any[]>([]);
  const [hasAgreedToTerms, setHasAgreedToTerms] = useState(false);

  // Local state for editable data
  const [services, setServices] = useState<Service[]>([]);
  const [extraServices, setExtraServices] = useState<ExtraService[]>([]);
  const [pricing, setPricing] = useState<PricingData>({
    monthlyFee: null,
    setupFee: null,
    contractLength: "",
    currency: "USD",
    billingCycle: "monthly",
    paymentDueDate: "1st of month",
    paymentMethods: [],
  });
  const [paymentRules, setPaymentRules] = useState<PaymentRules>({
    latePaymentGrace: "",
    lateFeePercentage: "",
    suspensionConditions: "",
    reactivationFee: "",
    noRefundsClause: "",
  });
  const [termsAndConditions, setTermsAndConditions] = useState("");

  const isLocked = agreement.is_locked;
  const canClientEdit = agreement.client_can_edit && !isLocked;
  const canEdit = (isAdmin || canClientEdit) && !isLocked;

  useEffect(() => {
    // Parse services from agreement
    const parsedServices = parseServices(agreement.services_included);
    setServices(parsedServices);

    // Parse extra services from extra_services_rules
    const parsedExtras = parseExtraServices(agreement.extra_services_rules);
    setExtraServices(parsedExtras);

    // Parse pricing
    setPricing({
      monthlyFee: agreement.payment_amount,
      setupFee: null,
      contractLength: "",
      currency: "USD",
      billingCycle: agreement.payment_schedule || "monthly",
      paymentDueDate: "1st of month",
      paymentMethods: ["Bank Transfer", "Credit Card"],
    });

    // Parse payment rules from late_payment_terms
    const parsedRules = parsePaymentRules(agreement.late_payment_terms);
    setPaymentRules(parsedRules);

    // Set terms
    setTermsAndConditions(agreement.terms_and_conditions || "");
  }, [agreement]);

  const parseServices = (data: any): Service[] => {
    if (!data) return [];
    if (Array.isArray(data)) {
      return data.map((item) => {
        if (typeof item === "string") {
          return { name: item, included: true };
        }
        return item as Service;
      });
    }
    return [];
  };

  const parseExtraServices = (data: string | null): ExtraService[] => {
    if (!data) return [];
    try {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed)) return parsed;
    } catch {
      // If not JSON, return empty
    }
    return [];
  };

  const parsePaymentRules = (data: string | null): PaymentRules => {
    if (!data) {
      return {
        latePaymentGrace: "7 days after the due date",
        lateFeePercentage: "5% per week after grace period",
        suspensionConditions: "Services will be suspended after 14 days of non-payment",
        reactivationFee: "$50 reactivation fee after suspension",
        noRefundsClause: "All payments are non-refundable once services have commenced",
      };
    }
    try {
      const parsed = JSON.parse(data);
      return parsed;
    } catch {
      return {
        latePaymentGrace: data,
        lateFeePercentage: "",
        suspensionConditions: "",
        reactivationFee: "",
        noRefundsClause: "",
      };
    }
  };

  const fetchAuditLog = useCallback(async () => {
    const { data } = await supabase
      .from("agreement_audit_log")
      .select("*")
      .eq("agreement_id", agreement.id)
      .order("created_at", { ascending: true });

    setAuditLog(data || []);
  }, [agreement.id]);

  useEffect(() => {
    if (showAuditLog) {
      fetchAuditLog();
    }
  }, [showAuditLog, fetchAuditLog]);

  const handleSave = async () => {
    const servicesData = services.map((s) => ({
      name: s.name,
      description: s.description || "",
      deliveryTimeline: s.deliveryTimeline || "",
      included: s.included,
    }));

    const { error } = await supabase
      .from("document_agreements")
      .update({
        services_included: servicesData,
        payment_amount: pricing.monthlyFee,
        payment_schedule: pricing.billingCycle,
        terms_and_conditions: termsAndConditions,
        extra_services_rules: JSON.stringify(extraServices),
        late_payment_terms: JSON.stringify(paymentRules),
      })
      .eq("id", agreement.id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to save changes",
        variant: "destructive",
      });
      return;
    }

    // Log audit
    await supabase.from("agreement_audit_log").insert({
      agreement_id: agreement.id,
      action: "updated",
      actor_id: userId,
      user_agent: navigator.userAgent,
      metadata: { updated_fields: ["services", "pricing", "terms"] },
    });

    toast({
      title: "Success",
      description: "Agreement updated successfully",
    });

    setIsEditing(false);
    onRefresh();
  };

  const handleSign = async (signatureData: string) => {
    const { error } = await supabase
      .from("document_agreements")
      .update({
        status: "signed",
        signed_at: new Date().toISOString(),
        signature_data: signatureData,
        signer_user_agent: navigator.userAgent,
        is_locked: true,
      })
      .eq("id", agreement.id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to sign agreement",
        variant: "destructive",
      });
      return;
    }

    // Log audit
    await supabase.from("agreement_audit_log").insert({
      agreement_id: agreement.id,
      action: "signed",
      actor_id: userId,
      user_agent: navigator.userAgent,
      metadata: { timestamp: new Date().toISOString() },
    });

    toast({
      title: "Agreement Signed",
      description: "The agreement has been signed and locked successfully",
    });

    onRefresh();
  };

  const handleSendToClient = async () => {
    const { error } = await supabase
      .from("document_agreements")
      .update({
        status: "sent",
        sent_at: new Date().toISOString(),
      })
      .eq("id", agreement.id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to send agreement",
        variant: "destructive",
      });
      return;
    }

    await supabase.from("agreement_audit_log").insert({
      agreement_id: agreement.id,
      action: "sent",
      actor_id: userId,
      user_agent: navigator.userAgent,
    });

    toast({
      title: "Agreement Sent",
      description: "The agreement has been sent to the client",
    });

    onRefresh();
  };

  const handleLock = async () => {
    const { error } = await supabase
      .from("document_agreements")
      .update({ is_locked: true })
      .eq("id", agreement.id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to lock agreement",
        variant: "destructive",
      });
      return;
    }

    await supabase.from("agreement_audit_log").insert({
      agreement_id: agreement.id,
      action: "locked",
      actor_id: userId,
      user_agent: navigator.userAgent,
    });

    toast({
      title: "Agreement Locked",
      description: "The agreement is now read-only",
    });

    onRefresh();
  };

  const handleToggleClientEdit = async (canEdit: boolean) => {
    const { error } = await supabase
      .from("document_agreements")
      .update({ client_can_edit: canEdit })
      .eq("id", agreement.id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to update permissions",
        variant: "destructive",
      });
      return;
    }

    await supabase.from("agreement_audit_log").insert({
      agreement_id: agreement.id,
      action: canEdit ? "client_edit_enabled" : "client_edit_disabled",
      actor_id: userId,
      user_agent: navigator.userAgent,
    });

    toast({
      title: "Permissions Updated",
      description: canEdit
        ? "Client can now edit allowed fields"
        : "Client editing disabled",
    });

    onRefresh();
  };

  const allRequiredFieldsComplete = services.some((s) => s.included) && 
    (pricing.monthlyFee !== null && pricing.monthlyFee > 0);

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={onBack}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Agreements
        </Button>

        <div className="flex items-center gap-2">
          {isAdmin && !isLocked && (
            <>
              {isEditing ? (
                <>
                  <Button variant="outline" onClick={() => setIsEditing(false)}>
                    <X className="h-4 w-4 mr-2" />
                    Cancel
                  </Button>
                  <Button onClick={handleSave}>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" onClick={() => setIsEditing(true)}>
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                  {agreement.status === "pending" && (
                    <Button variant="outline" onClick={handleSendToClient}>
                      <Send className="h-4 w-4 mr-2" />
                      Send to Client
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    onClick={() => handleToggleClientEdit(!agreement.client_can_edit)}
                  >
                    {agreement.client_can_edit ? (
                      <>
                        <Lock className="h-4 w-4 mr-2" />
                        Disable Client Edit
                      </>
                    ) : (
                      <>
                        <Unlock className="h-4 w-4 mr-2" />
                        Allow Client Edit
                      </>
                    )}
                  </Button>
                  <Button variant="outline" onClick={handleLock}>
                    <Lock className="h-4 w-4 mr-2" />
                    Lock Agreement
                  </Button>
                </>
              )}
            </>
          )}

          <Button variant="outline" onClick={() => setShowAuditLog(true)}>
            <History className="h-4 w-4 mr-2" />
            Audit Log
          </Button>

          {agreement.document_url && agreement.document_url !== "#" && (
            <Button variant="outline" asChild>
              <a href={agreement.document_url} target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </a>
            </Button>
          )}
        </div>
      </div>

      {/* Locked Banner */}
      {isLocked && <AgreementLockedBanner signedAt={agreement.signed_at} />}

      {/* Agreement Header */}
      <AgreementHeader
        agreementId={agreement.id}
        clientName={clientName}
        companyName={companyName}
        agreementDate={agreement.created_at}
        status={agreement.status}
        isLocked={isLocked}
      />

      <Separator />

      {/* Services Section */}
      <ServicesSection
        services={services}
        onServicesChange={setServices}
        isEditable={isEditing || canClientEdit}
        isLocked={isLocked}
      />

      {/* Pricing Section */}
      <PricingSection
        pricing={pricing}
        onPricingChange={setPricing}
        isEditable={isEditing}
        isLocked={isLocked}
      />

      {/* Extra Services */}
      <ExtraServicesSection
        extraServices={extraServices}
        onExtraServicesChange={setExtraServices}
        isEditable={isEditing}
        isLocked={isLocked}
        isClient={isClient}
      />

      {/* Payment Rules */}
      <PaymentRulesSection
        {...paymentRules}
        onRulesChange={setPaymentRules}
        isEditable={isEditing}
        isLocked={isLocked}
      />

      {/* Terms & Conditions */}
      <TermsConditionsSection
        termsAndConditions={termsAndConditions}
        onTermsChange={setTermsAndConditions}
        hasAgreed={hasAgreedToTerms}
        onAgreeChange={setHasAgreedToTerms}
        isEditable={isEditing}
        isLocked={isLocked}
        isClient={isClient}
      />

      {/* Digital Signature */}
      {isClient && (
        <DigitalSignatureSection
          clientFullName={clientName}
          signatureData={agreement.signature_data}
          signedAt={agreement.signed_at}
          signerIp={agreement.signer_ip}
          isLocked={isLocked}
          hasAgreedToTerms={hasAgreedToTerms}
          allRequiredFieldsComplete={allRequiredFieldsComplete}
          onSign={handleSign}
        />
      )}

      {/* Admin View of Signature */}
      {isAdmin && agreement.signature_data && (
        <DigitalSignatureSection
          clientFullName={clientName}
          signatureData={agreement.signature_data}
          signedAt={agreement.signed_at}
          signerIp={agreement.signer_ip}
          isLocked={true}
          hasAgreedToTerms={true}
          allRequiredFieldsComplete={true}
          onSign={() => {}}
        />
      )}

      {/* Audit Log Dialog */}
      <Dialog open={showAuditLog} onOpenChange={setShowAuditLog}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <History className="h-5 w-5" />
              Audit Log
            </DialogTitle>
          </DialogHeader>
          <ScrollArea className="max-h-96">
            <div className="space-y-3">
              {auditLog.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">
                  No audit entries yet
                </p>
              ) : (
                auditLog.map((entry) => (
                  <div
                    key={entry.id}
                    className="flex items-start gap-3 p-3 bg-muted rounded-lg"
                  >
                    <History className="h-4 w-4 mt-0.5 text-muted-foreground" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm">
                        {entry.action.charAt(0).toUpperCase() +
                          entry.action.slice(1).replace(/_/g, " ")}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {format(new Date(entry.created_at), "MMM d, yyyy 'at' h:mm a")}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AgreementDetailView;
