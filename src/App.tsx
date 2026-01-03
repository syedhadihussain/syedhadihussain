import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import LanguageRedirect from "@/components/LanguageRedirect";
import FloatingActions from "@/components/FloatingActions";
import TawkToChat from "@/components/TawkToChat";
import GlobalSEO from "@/components/GlobalSEO";
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE, isSupportedLanguage } from "@/lib/i18n-config";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";

// Lazy load pages for better performance
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const CaseStudiesPage = lazy(() => import("./pages/CaseStudiesPage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
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
const DistrictPage = lazy(() => import("./pages/DistrictPage"));
const ServingIndustriesPage = lazy(() => import("./pages/ServingIndustriesPage"));
const AreasWeServePage = lazy(() => import("./pages/AreasWeServePage"));
const CountryPage = lazy(() => import("./pages/CountryPage"));
const IndustryPage = lazy(() => import("./pages/IndustryPage"));
const IndexingDashboardPage = lazy(() => import("./pages/IndexingDashboardPage"));
const AdminAuthPage = lazy(() => import("./pages/AdminAuthPage"));
const ProtectedAdminRoute = lazy(() => import("./components/ProtectedAdminRoute").then(m => ({ default: m.default })));
const PortalLoginPage = lazy(() => import("./pages/portal/PortalLoginPage"));
const PortalOnboardingPage = lazy(() => import("./pages/portal/PortalOnboardingPage"));
const PortalDashboardPage = lazy(() => import("./pages/portal/PortalDashboardPage"));
const PortalProjectsPage = lazy(() => import("./pages/portal/PortalProjectsPage"));
const PortalMessagesPage = lazy(() => import("./pages/portal/PortalMessagesPage"));
const PortalDocumentsPage = lazy(() => import("./pages/portal/PortalDocumentsPage"));
const PortalAgreementsPage = lazy(() => import("./pages/portal/PortalEnhancedAgreementsPage"));
const PortalSettingsPage = lazy(() => import("./pages/portal/PortalSettingsPage"));
const PortalSubscriptionPage = lazy(() => import("./pages/portal/PortalSubscriptionPage"));
const PortalProjectDetailsPage = lazy(() => import("./pages/portal/PortalProjectDetailsPage"));
const PortalTeamPage = lazy(() => import("./pages/portal/PortalTeamPage"));
const PortalInvoicesPage = lazy(() => import("./pages/portal/PortalInvoicesPage"));
const PortalMultiProjectPage = lazy(() => import("./pages/portal/PortalMultiProjectPage"));
const AdminClientsPage = lazy(() => import("./pages/portal/admin/AdminClientsPage"));
const AdminProjectsPage = lazy(() => import("./pages/portal/admin/AdminProjectsPage"));
const AdminRolesPage = lazy(() => import("./pages/portal/admin/AdminRolesPage"));
const AdminAnnouncementsPage = lazy(() => import("./pages/portal/admin/AdminAnnouncementsPage"));
const AdminAnalyticsPage = lazy(() => import("./pages/portal/admin/AdminAnalyticsPage"));
const AdminAutomationPage = lazy(() => import("./pages/portal/admin/AdminAutomationPage"));
const AdminSitemapDashboardPage = lazy(() => import("./pages/portal/admin/AdminSitemapDashboardPage"));
const ProtectedPortalRoute = lazy(() => import("./components/portal/ProtectedPortalRoute").then(m => ({ default: m.default })));
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

// Get preferred language for legacy routes / root redirects
const getPreferredLanguage = () => {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;

  const stored = localStorage.getItem("language");
  if (stored && isSupportedLanguage(stored)) return stored;

  const browserLang = navigator.language?.split("-")[0]?.toLowerCase();
  if (browserLang && isSupportedLanguage(browserLang)) return browserLang;

  return DEFAULT_LANGUAGE;
};

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
  { path: "blog/:slug", element: <BlogPostPage /> },
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
  { path: "areas-we-serve", element: <AreasWeServePage /> },
  { path: "admin/login", element: <AdminAuthPage /> },
  { path: "portal/login", element: <PortalLoginPage /> },
  { path: "portal/onboarding", element: <PortalOnboardingPage /> },
];

// Protected portal routes (require authentication)
const protectedPortalRoutes = [
  { path: "portal/dashboard", element: <PortalDashboardPage /> },
  { path: "portal/projects", element: <PortalMultiProjectPage /> },
  { path: "portal/projects/:projectId", element: <PortalProjectDetailsPage /> },
  { path: "portal/messages", element: <PortalMessagesPage /> },
  { path: "portal/documents", element: <PortalDocumentsPage /> },
  { path: "portal/agreements", element: <PortalAgreementsPage /> },
  { path: "portal/invoices", element: <PortalInvoicesPage /> },
  { path: "portal/subscription", element: <PortalSubscriptionPage /> },
  { path: "portal/team", element: <PortalTeamPage /> },
  { path: "portal/settings", element: <PortalSettingsPage /> },
];

// Admin portal routes (require admin role)
const adminPortalRoutes = [
  { path: "portal/admin/clients", element: <AdminClientsPage />, requireAdmin: true },
  { path: "portal/admin/projects", element: <AdminProjectsPage />, requireModerator: true },
  { path: "portal/admin/roles", element: <AdminRolesPage />, requireAdmin: true },
  { path: "portal/admin/announcements", element: <AdminAnnouncementsPage />, requireModerator: true },
  { path: "portal/admin/analytics", element: <AdminAnalyticsPage />, requireModerator: true },
  { path: "portal/admin/automation", element: <AdminAutomationPage />, requireAdmin: true },
  { path: "portal/admin/sitemaps", element: <AdminSitemapDashboardPage />, requireAdmin: true },
];

// Protected admin routes (require authentication + admin role)
const protectedAdminRoutes = [
  { path: "admin/indexing", element: <IndexingDashboardPage /> },
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <HelmetProvider>
            <GlobalSEO />
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <FloatingActions />
              <TawkToChat />
              <BrowserRouter>
                <ScrollToTop />
                <LanguageRedirect />
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  {/* Root redirect to preferred language */}
                  <Route path="/" element={<Navigate to={`/${getPreferredLanguage()}`} replace />} />

                  {/* Explicit 404 route per language */}
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <Route key={`notfound-${lang}`} path={`/${lang}/404`} element={<NotFound />} />
                  ))}
                  <Route path="/404" element={<Navigate to={`/${getPreferredLanguage()}/404`} replace />} />

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

                  {/* Protected portal routes - require authentication */}
                  {SUPPORTED_LANGUAGES.map((lang) =>
                    protectedPortalRoutes.map((route) => (
                      <Route
                        key={`${lang}-portal-${route.path}`}
                        path={`/${lang}/${route.path}`}
                        element={
                          <ProtectedPortalRoute>
                            {route.element}
                          </ProtectedPortalRoute>
                        }
                      />
                    ))
                  )}

                  {/* Admin portal routes - require admin/moderator role */}
                  {SUPPORTED_LANGUAGES.map((lang) =>
                    adminPortalRoutes.map((route) => (
                      <Route
                        key={`${lang}-admin-${route.path}`}
                        path={`/${lang}/${route.path}`}
                        element={
                          <ProtectedPortalRoute
                            requireAdmin={route.requireAdmin}
                            requireModerator={route.requireModerator}
                          >
                            {route.element}
                          </ProtectedPortalRoute>
                        }
                      />
                    ))
                  )}

                  {/* Protected admin routes - require authentication + admin role */}
                  {SUPPORTED_LANGUAGES.map((lang) =>
                    protectedAdminRoutes.map((route) => (
                      <Route
                        key={`${lang}-protected-${route.path}`}
                        path={`/${lang}/${route.path}`}
                        element={
                          <ProtectedAdminRoute>
                            {route.element}
                          </ProtectedAdminRoute>
                        }
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

                  {/* District pages for 2-tier countries (e.g., Saint Helena: country → district) */}
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <Route
                      key={`district-sh-${lang}`}
                      path={`/${lang}/sh/:districtCode`}
                      element={<DistrictPage />}
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

                  {/* Industry pages are handled via the CountryPage route since React Router v6 */}
                  {/* doesn't support prefix+param pattern like "local-seo-services-for-:slug" */}
                  {/* Instead, CountryPage will check if the path starts with the industry prefix */}

                  {/* Country pages - 1 segment paths (country code) - CATCH-ALL for dynamic slugs */}
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <Route
                      key={`country-${lang}`}
                      path={`/${lang}/:countryCode`}
                      element={<CountryPage />}
                    />
                  ))}

                  {/* Legacy routes without language prefix - redirect to preferred language */}
                  {staticPageRoutes.slice(1).map((route) => (
                    <Route
                      key={`legacy-${route.path}`}
                      path={`/${route.path}`}
                      element={<Navigate to={`/${getPreferredLanguage()}/${route.path}`} replace />}
                    />
                  ))}

                  {/* 404 */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </TooltipProvider>
        </HelmetProvider>
      </AuthProvider>
    </LanguageProvider>
  </ThemeProvider>
</QueryClientProvider>
);

export default App;
