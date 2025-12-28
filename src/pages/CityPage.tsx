import { Navigate, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { getCityBySlug } from "@/lib/cities-config";
import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import CitySEOHead from "@/components/city/CitySEOHead";
import CityHero from "@/components/city/CityHero";
import CityServices from "@/components/city/CityServices";
import CityWhyChoose from "@/components/city/CityWhyChoose";
import CityMap from "@/components/city/CityMap";
import CityContact from "@/components/city/CityContact";
import Testimonials from "@/components/portfolio/Testimonials";
import CaseStudies from "@/components/portfolio/CaseStudies";
import FullStackCTA from "@/components/portfolio/FullStackCTA";
import FAQ from "@/components/portfolio/FAQ";

const CityPage = () => {
  const location = useLocation();
  const { language } = useLanguage();

  // Extract city slug from pathname (e.g., /en/local-seo-tampa -> local-seo-tampa)
  const pathParts = location.pathname.split('/').filter(Boolean);
  const citySlug = pathParts[pathParts.length - 1]; // Last segment

  // Validate city slug
  if (!citySlug || !citySlug.startsWith("local-seo-")) {
    return <Navigate to={`/${language}`} replace />;
  }

  const cityData = getCityBySlug(citySlug);
  
  if (!cityData) {
    return <Navigate to={`/${language}`} replace />;
  }

  const { city, state } = cityData;

  // Client-catching SEO metadata optimized for "local SEO" keyword
  const pageTitle = `Local SEO ${city.name}, ${city.stateAbbreviation} | #1 Google Maps & AI Search Expert | Get Found Now`;
  
  const pageDescription = `Looking for Local SEO in ${city.name}? I help ${city.stateAbbreviation} businesses rank #1 on Google Maps & AI search. 7+ years, 50+ industries, 150% avg growth. Get your FREE ${city.name} SEO audit today!`;

  const keywords = [
    `local SEO ${city.name}`,
    `${city.name} SEO expert`,
    `SEO services ${city.name} ${city.stateAbbreviation}`,
    `Google Maps optimization ${city.name}`,
    `local search marketing ${city.name}`,
    `Google Business Profile ${city.name}`,
    `local SEO consultant ${city.name}`,
    `${city.name} SEO company`,
    `best SEO ${city.name}`,
    `local SEO agency ${city.name}`,
    `${city.name} Google ranking`,
    `SEO specialist ${city.name} ${city.stateName}`,
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
          <CityMap city={city} state={state} />
          <CityWhyChoose city={city} />
          <section id="case-studies" aria-label="Local SEO client success stories">
            <CaseStudies />
          </section>
          <section id="testimonials" aria-label="What ${city.name} business owners say">
            <Testimonials />
          </section>
          <FullStackCTA />
          <section id="faq" aria-label="Local SEO frequently asked questions">
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
