// Egypt governorates configuration with cities

import { StateDetailData, CityData } from "./states-config";

// Cairo Governorate cities
export const CAIRO_CITIES: CityData[] = [
  { name: "Cairo", code: "cairo" },
  { name: "Nasr City", code: "nasr-city" },
  { name: "Maadi", code: "maadi" },
  { name: "Heliopolis", code: "heliopolis" },
  { name: "Mohandessin", code: "mohandessin" },
  { name: "Shubra", code: "shubra" },
  { name: "Dokki", code: "dokki" }
];

// Giza Governorate cities
export const GIZA_CITIES: CityData[] = [
  { name: "Giza City", code: "giza-city" },
  { name: "6th of October City", code: "6th-of-october-city" },
  { name: "Imbaba", code: "imbaba" }
];

// Alexandria Governorate cities
export const ALEXANDRIA_CITIES: CityData[] = [
  { name: "Alexandria City", code: "alexandria-city" },
  { name: "Borg El Arab", code: "borg-el-arab" },
  { name: "Sidi Gaber", code: "sidi-gaber" },
  { name: "Montaza", code: "montaza" }
];

// Qalyubia Governorate cities
export const QALYUBIA_CITIES: CityData[] = [
  { name: "Shubra El Kheima", code: "shubra-el-kheima" },
  { name: "Banha", code: "banha" }
];

// Dakahlia Governorate cities
export const DAKAHLIA_CITIES: CityData[] = [
  { name: "Mansoura", code: "mansoura" },
  { name: "Talkha", code: "talkha" },
  { name: "Mit Ghamr", code: "mit-ghamr" }
];

// Sharqia Governorate cities
export const SHARQIA_CITIES: CityData[] = [
  { name: "Zagazig", code: "zagazig" }
];

// Gharbia Governorate cities
export const GHARBIA_CITIES: CityData[] = [
  { name: "Tanta", code: "tanta" },
  { name: "El Mahalla El Kubra", code: "el-mahalla-el-kubra" }
];

// Red Sea Governorate cities
export const RED_SEA_CITIES: CityData[] = [
  { name: "Hurghada", code: "hurghada" },
  { name: "Safaga", code: "safaga" },
  { name: "Marsa Alam", code: "marsa-alam" }
];

// South Sinai Governorate cities
export const SOUTH_SINAI_CITIES: CityData[] = [
  { name: "Sharm El Sheikh", code: "sharm-el-sheikh" },
  { name: "Dahab", code: "dahab" },
  { name: "Taba", code: "taba" }
];

// Luxor Governorate cities
export const LUXOR_CITIES: CityData[] = [
  { name: "Luxor City", code: "luxor-city" },
  { name: "Karnak", code: "karnak" }
];

// Aswan cities
export const ASWAN_CITIES: CityData[] = [
  { name: "Aswan City", code: "aswan-city" },
  { name: "Kom Ombo", code: "kom-ombo" },
  { name: "Edfu", code: "edfu" }
];

// Port Said cities
export const PORT_SAID_CITIES: CityData[] = [
  { name: "Port Said City", code: "port-said-city" }
];

// Suez cities
export const SUEZ_CITIES: CityData[] = [
  { name: "Suez City", code: "suez-city" }
];

// Ismailia cities
export const ISMAILIA_CITIES: CityData[] = [
  { name: "Ismailia City", code: "ismailia-city" }
];

// Egypt Governorates Configuration
export const EG_STATES: Record<string, StateDetailData> = {
  cairo: {
    code: "cairo",
    name: "Cairo",
    fullName: "Cairo Governorate",
    abbreviation: "CAI",
    cities: CAIRO_CITIES,
    activeCities: CAIRO_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443689.36!2d31.24!3d30.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79c0a290d8e6fb4d!2sCairo%2C%20Egypt!5e0!3m2!1sen!2s",
    population: "10.2 million",
    timezone: "EET",
    tagline: "Local SEO Services in Cairo - Egypt Capital Search Domination",
    description: "Expert local SEO services across Cairo. From Nasr City to Maadi, we help businesses dominate Google Maps."
  },
  giza: {
    code: "giza",
    name: "Giza",
    fullName: "Giza Governorate",
    abbreviation: "GIZ",
    cities: GIZA_CITIES,
    activeCities: GIZA_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443689.36!2d31.21!3d29.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145!2sGiza%2C%20Egypt!5e0!3m2!1sen!2s",
    population: "9.0 million",
    timezone: "EET",
    tagline: "Local SEO Services in Giza - Pyramids Region Search Excellence",
    description: "Premier local SEO services throughout Giza. From 6th of October to Giza City."
  },
  alexandria: {
    code: "alexandria",
    name: "Alexandria",
    fullName: "Alexandria Governorate",
    abbreviation: "ALX",
    cities: ALEXANDRIA_CITIES,
    activeCities: ALEXANDRIA_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218689.36!2d29.92!3d31.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c49126710fd3%3A0xb4e0cda629ee6bb9!2sAlexandria%2C%20Egypt!5e0!3m2!1sen!2s",
    population: "5.4 million",
    timezone: "EET",
    tagline: "Local SEO Services in Alexandria - Mediterranean City Search Optimization",
    description: "Professional local SEO services for Alexandria. Egypt's coastal business hub."
  },
  qalyubia: {
    code: "qalyubia",
    name: "Qalyubia",
    fullName: "Qalyubia Governorate",
    abbreviation: "QLB",
    cities: QALYUBIA_CITIES,
    activeCities: QALYUBIA_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218689.36!2d31.24!3d30.29!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145!2sQalyubia%2C%20Egypt!5e0!3m2!1sen!2s",
    population: "5.9 million",
    timezone: "EET",
    tagline: "Local SEO Services in Qalyubia - Greater Cairo Search Excellence",
    description: "Expert local SEO services for Qalyubia."
  },
  dakahlia: {
    code: "dakahlia",
    name: "Dakahlia",
    fullName: "Dakahlia Governorate",
    abbreviation: "DKH",
    cities: DAKAHLIA_CITIES,
    activeCities: DAKAHLIA_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218689.36!2d31.38!3d31.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f!2sDakahlia%2C%20Egypt!5e0!3m2!1sen!2s",
    population: "6.7 million",
    timezone: "EET",
    tagline: "Local SEO Services in Dakahlia - Mansoura Search Domination",
    description: "Premier local SEO services for Dakahlia. From Mansoura to Talkha."
  },
  sharqia: {
    code: "sharqia",
    name: "Sharqia",
    fullName: "Sharqia Governorate",
    abbreviation: "SHQ",
    cities: SHARQIA_CITIES,
    activeCities: SHARQIA_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218689.36!2d31.5!3d30.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f!2sSharqia%2C%20Egypt!5e0!3m2!1sen!2s",
    population: "7.3 million",
    timezone: "EET",
    tagline: "Local SEO Services in Sharqia - Zagazig Search Excellence",
    description: "Professional local SEO services for Sharqia."
  },
  gharbia: {
    code: "gharbia",
    name: "Gharbia",
    fullName: "Gharbia Governorate",
    abbreviation: "GHB",
    cities: GHARBIA_CITIES,
    activeCities: GHARBIA_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218689.36!2d31.0!3d30.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f!2sGharbia%2C%20Egypt!5e0!3m2!1sen!2s",
    population: "5.2 million",
    timezone: "EET",
    tagline: "Local SEO Services in Gharbia - Tanta Search Optimization",
    description: "Expert local SEO services for Gharbia."
  },
  "red-sea": {
    code: "red-sea",
    name: "Red Sea",
    fullName: "Red Sea Governorate",
    abbreviation: "RDS",
    cities: RED_SEA_CITIES,
    activeCities: RED_SEA_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443689.36!2d33.8!3d27.26!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x143!2sRed%20Sea%2C%20Egypt!5e0!3m2!1sen!2s",
    population: "0.4 million",
    timezone: "EET",
    tagline: "Local SEO Services in Red Sea - Hurghada Tourism Search Domination",
    description: "Premier local SEO services for Red Sea Governorate. Tourist destination excellence."
  },
  "south-sinai": {
    code: "south-sinai",
    name: "South Sinai",
    fullName: "South Sinai Governorate",
    abbreviation: "SSN",
    cities: SOUTH_SINAI_CITIES,
    activeCities: SOUTH_SINAI_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443689.36!2d34.3!3d27.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145!2sSouth%20Sinai%2C%20Egypt!5e0!3m2!1sen!2s",
    population: "0.1 million",
    timezone: "EET",
    tagline: "Local SEO Services in South Sinai - Sharm El Sheikh Tourism Excellence",
    description: "Professional local SEO services for South Sinai. From Sharm to Dahab."
  },
  luxor: {
    code: "luxor",
    name: "Luxor",
    fullName: "Luxor Governorate",
    abbreviation: "LXR",
    cities: LUXOR_CITIES,
    activeCities: LUXOR_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218689.36!2d32.64!3d25.69!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x144!2sLuxor%2C%20Egypt!5e0!3m2!1sen!2s",
    population: "1.3 million",
    timezone: "EET",
    tagline: "Local SEO Services in Luxor - Ancient City Tourism Search Optimization",
    description: "Expert local SEO services for Luxor. Historical tourism excellence."
  },
  aswan: {
    code: "aswan",
    name: "Aswan",
    fullName: "Aswan Governorate",
    abbreviation: "ASW",
    cities: ASWAN_CITIES,
    activeCities: ASWAN_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218689.36!2d32.9!3d24.09!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x143!2sAswan%2C%20Egypt!5e0!3m2!1sen!2s",
    population: "1.6 million",
    timezone: "EET",
    tagline: "Local SEO Services in Aswan - Nubian Tourism Search Excellence",
    description: "Premier local SEO services for Aswan."
  },
  "port-said": {
    code: "port-said",
    name: "Port Said",
    fullName: "Port Said Governorate",
    abbreviation: "PSD",
    cities: PORT_SAID_CITIES,
    activeCities: PORT_SAID_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218689.36!2d32.31!3d31.26!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f!2sPort%20Said%2C%20Egypt!5e0!3m2!1sen!2s",
    population: "0.8 million",
    timezone: "EET",
    tagline: "Local SEO Services in Port Said - Suez Canal City Search Domination",
    description: "Professional local SEO services for Port Said."
  },
  suez: {
    code: "suez",
    name: "Suez",
    fullName: "Suez Governorate",
    abbreviation: "SUZ",
    cities: SUEZ_CITIES,
    activeCities: SUEZ_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218689.36!2d32.55!3d29.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145!2sSuez%2C%20Egypt!5e0!3m2!1sen!2s",
    population: "0.7 million",
    timezone: "EET",
    tagline: "Local SEO Services in Suez - Canal Gateway Search Excellence",
    description: "Expert local SEO services for Suez."
  },
  ismailia: {
    code: "ismailia",
    name: "Ismailia",
    fullName: "Ismailia Governorate",
    abbreviation: "ISM",
    cities: ISMAILIA_CITIES,
    activeCities: ISMAILIA_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218689.36!2d32.27!3d30.59!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f!2sIsmailia%2C%20Egypt!5e0!3m2!1sen!2s",
    population: "1.4 million",
    timezone: "EET",
    tagline: "Local SEO Services in Ismailia - Lake Timsah City Search Optimization",
    description: "Premier local SEO services for Ismailia."
  }
};

export const EG_STATE_CODES = Object.keys(EG_STATES);

export const isValidEGState = (code: string): boolean => {
  return code.toLowerCase() in EG_STATES;
};

export const getEGStateData = (code: string): StateDetailData | undefined => {
  return EG_STATES[code.toLowerCase()];
};
