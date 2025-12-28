// New Zealand regions configuration with cities

import { StateDetailData, CityData } from "./states-config";

// Auckland Region cities
export const AUCKLAND_CITIES: CityData[] = [
  { name: "Auckland City", code: "auckland-city" },
  { name: "North Shore", code: "north-shore" },
  { name: "Manukau", code: "manukau" },
  { name: "Waitakere", code: "waitakere" },
  { name: "Papakura", code: "papakura" },
  { name: "Howick", code: "howick" },
  { name: "Henderson", code: "henderson" },
  { name: "Takapuna", code: "takapuna" }
];

// Wellington Region cities
export const WELLINGTON_CITIES: CityData[] = [
  { name: "Wellington City", code: "wellington-city" },
  { name: "Lower Hutt", code: "lower-hutt" },
  { name: "Upper Hutt", code: "upper-hutt" },
  { name: "Porirua", code: "porirua" }
];

// Canterbury cities
export const CANTERBURY_CITIES: CityData[] = [
  { name: "Christchurch", code: "christchurch" }
];

// Waikato cities
export const WAIKATO_CITIES: CityData[] = [
  { name: "Hamilton", code: "hamilton-nz" }
];

// Bay of Plenty cities
export const BAY_OF_PLENTY_CITIES: CityData[] = [
  { name: "Tauranga", code: "tauranga" },
  { name: "Rotorua", code: "rotorua" },
  { name: "Whakatāne", code: "whakatane" }
];

// Otago cities
export const OTAGO_CITIES: CityData[] = [
  { name: "Dunedin", code: "dunedin" },
  { name: "Queenstown", code: "queenstown-nz" }
];

// Hawke's Bay cities
export const HAWKES_BAY_CITIES: CityData[] = [
  { name: "Hastings", code: "hastings" },
  { name: "Napier", code: "napier" }
];

// Northland cities
export const NORTHLAND_CITIES: CityData[] = [
  { name: "Whangārei", code: "whangarei" },
  { name: "Kaitaia", code: "kaitaia" }
];

// Taranaki cities
export const TARANAKI_CITIES: CityData[] = [
  { name: "New Plymouth", code: "new-plymouth" }
];

// Manawatū-Whanganui cities
export const MANAWATU_CITIES: CityData[] = [
  { name: "Palmerston North", code: "palmerston-north" },
  { name: "Whanganui", code: "whanganui" }
];

// Southland cities
export const SOUTHLAND_CITIES: CityData[] = [
  { name: "Invercargill", code: "invercargill" }
];

// Nelson-Tasman cities
export const NELSON_CITIES: CityData[] = [
  { name: "Nelson City", code: "nelson-city" },
  { name: "Richmond", code: "richmond-nz" }
];

// Kapiti Coast cities
export const KAPITI_CITIES: CityData[] = [
  { name: "Paraparaumu", code: "paraparaumu" },
  { name: "Waikanae", code: "waikanae" }
];

// New Zealand Regions Configuration
export const NZ_STATES: Record<string, StateDetailData> = {
  auckland: {
    code: "auckland",
    name: "Auckland",
    fullName: "Auckland Region",
    abbreviation: "AKL",
    cities: AUCKLAND_CITIES,
    activeCities: AUCKLAND_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d407052.36!2d174.76!3d-36.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47fb5a9ce6fb%3A0x500ef6143a29917!2sAuckland%2C%20New%20Zealand!5e0!3m2!1sen!2s",
    population: "1.7 million",
    timezone: "NZST",
    tagline: "Local SEO Services in Auckland - NZ's Largest City Search Domination",
    description: "Expert local SEO services across Auckland. From CBD to North Shore, we help Kiwi businesses dominate Google Maps."
  },
  wellington: {
    code: "wellington",
    name: "Wellington",
    fullName: "Wellington Region",
    abbreviation: "WGN",
    cities: WELLINGTON_CITIES,
    activeCities: WELLINGTON_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193052.36!2d174.78!3d-41.29!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38afd7ec6a8b5b%3A0x500ef6143a29903!2sWellington%2C%20New%20Zealand!5e0!3m2!1sen!2s",
    population: "0.5 million",
    timezone: "NZST",
    tagline: "Local SEO Services in Wellington - Capital City Search Excellence",
    description: "Premier local SEO services throughout Wellington. From the CBD to Lower Hutt."
  },
  canterbury: {
    code: "canterbury",
    name: "Canterbury",
    fullName: "Canterbury Region",
    abbreviation: "CAN",
    cities: CANTERBURY_CITIES,
    activeCities: CANTERBURY_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d293052.36!2d172.64!3d-43.53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d322f4863c5ed01%3A0x500ef6143a29917!2sChristchurch%2C%20New%20Zealand!5e0!3m2!1sen!2s",
    population: "0.6 million",
    timezone: "NZST",
    tagline: "Local SEO Services in Canterbury - Christchurch Search Optimization",
    description: "Professional local SEO services for Canterbury. From Christchurch to the wider region."
  },
  waikato: {
    code: "waikato",
    name: "Waikato",
    fullName: "Waikato Region",
    abbreviation: "WKO",
    cities: WAIKATO_CITIES,
    activeCities: WAIKATO_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193052.36!2d175.28!3d-37.79!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6d22d6d6d6d6d6%3A0x500ef6143a29917!2sHamilton%2C%20New%20Zealand!5e0!3m2!1sen!2s",
    population: "0.5 million",
    timezone: "NZST",
    tagline: "Local SEO Services in Waikato - Hamilton Search Excellence",
    description: "Expert local SEO services for Waikato region. Hamilton and surrounds."
  },
  "bay-of-plenty": {
    code: "bay-of-plenty",
    name: "Bay of Plenty",
    fullName: "Bay of Plenty Region",
    abbreviation: "BOP",
    cities: BAY_OF_PLENTY_CITIES,
    activeCities: BAY_OF_PLENTY_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193052.36!2d176.16!3d-37.69!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6e7e7e7e7e7e7e%3A0x500ef6143a29917!2sTauranga%2C%20New%20Zealand!5e0!3m2!1sen!2s",
    population: "0.3 million",
    timezone: "NZST",
    tagline: "Local SEO Services in Bay of Plenty - Tauranga & Rotorua Search Domination",
    description: "Premier local SEO services for Bay of Plenty. From Tauranga to Rotorua."
  },
  otago: {
    code: "otago",
    name: "Otago",
    fullName: "Otago Region",
    abbreviation: "OTA",
    cities: OTAGO_CITIES,
    activeCities: OTAGO_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d393052.36!2d170.5!3d-45.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa82c!2sOtago%2C%20New%20Zealand!5e0!3m2!1sen!2s",
    population: "0.2 million",
    timezone: "NZST",
    tagline: "Local SEO Services in Otago - Dunedin & Queenstown Search Excellence",
    description: "Professional local SEO services for Otago. From Dunedin to Queenstown."
  },
  "hawkes-bay": {
    code: "hawkes-bay",
    name: "Hawke's Bay",
    fullName: "Hawke's Bay Region",
    abbreviation: "HKB",
    cities: HAWKES_BAY_CITIES,
    activeCities: HAWKES_BAY_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193052.36!2d176.84!3d-39.49!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d69!2sHawke's%20Bay%2C%20New%20Zealand!5e0!3m2!1sen!2s",
    population: "0.2 million",
    timezone: "NZST",
    tagline: "Local SEO Services in Hawke's Bay - Hastings & Napier Search Optimization",
    description: "Expert local SEO services for Hawke's Bay."
  },
  northland: {
    code: "northland",
    name: "Northland",
    fullName: "Northland Region",
    abbreviation: "NTL",
    cities: NORTHLAND_CITIES,
    activeCities: NORTHLAND_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d293052.36!2d174.32!3d-35.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0b!2sNorthland%2C%20New%20Zealand!5e0!3m2!1sen!2s",
    population: "0.2 million",
    timezone: "NZST",
    tagline: "Local SEO Services in Northland - Whangārei Search Domination",
    description: "Premier local SEO services for Northland region."
  },
  taranaki: {
    code: "taranaki",
    name: "Taranaki",
    fullName: "Taranaki Region",
    abbreviation: "TKI",
    cities: TARANAKI_CITIES,
    activeCities: TARANAKI_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193052.36!2d174.07!3d-39.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d15!2sTaranaki%2C%20New%20Zealand!5e0!3m2!1sen!2s",
    population: "0.1 million",
    timezone: "NZST",
    tagline: "Local SEO Services in Taranaki - New Plymouth Search Excellence",
    description: "Professional local SEO services for Taranaki."
  },
  "manawatu-whanganui": {
    code: "manawatu-whanganui",
    name: "Manawatū-Whanganui",
    fullName: "Manawatū-Whanganui Region",
    abbreviation: "MWT",
    cities: MANAWATU_CITIES,
    activeCities: MANAWATU_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193052.36!2d175.61!3d-40.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6a!2sManawat%C5%AB-Whanganui%2C%20New%20Zealand!5e0!3m2!1sen!2s",
    population: "0.3 million",
    timezone: "NZST",
    tagline: "Local SEO Services in Manawatū-Whanganui - Palmerston North Search Optimization",
    description: "Expert local SEO services for Manawatū-Whanganui region."
  },
  southland: {
    code: "southland",
    name: "Southland",
    fullName: "Southland Region",
    abbreviation: "STL",
    cities: SOUTHLAND_CITIES,
    activeCities: SOUTHLAND_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d393052.36!2d168.36!3d-46.41!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa9d0!2sSouthland%2C%20New%20Zealand!5e0!3m2!1sen!2s",
    population: "0.1 million",
    timezone: "NZST",
    tagline: "Local SEO Services in Southland - Invercargill Search Domination",
    description: "Premier local SEO services for Southland region."
  },
  nelson: {
    code: "nelson",
    name: "Nelson-Tasman",
    fullName: "Nelson-Tasman Region",
    abbreviation: "NSN",
    cities: NELSON_CITIES,
    activeCities: NELSON_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193052.36!2d173.28!3d-41.27!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d3b!2sNelson%2C%20New%20Zealand!5e0!3m2!1sen!2s",
    population: "0.1 million",
    timezone: "NZST",
    tagline: "Local SEO Services in Nelson-Tasman - Sunny Nelson Search Excellence",
    description: "Professional local SEO services for Nelson-Tasman."
  },
  kapiti: {
    code: "kapiti",
    name: "Kapiti Coast",
    fullName: "Kapiti Coast District",
    abbreviation: "KAP",
    cities: KAPITI_CITIES,
    activeCities: KAPITI_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193052.36!2d175.05!3d-40.91!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d40!2sKapiti%20Coast%2C%20New%20Zealand!5e0!3m2!1sen!2s",
    population: "0.06 million",
    timezone: "NZST",
    tagline: "Local SEO Services in Kapiti Coast - Beach Town Search Optimization",
    description: "Expert local SEO services for Kapiti Coast."
  }
};

export const NZ_STATE_CODES = Object.keys(NZ_STATES);

export const isValidNZState = (code: string): boolean => {
  return code.toLowerCase() in NZ_STATES;
};

export const getNZStateData = (code: string): StateDetailData | undefined => {
  return NZ_STATES[code.toLowerCase()];
};
