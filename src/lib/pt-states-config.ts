// Portugal districts configuration with cities

import { StateDetailData, CityData } from "./states-config";

// Lisbon District cities
export const LISBON_CITIES: CityData[] = [
  { name: "Lisbon", code: "lisbon" },
  { name: "Amadora", code: "amadora" },
  { name: "Oeiras", code: "oeiras" },
  { name: "Sintra", code: "sintra" },
  { name: "Loures", code: "loures" },
  { name: "Almada", code: "almada" }
];

// Porto District cities
export const PORTO_CITIES: CityData[] = [
  { name: "Porto", code: "porto" },
  { name: "Vila Nova de Gaia", code: "vila-nova-de-gaia" },
  { name: "Matosinhos", code: "matosinhos" },
  { name: "Gondomar", code: "gondomar" },
  { name: "Valongo", code: "valongo" }
];

// Setúbal District cities
export const SETUBAL_CITIES: CityData[] = [
  { name: "Setúbal", code: "setubal" },
  { name: "Sesimbra", code: "sesimbra" },
  { name: "Barreiro", code: "barreiro" },
  { name: "Montijo", code: "montijo" }
];

// Braga District cities
export const BRAGA_CITIES: CityData[] = [
  { name: "Braga", code: "braga" },
  { name: "Guimarães", code: "guimaraes" },
  { name: "Barcelos", code: "barcelos" },
  { name: "Famalicão", code: "famalicao" }
];

// Aveiro District cities
export const AVEIRO_CITIES: CityData[] = [
  { name: "Aveiro", code: "aveiro" },
  { name: "Ílhavo", code: "ilhavo" },
  { name: "Santa Maria da Feira", code: "santa-maria-da-feira" }
];

// Coimbra District cities
export const COIMBRA_CITIES: CityData[] = [
  { name: "Coimbra", code: "coimbra" },
  { name: "Cantanhede", code: "cantanhede" },
  { name: "Figueira da Foz", code: "figueira-da-foz" }
];

// Leiria District cities
export const LEIRIA_CITIES: CityData[] = [
  { name: "Leiria", code: "leiria" },
  { name: "Marinha Grande", code: "marinha-grande" },
  { name: "Pombal", code: "pombal" }
];

// Faro District (Algarve) cities
export const FARO_CITIES: CityData[] = [
  { name: "Faro", code: "faro" },
  { name: "Albufeira", code: "albufeira" },
  { name: "Loulé", code: "loule" },
  { name: "Portimão", code: "portimao" },
  { name: "Tavira", code: "tavira" },
  { name: "Lagos", code: "lagos" }
];

// Madeira cities
export const MADEIRA_CITIES: CityData[] = [
  { name: "Funchal", code: "funchal" },
  { name: "Câmara de Lobos", code: "camara-de-lobos" }
];

// Azores cities
export const AZORES_CITIES: CityData[] = [
  { name: "Ponta Delgada", code: "ponta-delgada" },
  { name: "Angra do Heroísmo", code: "angra-do-heroismo" },
  { name: "Horta", code: "horta" }
];

// Portugal Districts Configuration
export const PT_STATES: Record<string, StateDetailData> = {
  lisbon: {
    code: "lisbon",
    name: "Lisbon",
    fullName: "Lisbon District",
    abbreviation: "LIS",
    cities: LISBON_CITIES,
    activeCities: LISBON_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199411.36!2d-9.23!3d38.74!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331a61e4f33b%3A0x400ebbde49036d0!2sLisbon%2C%20Portugal!5e0!3m2!1sen!2s",
    population: "2.9 million",
    timezone: "WET",
    tagline: "Local SEO Services in Lisbon - Portugal Capital Search Domination",
    description: "Expert local SEO services across Lisbon. From the capital to Sintra, we help businesses dominate Google Maps."
  },
  porto: {
    code: "porto",
    name: "Porto",
    fullName: "Porto District",
    abbreviation: "PRT",
    cities: PORTO_CITIES,
    activeCities: PORTO_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192411.36!2d-8.61!3d41.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2465abc4e153c1%3A0xa648d95640b114eb!2sPorto%2C%20Portugal!5e0!3m2!1sen!2s",
    population: "1.8 million",
    timezone: "WET",
    tagline: "Local SEO Services in Porto - Northern Portugal Search Excellence",
    description: "Premier local SEO services throughout Porto. From the city to Vila Nova de Gaia."
  },
  setubal: {
    code: "setubal",
    name: "Setúbal",
    fullName: "Setúbal District",
    abbreviation: "SET",
    cities: SETUBAL_CITIES,
    activeCities: SETUBAL_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199411.36!2d-8.89!3d38.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19!2sSet%C3%BAbal%2C%20Portugal!5e0!3m2!1sen!2s",
    population: "0.9 million",
    timezone: "WET",
    tagline: "Local SEO Services in Setúbal - Costa Azul Search Optimization",
    description: "Professional local SEO services for Setúbal district."
  },
  braga: {
    code: "braga",
    name: "Braga",
    fullName: "Braga District",
    abbreviation: "BRG",
    cities: BRAGA_CITIES,
    activeCities: BRAGA_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192411.36!2d-8.43!3d41.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd24!2sBraga%2C%20Portugal!5e0!3m2!1sen!2s",
    population: "0.9 million",
    timezone: "WET",
    tagline: "Local SEO Services in Braga - Minho Region Search Excellence",
    description: "Expert local SEO services for Braga. From Braga to Guimarães."
  },
  aveiro: {
    code: "aveiro",
    name: "Aveiro",
    fullName: "Aveiro District",
    abbreviation: "AVR",
    cities: AVEIRO_CITIES,
    activeCities: AVEIRO_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192411.36!2d-8.65!3d40.64!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd23!2sAveiro%2C%20Portugal!5e0!3m2!1sen!2s",
    population: "0.7 million",
    timezone: "WET",
    tagline: "Local SEO Services in Aveiro - Venice of Portugal Search Domination",
    description: "Premier local SEO services for Aveiro district."
  },
  coimbra: {
    code: "coimbra",
    name: "Coimbra",
    fullName: "Coimbra District",
    abbreviation: "CBR",
    cities: COIMBRA_CITIES,
    activeCities: COIMBRA_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192411.36!2d-8.43!3d40.21!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd22!2sCoimbra%2C%20Portugal!5e0!3m2!1sen!2s",
    population: "0.4 million",
    timezone: "WET",
    tagline: "Local SEO Services in Coimbra - University City Search Excellence",
    description: "Professional local SEO services for Coimbra."
  },
  leiria: {
    code: "leiria",
    name: "Leiria",
    fullName: "Leiria District",
    abbreviation: "LEI",
    cities: LEIRIA_CITIES,
    activeCities: LEIRIA_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192411.36!2d-8.81!3d39.74!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd22!2sLeiria%2C%20Portugal!5e0!3m2!1sen!2s",
    population: "0.5 million",
    timezone: "WET",
    tagline: "Local SEO Services in Leiria - Central Portugal Search Optimization",
    description: "Expert local SEO services for Leiria district."
  },
  faro: {
    code: "faro",
    name: "Faro",
    fullName: "Faro District (Algarve)",
    abbreviation: "FAR",
    cities: FARO_CITIES,
    activeCities: FARO_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206411.36!2d-7.93!3d37.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0!2sFaro%2C%20Portugal!5e0!3m2!1sen!2s",
    population: "0.5 million",
    timezone: "WET",
    tagline: "Local SEO Services in Algarve - Tourism Destination Search Domination",
    description: "Premier local SEO services for Faro and Algarve. From Albufeira to Lagos."
  },
  madeira: {
    code: "madeira",
    name: "Madeira",
    fullName: "Madeira Autonomous Region",
    abbreviation: "MAD",
    cities: MADEIRA_CITIES,
    activeCities: MADEIRA_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110411.36!2d-16.9!3d32.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc60!2sMadeira%2C%20Portugal!5e0!3m2!1sen!2s",
    population: "0.25 million",
    timezone: "WET",
    tagline: "Local SEO Services in Madeira - Island Paradise Search Excellence",
    description: "Professional local SEO services for Madeira. Funchal and beyond."
  },
  azores: {
    code: "azores",
    name: "Azores",
    fullName: "Azores Autonomous Region",
    abbreviation: "AZR",
    cities: AZORES_CITIES,
    activeCities: AZORES_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210411.36!2d-25.67!3d37.74!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb4!2sAzores%2C%20Portugal!5e0!3m2!1sen!2s",
    population: "0.24 million",
    timezone: "AZOT",
    tagline: "Local SEO Services in Azores - Atlantic Islands Search Optimization",
    description: "Expert local SEO services for the Azores."
  }
};

export const PT_STATE_CODES = Object.keys(PT_STATES);

export const isValidPTState = (code: string): boolean => {
  return code.toLowerCase() in PT_STATES;
};

export const getPTStateData = (code: string): StateDetailData | undefined => {
  return PT_STATES[code.toLowerCase()];
};
