// Spain autonomous communities configuration with cities

import { StateDetailData, CityData } from "./states-config";

// Comunidad de Madrid cities
export const MADRID_CITIES: CityData[] = [
  { name: "Madrid", code: "madrid" },
  { name: "Móstoles", code: "mostoles" },
  { name: "Alcalá de Henares", code: "alcala-de-henares" },
  { name: "Fuenlabrada", code: "fuenlabrada" },
  { name: "Leganés", code: "leganes" },
  { name: "Getafe", code: "getafe" },
  { name: "Alcorcón", code: "alcorcon" }
];

// Catalonia cities
export const CATALONIA_CITIES: CityData[] = [
  { name: "Barcelona", code: "barcelona" },
  { name: "L'Hospitalet", code: "lhospitalet" },
  { name: "Badalona", code: "badalona" },
  { name: "Terrassa", code: "terrassa" },
  { name: "Sabadell", code: "sabadell" },
  { name: "Tarragona", code: "tarragona" },
  { name: "Girona", code: "girona" }
];

// Andalusia cities
export const ANDALUSIA_CITIES: CityData[] = [
  { name: "Seville", code: "seville" },
  { name: "Málaga", code: "malaga" },
  { name: "Córdoba", code: "cordoba" },
  { name: "Granada", code: "granada" },
  { name: "Marbella", code: "marbella" },
  { name: "Cádiz", code: "cadiz" },
  { name: "Jerez", code: "jerez" },
  { name: "Almería", code: "almeria" }
];

// Valencia cities
export const VALENCIA_CITIES: CityData[] = [
  { name: "Valencia", code: "valencia" },
  { name: "Alicante", code: "alicante" },
  { name: "Elche", code: "elche" },
  { name: "Benidorm", code: "benidorm" },
  { name: "Castellón", code: "castellon" },
  { name: "Torrevieja", code: "torrevieja" }
];

// Basque Country cities
export const BASQUE_CITIES: CityData[] = [
  { name: "Bilbao", code: "bilbao" },
  { name: "Vitoria-Gasteiz", code: "vitoria-gasteiz" },
  { name: "San Sebastián", code: "san-sebastian" },
  { name: "Barakaldo", code: "barakaldo" }
];

// Galicia cities
export const GALICIA_CITIES: CityData[] = [
  { name: "Vigo", code: "vigo" },
  { name: "A Coruña", code: "a-coruna" },
  { name: "Santiago de Compostela", code: "santiago-de-compostela" },
  { name: "Ourense", code: "ourense" },
  { name: "Lugo", code: "lugo" }
];

// Castile and León cities
export const CASTILE_LEON_CITIES: CityData[] = [
  { name: "Valladolid", code: "valladolid-es" },
  { name: "Burgos", code: "burgos" },
  { name: "Salamanca", code: "salamanca" },
  { name: "León", code: "leon-es" },
  { name: "Segovia", code: "segovia" }
];

// Canary Islands cities
export const CANARY_CITIES: CityData[] = [
  { name: "Las Palmas", code: "las-palmas" },
  { name: "Santa Cruz de Tenerife", code: "santa-cruz-de-tenerife" },
  { name: "San Cristóbal de La Laguna", code: "san-cristobal-de-la-laguna" },
  { name: "Puerto de la Cruz", code: "puerto-de-la-cruz" }
];

// Balearic Islands cities
export const BALEARIC_CITIES: CityData[] = [
  { name: "Palma de Mallorca", code: "palma-de-mallorca" },
  { name: "Ibiza", code: "ibiza" },
  { name: "Mahón", code: "mahon" }
];

// Aragon cities
export const ARAGON_CITIES: CityData[] = [
  { name: "Zaragoza", code: "zaragoza" },
  { name: "Huesca", code: "huesca" },
  { name: "Teruel", code: "teruel" }
];

// Murcia cities
export const MURCIA_CITIES: CityData[] = [
  { name: "Murcia City", code: "murcia-city" },
  { name: "Cartagena", code: "cartagena" },
  { name: "Lorca", code: "lorca" }
];

// Navarre cities
export const NAVARRE_CITIES: CityData[] = [
  { name: "Pamplona", code: "pamplona" },
  { name: "Tudela", code: "tudela" }
];

// Asturias cities
export const ASTURIAS_CITIES: CityData[] = [
  { name: "Oviedo", code: "oviedo" },
  { name: "Gijón", code: "gijon" },
  { name: "Avilés", code: "aviles" }
];

// Cantabria cities
export const CANTABRIA_CITIES: CityData[] = [
  { name: "Santander", code: "santander" },
  { name: "Torrelavega", code: "torrelavega" }
];

// Spain Autonomous Communities Configuration
export const ES_STATES: Record<string, StateDetailData> = {
  madrid: {
    code: "madrid",
    name: "Comunidad de Madrid",
    fullName: "Comunidad de Madrid",
    abbreviation: "MAD",
    cities: MADRID_CITIES,
    activeCities: MADRID_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d388876.36!2d-3.7!3d40.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid%2C%20Spain!5e0!3m2!1sen!2s",
    population: "6.7 million",
    timezone: "CET",
    tagline: "Local SEO Services in Madrid - Spanish Capital Search Domination",
    description: "Expert local SEO services across Madrid. From the capital to surrounding cities."
  },
  catalonia: {
    code: "catalonia",
    name: "Catalonia",
    fullName: "Cataluña",
    abbreviation: "CAT",
    cities: CATALONIA_CITIES,
    activeCities: CATALONIA_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d388876.36!2d2.17!3d41.39!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49!2sBarcelona%2C%20Spain!5e0!3m2!1sen!2s",
    population: "7.7 million",
    timezone: "CET",
    tagline: "Local SEO Services in Catalonia - Barcelona Search Excellence",
    description: "Premier local SEO services throughout Catalonia. From Barcelona to Girona."
  },
  andalusia: {
    code: "andalusia",
    name: "Andalusia",
    fullName: "Andalucía",
    abbreviation: "AND",
    cities: ANDALUSIA_CITIES,
    activeCities: ANDALUSIA_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d488876.36!2d-5.98!3d37.39!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd12!2sSeville%2C%20Spain!5e0!3m2!1sen!2s",
    population: "8.5 million",
    timezone: "CET",
    tagline: "Local SEO Services in Andalusia - Seville & Málaga Search Optimization",
    description: "Professional local SEO services for Andalusia. From Seville to Costa del Sol."
  },
  valencia: {
    code: "valencia",
    name: "Valencian Community",
    fullName: "Comunitat Valenciana",
    abbreviation: "VAL",
    cities: VALENCIA_CITIES,
    activeCities: VALENCIA_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d388876.36!2d-0.38!3d39.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd60!2sValencia%2C%20Spain!5e0!3m2!1sen!2s",
    population: "5.1 million",
    timezone: "CET",
    tagline: "Local SEO Services in Valencia - Mediterranean Coast Search Excellence",
    description: "Expert local SEO services for Valencia. From Valencia City to Alicante."
  },
  "basque-country": {
    code: "basque-country",
    name: "Basque Country",
    fullName: "País Vasco",
    abbreviation: "PVA",
    cities: BASQUE_CITIES,
    activeCities: BASQUE_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d288876.36!2d-2.93!3d43.26!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e4!2sBilbao%2C%20Spain!5e0!3m2!1sen!2s",
    population: "2.2 million",
    timezone: "CET",
    tagline: "Local SEO Services in Basque Country - Bilbao & San Sebastián Search Domination",
    description: "Premier local SEO services for Basque Country."
  },
  galicia: {
    code: "galicia",
    name: "Galicia",
    fullName: "Galicia",
    abbreviation: "GAL",
    cities: GALICIA_CITIES,
    activeCities: GALICIA_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d388876.36!2d-8.72!3d42.24!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2e!2sVigo%2C%20Spain!5e0!3m2!1sen!2s",
    population: "2.7 million",
    timezone: "CET",
    tagline: "Local SEO Services in Galicia - Northwest Spain Search Excellence",
    description: "Professional local SEO services for Galicia. From Vigo to Santiago."
  },
  "castile-leon": {
    code: "castile-leon",
    name: "Castile and León",
    fullName: "Castilla y León",
    abbreviation: "CYL",
    cities: CASTILE_LEON_CITIES,
    activeCities: CASTILE_LEON_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d488876.36!2d-4.72!3d41.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd47!2sValladolid%2C%20Spain!5e0!3m2!1sen!2s",
    population: "2.4 million",
    timezone: "CET",
    tagline: "Local SEO Services in Castile and León - Historic Spain Search Optimization",
    description: "Expert local SEO services for Castile and León."
  },
  "canary-islands": {
    code: "canary-islands",
    name: "Canary Islands",
    fullName: "Islas Canarias",
    abbreviation: "CAN",
    cities: CANARY_CITIES,
    activeCities: CANARY_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d388876.36!2d-15.41!3d28.13!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc40!2sLas%20Palmas%2C%20Spain!5e0!3m2!1sen!2s",
    population: "2.2 million",
    timezone: "WET",
    tagline: "Local SEO Services in Canary Islands - Atlantic Paradise Search Domination",
    description: "Premier local SEO services for Canary Islands. Tourism excellence."
  },
  "balearic-islands": {
    code: "balearic-islands",
    name: "Balearic Islands",
    fullName: "Islas Baleares",
    abbreviation: "BAL",
    cities: BALEARIC_CITIES,
    activeCities: BALEARIC_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d288876.36!2d2.65!3d39.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129!2sPalma%2C%20Spain!5e0!3m2!1sen!2s",
    population: "1.2 million",
    timezone: "CET",
    tagline: "Local SEO Services in Balearic Islands - Mallorca & Ibiza Search Excellence",
    description: "Professional local SEO services for Balearic Islands."
  },
  aragon: {
    code: "aragon",
    name: "Aragon",
    fullName: "Aragón",
    abbreviation: "ARA",
    cities: ARAGON_CITIES,
    activeCities: ARAGON_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d388876.36!2d-0.88!3d41.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd59!2sZaragoza%2C%20Spain!5e0!3m2!1sen!2s",
    population: "1.3 million",
    timezone: "CET",
    tagline: "Local SEO Services in Aragon - Zaragoza Search Optimization",
    description: "Expert local SEO services for Aragon."
  },
  murcia: {
    code: "murcia",
    name: "Region of Murcia",
    fullName: "Región de Murcia",
    abbreviation: "MUR",
    cities: MURCIA_CITIES,
    activeCities: MURCIA_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d288876.36!2d-1.13!3d37.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63!2sMurcia%2C%20Spain!5e0!3m2!1sen!2s",
    population: "1.5 million",
    timezone: "CET",
    tagline: "Local SEO Services in Murcia - Costa Cálida Search Excellence",
    description: "Premier local SEO services for Murcia."
  },
  navarre: {
    code: "navarre",
    name: "Navarre",
    fullName: "Navarra",
    abbreviation: "NAV",
    cities: NAVARRE_CITIES,
    activeCities: NAVARRE_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d288876.36!2d-1.64!3d42.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd50!2sPamplona%2C%20Spain!5e0!3m2!1sen!2s",
    population: "0.66 million",
    timezone: "CET",
    tagline: "Local SEO Services in Navarre - Pamplona Search Domination",
    description: "Professional local SEO services for Navarre."
  },
  asturias: {
    code: "asturias",
    name: "Asturias",
    fullName: "Principado de Asturias",
    abbreviation: "AST",
    cities: ASTURIAS_CITIES,
    activeCities: ASTURIAS_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d288876.36!2d-5.84!3d43.36!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd36!2sOviedo%2C%20Spain!5e0!3m2!1sen!2s",
    population: "1.0 million",
    timezone: "CET",
    tagline: "Local SEO Services in Asturias - Northern Coast Search Excellence",
    description: "Expert local SEO services for Asturias."
  },
  cantabria: {
    code: "cantabria",
    name: "Cantabria",
    fullName: "Cantabria",
    abbreviation: "CNT",
    cities: CANTABRIA_CITIES,
    activeCities: CANTABRIA_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d288876.36!2d-3.82!3d43.46!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd49!2sSantander%2C%20Spain!5e0!3m2!1sen!2s",
    population: "0.58 million",
    timezone: "CET",
    tagline: "Local SEO Services in Cantabria - Santander Search Optimization",
    description: "Premier local SEO services for Cantabria."
  }
};

export const ES_STATE_CODES = Object.keys(ES_STATES);

export const isValidESState = (code: string): boolean => {
  return code.toLowerCase() in ES_STATES;
};

export const getESStateData = (code: string): StateDetailData | undefined => {
  return ES_STATES[code.toLowerCase()];
};
