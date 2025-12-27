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
  // Future countries - add here when ready to launch
  // uk: { code: "uk", name: "United Kingdom", ... },
  // uae: { code: "ae", name: "United Arab Emirates", ... },
  // ca: { code: "ca", name: "Canada", ... },
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
