import { ReactNode } from "react";
import { useClientOnboarding, OnboardingStatus } from "@/hooks/useClientOnboarding";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Lock, 
  FileText, 
  CreditCard, 
  CheckCircle, 
  Clock, 
  AlertTriangle,
  FileSignature,
  Loader2
} from "lucide-react";

interface AccessGateProps {
  children: ReactNode;
  requiredFeature: string;
  fallbackMessage?: string;
}

const statusConfig: Record<OnboardingStatus, { 
  icon: typeof Lock; 
  title: string; 
  description: string; 
  color: string;
  action?: { label: string; href: string };
}> = {
  pending_invoice: {
    icon: Clock,
    title: "Awaiting Invoice",
    description: "Your subscription request is being processed. You'll receive an invoice shortly.",
    color: "text-yellow-500",
  },
  invoice_sent: {
    icon: FileText,
    title: "Invoice Pending",
    description: "An invoice has been sent to your email. Please complete the payment to proceed.",
    color: "text-blue-500",
    action: { label: "View Invoices", href: "/en/portal/invoices" },
  },
  payment_submitted: {
    icon: Clock,
    title: "Payment Under Review",
    description: "Your payment proof is being reviewed. This usually takes 24-48 hours.",
    color: "text-yellow-500",
  },
  payment_approved: {
    icon: CheckCircle,
    title: "Payment Approved",
    description: "Your payment has been verified. You'll receive portal access shortly.",
    color: "text-green-500",
  },
  payment_rejected: {
    icon: AlertTriangle,
    title: "Payment Issue",
    description: "There was an issue with your payment. Please contact support or resubmit.",
    color: "text-red-500",
    action: { label: "Contact Support", href: "/en/contact" },
  },
  access_granted: {
    icon: Lock,
    title: "Limited Access",
    description: "Please sign the service agreement to unlock full portal access.",
    color: "text-blue-500",
    action: { label: "View Agreement", href: "/en/portal/enhanced-agreements" },
  },
  agreement_pending: {
    icon: FileSignature,
    title: "Agreement Required",
    description: "You must review and sign the service agreement before accessing this feature.",
    color: "text-yellow-500",
    action: { label: "Sign Agreement", href: "/en/portal/enhanced-agreements" },
  },
  agreement_signed: {
    icon: CheckCircle,
    title: "Agreement Signed",
    description: "Your agreement has been signed. Full access is being activated.",
    color: "text-green-500",
  },
  full_access: {
    icon: CheckCircle,
    title: "Full Access",
    description: "You have full access to all portal features.",
    color: "text-green-500",
  },
};

export const AccessGate = ({ children, requiredFeature, fallbackMessage }: AccessGateProps) => {
  const { 
    canAccessFeature, 
    onboardingStatus, 
    isLoading,
    agreementRequired,
    agreementSigned,
    portalAccessLevel
  } = useClientOnboarding();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  // Check if user can access this feature
  if (canAccessFeature(requiredFeature)) {
    return <>{children}</>;
  }

  // Get appropriate status message
  let displayStatus = onboardingStatus;
  if (agreementRequired && !agreementSigned && portalAccessLevel !== "invoice_only") {
    displayStatus = "agreement_pending";
  }

  const config = statusConfig[displayStatus];
  const StatusIcon = config.icon;

  return (
    <div className="flex items-center justify-center min-h-[400px] p-4">
      <Card className="max-w-md w-full text-center">
        <CardHeader>
          <div className={`mx-auto mb-4 p-4 rounded-full bg-muted ${config.color}`}>
            <StatusIcon className="h-8 w-8" />
          </div>
          <div className="flex justify-center mb-2">
            <Badge variant="secondary">
              <Lock className="h-3 w-3 mr-1" />
              Access Restricted
            </Badge>
          </div>
          <CardTitle>{config.title}</CardTitle>
          <CardDescription className="text-base">
            {fallbackMessage || config.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {config.action && (
            <Button asChild className="w-full">
              <Link to={config.action.href}>{config.action.label}</Link>
            </Button>
          )}
          
          {/* Status Timeline */}
          <div className="mt-6 pt-6 border-t">
            <h4 className="text-sm font-semibold text-foreground mb-4">Your Progress</h4>
            <div className="space-y-3 text-left">
              <StatusStep 
                step="Invoice" 
                completed={!["pending_invoice"].includes(onboardingStatus)} 
                current={onboardingStatus === "invoice_sent"}
              />
              <StatusStep 
                step="Payment" 
                completed={["payment_approved", "access_granted", "agreement_pending", "agreement_signed", "full_access"].includes(onboardingStatus)} 
                current={["payment_submitted"].includes(onboardingStatus)}
              />
              <StatusStep 
                step="Access" 
                completed={["agreement_pending", "agreement_signed", "full_access"].includes(onboardingStatus)} 
                current={["access_granted"].includes(onboardingStatus)}
              />
              <StatusStep 
                step="Agreement" 
                completed={["agreement_signed", "full_access"].includes(onboardingStatus) || agreementSigned} 
                current={onboardingStatus === "agreement_pending"}
              />
              <StatusStep 
                step="Full Access" 
                completed={onboardingStatus === "full_access"} 
                current={false}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const StatusStep = ({ step, completed, current }: { step: string; completed: boolean; current: boolean }) => (
  <div className="flex items-center gap-3">
    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
      completed 
        ? "bg-green-500 text-white" 
        : current 
          ? "bg-primary text-primary-foreground animate-pulse" 
          : "bg-muted text-muted-foreground"
    }`}>
      {completed ? <CheckCircle className="h-4 w-4" /> : current ? <Clock className="h-3 w-3" /> : ""}
    </div>
    <span className={`text-sm ${completed ? "text-foreground" : "text-muted-foreground"}`}>
      {step}
    </span>
    {current && <Badge variant="outline" className="text-xs">Current</Badge>}
  </div>
);

export default AccessGate;
