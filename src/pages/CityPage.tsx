import { useParams, Navigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { getCityBySlug } from "@/lib/cities-config";
import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import CitySEOHead from "@/components/city/CitySEOHead";
import CityHero from "@/components/city/CityHero";
import CityServices from "@/components/city/CityServices";
import CityWhyChoose from "@/components/city/CityWhyChoose";
import CityContact from "@/components/city/CityContact";
import Testimonials from "@/components/portfolio/Testimonials";
import CaseStudies from "@/components/portfolio/CaseStudies";
import FullStackCTA from "@/components/portfolio/FullStackCTA";
import FAQ from "@/components/portfolio/FAQ";

const CityPage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const { language } = useLanguage();

  // Validate city slug - must start with "local-seo-"
  if (!citySlug || !citySlug.startsWith("local-seo-")) {
    return <Navigate to={`/${language}`} replace />;
  }

  const cityData = getCityBySlug(citySlug);
  if (!cityData) {
    return <Navigate to={`/${language}`} replace />;
  }

  const { city, state } = cityData;

  // Generate unique SEO metadata
  const pageTitle = `Local SEO ${city.name}, ${city.stateAbbreviation} | Google Maps & AI Search Expert`;
  
  const pageDescription = `${city.tagline}. Expert local SEO services in ${city.name}, ${city.stateName}. I help businesses rank higher on Google Maps, local search, and AI assistants. 7+ years experience, 50+ industries served.`;

  const keywords = [
    `local SEO ${city.name}`,
    `SEO services ${city.name} ${city.stateAbbreviation}`,
    `Google Maps optimization ${city.name}`,
    `local search marketing ${city.name}`,
    `Google Business Profile ${city.name}`,
    `local SEO consultant ${city.name}`,
    `AI search optimization ${city.name}`,
    `SEO expert ${city.name} ${city.stateName}`,
    `local business marketing ${city.name}`,
    `map ranking ${city.name}`,
  ].join(", ");

  return (
    <>
      <CitySEOHead
        city={city}
        state={state}
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        <main id="main-content" role="main">
          <CityHero city={city} state={state} />
          <CityServices city={city} />
          <CityWhyChoose city={city} />
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
          <CityContact city={city} state={state} />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CityPage;
