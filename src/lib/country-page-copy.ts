import { CountryData } from "@/lib/countries-config";

export type CountryPageCopy = {
  heroTitlePrefix: string;
  heroDescription: string;
  authorityTitle: string;
  authoritySubtitle: string;
  servicesTitle: string;
  servicesSubtitle: string;
  mapTitle: string;
  mapDescription: string;
  ctaTitle: string;
  ctaSubtitle: string;
  contactTitle: string;
  contactSubtitle: string;
};

const hashString = (input: string) => {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0;
  }
  return hash;
};

const formatList = (items: string[]) => {
  if (items.length === 0) return "";
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
};

export const getCountryTopAreas = (country: CountryData, max = 3) => {
  const areas = (country.states ?? []).slice(0, Math.max(0, max)).map((s) => s.name);
  return areas.filter(Boolean);
};

const heroTitlePrefixes = [
  "Boost Your Local Visibility",
  "Rank Higher on Google Maps",
  "Turn Local Searches Into Calls",
  "Win More Customers From Nearby Searches",
  "Get Found First When People Search",
  "Become the Top Choice on Google",
  "Local SEO Services That Drive Leads",
  "Be Visible Where Customers Decide",
  "Outrank Competitors in Local Search",
  "Grow Consistent Leads From Google",
];

const authorityTitlePrefixes = [
  "A Local SEO Strategy Built for Real Revenue",
  "Straightforward Local SEO That Produces Leads",
  "A Practical Plan to Own Your Map Pack",
  "Local SEO Services Focused on Conversions",
  "A Results-First Approach to Local Search",
  "Local Visibility You Can Measure and Trust",
  "Local SEO Built Around What Customers Actually Do",
  "More Calls, More Bookings, Better Local Rankings",
];

const servicesTitlePrefixes = [
  "Local SEO Services for",
  "What Your Business Needs to Rank in",
  "A Complete Local SEO System for",
  "The Local SEO Services I Deliver in",
  "Local Search Growth Framework for",
  "How I Help Businesses Get Found in",
  "Everything That Moves the Needle in",
];

const mapTitlePrefixes = [
  "Local SEO Coverage Across",
  "Serving Businesses Across",
  "Supporting Local Businesses Throughout",
  "Helping You Rank Across",
  "Local SEO Services Available in",
];

const ctaTitlePrefixes = [
  "Proof You Can Verify in",
  "Real Local SEO Wins for",
  "Results From Businesses Like Yours in",
  "See What Local SEO Services Can Do in",
  "Case Studies and Growth Stories from",
];

const contactTitlePrefixes = [
  "Ready to Grow in",
  "Let’s Build Your Local Visibility in",
  "Get a Local SEO Plan for",
  "Talk to a Local SEO Specialist for",
  "Start Winning More Customers in",
];

const openers = [
  "Local customers are already looking for your service.",
  "People don’t browse for long. They click the business that looks trustworthy and close.",
  "In most industries, the first three results take the majority of calls.",
  "If your business is not visible on Maps, you are missing ready-to-buy customers.",
  "When someone needs help urgently, they choose the easiest option to contact.",
  "Your next client is searching right now. The question is whether they find you.",
  "Search results are crowded, but the Map Pack still has room for the right strategy.",
  "The businesses that win locally are the ones that show up consistently and look credible.",
  "Visibility is not enough. You need rankings that turn into phone calls and bookings.",
  "The fastest way to grow locally is to become the obvious choice on Google.",
];

const middleBeats = [
  "I help service businesses move from being hard to find to being the first call.",
  "My process improves both rankings and conversion so clicks become enquiries.",
  "I focus on the work that increases calls, direction requests, and booked appointments.",
  "Instead of generic SEO, I build location signals that Google understands and rewards.",
  "I optimize your Google Business Profile and your website so they support each other.",
  "I build a clean foundation of listings, content, and reviews that holds rankings long term.",
  "I align your online presence so Google can confidently rank you above competitors.",
  "I create a strategy that fits how people actually search for your service.",
  "I fix the gaps that keep you out of the Map Pack and off page one.",
  "I turn your visibility into measurable leads with tracking and clear reporting.",
];

const localContextBeats = [
  "That matters because search intent can change from one region to the next.",
  "The competition level is different across regions, and your strategy should reflect that.",
  "Different areas have different demand patterns, so we tailor the approach.",
  "Local trust signals and relevance are what separate winners from everyone else.",
  "Google rewards consistency, accuracy, and strong local relevance.",
  "Your listing, reviews, and location pages need to work together to win.",
  "If your competitors look more credible online, Google will often rank them higher.",
  "A few high-impact improvements can change how often you show up for valuable searches.",
];

const closers = [
  "You will know what is working because we track calls, clicks, and rankings month by month.",
  "The goal is simple: more qualified leads from local search, without wasting ad spend.",
  "You get a clear plan, clean execution, and reporting you can understand.",
  "This is built for business owners who want growth, not vanity metrics.",
  "If you are ready for consistent local leads, this is the right place to start.",
  "Let’s turn your local presence into a predictable source of new customers.",
  "I keep it transparent so you can see progress and ROI as we go.",
  "It is a practical, conversion-focused approach designed to win your local market.",
];

const pick = (arr: string[], seed: number, offset: number) => arr[(seed + offset) % arr.length];

export const getCountryPageCopy = (country: CountryData): CountryPageCopy => {
  const seed = hashString(country.code);
  const areas = getCountryTopAreas(country, 3);
  const areasText = areas.length ? formatList(areas) : `major regions across ${country.name}`;

  const heroTitlePrefix = `${pick(heroTitlePrefixes, seed, 0)} in`;

  const heroDescription = [
    pick(openers, seed, 1),
    `${pick(middleBeats, seed, 3)} In ${country.name}, I deliver Local SEO Services for businesses across ${areasText}.`,
    pick(localContextBeats, seed, 5),
    pick(closers, seed, 7),
  ].join(" ");

  const authorityTitle = `${pick(authorityTitlePrefixes, seed, 2)} in ${country.name}`;

  const authoritySubtitle =
    `You work directly with me, not a junior team. I tailor Local SEO Services to your market in ${country.name}, ` +
    `from ${areasText}. We focus on visibility that turns into calls, bookings, and steady enquiries.`;

  const servicesTitle = `${pick(servicesTitlePrefixes, seed, 4)} ${country.name}`;

  const servicesSubtitle =
    `From Google Business Profile optimization to local content and review growth, ` +
    `these Local SEO Services are designed to help you rank and convert across ${areasText} in ${country.name}.`;

  const mapTitle = `${pick(mapTitlePrefixes, seed, 6)} ${country.name}`;

  const mapDescription =
    `Whether you serve one city or multiple regions, Local SEO Services should match how people search locally. ` +
    `I build location relevance across ${areasText} so you can earn stronger rankings and more qualified leads in ${country.name}.`;

  const ctaTitle = `${pick(ctaTitlePrefixes, seed, 8)} ${country.name}`;

  const ctaSubtitle =
    `No inflated promises, just real outcomes. These examples show how Local SEO Services can increase calls, ` +
    `visibility, and revenue for businesses in ${country.name}.`;

  const contactTitle = `${pick(contactTitlePrefixes, seed, 10)} ${country.name}`;

  const contactSubtitle =
    `Tell me what you do and where you want to grow. I will share a clear Local SEO Services roadmap for ${country.name}, ` +
    `including quick wins and the longer-term moves that build durable rankings.`;

  return {
    heroTitlePrefix,
    heroDescription,
    authorityTitle,
    authoritySubtitle,
    servicesTitle,
    servicesSubtitle,
    mapTitle,
    mapDescription,
    ctaTitle,
    ctaSubtitle,
    contactTitle,
    contactSubtitle,
  };
};
