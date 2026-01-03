import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import PortalLayout from "@/components/portal/PortalLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { RefreshCw, Calendar, CheckCircle, XCircle, Clock, Loader2, Globe, Send } from "lucide-react";
import { format, formatDistanceToNow } from "date-fns";
import { useToast } from "@/hooks/use-toast";

interface SitemapSubmission {
  id: string;
  source: string;
  triggered_at: string;
  completed_at: string | null;
  total_sitemaps: number;
  successful_pings: number;
  failed_pings: number;
  success_rate: number | null;
  results: any[];
  created_at: string;
}

const AdminSitemapDashboardPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch submission history
  const { data: submissions, isLoading, refetch } = useQuery({
    queryKey: ["sitemap-submissions"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("sitemap_submissions")
        .select("*")
        .order("triggered_at", { ascending: false })
        .limit(50);

      if (error) throw error;
      return data as SitemapSubmission[];
    },
  });

  // Trigger manual submission
  const handleManualSubmission = async () => {
    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("submit-sitemaps", {
        body: { source: "manual-dashboard", triggered_at: new Date().toISOString() },
      });

      if (error) throw error;

      toast({
        title: "Sitemaps Submitted",
        description: `Successfully pinged ${data.successful} of ${data.totalPings} endpoints`,
      });

      // Refetch to show new submission
      setTimeout(() => refetch(), 1000);
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Submission Failed",
        description: "Failed to submit sitemaps. Check console for details.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Calculate stats
  const stats = {
    totalSubmissions: submissions?.length || 0,
    lastSubmission: submissions?.[0]?.triggered_at,
    avgSuccessRate: submissions?.length
      ? (submissions.reduce((acc, s) => acc + (s.success_rate || 0), 0) / submissions.length).toFixed(1)
      : 0,
    cronSubmissions: submissions?.filter(s => s.source === "cron").length || 0,
    manualSubmissions: submissions?.filter(s => s.source.includes("manual")).length || 0,
  };

  return (
    <PortalLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Sitemap Dashboard</h1>
            <p className="text-muted-foreground">
              Monitor sitemap submissions to Google and Bing
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => refetch()} disabled={isLoading}>
              <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
              Refresh
            </Button>
            <Button onClick={handleManualSubmission} disabled={isSubmitting}>
              {isSubmitting ? (
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <Send className="h-4 w-4 mr-2" />
              )}
              Submit Now
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Submissions</CardTitle>
              <Globe className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalSubmissions}</div>
              <p className="text-xs text-muted-foreground">
                {stats.cronSubmissions} cron, {stats.manualSubmissions} manual
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Last Submission</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {stats.lastSubmission
                  ? formatDistanceToNow(new Date(stats.lastSubmission), { addSuffix: true })
                  : "Never"}
              </div>
              <p className="text-xs text-muted-foreground">
                {stats.lastSubmission
                  ? format(new Date(stats.lastSubmission), "PPp")
                  : "No submissions yet"}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Success Rate</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.avgSuccessRate}%</div>
              <p className="text-xs text-muted-foreground">
                Across all submissions
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Next Cron Run</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Monday 6 AM</div>
              <p className="text-xs text-muted-foreground">
                Weekly schedule (UTC)
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Submission History Table */}
        <Card>
          <CardHeader>
            <CardTitle>Submission History</CardTitle>
            <CardDescription>
              Recent sitemap submissions to search engines
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            ) : submissions && submissions.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Source</TableHead>
                    <TableHead>Sitemaps</TableHead>
                    <TableHead>Success</TableHead>
                    <TableHead>Failed</TableHead>
                    <TableHead>Rate</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {submissions.map((submission) => (
                    <TableRow key={submission.id}>
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="font-medium">
                            {format(new Date(submission.triggered_at), "PP")}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {format(new Date(submission.triggered_at), "p")}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={submission.source === "cron" ? "secondary" : "outline"}>
                          {submission.source}
                        </Badge>
                      </TableCell>
                      <TableCell>{submission.total_sitemaps}</TableCell>
                      <TableCell>
                        <span className="flex items-center gap-1 text-green-600">
                          <CheckCircle className="h-3 w-3" />
                          {submission.successful_pings}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className="flex items-center gap-1 text-red-600">
                          <XCircle className="h-3 w-3" />
                          {submission.failed_pings}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            (submission.success_rate || 0) >= 90
                              ? "default"
                              : (submission.success_rate || 0) >= 50
                              ? "secondary"
                              : "destructive"
                          }
                        >
                          {submission.success_rate?.toFixed(1) || 0}%
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {submission.completed_at ? (
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            Complete
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                            In Progress
                          </Badge>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <Globe className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No sitemap submissions yet</p>
                <p className="text-sm">Click "Submit Now" to ping search engines</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </PortalLayout>
  );
};

export default AdminSitemapDashboardPage;
