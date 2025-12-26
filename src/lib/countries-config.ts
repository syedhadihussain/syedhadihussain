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

// US States with their codes and coordinates
export const US_STATES: StateData[] = [
  { name: "Alabama", code: "al", coords: [32.318230, -86.902298] },
  { name: "Alaska", code: "ak", coords: [66.160507, -153.369141] },
  { name: "Arizona", code: "az", coords: [34.048927, -111.093735] },
  { name: "Arkansas", code: "ar", coords: [34.799999, -92.199997] },
  { name: "California", code: "ca", coords: [36.778259, -119.417931] },
  { name: "Colorado", code: "co", coords: [39.113014, -105.358887] },
  { name: "Connecticut", code: "ct", coords: [41.599998, -72.699997] },
  { name: "Delaware", code: "de", coords: [39.000000, -75.500000] },
  { name: "Florida", code: "fl", coords: [27.994402, -81.760254] },
  { name: "Georgia", code: "ga", coords: [33.247875, -83.441162] },
  { name: "Hawaii", code: "hi", coords: [19.741755, -155.844437] },
  { name: "Idaho", code: "id", coords: [44.068203, -114.742043] },
  { name: "Illinois", code: "il", coords: [40.000000, -89.000000] },
  { name: "Indiana", code: "in", coords: [40.273502, -86.126976] },
  { name: "Iowa", code: "ia", coords: [42.032974, -93.581543] },
  { name: "Kansas", code: "ks", coords: [38.500000, -98.000000] },
  { name: "Kentucky", code: "ky", coords: [37.839333, -84.270020] },
  { name: "Louisiana", code: "la", coords: [30.391830, -92.329102] },
  { name: "Maine", code: "me", coords: [45.367584, -68.972168] },
  { name: "Maryland", code: "md", coords: [39.045753, -76.641273] },
  { name: "Massachusetts", code: "ma", coords: [42.407211, -71.382439] },
  { name: "Michigan", code: "mi", coords: [44.182205, -84.506836] },
  { name: "Minnesota", code: "mn", coords: [46.392410, -94.636230] },
  { name: "Mississippi", code: "ms", coords: [33.000000, -90.000000] },
  { name: "Missouri", code: "mo", coords: [38.573936, -92.603760] },
  { name: "Montana", code: "mt", coords: [46.965260, -109.533691] },
  { name: "Nebraska", code: "ne", coords: [41.500000, -100.000000] },
  { name: "Nevada", code: "nv", coords: [39.876019, -117.224121] },
  { name: "New Hampshire", code: "nh", coords: [44.000000, -71.500000] },
  { name: "New Jersey", code: "nj", coords: [39.833851, -74.871826] },
  { name: "New Mexico", code: "nm", coords: [34.307144, -106.018066] },
  { name: "New York", code: "ny", coords: [43.000000, -75.000000] },
  { name: "North Carolina", code: "nc", coords: [35.782169, -80.793457] },
  { name: "North Dakota", code: "nd", coords: [47.650589, -100.437012] },
  { name: "Ohio", code: "oh", coords: [40.367474, -82.996216] },
  { name: "Oklahoma", code: "ok", coords: [36.084621, -96.921387] },
  { name: "Oregon", code: "or", coords: [44.000000, -120.500000] },
  { name: "Pennsylvania", code: "pa", coords: [41.203323, -77.194527] },
  { name: "Rhode Island", code: "ri", coords: [41.700001, -71.500000] },
  { name: "South Carolina", code: "sc", coords: [33.836082, -81.163727] },
  { name: "South Dakota", code: "sd", coords: [44.500000, -100.000000] },
  { name: "Tennessee", code: "tn", coords: [35.860119, -86.660156] },
  { name: "Texas", code: "tx", coords: [31.000000, -100.000000] },
  { name: "Utah", code: "ut", coords: [39.419220, -111.950684] },
  { name: "Vermont", code: "vt", coords: [44.000000, -72.699997] },
  { name: "Virginia", code: "va", coords: [37.926868, -78.024902] },
  { name: "Washington", code: "wa", coords: [47.751076, -120.740135] },
  { name: "West Virginia", code: "wv", coords: [39.000000, -80.500000] },
  { name: "Wisconsin", code: "wi", coords: [44.500000, -89.500000] },
  { name: "Wyoming", code: "wy", coords: [43.075970, -107.290283] }
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
