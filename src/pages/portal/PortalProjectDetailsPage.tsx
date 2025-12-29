import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Clock,
  FileText,
  FolderKanban,
  MessageSquare,
  Target,
  Users,
  Loader2,
} from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";

interface Project {
  id: string;
  name: string;
  description: string | null;
  status: string | null;
  timeline_start: string | null;
  timeline_end: string | null;
  services: string[] | null;
  created_at: string;
}

interface Milestone {
  id: string;
  title: string;
  description: string | null;
  status: string | null;
  due_date: string | null;
  completed_at: string | null;
  order_index: number;
}

interface Deliverable {
  id: string;
  milestone_id: string;
  title: string;
  description: string | null;
  is_completed: boolean;
  completed_at: string | null;
  is_client_visible: boolean;
  order_index: number;
}

const PortalProjectDetailsPage = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const { user } = useAuth();
  const [project, setProject] = useState<Project | null>(null);
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [deliverables, setDeliverables] = useState<Deliverable[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [updatingDeliverable, setUpdatingDeliverable] = useState<string | null>(null);

  useEffect(() => {
    fetchProjectDetails();
  }, [projectId, user]);

  const fetchProjectDetails = async () => {
    if (!projectId || !user) return;

    try {
      // Fetch project
      const { data: projectData, error: projectError } = await supabase
        .from("projects")
        .select("*")
        .eq("id", projectId)
        .maybeSingle();

      if (projectError) throw projectError;
      setProject(projectData);

      if (projectData) {
        // Fetch milestones
        const { data: milestonesData } = await supabase
          .from("milestones")
          .select("*")
          .eq("project_id", projectId)
          .order("order_index", { ascending: true });

        setMilestones(milestonesData || []);

        // Fetch deliverables
        const { data: deliverablesData } = await supabase
          .from("deliverables")
          .select("*")
          .eq("project_id", projectId)
          .eq("is_client_visible", true)
          .order("order_index", { ascending: true });

        setDeliverables(deliverablesData || []);
      }
    } catch (error) {
      console.error("Error fetching project details:", error);
      toast.error("Failed to load project details");
    } finally {
      setIsLoading(false);
    }
  };

  const toggleDeliverable = async (deliverableId: string, currentStatus: boolean) => {
    setUpdatingDeliverable(deliverableId);
    try {
      const { error } = await supabase
        .from("deliverables")
        .update({
          is_completed: !currentStatus,
          completed_at: !currentStatus ? new Date().toISOString() : null,
          completed_by: !currentStatus ? user?.id : null,
        })
        .eq("id", deliverableId);

      if (error) throw error;

      setDeliverables((prev) =>
        prev.map((d) =>
          d.id === deliverableId
            ? { ...d, is_completed: !currentStatus, completed_at: !currentStatus ? new Date().toISOString() : null }
            : d
        )
      );

      toast.success(!currentStatus ? "Deliverable marked complete" : "Deliverable unmarked");
    } catch (error) {
      console.error("Error updating deliverable:", error);
      toast.error("Failed to update deliverable");
    } finally {
      setUpdatingDeliverable(null);
    }
  };

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

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "No date";
    return format(new Date(dateStr), "MMM d, yyyy");
  };

  const getProjectProgress = () => {
    if (deliverables.length === 0) return 0;
    const completed = deliverables.filter((d) => d.is_completed).length;
    return Math.round((completed / deliverables.length) * 100);
  };

  const getMilestoneProgress = (milestoneId: string) => {
    const milestoneDeliverables = deliverables.filter((d) => d.milestone_id === milestoneId);
    if (milestoneDeliverables.length === 0) return 0;
    const completed = milestoneDeliverables.filter((d) => d.is_completed).length;
    return Math.round((completed / milestoneDeliverables.length) * 100);
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-10 w-64" />
        <Skeleton className="h-40" />
        <Skeleton className="h-96" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="text-center py-12">
        <FolderKanban className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
        <p className="text-lg font-medium">Project not found</p>
        <Button variant="outline" className="mt-4" asChild>
          <Link to="/en/portal/projects">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Link>
        </Button>
      </div>
    );
  }

  const progress = getProjectProgress();

  return (
    <>
      <Helmet>
        <title>{project.name} | Client Portal</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/en/portal/projects">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-foreground">{project.name}</h1>
            <p className="text-muted-foreground mt-1">
              {project.description || "No description"}
            </p>
          </div>
          <Badge className={`${getStatusColor(project.status)} text-sm px-3 py-1`}>
            {project.status?.replace("_", " ") || "Active"}
          </Badge>
        </div>

        {/* Project Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FolderKanban className="h-5 w-5" />
              Project Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Timeline
                </p>
                <p className="font-medium">
                  {formatDate(project.timeline_start)} - {formatDate(project.timeline_end)}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <Target className="h-4 w-4" />
                  Milestones
                </p>
                <p className="font-medium">{milestones.length} total</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4" />
                  Deliverables
                </p>
                <p className="font-medium">
                  {deliverables.filter((d) => d.is_completed).length} / {deliverables.length} complete
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Overall Progress</p>
                <div className="flex items-center gap-2">
                  <Progress value={progress} className="flex-1 h-3" />
                  <span className="font-bold text-lg">{progress}%</span>
                </div>
              </div>
            </div>

            {project.services && project.services.length > 0 && (
              <>
                <Separator className="my-4" />
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Services</p>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service, index) => (
                      <Badge key={index} variant="secondary">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button variant="outline" className="h-auto py-4" asChild>
            <Link to="/en/portal/messages">
              <div className="flex flex-col items-center gap-2">
                <MessageSquare className="h-6 w-6" />
                <span>Messages</span>
              </div>
            </Link>
          </Button>
          <Button variant="outline" className="h-auto py-4" asChild>
            <Link to="/en/portal/documents">
              <div className="flex flex-col items-center gap-2">
                <FileText className="h-6 w-6" />
                <span>Documents</span>
              </div>
            </Link>
          </Button>
          <Button variant="outline" className="h-auto py-4" asChild>
            <Link to="/en/portal/agreements">
              <div className="flex flex-col items-center gap-2">
                <Users className="h-6 w-6" />
                <span>Agreements</span>
              </div>
            </Link>
          </Button>
          <Button variant="outline" className="h-auto py-4" asChild>
            <Link to="/en/contact">
              <div className="flex flex-col items-center gap-2">
                <MessageSquare className="h-6 w-6" />
                <span>Contact Us</span>
              </div>
            </Link>
          </Button>
        </div>

        {/* Milestones & Deliverables */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Milestones & Deliverables
            </CardTitle>
            <CardDescription>Track project progress and check off completed items</CardDescription>
          </CardHeader>
          <CardContent>
            {milestones.length > 0 ? (
              <div className="space-y-6">
                {milestones.map((milestone) => {
                  const milestoneDeliverables = deliverables.filter(
                    (d) => d.milestone_id === milestone.id
                  );
                  const milestoneProgress = getMilestoneProgress(milestone.id);

                  return (
                    <div key={milestone.id} className="border border-border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-full ${getStatusColor(milestone.status)}`}>
                            {milestone.status === "completed" ? (
                              <CheckCircle2 className="h-5 w-5" />
                            ) : milestone.status === "in_progress" ? (
                              <Clock className="h-5 w-5" />
                            ) : (
                              <Target className="h-5 w-5" />
                            )}
                          </div>
                          <div>
                            <h3 className="font-semibold">{milestone.title}</h3>
                            {milestone.description && (
                              <p className="text-sm text-muted-foreground">{milestone.description}</p>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge className={getStatusColor(milestone.status)}>
                            {milestone.status?.replace("_", " ") || "Pending"}
                          </Badge>
                          {milestone.due_date && (
                            <p className="text-sm text-muted-foreground mt-1">
                              Due: {formatDate(milestone.due_date)}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Milestone progress */}
                      <div className="flex items-center gap-2 mb-4">
                        <Progress value={milestoneProgress} className="flex-1 h-2" />
                        <span className="text-sm font-medium">{milestoneProgress}%</span>
                      </div>

                      {/* Deliverables */}
                      {milestoneDeliverables.length > 0 ? (
                        <div className="space-y-2 pl-4 border-l-2 border-muted">
                          {milestoneDeliverables.map((deliverable) => (
                            <div
                              key={deliverable.id}
                              className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                                deliverable.is_completed
                                  ? "bg-green-50 dark:bg-green-900/10"
                                  : "bg-muted/30 hover:bg-muted/50"
                              }`}
                            >
                              <div className="relative">
                                {updatingDeliverable === deliverable.id ? (
                                  <Loader2 className="h-5 w-5 animate-spin text-primary" />
                                ) : (
                                  <Checkbox
                                    checked={deliverable.is_completed}
                                    onCheckedChange={() =>
                                      toggleDeliverable(deliverable.id, deliverable.is_completed)
                                    }
                                    className="h-5 w-5"
                                  />
                                )}
                              </div>
                              <div className="flex-1">
                                <p
                                  className={`font-medium ${
                                    deliverable.is_completed ? "line-through text-muted-foreground" : ""
                                  }`}
                                >
                                  {deliverable.title}
                                </p>
                                {deliverable.description && (
                                  <p className="text-sm text-muted-foreground">
                                    {deliverable.description}
                                  </p>
                                )}
                              </div>
                              {deliverable.is_completed && deliverable.completed_at && (
                                <span className="text-xs text-muted-foreground">
                                  Completed {formatDate(deliverable.completed_at)}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm text-muted-foreground pl-4">
                          No deliverables for this milestone yet.
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                <Target className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="font-medium">No milestones yet</p>
                <p className="text-sm mt-1">
                  Milestones will appear here once your project manager creates them.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default PortalProjectDetailsPage;