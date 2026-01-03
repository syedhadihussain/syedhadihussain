import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useEnhancedAgreements } from "@/hooks/useEnhancedAgreements";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import SignaturePad from "@/components/portal/SignaturePad";
import {
  FileSignature,
  Clock,
  CheckCircle,
  XCircle,
  Eye,
  Send,
  History,
  FileText,
  AlertCircle,
  Lock,
  Unlock,
  Edit,
  Plus,
  DollarSign,
  Calendar,
  ListChecks,
  Shield,
  Download,
} from "lucide-react";
import { format } from "date-fns";

interface Project {
  id: string;
  name: string;
}

const PortalEnhancedAgreementsPage = () => {
  const { user, isAdmin } = useAuth();
  const {
    agreements,
    loading,
    fetchAgreements,
    createAgreement,
    updateAgreement,
    lockAgreement,
    toggleClientEdit,
    signAgreement,
    addSecondaryAgreement
  } = useEnhancedAgreements();

  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedAgreement, setSelectedAgreement] = useState<string | null>(null);
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showSignDialog, setShowSignDialog] = useState(false);
  const [showAddServiceDialog, setShowAddServiceDialog] = useState(false);
  const [auditLog, setAuditLog] = useState<any[]>([]);
  const [showAuditDialog, setShowAuditDialog] = useState(false);

  // Form state for creating agreement
  const [newAgreement, setNewAgreement] = useState({
    projectId: '',
    title: '',
    description: '',
    documentUrl: '',
    termsAndConditions: '',
    servicesIncluded: [] as string[],
    paymentAmount: '',
    paymentSchedule: '',
    extraServicesRules: '',
    latePaymentTerms: ''
  });

  const [newService, setNewService] = useState('');

  useEffect(() => {
    fetchAgreements();
    fetchProjects();
  }, [fetchAgreements]);

  const fetchProjects = async () => {
    if (!user) return;

    if (isAdmin) {
      const { data } = await supabase
        .from("projects")
        .select("id, name")
        .order("name");
      setProjects(data || []);
    } else {
      const { data: profile } = await supabase
        .from("client_profiles")
        .select("id")
        .eq("user_id", user.id)
        .maybeSingle();

      if (profile) {
        const { data } = await supabase
          .from("projects")
          .select("id, name")
          .eq("client_id", profile.id)
          .order("name");
        setProjects(data || []);
      }
    }
  };

  const handleCreateAgreement = async () => {
    if (!newAgreement.projectId || !newAgreement.title) return;

    const result = await createAgreement({
      projectId: newAgreement.projectId,
      title: newAgreement.title,
      description: newAgreement.description || undefined,
      documentUrl: newAgreement.documentUrl || '#',
      termsAndConditions: newAgreement.termsAndConditions || undefined,
      servicesIncluded: newAgreement.servicesIncluded,
      paymentAmount: newAgreement.paymentAmount ? parseFloat(newAgreement.paymentAmount) : undefined,
      paymentSchedule: newAgreement.paymentSchedule || undefined,
      extraServicesRules: newAgreement.extraServicesRules || undefined,
      latePaymentTerms: newAgreement.latePaymentTerms || undefined
    });

    if (result) {
      setShowCreateDialog(false);
      setNewAgreement({
        projectId: '',
        title: '',
        description: '',
        documentUrl: '',
        termsAndConditions: '',
        servicesIncluded: [],
        paymentAmount: '',
        paymentSchedule: '',
        extraServicesRules: '',
        latePaymentTerms: ''
      });
      fetchAgreements();
    }
  };

  const handleSign = async (signatureData: string) => {
    if (!selectedAgreement) return;
    
    const success = await signAgreement(selectedAgreement, signatureData);
    if (success) {
      setShowSignDialog(false);
      setSelectedAgreement(null);
      fetchAgreements();
    }
  };

  const handleViewAuditLog = async (agreementId: string) => {
    const { data } = await supabase
      .from("agreement_audit_log")
      .select("*")
      .eq("agreement_id", agreementId)
      .order("created_at", { ascending: true });

    setAuditLog(data || []);
    setShowAuditDialog(true);
  };

  const addServiceToList = () => {
    if (newService.trim()) {
      setNewAgreement({
        ...newAgreement,
        servicesIncluded: [...newAgreement.servicesIncluded, newService.trim()]
      });
      setNewService('');
    }
  };

  const removeService = (index: number) => {
    setNewAgreement({
      ...newAgreement,
      servicesIncluded: newAgreement.servicesIncluded.filter((_, i) => i !== index)
    });
  };

  const getStatusBadge = (status: string, isLocked: boolean) => {
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
      <div className="flex items-center gap-2">
        <Badge variant={config.variant} className="flex items-center gap-1">
          {config.icon}
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
        {isLocked && (
          <Badge variant="outline" className="flex items-center gap-1">
            <Lock className="h-3 w-3" />
            Locked
          </Badge>
        )}
      </div>
    );
  };

  const selectedAgreementData = agreements.find((a) => a.id === selectedAgreement);

  // Group agreements by type
  const primaryAgreements = agreements.filter(a => a.agreement_type === 'primary');
  const secondaryAgreements = agreements.filter(a => a.agreement_type === 'secondary');

  return (
    <>
      <Helmet>
        <title>Agreements | Client Portal</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Agreements</h1>
            <p className="text-muted-foreground mt-1">
              View and manage your service agreements and contracts.
            </p>
          </div>
          {isAdmin && (
            <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Agreement
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Create New Agreement</DialogTitle>
                  <DialogDescription>
                    Create a comprehensive service agreement with terms, services, and payment details.
                  </DialogDescription>
                </DialogHeader>

                <Tabs defaultValue="basic" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="basic">Basic Info</TabsTrigger>
                    <TabsTrigger value="services">Services</TabsTrigger>
                    <TabsTrigger value="terms">Terms & Payment</TabsTrigger>
                  </TabsList>

                  <TabsContent value="basic" className="space-y-4 mt-4">
                    <div>
                      <Label>Project</Label>
                      <Select value={newAgreement.projectId} onValueChange={(v) => setNewAgreement({ ...newAgreement, projectId: v })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select project" />
                        </SelectTrigger>
                        <SelectContent>
                          {projects.map((project) => (
                            <SelectItem key={project.id} value={project.id}>
                              {project.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Agreement Title</Label>
                      <Input
                        placeholder="e.g., SEO Services Agreement"
                        value={newAgreement.title}
                        onChange={(e) => setNewAgreement({ ...newAgreement, title: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label>Description</Label>
                      <Textarea
                        placeholder="Brief description of this agreement..."
                        value={newAgreement.description}
                        onChange={(e) => setNewAgreement({ ...newAgreement, description: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label>Document URL (optional)</Label>
                      <Input
                        placeholder="https://..."
                        value={newAgreement.documentUrl}
                        onChange={(e) => setNewAgreement({ ...newAgreement, documentUrl: e.target.value })}
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="services" className="space-y-4 mt-4">
                    <div>
                      <Label>Services Included</Label>
                      <div className="flex gap-2 mt-2">
                        <Input
                          placeholder="Add a service..."
                          value={newService}
                          onChange={(e) => setNewService(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addServiceToList())}
                        />
                        <Button type="button" onClick={addServiceToList}>Add</Button>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {newAgreement.servicesIncluded.map((service, i) => (
                          <Badge key={i} variant="secondary" className="flex items-center gap-1">
                            {service}
                            <button onClick={() => removeService(i)} className="ml-1 hover:text-destructive">×</button>
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Label>Extra Services Rules</Label>
                      <Textarea
                        placeholder="Rules for additional services beyond the agreement..."
                        value={newAgreement.extraServicesRules}
                        onChange={(e) => setNewAgreement({ ...newAgreement, extraServicesRules: e.target.value })}
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="terms" className="space-y-4 mt-4">
                    <div>
                      <Label>Terms & Conditions</Label>
                      <Textarea
                        className="min-h-[120px]"
                        placeholder="Enter the terms and conditions for this agreement..."
                        value={newAgreement.termsAndConditions}
                        onChange={(e) => setNewAgreement({ ...newAgreement, termsAndConditions: e.target.value })}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Payment Amount</Label>
                        <Input
                          type="number"
                          placeholder="0.00"
                          value={newAgreement.paymentAmount}
                          onChange={(e) => setNewAgreement({ ...newAgreement, paymentAmount: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label>Payment Schedule</Label>
                        <Input
                          placeholder="e.g., Monthly on 1st"
                          value={newAgreement.paymentSchedule}
                          onChange={(e) => setNewAgreement({ ...newAgreement, paymentSchedule: e.target.value })}
                        />
                      </div>
                    </div>
                    <div>
                      <Label>Late Payment Terms</Label>
                      <Textarea
                        placeholder="Consequences and fees for late payments..."
                        value={newAgreement.latePaymentTerms}
                        onChange={(e) => setNewAgreement({ ...newAgreement, latePaymentTerms: e.target.value })}
                      />
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="flex justify-end gap-2 mt-4">
                  <Button variant="outline" onClick={() => setShowCreateDialog(false)}>Cancel</Button>
                  <Button onClick={handleCreateAgreement}>Create Agreement</Button>
                </div>
              </DialogContent>
            </Dialog>
          )}
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
          <div className="space-y-6">
            {/* Primary Agreements */}
            {primaryAgreements.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Primary Service Agreements
                </h2>
                <div className="grid gap-4">
                  {primaryAgreements.map((agreement) => (
                    <AgreementCard
                      key={agreement.id}
                      agreement={agreement}
                      isAdmin={isAdmin}
                      onSign={() => {
                        setSelectedAgreement(agreement.id);
                        setShowSignDialog(true);
                      }}
                      onViewAudit={() => handleViewAuditLog(agreement.id)}
                      onToggleEdit={(canEdit) => toggleClientEdit(agreement.id, canEdit)}
                      onLock={() => lockAgreement(agreement.id)}
                      onAddService={() => {
                        setSelectedAgreement(agreement.id);
                        setShowAddServiceDialog(true);
                      }}
                      fetchAgreements={fetchAgreements}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Secondary Agreements */}
            {secondaryAgreements.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  Additional Service Agreements
                </h2>
                <div className="grid gap-4">
                  {secondaryAgreements.map((agreement) => (
                    <AgreementCard
                      key={agreement.id}
                      agreement={agreement}
                      isAdmin={isAdmin}
                      onSign={() => {
                        setSelectedAgreement(agreement.id);
                        setShowSignDialog(true);
                      }}
                      onViewAudit={() => handleViewAuditLog(agreement.id)}
                      onToggleEdit={(canEdit) => toggleClientEdit(agreement.id, canEdit)}
                      onLock={() => lockAgreement(agreement.id)}
                      fetchAgreements={fetchAgreements}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Sign Dialog */}
        <Dialog open={showSignDialog} onOpenChange={setShowSignDialog}>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Sign Agreement</DialogTitle>
              <DialogDescription>
                Please review the agreement and provide your signature below.
                This action is legally binding and will lock the agreement.
              </DialogDescription>
            </DialogHeader>
            {selectedAgreementData && (
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg space-y-3">
                  <p className="font-medium">{selectedAgreementData.title}</p>
                  
                  {selectedAgreementData.services_included && selectedAgreementData.services_included.length > 0 && (
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Services Included:</p>
                      <div className="flex flex-wrap gap-1">
                        {selectedAgreementData.services_included.map((s, i) => (
                          <Badge key={i} variant="outline" className="text-xs">{String(s)}</Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedAgreementData.payment_amount && (
                    <p className="text-sm">
                      <span className="font-medium">Payment:</span> ${selectedAgreementData.payment_amount}
                      {selectedAgreementData.payment_schedule && ` - ${selectedAgreementData.payment_schedule}`}
                    </p>
                  )}

                  {selectedAgreementData.terms_and_conditions && (
                    <div className="mt-2">
                      <p className="text-sm font-medium text-muted-foreground mb-1">Terms & Conditions:</p>
                      <ScrollArea className="h-24 rounded border p-2 text-xs">
                        {selectedAgreementData.terms_and_conditions}
                      </ScrollArea>
                    </div>
                  )}

                  <p className="text-sm text-muted-foreground">
                    By signing, you agree to all terms and conditions outlined in this agreement.
                  </p>
                </div>
                <SignaturePad onSave={handleSign} />
              </div>
            )}
          </DialogContent>
        </Dialog>

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

// Agreement Card Component
interface AgreementCardProps {
  agreement: any;
  isAdmin: boolean;
  onSign: () => void;
  onViewAudit: () => void;
  onToggleEdit: (canEdit: boolean) => void;
  onLock: () => void;
  onAddService?: () => void;
  fetchAgreements: () => void;
}

const AgreementCard = ({
  agreement,
  isAdmin,
  onSign,
  onViewAudit,
  onToggleEdit,
  onLock,
  onAddService,
  fetchAgreements
}: AgreementCardProps) => {
  const canClientSign = !agreement.is_locked && agreement.status !== 'signed' && agreement.status !== 'rejected';
  const canClientEdit = agreement.client_can_edit && !agreement.is_locked;

  return (
    <Card className={agreement.is_locked ? "border-primary/20" : ""}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg flex items-center gap-2">
              <FileText className="h-5 w-5" />
              {agreement.title}
              {agreement.agreement_type === 'secondary' && (
                <Badge variant="outline" className="text-xs">Additional</Badge>
              )}
            </CardTitle>
            {agreement.description && (
              <CardDescription>{agreement.description}</CardDescription>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Badge variant={agreement.status === 'signed' ? 'default' : 'outline'} className="flex items-center gap-1">
              {agreement.status === 'signed' ? <CheckCircle className="h-3 w-3" /> : <Clock className="h-3 w-3" />}
              {(agreement.status || 'pending').charAt(0).toUpperCase() + (agreement.status || 'pending').slice(1)}
            </Badge>
            {agreement.is_locked && (
              <Badge variant="secondary" className="flex items-center gap-1">
                <Lock className="h-3 w-3" />
                Locked
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {/* Services Included */}
        {agreement.services_included && agreement.services_included.length > 0 && (
          <div className="mb-4">
            <p className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-1">
              <ListChecks className="h-4 w-4" />
              Services Included
            </p>
            <div className="flex flex-wrap gap-2">
              {agreement.services_included.map((service: string, i: number) => (
                <Badge key={i} variant="outline">{service}</Badge>
              ))}
            </div>
          </div>
        )}

        {/* Payment Info */}
        {agreement.payment_amount && (
          <div className="mb-4 flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-1">
              <DollarSign className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">${agreement.payment_amount}</span>
            </div>
            {agreement.payment_schedule && (
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>{agreement.payment_schedule}</span>
              </div>
            )}
          </div>
        )}

        {/* Terms Preview */}
        {agreement.terms_and_conditions && (
          <div className="mb-4 p-3 bg-muted rounded-lg">
            <p className="text-sm font-medium mb-1">Terms & Conditions</p>
            <p className="text-xs text-muted-foreground line-clamp-2">
              {agreement.terms_and_conditions}
            </p>
          </div>
        )}

        {/* Late Payment Terms */}
        {agreement.late_payment_terms && (
          <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/10 rounded-lg border border-red-200 dark:border-red-900/20">
            <p className="text-sm font-medium text-red-700 dark:text-red-400 mb-1 flex items-center gap-1">
              <AlertCircle className="h-4 w-4" />
              Late Payment Policy
            </p>
            <p className="text-xs text-red-600 dark:text-red-300">
              {agreement.late_payment_terms}
            </p>
          </div>
        )}

        {/* Dates */}
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
          <div>
            <span className="font-medium">Created:</span>{" "}
            {format(new Date(agreement.created_at), "MMM d, yyyy")}
          </div>
          {agreement.signed_at && (
            <div>
              <span className="font-medium">Signed:</span>{" "}
              {format(new Date(agreement.signed_at), "MMM d, yyyy h:mm a")}
            </div>
          )}
        </div>

        <Separator className="my-4" />

        {/* Actions */}
        <div className="flex flex-wrap gap-2">
          {agreement.document_url && agreement.document_url !== '#' && (
            <Button variant="outline" size="sm" asChild>
              <a href={agreement.document_url} target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4 mr-2" />
                View Document
              </a>
            </Button>
          )}

          {canClientSign && !isAdmin && (
            <Button size="sm" onClick={onSign}>
              <FileSignature className="h-4 w-4 mr-2" />
              Sign Agreement
            </Button>
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

          {isAdmin && (
            <>
              <Button variant="ghost" size="sm" onClick={onViewAudit}>
                <History className="h-4 w-4 mr-2" />
                Audit Log
              </Button>

              {!agreement.is_locked && (
                <>
                  <div className="flex items-center gap-2 px-2">
                    <Switch
                      checked={agreement.client_can_edit}
                      onCheckedChange={onToggleEdit}
                    />
                    <span className="text-sm">Client Edit</span>
                  </div>

                  <Button variant="outline" size="sm" onClick={onLock}>
                    <Lock className="h-4 w-4 mr-2" />
                    Lock
                  </Button>
                </>
              )}

              {agreement.agreement_type === 'primary' && onAddService && (
                <Button variant="outline" size="sm" onClick={onAddService}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Service Agreement
                </Button>
              )}
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PortalEnhancedAgreementsPage;
