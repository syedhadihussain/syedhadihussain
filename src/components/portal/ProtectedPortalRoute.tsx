import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useClientOnboarding } from "@/hooks/useClientOnboarding";
import { Loader2 } from "lucide-react";
import PortalLayout from "./PortalLayout";
import AccessGate from "./AccessGate";

interface ProtectedPortalRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
  requireModerator?: boolean;
}

// Map routes to required features - supports all languages
const getRouteFeature = (pathname: string): string => {
  // Extract the feature from the path regardless of language prefix
  if (pathname.includes("/portal/dashboard")) return "dashboard";
  if (pathname.includes("/portal/projects")) return "projects";
  if (pathname.includes("/portal/messages")) return "messages";
  if (pathname.includes("/portal/documents")) return "documents";
  if (pathname.includes("/portal/agreements")) return "agreement";
  if (pathname.includes("/portal/invoices")) return "invoices";
  if (pathname.includes("/portal/team")) return "team";
  if (pathname.includes("/portal/settings")) return "settings";
  if (pathname.includes("/portal/subscription")) return "subscription";
  return "dashboard";
};

// Routes that don't need access gate checks - check pattern not exact path
const isAlwaysAllowedRoute = (pathname: string): boolean => {
  return (
    pathname.includes("/portal/invoices") ||
    pathname.includes("/portal/agreements") ||
    pathname.includes("/portal/settings")
  );
};

const ProtectedPortalRoute = ({
  children,
  requireAdmin = false,
  requireModerator = false,
}: ProtectedPortalRouteProps) => {
  const { user, session, isLoading, isAdmin, isModerator } = useAuth();
  const { portalAccessLevel, isLoading: onboardingLoading } = useClientOnboarding();
  const location = useLocation();

  if (isLoading || onboardingLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!session || !user) {
    return <Navigate to="/en/portal/login" replace />;
  }

  if (requireAdmin && !isAdmin) {
    return (
      <PortalLayout>
        <div className="flex items-center justify-center h-full">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold text-foreground">Access Denied</h1>
            <p className="text-muted-foreground">
              You need admin privileges to access this page.
            </p>
          </div>
        </div>
      </PortalLayout>
    );
  }

  if (requireModerator && !isAdmin && !isModerator) {
    return (
      <PortalLayout>
        <div className="flex items-center justify-center h-full">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold text-foreground">Access Denied</h1>
            <p className="text-muted-foreground">
              You need moderator privileges to access this page.
            </p>
          </div>
        </div>
      </PortalLayout>
    );
  }

  // Admins and moderators bypass access control
  if (isAdmin || isModerator) {
    return <PortalLayout>{children}</PortalLayout>;
  }

  // Check if route is always allowed using the function
  const isRouteAllowed = isAlwaysAllowedRoute(location.pathname);

  // If full access or always allowed route, render children directly
  if (portalAccessLevel === "full" || isRouteAllowed) {
    return <PortalLayout>{children}</PortalLayout>;
  }

  // Get required feature for this route using the function
  const requiredFeature = getRouteFeature(location.pathname);

  // Wrap children in AccessGate for restricted routes
  return (
    <PortalLayout>
      <AccessGate requiredFeature={requiredFeature}>
        {children}
      </AccessGate>
    </PortalLayout>
  );
};

export default ProtectedPortalRoute;
