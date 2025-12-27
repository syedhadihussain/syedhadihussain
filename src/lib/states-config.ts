// State configuration with cities for state landing pages

export interface CityData {
  name: string;
  code: string;
}

export interface StateDetailData {
  code: string;
  name: string;
  fullName: string;
  abbreviation: string;
  cities: CityData[];        // All cities for display
  activeCities: string[];    // City codes that have active pages
  mapEmbed: string;
  population?: string;
  timezone: string;
}

// All Florida cities for display
export const FL_CITIES: CityData[] = [
  { name: "Miami", code: "miami" },
  { name: "Fort Lauderdale", code: "fort-lauderdale" },
  { name: "West Palm Beach", code: "west-palm-beach" },
  { name: "Orlando", code: "orlando" },
  { name: "Tampa", code: "tampa" },
  { name: "St Petersburg", code: "st-petersburg" },
  { name: "Clearwater", code: "clearwater" },
  { name: "Jacksonville", code: "jacksonville" },
  { name: "Boca Raton", code: "boca-raton" },
  { name: "Delray Beach", code: "delray-beach" },
  { name: "Boynton Beach", code: "boynton-beach" },
  { name: "Coral Springs", code: "coral-springs" },
  { name: "Pembroke Pines", code: "pembroke-pines" },
  { name: "Hollywood FL", code: "hollywood-fl" },
  { name: "Hialeah", code: "hialeah" },
  { name: "Doral", code: "doral" },
  { name: "Kissimmee", code: "kissimmee" },
  { name: "Lakeland", code: "lakeland" },
  { name: "Brandon", code: "brandon" },
  { name: "Sarasota", code: "sarasota" },
  { name: "Naples", code: "naples" },
  { name: "Fort Myers", code: "fort-myers" },
  { name: "Cape Coral", code: "cape-coral" },
  { name: "Estero", code: "estero" },
  { name: "Bonita Springs", code: "bonita-springs" },
  { name: "Naples Park", code: "naples-park" },
  // Additional cities (no pages yet)
  { name: "Tallahassee", code: "tallahassee" },
  { name: "Port St. Lucie", code: "port-st-lucie" },
  { name: "Gainesville", code: "gainesville" },
  { name: "Miramar", code: "miramar" },
  { name: "Palm Bay", code: "palm-bay" },
  { name: "Pompano Beach", code: "pompano-beach" },
  { name: "Davie", code: "davie" },
  { name: "Miami Beach", code: "miami-beach" },
  { name: "Sunrise", code: "sunrise" },
  { name: "Deltona", code: "deltona" },
  { name: "Plantation", code: "plantation" },
  { name: "Palm Coast", code: "palm-coast" },
  { name: "Largo", code: "largo" },
  { name: "Deerfield Beach", code: "deerfield-beach" },
  { name: "Melbourne", code: "melbourne" },
  { name: "Lauderhill", code: "lauderhill" },
  { name: "Fort Pierce", code: "fort-pierce" },
  { name: "Homestead", code: "homestead" },
  { name: "Daytona Beach", code: "daytona-beach" },
  { name: "Tamarac", code: "tamarac" },
  { name: "North Port", code: "north-port" },
  { name: "Ocala", code: "ocala" },
  { name: "Port Orange", code: "port-orange" },
  { name: "Sanford", code: "sanford" },
  { name: "Coconut Creek", code: "coconut-creek" },
  { name: "Margate", code: "margate" },
  { name: "Bradenton", code: "bradenton" },
  { name: "Palm Beach Gardens", code: "palm-beach-gardens" },
  { name: "Pinellas Park", code: "pinellas-park" }
];

// Only these 26 cities have active pages
export const FL_ACTIVE_CITIES: string[] = [
  "miami", "fort-lauderdale", "west-palm-beach", "orlando", "tampa",
  "st-petersburg", "clearwater", "jacksonville", "boca-raton", "delray-beach",
  "boynton-beach", "coral-springs", "pembroke-pines", "hollywood-fl", "hialeah",
  "doral", "kissimmee", "lakeland", "brandon", "sarasota", "naples",
  "fort-myers", "cape-coral", "estero", "bonita-springs", "naples-park"
];

export const STATES: Record<string, StateDetailData> = {
  fl: {
    code: "fl",
    name: "Florida",
    fullName: "State of Florida",
    abbreviation: "FL",
    cities: FL_CITIES,
    activeCities: FL_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14503634.939573511!2d-79.77248745264295!3d27.440401301508807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c1766591562abf%3A0xf72e13d35bc74ed0!2sFlorida%2C%20USA!5e0!3m2!1sen!2s!4v1766839247453!5m2!1sen!2s",
    population: "22.6 million",
    timezone: "America/New_York"
  }
};

// Get all active state codes
export const STATE_CODES = Object.keys(STATES);

// Check if a state code is valid
export const isValidState = (code: string): boolean => {
  return code.toLowerCase() in STATES;
};

// Get state data by code
export const getStateData = (code: string): StateDetailData | undefined => {
  return STATES[code.toLowerCase()];
};

// Check if a city has an active page
export const isCityActive = (stateCode: string, cityCode: string): boolean => {
  const state = STATES[stateCode.toLowerCase()];
  return state?.activeCities.includes(cityCode.toLowerCase()) ?? false;
};
