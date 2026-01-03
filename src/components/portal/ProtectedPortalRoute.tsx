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

// Map routes to required features
const routeFeatureMap: Record<string, string> = {
  "/en/portal/dashboard": "dashboard",
  "/en/portal/projects": "projects",
  "/en/portal/messages": "messages",
  "/en/portal/documents": "documents",
  "/en/portal/agreements": "agreement",
  "/en/portal/invoices": "invoices",
  "/en/portal/team": "team",
  "/en/portal/settings": "settings",
  "/en/portal/subscription": "subscription",
};

// Routes that don't need access gate checks
const alwaysAllowedRoutes = [
  "/en/portal/invoices",
  "/en/portal/agreements",
  "/en/portal/settings",
];

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

  // Check if route is always allowed
  const isAlwaysAllowed = alwaysAllowedRoutes.some(route => 
    location.pathname.startsWith(route)
  );

  // If full access or always allowed route, render children directly
  if (portalAccessLevel === "full" || isAlwaysAllowed) {
    return <PortalLayout>{children}</PortalLayout>;
  }

  // Get required feature for this route
  const requiredFeature = routeFeatureMap[location.pathname] || "dashboard";

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
