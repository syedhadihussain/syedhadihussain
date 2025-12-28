import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getCountryData } from "@/lib/countries-config";
import { BASE_URL } from "@/lib/i18n-config";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface GeoBreadcrumbProps {
  countryCode: string;
  countryName?: string;
  stateName?: string;
  stateCode?: string;
  cityName?: string;
  citySlug?: string;
}

const GeoBreadcrumb = ({
  countryCode,
  countryName,
  stateName,
  stateCode,
  cityName,
  citySlug,
}: GeoBreadcrumbProps) => {
  const { t, language } = useLanguage();

  // Get country name from config if not provided
  const country = getCountryData(countryCode);
  const resolvedCountryName = countryName || country?.name || countryCode.toUpperCase();

  // Build breadcrumb items
  const items: BreadcrumbItem[] = [
    { label: t("breadcrumb.home"), href: `/${language}` },
    { label: resolvedCountryName, href: stateName ? `/${language}/${countryCode}` : undefined },
  ];

  if (stateName && stateCode) {
    items.push({
      label: stateName,
      href: cityName ? `/${language}/${countryCode}/${stateCode}` : undefined,
    });
  }

  if (cityName && citySlug) {
    items.push({
      label: `${t("breadcrumb.localSeo")} ${cityName}`,
    });
  }

  // Generate structured data for SEO
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href
        ? `${BASE_URL}${item.href}`
        : index === items.length - 1
        ? undefined
        : `${BASE_URL}/${language}`,
    })),
  };

  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Visual breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground flex-wrap"
      >
        {items.map((item, index) => (
          <span key={index} className="flex items-center gap-1 sm:gap-2">
            {index > 0 && (
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground/50 flex-shrink-0" />
            )}
            {index === 0 && (
              <Home className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5 flex-shrink-0" />
            )}
            {item.href ? (
              <Link
                to={item.href}
                className="hover:text-primary transition-colors underline-offset-2 hover:underline"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground font-medium">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
};

export default GeoBreadcrumb;