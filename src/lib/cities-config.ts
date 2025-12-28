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

// Generate unique, client-catching content for each city based on its characteristics
const getCityUniqueContent = (cityName: string, stateName: string, stateAbbreviation: string, cityIndex: number): { tagline: string; description: string; uniqueFeatures: string[]; industries: string[] } => {
  // Client-catching taglines optimized for "local SEO" keyword
  const taglines = [
    `#1 Local SEO Expert in ${cityName} – Get Found, Get Customers`,
    `Local SEO ${cityName}: Rank #1 on Google Maps & AI Search`,
    `${cityName} Local SEO That Delivers Real Customers, Not Just Rankings`,
    `Stop Losing Customers – Local SEO ${cityName} That Actually Works`,
    `Local SEO ${cityName}, ${stateAbbreviation}: From Invisible to #1 in 90 Days`,
    `${cityName}'s Most Trusted Local SEO Specialist – Proven Results`,
    `Local SEO ${cityName}: Get More Calls, More Customers, More Revenue`,
    `Dominate ${cityName} Search Results with Expert Local SEO Services`,
    `${cityName} Local SEO Expert: Your Shortcut to Page 1 Rankings`,
    `Unlock ${cityName} Customers with Strategic Local SEO That Converts`,
  ];

  // Compelling descriptions that build trust and urgency
  const descriptions = [
    `Tired of watching ${cityName} competitors steal your customers? I've spent 7 years mastering local SEO across 50+ industries, and I know exactly how to put YOUR business at the top of Google Maps, local search results, and AI assistants like ChatGPT. My ${cityName} clients see an average 150% increase in local visibility within 90 days – with a strategy built specifically for the ${stateAbbreviation} market.`,
    `Your ${cityName} customers are searching for you right now. Are they finding you – or your competitors? As your dedicated ${cityName} local SEO specialist, I combine data-driven strategies with deep ${stateName} market expertise to ensure your business appears first when it matters most. Over 50 industries served. 7+ years of proven results. Zero guesswork.`,
    `In ${cityName}'s competitive market, good enough isn't good enough. I deliver local SEO strategies that don't just improve rankings – they put paying customers through your door. From Google Business Profile domination to AI search optimization, I give ${cityName} businesses the unfair advantage they deserve.`,
    `Every day without proper local SEO costs your ${cityName} business real money. I've helped businesses across ${stateName} capture customers they didn't know they were losing. My comprehensive approach covers Google Maps, voice search, citation building, and the AI-powered search revolution that's changing how ${cityName} customers find local businesses.`,
    `What if every ${cityName} customer searching for your services found YOU first? That's not a dream – it's what I deliver. With battle-tested strategies refined across 50+ industries and 7 years of experience, I transform invisible ${cityName} businesses into local market leaders. Ready to stop guessing and start growing?`,
    `${cityName} businesses trust me because I deliver what others promise. Real rankings. Real calls. Real customers. My local SEO approach is built for the way people search today – including AI assistants, voice search, and Google Maps. If you're ready to own your ${cityName} market, let's talk.`,
    `Most ${cityName} businesses are leaving money on the table with outdated SEO tactics. I bring fresh, proven strategies that capture customers across Google, AI platforms, and voice search. Specialized expertise in ${stateAbbreviation} markets. 50+ industries served. 150% average visibility increase. Results that matter.`,
    `Your ${cityName} customers are looking for solutions – make sure they find you. I combine technical SEO excellence with deep local market knowledge to put your business in front of ready-to-buy customers. From neighborhood targeting to AI optimization, I cover every angle of modern local search.`,
    `In 7 years of helping ${stateName} businesses grow, I've learned what works in local SEO – and what doesn't. I bring that expertise to your ${cityName} business with strategies tailored to your industry, your market, and your goals. No cookie-cutter approaches. No wasted time. Just results.`,
    `${cityName} is competitive. Your local SEO strategy should be too. I help businesses like yours outrank, outperform, and outgrow the competition with comprehensive local search optimization. Google Maps. AI assistants. Voice search. Review management. I handle it all so you can focus on serving customers.`,
  ];

  // Feature sets emphasizing results and benefits
  const featureSets = [
    ["Google Maps #1 Rankings", "AI Search Domination", "150% More Visibility", "Guaranteed Results"],
    ["Map Pack Mastery", "ChatGPT Optimization", "More Phone Calls", "ROI-Focused Strategies"],
    ["Top 3 Local Rankings", "Voice Search Ready", "Competitor Crushing", "Monthly Growth Reports"],
    ["5-Star Review Strategy", "Local Link Authority", "Neighborhood Targeting", "Conversion Tracking"],
    ["GBP Optimization Pro", "AI Assistant Visibility", "Citation Dominance", "Lead Attribution"],
    ["Hyperlocal Targeting", "Multi-Platform SEO", "Review Generation", "Transparent Reporting"],
    ["Schema Markup Expert", "Mobile-First Rankings", "Local Content Strategy", "24/7 Rank Monitoring"],
    ["Service Area Domination", "Photo Optimization", "Q&A Management", "Category Maximization"],
    ["Geo-Targeted Campaigns", "Authority Building", "Search Console Mastery", "Revenue Tracking"],
    ["Community SEO", "Event Optimization", "Product Listings", "Service Showcasing"],
  ];

  // Industry focus varies by city to add uniqueness
  const industrySets = [
    ["Restaurants & Bars", "HVAC & Plumbing", "Dental Practices", "Personal Injury Law"],
    ["Retail Stores", "Auto Repair", "Real Estate Agents", "Gyms & Fitness"],
    ["Accountants & CPAs", "Roofing & Construction", "Med Spas & Salons", "Veterinarians"],
    ["Urgent Care & Clinics", "Financial Advisors", "Tutoring & Education", "Event Venues"],
    ["Hotels & Resorts", "Manufacturing", "IT Services", "Churches & Non-Profits"],
    ["Online Retailers", "Travel Agencies", "Golf & Recreation", "Art Galleries"],
    ["Senior Living", "Daycares", "Wedding Planners", "Caterers"],
    ["Insurance Agents", "Tax Preparers", "Digital Agencies", "Business Consultants"],
    ["Plumbers", "Electricians", "Lawn Care", "Maid Services"],
    ["Roofers", "Painters", "Movers", "Self-Storage"],
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
