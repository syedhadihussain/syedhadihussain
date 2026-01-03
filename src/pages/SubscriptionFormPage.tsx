import { useState } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { Loader2, ArrowLeft, Check, Lock, CreditCard, Shield, Clock } from "lucide-react";
import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import { z } from "zod";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  businessName: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  country: z.string().min(2, "Please enter your country"),
  notes: z.string().optional(),
});

const SubscriptionFormPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Get plan details from URL params (locked, non-editable)
  const planName = searchParams.get("plan") || "Unknown Plan";
  const planPrice = searchParams.get("price") || "$0";
  const planDuration = searchParams.get("duration") || "monthly";
  const includedServices = searchParams.get("services")?.split(",") || [];

  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    country: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const result = formSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from("subscription_requests")
        .insert({
          full_name: formData.fullName.trim(),
          business_name: formData.businessName.trim() || null,
          email: formData.email.trim().toLowerCase(),
          phone: formData.phone.trim() || null,
          country: formData.country.trim(),
          notes: formData.notes.trim() || null,
          plan_name: planName,
          plan_price: parseFloat(planPrice.replace(/[^0-9.]/g, "")) || 0,
          plan_duration: planDuration,
          included_services: includedServices,
          status: "pending_invoice",
        });

      if (error) throw error;

      setSubmitted(true);
      toast({
        title: "Request Submitted Successfully",
        description: "We'll review your request and send you an invoice shortly.",
      });
    } catch (error) {
      console.error("Error submitting request:", error);
      toast({
        title: "Submission Failed",
        description: "Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <>
        <Helmet>
          <title>Request Submitted | Syed Hadi Hussain</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <Navigation />
        <main className="min-h-screen pt-24 pb-16">
          <div className="container-narrow max-w-lg mx-auto">
            <Card className="text-center">
              <CardContent className="pt-12 pb-8">
                <div className="mx-auto mb-6 p-4 rounded-full bg-green-100 dark:bg-green-900 w-fit">
                  <Check className="h-10 w-10 text-green-600 dark:text-green-400" />
                </div>
                <h1 className="text-2xl font-bold text-foreground mb-4">
                  Request Submitted!
                </h1>
                <p className="text-muted-foreground mb-6">
                  Thank you for your interest in our <strong>{planName}</strong> plan.
                  Our team will review your request and send you an invoice within 24-48 hours.
                </p>
                <div className="bg-muted/50 rounded-lg p-4 text-left mb-6">
                  <h3 className="font-semibold text-foreground mb-2">What's Next?</h3>
                  <ol className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs shrink-0">1</span>
                      You'll receive an invoice via email
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs shrink-0">2</span>
                      Complete the payment and upload proof
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs shrink-0">3</span>
                      Once verified, you'll receive portal access
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs shrink-0">4</span>
                      Sign the service agreement to begin
                    </li>
                  </ol>
                </div>
                <Button asChild>
                  <Link to="/en">Return to Homepage</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Subscribe to {planName} | Syed Hadi Hussain</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Navigation />
      
      <main className="min-h-screen pt-24 pb-16">
        <div className="container-narrow">
          <Link
            to="/en/pricing"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Pricing
          </Link>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Subscribe to {planName}</CardTitle>
                  <CardDescription>
                    Fill out the form below to get started. No account creation required.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange("fullName", e.target.value)}
                          placeholder="John Doe"
                          className={errors.fullName ? "border-destructive" : ""}
                        />
                        {errors.fullName && (
                          <p className="text-sm text-destructive">{errors.fullName}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="businessName">Business Name</Label>
                        <Input
                          id="businessName"
                          value={formData.businessName}
                          onChange={(e) => handleInputChange("businessName", e.target.value)}
                          placeholder="Acme Inc."
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="john@acme.com"
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">{errors.email}</p>
                      )}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone (Optional)</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+1 234 567 890"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="country">Country *</Label>
                        <Input
                          id="country"
                          value={formData.country}
                          onChange={(e) => handleInputChange("country", e.target.value)}
                          placeholder="United States"
                          className={errors.country ? "border-destructive" : ""}
                        />
                        {errors.country && (
                          <p className="text-sm text-destructive">{errors.country}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes">Additional Notes (Optional)</Label>
                      <Textarea
                        id="notes"
                        value={formData.notes}
                        onChange={(e) => handleInputChange("notes", e.target.value)}
                        placeholder="Any specific requirements or questions..."
                        rows={3}
                      />
                    </div>

                    <Separator />

                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-primary mt-0.5" />
                        <div className="text-sm">
                          <p className="font-medium text-foreground">No Account Created Yet</p>
                          <p className="text-muted-foreground">
                            This is a subscription request. You won't be able to access the portal 
                            until payment is verified and approved by our team.
                          </p>
                        </div>
                      </div>
                    </div>

                    <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Submitting Request...
                        </>
                      ) : (
                        <>
                          <CreditCard className="h-4 w-4 mr-2" />
                          Submit Subscription Request
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Plan Summary (Locked) */}
            <div className="lg:col-span-2">
              <Card className="sticky top-24">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Plan Summary</CardTitle>
                    <Badge variant="secondary" className="gap-1">
                      <Lock className="h-3 w-3" />
                      Locked
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <h3 className="font-bold text-xl text-foreground">{planName}</h3>
                    <div className="flex items-baseline gap-1 mt-2">
                      <span className="text-3xl font-bold text-primary">{planPrice}</span>
                      <span className="text-muted-foreground">/{planDuration}</span>
                    </div>
                  </div>

                  {includedServices.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Included Services</h4>
                      <ul className="space-y-2">
                        {includedServices.map((service, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Separator />

                  <div className="space-y-3">
                    <div className="flex items-start gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <span className="text-muted-foreground">
                        Invoice will be sent within 24-48 hours
                      </span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <Shield className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <span className="text-muted-foreground">
                        Service begins after payment verification
                      </span>
                    </div>
                  </div>

                  <div className="text-xs text-muted-foreground bg-muted/50 p-3 rounded">
                    <strong>Note:</strong> These plan details are locked and cannot be modified. 
                    For custom pricing, please contact us directly.
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SubscriptionFormPage;
