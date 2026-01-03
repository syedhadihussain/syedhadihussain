import { useParams, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getCountryData, isValidCountry } from "@/lib/countries-config";
import { isValidIndustrySlug, isValidCategorySlug } from "@/lib/industries-config";
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

// Lazy load IndustryPage and IndustryCategoryPage for when we need to render them
const IndustryPage = lazy(() => import("./IndustryPage"));
const IndustryCategoryPage = lazy(() => import("./IndustryCategoryPage"));

const CountryPage = () => {
  const { countryCode } = useParams<{ countryCode: string }>();
  const { language } = useLanguage();

  // First check if this is a category page (handles routes like /en/local-seo-for-home-maintenance)
  if (countryCode?.startsWith("local-seo-for-")) {
    const categorySlug = countryCode.replace("local-seo-for-", "");
    if (isValidCategorySlug(categorySlug)) {
      return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-background"><div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" /></div>}>
          <IndustryCategoryPage />
        </Suspense>
      );
    }
    // Invalid category slug - redirect to 404
    return <Navigate to={`/${language}/404`} replace />;
  }

  // Check if this is an industry page (handles routes like /en/local-seo-services-for-plumbers)
  if (countryCode?.startsWith("local-seo-services-for-")) {
    const industrySlug = countryCode.replace("local-seo-services-for-", "");
    if (isValidIndustrySlug(industrySlug)) {
      return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-background"><div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" /></div>}>
          <IndustryPage />
        </Suspense>
      );
    }
    // Invalid industry slug - redirect to 404
    return <Navigate to={`/${language}/404`} replace />;
  }

  // Validate country code
  if (!countryCode || !isValidCountry(countryCode)) {
    return <Navigate to={`/${language}/404`} replace />;
  }

  const country = getCountryData(countryCode);
  if (!country) {
    return <Navigate to={`/${language}/404`} replace />;
  }

  // Generate unique SEO metadata to avoid cannibalization
  const pageTitle = `Local SEO Expert in ${country.name} | Rank Higher on Google Maps & AI Search`;
  
  const pageDescription = `Get more customers with Local SEO services across all ${country.statesCount} states. I help ${country.name} businesses appear in Google Maps, local search results, and AI-powered search engines like ChatGPT. 7+ years experience, 150%+ traffic growth.`;

  const keywords = [
    `local SEO ${country.name}`,
    `SEO specialist ${country.name}`,
    `Google Maps optimization ${country.name}`,
    `local search marketing USA`,
    `Google Business Profile expert`,
    `local SEO consultant America`,
    `AI search optimization`,
    `generative search SEO`,
    `map ranking services`,
    `local business SEO`,
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
          {/* Breadcrumb Navigation */}
          <div className="container-narrow pt-24 pb-4">
            <GeoBreadcrumb
              countryCode={countryCode}
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
};

export default CountryPage;
