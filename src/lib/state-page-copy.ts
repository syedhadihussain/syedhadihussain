import { StateDetailData } from "@/lib/states-config";

/**
 * State Page Copy Generator
 * 
 * PURPOSE: Generate unique, SEO-optimized content for each state page
 * FOCUS: Regional dominance, service availability, competitive advantage
 * 
 * INTENT DIFFERENTIATION (to avoid cannibalization):
 * - Country pages: Authority, coverage, scalability, international trust
 * - State pages: Regional dominance, service availability, competitive advantage ← THIS FILE
 * - City pages: Local intent, proximity, Google Maps & GBP optimization
 * - Industry pages: Niche expertise, compliance, industry-specific challenges
 * 
 * KEYWORD STRATEGY:
 * - Primary: "Local SEO Services" (natural usage, not stuffed)
 * - Secondary: regional SEO, statewide coverage, multi-location optimization
 * - Semantic: Google Business Profile, local search visibility, map pack rankings
 */

export type StatePageCopy = {
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  // Services Section
  servicesTitle: string;
  servicesSubtitle: string;
  servicesIntro: string;
  serviceItems: Array<{
    title: string;
    description: string;
  }>;
  // Cities/Coverage Section
  citiesTitle: string;
  citiesDescription: string;
  coverageIntro: string;
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

// ============================================================================
// HERO SECTION - Regional Dominance Focus
// ============================================================================

const heroTitleTemplates = [
  "Local SEO Services Across {state}",
  "{state} Local SEO Specialist",
  "Regional Local SEO for {state} Businesses",
  "Statewide Local Search Optimization in {state}",
  "Local SEO Services for {state} Business Owners",
];

const heroSubtitleTemplates = [
  "Regional expertise spanning {cityCount} cities and communities",
  "Helping {state} businesses compete in local search markets",
  "Strategic regional coverage from {city1} to {city2}",
  "Building regional search authority across {state}",
  "Your dedicated {state} local search partner",
];

const heroDescriptionTemplates = [
  `Businesses throughout {state} compete for local customers in an increasingly complex search landscape. My Local SEO Services help companies in {city1}, {city2}, {city3}, and across {cityCount}+ communities improve their Google Maps visibility, build review authority, and capture more customers actively searching for their services.`,
  
  `{state} businesses face distinct competitive challenges that require region-specific strategies. I work with service providers, retailers, and professionals across the state to improve local search performance through data-driven Google Business Profile optimization, citation building, and content strategies tailored to {state} markets.`,
  
  `Whether you operate in a single {state} city or serve customers across multiple locations, my approach to Local SEO addresses the regional factors that influence search rankings. I analyze competitive landscapes in {city1}, {city2}, {city3}, and beyond to develop strategies that improve visibility where your customers are searching.`,
  
  `My work with {state} businesses combines technical local search expertise with practical business understanding. I focus on improvements that directly impact customer acquisition: better Google Maps placement, stronger review profiles, accurate citations, and the trust signals that influence local purchasing decisions.`,
];

// ============================================================================
// SERVICES SECTION - Regional Service Availability
// ============================================================================

const servicesTitleTemplates = [
  "Regional Local SEO Solutions for {state}",
  "How I Help {state} Businesses Rank Locally",
  "Comprehensive Local SEO for {state} Markets",
  "Local Search Services Across {state}",
  "{state} Regional Search Optimization",
];

const servicesSubtitleTemplates = [
  `Each service addresses specific factors that influence local search rankings in {state} markets.`,
  `These solutions help {state} businesses improve visibility, build trust, and capture more local customers.`,
  `Designed for the competitive realities of {state} local search environments.`,
];

const servicesIntroTemplates = [
  `Local search success in {state} requires addressing multiple ranking factors simultaneously. From your Google Business Profile to your citation network, each element contributes to how well you appear when nearby customers search for your services.`,
  
  `The {state} local search landscape rewards businesses that maintain consistent, accurate information across platforms while building genuine review authority. These services create the foundation for sustainable regional visibility.`,
  
  `I focus on the optimizations that directly influence how {state} customers find and choose local businesses. Every strategy is designed to improve measurable outcomes: more calls, more direction requests, and more customers.`,
];

// Dynamic service items based on state characteristics
const getServiceItems = (state: StateDetailData, seed: number): Array<{ title: string; description: string }> => {
  const allServices = [
    {
      title: "Google Business Profile Optimization",
      description: `Complete optimization of your GBP listing for {state} markets, including category selection, service area configuration, business descriptions, and regular updates that signal activity to Google's local algorithm.`
    },
    {
      title: "Regional Citation Development",
      description: `Strategic citation building across directories and platforms relevant to {state} businesses. I ensure NAP consistency and pursue citations that reinforce your regional authority.`
    },
    {
      title: "Multi-Location Strategy",
      description: `For businesses serving multiple {state} cities, I develop coordinated strategies that build individual location authority while strengthening overall brand visibility across the region.`
    },
    {
      title: "Review Generation Systems",
      description: `Implementation of compliant, effective review generation processes that help {state} businesses build the social proof that influences both rankings and customer decisions.`
    },
    {
      title: "Local Content Development",
      description: `Creation of location-relevant content that demonstrates {state} expertise and addresses the specific questions and needs of local customers in your service areas.`
    },
    {
      title: "Competitive Analysis",
      description: `Detailed analysis of your {state} competitors' local search strategies, identifying opportunities where you can gain ground and threats that require attention.`
    },
    {
      title: "Local Link Acquisition",
      description: `Strategic outreach to {state} organizations, publications, and businesses to build locally relevant backlinks that strengthen your regional search authority.`
    },
    {
      title: "Technical Local SEO",
      description: `Website optimizations that improve local search performance, including schema markup, location pages, mobile experience, and site speed improvements.`
    },
  ];

  // Return 6 services, rotated based on seed
  return allServices.slice(0, 6).map(service => ({
    title: service.title,
    description: service.description.replace(/{state}/g, state.name)
  }));
};

// ============================================================================
// CITIES/COVERAGE SECTION
// ============================================================================

const citiesTitleTemplates = [
  "Serving Businesses Throughout {state}",
  "Regional Coverage Across {cityCount}+ {state} Cities",
  "Your {state} Local SEO Partner",
  "From {city1} to {city2} and Beyond",
  "Statewide Local Search Expertise",
];

const citiesDescriptionTemplates = [
  `Local search dynamics vary significantly across {state}. A dental practice in {city1} faces different competitive pressures than a home service company in {city2} or a retail business in {city3}. I analyze each market individually and develop strategies appropriate to local conditions.`,
  
  `My {state} coverage includes {city1}, {city2}, {city3}, {city4}, and {cityCount}+ additional communities. Each location receives attention to its specific competitive environment, search patterns, and customer behaviors.`,
  
  `Different {state} markets present different opportunities. Some areas have less competition and faster ranking potential; others require more sustained effort. I help you understand these dynamics and allocate resources effectively.`,
];

const coverageIntroTemplates = [
  `Whether your business serves a single {state} community or operates across multiple cities, I develop strategies scaled to your actual service areas. Regional businesses benefit from coordinated approaches that build both local and statewide authority.`,
  
  `Understanding {state} geography and market dynamics informs every strategy I develop. I know which areas present the best opportunities and which require more sophisticated competitive approaches.`,
];

// ============================================================================
// WHY CHOOSE SECTION - Regional Competitive Advantage
// ============================================================================

const whyChooseTitleTemplates = [
  "Why {state} Businesses Partner With Me",
  "Your Regional Competitive Advantage",
  "The {state} Local Search Edge",
  "Building Your {state} Market Position",
  "Results-Focused Regional SEO",
];

const whyChooseDescriptionTemplates = [
  `Many {state} businesses underutilize local search, creating opportunities for those who invest strategically. I help you capture visibility that competitors leave on the table through systematic, data-driven optimization.`,
  
  `Success in {state} local search requires understanding regional variations in search behavior, competitive intensity, and the trust factors that influence consumer choices. I bring this perspective to every engagement.`,
  
  `My approach prioritizes the improvements that directly impact customer acquisition. Rather than chasing vanity metrics, I focus on visibility gains that translate to phone calls, inquiries, and revenue.`,
];

const getWhyChooseItems = (state: StateDetailData, seed: number): Array<{ title: string; description: string }> => {
  const allItems = [
    {
      title: "Data-Driven Regional Strategy",
      description: `Every recommendation is based on analysis of actual {state} search data, competitor positioning, and market opportunities specific to your service areas.`
    },
    {
      title: "Transparent Progress Reporting",
      description: `You receive clear, understandable reports showing exactly what I am doing, how your rankings are changing, and the business impact of our work together.`
    },
    {
      title: "Multi-Industry Experience",
      description: `I have optimized local search presence for dozens of {state} businesses across professional services, home services, healthcare, retail, and other sectors.`
    },
    {
      title: "Search Guidelines Compliant",
      description: `All strategies follow Google's guidelines and industry best practices. I build sustainable visibility that does not put your business at risk of penalties.`
    },
    {
      title: "Direct Communication",
      description: `You work directly with me, not account managers or junior staff. This means faster decisions, more strategic conversations, and better results.`
    },
    {
      title: "Results-Focused Methodology",
      description: `I measure success by the outcomes that matter to your business: more calls, more direction requests, more customers. Rankings matter only when they drive results.`
    },
  ];

  return allItems.map(item => ({
    title: item.title,
    description: item.description.replace(/{state}/g, state.name)
  }));
};

// ============================================================================
// PROCESS SECTION
// ============================================================================

const processTitleTemplates = [
  "How I Approach {state} Local SEO",
  "My Regional Optimization Process",
  "From Analysis to Results",
  "The Path to {state} Local Visibility",
  "A Strategic Approach to Regional Search",
];

const processDescriptionTemplates = [
  `Effective local SEO in {state} follows a systematic process that addresses the factors most likely to improve your visibility and customer acquisition.`,
  
  `I approach every {state} engagement with the same methodical process, adapted to your specific business situation and competitive environment.`,
];

const processSteps = [
  {
    title: "Market Analysis",
    description: "Comprehensive review of your current local search position, competitor strategies, and opportunities specific to your {state} service areas."
  },
  {
    title: "Strategy Development",
    description: "Creation of a prioritized action plan based on potential impact and effort required, focusing on improvements that will drive meaningful results."
  },
  {
    title: "Foundation Building",
    description: "Optimization of your Google Business Profile, citation network, and website local signals to establish the foundation for sustained visibility."
  },
  {
    title: "Authority Development",
    description: "Ongoing review generation, content creation, and link building activities that strengthen your regional search authority over time."
  },
  {
    title: "Performance Monitoring",
    description: "Regular tracking of rankings, visibility metrics, and business outcomes to ensure strategies are delivering expected results."
  },
  {
    title: "Continuous Optimization",
    description: "Adjustment of tactics based on performance data and evolving competitive conditions in your {state} markets."
  },
];

// ============================================================================
// CTA SECTION
// ============================================================================

const ctaTitleTemplates = [
  "Start Improving Your {state} Visibility",
  "Ready to Rank Higher Across {state}?",
  "Build Your Regional Search Presence",
  "Capture More {state} Customers",
  "Strengthen Your {state} Market Position",
];

const ctaDescriptionTemplates = [
  `Schedule a consultation to discuss your {state} business goals and learn how strategic Local SEO can help you reach more customers in {city1}, {city2}, and across the region.`,
  
  `Book a strategy call to analyze your current {state} market position and identify the most effective path to improved local visibility and customer acquisition.`,
  
  `Whether you operate in {city1}, {city2}, or multiple {state} locations, I am ready to help you build the regional search presence that drives business growth.`,
];

// ============================================================================
// MAIN EXPORT FUNCTION
// ============================================================================

export const getStatePageCopy = (
  state: StateDetailData,
  countryName: string = "the country"
): StatePageCopy => {
  const seed = hashString(state.code + state.name);
  const cityCount = state.cities?.length || 0;
  const city1 = state.cities?.[0]?.name || "major cities";
  const city2 = state.cities?.[1]?.name || "growing areas";
  const city3 = state.cities?.[2]?.name || "key markets";
  const city4 = state.cities?.[3]?.name || "surrounding communities";

  const replacements = (text: string): string =>
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
    servicesIntro: replacements(pick(servicesIntroTemplates, seed, 5)),
    serviceItems: getServiceItems(state, seed),
    citiesTitle: replacements(pick(citiesTitleTemplates, seed, 6)),
    citiesDescription: replacements(pick(citiesDescriptionTemplates, seed, 7)),
    coverageIntro: replacements(pick(coverageIntroTemplates, seed, 8)),
    whyChooseTitle: replacements(pick(whyChooseTitleTemplates, seed, 9)),
    whyChooseDescription: replacements(pick(whyChooseDescriptionTemplates, seed, 10)),
    whyChooseItems: getWhyChooseItems(state, seed),
    processTitle: replacements(pick(processTitleTemplates, seed, 11)),
    processDescription: replacements(pick(processDescriptionTemplates, seed, 12)),
    processSteps: processSteps.map(step => ({
      title: step.title,
      description: replacements(step.description)
    })),
    ctaTitle: replacements(pick(ctaTitleTemplates, seed, 13)),
    ctaDescription: replacements(pick(ctaDescriptionTemplates, seed, 14)),
  };
};
