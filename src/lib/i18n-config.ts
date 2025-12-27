// Global language configuration for hreflang implementation
export const SUPPORTED_LANGUAGES = ["en", "ar", "es", "pt", "it", "fr", "de"] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export const DEFAULT_LANGUAGE: SupportedLanguage = "en";
export const BASE_URL = "https://syedhadihussain.com";

export const LANGUAGE_NAMES: Record<SupportedLanguage, string> = {
  en: "English",
  ar: "العربية",
  es: "Español",
  pt: "Português",
  it: "Italiano",
  fr: "Français",
  de: "Deutsch",
};

export const LANGUAGE_FLAGS: Record<SupportedLanguage, string> = {
  en: "🇺🇸",
  ar: "🇦🇪",
  es: "🇪🇸",
  pt: "🇧🇷",
  it: "🇮🇹",
  fr: "🇫🇷",
  de: "🇩🇪",
};

// ISO 639-1 language codes for hreflang (some need region codes)
export const HREFLANG_CODES: Record<SupportedLanguage, string> = {
  en: "en",
  ar: "ar",
  es: "es",
  pt: "pt",
  it: "it",
  fr: "fr",
  de: "de",
};

export const RTL_LANGUAGES: SupportedLanguage[] = ["ar"];

export const isRTL = (lang: SupportedLanguage): boolean => RTL_LANGUAGES.includes(lang);

export const isSupportedLanguage = (lang: string): lang is SupportedLanguage => {
  return SUPPORTED_LANGUAGES.includes(lang as SupportedLanguage);
};

// Normalize slug to ensure consistent URL formatting
const normalizeSlug = (slug: string): string => {
  // Remove leading slash if present
  let normalized = slug.startsWith("/") ? slug.slice(1) : slug;
  // Remove trailing slash if present (except for empty string)
  if (normalized.endsWith("/") && normalized.length > 1) {
    normalized = normalized.slice(0, -1);
  }
  return normalized;
};

// Generate absolute URL for a specific language and slug
export const getAbsoluteUrl = (lang: SupportedLanguage, slug: string = ""): string => {
  const normalizedSlug = normalizeSlug(slug);
  // For root/homepage, just return /{lang}
  if (!normalizedSlug || normalizedSlug === "/") {
    return `${BASE_URL}/${lang}`;
  }
  return `${BASE_URL}/${lang}/${normalizedSlug}`;
};

// Get canonical URL for current language and slug
export const getCanonicalUrl = (lang: SupportedLanguage, slug: string = ""): string => {
  return getAbsoluteUrl(lang, slug);
};

// Generate all hreflang URLs for a given slug (for link tags)
export const generateHreflangs = (slug: string = ""): Record<string, string> => {
  const hreflangs: Record<string, string> = {};
  
  // Add x-default pointing to English version
  hreflangs["x-default"] = getAbsoluteUrl("en", slug);
  
  // Add all supported language versions
  SUPPORTED_LANGUAGES.forEach((lang) => {
    hreflangs[HREFLANG_CODES[lang]] = getAbsoluteUrl(lang, slug);
  });
  
  return hreflangs;
};

// Extract slug from pathname (removes language prefix)
export const extractSlugFromPath = (pathname: string): string => {
  // Remove leading slash
  const withoutLeadingSlash = pathname.startsWith("/") ? pathname.slice(1) : pathname;
  
  // Split by slash
  const parts = withoutLeadingSlash.split("/");
  
  // Check if first part is a language code
  if (parts.length > 0 && isSupportedLanguage(parts[0])) {
    // Return everything after the language code
    return parts.slice(1).join("/");
  }
  
  // If no language prefix, return the original path without leading slash
  return withoutLeadingSlash;
};

// Get current language from pathname
export const getLanguageFromPath = (pathname: string): SupportedLanguage => {
  const withoutLeadingSlash = pathname.startsWith("/") ? pathname.slice(1) : pathname;
  const parts = withoutLeadingSlash.split("/");
  
  if (parts.length > 0 && isSupportedLanguage(parts[0])) {
    return parts[0];
  }
  
  return DEFAULT_LANGUAGE;
};

// All US state codes for sitemap generation
export const US_STATE_CODES = [
  "fl", "tx", "ny", "wa", "ca", "az", "ga", "nc", "oh", "pa",
  "il", "nj", "mi", "co", "tn", "va", "in", "ks", "dc", "or",
  "al", "ak", "ar", "ct", "de", "hi", "id", "ia", "ky", "la",
  "me", "md", "ma", "mn", "ms", "mo", "mt", "ne", "nv", "nh",
  "nm", "nd", "ok", "ri", "sc", "sd", "ut", "vt", "wv", "wi", "wy"
] as const;

// All country codes for sitemap generation
export const COUNTRY_CODES = [
  "us", "ca", "au", "de", "mx", "my", "ae", "uk", "it", "nz",
  "br", "ie", "sg", "za", "nl", "fr", "es", "se", "no", "dk",
  "fi", "ch", "be", "sa", "qa", "eg", "pt", "om", "lu", "jo"
] as const;

// All routes in the application (for sitemap generation)
// IMPORTANT: Keep this in sync with pageRoutes in App.tsx
export const ALL_ROUTES = [
  "",                          // Homepage
  "about",
  "services",
  "portfolio",
  "case-studies",
  "faq",
  "contact",
  "blog",
  "blog/how-to-fill-contact-form",
  "project-management",
  "local-service-ads",
  "pricing",
  "web-development",
  "content-writing",
  "graphic-design",
  "social-media",
  "privacy",                   // Maps to PrivacyPolicyPage
  "terms",                     // Maps to TermsOfServicePage
  // All 30 country routes
  ...COUNTRY_CODES,
  // All 51 US state routes
  ...US_STATE_CODES.map(code => `us/${code}`),
] as const;

// Generate all hreflang links for sitemap
export const generateSitemapHreflangs = (): Array<{
  url: string;
  lang: SupportedLanguage;
  slug: string;
  alternates: Record<string, string>;
}> => {
  const entries: Array<{
    url: string;
    lang: SupportedLanguage;
    slug: string;
    alternates: Record<string, string>;
  }> = [];

  ALL_ROUTES.forEach((route) => {
    SUPPORTED_LANGUAGES.forEach((lang) => {
      entries.push({
        url: getAbsoluteUrl(lang, route),
        lang,
        slug: route,
        alternates: generateHreflangs(route),
      });
    });
  });

  return entries;
};
