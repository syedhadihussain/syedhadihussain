import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { 
  RefreshCw, 
  Globe, 
  Search, 
  Bell, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  Loader2,
  Play,
  Calendar,
  Zap
} from "lucide-react";

interface EndpointStatus {
  name: string;
  reachable: boolean;
  status?: number;
  error?: string;
}

interface MonitorResult {
  timestamp: string;
  cronJobsChecked: number;
  endpointStatus: EndpointStatus[];
  unreachableEndpoints: number;
  summary: string;
  alertSent?: boolean;
}

const CRON_SCHEDULES = [
  { name: "Daily Sitemap Submission", schedule: "6:00 AM UTC", frequency: "Daily", type: "sitemap" },
  { name: "Daily IndexNow Submission", schedule: "6:15 AM UTC", frequency: "Daily", type: "indexnow" },
  { name: "Daily Google Indexing", schedule: "6:30 AM UTC", frequency: "Daily", type: "google" },
  { name: "Daily Monitor Check", schedule: "7:00 AM UTC", frequency: "Daily", type: "monitor" },
  { name: "Weekly Full IndexNow", schedule: "3:00 AM UTC", frequency: "Sunday", type: "indexnow" },
  { name: "Weekly Full Google Indexing", schedule: "3:30 AM UTC", frequency: "Sunday", type: "google" },
  { name: "Weekly Monitor Check", schedule: "4:00 AM UTC", frequency: "Sunday", type: "monitor" },
];

const ENDPOINTS = [
  { name: "submit-sitemaps", label: "Sitemap Submission", description: "Pings Google & Bing with sitemaps" },
  { name: "indexnow-submit", label: "IndexNow", description: "Bing, Yandex, Seznam, Naver" },
  { name: "google-indexing", label: "Google Indexing API", description: "Instant Google indexing" },
  { name: "indexing-webhook", label: "Indexing Webhook", description: "Auto-trigger for new pages" },
  { name: "indexing-monitor", label: "Monitor", description: "Health checks & alerts" },
];

const IndexingDashboardPage = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [triggeringEndpoint, setTriggeringEndpoint] = useState<string | null>(null);

  // Fetch monitor status
  const { data: monitorData, isLoading: isMonitorLoading, refetch: refetchMonitor } = useQuery({
    queryKey: ['indexing-monitor'],
    queryFn: async () => {
      const { data, error } = await supabase.functions.invoke('indexing-monitor');
      if (error) throw error;
      return data as MonitorResult;
    },
    refetchInterval: 60000, // Refresh every minute
  });

  // Mutation to trigger an endpoint
  const triggerMutation = useMutation({
    mutationFn: async (endpointName: string) => {
      setTriggeringEndpoint(endpointName);
      const { data, error } = await supabase.functions.invoke(endpointName);
      if (error) throw error;
      return { name: endpointName, data };
    },
    onSuccess: (result) => {
      toast({
        title: "Success",
        description: `${result.name} triggered successfully`,
      });
      queryClient.invalidateQueries({ queryKey: ['indexing-monitor'] });
    },
    onError: (error, endpointName) => {
      toast({
        title: "Error",
        description: `Failed to trigger ${endpointName}: ${error.message}`,
        variant: "destructive",
      });
    },
    onSettled: () => {
      setTriggeringEndpoint(null);
    },
  });

  const getStatusColor = (reachable: boolean) => {
    return reachable ? "bg-green-500" : "bg-red-500";
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "sitemap": return <Globe className="h-4 w-4" />;
      case "indexnow": return <Zap className="h-4 w-4" />;
      case "google": return <Search className="h-4 w-4" />;
      case "monitor": return <Bell className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Indexing Dashboard | SEO Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Indexing Dashboard</h1>
              <p className="text-muted-foreground mt-1">
                Monitor and manage search engine indexing
              </p>
            </div>
            <Button 
              onClick={() => refetchMonitor()} 
              variant="outline"
              disabled={isMonitorLoading}
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${isMonitorLoading ? 'animate-spin' : ''}`} />
              Refresh Status
            </Button>
          </div>

          {/* Status Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">System Status</p>
                    <p className="text-2xl font-bold">
                      {monitorData?.unreachableEndpoints === 0 ? (
                        <span className="text-green-500">Healthy</span>
                      ) : (
                        <span className="text-red-500">Issues</span>
                      )}
                    </p>
                  </div>
                  {monitorData?.unreachableEndpoints === 0 ? (
                    <CheckCircle2 className="h-8 w-8 text-green-500" />
                  ) : (
                    <XCircle className="h-8 w-8 text-red-500" />
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Endpoints</p>
                    <p className="text-2xl font-bold">{ENDPOINTS.length}</p>
                  </div>
                  <Globe className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Scheduled Jobs</p>
                    <p className="text-2xl font-bold">{CRON_SCHEDULES.length}</p>
                  </div>
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Last Check</p>
                    <p className="text-sm font-bold">
                      {monitorData?.timestamp 
                        ? new Date(monitorData.timestamp).toLocaleTimeString()
                        : 'N/A'
                      }
                    </p>
                  </div>
                  <Clock className="h-8 w-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="endpoints" className="space-y-4">
            <TabsList>
              <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
              <TabsTrigger value="schedule">Schedule</TabsTrigger>
              <TabsTrigger value="manual">Manual Trigger</TabsTrigger>
            </TabsList>

            {/* Endpoints Tab */}
            <TabsContent value="endpoints" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Endpoint Status</CardTitle>
                  <CardDescription>Real-time status of all indexing endpoints</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {ENDPOINTS.map((endpoint) => {
                      const status = monitorData?.endpointStatus?.find(
                        (s) => s.name === endpoint.name
                      );
                      const isReachable = status?.reachable ?? true;

                      return (
                        <div
                          key={endpoint.name}
                          className="flex items-center justify-between p-4 rounded-lg border bg-card"
                        >
                          <div className="flex items-center gap-4">
                            <div className={`w-3 h-3 rounded-full ${getStatusColor(isReachable)}`} />
                            <div>
                              <p className="font-medium">{endpoint.label}</p>
                              <p className="text-sm text-muted-foreground">{endpoint.description}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {status?.status && (
                              <Badge variant={isReachable ? "default" : "destructive"}>
                                {status.status}
                              </Badge>
                            )}
                            <Badge variant={isReachable ? "outline" : "destructive"}>
                              {isReachable ? "Online" : "Offline"}
                            </Badge>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Schedule Tab */}
            <TabsContent value="schedule" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Cron Job Schedule</CardTitle>
                  <CardDescription>Automated indexing and monitoring schedule (all times UTC)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {CRON_SCHEDULES.map((job, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 rounded-lg border bg-card"
                      >
                        <div className="flex items-center gap-4">
                          <div className="p-2 rounded-lg bg-primary/10 text-primary">
                            {getTypeIcon(job.type)}
                          </div>
                          <div>
                            <p className="font-medium">{job.name}</p>
                            <p className="text-sm text-muted-foreground">{job.schedule}</p>
                          </div>
                        </div>
                        <Badge variant="secondary">{job.frequency}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Manual Trigger Tab */}
            <TabsContent value="manual" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Manual Trigger</CardTitle>
                  <CardDescription>Manually trigger indexing functions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {ENDPOINTS.map((endpoint) => (
                      <Card key={endpoint.name} className="border-2">
                        <CardContent className="pt-6">
                          <div className="space-y-4">
                            <div>
                              <h3 className="font-semibold">{endpoint.label}</h3>
                              <p className="text-sm text-muted-foreground">{endpoint.description}</p>
                            </div>
                            <Button
                              className="w-full"
                              onClick={() => triggerMutation.mutate(endpoint.name)}
                              disabled={triggeringEndpoint === endpoint.name}
                            >
                              {triggeringEndpoint === endpoint.name ? (
                                <>
                                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                  Running...
                                </>
                              ) : (
                                <>
                                  <Play className="h-4 w-4 mr-2" />
                                  Trigger Now
                                </>
                              )}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common indexing operations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4">
                    <Button
                      variant="default"
                      onClick={() => {
                        triggerMutation.mutate('submit-sitemaps');
                        triggerMutation.mutate('indexnow-submit');
                      }}
                      disabled={triggeringEndpoint !== null}
                    >
                      <Zap className="h-4 w-4 mr-2" />
                      Full Indexing (All Engines)
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => triggerMutation.mutate('indexing-monitor')}
                      disabled={triggeringEndpoint !== null}
                    >
                      <Bell className="h-4 w-4 mr-2" />
                      Run Health Check
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Summary Card */}
          {monitorData?.summary && (
            <Card className="mt-8">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2">
                  {monitorData.summary.includes('✅') ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  ) : (
                    <Bell className="h-5 w-5 text-yellow-500" />
                  )}
                  <p className="text-sm">{monitorData.summary}</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </>
  );
};

export default IndexingDashboardPage;
