// UAE Emirates configuration with areas/cities

import { StateDetailData, CityData } from "./states-config";

// Dubai areas
export const DXB_CITIES: CityData[] = [
  { name: "Dubai City", code: "dubai-city" },
  { name: "Downtown Dubai", code: "downtown-dubai" },
  { name: "Business Bay", code: "business-bay" },
  { name: "Dubai Marina", code: "dubai-marina" },
  { name: "Jumeirah", code: "jumeirah" },
  { name: "Jumeirah Lake Towers", code: "jlt" },
  { name: "Palm Jumeirah", code: "palm-jumeirah" },
  { name: "Deira", code: "deira" },
  { name: "Bur Dubai", code: "bur-dubai" },
  { name: "Al Barsha", code: "al-barsha" },
  { name: "Al Quoz", code: "al-quoz" },
  { name: "International City", code: "international-city" },
  { name: "Dubai Silicon Oasis", code: "dubai-silicon-oasis" },
  { name: "Dubai Investment Park", code: "dubai-investment-park" }
];

export const DXB_ACTIVE_CITIES: string[] = [
  "dubai-city", "downtown-dubai", "business-bay", "dubai-marina", "jumeirah",
  "jlt", "palm-jumeirah", "deira", "bur-dubai", "al-barsha", "al-quoz",
  "international-city", "dubai-silicon-oasis", "dubai-investment-park"
];

// Abu Dhabi areas
export const AUH_CITIES: CityData[] = [
  { name: "Abu Dhabi City", code: "abu-dhabi-city" },
  { name: "Al Reem Island", code: "al-reem-island" },
  { name: "Yas Island", code: "yas-island" },
  { name: "Saadiyat Island", code: "saadiyat-island" },
  { name: "Khalifa City", code: "khalifa-city" },
  { name: "Mussafah", code: "mussafah" },
  { name: "Al Ain", code: "al-ain" },
  { name: "Al Raha", code: "al-raha" }
];

export const AUH_ACTIVE_CITIES: string[] = [
  "abu-dhabi-city", "al-reem-island", "yas-island", "saadiyat-island",
  "khalifa-city", "mussafah", "al-ain", "al-raha"
];

// Sharjah areas
export const SHJ_CITIES: CityData[] = [
  { name: "Sharjah City", code: "sharjah-city" },
  { name: "Al Nahda Sharjah", code: "al-nahda" },
  { name: "Al Majaz", code: "al-majaz" },
  { name: "Al Taawun", code: "al-taawun" },
  { name: "Al Qasimia", code: "al-qasimia" },
  { name: "Muwaileh", code: "muwaileh" },
  { name: "Kalba", code: "kalba" },
  { name: "Khor Fakkan", code: "khor-fakkan" }
];

export const SHJ_ACTIVE_CITIES: string[] = [
  "sharjah-city", "al-nahda", "al-majaz", "al-taawun",
  "al-qasimia", "muwaileh", "kalba", "khor-fakkan"
];

// Ajman areas
export const AJM_CITIES: CityData[] = [
  { name: "Ajman City", code: "ajman-city" },
  { name: "Al Nuaimiya", code: "al-nuaimiya" },
  { name: "Al Rashidiya", code: "al-rashidiya" },
  { name: "Emirates City", code: "emirates-city" }
];

export const AJM_ACTIVE_CITIES: string[] = [
  "ajman-city", "al-nuaimiya", "al-rashidiya", "emirates-city"
];

// Ras Al Khaimah areas
export const RAK_CITIES: CityData[] = [
  { name: "Ras Al Khaimah City", code: "rak-city" },
  { name: "Al Nakheel", code: "al-nakheel" },
  { name: "Al Hamra", code: "al-hamra" },
  { name: "Khuzam", code: "khuzam" }
];

export const RAK_ACTIVE_CITIES: string[] = [
  "rak-city", "al-nakheel", "al-hamra", "khuzam"
];

// Fujairah areas
export const FUJ_CITIES: CityData[] = [
  { name: "Fujairah City", code: "fujairah-city" },
  { name: "Dibba Al Fujairah", code: "dibba" },
  { name: "Al Faseel", code: "al-faseel" }
];

export const FUJ_ACTIVE_CITIES: string[] = [
  "fujairah-city", "dibba", "al-faseel"
];

// Umm Al Quwain areas
export const UAQ_CITIES: CityData[] = [
  { name: "Umm Al Quwain City", code: "uaq-city" },
  { name: "Al Salama", code: "al-salama" }
];

export const UAQ_ACTIVE_CITIES: string[] = ["uaq-city", "al-salama"];

// UAE Emirates Configuration
export const AE_STATES: Record<string, StateDetailData> = {
  dxb: {
    code: "dxb",
    name: "Dubai",
    fullName: "Emirate of Dubai",
    abbreviation: "DXB",
    cities: DXB_CITIES,
    activeCities: DXB_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.6828tried!2d54.9!3d25.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai!5e0!3m2!1sen!2sae",
    population: "3.4 million",
    timezone: "GST",
    tagline: "خدمات تحسين محركات البحث المحلية في دبي - هيمنة البحث في الإمارات",
    description: "Expert local SEO services across Dubai. From Downtown to Dubai Marina, we help UAE businesses dominate Google Maps and local search results."
  },
  auh: {
    code: "auh",
    name: "Abu Dhabi",
    fullName: "Emirate of Abu Dhabi",
    abbreviation: "AUH",
    cities: AUH_CITIES,
    activeCities: AUH_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d929559.3127097837!2d54.0!3d24.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e67b7c1c1c1c1%3A0x3e5e67b7c1c1c1c1!2sAbu%20Dhabi!5e0!3m2!1sen!2sae",
    population: "1.5 million",
    timezone: "GST",
    tagline: "خدمات تحسين محركات البحث المحلية في أبوظبي - عاصمة الإمارات",
    description: "Premier local SEO services in Abu Dhabi. From Al Reem Island to Yas Island, we boost your Google Maps visibility in the UAE capital."
  },
  shj: {
    code: "shj",
    name: "Sharjah",
    fullName: "Emirate of Sharjah",
    abbreviation: "SHJ",
    cities: SHJ_CITIES,
    activeCities: SHJ_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.682815!2d55.4!3d25.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5dc1c1c1c1c1%3A0x3e5f5dc1c1c1c1c1!2sSharjah!5e0!3m2!1sen!2sae",
    population: "1.8 million",
    timezone: "GST",
    tagline: "خدمات تحسين محركات البحث المحلية في الشارقة",
    description: "Professional local SEO services in Sharjah. We help Sharjah businesses rank higher on Google Maps and local search results."
  },
  ajm: {
    code: "ajm",
    name: "Ajman",
    fullName: "Emirate of Ajman",
    abbreviation: "AJM",
    cities: AJM_CITIES,
    activeCities: AJM_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115640.682815!2d55.5!3d25.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5fc1c1c1c1c1%3A0x3e5f5fc1c1c1c1c1!2sAjman!5e0!3m2!1sen!2sae",
    population: "540,000",
    timezone: "GST",
    tagline: "خدمات تحسين محركات البحث المحلية في عجمان",
    description: "Expert local SEO services in Ajman. We help Ajman businesses dominate local search results and Google Maps."
  },
  rak: {
    code: "rak",
    name: "Ras Al Khaimah",
    fullName: "Emirate of Ras Al Khaimah",
    abbreviation: "RAK",
    cities: RAK_CITIES,
    activeCities: RAK_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.682815!2d55.9!3d25.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef7c1c1c1c1c1c1%3A0x3ef7c1c1c1c1c1c1!2sRas%20al%20Khaimah!5e0!3m2!1sen!2sae",
    population: "350,000",
    timezone: "GST",
    tagline: "خدمات تحسين محركات البحث المحلية في رأس الخيمة",
    description: "Professional local SEO services in Ras Al Khaimah. We boost your Google Maps visibility across RAK."
  },
  fuj: {
    code: "fuj",
    name: "Fujairah",
    fullName: "Emirate of Fujairah",
    abbreviation: "FUJ",
    cities: FUJ_CITIES,
    activeCities: FUJ_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231280.682815!2d56.3!3d25.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef4c1c1c1c1c1c1%3A0x3ef4c1c1c1c1c1c1!2sFujairah!5e0!3m2!1sen!2sae",
    population: "230,000",
    timezone: "GST",
    tagline: "خدمات تحسين محركات البحث المحلية في الفجيرة",
    description: "Expert local SEO services in Fujairah. We help Fujairah businesses rank higher on Google Maps."
  },
  uaq: {
    code: "uaq",
    name: "Umm Al Quwain",
    fullName: "Emirate of Umm Al Quwain",
    abbreviation: "UAQ",
    cities: UAQ_CITIES,
    activeCities: UAQ_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115640.682815!2d55.55!3d25.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6c1c1c1c1c1c%3A0x3e5f6c1c1c1c1c1c!2sUmm%20Al%20Quwain!5e0!3m2!1sen!2sae",
    population: "80,000",
    timezone: "GST",
    tagline: "خدمات تحسين محركات البحث المحلية في أم القيوين",
    description: "Professional local SEO services in Umm Al Quwain. We help UAQ businesses dominate local search."
  }
};

export const AE_STATE_CODES = Object.keys(AE_STATES);

export const isValidAEState = (code: string): boolean => {
  return code.toLowerCase() in AE_STATES;
};

export const getAEStateData = (code: string): StateDetailData | undefined => {
  return AE_STATES[code.toLowerCase()];
};

export const isAECityActive = (stateCode: string, cityCode: string): boolean => {
  const state = AE_STATES[stateCode.toLowerCase()];
  return state?.activeCities.includes(cityCode.toLowerCase()) ?? false;
};

export const isValidAECity = (stateCode: string, cityCode: string): boolean => {
  const state = AE_STATES[stateCode.toLowerCase()];
  if (!state) return false;
  return state.cities.some(c => c.code === cityCode.toLowerCase());
};
