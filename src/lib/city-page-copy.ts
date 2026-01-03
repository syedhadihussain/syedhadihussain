import { CityDetailData } from "@/lib/cities-config";
import { StateDetailData } from "@/lib/states-config";

/**
 * City Page Copy Generator
 * 
 * PURPOSE: Generate unique, SEO-optimized content for each city page
 * FOCUS: Local intent, proximity, Google Maps & GBP optimization
 * 
 * INTENT DIFFERENTIATION (to avoid cannibalization):
 * - Country pages: Authority, coverage, scalability, international trust
 * - State pages: Regional dominance, service availability, competitive advantage
 * - City pages: Local intent, proximity, Google Maps & GBP optimization ← THIS FILE
 * - Industry pages: Niche expertise, compliance, industry-specific challenges
 * 
 * KEYWORD STRATEGY:
 * - Primary: "Local SEO Services" (natural usage, not stuffed)
 * - Secondary: near me searches, local search marketing, Google Maps optimization
 * - Semantic: Google Business Profile, map pack rankings, local visibility
 */

export type CityPageCopy = {
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  // Maps Section
  mapsTitle: string;
  mapsDescription: string;
  mapsPoints: string[];
  // GBP Section
  gbpTitle: string;
  gbpDescription: string;
  gbpPoints: string[];
  // Services Section
  servicesTitle: string;
  servicesDescription: string;
  serviceItems: Array<{
    title: string;
    description: string;
  }>;
  // Why Choose Section
  whyChooseTitle: string;
  whyChooseDescription: string;
  whyChooseItems: Array<{
    title: string;
    description: string;
  }>;
  // Process Section
  processTitle: string;
  processDescription: string;
  processSteps: Array<{
    title: string;
    description: string;
  }>;
  // CTA Section
  ctaTitle: string;
  ctaDescription: string;
};

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

// Generate unique index based on city characteristics
const getUniqueCityIndex = (cityName: string, stateCode: string, arrayLength: number, offset: number = 0): number => {
  const combined = cityName + stateCode + offset.toString();
  let hash = 0;
  for (let i = 0; i < combined.length; i++) {
    hash = ((hash << 5) - hash + combined.charCodeAt(i)) | 0;
  }
  return Math.abs(hash) % arrayLength;
};

// ============================================================================
// HERO SECTION - Unique H1 per City with Power Keywords
// ============================================================================

// Power keyword prefixes for cities
const cityPowerPrefixes = [
  "Premier", "Award-Winning", "Top-Rated", "Elite", "Leading", "Proven",
  "Expert", "Professional", "Certified", "Trusted", "Strategic", "Results-Driven",
  "High-Performance", "Advanced", "Comprehensive", "Full-Service", "Dedicated",
  "Specialized", "Innovative", "Data-Driven", "ROI-Focused", "Growth-Oriented",
  "Best-in-Class", "Industry-Leading", "Customer-Focused", "Performance-Based"
];

const cityIntentModifiers = [
  "Dominate Local Search", "Boost Your Rankings", "Get Found First", "Grow Faster",
  "Outrank Competitors", "Maximize Visibility", "Drive More Leads", "Accelerate Growth",
  "Capture Local Customers", "Transform Your Reach", "Unlock Local Markets", "Scale Your Business",
  "Elevate Your Presence", "Supercharge Rankings", "Conquer Local Search", "Own Your Market",
  "Build Market Authority", "Increase Local Traffic", "Generate More Calls", "Win More Customers",
  "Dominate the Map Pack", "Crush the Competition", "Lead Your Industry", "Expand Your Reach"
];

// Generate unique H1 for each city
const generateCityHeroTitle = (cityName: string, stateCode: string, stateAbbr: string): string => {
  const prefixIndex = getUniqueCityIndex(cityName, stateCode, cityPowerPrefixes.length, 1);
  const modifierIndex = getUniqueCityIndex(stateCode, cityName, cityIntentModifiers.length, 2);
  
  // Use multiple pattern variations based on city name characteristics
  const patternSelector = cityName.length + stateCode.charCodeAt(0);
  
  if (patternSelector % 4 === 0) {
    return `${cityPowerPrefixes[prefixIndex]} Local SEO Services in ${cityName}, ${stateAbbr}`;
  } else if (patternSelector % 4 === 1) {
    return `${cityIntentModifiers[modifierIndex]} | Local SEO Services ${cityName}`;
  } else if (patternSelector % 4 === 2) {
    return `${cityPowerPrefixes[prefixIndex]} Local SEO Services for ${cityName} Businesses`;
  } else {
    return `${cityIntentModifiers[modifierIndex]} with Local SEO Services in ${cityName}, ${stateAbbr}`;
  }
};

// Generate unique subtitle for each city
const generateCitySubtitle = (cityName: string, stateCode: string): string => {
  const subtitleIndex = getUniqueCityIndex(cityName, stateCode, 16, 3);
  
  const subtitles = [
    `Your trusted local SEO specialist for Google Maps dominance in ${cityName}`,
    `Expert local SEO freelancer delivering top map pack rankings for ${cityName} businesses`,
    `Professional local SEO consultant maximizing near me search visibility in ${cityName}`,
    `Dedicated GBP SEO optimization expert helping ${cityName} businesses capture customers`,
    `Results-focused local SEO expert building citation authority in ${cityName}`,
    `Strategic local search marketing specialist driving qualified ${cityName} leads`,
    `Proven local SEO strategist transforming ${cityName} visibility into revenue`,
    `Your ${cityName} local SEO partner for lasting Google Maps success`,
    `Certified local SEO professional boosting ${cityName} businesses in local search`,
    `Data-driven local SEO expert optimizing ${cityName} business visibility`,
    `Full-service local SEO specialist serving ${cityName} and surrounding areas`,
    `ROI-focused local SEO consultant for ${cityName} market domination`,
    `${cityName} local SEO expert delivering measurable ranking improvements`,
    `Neighborhood-focused local SEO specialist for ${cityName} business growth`,
    `Experienced local SEO freelancer helping ${cityName} companies rank higher`,
    `Your go-to local SEO consultant for ${cityName} Google Maps optimization`,
  ];
  
  return subtitles[subtitleIndex];
};

// Generate unique description for each city with all semantic keywords
const generateCityDescription = (cityName: string, stateCode: string, stateAbbr: string): string => {
  const descIndex = getUniqueCityIndex(stateCode, cityName, 10, 4);
  
  const descriptions = [
    `Partner with a proven ${cityName} local SEO specialist who delivers measurable results. I combine expert Google Business Profile optimization, strategic citation building, and advanced map pack ranking techniques to help your business dominate local search. As a local SEO expert with 7+ years experience, I focus on near me search visibility, review generation strategies, and NAP consistency that converts local searchers into loyal customers throughout ${cityName}.`,
    
    `As your dedicated ${cityName} local SEO freelancer, I specialize in strategies that drive real business growth: GBP SEO optimization, local citation development, and map pack ranking improvements. My comprehensive local SEO services help businesses capture high-intent near me searches, build review authority, and establish the local presence that outranks every competitor in ${cityName}, ${stateAbbr}.`,
    
    `${cityName} businesses trust my expertise as a local SEO consultant to achieve dominant Google Maps visibility and capture qualified local leads. I deliver strategic GBP optimization, professional citation management, and proven review generation systems that improve map pack rankings. Every strategy focuses on near me search visibility and local authority signals that convert searchers into paying customers.`,
    
    `Elevate your ${cityName} business with data-driven local SEO services from an experienced specialist. I focus on ranking factors that matter most: Google Business Profile excellence, consistent NAP citations, strategic review management, and local content authority. As a local SEO expert in ${stateAbbr}, my proven approach delivers measurable improvements in map pack positions, near me search visibility, and customer acquisition.`,
    
    `Transform your ${cityName} online presence with professional local SEO services designed to dominate. As a skilled local SEO freelancer, I optimize your GBP listing, build authoritative citations, and implement review strategies that boost map pack rankings. My expertise in near me search optimization helps your ${cityName} business capture customers actively searching for your services.`,
    
    `Discover why ${cityName} businesses choose me as their local SEO expert for sustainable growth. I combine GBP optimization mastery, strategic citation building, and proven near me search strategies to improve your visibility. My local SEO specialist approach focuses on map pack dominance, review authority, and local signals that drive qualified customer inquiries in ${cityName}, ${stateAbbr}.`,
    
    `Unlock the full potential of your ${cityName} business with targeted local SEO services. As your local SEO consultant, I optimize Google Business Profiles, build citation networks, and implement strategies that dominate map pack results. From near me searches to GBP optimization, every tactic generates more calls, visits, and revenue for your ${cityName} business.`,
    
    `Grow your ${cityName} customer base with expert local SEO services tailored to your market. As a local SEO specialist, I focus on GBP SEO optimization, local citation authority, map pack ranking improvements, and near me search visibility. My freelancer approach means direct communication, transparent reporting, and strategies that prioritize your business growth in ${cityName}.`,
    
    `Achieve top Google Maps rankings in ${cityName} with my proven local SEO expertise. I help businesses dominate local search through strategic GBP optimization, review generation systems, and citation building that strengthens your local authority. As a dedicated local SEO freelancer, I deliver near me search visibility and map pack positions that convert to real customers.`,
    
    `Stand out in ${cityName} local search with comprehensive SEO services from a certified specialist. I focus on Google Business Profile optimization, strategic citation development, and review authority building that improves your map pack rankings. My local SEO expert approach prioritizes near me visibility, NAP consistency, and the local signals that drive ${cityName} customer acquisition.`,
  ];
  
  return descriptions[descIndex];
};


// ============================================================================
// MAPS SECTION - Google Maps Dominance
// ============================================================================

const mapsTitleTemplates = [
  "Google Maps Optimization for {city}",
  "Rank in the {city} Map Pack",
  "Get Found on Maps in {city}",
  "{city} Google Maps Visibility",
  "Local Map Dominance in {city}",
];

const mapsDescriptionTemplates = [
  `The Google Maps 3-pack receives the majority of clicks for local searches in {city}. I focus on the signals that determine Map rankings: proximity relevance, profile completeness, review quality, and local content authority. These optimizations help your business appear when {city} customers search for your services.`,
  
  `Appearing in Maps when {city} customers search means they can call you directly, get directions instantly, and see your reviews before visiting. I optimize your presence to maximize these high-intent interactions and turn searchers into customers.`,
  
  `For service businesses in {city}, Maps visibility often matters more than traditional organic rankings. I prioritize the optimizations that improve your Maps position: accurate business information, strategic category selection, regular activity, and the review signals that build trust.`,
];

const getMapsPoints = (city: CityDetailData): string[] => [
  `Optimized Google Business Profile for ${city.name} searches`,
  `Strategic category and attribute configuration`,
  `Service area optimization for ${city.stateAbbreviation} customers`,
  `Regular updates that signal business activity`,
  `Photo and media optimization for engagement`,
  `Q&A management and customer interaction`,
];

// ============================================================================
// GBP SECTION - Google Business Profile
// ============================================================================

const gbpTitleTemplates = [
  "Google Business Profile Management in {city}",
  "Complete GBP Optimization for {city}",
  "Your {city} Business on Google",
  "Profile Strategy for {city} Businesses",
  "{city} GBP Excellence",
];

const gbpDescriptionTemplates = [
  `Your Google Business Profile is often the first impression {city} customers have of your business. I ensure every element is optimized: accurate business information, compelling descriptions, strategic category selections, engaging posts, and the activity signals that influence rankings.`,
  
  `An optimized GBP in {city} does more than improve rankings—it builds trust. Potential customers see your reviews, photos, and business details before ever visiting your website. I make sure this first impression converts browsers into customers.`,
  
  `I manage your {city} GBP with consistent updates, prompt review responses, strategic content posts, and ongoing optimization. This active management signals to Google that your business is engaged and deserves visibility in local search results.`,
];

const getGbpPoints = (city: CityDetailData): string[] => [
  `Complete business information accuracy`,
  `Strategic category and service configuration`,
  `Regular post updates and announcements`,
  `Review response strategy and management`,
  `Photo optimization for ${city.name} appeal`,
  `Attribute optimization for feature visibility`,
];

// ============================================================================
// SERVICES SECTION
// ============================================================================

const servicesTitleTemplates = [
  "Local SEO Services for {city} Businesses",
  "How I Help {city} Business Owners",
  "Complete Local SEO in {city}",
  "What I Offer {city} Companies",
  "{city} Local Search Solutions",
];

const servicesDescriptionTemplates = [
  `These services address what {city} businesses need to compete in local search: better Google Maps visibility, more positive reviews, accurate citations, and content that resonates with local customers seeking your services.`,
  
  `I focus on the Local SEO elements that drive real results in {city}: Map Pack rankings, phone calls, direction requests, and the kind of visibility that converts searchers into customers.`,
  
  `From Google Business Profile optimization to local content creation, these services build the foundation for long-term local search success in {city} and help you capture more of the customers already searching for businesses like yours.`,
];

const getServiceItems = (city: CityDetailData, state: StateDetailData): Array<{ title: string; description: string }> => [
  {
    title: "Google Maps Optimization",
    description: `Strategic optimization to improve your visibility in ${city.name} Map Pack results, where local customers make quick decisions about which businesses to contact.`
  },
  {
    title: "Google Business Profile Management",
    description: `Complete GBP optimization and ongoing management that keeps your ${city.name} listing active, accurate, and positioned to attract local customers.`
  },
  {
    title: "Review Generation Strategy",
    description: `Compliant, effective processes that help your ${city.name} business earn more positive reviews from satisfied customers, building the social proof that influences both rankings and decisions.`
  },
  {
    title: "Local Citation Building",
    description: `Strategic citation development across directories relevant to ${city.name} and ${state.name} businesses, ensuring NAP consistency that strengthens your local search foundation.`
  },
  {
    title: "Local Content Development",
    description: `Creation of ${city.name}-relevant content that demonstrates local expertise and addresses the specific questions your potential customers are asking.`
  },
  {
    title: "Competitor Analysis",
    description: `Detailed analysis of your ${city.name} competitors' local search strategies, identifying opportunities to gain ground and threats requiring attention.`
  },
  {
    title: "Local Link Building",
    description: `Strategic outreach to ${city.name} organizations and publications to build locally relevant backlinks that strengthen your neighborhood search authority.`
  },
  {
    title: "Technical Local SEO",
    description: `Website optimizations that improve local search performance, including schema markup, location signals, mobile experience, and page speed improvements.`
  },
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
  `I work directly with {city} business owners who want measurable results, not vague promises. You see exactly how your local rankings, phone calls, and customer inquiries improve over time through transparent reporting and direct communication.`,
  
  `Unlike agencies that spread resources thin, I focus specifically on what drives local visibility in {city}: your Google presence, local reputation, and the signals that influence nearby customer decisions. This focused approach delivers better results.`,
  
  `My {city} clients see real improvements in the metrics that matter: more calls from Google, more direction requests, and more customers who found them through local search. Rankings matter only when they translate to business outcomes.`,
];

const getWhyChooseItems = (city: CityDetailData): Array<{ title: string; description: string }> => [
  {
    title: "Focused Local Expertise",
    description: `I understand ${city.name} market dynamics: neighborhood targeting, local competitor positioning, and the community-based strategies that generic SEO agencies completely miss.`
  },
  {
    title: "Results That Matter",
    description: `I measure success by business outcomes—more calls, more customers, more revenue—not vanity metrics that look impressive but do not drive growth.`
  },
  {
    title: "Direct Communication",
    description: `You work directly with me, not account managers or junior staff. This means faster decisions, more strategic conversations, and better understanding of your ${city.name} business.`
  },
  {
    title: "Transparent Methodology",
    description: `No black boxes. I show you exactly what I am doing, why I am doing it, and the specific results it generates for your business.`
  },
  {
    title: "Guidelines Compliant",
    description: `All strategies follow Google's guidelines and best practices. I build sustainable visibility that protects your business from algorithm penalties.`
  },
  {
    title: "Multi-Industry Experience",
    description: `I have optimized local search presence for dozens of ${city.name} businesses across professional services, home services, healthcare, retail, and other sectors.`
  },
];

// ============================================================================
// PROCESS SECTION
// ============================================================================

const processTitleTemplates = [
  "How I Approach {city} Local SEO",
  "My {city} Optimization Process",
  "From Analysis to Results in {city}",
  "The Path to Local Visibility",
  "A Strategic Approach to {city} Search",
];

const processDescriptionTemplates = [
  `Effective local SEO in {city} follows a systematic process that addresses the factors most likely to improve your visibility and customer acquisition.`,
  
  `I approach every {city} engagement with the same methodical process, adapted to your specific business situation and local competitive environment.`,
];

const getProcessSteps = (city: CityDetailData): Array<{ title: string; description: string }> => [
  {
    title: "Local Market Analysis",
    description: `Comprehensive review of your current ${city.name} search position, local competitors, and opportunities specific to your service area.`
  },
  {
    title: "Strategy Development",
    description: `Creation of a prioritized action plan based on potential impact, focusing on improvements that will drive meaningful results in ${city.name}.`
  },
  {
    title: "Foundation Optimization",
    description: `Complete optimization of your Google Business Profile, citation network, and website local signals to establish visibility foundations.`
  },
  {
    title: "Authority Building",
    description: `Ongoing review generation, content creation, and link building that strengthen your ${city.name} local search authority over time.`
  },
  {
    title: "Performance Tracking",
    description: `Regular monitoring of rankings, visibility metrics, and business outcomes to ensure strategies deliver expected results.`
  },
  {
    title: "Continuous Improvement",
    description: `Adjustment of tactics based on performance data and evolving competitive conditions in your ${city.name} market.`
  },
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
  `Schedule a consultation to discuss how Local SEO can help your {city} business attract more qualified leads and outrank local competitors.`,
  
  `Book a strategy call to analyze your {city} market position and create a plan that drives real results for your business.`,
  
  `Let us discuss exactly how I can improve your local visibility and bring more {city} customers to your business through strategic Local SEO.`,
];

// ============================================================================
// MAIN EXPORT FUNCTION
// ============================================================================

export const getCityPageCopy = (
  city: CityDetailData,
  state: StateDetailData
): CityPageCopy => {
  const seed = hashString(`${city.name}-${state.code}-${city.code}`);

  const replacements = (text: string): string =>
    text
      .replace(/{city}/g, city.name)
      .replace(/{state}/g, state.name)
      .replace(/{stateAbbr}/g, city.stateAbbreviation || state.code.toUpperCase());

  return {
    heroTitle: generateCityHeroTitle(city.name, state.code, city.stateAbbreviation || state.code.toUpperCase()),
    heroSubtitle: generateCitySubtitle(city.name, state.code),
    heroDescription: generateCityDescription(city.name, state.code, city.stateAbbreviation || state.code.toUpperCase()),
    mapsTitle: replacements(pick(mapsTitleTemplates, seed, 3)),
    mapsDescription: replacements(pick(mapsDescriptionTemplates, seed, 4)),
    mapsPoints: getMapsPoints(city),
    gbpTitle: replacements(pick(gbpTitleTemplates, seed, 5)),
    gbpDescription: replacements(pick(gbpDescriptionTemplates, seed, 6)),
    gbpPoints: getGbpPoints(city),
    servicesTitle: replacements(pick(servicesTitleTemplates, seed, 7)),
    servicesDescription: replacements(pick(servicesDescriptionTemplates, seed, 8)),
    serviceItems: getServiceItems(city, state),
    whyChooseTitle: replacements(pick(whyChooseTitleTemplates, seed, 9)),
    whyChooseDescription: replacements(pick(whyChooseDescriptionTemplates, seed, 10)),
    whyChooseItems: getWhyChooseItems(city),
    processTitle: replacements(pick(processTitleTemplates, seed, 11)),
    processDescription: replacements(pick(processDescriptionTemplates, seed, 12)),
    processSteps: getProcessSteps(city),
    ctaTitle: replacements(pick(ctaTitleTemplates, seed, 13)),
    ctaDescription: replacements(pick(ctaDescriptionTemplates, seed, 14)),
  };
};
