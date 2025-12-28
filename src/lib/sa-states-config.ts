// Saudi Arabia regions configuration with cities

import { StateDetailData, CityData } from "./states-config";

// Riyadh Region cities
export const RIYADH_CITIES: CityData[] = [
  { name: "Riyadh", code: "riyadh" },
  { name: "Diriyah", code: "diriyah" },
  { name: "Al Kharj", code: "al-kharj" },
  { name: "Al Majmaah", code: "al-majmaah" },
  { name: "Dawadmi", code: "dawadmi" }
];

// Makkah Region cities
export const MAKKAH_CITIES: CityData[] = [
  { name: "Makkah", code: "makkah" },
  { name: "Jeddah", code: "jeddah" },
  { name: "Taif", code: "taif" },
  { name: "Rabigh", code: "rabigh" }
];

// Madinah Region cities
export const MADINAH_CITIES: CityData[] = [
  { name: "Madinah", code: "madinah" },
  { name: "Yanbu", code: "yanbu" }
];

// Eastern Province cities
export const EASTERN_CITIES: CityData[] = [
  { name: "Dammam", code: "dammam" },
  { name: "Khobar", code: "khobar" },
  { name: "Dhahran", code: "dhahran" },
  { name: "Jubail", code: "jubail" },
  { name: "Qatif", code: "qatif" },
  { name: "Ras Tanura", code: "ras-tanura" }
];

// Asir Region cities
export const ASIR_CITIES: CityData[] = [
  { name: "Abha", code: "abha" },
  { name: "Khamis Mushait", code: "khamis-mushait" }
];

// Jazan Region cities
export const JAZAN_CITIES: CityData[] = [
  { name: "Jazan", code: "jazan" },
  { name: "Sabya", code: "sabya" },
  { name: "Abu Arish", code: "abu-arish" }
];

// Najran Region cities
export const NAJRAN_CITIES: CityData[] = [
  { name: "Najran", code: "najran" },
  { name: "Sharurah", code: "sharurah" }
];

// Hail Region cities
export const HAIL_CITIES: CityData[] = [
  { name: "Hail", code: "hail" }
];

// Northern Borders cities
export const NORTHERN_BORDERS_CITIES: CityData[] = [
  { name: "Arar", code: "arar" },
  { name: "Qurayyat", code: "qurayyat" },
  { name: "Turaif", code: "turaif" },
  { name: "Rafha", code: "rafha" }
];

// Tabuk Region cities
export const TABUK_CITIES: CityData[] = [
  { name: "Tabuk", code: "tabuk" },
  { name: "Al Wajh", code: "al-wajh" },
  { name: "Umluj", code: "umluj" }
];

// Al Jawf Region cities
export const AL_JAWF_CITIES: CityData[] = [
  { name: "Sakaka", code: "sakaka" }
];

// Qassim Region cities
export const QASSIM_CITIES: CityData[] = [
  { name: "Buraidah", code: "buraidah" },
  { name: "Unayzah", code: "unayzah" },
  { name: "Ar Rass", code: "ar-rass" }
];

// Saudi Arabia Regions Configuration
export const SA_STATES: Record<string, StateDetailData> = {
  riyadh: {
    code: "riyadh",
    name: "Riyadh Region",
    fullName: "Riyadh Region",
    abbreviation: "RIY",
    cities: RIYADH_CITIES,
    activeCities: RIYADH_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d929452.36!2d46.68!3d24.69!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2s",
    population: "8.4 million",
    timezone: "AST",
    tagline: "Local SEO Services in Riyadh - Saudi Capital Search Domination",
    description: "Expert local SEO services across Riyadh. From the capital to Diriyah, we help businesses dominate Google Maps."
  },
  makkah: {
    code: "makkah",
    name: "Makkah Region",
    fullName: "Makkah Region",
    abbreviation: "MKH",
    cities: MAKKAH_CITIES,
    activeCities: MAKKAH_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d929452.36!2d39.83!3d21.39!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c21b4ced818775%3A0x98ab2469cf70c9ce!2sMakkah%20Saudi%20Arabia!5e0!3m2!1sen!2s",
    population: "9.0 million",
    timezone: "AST",
    tagline: "Local SEO Services in Makkah Region - Jeddah & Holy City Search Excellence",
    description: "Premier local SEO services throughout Makkah Region. From Jeddah to Taif."
  },
  madinah: {
    code: "madinah",
    name: "Madinah Region",
    fullName: "Madinah Region",
    abbreviation: "MDN",
    cities: MADINAH_CITIES,
    activeCities: MADINAH_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d929452.36!2d39.61!3d24.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e9b5f5f5f5f5f5%3A0x15e9b5f5f5f5f5f5!2sMadinah%20Saudi%20Arabia!5e0!3m2!1sen!2s",
    population: "2.2 million",
    timezone: "AST",
    tagline: "Local SEO Services in Madinah Region - Holy City Search Optimization",
    description: "Professional local SEO services for Madinah Region. From Madinah to Yanbu."
  },
  eastern: {
    code: "eastern",
    name: "Eastern Province",
    fullName: "Eastern Province",
    abbreviation: "ESH",
    cities: EASTERN_CITIES,
    activeCities: EASTERN_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d929452.36!2d49.97!3d26.44!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e!2sEastern%20Province%20Saudi%20Arabia!5e0!3m2!1sen!2s",
    population: "5.0 million",
    timezone: "AST",
    tagline: "Local SEO Services in Eastern Province - Dammam & Khobar Search Excellence",
    description: "Expert local SEO services across Eastern Province. From Dammam to Jubail."
  },
  asir: {
    code: "asir",
    name: "Asir Region",
    fullName: "Asir Region",
    abbreviation: "ASR",
    cities: ASIR_CITIES,
    activeCities: ASIR_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d929452.36!2d42.5!3d18.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15f!2sAsir%20Saudi%20Arabia!5e0!3m2!1sen!2s",
    population: "2.2 million",
    timezone: "AST",
    tagline: "Local SEO Services in Asir - Abha Search Domination",
    description: "Premier local SEO services for Asir. From Abha to Khamis Mushait."
  },
  jazan: {
    code: "jazan",
    name: "Jazan Region",
    fullName: "Jazan Region",
    abbreviation: "JZN",
    cities: JAZAN_CITIES,
    activeCities: JAZAN_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d929452.36!2d42.55!3d16.89!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x160!2sJazan%20Saudi%20Arabia!5e0!3m2!1sen!2s",
    population: "1.6 million",
    timezone: "AST",
    tagline: "Local SEO Services in Jazan - Southern Saudi Search Excellence",
    description: "Professional local SEO services for Jazan Region."
  },
  najran: {
    code: "najran",
    name: "Najran Region",
    fullName: "Najran Region",
    abbreviation: "NJR",
    cities: NAJRAN_CITIES,
    activeCities: NAJRAN_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d929452.36!2d44.22!3d17.49!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x161!2sNajran%20Saudi%20Arabia!5e0!3m2!1sen!2s",
    population: "0.6 million",
    timezone: "AST",
    tagline: "Local SEO Services in Najran - Border Region Search Optimization",
    description: "Expert local SEO services for Najran Region."
  },
  hail: {
    code: "hail",
    name: "Hail Region",
    fullName: "Hail Region",
    abbreviation: "HAL",
    cities: HAIL_CITIES,
    activeCities: HAIL_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d929452.36!2d41.69!3d27.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x156!2sHail%20Saudi%20Arabia!5e0!3m2!1sen!2s",
    population: "0.7 million",
    timezone: "AST",
    tagline: "Local SEO Services in Hail - Northern Saudi Search Excellence",
    description: "Premier local SEO services for Hail Region."
  },
  "northern-borders": {
    code: "northern-borders",
    name: "Northern Borders",
    fullName: "Northern Borders Region",
    abbreviation: "NBR",
    cities: NORTHERN_BORDERS_CITIES,
    activeCities: NORTHERN_BORDERS_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d929452.36!2d40.93!3d30.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x153!2sNorthern%20Borders%20Saudi%20Arabia!5e0!3m2!1sen!2s",
    population: "0.4 million",
    timezone: "AST",
    tagline: "Local SEO Services in Northern Borders - Arar Search Domination",
    description: "Professional local SEO services for Northern Borders Region."
  },
  tabuk: {
    code: "tabuk",
    name: "Tabuk Region",
    fullName: "Tabuk Region",
    abbreviation: "TBK",
    cities: TABUK_CITIES,
    activeCities: TABUK_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d929452.36!2d36.58!3d28.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15a!2sTabuk%20Saudi%20Arabia!5e0!3m2!1sen!2s",
    population: "0.9 million",
    timezone: "AST",
    tagline: "Local SEO Services in Tabuk - NEOM Region Search Excellence",
    description: "Expert local SEO services for Tabuk Region. Gateway to NEOM."
  },
  "al-jawf": {
    code: "al-jawf",
    name: "Al Jawf",
    fullName: "Al Jawf Region",
    abbreviation: "JWF",
    cities: AL_JAWF_CITIES,
    activeCities: AL_JAWF_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d929452.36!2d40.1!3d29.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x154!2sAl%20Jawf%20Saudi%20Arabia!5e0!3m2!1sen!2s",
    population: "0.5 million",
    timezone: "AST",
    tagline: "Local SEO Services in Al Jawf - Sakaka Search Optimization",
    description: "Premier local SEO services for Al Jawf Region."
  },
  qassim: {
    code: "qassim",
    name: "Qassim Region",
    fullName: "Qassim Region",
    abbreviation: "QSM",
    cities: QASSIM_CITIES,
    activeCities: QASSIM_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d929452.36!2d43.97!3d26.33!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x157!2sQassim%20Saudi%20Arabia!5e0!3m2!1sen!2s",
    population: "1.5 million",
    timezone: "AST",
    tagline: "Local SEO Services in Qassim - Buraidah Search Excellence",
    description: "Professional local SEO services for Qassim Region. From Buraidah to Unayzah."
  }
};

export const SA_STATE_CODES = Object.keys(SA_STATES);

export const isValidSAState = (code: string): boolean => {
  return code.toLowerCase() in SA_STATES;
};

export const getSAStateData = (code: string): StateDetailData | undefined => {
  return SA_STATES[code.toLowerCase()];
};
