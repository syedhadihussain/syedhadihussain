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

// Florida cities - major metropolitan areas with active pages
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
  { name: "Naples Park", code: "naples-park" }
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
