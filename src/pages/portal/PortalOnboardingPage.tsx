import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { usePinVerification } from "@/hooks/usePinVerification";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Progress } from "@/components/ui/progress";
import { Loader2, CheckCircle2, Lock, Building2, Users } from "lucide-react";
import { toast } from "sonner";
import { Helmet } from "react-helmet-async";

type OnboardingStep = "pin_verification" | "profile_setup" | "team_setup" | "complete";

interface ClientProfile {
  id: string;
  user_id: string;
  company_name: string | null;
  country: string | null;
  phone: string | null;
  onboarding_step: string | null;
  onboarding_completed: boolean | null;
}

const PortalOnboardingPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { verifyPin, loading: pinLoading } = usePinVerification();

  const [currentStep, setCurrentStep] = useState<OnboardingStep>("pin_verification");
  const [loading, setLoading] = useState(true);
  const [clientProfile, setClientProfile] = useState<ClientProfile | null>(null);

  // PIN verification
  const [pin, setPin] = useState("");

  // Profile setup
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");

  // Team setup
  const [teamName, setTeamName] = useState("");

  useEffect(() => {
    fetchClientProfile();
  }, [user]);

  const fetchClientProfile = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from("client_profiles")
        .select("id, user_id, company_name, country, phone, onboarding_step, onboarding_completed")
        .eq("user_id", user.id)
        .maybeSingle();

      if (error) throw error;

      if (data) {
        setClientProfile(data);
        
        // Check if onboarding is completed
        if (data.onboarding_completed) {
          navigate("/en/portal/dashboard");
          return;
        }

        // Resume from saved step
        if (data.onboarding_step) {
          setCurrentStep(data.onboarding_step as OnboardingStep);
        }

        // Pre-fill existing data
        if (data.company_name) setCompanyName(data.company_name);
        if (data.phone) setPhone(data.phone);
        if (data.country) setCountry(data.country);
      }
    } catch (error) {
      console.error("Error fetching client profile:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateOnboardingStep = async (step: OnboardingStep) => {
    if (!clientProfile) return;

    try {
      await supabase
        .from("client_profiles")
        .update({ onboarding_step: step })
        .eq("id", clientProfile.id);
    } catch (error) {
      console.error("Error updating onboarding step:", error);
    }
  };

  const handleVerifyPin = async () => {
    if (!user || pin.length !== 6) return;

    const result = await verifyPin(user.id, pin, "onboarding");
    if (result.success) {
      setCurrentStep("profile_setup");
      await updateOnboardingStep("profile_setup");
    }
  };

  const handleProfileSetup = async () => {
    if (!clientProfile || !companyName.trim()) {
      toast.error("Company name is required");
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase
        .from("client_profiles")
        .update({
          company_name: companyName.trim(),
          phone: phone.trim() || null,
          country: country.trim() || null,
          onboarding_step: "team_setup",
        })
        .eq("id", clientProfile.id);

      if (error) throw error;

      setCurrentStep("team_setup");
      toast.success("Profile updated");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  const handleTeamSetup = async () => {
    if (!clientProfile) return;

    setLoading(true);
    try {
      // Create team if name provided
      if (teamName.trim()) {
        const { error: teamError } = await supabase
          .from("client_teams")
          .insert({
            client_id: clientProfile.id,
            name: teamName.trim(),
            description: "Default team",
          });

        if (teamError) throw teamError;
      }

      // Complete onboarding
      const { error } = await supabase
        .from("client_profiles")
        .update({
          onboarding_step: "complete",
          onboarding_completed: true,
        })
        .eq("id", clientProfile.id);

      if (error) throw error;

      setCurrentStep("complete");
      toast.success("Onboarding complete!");

      // Redirect after a short delay
      setTimeout(() => {
        navigate("/en/portal/dashboard");
      }, 2000);
    } catch (error) {
      console.error("Error completing onboarding:", error);
      toast.error("Failed to complete onboarding");
    } finally {
      setLoading(false);
    }
  };

  const skipTeamSetup = async () => {
    if (!clientProfile) return;

    setLoading(true);
    try {
      const { error } = await supabase
        .from("client_profiles")
        .update({
          onboarding_step: "complete",
          onboarding_completed: true,
        })
        .eq("id", clientProfile.id);

      if (error) throw error;

      setCurrentStep("complete");
      toast.success("Onboarding complete!");

      setTimeout(() => {
        navigate("/en/portal/dashboard");
      }, 2000);
    } catch (error) {
      console.error("Error skipping team setup:", error);
      toast.error("Failed to complete onboarding");
    } finally {
      setLoading(false);
    }
  };

  const getProgress = () => {
    switch (currentStep) {
      case "pin_verification":
        return 25;
      case "profile_setup":
        return 50;
      case "team_setup":
        return 75;
      case "complete":
        return 100;
      default:
        return 0;
    }
  };

  if (loading && currentStep === "pin_verification") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Client Onboarding | Portal</title>
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold text-foreground">Welcome to Your Portal</h1>
            <p className="text-muted-foreground">Complete the onboarding to get started</p>
          </div>

          <Progress value={getProgress()} className="h-2" />

          {currentStep === "pin_verification" && (
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Verify Your PIN</CardTitle>
                <CardDescription>
                  Enter the 6-digit PIN sent to your email to verify your account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-center">
                  <InputOTP
                    maxLength={6}
                    value={pin}
                    onChange={setPin}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
                <Button
                  className="w-full"
                  onClick={handleVerifyPin}
                  disabled={pin.length !== 6 || pinLoading}
                >
                  {pinLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Verifying...
                    </>
                  ) : (
                    "Verify PIN"
                  )}
                </Button>
                <p className="text-sm text-center text-muted-foreground">
                  Didn't receive a PIN? Contact support.
                </p>
              </CardContent>
            </Card>
          )}

          {currentStep === "profile_setup" && (
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Set Up Your Profile</CardTitle>
                <CardDescription>
                  Tell us about your company
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Company Name *</Label>
                  <Input
                    id="company-name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Your Company Name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="United States"
                  />
                </div>
                <Button
                  className="w-full"
                  onClick={handleProfileSetup}
                  disabled={!companyName.trim() || loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    "Continue"
                  )}
                </Button>
              </CardContent>
            </Card>
          )}

          {currentStep === "team_setup" && (
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Create Your Team</CardTitle>
                <CardDescription>
                  Create a team to invite your team members
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="team-name">Team Name</Label>
                  <Input
                    id="team-name"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    placeholder="e.g., Marketing Team"
                  />
                </div>
                <Button
                  className="w-full"
                  onClick={handleTeamSetup}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating...
                    </>
                  ) : (
                    "Create Team & Complete"
                  )}
                </Button>
                <Button
                  variant="ghost"
                  className="w-full"
                  onClick={skipTeamSetup}
                  disabled={loading}
                >
                  Skip for Now
                </Button>
              </CardContent>
            </Card>
          )}

          {currentStep === "complete" && (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <div className="p-3 rounded-full bg-green-100 dark:bg-green-900 mb-4">
                  <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">You're All Set!</h2>
                <p className="text-muted-foreground text-center mt-2">
                  Redirecting to your dashboard...
                </p>
                <Loader2 className="h-5 w-5 animate-spin mt-4 text-primary" />
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </>
  );
};

export default PortalOnboardingPage;
