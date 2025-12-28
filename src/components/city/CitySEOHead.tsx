import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import { CityDetailData } from "@/lib/cities-config";
import { StateDetailData } from "@/lib/states-config";
import { SUPPORTED_LANGUAGES, BASE_URL, HREFLANG_CODES } from "@/lib/i18n-config";

interface CitySEOHeadProps {
  city: CityDetailData;
  state: StateDetailData;
  title: string;
  description: string;
  keywords: string;
}

const CitySEOHead = ({ city, state, title, description, keywords }: CitySEOHeadProps) => {
  const { language } = useLanguage();
  
  const canonicalUrl = `${BASE_URL}/${language}/${city.slug}`;
  
  // Local Business structured data
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#local-seo-${city.code}`,
    "name": `Local SEO Expert - ${city.name}, ${city.stateAbbreviation}`,
    "description": description,
    "url": canonicalUrl,
    "telephone": "+1-555-SEO-HELP",
    "areaServed": {
      "@type": "City",
      "name": city.name,
      "containedInPlace": {
        "@type": "State",
        "name": state.name,
        "containedInPlace": {
          "@type": "Country",
          "name": "United States"
        }
      }
    },
    "serviceType": "Local SEO Services",
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "50"
    }
  };

  // Service schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Local SEO Services in ${city.name}`,
    "description": `Professional local SEO services for businesses in ${city.name}, ${state.name}. Google Maps optimization, AI search readiness, and local citation building.`,
    "provider": {
      "@type": "Person",
      "name": "Syed Hadi Hussain",
      "url": BASE_URL
    },
    "areaServed": {
      "@type": "City",
      "name": city.name
    },
    "serviceType": "Local SEO",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "USD"
      }
    }
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `${BASE_URL}/${language}/`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "United States",
        "item": `${BASE_URL}/${language}/us/`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": state.name,
        "item": `${BASE_URL}/${language}/us/${state.code}/`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": `Local SEO ${city.name}`,
        "item": canonicalUrl
      }
    ]
  };

  // FAQ Schema for city-specific questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How much does local SEO cost in ${city.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Local SEO services in ${city.name}, ${city.stateAbbreviation} typically range based on your business goals and competition level. I offer customized packages that deliver measurable ROI for ${city.name} businesses.`
        }
      },
      {
        "@type": "Question",
        "name": `How long does it take to rank in ${city.name} local search?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Most ${city.name} businesses see significant improvements in local rankings within 3-6 months. Factors like competition, current online presence, and industry affect the timeline.`
        }
      },
      {
        "@type": "Question",
        "name": `Do you serve businesses throughout ${city.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes! I serve businesses in all areas of ${city.name} and surrounding ${state.name} communities. My local SEO strategies are tailored to your specific service area.`
        }
      }
    ]
  };

  return (
    <Helmet>
      <html lang={HREFLANG_CODES[language] || language} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Hreflang tags */}
      {SUPPORTED_LANGUAGES.map((lang) => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={HREFLANG_CODES[lang] || lang}
          href={`${BASE_URL}/${lang}/${city.slug}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}/en/${city.slug}`} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content={language === "en" ? "en_US" : language} />
      <meta property="og:site_name" content="Local SEO Expert" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* Geo Tags */}
      <meta name="geo.region" content={`US-${city.stateAbbreviation}`} />
      <meta name="geo.placename" content={city.name} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};

export default CitySEOHead;
