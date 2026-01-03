/**
 * SEO Metadata Generator
 * 
 * Generates unique, SEO-optimized meta titles and descriptions for all location pages
 * Following strict requirements:
 * - Meta titles start with intent modifier + power keyword + "Local SEO Services"
 * - Meta titles end with "– Syed Hadi Hussain"
 * - Length: 80-90 chars for title, 180-190 chars for description
 * - Structural variation is mandatory - no repeating patterns
 * - All content must be semantically unique
 */

// Intent modifiers and power keywords to rotate
const intentModifiers = [
  "Best", "Top", "Professional", "Trusted", "Expert", "Affordable", "Proven",
  "Leading", "Premier", "Certified", "Elite", "Reliable", "Strategic"
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

// ============================================================================
// COUNTRY META GENERATORS
// ============================================================================

type CountryTitlePattern = (countryName: string, modifier: string) => string;

const countryTitlePatterns: CountryTitlePattern[] = [
  (country, mod) => `${mod} Local SEO Services in ${country} | GBP & Maps – Syed Hadi Hussain`,
  (country, mod) => `${mod} Local SEO Services for ${country} Businesses – Syed Hadi Hussain`,
  (country, mod) => `${mod} Local SEO Services ${country} | Google Maps Expert – Syed Hadi Hussain`,
  (country, mod) => `${mod} Local SEO Services Across ${country} | Rankings – Syed Hadi Hussain`,
  (country, mod) => `${mod} Local SEO Services in ${country} | Map Pack – Syed Hadi Hussain`,
  (country, mod) => `${mod} Local SEO Services for ${country} | GBP Ranking – Syed Hadi Hussain`,
];

type CountryDescPattern = (countryName: string, statesCount: number) => string;

const countryDescPatterns: CountryDescPattern[] = [
  (country, states) => `Hire a trusted local SEO specialist serving ${country}. I help businesses across ${states}+ states dominate Google Maps, optimize GBP listings, and boost local search rankings. Get more calls and leads today.`,
  (country, states) => `Expert local SEO services for ${country} businesses. As a local SEO freelancer with 7+ years experience, I deliver Google Maps optimization, GBP management, and near me visibility across ${states}+ states. Book a free audit.`,
  (country, states) => `Professional local SEO expert helping ${country} companies rank higher on Google Maps. My local SEO services include GBP optimization, citation building, and local search strategies for ${states}+ states. Drive more traffic.`,
  (country, states) => `Boost your ${country} business with proven local SEO services. As a certified local SEO specialist, I optimize Google Business Profiles, improve map pack rankings, and increase visibility across ${states}+ states. Grow your leads.`,
  (country, states) => `Transform your ${country} local presence with expert local SEO services. I specialize in Google Maps SEO, GBP optimization, and local search ranking strategies for businesses in ${states}+ states. More customers await.`,
  (country, states) => `Dominate local search in ${country} with my professional local SEO services. As a freelance local SEO expert, I help businesses in ${states}+ states achieve top Google Maps positions and GBP visibility. Start growing today.`,
];

export const generateCountryMetaTitle = (countryName: string, countryCode: string): string => {
  const modifierIndex = getUniqueIndex(countryName, countryCode, intentModifiers.length, 1);
  const patternIndex = getUniqueIndex(countryCode, countryName, countryTitlePatterns.length, 2);
  const modifier = intentModifiers[modifierIndex];
  return countryTitlePatterns[patternIndex](countryName, modifier);
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
  (state, mod) => `${mod} Local SEO Services in ${state} | Google Maps & GBP – Syed Hadi Hussain`,
  (state, mod) => `${mod} Local SEO Services for ${state} Businesses | Rankings – Syed Hadi Hussain`,
  (state, mod) => `${mod} Local SEO Services ${state} | Map Pack Expert – Syed Hadi Hussain`,
  (state, mod) => `${mod} Local SEO Services in ${state} | Near Me Visibility – Syed Hadi Hussain`,
  (state, mod) => `${mod} Local SEO Services for ${state} | GBP Optimization – Syed Hadi Hussain`,
  (state, mod) => `${mod} Local SEO Services ${state} | Local Search Growth – Syed Hadi Hussain`,
  (state, mod) => `${mod} Local SEO Services in ${state} | Boost Local Traffic – Syed Hadi Hussain`,
  (state, mod) => `${mod} Local SEO Services for ${state} Companies | Maps – Syed Hadi Hussain`,
  (state, mod) => `${mod} Local SEO Services ${state} | Citation Building – Syed Hadi Hussain`,
  (state, mod) => `${mod} Local SEO Services in ${state} | Review Strategy – Syed Hadi Hussain`,
];

type StateDescPattern = (stateName: string, cities: string[], cityCount: number) => string;

const stateDescPatterns: StateDescPattern[] = [
  (state, cities, count) => `Partner with a trusted local SEO specialist for ${state}. I deliver expert GBP optimization, Google Maps SEO, and local search ranking improvements for businesses in ${cities[0]}, ${cities[1]}, and ${count}+ cities. Book your free strategy call.`,
  (state, cities, count) => `Boost your ${state} business with professional local SEO services. As a freelance local SEO expert, I help companies in ${cities[0]}, ${cities[1]}, ${cities[2]} achieve top map pack rankings and GBP visibility. Get more local leads today.`,
  (state, cities, count) => `Dominate local search in ${state} with my proven local SEO services. I specialize in Google Business Profile optimization, near me visibility, and local citation building for ${count}+ cities including ${cities[0]}. Grow your customer base.`,
  (state, cities, count) => `Expert local SEO specialist serving ${state} businesses. From ${cities[0]} to ${cities[1]}, I deliver Google Maps optimization, GBP management, and local search strategies that drive real results. More calls and visits await.`,
  (state, cities, count) => `Transform your ${state} local presence with data-driven local SEO services. As your dedicated local SEO freelancer, I optimize businesses in ${cities[0]}, ${cities[1]}, and ${count}+ cities for Google Maps and near me searches. Start ranking higher.`,
  (state, cities, count) => `Professional local SEO services for ${state} companies. I help businesses in ${cities[0]}, ${cities[1]}, ${cities[2]} dominate Google Maps, build citation authority, and capture more local customers. Your growth partner awaits.`,
  (state, cities, count) => `Elevate your ${state} visibility with expert local SEO services. As a certified local SEO specialist, I deliver GBP optimization, review strategies, and map pack ranking improvements across ${count}+ cities. Drive measurable business growth.`,
  (state, cities, count) => `Grow your ${state} business with trusted local SEO services. I provide Google Maps SEO, local citation building, and GBP management for companies in ${cities[0]}, ${cities[1]}, and throughout the region. Capture more local searches.`,
];

export const generateStateMetaTitle = (stateName: string, stateCode: string): string => {
  const modifierIndex = getUniqueIndex(stateName, stateCode, intentModifiers.length, 4);
  const patternIndex = getUniqueIndex(stateCode, stateName, stateTitlePatterns.length, 5);
  const modifier = intentModifiers[modifierIndex];
  return stateTitlePatterns[patternIndex](stateName, modifier);
};

export const generateStateMetaDescription = (stateName: string, stateCode: string, cityNames: string[], cityCount: number): string => {
  const patternIndex = getUniqueIndex(stateCode, stateName, stateDescPatterns.length, 6);
  const cities = cityNames.length >= 3 ? cityNames : [...cityNames, "local areas", "nearby communities"];
  return stateDescPatterns[patternIndex](stateName, cities, cityCount);
};

// ============================================================================
// CITY META GENERATORS
// ============================================================================

type CityTitlePattern = (cityName: string, stateAbbr: string, modifier: string) => string;

const cityTitlePatterns: CityTitlePattern[] = [
  (city, state, mod) => `${mod} Local SEO Services in ${city}, ${state} | GBP Expert – Syed Hadi Hussain`,
  (city, state, mod) => `${mod} Local SEO Services for ${city} Businesses | Maps – Syed Hadi Hussain`,
  (city, state, mod) => `${mod} Local SEO Services ${city}, ${state} | Rankings – Syed Hadi Hussain`,
  (city, state, mod) => `${mod} Local SEO Services in ${city} | Map Pack Growth – Syed Hadi Hussain`,
  (city, state, mod) => `${mod} Local SEO Services for ${city}, ${state} | GBP – Syed Hadi Hussain`,
  (city, state, mod) => `${mod} Local SEO Services ${city} | Near Me Visibility – Syed Hadi Hussain`,
  (city, state, mod) => `${mod} Local SEO Services in ${city}, ${state} | Leads – Syed Hadi Hussain`,
  (city, state, mod) => `${mod} Local SEO Services for ${city} | Google Maps – Syed Hadi Hussain`,
  (city, state, mod) => `${mod} Local SEO Services ${city}, ${state} | Reviews – Syed Hadi Hussain`,
  (city, state, mod) => `${mod} Local SEO Services in ${city} | Local Traffic – Syed Hadi Hussain`,
  (city, state, mod) => `${mod} Local SEO Services for ${city}, ${state} | Rank – Syed Hadi Hussain`,
  (city, state, mod) => `${mod} Local SEO Services ${city} | Citation Expert – Syed Hadi Hussain`,
];

type CityDescPattern = (cityName: string, stateName: string) => string;

const cityDescPatterns: CityDescPattern[] = [
  (city, state) => `Hire a trusted local SEO specialist in ${city}, ${state}. I deliver expert Google Business Profile optimization, map pack ranking strategies, and local search visibility improvements. Get more calls, leads, and customers for your ${city} business.`,
  (city, state) => `Boost your ${city} business with professional local SEO services. As a freelance local SEO expert in ${state}, I help companies dominate Google Maps, optimize GBP listings, and capture near me searches. Book your free strategy call today.`,
  (city, state) => `Expert local SEO services for ${city}, ${state} businesses. I specialize in Google Maps optimization, local citation building, and GBP management that drives real results. Transform your local visibility and grow your customer base.`,
  (city, state) => `Dominate local search in ${city} with my proven local SEO services. As a certified local SEO specialist serving ${state}, I deliver map pack rankings, review strategies, and near me visibility improvements. More ${city} customers await.`,
  (city, state) => `Transform your ${city}, ${state} local presence with data-driven local SEO services. I optimize Google Business Profiles, build citation authority, and improve local search rankings. Capture more customers actively searching for your services.`,
  (city, state) => `Professional local SEO expert helping ${city} businesses rank higher. From GBP optimization to Google Maps SEO, I deliver strategies that bring more local customers to your ${state} business. Start your growth journey today.`,
  (city, state) => `Grow your ${city}, ${state} business with trusted local SEO services. As your dedicated local SEO freelancer, I provide Google Maps optimization, review generation, and local visibility strategies. Drive more qualified leads and calls.`,
  (city, state) => `Elevate your ${city} visibility with expert local SEO services in ${state}. I deliver GBP optimization, local citation building, and map pack ranking strategies that help businesses capture more near me searches. Your success starts here.`,
  (city, state) => `Partner with a proven local SEO specialist for ${city}, ${state}. I help businesses achieve top Google Maps positions, optimize GBP listings, and build local search authority. More visibility, more customers, more growth.`,
  (city, state) => `Accelerate your ${city} business growth with professional local SEO services. As a local SEO expert in ${state}, I specialize in Google Maps SEO, review strategies, and GBP optimization that delivers measurable results. Contact me today.`,
];

export const generateCityMetaTitle = (cityName: string, stateCode: string, stateAbbr: string): string => {
  const modifierIndex = getUniqueIndex(cityName, stateCode, intentModifiers.length, 7);
  const patternIndex = getUniqueIndex(stateCode, cityName, cityTitlePatterns.length, 8);
  const modifier = intentModifiers[modifierIndex];
  return cityTitlePatterns[patternIndex](cityName, stateAbbr, modifier);
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
  (industry, mod) => `${mod} Local SEO Services for ${industry} | GBP Expert – Syed Hadi Hussain`,
  (industry, mod) => `${mod} Local SEO Services in ${industry} Industry | Maps – Syed Hadi Hussain`,
  (industry, mod) => `${mod} Local SEO Services for ${industry} Businesses – Syed Hadi Hussain`,
  (industry, mod) => `${mod} Local SEO Services ${industry} | Map Pack Rankings – Syed Hadi Hussain`,
  (industry, mod) => `${mod} Local SEO Services for ${industry} | Near Me SEO – Syed Hadi Hussain`,
  (industry, mod) => `${mod} Local SEO Services in ${industry} Niche | Leads – Syed Hadi Hussain`,
  (industry, mod) => `${mod} Local SEO Services for ${industry} | Rankings Expert – Syed Hadi Hussain`,
  (industry, mod) => `${mod} Local SEO Services ${industry} Industry | Visibility – Syed Hadi Hussain`,
  (industry, mod) => `${mod} Local SEO Services for ${industry} Companies | GBP – Syed Hadi Hussain`,
  (industry, mod) => `${mod} Local SEO Services in ${industry} | Google Maps – Syed Hadi Hussain`,
  (industry, mod) => `${mod} Local SEO Services for ${industry} Firms | Traffic – Syed Hadi Hussain`,
  (industry, mod) => `${mod} Local SEO Services ${industry} | Citation Building – Syed Hadi Hussain`,
];

type IndustryDescPattern = (industryName: string, industryLower: string) => string;

const industryDescPatterns: IndustryDescPattern[] = [
  (industry, lower) => `Specialized local SEO services for ${lower}. As an industry-focused local SEO specialist, I deliver GBP optimization, Google Maps SEO, and local search strategies tailored to ${industry}. Drive more qualified leads today.`,
  (industry, lower) => `Expert local SEO services for the ${lower} industry. I help businesses dominate local search with targeted GBP optimization, map pack rankings, and citation building. Grow your ${industry} visibility and customer base.`,
  (industry, lower) => `Professional local SEO expert serving ${lower}. From Google Maps optimization to review strategies, I deliver industry-specific local SEO services that drive real results. Capture more local ${industry} customers.`,
  (industry, lower) => `Boost your ${industry} business with proven local SEO services. As a freelance local SEO specialist, I optimize GBP listings, build citations, and improve near me search visibility. Get more calls and leads today.`,
  (industry, lower) => `Dominate local search in the ${lower} industry with my trusted local SEO services. I specialize in Google Business Profile optimization, map pack rankings, and local citation strategies. Grow your business faster.`,
  (industry, lower) => `Transform your ${industry} local presence with data-driven local SEO services. I help ${lower} achieve top Google Maps positions, generate more reviews, and capture near me searches. Start ranking higher.`,
  (industry, lower) => `Partner with a certified local SEO specialist for ${lower}. I deliver GBP management, Google Maps SEO, and local search strategies that bring real results. More visibility, more customers, more growth for ${industry}.`,
  (industry, lower) => `Grow your ${industry} business with expert local SEO services. As your dedicated local SEO freelancer, I optimize for Google Maps, build citation authority, and improve local rankings. Drive measurable business growth.`,
  (industry, lower) => `Elevate your ${lower} visibility with professional local SEO services. I provide GBP optimization, review generation, and map pack ranking strategies specifically designed for the ${industry} industry. Book a free audit.`,
  (industry, lower) => `Accelerate growth for ${lower} with my proven local SEO services. I specialize in Google Maps optimization, local citation building, and GBP management that delivers more calls, leads, and customers. Contact me today.`,
];

export const generateIndustryMetaTitle = (industryName: string, industrySlug: string): string => {
  const modifierIndex = getUniqueIndex(industryName, industrySlug, intentModifiers.length, 10);
  const patternIndex = getUniqueIndex(industrySlug, industryName, industryTitlePatterns.length, 11);
  const modifier = intentModifiers[modifierIndex];
  return industryTitlePatterns[patternIndex](industryName, modifier);
};

export const generateIndustryMetaDescription = (industryName: string, industrySlug: string): string => {
  const patternIndex = getUniqueIndex(industrySlug, industryName, industryDescPatterns.length, 12);
  const industryLower = industryName.toLowerCase();
  return industryDescPatterns[patternIndex](industryName, industryLower);
};
