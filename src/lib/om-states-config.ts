// Oman governorates configuration with cities

import { StateDetailData, CityData } from "./states-config";

// Muscat Governorate cities
export const MUSCAT_CITIES: CityData[] = [
  { name: "Muscat City", code: "muscat-city" },
  { name: "Ruwi", code: "ruwi" },
  { name: "Qurum", code: "qurum" },
  { name: "Seeb", code: "seeb" },
  { name: "Al Khoudh", code: "al-khoudh" },
  { name: "Muttrah", code: "muttrah" },
  { name: "Al Amerat", code: "al-amerat" }
];

// Dhofar Governorate cities
export const DHOFAR_CITIES: CityData[] = [
  { name: "Salalah", code: "salalah" }
];

// Al Batinah North cities
export const AL_BATINAH_NORTH_CITIES: CityData[] = [
  { name: "Sohar", code: "sohar" },
  { name: "Shinas", code: "shinas" },
  { name: "Saham", code: "saham" }
];

// Al Batinah South cities
export const AL_BATINAH_SOUTH_CITIES: CityData[] = [
  { name: "Barka", code: "barka" },
  { name: "Rustaq", code: "rustaq" },
  { name: "Nakhal", code: "nakhal" }
];

// Al Dakhiliyah cities
export const AL_DAKHILIYAH_CITIES: CityData[] = [
  { name: "Nizwa", code: "nizwa" },
  { name: "Bahla", code: "bahla" },
  { name: "Al Hamra", code: "al-hamra" },
  { name: "Samail", code: "samail" }
];

// Al Sharqiyah North cities
export const AL_SHARQIYAH_NORTH_CITIES: CityData[] = [
  { name: "Ibra", code: "ibra" },
  { name: "Bidiya", code: "bidiya" },
  { name: "Al Mudhaibi", code: "al-mudhaibi" }
];

// Al Sharqiyah South cities
export const AL_SHARQIYAH_SOUTH_CITIES: CityData[] = [
  { name: "Sur", code: "sur" },
  { name: "Ras Al Hadd", code: "ras-al-hadd" }
];

// Al Dhahirah cities
export const AL_DHAHIRAH_CITIES: CityData[] = [
  { name: "Ibri", code: "ibri" },
  { name: "Yanqul", code: "yanqul" }
];

// Al Buraimi cities
export const AL_BURAIMI_CITIES: CityData[] = [
  { name: "Al Buraimi City", code: "al-buraimi-city" }
];

// Al Wusta cities
export const AL_WUSTA_CITIES: CityData[] = [
  { name: "Duqm", code: "duqm" },
  { name: "Haima", code: "haima" },
  { name: "Mahout", code: "mahout" }
];

// Oman Governorates Configuration
export const OM_STATES: Record<string, StateDetailData> = {
  muscat: {
    code: "muscat",
    name: "Muscat",
    fullName: "Muscat Governorate",
    abbreviation: "MUS",
    cities: MUSCAT_CITIES,
    activeCities: MUSCAT_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232876.36!2d58.38!3d23.59!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91ffa8db731a8f%3A0x1f0c3e77c8d2f0f1!2sMuscat%2C%20Oman!5e0!3m2!1sen!2s",
    population: "1.4 million",
    timezone: "GST",
    tagline: "Local SEO Services in Muscat - Oman Capital Search Domination",
    description: "Expert local SEO services across Muscat. From Ruwi to Qurum, we help businesses dominate Google Maps."
  },
  dhofar: {
    code: "dhofar",
    name: "Dhofar",
    fullName: "Dhofar Governorate",
    abbreviation: "DHO",
    cities: DHOFAR_CITIES,
    activeCities: DHOFAR_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d432876.36!2d54.09!3d17.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3dd!2sDhofar%2C%20Oman!5e0!3m2!1sen!2s",
    population: "0.4 million",
    timezone: "GST",
    tagline: "Local SEO Services in Dhofar - Salalah Monsoon City Search Excellence",
    description: "Premier local SEO services for Dhofar. Salalah tourism optimization."
  },
  "al-batinah-north": {
    code: "al-batinah-north",
    name: "Al Batinah North",
    fullName: "Al Batinah North Governorate",
    abbreviation: "ABN",
    cities: AL_BATINAH_NORTH_CITIES,
    activeCities: AL_BATINAH_NORTH_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232876.36!2d56.73!3d24.37!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef!2sAl%20Batinah%20North%2C%20Oman!5e0!3m2!1sen!2s",
    population: "0.7 million",
    timezone: "GST",
    tagline: "Local SEO Services in Al Batinah North - Sohar Industrial Search Optimization",
    description: "Professional local SEO services for Al Batinah North. Sohar and coast."
  },
  "al-batinah-south": {
    code: "al-batinah-south",
    name: "Al Batinah South",
    fullName: "Al Batinah South Governorate",
    abbreviation: "ABS",
    cities: AL_BATINAH_SOUTH_CITIES,
    activeCities: AL_BATINAH_SOUTH_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232876.36!2d57.39!3d23.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef!2sAl%20Batinah%20South%2C%20Oman!5e0!3m2!1sen!2s",
    population: "0.4 million",
    timezone: "GST",
    tagline: "Local SEO Services in Al Batinah South - Barka Search Excellence",
    description: "Expert local SEO services for Al Batinah South."
  },
  "al-dakhiliyah": {
    code: "al-dakhiliyah",
    name: "Al Dakhiliyah",
    fullName: "Al Dakhiliyah Governorate",
    abbreviation: "ADK",
    cities: AL_DAKHILIYAH_CITIES,
    activeCities: AL_DAKHILIYAH_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d332876.36!2d57.53!3d22.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef!2sAl%20Dakhiliyah%2C%20Oman!5e0!3m2!1sen!2s",
    population: "0.4 million",
    timezone: "GST",
    tagline: "Local SEO Services in Al Dakhiliyah - Nizwa Heritage Search Domination",
    description: "Premier local SEO services for Al Dakhiliyah. Nizwa and interior."
  },
  "al-sharqiyah-north": {
    code: "al-sharqiyah-north",
    name: "Al Sharqiyah North",
    fullName: "Al Sharqiyah North Governorate",
    abbreviation: "ASN",
    cities: AL_SHARQIYAH_NORTH_CITIES,
    activeCities: AL_SHARQIYAH_NORTH_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d332876.36!2d58.53!3d22.69!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef!2sAl%20Sharqiyah%20North%2C%20Oman!5e0!3m2!1sen!2s",
    population: "0.3 million",
    timezone: "GST",
    tagline: "Local SEO Services in Al Sharqiyah North - Ibra Search Excellence",
    description: "Professional local SEO services for Al Sharqiyah North."
  },
  "al-sharqiyah-south": {
    code: "al-sharqiyah-south",
    name: "Al Sharqiyah South",
    fullName: "Al Sharqiyah South Governorate",
    abbreviation: "ASS",
    cities: AL_SHARQIYAH_SOUTH_CITIES,
    activeCities: AL_SHARQIYAH_SOUTH_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d332876.36!2d59.53!3d22.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef!2sAl%20Sharqiyah%20South%2C%20Oman!5e0!3m2!1sen!2s",
    population: "0.3 million",
    timezone: "GST",
    tagline: "Local SEO Services in Al Sharqiyah South - Sur Coastal Search Optimization",
    description: "Expert local SEO services for Al Sharqiyah South."
  },
  "al-dhahirah": {
    code: "al-dhahirah",
    name: "Al Dhahirah",
    fullName: "Al Dhahirah Governorate",
    abbreviation: "ADH",
    cities: AL_DHAHIRAH_CITIES,
    activeCities: AL_DHAHIRAH_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d332876.36!2d56.11!3d23.23!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef!2sAl%20Dhahirah%2C%20Oman!5e0!3m2!1sen!2s",
    population: "0.2 million",
    timezone: "GST",
    tagline: "Local SEO Services in Al Dhahirah - Ibri Search Excellence",
    description: "Premier local SEO services for Al Dhahirah."
  },
  "al-buraimi": {
    code: "al-buraimi",
    name: "Al Buraimi",
    fullName: "Al Buraimi Governorate",
    abbreviation: "ABU",
    cities: AL_BURAIMI_CITIES,
    activeCities: AL_BURAIMI_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232876.36!2d55.79!3d24.24!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef!2sAl%20Buraimi%2C%20Oman!5e0!3m2!1sen!2s",
    population: "0.1 million",
    timezone: "GST",
    tagline: "Local SEO Services in Al Buraimi - Border City Search Optimization",
    description: "Professional local SEO services for Al Buraimi."
  },
  "al-wusta": {
    code: "al-wusta",
    name: "Al Wusta",
    fullName: "Al Wusta Governorate",
    abbreviation: "AWU",
    cities: AL_WUSTA_CITIES,
    activeCities: AL_WUSTA_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d532876.36!2d57.08!3d19.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3dd!2sAl%20Wusta%2C%20Oman!5e0!3m2!1sen!2s",
    population: "0.05 million",
    timezone: "GST",
    tagline: "Local SEO Services in Al Wusta - Duqm Special Economic Zone Search Excellence",
    description: "Expert local SEO services for Al Wusta. Duqm development zone."
  }
};

export const OM_STATE_CODES = Object.keys(OM_STATES);

export const isValidOMState = (code: string): boolean => {
  return code.toLowerCase() in OM_STATES;
};

export const getOMStateData = (code: string): StateDetailData | undefined => {
  return OM_STATES[code.toLowerCase()];
};
