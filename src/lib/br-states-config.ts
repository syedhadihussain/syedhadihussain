// Brazil states configuration with cities

import { StateDetailData, CityData } from "./states-config";

// São Paulo state cities
export const SAO_PAULO_CITIES: CityData[] = [
  { name: "São Paulo", code: "sao-paulo" },
  { name: "Campinas", code: "campinas" },
  { name: "Santos", code: "santos" },
  { name: "Guarulhos", code: "guarulhos" },
  { name: "Osasco", code: "osasco" },
  { name: "Ribeirão Preto", code: "ribeirao-preto" },
  { name: "Sorocaba", code: "sorocaba" }
];

// Rio de Janeiro state cities
export const RIO_DE_JANEIRO_CITIES: CityData[] = [
  { name: "Rio de Janeiro", code: "rio-de-janeiro" },
  { name: "Niterói", code: "niteroi" },
  { name: "São Gonçalo", code: "sao-goncalo" },
  { name: "Duque de Caxias", code: "duque-de-caxias" },
  { name: "Nova Iguaçu", code: "nova-iguacu" }
];

// Minas Gerais cities
export const MINAS_GERAIS_CITIES: CityData[] = [
  { name: "Belo Horizonte", code: "belo-horizonte" },
  { name: "Uberlândia", code: "uberlandia" },
  { name: "Contagem", code: "contagem" },
  { name: "Juiz de Fora", code: "juiz-de-fora" },
  { name: "Betim", code: "betim" }
];

// Paraná cities
export const PARANA_CITIES: CityData[] = [
  { name: "Curitiba", code: "curitiba" },
  { name: "Londrina", code: "londrina" },
  { name: "Maringá", code: "maringa" },
  { name: "Ponta Grossa", code: "ponta-grossa" },
  { name: "Cascavel", code: "cascavel" }
];

// Rio Grande do Sul cities
export const RIO_GRANDE_DO_SUL_CITIES: CityData[] = [
  { name: "Porto Alegre", code: "porto-alegre" },
  { name: "Caxias do Sul", code: "caxias-do-sul" },
  { name: "Pelotas", code: "pelotas" },
  { name: "Canoas", code: "canoas" },
  { name: "Gramado", code: "gramado" }
];

// Bahia cities
export const BAHIA_CITIES: CityData[] = [
  { name: "Salvador", code: "salvador" },
  { name: "Feira de Santana", code: "feira-de-santana" },
  { name: "Vitória da Conquista", code: "vitoria-da-conquista" },
  { name: "Camaçari", code: "camacari" }
];

// Santa Catarina cities
export const SANTA_CATARINA_CITIES: CityData[] = [
  { name: "Florianópolis", code: "florianopolis" },
  { name: "Joinville", code: "joinville" },
  { name: "Blumenau", code: "blumenau" },
  { name: "Balneário Camboriú", code: "balneario-camboriu" }
];

// Federal District cities
export const DISTRITO_FEDERAL_CITIES: CityData[] = [
  { name: "Brasília", code: "brasilia" },
  { name: "Taguatinga", code: "taguatinga" },
  { name: "Ceilândia", code: "ceilandia" }
];

// Brazil States Configuration
export const BR_STATES: Record<string, StateDetailData> = {
  "sao-paulo": {
    code: "sao-paulo",
    name: "São Paulo",
    fullName: "State of São Paulo",
    abbreviation: "SP",
    cities: SAO_PAULO_CITIES,
    activeCities: SAO_PAULO_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467876.36!2d-46.63!3d-23.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2sS%C3%A3o%20Paulo%2C%20Brazil!5e0!3m2!1sen!2s",
    population: "46.2 million",
    timezone: "BRT",
    tagline: "Local SEO Services in São Paulo - Brazil's Economic Capital Search Domination",
    description: "Expert local SEO services across São Paulo. Latin America's largest city."
  },
  "rio-de-janeiro": {
    code: "rio-de-janeiro",
    name: "Rio de Janeiro",
    fullName: "State of Rio de Janeiro",
    abbreviation: "RJ",
    cities: RIO_DE_JANEIRO_CITIES,
    activeCities: RIO_DE_JANEIRO_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467876.36!2d-43.17!3d-22.91!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bde!2sRio%20de%20Janeiro%2C%20Brazil!5e0!3m2!1sen!2s",
    population: "17.4 million",
    timezone: "BRT",
    tagline: "Local SEO Services in Rio de Janeiro - Cidade Maravilhosa Search Excellence",
    description: "Premier local SEO services for Rio de Janeiro. Tourism and business optimization."
  },
  "minas-gerais": {
    code: "minas-gerais",
    name: "Minas Gerais",
    fullName: "State of Minas Gerais",
    abbreviation: "MG",
    cities: MINAS_GERAIS_CITIES,
    activeCities: MINAS_GERAIS_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d567876.36!2d-43.94!3d-19.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69!2sBelo%20Horizonte%2C%20Brazil!5e0!3m2!1sen!2s",
    population: "21.4 million",
    timezone: "BRT",
    tagline: "Local SEO Services in Minas Gerais - Belo Horizonte Search Optimization",
    description: "Professional local SEO services for Minas Gerais."
  },
  parana: {
    code: "parana",
    name: "Paraná",
    fullName: "State of Paraná",
    abbreviation: "PR",
    cities: PARANA_CITIES,
    activeCities: PARANA_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d367876.36!2d-49.27!3d-25.43!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dc!2sCuritiba%2C%20Brazil!5e0!3m2!1sen!2s",
    population: "11.6 million",
    timezone: "BRT",
    tagline: "Local SEO Services in Paraná - Curitiba Innovation Hub Search Excellence",
    description: "Expert local SEO services for Paraná."
  },
  "rio-grande-do-sul": {
    code: "rio-grande-do-sul",
    name: "Rio Grande do Sul",
    fullName: "State of Rio Grande do Sul",
    abbreviation: "RS",
    cities: RIO_GRANDE_DO_SUL_CITIES,
    activeCities: RIO_GRANDE_DO_SUL_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d367876.36!2d-51.23!3d-30.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519!2sPorto%20Alegre%2C%20Brazil!5e0!3m2!1sen!2s",
    population: "11.5 million",
    timezone: "BRT",
    tagline: "Local SEO Services in Rio Grande do Sul - Porto Alegre Search Domination",
    description: "Premier local SEO services for Rio Grande do Sul."
  },
  bahia: {
    code: "bahia",
    name: "Bahia",
    fullName: "State of Bahia",
    abbreviation: "BA",
    cities: BAHIA_CITIES,
    activeCities: BAHIA_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467876.36!2d-38.51!3d-12.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716!2sSalvador%2C%20Brazil!5e0!3m2!1sen!2s",
    population: "14.9 million",
    timezone: "BRT",
    tagline: "Local SEO Services in Bahia - Salvador Tourism Search Excellence",
    description: "Professional local SEO services for Bahia."
  },
  "santa-catarina": {
    code: "santa-catarina",
    name: "Santa Catarina",
    fullName: "State of Santa Catarina",
    abbreviation: "SC",
    cities: SANTA_CATARINA_CITIES,
    activeCities: SANTA_CATARINA_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d367876.36!2d-48.55!3d-27.59!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527!2sFlorianopolis%2C%20Brazil!5e0!3m2!1sen!2s",
    population: "7.3 million",
    timezone: "BRT",
    tagline: "Local SEO Services in Santa Catarina - Florianópolis Beach Paradise Search Optimization",
    description: "Expert local SEO services for Santa Catarina."
  },
  "distrito-federal": {
    code: "distrito-federal",
    name: "Federal District",
    fullName: "Distrito Federal",
    abbreviation: "DF",
    cities: DISTRITO_FEDERAL_CITIES,
    activeCities: DISTRITO_FEDERAL_CITIES.map(c => c.code),
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245876.36!2d-47.93!3d-15.79!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935!2sBras%C3%ADlia%2C%20Brazil!5e0!3m2!1sen!2s",
    population: "3.1 million",
    timezone: "BRT",
    tagline: "Local SEO Services in Brasília - Brazilian Capital Search Domination",
    description: "Premier local SEO services for Brasília and Federal District."
  }
};

export const BR_STATE_CODES = Object.keys(BR_STATES);

export const isValidBRState = (code: string): boolean => {
  return code.toLowerCase() in BR_STATES;
};

export const getBRStateData = (code: string): StateDetailData | undefined => {
  return BR_STATES[code.toLowerCase()];
};
