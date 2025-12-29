import { lazy } from "react";
import { useParams, Navigate } from "react-router-dom";
import { isValidIndustrySlug } from "@/lib/industries-config";
import { isValidCountry, getCountryData } from "@/lib/countries-config";
import { useLanguage } from "@/contexts/LanguageContext";

// Lazy load pages
const IndustryPage = lazy(() => import("@/pages/IndustryPage"));
const NotFound = lazy(() => import("@/pages/NotFound"));

// Import country components directly to avoid param issues
import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import CountrySEOHead from "@/components/country/CountrySEOHead";
import CountryHero from "@/components/country/CountryHero";
import CountryAuthority from "@/components/country/CountryAuthority";
import CountryMap from "@/components/country/CountryMap";
import CountryStates from "@/components/country/CountryStates";
import CountryServices from "@/components/country/CountryServices";
import CountryCaseStudiesCTA from "@/components/country/CountryCaseStudiesCTA";
import CountryContact from "@/components/country/CountryContact";
import Testimonials from "@/components/portfolio/Testimonials";
import CaseStudies from "@/components/portfolio/CaseStudies";
import FullStackCTA from "@/components/portfolio/FullStackCTA";
import FAQ from "@/components/portfolio/FAQ";
import GeoBreadcrumb from "@/components/geo/GeoBreadcrumb";

/**
 * Resolves 2-segment dynamic routes: /:lang/:slug
 * - If slug starts with "local-seo-services-for-" -> IndustryPage
 * - If slug is a valid 2-letter country code -> Render country page inline
 * - Otherwise -> NotFound
 */
const DynamicRouteResolver = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  
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
  
  // Check if it's a valid country code
  if (slug.length === 2 && isValidCountry(slug)) {
    const country = getCountryData(slug);
    if (!country) {
      return <Navigate to={`/${language}`} replace />;
    }

    // Generate unique SEO metadata
    const pageTitle = `Local SEO Expert in ${country.name} | Rank Higher on Google Maps & AI Search`;
    const pageDescription = `Get more customers with Local SEO services across all ${country.statesCount} states. I help ${country.name} businesses appear in Google Maps, local search results, and AI-powered search engines like ChatGPT. 7+ years experience, 150%+ traffic growth.`;
    const keywords = [
      `local SEO ${country.name}`,
      `SEO specialist ${country.name}`,
      `Google Maps optimization ${country.name}`,
      `local search marketing`,
      `Google Business Profile expert`,
      `AI search optimization`,
      ...country.seoKeywords
    ].join(", ");

    return (
      <>
        <CountrySEOHead
          country={country}
          title={pageTitle}
          description={pageDescription}
          keywords={keywords}
        />
        <div className="min-h-screen bg-background">
          <Navigation />
          <main id="main-content" role="main">
            <div className="container-narrow pt-24 pb-4">
              <GeoBreadcrumb
                countryCode={slug}
                countryName={country.name}
              />
            </div>
            <CountryHero country={country} />
            <CountryAuthority country={country} />
            <CountryStates country={country} />
            <CountryMap country={country} />
            <CountryServices country={country} />
            <section id="case-studies" aria-label="Client case studies">
              <CaseStudies />
            </section>
            <section id="testimonials" aria-label="Client testimonials">
              <Testimonials />
            </section>
            <FullStackCTA />
            <CountryCaseStudiesCTA country={country} />
            <section id="faq" aria-label="Frequently asked questions">
              <FAQ />
            </section>
            <CountryContact country={country} />
          </main>
          <Footer />
        </div>
      </>
    );
  }
  
  // No match - 404
  return <NotFound />;
};

export default DynamicRouteResolver;
