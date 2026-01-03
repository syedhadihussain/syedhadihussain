import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";
import {
  FolderKanban,
  MessageSquare,
  FileText,
  ArrowRight,
  User,
  Building2,
  Hash,
  CreditCard,
  CheckCircle2,
  Clock,
  AlertCircle,
  Target,
  TrendingUp,
  FileSignature,
  Sparkles,
  Receipt,
  Calendar,
} from "lucide-react";
import { Link } from "react-router-dom";

interface ClientProfile {
  id: string;
  client_id: string;
  company_name: string | null;
  country: string | null;
  subscription_plan: string | null;
  billing_status: string | null;
  account_status: string | null;
}

interface Project {
  id: string;
  name: string;
  status: string | null;
  description: string | null;
  timeline_start: string | null;
  timeline_end: string | null;
}

interface Milestone {
  id: string;
  title: string;
  status: string | null;
  due_date: string | null;
  project_id: string;
}

interface Agreement {
  id: string;
  title: string;
  status: string | null;
  project_id: string;
}

interface Message {
  id: string;
  content: string;
  is_read: boolean;
  created_at: string;
  sender_id: string;
}

interface Subscription {
  id: string;
  plan_name: string;
  plan_price: number | null;
  billing_cycle: string | null;
  status: string | null;
  current_period_end: string | null;
}

const PortalDashboardPage = () => {
  const { user, isAdmin, isModerator } = useAuth();
  const [profile, setProfile] = useState<ClientProfile | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [pendingAgreements, setPendingAgreements] = useState<Agreement[]>([]);
  const [unreadMessages, setUnreadMessages] = useState<number>(0);
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [pendingInvoices, setPendingInvoices] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!user) return;

      try {
        // Fetch client profile
        const { data: profileData } = await supabase
          .from("client_profiles")
          .select("*")
          .eq("user_id", user.id)
          .maybeSingle();

        if (profileData) {
          setProfile(profileData);

          // Fetch projects for this client
          const { data: projectsData } = await supabase
            .from("projects")
            .select("*")
            .eq("client_id", profileData.id)
            .order("created_at", { ascending: false })
            .limit(5);

          setProjects(projectsData || []);

          // Fetch project IDs for further queries
          const projectIds = (projectsData || []).map(p => p.id);

          if (projectIds.length > 0) {
            // Fetch milestones
            const { data: milestonesData } = await supabase
              .from("milestones")
              .select("*")
              .in("project_id", projectIds)
              .in("status", ["pending", "in_progress"])
              .order("due_date", { ascending: true })
              .limit(5);

            setMilestones(milestonesData || []);

            // Fetch pending agreements
            const { data: agreementsData } = await supabase
              .from("document_agreements")
              .select("*")
              .in("project_id", projectIds)
              .in("status", ["pending", "sent", "viewed"])
              .order("created_at", { ascending: false });

            setPendingAgreements(agreementsData || []);
          }

          // Fetch subscription info
          const { data: subscriptionData } = await supabase
            .from("subscription_info")
            .select("*")
            .eq("client_id", profileData.id)
            .maybeSingle();

          setSubscription(subscriptionData);

          // Fetch pending invoices count
          const { count: invoiceCount } = await supabase
            .from("invoices")
            .select("*", { count: "exact", head: true })
            .eq("client_id", profileData.id)
            .eq("status", "pending");

          setPendingInvoices(invoiceCount || 0);

          // Fetch unread message count
          const { data: conversationsData } = await supabase
            .from("conversation_participants")
            .select("conversation_id")
            .eq("user_id", user.id);

          if (conversationsData && conversationsData.length > 0) {
            const conversationIds = conversationsData.map(c => c.conversation_id);
            
            const { count } = await supabase
              .from("messages")
              .select("*", { count: "exact", head: true })
              .in("conversation_id", conversationIds)
              .eq("is_read", false)
              .neq("sender_id", user.id);

            setUnreadMessages(count || 0);
          }
        }
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [user]);

  const getStatusColor = (status: string | null) => {
    switch (status) {
      case "active":
      case "completed":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "in_progress":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "on_hold":
      case "pending":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "blocked":
        return "bg-red-500/10 text-red-500 border-red-500/20";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  const getProjectProgress = (project: Project) => {
    switch (project.status) {
      case "completed": return 100;
      case "in_progress": return 60;
      case "active": return 30;
      case "on_hold": return 20;
      default: return 0;
    }
  };

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "No date";
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  const activeProjects = projects.filter(p => p.status === "active" || p.status === "in_progress");
  const completedProjects = projects.filter(p => p.status === "completed");

  const stats = [
    {
      label: "Active Projects",
      value: activeProjects.length,
      icon: FolderKanban,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      label: "Unread Messages",
      value: unreadMessages,
      icon: MessageSquare,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      link: "/en/portal/messages",
    },
    {
      label: "Pending Approvals",
      value: pendingAgreements.length,
      icon: FileSignature,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      link: "/en/portal/agreements",
    },
    {
      label: "Upcoming Milestones",
      value: milestones.length,
      icon: Target,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Dashboard | Client Portal</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Welcome back!</h1>
            <p className="text-muted-foreground mt-1">
              Here's an overview of your account and projects.
            </p>
          </div>
          {(isAdmin || isModerator) && (
            <Button asChild>
              <Link to="/en/portal/admin/analytics">
                <TrendingUp className="h-4 w-4 mr-2" />
                View Analytics
              </Link>
            </Button>
          )}
        </div>

        {/* Profile Card */}
        <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Your Profile
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton key={i} className="h-16" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <Hash className="h-3 w-3" />
                    Client ID
                  </p>
                  <p className="font-mono font-medium">{profile?.client_id || "N/A"}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <Building2 className="h-3 w-3" />
                    Company
                  </p>
                  <p className="font-medium">{profile?.company_name || "Not set"}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <CreditCard className="h-3 w-3" />
                    Plan
                  </p>
                  <Badge variant="outline" className="capitalize">
                    {profile?.subscription_plan || "Free"}
                  </Badge>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Status</p>
                  <Badge className={getStatusColor(profile?.account_status)}>
                    {profile?.account_status || "Active"}
                  </Badge>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-full ${stat.bgColor}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
                {stat.link && stat.value > 0 && (
                  <Button variant="link" size="sm" className="px-0 mt-2" asChild>
                    <Link to={stat.link}>View all →</Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pending Approvals */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-orange-500" />
                  Pending Approvals
                </CardTitle>
                <CardDescription>Documents awaiting your signature</CardDescription>
              </div>
              {pendingAgreements.length > 0 && (
                <Button variant="outline" size="sm" asChild>
                  <Link to="/en/portal/agreements">
                    View All
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              )}
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="space-y-3">
                  {Array.from({ length: 2 }).map((_, i) => (
                    <Skeleton key={i} className="h-14" />
                  ))}
                </div>
              ) : pendingAgreements.length > 0 ? (
                <div className="space-y-3">
                  {pendingAgreements.slice(0, 3).map((agreement) => (
                    <div
                      key={agreement.id}
                      className="flex items-center justify-between p-3 rounded-lg border border-orange-200 bg-orange-50 dark:border-orange-900/30 dark:bg-orange-900/10"
                    >
                      <div className="flex items-center gap-3">
                        <FileSignature className="h-5 w-5 text-orange-500" />
                        <span className="font-medium">{agreement.title}</span>
                      </div>
                      <Button size="sm" asChild>
                        <Link to="/en/portal/agreements">Sign Now</Link>
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6 text-muted-foreground">
                  <CheckCircle2 className="h-10 w-10 mx-auto mb-2 text-green-500" />
                  <p>All caught up! No pending approvals.</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Upcoming Milestones */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-purple-500" />
                Upcoming Milestones
              </CardTitle>
              <CardDescription>Track your project progress</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="space-y-3">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <Skeleton key={i} className="h-14" />
                  ))}
                </div>
              ) : milestones.length > 0 ? (
                <div className="space-y-3">
                  {milestones.slice(0, 4).map((milestone) => (
                    <div
                      key={milestone.id}
                      className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-full ${getStatusColor(milestone.status)}`}>
                          {milestone.status === "in_progress" ? (
                            <Clock className="h-4 w-4" />
                          ) : (
                            <Target className="h-4 w-4" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium">{milestone.title}</p>
                          <p className="text-sm text-muted-foreground">
                            Due: {formatDate(milestone.due_date)}
                          </p>
                        </div>
                      </div>
                      <Badge className={getStatusColor(milestone.status)}>
                        {milestone.status?.replace("_", " ") || "Pending"}
                      </Badge>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6 text-muted-foreground">
                  <Target className="h-10 w-10 mx-auto mb-2 opacity-50" />
                  <p>No upcoming milestones</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Projects with Progress */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Project Overview</CardTitle>
              <CardDescription>
                {activeProjects.length} active, {completedProjects.length} completed
              </CardDescription>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link to="/en/portal/projects">
                View All
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="space-y-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <Skeleton key={i} className="h-20" />
                ))}
              </div>
            ) : projects.length > 0 ? (
              <div className="space-y-4">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="p-4 rounded-lg border border-border bg-card hover:shadow-sm transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="font-medium">{project.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {project.description || "No description"}
                        </p>
                      </div>
                      <Badge className={getStatusColor(project.status)}>
                        {project.status?.replace("_", " ") || "Active"}
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{getProjectProgress(project)}%</span>
                      </div>
                      <Progress value={getProjectProgress(project)} className="h-2" />
                    </div>
                    {(project.timeline_start || project.timeline_end) && (
                      <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>
                          {formatDate(project.timeline_start)} - {formatDate(project.timeline_end)}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <FolderKanban className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No projects yet</p>
                <p className="text-sm mt-1">Your projects will appear here once assigned.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default PortalDashboardPage;