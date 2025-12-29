import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileSignature, Clock, CheckCircle, XCircle, Eye, Send, History, FileText, AlertCircle } from "lucide-react";
import { useDocumentSigning } from "@/hooks/useDocumentSigning";
import { useAuth } from "@/hooks/useAuth";
import SignaturePad from "@/components/portal/SignaturePad";
import { format } from "date-fns";

const PortalAgreementsPage = () => {
  const { user, isAdmin } = useAuth();
  const {
    agreements,
    loading,
    fetchAgreements,
    sendAgreement,
    markAsViewed,
    signAgreement,
    rejectAgreement,
    getAuditLog
  } = useDocumentSigning();

  const [selectedAgreement, setSelectedAgreement] = useState<string | null>(null);
  const [auditLog, setAuditLog] = useState<any[]>([]);
  const [showSignDialog, setShowSignDialog] = useState(false);
  const [showAuditDialog, setShowAuditDialog] = useState(false);

  useEffect(() => {
    fetchAgreements();
  }, [fetchAgreements]);

  const handleViewAgreement = async (agreementId: string) => {
    setSelectedAgreement(agreementId);
    await markAsViewed(agreementId);
  };

  const handleSignAgreement = async (signatureData: string) => {
    if (!selectedAgreement) return;
    
    const success = await signAgreement(selectedAgreement, signatureData);
    if (success) {
      setShowSignDialog(false);
      setSelectedAgreement(null);
      fetchAgreements();
    }
  };

  const handleViewAuditLog = async (agreementId: string) => {
    const log = await getAuditLog(agreementId);
    setAuditLog(log);
    setShowAuditDialog(true);
  };

  const getStatusBadge = (status: string) => {
    const statusConfig: Record<string, { variant: "default" | "secondary" | "destructive" | "outline"; icon: React.ReactNode }> = {
      pending: { variant: "outline", icon: <Clock className="h-3 w-3" /> },
      sent: { variant: "secondary", icon: <Send className="h-3 w-3" /> },
      viewed: { variant: "secondary", icon: <Eye className="h-3 w-3" /> },
      signed: { variant: "default", icon: <CheckCircle className="h-3 w-3" /> },
      expired: { variant: "destructive", icon: <AlertCircle className="h-3 w-3" /> },
      rejected: { variant: "destructive", icon: <XCircle className="h-3 w-3" /> }
    };

    const config = statusConfig[status] || statusConfig.pending;

    return (
      <Badge variant={config.variant} className="flex items-center gap-1">
        {config.icon}
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  const selectedAgreementData = agreements.find((a) => a.id === selectedAgreement);

  return (
    <>
      <Helmet>
        <title>Agreements | Client Portal</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Agreements</h1>
          <p className="text-muted-foreground mt-1">
            View and sign your project agreements and contracts.
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <p className="text-muted-foreground">Loading agreements...</p>
          </div>
        ) : agreements.length === 0 ? (
          <Card>
            <CardContent className="py-12">
              <div className="text-center text-muted-foreground">
                <FileSignature className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium">No agreements yet</p>
                <p className="text-sm">
                  Agreements and contracts will appear here when they're ready for your review.
                </p>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {agreements.map((agreement) => (
              <Card key={agreement.id}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        {agreement.title}
                      </CardTitle>
                      {agreement.description && (
                        <CardDescription>{agreement.description}</CardDescription>
                      )}
                    </div>
                    {getStatusBadge(agreement.status || 'pending')}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div>
                      <span className="font-medium">Created:</span>{" "}
                      {format(new Date(agreement.created_at), "MMM d, yyyy")}
                    </div>
                    {agreement.sent_at && (
                      <div>
                        <span className="font-medium">Sent:</span>{" "}
                        {format(new Date(agreement.sent_at), "MMM d, yyyy")}
                      </div>
                    )}
                    {agreement.viewed_at && (
                      <div>
                        <span className="font-medium">Viewed:</span>{" "}
                        {format(new Date(agreement.viewed_at), "MMM d, yyyy")}
                      </div>
                    )}
                    {agreement.signed_at && (
                      <div>
                        <span className="font-medium">Signed:</span>{" "}
                        {format(new Date(agreement.signed_at), "MMM d, yyyy h:mm a")}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(agreement.document_url, "_blank")}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View Document
                    </Button>

                    {agreement.status !== "signed" && agreement.status !== "rejected" && (
                      <Dialog open={showSignDialog && selectedAgreement === agreement.id} onOpenChange={(open) => {
                        setShowSignDialog(open);
                        if (open) {
                          handleViewAgreement(agreement.id);
                        }
                      }}>
                        <DialogTrigger asChild>
                          <Button size="sm">
                            <FileSignature className="h-4 w-4 mr-2" />
                            Sign Agreement
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-lg">
                          <DialogHeader>
                            <DialogTitle>Sign Agreement</DialogTitle>
                            <DialogDescription>
                              Please review the document and provide your signature below.
                              This action is legally binding.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="p-4 bg-muted rounded-lg">
                              <p className="font-medium">{agreement.title}</p>
                              <p className="text-sm text-muted-foreground mt-1">
                                By signing, you agree to the terms and conditions outlined in this document.
                              </p>
                            </div>
                            <SignaturePad
                              onSave={handleSignAgreement}
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}

                    {isAdmin && (
                      <>
                        {agreement.status === "pending" && (
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => sendAgreement(agreement.id)}
                          >
                            <Send className="h-4 w-4 mr-2" />
                            Send to Client
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleViewAuditLog(agreement.id)}
                        >
                          <History className="h-4 w-4 mr-2" />
                          Audit Log
                        </Button>
                      </>
                    )}

                    {agreement.signature_data && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            View Signature
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Digital Signature</DialogTitle>
                            <DialogDescription>
                              Signature captured on {agreement.signed_at && format(new Date(agreement.signed_at), "MMMM d, yyyy 'at' h:mm a")}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="border rounded-lg p-4 bg-background">
                            <img
                              src={agreement.signature_data}
                              alt="Digital signature"
                              className="max-w-full h-auto"
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Audit Log Dialog */}
        <Dialog open={showAuditDialog} onOpenChange={setShowAuditDialog}>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Audit Log</DialogTitle>
              <DialogDescription>
                Complete history of actions taken on this agreement.
              </DialogDescription>
            </DialogHeader>
            <ScrollArea className="max-h-96">
              <div className="space-y-3">
                {auditLog.map((entry) => (
                  <div
                    key={entry.id}
                    className="flex items-start gap-3 p-3 bg-muted rounded-lg"
                  >
                    <History className="h-4 w-4 mt-0.5 text-muted-foreground" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm">
                        {entry.action.charAt(0).toUpperCase() + entry.action.slice(1)}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {format(new Date(entry.created_at), "MMM d, yyyy 'at' h:mm a")}
                      </p>
                      {entry.user_agent && (
                        <p className="text-xs text-muted-foreground mt-1 truncate">
                          {entry.user_agent}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default PortalAgreementsPage;
