// Switzerland cantons configuration with cities

import { StateDetailData, CityData } from "./states-config";

// Zurich Canton cities
export const ZURICH_CITIES: CityData[] = [
  { name: "Zurich City", code: "zurich-city" },
  { name: "Winterthur", code: "winterthur" },
  { name: "Uster", code: "uster" },
  { name: "Dübendorf", code: "dubendorf" }
];

// Geneva Canton cities
export const GENEVA_CITIES: CityData[] = [
  { name: "Geneva City", code: "geneva-city" },
  { name: "Carouge", code: "carouge" },
  { name: "Vernier", code: "vernier" }
];

// Bern Canton cities
export const BERN_CITIES: CityData[] = [
  { name: "Bern City", code: "bern-city" },
  { name: "Biel/Bienne", code: "biel-bienne" },
  { name: "Thun", code: "thun" },
  { name: "Köniz", code: "koniz" }
];

// Vaud Canton cities
export const VAUD_CITIES: CityData[] = [
  { name: "Lausanne", code: "lausanne" },
  { name: "Nyon", code: "nyon" },
  { name: "Montreux", code: "montreux" },
  { name: "Vevey", code: "vevey" }
];

// Basel-Stadt Canton cities
export const BASEL_STADT_CITIES: CityData[] = [
  { name: "Basel City", code: "basel-city" },
  { name: "Riehen", code: "riehen" }
];

// Lucerne Canton cities
export const LUCERNE_CITIES: CityData[] = [
  { name: "Lucerne City", code: "lucerne-city" },
  { name: "Emmen", code: "emmen" },
  { name: "Kriens", code: "kriens" }
];

// St. Gallen Canton cities
export const ST_GALLEN_CITIES: CityData[] = [
  { name: "St. Gallen City", code: "st-gallen-city" },
  { name: "Rapperswil-Jona", code: "rapperswil-jona" }
];

// Ticino Canton cities
export const TICINO_CITIES: CityData[] = [
  { name: "Lugano", code: "lugano" },
  { name: "Bellinzona", code: "bellinzona" },
  { name: "Locarno", code: "locarno" }
];

// Aargau Canton cities
export const AARGAU_CITIES: CityData[] = [
  { name: "Aarau", code: "aarau" },
  { name: "Baden", code: "baden" },
  { name: "Wettingen", code: "wettingen" }
];

// Valais Canton cities
export const VALAIS_CITIES: CityData[] = [
  { name: "Sion", code: "sion" },
  { name: "Sierre", code: "sierre" },
  { name: "Zermatt", code: "zermatt" }
];

// Switzerland Cantons Configuration
export const CH_STATES: Record<string, StateDetailData> = {
  zurich: {
    code: "zurich",
    name: "Zurich",
    fullName: "Canton of Zurich",
    abbreviation: "ZH",
    cities: ZURICH_CITIES,
    activeCities: ZURICH_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172876.36!2d8.54!3d47.37!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900b9749bea219%3A0xe66e8df1e71fdc03!2sZurich%2C%20Switzerland!5e0!3m2!1sen!2s",
    population: "1.6 million",
    timezone: "CET",
    tagline: "Local SEO Services in Zurich - Swiss Financial Capital Search Domination",
    description: "Expert local SEO services across Zurich. Switzerland's largest city and financial hub."
  },
  geneva: {
    code: "geneva",
    name: "Geneva",
    fullName: "Canton of Geneva",
    abbreviation: "GE",
    cities: GENEVA_CITIES,
    activeCities: GENEVA_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d88876.36!2d6.15!3d46.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c!2sGeneva%2C%20Switzerland!5e0!3m2!1sen!2s",
    population: "0.5 million",
    timezone: "CET",
    tagline: "Local SEO Services in Geneva - International City Search Excellence",
    description: "Premier local SEO services for Geneva. UN and international hub."
  },
  bern: {
    code: "bern",
    name: "Bern",
    fullName: "Canton of Bern",
    abbreviation: "BE",
    cities: BERN_CITIES,
    activeCities: BERN_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172876.36!2d7.45!3d46.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e!2sBern%2C%20Switzerland!5e0!3m2!1sen!2s",
    population: "1.0 million",
    timezone: "CET",
    tagline: "Local SEO Services in Bern - Swiss Capital Search Optimization",
    description: "Professional local SEO services for Bern. Federal city of Switzerland."
  },
  vaud: {
    code: "vaud",
    name: "Vaud",
    fullName: "Canton of Vaud",
    abbreviation: "VD",
    cities: VAUD_CITIES,
    activeCities: VAUD_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172876.36!2d6.63!3d46.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c!2sLausanne%2C%20Switzerland!5e0!3m2!1sen!2s",
    population: "0.8 million",
    timezone: "CET",
    tagline: "Local SEO Services in Vaud - Lake Geneva Region Search Excellence",
    description: "Expert local SEO services for Vaud. Lausanne and Lake Geneva region."
  },
  "basel-stadt": {
    code: "basel-stadt",
    name: "Basel-Stadt",
    fullName: "Canton of Basel-Stadt",
    abbreviation: "BS",
    cities: BASEL_STADT_CITIES,
    activeCities: BASEL_STADT_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d88876.36!2d7.59!3d47.56!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479!2sBasel%2C%20Switzerland!5e0!3m2!1sen!2s",
    population: "0.2 million",
    timezone: "CET",
    tagline: "Local SEO Services in Basel - Pharma Hub Search Domination",
    description: "Premier local SEO services for Basel. Swiss pharmaceutical capital."
  },
  lucerne: {
    code: "lucerne",
    name: "Lucerne",
    fullName: "Canton of Lucerne",
    abbreviation: "LU",
    cities: LUCERNE_CITIES,
    activeCities: LUCERNE_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172876.36!2d8.31!3d47.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478f!2sLucerne%2C%20Switzerland!5e0!3m2!1sen!2s",
    population: "0.4 million",
    timezone: "CET",
    tagline: "Local SEO Services in Lucerne - Central Switzerland Search Excellence",
    description: "Professional local SEO services for Lucerne."
  },
  "st-gallen": {
    code: "st-gallen",
    name: "St. Gallen",
    fullName: "Canton of St. Gallen",
    abbreviation: "SG",
    cities: ST_GALLEN_CITIES,
    activeCities: ST_GALLEN_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172876.36!2d9.38!3d47.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479!2sSt.%20Gallen%2C%20Switzerland!5e0!3m2!1sen!2s",
    population: "0.5 million",
    timezone: "CET",
    tagline: "Local SEO Services in St. Gallen - Eastern Switzerland Search Optimization",
    description: "Expert local SEO services for St. Gallen."
  },
  ticino: {
    code: "ticino",
    name: "Ticino",
    fullName: "Canton of Ticino",
    abbreviation: "TI",
    cities: TICINO_CITIES,
    activeCities: TICINO_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172876.36!2d8.95!3d46.01!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478!2sLugano%2C%20Switzerland!5e0!3m2!1sen!2s",
    population: "0.35 million",
    timezone: "CET",
    tagline: "Local SEO Services in Ticino - Italian Switzerland Search Excellence",
    description: "Premier local SEO services for Ticino. Lugano and southern Switzerland."
  },
  aargau: {
    code: "aargau",
    name: "Aargau",
    fullName: "Canton of Aargau",
    abbreviation: "AG",
    cities: AARGAU_CITIES,
    activeCities: AARGAU_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172876.36!2d8.23!3d47.39!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479!2sAarau%2C%20Switzerland!5e0!3m2!1sen!2s",
    population: "0.7 million",
    timezone: "CET",
    tagline: "Local SEO Services in Aargau - Baden Region Search Domination",
    description: "Professional local SEO services for Aargau."
  },
  valais: {
    code: "valais",
    name: "Valais",
    fullName: "Canton of Valais",
    abbreviation: "VS",
    cities: VALAIS_CITIES,
    activeCities: VALAIS_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d272876.36!2d7.36!3d46.23!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e!2sSion%2C%20Switzerland!5e0!3m2!1sen!2s",
    population: "0.35 million",
    timezone: "CET",
    tagline: "Local SEO Services in Valais - Alpine Tourism Search Excellence",
    description: "Expert local SEO services for Valais. Zermatt and Matterhorn region."
  }
};

export const CH_STATE_CODES = Object.keys(CH_STATES);

export const isValidCHState = (code: string): boolean => {
  return code.toLowerCase() in CH_STATES;
};

export const getCHStateData = (code: string): StateDetailData | undefined => {
  return CH_STATES[code.toLowerCase()];
};
