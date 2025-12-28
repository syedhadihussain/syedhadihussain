// Qatar municipalities configuration with areas

import { StateDetailData, CityData } from "./states-config";

// Ad Dawhah (Doha) areas
export const DOHA_CITIES: CityData[] = [
  { name: "Doha City", code: "doha-city" },
  { name: "West Bay", code: "west-bay" },
  { name: "Al Sadd", code: "al-sadd" },
  { name: "Al Dafna", code: "al-dafna" },
  { name: "Al Waab", code: "al-waab" },
  { name: "Al Luqta", code: "al-luqta" },
  { name: "Al Gharrafa", code: "al-gharrafa-qa" }
];

// Al Rayyan areas
export const AL_RAYYAN_CITIES: CityData[] = [
  { name: "Al Rayyan City", code: "al-rayyan-city" }
];

// Al Wakrah areas
export const AL_WAKRAH_CITIES: CityData[] = [
  { name: "Al Wakrah City", code: "al-wakrah-city" }
];

// Al Khor areas
export const AL_KHOR_CITIES: CityData[] = [
  { name: "Al Khor City", code: "al-khor-city" }
];

// Umm Salal areas
export const UMM_SALAL_CITIES: CityData[] = [
  { name: "Umm Salal Mohammed", code: "umm-salal-mohammed" },
  { name: "Umm Salal Ali", code: "umm-salal-ali" }
];

// Al Daayen areas
export const AL_DAAYEN_CITIES: CityData[] = [
  { name: "Al Daayen", code: "al-daayen" }
];

// Al Shahaniya areas
export const AL_SHAHANIYA_CITIES: CityData[] = [
  { name: "Al Shahaniya City", code: "al-shahaniya-city" }
];

// Qatar Municipalities Configuration
export const QA_STATES: Record<string, StateDetailData> = {
  doha: {
    code: "doha",
    name: "Ad Dawhah",
    fullName: "Ad Dawhah (Doha)",
    abbreviation: "DOH",
    cities: DOHA_CITIES,
    activeCities: DOHA_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115876.36!2d51.47!3d25.29!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x1cfa88cf3f4b3b8!2sDoha%2C%20Qatar!5e0!3m2!1sen!2s",
    population: "0.8 million",
    timezone: "AST",
    tagline: "Local SEO Services in Doha - Qatar Capital Search Domination",
    description: "Expert local SEO services across Doha. From West Bay to The Pearl, we help businesses dominate Google Maps."
  },
  "al-rayyan": {
    code: "al-rayyan",
    name: "Al Rayyan",
    fullName: "Al Rayyan Municipality",
    abbreviation: "ALR",
    cities: AL_RAYYAN_CITIES,
    activeCities: AL_RAYYAN_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115876.36!2d51.42!3d25.29!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45!2sAl%20Rayyan%2C%20Qatar!5e0!3m2!1sen!2s",
    population: "0.6 million",
    timezone: "AST",
    tagline: "Local SEO Services in Al Rayyan - Qatar's Largest Municipality Search Excellence",
    description: "Premier local SEO services throughout Al Rayyan."
  },
  "al-wakrah": {
    code: "al-wakrah",
    name: "Al Wakrah",
    fullName: "Al Wakrah Municipality",
    abbreviation: "ALW",
    cities: AL_WAKRAH_CITIES,
    activeCities: AL_WAKRAH_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115876.36!2d51.6!3d25.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45!2sAl%20Wakrah%2C%20Qatar!5e0!3m2!1sen!2s",
    population: "0.3 million",
    timezone: "AST",
    tagline: "Local SEO Services in Al Wakrah - Coastal City Search Optimization",
    description: "Professional local SEO services for Al Wakrah."
  },
  "al-khor": {
    code: "al-khor",
    name: "Al Khor",
    fullName: "Al Khor Municipality",
    abbreviation: "ALK",
    cities: AL_KHOR_CITIES,
    activeCities: AL_KHOR_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115876.36!2d51.5!3d25.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e44!2sAl%20Khor%2C%20Qatar!5e0!3m2!1sen!2s",
    population: "0.2 million",
    timezone: "AST",
    tagline: "Local SEO Services in Al Khor - Northern Qatar Search Excellence",
    description: "Expert local SEO services for Al Khor."
  },
  "umm-salal": {
    code: "umm-salal",
    name: "Umm Salal",
    fullName: "Umm Salal Municipality",
    abbreviation: "UMS",
    cities: UMM_SALAL_CITIES,
    activeCities: UMM_SALAL_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115876.36!2d51.41!3d25.41!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45!2sUmm%20Salal%2C%20Qatar!5e0!3m2!1sen!2s",
    population: "0.1 million",
    timezone: "AST",
    tagline: "Local SEO Services in Umm Salal - Growing Municipality Search Domination",
    description: "Premier local SEO services for Umm Salal."
  },
  "al-daayen": {
    code: "al-daayen",
    name: "Al Daayen",
    fullName: "Al Daayen Municipality",
    abbreviation: "ALD",
    cities: AL_DAAYEN_CITIES,
    activeCities: AL_DAAYEN_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115876.36!2d51.48!3d25.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e44!2sAl%20Daayen%2C%20Qatar!5e0!3m2!1sen!2s",
    population: "0.1 million",
    timezone: "AST",
    tagline: "Local SEO Services in Al Daayen - Lusail & Education City Search Excellence",
    description: "Professional local SEO services for Al Daayen."
  },
  "al-shahaniya": {
    code: "al-shahaniya",
    name: "Al Shahaniya",
    fullName: "Al Shahaniya Municipality",
    abbreviation: "ALS",
    cities: AL_SHAHANIYA_CITIES,
    activeCities: AL_SHAHANIYA_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115876.36!2d51.22!3d25.41!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45!2sAl%20Shahaniya%2C%20Qatar!5e0!3m2!1sen!2s",
    population: "0.05 million",
    timezone: "AST",
    tagline: "Local SEO Services in Al Shahaniya - Western Qatar Search Optimization",
    description: "Expert local SEO services for Al Shahaniya."
  }
};

export const QA_STATE_CODES = Object.keys(QA_STATES);

export const isValidQAState = (code: string): boolean => {
  return code.toLowerCase() in QA_STATES;
};

export const getQAStateData = (code: string): StateDetailData | undefined => {
  return QA_STATES[code.toLowerCase()];
};
