import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Loader2 } from "lucide-react";
import PortalLayout from "./PortalLayout";

interface ProtectedPortalRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
  requireModerator?: boolean;
}

const ProtectedPortalRoute = ({
  children,
  requireAdmin = false,
  requireModerator = false,
}: ProtectedPortalRouteProps) => {
  const { user, session, isLoading, isAdmin, isModerator } = useAuth();

  if (isLoading) {
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

  return <PortalLayout>{children}</PortalLayout>;
};

export default ProtectedPortalRoute;
