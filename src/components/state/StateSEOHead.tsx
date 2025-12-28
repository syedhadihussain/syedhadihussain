import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import { StateDetailData } from "@/lib/states-config";
import {
  SUPPORTED_LANGUAGES,
  HREFLANG_CODES,
  BASE_URL,
  getCanonicalUrl,
  generateHreflangs,
} from "@/lib/i18n-config";

interface StateSEOHeadProps {
  state: StateDetailData;
  countryCode: string;
  title: string;
  description: string;
  keywords: string;
}

const StateSEOHead = ({ state, countryCode, title, description, keywords }: StateSEOHeadProps) => {
  const { language } = useLanguage();

  const slug = `${countryCode}/${state.code}`;
  const canonicalUrl = getCanonicalUrl(language, slug);
  const hreflangs = generateHreflangs(slug);

  // Generate structured data for the state page
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#localbusiness-${state.code}`,
    name: `Syed Hadi Hussain - Local SEO Expert ${state.name}`,
    description,
    url: canonicalUrl,
    telephone: "+1-234-567-8900",
    email: "contact@seohadi.com",
    areaServed: {
      "@type": "State",
      name: state.name,
      containedInPlace: {
        "@type": "Country",
        name: "United States",
      },
    },
    serviceArea: state.cities.map((city) => ({
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": "State",
        name: state.name,
      },
    })),
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  };

  // Get only active cities for schema links
  const activeCities = state.cities.filter((city) => state.activeCities?.includes(city.code));

  // Site navigation schema with active cities only
  const siteNavigationSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: `${state.name} Local SEO Cities`,
    hasPart: activeCities.map((city) => ({
      "@type": "SiteNavigationElement",
      name: `Local SEO ${city.name}`,
      url: `${BASE_URL}/${language}/${countryCode}/${state.code}/local-seo-${city.code}`,
    })),
  };

  // FAQ schema for the state
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How much does Local SEO cost in ${state.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Local SEO services in ${state.name} typically range from $500 to $2,500 per month depending on competition, number of locations, and scope of work. I offer customized packages based on your specific business needs and goals.`,
        },
      },
      {
        "@type": "Question",
        name: `How long does it take to see Local SEO results in ${state.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Most ${state.name} businesses start seeing improvements in local search rankings within 3-6 months. However, initial improvements in Google Business Profile visibility can happen within weeks. Consistent effort typically leads to sustained growth over 12+ months.`,
        },
      },
      {
        "@type": "Question",
        name: `Do you work with businesses in all ${state.name} cities?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes, I provide Local SEO services to businesses throughout ${state.name}, including ${state.cities.slice(0, 5).map((c) => c.name).join(", ")}, and ${state.cities.length - 5}+ other cities. My strategies are tailored to each local market's unique characteristics.`,
        },
      },
      {
        "@type": "Question",
        name: `What Local SEO services do you offer in ${state.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `I offer comprehensive Local SEO services including Google Business Profile optimization, local citation building, review management, local content creation, geo-targeted keyword optimization, and AI search optimization for ${state.name} businesses.`,
        },
      },
    ],
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${BASE_URL}/${language}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "United States",
        item: `${BASE_URL}/${language}/${countryCode}/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: state.name,
        item: canonicalUrl,
      },
    ],
  };

  // Service schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Local SEO Services ${state.name}`,
    description: `Professional Local SEO services for businesses in ${state.name}. Improve your Google Maps rankings, get more local customers, and dominate AI-powered search results.`,
    provider: {
      "@type": "Person",
      name: "Syed Hadi Hussain",
      jobTitle: "Local SEO Specialist",
    },
    areaServed: {
      "@type": "State",
      name: state.name,
    },
    serviceType: "Local SEO",
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Hreflang Tags */}
      <link rel="alternate" hrefLang="x-default" href={hreflangs["x-default"]} />
      {SUPPORTED_LANGUAGES.map((lang) => (
        <link key={lang} rel="alternate" hrefLang={HREFLANG_CODES[lang] || lang} href={hreflangs[HREFLANG_CODES[lang] || lang]} />
      ))}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content={language} />
      <meta property="og:site_name" content="Syed Hadi Hussain - Local SEO Expert" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Geo Tags */}
      <meta name="geo.region" content={`US-${state.abbreviation}`} />
      <meta name="geo.placename" content={state.name} />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(siteNavigationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
    </Helmet>
  );
};

export default StateSEOHead;

