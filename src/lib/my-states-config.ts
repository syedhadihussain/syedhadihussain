// Malaysia states configuration with cities

import { StateDetailData, CityData } from "./states-config";

// Kuala Lumpur cities
export const KL_CITIES: CityData[] = [
  { name: "Kuala Lumpur City", code: "kuala-lumpur-city" },
  { name: "Bukit Bintang", code: "bukit-bintang" },
  { name: "KLCC", code: "klcc" },
  { name: "Cheras", code: "cheras" },
  { name: "Mont Kiara", code: "mont-kiara" },
  { name: "Setapak", code: "setapak" },
  { name: "Bangsar", code: "bangsar" },
  { name: "Kepong", code: "kepong" },
  { name: "Ampang", code: "ampang" }
];

// Selangor cities
export const SELANGOR_CITIES: CityData[] = [
  { name: "Petaling Jaya", code: "petaling-jaya" },
  { name: "Shah Alam", code: "shah-alam" },
  { name: "Subang Jaya", code: "subang-jaya" },
  { name: "Klang", code: "klang" },
  { name: "Kajang", code: "kajang" },
  { name: "Putrajaya", code: "putrajaya" },
  { name: "Cyberjaya", code: "cyberjaya" }
];

// Johor cities
export const JOHOR_CITIES: CityData[] = [
  { name: "Johor Bahru", code: "johor-bahru" },
  { name: "Iskandar Puteri", code: "iskandar-puteri" }
];

// Penang cities
export const PENANG_CITIES: CityData[] = [
  { name: "George Town", code: "george-town" },
  { name: "Bayan Lepas", code: "bayan-lepas" },
  { name: "Seberang Perai", code: "seberang-perai" },
  { name: "Butterworth", code: "butterworth" }
];

// Perak cities
export const PERAK_CITIES: CityData[] = [
  { name: "Ipoh", code: "ipoh" },
  { name: "Taiping", code: "taiping" },
  { name: "Teluk Intan", code: "teluk-intan" },
  { name: "Batu Gajah", code: "batu-gajah" },
  { name: "Kampar", code: "kampar" }
];

// Negeri Sembilan cities
export const NEGERI_SEMBILAN_CITIES: CityData[] = [
  { name: "Seremban", code: "seremban" },
  { name: "Nilai", code: "nilai" },
  { name: "Port Dickson", code: "port-dickson" },
  { name: "Bahau", code: "bahau" }
];

// Pahang cities
export const PAHANG_CITIES: CityData[] = [
  { name: "Kuantan", code: "kuantan" },
  { name: "Temerloh", code: "temerloh" },
  { name: "Bentong", code: "bentong" },
  { name: "Cameron Highlands", code: "cameron-highlands" }
];

// Kelantan cities
export const KELANTAN_CITIES: CityData[] = [
  { name: "Kota Bharu", code: "kota-bharu" },
  { name: "Pasir Mas", code: "pasir-mas" },
  { name: "Tanah Merah", code: "tanah-merah" }
];

// Terengganu cities
export const TERENGGANU_CITIES: CityData[] = [
  { name: "Kuala Terengganu", code: "kuala-terengganu" },
  { name: "Dungun", code: "dungun" },
  { name: "Kemaman", code: "kemaman" }
];

// Sabah cities
export const SABAH_CITIES: CityData[] = [
  { name: "Kota Kinabalu", code: "kota-kinabalu" },
  { name: "Sandakan", code: "sandakan" },
  { name: "Tawau", code: "tawau" },
  { name: "Lahad Datu", code: "lahad-datu" },
  { name: "Keningau", code: "keningau" }
];

// Sarawak cities
export const SARAWAK_CITIES: CityData[] = [
  { name: "Kuching", code: "kuching" },
  { name: "Miri", code: "miri" },
  { name: "Sibu", code: "sibu" },
  { name: "Bintulu", code: "bintulu" },
  { name: "Sri Aman", code: "sri-aman" }
];

// Melaka cities
export const MELAKA_CITIES: CityData[] = [
  { name: "Melaka City", code: "melaka-city" },
  { name: "Ayer Keroh", code: "ayer-keroh" },
  { name: "Alor Gajah", code: "alor-gajah" }
];

// Perlis cities
export const PERLIS_CITIES: CityData[] = [
  { name: "Kangar", code: "kangar" }
];

// Malaysia States Configuration
export const MY_STATES: Record<string, StateDetailData> = {
  "kuala-lumpur": {
    code: "kuala-lumpur",
    name: "Kuala Lumpur",
    fullName: "Federal Territory of Kuala Lumpur",
    abbreviation: "KL",
    cities: KL_CITIES,
    activeCities: KL_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127485.14!2d101.64!3d3.14!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc362abd08e7d3%3A0x232e1ff540d86c99!2sKuala%20Lumpur!5e0!3m2!1sen!2s",
    population: "1.8 million",
    timezone: "MYT",
    tagline: "Local SEO Services in Kuala Lumpur - KL Search Domination",
    description: "Expert local SEO services across Kuala Lumpur. From KLCC to Bangsar, we help businesses dominate Google Maps."
  },
  selangor: {
    code: "selangor",
    name: "Selangor",
    fullName: "Selangor Darul Ehsan",
    abbreviation: "SEL",
    cities: SELANGOR_CITIES,
    activeCities: SELANGOR_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d509168.14!2d101.45!3d3.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc!2sSelangor!5e0!3m2!1sen!2s",
    population: "6.5 million",
    timezone: "MYT",
    tagline: "Local SEO Services in Selangor - Shah Alam & PJ Search Excellence",
    description: "Premier local SEO services throughout Selangor. From Shah Alam to Subang Jaya, we boost local visibility."
  },
  johor: {
    code: "johor",
    name: "Johor",
    fullName: "Johor Darul Ta'zim",
    abbreviation: "JHR",
    cities: JOHOR_CITIES,
    activeCities: JOHOR_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d509168.14!2d103.76!3d1.48!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da!2sJohor!5e0!3m2!1sen!2s",
    population: "4.0 million",
    timezone: "MYT",
    tagline: "Local SEO Services in Johor - JB Search Optimization",
    description: "Professional local SEO services for Johor. From Johor Bahru to Iskandar Puteri."
  },
  penang: {
    code: "penang",
    name: "Penang",
    fullName: "Pulau Pinang",
    abbreviation: "PNG",
    cities: PENANG_CITIES,
    activeCities: PENANG_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.14!2d100.33!3d5.41!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304a!2sPenang!5e0!3m2!1sen!2s",
    population: "1.8 million",
    timezone: "MYT",
    tagline: "Local SEO Services in Penang - George Town Search Domination",
    description: "Expert local SEO services across Penang. From George Town to Butterworth."
  },
  perak: {
    code: "perak",
    name: "Perak",
    fullName: "Perak Darul Ridzuan",
    abbreviation: "PRK",
    cities: PERAK_CITIES,
    activeCities: PERAK_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d509168.14!2d101.09!3d4.59!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31ca!2sPerak!5e0!3m2!1sen!2s",
    population: "2.5 million",
    timezone: "MYT",
    tagline: "Local SEO Services in Perak - Ipoh Search Excellence",
    description: "Premier local SEO services for Perak. From Ipoh to Taiping."
  },
  "negeri-sembilan": {
    code: "negeri-sembilan",
    name: "Negeri Sembilan",
    fullName: "Negeri Sembilan Darul Khusus",
    abbreviation: "NS",
    cities: NEGERI_SEMBILAN_CITIES,
    activeCities: NEGERI_SEMBILAN_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d509168.14!2d102.26!3d2.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cd!2sNegeri%20Sembilan!5e0!3m2!1sen!2s",
    population: "1.1 million",
    timezone: "MYT",
    tagline: "Local SEO Services in Negeri Sembilan - Seremban Search Optimization",
    description: "Professional local SEO services for Negeri Sembilan. From Seremban to Port Dickson."
  },
  pahang: {
    code: "pahang",
    name: "Pahang",
    fullName: "Pahang Darul Makmur",
    abbreviation: "PHG",
    cities: PAHANG_CITIES,
    activeCities: PAHANG_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d509168.14!2d103.43!3d3.81!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31c7!2sPahang!5e0!3m2!1sen!2s",
    population: "1.7 million",
    timezone: "MYT",
    tagline: "Local SEO Services in Pahang - Kuantan Search Excellence",
    description: "Expert local SEO services for Pahang. From Kuantan to Cameron Highlands."
  },
  kelantan: {
    code: "kelantan",
    name: "Kelantan",
    fullName: "Kelantan Darul Naim",
    abbreviation: "KTN",
    cities: KELANTAN_CITIES,
    activeCities: KELANTAN_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d509168.14!2d102.24!3d6.13!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31b6!2sKelantan!5e0!3m2!1sen!2s",
    population: "1.9 million",
    timezone: "MYT",
    tagline: "Local SEO Services in Kelantan - Kota Bharu Search Domination",
    description: "Premier local SEO services for Kelantan. From Kota Bharu to Pasir Mas."
  },
  terengganu: {
    code: "terengganu",
    name: "Terengganu",
    fullName: "Terengganu Darul Iman",
    abbreviation: "TRG",
    cities: TERENGGANU_CITIES,
    activeCities: TERENGGANU_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d509168.14!2d103.13!3d5.31!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31b8!2sTerengganu!5e0!3m2!1sen!2s",
    population: "1.3 million",
    timezone: "MYT",
    tagline: "Local SEO Services in Terengganu - Kuala Terengganu Search Excellence",
    description: "Professional local SEO services for Terengganu."
  },
  sabah: {
    code: "sabah",
    name: "Sabah",
    fullName: "Sabah",
    abbreviation: "SBH",
    cities: SABAH_CITIES,
    activeCities: SABAH_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d509168.14!2d116.95!3d5.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x323b!2sSabah!5e0!3m2!1sen!2s",
    population: "3.9 million",
    timezone: "MYT",
    tagline: "Local SEO Services in Sabah - Kota Kinabalu Search Optimization",
    description: "Expert local SEO services for Sabah. From Kota Kinabalu to Sandakan."
  },
  sarawak: {
    code: "sarawak",
    name: "Sarawak",
    fullName: "Sarawak",
    abbreviation: "SWK",
    cities: SARAWAK_CITIES,
    activeCities: SARAWAK_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d509168.14!2d110.35!3d1.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x321d!2sSarawak!5e0!3m2!1sen!2s",
    population: "2.8 million",
    timezone: "MYT",
    tagline: "Local SEO Services in Sarawak - Kuching Search Domination",
    description: "Premier local SEO services for Sarawak. From Kuching to Miri."
  },
  melaka: {
    code: "melaka",
    name: "Melaka",
    fullName: "Melaka",
    abbreviation: "MLK",
    cities: MELAKA_CITIES,
    activeCities: MELAKA_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.14!2d102.25!3d2.19!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d1!2sMelaka!5e0!3m2!1sen!2s",
    population: "0.9 million",
    timezone: "MYT",
    tagline: "Local SEO Services in Melaka - Historic City Search Excellence",
    description: "Professional local SEO services for Melaka."
  },
  perlis: {
    code: "perlis",
    name: "Perlis",
    fullName: "Perlis Indera Kayangan",
    abbreviation: "PLS",
    cities: PERLIS_CITIES,
    activeCities: PERLIS_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.14!2d100.2!3d6.44!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304b!2sPerlis!5e0!3m2!1sen!2s",
    population: "0.3 million",
    timezone: "MYT",
    tagline: "Local SEO Services in Perlis - Kangar Search Optimization",
    description: "Expert local SEO services for Perlis."
  }
};

export const MY_STATE_CODES = Object.keys(MY_STATES);

export const isValidMYState = (code: string): boolean => {
  return code.toLowerCase() in MY_STATES;
};

export const getMYStateData = (code: string): StateDetailData | undefined => {
  return MY_STATES[code.toLowerCase()];
};
