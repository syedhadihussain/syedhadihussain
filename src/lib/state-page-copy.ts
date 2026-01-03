import { StateDetailData } from "@/lib/states-config";

/**
 * State Page Copy Generator
 * 
 * PURPOSE: Generate unique, SEO-optimized content for each state page
 * FOCUS: Regional dominance, service availability, competitive advantage
 * 
 * Each state page targets ONE primary intent to avoid cannibalization:
 * - Country: Authority & international trust (handled separately)
 * - State: Regional dominance ← THIS FILE
 * - City: Local intent & proximity (handled separately)
 * - Industry: Niche expertise (handled separately)
 */

export type StatePageCopy = {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  servicesTitle: string;
  servicesSubtitle: string;
  citiesTitle: string;
  citiesDescription: string;
  whyChooseTitle: string;
  whyChooseDescription: string;
  ctaTitle: string;
  ctaDescription: string;
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

const pick = <T>(arr: T[], seed: number, offset: number = 0): T => {
  return arr[(seed + offset) % arr.length];
};

// ============================================================================
// HERO SECTION - Regional Dominance Focus
// ============================================================================

const heroTitleTemplates = [
  "Rank Higher on Google Across {state}",
  "Local SEO Services for {state} Businesses",
  "Dominate Local Search Throughout {state}",
  "{state} Local SEO Specialist",
  "Grow Your {state} Business Through Local Search",
];

const heroSubtitleTemplates = [
  "Regional expertise spanning {cityCount} cities",
  "Helping {state} businesses outrank local competitors",
  "Strategic local visibility from {city1} to {city2}",
  "Building regional dominance across {state}",
  "Your {state} local search partner",
];

const heroDescriptionTemplates = [
  `Local businesses in {state} compete for the same customers every day. The ones that show up first on Google win. I help service providers, retailers, and professionals in {city1}, {city2}, {city3}, {city4}, and {cityCount}+ other {state} cities capture more leads through Local SEO Services that actually deliver results.`,
  `Businesses in {state} face unique competitive pressures that require localized strategies. My Local SEO Services address the specific challenges of ranking in {city1}, {city2}, {city3}, and throughout the region, helping you capture more customers actively searching for your services.`,
  `Whether you serve one city or the entire {state} region, I create Local SEO strategies that improve your Google Maps visibility, build trust through reviews, and drive qualified leads from people ready to purchase. My work with clients across {cityCount}+ {state} cities has taught me what works in this market.`,
  `My approach to Local SEO in {state} combines technical optimization with practical business sense. I focus on the actions that directly improve your phone calls, direction requests, and online bookings—not vanity metrics that look good but don't convert.`,
];

// ============================================================================
// SERVICES SECTION
// ============================================================================

const servicesTitleTemplates = [
  "Local SEO Services for {state} Businesses",
  "What I Offer {state} Business Owners",
  "How I Help {state} Companies Rank",
  "Complete Local SEO for {state}",
  "{state} Local SEO Solutions",
];

const servicesSubtitleTemplates = [
  `I focus on strategies that bring measurable results to {state} business owners. Every service is designed to increase your visibility where it matters most: Google Search, Google Maps, and AI-powered search tools.`,
  `These services address the specific needs of {state} businesses competing in local search. Each builds toward greater visibility, more qualified leads, and sustainable competitive advantage.`,
  `From {city1} to {city2}, these Local SEO Services help {state} businesses capture more local customers and outperform competitors in their market.`,
];

// ============================================================================
// CITIES SECTION
// ============================================================================

const citiesTitleTemplates = [
  "Serving Business Owners Throughout {state}",
  "Local SEO Across {cityCount}+ {state} Cities",
  "Your {state} Coverage Partner",
  "From {city1} to {city2} and Beyond",
  "Regional Local SEO Expertise in {state}",
];

const citiesDescriptionTemplates = [
  `Different cities in {state} have different competitive landscapes. A restaurant owner in {city1} faces unique challenges compared to a home service provider in {city2} or a healthcare practice in {city3}. I develop tailored Local SEO strategies that work for your specific market conditions.`,
  `I work with businesses throughout {state}, including {city1}, {city2}, {city3}, {city4}, and {cityCount}+ other cities. Each location receives strategies tailored to its competitive environment and search patterns.`,
  `Search competition varies across {state}. What works in {city1} may not work the same way in {city2} or {city3}. I analyze each local market and build strategies that account for these differences.`,
];

// ============================================================================
// WHY CHOOSE SECTION
// ============================================================================

const whyChooseTitleTemplates = [
  "Why {state} Businesses Choose Local SEO",
  "The {state} Local Search Advantage",
  "Regional Authority in {state} Local Search",
  "Your Competitive Edge in {state}",
  "Building Your {state} Market Presence",
];

const whyChooseDescriptionTemplates = [
  `Most {state} businesses underutilize local search, creating significant opportunities for those who invest strategically. My clients consistently outperform competitors by appearing in the Google Maps 3-pack for their most valuable service keywords.`,
  `I analyze the competitive landscape in {state} to identify exactly where your business can gain ground. Some markets are highly competitive; others offer quick wins. I prioritize efforts based on potential return and difficulty.`,
  `Local search success in {state} requires understanding regional variations in search behavior, seasonal patterns, and the specific trust signals that influence consumers. I build strategies that account for these factors.`,
];

// ============================================================================
// CTA SECTION
// ============================================================================

const ctaTitleTemplates = [
  "Start Growing Your {state} Business",
  "Ready to Rank Higher in {state}?",
  "Let's Build Your {state} Visibility",
  "Get More {state} Customers",
  "Dominate Local Search in {state}",
];

const ctaDescriptionTemplates = [
  `Book a consultation to discuss your specific goals and learn how Local SEO can help you reach more customers in {city1}, {city2}, and across {state}.`,
  `Schedule a free strategy call to analyze your {state} market position and identify the quickest path to improved local rankings and more qualified leads.`,
  `Whether you're in {city1}, {city2}, or anywhere in {state}, I'm ready to help you capture more customers through strategic Local SEO.`,
];

export const getStatePageCopy = (
  state: StateDetailData,
  countryName: string = "the country"
): StatePageCopy => {
  const seed = hashString(state.code);
  const cityCount = state.cities?.length || 0;
  const city1 = state.cities?.[0]?.name || "major cities";
  const city2 = state.cities?.[1]?.name || "growing areas";
  const city3 = state.cities?.[2]?.name || "key markets";
  const city4 = state.cities?.[3]?.name || "surrounding communities";

  const replacements = (text: string) =>
    text
      .replace(/{state}/g, state.name)
      .replace(/{cityCount}/g, String(cityCount))
      .replace(/{city1}/g, city1)
      .replace(/{city2}/g, city2)
      .replace(/{city3}/g, city3)
      .replace(/{city4}/g, city4)
      .replace(/{countryName}/g, countryName);

  return {
    heroTitle: replacements(pick(heroTitleTemplates, seed, 0)),
    heroSubtitle: replacements(pick(heroSubtitleTemplates, seed, 1)),
    heroDescription: replacements(pick(heroDescriptionTemplates, seed, 2)),
    servicesTitle: replacements(pick(servicesTitleTemplates, seed, 3)),
    servicesSubtitle: replacements(pick(servicesSubtitleTemplates, seed, 4)),
    citiesTitle: replacements(pick(citiesTitleTemplates, seed, 5)),
    citiesDescription: replacements(pick(citiesDescriptionTemplates, seed, 6)),
    whyChooseTitle: replacements(pick(whyChooseTitleTemplates, seed, 7)),
    whyChooseDescription: replacements(pick(whyChooseDescriptionTemplates, seed, 8)),
    ctaTitle: replacements(pick(ctaTitleTemplates, seed, 9)),
    ctaDescription: replacements(pick(ctaDescriptionTemplates, seed, 10)),
  };
};