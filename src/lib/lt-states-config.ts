// Lithuania Counties (Apskritys) and Cities configuration
// Structure: Country → Counties (10) → Cities

import { StateDetailData, CityData } from "./states-config";

// Vilnius County Cities
export const VILNIUS_COUNTY_CITIES: CityData[] = [
  { name: "Vilnius", code: "vilnius" },
  { name: "Salcininkai", code: "salcininkai" },
  { name: "Svencionys", code: "svencionys" },
  { name: "Trakai", code: "trakai" },
  { name: "Ukmerge", code: "ukmerge" }
];

// Kaunas County Cities
export const KAUNAS_COUNTY_CITIES: CityData[] = [
  { name: "Kaunas", code: "kaunas" },
  { name: "Jonava", code: "jonava" },
  { name: "Kedainiai", code: "kedainiai" },
  { name: "Prienai", code: "prienai" },
  { name: "Raseiniai", code: "raseiniai" }
];

// Klaipeda County Cities
export const KLAIPEDA_COUNTY_CITIES: CityData[] = [
  { name: "Klaipeda", code: "klaipeda" },
  { name: "Palanga", code: "palanga" },
  { name: "Kretinga", code: "kretinga" },
  { name: "Silute", code: "silute" },
  { name: "Neringa", code: "neringa" }
];

// Siauliai County Cities
export const SIAULIAI_COUNTY_CITIES: CityData[] = [
  { name: "Siauliai", code: "siauliai" },
  { name: "Radviliskis", code: "radviliskis" },
  { name: "Kursenai", code: "kursenai" },
  { name: "Joniskis", code: "joniskis" },
  { name: "Pakruojis", code: "pakruojis" }
];

// Panevezys County Cities
export const PANEVEZYS_COUNTY_CITIES: CityData[] = [
  { name: "Panevezys", code: "panevezys" },
  { name: "Birzai", code: "birzai" },
  { name: "Rokiskis", code: "rokiskis" },
  { name: "Kupiskis", code: "kupiskis" },
  { name: "Pasvalys", code: "pasvalys" }
];

// Alytus County Cities
export const ALYTUS_COUNTY_CITIES: CityData[] = [
  { name: "Alytus", code: "alytus" },
  { name: "Druskininkai", code: "druskininkai" },
  { name: "Lazdijai", code: "lazdijai" },
  { name: "Varena", code: "varena" }
];

// Marijampole County Cities
export const MARIJAMPOLE_COUNTY_CITIES: CityData[] = [
  { name: "Marijampole", code: "marijampole" },
  { name: "Vilkaviskis", code: "vilkaviskis" },
  { name: "Sakiai", code: "sakiai" },
  { name: "Kazlu Ruda", code: "kazlu-ruda" }
];

// Telsiai County Cities
export const TELSIAI_COUNTY_CITIES: CityData[] = [
  { name: "Telsiai", code: "telsiai" },
  { name: "Mazeikiai", code: "mazeikiai" },
  { name: "Plunge", code: "plunge" },
  { name: "Rietavas", code: "rietavas" }
];

// Taurage County Cities
export const TAURAGE_COUNTY_CITIES: CityData[] = [
  { name: "Taurage", code: "taurage" },
  { name: "Silale", code: "silale" },
  { name: "Jurbarkas", code: "jurbarkas" },
  { name: "Pagegiai", code: "pagegiai" }
];

// Utena County Cities
export const UTENA_COUNTY_CITIES: CityData[] = [
  { name: "Utena", code: "utena" },
  { name: "Visaginas", code: "visaginas" },
  { name: "Zarasai", code: "zarasai" },
  { name: "Anyksciai", code: "anyksciai" },
  { name: "Moletai", code: "moletai" }
];

// Lithuania Counties Configuration
export const LT_STATES: Record<string, StateDetailData> = {
  "vilnius-county": {
    code: "vilnius-county",
    name: "Vilnius County",
    fullName: "Vilniaus Apskritis",
    abbreviation: "VL",
    cities: VILNIUS_COUNTY_CITIES,
    activeCities: VILNIUS_COUNTY_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577847.1!2d24.9!3d54.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd93fb5c6408f5%3A0x400d18c70e9dc40!2sVilnius%2C%20Lithuania!5e0!3m2!1sen!2s",
    population: "810,000",
    timezone: "Europe/Vilnius",
    tagline: "Vilnius County Local SEO Expert - Capital Region Business Domination",
    description: "Establish digital dominance in Lithuania's capital region with specialized local SEO services for Vilnius County. As the economic, cultural, and political heart of Lithuania, Vilnius County hosts the nation's largest concentration of businesses, startups, tech companies, and international corporations. My comprehensive local search optimization strategies help businesses in Vilnius, Trakai, and surrounding municipalities capture the attention of over 800,000 potential customers. From Old Town boutiques to Seskine shopping centers, from Naujamiestis restaurants to corporate services in the CBD, I ensure your business ranks prominently when customers search locally."
  },
  "kaunas-county": {
    code: "kaunas-county",
    name: "Kaunas County",
    fullName: "Kauno Apskritis",
    abbreviation: "KA",
    cities: KAUNAS_COUNTY_CITIES,
    activeCities: KAUNAS_COUNTY_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577847.1!2d23.9!3d54.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e722294d2da4a1%3A0x400d18c70e9dd40!2sKaunas%2C%20Lithuania!5e0!3m2!1sen!2s",
    population: "540,000",
    timezone: "Europe/Vilnius",
    tagline: "Kaunas County SEO Specialist - Second City Business Growth Partner",
    description: "Accelerate your business growth in Lithuania's second-largest city region with expert local SEO services tailored for Kaunas County. Home to a thriving industrial base, prestigious universities, and a rapidly growing tech sector, Kaunas County represents one of the Baltic region's most dynamic markets. My proven local search strategies help businesses in Kaunas, Jonava, Kedainiai, and beyond capture market share from customers actively searching for products and services. Whether you operate in the historic Old Town, the modern Zaliakalnis district, or the industrial zones, I position your business to succeed in local search."
  },
  "klaipeda-county": {
    code: "klaipeda-county",
    name: "Klaipeda County",
    fullName: "Klaipedos Apskritis",
    abbreviation: "KL",
    cities: KLAIPEDA_COUNTY_CITIES,
    activeCities: KLAIPEDA_COUNTY_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577847.1!2d21.1!3d55.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e4db755a5d6fc1%3A0x400d18c70e9de40!2sKlaipeda%2C%20Lithuania!5e0!3m2!1sen!2s",
    population: "320,000",
    timezone: "Europe/Vilnius",
    tagline: "Klaipeda County Local SEO - Baltic Seaport Business Visibility Expert",
    description: "Capture the maritime and tourism markets with specialized local SEO services for Lithuania's coastal gateway. Klaipeda County combines major port operations, thriving tourism in Palanga and Neringa, and a diverse business ecosystem serving both locals and international visitors. My strategic approach to local search optimization helps port service providers, hotels, restaurants, tour operators, and retail businesses achieve top Google Maps rankings and organic visibility. From the historic Klaipeda Old Town to the pristine beaches of the Curonian Spit, I ensure your business attracts customers searching for coastal Lithuania experiences and services."
  },
  "siauliai-county": {
    code: "siauliai-county",
    name: "Siauliai County",
    fullName: "Siauliu Apskritis",
    abbreviation: "SI",
    cities: SIAULIAI_COUNTY_CITIES,
    activeCities: SIAULIAI_COUNTY_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577847.1!2d23.3!3d55.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e5e25a4c6bd5a3%3A0x400d18c70e9df40!2sSiauliai%2C%20Lithuania!5e0!3m2!1sen!2s",
    population: "270,000",
    timezone: "Europe/Vilnius",
    tagline: "Siauliai County SEO Services - Northern Lithuania Business Optimizer",
    description: "Dominate local search in Northern Lithuania with expert SEO strategies designed for Siauliai County's diverse business landscape. Known for the world-famous Hill of Crosses and a strong industrial heritage, Siauliai County offers opportunities for businesses serving pilgrims, tourists, and the substantial local population. My tailored local search optimization helps manufacturers, retailers, hospitality providers, and service businesses achieve prominent visibility when customers search. From bicycle manufacturing companies to cultural tourism operators, I help Siauliai County businesses connect with their target audiences through strategic Google Maps and organic search optimization."
  },
  "panevezys-county": {
    code: "panevezys-county",
    name: "Panevezys County",
    fullName: "Panevezio Apskritis",
    abbreviation: "PA",
    cities: PANEVEZYS_COUNTY_CITIES,
    activeCities: PANEVEZYS_COUNTY_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577847.1!2d24.3!3d55.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e61f4c5c0f6f41%3A0x400d18c70e9de40!2sPanevezys%2C%20Lithuania!5e0!3m2!1sen!2s",
    population: "230,000",
    timezone: "Europe/Vilnius",
    tagline: "Panevezys County Local SEO Expert - Central Lithuania Business Catalyst",
    description: "Fuel your business growth in Central Lithuania with precision local SEO services for Panevezys County. Strategically positioned between Vilnius and Riga, Panevezys County hosts logistics companies, manufacturers, and service businesses capitalizing on this advantageous location. My comprehensive local search strategies help businesses in Panevezys, Birzai, Rokiskis, and surrounding areas capture customers searching for industrial services, retail options, and local expertise. With deep understanding of the regional market dynamics, I position your business to succeed against both local competitors and national chains seeking market share in this vital corridor."
  },
  "alytus-county": {
    code: "alytus-county",
    name: "Alytus County",
    fullName: "Alytaus Apskritis",
    abbreviation: "AL",
    cities: ALYTUS_COUNTY_CITIES,
    activeCities: ALYTUS_COUNTY_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577847.1!2d24.0!3d54.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e0a5f1f5a5d5a1%3A0x400d18c70e9dc40!2sAlytus%2C%20Lithuania!5e0!3m2!1sen!2s",
    population: "140,000",
    timezone: "Europe/Vilnius",
    tagline: "Alytus County SEO Specialist - Southern Lithuania Tourism Hub Optimizer",
    description: "Unlock the tourism and wellness market potential with specialized local SEO services for Alytus County. Featuring the renowned spa resort of Druskininkai and extensive nature reserves, this southern county attracts health-conscious travelers, eco-tourists, and weekend visitors from across Lithuania and neighboring countries. My strategic local search optimization helps hotels, spa facilities, restaurants, outdoor activity providers, and retail businesses achieve prominent visibility. From Druskininkai's luxury wellness centers to Alytus city's urban services, I ensure your business captures the attention of customers actively searching for southern Lithuania experiences."
  },
  "marijampole-county": {
    code: "marijampole-county",
    name: "Marijampole County",
    fullName: "Marijampoles Apskritis",
    abbreviation: "MR",
    cities: MARIJAMPOLE_COUNTY_CITIES,
    activeCities: MARIJAMPOLE_COUNTY_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577847.1!2d23.3!3d54.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e09a5f1f5a5d5a1%3A0x400d18c70e9dc40!2sMarijampole%2C%20Lithuania!5e0!3m2!1sen!2s",
    population: "150,000",
    timezone: "Europe/Vilnius",
    tagline: "Marijampole County Local SEO - Suvalkija Region Business Growth Expert",
    description: "Expand your market reach in the fertile Suvalkija region with expert local SEO services for Marijampole County. Known for agricultural excellence and proximity to the Polish border, this county serves businesses engaged in cross-border trade, food production, and regional services. My tailored local search strategies help enterprises in Marijampole, Vilkaviskis, and surrounding municipalities achieve dominant positions in Google Maps and organic search results. Whether you operate a manufacturing facility, retail store, or professional service, I ensure your business connects with customers searching for trusted local providers in southwestern Lithuania."
  },
  "telsiai-county": {
    code: "telsiai-county",
    name: "Telsiai County",
    fullName: "Telsiu Apskritis",
    abbreviation: "TE",
    cities: TELSIAI_COUNTY_CITIES,
    activeCities: TELSIAI_COUNTY_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577847.1!2d22.2!3d55.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e5c1f1f5a5d5a1%3A0x400d18c70e9dc40!2sTelsiai%2C%20Lithuania!5e0!3m2!1sen!2s",
    population: "140,000",
    timezone: "Europe/Vilnius",
    tagline: "Telsiai County SEO Services - Samogitia Heritage Region Visibility Specialist",
    description: "Establish commanding digital presence in the culturally rich Samogitia region with specialized local SEO services for Telsiai County. This northwestern county preserves unique Samogitian traditions while hosting modern industries and tourism attractions including the famous Lake Mastis. My comprehensive local search optimization helps businesses in Telsiai, Mazeikiai, Plunge, and beyond achieve visibility with both local residents and cultural tourists. From traditional craft businesses to industrial suppliers, I position your enterprise prominently in search results when customers seek authentic Samogitian products, services, and experiences."
  },
  "taurage-county": {
    code: "taurage-county",
    name: "Taurage County",
    fullName: "Taurages Apskritis",
    abbreviation: "TA",
    cities: TAURAGE_COUNTY_CITIES,
    activeCities: TAURAGE_COUNTY_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577847.1!2d22.3!3d55.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e5b1f1f5a5d5a1%3A0x400d18c70e9dc40!2sTaurage%2C%20Lithuania!5e0!3m2!1sen!2s",
    population: "100,000",
    timezone: "Europe/Vilnius",
    tagline: "Taurage County Local SEO Expert - Western Border Region Business Optimizer",
    description: "Capitalize on cross-border opportunities with expert local SEO services tailored for Taurage County. Positioned along the Nemunas River and bordering Kaliningrad, this county serves businesses engaged in international trade, logistics, and regional services. My strategic local search optimization helps enterprises in Taurage, Jurbarkas, and surrounding areas capture customers from both sides of the border. Whether you provide cross-border logistics, hospitality services, or local retail, I ensure your business achieves prominent visibility when potential customers search for services in this strategically positioned region of western Lithuania."
  },
  "utena-county": {
    code: "utena-county",
    name: "Utena County",
    fullName: "Utenos Apskritis",
    abbreviation: "UT",
    cities: UTENA_COUNTY_CITIES,
    activeCities: UTENA_COUNTY_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577847.1!2d25.6!3d55.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e6c1f1f5a5d5a1%3A0x400d18c70e9dc40!2sUtena%2C%20Lithuania!5e0!3m2!1sen!2s",
    population: "140,000",
    timezone: "Europe/Vilnius",
    tagline: "Utena County SEO Specialist - Aukstaitija Lakeland Tourism Optimizer",
    description: "Attract nature lovers and lake enthusiasts with specialized local SEO services for Lithuania's beautiful Aukstaitija region. Utena County features hundreds of lakes, the Aukstaitija National Park, and charming towns like Anyksciai and Zarasai that draw tourists year-round. My tailored local search strategies help hospitality providers, outdoor activity companies, and local businesses achieve top visibility when travelers search for lakeland experiences. From boutique guesthouses to water sports operators, from local restaurants to souvenir shops, I position your business prominently in search results, capturing the growing domestic and international tourism market in northeastern Lithuania."
  }
};

// Get all Lithuania county codes
export const LT_STATE_CODES = Object.keys(LT_STATES);

// Check if a Lithuania county code is valid
export const isValidLTState = (code: string): boolean => {
  return code.toLowerCase() in LT_STATES;
};

// Get Lithuania county data by code
export const getLTStateData = (code: string): StateDetailData | undefined => {
  return LT_STATES[code.toLowerCase()];
};

// Check if a city code is valid for a given Lithuania county
export const isValidLTCity = (stateCode: string, cityCode: string): boolean => {
  const state = LT_STATES[stateCode.toLowerCase()];
  if (!state) return false;
  return state.cities.some(c => c.code === cityCode.toLowerCase());
};

// Check if a Lithuania city has an active page
export const isLTCityActive = (stateCode: string, cityCode: string): boolean => {
  const state = LT_STATES[stateCode.toLowerCase()];
  return state?.activeCities.includes(cityCode.toLowerCase()) ?? false;
};
