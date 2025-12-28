// Germany states (Bundesländer) configuration with cities

import { StateDetailData, CityData } from "./states-config";

// Baden-Württemberg cities
export const BW_CITIES: CityData[] = [
  { name: "Stuttgart", code: "stuttgart" },
  { name: "Mannheim", code: "mannheim" },
  { name: "Karlsruhe", code: "karlsruhe" },
  { name: "Heidelberg", code: "heidelberg" },
  { name: "Freiburg im Breisgau", code: "freiburg" },
  { name: "Heilbronn", code: "heilbronn" },
  { name: "Pforzheim", code: "pforzheim" },
  { name: "Ulm", code: "ulm" },
  { name: "Tübingen", code: "tubingen" },
  { name: "Reutlingen", code: "reutlingen" }
];

export const BW_ACTIVE_CITIES: string[] = [
  "stuttgart", "mannheim", "karlsruhe", "heidelberg", "freiburg",
  "heilbronn", "pforzheim", "ulm", "tubingen", "reutlingen"
];

// Bavaria cities
export const BY_CITIES: CityData[] = [
  { name: "Munich", code: "munich" },
  { name: "Nuremberg", code: "nuremberg" },
  { name: "Augsburg", code: "augsburg" },
  { name: "Regensburg", code: "regensburg" },
  { name: "Ingolstadt", code: "ingolstadt" },
  { name: "Würzburg", code: "wurzburg" },
  { name: "Erlangen", code: "erlangen" },
  { name: "Bamberg", code: "bamberg" },
  { name: "Bayreuth", code: "bayreuth" },
  { name: "Fürth", code: "furth" }
];

export const BY_ACTIVE_CITIES: string[] = [
  "munich", "nuremberg", "augsburg", "regensburg", "ingolstadt",
  "wurzburg", "erlangen", "bamberg", "bayreuth", "furth"
];

// Berlin cities (districts)
export const BE_CITIES: CityData[] = [
  { name: "Berlin Mitte", code: "berlin-mitte" },
  { name: "Charlottenburg", code: "charlottenburg" },
  { name: "Kreuzberg", code: "kreuzberg" },
  { name: "Friedrichshain", code: "friedrichshain" },
  { name: "Neukölln", code: "neukolln" },
  { name: "Wedding", code: "wedding" },
  { name: "Prenzlauer Berg", code: "prenzlauer-berg" },
  { name: "Schöneberg", code: "schoneberg" }
];

export const BE_ACTIVE_CITIES: string[] = [
  "berlin-mitte", "charlottenburg", "kreuzberg", "friedrichshain",
  "neukolln", "wedding", "prenzlauer-berg", "schoneberg"
];

// North Rhine-Westphalia cities
export const NW_CITIES: CityData[] = [
  { name: "Cologne", code: "cologne" },
  { name: "Düsseldorf", code: "dusseldorf" },
  { name: "Dortmund", code: "dortmund" },
  { name: "Essen", code: "essen" },
  { name: "Duisburg", code: "duisburg" },
  { name: "Bochum", code: "bochum" },
  { name: "Wuppertal", code: "wuppertal" },
  { name: "Bonn", code: "bonn" },
  { name: "Aachen", code: "aachen" },
  { name: "Oberhausen", code: "oberhausen" },
  { name: "Krefeld", code: "krefeld" },
  { name: "Mönchengladbach", code: "monchengladbach" },
  { name: "Leverkusen", code: "leverkusen" }
];

export const NW_ACTIVE_CITIES: string[] = [
  "cologne", "dusseldorf", "dortmund", "essen", "duisburg", "bochum",
  "wuppertal", "bonn", "aachen", "oberhausen", "krefeld", "monchengladbach", "leverkusen"
];

// Hesse cities
export const HE_CITIES: CityData[] = [
  { name: "Frankfurt am Main", code: "frankfurt" },
  { name: "Wiesbaden", code: "wiesbaden" },
  { name: "Kassel", code: "kassel" },
  { name: "Gießen", code: "giessen" },
  { name: "Marburg", code: "marburg" },
  { name: "Darmstadt", code: "darmstadt" },
  { name: "Offenbach am Main", code: "offenbach" },
  { name: "Hanau", code: "hanau" }
];

export const HE_ACTIVE_CITIES: string[] = [
  "frankfurt", "wiesbaden", "kassel", "giessen", "marburg",
  "darmstadt", "offenbach", "hanau"
];

// Lower Saxony cities
export const NI_CITIES: CityData[] = [
  { name: "Hannover", code: "hannover" },
  { name: "Braunschweig", code: "braunschweig" },
  { name: "Oldenburg", code: "oldenburg" },
  { name: "Osnabrück", code: "osnabruck" },
  { name: "Wolfsburg", code: "wolfsburg" },
  { name: "Hildesheim", code: "hildesheim" },
  { name: "Lüneburg", code: "luneburg" },
  { name: "Göttingen", code: "gottingen" }
];

export const NI_ACTIVE_CITIES: string[] = [
  "hannover", "braunschweig", "oldenburg", "osnabruck",
  "wolfsburg", "hildesheim", "luneburg", "gottingen"
];

// Mecklenburg-Vorpommern cities
export const MV_CITIES: CityData[] = [
  { name: "Rostock", code: "rostock" },
  { name: "Schwerin", code: "schwerin" },
  { name: "Stralsund", code: "stralsund" },
  { name: "Greifswald", code: "greifswald" }
];

export const MV_ACTIVE_CITIES: string[] = [
  "rostock", "schwerin", "stralsund", "greifswald"
];

// Saxony cities
export const SN_CITIES: CityData[] = [
  { name: "Dresden", code: "dresden" },
  { name: "Leipzig", code: "leipzig" },
  { name: "Chemnitz", code: "chemnitz" },
  { name: "Zwickau", code: "zwickau" }
];

export const SN_ACTIVE_CITIES: string[] = [
  "dresden", "leipzig", "chemnitz", "zwickau"
];

// Saxony-Anhalt cities
export const ST_CITIES: CityData[] = [
  { name: "Halle Saale", code: "halle" },
  { name: "Magdeburg", code: "magdeburg" },
  { name: "Dessau-Roßlau", code: "dessau" },
  { name: "Wittenberg", code: "wittenberg" },
  { name: "Halberstadt", code: "halberstadt" }
];

export const ST_ACTIVE_CITIES: string[] = [
  "halle", "magdeburg", "dessau", "wittenberg", "halberstadt"
];

// Schleswig-Holstein cities
export const SH_CITIES: CityData[] = [
  { name: "Kiel", code: "kiel" },
  { name: "Lübeck", code: "lubeck" },
  { name: "Flensburg", code: "flensburg" },
  { name: "Neumünster", code: "neumunster" },
  { name: "Elmshorn", code: "elmshorn" }
];

export const SH_ACTIVE_CITIES: string[] = [
  "kiel", "lubeck", "flensburg", "neumunster", "elmshorn"
];

// Thuringia cities
export const TH_CITIES: CityData[] = [
  { name: "Erfurt", code: "erfurt" },
  { name: "Jena", code: "jena" },
  { name: "Weimar", code: "weimar" },
  { name: "Gera", code: "gera" },
  { name: "Gotha", code: "gotha" }
];

export const TH_ACTIVE_CITIES: string[] = [
  "erfurt", "jena", "weimar", "gera", "gotha"
];

// Brandenburg cities
export const BB_CITIES: CityData[] = [
  { name: "Potsdam", code: "potsdam" },
  { name: "Cottbus", code: "cottbus" },
  { name: "Brandenburg an der Havel", code: "brandenburg-havel" },
  { name: "Frankfurt Oder", code: "frankfurt-oder" }
];

export const BB_ACTIVE_CITIES: string[] = [
  "potsdam", "cottbus", "brandenburg-havel", "frankfurt-oder"
];

// Bremen cities
export const HB_CITIES: CityData[] = [
  { name: "Bremen", code: "bremen" },
  { name: "Bremerhaven", code: "bremerhaven" }
];

export const HB_ACTIVE_CITIES: string[] = ["bremen", "bremerhaven"];

// Hamburg cities (districts)
export const HH_CITIES: CityData[] = [
  { name: "Hamburg City", code: "hamburg-city" },
  { name: "Eimsbüttel", code: "eimsbuttel" },
  { name: "Wandsbek", code: "wandsbek" },
  { name: "Altona", code: "altona" },
  { name: "Harburg", code: "harburg" }
];

export const HH_ACTIVE_CITIES: string[] = [
  "hamburg-city", "eimsbuttel", "wandsbek", "altona", "harburg"
];

// Rhineland-Palatinate cities
export const RP_CITIES: CityData[] = [
  { name: "Mainz", code: "mainz" },
  { name: "Ludwigshafen", code: "ludwigshafen" },
  { name: "Koblenz", code: "koblenz" },
  { name: "Trier", code: "trier" },
  { name: "Kaiserslautern", code: "kaiserslautern" }
];

export const RP_ACTIVE_CITIES: string[] = [
  "mainz", "ludwigshafen", "koblenz", "trier", "kaiserslautern"
];

// Saarland cities
export const SL_CITIES: CityData[] = [
  { name: "Saarbrücken", code: "saarbrucken" },
  { name: "Neunkirchen", code: "neunkirchen" },
  { name: "Homburg", code: "homburg" }
];

export const SL_ACTIVE_CITIES: string[] = [
  "saarbrucken", "neunkirchen", "homburg"
];

// Germany States Configuration
export const DE_STATES: Record<string, StateDetailData> = {
  bw: {
    code: "bw",
    name: "Baden-Württemberg",
    fullName: "Baden-Württemberg",
    abbreviation: "BW",
    cities: BW_CITIES,
    activeCities: BW_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1387285.447929567!2d8.5!3d48.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799c1c1c1c1c1c1%3A0x4799c1c1c1c1c1c1!2sBaden-W%C3%BCrttemberg%2C%20Germany!5e0!3m2!1sen!2s",
    population: "11.1 million",
    timezone: "CET/CEST",
    tagline: "Lokale SEO-Dienste in Baden-Württemberg - Stuttgart & Mannheim Suchoptimierung",
    description: "Professionelle lokale SEO-Dienste in Baden-Württemberg. Von Stuttgart bis Heidelberg helfen wir Unternehmen, in Google Maps höher zu ranken."
  },
  by: {
    code: "by",
    name: "Bavaria",
    fullName: "Bavaria (Bayern)",
    abbreviation: "BY",
    cities: BY_CITIES,
    activeCities: BY_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687285.447929567!2d11.5!3d48.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e1c1c1c1c1c1c%3A0x479e1c1c1c1c1c1c!2sBavaria%2C%20Germany!5e0!3m2!1sen!2s",
    population: "13.1 million",
    timezone: "CET/CEST",
    tagline: "Lokale SEO-Dienste in Bayern - München & Nürnberg Suchdomination",
    description: "Erstklassige lokale SEO-Dienste in Bayern. Von München bis Nürnberg steigern wir Ihre Sichtbarkeit in Google Maps."
  },
  be: {
    code: "be",
    name: "Berlin",
    fullName: "Berlin",
    abbreviation: "BE",
    cities: BE_CITIES,
    activeCities: BE_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387285.447929567!2d13.4!3d52.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e1c1c1c1c1c%3A0x47a84e1c1c1c1c1c!2sBerlin%2C%20Germany!5e0!3m2!1sen!2s",
    population: "3.6 million",
    timezone: "CET/CEST",
    tagline: "Lokale SEO-Dienste in Berlin - Hauptstadt Suchoptimierung",
    description: "Experten-SEO-Dienste in Berlin. Wir helfen Berliner Unternehmen, in lokalen Suchergebnissen zu dominieren."
  },
  nw: {
    code: "nw",
    name: "North Rhine-Westphalia",
    fullName: "North Rhine-Westphalia (Nordrhein-Westfalen)",
    abbreviation: "NW",
    cities: NW_CITIES,
    activeCities: NW_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1587285.447929567!2d7.5!3d51.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8c1c1c1c1c1c1%3A0x47b8c1c1c1c1c1c1!2sNorth%20Rhine-Westphalia%2C%20Germany!5e0!3m2!1sen!2s",
    population: "17.9 million",
    timezone: "CET/CEST",
    tagline: "Lokale SEO-Dienste in NRW - Köln, Düsseldorf & Ruhrgebiet Suchexperten",
    description: "Professionelle lokale SEO-Dienste in Nordrhein-Westfalen. Von Köln bis Düsseldorf dominieren Sie die lokale Suche."
  },
  he: {
    code: "he",
    name: "Hesse",
    fullName: "Hesse (Hessen)",
    abbreviation: "HE",
    cities: HE_CITIES,
    activeCities: HE_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d987285.447929567!2d9.0!3d50.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd1c1c1c1c1c1c%3A0x47bd1c1c1c1c1c1c!2sHesse%2C%20Germany!5e0!3m2!1sen!2s",
    population: "6.3 million",
    timezone: "CET/CEST",
    tagline: "Lokale SEO-Dienste in Hessen - Frankfurt & Wiesbaden Suchoptimierung",
    description: "Experten-SEO-Dienste in Hessen. Wir helfen Frankfurter Unternehmen, in Google Maps höher zu ranken."
  },
  ni: {
    code: "ni",
    name: "Lower Saxony",
    fullName: "Lower Saxony (Niedersachsen)",
    abbreviation: "NI",
    cities: NI_CITIES,
    activeCities: NI_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1887285.447929567!2d9.5!3d52.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b0c1c1c1c1c1c1%3A0x47b0c1c1c1c1c1c1!2sLower%20Saxony%2C%20Germany!5e0!3m2!1sen!2s",
    population: "8.0 million",
    timezone: "CET/CEST",
    tagline: "Lokale SEO-Dienste in Niedersachsen - Hannover & Braunschweig Suchexperten",
    description: "Professionelle lokale SEO-Dienste in Niedersachsen. Von Hannover bis Wolfsburg steigern wir Ihre lokale Sichtbarkeit."
  },
  mv: {
    code: "mv",
    name: "Mecklenburg-Vorpommern",
    fullName: "Mecklenburg-Vorpommern",
    abbreviation: "MV",
    cities: MV_CITIES,
    activeCities: MV_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1187285.447929567!2d12.5!3d53.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ac1c1c1c1c1c1c%3A0x47ac1c1c1c1c1c1c!2sMecklenburg-Vorpommern%2C%20Germany!5e0!3m2!1sen!2s",
    population: "1.6 million",
    timezone: "CET/CEST",
    tagline: "Lokale SEO-Dienste in Mecklenburg-Vorpommern - Rostock & Schwerin",
    description: "Experten-SEO-Dienste in Mecklenburg-Vorpommern. Wir helfen Rostocker Unternehmen, lokal zu ranken."
  },
  sn: {
    code: "sn",
    name: "Saxony",
    fullName: "Saxony (Sachsen)",
    abbreviation: "SN",
    cities: SN_CITIES,
    activeCities: SN_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d987285.447929567!2d13.0!3d51.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a7c1c1c1c1c1c1%3A0x47a7c1c1c1c1c1c1!2sSaxony%2C%20Germany!5e0!3m2!1sen!2s",
    population: "4.1 million",
    timezone: "CET/CEST",
    tagline: "Lokale SEO-Dienste in Sachsen - Dresden & Leipzig Suchoptimierung",
    description: "Professionelle lokale SEO-Dienste in Sachsen. Von Dresden bis Leipzig helfen wir Ihnen, in Google Maps zu dominieren."
  },
  st: {
    code: "st",
    name: "Saxony-Anhalt",
    fullName: "Saxony-Anhalt (Sachsen-Anhalt)",
    abbreviation: "ST",
    cities: ST_CITIES,
    activeCities: ST_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d987285.447929567!2d11.5!3d51.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a5c1c1c1c1c1c1%3A0x47a5c1c1c1c1c1c1!2sSaxony-Anhalt%2C%20Germany!5e0!3m2!1sen!2s",
    population: "2.2 million",
    timezone: "CET/CEST",
    tagline: "Lokale SEO-Dienste in Sachsen-Anhalt - Magdeburg & Halle Suchexperten",
    description: "Experten-SEO-Dienste in Sachsen-Anhalt. Wir helfen Magdeburger Unternehmen, in lokalen Suchergebnissen zu ranken."
  },
  sh: {
    code: "sh",
    name: "Schleswig-Holstein",
    fullName: "Schleswig-Holstein",
    abbreviation: "SH",
    cities: SH_CITIES,
    activeCities: SH_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d787285.447929567!2d9.8!3d54.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b2c1c1c1c1c1c1%3A0x47b2c1c1c1c1c1c1!2sSchleswig-Holstein%2C%20Germany!5e0!3m2!1sen!2s",
    population: "2.9 million",
    timezone: "CET/CEST",
    tagline: "Lokale SEO-Dienste in Schleswig-Holstein - Kiel & Lübeck Suchoptimierung",
    description: "Professionelle lokale SEO-Dienste in Schleswig-Holstein. Von Kiel bis Lübeck steigern wir Ihre Google Maps Sichtbarkeit."
  },
  th: {
    code: "th",
    name: "Thuringia",
    fullName: "Thuringia (Thüringen)",
    abbreviation: "TH",
    cities: TH_CITIES,
    activeCities: TH_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d687285.447929567!2d11.0!3d50.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a4c1c1c1c1c1c1%3A0x47a4c1c1c1c1c1c1!2sThuringia%2C%20Germany!5e0!3m2!1sen!2s",
    population: "2.1 million",
    timezone: "CET/CEST",
    tagline: "Lokale SEO-Dienste in Thüringen - Erfurt & Jena Suchexperten",
    description: "Experten-SEO-Dienste in Thüringen. Wir helfen Erfurter Unternehmen, in lokalen Suchergebnissen zu dominieren."
  },
  bb: {
    code: "bb",
    name: "Brandenburg",
    fullName: "Brandenburg",
    abbreviation: "BB",
    cities: BB_CITIES,
    activeCities: BB_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1287285.447929567!2d13.5!3d52.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8c1c1c1c1c1c1%3A0x47a8c1c1c1c1c1c1!2sBrandenburg%2C%20Germany!5e0!3m2!1sen!2s",
    population: "2.5 million",
    timezone: "CET/CEST",
    tagline: "Lokale SEO-Dienste in Brandenburg - Potsdam & Cottbus Suchoptimierung",
    description: "Professionelle lokale SEO-Dienste in Brandenburg. Von Potsdam bis Cottbus helfen wir Unternehmen lokal zu ranken."
  },
  hb: {
    code: "hb",
    name: "Bremen",
    fullName: "Bremen",
    abbreviation: "HB",
    cities: HB_CITIES,
    activeCities: HB_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d287285.447929567!2d8.8!3d53.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b1c1c1c1c1c1c1%3A0x47b1c1c1c1c1c1c1!2sBremen%2C%20Germany!5e0!3m2!1sen!2s",
    population: "680,000",
    timezone: "CET/CEST",
    tagline: "Lokale SEO-Dienste in Bremen - Hansestadt Suchexperten",
    description: "Experten-SEO-Dienste in Bremen. Wir helfen Bremer Unternehmen, in Google Maps höher zu ranken."
  },
  hh: {
    code: "hh",
    name: "Hamburg",
    fullName: "Hamburg",
    abbreviation: "HH",
    cities: HH_CITIES,
    activeCities: HH_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387285.447929567!2d10.0!3d53.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b1c1c1c1c1c1c1%3A0x47b1c1c1c1c1c1c1!2sHamburg%2C%20Germany!5e0!3m2!1sen!2s",
    population: "1.9 million",
    timezone: "CET/CEST",
    tagline: "Lokale SEO-Dienste in Hamburg - Hansestadt Suchoptimierung",
    description: "Professionelle lokale SEO-Dienste in Hamburg. Wir helfen Hamburger Unternehmen, in lokalen Suchergebnissen zu dominieren."
  },
  rp: {
    code: "rp",
    name: "Rhineland-Palatinate",
    fullName: "Rhineland-Palatinate (Rheinland-Pfalz)",
    abbreviation: "RP",
    cities: RP_CITIES,
    activeCities: RP_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d987285.447929567!2d7.5!3d49.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479bc1c1c1c1c1c1%3A0x479bc1c1c1c1c1c1!2sRhineland-Palatinate%2C%20Germany!5e0!3m2!1sen!2s",
    population: "4.1 million",
    timezone: "CET/CEST",
    tagline: "Lokale SEO-Dienste in Rheinland-Pfalz - Mainz & Koblenz Suchexperten",
    description: "Experten-SEO-Dienste in Rheinland-Pfalz. Von Mainz bis Trier helfen wir Unternehmen, lokal zu ranken."
  },
  sl: {
    code: "sl",
    name: "Saarland",
    fullName: "Saarland",
    abbreviation: "SL",
    cities: SL_CITIES,
    activeCities: SL_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387285.447929567!2d7.0!3d49.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ac1c1c1c1c1c1%3A0x479ac1c1c1c1c1c1!2sSaarland%2C%20Germany!5e0!3m2!1sen!2s",
    population: "990,000",
    timezone: "CET/CEST",
    tagline: "Lokale SEO-Dienste im Saarland - Saarbrücken Suchoptimierung",
    description: "Professionelle lokale SEO-Dienste im Saarland. Wir helfen Saarbrücker Unternehmen, in Google Maps zu dominieren."
  }
};

export const DE_STATE_CODES = Object.keys(DE_STATES);

export const isValidDEState = (code: string): boolean => {
  return code.toLowerCase() in DE_STATES;
};

export const getDEStateData = (code: string): StateDetailData | undefined => {
  return DE_STATES[code.toLowerCase()];
};

export const isDECityActive = (stateCode: string, cityCode: string): boolean => {
  const state = DE_STATES[stateCode.toLowerCase()];
  return state?.activeCities.includes(cityCode.toLowerCase()) ?? false;
};

export const isValidDECity = (stateCode: string, cityCode: string): boolean => {
  const state = DE_STATES[stateCode.toLowerCase()];
  if (!state) return false;
  return state.cities.some(c => c.code === cityCode.toLowerCase());
};
