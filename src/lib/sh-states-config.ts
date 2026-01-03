// Saint Helena Districts configuration
// Saint Helena is a British Overseas Territory in the South Atlantic Ocean
// Structure: Country → Districts (no intermediate state level)

import { StateDetailData, CityData } from "./states-config";

// Saint Helena Districts as CityData (districts act as the sub-areas)
export const JAMESTOWN_AREAS: CityData[] = [
  { name: "Jamestown", code: "jamestown" }
];

export const HALF_TREE_HOLLOW_AREAS: CityData[] = [
  { name: "Half Tree Hollow", code: "half-tree-hollow" }
];

export const LONGWOOD_AREAS: CityData[] = [
  { name: "Longwood", code: "longwood" }
];

export const ST_PAULS_AREAS: CityData[] = [
  { name: "St Pauls", code: "st-pauls" }
];

export const BLUE_HILL_AREAS: CityData[] = [
  { name: "Blue Hill", code: "blue-hill" }
];

export const SANDY_BAY_AREAS: CityData[] = [
  { name: "Sandy Bay", code: "sandy-bay" }
];

export const LEVELWOOD_AREAS: CityData[] = [
  { name: "Levelwood", code: "levelwood" }
];

export const ALARM_FOREST_AREAS: CityData[] = [
  { name: "Alarm Forest", code: "alarm-forest" }
];

// For Saint Helena, we use districts directly as the "state" level
// since the territory is small and has no intermediate administrative level
export const SH_DISTRICTS: CityData[] = [
  { name: "Jamestown", code: "jamestown" },
  { name: "Half Tree Hollow", code: "half-tree-hollow" },
  { name: "Longwood", code: "longwood" },
  { name: "St Pauls", code: "st-pauls" },
  { name: "Blue Hill", code: "blue-hill" },
  { name: "Sandy Bay", code: "sandy-bay" },
  { name: "Levelwood", code: "levelwood" },
  { name: "Alarm Forest", code: "alarm-forest" }
];

export const SH_ACTIVE_DISTRICTS: string[] = [
  "jamestown", "half-tree-hollow", "longwood", "st-pauls",
  "blue-hill", "sandy-bay", "levelwood", "alarm-forest"
];

// Saint Helena Districts as StateDetailData
// Since Saint Helena is small, each district gets its own state-level page
export const SH_STATES: Record<string, StateDetailData> = {
  jamestown: {
    code: "jamestown",
    name: "Jamestown",
    fullName: "Jamestown District",
    abbreviation: "JMT",
    cities: JAMESTOWN_AREAS,
    activeCities: ["jamestown"],
    mapEmbed: "https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Jamestown,Saint+Helena&zoom=14",
    population: "629",
    timezone: "Atlantic/St_Helena",
    tagline: "Jamestown Local SEO Expert - Historic Capital of Saint Helena Island",
    description: "Capture the hearts and searches of Jamestown visitors and residents with targeted local SEO strategies. As the capital and only port of entry for Saint Helena, Jamestown serves as the commercial hub where businesses compete for attention from tourists exploring Napoleon's exile island, cruise ship passengers, and the close-knit local community. My specialized approach helps Jamestown businesses dominate Google Maps and local search results, connecting you with customers walking the historic Main Street, visiting the museum, or searching for local services in this UNESCO World Heritage candidate town."
  },
  "half-tree-hollow": {
    code: "half-tree-hollow",
    name: "Half Tree Hollow",
    fullName: "Half Tree Hollow District",
    abbreviation: "HTH",
    cities: HALF_TREE_HOLLOW_AREAS,
    activeCities: ["half-tree-hollow"],
    mapEmbed: "https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Half+Tree+Hollow,Saint+Helena&zoom=14",
    population: "1,140",
    timezone: "Atlantic/St_Helena",
    tagline: "Half Tree Hollow SEO Services - Largest Residential District of Saint Helena",
    description: "Elevate your Half Tree Hollow business visibility with expert local SEO tailored for Saint Helena's most populous district. Home to nearly a quarter of the island's residents, Half Tree Hollow represents a prime market for local businesses seeking to reach families, professionals, and the growing community attracted by the new airport. My data-driven local search strategies ensure your business appears prominently when residents search for services, products, and local expertise in this thriving residential area perched above Jamestown."
  },
  longwood: {
    code: "longwood",
    name: "Longwood",
    fullName: "Longwood District",
    abbreviation: "LWD",
    cities: LONGWOOD_AREAS,
    activeCities: ["longwood"],
    mapEmbed: "https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Longwood,Saint+Helena&zoom=14",
    population: "960",
    timezone: "Atlantic/St_Helena",
    tagline: "Longwood Local SEO Specialist - Home of Napoleon's Exile Residence",
    description: "Transform your Longwood business into a local search powerhouse with specialized SEO strategies designed for this historically significant district. Famous worldwide as Napoleon Bonaparte's place of exile and final residence at Longwood House, this district attracts history enthusiasts, researchers, and tourists from across the globe. My comprehensive local SEO approach helps businesses in Longwood capture both the steady stream of heritage tourists and the vibrant local community, ensuring your services rank when visitors and residents search for accommodation, dining, tours, and local expertise."
  },
  "st-pauls": {
    code: "st-pauls",
    name: "St Pauls",
    fullName: "St Pauls District",
    abbreviation: "STP",
    cities: ST_PAULS_AREAS,
    activeCities: ["st-pauls"],
    mapEmbed: "https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=St+Pauls,Saint+Helena&zoom=14",
    population: "908",
    timezone: "Atlantic/St_Helena",
    tagline: "St Pauls SEO Expert - Agricultural Heart of Saint Helena Island",
    description: "Grow your St Pauls business visibility with targeted local SEO strategies crafted for this fertile agricultural district. Known for its productive farmlands and the island's best growing conditions, St Pauls supports businesses ranging from agricultural suppliers to local services catering to farming families. My tailored approach to Google Business Profile optimization and local search rankings helps St Pauls enterprises connect with customers seeking farm-fresh produce, agricultural services, and trusted local businesses in this green heart of Saint Helena."
  },
  "blue-hill": {
    code: "blue-hill",
    name: "Blue Hill",
    fullName: "Blue Hill District",
    abbreviation: "BHL",
    cities: BLUE_HILL_AREAS,
    activeCities: ["blue-hill"],
    mapEmbed: "https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Blue+Hill,Saint+Helena&zoom=14",
    population: "177",
    timezone: "Atlantic/St_Helena",
    tagline: "Blue Hill Local SEO - Scenic Southern District of Saint Helena",
    description: "Position your Blue Hill business at the top of local search results with expert SEO services designed for this picturesque southern district. Characterized by dramatic coastal landscapes and close-knit community ties, Blue Hill offers unique opportunities for businesses serving residents and adventure-seeking visitors. My strategic local SEO methodology ensures your enterprise gains visibility among hikers, nature enthusiasts, and locals searching for services in this scenic corner of Saint Helena, helping you build a strong digital presence that matches the natural beauty of your surroundings."
  },
  "sandy-bay": {
    code: "sandy-bay",
    name: "Sandy Bay",
    fullName: "Sandy Bay District",
    abbreviation: "SBY",
    cities: SANDY_BAY_AREAS,
    activeCities: ["sandy-bay"],
    mapEmbed: "https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Sandy+Bay,Saint+Helena&zoom=14",
    population: "254",
    timezone: "Atlantic/St_Helena",
    tagline: "Sandy Bay SEO Services - Southwest Coast Business Visibility Specialist",
    description: "Amplify your Sandy Bay business reach with precision local SEO strategies tailored for this distinctive southwest coastal district. Known for its unique landscape and endemic species habitats, Sandy Bay attracts eco-tourists, researchers, and nature photographers alongside its established residential community. My specialized approach to local search optimization helps Sandy Bay businesses stand out in Google Maps and organic results, connecting you with visitors exploring the island's biodiversity hotspots and residents seeking quality local services in this special corner of Saint Helena."
  },
  levelwood: {
    code: "levelwood",
    name: "Levelwood",
    fullName: "Levelwood District",
    abbreviation: "LVW",
    cities: LEVELWOOD_AREAS,
    activeCities: ["levelwood"],
    mapEmbed: "https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Levelwood,Saint+Helena&zoom=14",
    population: "369",
    timezone: "Atlantic/St_Helena",
    tagline: "Levelwood Local SEO Expert - Eastern District Business Growth Specialist",
    description: "Unlock your Levelwood business potential with strategic local SEO services crafted for this eastern district of Saint Helena. Offering stunning views and a tranquil residential atmosphere, Levelwood provides an ideal setting for businesses serving both local families and visitors exploring the island's quieter eastern reaches. My proven local search strategies help Levelwood enterprises capture attention from customers searching for accommodation, local services, and authentic Saint Helena experiences, building sustainable visibility that drives real business growth."
  },
  "alarm-forest": {
    code: "alarm-forest",
    name: "Alarm Forest",
    fullName: "Alarm Forest District",
    abbreviation: "ALF",
    cities: ALARM_FOREST_AREAS,
    activeCities: ["alarm-forest"],
    mapEmbed: "https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Alarm+Forest,Saint+Helena&zoom=14",
    population: "299",
    timezone: "Atlantic/St_Helena",
    tagline: "Alarm Forest SEO Specialist - Highland District Digital Marketing Expert",
    description: "Elevate your Alarm Forest business above the competition with targeted local SEO strategies designed for this unique highland district. Named for the alarm signal historically raised here to warn of approaching ships, Alarm Forest today represents a growing residential community with businesses serving locals and adventurous visitors. My comprehensive approach to Google Maps optimization and local search rankings ensures your Alarm Forest enterprise gains the visibility needed to thrive, connecting you with customers who value the district's elevated perspective and community spirit."
  }
};

// Get all Saint Helena district codes
export const SH_STATE_CODES = Object.keys(SH_STATES);

// Check if a Saint Helena district code is valid
export const isValidSHState = (code: string): boolean => {
  return code.toLowerCase() in SH_STATES;
};

// Get Saint Helena district data by code
export const getSHStateData = (code: string): StateDetailData | undefined => {
  return SH_STATES[code.toLowerCase()];
};

// Check if a Saint Helena district has an active page
export const isSHDistrictActive = (districtCode: string): boolean => {
  return SH_ACTIVE_DISTRICTS.includes(districtCode.toLowerCase());
};
