// Canada provinces/territories configuration with cities

import { StateDetailData, CityData } from "./states-config";

// Ontario cities
export const ON_CITIES: CityData[] = [
  { name: "Toronto", code: "toronto" },
  { name: "Mississauga", code: "mississauga" },
  { name: "Ottawa", code: "ottawa" },
  { name: "Brampton", code: "brampton" },
  { name: "Hamilton", code: "hamilton" },
  { name: "Kitchener", code: "kitchener" },
  { name: "London", code: "london" },
  { name: "Vaughan", code: "vaughan" },
  { name: "Markham", code: "markham" },
  { name: "Burlington", code: "burlington" },
  { name: "Oshawa", code: "oshawa" },
  { name: "Barrie", code: "barrie" },
  { name: "Guelph", code: "guelph" },
  { name: "Cambridge", code: "cambridge" },
  { name: "Waterloo", code: "waterloo" },
  { name: "Whitby", code: "whitby" },
  { name: "Pickering", code: "pickering" },
  { name: "Ajax", code: "ajax" },
  { name: "Kingston", code: "kingston" },
  { name: "Thunder Bay", code: "thunder-bay" },
  { name: "Windsor", code: "windsor" },
  { name: "Niagara Falls", code: "niagara-falls" },
  { name: "Sudbury", code: "sudbury" },
  { name: "St. Catharines", code: "st-catharines" }
];

export const ON_ACTIVE_CITIES: string[] = [
  "toronto", "mississauga", "ottawa", "brampton", "hamilton", "kitchener",
  "london", "vaughan", "markham", "burlington", "oshawa", "barrie", "guelph",
  "cambridge", "waterloo", "whitby", "pickering", "ajax", "kingston",
  "thunder-bay", "windsor", "niagara-falls", "sudbury", "st-catharines"
];

// British Columbia cities
export const BC_CITIES: CityData[] = [
  { name: "Vancouver", code: "vancouver" },
  { name: "Surrey", code: "surrey" },
  { name: "Burnaby", code: "burnaby" },
  { name: "Richmond", code: "richmond" },
  { name: "Coquitlam", code: "coquitlam" },
  { name: "Langley", code: "langley" },
  { name: "Victoria", code: "victoria" },
  { name: "Abbotsford", code: "abbotsford" },
  { name: "Chilliwack", code: "chilliwack" },
  { name: "Vernon", code: "vernon" },
  { name: "Prince George", code: "prince-george" },
  { name: "Kelowna", code: "kelowna" },
  { name: "Kamloops", code: "kamloops" },
  { name: "Nanaimo", code: "nanaimo" }
];

export const BC_ACTIVE_CITIES: string[] = [
  "vancouver", "surrey", "burnaby", "richmond", "coquitlam", "langley",
  "victoria", "abbotsford", "chilliwack", "vernon", "prince-george",
  "kelowna", "kamloops", "nanaimo"
];

// Quebec cities
export const QC_CITIES: CityData[] = [
  { name: "Montreal", code: "montreal" },
  { name: "Quebec City", code: "quebec-city" },
  { name: "Laval", code: "laval" },
  { name: "Gatineau", code: "gatineau" },
  { name: "Longueuil", code: "longueuil" },
  { name: "Sherbrooke", code: "sherbrooke" },
  { name: "Trois-Rivières", code: "trois-rivieres" },
  { name: "Drummondville", code: "drummondville" },
  { name: "Saint-Jean-sur-Richelieu", code: "saint-jean-sur-richelieu" },
  { name: "Granby", code: "granby" }
];

export const QC_ACTIVE_CITIES: string[] = [
  "montreal", "quebec-city", "laval", "gatineau", "longueuil", "sherbrooke",
  "trois-rivieres", "drummondville", "saint-jean-sur-richelieu", "granby"
];

// Alberta cities
export const AB_CITIES: CityData[] = [
  { name: "Calgary", code: "calgary" },
  { name: "Edmonton", code: "edmonton" },
  { name: "Red Deer", code: "red-deer" },
  { name: "Lethbridge", code: "lethbridge" },
  { name: "Grande Prairie", code: "grande-prairie" },
  { name: "Medicine Hat", code: "medicine-hat" },
  { name: "Airdrie", code: "airdrie" },
  { name: "Cochrane", code: "cochrane" },
  { name: "Okotoks", code: "okotoks" },
  { name: "Fort McMurray", code: "fort-mcmurray" }
];

export const AB_ACTIVE_CITIES: string[] = [
  "calgary", "edmonton", "red-deer", "lethbridge", "grande-prairie",
  "medicine-hat", "airdrie", "cochrane", "okotoks", "fort-mcmurray"
];

// Saskatchewan cities
export const SK_CITIES: CityData[] = [
  { name: "Saskatoon", code: "saskatoon" },
  { name: "Regina", code: "regina" },
  { name: "Prince Albert", code: "prince-albert" },
  { name: "Moose Jaw", code: "moose-jaw" },
  { name: "Swift Current", code: "swift-current" }
];

export const SK_ACTIVE_CITIES: string[] = [
  "saskatoon", "regina", "prince-albert", "moose-jaw", "swift-current"
];

// Manitoba cities
export const MB_CITIES: CityData[] = [
  { name: "Winnipeg", code: "winnipeg" },
  { name: "Brandon", code: "brandon" },
  { name: "Steinbach", code: "steinbach" },
  { name: "Thompson", code: "thompson" },
  { name: "Portage la Prairie", code: "portage-la-prairie" }
];

export const MB_ACTIVE_CITIES: string[] = [
  "winnipeg", "brandon", "steinbach", "thompson", "portage-la-prairie"
];

// Nova Scotia cities
export const NS_CITIES: CityData[] = [
  { name: "Halifax", code: "halifax" },
  { name: "Dartmouth", code: "dartmouth" },
  { name: "Truro", code: "truro" },
  { name: "New Glasgow", code: "new-glasgow" },
  { name: "Sydney", code: "sydney" }
];

export const NS_ACTIVE_CITIES: string[] = [
  "halifax", "dartmouth", "truro", "new-glasgow", "sydney"
];

// New Brunswick cities
export const NB_CITIES: CityData[] = [
  { name: "Moncton", code: "moncton" },
  { name: "Fredericton", code: "fredericton" },
  { name: "Saint John", code: "saint-john" },
  { name: "Dieppe", code: "dieppe" },
  { name: "Miramichi", code: "miramichi" }
];

export const NB_ACTIVE_CITIES: string[] = [
  "moncton", "fredericton", "saint-john", "dieppe", "miramichi"
];

// Newfoundland cities
export const NL_CITIES: CityData[] = [
  { name: "St. John's", code: "st-johns" },
  { name: "Corner Brook", code: "corner-brook" },
  { name: "Mount Pearl", code: "mount-pearl" },
  { name: "Conception Bay South", code: "conception-bay-south" }
];

export const NL_ACTIVE_CITIES: string[] = [
  "st-johns", "corner-brook", "mount-pearl", "conception-bay-south"
];

// Prince Edward Island cities
export const PE_CITIES: CityData[] = [
  { name: "Charlottetown", code: "charlottetown" },
  { name: "Summerside", code: "summerside" }
];

export const PE_ACTIVE_CITIES: string[] = [
  "charlottetown", "summerside"
];

// Yukon cities
export const YT_CITIES: CityData[] = [
  { name: "Whitehorse", code: "whitehorse" }
];

export const YT_ACTIVE_CITIES: string[] = ["whitehorse"];

// Northwest Territories cities
export const NT_CITIES: CityData[] = [
  { name: "Yellowknife", code: "yellowknife" },
  { name: "Hay River", code: "hay-river" }
];

export const NT_ACTIVE_CITIES: string[] = ["yellowknife", "hay-river"];

// Nunavut cities
export const NU_CITIES: CityData[] = [
  { name: "Iqaluit", code: "iqaluit" }
];

export const NU_ACTIVE_CITIES: string[] = ["iqaluit"];

// Canada Provinces Configuration
export const CA_STATES: Record<string, StateDetailData> = {
  on: {
    code: "on",
    name: "Ontario",
    fullName: "Ontario",
    abbreviation: "ON",
    cities: ON_CITIES,
    activeCities: ON_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5765318.558012679!2d-88.42694085!3d50.0000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05b25f5113af%3A0x8a6a51e131dd15ed!2sOntario%2C%20Canada!5e0!3m2!1sen!2s",
    population: "14.8 million",
    timezone: "EST/EDT",
    tagline: "Local SEO Services in Ontario - Dominate Toronto & GTA Search Results",
    description: "Expert local SEO services across Ontario. From Toronto to Ottawa, we help Canadian businesses rank higher on Google Maps and local search results."
  },
  bc: {
    code: "bc",
    name: "British Columbia",
    fullName: "British Columbia",
    abbreviation: "BC",
    cities: BC_CITIES,
    activeCities: BC_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5338818.627731556!2d-131.7466845!3d53.7266683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x538905a1d4b63311%3A0x32618bc7ff66c6a4!2sBritish%20Columbia%2C%20Canada!5e0!3m2!1sen!2s",
    population: "5.1 million",
    timezone: "PST/PDT",
    tagline: "Local SEO Services in British Columbia - Vancouver & BC Search Domination",
    description: "Premier local SEO services throughout British Columbia. From Vancouver to Victoria, we boost your Google Maps visibility and local search rankings."
  },
  qc: {
    code: "qc",
    name: "Quebec",
    fullName: "Quebec",
    abbreviation: "QC",
    cities: QC_CITIES,
    activeCities: QC_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5750744.108393653!2d-73.5491!3d52.9399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4c8bd22bc25f1619%3A0x99f2a0e6c2e6cc68!2sQuebec%2C%20Canada!5e0!3m2!1sen!2s",
    population: "8.5 million",
    timezone: "EST/EDT",
    tagline: "Local SEO Services in Quebec - Montreal & Quebec City Search Excellence",
    description: "Specialized local SEO services for Quebec businesses. Bilingual optimization for Montreal, Quebec City, and all Quebec regions."
  },
  ab: {
    code: "ab",
    name: "Alberta",
    fullName: "Alberta",
    abbreviation: "AB",
    cities: AB_CITIES,
    activeCities: AB_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4858785.447929567!2d-116.5765!3d53.9333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5373f7c3e13e8d5b%3A0x2142a900f62c75b1!2sAlberta%2C%20Canada!5e0!3m2!1sen!2s",
    population: "4.4 million",
    timezone: "MST/MDT",
    tagline: "Local SEO Services in Alberta - Calgary & Edmonton Search Optimization",
    description: "Expert local SEO services across Alberta. From Calgary to Edmonton, we help Alberta businesses dominate local search results."
  },
  sk: {
    code: "sk",
    name: "Saskatchewan",
    fullName: "Saskatchewan",
    abbreviation: "SK",
    cities: SK_CITIES,
    activeCities: SK_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4726855.447929567!2d-106.4509!3d52.9399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f9c1c1c1c1c1%3A0x5304f9c1c1c1c1c1!2sSaskatchewan%2C%20Canada!5e0!3m2!1sen!2s",
    population: "1.2 million",
    timezone: "CST",
    tagline: "Local SEO Services in Saskatchewan - Saskatoon & Regina Search Experts",
    description: "Professional local SEO services for Saskatchewan businesses. We help Saskatoon and Regina businesses rank higher on Google Maps."
  },
  mb: {
    code: "mb",
    name: "Manitoba",
    fullName: "Manitoba",
    abbreviation: "MB",
    cities: MB_CITIES,
    activeCities: MB_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4726855.447929567!2d-98.8139!3d53.7609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52e7c1c1c1c1c1c1%3A0x52e7c1c1c1c1c1c1!2sManitoba%2C%20Canada!5e0!3m2!1sen!2s",
    population: "1.4 million",
    timezone: "CST/CDT",
    tagline: "Local SEO Services in Manitoba - Winnipeg Search Optimization Experts",
    description: "Expert local SEO services for Manitoba businesses. We help Winnipeg and Brandon companies dominate local search results."
  },
  ns: {
    code: "ns",
    name: "Nova Scotia",
    fullName: "Nova Scotia",
    abbreviation: "NS",
    cities: NS_CITIES,
    activeCities: NS_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893285.447929567!2d-63.7443!3d44.682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5a2c1c1c1c1c1c%3A0x4b5a2c1c1c1c1c1c!2sNova%20Scotia%2C%20Canada!5e0!3m2!1sen!2s",
    population: "1.0 million",
    timezone: "AST/ADT",
    tagline: "Local SEO Services in Nova Scotia - Halifax Search Domination",
    description: "Professional local SEO services for Nova Scotia businesses. From Halifax to Dartmouth, we boost your Google Maps visibility."
  },
  nb: {
    code: "nb",
    name: "New Brunswick",
    fullName: "New Brunswick",
    abbreviation: "NB",
    cities: NB_CITIES,
    activeCities: NB_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893285.447929567!2d-66.4619!3d46.5653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ca3c1c1c1c1c1c1%3A0x4ca3c1c1c1c1c1c1!2sNew%20Brunswick%2C%20Canada!5e0!3m2!1sen!2s",
    population: "789,000",
    timezone: "AST/ADT",
    tagline: "Local SEO Services in New Brunswick - Moncton & Fredericton Search Experts",
    description: "Expert local SEO services for New Brunswick businesses. We help Moncton and Fredericton companies rank higher locally."
  },
  nl: {
    code: "nl",
    name: "Newfoundland and Labrador",
    fullName: "Newfoundland and Labrador",
    abbreviation: "NL",
    cities: NL_CITIES,
    activeCities: NL_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4893285.447929567!2d-57.6604!3d53.1355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0c1c1c1c1c1c1c%3A0x4b0c1c1c1c1c1c1c!2sNewfoundland%20and%20Labrador%2C%20Canada!5e0!3m2!1sen!2s",
    population: "520,000",
    timezone: "NST/NDT",
    tagline: "Local SEO Services in Newfoundland - St. John's Search Optimization",
    description: "Professional local SEO services for Newfoundland and Labrador. We help St. John's businesses dominate local search."
  },
  pe: {
    code: "pe",
    name: "Prince Edward Island",
    fullName: "Prince Edward Island",
    abbreviation: "PE",
    cities: PE_CITIES,
    activeCities: PE_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d893285.447929567!2d-63.4168!3d46.5107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5e1c1c1c1c1c1c%3A0x4b5e1c1c1c1c1c1c!2sPrince%20Edward%20Island%2C%20Canada!5e0!3m2!1sen!2s",
    population: "164,000",
    timezone: "AST/ADT",
    tagline: "Local SEO Services in PEI - Charlottetown Search Experts",
    description: "Expert local SEO services for Prince Edward Island. We help Charlottetown businesses rank higher on Google Maps."
  },
  yt: {
    code: "yt",
    name: "Yukon",
    fullName: "Yukon",
    abbreviation: "YT",
    cities: YT_CITIES,
    activeCities: YT_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4893285.447929567!2d-135.0568!3d64.2823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5131c1c1c1c1c1c1%3A0x5131c1c1c1c1c1c1!2sYukon%2C%20Canada!5e0!3m2!1sen!2s",
    population: "42,000",
    timezone: "PST/PDT",
    tagline: "Local SEO Services in Yukon - Whitehorse Search Optimization",
    description: "Professional local SEO services for Yukon Territory. We help Whitehorse businesses dominate local search results."
  },
  nt: {
    code: "nt",
    name: "Northwest Territories",
    fullName: "Northwest Territories",
    abbreviation: "NT",
    cities: NT_CITIES,
    activeCities: NT_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6893285.447929567!2d-119.3536!3d64.8255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53e1c1c1c1c1c1c1%3A0x53e1c1c1c1c1c1c1!2sNorthwest%20Territories%2C%20Canada!5e0!3m2!1sen!2s",
    population: "45,000",
    timezone: "MST/MDT",
    tagline: "Local SEO Services in Northwest Territories - Yellowknife Search Experts",
    description: "Expert local SEO services for Northwest Territories. We help Yellowknife businesses rank higher locally."
  },
  nu: {
    code: "nu",
    name: "Nunavut",
    fullName: "Nunavut",
    abbreviation: "NU",
    cities: NU_CITIES,
    activeCities: NU_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8893285.447929567!2d-91.0761!3d70.4535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e1c1c1c1c1c1c1%3A0x46e1c1c1c1c1c1c1!2sNunavut%2C%20Canada!5e0!3m2!1sen!2s",
    population: "39,000",
    timezone: "EST/EDT",
    tagline: "Local SEO Services in Nunavut - Iqaluit Search Optimization",
    description: "Professional local SEO services for Nunavut. We help Iqaluit businesses dominate local search results."
  }
};

export const CA_STATE_CODES = Object.keys(CA_STATES);

export const isValidCAState = (code: string): boolean => {
  return code.toLowerCase() in CA_STATES;
};

export const getCAStateData = (code: string): StateDetailData | undefined => {
  return CA_STATES[code.toLowerCase()];
};

export const isCAcityActive = (stateCode: string, cityCode: string): boolean => {
  const state = CA_STATES[stateCode.toLowerCase()];
  return state?.activeCities.includes(cityCode.toLowerCase()) ?? false;
};

export const isValidCACity = (stateCode: string, cityCode: string): boolean => {
  const state = CA_STATES[stateCode.toLowerCase()];
  if (!state) return false;
  return state.cities.some(c => c.code === cityCode.toLowerCase());
};
