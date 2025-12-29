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
import FloatingActions from "@/components/FloatingActions";
import TawkToChat from "@/components/TawkToChat";
import GlobalSEO from "@/components/GlobalSEO";
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
const WebDevelopmentPage = lazy(() => import("./pages/WebDevelopmentPage"));
const ContentWritingPage = lazy(() => import("./pages/ContentWritingPage"));
const GraphicDesignPage = lazy(() => import("./pages/GraphicDesignPage"));
const SocialMediaPage = lazy(() => import("./pages/SocialMediaPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const TermsOfServicePage = lazy(() => import("./pages/TermsOfServicePage"));
const StatePage = lazy(() => import("./pages/StatePage"));
const CityPage = lazy(() => import("./pages/CityPage"));
const ServingIndustriesPage = lazy(() => import("./pages/ServingIndustriesPage"));
const DynamicRouteResolver = lazy(() => import("./components/DynamicRouteResolver"));
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

// Static page routes configuration (path relative to language prefix)
const staticPageRoutes = [
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
  { path: "web-development", element: <WebDevelopmentPage /> },
  { path: "content-writing", element: <ContentWritingPage /> },
  { path: "graphic-design", element: <GraphicDesignPage /> },
  { path: "social-media", element: <SocialMediaPage /> },
  { path: "privacy", element: <PrivacyPolicyPage /> },
  { path: "terms", element: <TermsOfServicePage /> },
  { path: "serving-industries", element: <ServingIndustriesPage /> },
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <HelmetProvider>
          <GlobalSEO />
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <FloatingActions />
            <TawkToChat />
            <BrowserRouter>
              <LanguageRedirect />
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  {/* Root redirect to default language */}
                  <Route path="/" element={<Navigate to={`/${DEFAULT_LANGUAGE}`} replace />} />

                  {/* Explicit 404 route per language */}
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <Route key={`notfound-${lang}`} path={`/${lang}/404`} element={<NotFound />} />
                  ))}
                  <Route path="/404" element={<Navigate to={`/${DEFAULT_LANGUAGE}/404`} replace />} />

                  {/* Static routes for each language - FIRST to take priority */}
                  {SUPPORTED_LANGUAGES.map((lang) =>
                    staticPageRoutes.map((route) => (
                      <Route
                        key={`${lang}-${route.path || "index"}`}
                        path={route.path ? `/${lang}/${route.path}` : `/${lang}`}
                        element={route.element}
                      />
                    ))
                  )}

                  {/* Dynamic geo pages - 4 segment paths (city level) */}
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <Route
                      key={`city-${lang}`}
                      path={`/${lang}/:countryCode/:stateCode/:citySlug`}
                      element={<CityPage />}
                    />
                  ))}

                  {/* Dynamic geo pages - 3 segment paths (state level) */}
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <Route
                      key={`state-${lang}`}
                      path={`/${lang}/:countryCode/:stateCode`}
                      element={<StatePage />}
                    />
                  ))}

                  {/* Dynamic 2-segment routes - industry pages OR country pages */}
                  {/* Resolved by DynamicRouteResolver based on slug format */}
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <Route
                      key={`dynamic-${lang}`}
                      path={`/${lang}/:slug`}
                      element={<DynamicRouteResolver />}
                    />
                  ))}

                  {/* Legacy routes without language prefix - redirect to default language */}
                  {staticPageRoutes.slice(1).map((route) => (
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
