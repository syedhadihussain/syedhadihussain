import { lazy } from "react";
import { useParams } from "react-router-dom";
import { isValidIndustrySlug } from "@/lib/industries-config";
import { COUNTRY_CODES } from "@/lib/i18n-config";

// Lazy load pages
const IndustryPage = lazy(() => import("@/pages/IndustryPage"));
const CountryPage = lazy(() => import("@/pages/CountryPage"));
const NotFound = lazy(() => import("@/pages/NotFound"));

/**
 * Resolves 2-segment dynamic routes: /:lang/:slug
 * - If slug starts with "local-seo-services-for-" -> IndustryPage
 * - If slug is a valid 2-letter country code -> CountryPage
 * - Otherwise -> NotFound
 */
const DynamicRouteResolver = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <NotFound />;
  }
  
  // Check if it's an industry page
  if (slug.startsWith("local-seo-services-for-")) {
    const industrySlug = slug.replace("local-seo-services-for-", "");
    if (isValidIndustrySlug(industrySlug)) {
      return <IndustryPage />;
    }
    return <NotFound />;
  }
  
  // Check if it's a country code (2 letters)
  if (slug.length === 2 && COUNTRY_CODES.includes(slug as any)) {
    return <CountryPage />;
  }
  
  // No match - 404
  return <NotFound />;
};

export default DynamicRouteResolver;
