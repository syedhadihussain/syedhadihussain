// Country configuration for scalable country pages
// Add new countries here - no layout coding required

export interface StateData {
  name: string;
  code: string;
  coords: [number, number];
}

export interface CountryData {
  code: string;           // ISO 3166-1 alpha-2 (lowercase for URLs)
  name: string;           // English name
  localName: string;      // Native name if different
  flag: string;           // Emoji flag
  states?: StateData[];   // States/provinces with codes for linking
  statesCount?: number;   // Total states/regions count
  mapCenter: [number, number]; // [lat, lng] for map center
  mapZoom: number;        // Initial zoom level
  mapEmbed?: string;      // Google Maps embed iframe URL
  currency: string;       // Currency code
  timezone: string;       // Primary timezone
  phoneCode: string;      // Country phone code
  seoKeywords: string[];  // Country-specific SEO keywords
}

// US States with their codes and coordinates - only states with active pages are linked
export const US_STATES: StateData[] = [
  { name: "Florida", code: "fl", coords: [27.994402, -81.760254] },
  { name: "Texas", code: "tx", coords: [31.000000, -100.000000] },
  { name: "New York", code: "ny", coords: [43.000000, -75.000000] },
  { name: "Washington", code: "wa", coords: [47.751076, -120.740135] },
  { name: "California", code: "ca", coords: [36.778259, -119.417931] },
  { name: "Arizona", code: "az", coords: [34.048927, -111.093735] },
  { name: "Georgia", code: "ga", coords: [33.247875, -83.441162] },
  { name: "North Carolina", code: "nc", coords: [35.782169, -80.793457] },
  { name: "Ohio", code: "oh", coords: [40.367474, -82.996216] },
  { name: "Pennsylvania", code: "pa", coords: [41.203323, -77.194527] },
  { name: "Illinois", code: "il", coords: [40.000000, -89.000000] },
  { name: "New Jersey", code: "nj", coords: [39.833851, -74.871826] },
  { name: "Michigan", code: "mi", coords: [44.182205, -84.506836] },
  { name: "Colorado", code: "co", coords: [39.113014, -105.358887] },
  { name: "Tennessee", code: "tn", coords: [35.860119, -86.660156] },
  { name: "Virginia", code: "va", coords: [37.926868, -78.024902] },
  { name: "Indiana", code: "in", coords: [40.273502, -86.126976] },
  { name: "Kansas", code: "ks", coords: [38.500000, -98.000000] },
  { name: "District of Columbia", code: "dc", coords: [38.907192, -77.036873] },
  { name: "Oregon", code: "or", coords: [44.000000, -120.500000] },
  { name: "Alabama", code: "al", coords: [32.806671, -86.791130] },
  { name: "Alaska", code: "ak", coords: [61.370716, -152.404419] },
  { name: "Arkansas", code: "ar", coords: [34.969704, -92.373123] },
  { name: "Connecticut", code: "ct", coords: [41.603221, -73.087749] },
  { name: "Delaware", code: "de", coords: [38.910832, -75.527670] },
  { name: "Hawaii", code: "hi", coords: [19.896766, -155.582782] },
  { name: "Idaho", code: "id", coords: [44.068202, -114.742041] },
  { name: "Iowa", code: "ia", coords: [41.878003, -93.097702] },
  { name: "Kentucky", code: "ky", coords: [37.839333, -84.270018] },
  { name: "Louisiana", code: "la", coords: [30.984298, -91.962333] },
  { name: "Maine", code: "me", coords: [45.253783, -69.445469] },
  { name: "Maryland", code: "md", coords: [39.045755, -76.641271] },
  { name: "Massachusetts", code: "ma", coords: [42.407211, -71.382437] },
  { name: "Minnesota", code: "mn", coords: [46.729553, -94.685900] },
  { name: "Mississippi", code: "ms", coords: [32.354668, -89.398528] },
  { name: "Missouri", code: "mo", coords: [37.964253, -91.831833] },
  { name: "Montana", code: "mt", coords: [46.879682, -110.362566] },
  { name: "Nebraska", code: "ne", coords: [41.492537, -99.901813] },
  { name: "Nevada", code: "nv", coords: [38.802610, -116.419389] },
  { name: "New Hampshire", code: "nh", coords: [43.193852, -71.572395] },
  { name: "New Mexico", code: "nm", coords: [34.519940, -105.870090] },
  { name: "North Dakota", code: "nd", coords: [47.551493, -101.002012] },
  { name: "Oklahoma", code: "ok", coords: [35.007752, -97.092877] },
  { name: "Rhode Island", code: "ri", coords: [41.580095, -71.477429] },
  { name: "South Carolina", code: "sc", coords: [33.836081, -81.163725] },
  { name: "South Dakota", code: "sd", coords: [43.969515, -99.901813] },
  { name: "Utah", code: "ut", coords: [39.320980, -111.093731] },
  { name: "Vermont", code: "vt", coords: [44.558803, -72.577841] },
  { name: "West Virginia", code: "wv", coords: [38.597626, -80.454903] },
  { name: "Wisconsin", code: "wi", coords: [43.784440, -88.787868] },
  { name: "Wyoming", code: "wy", coords: [43.075968, -107.290284] }
];

// All US states for display (without links) - states not in US_STATES above
export const ALL_US_STATES: string[] = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", 
  "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", 
  "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", 
  "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", 
  "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", 
  "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", 
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", 
  "West Virginia", "Wisconsin", "Wyoming"
];

// Active state codes for linking
export const ACTIVE_STATE_CODES = US_STATES.map(s => s.code);

// Canadian Provinces
export const CANADA_PROVINCES: StateData[] = [
  { name: "Ontario", code: "on", coords: [51.2538, -85.3232] },
  { name: "Quebec", code: "qc", coords: [52.9399, -73.5491] },
  { name: "British Columbia", code: "bc", coords: [53.7267, -127.6476] },
  { name: "Alberta", code: "ab", coords: [53.9333, -116.5765] },
  { name: "Manitoba", code: "mb", coords: [53.7609, -98.8139] },
  { name: "Saskatchewan", code: "sk", coords: [52.9399, -106.4509] },
  { name: "Nova Scotia", code: "ns", coords: [44.6820, -63.7443] },
  { name: "New Brunswick", code: "nb", coords: [46.5653, -66.4619] },
  { name: "Newfoundland", code: "nl", coords: [53.1355, -57.6604] },
  { name: "Prince Edward Island", code: "pe", coords: [46.5107, -63.4168] }
];

export const ALL_CANADA_PROVINCES: string[] = [
  "Ontario", "Quebec", "British Columbia", "Alberta", "Manitoba", 
  "Saskatchewan", "Nova Scotia", "New Brunswick", "Newfoundland and Labrador", 
  "Prince Edward Island", "Northwest Territories", "Yukon", "Nunavut"
];

// Australian States
export const AUSTRALIA_STATES: StateData[] = [
  { name: "New South Wales", code: "nsw", coords: [-31.2532, 146.9211] },
  { name: "Victoria", code: "vic", coords: [-36.9848, 143.3906] },
  { name: "Queensland", code: "qld", coords: [-22.5751, 144.0848] },
  { name: "Western Australia", code: "wa-au", coords: [-25.0428, 117.7930] },
  { name: "South Australia", code: "sa-au", coords: [-30.0002, 136.2092] },
  { name: "Tasmania", code: "tas", coords: [-41.4545, 145.9707] },
  { name: "Australian Capital Territory", code: "act", coords: [-35.2809, 149.1300] },
  { name: "Northern Territory", code: "nt", coords: [-19.4914, 132.5510] }
];

export const ALL_AUSTRALIA_STATES: string[] = [
  "New South Wales", "Victoria", "Queensland", "Western Australia", 
  "South Australia", "Tasmania", "Northern Territory", "Australian Capital Territory"
];

// German States (Bundesländer)
export const GERMANY_STATES: StateData[] = [
  { name: "Bavaria", code: "by", coords: [48.7904, 11.4979] },
  { name: "Baden-Württemberg", code: "bw", coords: [48.6616, 9.3501] },
  { name: "North Rhine-Westphalia", code: "nw", coords: [51.4332, 7.6616] },
  { name: "Hesse", code: "he", coords: [50.6521, 9.1624] },
  { name: "Berlin", code: "be", coords: [52.5200, 13.4050] },
  { name: "Hamburg", code: "hh", coords: [53.5511, 9.9937] }
];

export const ALL_GERMANY_STATES: string[] = [
  "Bavaria", "Baden-Württemberg", "North Rhine-Westphalia", "Hesse", 
  "Lower Saxony", "Saxony", "Rhineland-Palatinate", "Berlin", "Schleswig-Holstein",
  "Brandenburg", "Saxony-Anhalt", "Thuringia", "Hamburg", "Mecklenburg-Vorpommern",
  "Saarland", "Bremen"
];

// UK Regions (4 constituent countries)
export const UK_REGIONS: StateData[] = [
  { name: "England", code: "england", coords: [52.5310, -1.2650] },
  { name: "Scotland", code: "scotland", coords: [56.4907, -4.2026] },
  { name: "Wales", code: "wales", coords: [52.1307, -3.7837] },
  { name: "Northern Ireland", code: "northern-ireland", coords: [54.7877, -6.4923] }
];

export const ALL_UK_REGIONS: string[] = [
  "England", "Scotland", "Wales", "Northern Ireland"
];

// UAE Emirates
export const UAE_EMIRATES: StateData[] = [
  { name: "Dubai", code: "dxb", coords: [25.2048, 55.2708] },
  { name: "Abu Dhabi", code: "auh", coords: [24.4539, 54.3773] },
  { name: "Sharjah", code: "shj", coords: [25.3463, 55.4209] },
  { name: "Ajman", code: "ajm", coords: [25.4052, 55.5136] },
  { name: "Ras Al Khaimah", code: "rak", coords: [25.7895, 55.9432] },
  { name: "Fujairah", code: "fuj", coords: [25.1288, 56.3265] },
  { name: "Umm Al Quwain", code: "uaq", coords: [25.5647, 55.5532] }
];

export const ALL_UAE_EMIRATES: string[] = [
  "Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"
];

// Mexican States
export const MEXICO_STATES: StateData[] = [
  { name: "Mexico City", code: "cdmx", coords: [19.4326, -99.1332] },
  { name: "Jalisco", code: "jal", coords: [20.6595, -103.3494] },
  { name: "Nuevo León", code: "nl", coords: [25.5922, -99.9962] },
  { name: "Quintana Roo", code: "qr", coords: [19.1817, -88.4791] },
  { name: "Yucatán", code: "yuc", coords: [20.7099, -89.0943] },
  { name: "Baja California", code: "bc", coords: [30.8406, -115.2838] }
];

export const ALL_MEXICO_STATES: string[] = [
  "Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas",
  "Chihuahua", "Coahuila", "Colima", "Durango", "Guanajuato", "Guerrero", "Hidalgo",
  "Jalisco", "Mexico City", "Mexico State", "Michoacán", "Morelos", "Nayarit",
  "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí",
  "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"
];

// Malaysian States
export const MALAYSIA_STATES: StateData[] = [
  { name: "Kuala Lumpur", code: "kl", coords: [3.1390, 101.6869] },
  { name: "Selangor", code: "sel", coords: [3.0738, 101.5183] },
  { name: "Penang", code: "png", coords: [5.4141, 100.3288] },
  { name: "Johor", code: "jhr", coords: [1.4854, 103.7618] },
  { name: "Sabah", code: "sbh", coords: [5.9788, 116.0753] },
  { name: "Sarawak", code: "swk", coords: [1.5533, 110.3592] }
];

export const ALL_MALAYSIA_STATES: string[] = [
  "Johor", "Kedah", "Kelantan", "Kuala Lumpur", "Labuan", "Melaka", "Negeri Sembilan",
  "Pahang", "Penang", "Perak", "Perlis", "Putrajaya", "Sabah", "Sarawak", "Selangor", "Terengganu"
];

// Italian Regions
export const ITALY_REGIONS: StateData[] = [
  { name: "Lombardy", code: "lom", coords: [45.4791, 9.8452] },
  { name: "Lazio", code: "laz", coords: [41.8919, 12.5113] },
  { name: "Veneto", code: "ven", coords: [45.4414, 12.3155] },
  { name: "Tuscany", code: "tos", coords: [43.7711, 11.2486] },
  { name: "Sicily", code: "sic", coords: [37.5999, 14.0154] },
  { name: "Piedmont", code: "pie", coords: [45.0703, 7.6869] }
];

export const ALL_ITALY_REGIONS: string[] = [
  "Abruzzo", "Basilicata", "Calabria", "Campania", "Emilia-Romagna", 
  "Friuli Venezia Giulia", "Lazio", "Liguria", "Lombardy", "Marche",
  "Molise", "Piedmont", "Apulia", "Sardinia", "Sicily", "Trentino-Alto Adige",
  "Tuscany", "Umbria", "Aosta Valley", "Veneto"
];

// New Zealand Regions
export const NZ_REGIONS: StateData[] = [
  { name: "Auckland", code: "akl", coords: [-36.8509, 174.7645] },
  { name: "Wellington", code: "wgn", coords: [-41.2924, 174.7787] },
  { name: "Canterbury", code: "can", coords: [-43.5321, 172.6362] },
  { name: "Waikato", code: "wko", coords: [-37.7870, 175.2793] },
  { name: "Bay of Plenty", code: "bop", coords: [-37.6878, 176.1651] },
  { name: "Otago", code: "ota", coords: [-45.0312, 170.5002] }
];

export const ALL_NZ_REGIONS: string[] = [
  "Auckland", "Bay of Plenty", "Canterbury", "Gisborne", "Hawke's Bay",
  "Manawatū-Whanganui", "Marlborough", "Nelson", "Northland", "Otago",
  "Southland", "Taranaki", "Tasman", "Waikato", "Wellington", "West Coast"
];

// Brazilian States
export const BRAZIL_STATES: StateData[] = [
  { name: "São Paulo", code: "sp", coords: [-23.5558, -46.6396] },
  { name: "Rio de Janeiro", code: "rj", coords: [-22.9068, -43.1729] },
  { name: "Minas Gerais", code: "mg", coords: [-19.9167, -43.9345] },
  { name: "Bahia", code: "ba", coords: [-12.9777, -38.5016] },
  { name: "Paraná", code: "pr", coords: [-25.4290, -49.2671] },
  { name: "Rio Grande do Sul", code: "rs", coords: [-30.0346, -51.2177] }
];

export const ALL_BRAZIL_STATES: string[] = [
  "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal",
  "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul",
  "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí",
  "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia",
  "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"
];

// Irish Provinces
export const IRELAND_PROVINCES: StateData[] = [
  { name: "Dublin", code: "dub", coords: [53.3498, -6.2603] },
  { name: "Cork", code: "crk", coords: [51.8985, -8.4756] },
  { name: "Galway", code: "gwy", coords: [53.2707, -9.0568] },
  { name: "Limerick", code: "lmk", coords: [52.6638, -8.6267] },
  { name: "Waterford", code: "wfd", coords: [52.2593, -7.1101] },
  { name: "Belfast", code: "bft", coords: [54.5973, -5.9301] }
];

export const ALL_IRELAND_PROVINCES: string[] = [
  "Carlow", "Cavan", "Clare", "Cork", "Donegal", "Dublin", "Galway", "Kerry",
  "Kildare", "Kilkenny", "Laois", "Leitrim", "Limerick", "Longford", "Louth",
  "Mayo", "Meath", "Monaghan", "Offaly", "Roscommon", "Sligo", "Tipperary",
  "Waterford", "Westmeath", "Wexford", "Wicklow"
];

// Singapore Regions
export const SINGAPORE_REGIONS: StateData[] = [
  { name: "Central Region", code: "cen", coords: [1.2903, 103.8520] },
  { name: "East Region", code: "est", coords: [1.3521, 103.9198] },
  { name: "North Region", code: "nth", coords: [1.4172, 103.8337] },
  { name: "North-East Region", code: "ne", coords: [1.3689, 103.8884] },
  { name: "West Region", code: "wst", coords: [1.3162, 103.7649] }
];

export const ALL_SINGAPORE_REGIONS: string[] = [
  "Central Region", "East Region", "North Region", "North-East Region", "West Region"
];

// South African Provinces
export const SA_PROVINCES: StateData[] = [
  { name: "Gauteng", code: "gp", coords: [-26.2708, 28.1123] },
  { name: "Western Cape", code: "wc", coords: [-33.9249, 18.4241] },
  { name: "KwaZulu-Natal", code: "kzn", coords: [-29.8587, 31.0218] },
  { name: "Eastern Cape", code: "ec", coords: [-33.9608, 25.6022] },
  { name: "Free State", code: "fs", coords: [-29.0852, 26.1596] },
  { name: "Limpopo", code: "lp", coords: [-23.4013, 29.4179] }
];

export const ALL_SA_PROVINCES: string[] = [
  "Eastern Cape", "Free State", "Gauteng", "KwaZulu-Natal", "Limpopo",
  "Mpumalanga", "North West", "Northern Cape", "Western Cape"
];

// Netherlands Provinces
export const NETHERLANDS_PROVINCES: StateData[] = [
  { name: "North Holland", code: "nh", coords: [52.5206, 4.7885] },
  { name: "South Holland", code: "zh", coords: [51.9851, 4.4908] },
  { name: "Utrecht", code: "ut", coords: [52.0907, 5.1214] },
  { name: "North Brabant", code: "nb", coords: [51.4826, 5.2321] },
  { name: "Gelderland", code: "ge", coords: [52.0453, 5.8718] },
  { name: "Limburg", code: "li", coords: [51.4427, 6.0608] }
];

export const ALL_NETHERLANDS_PROVINCES: string[] = [
  "Drenthe", "Flevoland", "Friesland", "Gelderland", "Groningen", "Limburg",
  "North Brabant", "North Holland", "Overijssel", "South Holland", "Utrecht", "Zeeland"
];

// French Regions
export const FRANCE_REGIONS: StateData[] = [
  { name: "Île-de-France", code: "idf", coords: [48.8566, 2.3522] },
  { name: "Provence-Alpes-Côte d'Azur", code: "pac", coords: [43.9352, 6.0679] },
  { name: "Auvergne-Rhône-Alpes", code: "ara", coords: [45.4473, 4.3859] },
  { name: "Nouvelle-Aquitaine", code: "naq", coords: [45.7074, 0.3190] },
  { name: "Occitanie", code: "occ", coords: [43.8927, 3.2828] },
  { name: "Bretagne", code: "bre", coords: [48.2020, -2.9326] }
];

export const ALL_FRANCE_REGIONS: string[] = [
  "Auvergne-Rhône-Alpes", "Bourgogne-Franche-Comté", "Bretagne", "Centre-Val de Loire",
  "Corse", "Grand Est", "Hauts-de-France", "Île-de-France", "Normandy",
  "Nouvelle-Aquitaine", "Occitanie", "Pays de la Loire", "Provence-Alpes-Côte d'Azur"
];

// Spanish Regions
export const SPAIN_REGIONS: StateData[] = [
  { name: "Madrid", code: "mad", coords: [40.4168, -3.7038] },
  { name: "Catalonia", code: "cat", coords: [41.5912, 1.5209] },
  { name: "Andalusia", code: "and", coords: [37.5443, -4.7278] },
  { name: "Valencia", code: "val", coords: [39.4699, -0.3763] },
  { name: "Basque Country", code: "pv", coords: [42.9896, -2.6189] },
  { name: "Galicia", code: "ga", coords: [42.5751, -8.1339] }
];

export const ALL_SPAIN_REGIONS: string[] = [
  "Andalusia", "Aragon", "Asturias", "Balearic Islands", "Basque Country",
  "Canary Islands", "Cantabria", "Castile and León", "Castile-La Mancha",
  "Catalonia", "Extremadura", "Galicia", "La Rioja", "Madrid", "Murcia",
  "Navarre", "Valencia"
];

// Swedish Regions
export const SWEDEN_REGIONS: StateData[] = [
  { name: "Stockholm", code: "stk", coords: [59.3293, 18.0686] },
  { name: "Gothenburg", code: "got", coords: [57.7089, 11.9746] },
  { name: "Malmö", code: "mal", coords: [55.6050, 13.0038] },
  { name: "Uppsala", code: "upp", coords: [59.8586, 17.6389] },
  { name: "Västra Götaland", code: "vg", coords: [58.2528, 12.7718] },
  { name: "Skåne", code: "ska", coords: [55.9903, 13.5958] }
];

export const ALL_SWEDEN_REGIONS: string[] = [
  "Blekinge", "Dalarna", "Gävleborg", "Gotland", "Halland", "Jämtland",
  "Jönköping", "Kalmar", "Kronoberg", "Norrbotten", "Örebro", "Östergötland",
  "Skåne", "Södermanland", "Stockholm", "Uppsala", "Värmland", "Västerbotten",
  "Västernorrland", "Västmanland", "Västra Götaland"
];

// Norwegian Regions
export const NORWAY_REGIONS: StateData[] = [
  { name: "Oslo", code: "osl", coords: [59.9139, 10.7522] },
  { name: "Bergen", code: "brg", coords: [60.3913, 5.3221] },
  { name: "Trondheim", code: "trd", coords: [63.4305, 10.3951] },
  { name: "Stavanger", code: "stv", coords: [58.9700, 5.7331] },
  { name: "Tromsø", code: "tos", coords: [69.6492, 18.9553] },
  { name: "Kristiansand", code: "krs", coords: [58.1599, 8.0182] }
];

export const ALL_NORWAY_REGIONS: string[] = [
  "Agder", "Innlandet", "Møre og Romsdal", "Nordland", "Oslo", "Rogaland",
  "Troms og Finnmark", "Trøndelag", "Vestfold og Telemark", "Vestland", "Viken"
];

// Danish Regions
export const DENMARK_REGIONS: StateData[] = [
  { name: "Copenhagen", code: "cph", coords: [55.6761, 12.5683] },
  { name: "Aarhus", code: "aar", coords: [56.1629, 10.2039] },
  { name: "Odense", code: "ode", coords: [55.4038, 10.4024] },
  { name: "Aalborg", code: "aal", coords: [57.0488, 9.9217] },
  { name: "Esbjerg", code: "esb", coords: [55.4765, 8.4594] }
];

export const ALL_DENMARK_REGIONS: string[] = [
  "Capital Region", "Central Denmark Region", "North Denmark Region",
  "Region Zealand", "Region of Southern Denmark"
];

// Finnish Regions
export const FINLAND_REGIONS: StateData[] = [
  { name: "Helsinki", code: "hel", coords: [60.1699, 24.9384] },
  { name: "Tampere", code: "tre", coords: [61.4978, 23.7610] },
  { name: "Turku", code: "tku", coords: [60.4518, 22.2666] },
  { name: "Oulu", code: "oul", coords: [65.0121, 25.4651] },
  { name: "Espoo", code: "esp", coords: [60.2055, 24.6559] },
  { name: "Vantaa", code: "van", coords: [60.2934, 25.0378] }
];

export const ALL_FINLAND_REGIONS: string[] = [
  "Åland Islands", "Central Finland", "Central Ostrobothnia", "Kainuu", "Kanta-Häme",
  "Kymenlaakso", "Lapland", "North Karelia", "North Ostrobothnia", "North Savo",
  "Ostrobothnia", "Päijät-Häme", "Pirkanmaa", "Satakunta", "South Karelia",
  "South Ostrobothnia", "South Savo", "Southwest Finland", "Uusimaa"
];

// Swiss Cantons
export const SWITZERLAND_CANTONS: StateData[] = [
  { name: "Zürich", code: "zh", coords: [47.3769, 8.5417] },
  { name: "Geneva", code: "ge", coords: [46.2044, 6.1432] },
  { name: "Bern", code: "be", coords: [46.9480, 7.4474] },
  { name: "Basel", code: "bs", coords: [47.5596, 7.5886] },
  { name: "Lausanne", code: "vd", coords: [46.5197, 6.6323] },
  { name: "Lucerne", code: "lu", coords: [47.0502, 8.3093] }
];

export const ALL_SWITZERLAND_CANTONS: string[] = [
  "Aargau", "Appenzell Ausserrhoden", "Appenzell Innerrhoden", "Basel-Landschaft",
  "Basel-Stadt", "Bern", "Fribourg", "Geneva", "Glarus", "Graubünden", "Jura",
  "Lucerne", "Neuchâtel", "Nidwalden", "Obwalden", "Schaffhausen", "Schwyz",
  "Solothurn", "St. Gallen", "Thurgau", "Ticino", "Uri", "Valais", "Vaud",
  "Zug", "Zürich"
];

// Belgian Regions
export const BELGIUM_REGIONS: StateData[] = [
  { name: "Brussels", code: "bru", coords: [50.8503, 4.3517] },
  { name: "Antwerp", code: "ant", coords: [51.2194, 4.4025] },
  { name: "Ghent", code: "gnt", coords: [51.0543, 3.7174] },
  { name: "Bruges", code: "brg", coords: [51.2093, 3.2247] },
  { name: "Liège", code: "lie", coords: [50.6326, 5.5797] },
  { name: "Charleroi", code: "cha", coords: [50.4108, 4.4446] }
];

export const ALL_BELGIUM_REGIONS: string[] = [
  "Antwerp", "Brussels Capital Region", "East Flanders", "Flemish Brabant",
  "Hainaut", "Liège", "Limburg", "Luxembourg", "Namur", "Walloon Brabant", "West Flanders"
];

// Saudi Arabia Regions
export const SAUDI_REGIONS: StateData[] = [
  { name: "Riyadh", code: "ryd", coords: [24.7136, 46.6753] },
  { name: "Jeddah", code: "jed", coords: [21.4858, 39.1925] },
  { name: "Mecca", code: "mec", coords: [21.3891, 39.8579] },
  { name: "Medina", code: "med", coords: [24.5247, 39.5692] },
  { name: "Dammam", code: "dmm", coords: [26.3927, 49.9777] },
  { name: "Khobar", code: "khb", coords: [26.2172, 50.1971] }
];

export const ALL_SAUDI_REGIONS: string[] = [
  "Al Bahah", "Al Jawf", "Asir", "Eastern Province", "Hail", "Jazan", "Mecca",
  "Medina", "Najran", "Northern Borders", "Qassim", "Riyadh", "Tabuk"
];

// Qatar Municipalities
export const QATAR_REGIONS: StateData[] = [
  { name: "Doha", code: "doh", coords: [25.2854, 51.5310] },
  { name: "Al Wakrah", code: "wkr", coords: [25.1717, 51.6032] },
  { name: "Al Rayyan", code: "ryn", coords: [25.2919, 51.4244] },
  { name: "Al Khor", code: "khr", coords: [25.6804, 51.4969] },
  { name: "Umm Salal", code: "ums", coords: [25.4117, 51.4067] }
];

export const ALL_QATAR_REGIONS: string[] = [
  "Al Daayen", "Al Khor", "Al Rayyan", "Al Shahaniya", "Al Shamal",
  "Al Wakrah", "Doha", "Umm Salal"
];

// Egyptian Governorates
export const EGYPT_REGIONS: StateData[] = [
  { name: "Cairo", code: "cai", coords: [30.0444, 31.2357] },
  { name: "Alexandria", code: "alx", coords: [31.2001, 29.9187] },
  { name: "Giza", code: "giz", coords: [30.0131, 31.2089] },
  { name: "Sharm El Sheikh", code: "ssh", coords: [27.9158, 34.3300] },
  { name: "Luxor", code: "lxr", coords: [25.6872, 32.6396] },
  { name: "Hurghada", code: "hrg", coords: [27.2579, 33.8116] }
];

export const ALL_EGYPT_REGIONS: string[] = [
  "Alexandria", "Aswan", "Asyut", "Beheira", "Beni Suef", "Cairo", "Dakahlia",
  "Damietta", "Faiyum", "Gharbia", "Giza", "Ismailia", "Kafr El Sheikh", "Luxor",
  "Matruh", "Minya", "Monufia", "New Valley", "North Sinai", "Port Said",
  "Qalyubia", "Qena", "Red Sea", "Sharqia", "Sohag", "South Sinai", "Suez"
];

// Portuguese Districts
export const PORTUGAL_REGIONS: StateData[] = [
  { name: "Lisbon", code: "lis", coords: [38.7223, -9.1393] },
  { name: "Porto", code: "opo", coords: [41.1579, -8.6291] },
  { name: "Faro", code: "far", coords: [37.0194, -7.9322] },
  { name: "Braga", code: "brg", coords: [41.5454, -8.4265] },
  { name: "Coimbra", code: "cbr", coords: [40.2033, -8.4103] },
  { name: "Madeira", code: "mad", coords: [32.6669, -16.9241] }
];

export const ALL_PORTUGAL_REGIONS: string[] = [
  "Aveiro", "Azores", "Beja", "Braga", "Bragança", "Castelo Branco", "Coimbra",
  "Évora", "Faro", "Guarda", "Leiria", "Lisbon", "Madeira", "Portalegre",
  "Porto", "Santarém", "Setúbal", "Viana do Castelo", "Vila Real", "Viseu"
];

// Oman Governorates
export const OMAN_REGIONS: StateData[] = [
  { name: "Muscat", code: "mct", coords: [23.5880, 58.3829] },
  { name: "Salalah", code: "slh", coords: [17.0151, 54.0924] },
  { name: "Sohar", code: "soh", coords: [24.3615, 56.7459] },
  { name: "Nizwa", code: "nzw", coords: [22.9333, 57.5333] },
  { name: "Sur", code: "sur", coords: [22.5667, 59.5289] }
];

export const ALL_OMAN_REGIONS: string[] = [
  "Ad Dakhiliyah", "Ad Dhahirah", "Al Batinah North", "Al Batinah South",
  "Al Buraimi", "Al Wusta", "Ash Sharqiyah North", "Ash Sharqiyah South",
  "Dhofar", "Musandam", "Muscat"
];

// Luxembourg Districts
export const LUXEMBOURG_REGIONS: StateData[] = [
  { name: "Luxembourg City", code: "lux", coords: [49.6116, 6.1319] },
  { name: "Esch-sur-Alzette", code: "esc", coords: [49.4958, 5.9806] },
  { name: "Differdange", code: "dif", coords: [49.5242, 5.8914] },
  { name: "Dudelange", code: "dud", coords: [49.4811, 6.0875] },
  { name: "Ettelbruck", code: "ett", coords: [49.8475, 6.1042] }
];

export const ALL_LUXEMBOURG_REGIONS: string[] = [
  "Diekirch", "Grevenmacher", "Luxembourg"
];

// Jordanian Governorates
export const JORDAN_REGIONS: StateData[] = [
  { name: "Amman", code: "amm", coords: [31.9454, 35.9284] },
  { name: "Irbid", code: "ibd", coords: [32.5568, 35.8469] },
  { name: "Zarqa", code: "zrq", coords: [32.0728, 36.0880] },
  { name: "Aqaba", code: "aqb", coords: [29.5267, 35.0078] },
  { name: "Petra", code: "ptr", coords: [30.3285, 35.4444] }
];

export const ALL_JORDAN_REGIONS: string[] = [
  "Ajloun", "Amman", "Aqaba", "Balqa", "Irbid", "Jerash", "Karak",
  "Ma'an", "Madaba", "Mafraq", "Tafilah", "Zarqa"
];

// Kuwaiti Governorates
export const KUWAIT_REGIONS: StateData[] = [
  { name: "Kuwait City", code: "kwc", coords: [29.3759, 47.9774] },
  { name: "Hawalli", code: "haw", coords: [29.3328, 48.0286] },
  { name: "Al Ahmadi", code: "ahm", coords: [29.0769, 48.0838] },
  { name: "Al Farwaniyah", code: "far", coords: [29.2775, 47.9581] },
  { name: "Al Jahra", code: "jah", coords: [29.3376, 47.6581] },
  { name: "Mubarak Al-Kabeer", code: "mak", coords: [29.2171, 48.0920] }
];

export const ALL_KUWAIT_REGIONS: string[] = [
  "Al Ahmadi", "Al Farwaniyah", "Al Jahra", "Capital", "Hawalli", "Mubarak Al-Kabeer"
];

// Saint Helena Districts
export const SAINT_HELENA_DISTRICTS: StateData[] = [
  { name: "Jamestown", code: "jamestown", coords: [-15.9247, -5.7187] },
  { name: "Half Tree Hollow", code: "half-tree-hollow", coords: [-15.9347, -5.7087] },
  { name: "Longwood", code: "longwood", coords: [-15.9547, -5.6587] },
  { name: "St Pauls", code: "st-pauls", coords: [-15.9247, -5.6887] },
  { name: "Blue Hill", code: "blue-hill", coords: [-15.9747, -5.7487] },
  { name: "Sandy Bay", code: "sandy-bay", coords: [-15.9947, -5.7687] },
  { name: "Levelwood", code: "levelwood", coords: [-15.9647, -5.6987] },
  { name: "Alarm Forest", code: "alarm-forest", coords: [-15.9447, -5.7287] }
];

export const ALL_SAINT_HELENA_DISTRICTS: string[] = [
  "Jamestown", "Half Tree Hollow", "Longwood", "St Pauls", "Blue Hill", "Sandy Bay", "Levelwood", "Alarm Forest"
];

// Lithuania Counties
export const LITHUANIA_COUNTIES: StateData[] = [
  { name: "Vilnius County", code: "vilnius-county", coords: [54.68, 24.9] },
  { name: "Kaunas County", code: "kaunas-county", coords: [54.9, 23.9] },
  { name: "Klaipeda County", code: "klaipeda-county", coords: [55.7, 21.1] },
  { name: "Siauliai County", code: "siauliai-county", coords: [55.9, 23.3] },
  { name: "Panevezys County", code: "panevezys-county", coords: [55.7, 24.3] },
  { name: "Alytus County", code: "alytus-county", coords: [54.4, 24.0] },
  { name: "Marijampole County", code: "marijampole-county", coords: [54.6, 23.3] },
  { name: "Telsiai County", code: "telsiai-county", coords: [55.9, 22.2] },
  { name: "Taurage County", code: "taurage-county", coords: [55.2, 22.3] },
  { name: "Utena County", code: "utena-county", coords: [55.5, 25.6] }
];

export const ALL_LITHUANIA_COUNTIES: string[] = [
  "Vilnius County", "Kaunas County", "Klaipeda County", "Siauliai County", "Panevezys County",
  "Alytus County", "Marijampole County", "Telsiai County", "Taurage County", "Utena County"
];

export const COUNTRIES: Record<string, CountryData> = {
  us: {
    code: "us",
    name: "United States",
    localName: "United States of America",
    flag: "🇺🇸",
    statesCount: 50,
    states: US_STATES,
    mapCenter: [39.8283, -98.5795],
    mapZoom: 4,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52914395.551108696!2d-161.6668231204891!3d35.95581471346889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2s!4v1766866886160!5m2!1sen!2s",
    currency: "USD",
    timezone: "America/New_York",
    phoneCode: "+1",
    seoKeywords: [
      "local SEO USA",
      "local SEO specialist United States",
      "Google Maps optimization USA",
      "local search expert America",
      "US business SEO services",
      "American local SEO consultant"
    ]
  },
  ca: {
    code: "ca",
    name: "Canada",
    localName: "Canada",
    flag: "🇨🇦",
    statesCount: 13,
    states: CANADA_PROVINCES,
    mapCenter: [56.1304, -106.3468],
    mapZoom: 4,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43035258.51816965!2d-135.5378995672093!3d48.826477205796216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2sCanada!5e0!3m2!1sen!2s!4v1766865710897!5m2!1sen!2s",
    currency: "CAD",
    timezone: "America/Toronto",
    phoneCode: "+1",
    seoKeywords: [
      "local SEO Canada",
      "Canadian SEO specialist",
      "Google Maps optimization Canada",
      "Toronto SEO expert",
      "Vancouver local SEO",
      "Canadian business SEO services"
    ]
  },
  au: {
    code: "au",
    name: "Australia",
    localName: "Australia",
    flag: "🇦🇺",
    statesCount: 8,
    states: AUSTRALIA_STATES,
    mapCenter: [-25.2744, 133.7751],
    mapZoom: 4,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29727335.328922484!2d111.80389919025055!3d-24.56070495028199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b2bfd076787c5df%3A0x538267a1955b1352!2sAustralia!5e0!3m2!1sen!2s!4v1766865665656!5m2!1sen!2s",
    currency: "AUD",
    timezone: "Australia/Sydney",
    phoneCode: "+61",
    seoKeywords: [
      "local SEO Australia",
      "Australian SEO specialist",
      "Google Maps optimization Australia",
      "Sydney SEO expert",
      "Melbourne local SEO",
      "Australian business SEO services"
    ]
  },
  de: {
    code: "de",
    name: "Germany",
    localName: "Deutschland",
    flag: "🇩🇪",
    statesCount: 16,
    states: GERMANY_STATES,
    mapCenter: [51.1657, 10.4515],
    mapZoom: 6,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5135974.556607946!2d5.174593552026844!3d51.056779222299596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a721ec2b1be6b%3A0x75e85d6b8e91e55b!2sGermany!5e0!3m2!1sen!2s!4v1766865737599!5m2!1sen!2s",
    currency: "EUR",
    timezone: "Europe/Berlin",
    phoneCode: "+49",
    seoKeywords: [
      "local SEO Germany",
      "German SEO specialist",
      "Google Maps optimization Germany",
      "Berlin SEO expert",
      "Munich local SEO",
      "German business SEO services"
    ]
  },
  mx: {
    code: "mx",
    name: "Mexico",
    localName: "México",
    flag: "🇲🇽",
    statesCount: 32,
    states: MEXICO_STATES,
    mapCenter: [23.6345, -102.5528],
    mapZoom: 5,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15021739.01132578!2d-113.27220181529623!3d23.19147808614928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84043a3b88685353%3A0xed64b4be6b099811!2sMexico!5e0!3m2!1sen!2s!4v1766865780528!5m2!1sen!2s",
    currency: "MXN",
    timezone: "America/Mexico_City",
    phoneCode: "+52",
    seoKeywords: [
      "local SEO Mexico",
      "Mexican SEO specialist",
      "Google Maps optimization Mexico",
      "Mexico City SEO expert",
      "Cancun local SEO",
      "Mexican business SEO services"
    ]
  },
  my: {
    code: "my",
    name: "Malaysia",
    localName: "Malaysia",
    flag: "🇲🇾",
    statesCount: 16,
    states: MALAYSIA_STATES,
    mapCenter: [4.2105, 101.9758],
    mapZoom: 6,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8150001.104354925!2d104.31775356408035!3d4.122990091015096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3034d3975f6730af%3A0x745969328211cd8!2sMalaysia!5e0!3m2!1sen!2s!4v1766865824872!5m2!1sen!2s",
    currency: "MYR",
    timezone: "Asia/Kuala_Lumpur",
    phoneCode: "+60",
    seoKeywords: [
      "local SEO Malaysia",
      "Malaysian SEO specialist",
      "Google Maps optimization Malaysia",
      "Kuala Lumpur SEO expert",
      "Penang local SEO",
      "Malaysian business SEO services"
    ]
  },
  ae: {
    code: "ae",
    name: "United Arab Emirates",
    localName: "الإمارات العربية المتحدة",
    flag: "🇦🇪",
    statesCount: 7,
    states: UAE_EMIRATES,
    mapCenter: [23.4241, 53.8478],
    mapZoom: 7,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1861093.4530496637!2d52.62905306139492!3d24.348298726411972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e48dfb1ab12bd%3A0x33d32f56c0080aa7!2sUnited%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1766865860295!5m2!1sen!2s",
    currency: "AED",
    timezone: "Asia/Dubai",
    phoneCode: "+971",
    seoKeywords: [
      "local SEO UAE",
      "Dubai SEO specialist",
      "Google Maps optimization Dubai",
      "Abu Dhabi SEO expert",
      "UAE local SEO",
      "Emirates business SEO services"
    ]
  },
  uk: {
    code: "uk",
    name: "United Kingdom",
    localName: "United Kingdom",
    flag: "🇬🇧",
    statesCount: 4,
    states: UK_REGIONS,
    mapCenter: [55.3781, -3.4360],
    mapZoom: 5,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9584993.017565494!2d-15.007252921431428!3d54.08994727271036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25a3b1142c791a9%3A0xc4f8a0433288257a!2sUnited%20Kingdom!5e0!3m2!1sen!2s!4v1766865900314!5m2!1sen!2s",
    currency: "GBP",
    timezone: "Europe/London",
    phoneCode: "+44",
    seoKeywords: [
      "local SEO UK",
      "British SEO specialist",
      "Google Maps optimization UK",
      "London SEO expert",
      "Manchester local SEO",
      "UK business SEO services"
    ]
  },
  it: {
    code: "it",
    name: "Italy",
    localName: "Italia",
    flag: "🇮🇹",
    statesCount: 20,
    states: ITALY_REGIONS,
    mapCenter: [41.8719, 12.5674],
    mapZoom: 5,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12370371.792462911!2d2.1241758057072873!3d40.803569895279246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d4fe82448dd203%3A0xe22cf55c24635e6f!2sItaly!5e0!3m2!1sen!2s!4v1766865930411!5m2!1sen!2s",
    currency: "EUR",
    timezone: "Europe/Rome",
    phoneCode: "+39",
    seoKeywords: [
      "local SEO Italy",
      "Italian SEO specialist",
      "Google Maps optimization Italy",
      "Rome SEO expert",
      "Milan local SEO",
      "Italian business SEO services"
    ]
  },
  nz: {
    code: "nz",
    name: "New Zealand",
    localName: "New Zealand",
    flag: "🇳🇿",
    statesCount: 16,
    states: NZ_REGIONS,
    mapCenter: [-40.9006, 174.8860],
    mapZoom: 5,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25419787.495832417!2d153.7921897764823!3d-38.94679632106202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d2c200e17779687%3A0xb1d618e2756a4733!2sNew%20Zealand!5e0!3m2!1sen!2s!4v1766865960511!5m2!1sen!2s",
    currency: "NZD",
    timezone: "Pacific/Auckland",
    phoneCode: "+64",
    seoKeywords: [
      "local SEO New Zealand",
      "NZ SEO specialist",
      "Google Maps optimization NZ",
      "Auckland SEO expert",
      "Wellington local SEO",
      "New Zealand business SEO services"
    ]
  },
  br: {
    code: "br",
    name: "Brazil",
    localName: "Brasil",
    flag: "🇧🇷",
    statesCount: 27,
    states: BRAZIL_STATES,
    mapCenter: [-14.2350, -51.9253],
    mapZoom: 4,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31793018.894942272!2d-73.16447107577315!3d-13.413332832511053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c59c7ebcc28cf%3A0x295a1506f2293e63!2sBrazil!5e0!3m2!1sen!2s!4v1766866000937!5m2!1sen!2s",
    currency: "BRL",
    timezone: "America/Sao_Paulo",
    phoneCode: "+55",
    seoKeywords: [
      "local SEO Brazil",
      "Brazilian SEO specialist",
      "Google Maps optimization Brazil",
      "São Paulo SEO expert",
      "Rio de Janeiro local SEO",
      "Brazilian business SEO services"
    ]
  },
  ie: {
    code: "ie",
    name: "Ireland",
    localName: "Éire",
    flag: "🇮🇪",
    statesCount: 26,
    states: IRELAND_PROVINCES,
    mapCenter: [53.1424, -7.6921],
    mapZoom: 7,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2438536.4806177826!2d-10.856496099436225!3d53.354295152730394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4859bae45c4027fb%3A0xcf7c1234cedbf408!2sIreland!5e0!3m2!1sen!2s!4v1766866038599!5m2!1sen!2s",
    currency: "EUR",
    timezone: "Europe/Dublin",
    phoneCode: "+353",
    seoKeywords: [
      "local SEO Ireland",
      "Irish SEO specialist",
      "Google Maps optimization Ireland",
      "Dublin SEO expert",
      "Cork local SEO",
      "Irish business SEO services"
    ]
  },
  sg: {
    code: "sg",
    name: "Singapore",
    localName: "Singapore",
    flag: "🇸🇬",
    statesCount: 5,
    states: SINGAPORE_REGIONS,
    mapCenter: [1.3521, 103.8198],
    mapZoom: 11,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.22560151154!2d103.67943597208931!3d1.3139946155431674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11238a8b9375%3A0x887869cf52abf5c4!2sSingapore!5e0!3m2!1sen!2s!4v1766866068720!5m2!1sen!2s",
    currency: "SGD",
    timezone: "Asia/Singapore",
    phoneCode: "+65",
    seoKeywords: [
      "local SEO Singapore",
      "Singapore SEO specialist",
      "Google Maps optimization Singapore",
      "SG SEO expert",
      "Singapore business SEO services",
      "Asian SEO consultant"
    ]
  },
  za: {
    code: "za",
    name: "South Africa",
    localName: "South Africa",
    flag: "🇿🇦",
    statesCount: 9,
    states: SA_PROVINCES,
    mapCenter: [-30.5595, 22.9375],
    mapZoom: 5,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27491658.783062615!2d5.860097349665213!3d-32.74143760099848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c34a689d9ee1251%3A0xe85d630c1fa4e8a0!2sSouth%20Africa!5e0!3m2!1sen!2s!4v1766866101115!5m2!1sen!2s",
    currency: "ZAR",
    timezone: "Africa/Johannesburg",
    phoneCode: "+27",
    seoKeywords: [
      "local SEO South Africa",
      "SA SEO specialist",
      "Google Maps optimization South Africa",
      "Johannesburg SEO expert",
      "Cape Town local SEO",
      "South African business SEO services"
    ]
  },
  nl: {
    code: "nl",
    name: "Netherlands",
    localName: "Nederland",
    flag: "🇳🇱",
    statesCount: 12,
    states: NETHERLANDS_PROVINCES,
    mapCenter: [52.1326, 5.2913],
    mapZoom: 7,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505003.8008464393!2d2.6404900209756548!3d52.183550755082656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c3db87e4bb%3A0xb3a175ceffbd0a9f!2sNetherlands!5e0!3m2!1sen!2s!4v1766866142923!5m2!1sen!2s",
    currency: "EUR",
    timezone: "Europe/Amsterdam",
    phoneCode: "+31",
    seoKeywords: [
      "local SEO Netherlands",
      "Dutch SEO specialist",
      "Google Maps optimization Netherlands",
      "Amsterdam SEO expert",
      "Rotterdam local SEO",
      "Dutch business SEO services"
    ]
  },
  fr: {
    code: "fr",
    name: "France",
    localName: "France",
    flag: "🇫🇷",
    statesCount: 13,
    states: FRANCE_REGIONS,
    mapCenter: [46.2276, 2.2137],
    mapZoom: 5,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11429865.338508096!2d-7.977115531467485!3d45.620802166853075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54a02933785731%3A0x6bfd3f96c747d9f7!2sFrance!5e0!3m2!1sen!2s!4v1766866173285!5m2!1sen!2s",
    currency: "EUR",
    timezone: "Europe/Paris",
    phoneCode: "+33",
    seoKeywords: [
      "local SEO France",
      "French SEO specialist",
      "Google Maps optimization France",
      "Paris SEO expert",
      "Lyon local SEO",
      "French business SEO services"
    ]
  },
  es: {
    code: "es",
    name: "Spain",
    localName: "España",
    flag: "🇪🇸",
    statesCount: 17,
    states: SPAIN_REGIONS,
    mapCenter: [40.4637, -3.7492],
    mapZoom: 5,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13333381.99881003!2d-17.58106473937058!3d35.3253526618782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc42e3783261bc8b%3A0xa6ec2c940768a3ec!2sSpain!5e0!3m2!1sen!2s!4v1766866199595!5m2!1sen!2s",
    currency: "EUR",
    timezone: "Europe/Madrid",
    phoneCode: "+34",
    seoKeywords: [
      "local SEO Spain",
      "Spanish SEO specialist",
      "Google Maps optimization Spain",
      "Madrid SEO expert",
      "Barcelona local SEO",
      "Spanish business SEO services"
    ]
  },
  se: {
    code: "se",
    name: "Sweden",
    localName: "Sverige",
    flag: "🇸🇪",
    statesCount: 21,
    states: SWEDEN_REGIONS,
    mapCenter: [60.1282, 18.6435],
    mapZoom: 4,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16128719.900557384!2d-3.2518000386558708!3d60.43138244643887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465cb2396d35f0f1%3A0x22b8eba28dad6f62!2sSweden!5e0!3m2!1sen!2s!4v1766866227207!5m2!1sen!2s",
    currency: "SEK",
    timezone: "Europe/Stockholm",
    phoneCode: "+46",
    seoKeywords: [
      "local SEO Sweden",
      "Swedish SEO specialist",
      "Google Maps optimization Sweden",
      "Stockholm SEO expert",
      "Gothenburg local SEO",
      "Swedish business SEO services"
    ]
  },
  no: {
    code: "no",
    name: "Norway",
    localName: "Norge",
    flag: "🇳🇴",
    statesCount: 11,
    states: NORWAY_REGIONS,
    mapCenter: [60.4720, 8.4689],
    mapZoom: 4,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14805936.33360245!2d-2.8617068236257057!3d63.064036837895884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x461268458f4de5bf%3A0xa1b03b9db864d02b!2sNorway!5e0!3m2!1sen!2s!4v1766866258700!5m2!1sen!2s",
    currency: "NOK",
    timezone: "Europe/Oslo",
    phoneCode: "+47",
    seoKeywords: [
      "local SEO Norway",
      "Norwegian SEO specialist",
      "Google Maps optimization Norway",
      "Oslo SEO expert",
      "Bergen local SEO",
      "Norwegian business SEO services"
    ]
  },
  dk: {
    code: "dk",
    name: "Denmark",
    localName: "Danmark",
    flag: "🇩🇰",
    statesCount: 5,
    states: DENMARK_REGIONS,
    mapCenter: [56.2639, 9.5018],
    mapZoom: 7,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2272668.7084040903!2d8.904082413213226!3d56.201994286323064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464b27b6ee945ffb%3A0x528743d0c3e092cd!2sDenmark!5e0!3m2!1sen!2s!4v1766866283072!5m2!1sen!2s",
    currency: "DKK",
    timezone: "Europe/Copenhagen",
    phoneCode: "+45",
    seoKeywords: [
      "local SEO Denmark",
      "Danish SEO specialist",
      "Google Maps optimization Denmark",
      "Copenhagen SEO expert",
      "Aarhus local SEO",
      "Danish business SEO services"
    ]
  },
  fi: {
    code: "fi",
    name: "Finland",
    localName: "Suomi",
    flag: "🇫🇮",
    statesCount: 19,
    states: FINLAND_REGIONS,
    mapCenter: [61.9241, 25.7482],
    mapZoom: 5,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7058805.21592363!2d15.382336114439267!3d64.4095939445735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4681cadf4b32f6dd%3A0x146d63c75a810!2sFinland!5e0!3m2!1sen!2s!4v1766866310286!5m2!1sen!2s",
    currency: "EUR",
    timezone: "Europe/Helsinki",
    phoneCode: "+358",
    seoKeywords: [
      "local SEO Finland",
      "Finnish SEO specialist",
      "Google Maps optimization Finland",
      "Helsinki SEO expert",
      "Tampere local SEO",
      "Finnish business SEO services"
    ]
  },
  ch: {
    code: "ch",
    name: "Switzerland",
    localName: "Schweiz",
    flag: "🇨🇭",
    statesCount: 26,
    states: SWITZERLAND_CANTONS,
    mapCenter: [46.8182, 8.2275],
    mapZoom: 7,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1398238.1231977907!2d6.904998670039969!3d46.80560924548641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c64ef6f596d61%3A0x5c56b5110fcb7b15!2sSwitzerland!5e0!3m2!1sen!2s!4v1766866340337!5m2!1sen!2s",
    currency: "CHF",
    timezone: "Europe/Zurich",
    phoneCode: "+41",
    seoKeywords: [
      "local SEO Switzerland",
      "Swiss SEO specialist",
      "Google Maps optimization Switzerland",
      "Zurich SEO expert",
      "Geneva local SEO",
      "Swiss business SEO services"
    ]
  },
  be: {
    code: "be",
    name: "Belgium",
    localName: "België",
    flag: "🇧🇪",
    statesCount: 11,
    states: BELGIUM_REGIONS,
    mapCenter: [50.5039, 4.4699],
    mapZoom: 8,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1299548.7790725096!2d3.1470606474052496!3d50.493585092865295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c17d64edf39797%3A0x47ebf2b439e60ff2!2sBelgium!5e0!3m2!1sen!2s!4v1766866372957!5m2!1sen!2s",
    currency: "EUR",
    timezone: "Europe/Brussels",
    phoneCode: "+32",
    seoKeywords: [
      "local SEO Belgium",
      "Belgian SEO specialist",
      "Google Maps optimization Belgium",
      "Brussels SEO expert",
      "Antwerp local SEO",
      "Belgian business SEO services"
    ]
  },
  sa: {
    code: "sa",
    name: "Saudi Arabia",
    localName: "المملكة العربية السعودية",
    flag: "🇸🇦",
    statesCount: 13,
    states: SAUDI_REGIONS,
    mapCenter: [23.8859, 45.0792],
    mapZoom: 5,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14946570.975152643!2d34.424358506466035!3d23.851819135192553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e7b33fe7952a41%3A0x5960504bc21ab69b!2sSaudi%20Arabia!5e0!3m2!1sen!2s!4v1766866416951!5m2!1sen!2s",
    currency: "SAR",
    timezone: "Asia/Riyadh",
    phoneCode: "+966",
    seoKeywords: [
      "local SEO Saudi Arabia",
      "KSA SEO specialist",
      "Google Maps optimization Saudi",
      "Riyadh SEO expert",
      "Jeddah local SEO",
      "Saudi business SEO services"
    ]
  },
  qa: {
    code: "qa",
    name: "Qatar",
    localName: "قطر",
    flag: "🇶🇦",
    statesCount: 8,
    states: QATAR_REGIONS,
    mapCenter: [25.3548, 51.1839],
    mapZoom: 9,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1846265.1861136984!2d50.26449130367218!3d25.338227603076156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x1cfa88cf812b4032!2sQatar!5e0!3m2!1sen!2s!4v1766866451120!5m2!1sen!2s",
    currency: "QAR",
    timezone: "Asia/Qatar",
    phoneCode: "+974",
    seoKeywords: [
      "local SEO Qatar",
      "Qatari SEO specialist",
      "Google Maps optimization Qatar",
      "Doha SEO expert",
      "Qatar business SEO services",
      "Middle East SEO consultant"
    ]
  },
  eg: {
    code: "eg",
    name: "Egypt",
    localName: "مصر",
    flag: "🇪🇬",
    statesCount: 27,
    states: EGYPT_REGIONS,
    mapCenter: [26.8206, 30.8025],
    mapZoom: 6,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7292975.193877103!2d25.58305514339325!3d26.807394875043453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14368976c35c36e9%3A0x2c45a00925c4c444!2sEgypt!5e0!3m2!1sen!2s!4v1766866477881!5m2!1sen!2s",
    currency: "EGP",
    timezone: "Africa/Cairo",
    phoneCode: "+20",
    seoKeywords: [
      "local SEO Egypt",
      "Egyptian SEO specialist",
      "Google Maps optimization Egypt",
      "Cairo SEO expert",
      "Alexandria local SEO",
      "Egyptian business SEO services"
    ]
  },
  pt: {
    code: "pt",
    name: "Portugal",
    localName: "Portugal",
    flag: "🇵🇹",
    statesCount: 20,
    states: PORTUGAL_REGIONS,
    mapCenter: [39.3999, -8.2245],
    mapZoom: 6,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13300682.687298752!2d-29.43594345564618!3d35.52314090687349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb32242dbf4226d5%3A0x2ab84b091c4ef041!2sPortugal!5e0!3m2!1sen!2s!4v1766866515173!5m2!1sen!2s",
    currency: "EUR",
    timezone: "Europe/Lisbon",
    phoneCode: "+351",
    seoKeywords: [
      "local SEO Portugal",
      "Portuguese SEO specialist",
      "Google Maps optimization Portugal",
      "Lisbon SEO expert",
      "Porto local SEO",
      "Portuguese business SEO services"
    ]
  },
  om: {
    code: "om",
    name: "Oman",
    localName: "عُمان",
    flag: "🇴🇲",
    statesCount: 11,
    states: OMAN_REGIONS,
    mapCenter: [21.4735, 55.9754],
    mapZoom: 6,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7606803.816419347!2d50.85585996887658!3d21.419035872314936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3dd69f66a9d59bbf%3A0x3a064c7665b1a817!2sOman!5e0!3m2!1sen!2s!4v1766866545668!5m2!1sen!2s",
    currency: "OMR",
    timezone: "Asia/Muscat",
    phoneCode: "+968",
    seoKeywords: [
      "local SEO Oman",
      "Omani SEO specialist",
      "Google Maps optimization Oman",
      "Muscat SEO expert",
      "Salalah local SEO",
      "Omani business SEO services"
    ]
  },
  lu: {
    code: "lu",
    name: "Luxembourg",
    localName: "Luxembourg",
    flag: "🇱🇺",
    statesCount: 3,
    states: LUXEMBOURG_REGIONS,
    mapCenter: [49.8153, 6.1296],
    mapZoom: 10,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d659082.9549898623!2d5.474086791776056!3d49.8134626795264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479545b9ca212147%3A0x64db60f602d392ef!2sLuxembourg!5e0!3m2!1sen!2s!4v1766866571775!5m2!1sen!2s",
    currency: "EUR",
    timezone: "Europe/Luxembourg",
    phoneCode: "+352",
    seoKeywords: [
      "local SEO Luxembourg",
      "Luxembourg SEO specialist",
      "Google Maps optimization Luxembourg",
      "Luxembourg City SEO expert",
      "Luxembourg business SEO services",
      "European SEO consultant"
    ]
  },
  jo: {
    code: "jo",
    name: "Jordan",
    localName: "الأردن",
    flag: "🇯🇴",
    statesCount: 12,
    states: JORDAN_REGIONS,
    mapCenter: [30.5852, 36.2384],
    mapZoom: 7,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3492699.436727936!2d34.48157279321272!3d31.252871858119626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15006f476664de99%3A0x8d285b0751264e99!2sJordan!5e0!3m2!1sen!2s!4v1766866598224!5m2!1sen!2s",
    currency: "JOD",
    timezone: "Asia/Amman",
    phoneCode: "+962",
    seoKeywords: [
      "local SEO Jordan",
      "Jordanian SEO specialist",
      "Google Maps optimization Jordan",
      "Amman SEO expert",
      "Aqaba local SEO",
      "Jordanian business SEO services"
    ]
  },
  kw: {
    code: "kw",
    name: "Kuwait",
    localName: "الكويت",
    flag: "🇰🇼",
    statesCount: 6,
    states: KUWAIT_REGIONS,
    mapCenter: [29.3117, 47.4818],
    mapZoom: 9,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d918437.0992668982!2d46.882861!3d29.311660!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fc5363fbeea51a1%3A0x74726bcd92d8edd2!2sKuwait!5e0!3m2!1sen!2s!4v1766866620000!5m2!1sen!2s",
    currency: "KWD",
    timezone: "Asia/Kuwait",
    phoneCode: "+965",
    seoKeywords: [
      "local SEO Kuwait",
      "Kuwaiti SEO specialist",
      "Google Maps optimization Kuwait",
      "Kuwait City SEO expert",
      "Kuwait business SEO services",
      "Middle East SEO consultant"
    ]
  },
  sh: {
    code: "sh",
    name: "Saint Helena",
    localName: "Saint Helena",
    flag: "🇸🇭",
    statesCount: 8,
    states: SAINT_HELENA_DISTRICTS,
    mapCenter: [-15.9650, -5.7089],
    mapZoom: 12,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63467.2!2d-5.78!3d-15.96!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSaint%20Helena!5e0!3m2!1sen!2s",
    currency: "SHP",
    timezone: "Atlantic/St_Helena",
    phoneCode: "+290",
    seoKeywords: [
      "local SEO Saint Helena",
      "Saint Helena SEO specialist",
      "Google Maps optimization Saint Helena",
      "Jamestown SEO expert",
      "Saint Helena business SEO services",
      "South Atlantic island SEO consultant",
      "British Overseas Territory SEO",
      "Napoleon exile island marketing"
    ]
  },
  lt: {
    code: "lt",
    name: "Lithuania",
    localName: "Lietuva",
    flag: "🇱🇹",
    statesCount: 10,
    states: LITHUANIA_COUNTIES,
    mapCenter: [55.1694, 23.8813],
    mapZoom: 7,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2318934.8!2d21.0!3d55.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd94357f5a7189%3A0x400d18c70e9d850!2sLithuania!5e0!3m2!1sen!2s",
    currency: "EUR",
    timezone: "Europe/Vilnius",
    phoneCode: "+370",
    seoKeywords: [
      "local SEO Lithuania",
      "Lithuanian SEO specialist",
      "Google Maps optimization Lithuania",
      "Vilnius SEO expert",
      "Kaunas local SEO",
      "Lithuanian business SEO services",
      "Baltic States SEO consultant",
      "Klaipeda business visibility"
    ]
  }
};

// Get all active country codes for routing
export const COUNTRY_CODES = Object.keys(COUNTRIES);

// Check if a country code is valid
export const isValidCountry = (code: string): boolean => {
  return code.toLowerCase() in COUNTRIES;
};

// Get country data by code
export const getCountryData = (code: string): CountryData | undefined => {
  return COUNTRIES[code.toLowerCase()];
};

// Legacy export for backward compatibility
export const US_STATE_COORDS: Record<string, [number, number]> = US_STATES.reduce(
  (acc, state) => {
    acc[state.name] = state.coords;
    return acc;
  },
  {} as Record<string, [number, number]>
);
