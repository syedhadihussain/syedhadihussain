import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "sonner";
import { 
  Loader2, 
  FileText, 
  User, 
  Building2, 
  Mail, 
  Phone,
  Globe,
  DollarSign,
  Calendar,
  Eye,
  CheckCircle,
  XCircle
} from "lucide-react";
import PortalLayout from "@/components/portal/PortalLayout";

interface SubscriptionRequest {
  id: string;
  full_name: string;
  business_name: string | null;
  email: string;
  phone: string | null;
  country: string | null;
  notes: string | null;
  plan_name: string;
  plan_price: number;
  plan_duration: string;
  included_services: unknown[];
  status: string;
  admin_notes: string | null;
  account_number: string | null;
  created_at: string;
  processed_at: string | null;
}

const AdminSubscriptionRequestsPage = () => {
  const [requests, setRequests] = useState<SubscriptionRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRequest, setSelectedRequest] = useState<SubscriptionRequest | null>(null);
  const [processing, setProcessing] = useState(false);
  const [adminNotes, setAdminNotes] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const { data, error } = await supabase
        .from("subscription_requests")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      // Cast the data to handle JSON type from Supabase
      const typedData = (data || []).map(item => ({
        ...item,
        included_services: Array.isArray(item.included_services) 
          ? item.included_services as unknown[] 
          : [],
      }));
      setRequests(typedData);
    } catch (error) {
      console.error("Error fetching requests:", error);
      toast.error("Failed to fetch subscription requests");
    } finally {
      setLoading(false);
    }
  };

  const handleViewRequest = (request: SubscriptionRequest) => {
    setSelectedRequest(request);
    setAdminNotes(request.admin_notes || "");
    setAccountNumber(request.account_number || "");
  };

  const handleUpdateStatus = async (status: string) => {
    if (!selectedRequest) return;

    setProcessing(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();

      const { error } = await supabase
        .from("subscription_requests")
        .update({
          status,
          admin_notes: adminNotes || null,
          account_number: accountNumber || null,
          processed_by: user?.id,
          processed_at: new Date().toISOString(),
        })
        .eq("id", selectedRequest.id);

      if (error) throw error;

      toast.success(`Request ${status === "approved" ? "approved" : "updated"}`);
      setSelectedRequest(null);
      fetchRequests();
    } catch (error) {
      console.error("Error updating request:", error);
      toast.error("Failed to update request");
    } finally {
      setProcessing(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const statusConfig: Record<string, { variant: "default" | "secondary" | "destructive" | "outline"; label: string }> = {
      pending_invoice: { variant: "secondary", label: "Pending Invoice" },
      invoice_sent: { variant: "default", label: "Invoice Sent" },
      approved: { variant: "outline", label: "Approved" },
      rejected: { variant: "destructive", label: "Rejected" },
    };
    const config = statusConfig[status] || { variant: "secondary", label: status };
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  if (loading) {
    return (
      <PortalLayout>
        <div className="flex items-center justify-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </PortalLayout>
    );
  }

  return (
    <PortalLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Subscription Requests</h1>
          <p className="text-muted-foreground">
            Manage incoming subscription requests and create client accounts
          </p>
        </div>

        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Client</TableHead>
                  <TableHead>Plan</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {requests.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                      No subscription requests yet
                    </TableCell>
                  </TableRow>
                ) : (
                  requests.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium text-foreground">{request.full_name}</p>
                          <p className="text-sm text-muted-foreground">{request.email}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{request.plan_name}</Badge>
                      </TableCell>
                      <TableCell>
                        <span className="font-medium">
                          ${request.plan_price}/{request.plan_duration}
                        </span>
                      </TableCell>
                      <TableCell>{getStatusBadge(request.status)}</TableCell>
                      <TableCell>
                        <span className="text-sm text-muted-foreground">
                          {new Date(request.created_at).toLocaleDateString()}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleViewRequest(request)}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Request Details Dialog */}
        <Dialog open={!!selectedRequest} onOpenChange={() => setSelectedRequest(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Subscription Request Details</DialogTitle>
              <DialogDescription>
                Review and process this subscription request
              </DialogDescription>
            </DialogHeader>

            {selectedRequest && (
              <div className="space-y-6">
                {/* Client Info */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <User className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Full Name</p>
                      <p className="font-medium text-foreground">{selectedRequest.full_name}</p>
                    </div>
                  </div>

                  {selectedRequest.business_name && (
                    <div className="flex items-start gap-3">
                      <Building2 className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Business Name</p>
                        <p className="font-medium text-foreground">{selectedRequest.business_name}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground">{selectedRequest.email}</p>
                    </div>
                  </div>

                  {selectedRequest.phone && (
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="font-medium text-foreground">{selectedRequest.phone}</p>
                      </div>
                    </div>
                  )}

                  {selectedRequest.country && (
                    <div className="flex items-start gap-3">
                      <Globe className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Country</p>
                        <p className="font-medium text-foreground">{selectedRequest.country}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Submitted</p>
                      <p className="font-medium text-foreground">
                        {new Date(selectedRequest.created_at).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Plan Details */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Selected Plan
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Plan Name</p>
                      <p className="font-medium text-foreground">{selectedRequest.plan_name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Price</p>
                      <p className="font-medium text-foreground flex items-center gap-1">
                        <DollarSign className="h-4 w-4" />
                        {selectedRequest.plan_price}/{selectedRequest.plan_duration}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Status</p>
                      {getStatusBadge(selectedRequest.status)}
                    </div>
                  </div>

                  {Array.isArray(selectedRequest.included_services) && selectedRequest.included_services.length > 0 && (
                    <div className="mt-4">
                      <p className="text-sm text-muted-foreground mb-2">Included Services</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedRequest.included_services.map((service, i) => (
                          <Badge key={i} variant="secondary">{String(service)}</Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {selectedRequest.notes && (
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Client Notes</p>
                    <p className="text-foreground bg-muted p-3 rounded-lg">{selectedRequest.notes}</p>
                  </div>
                )}

                <Separator />

                {/* Admin Actions */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="account-number">Account Number (Optional)</Label>
                    <Input
                      id="account-number"
                      value={accountNumber}
                      onChange={(e) => setAccountNumber(e.target.value)}
                      placeholder="e.g., CLT-001234"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="admin-notes">Admin Notes</Label>
                    <Textarea
                      id="admin-notes"
                      value={adminNotes}
                      onChange={(e) => setAdminNotes(e.target.value)}
                      placeholder="Internal notes about this request..."
                      rows={3}
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => handleUpdateStatus("invoice_sent")}
                      disabled={processing}
                    >
                      {processing ? (
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      ) : (
                        <FileText className="h-4 w-4 mr-2" />
                      )}
                      Mark Invoice Sent
                    </Button>
                    <Button
                      className="flex-1"
                      onClick={() => handleUpdateStatus("approved")}
                      disabled={processing}
                    >
                      {processing ? (
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      ) : (
                        <CheckCircle className="h-4 w-4 mr-2" />
                      )}
                      Approve
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </PortalLayout>
  );
};

export default AdminSubscriptionRequestsPage;
