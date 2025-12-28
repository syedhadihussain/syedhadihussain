// Ireland provinces and counties configuration with cities

import { StateDetailData, CityData } from "./states-config";

// Dublin cities
export const DUBLIN_CITIES: CityData[] = [
  { name: "Dublin City", code: "dublin-city" },
  { name: "Dún Laoghaire", code: "dun-laoghaire" },
  { name: "Tallaght", code: "tallaght" },
  { name: "Blanchardstown", code: "blanchardstown" },
  { name: "Swords", code: "swords" }
];

// Cork cities
export const CORK_CITIES: CityData[] = [
  { name: "Cork City", code: "cork-city" },
  { name: "Cobh", code: "cobh" },
  { name: "Mallow", code: "mallow" },
  { name: "Youghal", code: "youghal" }
];

// Galway cities
export const GALWAY_CITIES: CityData[] = [
  { name: "Galway City", code: "galway-city" },
  { name: "Ballinasloe", code: "ballinasloe" },
  { name: "Oranmore", code: "oranmore" }
];

// Limerick cities
export const LIMERICK_CITIES: CityData[] = [
  { name: "Limerick City", code: "limerick-city" },
  { name: "Newcastle West", code: "newcastle-west" }
];

// Kerry cities
export const KERRY_CITIES: CityData[] = [
  { name: "Tralee", code: "tralee" },
  { name: "Killarney", code: "killarney" },
  { name: "Listowel", code: "listowel" }
];

// Kildare cities
export const KILDARE_CITIES: CityData[] = [
  { name: "Naas", code: "naas" },
  { name: "Newbridge", code: "newbridge" },
  { name: "Maynooth", code: "maynooth" }
];

// Meath cities
export const MEATH_CITIES: CityData[] = [
  { name: "Navan", code: "navan" },
  { name: "Trim", code: "trim" },
  { name: "Drogheda", code: "drogheda" }
];

// Wicklow cities
export const WICKLOW_CITIES: CityData[] = [
  { name: "Bray", code: "bray" },
  { name: "Wicklow Town", code: "wicklow-town" },
  { name: "Greystones", code: "greystones" }
];

// Clare cities
export const CLARE_CITIES: CityData[] = [
  { name: "Ennis", code: "ennis" },
  { name: "Shannon", code: "shannon" }
];

// Waterford cities
export const WATERFORD_CITIES: CityData[] = [
  { name: "Waterford City", code: "waterford-city" },
  { name: "Dungarvan", code: "dungarvan" }
];

// Tipperary cities
export const TIPPERARY_CITIES: CityData[] = [
  { name: "Clonmel", code: "clonmel" },
  { name: "Thurles", code: "thurles" },
  { name: "Nenagh", code: "nenagh" }
];

// Mayo cities
export const MAYO_CITIES: CityData[] = [
  { name: "Castlebar", code: "castlebar" },
  { name: "Ballina", code: "ballina" },
  { name: "Westport", code: "westport" }
];

// Ireland Counties Configuration
export const IE_STATES: Record<string, StateDetailData> = {
  dublin: {
    code: "dublin",
    name: "Dublin",
    fullName: "County Dublin",
    abbreviation: "DUB",
    cities: DUBLIN_CITIES,
    activeCities: DUBLIN_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152576.36!2d-6.27!3d53.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e80ea27ac2f%3A0xa00c7a9973171a0!2sDublin%2C%20Ireland!5e0!3m2!1sen!2s",
    population: "1.4 million",
    timezone: "GMT/IST",
    tagline: "Local SEO Services in Dublin - Irish Capital Search Domination",
    description: "Expert local SEO services across Dublin. Ireland's capital and tech hub."
  },
  cork: {
    code: "cork",
    name: "Cork",
    fullName: "County Cork",
    abbreviation: "CRK",
    cities: CORK_CITIES,
    activeCities: CORK_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152576.36!2d-8.47!3d51.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4844!2sCork%2C%20Ireland!5e0!3m2!1sen!2s",
    population: "0.6 million",
    timezone: "GMT/IST",
    tagline: "Local SEO Services in Cork - Rebel County Search Excellence",
    description: "Premier local SEO services for Cork. Ireland's second city."
  },
  galway: {
    code: "galway",
    name: "Galway",
    fullName: "County Galway",
    abbreviation: "GAL",
    cities: GALWAY_CITIES,
    activeCities: GALWAY_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152576.36!2d-9.05!3d53.27!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b!2sGalway%2C%20Ireland!5e0!3m2!1sen!2s",
    population: "0.3 million",
    timezone: "GMT/IST",
    tagline: "Local SEO Services in Galway - West of Ireland Search Optimization",
    description: "Professional local SEO services for Galway."
  },
  limerick: {
    code: "limerick",
    name: "Limerick",
    fullName: "County Limerick",
    abbreviation: "LMK",
    cities: LIMERICK_CITIES,
    activeCities: LIMERICK_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152576.36!2d-8.63!3d52.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b!2sLimerick%2C%20Ireland!5e0!3m2!1sen!2s",
    population: "0.2 million",
    timezone: "GMT/IST",
    tagline: "Local SEO Services in Limerick - Treaty City Search Excellence",
    description: "Expert local SEO services for Limerick."
  },
  kerry: {
    code: "kerry",
    name: "Kerry",
    fullName: "County Kerry",
    abbreviation: "KRY",
    cities: KERRY_CITIES,
    activeCities: KERRY_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252576.36!2d-9.76!3d52.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4845!2sKerry%2C%20Ireland!5e0!3m2!1sen!2s",
    population: "0.15 million",
    timezone: "GMT/IST",
    tagline: "Local SEO Services in Kerry - Kingdom Tourism Search Domination",
    description: "Premier local SEO services for Kerry. Ring of Kerry tourism."
  },
  kildare: {
    code: "kildare",
    name: "Kildare",
    fullName: "County Kildare",
    abbreviation: "KLD",
    cities: KILDARE_CITIES,
    activeCities: KILDARE_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152576.36!2d-6.91!3d53.16!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486!2sKildare%2C%20Ireland!5e0!3m2!1sen!2s",
    population: "0.25 million",
    timezone: "GMT/IST",
    tagline: "Local SEO Services in Kildare - Commuter Belt Search Excellence",
    description: "Professional local SEO services for Kildare."
  },
  meath: {
    code: "meath",
    name: "Meath",
    fullName: "County Meath",
    abbreviation: "MTH",
    cities: MEATH_CITIES,
    activeCities: MEATH_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152576.36!2d-6.68!3d53.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486!2sMeath%2C%20Ireland!5e0!3m2!1sen!2s",
    population: "0.2 million",
    timezone: "GMT/IST",
    tagline: "Local SEO Services in Meath - Royal County Search Optimization",
    description: "Expert local SEO services for Meath."
  },
  wicklow: {
    code: "wicklow",
    name: "Wicklow",
    fullName: "County Wicklow",
    abbreviation: "WCK",
    cities: WICKLOW_CITIES,
    activeCities: WICKLOW_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152576.36!2d-6.04!3d52.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486!2sWicklow%2C%20Ireland!5e0!3m2!1sen!2s",
    population: "0.15 million",
    timezone: "GMT/IST",
    tagline: "Local SEO Services in Wicklow - Garden County Search Excellence",
    description: "Premier local SEO services for Wicklow."
  },
  clare: {
    code: "clare",
    name: "Clare",
    fullName: "County Clare",
    abbreviation: "CLR",
    cities: CLARE_CITIES,
    activeCities: CLARE_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252576.36!2d-8.98!3d52.84!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b!2sClare%2C%20Ireland!5e0!3m2!1sen!2s",
    population: "0.12 million",
    timezone: "GMT/IST",
    tagline: "Local SEO Services in Clare - Banner County Search Domination",
    description: "Professional local SEO services for Clare. Cliffs of Moher region."
  },
  waterford: {
    code: "waterford",
    name: "Waterford",
    fullName: "County Waterford",
    abbreviation: "WFD",
    cities: WATERFORD_CITIES,
    activeCities: WATERFORD_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152576.36!2d-7.11!3d52.26!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4842!2sWaterford%2C%20Ireland!5e0!3m2!1sen!2s",
    population: "0.12 million",
    timezone: "GMT/IST",
    tagline: "Local SEO Services in Waterford - Ireland's Oldest City Search Excellence",
    description: "Expert local SEO services for Waterford."
  },
  tipperary: {
    code: "tipperary",
    name: "Tipperary",
    fullName: "County Tipperary",
    abbreviation: "TPP",
    cities: TIPPERARY_CITIES,
    activeCities: TIPPERARY_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252576.36!2d-7.84!3d52.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4843!2sTipperary%2C%20Ireland!5e0!3m2!1sen!2s",
    population: "0.16 million",
    timezone: "GMT/IST",
    tagline: "Local SEO Services in Tipperary - Premier County Search Optimization",
    description: "Premier local SEO services for Tipperary."
  },
  mayo: {
    code: "mayo",
    name: "Mayo",
    fullName: "County Mayo",
    abbreviation: "MYO",
    cities: MAYO_CITIES,
    activeCities: MAYO_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252576.36!2d-9.58!3d53.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b!2sMayo%2C%20Ireland!5e0!3m2!1sen!2s",
    population: "0.13 million",
    timezone: "GMT/IST",
    tagline: "Local SEO Services in Mayo - Wild Atlantic Way Search Excellence",
    description: "Professional local SEO services for Mayo."
  }
};

export const IE_STATE_CODES = Object.keys(IE_STATES);

export const isValidIEState = (code: string): boolean => {
  return code.toLowerCase() in IE_STATES;
};

export const getIEStateData = (code: string): StateDetailData | undefined => {
  return IE_STATES[code.toLowerCase()];
};
