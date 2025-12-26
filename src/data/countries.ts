import { SupportedLanguage } from "@/lib/i18n-config";

export interface CountryData {
  slug: string;
  code: string;
  name: Record<SupportedLanguage, string>;
  heroTitle: Record<SupportedLanguage, string>;
  heroSubtitle: Record<SupportedLanguage, string>;
  heroDescription: Record<SupportedLanguage, string>;
  mapDescription: Record<SupportedLanguage, string>;
  regions: string[];
  flag: string;
  coordinates: { lat: number; lng: number };
  zoom: number;
}

export const COUNTRIES: CountryData[] = [
  {
    slug: "us",
    code: "US",
    name: {
      en: "United States",
      ar: "الولايات المتحدة",
      es: "Estados Unidos",
      pt: "Estados Unidos",
      fr: "États-Unis",
      it: "Stati Uniti",
      de: "Vereinigte Staaten"
    },
    heroTitle: {
      en: "Local SEO Services in United States",
      ar: "خدمات SEO المحلي في الولايات المتحدة",
      es: "Servicios de SEO Local en Estados Unidos",
      pt: "Serviços de SEO Local nos Estados Unidos",
      fr: "Services SEO Local aux États-Unis",
      it: "Servizi SEO Locale negli Stati Uniti",
      de: "Lokale SEO-Dienste in den Vereinigten Staaten"
    },
    heroSubtitle: {
      en: "Your Local SEO Specialist & Expert in the USA",
      ar: "متخصص وخبير SEO المحلي في الولايات المتحدة",
      es: "Tu Especialista y Experto en SEO Local en EE.UU.",
      pt: "Seu Especialista e Expert em SEO Local nos EUA",
      fr: "Votre Spécialiste et Expert SEO Local aux USA",
      it: "Il Tuo Specialista ed Esperto SEO Locale negli USA",
      de: "Ihr Local SEO Spezialist & Experte in den USA"
    },
    heroDescription: {
      en: "Dominate Google Maps and local search results across all 50 US states. I help American businesses achieve top rankings on Google, Apple Maps, Bing Maps, and AI-powered search engines, converting local searches into paying customers.",
      ar: "سيطر على خرائط Google ونتائج البحث المحلي في جميع الولايات الأمريكية الـ 50. أساعد الشركات الأمريكية على تحقيق أعلى التصنيفات على Google و Apple Maps و Bing Maps ومحركات البحث المدعومة بالذكاء الاصطناعي.",
      es: "Domina Google Maps y los resultados de búsqueda local en los 50 estados de EE.UU. Ayudo a empresas estadounidenses a lograr los primeros puestos en Google, Apple Maps, Bing Maps y motores de búsqueda con IA.",
      pt: "Domine o Google Maps e os resultados de busca local em todos os 50 estados dos EUA. Ajudo empresas americanas a alcançar as primeiras posições no Google, Apple Maps, Bing Maps e mecanismos de busca com IA.",
      fr: "Dominez Google Maps et les résultats de recherche locaux dans les 50 états américains. J'aide les entreprises américaines à atteindre les premières positions sur Google, Apple Maps, Bing Maps et les moteurs de recherche IA.",
      it: "Domina Google Maps e i risultati di ricerca locale in tutti i 50 stati USA. Aiuto le aziende americane a raggiungere le prime posizioni su Google, Apple Maps, Bing Maps e motori di ricerca IA.",
      de: "Dominieren Sie Google Maps und lokale Suchergebnisse in allen 50 US-Bundesstaaten. Ich helfe amerikanischen Unternehmen, Top-Rankings bei Google, Apple Maps, Bing Maps und KI-Suchmaschinen zu erreichen."
    },
    mapDescription: {
      en: "Serving businesses across all 50 US states with comprehensive Local SEO services",
      ar: "نخدم الشركات في جميع الولايات الأمريكية الـ 50 بخدمات SEO المحلي الشاملة",
      es: "Sirviendo a empresas en los 50 estados de EE.UU. con servicios completos de SEO Local",
      pt: "Atendendo empresas em todos os 50 estados dos EUA com serviços completos de SEO Local",
      fr: "Au service des entreprises dans les 50 états américains avec des services SEO Local complets",
      it: "Al servizio delle aziende in tutti i 50 stati USA con servizi SEO Locale completi",
      de: "Wir bedienen Unternehmen in allen 50 US-Bundesstaaten mit umfassenden Local SEO-Diensten"
    },
    regions: [
      "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
      "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
      "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
      "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
      "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
      "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
      "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
    ],
    flag: "🇺🇸",
    coordinates: { lat: 39.8283, lng: -98.5795 },
    zoom: 4
  }
  // More countries will be added here following the same structure
];

export const getCountryBySlug = (slug: string): CountryData | undefined => {
  return COUNTRIES.find(country => country.slug === slug);
};

export const getAllCountrySlugs = (): string[] => {
  return COUNTRIES.map(country => country.slug);
};
