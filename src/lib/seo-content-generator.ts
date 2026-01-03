/**
 * SEO Content Generation System
 * 
 * This module provides unique, non-cannibalizing content for each page level:
 * - Country: Authority, coverage, scalability, international trust
 * - State: Regional dominance, service availability, competitive advantage
 * - City: Local intent, proximity, Google Maps & GBP optimization
 * - Industry: Niche expertise, compliance, industry-specific challenges
 * 
 * Each page targets ONE primary intent to avoid keyword cannibalization.
 */

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

const hashString = (input: string): number => {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0;
  }
  return hash;
};

const pick = <T>(arr: T[], seed: number, offset: number = 0): T => {
  return arr[(seed + offset) % arr.length];
};

const formatList = (items: string[], conjunction: string = "and"): string => {
  if (items.length === 0) return "";
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} ${conjunction} ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, ${conjunction} ${items[items.length - 1]}`;
};

// ============================================================================
// COUNTRY PAGE CONTENT - Authority & International Trust Focus
// ============================================================================

export interface CountryPageContent {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  authorityTitle: string;
  authorityDescription: string;
  servicesTitle: string;
  servicesDescription: string;
  coverageTitle: string;
  coverageDescription: string;
  processTitle: string;
  processDescription: string;
  trustTitle: string;
  trustDescription: string;
  ctaTitle: string;
  ctaDescription: string;
}

const countryHeroTitles = [
  "Local SEO Services Across {country}",
  "Nationwide Local SEO Solutions for {country}",
  "Local SEO Expertise Serving {country}",
  "Strategic Local SEO for Businesses in {country}",
  "Comprehensive Local SEO Services in {country}",
];

const countryHeroSubtitles = [
  "Scalable strategies that work across multiple regions",
  "One partner for all your local search visibility needs",
  "Building national presence through local dominance",
  "Strategic local SEO backed by international experience",
  "Proven methods adapted for each market",
];

const countryHeroDescriptions = [
  "With experience spanning {experience} years and {industries}+ industries, I deliver Local SEO Services that adapt to the unique characteristics of the {country} market. Whether you operate in one city or across multiple regions, my approach focuses on measurable improvements in local search visibility, qualified leads, and sustainable ranking growth.",
  "Businesses throughout {country} trust my Local SEO Services to improve their presence on Google Maps, build credible online profiles, and attract customers actively searching for their services. I bring a data-driven methodology refined through work with clients across diverse markets worldwide.",
  "My Local SEO Services for {country} combine deep knowledge of search algorithms with practical insights into local consumer behavior. From {topRegion1} to {topRegion2}, I help businesses establish the local authority that translates into calls, bookings, and revenue.",
];

const countryAuthorityTitles = [
  "Trusted Local SEO Partner for {country} Businesses",
  "Why Businesses in {country} Choose My Approach",
  "Strategic Local SEO Built for {country} Markets",
  "A Data-Driven Method for {country} Local Search",
  "Results-Focused Local SEO Across {country}",
];

const countryAuthorityDescriptions = [
  "You work directly with me, not a rotating team of junior staff. I develop customized Local SEO strategies that account for regional differences across {country}, ensuring your business earns visibility where it matters most to your customers.",
  "Every strategy I create for {country} businesses prioritizes practical outcomes: more qualified calls, higher-quality leads, and sustainable rankings. My transparent reporting shows exactly what actions I take and how they improve your local search performance.",
  "I combine proven Local SEO fundamentals with adaptations specific to {country} markets. This means understanding local search patterns, regional competition levels, and the specific signals that influence Google's ranking decisions in your area.",
];

export const generateCountryContent = (
  countryName: string,
  countryCode: string,
  topRegions: string[] = [],
  regionCount: number = 0
): CountryPageContent => {
  const seed = hashString(countryCode);
  const topRegion1 = topRegions[0] || "major cities";
  const topRegion2 = topRegions[1] || "key regions";
  const topRegion3 = topRegions[2] || "growth markets";

  const heroTitle = pick(countryHeroTitles, seed, 0).replace("{country}", countryName);
  const heroSubtitle = pick(countryHeroSubtitles, seed, 1);
  const heroDescription = pick(countryHeroDescriptions, seed, 2)
    .replace("{country}", countryName)
    .replace("{experience}", "7")
    .replace("{industries}", "50")
    .replace("{topRegion1}", topRegion1)
    .replace("{topRegion2}", topRegion2);

  const authorityTitle = pick(countryAuthorityTitles, seed, 3).replace("{country}", countryName);
  const authorityDescription = pick(countryAuthorityDescriptions, seed, 4).replace("{country}", countryName);

  return {
    heroTitle,
    heroSubtitle,
    heroDescription,
    authorityTitle,
    authorityDescription,
    servicesTitle: `Local SEO Services Available Across ${countryName}`,
    servicesDescription: `From Google Business Profile optimization to review strategy and local content development, these services help ${countryName} businesses improve visibility and convert local searchers into customers.`,
    coverageTitle: `Serving Businesses Throughout ${countryName}`,
    coverageDescription: `I support clients across ${regionCount > 0 ? `${regionCount} regions` : "all regions"} of ${countryName}, adapting strategies to match local market conditions and search behavior patterns specific to each area.`,
    processTitle: `How I Approach Local SEO for ${countryName} Clients`,
    processDescription: `My process begins with understanding your market position, analyzing your competitors, and identifying the specific opportunities in your service areas across ${countryName}. From there, I build a strategic plan that prioritizes the actions most likely to improve your local rankings and lead generation.`,
    trustTitle: `Experience You Can Verify`,
    trustDescription: `I share detailed case studies and client references so you can evaluate my work before committing. My approach focuses on transparency, clear communication, and measurable improvements you can track.`,
    ctaTitle: `Ready to Improve Your Local Visibility in ${countryName}?`,
    ctaDescription: `Let's discuss your business goals and how Local SEO can help you reach more customers across ${formatList([topRegion1, topRegion2, topRegion3])} and beyond.`,
  };
};

// ============================================================================
// STATE PAGE CONTENT - Regional Dominance Focus
// ============================================================================

export interface StatePageContent {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  dominanceTitle: string;
  dominanceDescription: string;
  servicesTitle: string;
  servicesDescription: string;
  citiesTitle: string;
  citiesDescription: string;
  advantageTitle: string;
  advantageDescription: string;
  ctaTitle: string;
  ctaDescription: string;
}

const stateHeroTitles = [
  "Local SEO Services in {state}",
  "{state} Local SEO Specialist",
  "Dominate Local Search Across {state}",
  "Local SEO Solutions for {state} Businesses",
  "Grow Your {state} Business Through Local Search",
];

const stateHeroSubtitles = [
  "Regional expertise for {cityCount} cities and growing",
  "Helping {state} businesses outrank local competitors",
  "Strategic local visibility across {state}",
  "From {city1} to {city2}, your local search partner",
  "Building regional dominance one city at a time",
];

const stateHeroDescriptions = [
  "Businesses in {state} face unique competitive pressures that require localized strategies. My Local SEO Services address the specific challenges of ranking in {city1}, {city2}, {city3}, and throughout the region, helping you capture more customers actively searching for your services.",
  "Whether you serve one city or the entire {state} region, I create Local SEO strategies that improve your Google Maps visibility, build trust through reviews, and drive qualified leads from people ready to purchase. My work with clients across {cityCount}+ {state} cities has taught me what works in this market.",
  "My approach to Local SEO in {state} combines technical optimization with practical business sense. I focus on the actions that directly improve your phone calls, direction requests, and online bookings—not vanity metrics that look good but don't convert.",
];

const stateDominanceTitles = [
  "Why {state} Businesses Choose Local SEO",
  "Competitive Advantage Through Local Search in {state}",
  "Regional Authority in {state} Local Search",
  "Building Your {state} Market Presence",
  "The {state} Local Search Opportunity",
];

const stateDominanceDescriptions = [
  "Most {state} businesses underutilize local search, creating significant opportunities for those who invest strategically. My clients consistently outperform competitors by appearing in the Google Maps 3-pack for their most valuable service keywords.",
  "I analyze the competitive landscape in {state} to identify exactly where your business can gain ground. Some markets are highly competitive; others offer quick wins. I prioritize efforts based on potential return and difficulty.",
  "Local search success in {state} requires understanding regional variations in search behavior, seasonal patterns, and the specific trust signals that influence {state} consumers. I build strategies that account for these factors.",
];

export const generateStateContent = (
  stateName: string,
  stateCode: string,
  countryName: string,
  cities: string[] = [],
  cityCount: number = 0
): StatePageContent => {
  const seed = hashString(stateCode);
  const city1 = cities[0] || "major cities";
  const city2 = cities[1] || "growing areas";
  const city3 = cities[2] || "key markets";
  const city4 = cities[3] || "surrounding communities";

  const heroTitle = pick(stateHeroTitles, seed, 0).replace("{state}", stateName);
  const heroSubtitle = pick(stateHeroSubtitles, seed, 1)
    .replace("{state}", stateName)
    .replace("{cityCount}", String(cityCount || "multiple"))
    .replace("{city1}", city1)
    .replace("{city2}", city2);
  const heroDescription = pick(stateHeroDescriptions, seed, 2)
    .replace(/{state}/g, stateName)
    .replace("{city1}", city1)
    .replace("{city2}", city2)
    .replace("{city3}", city3)
    .replace("{cityCount}", String(cityCount));

  const dominanceTitle = pick(stateDominanceTitles, seed, 3).replace("{state}", stateName);
  const dominanceDescription = pick(stateDominanceDescriptions, seed, 4).replace(/{state}/g, stateName);

  return {
    heroTitle,
    heroSubtitle,
    heroDescription,
    dominanceTitle,
    dominanceDescription,
    servicesTitle: `Local SEO Services for ${stateName} Businesses`,
    servicesDescription: `These services address the specific needs of ${stateName} businesses competing in local search. Each service builds toward greater visibility, more qualified leads, and sustainable competitive advantage.`,
    citiesTitle: `Cities We Serve Across ${stateName}`,
    citiesDescription: `I work with businesses throughout ${stateName}, including ${formatList([city1, city2, city3, city4])}. Each location receives strategies tailored to its competitive environment and search patterns.`,
    advantageTitle: `The ${stateName} Advantage`,
    advantageDescription: `Working with a specialist who understands ${stateName} markets means strategies built on real competitive intelligence, not generic templates. I know which tactics work best in ${countryName}'s ${stateName} region.`,
    ctaTitle: `Start Growing Your ${stateName} Business`,
    ctaDescription: `Book a consultation to discuss your specific goals and learn how Local SEO can help you reach more customers in ${city1}, ${city2}, and across ${stateName}.`,
  };
};

// ============================================================================
// CITY PAGE CONTENT - Local Intent & Proximity Focus
// ============================================================================

export interface CityPageContent {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  mapsTitle: string;
  mapsDescription: string;
  gbpTitle: string;
  gbpDescription: string;
  proximityTitle: string;
  proximityDescription: string;
  reviewsTitle: string;
  reviewsDescription: string;
  ctaTitle: string;
  ctaDescription: string;
}

const cityHeroTitles = [
  "Local SEO Services in {city}, {state}",
  "{city} Local SEO Specialist",
  "Get Found First in {city} Searches",
  "Rank Higher on Google Maps in {city}",
  "Local SEO for {city} Businesses",
];

const cityHeroSubtitles = [
  "Be the first call when {city} customers search",
  "Turn 'near me' searches into booked appointments",
  "Own the Google Maps 3-pack in {city}",
  "Local visibility that drives real {city} customers",
  "From invisible to inevitable in {city} search",
];

const cityHeroDescriptions = [
  "When someone in {city} searches for your services, they're often ready to book immediately. My Local SEO Services ensure your business appears prominently in Google Maps, local search results, and 'near me' queries—exactly when {city} customers need you most.",
  "Competing for attention in {city} requires more than a basic Google listing. I optimize every element that influences local rankings, from your Google Business Profile to your website's local signals, reviews, and citations.",
  "{city} businesses that invest in strategic Local SEO consistently outperform those relying on word-of-mouth alone. I help you capture the customers already searching for your services, turning online visibility into phone calls and appointments.",
];

const cityMapsTitles = [
  "Google Maps Optimization for {city}",
  "Rank in the {city} Map Pack",
  "Get Found on Maps in {city}",
  "Local Map Visibility in {city}",
  "{city} Google Maps Rankings",
];

const cityMapsDescriptions = [
  "The Google Maps 3-pack receives the majority of clicks for local searches in {city}. I focus on the signals that determine Map rankings: proximity relevance, profile completeness, review quality, and local content authority.",
  "Appearing in Maps when {city} customers search means they can call you directly, get directions, and see your reviews instantly. I optimize your presence to maximize these high-intent interactions.",
  "For service businesses in {city}, Maps visibility often matters more than organic rankings. I prioritize the optimizations that improve your Maps position and increase customer engagement.",
];

const cityGbpTitles = [
  "Google Business Profile Management in {city}",
  "Optimize Your {city} Business Profile",
  "{city} GBP Optimization",
  "Complete Profile Strategy for {city}",
  "Your {city} Business on Google",
];

const cityGbpDescriptions = [
  "Your Google Business Profile is often the first impression {city} customers have of your business. I ensure every element is optimized: accurate information, compelling descriptions, strategic categories, and engaging posts.",
  "An optimized GBP in {city} does more than improve rankings—it builds trust. Potential customers see reviews, photos, and business details that convince them to choose you over competitors.",
  "I manage your {city} GBP with consistent updates, prompt review responses, and strategic content that keeps your profile active and authoritative in Google's local algorithm.",
];

export const generateCityContent = (
  cityName: string,
  stateName: string,
  countryName: string,
  neighboringAreas: string[] = []
): CityPageContent => {
  const seed = hashString(`${cityName}-${stateName}`);
  const neighbors = neighboringAreas.length > 0 ? formatList(neighboringAreas.slice(0, 3)) : "surrounding areas";

  const heroTitle = pick(cityHeroTitles, seed, 0)
    .replace("{city}", cityName)
    .replace("{state}", stateName);
  const heroSubtitle = pick(cityHeroSubtitles, seed, 1).replace("{city}", cityName);
  const heroDescription = pick(cityHeroDescriptions, seed, 2).replace(/{city}/g, cityName);

  const mapsTitle = pick(cityMapsTitles, seed, 3).replace("{city}", cityName);
  const mapsDescription = pick(cityMapsDescriptions, seed, 4).replace(/{city}/g, cityName);

  const gbpTitle = pick(cityGbpTitles, seed, 5).replace("{city}", cityName);
  const gbpDescription = pick(cityGbpDescriptions, seed, 6).replace(/{city}/g, cityName);

  return {
    heroTitle,
    heroSubtitle,
    heroDescription,
    mapsTitle,
    mapsDescription,
    gbpTitle,
    gbpDescription,
    proximityTitle: `Serving ${cityName} and Nearby Areas`,
    proximityDescription: `My Local SEO Services help businesses reach customers in ${cityName} and ${neighbors}. Local proximity signals are a key ranking factor, and I ensure your business appears for searches throughout your service area.`,
    reviewsTitle: `Build Trust with ${cityName} Customers`,
    reviewsDescription: `Reviews are crucial for local decisions in ${cityName}. I implement review strategies that encourage satisfied customers to share their experiences, building the social proof that converts searchers into clients.`,
    ctaTitle: `Ready to Dominate ${cityName} Local Search?`,
    ctaDescription: `Let's discuss how Local SEO can help your ${cityName} business attract more qualified leads and outrank local competitors.`,
  };
};

// ============================================================================
// INDUSTRY PAGE CONTENT - Niche Expertise Focus
// ============================================================================

export interface IndustryPageContent {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  challengesTitle: string;
  challengesDescription: string;
  solutionsTitle: string;
  solutionsDescription: string;
  complianceTitle: string;
  complianceDescription: string;
  entitiesTitle: string;
  entitiesDescription: string;
  ctaTitle: string;
  ctaDescription: string;
}

const industryHeroTitles = [
  "Local SEO Services for {industry}",
  "{industry} Local SEO Specialist",
  "Grow Your {industry} Business Online",
  "Local Search Visibility for {industry}",
  "Strategic Local SEO for {industry}",
];

const industryHeroSubtitles = [
  "Industry expertise that translates to rankings",
  "Understanding what {industry} customers actually search",
  "Specialized strategies for {industry} businesses",
  "From industry knowledge to local dominance",
  "Local SEO built around how {industry} works",
];

const industryHeroDescriptions = [
  "The {industry} sector has unique characteristics that require specialized Local SEO approaches. I understand how {industry} customers search, what influences their decisions, and the specific trust signals that matter in this industry.",
  "Generic Local SEO often fails for {industry} businesses because it ignores industry-specific search patterns, compliance requirements, and customer expectations. My approach is built specifically for {industry} success.",
  "Working with {industry} clients has taught me which strategies deliver results in this sector. I apply that expertise to help your business rank for the keywords that actually bring qualified leads.",
];

const industryChallengesTitles = [
  "Challenges {industry} Face in Local Search",
  "Why {industry} Local SEO Is Different",
  "Common Obstacles for {industry} Online",
  "The {industry} Local Search Landscape",
  "Understanding {industry} Competitive Dynamics",
];

const industryChallengesDescriptions = [
  "{industry} businesses face specific challenges: high competition for common service keywords, seasonal demand fluctuations, and customer expectations shaped by industry norms. Effective Local SEO addresses each of these factors.",
  "Many {industry} businesses struggle with local visibility because they use generic marketing approaches. I identify the gaps in your current strategy and implement {industry}-specific solutions that work.",
  "The {industry} space has unique competitive dynamics that influence what works in Local SEO. I analyze your specific market position and build strategies accordingly.",
];

const industrySolutionsTitles = [
  "Local SEO Solutions for {industry}",
  "How I Help {industry} Rank Locally",
  "{industry}-Specific SEO Strategies",
  "Custom Approaches for {industry}",
  "What Works for {industry} in Local Search",
];

const industrySolutionsDescriptions = [
  "My {industry} Local SEO solutions address the specific ways customers find and choose {industry} providers. From optimizing for industry-specific keywords to building relevant citations, every action targets your growth.",
  "I focus on the services and keywords that drive actual business for {industry}. Rather than generic optimizations, you get strategies designed around how {industry} customers actually search and decide.",
  "For {industry}, I implement strategies that account for customer journey patterns specific to this sector. The result is Local SEO that aligns with how your potential customers actually behave.",
];

export const generateIndustryContent = (
  industryName: string,
  industrySlug: string,
  categoryName: string,
  semanticEntities: string[] = [],
  painPoints: string[] = []
): IndustryPageContent => {
  const seed = hashString(industrySlug);
  const formattedIndustry = industryName.toLowerCase();

  const heroTitle = pick(industryHeroTitles, seed, 0).replace(/{industry}/g, industryName);
  const heroSubtitle = pick(industryHeroSubtitles, seed, 1).replace(/{industry}/g, formattedIndustry);
  const heroDescription = pick(industryHeroDescriptions, seed, 2).replace(/{industry}/g, formattedIndustry);

  const challengesTitle = pick(industryChallengesTitles, seed, 3).replace(/{industry}/g, industryName);
  const challengesDescription = pick(industryChallengesDescriptions, seed, 4).replace(/{industry}/g, formattedIndustry);

  const solutionsTitle = pick(industrySolutionsTitles, seed, 5).replace(/{industry}/g, industryName);
  const solutionsDescription = pick(industrySolutionsDescriptions, seed, 6).replace(/{industry}/g, formattedIndustry);

  return {
    heroTitle,
    heroSubtitle,
    heroDescription,
    challengesTitle,
    challengesDescription,
    solutionsTitle,
    solutionsDescription,
    complianceTitle: `${industryName} Industry Best Practices`,
    complianceDescription: `I ensure your Local SEO follows industry best practices and aligns with standards expected in the ${formattedIndustry} sector. This builds trust with both search engines and potential customers.`,
    entitiesTitle: `Key Terms That Matter for ${industryName}`,
    entitiesDescription: `My ${formattedIndustry} Local SEO strategy incorporates the semantic entities and related concepts that establish your expertise: ${formatList(semanticEntities.slice(0, 5))}, and more.`,
    ctaTitle: `Grow Your ${industryName} Business`,
    ctaDescription: `Ready to reach more customers searching for ${formattedIndustry} services? Let's discuss how Local SEO can help you stand out in this competitive industry.`,
  };
};
