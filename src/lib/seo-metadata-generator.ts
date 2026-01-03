/**
 * SEO Metadata Generator
 * 
 * Generates unique, SEO-optimized meta titles and descriptions for all location pages
 * Following strict requirements:
 * - Meta titles start with intent modifier + power keyword + "Local SEO Services"
 * - Meta titles end with "– Syed Hadi Hussain"
 * - Length: 50-90 chars for title, 160-200 chars for description
 * - Structural variation is mandatory - no repeating patterns
 * - All content must be semantically unique
 */

// Intent modifiers and power keywords to rotate
const intentModifiers = [
  "Best", "Top", "Professional", "Trusted", "Expert", "Affordable", "Proven",
  "Leading", "Premier", "Certified", "Elite", "Reliable", "Strategic",
  "Award-Winning", "Results-Driven", "Experienced", "Skilled"
];

// Generate unique index based on location characteristics
const getUniqueIndex = (name: string, code: string, arrayLength: number, offset: number = 0): number => {
  const combined = name + code + offset.toString();
  let hash = 0;
  for (let i = 0; i < combined.length; i++) {
    hash = ((hash << 5) - hash + combined.charCodeAt(i)) | 0;
  }
  return Math.abs(hash) % arrayLength;
};

// Truncate location name if too long to fit in title
const truncateName = (name: string, maxLength: number): string => {
  if (name.length <= maxLength) return name;
  return name.substring(0, maxLength);
};

// ============================================================================
// COUNTRY META GENERATORS
// ============================================================================

type CountryTitlePattern = (countryName: string, modifier: string) => string;

// Shorter patterns to stay under 90 chars even with long country names
const countryTitlePatterns: CountryTitlePattern[] = [
  (country, mod) => `${mod} Local SEO Services in ${country} | GBP – Syed Hadi Hussain`,
  (country, mod) => `${mod} Local SEO Services for ${country} | Maps – Syed Hadi Hussain`,
  (country, mod) => `${mod} Local SEO Services ${country} | Rankings – Syed Hadi Hussain`,
  (country, mod) => `${mod} Local SEO Services in ${country} | Expert – Syed Hadi Hussain`,
  (country, mod) => `${mod} Local SEO Services for ${country} | Growth – Syed Hadi Hussain`,
  (country, mod) => `${mod} Local SEO Services ${country} | Leads – Syed Hadi Hussain`,
  (country, mod) => `${mod} Local SEO Services in ${country} | Traffic – Syed Hadi Hussain`,
  (country, mod) => `${mod} Local SEO Services for ${country} | Rank – Syed Hadi Hussain`,
  (country, mod) => `${mod} Local SEO Services ${country} | Visibility – Syed Hadi Hussain`,
  (country, mod) => `${mod} Local SEO Services in ${country} | Calls – Syed Hadi Hussain`,
];

type CountryDescPattern = (countryName: string, statesCount: number) => string;

const countryDescPatterns: CountryDescPattern[] = [
  (country, states) => `Trusted local SEO specialist serving ${country}. I help businesses across ${states}+ states dominate Google Maps, optimize GBP listings, and boost local search rankings. Get more calls today.`,
  (country, states) => `Expert local SEO services for ${country}. As a freelancer with 7+ years experience, I deliver Google Maps optimization and GBP management across ${states}+ states. Book a free audit.`,
  (country, states) => `Professional local SEO expert helping ${country} companies rank on Google Maps. My services include GBP optimization and local search strategies for ${states}+ states.`,
  (country, states) => `Boost your ${country} business with proven local SEO services. I optimize Google Business Profiles and improve map pack rankings across ${states}+ states. Grow your leads.`,
  (country, states) => `Transform your ${country} local presence with expert local SEO. I specialize in Google Maps SEO and GBP optimization for businesses in ${states}+ states. More customers await.`,
  (country, states) => `Dominate local search in ${country} with professional local SEO services. I help businesses in ${states}+ states achieve top Google Maps positions. Start growing today.`,
  (country, states) => `Local SEO specialist for ${country} businesses. I deliver GBP optimization, citation building, and map pack rankings across ${states}+ states. Drive more traffic and leads.`,
  (country, states) => `Grow your ${country} business visibility with my local SEO services. Expert in Google Maps, GBP management, and local rankings for ${states}+ states. Contact me today.`,
];

export const generateCountryMetaTitle = (countryName: string, countryCode: string): string => {
  const modifierIndex = getUniqueIndex(countryName, countryCode, intentModifiers.length, 1);
  const patternIndex = getUniqueIndex(countryCode, countryName, countryTitlePatterns.length, 2);
  const modifier = intentModifiers[modifierIndex];
  const name = truncateName(countryName, 20);
  return countryTitlePatterns[patternIndex](name, modifier);
};

export const generateCountryMetaDescription = (countryName: string, countryCode: string, statesCount: number): string => {
  const patternIndex = getUniqueIndex(countryCode, countryName, countryDescPatterns.length, 3);
  return countryDescPatterns[patternIndex](countryName, statesCount);
};

// ============================================================================
// STATE META GENERATORS
// ============================================================================

type StateTitlePattern = (stateName: string, modifier: string) => string;

const stateTitlePatterns: StateTitlePattern[] = [
  (state, mod) => `${mod} Local SEO Services in ${state} | GBP & Maps – Syed Hadi Hussain`,
  (state, mod) => `${mod} Local SEO Services for ${state} | Rankings – Syed Hadi Hussain`,
  (state, mod) => `${mod} Local SEO Services ${state} | Map Pack – Syed Hadi Hussain`,
  (state, mod) => `${mod} Local SEO Services in ${state} | Near Me – Syed Hadi Hussain`,
  (state, mod) => `${mod} Local SEO Services for ${state} | GBP Expert – Syed Hadi Hussain`,
  (state, mod) => `${mod} Local SEO Services ${state} | Local Growth – Syed Hadi Hussain`,
  (state, mod) => `${mod} Local SEO Services in ${state} | Traffic – Syed Hadi Hussain`,
  (state, mod) => `${mod} Local SEO Services for ${state} | Maps – Syed Hadi Hussain`,
  (state, mod) => `${mod} Local SEO Services ${state} | Citations – Syed Hadi Hussain`,
  (state, mod) => `${mod} Local SEO Services in ${state} | Reviews – Syed Hadi Hussain`,
  (state, mod) => `${mod} Local SEO Services for ${state} | Leads – Syed Hadi Hussain`,
  (state, mod) => `${mod} Local SEO Services ${state} | Visibility – Syed Hadi Hussain`,
  (state, mod) => `${mod} Local SEO Services in ${state} | Rank Higher – Syed Hadi Hussain`,
  (state, mod) => `${mod} Local SEO Services for ${state} | Calls – Syed Hadi Hussain`,
];

type StateDescPattern = (stateName: string, cities: string[], cityCount: number) => string;

const stateDescPatterns: StateDescPattern[] = [
  (state, cities, count) => `Trusted local SEO specialist for ${state}. I deliver GBP optimization, Google Maps SEO, and local rankings for businesses in ${cities[0]}, ${cities[1]}, and ${count}+ cities. Book a free call.`,
  (state, cities, count) => `Boost your ${state} business with professional local SEO. I help companies in ${cities[0]}, ${cities[1]} achieve top map pack rankings and GBP visibility. Get more leads today.`,
  (state, cities, count) => `Dominate local search in ${state} with proven local SEO services. I specialize in GBP optimization and near me visibility for ${count}+ cities including ${cities[0]}. Grow your base.`,
  (state, cities, count) => `Expert local SEO specialist serving ${state}. From ${cities[0]} to ${cities[1]}, I deliver Google Maps optimization and local search strategies. More calls await.`,
  (state, cities, count) => `Transform your ${state} local presence with data-driven local SEO. I optimize businesses in ${cities[0]}, ${cities[1]}, and ${count}+ cities for Google Maps. Rank higher.`,
  (state, cities, count) => `Professional local SEO for ${state} companies. I help businesses in ${cities[0]}, ${cities[1]} dominate Google Maps and capture more local customers. Your partner awaits.`,
  (state, cities, count) => `Elevate your ${state} visibility with expert local SEO. I deliver GBP optimization and map pack rankings across ${count}+ cities. Drive measurable business growth.`,
  (state, cities, count) => `Grow your ${state} business with trusted local SEO. I provide Google Maps SEO and GBP management for companies in ${cities[0]}, ${cities[1]}. Capture more searches.`,
  (state, cities, count) => `Local SEO expert for ${state}. I help businesses in ${cities[0]}, ${cities[1]}, and ${count}+ cities rank on Google Maps and generate more local leads. Start today.`,
  (state, cities, count) => `Accelerate your ${state} growth with local SEO services. From GBP optimization to citation building, I serve ${cities[0]}, ${cities[1]}, and ${count}+ cities statewide.`,
];

export const generateStateMetaTitle = (stateName: string, stateCode: string): string => {
  const modifierIndex = getUniqueIndex(stateName, stateCode, intentModifiers.length, 4);
  const patternIndex = getUniqueIndex(stateCode, stateName, stateTitlePatterns.length, 5);
  const modifier = intentModifiers[modifierIndex];
  const name = truncateName(stateName, 18);
  return stateTitlePatterns[patternIndex](name, modifier);
};

export const generateStateMetaDescription = (stateName: string, stateCode: string, cityNames: string[], cityCount: number): string => {
  const patternIndex = getUniqueIndex(stateCode, stateName, stateDescPatterns.length, 6);
  const cities = cityNames.length >= 3 ? cityNames : [...cityNames, "local areas", "nearby areas"];
  return stateDescPatterns[patternIndex](stateName, cities, cityCount);
};

// ============================================================================
// CITY META GENERATORS
// ============================================================================

type CityTitlePattern = (cityName: string, stateAbbr: string, modifier: string) => string;

const cityTitlePatterns: CityTitlePattern[] = [
  (city, state, mod) => `${mod} Local SEO Services in ${city}, ${state} | GBP – Syed Hadi Hussain`,
  (city, state, mod) => `${mod} Local SEO Services for ${city} | Maps – Syed Hadi Hussain`,
  (city, state, mod) => `${mod} Local SEO Services ${city}, ${state} | Rank – Syed Hadi Hussain`,
  (city, state, mod) => `${mod} Local SEO Services in ${city} | Map Pack – Syed Hadi Hussain`,
  (city, state, mod) => `${mod} Local SEO Services for ${city}, ${state} – Syed Hadi Hussain`,
  (city, state, mod) => `${mod} Local SEO Services ${city} | Near Me – Syed Hadi Hussain`,
  (city, state, mod) => `${mod} Local SEO Services in ${city}, ${state} | Leads – Syed Hadi Hussain`,
  (city, state, mod) => `${mod} Local SEO Services for ${city} | GBP Expert – Syed Hadi Hussain`,
  (city, state, mod) => `${mod} Local SEO Services ${city}, ${state} | Growth – Syed Hadi Hussain`,
  (city, state, mod) => `${mod} Local SEO Services in ${city} | Traffic – Syed Hadi Hussain`,
  (city, state, mod) => `${mod} Local SEO Services for ${city}, ${state} | Calls – Syed Hadi Hussain`,
  (city, state, mod) => `${mod} Local SEO Services ${city} | Citations – Syed Hadi Hussain`,
  (city, state, mod) => `${mod} Local SEO Services in ${city}, ${state} | Reviews – Syed Hadi Hussain`,
  (city, state, mod) => `${mod} Local SEO Services for ${city} | Rankings – Syed Hadi Hussain`,
  (city, state, mod) => `${mod} Local SEO Services ${city}, ${state} | Visibility – Syed Hadi Hussain`,
  (city, state, mod) => `${mod} Local SEO Services in ${city} | Local Leads – Syed Hadi Hussain`,
];

type CityDescPattern = (cityName: string, stateName: string) => string;

const cityDescPatterns: CityDescPattern[] = [
  (city, state) => `Trusted local SEO specialist in ${city}, ${state}. I deliver GBP optimization, map pack rankings, and local search visibility. Get more calls and leads for your ${city} business.`,
  (city, state) => `Boost your ${city} business with professional local SEO. As a freelance expert in ${state}, I help companies dominate Google Maps and capture near me searches. Book a call.`,
  (city, state) => `Expert local SEO for ${city}, ${state}. I specialize in Google Maps optimization, citation building, and GBP management. Transform your local visibility and grow your base.`,
  (city, state) => `Dominate local search in ${city} with proven local SEO. As a specialist serving ${state}, I deliver map pack rankings and near me visibility. More ${city} customers await.`,
  (city, state) => `Transform your ${city}, ${state} presence with data-driven local SEO. I optimize GBP listings, build citations, and improve rankings. Capture more searching customers.`,
  (city, state) => `Professional local SEO expert helping ${city} businesses rank higher. From GBP optimization to Maps SEO, I deliver strategies that work. Start your ${state} growth today.`,
  (city, state) => `Grow your ${city}, ${state} business with trusted local SEO. I provide Google Maps optimization, review generation, and local visibility strategies. Drive more leads.`,
  (city, state) => `Elevate your ${city} visibility with expert local SEO in ${state}. I deliver GBP optimization and map pack strategies. Help your business capture more near me searches.`,
  (city, state) => `Partner with a proven local SEO specialist for ${city}, ${state}. I help businesses achieve top Google Maps positions. More visibility, more customers, more growth.`,
  (city, state) => `Accelerate your ${city} business with professional local SEO. As an expert in ${state}, I specialize in Google Maps SEO and GBP optimization. Contact me today.`,
  (city, state) => `Local SEO services for ${city}, ${state}. I deliver GBP management, citation building, and map pack rankings that drive real results. Grow your customer base now.`,
  (city, state) => `Expert in local SEO for ${city} businesses. I help ${state} companies rank on Google Maps, optimize GBP, and increase local visibility. More calls and leads await.`,
];

export const generateCityMetaTitle = (cityName: string, stateCode: string, stateAbbr: string): string => {
  const modifierIndex = getUniqueIndex(cityName, stateCode, intentModifiers.length, 7);
  const patternIndex = getUniqueIndex(stateCode, cityName, cityTitlePatterns.length, 8);
  const modifier = intentModifiers[modifierIndex];
  const name = truncateName(cityName, 16);
  return cityTitlePatterns[patternIndex](name, stateAbbr, modifier);
};

export const generateCityMetaDescription = (cityName: string, stateCode: string, stateName: string): string => {
  const patternIndex = getUniqueIndex(cityName, stateCode, cityDescPatterns.length, 9);
  return cityDescPatterns[patternIndex](cityName, stateName);
};

// ============================================================================
// INDUSTRY META GENERATORS
// ============================================================================

type IndustryTitlePattern = (industryName: string, modifier: string) => string;

const industryTitlePatterns: IndustryTitlePattern[] = [
  (industry, mod) => `${mod} Local SEO Services for ${industry} | GBP – Syed Hadi Hussain`,
  (industry, mod) => `${mod} Local SEO Services in ${industry} | Maps – Syed Hadi Hussain`,
  (industry, mod) => `${mod} Local SEO Services for ${industry} – Syed Hadi Hussain`,
  (industry, mod) => `${mod} Local SEO Services ${industry} | Rankings – Syed Hadi Hussain`,
  (industry, mod) => `${mod} Local SEO Services for ${industry} | Near Me – Syed Hadi Hussain`,
  (industry, mod) => `${mod} Local SEO Services in ${industry} | Leads – Syed Hadi Hussain`,
  (industry, mod) => `${mod} Local SEO Services for ${industry} | Expert – Syed Hadi Hussain`,
  (industry, mod) => `${mod} Local SEO Services ${industry} | Visibility – Syed Hadi Hussain`,
  (industry, mod) => `${mod} Local SEO Services for ${industry} | Growth – Syed Hadi Hussain`,
  (industry, mod) => `${mod} Local SEO Services in ${industry} | Traffic – Syed Hadi Hussain`,
  (industry, mod) => `${mod} Local SEO Services for ${industry} | Calls – Syed Hadi Hussain`,
  (industry, mod) => `${mod} Local SEO Services ${industry} | Citations – Syed Hadi Hussain`,
  (industry, mod) => `${mod} Local SEO Services for ${industry} | Reviews – Syed Hadi Hussain`,
  (industry, mod) => `${mod} Local SEO Services in ${industry} | Rank – Syed Hadi Hussain`,
  (industry, mod) => `${mod} Local SEO Services for ${industry} | Map Pack – Syed Hadi Hussain`,
  (industry, mod) => `${mod} Local SEO Services ${industry} | Local Leads – Syed Hadi Hussain`,
];

type IndustryDescPattern = (industryName: string, industryLower: string) => string;

const industryDescPatterns: IndustryDescPattern[] = [
  (industry, lower) => `Specialized local SEO for ${lower}. As an industry-focused specialist, I deliver GBP optimization and Google Maps SEO tailored to ${industry}. Drive more qualified leads.`,
  (industry, lower) => `Expert local SEO for the ${lower} industry. I help businesses dominate local search with GBP optimization, map pack rankings, and citation building. Grow visibility.`,
  (industry, lower) => `Professional local SEO serving ${lower}. From Google Maps optimization to review strategies, I deliver industry-specific services. Capture more ${industry} customers.`,
  (industry, lower) => `Boost your ${industry} business with proven local SEO. I optimize GBP listings, build citations, and improve near me search visibility. Get more calls and leads.`,
  (industry, lower) => `Dominate local search in the ${lower} industry with trusted local SEO. I specialize in GBP optimization and map pack rankings. Grow your business faster.`,
  (industry, lower) => `Transform your ${industry} presence with data-driven local SEO. I help ${lower} achieve top Google Maps positions and capture near me searches. Rank higher.`,
  (industry, lower) => `Partner with a certified local SEO specialist for ${lower}. I deliver GBP management and local search strategies. More visibility and customers for ${industry}.`,
  (industry, lower) => `Grow your ${industry} business with expert local SEO. I optimize for Google Maps, build citation authority, and improve local rankings. Drive measurable growth.`,
  (industry, lower) => `Elevate your ${lower} visibility with professional local SEO. I provide GBP optimization and map pack strategies designed for the ${industry} industry. Free audit.`,
  (industry, lower) => `Accelerate growth for ${lower} with my proven local SEO. I specialize in Google Maps optimization and GBP management. More calls, leads, and customers.`,
  (industry, lower) => `Local SEO expert for ${industry}. I deliver GBP optimization, citation building, and map pack rankings tailored to ${lower}. Start ranking higher today.`,
  (industry, lower) => `Trusted local SEO for ${lower}. I help ${industry} businesses rank on Google Maps, optimize GBP, and capture near me searches. Contact me for a free call.`,
];

export const generateIndustryMetaTitle = (industryName: string, industrySlug: string): string => {
  const modifierIndex = getUniqueIndex(industryName, industrySlug, intentModifiers.length, 10);
  const patternIndex = getUniqueIndex(industrySlug, industryName, industryTitlePatterns.length, 11);
  const modifier = intentModifiers[modifierIndex];
  const name = truncateName(industryName, 22);
  return industryTitlePatterns[patternIndex](name, modifier);
};

export const generateIndustryMetaDescription = (industryName: string, industrySlug: string): string => {
  const patternIndex = getUniqueIndex(industrySlug, industryName, industryDescPatterns.length, 12);
  const industryLower = industryName.toLowerCase();
  return industryDescPatterns[patternIndex](industryName, industryLower);
};
