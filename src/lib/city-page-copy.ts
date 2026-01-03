import { CityDetailData } from "@/lib/cities-config";
import { StateDetailData } from "@/lib/states-config";

/**
 * City Page Copy Generator
 * 
 * PURPOSE: Generate unique, SEO-optimized content for each city page
 * FOCUS: Local intent, proximity, Google Maps & GBP optimization
 * 
 * Each city page targets ONE primary intent to avoid cannibalization:
 * - Country: Authority & international trust (handled separately)
 * - State: Regional dominance (handled separately)
 * - City: Local intent & proximity ← THIS FILE
 * - Industry: Niche expertise (handled separately)
 */

export type CityPageCopy = {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  mapsTitle: string;
  mapsDescription: string;
  gbpTitle: string;
  gbpDescription: string;
  servicesTitle: string;
  servicesDescription: string;
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

const pick = <T>(arr: T[], seed: number, offset: number = 0): T => {
  return arr[(seed + offset) % arr.length];
};

// ============================================================================
// HERO SECTION - Local Intent & Proximity Focus
// ============================================================================

const heroTitleTemplates = [
  "Local SEO Services in {city}, {state}",
  "{city} Local SEO Specialist",
  "Get Found First in {city} Searches",
  "Rank Higher on Google Maps in {city}",
  "Local SEO for {city} Businesses",
];

const heroSubtitleTemplates = [
  "Be the first call when {city} customers search",
  "Turn 'near me' searches into booked appointments",
  "Own the Google Maps 3-pack in {city}",
  "Local visibility that drives real {city} customers",
  "From invisible to inevitable in {city} search",
];

const heroDescriptionTemplates = [
  `When someone in {city} searches for your services, they're often ready to book immediately. My Local SEO Services ensure your business appears prominently in Google Maps, local search results, and 'near me' queries—exactly when {city} customers need you most.`,
  `Competing for attention in {city} requires more than a basic Google listing. I optimize every element that influences local rankings, from your Google Business Profile to your website's local signals, reviews, and citations.`,
  `{city} businesses that invest in strategic Local SEO consistently outperform those relying on word-of-mouth alone. I help you capture the customers already searching for your services, turning online visibility into phone calls and appointments.`,
  `Your {city} customers are searching right now. The question is whether they find you or your competitors first. My Local SEO Services put your business at the top of local search results where ready-to-buy customers are looking.`,
];

// ============================================================================
// MAPS SECTION - Google Maps Dominance
// ============================================================================

const mapsTitleTemplates = [
  "Google Maps Optimization for {city}",
  "Rank in the {city} Map Pack",
  "Get Found on Maps in {city}",
  "Local Map Visibility in {city}",
  "{city} Google Maps Rankings",
];

const mapsDescriptionTemplates = [
  `The Google Maps 3-pack receives the majority of clicks for local searches in {city}. I focus on the signals that determine Map rankings: proximity relevance, profile completeness, review quality, and local content authority.`,
  `Appearing in Maps when {city} customers search means they can call you directly, get directions, and see your reviews instantly. I optimize your presence to maximize these high-intent interactions.`,
  `For service businesses in {city}, Maps visibility often matters more than organic rankings. I prioritize the optimizations that improve your Maps position and increase customer engagement.`,
];

// ============================================================================
// GBP SECTION - Google Business Profile
// ============================================================================

const gbpTitleTemplates = [
  "Google Business Profile Management in {city}",
  "Optimize Your {city} Business Profile",
  "{city} GBP Optimization",
  "Complete Profile Strategy for {city}",
  "Your {city} Business on Google",
];

const gbpDescriptionTemplates = [
  `Your Google Business Profile is often the first impression {city} customers have of your business. I ensure every element is optimized: accurate information, compelling descriptions, strategic categories, and engaging posts.`,
  `An optimized GBP in {city} does more than improve rankings—it builds trust. Potential customers see reviews, photos, and business details that convince them to choose you over competitors.`,
  `I manage your {city} GBP with consistent updates, prompt review responses, and strategic content that keeps your profile active and authoritative in Google's local algorithm.`,
];

// ============================================================================
// SERVICES SECTION
// ============================================================================

const servicesTitleTemplates = [
  "Local SEO Services for {city} Businesses",
  "What I Offer {city} Business Owners",
  "Complete Local SEO in {city}",
  "How I Help {city} Businesses Rank",
  "{city} Local Search Solutions",
];

const servicesDescriptionTemplates = [
  `These services address what {city} businesses need to compete in local search: better Google Maps visibility, more positive reviews, accurate citations, and content that resonates with local customers.`,
  `I focus on the Local SEO elements that drive real results in {city}: Map Pack rankings, phone calls, direction requests, and the kind of visibility that converts searchers into customers.`,
  `From Google Business Profile optimization to local content creation, these services build the foundation for long-term local search success in {city}.`,
];

// ============================================================================
// WHY CHOOSE SECTION
// ============================================================================

const whyChooseTitleTemplates = [
  "Why {city} Businesses Choose Me",
  "Your {city} Local SEO Partner",
  "The {city} Local Search Advantage",
  "Local Expertise for {city} Markets",
  "Results-Driven SEO in {city}",
];

const whyChooseDescriptionTemplates = [
  `I work directly with {city} business owners who want measurable results, not vague promises. You'll see exactly how your local rankings, phone calls, and customer inquiries improve over time.`,
  `Unlike agencies that spread resources thin, I focus specifically on what drives local visibility in {city}: your Google presence, local reputation, and the signals that influence nearby customer decisions.`,
  `My {city} clients see real improvements in the metrics that matter: more calls from Google, more direction requests, and more customers who found them through local search.`,
];

// ============================================================================
// CTA SECTION
// ============================================================================

const ctaTitleTemplates = [
  "Ready to Dominate {city} Local Search?",
  "Get More {city} Customers",
  "Start Ranking Higher in {city}",
  "Grow Your {city} Business",
  "Be the First Choice in {city}",
];

const ctaDescriptionTemplates = [
  `Let's discuss how Local SEO can help your {city} business attract more qualified leads and outrank local competitors.`,
  `Schedule a consultation to analyze your {city} market position and create a strategy that drives real results.`,
  `Book a free strategy call to see exactly how I can improve your local visibility and bring more {city} customers to your business.`,
];

export const getCityPageCopy = (
  city: CityDetailData,
  state: StateDetailData
): CityPageCopy => {
  const seed = hashString(`${city.name}-${state.code}`);

  const replacements = (text: string) =>
    text
      .replace(/{city}/g, city.name)
      .replace(/{state}/g, state.name);

  return {
    heroTitle: replacements(pick(heroTitleTemplates, seed, 0)),
    heroSubtitle: replacements(pick(heroSubtitleTemplates, seed, 1)),
    heroDescription: replacements(pick(heroDescriptionTemplates, seed, 2)),
    mapsTitle: replacements(pick(mapsTitleTemplates, seed, 3)),
    mapsDescription: replacements(pick(mapsDescriptionTemplates, seed, 4)),
    gbpTitle: replacements(pick(gbpTitleTemplates, seed, 5)),
    gbpDescription: replacements(pick(gbpDescriptionTemplates, seed, 6)),
    servicesTitle: replacements(pick(servicesTitleTemplates, seed, 7)),
    servicesDescription: replacements(pick(servicesDescriptionTemplates, seed, 8)),
    whyChooseTitle: replacements(pick(whyChooseTitleTemplates, seed, 9)),
    whyChooseDescription: replacements(pick(whyChooseDescriptionTemplates, seed, 10)),
    ctaTitle: replacements(pick(ctaTitleTemplates, seed, 11)),
    ctaDescription: replacements(pick(ctaDescriptionTemplates, seed, 12)),
  };
};