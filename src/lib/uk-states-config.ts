// United Kingdom States/Countries configuration with areas for state landing pages

import { CityData, StateDetailData } from "./states-config";

// England cities/areas
export const ENGLAND_CITIES: CityData[] = [
  // London & Surrounds
  { name: "London", code: "london" },
  { name: "Westminster", code: "westminster" },
  // Major Cities
  { name: "Birmingham", code: "birmingham" },
  { name: "Leeds", code: "leeds" },
  { name: "Manchester", code: "manchester" },
  { name: "Sheffield", code: "sheffield" },
  { name: "Bradford", code: "bradford" },
  { name: "Liverpool", code: "liverpool" },
  { name: "Bristol", code: "bristol" },
  { name: "Leicester", code: "leicester" },
  { name: "Coventry", code: "coventry" },
  { name: "Wakefield", code: "wakefield" },
  { name: "Nottingham", code: "nottingham" },
  { name: "Newcastle upon Tyne", code: "newcastle-upon-tyne" },
  { name: "Doncaster", code: "doncaster" },
  { name: "Salford", code: "salford" },
  { name: "Sunderland", code: "sunderland" },
  { name: "Wolverhampton", code: "wolverhampton" },
  { name: "Brighton and Hove", code: "brighton-hove" },
  { name: "Derby", code: "derby" },
  { name: "Kingston upon Hull", code: "hull" },
  { name: "Plymouth", code: "plymouth" },
  { name: "Stoke-on-Trent", code: "stoke-on-trent" },
  { name: "Southampton", code: "southampton" },
  { name: "Portsmouth", code: "portsmouth" },
  { name: "Peterborough", code: "peterborough" },
  { name: "Milton Keynes", code: "milton-keynes" },
  { name: "Colchester", code: "colchester" },
  { name: "Chelmsford", code: "chelmsford" },
  { name: "Southend-on-Sea", code: "southend-on-sea" },
  { name: "Oxford", code: "oxford" },
  { name: "Cambridge", code: "cambridge" },
  { name: "Canterbury", code: "canterbury" },
  { name: "Gloucester", code: "gloucester" },
  { name: "Exeter", code: "exeter" },
  { name: "Winchester", code: "winchester" },
  { name: "Durham", code: "durham" },
  { name: "Carlisle", code: "carlisle" },
  { name: "Worcester", code: "worcester" },
  { name: "Lincoln", code: "lincoln" },
  { name: "Bath", code: "bath" },
  { name: "Hereford", code: "hereford" },
  { name: "Salisbury", code: "salisbury" },
  { name: "Lichfield", code: "lichfield" },
  { name: "Chichester", code: "chichester" },
  { name: "Truro", code: "truro" },
  { name: "Ely", code: "ely" },
  { name: "Ripon", code: "ripon" },
  { name: "Lancaster", code: "lancaster" },
  { name: "Norwich", code: "norwich" },
  { name: "York", code: "york" },
  { name: "Preston", code: "preston" },
];

export const ENGLAND_ACTIVE_CITIES: string[] = [
  "london", "westminster", "birmingham", "leeds", "manchester", "sheffield",
  "bradford", "liverpool", "bristol", "leicester", "coventry", "wakefield",
  "nottingham", "newcastle-upon-tyne", "doncaster", "salford", "sunderland",
  "wolverhampton", "brighton-hove", "derby", "hull", "plymouth", "stoke-on-trent",
  "southampton", "portsmouth", "peterborough", "milton-keynes", "colchester",
  "chelmsford", "southend-on-sea", "oxford", "cambridge", "canterbury",
  "gloucester", "exeter", "winchester", "durham", "carlisle", "worcester",
  "lincoln", "bath", "hereford", "salisbury", "lichfield", "chichester",
  "truro", "ely", "ripon", "lancaster", "norwich", "york", "preston"
];

// Scotland cities/areas
export const SCOTLAND_CITIES: CityData[] = [
  { name: "Edinburgh", code: "edinburgh" },
  { name: "Glasgow", code: "glasgow" },
  { name: "Aberdeen", code: "aberdeen" },
  { name: "Dundee", code: "dundee" },
  { name: "Inverness", code: "inverness" },
  { name: "Stirling", code: "stirling" },
  { name: "Perth", code: "perth-scotland" },
  { name: "Fife", code: "fife" },
  { name: "East Lothian", code: "east-lothian" },
  { name: "Midlothian", code: "midlothian" },
  { name: "West Lothian", code: "west-lothian" },
  { name: "Aberdeenshire", code: "aberdeenshire" },
  { name: "Angus", code: "angus" },
  { name: "Argyll and Bute", code: "argyll-bute" },
  { name: "Dumfries and Galloway", code: "dumfries-galloway" },
  { name: "Highland", code: "highland" },
  { name: "Inverclyde", code: "inverclyde" },
  { name: "Moray", code: "moray" },
  { name: "North Ayrshire", code: "north-ayrshire" },
  { name: "North Lanarkshire", code: "north-lanarkshire" },
  { name: "Renfrewshire", code: "renfrewshire" },
  { name: "Scottish Borders", code: "scottish-borders" },
  { name: "South Ayrshire", code: "south-ayrshire" },
  { name: "South Lanarkshire", code: "south-lanarkshire" },
  { name: "West Dunbartonshire", code: "west-dunbartonshire" },
];

export const SCOTLAND_ACTIVE_CITIES: string[] = [
  "edinburgh", "glasgow", "aberdeen", "dundee", "inverness", "stirling",
  "perth-scotland", "fife", "east-lothian", "midlothian", "west-lothian",
  "aberdeenshire", "angus", "argyll-bute", "dumfries-galloway", "highland",
  "inverclyde", "moray", "north-ayrshire", "north-lanarkshire", "renfrewshire",
  "scottish-borders", "south-ayrshire", "south-lanarkshire", "west-dunbartonshire"
];

// Wales cities/areas
export const WALES_CITIES: CityData[] = [
  { name: "Cardiff", code: "cardiff" },
  { name: "Swansea", code: "swansea" },
  { name: "Newport", code: "newport" },
  { name: "Wrexham", code: "wrexham" },
  { name: "Bangor", code: "bangor" },
  { name: "Blaenau Gwent", code: "blaenau-gwent" },
  { name: "Bridgend", code: "bridgend" },
  { name: "Caerphilly", code: "caerphilly" },
  { name: "Carmarthenshire", code: "carmarthenshire" },
  { name: "Ceredigion", code: "ceredigion" },
  { name: "Conwy", code: "conwy" },
  { name: "Denbighshire", code: "denbighshire" },
  { name: "Flintshire", code: "flintshire" },
  { name: "Gwynedd", code: "gwynedd" },
  { name: "Isle of Anglesey", code: "isle-of-anglesey" },
  { name: "Merthyr Tydfil", code: "merthyr-tydfil" },
  { name: "Monmouthshire", code: "monmouthshire" },
  { name: "Neath Port Talbot", code: "neath-port-talbot" },
  { name: "Pembrokeshire", code: "pembrokeshire" },
  { name: "Powys", code: "powys" },
  { name: "Rhondda Cynon Taf", code: "rhondda-cynon-taf" },
  { name: "Torfaen", code: "torfaen" },
  { name: "Vale of Glamorgan", code: "vale-of-glamorgan" },
];

export const WALES_ACTIVE_CITIES: string[] = [
  "cardiff", "swansea", "newport", "wrexham", "bangor", "blaenau-gwent",
  "bridgend", "caerphilly", "carmarthenshire", "ceredigion", "conwy",
  "denbighshire", "flintshire", "gwynedd", "isle-of-anglesey", "merthyr-tydfil",
  "monmouthshire", "neath-port-talbot", "pembrokeshire", "powys",
  "rhondda-cynon-taf", "torfaen", "vale-of-glamorgan"
];

// Northern Ireland cities/areas
export const NORTHERN_IRELAND_CITIES: CityData[] = [
  { name: "Belfast", code: "belfast" },
  { name: "Derry/Londonderry", code: "derry" },
  { name: "Newry", code: "newry" },
  { name: "Lisburn", code: "lisburn" },
  { name: "Antrim and Newtownabbey", code: "antrim-newtownabbey" },
  { name: "Armagh City, Banbridge and Craigavon", code: "armagh-banbridge-craigavon" },
  { name: "Causeway Coast and Glens", code: "causeway-coast-glens" },
  { name: "Derry City and Strabane", code: "derry-strabane" },
  { name: "Fermanagh and Omagh", code: "fermanagh-omagh" },
  { name: "Lisburn and Castlereagh", code: "lisburn-castlereagh" },
  { name: "Mid and East Antrim", code: "mid-east-antrim" },
  { name: "Mid Ulster", code: "mid-ulster" },
  { name: "Newry, Mourne and Down", code: "newry-mourne-down" },
  { name: "Ards and North Down", code: "ards-north-down" },
];

export const NORTHERN_IRELAND_ACTIVE_CITIES: string[] = [
  "belfast", "derry", "newry", "lisburn", "antrim-newtownabbey",
  "armagh-banbridge-craigavon", "causeway-coast-glens", "derry-strabane",
  "fermanagh-omagh", "lisburn-castlereagh", "mid-east-antrim", "mid-ulster",
  "newry-mourne-down", "ards-north-down"
];

// UK States/Countries definitions
export const UK_STATES: Record<string, StateDetailData> = {
  england: {
    code: "england",
    name: "England",
    fullName: "England",
    abbreviation: "ENG",
    cities: ENGLAND_CITIES,
    activeCities: ENGLAND_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4925767.573614896!2d-4.508082499999999!3d52.5310214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879b89a12a08b0d%3A0x27e71b3e81fb0dcf!2sEngland!5e0!3m2!1sen!2suk!4v1766845000000!5m2!1sen!2suk",
    population: "56.5 million",
    timezone: "Europe/London",
    tagline: "Dominate Local Search Across England – From London to Manchester",
    description: "I help English businesses capture more local customers through proven Google Maps optimization, AI search strategies, and citation building. From the bustling streets of London to the industrial hubs of Birmingham and Manchester, my local SEO expertise puts your business in front of ready-to-buy customers across England."
  },
  scotland: {
    code: "scotland",
    name: "Scotland",
    fullName: "Scotland",
    abbreviation: "SCT",
    cities: SCOTLAND_CITIES,
    activeCities: SCOTLAND_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4379687.654231245!2d-7.509082499999999!3d56.4907214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4861e6e6b5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sScotland!5e0!3m2!1sen!2suk!4v1766845100000!5m2!1sen!2suk",
    population: "5.5 million",
    timezone: "Europe/London",
    tagline: "Scotland Local SEO Expert – Edinburgh to Glasgow and Beyond",
    description: "Your Scottish customers are searching for you right now. Are they finding you – or your competitors? I deliver comprehensive local SEO strategies tailored for the Scottish market, from Edinburgh's historic streets to Glasgow's vibrant business districts and the Highlands."
  },
  wales: {
    code: "wales",
    name: "Wales",
    fullName: "Wales (Cymru)",
    abbreviation: "WLS",
    cities: WALES_CITIES,
    activeCities: WALES_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2512334.665493672!2d-3.7837365!3d52.1307214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4865e6e6b5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sWales!5e0!3m2!1sen!2suk!4v1766845200000!5m2!1sen!2suk",
    population: "3.1 million",
    timezone: "Europe/London",
    tagline: "Wales Local SEO Specialist – Cardiff to Bangor and All of Cymru",
    description: "Stop watching competitors steal your Welsh customers. I specialize in local SEO strategies that work for Wales, from Cardiff's capital buzz to the coastal towns and valleys. Whether you're in Swansea, Newport, or the rural heartlands, I put your business first in local search."
  },
  "northern-ireland": {
    code: "northern-ireland",
    name: "Northern Ireland",
    fullName: "Northern Ireland",
    abbreviation: "NIR",
    cities: NORTHERN_IRELAND_CITIES,
    activeCities: NORTHERN_IRELAND_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1512334.665493672!2d-6.4923365!3d54.7877214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4860e6e6b5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sNorthern%20Ireland!5e0!3m2!1sen!2suk!4v1766845300000!5m2!1sen!2suk",
    population: "1.9 million",
    timezone: "Europe/London",
    tagline: "Northern Ireland Local SEO – Belfast to Derry and Beyond",
    description: "Every day without proper local SEO costs your Northern Irish business real money. I deliver tailored local search strategies for Belfast's diverse districts and across all of Northern Ireland, ensuring your business gets found when customers are ready to buy."
  }
};

// Get all UK state codes
export const UK_STATE_CODES = Object.keys(UK_STATES);

// Check if a UK state code is valid
export const isValidUKState = (code: string): boolean => {
  return code.toLowerCase() in UK_STATES;
};

// Get UK state data by code
export const getUKStateData = (code: string): StateDetailData | undefined => {
  return UK_STATES[code.toLowerCase()];
};

// Check if a UK city has an active page
export const isUKCityActive = (stateCode: string, cityCode: string): boolean => {
  const state = UK_STATES[stateCode.toLowerCase()];
  return state?.activeCities.includes(cityCode.toLowerCase()) ?? false;
};

// Check if a city code is valid for a given UK state
export const isValidUKCity = (stateCode: string, cityCode: string): boolean => {
  const state = UK_STATES[stateCode.toLowerCase()];
  if (!state) return false;
  return state.cities.some(c => c.code === cityCode.toLowerCase());
};