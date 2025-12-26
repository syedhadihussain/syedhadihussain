import { useParams, Navigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { getCountryData, isValidCountry } from "@/lib/countries-config";
import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import SEOHead from "@/components/SEOHead";
import CountryHero from "@/components/country/CountryHero";
import CountryAuthority from "@/components/country/CountryAuthority";
import CountryMap from "@/components/country/CountryMap";
import CountryServices from "@/components/country/CountryServices";
import CountryCaseStudiesCTA from "@/components/country/CountryCaseStudiesCTA";
import CountryContact from "@/components/country/CountryContact";
import Testimonials from "@/components/portfolio/Testimonials";
import CaseStudies from "@/components/portfolio/CaseStudies";
import FullStackCTA from "@/components/portfolio/FullStackCTA";
import FAQ from "@/components/portfolio/FAQ";

const CountryPage = () => {
  const { countryCode } = useParams<{ countryCode: string }>();
  const { t, language } = useLanguage();

  // Validate country code
  if (!countryCode || !isValidCountry(countryCode)) {
    return <Navigate to={`/${language}`} replace />;
  }

  const country = getCountryData(countryCode);
  if (!country) {
    return <Navigate to={`/${language}`} replace />;
  }

  // Generate SEO metadata
  const pageTitle = t("country.seo.title")
    .replace("{country}", country.name)
    .replace("{service}", t("country.seo.localSeo"));
  
  const pageDescription = t("country.seo.description")
    .replace("{country}", country.name)
    .replace("{count}", String(country.statesCount || "all"));

  const keywords = [
    `local SEO ${country.name}`,
    `SEO specialist ${country.name}`,
    `local SEO expert ${country.name}`,
    `Google Maps optimization ${country.name}`,
    `local search ${country.name}`,
    `AI SEO ${country.name}`,
    `generative search optimization`,
    `map SEO consultant`,
    ...country.seoKeywords
  ].join(", ");

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        canonical={`/${country.code}`}
        keywords={keywords}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: country.name, url: `/${country.code}` }
        ]}
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        <main id="main-content" role="main">
          <CountryHero country={country} />
          <CountryAuthority country={country} />
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
