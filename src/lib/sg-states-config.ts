// Singapore regions configuration with areas

import { StateDetailData, CityData } from "./states-config";

// Central Region areas
export const CENTRAL_CITIES: CityData[] = [
  { name: "Central Business District", code: "central-business-district" },
  { name: "Marina Bay", code: "marina-bay" },
  { name: "Orchard Road", code: "orchard-road" },
  { name: "River Valley", code: "river-valley" },
  { name: "Downtown Core", code: "downtown-core" },
  { name: "Bukit Merah", code: "bukit-merah" },
  { name: "Rochor", code: "rochor" },
  { name: "Queenstown", code: "queenstown" },
  { name: "Toa Payoh", code: "toa-payoh" },
  { name: "Bishan", code: "bishan" }
];

// North Region areas
export const NORTH_CITIES: CityData[] = [
  { name: "Woodlands", code: "woodlands" },
  { name: "Yishun", code: "yishun" },
  { name: "Sembawang", code: "sembawang" },
  { name: "Admiralty", code: "admiralty" }
];

// North-East Region areas
export const NORTHEAST_CITIES: CityData[] = [
  { name: "Sengkang", code: "sengkang" },
  { name: "Punggol", code: "punggol" },
  { name: "Ang Mo Kio", code: "ang-mo-kio" },
  { name: "Mandai", code: "mandai" }
];

// East Region areas
export const EAST_CITIES: CityData[] = [
  { name: "Tampines", code: "tampines" },
  { name: "Pasir Ris", code: "pasir-ris" },
  { name: "Changi", code: "changi" }
];

// West Region areas
export const WEST_CITIES: CityData[] = [
  { name: "Jurong East", code: "jurong-east" },
  { name: "Jurong West", code: "jurong-west" },
  { name: "Choa Chu Kang", code: "choa-chu-kang" },
  { name: "Bukit Batok", code: "bukit-batok" },
  { name: "Bukit Panjang", code: "bukit-panjang" }
];

// Singapore Regions Configuration
export const SG_STATES: Record<string, StateDetailData> = {
  central: {
    code: "central",
    name: "Central Region",
    fullName: "Central Region",
    abbreviation: "CR",
    cities: CENTRAL_CITIES,
    activeCities: CENTRAL_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127637.36!2d103.82!3d1.29!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11238a8b9375%3A0x887869cf52abf5c4!2sCentral%2C%20Singapore!5e0!3m2!1sen!2s",
    population: "0.9 million",
    timezone: "SGT",
    tagline: "Local SEO Services in Central Singapore - CBD & Orchard Search Domination",
    description: "Expert local SEO services across Central Singapore. From Marina Bay to Orchard Road, we help businesses dominate Google Maps."
  },
  north: {
    code: "north",
    name: "North Region",
    fullName: "North Region",
    abbreviation: "NR",
    cities: NORTH_CITIES,
    activeCities: NORTH_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127637.36!2d103.78!3d1.43!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da!2sNorth%2C%20Singapore!5e0!3m2!1sen!2s",
    population: "0.6 million",
    timezone: "SGT",
    tagline: "Local SEO Services in North Singapore - Woodlands Search Excellence",
    description: "Premier local SEO services throughout North Singapore. From Woodlands to Yishun."
  },
  northeast: {
    code: "northeast",
    name: "North-East Region",
    fullName: "North-East Region",
    abbreviation: "NE",
    cities: NORTHEAST_CITIES,
    activeCities: NORTHEAST_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127637.36!2d103.89!3d1.39!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da!2sNorth-East%2C%20Singapore!5e0!3m2!1sen!2s",
    population: "0.9 million",
    timezone: "SGT",
    tagline: "Local SEO Services in North-East Singapore - Sengkang & Punggol Search Optimization",
    description: "Professional local SEO services for North-East Singapore. From Sengkang to Ang Mo Kio."
  },
  east: {
    code: "east",
    name: "East Region",
    fullName: "East Region",
    abbreviation: "ER",
    cities: EAST_CITIES,
    activeCities: EAST_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127637.36!2d103.94!3d1.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da!2sEast%2C%20Singapore!5e0!3m2!1sen!2s",
    population: "0.7 million",
    timezone: "SGT",
    tagline: "Local SEO Services in East Singapore - Tampines & Changi Search Excellence",
    description: "Expert local SEO services across East Singapore. From Tampines to Pasir Ris."
  },
  west: {
    code: "west",
    name: "West Region",
    fullName: "West Region",
    abbreviation: "WR",
    cities: WEST_CITIES,
    activeCities: WEST_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127637.36!2d103.74!3d1.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da!2sWest%2C%20Singapore!5e0!3m2!1sen!2s",
    population: "0.9 million",
    timezone: "SGT",
    tagline: "Local SEO Services in West Singapore - Jurong Search Domination",
    description: "Premier local SEO services for West Singapore. From Jurong East to Bukit Batok."
  }
};

export const SG_STATE_CODES = Object.keys(SG_STATES);

export const isValidSGState = (code: string): boolean => {
  return code.toLowerCase() in SG_STATES;
};

export const getSGStateData = (code: string): StateDetailData | undefined => {
  return SG_STATES[code.toLowerCase()];
};
