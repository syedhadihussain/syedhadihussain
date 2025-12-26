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
  cities: CityData[];
  mapEmbed: string;
  population?: string;
  timezone: string;
}

// Florida cities - major metropolitan areas
export const FL_CITIES: CityData[] = [
  { name: "Miami", code: "miami" },
  { name: "Orlando", code: "orlando" },
  { name: "Tampa", code: "tampa" },
  { name: "Jacksonville", code: "jacksonville" },
  { name: "Fort Lauderdale", code: "fort-lauderdale" },
  { name: "St. Petersburg", code: "st-petersburg" },
  { name: "Hialeah", code: "hialeah" },
  { name: "Tallahassee", code: "tallahassee" },
  { name: "Cape Coral", code: "cape-coral" },
  { name: "Port St. Lucie", code: "port-st-lucie" },
  { name: "Fort Myers", code: "fort-myers" },
  { name: "Pembroke Pines", code: "pembroke-pines" },
  { name: "Hollywood", code: "hollywood" },
  { name: "Gainesville", code: "gainesville" },
  { name: "Miramar", code: "miramar" },
  { name: "Coral Springs", code: "coral-springs" },
  { name: "Palm Bay", code: "palm-bay" },
  { name: "West Palm Beach", code: "west-palm-beach" },
  { name: "Clearwater", code: "clearwater" },
  { name: "Lakeland", code: "lakeland" },
  { name: "Pompano Beach", code: "pompano-beach" },
  { name: "Davie", code: "davie" },
  { name: "Miami Beach", code: "miami-beach" },
  { name: "Boca Raton", code: "boca-raton" },
  { name: "Sunrise", code: "sunrise" },
  { name: "Deltona", code: "deltona" },
  { name: "Plantation", code: "plantation" },
  { name: "Palm Coast", code: "palm-coast" },
  { name: "Largo", code: "largo" },
  { name: "Deerfield Beach", code: "deerfield-beach" },
  { name: "Melbourne", code: "melbourne" },
  { name: "Boynton Beach", code: "boynton-beach" },
  { name: "Lauderhill", code: "lauderhill" },
  { name: "Fort Pierce", code: "fort-pierce" },
  { name: "Kissimmee", code: "kissimmee" },
  { name: "Homestead", code: "homestead" },
  { name: "Delray Beach", code: "delray-beach" },
  { name: "Daytona Beach", code: "daytona-beach" },
  { name: "Tamarac", code: "tamarac" },
  { name: "North Port", code: "north-port" },
  { name: "Sarasota", code: "sarasota" },
  { name: "Ocala", code: "ocala" },
  { name: "Port Orange", code: "port-orange" },
  { name: "Sanford", code: "sanford" },
  { name: "Coconut Creek", code: "coconut-creek" },
  { name: "Margate", code: "margate" },
  { name: "Bradenton", code: "bradenton" },
  { name: "Palm Beach Gardens", code: "palm-beach-gardens" },
  { name: "Pinellas Park", code: "pinellas-park" },
  { name: "Naples", code: "naples" }
];

export const STATES: Record<string, StateDetailData> = {
  fl: {
    code: "fl",
    name: "Florida",
    fullName: "State of Florida",
    abbreviation: "FL",
    cities: FL_CITIES,
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
