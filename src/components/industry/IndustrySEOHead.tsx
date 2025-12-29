import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import { IndustryData } from "@/lib/industries-config";
import { getAbsoluteUrl, generateHreflangs, SUPPORTED_LANGUAGES, HREFLANG_CODES, SupportedLanguage } from "@/lib/i18n-config";

interface IndustrySEOHeadProps {
  industry: IndustryData;
}

const IndustrySEOHead = ({ industry }: IndustrySEOHeadProps) => {
  const { language } = useLanguage();
  
  const slug = `local-seo-services-for-${industry.slug}`;
  const canonicalUrl = getAbsoluteUrl(language, slug);
  const hreflangs = generateHreflangs(slug);
  
  const title = `${industry.keyword} | Professional Local SEO Expert`;
  const description = industry.metaDescription;
  
  // Structured data for Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": industry.keyword,
    "description": industry.heroDescription,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Syed Hadi Hussain - Local SEO Specialist",
      "url": "https://www.yoursite.com",
      "telephone": "+971523695036",
      "email": "contact.syedhadihussain@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "Worldwide"
      },
      "priceRange": "$$"
    },
    "serviceType": "Local SEO Services",
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Local SEO Services for ${industry.name}`,
      "itemListElement": industry.uniqueFeatures.map((feature, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": feature
        },
        "position": index + 1
      }))
    }
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": industry.faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": getAbsoluteUrl(language, "")
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": getAbsoluteUrl(language, "services")
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": industry.category,
        "item": getAbsoluteUrl(language, `industries/${industry.categorySlug}`)
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": `Local SEO for ${industry.name}`,
        "item": canonicalUrl
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={`${industry.keyword}, ${industry.semanticEntities.join(", ")}, local SEO, Google Business Profile, local search optimization`} />
      
      {/* Canonical & Hreflang */}
      <link rel="canonical" href={canonicalUrl} />
      {SUPPORTED_LANGUAGES.map((lang) => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={HREFLANG_CODES[lang as SupportedLanguage]}
          href={hreflangs[lang]}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={hreflangs["en"]} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Syed Hadi Hussain - Local SEO Specialist" />
      <meta property="og:locale" content={language === "ar" ? "ar_SA" : language === "es" ? "es_ES" : language === "pt" ? "pt_BR" : language === "fr" ? "fr_FR" : language === "it" ? "it_IT" : language === "de" ? "de_DE" : "en_US"} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="Syed Hadi Hussain" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};

export default IndustrySEOHead;
