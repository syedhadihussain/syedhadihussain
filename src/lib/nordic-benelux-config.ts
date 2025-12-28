// Nordic and Benelux countries configuration - Finland, Netherlands, Sweden, Norway, Denmark, Belgium

import { StateDetailData, CityData } from "./states-config";

// FINLAND
export const FI_STATES: Record<string, StateDetailData> = {
  uusimaa: { code: "uusimaa", name: "Uusimaa", fullName: "Uusimaa", abbreviation: "UUS", cities: [{ name: "Helsinki", code: "helsinki" }, { name: "Espoo", code: "espoo" }, { name: "Vantaa", code: "vantaa" }], activeCities: ["helsinki", "espoo", "vantaa"], mapEmbed: "", population: "1.7 million", timezone: "EET", tagline: "Local SEO Services in Helsinki - Finnish Capital Search Domination", description: "Expert local SEO services across Helsinki." },
  "southwest-finland": { code: "southwest-finland", name: "Southwest Finland", fullName: "Varsinais-Suomi", abbreviation: "VAR", cities: [{ name: "Turku", code: "turku" }], activeCities: ["turku"], mapEmbed: "", population: "0.5 million", timezone: "EET", tagline: "Local SEO Services in Turku - Southwest Finland Search Excellence", description: "Premier local SEO services for Turku." },
  pirkanmaa: { code: "pirkanmaa", name: "Pirkanmaa", fullName: "Pirkanmaa", abbreviation: "PIR", cities: [{ name: "Tampere", code: "tampere" }], activeCities: ["tampere"], mapEmbed: "", population: "0.5 million", timezone: "EET", tagline: "Local SEO Services in Tampere - Pirkanmaa Search Optimization", description: "Professional local SEO for Tampere." }
};

// NETHERLANDS
export const NL_STATES: Record<string, StateDetailData> = {
  "north-holland": { code: "north-holland", name: "North Holland", fullName: "Noord-Holland", abbreviation: "NH", cities: [{ name: "Amsterdam", code: "amsterdam" }, { name: "Haarlem", code: "haarlem" }, { name: "Zaandam", code: "zaandam" }], activeCities: ["amsterdam", "haarlem", "zaandam"], mapEmbed: "", population: "2.9 million", timezone: "CET", tagline: "Local SEO Services in Amsterdam - Dutch Capital Search Domination", description: "Expert local SEO across Amsterdam." },
  "south-holland": { code: "south-holland", name: "South Holland", fullName: "Zuid-Holland", abbreviation: "ZH", cities: [{ name: "Rotterdam", code: "rotterdam" }, { name: "The Hague", code: "the-hague" }, { name: "Leiden", code: "leiden" }], activeCities: ["rotterdam", "the-hague", "leiden"], mapEmbed: "", population: "3.7 million", timezone: "CET", tagline: "Local SEO Services in Rotterdam & The Hague Search Excellence", description: "Premier local SEO for South Holland." },
  "north-brabant": { code: "north-brabant", name: "North Brabant", fullName: "Noord-Brabant", abbreviation: "NB", cities: [{ name: "Eindhoven", code: "eindhoven" }, { name: "'s-Hertogenbosch", code: "s-hertogenbosch" }], activeCities: ["eindhoven", "s-hertogenbosch"], mapEmbed: "", population: "2.6 million", timezone: "CET", tagline: "Local SEO Services in Eindhoven - Tech Hub Search Optimization", description: "Professional local SEO for North Brabant." },
  utrecht: { code: "utrecht", name: "Utrecht", fullName: "Utrecht", abbreviation: "UT", cities: [{ name: "Utrecht City", code: "utrecht-city" }], activeCities: ["utrecht-city"], mapEmbed: "", population: "1.4 million", timezone: "CET", tagline: "Local SEO Services in Utrecht - Central Netherlands Search Excellence", description: "Expert local SEO for Utrecht." }
};

// SWEDEN
export const SE_STATES: Record<string, StateDetailData> = {
  stockholm: { code: "stockholm", name: "Stockholm County", fullName: "Stockholms län", abbreviation: "AB", cities: [{ name: "Stockholm City", code: "stockholm-city" }, { name: "Solna", code: "solna" }, { name: "Södertälje", code: "sodertalje" }], activeCities: ["stockholm-city", "solna", "sodertalje"], mapEmbed: "", population: "2.4 million", timezone: "CET", tagline: "Local SEO Services in Stockholm - Swedish Capital Search Domination", description: "Expert local SEO across Stockholm." },
  "vastra-gotaland": { code: "vastra-gotaland", name: "Västra Götaland", fullName: "Västra Götalands län", abbreviation: "VG", cities: [{ name: "Gothenburg", code: "gothenburg" }], activeCities: ["gothenburg"], mapEmbed: "", population: "1.7 million", timezone: "CET", tagline: "Local SEO Services in Gothenburg - West Sweden Search Excellence", description: "Premier local SEO for Gothenburg." },
  skane: { code: "skane", name: "Skåne", fullName: "Skåne län", abbreviation: "SK", cities: [{ name: "Malmö", code: "malmo" }, { name: "Helsingborg", code: "helsingborg" }], activeCities: ["malmo", "helsingborg"], mapEmbed: "", population: "1.4 million", timezone: "CET", tagline: "Local SEO Services in Malmö - South Sweden Search Optimization", description: "Professional local SEO for Skåne." }
};

// NORWAY
export const NO_STATES: Record<string, StateDetailData> = {
  oslo: { code: "oslo", name: "Oslo", fullName: "Oslo", abbreviation: "OSL", cities: [{ name: "Oslo City", code: "oslo-city" }], activeCities: ["oslo-city"], mapEmbed: "", population: "0.7 million", timezone: "CET", tagline: "Local SEO Services in Oslo - Norwegian Capital Search Domination", description: "Expert local SEO across Oslo." },
  viken: { code: "viken", name: "Viken", fullName: "Viken", abbreviation: "VIK", cities: [{ name: "Drammen", code: "drammen" }, { name: "Fredrikstad", code: "fredrikstad" }], activeCities: ["drammen", "fredrikstad"], mapEmbed: "", population: "1.2 million", timezone: "CET", tagline: "Local SEO Services in Viken - Greater Oslo Search Excellence", description: "Premier local SEO for Viken." },
  vestland: { code: "vestland", name: "Vestland", fullName: "Vestland", abbreviation: "VES", cities: [{ name: "Bergen", code: "bergen" }], activeCities: ["bergen"], mapEmbed: "", population: "0.6 million", timezone: "CET", tagline: "Local SEO Services in Bergen - Western Norway Search Optimization", description: "Professional local SEO for Bergen." },
  rogaland: { code: "rogaland", name: "Rogaland", fullName: "Rogaland", abbreviation: "ROG", cities: [{ name: "Stavanger", code: "stavanger" }], activeCities: ["stavanger"], mapEmbed: "", population: "0.5 million", timezone: "CET", tagline: "Local SEO Services in Stavanger - Oil Capital Search Excellence", description: "Expert local SEO for Stavanger." },
  trondelag: { code: "trondelag", name: "Trøndelag", fullName: "Trøndelag", abbreviation: "TRO", cities: [{ name: "Trondheim", code: "trondheim" }], activeCities: ["trondheim"], mapEmbed: "", population: "0.5 million", timezone: "CET", tagline: "Local SEO Services in Trondheim - Central Norway Search Domination", description: "Premier local SEO for Trondheim." }
};

// DENMARK
export const DK_STATES: Record<string, StateDetailData> = {
  hovedstaden: { code: "hovedstaden", name: "Capital Region", fullName: "Region Hovedstaden", abbreviation: "HOV", cities: [{ name: "Copenhagen", code: "copenhagen" }, { name: "Frederiksberg", code: "frederiksberg" }, { name: "Hillerød", code: "hillerod" }], activeCities: ["copenhagen", "frederiksberg", "hillerod"], mapEmbed: "", population: "1.9 million", timezone: "CET", tagline: "Local SEO Services in Copenhagen - Danish Capital Search Domination", description: "Expert local SEO across Copenhagen." },
  midtjylland: { code: "midtjylland", name: "Central Denmark", fullName: "Region Midtjylland", abbreviation: "MID", cities: [{ name: "Aarhus", code: "aarhus" }], activeCities: ["aarhus"], mapEmbed: "", population: "1.3 million", timezone: "CET", tagline: "Local SEO Services in Aarhus - Central Denmark Search Excellence", description: "Premier local SEO for Aarhus." },
  syddanmark: { code: "syddanmark", name: "Southern Denmark", fullName: "Region Syddanmark", abbreviation: "SYD", cities: [{ name: "Odense", code: "odense" }, { name: "Esbjerg", code: "esbjerg" }], activeCities: ["odense", "esbjerg"], mapEmbed: "", population: "1.2 million", timezone: "CET", tagline: "Local SEO Services in Odense - Southern Denmark Search Optimization", description: "Professional local SEO for Southern Denmark." },
  nordjylland: { code: "nordjylland", name: "North Denmark", fullName: "Region Nordjylland", abbreviation: "NOR", cities: [{ name: "Aalborg", code: "aalborg" }], activeCities: ["aalborg"], mapEmbed: "", population: "0.6 million", timezone: "CET", tagline: "Local SEO Services in Aalborg - North Denmark Search Excellence", description: "Expert local SEO for Aalborg." }
};

// BELGIUM
export const BE_STATES: Record<string, StateDetailData> = {
  brussels: { code: "brussels", name: "Brussels-Capital", fullName: "Brussels-Capital Region", abbreviation: "BRU", cities: [{ name: "Brussels City", code: "brussels-city" }, { name: "Anderlecht", code: "anderlecht" }, { name: "Ixelles", code: "ixelles" }], activeCities: ["brussels-city", "anderlecht", "ixelles"], mapEmbed: "", population: "1.2 million", timezone: "CET", tagline: "Local SEO Services in Brussels - EU Capital Search Domination", description: "Expert local SEO across Brussels." },
  flanders: { code: "flanders", name: "Flanders", fullName: "Flemish Region", abbreviation: "VLG", cities: [{ name: "Antwerp", code: "antwerp" }, { name: "Ghent", code: "ghent" }, { name: "Bruges", code: "bruges" }, { name: "Leuven", code: "leuven" }], activeCities: ["antwerp", "ghent", "bruges", "leuven"], mapEmbed: "", population: "6.6 million", timezone: "CET", tagline: "Local SEO Services in Flanders - Antwerp & Ghent Search Excellence", description: "Premier local SEO for Flanders." },
  wallonia: { code: "wallonia", name: "Wallonia", fullName: "Walloon Region", abbreviation: "WAL", cities: [{ name: "Liège", code: "liege" }, { name: "Charleroi", code: "charleroi" }, { name: "Namur", code: "namur" }], activeCities: ["liege", "charleroi", "namur"], mapEmbed: "", population: "3.6 million", timezone: "CET", tagline: "Local SEO Services in Wallonia - French Belgium Search Optimization", description: "Professional local SEO for Wallonia." }
};

// JORDAN
export const JO_STATES: Record<string, StateDetailData> = {
  amman: { code: "amman", name: "Amman", fullName: "Amman Governorate", abbreviation: "AMM", cities: [{ name: "Amman City", code: "amman-city" }, { name: "Sweileh", code: "sweileh" }, { name: "Jubeiha", code: "jubeiha" }], activeCities: ["amman-city", "sweileh", "jubeiha"], mapEmbed: "", population: "4.0 million", timezone: "EET", tagline: "Local SEO Services in Amman - Jordan Capital Search Domination", description: "Expert local SEO across Amman." },
  irbid: { code: "irbid", name: "Irbid", fullName: "Irbid Governorate", abbreviation: "IRB", cities: [{ name: "Irbid City", code: "irbid-city" }], activeCities: ["irbid-city"], mapEmbed: "", population: "1.8 million", timezone: "EET", tagline: "Local SEO Services in Irbid - Northern Jordan Search Excellence", description: "Premier local SEO for Irbid." },
  zarqa: { code: "zarqa", name: "Zarqa", fullName: "Zarqa Governorate", abbreviation: "ZRQ", cities: [{ name: "Zarqa City", code: "zarqa-city" }], activeCities: ["zarqa-city"], mapEmbed: "", population: "1.4 million", timezone: "EET", tagline: "Local SEO Services in Zarqa - Industrial Hub Search Optimization", description: "Professional local SEO for Zarqa." },
  aqaba: { code: "aqaba", name: "Aqaba", fullName: "Aqaba Governorate", abbreviation: "AQB", cities: [{ name: "Aqaba City", code: "aqaba-city" }], activeCities: ["aqaba-city"], mapEmbed: "", population: "0.2 million", timezone: "EET", tagline: "Local SEO Services in Aqaba - Red Sea Tourism Search Excellence", description: "Expert local SEO for Aqaba." }
};

// SOUTH AFRICA
export const ZA_STATES: Record<string, StateDetailData> = {
  gauteng: { code: "gauteng", name: "Gauteng", fullName: "Gauteng Province", abbreviation: "GP", cities: [{ name: "Johannesburg", code: "johannesburg" }, { name: "Pretoria", code: "pretoria" }, { name: "Sandton", code: "sandton" }, { name: "Soweto", code: "soweto" }], activeCities: ["johannesburg", "pretoria", "sandton", "soweto"], mapEmbed: "", population: "15.8 million", timezone: "SAST", tagline: "Local SEO Services in Gauteng - Johannesburg & Pretoria Search Domination", description: "Expert local SEO across Gauteng." },
  "western-cape": { code: "western-cape", name: "Western Cape", fullName: "Western Cape Province", abbreviation: "WC", cities: [{ name: "Cape Town", code: "cape-town" }, { name: "Stellenbosch", code: "stellenbosch" }], activeCities: ["cape-town", "stellenbosch"], mapEmbed: "", population: "7.0 million", timezone: "SAST", tagline: "Local SEO Services in Cape Town - Mother City Search Excellence", description: "Premier local SEO for Western Cape." },
  "kwazulu-natal": { code: "kwazulu-natal", name: "KwaZulu-Natal", fullName: "KwaZulu-Natal Province", abbreviation: "KZN", cities: [{ name: "Durban", code: "durban" }, { name: "Pietermaritzburg", code: "pietermaritzburg" }], activeCities: ["durban", "pietermaritzburg"], mapEmbed: "", population: "11.5 million", timezone: "SAST", tagline: "Local SEO Services in Durban - KZN Tourism Search Optimization", description: "Professional local SEO for KwaZulu-Natal." },
  "eastern-cape": { code: "eastern-cape", name: "Eastern Cape", fullName: "Eastern Cape Province", abbreviation: "EC", cities: [{ name: "Port Elizabeth", code: "port-elizabeth" }, { name: "East London", code: "east-london" }], activeCities: ["port-elizabeth", "east-london"], mapEmbed: "", population: "6.7 million", timezone: "SAST", tagline: "Local SEO Services in Eastern Cape - Nelson Mandela Bay Search Excellence", description: "Expert local SEO for Eastern Cape." }
};

export const FI_STATE_CODES = Object.keys(FI_STATES);
export const NL_STATE_CODES = Object.keys(NL_STATES);
export const SE_STATE_CODES = Object.keys(SE_STATES);
export const NO_STATE_CODES = Object.keys(NO_STATES);
export const DK_STATE_CODES = Object.keys(DK_STATES);
export const BE_STATE_CODES = Object.keys(BE_STATES);
export const JO_STATE_CODES = Object.keys(JO_STATES);
export const ZA_STATE_CODES = Object.keys(ZA_STATES);
