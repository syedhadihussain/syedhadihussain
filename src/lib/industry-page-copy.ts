import { IndustryData } from "@/lib/industries-config";

/**
 * Industry Page Copy Generator
 * 
 * PURPOSE: Generate unique, SEO-optimized content for each industry page
 * FOCUS: Niche expertise, compliance, industry-specific challenges
 * 
 * Each industry page targets ONE primary intent to avoid cannibalization:
 * - Country: Authority & international trust (handled separately)
 * - State: Regional dominance (handled separately)
 * - City: Local intent & proximity (handled separately)
 * - Industry: Niche expertise ← THIS FILE
 */

export type IndustryPageCopy = {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  challengesTitle: string;
  challengesDescription: string;
  solutionsTitle: string;
  solutionsDescription: string;
  servicesTitle: string;
  servicesDescription: string;
  entitiesTitle: string;
  entitiesDescription: string;
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
// HERO SECTION - Niche Expertise Focus
// ============================================================================

const heroTitleTemplates = [
  "Local SEO Services for {industry}",
  "{industry} Local SEO Specialist",
  "Grow Your {industry} Business Online",
  "Local Search Visibility for {industry}",
  "Strategic Local SEO for {industry}",
];

const heroSubtitleTemplates = [
  "Industry expertise that translates to rankings",
  "Understanding what {industryLower} customers actually search",
  "Specialized strategies for {industryLower} businesses",
  "From industry knowledge to local dominance",
  "Local SEO built around how {industryLower} works",
];

const heroDescriptionTemplates = [
  `The {industryLower} sector has unique characteristics that require specialized Local SEO approaches. I understand how {industryLower} customers search, what influences their decisions, and the specific trust signals that matter in this industry.`,
  `Generic Local SEO often fails for {industryLower} businesses because it ignores industry-specific search patterns, compliance requirements, and customer expectations. My approach is built specifically for {industryLower} success.`,
  `Working with {industryLower} clients has taught me which strategies deliver results in this sector. I apply that expertise to help your business rank for the keywords that actually bring qualified leads.`,
  `{industry} businesses face specific local search challenges that general SEO agencies often miss. I focus on the strategies, keywords, and optimizations that work specifically for {industryLower} companies.`,
];

// ============================================================================
// CHALLENGES SECTION
// ============================================================================

const challengesTitleTemplates = [
  "Challenges {industry} Face in Local Search",
  "Why {industry} Local SEO Is Different",
  "Common Obstacles for {industry} Online",
  "The {industry} Local Search Landscape",
  "Understanding {industry} Competitive Dynamics",
];

const challengesDescriptionTemplates = [
  `{industry} businesses face specific challenges: high competition for common service keywords, seasonal demand fluctuations, and customer expectations shaped by industry norms. Effective Local SEO addresses each of these factors.`,
  `Many {industryLower} businesses struggle with local visibility because they use generic marketing approaches. I identify the gaps in your current strategy and implement {industryLower}-specific solutions that work.`,
  `The {industryLower} space has unique competitive dynamics that influence what works in Local SEO. I analyze your specific market position and build strategies accordingly.`,
];

// ============================================================================
// SOLUTIONS SECTION
// ============================================================================

const solutionsTitleTemplates = [
  "Local SEO Solutions for {industry}",
  "How I Help {industry} Rank Locally",
  "{industry}-Specific SEO Strategies",
  "Custom Approaches for {industry}",
  "What Works for {industry} in Local Search",
];

const solutionsDescriptionTemplates = [
  `My {industryLower} Local SEO solutions address the specific ways customers find and choose {industryLower} providers. From optimizing for industry-specific keywords to building relevant citations, every action targets your growth.`,
  `I focus on the services and keywords that drive actual business for {industryLower}. Rather than generic optimizations, you get strategies designed around how {industryLower} customers actually search and decide.`,
  `For {industryLower}, I implement strategies that account for customer journey patterns specific to this sector. The result is Local SEO that aligns with how your potential customers actually behave.`,
];

// ============================================================================
// SERVICES SECTION
// ============================================================================

const servicesTitleTemplates = [
  "Local SEO Services for {industry}",
  "What I Offer {industry} Businesses",
  "Complete {industry} Local SEO",
  "How I Help {industry} Businesses Rank",
  "{industry} Local Search Solutions",
];

const servicesDescriptionTemplates = [
  `These services are tailored for {industryLower} businesses: Google Business Profile optimization, industry-specific content, targeted citations, and review strategies that build trust with your target customers.`,
  `I focus on what drives local visibility for {industryLower}: the keywords your customers use, the platforms they trust, and the signals that convince them to choose you over competitors.`,
  `From initial audit to ongoing optimization, these Local SEO services build a foundation for long-term success in the {industryLower} market.`,
];

// ============================================================================
// SEMANTIC ENTITIES SECTION
// ============================================================================

const entitiesTitleTemplates = [
  "Key Terms That Matter for {industry}",
  "{industry} Semantic SEO Strategy",
  "How {industry} Customers Search",
  "Target Keywords for {industry}",
  "{industry} Search Intent Optimization",
];

const entitiesDescriptionTemplates = [
  `My {industryLower} Local SEO strategy incorporates the semantic entities and related concepts that establish your expertise: {entities}, and more. This builds topical authority that search engines reward.`,
  `I target the specific terms and concepts that {industryLower} customers use when searching: {entities}. This ensures your content matches how people actually look for your services.`,
  `Beyond primary keywords, I optimize for the related terms and concepts that signal expertise in {industryLower}: {entities}. This comprehensive approach builds lasting authority.`,
];

// ============================================================================
// CTA SECTION
// ============================================================================

const ctaTitleTemplates = [
  "Grow Your {industry} Business",
  "Ready to Rank Higher as a {industry}?",
  "Get More {industry} Customers",
  "Start Your {industry} SEO Strategy",
  "Dominate Local Search in Your {industry} Market",
];

const ctaDescriptionTemplates = [
  `Ready to reach more customers searching for {industryLower} services? Let's discuss how Local SEO can help you stand out in this competitive industry.`,
  `Schedule a consultation to analyze your {industryLower} market position and create a strategy that drives real results.`,
  `Book a free strategy call to see exactly how I can improve your local visibility and bring more {industryLower} customers to your business.`,
];

export const getIndustryPageCopy = (industry: IndustryData): IndustryPageCopy => {
  const seed = hashString(industry.slug);
  const industryLower = industry.name.toLowerCase();
  const entities = formatList(industry.semanticEntities?.slice(0, 5) || []);

  const replacements = (text: string) =>
    text
      .replace(/{industry}/g, industry.name)
      .replace(/{industryLower}/g, industryLower)
      .replace(/{entities}/g, entities);

  return {
    heroTitle: replacements(pick(heroTitleTemplates, seed, 0)),
    heroSubtitle: replacements(pick(heroSubtitleTemplates, seed, 1)),
    heroDescription: replacements(pick(heroDescriptionTemplates, seed, 2)),
    challengesTitle: replacements(pick(challengesTitleTemplates, seed, 3)),
    challengesDescription: replacements(pick(challengesDescriptionTemplates, seed, 4)),
    solutionsTitle: replacements(pick(solutionsTitleTemplates, seed, 5)),
    solutionsDescription: replacements(pick(solutionsDescriptionTemplates, seed, 6)),
    servicesTitle: replacements(pick(servicesTitleTemplates, seed, 7)),
    servicesDescription: replacements(pick(servicesDescriptionTemplates, seed, 8)),
    entitiesTitle: replacements(pick(entitiesTitleTemplates, seed, 9)),
    entitiesDescription: replacements(pick(entitiesDescriptionTemplates, seed, 10)),
    ctaTitle: replacements(pick(ctaTitleTemplates, seed, 11)),
    ctaDescription: replacements(pick(ctaDescriptionTemplates, seed, 12)),
  };
};