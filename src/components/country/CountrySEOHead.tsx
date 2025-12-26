import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import { CountryData } from "@/lib/countries-config";
import { 
  SUPPORTED_LANGUAGES, 
  HREFLANG_CODES,
  BASE_URL, 
  isRTL,
  type SupportedLanguage 
} from "@/lib/i18n-config";

interface CountrySEOHeadProps {
  country: CountryData;
  title: string;
  description: string;
  keywords: string;
}

const CountrySEOHead = ({ country, title, description, keywords }: CountrySEOHeadProps) => {
  const { language, t } = useLanguage();
  const currentDate = new Date().toISOString();
  const fullCanonical = `${BASE_URL}/${language}/${country.code}`;
  const ogImage = `${BASE_URL}/og-image.jpg`;

  // Generate hreflang URLs for all languages
  const hreflangs = SUPPORTED_LANGUAGES.reduce((acc, lang) => {
    acc[HREFLANG_CODES[lang]] = `${BASE_URL}/${lang}/${country.code}`;
    return acc;
  }, {} as Record<string, string>);
  hreflangs["x-default"] = `${BASE_URL}/en/${country.code}`;

  // Generate state pages URLs for schema
  const statePages = country.states?.map(state => ({
    "@type": "WebPage",
    "@id": `${BASE_URL}/${language}/${country.code}/${state.code}/`,
    name: `Local SEO Services in ${state.name}, ${country.name}`,
    url: `${BASE_URL}/${language}/${country.code}/${state.code}/`
  })) || [];

  // LocalBusiness Schema with all 50 state service areas
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/${country.code}/#localbusiness`,
    name: "Syed Hadi Hussain - Local SEO Specialist",
    alternateName: "Local SEO Expert USA",
    description: `Professional Local SEO services helping businesses across all ${country.statesCount} states in the ${country.name} to dominate Google Search, Google Maps, and AI-powered search engines.`,
    url: fullCanonical,
    logo: `${BASE_URL}/logo.png`,
    image: ogImage,
    priceRange: "$$",
    telephone: "+971-56-194-8712",
    email: "hadinetwork@outlook.com",
    founder: {
      "@type": "Person",
      name: "Syed Hadi Hussain",
      jobTitle: "Full Stack Local SEO Specialist"
    },
    areaServed: country.states?.map(state => ({
      "@type": "State",
      name: state.name,
      containedInPlace: {
        "@type": "Country",
        name: country.name
      }
    })) || [],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Local SEO Services in ${country.name}`,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Google Business Profile Optimization",
            description: `Complete GBP setup and optimization for businesses in all ${country.statesCount} states`
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Local Search Engine Optimization",
            description: `Dominate local search results across ${country.name} with proven SEO strategies`
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Map SEO",
            description: "Optimize your presence on Google Maps, Apple Maps, and Bing Maps"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI & Generative Search Optimization",
            description: "Future-proof your visibility for ChatGPT, Gemini, and AI-powered search"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Reputation Management",
            description: "Build trust with review generation and reputation building strategies"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Citation Building",
            description: "Consistent NAP across 150+ authoritative directories"
          }
        }
      ]
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "87",
      bestRating: "5",
      worstRating: "1"
    },
    sameAs: [
      "https://www.linkedin.com/in/syed-hadi-hussain-seo-specialist/",
      "https://www.facebook.com/syedhadihussainseo/",
      "https://wa.me/971561948712"
    ]
  };

  // WebPage schema for this country page
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${fullCanonical}/#webpage`,
    url: fullCanonical,
    name: title,
    description: description,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`
    },
    about: {
      "@type": "Thing",
      name: `Local SEO Services in ${country.name}`
    },
    mainEntity: { "@id": `${BASE_URL}/${country.code}/#localbusiness` },
    datePublished: "2024-01-01",
    dateModified: currentDate,
    inLanguage: language,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".speakable"]
    }
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
        item: BASE_URL
      },
      {
        "@type": "ListItem",
        position: 2,
        name: country.name,
        item: fullCanonical
      }
    ]
  };

  // SiteNavigationElement linking to all state pages
  const siteNavigationSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: `Local SEO Services by State in ${country.name}`,
    hasPart: statePages
  };

  // FAQPage schema for common questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What Local SEO services do you offer in ${country.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `We offer comprehensive Local SEO services across all ${country.statesCount} states including Google Business Profile optimization, local keyword research, citation building, map SEO, reputation management, and AI-optimized content strategies.`
        }
      },
      {
        "@type": "Question",
        name: `How can Local SEO help my business in ${country.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Local SEO helps your business appear in local search results when customers search for services near them. This increases visibility on Google Maps, drives more phone calls, and brings foot traffic to your location."
        }
      },
      {
        "@type": "Question",
        name: "Do you serve all states in the United States?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes, we provide Local SEO services to businesses in all ${country.statesCount} states. Whether you're in California, Texas, New York, or any other state, we can help you dominate local search results in your area.`
        }
      },
      {
        "@type": "Question",
        name: "What makes your Local SEO services different?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We combine traditional Local SEO with AI and generative search optimization, ensuring your business is visible not just on Google, but also on ChatGPT, Gemini, and other AI-powered search platforms."
        }
      }
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={language} dir={isRTL(language) ? "rtl" : "ltr"} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Syed Hadi Hussain" />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Robots */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />

      {/* Hreflang for multi-language SEO */}
      <link rel="alternate" hrefLang="x-default" href={hreflangs["x-default"]} />
      {SUPPORTED_LANGUAGES.map((lang) => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={HREFLANG_CODES[lang]}
          href={hreflangs[HREFLANG_CODES[lang]]}
        />
      ))}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Syed Hadi Hussain - Local SEO Specialist" />
      <meta property="og:locale" content={
        language === "ar" ? "ar_AE" : 
        language === "es" ? "es_US" : 
        language === "pt" ? "pt_BR" : 
        language === "it" ? "it_IT" : 
        language === "fr" ? "fr_FR" : 
        language === "de" ? "de_DE" : 
        "en_US"
      } />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@syedhadihussain" />
      <meta name="twitter:site" content="@syedhadihussain" />

      {/* Geographic Meta for US */}
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content={country.name} />
      <meta name="geo.position" content={`${country.mapCenter[0]};${country.mapCenter[1]}`} />
      <meta name="ICBM" content={`${country.mapCenter[0]}, ${country.mapCenter[1]}`} />

      {/* Additional SEO Meta */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="theme-color" content="#22c55e" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      
      {/* AI & Generative Engine Hints */}
      <meta name="ai-content-declaration" content="human-written" />
      <meta name="generator" content="Lovable" />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(siteNavigationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
  );
};

export default CountrySEOHead;
