import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import {
  FolderKanban,
  Calendar,
  Clock,
  CheckCircle2,
  PauseCircle,
  PlayCircle,
  AlertCircle,
  Plus,
  CreditCard,
  ArrowRight,
  Sparkles,
  FileSignature,
  Receipt,
  Settings,
} from "lucide-react";

interface Project {
  id: string;
  name: string;
  description: string | null;
  status: string | null;
  services: string[] | null;
  timeline_start: string | null;
  timeline_end: string | null;
  created_at: string;
}

interface Subscription {
  id: string;
  plan_name: string;
  plan_price: number | null;
  billing_cycle: string | null;
  status: string | null;
}

interface ClientProfile {
  id: string;
  client_id: string;
  company_name: string | null;
  subscription_plan: string | null;
  active_plan_details: unknown;
}

const AVAILABLE_PLANS = [
  { name: 'starter', price: 299, description: '3 Active Projects, Priority Support' },
  { name: 'professional', price: 599, description: '10 Active Projects, 24/7 Support' },
  { name: 'enterprise', price: 999, description: 'Unlimited Projects, Dedicated Support' },
];

const AVAILABLE_SERVICES = [
  'SEO Services',
  'Content Writing',
  'Web Development',
  'Social Media Management',
  'PPC Advertising',
  'Graphic Design',
  'Branding',
];

const PortalMultiProjectPage = () => {
  const { user, isAdmin } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);
  const [clientProfile, setClientProfile] = useState<ClientProfile | null>(null);
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showAddProjectDialog, setShowAddProjectDialog] = useState(false);
  const [showSubscribeDialog, setShowSubscribeDialog] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    services: [] as string[]
  });

  useEffect(() => {
    fetchData();
  }, [user]);

  const fetchData = async () => {
    if (!user) return;

    try {
      const { data: profileData } = await supabase
        .from("client_profiles")
        .select("*")
        .eq("user_id", user.id)
        .maybeSingle();

      if (profileData) {
        setClientProfile(profileData);

        // Fetch projects
        const { data: projectsData } = await supabase
          .from("projects")
          .select("*")
          .eq("client_id", profileData.id)
          .order("created_at", { ascending: false });

        setProjects(projectsData || []);

        // Fetch subscription
        const { data: subscriptionData } = await supabase
          .from("subscription_info")
          .select("*")
          .eq("client_id", profileData.id)
          .maybeSingle();

        setSubscription(subscriptionData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddProject = async () => {
    if (!newProject.name || !clientProfile) return;

    // Check if user has subscription for adding more projects
    const maxProjects = getMaxProjectsForPlan(subscription?.plan_name || 'free');
    if (projects.length >= maxProjects) {
      setShowAddProjectDialog(false);
      setShowSubscribeDialog(true);
      return;
    }

    const { data, error } = await supabase
      .from("projects")
      .insert({
        client_id: clientProfile.id,
        name: newProject.name,
        description: newProject.description,
        services: newProject.services,
        status: 'active'
      })
      .select()
      .single();

    if (error) {
      console.error("Error creating project:", error);
      toast.error("Failed to create project");
      return;
    }

    toast.success("Project created successfully!");
    setNewProject({ name: '', description: '', services: [] });
    setShowAddProjectDialog(false);
    fetchData();
  };

  const handleSubscribe = async () => {
    if (!selectedPlan || !clientProfile) return;

    const planDetails = AVAILABLE_PLANS.find(p => p.name === selectedPlan);
    if (!planDetails) return;

    // Create or update subscription
    const { error } = await supabase
      .from("subscription_info")
      .upsert({
        client_id: clientProfile.id,
        plan_name: selectedPlan,
        plan_price: planDetails.price,
        billing_cycle: 'monthly',
        status: 'active',
        current_period_start: new Date().toISOString(),
        current_period_end: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
      });

    if (error) {
      console.error("Error subscribing:", error);
      toast.error("Failed to subscribe");
      return;
    }

    // Update client profile
    await supabase
      .from("client_profiles")
      .update({
        subscription_plan: selectedPlan,
        active_plan_details: { plan: selectedPlan, price: planDetails.price }
      })
      .eq("id", clientProfile.id);

    toast.success(`Subscribed to ${selectedPlan} plan!`);
    setShowSubscribeDialog(false);
    setSelectedPlan('');
    fetchData();
    
    // Reopen add project dialog
    setShowAddProjectDialog(true);
  };

  const getMaxProjectsForPlan = (plan: string): number => {
    switch (plan) {
      case 'starter': return 3;
      case 'professional': return 10;
      case 'enterprise': return 999;
      default: return 1;
    }
  };

  const getStatusIcon = (status: string | null) => {
    switch (status) {
      case "active":
        return <PlayCircle className="h-5 w-5 text-green-500" />;
      case "in_progress":
        return <Clock className="h-5 w-5 text-blue-500" />;
      case "on_hold":
        return <PauseCircle className="h-5 w-5 text-yellow-500" />;
      case "completed":
        return <CheckCircle2 className="h-5 w-5 text-primary" />;
      default:
        return <AlertCircle className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string | null) => {
    switch (status) {
      case "active":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "in_progress":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "on_hold":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "completed":
        return "bg-primary/10 text-primary border-primary/20";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  const calculateProgress = (status: string | null) => {
    switch (status) {
      case "completed": return 100;
      case "in_progress": return 60;
      case "active": return 30;
      case "on_hold": return 45;
      default: return 0;
    }
  };

  const formatDate = (date: string | null) => {
    if (!date) return "Not set";
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const toggleService = (service: string) => {
    if (newProject.services.includes(service)) {
      setNewProject({ ...newProject, services: newProject.services.filter(s => s !== service) });
    } else {
      setNewProject({ ...newProject, services: [...newProject.services, service] });
    }
  };

  const maxProjects = getMaxProjectsForPlan(subscription?.plan_name || 'free');
  const canAddProject = projects.length < maxProjects;

  return (
    <>
      <Helmet>
        <title>Projects | Client Portal</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Projects</h1>
            <p className="text-muted-foreground mt-1">
              Manage all your projects in one place.
            </p>
          </div>
          <Button onClick={() => setShowAddProjectDialog(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Project
          </Button>
        </div>

        {/* Plan Info Card */}
        <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Current Plan</p>
                  <p className="text-xl font-bold capitalize">
                    {subscription?.plan_name || clientProfile?.subscription_plan || 'Free'}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Projects</p>
                <p className="text-xl font-bold">
                  {projects.length} / {maxProjects === 999 ? '∞' : maxProjects}
                </p>
              </div>
              {!subscription || subscription.plan_name === 'free' ? (
                <Button onClick={() => setShowSubscribeDialog(true)}>
                  <CreditCard className="h-4 w-4 mr-2" />
                  Upgrade Plan
                </Button>
              ) : (
                <Badge variant="outline" className="px-4 py-2">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                  Active Subscription
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Projects Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-64" />
            ))}
          </div>
        ) : projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(project.status)}
                      <div>
                        <CardTitle className="text-lg">{project.name}</CardTitle>
                        <CardDescription className="mt-1">
                          {project.description || "No description provided"}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge className={getStatusColor(project.status)}>
                      {project.status?.replace("_", " ") || "Active"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{calculateProgress(project.status)}%</span>
                    </div>
                    <Progress value={calculateProgress(project.status)} className="h-2" />
                  </div>

                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Start: {formatDate(project.timeline_start)}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>End: {formatDate(project.timeline_end)}</span>
                    </div>
                  </div>

                  {project.services && project.services.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <FileSignature className="h-4 w-4 mr-2" />
                      Agreements
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Receipt className="h-4 w-4 mr-2" />
                      Invoices
                    </Button>
                    <Button variant="outline" size="sm">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="py-12">
              <div className="text-center">
                <FolderKanban className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
                <h3 className="text-lg font-semibold mb-2">No Projects Yet</h3>
                <p className="text-muted-foreground mb-4">
                  Create your first project to get started.
                </p>
                <Button onClick={() => setShowAddProjectDialog(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Project
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Add Project Dialog */}
        <Dialog open={showAddProjectDialog} onOpenChange={setShowAddProjectDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Project</DialogTitle>
              <DialogDescription>
                Create a new project. {!canAddProject && "You've reached your plan limit. Please upgrade to add more projects."}
              </DialogDescription>
            </DialogHeader>

            {canAddProject ? (
              <div className="space-y-4">
                <div>
                  <Label>Project Name</Label>
                  <Input
                    placeholder="e.g., Website Redesign"
                    value={newProject.name}
                    onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                  />
                </div>
                <div>
                  <Label>Description</Label>
                  <Textarea
                    placeholder="Describe your project..."
                    value={newProject.description}
                    onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                  />
                </div>
                <div>
                  <Label>Services</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {AVAILABLE_SERVICES.map((service) => (
                      <Badge
                        key={service}
                        variant={newProject.services.includes(service) ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => toggleService(service)}
                      >
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button onClick={handleAddProject} className="w-full">
                  Create Project
                </Button>
              </div>
            ) : (
              <div className="text-center py-6">
                <CreditCard className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="mb-4">Upgrade your plan to add more projects.</p>
                <Button onClick={() => {
                  setShowAddProjectDialog(false);
                  setShowSubscribeDialog(true);
                }}>
                  View Plans
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Subscribe Dialog */}
        <Dialog open={showSubscribeDialog} onOpenChange={setShowSubscribeDialog}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Choose Your Plan</DialogTitle>
              <DialogDescription>
                Select a plan that fits your needs. Upgrade anytime.
              </DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {AVAILABLE_PLANS.map((plan) => (
                <Card
                  key={plan.name}
                  className={`cursor-pointer transition-all ${
                    selectedPlan === plan.name
                      ? "border-primary ring-2 ring-primary/20"
                      : "hover:border-primary/50"
                  }`}
                  onClick={() => setSelectedPlan(plan.name)}
                >
                  <CardHeader>
                    <CardTitle className="capitalize">{plan.name}</CardTitle>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold">${plan.price}</span>
                      <span className="text-muted-foreground">/mo</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <Button variant="outline" onClick={() => setShowSubscribeDialog(false)}>
                Cancel
              </Button>
              <Button onClick={handleSubscribe} disabled={!selectedPlan}>
                Subscribe to {selectedPlan || 'Plan'}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default PortalMultiProjectPage;
