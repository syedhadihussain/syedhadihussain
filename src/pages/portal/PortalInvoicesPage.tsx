import { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useInvoiceManagement } from "@/hooks/useInvoiceManagement";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import {
  Receipt,
  Download,
  Upload,
  Bell,
  CheckCircle2,
  Clock,
  AlertCircle,
  DollarSign,
  FileText,
  Plus,
  Send,
  Calendar,
  CreditCard,
} from "lucide-react";
import { format } from "date-fns";

interface ClientProfile {
  id: string;
  client_id: string;
  company_name: string | null;
}

const PortalInvoicesPage = () => {
  const { user, isAdmin } = useAuth();
  const {
    invoices,
    loading,
    fetchInvoices,
    createInvoice,
    updateInvoiceStatus,
    uploadInvoicePDF,
    uploadReceipt,
    sendReminder
  } = useInvoiceManagement();

  const [clientProfile, setClientProfile] = useState<ClientProfile | null>(null);
  const [allClients, setAllClients] = useState<ClientProfile[]>([]);
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [uploadingId, setUploadingId] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const receiptInputRef = useRef<HTMLInputElement>(null);

  // Create invoice form state
  const [newInvoice, setNewInvoice] = useState({
    clientId: '',
    amount: '',
    currency: 'USD',
    dueDate: '',
    notes: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      if (!user) return;

      // Get current user's client profile
      const { data: profile } = await supabase
        .from("client_profiles")
        .select("id, client_id, company_name")
        .eq("user_id", user.id)
        .maybeSingle();

      if (profile) {
        setClientProfile(profile);
        if (!isAdmin) {
          fetchInvoices(profile.id);
        }
      }

      // If admin, fetch all clients and all invoices
      if (isAdmin) {
        const { data: clients } = await supabase
          .from("client_profiles")
          .select("id, client_id, company_name")
          .order("client_id");

        setAllClients(clients || []);
        fetchInvoices();
      }
    };

    fetchData();
  }, [user, isAdmin, fetchInvoices]);

  const handleCreateInvoice = async () => {
    if (!newInvoice.clientId || !newInvoice.amount) return;

    const result = await createInvoice({
      clientId: newInvoice.clientId,
      amount: parseFloat(newInvoice.amount),
      currency: newInvoice.currency,
      dueDate: newInvoice.dueDate || undefined,
      notes: newInvoice.notes || undefined
    });

    if (result) {
      setShowCreateDialog(false);
      setNewInvoice({ clientId: '', amount: '', currency: 'USD', dueDate: '', notes: '' });
      fetchInvoices();
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, invoiceId: string, type: 'invoice' | 'receipt') => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingId(invoiceId);
    setUploadProgress(30);

    if (type === 'invoice') {
      await uploadInvoicePDF(file, invoiceId);
    } else {
      await uploadReceipt(file, invoiceId);
    }

    setUploadProgress(100);
    setTimeout(() => {
      setUploadingId(null);
      setUploadProgress(0);
      fetchInvoices(isAdmin ? undefined : clientProfile?.id);
    }, 500);
  };

  const getStatusBadge = (status: string | null) => {
    const statusConfig: Record<string, { variant: "default" | "secondary" | "destructive" | "outline"; icon: React.ReactNode; color: string }> = {
      pending: { variant: "outline", icon: <Clock className="h-3 w-3" />, color: "text-yellow-500" },
      paid: { variant: "default", icon: <CheckCircle2 className="h-3 w-3" />, color: "text-green-500" },
      overdue: { variant: "destructive", icon: <AlertCircle className="h-3 w-3" />, color: "text-red-500" },
      cancelled: { variant: "secondary", icon: <AlertCircle className="h-3 w-3" />, color: "text-muted-foreground" }
    };

    const config = statusConfig[status || 'pending'] || statusConfig.pending;

    return (
      <Badge variant={config.variant} className="flex items-center gap-1">
        {config.icon}
        {(status || 'pending').charAt(0).toUpperCase() + (status || 'pending').slice(1)}
      </Badge>
    );
  };

  const formatCurrency = (amount: number, currency: string = "USD") => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(amount);
  };

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "N/A";
    return format(new Date(dateStr), "MMM d, yyyy");
  };

  // Calculate stats
  const totalPending = invoices.filter(i => i.status === 'pending').reduce((sum, i) => sum + i.amount, 0);
  const totalPaid = invoices.filter(i => i.status === 'paid').reduce((sum, i) => sum + i.amount, 0);
  const overdueCount = invoices.filter(i => i.status === 'overdue').length;

  return (
    <>
      <Helmet>
        <title>Invoices | Client Portal</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Invoices</h1>
            <p className="text-muted-foreground mt-1">
              {isAdmin ? "Manage client invoices and payments" : "View and pay your invoices"}
            </p>
          </div>
          {isAdmin && (
            <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Invoice
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Invoice</DialogTitle>
                  <DialogDescription>
                    Create an invoice for a client. You can upload the PDF after creation.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label>Client</Label>
                    <Select value={newInvoice.clientId} onValueChange={(v) => setNewInvoice({ ...newInvoice, clientId: v })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select client" />
                      </SelectTrigger>
                      <SelectContent>
                        {allClients.map((client) => (
                          <SelectItem key={client.id} value={client.id}>
                            {client.company_name || client.client_id}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Amount</Label>
                      <Input
                        type="number"
                        placeholder="0.00"
                        value={newInvoice.amount}
                        onChange={(e) => setNewInvoice({ ...newInvoice, amount: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label>Currency</Label>
                      <Select value={newInvoice.currency} onValueChange={(v) => setNewInvoice({ ...newInvoice, currency: v })}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="USD">USD</SelectItem>
                          <SelectItem value="EUR">EUR</SelectItem>
                          <SelectItem value="GBP">GBP</SelectItem>
                          <SelectItem value="AED">AED</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label>Due Date</Label>
                    <Input
                      type="date"
                      value={newInvoice.dueDate}
                      onChange={(e) => setNewInvoice({ ...newInvoice, dueDate: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>Notes</Label>
                    <Textarea
                      placeholder="Invoice notes or description..."
                      value={newInvoice.notes}
                      onChange={(e) => setNewInvoice({ ...newInvoice, notes: e.target.value })}
                    />
                  </div>
                  <Button onClick={handleCreateInvoice} className="w-full">
                    Create Invoice
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pending</p>
                  <p className="text-2xl font-bold">{formatCurrency(totalPending)}</p>
                </div>
                <div className="p-3 rounded-full bg-yellow-500/10">
                  <Clock className="h-6 w-6 text-yellow-500" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Paid</p>
                  <p className="text-2xl font-bold">{formatCurrency(totalPaid)}</p>
                </div>
                <div className="p-3 rounded-full bg-green-500/10">
                  <CheckCircle2 className="h-6 w-6 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Overdue</p>
                  <p className="text-2xl font-bold">{overdueCount}</p>
                </div>
                <div className="p-3 rounded-full bg-red-500/10">
                  <AlertCircle className="h-6 w-6 text-red-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Hidden file inputs */}
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept=".pdf"
          onChange={(e) => uploadingId && handleFileUpload(e, uploadingId, 'invoice')}
        />
        <input
          type="file"
          ref={receiptInputRef}
          className="hidden"
          accept=".pdf,image/*"
          onChange={(e) => uploadingId && handleFileUpload(e, uploadingId, 'receipt')}
        />

        {/* Invoice List */}
        {loading ? (
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-32" />
            ))}
          </div>
        ) : invoices.length === 0 ? (
          <Card>
            <CardContent className="py-12">
              <div className="text-center text-muted-foreground">
                <Receipt className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium">No invoices yet</p>
                <p className="text-sm">
                  {isAdmin ? "Create invoices for your clients" : "Your invoices will appear here"}
                </p>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {invoices.map((invoice) => (
              <Card key={invoice.id} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-full ${invoice.status === 'paid' ? 'bg-green-500/10' : invoice.status === 'overdue' ? 'bg-red-500/10' : 'bg-yellow-500/10'}`}>
                        <Receipt className={`h-6 w-6 ${invoice.status === 'paid' ? 'text-green-500' : invoice.status === 'overdue' ? 'text-red-500' : 'text-yellow-500'}`} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-lg">
                            {formatCurrency(invoice.amount, invoice.currency || 'USD')}
                          </span>
                          {getStatusBadge(invoice.status)}
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            Issued: {formatDate(invoice.invoice_date)}
                          </span>
                          {invoice.due_date && (
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              Due: {formatDate(invoice.due_date)}
                            </span>
                          )}
                          {invoice.paid_at && (
                            <span className="flex items-center gap-1">
                              <CheckCircle2 className="h-3 w-3" />
                              Paid: {formatDate(invoice.paid_at)}
                            </span>
                          )}
                        </div>
                        {invoice.notes && (
                          <p className="text-sm text-muted-foreground mt-2">{invoice.notes}</p>
                        )}
                        {invoice.reminder_count && invoice.reminder_count > 0 && (
                          <Badge variant="outline" className="mt-2">
                            <Bell className="h-3 w-3 mr-1" />
                            {invoice.reminder_count} reminder{invoice.reminder_count > 1 ? 's' : ''} sent
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {invoice.invoice_url && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={invoice.invoice_url} target="_blank" rel="noopener noreferrer">
                            <Download className="h-4 w-4 mr-2" />
                            Invoice
                          </a>
                        </Button>
                      )}

                      {invoice.receipt_url && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={invoice.receipt_url} target="_blank" rel="noopener noreferrer">
                            <Download className="h-4 w-4 mr-2" />
                            Receipt
                          </a>
                        </Button>
                      )}

                      {isAdmin && (
                        <>
                          {!invoice.invoice_url && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                setUploadingId(invoice.id);
                                fileInputRef.current?.click();
                              }}
                            >
                              <Upload className="h-4 w-4 mr-2" />
                              Upload PDF
                            </Button>
                          )}

                          {invoice.status !== 'paid' && (
                            <>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => sendReminder(invoice.id)}
                              >
                                <Bell className="h-4 w-4 mr-2" />
                                Send Reminder
                              </Button>
                              <Button
                                size="sm"
                                onClick={() => updateInvoiceStatus(invoice.id, 'paid', new Date().toISOString())}
                              >
                                <CheckCircle2 className="h-4 w-4 mr-2" />
                                Mark Paid
                              </Button>
                            </>
                          )}

                          {invoice.status === 'paid' && !invoice.receipt_url && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                setUploadingId(invoice.id);
                                receiptInputRef.current?.click();
                              }}
                            >
                              <Upload className="h-4 w-4 mr-2" />
                              Upload Receipt
                            </Button>
                          )}
                        </>
                      )}
                    </div>
                  </div>

                  {uploadingId === invoice.id && uploadProgress > 0 && (
                    <div className="mt-4">
                      <Progress value={uploadProgress} className="h-2" />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default PortalInvoicesPage;
