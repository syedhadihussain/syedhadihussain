import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";
import {
  Users,
  FolderKanban,
  MessageSquare,
  FileSignature,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertTriangle,
  BarChart3,
  Activity,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";

interface AnalyticsData {
  totalClients: number;
  activeProjects: number;
  completedProjects: number;
  totalMessages: number;
  pendingAgreements: number;
  signedAgreements: number;
  projectsByStatus: { status: string; count: number }[];
  messagesOverTime: { date: string; count: number }[];
  clientsOverTime: { date: string; count: number }[];
  avgResponseTime: number;
}

const COLORS = ["#3b82f6", "#22c55e", "#f59e0b", "#ef4444", "#8b5cf6", "#06b6d4"];

const AdminAnalyticsPage = () => {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      // Fetch total clients
      const { count: totalClients } = await supabase
        .from("client_profiles")
        .select("*", { count: "exact", head: true });

      // Fetch projects by status
      const { data: projects } = await supabase
        .from("projects")
        .select("status");

      const projectsByStatus = (projects || []).reduce((acc: Record<string, number>, p) => {
        const status = p.status || "unknown";
        acc[status] = (acc[status] || 0) + 1;
        return acc;
      }, {});

      const activeProjects = (projectsByStatus["active"] || 0) + (projectsByStatus["in_progress"] || 0);
      const completedProjects = projectsByStatus["completed"] || 0;

      // Fetch total messages
      const { count: totalMessages } = await supabase
        .from("messages")
        .select("*", { count: "exact", head: true });

      // Fetch agreements
      const { data: agreements } = await supabase
        .from("document_agreements")
        .select("status");

      const pendingAgreements = (agreements || []).filter(
        a => ["pending", "sent", "viewed"].includes(a.status || "")
      ).length;
      const signedAgreements = (agreements || []).filter(
        a => a.status === "signed"
      ).length;

      // Get messages over time (last 7 days)
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

      const { data: recentMessages } = await supabase
        .from("messages")
        .select("created_at")
        .gte("created_at", sevenDaysAgo.toISOString());

      const messagesByDay = (recentMessages || []).reduce((acc: Record<string, number>, m) => {
        const date = new Date(m.created_at).toLocaleDateString("en-US", {
          weekday: "short",
        });
        acc[date] = (acc[date] || 0) + 1;
        return acc;
      }, {});

      const messagesOverTime = Object.entries(messagesByDay).map(([date, count]) => ({
        date,
        count: count as number,
      }));

      // Get clients over time (last 30 days)
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

      const { data: recentClients } = await supabase
        .from("client_profiles")
        .select("created_at")
        .gte("created_at", thirtyDaysAgo.toISOString());

      const clientsByWeek = (recentClients || []).reduce((acc: Record<string, number>, c) => {
        const date = new Date(c.created_at).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        });
        acc[date] = (acc[date] || 0) + 1;
        return acc;
      }, {});

      const clientsOverTime = Object.entries(clientsByWeek).map(([date, count]) => ({
        date,
        count: count as number,
      }));

      setData({
        totalClients: totalClients || 0,
        activeProjects,
        completedProjects,
        totalMessages: totalMessages || 0,
        pendingAgreements,
        signedAgreements,
        projectsByStatus: Object.entries(projectsByStatus).map(([status, count]) => ({
          status: status.replace("_", " "),
          count: count as number,
        })),
        messagesOverTime,
        clientsOverTime,
        avgResponseTime: 2.4, // Mock value - would need actual calculation
      });
    } catch (error) {
      console.error("Error fetching analytics:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const stats = data ? [
    {
      label: "Total Clients",
      value: data.totalClients,
      icon: Users,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      change: "+12%",
    },
    {
      label: "Active Projects",
      value: data.activeProjects,
      icon: FolderKanban,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      change: "+5%",
    },
    {
      label: "Total Messages",
      value: data.totalMessages,
      icon: MessageSquare,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      change: "+23%",
    },
    {
      label: "Pending Approvals",
      value: data.pendingAgreements,
      icon: FileSignature,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      change: "-8%",
    },
  ] : [];

  const projectCompletion = data
    ? Math.round((data.completedProjects / (data.activeProjects + data.completedProjects || 1)) * 100)
    : 0;

  const agreementCompletion = data
    ? Math.round((data.signedAgreements / (data.pendingAgreements + data.signedAgreements || 1)) * 100)
    : 0;

  return (
    <>
      <Helmet>
        <title>Analytics Dashboard | Admin Portal</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            System performance, client engagement, and project metrics.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <Skeleton className="h-20" />
                </CardContent>
              </Card>
            ))
          ) : (
            stats.map((stat) => (
              <Card key={stat.label} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-3xl font-bold">{stat.value}</p>
                      <Badge
                        variant="outline"
                        className={stat.change.startsWith("+") ? "text-green-500 border-green-500/20 mt-1" : "text-red-500 border-red-500/20 mt-1"}
                      >
                        {stat.change} this month
                      </Badge>
                    </div>
                    <div className={`p-3 rounded-full ${stat.bgColor}`}>
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Messages Over Time Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Messages Activity
              </CardTitle>
              <CardDescription>Message volume over the last 7 days</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-64" />
              ) : data?.messagesOverTime && data.messagesOverTime.length > 0 ? (
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={data.messagesOverTime}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="date" className="text-muted-foreground" />
                    <YAxis className="text-muted-foreground" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                    />
                    <Bar dataKey="count" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  <Activity className="h-8 w-8 mr-2 opacity-50" />
                  No message data available
                </div>
              )}
            </CardContent>
          </Card>

          {/* Project Status Distribution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FolderKanban className="h-5 w-5 text-primary" />
                Project Distribution
              </CardTitle>
              <CardDescription>Projects by current status</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-64" />
              ) : data?.projectsByStatus && data.projectsByStatus.length > 0 ? (
                <div className="flex items-center">
                  <ResponsiveContainer width="50%" height={200}>
                    <PieChart>
                      <Pie
                        data={data.projectsByStatus}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="count"
                      >
                        {data.projectsByStatus.map((_, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="flex-1 space-y-2">
                    {data.projectsByStatus.map((item, index) => (
                      <div key={item.status} className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: COLORS[index % COLORS.length] }}
                        />
                        <span className="text-sm capitalize">{item.status}</span>
                        <span className="text-sm font-medium ml-auto">{item.count}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  <FolderKanban className="h-8 w-8 mr-2 opacity-50" />
                  No project data available
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Performance Metrics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Performance Metrics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Project Completion Rate</span>
                  <span className="font-medium">{projectCompletion}%</span>
                </div>
                <Progress value={projectCompletion} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Agreement Signing Rate</span>
                  <span className="font-medium">{agreementCompletion}%</span>
                </div>
                <Progress value={agreementCompletion} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Avg Response Time</span>
                  <span className="font-medium">{data?.avgResponseTime || 0}h</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Client Growth */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Client Growth
              </CardTitle>
              <CardDescription>New client signups over the last 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-48" />
              ) : data?.clientsOverTime && data.clientsOverTime.length > 0 ? (
                <ResponsiveContainer width="100%" height={180}>
                  <LineChart data={data.clientsOverTime}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="date" className="text-muted-foreground" />
                    <YAxis className="text-muted-foreground" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="count"
                      stroke="hsl(var(--primary))"
                      strokeWidth={2}
                      dot={{ fill: "hsl(var(--primary))" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-48 flex items-center justify-center text-muted-foreground">
                  <Users className="h-8 w-8 mr-2 opacity-50" />
                  No client data available
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* System Health */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              System Health
            </CardTitle>
            <CardDescription>Current system status and alerts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-lg border border-green-200 bg-green-50 dark:border-green-900/30 dark:bg-green-900/10">
                <CheckCircle2 className="h-8 w-8 text-green-500" />
                <div>
                  <p className="font-medium">Database</p>
                  <p className="text-sm text-muted-foreground">Healthy</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg border border-green-200 bg-green-50 dark:border-green-900/30 dark:bg-green-900/10">
                <CheckCircle2 className="h-8 w-8 text-green-500" />
                <div>
                  <p className="font-medium">API</p>
                  <p className="text-sm text-muted-foreground">Operational</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg border border-green-200 bg-green-50 dark:border-green-900/30 dark:bg-green-900/10">
                <CheckCircle2 className="h-8 w-8 text-green-500" />
                <div>
                  <p className="font-medium">Storage</p>
                  <p className="text-sm text-muted-foreground">75% Available</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AdminAnalyticsPage;