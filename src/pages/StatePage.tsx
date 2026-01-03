import { useParams, Navigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { isValidState, getStateData } from "@/lib/states-config";
import { isValidCountry, getCountryData } from "@/lib/countries-config";
import { getAUStateMetadata } from "@/lib/au-metadata-config";
import { getUKStateMetadata } from "@/lib/uk-metadata-config";
import { generateStateMetaTitle, generateStateMetaDescription } from "@/lib/seo-metadata-generator";
import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import StateSEOHead from "@/components/state/StateSEOHead";
import StateHero from "@/components/state/StateHero";
import StateMap from "@/components/state/StateMap";
import StateCities from "@/components/state/StateCities";
import StateServices from "@/components/state/StateServices";
import StateWhyChoose from "@/components/state/StateWhyChoose";
import StateContact from "@/components/state/StateContact";
import Testimonials from "@/components/portfolio/Testimonials";
import CaseStudies from "@/components/portfolio/CaseStudies";
import FullStackCTA from "@/components/portfolio/FullStackCTA";
import FAQ from "@/components/portfolio/FAQ";
import GeoBreadcrumb from "@/components/geo/GeoBreadcrumb";
import ParentCountryLink from "@/components/geo/ParentCountryLink";
import IndustriesWeServe from "@/components/geo/IndustriesWeServe";

const StatePage = () => {
  const { countryCode, stateCode } = useParams<{ countryCode: string; stateCode: string }>();
  const { t, language } = useLanguage();

  // Validate country and state codes
  if (!countryCode || !isValidCountry(countryCode)) {
    return <Navigate to={`/${language}`} replace />;
  }

  // Validate state code (pass countryCode for AU support)
  if (!stateCode || !isValidState(stateCode, countryCode)) {
    return <Navigate to={`/${language}/${countryCode}`} replace />;
  }

  const state = getStateData(stateCode, countryCode);
  const country = getCountryData(countryCode);
  
  if (!state || !country) {
    return <Navigate to={`/${language}/${countryCode}`} replace />;
  }

  // Check for AU or UK-specific metadata
  const auMetadata = countryCode === "au" ? getAUStateMetadata(stateCode) : null;
  const ukMetadata = countryCode === "uk" ? getUKStateMetadata(stateCode) : null;
  const customMetadata = auMetadata || ukMetadata;

  // Get city names for meta description
  const cityNames = state.cities.slice(0, 3).map(c => c.name);
  const cityCount = state.cities.length;

  // Generate unique SEO metadata using new generators (use custom metadata if available)
  const pageTitle = customMetadata?.title || 
    generateStateMetaTitle(state.name, state.code);
  
  const pageDescription = customMetadata?.description ||
    generateStateMetaDescription(state.name, state.code, cityNames, cityCount);

  const keywords = [
    `local SEO services ${state.name}`,
    `local SEO specialist ${state.name}`,
    `Google Maps SEO ${state.name}`,
    `GBP optimization ${state.abbreviation}`,
    `local search ranking ${state.name}`,
    `local SEO expert ${state.name}`,
    `SEO freelancer ${state.name}`,
    ...state.cities.slice(0, 8).map(c => `local SEO ${c.name} ${state.abbreviation}`)
  ].join(", ");

  return (
    <>
      <StateSEOHead
        state={state}
        countryCode={countryCode}
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
              stateName={state.name}
              stateCode={state.code}
            />
          </div>
          <StateHero state={state} countryCode={countryCode} />
          <StateMap state={state} />
          <StateCities state={state} countryCode={countryCode} />
          {/* Contextual Parent Country Link - State → Country silo structure */}
          <section className="py-12 bg-background">
            <div className="container-narrow">
              <ParentCountryLink
                countryCode={countryCode}
                countryName={country.name}
                stateName={state.name}
              />
            </div>
          </section>
          <StateServices state={state} />
          <StateWhyChoose state={state} />
          <IndustriesWeServe locationName={state.name} />
          <section id="case-studies" aria-label="Client case studies">
            <CaseStudies />
          </section>
          <section id="testimonials" aria-label="Client testimonials">
            <Testimonials />
          </section>
          <FullStackCTA />
          <section id="faq" aria-label="Frequently asked questions">
            <FAQ />
          </section>
          <StateContact state={state} />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default StatePage;
