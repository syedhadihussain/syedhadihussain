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

export const RTL_LANGUAGES: SupportedLanguage[] = ["ar"];

export const isRTL = (lang: SupportedLanguage): boolean => RTL_LANGUAGES.includes(lang);

export const isSupportedLanguage = (lang: string): lang is SupportedLanguage => {
  return SUPPORTED_LANGUAGES.includes(lang as SupportedLanguage);
};

// Generate hreflang URLs for a given slug
export const generateHreflangs = (slug: string = "") => {
  const normalizedSlug = slug.startsWith("/") ? slug : `/${slug}`;
  const finalSlug = normalizedSlug === "/" ? "/" : normalizedSlug;
  
  return {
    "x-default": `${BASE_URL}/en${finalSlug === "/" ? "/" : finalSlug}`,
    ...SUPPORTED_LANGUAGES.reduce((acc, lang) => {
      acc[lang] = `${BASE_URL}/${lang}${finalSlug === "/" ? "/" : finalSlug}`;
      return acc;
    }, {} as Record<SupportedLanguage, string>),
  };
};

// Get canonical URL for current language and slug
export const getCanonicalUrl = (lang: SupportedLanguage, slug: string = "") => {
  const normalizedSlug = slug.startsWith("/") ? slug : `/${slug}`;
  const finalSlug = normalizedSlug === "/" ? "/" : normalizedSlug;
  return `${BASE_URL}/${lang}${finalSlug === "/" ? "/" : finalSlug}`;
};
