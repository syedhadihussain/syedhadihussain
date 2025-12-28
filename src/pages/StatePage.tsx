import { useParams, Navigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { isValidState, getStateData } from "@/lib/states-config";
import { isValidCountry } from "@/lib/countries-config";
import { getAUStateMetadata } from "@/lib/au-metadata-config";
import { getUKStateMetadata } from "@/lib/uk-metadata-config";
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
  if (!state) {
    return <Navigate to={`/${language}/${countryCode}`} replace />;
  }

  // Check for AU or UK-specific metadata
  const auMetadata = countryCode === "au" ? getAUStateMetadata(stateCode) : null;
  const ukMetadata = countryCode === "uk" ? getUKStateMetadata(stateCode) : null;
  const customMetadata = auMetadata || ukMetadata;

  // Generate unique SEO metadata (use custom metadata if available)
  const pageTitle = customMetadata?.title || 
    `Local SEO Services ${state.name} | Google Maps & AI Search Optimization`;
  
  const pageDescription = customMetadata?.description ||
    `Grow your ${state.name} business with expert Local SEO services. I help businesses in ${state.cities.slice(0, 3).map(c => c.name).join(", ")} and ${state.cities.length - 3}+ cities rank higher on Google Maps and AI search. 7+ years experience.`;

  const keywords = [
    `local SEO ${state.name}`,
    `SEO services ${state.name}`,
    `Google Maps optimization ${state.name}`,
    `local search marketing ${state.abbreviation}`,
    `Google Business Profile ${state.name}`,
    `local SEO consultant ${state.name}`,
    `AI search optimization ${state.name}`,
    ...state.cities.slice(0, 10).map(c => `local SEO ${c.name} ${state.abbreviation}`)
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
          <StateHero state={state} countryCode={countryCode} />
          <StateMap state={state} />
          <StateCities state={state} countryCode={countryCode} />
          <StateServices state={state} />
          <StateWhyChoose state={state} />
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
