import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";
import { Clock, CheckCircle, Send, Eye, AlertCircle, XCircle, Lock, FileText } from "lucide-react";

interface AgreementHeaderProps {
  agreementId: string;
  clientName: string;
  companyName: string | null;
  agreementDate: string;
  serviceStartDate?: string;
  duration?: string;
  status: string;
  isLocked: boolean;
}

const statusConfig: Record<string, { variant: "default" | "secondary" | "destructive" | "outline"; icon: React.ReactNode; label: string }> = {
  draft: { variant: "outline", icon: <FileText className="h-3 w-3" />, label: "Draft" },
  pending: { variant: "outline", icon: <Clock className="h-3 w-3" />, label: "Draft" },
  sent: { variant: "secondary", icon: <Send className="h-3 w-3" />, label: "Sent" },
  viewed: { variant: "secondary", icon: <Eye className="h-3 w-3" />, label: "Viewed" },
  signed: { variant: "default", icon: <CheckCircle className="h-3 w-3" />, label: "Signed" },
  expired: { variant: "destructive", icon: <AlertCircle className="h-3 w-3" />, label: "Expired" },
  rejected: { variant: "destructive", icon: <XCircle className="h-3 w-3" />, label: "Rejected" }
};

export const AgreementHeader = ({
  agreementId,
  clientName,
  companyName,
  agreementDate,
  serviceStartDate,
  duration,
  status,
  isLocked
}: AgreementHeaderProps) => {
  const config = statusConfig[status] || statusConfig.pending;

  return (
    <Card className="border-2">
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Agreement ID</p>
            <p className="font-mono text-sm mt-1">{agreementId.slice(0, 8).toUpperCase()}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Client Name</p>
            <p className="font-medium mt-1">{clientName}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Company Name</p>
            <p className="font-medium mt-1">{companyName || "—"}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Status</p>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant={config.variant} className="flex items-center gap-1">
                {config.icon}
                {config.label}
              </Badge>
              {isLocked && (
                <Badge variant="outline" className="flex items-center gap-1 bg-primary/10">
                  <Lock className="h-3 w-3" />
                  Locked
                </Badge>
              )}
            </div>
          </div>
          <div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Agreement Date</p>
            <p className="mt-1">{format(new Date(agreementDate), "MMMM d, yyyy")}</p>
          </div>
          {serviceStartDate && (
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Service Start Date</p>
              <p className="mt-1">{format(new Date(serviceStartDate), "MMMM d, yyyy")}</p>
            </div>
          )}
          {duration && (
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Duration</p>
              <p className="mt-1">{duration}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AgreementHeader;
