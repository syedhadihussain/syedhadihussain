// Kuwait governorates configuration with areas

import { StateDetailData, CityData } from "./states-config";

// Al Asimah (Capital) cities
export const AL_ASIMAH_CITIES: CityData[] = [
  { name: "Kuwait City", code: "kuwait-city" },
  { name: "Sharq", code: "sharq" },
  { name: "Salmiya", code: "salmiya" }
];

// Hawalli cities
export const HAWALLI_CITIES: CityData[] = [
  { name: "Hawally City", code: "hawally-city" },
  { name: "Salmiya", code: "salmiya-hawalli" }
];

// Al Farwaniyah cities
export const AL_FARWANIYAH_CITIES: CityData[] = [
  { name: "Farwaniyah City", code: "farwaniyah-city" },
  { name: "Jleeb Al-Shuyoukh", code: "jleeb-al-shuyoukh" },
  { name: "Ardiya", code: "ardiya" }
];

// Al Ahmadi cities
export const AL_AHMADI_CITIES: CityData[] = [
  { name: "Ahmadi City", code: "ahmadi-city" },
  { name: "Fahaheel", code: "fahaheel" },
  { name: "Mangaf", code: "mangaf" }
];

// Al Jahra cities
export const AL_JAHRA_CITIES: CityData[] = [
  { name: "Jahra City", code: "jahra-city" },
  { name: "Kabd", code: "kabd" }
];

// Mubarak Al-Kabeer cities
export const MUBARAK_AL_KABEER_CITIES: CityData[] = [
  { name: "Mubarak Al-Kabeer City", code: "mubarak-al-kabeer-city" },
  { name: "Sabah Al-Salem", code: "sabah-al-salem" }
];

// Kuwait Governorates Configuration
export const KW_STATES: Record<string, StateDetailData> = {
  "al-asimah": {
    code: "al-asimah",
    name: "Al Asimah",
    fullName: "Al Asimah (Capital) Governorate",
    abbreviation: "ASM",
    cities: AL_ASIMAH_CITIES,
    activeCities: AL_ASIMAH_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111576.36!2d47.97!3d29.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9b1aee02f3fd%3A0xe0d1a6c60c9e9dc!2sKuwait%20City%2C%20Kuwait!5e0!3m2!1sen!2s",
    population: "0.6 million",
    timezone: "AST",
    tagline: "Local SEO Services in Kuwait City - Capital Search Domination",
    description: "Expert local SEO services across Kuwait City. From Sharq to Salmiya, we help businesses dominate Google Maps."
  },
  hawalli: {
    code: "hawalli",
    name: "Hawalli",
    fullName: "Hawalli Governorate",
    abbreviation: "HAW",
    cities: HAWALLI_CITIES,
    activeCities: HAWALLI_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111576.36!2d48.03!3d29.33!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fc!2sHawalli%2C%20Kuwait!5e0!3m2!1sen!2s",
    population: "0.9 million",
    timezone: "AST",
    tagline: "Local SEO Services in Hawalli - Dense Urban Area Search Excellence",
    description: "Premier local SEO services for Hawalli. Kuwait's most densely populated area."
  },
  "al-farwaniyah": {
    code: "al-farwaniyah",
    name: "Al Farwaniyah",
    fullName: "Al Farwaniyah Governorate",
    abbreviation: "FAR",
    cities: AL_FARWANIYAH_CITIES,
    activeCities: AL_FARWANIYAH_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111576.36!2d47.92!3d29.27!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fc!2sAl%20Farwaniyah%2C%20Kuwait!5e0!3m2!1sen!2s",
    population: "1.1 million",
    timezone: "AST",
    tagline: "Local SEO Services in Al Farwaniyah - Largest Governorate Search Optimization",
    description: "Professional local SEO services for Al Farwaniyah."
  },
  "al-ahmadi": {
    code: "al-ahmadi",
    name: "Al Ahmadi",
    fullName: "Al Ahmadi Governorate",
    abbreviation: "AHM",
    cities: AL_AHMADI_CITIES,
    activeCities: AL_AHMADI_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111576.36!2d48.08!3d29.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fc!2sAl%20Ahmadi%2C%20Kuwait!5e0!3m2!1sen!2s",
    population: "0.8 million",
    timezone: "AST",
    tagline: "Local SEO Services in Al Ahmadi - Oil Industry Hub Search Excellence",
    description: "Expert local SEO services for Al Ahmadi. Kuwait's oil industry center."
  },
  "al-jahra": {
    code: "al-jahra",
    name: "Al Jahra",
    fullName: "Al Jahra Governorate",
    abbreviation: "JAH",
    cities: AL_JAHRA_CITIES,
    activeCities: AL_JAHRA_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211576.36!2d47.67!3d29.34!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fc!2sAl%20Jahra%2C%20Kuwait!5e0!3m2!1sen!2s",
    population: "0.5 million",
    timezone: "AST",
    tagline: "Local SEO Services in Al Jahra - Largest Area Search Domination",
    description: "Premier local SEO services for Al Jahra."
  },
  "mubarak-al-kabeer": {
    code: "mubarak-al-kabeer",
    name: "Mubarak Al-Kabeer",
    fullName: "Mubarak Al-Kabeer Governorate",
    abbreviation: "MUB",
    cities: MUBARAK_AL_KABEER_CITIES,
    activeCities: MUBARAK_AL_KABEER_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111576.36!2d48.08!3d29.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fc!2sMubarak%20Al-Kabeer%2C%20Kuwait!5e0!3m2!1sen!2s",
    population: "0.2 million",
    timezone: "AST",
    tagline: "Local SEO Services in Mubarak Al-Kabeer - Growing District Search Excellence",
    description: "Professional local SEO services for Mubarak Al-Kabeer."
  }
};

export const KW_STATE_CODES = Object.keys(KW_STATES);

export const isValidKWState = (code: string): boolean => {
  return code.toLowerCase() in KW_STATES;
};

export const getKWStateData = (code: string): StateDetailData | undefined => {
  return KW_STATES[code.toLowerCase()];
};
