// Australian States/Territories configuration with suburbs for state landing pages

import { CityData, StateDetailData } from "./states-config";

// New South Wales suburbs
export const NSW_CITIES: CityData[] = [
  { name: "Sydney CBD", code: "sydney-cbd" },
  { name: "Parramatta", code: "parramatta" },
  { name: "Blacktown", code: "blacktown" },
  { name: "Liverpool", code: "liverpool" },
  { name: "Penrith", code: "penrith" },
  { name: "Bondi", code: "bondi" },
  { name: "Chatswood", code: "chatswood" },
  { name: "North Sydney", code: "north-sydney" },
  { name: "Surry Hills", code: "surry-hills" },
  { name: "Newcastle", code: "newcastle" },
  { name: "Wollongong", code: "wollongong" },
  { name: "Central Coast", code: "central-coast" }
];

export const NSW_ACTIVE_CITIES: string[] = [
  "sydney-cbd", "parramatta", "blacktown", "liverpool", "penrith", "bondi",
  "chatswood", "north-sydney", "surry-hills", "newcastle", "wollongong", "central-coast"
];

// Victoria suburbs
export const VIC_CITIES: CityData[] = [
  { name: "Melbourne CBD", code: "melbourne-cbd" },
  { name: "South Yarra", code: "south-yarra" },
  { name: "Richmond", code: "richmond" },
  { name: "St Kilda", code: "st-kilda" },
  { name: "Dandenong", code: "dandenong" },
  { name: "Frankston", code: "frankston" },
  { name: "Footscray", code: "footscray" },
  { name: "Sunshine", code: "sunshine" },
  { name: "Geelong", code: "geelong" },
  { name: "Ballarat", code: "ballarat" },
  { name: "Bendigo", code: "bendigo" }
];

export const VIC_ACTIVE_CITIES: string[] = [
  "melbourne-cbd", "south-yarra", "richmond", "st-kilda", "dandenong",
  "frankston", "footscray", "sunshine", "geelong", "ballarat", "bendigo"
];

// Queensland suburbs
export const QLD_CITIES: CityData[] = [
  { name: "Brisbane CBD", code: "brisbane-cbd" },
  { name: "Logan", code: "logan" },
  { name: "Ipswich", code: "ipswich" },
  { name: "Chermside", code: "chermside" },
  { name: "Mount Gravatt", code: "mount-gravatt" },
  { name: "Gold Coast", code: "gold-coast" },
  { name: "Surfers Paradise", code: "surfers-paradise" },
  { name: "Southport", code: "southport" },
  { name: "Broadbeach", code: "broadbeach" },
  { name: "Sunshine Coast", code: "sunshine-coast" },
  { name: "Cairns", code: "cairns" },
  { name: "Townsville", code: "townsville" }
];

export const QLD_ACTIVE_CITIES: string[] = [
  "brisbane-cbd", "logan", "ipswich", "chermside", "mount-gravatt",
  "gold-coast", "surfers-paradise", "southport", "broadbeach",
  "sunshine-coast", "cairns", "townsville"
];

// Western Australia suburbs
export const WA_AU_CITIES: CityData[] = [
  { name: "Perth CBD", code: "perth-cbd" },
  { name: "Joondalup", code: "joondalup" },
  { name: "Fremantle", code: "fremantle" },
  { name: "Rockingham", code: "rockingham" },
  { name: "Cannington", code: "cannington" },
  { name: "Midland", code: "midland-wa" },
  { name: "Armadale", code: "armadale" },
  { name: "Mandurah", code: "mandurah" },
  { name: "Bunbury", code: "bunbury" },
  { name: "Geraldton", code: "geraldton" },
  { name: "Albany", code: "albany-wa" },
  { name: "Kalgoorlie", code: "kalgoorlie" },
  { name: "Karratha", code: "karratha" },
  { name: "Port Hedland", code: "port-hedland" }
];

export const WA_AU_ACTIVE_CITIES: string[] = [
  "perth-cbd", "joondalup", "fremantle", "rockingham", "cannington",
  "midland-wa", "armadale", "mandurah", "bunbury", "geraldton",
  "albany-wa", "kalgoorlie", "karratha", "port-hedland"
];

// South Australia suburbs
export const SA_AU_CITIES: CityData[] = [
  { name: "Adelaide CBD", code: "adelaide-cbd" },
  { name: "Glenelg", code: "glenelg" },
  { name: "Salisbury", code: "salisbury" },
  { name: "Elizabeth", code: "elizabeth" },
  { name: "Norwood", code: "norwood" },
  { name: "Port Adelaide", code: "port-adelaide" },
  { name: "Mount Barker", code: "mount-barker" },
  { name: "Gawler", code: "gawler" },
  { name: "Whyalla", code: "whyalla" }
];

export const SA_AU_ACTIVE_CITIES: string[] = [
  "adelaide-cbd", "glenelg", "salisbury", "elizabeth", "norwood",
  "port-adelaide", "mount-barker", "gawler", "whyalla"
];

// Tasmania suburbs
export const TAS_CITIES: CityData[] = [
  { name: "Hobart", code: "hobart" },
  { name: "Launceston", code: "launceston" },
  { name: "Devonport", code: "devonport" },
  { name: "Burnie", code: "burnie" },
  { name: "Glenorchy", code: "glenorchy" },
  { name: "Clarence", code: "clarence" },
  { name: "Kingston", code: "kingston-tas" }
];

export const TAS_ACTIVE_CITIES: string[] = [
  "hobart", "launceston", "devonport", "burnie", "glenorchy", "clarence", "kingston-tas"
];

// Australian Capital Territory suburbs
export const ACT_CITIES: CityData[] = [
  { name: "Canberra", code: "canberra" },
  { name: "Belconnen", code: "belconnen" },
  { name: "Gungahlin", code: "gungahlin" },
  { name: "Tuggeranong", code: "tuggeranong" },
  { name: "Woden Valley", code: "woden-valley" },
  { name: "Weston Creek", code: "weston-creek" }
];

export const ACT_ACTIVE_CITIES: string[] = [
  "canberra", "belconnen", "gungahlin", "tuggeranong", "woden-valley", "weston-creek"
];

// Northern Territory suburbs
export const NT_CITIES: CityData[] = [
  { name: "Darwin", code: "darwin" },
  { name: "Palmerston", code: "palmerston" },
  { name: "Alice Springs", code: "alice-springs" },
  { name: "Katherine", code: "katherine" },
  { name: "Tennant Creek", code: "tennant-creek" }
];

export const NT_ACTIVE_CITIES: string[] = [
  "darwin", "palmerston", "alice-springs", "katherine", "tennant-creek"
];

// Australian States definitions
export const AU_STATES: Record<string, StateDetailData> = {
  nsw: {
    code: "nsw",
    name: "New South Wales",
    fullName: "State of New South Wales",
    abbreviation: "NSW",
    cities: NSW_CITIES,
    activeCities: NSW_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6912334.665493672!2d146.92879365!3d-31.25457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743d%3A0x3017d681632a850!2sNew%20South%20Wales%2C%20Australia!5e0!3m2!1sen!2s!4v1766845000000!5m2!1sen!2s",
    population: "8.2 million",
    timezone: "Australia/Sydney",
    tagline: "Dominate Local Search Across New South Wales – From Sydney to Newcastle",
    description: "I help New South Wales businesses capture more local customers through proven Google Maps optimization, AI search strategies, and citation building. From the bustling streets of Sydney CBD to the industrial hubs of Newcastle and Wollongong, my local SEO expertise puts your business in front of ready-to-buy customers across NSW."
  },
  vic: {
    code: "vic",
    name: "Victoria",
    fullName: "State of Victoria",
    abbreviation: "VIC",
    cities: VIC_CITIES,
    activeCities: VIC_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6512334.665493672!2d143.39879365!3d-36.98457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218cce90!2sVictoria%2C%20Australia!5e0!3m2!1sen!2s!4v1766845100000!5m2!1sen!2s",
    population: "6.7 million",
    timezone: "Australia/Melbourne",
    tagline: "Victoria Local SEO Expert – Melbourne CBD to Regional VIC",
    description: "Your Victorian customers are searching for you right now. Are they finding you – or your competitors? I deliver comprehensive local SEO strategies tailored for the Victorian market, from Melbourne's trendy inner suburbs to the thriving regional centers of Geelong, Ballarat, and Bendigo."
  },
  qld: {
    code: "qld",
    name: "Queensland",
    fullName: "State of Queensland",
    abbreviation: "QLD",
    cities: QLD_CITIES,
    activeCities: QLD_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14512334.665493672!2d144.08879365!3d-22.57457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91579aac93d233%3A0x402a35af3deaf40!2sQueensland%2C%20Australia!5e0!3m2!1sen!2s!4v1766845200000!5m2!1sen!2s",
    population: "5.3 million",
    timezone: "Australia/Brisbane",
    tagline: "Queensland Local SEO Specialist – Brisbane to the Gold Coast and Beyond",
    description: "Stop watching competitors steal your Queensland customers. I specialize in local SEO strategies that work for the Sunshine State, from Brisbane's diverse suburbs to the tourism hubs of the Gold Coast and Sunshine Coast, and up to Cairns and Townsville in tropical North Queensland."
  },
  "wa-au": {
    code: "wa-au",
    name: "Western Australia",
    fullName: "State of Western Australia",
    abbreviation: "WA",
    cities: WA_AU_CITIES,
    activeCities: WA_AU_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15512334.665493672!2d117.79879365!3d-25.04457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2bcee977da22dc41%3A0x504f0b535df4d30!2sWestern%20Australia!5e0!3m2!1sen!2s!4v1766845300000!5m2!1sen!2s",
    population: "2.8 million",
    timezone: "Australia/Perth",
    tagline: "Western Australia Local SEO Mastery – Perth to the Pilbara",
    description: "I help WA businesses dominate local search from Perth's bustling metro to the mining regions of the Pilbara. Whether you serve Fremantle's coastal community or Kalgoorlie's mining industry, my local SEO strategies put your business where your customers are searching."
  },
  "sa-au": {
    code: "sa-au",
    name: "South Australia",
    fullName: "State of South Australia",
    abbreviation: "SA",
    cities: SA_AU_CITIES,
    activeCities: SA_AU_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12512334.665493672!2d136.20879365!3d-30.00457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab735c7c526b33f%3A0x4033654628ec640!2sSouth%20Australia!5e0!3m2!1sen!2s!4v1766845400000!5m2!1sen!2s",
    population: "1.8 million",
    timezone: "Australia/Adelaide",
    tagline: "South Australia Local SEO Expert – Adelaide and Beyond",
    description: "Every day without proper local SEO costs your South Australian business real money. I deliver tailored local search strategies for Adelaide's diverse suburbs and regional SA, ensuring your business gets found when customers are ready to buy."
  },
  tas: {
    code: "tas",
    name: "Tasmania",
    fullName: "State of Tasmania",
    abbreviation: "TAS",
    cities: TAS_CITIES,
    activeCities: TAS_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3512334.665493672!2d145.97879365!3d-41.45457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaa7a9c56aae8c3c7%3A0x5045675218ccd80!2sTasmania%2C%20Australia!5e0!3m2!1sen!2s!4v1766845500000!5m2!1sen!2s",
    population: "0.6 million",
    timezone: "Australia/Hobart",
    tagline: "Tasmania Local SEO Services – Hobart to Launceston",
    description: "Tasmania's unique market deserves a local SEO specialist who understands it. I help Tasmanian businesses from Hobart to Launceston capture local customers through strategic Google Maps optimization, AI search positioning, and targeted citation building."
  },
  act: {
    code: "act",
    name: "Australian Capital Territory",
    fullName: "Australian Capital Territory",
    abbreviation: "ACT",
    cities: ACT_CITIES,
    activeCities: ACT_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d812334.665493672!2d149.12879365!3d-35.28457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b164ca3b8f50d2d%3A0x400ea6ea7695ac0!2sAustralian%20Capital%20Territory!5e0!3m2!1sen!2s!4v1766845600000!5m2!1sen!2s",
    population: "0.5 million",
    timezone: "Australia/Sydney",
    tagline: "ACT Local SEO Expert – Canberra and Surrounds",
    description: "Canberra businesses deserve a local SEO expert who knows the ACT market. From Belconnen to Tuggeranong, I help ACT businesses rank higher in local search, capture more customers, and outperform competitors with data-driven SEO strategies."
  },
  nt: {
    code: "nt",
    name: "Northern Territory",
    fullName: "Northern Territory",
    abbreviation: "NT",
    cities: NT_CITIES,
    activeCities: NT_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13512334.665493672!2d133.77879365!3d-19.49457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b7249d5f3b5e4c1%3A0x500eef17f212490!2sNorthern%20Territory!5e0!3m2!1sen!2s!4v1766845700000!5m2!1sen!2s",
    population: "0.3 million",
    timezone: "Australia/Darwin",
    tagline: "Northern Territory Local SEO – Darwin to Alice Springs",
    description: "The Northern Territory's unique geography demands local SEO strategies built for the Top End. I help NT businesses from Darwin to Alice Springs get found by local customers, tourists, and service seekers through comprehensive local search optimization."
  }
};

// Get all Australian state codes
export const AU_STATE_CODES = Object.keys(AU_STATES);

// Check if an Australian state code is valid
export const isValidAUState = (code: string): boolean => {
  return code.toLowerCase() in AU_STATES;
};

// Get Australian state data by code
export const getAUStateData = (code: string): StateDetailData | undefined => {
  return AU_STATES[code.toLowerCase()];
};

// Check if an Australian city has an active page
export const isAUCityActive = (stateCode: string, cityCode: string): boolean => {
  const state = AU_STATES[stateCode.toLowerCase()];
  return state?.activeCities.includes(cityCode.toLowerCase()) ?? false;
};

// Check if a city code is valid for a given Australian state
export const isValidAUCity = (stateCode: string, cityCode: string): boolean => {
  const state = AU_STATES[stateCode.toLowerCase()];
  if (!state) return false;
  return state.cities.some(c => c.code === cityCode.toLowerCase());
};
