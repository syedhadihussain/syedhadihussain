import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { usePaymentProofs } from "@/hooks/usePaymentProofs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { 
  Loader2, 
  Upload, 
  FileText, 
  CheckCircle, 
  Clock, 
  DollarSign,
  Calendar,
  Building2,
  ArrowLeft,
  Download
} from "lucide-react";
import PortalLayout from "@/components/portal/PortalLayout";

interface Invoice {
  id: string;
  amount: number;
  currency: string;
  status: string;
  invoice_date: string;
  due_date: string | null;
  invoice_url: string | null;
  notes: string | null;
  client_id: string;
}

const PortalPayInvoicePage = () => {
  const { invoiceId } = useParams();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  const { paymentProofs, uploadPaymentProof } = usePaymentProofs(invoiceId);

  useEffect(() => {
    fetchInvoice();
  }, [invoiceId]);

  const fetchInvoice = async () => {
    if (!invoiceId) return;

    try {
      const { data, error } = await supabase
        .from("invoices")
        .select("*")
        .eq("id", invoiceId)
        .single();

      if (error) throw error;
      setInvoice(data);
    } catch (error) {
      console.error("Error fetching invoice:", error);
      toast.error("Invoice not found");
      navigate("/en/portal/invoices");
    } finally {
      setLoading(false);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const allowedTypes = ["image/jpeg", "image/png", "image/webp", "application/pdf"];
      if (!allowedTypes.includes(file.type)) {
        toast.error("Please upload a JPG, PNG, WebP, or PDF file");
        return;
      }
      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        toast.error("File size must be less than 10MB");
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile || !invoiceId) return;

    setUploading(true);
    const result = await uploadPaymentProof(invoiceId, selectedFile, message);
    
    if (result.success) {
      setSelectedFile(null);
      setMessage("");
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      // Refresh invoice data
      fetchInvoice();
    }
    setUploading(false);
  };

  const getStatusBadge = (status: string) => {
    const statusConfig: Record<string, { variant: "default" | "secondary" | "destructive" | "outline"; label: string }> = {
      pending: { variant: "secondary", label: "Pending Payment" },
      payment_submitted: { variant: "default", label: "Payment Submitted" },
      paid: { variant: "outline", label: "Paid" },
      overdue: { variant: "destructive", label: "Overdue" },
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

  if (!invoice) {
    return (
      <PortalLayout>
        <div className="text-center py-12">
          <p className="text-muted-foreground">Invoice not found</p>
        </div>
      </PortalLayout>
    );
  }

  const isPaid = invoice.status === "paid";
  const hasSubmittedProof = invoice.status === "payment_submitted" || paymentProofs.length > 0;

  return (
    <PortalLayout>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/en/portal/invoices")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Pay Invoice</h1>
            <p className="text-muted-foreground">Upload payment proof to complete your payment</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Invoice Details */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Invoice Details</CardTitle>
                  {getStatusBadge(invoice.status)}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <DollarSign className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Amount Due</p>
                    <p className="text-2xl font-bold text-foreground">
                      {invoice.currency} {invoice.amount.toFixed(2)}
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Invoice Date</p>
                      <p className="text-foreground">
                        {new Date(invoice.invoice_date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  {invoice.due_date && (
                    <div className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Due Date</p>
                        <p className="text-foreground">
                          {new Date(invoice.due_date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {invoice.invoice_url && (
                  <>
                    <Separator />
                    <Button asChild variant="outline" className="w-full">
                      <a href={invoice.invoice_url} target="_blank" rel="noopener noreferrer">
                        <Download className="h-4 w-4 mr-2" />
                        Download Invoice PDF
                      </a>
                    </Button>
                  </>
                )}

                {invoice.notes && (
                  <>
                    <Separator />
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Notes</p>
                      <p className="text-sm text-foreground">{invoice.notes}</p>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Payment Upload */}
          <div className="lg:col-span-2">
            {isPaid ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <div className="p-4 rounded-full bg-green-100 dark:bg-green-900 mb-4">
                    <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">Invoice Paid</h2>
                  <p className="text-muted-foreground text-center mt-2">
                    This invoice has been paid and verified. Thank you!
                  </p>
                </CardContent>
              </Card>
            ) : hasSubmittedProof ? (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-yellow-500" />
                    Payment Under Review
                  </CardTitle>
                  <CardDescription>
                    Your payment proof has been submitted and is being reviewed.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                    <p className="text-sm text-yellow-800 dark:text-yellow-200">
                      Our team will verify your payment within 24-48 hours. You'll receive an email 
                      once your payment has been confirmed and your portal access will be activated.
                    </p>
                  </div>

                  {paymentProofs.length > 0 && (
                    <div className="mt-6">
                      <h3 className="font-semibold text-foreground mb-3">Submitted Proofs</h3>
                      <div className="space-y-3">
                        {paymentProofs.map((proof) => (
                          <div
                            key={proof.id}
                            className="flex items-center justify-between p-3 bg-muted rounded-lg"
                          >
                            <div className="flex items-center gap-3">
                              <FileText className="h-5 w-5 text-muted-foreground" />
                              <div>
                                <p className="text-sm font-medium text-foreground">{proof.file_name}</p>
                                <p className="text-xs text-muted-foreground">
                                  {new Date(proof.created_at).toLocaleString()}
                                </p>
                              </div>
                            </div>
                            <Badge variant={proof.status === "approved" ? "outline" : "secondary"}>
                              {proof.status === "pending_review" ? "Pending" : proof.status}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>Upload Payment Proof</CardTitle>
                  <CardDescription>
                    Upload a screenshot or PDF of your payment confirmation
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div
                    className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                      selectedFile 
                        ? "border-primary bg-primary/5" 
                        : "border-muted-foreground/25 hover:border-primary/50"
                    }`}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/jpeg,image/png,image/webp,application/pdf"
                      className="hidden"
                      onChange={handleFileSelect}
                    />
                    
                    {selectedFile ? (
                      <div className="space-y-2">
                        <FileText className="h-12 w-12 text-primary mx-auto" />
                        <p className="font-medium text-foreground">{selectedFile.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedFile(null);
                            if (fileInputRef.current) {
                              fileInputRef.current.value = "";
                            }
                          }}
                        >
                          Remove
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-2 cursor-pointer">
                        <Upload className="h-12 w-12 text-muted-foreground mx-auto" />
                        <p className="font-medium text-foreground">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-sm text-muted-foreground">
                          JPG, PNG, WebP, or PDF (max 10MB)
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Add any additional details about your payment..."
                      rows={3}
                    />
                  </div>

                  <Button
                    className="w-full"
                    size="lg"
                    disabled={!selectedFile || uploading}
                    onClick={handleUpload}
                  >
                    {uploading ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Uploading...
                      </>
                    ) : (
                      <>
                        <Upload className="h-4 w-4 mr-2" />
                        Submit Payment Proof
                      </>
                    )}
                  </Button>

                  <div className="bg-muted/50 rounded-lg p-4 text-sm text-muted-foreground">
                    <strong className="text-foreground">What happens next?</strong>
                    <ol className="list-decimal list-inside mt-2 space-y-1">
                      <li>Our team will review your payment proof</li>
                      <li>You'll receive an email confirmation within 24-48 hours</li>
                      <li>Once verified, you'll gain access to sign your service agreement</li>
                      <li>After signing, your full portal access will be activated</li>
                    </ol>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </PortalLayout>
  );
};

export default PortalPayInvoicePage;
