import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import LanguageRedirect from "@/components/LanguageRedirect";
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from "@/lib/i18n-config";
import Index from "./pages/Index";

// Lazy load pages for better performance
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const CaseStudiesPage = lazy(() => import("./pages/CaseStudiesPage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const ProjectManagementPage = lazy(() => import("./pages/ProjectManagementPage"));
const LocalServiceAdsPage = lazy(() => import("./pages/LocalServiceAdsPage"));
const PricingPage = lazy(() => import("./pages/PricingPage"));
const FormGuideBlogPage = lazy(() => import("./pages/FormGuideBlogPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
      <p className="text-muted-foreground text-sm">Loading...</p>
    </div>
  </div>
);

// Page routes configuration
const pageRoutes = [
  { path: "", element: <Index /> },
  { path: "about", element: <AboutPage /> },
  { path: "services", element: <ServicesPage /> },
  { path: "portfolio", element: <PortfolioPage /> },
  { path: "case-studies", element: <CaseStudiesPage /> },
  { path: "faq", element: <FAQPage /> },
  { path: "contact", element: <ContactPage /> },
  { path: "blog", element: <BlogPage /> },
  { path: "project-management", element: <ProjectManagementPage /> },
  { path: "local-service-ads", element: <LocalServiceAdsPage /> },
  { path: "pricing", element: <PricingPage /> },
  { path: "blog/how-to-fill-contact-form", element: <FormGuideBlogPage /> },
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <HelmetProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <LanguageRedirect />
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  {/* Root redirect to default language */}
                  <Route path="/" element={<Navigate to={`/${DEFAULT_LANGUAGE}`} replace />} />
                  
                  {/* Language-prefixed routes */}
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <Route key={lang} path={`/${lang}`}>
                      {pageRoutes.map((route) => (
                        <Route
                          key={`${lang}-${route.path}`}
                          path={route.path}
                          element={route.element}
                        />
                      ))}
                    </Route>
                  ))}

                  {/* Legacy routes without language prefix - redirect to default language */}
                  {pageRoutes.slice(1).map((route) => (
                    <Route
                      key={`legacy-${route.path}`}
                      path={`/${route.path}`}
                      element={<Navigate to={`/${DEFAULT_LANGUAGE}/${route.path}`} replace />}
                    />
                  ))}

                  {/* 404 */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </TooltipProvider>
        </HelmetProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
