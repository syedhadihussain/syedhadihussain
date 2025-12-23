import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  type?: "website" | "article" | "profile";
  noindex?: boolean;
}

const baseUrl = "https://syedhadihussain.com";

const SEOHead = ({
  title = "Syed Hadi Hussain | Full Stack Local SEO Specialist",
  description = "I help local and service-based businesses rank higher on Google and turn searches into paying customers. 7+ years experience, 100+ clients served.",
  keywords = "Local SEO, Google Business Profile, SEO Specialist, Local Search Optimization, Map SEO, Technical SEO",
  canonical,
  ogImage = "/og-image.jpg",
  type = "website",
  noindex = false,
}: SEOHeadProps) => {
  const { language } = useLanguage();

  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;
  const fullOgImage = ogImage.startsWith("http") ? ogImage : `${baseUrl}${ogImage}`;

  // Comprehensive structured data
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}/#person`,
    name: "Syed Hadi Hussain",
    jobTitle: "Full Stack Local SEO Specialist",
    description: "Results-driven Local SEO specialist with 7+ years of experience helping service businesses dominate Google Search and Google Business Profile rankings.",
    url: baseUrl,
    email: "syedhadi.workid@gmail.com",
    image: `${baseUrl}/profile-photo.png`,
    sameAs: [
      "https://www.linkedin.com/in/syed-hadi-hussain-seo-specialist/",
      "https://www.facebook.com/syedhadihussainseo/",
      "https://github.com/syedhadihussain"
    ],
    knowsAbout: [
      "Local SEO",
      "Google Business Profile Optimization",
      "Technical SEO",
      "Map SEO",
      "AI-Optimized SEO",
      "Citation Building",
      "Review Management"
    ],
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
      }
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance Local SEO Consultant"
    },
    areaServed: [
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Australia" }
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: "Syed Hadi Hussain - Local SEO Specialist",
    description: description,
    publisher: { "@id": `${baseUrl}/#person` },
    inLanguage: ["en", "ar", "es"],
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${baseUrl}/#service`,
    name: "Local SEO Services",
    description: "Comprehensive Local SEO services including Google Business Profile optimization, local keyword research, citation building, and technical SEO audits.",
    provider: { "@id": `${baseUrl}/#person` },
    serviceType: "Local SEO Consulting",
    areaServed: [
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Australia" }
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Local SEO Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Google Business Profile Optimization",
            description: "Complete GBP setup and optimization for maximum local visibility"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Local Keyword Research",
            description: "In-depth keyword research for local search dominance"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Citation Building & NAP",
            description: "Consistent NAP citations across authoritative directories"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Technical SEO Audit",
            description: "Comprehensive technical audit and optimization"
          }
        }
      ]
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${baseUrl}/#organization`,
    name: "Syed Hadi Hussain SEO Consulting",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    image: `${baseUrl}/og-image.jpg`,
    description: description,
    founder: { "@id": `${baseUrl}/#person` },
    address: {
      "@type": "PostalAddress",
      addressCountry: "AE"
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "syedhadi.workid@gmail.com",
      availableLanguage: ["English", "Arabic", "Spanish"]
    },
    sameAs: [
      "https://www.linkedin.com/in/syed-hadi-hussain-seo-specialist/"
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl
      }
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={language} dir={language === "ar" ? "rtl" : "ltr"} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Syed Hadi Hussain" />
      <link rel="canonical" href={fullCanonical} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Hreflang for multi-language SEO */}
      <link rel="alternate" hrefLang="en" href={`${baseUrl}/en${canonical || ""}`} />
      <link rel="alternate" hrefLang="ar" href={`${baseUrl}/ar${canonical || ""}`} />
      <link rel="alternate" hrefLang="es" href={`${baseUrl}/es${canonical || ""}`} />
      <link rel="alternate" hrefLang="x-default" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Syed Hadi Hussain - Local SEO Specialist" />
      <meta property="og:locale" content={language === "ar" ? "ar_AE" : language === "es" ? "es_ES" : "en_US"} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Additional SEO Meta */}
      <meta name="geo.region" content="AE" />
      <meta name="geo.placename" content="United Arab Emirates" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="theme-color" content="#22c55e" />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
    </Helmet>
  );
};

export default SEOHead;
