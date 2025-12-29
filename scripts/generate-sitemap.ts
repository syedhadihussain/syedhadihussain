/**
 * Enterprise Sitemap Generator
 * 
 * Generates a hierarchical sitemap structure:
 * - /sitemap.xml (root index referencing all child sitemaps)
 * - /sitemaps/countries/{country}/sitemap.xml (country index with state refs)
 * - /sitemaps/countries/{country}/states/{state}.xml (city URLs)
 * - /sitemaps/industries/sitemap.xml (industry index)
 * - /sitemaps/industries/{category}.xml (industry category sitemaps)
 * - /sitemaps/quick-links.xml (conversion pages)
 * 
 * Run with: npx tsx scripts/generate-sitemap.ts
 */

import * as fs from 'fs';
import * as path from 'path';

// ==================== CONFIGURATION ====================

const BASE_URL = "https://syedhadihussain.com";
const DEFAULT_LANGUAGE = "en";
const TODAY = new Date().toISOString().split('T')[0];

// Countries with their state configs (simplified for sitemap)
const COUNTRY_STATES: Record<string, string[]> = {
  us: ["fl", "tx", "ny", "wa", "ca", "az", "ga", "nc", "oh", "pa", "il", "nj", "mi", "co", "tn", "va", "in", "ks", "dc", "or", "al", "ak", "ar", "ct", "de", "hi", "id", "ia", "ky", "la", "me", "md", "ma", "mn", "ms", "mo", "mt", "ne", "nv", "nh", "nm", "nd", "ok", "ri", "sc", "sd", "ut", "vt", "wv", "wi", "wy"],
  ca: ["on", "qc", "bc", "ab", "mb", "sk", "ns", "nb", "nl", "pe"],
  au: ["nsw", "vic", "qld", "wa-au", "sa-au", "tas", "act", "nt"],
  uk: ["england", "scotland", "wales", "northern-ireland"],
  de: ["by", "bw", "nw", "he", "be", "hh"],
  ae: ["dxb", "auh", "shj", "ajm", "rak", "fuj", "uaq"],
  mx: ["cdmx", "jal", "nl", "qr", "yuc", "bc"],
  my: ["kl", "sel", "png", "jhr", "sbh", "swk"],
  it: ["lom", "laz", "ven", "tos", "sic", "pie"],
  nz: ["akl", "wgn", "can", "wko", "bop", "ota"],
  br: ["sp", "rj", "mg", "ba", "pr", "rs"],
  ie: ["dub", "crk", "gwy", "lmk", "wfd", "bft"],
  sg: ["cen", "est", "nth", "ne", "wst"],
  za: ["gp", "wc", "kzn", "ec", "fs", "lp"],
  nl: ["nh", "zh", "ut", "nb", "ge", "li"],
  fr: ["idf", "pac", "ara", "naq", "occ", "bre"],
  es: ["mad", "cat", "and", "val", "pv", "ga"],
  se: ["stk", "got", "mal", "upp", "vg", "ska"],
  no: ["osl", "brg", "trh", "stv", "tms", "krs"],
  dk: ["cph", "aar", "ode", "aal", "esb"],
  fi: ["hel", "esp", "tam", "vaa", "oulu", "tur"],
  ch: ["zh", "be", "ge", "bs", "vd", "ag"],
  be: ["bru", "ant", "gnt", "lie", "brg"],
  sa: ["riy", "jed", "mec", "med", "dam", "kho"],
  qa: ["doh", "wkr", "khr", "umsal", "dkhn"],
  eg: ["cai", "gza", "alx", "lxr", "swn", "asm"],
  pt: ["lis", "prt", "fao", "brg", "cmb", "set"],
  om: ["msc", "sal", "sbk", "nzw", "duf"],
  kw: ["kwt", "hwl", "frw", "ahm", "jah"],
  lu: ["lux", "ech", "dif", "dud", "sch"],
  jo: ["amm", "irb", "zar", "aqb", "maf"]
};

// State to Cities mapping (simplified - major cities per state)
const STATE_CITIES: Record<string, Record<string, string[]>> = {
  us: {
    fl: ["miami", "fort-lauderdale", "west-palm-beach", "orlando", "tampa", "st-petersburg", "clearwater", "jacksonville", "boca-raton", "delray-beach", "boynton-beach", "coral-springs", "pembroke-pines", "hollywood-fl", "hialeah", "doral", "kissimmee", "lakeland", "brandon", "sarasota", "naples", "fort-myers", "cape-coral", "estero", "bonita-springs", "naples-park"],
    tx: ["houston", "dallas", "san-antonio", "austin", "fort-worth", "el-paso", "arlington", "corpus-christi", "plano", "laredo", "lubbock", "garland", "irving", "frisco", "mckinney", "amarillo", "grand-prairie", "brownsville", "killeen", "pasadena-tx", "mesquite", "mcallen", "denton", "waco", "midland"],
    ny: ["new-york-city", "buffalo", "rochester", "yonkers", "syracuse", "albany", "new-rochelle", "mount-vernon", "schenectady", "utica", "white-plains", "hempstead", "troy", "niagara-falls", "binghamton"],
    wa: ["seattle", "spokane", "tacoma", "vancouver-wa", "bellevue", "kent", "everett", "renton", "spokane-valley", "federal-way", "yakima", "bellingham", "kirkland", "kennewick", "auburn-wa"],
    ca: ["los-angeles", "san-diego", "san-jose", "san-francisco", "fresno", "sacramento", "long-beach", "oakland", "bakersfield", "anaheim", "santa-ana", "riverside", "stockton", "irvine", "chula-vista"],
    az: ["phoenix", "tucson", "mesa", "chandler", "scottsdale", "glendale-az", "gilbert", "tempe", "peoria-az", "surprise", "yuma", "avondale", "goodyear", "flagstaff", "buckeye"],
    ga: ["atlanta", "augusta", "columbus-ga", "macon", "savannah", "athens-ga", "sandy-springs", "roswell", "johns-creek", "albany-ga", "warner-robins", "alpharetta", "marietta", "valdosta", "smyrna"],
    nc: ["charlotte", "raleigh", "greensboro", "durham", "winston-salem", "fayetteville", "cary", "wilmington", "high-point", "concord", "greenville-nc", "asheville", "gastonia", "jacksonville-nc", "chapel-hill"],
    oh: ["columbus", "cleveland", "cincinnati", "toledo", "akron", "dayton", "parma", "canton", "youngstown", "lorain", "hamilton", "springfield-oh", "kettering", "elyria", "lakewood-oh"],
    pa: ["philadelphia", "pittsburgh", "allentown", "reading", "scranton", "bethlehem", "lancaster", "harrisburg", "altoona", "erie", "york", "wilkes-barre", "chester", "williamsport", "easton"],
    il: ["chicago", "aurora", "naperville", "joliet", "rockford", "springfield-il", "elgin", "peoria", "champaign", "waukegan", "cicero", "bloomington-il", "arlington-heights", "evanston", "decatur"],
    nj: ["newark", "jersey-city", "paterson", "elizabeth", "edison", "woodbridge", "lakewood-nj", "toms-river", "hamilton-nj", "trenton", "clifton", "camden", "brick", "cherry-hill", "passaic"],
    mi: ["detroit", "grand-rapids", "warren", "sterling-heights", "ann-arbor", "lansing", "flint", "dearborn", "livonia", "troy-mi", "westland", "farmington-hills", "kalamazoo", "wyoming-mi", "southfield"],
    co: ["denver", "colorado-springs", "aurora-co", "fort-collins", "lakewood-co", "thornton", "arvada", "westminster", "pueblo", "centennial", "boulder", "greeley", "longmont", "broomfield", "castle-rock"],
    tn: ["nashville", "memphis", "knoxville", "chattanooga", "clarksville", "murfreesboro", "franklin", "jackson", "johnson-city", "bartlett", "hendersonville", "kingsport", "collierville", "smyrna-tn", "cleveland-tn"],
    va: ["virginia-beach", "norfolk", "chesapeake", "richmond", "newport-news", "alexandria", "hampton", "roanoke", "portsmouth", "suffolk", "lynchburg", "harrisonburg", "leesburg", "charlottesville", "manassas"],
    in: ["indianapolis", "fort-wayne", "evansville", "south-bend", "carmel", "bloomington-in", "fishers", "hammond", "gary", "muncie", "lafayette", "terre-haute", "kokomo", "anderson", "noblesville"],
    ks: ["wichita", "overland-park", "kansas-city-ks", "olathe", "topeka", "lawrence", "shawnee", "manhattan", "lenexa", "salina", "hutchinson", "leavenworth", "leawood", "dodge-city", "garden-city"],
    dc: ["washington-dc", "capitol-hill", "georgetown", "dupont-circle", "adams-morgan"],
    or: ["portland", "salem", "eugene", "gresham", "hillsboro", "beaverton", "bend", "medford", "springfield-or", "corvallis", "albany-or", "tigard", "lake-oswego", "keizer", "grants-pass"],
    al: ["birmingham", "montgomery", "huntsville", "mobile", "tuscaloosa", "hoover", "dothan", "auburn-al", "decatur-al", "madison-al"],
    ak: ["anchorage", "juneau", "fairbanks", "sitka", "ketchikan"],
    ar: ["little-rock", "fort-smith", "fayetteville-ar", "springdale", "jonesboro", "rogers", "conway", "north-little-rock", "bentonville", "pine-bluff"],
    ct: ["bridgeport", "new-haven", "stamford", "hartford", "waterbury", "norwalk", "danbury", "new-britain", "bristol-ct", "meriden"],
    de: ["wilmington-de", "dover", "newark-de", "middletown-de", "smyrna-de", "milford", "seaford", "georgetown-de"],
    hi: ["honolulu", "pearl-city", "hilo", "kailua", "waipahu", "kaneohe", "mililani", "kahului", "ewa-gentry"],
    id: ["boise", "meridian", "nampa", "idaho-falls", "pocatello", "caldwell", "coeur-dalene", "twin-falls", "lewiston", "post-falls"],
    ia: ["des-moines", "cedar-rapids", "davenport", "sioux-city", "iowa-city", "waterloo", "council-bluffs", "ames", "dubuque", "ankeny"],
    ky: ["louisville", "lexington", "bowling-green", "owensboro", "covington", "hopkinsville", "richmond", "florence-ky", "georgetown-ky", "elizabethtown"],
    la: ["new-orleans", "baton-rouge", "shreveport", "lafayette", "lake-charles", "kenner", "bossier-city", "monroe", "alexandria-la", "houma"],
    me: ["portland-me", "lewiston", "bangor", "south-portland", "auburn-me", "biddeford", "sanford", "brunswick", "saco", "westbrook"],
    md: ["baltimore", "frederick", "rockville", "gaithersburg", "bowie", "hagerstown", "annapolis", "college-park", "salisbury", "laurel"],
    ma: ["boston", "worcester", "springfield-ma", "cambridge", "lowell", "brockton", "new-bedford", "quincy", "lynn", "fall-river"],
    mn: ["minneapolis", "st-paul", "rochester-mn", "duluth", "bloomington-mn", "brooklyn-park", "plymouth", "st-cloud", "eagan", "woodbury"],
    ms: ["jackson-ms", "gulfport", "southaven", "hattiesburg", "biloxi", "meridian", "tupelo", "greenville-ms", "olive-branch", "horn-lake"],
    mo: ["kansas-city", "st-louis", "springfield-mo", "columbia-mo", "independence", "lees-summit", "ofallon", "st-joseph", "st-charles", "blue-springs"],
    mt: ["billings", "missoula", "great-falls", "bozeman", "butte", "helena", "kalispell", "havre", "anaconda", "miles-city"],
    ne: ["omaha", "lincoln", "bellevue", "grand-island", "kearney", "fremont", "hastings", "norfolk-ne", "north-platte", "columbus-ne"],
    nv: ["las-vegas", "henderson", "reno", "north-las-vegas", "sparks", "carson-city", "fernley", "elko", "mesquite-nv", "boulder-city"],
    nh: ["manchester-nh", "nashua", "concord-nh", "derry", "rochester-nh", "salem-nh", "dover-nh", "merrimack", "hudson-nh", "londonderry"],
    nm: ["albuquerque", "las-cruces", "rio-rancho", "santa-fe", "roswell", "farmington", "clovis", "hobbs", "alamogordo", "carlsbad"],
    nd: ["fargo", "bismarck", "grand-forks", "minot", "west-fargo", "dickinson", "mandan", "williston", "jamestown", "wahpeton"],
    ok: ["oklahoma-city", "tulsa", "norman", "broken-arrow", "lawton", "edmond", "moore", "midwest-city", "enid", "stillwater"],
    ri: ["providence", "warwick", "cranston", "pawtucket", "east-providence", "woonsocket", "coventry", "cumberland", "north-providence", "south-kingstown"],
    sc: ["charleston", "columbia-sc", "north-charleston", "mount-pleasant", "rock-hill", "greenville-sc", "summerville", "goose-creek", "hilton-head", "florence-sc"],
    sd: ["sioux-falls", "rapid-city", "aberdeen", "brookings", "watertown", "mitchell", "yankton", "pierre", "huron", "vermillion"],
    ut: ["salt-lake-city", "west-valley-city", "provo", "west-jordan", "orem", "sandy-ut", "ogden", "st-george", "layton", "south-jordan"],
    vt: ["burlington", "south-burlington", "rutland", "barre", "montpelier", "winooski", "st-albans", "newport-vt", "vergennes", "middlebury"],
    wv: ["charleston-wv", "huntington", "morgantown", "parkersburg", "wheeling", "weirton", "fairmont", "martinsburg", "beckley", "clarksburg"],
    wi: ["milwaukee", "madison-wi", "green-bay", "kenosha", "racine", "appleton", "waukesha", "eau-claire", "oshkosh", "janesville"],
    wy: ["cheyenne", "casper", "laramie", "gillette", "rock-springs", "sheridan", "green-river", "evanston-wy", "riverton", "cody"]
  },
  ca: {
    on: ["toronto", "ottawa", "mississauga", "brampton", "hamilton-on", "london-on", "markham", "vaughan", "kitchener", "windsor-on"],
    qc: ["montreal", "quebec-city", "laval", "gatineau", "longueuil", "sherbrooke", "saguenay", "levis", "trois-rivieres", "terrebonne"],
    bc: ["vancouver", "surrey", "burnaby", "richmond-bc", "abbotsford", "coquitlam", "kelowna", "saanich", "victoria", "langley"],
    ab: ["calgary", "edmonton", "red-deer", "lethbridge", "st-albert", "medicine-hat", "grande-prairie", "airdrie", "spruce-grove", "leduc"],
    mb: ["winnipeg", "brandon-mb", "steinbach", "portage-la-prairie", "thompson", "winkler", "selkirk", "morden"],
    sk: ["saskatoon", "regina", "prince-albert", "moose-jaw", "swift-current", "yorkton", "north-battleford", "estevan"],
    ns: ["halifax", "dartmouth", "sydney", "truro", "new-glasgow", "glace-bay", "kentville"],
    nb: ["moncton", "saint-john", "fredericton", "dieppe", "miramichi", "edmundston", "bathurst"],
    nl: ["st-johns", "mount-pearl", "corner-brook", "paradise-nl", "conception-bay-south", "grand-falls-windsor"],
    pe: ["charlottetown", "summerside", "stratford-pei", "cornwall-pei"]
  },
  uk: {
    england: ["london", "birmingham-uk", "manchester", "leeds", "liverpool", "sheffield", "bristol", "newcastle", "nottingham", "southampton"],
    scotland: ["edinburgh", "glasgow", "aberdeen", "dundee", "inverness", "stirling", "perth-uk", "kilmarnock"],
    wales: ["cardiff", "swansea", "newport-uk", "wrexham", "barry", "neath", "cwmbran"],
    "northern-ireland": ["belfast", "derry", "lisburn", "newtownabbey", "bangor-ni", "newry", "carrickfergus"]
  },
  au: {
    nsw: ["sydney", "newcastle-au", "wollongong", "central-coast", "wagga-wagga", "albury", "port-macquarie", "tamworth"],
    vic: ["melbourne", "geelong", "ballarat", "bendigo", "shepparton", "mildura", "warrnambool"],
    qld: ["brisbane", "gold-coast", "sunshine-coast", "townsville", "cairns", "toowoomba", "mackay", "rockhampton"],
    "wa-au": ["perth", "mandurah", "bunbury", "geraldton", "kalgoorlie", "albany-au"],
    "sa-au": ["adelaide", "mount-gambier", "whyalla", "murray-bridge", "port-augusta"],
    tas: ["hobart", "launceston", "devonport", "burnie"],
    act: ["canberra", "queanbeyan"],
    nt: ["darwin", "alice-springs", "katherine", "palmerston"]
  }
};

// Industry categories mapping
const INDUSTRY_CATEGORIES: Record<string, string[]> = {
  "home-maintenance": ["plumbers", "electricians", "handyman-services", "hvac-services", "ac-repair-services", "boiler-repair-services", "gas-engineers", "locksmiths", "painters-decorators", "roofing-companies", "garage-door-repair-installation-services", "shutter-installation-services", "blinds-installation-services", "curtain-fitting-services", "awning-installation-services", "window-cleaning-services", "abseiling-window-cleaners", "facade-cleaning-services", "glass-repair-services", "emergency-glass-replacement", "double-glazing-repair", "mirror-installation-services", "flat-pack-furniture-assembly", "scaffolding-companies", "mold-remediation-professionals", "water-damage-restoration-professionals", "pressure-washing-professionals"],
  "cleaning": ["home-cleaning-services", "deep-cleaning-services", "end-of-tenancy-cleaning", "carpet-cleaning-services", "warehouse-cleaning-services", "factory-cleaning-services", "industrial-cleaning-services", "commercial-kitchen-installation", "kitchen-extraction-ventilation-cleaning", "grease-trap-cleaning-services", "water-tank-cleaning", "pool-cleaning-services", "laundry-services", "dry-cleaning-services", "ironing-services", "holiday-let-cleaning-services", "mattress-cleaning-services", "blind-cleaning-services", "cleanroom-cleaning-services", "street-cleaning-contractors", "snow-clearance-services", "gritting-services", "winter-maintenance-services", "cryogenic-cleaning-services", "dry-ice-blasting-services", "shot-blasting-services"],
  "construction": ["builders", "construction-companies", "home-builders", "surveyors", "quantity-surveyors", "land-surveyors", "party-wall-surveyors", "dilapidation-survey-services", "snagging-inspection-services", "new-build-snagging-inspectors", "architects", "interior-designers", "structural-crack-monitoring-services", "building-control-inspectors", "building-envelope-consultants", "cladding-inspection-services", "external-wall-fire-review-ews1-services", "fire-compartmentation-services", "fire-door-inspection-services", "formwork-contractors", "steel-fabrication-companies", "aluminium-fabrication-services", "welding-services", "powder-coating-services", "concrete-cutting-services", "core-drilling-services", "waterproofing-services", "damp-proofing-services", "basement-tanking-services", "stone-masonry-restoration", "lime-mortar-repair-services", "dry-stone-walling-services"],
  "inspection": ["surveying-mapping-services", "arboricultural-consultancy-services", "tree-risk-assessment-services", "ecology-consultants", "protected-species-surveys", "bat-surveys", "great-crested-newt-surveys", "drone-roof-inspection-services", "drone-survey-services", "thermal-imaging-inspection-services", "church-roof-inspection-services", "bell-tower-maintenance-services", "ground-investigation-services", "soil-testing-services", "archaeological-survey-services", "watching-brief-services", "flood-risk-assessment-consultants", "asbestos-re-inspection-services", "lead-paint-testing-services", "radon-testing-services", "air-quality-testing-services", "noise-assessment-consultants", "legionella-risk-assessment-services", "explosive-ordnance-disposal-surveys-uxo", "ndt-testing-services", "ultrasonic-testing-services", "magnetic-particle-inspection-services", "radiography-testing-services"],
  "pest-control": ["pest-control-services", "bed-bug-control", "termite-control", "bird-control-services", "falconry-pest-control", "pest-proofing-services"],
  "waste-recycling": ["waste-removal-services", "junk-removal-services", "skip-hire-services", "recycling-companies", "industrial-waste-management", "hazardous-waste-disposal", "septic-tank-cleaning", "septic-tank-installation", "animal-waste-removal-services", "fuel-tank-cleaning-services", "waste-oil-collection-services", "trade-waste-consultants", "fats-oils-grease-fog-management-services", "effluent-treatment-services", "sludge-management-services", "anaerobic-digestion-consultants"],
  "landscaping": ["gardeners", "landscaping-services", "tree-surgeons", "tree-removal-services", "hedgelaying-services", "ditch-clearance-services", "land-drainage-contractors"],
  "energy": ["solar-panel-installers", "ev-charging-installers", "ev-fleet-charging-services", "energy-auditors", "commercial-energy-consultants", "breeam-assessment-services", "carbon-footprint-assessment-services", "sustainable-building-consultants", "lightning-protection-installation", "lightning-protection-testing-services"],
  "security": ["cctv-installation-services", "security-system-installers", "smart-home-installers", "access-control-system-installers", "intercom-system-installers", "alarm-response-services", "key-holding-services", "remote-cctv-monitoring", "security-guard-services", "dog-security-services", "k9-security-services", "smart-lock-installation"],
  "healthcare": ["family-doctors", "obstetricians", "gynecologists", "womens-health-doctors", "pediatricians", "child-doctors", "kids-health-specialists", "orthopedic-surgeons", "bone-specialists", "joint-doctors", "dermatologists", "skin-specialists", "dermatology-clinics", "cardiologists", "veterinary-clinics", "animal-hospitals", "pet-grooming-services", "pet-boarding-services", "dog-training-services", "veterinary-physiotherapy", "doctors-clinics", "private-doctors", "dentists", "cosmetic-dentists", "dental-implant-clinics", "orthodontists", "hospitals", "physiotherapy-clinics", "sports-physiotherapy-clinics", "chiropractors", "foot-clinics", "opticians", "eye-clinics", "endodontists", "skin-clinics", "mental-health-clinics", "psychologists", "psychiatrists", "nutritionists", "dietitians", "weight-loss-clinics", "fertility-clinics", "alternative-medicine-clinics"],
  "beauty": ["hair-salons", "barber-shops", "beauty-salons", "beauty-parlours", "spas", "massage-centers", "nail-salons", "makeup-artists", "tattoo-studios", "body-piercing-studios", "laser-hair-removal-clinics", "hair-transplant-clinics"],
  "automotive": ["car-repair-shops", "auto-mechanics", "mobile-mechanics", "car-denting-painting", "auto-electricians", "hybrid-car-repair", "mot-test-centers", "tyre-shops", "mobile-tyre-fitting-services", "car-wash-services", "mobile-car-wash", "car-detailing-services", "car-towing-services", "breakdown-recovery-services", "roadside-assistance-services", "car-lockout-services", "used-car-dealers", "car-rental-services", "taxi-firms", "minicab-services", "airport-transfer-services", "chauffeur-services", "limousine-hire", "coach-hire-services", "minibus-hire-services"],
  "childcare": ["childcare-centers", "daycare-nurseries", "preschools", "montessori-schools", "after-school-clubs", "schools", "private-schools", "colleges", "universities", "tuition-centers", "coaching-institutes", "language-schools", "music-schools", "dance-schools", "dance-studios", "art-classes", "painting-classes", "photography-training", "driving-schools", "ielts-training-centers", "pte-training-centers", "computer-training-institutes"],
  "elderly-care": ["elderly-care-services", "home-care-services", "assisted-living-facilities", "care-homes", "home-nursing-services", "stairlift-installation", "mobility-lift-services", "access-ramp-installation", "disabled-access-services"],
  "funeral-religious": ["funeral-services", "cremation-services", "churches", "mosques", "temples", "religious-centers"],
  "legal-financial": ["law-firms", "family-lawyers", "divorce-lawyers", "criminal-lawyers", "immigration-lawyers", "personal-injury-lawyers", "accident-claim-lawyers", "no-win-no-fee-lawyers", "employment-lawyers", "property-lawyers", "business-lawyers", "notary-public-services", "insurance-brokers", "mortgage-brokers", "loan-advisors", "financial-planners", "wealth-management-firms"],
  "real-estate": ["real-estate-agencies", "property-dealers", "estate-agents", "letting-agents", "property-management-companies", "airbnb-management-services", "short-term-let-management", "serviced-apartment-management", "hmo-licensing-consultants", "selective-licensing-consultants", "tenant-reference-checks", "inventory-clerk-services", "check-in-check-out-inspection-services", "property-staging-services", "home-staging-consultants", "show-home-dressing-services"],
  "food-beverage": ["restaurants", "cafes", "coffee-shops", "bakeries", "pizza-shops", "fast-food-restaurants", "takeaway-restaurants", "catering-services", "food-trucks", "street-food-vendors", "dark-kitchens", "cloud-kitchens", "butchers", "fishmongers", "greengrocers", "halal-meat-shops", "asian-grocery-stores", "organic-food-stores", "farm-shops", "cash-carry-wholesalers"],
  "hospitality-events": ["hotels", "motels", "guest-houses", "bed-and-breakfast", "caravan-parks", "holiday-parks", "wedding-planners", "event-management-companies", "photographers", "wedding-photographers", "videographers", "dj-services", "marquee-hire-services", "party-equipment-rental", "exhibition-stand-builders", "trade-show-stand-contractors"],
  "technology": ["it-support-companies", "managed-it-services", "data-cabling-services", "structured-cabling-services", "server-installation-services", "pos-system-providers", "cybersecurity-services", "internet-service-providers", "telecom-service-providers", "mobile-phone-repair-shops", "laptop-repair-shops", "tablet-repair-services", "gaming-console-repair-services", "computer-repair-services", "smart-watch-repair-services"],
  "professional-services": ["accountants", "bookkeepers", "tax-consultants", "business-consultants", "translation-services", "interpretation-services"],
  "manufacturing": ["commercial-printing-services", "packaging-companies", "label-printing-services", "embroidery-services", "signage-companies", "sign-board-installation-services", "neon-sign-repair-services", "digital-display-installation", "billboard-advertising-companies"],
  "storage-logistics": ["storage-facilities", "self-storage-units", "document-storage-services", "archive-management-services", "courier-services", "same-day-delivery-services", "logistics-companies", "freight-forwarders", "air-freight-services", "sea-freight-services"],
  "fitness": ["gyms", "fitness-centers", "yoga-studios", "pilates-studios", "personal-trainers", "martial-arts-schools", "karate-classes", "taekwondo-schools", "boxing-gyms", "shooting-ranges"],
  "specialized-trades": ["antique-restoration-services", "furniture-restoration-services", "upholstery-services", "clock-repair-services", "watch-repair-services", "shoe-repair-services", "key-cutting-services", "vending-machine-services", "atm-installation-services", "portable-toilet-hire", "luxury-toilet-trailer-hire", "film-tv-location-services", "3d-scanning-services", "3d-printing-services", "cnc-machining-services", "laser-cutting-services"]
};

// Quick links and conversion pages
const QUICK_LINK_PAGES = [
  "", // homepage
  "about",
  "services",
  "portfolio",
  "case-studies",
  "faq",
  "contact",
  "blog",
  "blog/how-to-fill-contact-form",
  "project-management",
  "local-service-ads",
  "pricing",
  "web-development",
  "content-writing",
  "graphic-design",
  "social-media",
  "privacy",
  "terms",
  "serving-industries"
];

// ==================== HELPER FUNCTIONS ====================

const ensureDir = (dirPath: string): void => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

const getPriority = (type: 'country' | 'state' | 'city' | 'industry' | 'quicklink', path?: string): string => {
  if (type === 'quicklink') {
    if (path === '') return '1.0'; // homepage
    if (['services', 'contact', 'about'].includes(path || '')) return '0.9';
    if (['portfolio', 'case-studies', 'pricing'].includes(path || '')) return '0.8';
    if (path?.startsWith('blog')) return '0.7';
    return '0.6';
  }
  switch (type) {
    case 'country': return '0.9';
    case 'state': return '0.8';
    case 'city': return '0.7';
    case 'industry': return '0.6';
    default: return '0.5';
  }
};

const getChangefreq = (type: 'country' | 'state' | 'city' | 'industry' | 'quicklink'): string => {
  switch (type) {
    case 'country': return 'weekly';
    case 'state': return 'weekly';
    case 'city': return 'monthly';
    case 'industry': return 'monthly';
    case 'quicklink': return 'weekly';
    default: return 'monthly';
  }
};

// ==================== SITEMAP GENERATORS ====================

// Generate sitemap index XML
const generateSitemapIndex = (sitemapUrls: string[]): string => {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;
  
  sitemapUrls.forEach(url => {
    xml += `  <sitemap>
    <loc>${url}</loc>
    <lastmod>${TODAY}</lastmod>
  </sitemap>
`;
  });
  
  xml += `</sitemapindex>`;
  return xml;
};

// Generate URL set XML (for actual URLs)
const generateUrlSet = (urls: Array<{ loc: string; priority: string; changefreq: string }>): string => {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;
  
  urls.forEach(({ loc, priority, changefreq }) => {
    xml += `  <url>
    <loc>${loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`;
  });
  
  xml += `</urlset>`;
  return xml;
};

// Generate quick-links sitemap
const generateQuickLinksSitemap = (): string => {
  const urls = QUICK_LINK_PAGES.map(page => ({
    loc: page ? `${BASE_URL}/${DEFAULT_LANGUAGE}/${page}` : `${BASE_URL}/${DEFAULT_LANGUAGE}`,
    priority: getPriority('quicklink', page),
    changefreq: getChangefreq('quicklink')
  }));
  
  return generateUrlSet(urls);
};

// Generate state sitemap (city URLs)
const generateStateSitemap = (countryCode: string, stateCode: string, cities: string[]): string => {
  const urls = cities.map(city => ({
    loc: `${BASE_URL}/${DEFAULT_LANGUAGE}/${countryCode}/${stateCode}/local-seo-${city}`,
    priority: getPriority('city'),
    changefreq: getChangefreq('city')
  }));
  
  return generateUrlSet(urls);
};

// Generate country sitemap index (references state sitemaps + country page)
const generateCountrySitemapIndex = (countryCode: string, states: string[]): string => {
  // Include state sitemaps
  const sitemapUrls = states.map(state => 
    `${BASE_URL}/sitemaps/countries/${countryCode}/states/${state}.xml`
  );
  
  return generateSitemapIndex(sitemapUrls);
};

// Generate industry category sitemap
const generateIndustryCategorySitemap = (categorySlug: string, industries: string[]): string => {
  const urls = industries.map(industry => ({
    loc: `${BASE_URL}/${DEFAULT_LANGUAGE}/local-seo-services-for-${industry}`,
    priority: getPriority('industry'),
    changefreq: getChangefreq('industry')
  }));
  
  return generateUrlSet(urls);
};

// Generate industry sitemap index
const generateIndustrySitemapIndex = (): string => {
  const sitemapUrls = Object.keys(INDUSTRY_CATEGORIES).map(category =>
    `${BASE_URL}/sitemaps/industries/${category}.xml`
  );
  
  return generateSitemapIndex(sitemapUrls);
};

// Generate root sitemap index
const generateRootSitemapIndex = (countryCodes: string[]): string => {
  const sitemapUrls: string[] = [];
  
  // Quick links sitemap
  sitemapUrls.push(`${BASE_URL}/sitemaps/quick-links.xml`);
  
  // Industry sitemap index
  sitemapUrls.push(`${BASE_URL}/sitemaps/industries/sitemap.xml`);
  
  // Country sitemap indexes
  countryCodes.forEach(country => {
    sitemapUrls.push(`${BASE_URL}/sitemaps/countries/${country}/sitemap.xml`);
  });
  
  return generateSitemapIndex(sitemapUrls);
};

// ==================== MAIN EXECUTION ====================

const main = () => {
  console.log('🚀 Generating enterprise sitemap structure...\n');
  
  const publicDir = path.join(process.cwd(), 'public');
  const sitemapsDir = path.join(publicDir, 'sitemaps');
  
  // Create directory structure
  ensureDir(sitemapsDir);
  ensureDir(path.join(sitemapsDir, 'countries'));
  ensureDir(path.join(sitemapsDir, 'industries'));
  
  let totalUrls = 0;
  let totalSitemaps = 0;
  
  // 1. Generate quick-links sitemap
  console.log('📝 Generating quick-links sitemap...');
  const quickLinksSitemap = generateQuickLinksSitemap();
  fs.writeFileSync(path.join(sitemapsDir, 'quick-links.xml'), quickLinksSitemap);
  totalUrls += QUICK_LINK_PAGES.length;
  totalSitemaps++;
  console.log(`   ✓ ${QUICK_LINK_PAGES.length} quick link URLs`);
  
  // 2. Generate industry sitemaps
  console.log('\n📦 Generating industry sitemaps...');
  Object.entries(INDUSTRY_CATEGORIES).forEach(([category, industries]) => {
    ensureDir(path.join(sitemapsDir, 'industries'));
    const sitemap = generateIndustryCategorySitemap(category, industries);
    fs.writeFileSync(path.join(sitemapsDir, 'industries', `${category}.xml`), sitemap);
    totalUrls += industries.length;
    totalSitemaps++;
    console.log(`   ✓ ${category}: ${industries.length} industries`);
  });
  
  // Generate industry sitemap index
  const industrySitemapIndex = generateIndustrySitemapIndex();
  fs.writeFileSync(path.join(sitemapsDir, 'industries', 'sitemap.xml'), industrySitemapIndex);
  totalSitemaps++;
  console.log(`   ✓ Industry sitemap index created`);
  
  // 3. Generate country/state/city sitemaps
  console.log('\n🌍 Generating country sitemaps...');
  const countriesWithSitemaps: string[] = [];
  
  Object.entries(COUNTRY_STATES).forEach(([countryCode, states]) => {
    const countryDir = path.join(sitemapsDir, 'countries', countryCode);
    const statesDir = path.join(countryDir, 'states');
    ensureDir(countryDir);
    ensureDir(statesDir);
    
    let countryUrls = 0;
    const statesWithCities: string[] = [];
    
    // Generate state sitemaps with cities
    states.forEach(stateCode => {
      const cities = STATE_CITIES[countryCode]?.[stateCode] || [];
      if (cities.length > 0) {
        const stateSitemap = generateStateSitemap(countryCode, stateCode, cities);
        fs.writeFileSync(path.join(statesDir, `${stateCode}.xml`), stateSitemap);
        countryUrls += cities.length;
        totalUrls += cities.length;
        totalSitemaps++;
        statesWithCities.push(stateCode);
      }
    });
    
    // Generate country sitemap index (only if we have state sitemaps)
    if (statesWithCities.length > 0) {
      const countrySitemapIndex = generateCountrySitemapIndex(countryCode, statesWithCities);
      fs.writeFileSync(path.join(countryDir, 'sitemap.xml'), countrySitemapIndex);
      totalSitemaps++;
      countriesWithSitemaps.push(countryCode);
      console.log(`   ✓ ${countryCode.toUpperCase()}: ${statesWithCities.length} states, ${countryUrls} city URLs`);
    }
  });
  
  // 4. Generate root sitemap index
  console.log('\n📋 Generating root sitemap index...');
  const rootSitemap = generateRootSitemapIndex(countriesWithSitemaps);
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), rootSitemap);
  totalSitemaps++;
  console.log(`   ✓ Root sitemap.xml created`);
  
  // Summary
  console.log('\n' + '='.repeat(50));
  console.log('✅ SITEMAP GENERATION COMPLETE');
  console.log('='.repeat(50));
  console.log(`📊 Total URLs indexed: ${totalUrls.toLocaleString()}`);
  console.log(`📄 Total sitemaps created: ${totalSitemaps}`);
  console.log(`🌍 Countries with sitemaps: ${countriesWithSitemaps.length}`);
  console.log(`🏭 Industry categories: ${Object.keys(INDUSTRY_CATEGORIES).length}`);
  console.log('\n📁 Sitemap Structure:');
  console.log('   /sitemap.xml (root index)');
  console.log('   /sitemaps/quick-links.xml');
  console.log('   /sitemaps/industries/sitemap.xml');
  console.log('   /sitemaps/industries/{category}.xml');
  console.log('   /sitemaps/countries/{country}/sitemap.xml');
  console.log('   /sitemaps/countries/{country}/states/{state}.xml');
};

main();
