import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import {
  CreditCard,
  Calendar,
  Receipt,
  CheckCircle2,
  AlertCircle,
  Clock,
  Download,
  Sparkles,
  Zap,
  Shield,
  ArrowRight,
} from "lucide-react";
import { format } from "date-fns";

interface Subscription {
  id: string;
  plan_name: string;
  plan_price: number | null;
  billing_cycle: string | null;
  status: string | null;
  current_period_start: string | null;
  current_period_end: string | null;
}

interface Invoice {
  id: string;
  amount: number;
  currency: string | null;
  status: string | null;
  invoice_date: string;
  due_date: string | null;
  paid_at: string | null;
  invoice_url: string | null;
}

const PLAN_FEATURES: Record<string, string[]> = {
  free: ["1 Active Project", "Basic Support", "5GB Storage"],
  starter: ["3 Active Projects", "Priority Support", "25GB Storage", "Custom Branding"],
  professional: ["10 Active Projects", "24/7 Support", "100GB Storage", "Custom Branding", "API Access"],
  enterprise: ["Unlimited Projects", "Dedicated Support", "Unlimited Storage", "Custom Branding", "API Access", "SLA Guarantee"],
};

const PortalSubscriptionPage = () => {
  const { user } = useAuth();
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchSubscriptionData();
  }, [user]);

  const fetchSubscriptionData = async () => {
    if (!user) return;

    try {
      // Get client profile
      const { data: profile } = await supabase
        .from("client_profiles")
        .select("id")
        .eq("user_id", user.id)
        .maybeSingle();

      if (profile) {
        // Fetch subscription
        const { data: subscriptionData } = await supabase
          .from("subscription_info")
          .select("*")
          .eq("client_id", profile.id)
          .maybeSingle();

        setSubscription(subscriptionData);

        // Fetch invoices
        const { data: invoicesData } = await supabase
          .from("invoices")
          .select("*")
          .eq("client_id", profile.id)
          .order("invoice_date", { ascending: false })
          .limit(10);

        setInvoices(invoicesData || []);
      }
    } catch (error) {
      console.error("Error fetching subscription data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusColor = (status: string | null) => {
    switch (status) {
      case "active":
      case "paid":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "paused":
      case "pending":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "cancelled":
      case "overdue":
        return "bg-red-500/10 text-red-500 border-red-500/20";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  const getStatusIcon = (status: string | null) => {
    switch (status) {
      case "active":
      case "paid":
        return <CheckCircle2 className="h-4 w-4" />;
      case "pending":
        return <Clock className="h-4 w-4" />;
      case "overdue":
      case "cancelled":
        return <AlertCircle className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "N/A";
    return format(new Date(dateStr), "MMM d, yyyy");
  };

  const formatCurrency = (amount: number, currency: string = "USD") => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(amount);
  };

  const currentPlan = subscription?.plan_name || "free";
  const features = PLAN_FEATURES[currentPlan] || PLAN_FEATURES.free;

  const daysUntilRenewal = subscription?.current_period_end
    ? Math.ceil(
        (new Date(subscription.current_period_end).getTime() - Date.now()) /
          (1000 * 60 * 60 * 24)
      )
    : null;

  return (
    <>
      <Helmet>
        <title>Subscription & Billing | Client Portal</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Subscription & Billing</h1>
          <p className="text-muted-foreground mt-1">
            Manage your subscription plan and view billing history.
          </p>
        </div>

        {isLoading ? (
          <div className="space-y-6">
            <Skeleton className="h-64" />
            <Skeleton className="h-96" />
          </div>
        ) : (
          <>
            {/* Current Plan Card */}
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 via-transparent to-transparent">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-primary" />
                      Current Plan
                    </CardTitle>
                    <CardDescription>Your active subscription details</CardDescription>
                  </div>
                  {subscription?.status && (
                    <Badge className={getStatusColor(subscription.status)}>
                      {getStatusIcon(subscription.status)}
                      <span className="ml-1 capitalize">{subscription.status}</span>
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-4xl font-bold capitalize">{currentPlan}</span>
                      {subscription?.plan_price && subscription.plan_price > 0 && (
                        <span className="text-muted-foreground">
                          {formatCurrency(subscription.plan_price)}/{subscription.billing_cycle || "month"}
                        </span>
                      )}
                    </div>

                    <div className="space-y-3">
                      {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    {subscription?.current_period_start && (
                      <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-muted/30">
                        <div className="flex items-center gap-3">
                          <Calendar className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="text-sm text-muted-foreground">Billing Period</p>
                            <p className="font-medium">
                              {formatDate(subscription.current_period_start)} -{" "}
                              {formatDate(subscription.current_period_end)}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {daysUntilRenewal !== null && daysUntilRenewal > 0 && (
                      <div className="flex items-center justify-between p-4 rounded-lg border border-primary/20 bg-primary/5">
                        <div className="flex items-center gap-3">
                          <Zap className="h-5 w-5 text-primary" />
                          <div>
                            <p className="text-sm text-muted-foreground">Next Renewal</p>
                            <p className="font-medium">{daysUntilRenewal} days remaining</p>
                          </div>
                        </div>
                      </div>
                    )}

                    <Button className="w-full" variant="outline">
                      <Shield className="h-4 w-4 mr-2" />
                      Upgrade Plan
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Invoice History */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Receipt className="h-5 w-5" />
                  Invoice History
                </CardTitle>
                <CardDescription>Your recent invoices and payment history</CardDescription>
              </CardHeader>
              <CardContent>
                {invoices.length > 0 ? (
                  <div className="space-y-4">
                    {invoices.map((invoice) => (
                      <div
                        key={invoice.id}
                        className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`p-2 rounded-full ${getStatusColor(invoice.status)}`}>
                            {getStatusIcon(invoice.status)}
                          </div>
                          <div>
                            <p className="font-medium">
                              Invoice - {formatDate(invoice.invoice_date)}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Due: {formatDate(invoice.due_date)}
                              {invoice.paid_at && ` • Paid: ${formatDate(invoice.paid_at)}`}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="font-bold">
                              {formatCurrency(invoice.amount, invoice.currency || "USD")}
                            </p>
                            <Badge variant="outline" className={getStatusColor(invoice.status)}>
                              {invoice.status}
                            </Badge>
                          </div>
                          {invoice.invoice_url && (
                            <Button variant="ghost" size="icon" asChild>
                              <a href={invoice.invoice_url} target="_blank" rel="noopener noreferrer">
                                <Download className="h-4 w-4" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <Receipt className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p className="font-medium">No invoices yet</p>
                    <p className="text-sm mt-1">
                      Your invoice history will appear here once you have billing activity.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Payment Method
                </CardTitle>
                <CardDescription>Manage your payment details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-muted/30">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-card border border-border">
                      <CreditCard className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium">•••• •••• •••• 4242</p>
                      <p className="text-sm text-muted-foreground">Expires 12/25</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Update
                  </Button>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </>
  );
};

export default PortalSubscriptionPage;