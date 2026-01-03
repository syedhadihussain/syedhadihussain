import { CountryData } from "@/lib/countries-config";

/**
 * Country Page Copy Generator
 * 
 * PURPOSE: Generate unique, SEO-optimized content for each country page
 * FOCUS: Authority, coverage, scalability, international trust
 * 
 * Each country page targets ONE primary intent to avoid cannibalization:
 * - Country: Authority & international trust
 * - State: Regional dominance (handled separately)
 * - City: Local intent & proximity (handled separately)
 * - Industry: Niche expertise (handled separately)
 */

export type CountryPageCopy = {
  heroTitlePrefix: string;
  heroDescription: string;
  authorityTitle: string;
  authoritySubtitle: string;
  servicesTitle: string;
  servicesSubtitle: string;
  mapTitle: string;
  mapDescription: string;
  ctaTitle: string;
  ctaSubtitle: string;
  contactTitle: string;
  contactSubtitle: string;
};

const hashString = (input: string) => {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0;
  }
  return hash;
};

const formatList = (items: string[]) => {
  if (items.length === 0) return "";
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
};

export const getCountryTopAreas = (country: CountryData, max = 3) => {
  const areas = (country.states ?? []).slice(0, Math.max(0, max)).map((s) => s.name);
  return areas.filter(Boolean);
};

// ============================================================================
// HERO SECTION - Authority & Trust Focus
// ============================================================================

const heroTitlePrefixes = [
  "Expert Local SEO Services in",
  "Trusted Local SEO Specialist for",
  "Results-Driven Local SEO Expert in",
  "Professional Local SEO Services for",
  "Data-Driven Local SEO Solutions in",
  "Proven Local SEO Strategist for",
  "Your Dedicated Local SEO Partner in",
  "Award-Winning Local SEO Services in",
  "High-Impact Local SEO Expert for",
  "Certified Local SEO Consultant in",
];

const heroDescriptionTemplates = [
  `As your local SEO specialist, I help {country} businesses dominate Google Maps rankings and capture high-intent near me searches. My proven Google Business Profile optimization strategies deliver measurable improvements in map pack visibility across {areasText}, turning local searches into qualified leads and revenue.`,
  `I specialize in comprehensive local search marketing for {country} businesses, focusing on the factors that drive real results: Google Maps SEO, NAP consistency, citation building, and strategic review generation. From {areasText} to markets nationwide, my data-driven approach builds the local authority that converts searchers into customers.`,
  `My expertise as a local SEO expert spans Google Business Profile management, map pack ranking strategies, and local content optimization for businesses across {country}. I help companies in {areasText} achieve sustainable visibility improvements through search-guidelines-compliant methodologies that protect your long-term rankings.`,
  `{country} business owners trust my local SEO services to improve their near me search visibility, strengthen their Google Maps presence, and build the review profiles that influence customer decisions. I combine GBP optimization with strategic citation development to dominate local search results in {areasText}.`,
  `Effective local search optimization in {country} requires expertise in Google Business Profile management, citation accuracy, and the local ranking signals that drive map pack positions. My strategies for businesses in {areasText} focus on the measurable outcomes that matter: more calls, more direction requests, and more customers.`,
];

// ============================================================================
// AUTHORITY SECTION - Expertise & Trust Focus
// ============================================================================

const authorityTitlePrefixes = [
  "A Local SEO Strategy Built for Real Revenue in",
  "Straightforward Local SEO That Produces Leads in",
  "A Practical Plan to Own Your Map Pack in",
  "Local SEO Services Focused on Conversions in",
  "A Results-First Approach to Local Search in",
  "Local Visibility You Can Measure and Trust in",
  "Local SEO Built Around What Customers Actually Do in",
  "More Calls, More Bookings, Better Local Rankings in",
];

const authoritySubtitleTemplates = [
  `You work directly with me, not a junior team. I tailor Local SEO Services to your market in {country}, from {areasText}. We focus on visibility that turns into calls, bookings, and steady enquiries.`,
  `Every strategy I create for {country} businesses prioritizes practical outcomes: more qualified calls, higher-quality leads, and sustainable rankings. My transparent reporting shows exactly what actions I take and how they improve your local search performance.`,
  `I combine proven Local SEO fundamentals with adaptations specific to {country} markets. This means understanding local search patterns across {areasText}, regional competition levels, and the specific signals that influence Google's ranking decisions in your area.`,
];

// ============================================================================
// SERVICES SECTION
// ============================================================================

const servicesTitlePrefixes = [
  "Local SEO Services for",
  "What Your Business Needs to Rank in",
  "A Complete Local SEO System for",
  "The Local SEO Services I Deliver in",
  "Local Search Growth Framework for",
  "How I Help Businesses Get Found in",
  "Everything That Moves the Needle in",
];

const servicesSubtitleTemplates = [
  `From Google Business Profile optimization to local content and review growth, these Local SEO Services are designed to help you rank and convert across {areasText} in {country}.`,
  `Each service addresses a specific aspect of local search visibility in {country}. Together, they create a comprehensive system that drives qualified leads from {areasText} and beyond.`,
  `I focus on the Local SEO Services that directly impact your bottom line: better Map Pack positions, more phone calls, and improved visibility when {country} customers search for what you offer.`,
];

// ============================================================================
// MAP & COVERAGE SECTION
// ============================================================================

const mapTitlePrefixes = [
  "Local SEO Coverage Across",
  "Serving Businesses Across",
  "Supporting Local Businesses Throughout",
  "Helping You Rank Across",
  "Local SEO Services Available in",
];

const mapDescriptionTemplates = [
  `Whether you serve one city or multiple regions, Local SEO Services should match how people search locally. I build location relevance across {areasText} so you can earn stronger rankings and more qualified leads in {country}.`,
  `I support clients throughout {country}, adapting strategies to match local market conditions and search behavior patterns specific to each area from {areasText} to smaller communities.`,
  `Search competition varies significantly across {country}. My Local SEO Services account for these differences, helping you capture opportunities in {areasText} while building authority that extends throughout your service area.`,
];

// ============================================================================
// CTA SECTION
// ============================================================================

const ctaTitlePrefixes = [
  "Proof You Can Verify in",
  "Real Local SEO Wins for",
  "Results From Businesses Like Yours in",
  "See What Local SEO Services Can Do in",
  "Case Studies and Growth Stories from",
];

const ctaSubtitleTemplates = [
  `No inflated promises, just real outcomes. These examples show how Local SEO Services can increase calls, visibility, and revenue for businesses in {country}.`,
  `I share detailed case studies so you can evaluate my work before committing. My {country} clients see measurable improvements in Google Maps visibility, phone calls, and qualified leads.`,
  `Real results from real businesses in {areasText}. Each success story demonstrates what strategic Local SEO Services can accomplish when properly executed.`,
];

// ============================================================================
// CONTACT SECTION
// ============================================================================

const contactTitlePrefixes = [
  "Ready to Grow in",
  "Let's Build Your Local Visibility in",
  "Get a Local SEO Plan for",
  "Talk to a Local SEO Specialist for",
  "Start Winning More Customers in",
];

const contactSubtitleTemplates = [
  `Tell me what you do and where you want to grow. I will share a clear Local SEO Services roadmap for {country}, including quick wins and the longer-term moves that build durable rankings.`,
  `Schedule a consultation to discuss your specific goals in {areasText}. I'll provide actionable insights you can use whether we work together or not.`,
  `Whether you're in {areasText} or elsewhere in {country}, I'm ready to analyze your competitive landscape and create a Local SEO strategy that delivers real business growth.`,
];

const pick = (arr: string[], seed: number, offset: number) => arr[(seed + offset) % arr.length];

export const getCountryPageCopy = (country: CountryData): CountryPageCopy => {
  const seed = hashString(country.code);
  const areas = getCountryTopAreas(country, 3);
  const areasText = areas.length ? formatList(areas) : `major regions across ${country.name}`;

  const heroTitlePrefix = `${pick(heroTitlePrefixes, seed, 0)}`;
  
  const heroDescription = pick(heroDescriptionTemplates, seed, 1)
    .replace(/{country}/g, country.name)
    .replace(/{areasText}/g, areasText);

  const authorityTitle = `${pick(authorityTitlePrefixes, seed, 2)} ${country.name}`;

  const authoritySubtitle = pick(authoritySubtitleTemplates, seed, 3)
    .replace(/{country}/g, country.name)
    .replace(/{areasText}/g, areasText);

  const servicesTitle = `${pick(servicesTitlePrefixes, seed, 4)} ${country.name}`;

  const servicesSubtitle = pick(servicesSubtitleTemplates, seed, 5)
    .replace(/{country}/g, country.name)
    .replace(/{areasText}/g, areasText);

  const mapTitle = `${pick(mapTitlePrefixes, seed, 6)} ${country.name}`;

  const mapDescription = pick(mapDescriptionTemplates, seed, 7)
    .replace(/{country}/g, country.name)
    .replace(/{areasText}/g, areasText);

  const ctaTitle = `${pick(ctaTitlePrefixes, seed, 8)} ${country.name}`;

  const ctaSubtitle = pick(ctaSubtitleTemplates, seed, 9)
    .replace(/{country}/g, country.name)
    .replace(/{areasText}/g, areasText);

  const contactTitle = `${pick(contactTitlePrefixes, seed, 10)} ${country.name}`;

  const contactSubtitle = pick(contactSubtitleTemplates, seed, 11)
    .replace(/{country}/g, country.name)
    .replace(/{areasText}/g, areasText);

  return {
    heroTitlePrefix,
    heroDescription,
    authorityTitle,
    authoritySubtitle,
    servicesTitle,
    servicesSubtitle,
    mapTitle,
    mapDescription,
    ctaTitle,
    ctaSubtitle,
    contactTitle,
    contactSubtitle,
  };
};
