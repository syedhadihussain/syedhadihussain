import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const { language, t } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEOHead
        title="Page Not Found | Syed Hadi Hussain"
        description="The page you're looking for doesn't exist. Return to the homepage to explore our Local SEO services."
        noindex={true}
      />
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center px-4">
          <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
          <p className="mb-2 text-2xl font-semibold text-foreground">Page Not Found</p>
          <p className="mb-8 text-muted-foreground max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gap-2">
              <Link to={`/${language}`}>
                <Home className="w-4 h-4" />
                Go to Homepage
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link to={`/${language}/contact`}>
                <ArrowLeft className="w-4 h-4" />
                Contact Support
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
