// Italy regions configuration with cities

import { StateDetailData, CityData } from "./states-config";

// Lombardy cities
export const LOMBARDY_CITIES: CityData[] = [
  { name: "Milan", code: "milan" },
  { name: "Bergamo", code: "bergamo" },
  { name: "Brescia", code: "brescia" },
  { name: "Monza", code: "monza" },
  { name: "Como", code: "como" },
  { name: "Varese", code: "varese" },
  { name: "Lecco", code: "lecco" },
  { name: "Cremona", code: "cremona" },
  { name: "Pavia", code: "pavia" }
];

// Lazio cities
export const LAZIO_CITIES: CityData[] = [
  { name: "Rome", code: "rome" },
  { name: "Latina", code: "latina" },
  { name: "Frosinone", code: "frosinone" },
  { name: "Viterbo", code: "viterbo" },
  { name: "Rieti", code: "rieti" }
];

// Veneto cities
export const VENETO_CITIES: CityData[] = [
  { name: "Venice", code: "venice" },
  { name: "Verona", code: "verona" },
  { name: "Padua", code: "padua" },
  { name: "Treviso", code: "treviso" },
  { name: "Rovigo", code: "rovigo" },
  { name: "Vicenza", code: "vicenza" }
];

// Emilia-Romagna cities
export const EMILIA_ROMAGNA_CITIES: CityData[] = [
  { name: "Bologna", code: "bologna" },
  { name: "Parma", code: "parma" },
  { name: "Modena", code: "modena" },
  { name: "Reggio Emilia", code: "reggio-emilia" },
  { name: "Ferrara", code: "ferrara" },
  { name: "Mantua", code: "mantua" }
];

// Piedmont cities
export const PIEDMONT_CITIES: CityData[] = [
  { name: "Turin", code: "turin" },
  { name: "Novara", code: "novara" },
  { name: "Alessandria", code: "alessandria" },
  { name: "Asti", code: "asti" },
  { name: "Cuneo", code: "cuneo" }
];

// Tuscany cities
export const TUSCANY_CITIES: CityData[] = [
  { name: "Florence", code: "florence" },
  { name: "Pisa", code: "pisa" },
  { name: "Siena", code: "siena" },
  { name: "Livorno", code: "livorno" },
  { name: "Arezzo", code: "arezzo" }
];

// Sicily cities
export const SICILY_CITIES: CityData[] = [
  { name: "Palermo", code: "palermo" },
  { name: "Catania", code: "catania" },
  { name: "Syracuse", code: "syracuse" },
  { name: "Messina", code: "messina" },
  { name: "Trapani", code: "trapani" },
  { name: "Agrigento", code: "agrigento" },
  { name: "Ragusa", code: "ragusa" }
];

// Campania cities
export const CAMPANIA_CITIES: CityData[] = [
  { name: "Naples", code: "naples" },
  { name: "Salerno", code: "salerno" },
  { name: "Caserta", code: "caserta" },
  { name: "Avellino", code: "avellino" },
  { name: "Benevento", code: "benevento" }
];

// Apulia cities
export const APULIA_CITIES: CityData[] = [
  { name: "Bari", code: "bari" },
  { name: "Lecce", code: "lecce" },
  { name: "Taranto", code: "taranto" },
  { name: "Brindisi", code: "brindisi" },
  { name: "Foggia", code: "foggia" },
  { name: "Andria", code: "andria" },
  { name: "Trani", code: "trani" }
];

// Calabria cities
export const CALABRIA_CITIES: CityData[] = [
  { name: "Reggio Calabria", code: "reggio-calabria" },
  { name: "Catanzaro", code: "catanzaro" },
  { name: "Crotone", code: "crotone" },
  { name: "Vibo Valentia", code: "vibo-valentia" }
];

// Liguria cities
export const LIGURIA_CITIES: CityData[] = [
  { name: "Genoa", code: "genoa" },
  { name: "La Spezia", code: "la-spezia" },
  { name: "Savona", code: "savona" },
  { name: "Imperia", code: "imperia" }
];

// Sardinia cities
export const SARDINIA_CITIES: CityData[] = [
  { name: "Cagliari", code: "cagliari" },
  { name: "Sassari", code: "sassari" },
  { name: "Olbia", code: "olbia" },
  { name: "Nuoro", code: "nuoro" },
  { name: "Oristano", code: "oristano" }
];

// Abruzzo cities
export const ABRUZZO_CITIES: CityData[] = [
  { name: "L'Aquila", code: "laquila" },
  { name: "Pescara", code: "pescara" },
  { name: "Chieti", code: "chieti" },
  { name: "Teramo", code: "teramo" }
];

// Friuli-Venezia Giulia cities
export const FRIULI_CITIES: CityData[] = [
  { name: "Trieste", code: "trieste" },
  { name: "Udine", code: "udine" },
  { name: "Pordenone", code: "pordenone" },
  { name: "Gorizia", code: "gorizia" }
];

// Trentino-Alto Adige cities
export const TRENTINO_CITIES: CityData[] = [
  { name: "Trento", code: "trento" },
  { name: "Bolzano", code: "bolzano" },
  { name: "Merano", code: "merano" }
];

// Umbria cities
export const UMBRIA_CITIES: CityData[] = [
  { name: "Perugia", code: "perugia" },
  { name: "Terni", code: "terni" },
  { name: "Foligno", code: "foligno" },
  { name: "Spoleto", code: "spoleto" }
];

// Basilicata cities
export const BASILICATA_CITIES: CityData[] = [
  { name: "Potenza", code: "potenza" },
  { name: "Matera", code: "matera" }
];

// Molise cities
export const MOLISE_CITIES: CityData[] = [
  { name: "Campobasso", code: "campobasso" },
  { name: "Isernia", code: "isernia" }
];

// Italy Regions Configuration
export const IT_STATES: Record<string, StateDetailData> = {
  lombardy: {
    code: "lombardy",
    name: "Lombardy",
    fullName: "Lombardia",
    abbreviation: "LOM",
    cities: LOMBARDY_CITIES,
    activeCities: LOMBARDY_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1425738.8!2d9.189982!3d45.479976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c1493f3c47e9%3A0x22b905a8c42e3de3!2sLombardy%2C%20Italy!5e0!3m2!1sen!2s",
    population: "10.1 million",
    timezone: "CET",
    tagline: "Local SEO Services in Lombardy - Milan & Northern Italy Search Domination",
    description: "Expert local SEO services across Lombardy. From Milan to Bergamo, we help Italian businesses dominate Google Maps and local search."
  },
  lazio: {
    code: "lazio",
    name: "Lazio",
    fullName: "Lazio",
    abbreviation: "LAZ",
    cities: LAZIO_CITIES,
    activeCities: LAZIO_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1525738.8!2d12.48!3d41.89!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6196f9928ebb%3A0xb90f770693656e38!2sLazio%2C%20Italy!5e0!3m2!1sen!2s",
    population: "5.9 million",
    timezone: "CET",
    tagline: "Local SEO Services in Lazio - Rome & Central Italy Search Excellence",
    description: "Premier local SEO services in Lazio. From Rome to Latina, we boost your Google Maps visibility and local rankings."
  },
  veneto: {
    code: "veneto",
    name: "Veneto",
    fullName: "Veneto",
    abbreviation: "VEN",
    cities: VENETO_CITIES,
    activeCities: VENETO_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1425738.8!2d11.75!3d45.44!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477ed9a7fa89c6ef%3A0x9ebb0ee4ff813c8!2sVeneto%2C%20Italy!5e0!3m2!1sen!2s",
    population: "4.9 million",
    timezone: "CET",
    tagline: "Local SEO Services in Veneto - Venice & Verona Search Optimization",
    description: "Professional local SEO services throughout Veneto. From Venice to Verona, we help businesses rank higher locally."
  },
  "emilia-romagna": {
    code: "emilia-romagna",
    name: "Emilia-Romagna",
    fullName: "Emilia-Romagna",
    abbreviation: "EMR",
    cities: EMILIA_ROMAGNA_CITIES,
    activeCities: EMILIA_ROMAGNA_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1425738.8!2d10.92!3d44.49!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132af1b1b1b1b1b1%3A0x132af1b1b1b1b1b1!2sEmilia-Romagna%2C%20Italy!5e0!3m2!1sen!2s",
    population: "4.5 million",
    timezone: "CET",
    tagline: "Local SEO Services in Emilia-Romagna - Bologna & Parma Search Experts",
    description: "Expert local SEO services across Emilia-Romagna. From Bologna to Modena, we help businesses dominate local search."
  },
  piedmont: {
    code: "piedmont",
    name: "Piedmont",
    fullName: "Piemonte",
    abbreviation: "PIE",
    cities: PIEDMONT_CITIES,
    activeCities: PIEDMONT_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1425738.8!2d7.68!3d45.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478815d1d1d1d1d1%3A0x478815d1d1d1d1d1!2sPiedmont%2C%20Italy!5e0!3m2!1sen!2s",
    population: "4.3 million",
    timezone: "CET",
    tagline: "Local SEO Services in Piedmont - Turin Search Optimization Experts",
    description: "Professional local SEO services for Piedmont businesses. From Turin to Novara, we boost your local visibility."
  },
  tuscany: {
    code: "tuscany",
    name: "Tuscany",
    fullName: "Toscana",
    abbreviation: "TOS",
    cities: TUSCANY_CITIES,
    activeCities: TUSCANY_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1425738.8!2d11.25!3d43.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a540bd1e53da5%3A0xa9e7e8a95ee9a9e7!2sTuscany%2C%20Italy!5e0!3m2!1sen!2s",
    population: "3.7 million",
    timezone: "CET",
    tagline: "Local SEO Services in Tuscany - Florence & Pisa Search Excellence",
    description: "Expert local SEO services throughout Tuscany. From Florence to Siena, we help businesses dominate local search."
  },
  sicily: {
    code: "sicily",
    name: "Sicily",
    fullName: "Sicilia",
    abbreviation: "SIC",
    cities: SICILY_CITIES,
    activeCities: SICILY_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1525738.8!2d14.19!3d37.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1311a6a6a6a6a6a6%3A0x1311a6a6a6a6a6a6!2sSicily%2C%20Italy!5e0!3m2!1sen!2s",
    population: "5.0 million",
    timezone: "CET",
    tagline: "Local SEO Services in Sicily - Palermo & Catania Search Domination",
    description: "Premier local SEO services across Sicily. From Palermo to Catania, we boost your Google Maps visibility."
  },
  campania: {
    code: "campania",
    name: "Campania",
    fullName: "Campania",
    abbreviation: "CAM",
    cities: CAMPANIA_CITIES,
    activeCities: CAMPANIA_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1425738.8!2d14.27!3d40.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b9b9b9b9b9b9b%3A0x133b9b9b9b9b9b9b!2sCampania%2C%20Italy!5e0!3m2!1sen!2s",
    population: "5.8 million",
    timezone: "CET",
    tagline: "Local SEO Services in Campania - Naples Search Optimization",
    description: "Professional local SEO services for Campania. From Naples to Salerno, we help businesses rank higher locally."
  },
  apulia: {
    code: "apulia",
    name: "Apulia",
    fullName: "Puglia",
    abbreviation: "PUG",
    cities: APULIA_CITIES,
    activeCities: APULIA_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1525738.8!2d16.87!3d41.12!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134d3f3f3f3f3f3f%3A0x134d3f3f3f3f3f3f!2sApulia%2C%20Italy!5e0!3m2!1sen!2s",
    population: "4.0 million",
    timezone: "CET",
    tagline: "Local SEO Services in Apulia - Bari & Lecce Search Experts",
    description: "Expert local SEO services throughout Apulia. From Bari to Lecce, we dominate local search results."
  },
  calabria: {
    code: "calabria",
    name: "Calabria",
    fullName: "Calabria",
    abbreviation: "CAL",
    cities: CALABRIA_CITIES,
    activeCities: CALABRIA_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1425738.8!2d16.34!3d38.91!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131c4c4c4c4c4c4c%3A0x131c4c4c4c4c4c4c!2sCalabria%2C%20Italy!5e0!3m2!1sen!2s",
    population: "1.9 million",
    timezone: "CET",
    tagline: "Local SEO Services in Calabria - Reggio Calabria Search Optimization",
    description: "Professional local SEO services for Calabria businesses. From Reggio Calabria to Catanzaro."
  },
  liguria: {
    code: "liguria",
    name: "Liguria",
    fullName: "Liguria",
    abbreviation: "LIG",
    cities: LIGURIA_CITIES,
    activeCities: LIGURIA_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1425738.8!2d8.93!3d44.41!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d34d34d34d34d3%3A0x12d34d34d34d34d3!2sLiguria%2C%20Italy!5e0!3m2!1sen!2s",
    population: "1.5 million",
    timezone: "CET",
    tagline: "Local SEO Services in Liguria - Genoa Search Excellence",
    description: "Expert local SEO services across Liguria. From Genoa to La Spezia, we boost local visibility."
  },
  sardinia: {
    code: "sardinia",
    name: "Sardinia",
    fullName: "Sardegna",
    abbreviation: "SAR",
    cities: SARDINIA_CITIES,
    activeCities: SARDINIA_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1625738.8!2d9.12!3d40.12!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d7b7b7b7b7b7b7%3A0x12d7b7b7b7b7b7b7!2sSardinia%2C%20Italy!5e0!3m2!1sen!2s",
    population: "1.6 million",
    timezone: "CET",
    tagline: "Local SEO Services in Sardinia - Cagliari Search Optimization",
    description: "Premier local SEO services for Sardinia. From Cagliari to Sassari, we dominate local search."
  },
  abruzzo: {
    code: "abruzzo",
    name: "Abruzzo",
    fullName: "Abruzzo",
    abbreviation: "ABR",
    cities: ABRUZZO_CITIES,
    activeCities: ABRUZZO_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1425738.8!2d13.39!3d42.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133a8a8a8a8a8a8a%3A0x133a8a8a8a8a8a8a!2sAbruzzo%2C%20Italy!5e0!3m2!1sen!2s",
    population: "1.3 million",
    timezone: "CET",
    tagline: "Local SEO Services in Abruzzo - L'Aquila & Pescara Search Experts",
    description: "Professional local SEO services for Abruzzo businesses."
  },
  "friuli-venezia-giulia": {
    code: "friuli-venezia-giulia",
    name: "Friuli-Venezia Giulia",
    fullName: "Friuli-Venezia Giulia",
    abbreviation: "FVG",
    cities: FRIULI_CITIES,
    activeCities: FRIULI_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1425738.8!2d13.23!3d45.64!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477b7b7b7b7b7b7b%3A0x477b7b7b7b7b7b7b!2sFriuli-Venezia%20Giulia%2C%20Italy!5e0!3m2!1sen!2s",
    population: "1.2 million",
    timezone: "CET",
    tagline: "Local SEO Services in Friuli-Venezia Giulia - Trieste Search Optimization",
    description: "Expert local SEO services for Friuli-Venezia Giulia. From Trieste to Udine."
  },
  "trentino-alto-adige": {
    code: "trentino-alto-adige",
    name: "Trentino-Alto Adige",
    fullName: "Trentino-Alto Adige",
    abbreviation: "TAA",
    cities: TRENTINO_CITIES,
    activeCities: TRENTINO_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1425738.8!2d11.35!3d46.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478274747474747!3A0x478274747474747!2sTrentino-Alto%20Adige%2C%20Italy!5e0!3m2!1sen!2s",
    population: "1.1 million",
    timezone: "CET",
    tagline: "Local SEO Services in Trentino-Alto Adige - Trento & Bolzano Search Excellence",
    description: "Premier local SEO services for Trentino-Alto Adige. From Trento to Bolzano."
  },
  umbria: {
    code: "umbria",
    name: "Umbria",
    fullName: "Umbria",
    abbreviation: "UMB",
    cities: UMBRIA_CITIES,
    activeCities: UMBRIA_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1425738.8!2d12.39!3d42.94!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132ea1a1a1a1a1a1%3A0x132ea1a1a1a1a1a1!2sUmbria%2C%20Italy!5e0!3m2!1sen!2s",
    population: "0.9 million",
    timezone: "CET",
    tagline: "Local SEO Services in Umbria - Perugia Search Optimization",
    description: "Professional local SEO services for Umbria. From Perugia to Terni."
  },
  basilicata: {
    code: "basilicata",
    name: "Basilicata",
    fullName: "Basilicata",
    abbreviation: "BAS",
    cities: BASILICATA_CITIES,
    activeCities: BASILICATA_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1425738.8!2d15.8!3d40.64!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133c4c4c4c4c4c4c%3A0x133c4c4c4c4c4c4c!2sBasilicata%2C%20Italy!5e0!3m2!1sen!2s",
    population: "0.6 million",
    timezone: "CET",
    tagline: "Local SEO Services in Basilicata - Potenza & Matera Search Experts",
    description: "Expert local SEO services for Basilicata. From Potenza to Matera."
  },
  molise: {
    code: "molise",
    name: "Molise",
    fullName: "Molise",
    abbreviation: "MOL",
    cities: MOLISE_CITIES,
    activeCities: MOLISE_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1425738.8!2d14.67!3d41.56!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133a5a5a5a5a5a5a%3A0x133a5a5a5a5a5a5a!2sMolise%2C%20Italy!5e0!3m2!1sen!2s",
    population: "0.3 million",
    timezone: "CET",
    tagline: "Local SEO Services in Molise - Campobasso Search Optimization",
    description: "Professional local SEO services for Molise. From Campobasso to Isernia."
  }
};

export const IT_STATE_CODES = Object.keys(IT_STATES);

export const isValidITState = (code: string): boolean => {
  return code.toLowerCase() in IT_STATES;
};

export const getITStateData = (code: string): StateDetailData | undefined => {
  return IT_STATES[code.toLowerCase()];
};
