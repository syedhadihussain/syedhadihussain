// Luxembourg cantons configuration with cities

import { StateDetailData, CityData } from "./states-config";

// Luxembourg Canton cities
export const LUXEMBOURG_CANTON_CITIES: CityData[] = [
  { name: "Luxembourg City", code: "luxembourg-city" },
  { name: "Bertrange", code: "bertrange" },
  { name: "Strassen", code: "strassen" },
  { name: "Hesperange", code: "hesperange" },
  { name: "Sandweiler", code: "sandweiler" }
];

// Esch-sur-Alzette Canton cities
export const ESCH_CANTON_CITIES: CityData[] = [
  { name: "Esch-sur-Alzette", code: "esch-sur-alzette" },
  { name: "Differdange", code: "differdange" },
  { name: "Bettembourg", code: "bettembourg" },
  { name: "Dudelange", code: "dudelange" }
];

// Capellen Canton cities
export const CAPELLEN_CANTON_CITIES: CityData[] = [
  { name: "Mamer", code: "mamer" },
  { name: "Steinfort", code: "steinfort" }
];

// Grevenmacher Canton cities
export const GREVENMACHER_CANTON_CITIES: CityData[] = [
  { name: "Grevenmacher", code: "grevenmacher" }
];

// Diekirch Canton cities
export const DIEKIRCH_CANTON_CITIES: CityData[] = [
  { name: "Diekirch", code: "diekirch" },
  { name: "Ettelbruck", code: "ettelbruck" }
];

// Wiltz Canton cities
export const WILTZ_CANTON_CITIES: CityData[] = [
  { name: "Wiltz", code: "wiltz" }
];

// Remich Canton cities
export const REMICH_CANTON_CITIES: CityData[] = [
  { name: "Remich", code: "remich" },
  { name: "Schengen", code: "schengen" }
];

// Echternach Canton cities
export const ECHTERNACH_CANTON_CITIES: CityData[] = [
  { name: "Echternach", code: "echternach" }
];

// Luxembourg Cantons Configuration
export const LU_STATES: Record<string, StateDetailData> = {
  "luxembourg-canton": {
    code: "luxembourg-canton",
    name: "Luxembourg Canton",
    fullName: "Luxembourg Canton",
    abbreviation: "LUX",
    cities: LUXEMBOURG_CANTON_CITIES,
    activeCities: LUXEMBOURG_CANTON_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82076.36!2d6.13!3d49.61!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479548cd40ccc89f%3A0x400d1d6d1056d10!2sLuxembourg%20City!5e0!3m2!1sen!2s",
    population: "0.2 million",
    timezone: "CET",
    tagline: "Local SEO Services in Luxembourg City - Grand Duchy Capital Search Domination",
    description: "Expert local SEO services across Luxembourg City. Financial hub optimization."
  },
  esch: {
    code: "esch",
    name: "Esch-sur-Alzette",
    fullName: "Esch-sur-Alzette Canton",
    abbreviation: "ESC",
    cities: ESCH_CANTON_CITIES,
    activeCities: ESCH_CANTON_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82076.36!2d5.98!3d49.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47954!2sEsch-sur-Alzette!5e0!3m2!1sen!2s",
    population: "0.15 million",
    timezone: "CET",
    tagline: "Local SEO Services in Esch-sur-Alzette - Second City Search Excellence",
    description: "Premier local SEO services for Esch-sur-Alzette. Luxembourg's second largest city."
  },
  capellen: {
    code: "capellen",
    name: "Capellen",
    fullName: "Capellen Canton",
    abbreviation: "CAP",
    cities: CAPELLEN_CANTON_CITIES,
    activeCities: CAPELLEN_CANTON_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82076.36!2d5.95!3d49.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47954!2sCapellen!5e0!3m2!1sen!2s",
    population: "0.05 million",
    timezone: "CET",
    tagline: "Local SEO Services in Capellen - Western Luxembourg Search Optimization",
    description: "Professional local SEO services for Capellen canton."
  },
  grevenmacher: {
    code: "grevenmacher",
    name: "Grevenmacher",
    fullName: "Grevenmacher Canton",
    abbreviation: "GRV",
    cities: GREVENMACHER_CANTON_CITIES,
    activeCities: GREVENMACHER_CANTON_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82076.36!2d6.44!3d49.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479!2sGrevenmacher!5e0!3m2!1sen!2s",
    population: "0.03 million",
    timezone: "CET",
    tagline: "Local SEO Services in Grevenmacher - Moselle Region Search Excellence",
    description: "Expert local SEO services for Grevenmacher. Wine region optimization."
  },
  diekirch: {
    code: "diekirch",
    name: "Diekirch",
    fullName: "Diekirch Canton",
    abbreviation: "DIE",
    cities: DIEKIRCH_CANTON_CITIES,
    activeCities: DIEKIRCH_CANTON_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82076.36!2d6.16!3d49.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479!2sDiekirch!5e0!3m2!1sen!2s",
    population: "0.04 million",
    timezone: "CET",
    tagline: "Local SEO Services in Diekirch - Northern Luxembourg Search Domination",
    description: "Premier local SEO services for Diekirch canton."
  },
  wiltz: {
    code: "wiltz",
    name: "Wiltz",
    fullName: "Wiltz Canton",
    abbreviation: "WLT",
    cities: WILTZ_CANTON_CITIES,
    activeCities: WILTZ_CANTON_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82076.36!2d5.93!3d49.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479!2sWiltz!5e0!3m2!1sen!2s",
    population: "0.02 million",
    timezone: "CET",
    tagline: "Local SEO Services in Wiltz - Ardennes Region Search Excellence",
    description: "Professional local SEO services for Wiltz canton."
  },
  remich: {
    code: "remich",
    name: "Remich",
    fullName: "Remich Canton",
    abbreviation: "REM",
    cities: REMICH_CANTON_CITIES,
    activeCities: REMICH_CANTON_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82076.36!2d6.37!3d49.54!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479!2sRemich!5e0!3m2!1sen!2s",
    population: "0.02 million",
    timezone: "CET",
    tagline: "Local SEO Services in Remich - Schengen Region Search Optimization",
    description: "Expert local SEO services for Remich. Historic Schengen area."
  },
  echternach: {
    code: "echternach",
    name: "Echternach",
    fullName: "Echternach Canton",
    abbreviation: "ECH",
    cities: ECHTERNACH_CANTON_CITIES,
    activeCities: ECHTERNACH_CANTON_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82076.36!2d6.42!3d49.81!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479!2sEchternach!5e0!3m2!1sen!2s",
    population: "0.02 million",
    timezone: "CET",
    tagline: "Local SEO Services in Echternach - Oldest City Search Excellence",
    description: "Premier local SEO services for Echternach. Luxembourg's oldest town."
  }
};

export const LU_STATE_CODES = Object.keys(LU_STATES);

export const isValidLUState = (code: string): boolean => {
  return code.toLowerCase() in LU_STATES;
};

export const getLUStateData = (code: string): StateDetailData | undefined => {
  return LU_STATES[code.toLowerCase()];
};
