import { Navigate, useParams } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { getCityDetailData } from "@/lib/cities-config";
import { isValidState, getStateData, isValidCity } from "@/lib/states-config";
import { isValidCountry } from "@/lib/countries-config";
import { getAUCityMetadata } from "@/lib/au-metadata-config";
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
  const { countryCode, stateCode, citySlug } = useParams<{ 
    countryCode: string; 
    stateCode: string; 
    citySlug: string;
  }>();
  const { language } = useLanguage();

  // Validate country code
  if (!countryCode || !isValidCountry(countryCode)) {
    return <Navigate to={`/${language}`} replace />;
  }

  // Validate state code (pass countryCode for AU support)
  if (!stateCode || !isValidState(stateCode, countryCode)) {
    return <Navigate to={`/${language}/${countryCode}`} replace />;
  }

  // Check if citySlug starts with local-seo- and extract city code
  if (!citySlug || !citySlug.startsWith("local-seo-")) {
    return <Navigate to={`/${language}/${countryCode}/${stateCode}`} replace />;
  }
  
  const cityCode = citySlug.replace("local-seo-", "");
  
  // Validate city code (pass countryCode for AU support)
  if (!cityCode || !isValidCity(stateCode, cityCode, countryCode)) {
    return <Navigate to={`/${language}/${countryCode}/${stateCode}`} replace />;
  }

  const state = getStateData(stateCode, countryCode);
  const city = getCityDetailData(stateCode, cityCode, countryCode);
  
  if (!city || !state) {
    return <Navigate to={`/${language}/${countryCode}/${stateCode}`} replace />;
  }

  // Check for AU-specific metadata
  const auMetadata = countryCode === "au" ? getAUCityMetadata(stateCode, cityCode) : null;

  // Client-catching SEO metadata optimized for "local SEO" keyword (use AU metadata if available)
  const pageTitle = auMetadata?.title ||
    `Local SEO ${city.name}, ${city.stateAbbreviation} | #1 Google Maps & AI Search Expert | Get Found Now`;
  
  const pageDescription = auMetadata?.description ||
    `Looking for Local SEO in ${city.name}? I help ${city.stateAbbreviation} businesses rank #1 on Google Maps & AI search. 7+ years, 50+ industries, 150% avg growth. Get your FREE ${city.name} SEO audit today!`;

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
        countryCode={countryCode}
        city={city}
        state={state}
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
        ogTitle={auMetadata?.ogTitle}
        ogDescription={auMetadata?.ogDescription}
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
          <section id="testimonials" aria-label={`What ${city.name} business owners say`}>
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
