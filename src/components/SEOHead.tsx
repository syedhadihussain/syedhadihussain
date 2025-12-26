import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocation } from "react-router-dom";
import { 
  SUPPORTED_LANGUAGES, 
  HREFLANG_CODES,
  BASE_URL, 
  isRTL,
  getCanonicalUrl,
  extractSlugFromPath,
  generateHreflangs,
  type SupportedLanguage 
} from "@/lib/i18n-config";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  type?: "website" | "article" | "profile";
  noindex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

const baseUrl = BASE_URL;

const SEOHead = ({
  title = "Syed Hadi Hussain | Full Stack Local SEO Specialist",
  description = "I help local and service-based businesses rank higher on Google and turn searches into paying customers. 7+ years experience, 100+ clients served worldwide.",
  keywords = "Local SEO, Google Business Profile, SEO Specialist, Local Search Optimization, Map SEO, Technical SEO, GBP Optimization, Citation Building",
  canonical,
  ogImage = "/og-image.jpg",
  type = "website",
  noindex = false,
  publishedTime,
  modifiedTime,
  breadcrumbs,
}: SEOHeadProps) => {
  const { language } = useLanguage();
  const location = useLocation();
  
  // Extract the current slug (without language prefix) using centralized helper
  const currentSlug = extractSlugFromPath(location.pathname);
  
  // Generate canonical URL - use provided or auto-generate using centralized helper
  // This ensures canonical URLs match hreflang URLs exactly
  const fullCanonical = canonical || getCanonicalUrl(language, currentSlug);
  const fullOgImage = ogImage.startsWith("http") ? ogImage : `${baseUrl}${ogImage}`;
  const currentDate = new Date().toISOString();

  // Generate all hreflang URLs using centralized helper for consistency
  const hreflangs = generateHreflangs(currentSlug);

  // Person Schema - Core identity
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}/#person`,
    name: "Syed Hadi Hussain",
    givenName: "Syed Hadi",
    familyName: "Hussain",
    jobTitle: "Full Stack Local SEO Specialist",
    description: "Results-driven Local SEO specialist with 7+ years of experience helping service businesses dominate Google Search and Google Business Profile rankings worldwide.",
    url: baseUrl,
    email: "contact.syedhadihussain@gmail.com",
    telephone: "+971-50-123-4567",
    image: {
      "@type": "ImageObject",
      url: `${baseUrl}/profile-photo.png`,
      width: 400,
      height: 400
    },
    sameAs: [
      "https://www.linkedin.com/in/syed-hadi-hussain-seo-specialist/",
      "https://www.facebook.com/syedhadihussainseo/",
      "https://github.com/syedhadihussain",
      "https://wa.me/971501234567"
    ],
    knowsAbout: [
      "Local SEO",
      "Google Business Profile Optimization",
      "Technical SEO",
      "Map SEO",
      "AI-Optimized SEO",
      "Citation Building",
      "Review Management",
      "Schema Markup",
      "Core Web Vitals",
      "Google Maps Optimization",
      "Apple Maps Optimization",
      "Bing Places Optimization"
    ],
    knowsLanguage: ["English", "Arabic", "Spanish", "Urdu"],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certificate",
        name: "Google Analytics Certified"
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certificate",
        name: "Google Search Console Certified"
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certificate",
        name: "SEMrush SEO Toolkit Certified"
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certificate",
        name: "HubSpot Content Marketing Certified"
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certificate",
        name: "Google Ads Certified"
      }
    ],
    worksFor: {
      "@type": "Organization",
      name: "Syed Hadi Hussain SEO Consulting",
      "@id": `${baseUrl}/#organization`
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 0,
        longitude: 0
      },
      geoRadius: "40075000",
      description: "Worldwide - Remote SEO services for businesses globally"
    }
  };

  // WebSite Schema with SearchAction
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: "Syed Hadi Hussain - Local SEO Specialist",
    alternateName: "SHH SEO",
    description: description,
    publisher: { "@id": `${baseUrl}/#person` },
    inLanguage: ["en", "ar", "es"],
    copyrightYear: 2024,
    datePublished: "2024-01-01",
    dateModified: currentDate,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  // ProfessionalService Schema - Primary for service-based SEO
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${baseUrl}/#service`,
    name: "Syed Hadi Hussain SEO Consulting",
    alternateName: "Local SEO Expert Services",
    description: "Comprehensive Local SEO services including Google Business Profile optimization, local keyword research, citation building, technical SEO audits, and AI-optimized content strategies.",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    image: `${baseUrl}/og-image.jpg`,
    priceRange: "$$",
    telephone: "+971-50-123-4567",
    email: "contact.syedhadihussain@gmail.com",
    founder: { "@id": `${baseUrl}/#person` },
    foundingDate: "2017",
    areaServed: "Worldwide",
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 0,
        longitude: 0
      },
      geoRadius: "40075000"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Local SEO Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Google Business Profile Optimization",
            description: "Complete GBP setup and optimization for maximum local visibility on Google Search and Maps"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Local Keyword Research",
            description: "In-depth keyword research for local search dominance including voice search and AI queries"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Citation Building & NAP Consistency",
            description: "Consistent NAP citations across 150+ authoritative directories worldwide"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Technical SEO Audit",
            description: "Comprehensive technical audit covering Core Web Vitals, mobile optimization, and crawlability"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Map SEO Optimization",
            description: "Multi-platform map optimization for Google Maps, Apple Maps, and Bing Maps"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Review Management",
            description: "Reputation building and review generation strategies for local businesses"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI & Generative SEO",
            description: "Optimization for AI overviews, ChatGPT, Perplexity, and other generative search engines"
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
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "contact.syedhadihussain@gmail.com",
        telephone: "+971-50-123-4567",
        availableLanguage: ["English", "Arabic", "Spanish"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00"
        }
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        url: "https://calendly.com/syedhadihussain",
        availableLanguage: ["English", "Arabic", "Spanish"]
      }
    ],
    sameAs: [
      "https://www.linkedin.com/in/syed-hadi-hussain-seo-specialist/",
      "https://www.facebook.com/syedhadihussainseo/"
    ]
  };

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: "Syed Hadi Hussain SEO Consulting",
    legalName: "Syed Hadi Hussain SEO Consulting",
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/logo.png`,
      width: 512,
      height: 512
    },
    image: `${baseUrl}/og-image.jpg`,
    description: description,
    founder: { "@id": `${baseUrl}/#person` },
    foundingDate: "2017",
    numberOfEmployees: "1",
    slogan: "Dominate Local Search, Grow Your Business",
    knowsAbout: [
      "Local SEO",
      "Google Business Profile",
      "Map SEO",
      "Technical SEO",
      "AI SEO"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "contact.syedhadihussain@gmail.com",
      availableLanguage: ["English", "Arabic", "Spanish"]
    }
  };

  // BreadcrumbList Schema - Dynamic based on page
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs?.length
      ? breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url.startsWith("http") ? item.url : `${baseUrl}${item.url}`
        }))
      : [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: baseUrl
          }
        ]
  };

  // WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${fullCanonical}/#webpage`,
    url: fullCanonical,
    name: title,
    description: description,
    isPartOf: { "@id": `${baseUrl}/#website` },
    about: { "@id": `${baseUrl}/#person` },
    datePublished: publishedTime || "2024-01-01",
    dateModified: modifiedTime || currentDate,
    inLanguage: language,
    breadcrumb: { "@id": `${baseUrl}/#breadcrumb` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: fullOgImage
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".speakable"]
    }
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
      {noindex ? (
        <meta name="robots" content="noindex,nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />

      {/* Hreflang for multi-language SEO - All 7 languages + x-default */}
      {/* x-default points to English version for users whose language isn't supported */}
      <link rel="alternate" hrefLang="x-default" href={hreflangs["x-default"]} />
      
      {/* All supported language versions - dynamically generated for consistency */}
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
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Syed Hadi Hussain - Local SEO Specialist" />
      <meta property="og:locale" content={
        language === "ar" ? "ar_AE" : 
        language === "es" ? "es_ES" : 
        language === "pt" ? "pt_BR" : 
        language === "it" ? "it_IT" : 
        language === "fr" ? "fr_FR" : 
        language === "de" ? "de_DE" : 
        "en_US"
      } />
      
      {/* Open Graph alternate locales for all other languages */}
      {SUPPORTED_LANGUAGES.filter((lang) => lang !== language).map((lang) => (
        <meta 
          key={`og-locale-${lang}`} 
          property="og:locale:alternate" 
          content={
            lang === "ar" ? "ar_AE" : 
            lang === "es" ? "es_ES" : 
            lang === "pt" ? "pt_BR" : 
            lang === "it" ? "it_IT" : 
            lang === "fr" ? "fr_FR" : 
            lang === "de" ? "de_DE" : 
            "en_US"
          } 
        />
      ))}
      
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:creator" content="@syedhadihussain" />
      <meta name="twitter:site" content="@syedhadihussain" />

      {/* Geographic Meta */}
      <meta name="geo.region" content="GLOBAL" />
      <meta name="geo.placename" content="Worldwide" />
      <meta name="ICBM" content="0, 0" />

      {/* Additional SEO Meta */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="theme-color" content="#22c55e" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Verification Tags - Add your own */}
      <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
      <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" />
      <meta name="yandex-verification" content="YOUR_YANDEX_VERIFICATION_CODE" />
      
      {/* AI & Generative Engine Hints */}
      <meta name="ai-content-declaration" content="human-written" />
      <meta name="generator" content="Lovable" />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(professionalServiceSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
    </Helmet>
  );
};

export default SEOHead;