// City page configuration with unique SEO content for each city
import { CityData, StateDetailData, STATES } from "./states-config";

export interface CityDetailData {
  code: string;
  name: string;
  stateCode: string;
  stateName: string;
  stateAbbreviation: string;
  slug: string; // e.g., "local-seo-tampa"
  tagline: string;
  description: string;
  uniqueFeatures: string[];
  population?: string;
  industries: string[];
}

// Generate unique content for each city based on its characteristics
const getCityUniqueContent = (cityName: string, stateName: string, stateAbbreviation: string, cityIndex: number): { tagline: string; description: string; uniqueFeatures: string[]; industries: string[] } => {
  // Diverse taglines that vary by city position to ensure uniqueness
  const taglines = [
    `Dominate Local Search in ${cityName}`,
    `${cityName}'s Premier Local SEO Expert`,
    `Rank Higher in ${cityName} - Guaranteed Results`,
    `Transform Your ${cityName} Business Visibility`,
    `${cityName} Local Search Domination`,
    `Your ${cityName} SEO Growth Partner`,
    `${cityName} Maps & AI Search Specialist`,
    `Proven Local SEO Success in ${cityName}`,
    `${cityName} Business Growth Through SEO`,
    `Expert Local Optimization for ${cityName}`,
  ];

  // Unique descriptions with varied phrasing
  const descriptions = [
    `With 7+ years of experience across 50+ industries, I've helped businesses in ${cityName}, ${stateAbbreviation} achieve top rankings on Google Maps and AI-powered search platforms. My data-driven approach delivers measurable results that translate to more customers and revenue.`,
    `As your dedicated ${cityName} local SEO specialist, I combine deep market knowledge with proven optimization strategies. From Google Business Profile mastery to AI search readiness, I ensure your ${cityName} business stands out in every local search.`,
    `Serving ${cityName} businesses with comprehensive local SEO solutions that drive real growth. My expertise spans Google Maps optimization, citation building, and preparing your business for the AI search revolution happening right now.`,
    `Your ${cityName}, ${stateAbbreviation} business deserves visibility that matches your quality. I deliver strategic local SEO that puts you ahead of competitors, attracting customers actively searching for your services in ${cityName}.`,
    `Transform your ${cityName} business presence with battle-tested local SEO strategies. I've helped hundreds of businesses across ${stateName} achieve sustainable growth through smart search optimization and AI readiness.`,
    `${cityName} businesses trust me to deliver local SEO results that matter. My comprehensive approach covers every aspect of local search, from map pack rankings to voice search optimization and AI assistant visibility.`,
    `As a ${cityName} local SEO expert, I understand the unique competitive landscape of ${stateAbbreviation} markets. My strategies are tailored to help your business capture more local customers and outrank competitors.`,
    `I specialize in helping ${cityName} businesses dominate local search results. My proven methodology combines technical SEO excellence with local market expertise to deliver exceptional ROI.`,
    `For ${cityName} businesses seeking real growth, I offer comprehensive local SEO services that go beyond rankings. I focus on driving qualified leads and converting local searches into paying customers.`,
    `Elevate your ${cityName} business with expert local SEO that delivers. From Google Maps to AI assistants, I ensure your business is found by customers searching in ${cityName} and throughout ${stateName}.`,
  ];

  // Unique feature sets that vary by city
  const featureSets = [
    ["Google Maps Dominance", "AI Search Optimization", "Local Citation Building", "Review Generation Strategy"],
    ["Hyper-Local Targeting", "Competitor Analysis", "Voice Search Ready", "Mobile-First Approach"],
    ["Google Business Mastery", "Multi-Location SEO", "Local Link Building", "Conversion Optimization"],
    ["Map Pack Ranking", "Schema Markup Expert", "Local Content Strategy", "Performance Tracking"],
    ["Neighborhood Targeting", "Industry-Specific SEO", "Reputation Management", "Analytics Dashboard"],
    ["Local Keyword Research", "On-Page Optimization", "GMB Post Strategy", "Lead Attribution"],
    ["Service Area Optimization", "Photo Optimization", "Q&A Management", "Category Optimization"],
    ["Local Landing Pages", "NAP Consistency", "Review Response Strategy", "Rank Monitoring"],
    ["Geo-Targeted Campaigns", "Local Authority Building", "Search Console Analysis", "ROI Reporting"],
    ["Community Engagement SEO", "Event Optimization", "Product Listings", "Service Showcasing"],
  ];

  // Industry focus varies by city to add uniqueness
  const industrySets = [
    ["Restaurants & Food Service", "Home Services", "Medical & Dental", "Legal Services"],
    ["Retail & Shopping", "Automotive", "Real Estate", "Fitness & Wellness"],
    ["Professional Services", "Construction", "Beauty & Spa", "Pet Services"],
    ["Healthcare", "Financial Services", "Education", "Entertainment"],
    ["Hospitality", "Manufacturing", "Technology", "Non-Profit"],
    ["E-Commerce Local", "Travel & Tourism", "Sports & Recreation", "Arts & Culture"],
    ["Senior Care", "Childcare", "Wedding Services", "Event Planning"],
    ["Insurance", "Accounting", "Marketing Agencies", "Consulting"],
    ["Plumbing & HVAC", "Electrical", "Landscaping", "Cleaning Services"],
    ["Roofing", "Painting", "Moving Services", "Storage Solutions"],
  ];

  const index = cityIndex % 10;

  return {
    tagline: taglines[index],
    description: descriptions[index],
    uniqueFeatures: featureSets[index],
    industries: industrySets[index],
  };
};

// Get city detail data including unique content
export const getCityDetailData = (stateCode: string, cityCode: string): CityDetailData | undefined => {
  const state = STATES[stateCode.toLowerCase()];
  if (!state) return undefined;

  const cityIndex = state.cities.findIndex(c => c.code === cityCode.toLowerCase());
  if (cityIndex === -1) return undefined;

  const city = state.cities[cityIndex];
  const uniqueContent = getCityUniqueContent(city.name, state.name, state.abbreviation, cityIndex);

  return {
    code: city.code,
    name: city.name,
    stateCode: state.code,
    stateName: state.name,
    stateAbbreviation: state.abbreviation,
    slug: `local-seo-${city.code}`,
    ...uniqueContent,
  };
};

// Get city by slug (e.g., "local-seo-tampa" -> city data)
export const getCityBySlug = (slug: string): { city: CityDetailData; state: StateDetailData } | undefined => {
  // Extract city code from slug (e.g., "local-seo-tampa" -> "tampa")
  const cityCode = slug.replace("local-seo-", "");
  
  // Search through all states to find this city
  for (const stateCode of Object.keys(STATES)) {
    const state = STATES[stateCode];
    const cityData = state.cities.find(c => c.code === cityCode);
    
    if (cityData) {
      const cityDetail = getCityDetailData(stateCode, cityCode);
      if (cityDetail) {
        return { city: cityDetail, state };
      }
    }
  }
  
  return undefined;
};

// Check if a city slug is valid
export const isValidCitySlug = (slug: string): boolean => {
  return getCityBySlug(slug) !== undefined;
};

// Generate all city slugs for routing
export const getAllCitySlugs = (): string[] => {
  const slugs: string[] = [];
  
  for (const stateCode of Object.keys(STATES)) {
    const state = STATES[stateCode];
    for (const city of state.cities) {
      slugs.push(`local-seo-${city.code}`);
    }
  }
  
  return slugs;
};

// Get all cities for a specific state
export const getStateCities = (stateCode: string): CityDetailData[] => {
  const state = STATES[stateCode.toLowerCase()];
  if (!state) return [];
  
  return state.cities.map((city, index) => {
    const uniqueContent = getCityUniqueContent(city.name, state.name, state.abbreviation, index);
    return {
      code: city.code,
      name: city.name,
      stateCode: state.code,
      stateName: state.name,
      stateAbbreviation: state.abbreviation,
      slug: `local-seo-${city.code}`,
      ...uniqueContent,
    };
  });
};
