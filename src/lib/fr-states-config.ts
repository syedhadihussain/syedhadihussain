// France regions configuration with cities

import { StateDetailData, CityData } from "./states-config";

// Île-de-France cities
export const ILE_DE_FRANCE_CITIES: CityData[] = [
  { name: "Paris", code: "paris" },
  { name: "Boulogne-Billancourt", code: "boulogne-billancourt" },
  { name: "Saint-Denis", code: "saint-denis" },
  { name: "Montreuil", code: "montreuil" },
  { name: "Créteil", code: "creteil" },
  { name: "Versailles", code: "versailles" },
  { name: "Nanterre", code: "nanterre" },
  { name: "Argenteuil", code: "argenteuil" },
  { name: "Cergy", code: "cergy" }
];

// Provence-Alpes-Côte d'Azur cities
export const PACA_CITIES: CityData[] = [
  { name: "Marseille", code: "marseille" },
  { name: "Nice", code: "nice" },
  { name: "Toulon", code: "toulon" },
  { name: "Aix-en-Provence", code: "aix-en-provence" },
  { name: "Cannes", code: "cannes" },
  { name: "Antibes", code: "antibes" },
  { name: "Avignon", code: "avignon" }
];

// Auvergne-Rhône-Alpes cities
export const AUVERGNE_RHONE_ALPES_CITIES: CityData[] = [
  { name: "Lyon", code: "lyon" },
  { name: "Grenoble", code: "grenoble" },
  { name: "Saint-Étienne", code: "saint-etienne" },
  { name: "Annecy", code: "annecy" },
  { name: "Clermont-Ferrand", code: "clermont-ferrand" },
  { name: "Chambéry", code: "chambery" }
];

// Occitanie cities
export const OCCITANIE_CITIES: CityData[] = [
  { name: "Toulouse", code: "toulouse" },
  { name: "Montpellier", code: "montpellier" },
  { name: "Nîmes", code: "nimes" },
  { name: "Perpignan", code: "perpignan" },
  { name: "Béziers", code: "beziers" }
];

// Nouvelle-Aquitaine cities
export const NOUVELLE_AQUITAINE_CITIES: CityData[] = [
  { name: "Bordeaux", code: "bordeaux" },
  { name: "Limoges", code: "limoges" },
  { name: "Pau", code: "pau" },
  { name: "La Rochelle", code: "la-rochelle" },
  { name: "Bayonne", code: "bayonne" }
];

// Hauts-de-France cities
export const HAUTS_DE_FRANCE_CITIES: CityData[] = [
  { name: "Lille", code: "lille" },
  { name: "Amiens", code: "amiens" },
  { name: "Dunkerque", code: "dunkerque" },
  { name: "Calais", code: "calais" },
  { name: "Roubaix", code: "roubaix" }
];

// Grand Est cities
export const GRAND_EST_CITIES: CityData[] = [
  { name: "Strasbourg", code: "strasbourg" },
  { name: "Reims", code: "reims" },
  { name: "Metz", code: "metz" },
  { name: "Nancy", code: "nancy" },
  { name: "Mulhouse", code: "mulhouse" },
  { name: "Colmar", code: "colmar" }
];

// Pays de la Loire cities
export const PAYS_DE_LA_LOIRE_CITIES: CityData[] = [
  { name: "Nantes", code: "nantes" },
  { name: "Le Mans", code: "le-mans" },
  { name: "Angers", code: "angers" },
  { name: "Saint-Nazaire", code: "saint-nazaire" }
];

// Bretagne cities
export const BRETAGNE_CITIES: CityData[] = [
  { name: "Rennes", code: "rennes" },
  { name: "Brest", code: "brest" },
  { name: "Saint-Malo", code: "saint-malo" },
  { name: "Quimper", code: "quimper" },
  { name: "Vannes", code: "vannes" }
];

// Normandie cities
export const NORMANDIE_CITIES: CityData[] = [
  { name: "Rouen", code: "rouen" },
  { name: "Le Havre", code: "le-havre" },
  { name: "Caen", code: "caen" },
  { name: "Cherbourg", code: "cherbourg" }
];

// Bourgogne-Franche-Comté cities
export const BOURGOGNE_CITIES: CityData[] = [
  { name: "Dijon", code: "dijon" },
  { name: "Besançon", code: "besancon" },
  { name: "Beaune", code: "beaune" }
];

// Centre-Val de Loire cities
export const CENTRE_VAL_DE_LOIRE_CITIES: CityData[] = [
  { name: "Orléans", code: "orleans" },
  { name: "Tours", code: "tours" },
  { name: "Chartres", code: "chartres" },
  { name: "Blois", code: "blois" }
];

// Corsica cities
export const CORSE_CITIES: CityData[] = [
  { name: "Ajaccio", code: "ajaccio" },
  { name: "Bastia", code: "bastia" }
];

// France Regions Configuration
export const FR_STATES: Record<string, StateDetailData> = {
  "ile-de-france": {
    code: "ile-de-france",
    name: "Île-de-France",
    fullName: "Île-de-France",
    abbreviation: "IDF",
    cities: ILE_DE_FRANCE_CITIES,
    activeCities: ILE_DE_FRANCE_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d671876.36!2d2.35!3d48.86!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2s",
    population: "12.3 million",
    timezone: "CET",
    tagline: "Local SEO Services in Paris & Île-de-France - French Capital Search Domination",
    description: "Expert local SEO services across Paris and Île-de-France. From the capital to Versailles."
  },
  paca: {
    code: "paca",
    name: "Provence-Alpes-Côte d'Azur",
    fullName: "Provence-Alpes-Côte d'Azur",
    abbreviation: "PACA",
    cities: PACA_CITIES,
    activeCities: PACA_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d571876.36!2d5.37!3d43.30!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9!2sMarseille%2C%20France!5e0!3m2!1sen!2s",
    population: "5.1 million",
    timezone: "CET",
    tagline: "Local SEO Services in PACA - French Riviera Search Excellence",
    description: "Premier local SEO services throughout Provence. From Marseille to Nice and Cannes."
  },
  "auvergne-rhone-alpes": {
    code: "auvergne-rhone-alpes",
    name: "Auvergne-Rhône-Alpes",
    fullName: "Auvergne-Rhône-Alpes",
    abbreviation: "ARA",
    cities: AUVERGNE_RHONE_ALPES_CITIES,
    activeCities: AUVERGNE_RHONE_ALPES_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d571876.36!2d4.84!3d45.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea!2sLyon%2C%20France!5e0!3m2!1sen!2s",
    population: "8.0 million",
    timezone: "CET",
    tagline: "Local SEO Services in Lyon & Rhône-Alpes - French Alps Search Optimization",
    description: "Professional local SEO services for Auvergne-Rhône-Alpes. From Lyon to Grenoble."
  },
  occitanie: {
    code: "occitanie",
    name: "Occitanie",
    fullName: "Occitanie",
    abbreviation: "OCC",
    cities: OCCITANIE_CITIES,
    activeCities: OCCITANIE_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d571876.36!2d1.44!3d43.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ae!2sToulouse%2C%20France!5e0!3m2!1sen!2s",
    population: "5.9 million",
    timezone: "CET",
    tagline: "Local SEO Services in Occitanie - Toulouse & Montpellier Search Excellence",
    description: "Expert local SEO services for Occitanie. From Toulouse to Montpellier."
  },
  "nouvelle-aquitaine": {
    code: "nouvelle-aquitaine",
    name: "Nouvelle-Aquitaine",
    fullName: "Nouvelle-Aquitaine",
    abbreviation: "NAQ",
    cities: NOUVELLE_AQUITAINE_CITIES,
    activeCities: NOUVELLE_AQUITAINE_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d571876.36!2d-0.58!3d44.84!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd55!2sBordeaux%2C%20France!5e0!3m2!1sen!2s",
    population: "6.0 million",
    timezone: "CET",
    tagline: "Local SEO Services in Nouvelle-Aquitaine - Bordeaux Wine Region Search Domination",
    description: "Premier local SEO services for Nouvelle-Aquitaine. From Bordeaux to La Rochelle."
  },
  "hauts-de-france": {
    code: "hauts-de-france",
    name: "Hauts-de-France",
    fullName: "Hauts-de-France",
    abbreviation: "HDF",
    cities: HAUTS_DE_FRANCE_CITIES,
    activeCities: HAUTS_DE_FRANCE_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d571876.36!2d3.06!3d50.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2!2sLille%2C%20France!5e0!3m2!1sen!2s",
    population: "6.0 million",
    timezone: "CET",
    tagline: "Local SEO Services in Hauts-de-France - Lille & Northern France Search Excellence",
    description: "Professional local SEO services for Hauts-de-France. From Lille to Amiens."
  },
  "grand-est": {
    code: "grand-est",
    name: "Grand Est",
    fullName: "Grand Est",
    abbreviation: "GES",
    cities: GRAND_EST_CITIES,
    activeCities: GRAND_EST_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d571876.36!2d7.75!3d48.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479!2sStrasbourg%2C%20France!5e0!3m2!1sen!2s",
    population: "5.6 million",
    timezone: "CET",
    tagline: "Local SEO Services in Grand Est - Strasbourg & Alsace Search Optimization",
    description: "Expert local SEO services for Grand Est. From Strasbourg to Reims."
  },
  "pays-de-la-loire": {
    code: "pays-de-la-loire",
    name: "Pays de la Loire",
    fullName: "Pays de la Loire",
    abbreviation: "PDL",
    cities: PAYS_DE_LA_LOIRE_CITIES,
    activeCities: PAYS_DE_LA_LOIRE_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d571876.36!2d-1.55!3d47.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480!2sNantes%2C%20France!5e0!3m2!1sen!2s",
    population: "3.8 million",
    timezone: "CET",
    tagline: "Local SEO Services in Pays de la Loire - Nantes Search Excellence",
    description: "Premier local SEO services for Pays de la Loire. From Nantes to Angers."
  },
  bretagne: {
    code: "bretagne",
    name: "Bretagne",
    fullName: "Bretagne",
    abbreviation: "BRE",
    cities: BRETAGNE_CITIES,
    activeCities: BRETAGNE_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d571876.36!2d-1.68!3d48.11!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480!2sRennes%2C%20France!5e0!3m2!1sen!2s",
    population: "3.4 million",
    timezone: "CET",
    tagline: "Local SEO Services in Bretagne - Breton Coast Search Domination",
    description: "Professional local SEO services for Bretagne. From Rennes to Saint-Malo."
  },
  normandie: {
    code: "normandie",
    name: "Normandie",
    fullName: "Normandie",
    abbreviation: "NOR",
    cities: NORMANDIE_CITIES,
    activeCities: NORMANDIE_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d571876.36!2d1.1!3d49.44!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e0!2sRouen%2C%20France!5e0!3m2!1sen!2s",
    population: "3.3 million",
    timezone: "CET",
    tagline: "Local SEO Services in Normandie - Historic Region Search Excellence",
    description: "Expert local SEO services for Normandie. From Rouen to Caen."
  },
  "bourgogne-franche-comte": {
    code: "bourgogne-franche-comte",
    name: "Bourgogne-Franche-Comté",
    fullName: "Bourgogne-Franche-Comté",
    abbreviation: "BFC",
    cities: BOURGOGNE_CITIES,
    activeCities: BOURGOGNE_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d571876.36!2d5.04!3d47.32!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f2!2sDijon%2C%20France!5e0!3m2!1sen!2s",
    population: "2.8 million",
    timezone: "CET",
    tagline: "Local SEO Services in Bourgogne - Wine Region Search Optimization",
    description: "Premier local SEO services for Bourgogne-Franche-Comté."
  },
  "centre-val-de-loire": {
    code: "centre-val-de-loire",
    name: "Centre-Val de Loire",
    fullName: "Centre-Val de Loire",
    abbreviation: "CVL",
    cities: CENTRE_VAL_DE_LOIRE_CITIES,
    activeCities: CENTRE_VAL_DE_LOIRE_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d571876.36!2d1.9!3d47.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e4!2sOrl%C3%A9ans%2C%20France!5e0!3m2!1sen!2s",
    population: "2.6 million",
    timezone: "CET",
    tagline: "Local SEO Services in Centre-Val de Loire - Loire Valley Search Excellence",
    description: "Professional local SEO services for Centre-Val de Loire. Château country."
  },
  corse: {
    code: "corse",
    name: "Corse",
    fullName: "Corsica",
    abbreviation: "COR",
    cities: CORSE_CITIES,
    activeCities: CORSE_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d371876.36!2d8.74!3d41.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d!2sCorsica%2C%20France!5e0!3m2!1sen!2s",
    population: "0.35 million",
    timezone: "CET",
    tagline: "Local SEO Services in Corsica - Island Paradise Search Domination",
    description: "Expert local SEO services for Corsica. Ajaccio and Bastia."
  }
};

export const FR_STATE_CODES = Object.keys(FR_STATES);

export const isValidFRState = (code: string): boolean => {
  return code.toLowerCase() in FR_STATES;
};

export const getFRStateData = (code: string): StateDetailData | undefined => {
  return FR_STATES[code.toLowerCase()];
};
