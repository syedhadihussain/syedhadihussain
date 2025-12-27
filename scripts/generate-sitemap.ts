/**
 * Dynamic Sitemap Generator
 * 
 * This script generates a sitemap.xml file from ALL_ROUTES in i18n-config.ts
 * ensuring the sitemap always stays in sync with the codebase.
 * 
 * Run with: npx tsx scripts/generate-sitemap.ts
 */

import * as fs from 'fs';
import * as path from 'path';

// Import configuration from i18n-config
const SUPPORTED_LANGUAGES = ["en", "ar", "es", "pt", "it", "fr", "de"] as const;
type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

const BASE_URL = "https://syedhadihussain.com";

const HREFLANG_CODES: Record<SupportedLanguage, string> = {
  en: "en",
  ar: "ar",
  es: "es",
  pt: "pt",
  it: "it",
  fr: "fr",
  de: "de",
};

// All US state codes
const US_STATE_CODES = [
  "fl", "tx", "ny", "wa", "ca", "az", "ga", "nc", "oh", "pa",
  "il", "nj", "mi", "co", "tn", "va", "in", "ks", "dc", "or",
  "al", "ak", "ar", "ct", "de", "hi", "id", "ia", "ky", "la",
  "me", "md", "ma", "mn", "ms", "mo", "mt", "ne", "nv", "nh",
  "nm", "nd", "ok", "ri", "sc", "sd", "ut", "vt", "wv", "wi", "wy"
] as const;

// All routes in the application - KEEP IN SYNC WITH src/lib/i18n-config.ts
const ALL_ROUTES = [
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
  "privacy",
  "terms",
  "us",                        // Country: United States
  // All 51 US state routes
  ...US_STATE_CODES.map(code => `us/${code}`),
] as const;

// Helper functions
const getAbsoluteUrl = (lang: SupportedLanguage, slug: string = ""): string => {
  if (!slug || slug === "/") {
    return `${BASE_URL}/${lang}`;
  }
  return `${BASE_URL}/${lang}/${slug}`;
};

const generateHreflangs = (slug: string = ""): Record<string, string> => {
  const hreflangs: Record<string, string> = {};
  
  // Add x-default pointing to English version
  hreflangs["x-default"] = getAbsoluteUrl("en", slug);
  
  // Add all supported language versions
  SUPPORTED_LANGUAGES.forEach((lang) => {
    hreflangs[HREFLANG_CODES[lang]] = getAbsoluteUrl(lang, slug);
  });
  
  return hreflangs;
};

// Route priority mapping
const getRoutePriority = (route: string): string => {
  if (route === "") return "1.0";
  if (["services", "contact", "about"].includes(route)) return "0.9";
  if (["portfolio", "case-studies", "pricing"].includes(route)) return "0.8";
  if (route.startsWith("blog")) return "0.7";
  return "0.6";
};

// Generate sitemap XML
const generateSitemap = (): string => {
  const today = new Date().toISOString().split('T')[0];
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

  // Generate entries for each route and language combination
  ALL_ROUTES.forEach((route) => {
    const hreflangs = generateHreflangs(route);
    const priority = getRoutePriority(route);
    
    SUPPORTED_LANGUAGES.forEach((lang) => {
      const url = getAbsoluteUrl(lang, route);
      
      xml += `  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
`;
      
      // Add hreflang alternates
      Object.entries(hreflangs).forEach(([hreflang, href]) => {
        xml += `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${href}" />
`;
      });
      
      xml += `  </url>
`;
    });
  });

  xml += `</urlset>`;
  
  return xml;
};

// Main execution
const main = () => {
  console.log('🚀 Generating sitemap from ALL_ROUTES...');
  console.log(`📍 Found ${ALL_ROUTES.length} routes`);
  console.log(`🌍 Generating for ${SUPPORTED_LANGUAGES.length} languages`);
  console.log(`📊 Total URLs: ${ALL_ROUTES.length * SUPPORTED_LANGUAGES.length}`);
  
  const sitemap = generateSitemap();
  const outputPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  
  fs.writeFileSync(outputPath, sitemap, 'utf-8');
  
  console.log(`✅ Sitemap generated successfully at: ${outputPath}`);
  console.log(`📄 File size: ${(sitemap.length / 1024).toFixed(2)} KB`);
};

main();
