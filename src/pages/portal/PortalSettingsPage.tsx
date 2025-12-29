import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { usePushNotifications } from "@/hooks/usePushNotifications";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { Loader2, User, Building2, Globe, Phone, Mail, Hash, Bell, Smartphone, Lock } from "lucide-react";

interface ClientProfile {
  id: string;
  client_id: string;
  company_name: string | null;
  country: string | null;
  phone: string | null;
}

interface Profile {
  id: string;
  full_name: string | null;
  email: string | null;
}

const PortalSettingsPage = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const { isSupported: pushSupported, isRegistered: pushRegistered, requestPermission } = usePushNotifications();
  
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [clientProfile, setClientProfile] = useState<ClientProfile | null>(null);

  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  
  // Notification preferences
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotificationsEnabled, setPushNotificationsEnabled] = useState(false);

  useEffect(() => {
    const fetchProfiles = async () => {
      if (!user) return;

      try {
        const [profileRes, clientProfileRes] = await Promise.all([
          supabase.from("profiles").select("*").eq("id", user.id).maybeSingle(),
          supabase.from("client_profiles").select("*").eq("user_id", user.id).maybeSingle(),
        ]);

        if (profileRes.data) {
          setProfile(profileRes.data);
          setFullName(profileRes.data.full_name || "");
        }

        if (clientProfileRes.data) {
          setClientProfile(clientProfileRes.data);
          setCompanyName(clientProfileRes.data.company_name || "");
          setCountry(clientProfileRes.data.country || "");
          setPhone(clientProfileRes.data.phone || "");
        }

        // Load notification preferences from localStorage
        const storedPrefs = localStorage.getItem("notification_prefs");
        if (storedPrefs) {
          const prefs = JSON.parse(storedPrefs);
          setEmailNotifications(prefs.email ?? true);
          setPushNotificationsEnabled(prefs.push ?? false);
        }
      } catch (error) {
        console.error("Error fetching profiles:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfiles();
  }, [user]);

  const handleSave = async () => {
    if (!user) return;

    setIsSaving(true);
    try {
      const [profileUpdate, clientProfileUpdate] = await Promise.all([
        supabase.from("profiles").update({ full_name: fullName }).eq("id", user.id),
        supabase
          .from("client_profiles")
          .update({
            company_name: companyName,
            country: country,
            phone: phone,
          })
          .eq("user_id", user.id),
      ]);

      if (profileUpdate.error) throw profileUpdate.error;
      if (clientProfileUpdate.error) throw clientProfileUpdate.error;

      toast({
        title: "Settings Saved",
        description: "Your profile has been updated successfully.",
      });
    } catch (error) {
      console.error("Error saving settings:", error);
      toast({
        title: "Error",
        description: "Failed to save settings. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handlePushToggle = async (enabled: boolean) => {
    if (enabled && pushSupported) {
      const granted = await requestPermission();
      setPushNotificationsEnabled(granted);
      saveNotificationPrefs({ email: emailNotifications, push: granted });
    } else {
      setPushNotificationsEnabled(false);
      saveNotificationPrefs({ email: emailNotifications, push: false });
    }
  };

  const handleEmailToggle = (enabled: boolean) => {
    setEmailNotifications(enabled);
    saveNotificationPrefs({ email: enabled, push: pushNotificationsEnabled });
  };

  const saveNotificationPrefs = (prefs: { email: boolean; push: boolean }) => {
    localStorage.setItem("notification_prefs", JSON.stringify(prefs));
    toast({
      title: "Preferences Saved",
      description: "Your notification preferences have been updated.",
    });
  };

  const handleResetPassword = async () => {
    if (user?.email) {
      const { error } = await supabase.auth.resetPasswordForEmail(user.email, {
        redirectTo: `${window.location.origin}/portal/settings`,
      });
      if (error) {
        toast({
          title: "Error",
          description: "Failed to send reset email",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Email Sent",
          description: "Password reset email sent! Check your inbox.",
        });
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Settings | Client Portal</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="space-y-6 max-w-2xl">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground mt-1">
            Manage your profile and account settings.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Account Information</CardTitle>
            <CardDescription>
              This information is read-only and managed by the system.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="flex items-center gap-1">
                  <Hash className="h-3 w-3" />
                  Client ID
                </Label>
                <Input value={clientProfile?.client_id || ""} disabled className="font-mono" />
              </div>
              <div className="space-y-2">
                <Label className="flex items-center gap-1">
                  <Mail className="h-3 w-3" />
                  Email
                </Label>
                <Input value={user?.email || ""} disabled />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Profile Details</CardTitle>
            <CardDescription>
              Update your personal and company information.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="flex items-center gap-1">
                <User className="h-3 w-3" />
                Full Name
              </Label>
              <Input
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="companyName" className="flex items-center gap-1">
                <Building2 className="h-3 w-3" />
                Company Name
              </Label>
              <Input
                id="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Acme Inc."
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="country" className="flex items-center gap-1">
                  <Globe className="h-3 w-3" />
                  Country
                </Label>
                <Input
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="United States"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-1">
                  <Phone className="h-3 w-3" />
                  Phone
                </Label>
                <Input
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 234 567 890"
                />
              </div>
            </div>

            <Button onClick={handleSave} disabled={isSaving} className="mt-4">
              {isSaving ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notifications
            </CardTitle>
            <CardDescription>
              Choose how you want to be notified about updates.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Email Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive email notifications for messages and updates.
                </p>
              </div>
              <Switch
                checked={emailNotifications}
                onCheckedChange={handleEmailToggle}
              />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4" />
                  Push Notifications
                </Label>
                <p className="text-sm text-muted-foreground">
                  {pushSupported
                    ? "Receive push notifications on your mobile device."
                    : "Push notifications are only available on the mobile app."}
                </p>
              </div>
              <Switch
                checked={pushNotificationsEnabled}
                onCheckedChange={handlePushToggle}
                disabled={!pushSupported}
              />
            </div>
            
            {pushRegistered && (
              <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-md p-3">
                <p className="text-sm text-green-700 dark:text-green-300">
                  ✓ Push notifications are enabled on this device.
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              Security
            </CardTitle>
            <CardDescription>
              Manage your account security settings.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Change Password</Label>
                <p className="text-sm text-muted-foreground">
                  Update your password to keep your account secure.
                </p>
              </div>
              <Button variant="outline" onClick={handleResetPassword}>
                Reset Password
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default PortalSettingsPage;
