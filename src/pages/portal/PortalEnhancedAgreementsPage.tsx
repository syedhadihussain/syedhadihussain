import { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { useEnhancedAgreements, EnhancedAgreement } from "@/hooks/useEnhancedAgreements";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AgreementDetailView } from "@/components/portal/agreement";
import {
  FileSignature,
  Clock,
  CheckCircle,
  XCircle,
  Eye,
  Send,
  FileText,
  AlertCircle,
  Lock,
  Plus,
  DollarSign,
  Calendar,
  ListChecks,
  Shield,
  Download,
  ChevronRight,
} from "lucide-react";
import { format } from "date-fns";

interface Project {
  id: string;
  name: string;
}

interface ClientProfile {
  id: string;
  user_id: string;
  company_name: string | null;
}

const PortalEnhancedAgreementsPage = () => {
  const { user, isAdmin } = useAuth();
  const {
    agreements,
    loading,
    fetchAgreements,
    createAgreement,
  } = useEnhancedAgreements();

  const [projects, setProjects] = useState<Project[]>([]);
  const [clientProfile, setClientProfile] = useState<ClientProfile | null>(null);
  const [clientName, setClientName] = useState("");
  const [selectedAgreementId, setSelectedAgreementId] = useState<string | null>(null);
  const [showCreateDialog, setShowCreateDialog] = useState(false);

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

  const fetchClientInfo = useCallback(async () => {
    if (!user) return;

    // Get user's profile name
    const { data: profile } = await supabase
      .from("profiles")
      .select("full_name, email")
      .eq("id", user.id)
      .maybeSingle();

    if (profile) {
      setClientName(profile.full_name || profile.email || "Client");
    }

    // Get client profile
    const { data: clientProfileData } = await supabase
      .from("client_profiles")
      .select("id, user_id, company_name")
      .eq("user_id", user.id)
      .maybeSingle();

    if (clientProfileData) {
      setClientProfile(clientProfileData);
    }
  }, [user]);

  useEffect(() => {
    fetchAgreements();
    fetchProjects();
    fetchClientInfo();
  }, [fetchAgreements, fetchClientInfo]);

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
          <Badge variant="outline" className="flex items-center gap-1 bg-primary/10">
            <Lock className="h-3 w-3" />
            Locked
          </Badge>
        )}
      </div>
    );
  };

  // Find selected agreement
  const selectedAgreement = agreements.find((a) => a.id === selectedAgreementId);

  // If viewing a specific agreement
  if (selectedAgreement) {
    return (
      <>
        <Helmet>
          <title>{selectedAgreement.title} | Agreement | Client Portal</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>

        <AgreementDetailView
          agreement={selectedAgreement}
          clientName={clientName}
          companyName={clientProfile?.company_name || null}
          isAdmin={isAdmin}
          isClient={!isAdmin}
          userId={user?.id || ""}
          onBack={() => setSelectedAgreementId(null)}
          onRefresh={fetchAgreements}
        />
      </>
    );
  }

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
                    <AgreementListCard
                      key={agreement.id}
                      agreement={agreement}
                      getStatusBadge={getStatusBadge}
                      onClick={() => setSelectedAgreementId(agreement.id)}
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
                    <AgreementListCard
                      key={agreement.id}
                      agreement={agreement}
                      getStatusBadge={getStatusBadge}
                      onClick={() => setSelectedAgreementId(agreement.id)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

// Agreement List Card Component
interface AgreementListCardProps {
  agreement: any;
  getStatusBadge: (status: string, isLocked: boolean) => React.ReactNode;
  onClick: () => void;
}

const AgreementListCard = ({ agreement, getStatusBadge, onClick }: AgreementListCardProps) => {
  const servicesIncluded = Array.isArray(agreement.services_included) ? agreement.services_included : [];
  
  return (
    <Card 
      className={`cursor-pointer transition-all hover:shadow-md hover:border-primary/50 ${
        agreement.is_locked ? "border-primary/20" : ""
      }`}
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1 flex-1">
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
            {getStatusBadge(agreement.status || 'pending', agreement.is_locked)}
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {/* Services Preview */}
        {servicesIncluded.length > 0 && (
          <div className="mb-4">
            <p className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-1">
              <ListChecks className="h-4 w-4" />
              Services ({servicesIncluded.length})
            </p>
            <div className="flex flex-wrap gap-2">
              {servicesIncluded.slice(0, 3).map((service: any, i: number) => (
                <Badge key={i} variant="outline">
                  {typeof service === 'string' ? service : service.name}
                </Badge>
              ))}
              {servicesIncluded.length > 3 && (
                <Badge variant="secondary">+{servicesIncluded.length - 3} more</Badge>
              )}
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

        <Separator className="my-3" />

        {/* Dates */}
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div>
            <span className="font-medium">Created:</span>{" "}
            {format(new Date(agreement.created_at), "MMM d, yyyy")}
          </div>
          {agreement.signed_at && (
            <div>
              <span className="font-medium">Signed:</span>{" "}
              {format(new Date(agreement.signed_at), "MMM d, yyyy")}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PortalEnhancedAgreementsPage;
