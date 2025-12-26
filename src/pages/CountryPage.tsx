import { useParams, Navigate } from "react-router-dom";
import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import SEOHead from "@/components/SEOHead";
import CountryHero from "@/components/country/CountryHero";
import CountryAuthority from "@/components/country/CountryAuthority";
import CountryMap from "@/components/country/CountryMap";
import CountryServices from "@/components/country/CountryServices";
import CountryCaseStudiesCTA from "@/components/country/CountryCaseStudiesCTA";
import Contact from "@/components/portfolio/Contact";
import { getCountryBySlug } from "@/data/countries";
import { useLanguage } from "@/contexts/LanguageContext";

const CountryPage = () => {
  const { countrySlug } = useParams<{ countrySlug: string }>();
  const { language } = useLanguage();
  
  const country = countrySlug ? getCountryBySlug(countrySlug) : undefined;

  // If country not found, redirect to home
  if (!country) {
    return <Navigate to={`/${language}`} replace />;
  }

  // Generate SEO metadata
  const seoTitle = `${country.heroTitle[language]} | Local SEO Expert`;
  const seoDescription = country.heroDescription[language];
  const seoKeywords = `Local SEO ${country.name[language]}, Google Maps SEO ${country.name[language]}, Local SEO Specialist ${country.name[language]}, Local SEO Expert ${country.name[language]}, Map SEO ${country.name[language]}, AI SEO ${country.name[language]}`;

  // Generate breadcrumbs
  const breadcrumbs = [
    { name: language === 'ar' ? 'الرئيسية' : 'Home', url: `/${language}` },
    { name: country.name[language], url: `/${language}/country/${country.slug}` }
  ];

  return (
    <>
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonical={`/country/${country.slug}`}
        keywords={seoKeywords}
        breadcrumbs={breadcrumbs}
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        <main id="main-content" role="main">
          <CountryHero country={country} />
          <CountryAuthority country={country} />
          <CountryMap country={country} />
          <CountryServices country={country} />
          <CountryCaseStudiesCTA country={country} />
          <section id="contact" aria-label="Contact information">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CountryPage;
