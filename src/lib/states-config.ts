// State configuration with cities for state landing pages

export interface CityData {
  name: string;
  code: string;
}

export interface StateDetailData {
  code: string;
  name: string;
  fullName: string;
  abbreviation: string;
  cities: CityData[];        // All cities for display
  activeCities: string[];    // City codes that have active pages
  mapEmbed: string;
  population?: string;
  timezone: string;
  tagline: string;           // Unique tagline for SEO
  description: string;       // Unique description for the state
}

// Florida cities
export const FL_CITIES: CityData[] = [
  { name: "Miami", code: "miami" },
  { name: "Fort Lauderdale", code: "fort-lauderdale" },
  { name: "West Palm Beach", code: "west-palm-beach" },
  { name: "Orlando", code: "orlando" },
  { name: "Tampa", code: "tampa" },
  { name: "St Petersburg", code: "st-petersburg" },
  { name: "Clearwater", code: "clearwater" },
  { name: "Jacksonville", code: "jacksonville" },
  { name: "Boca Raton", code: "boca-raton" },
  { name: "Delray Beach", code: "delray-beach" },
  { name: "Boynton Beach", code: "boynton-beach" },
  { name: "Coral Springs", code: "coral-springs" },
  { name: "Pembroke Pines", code: "pembroke-pines" },
  { name: "Hollywood FL", code: "hollywood-fl" },
  { name: "Hialeah", code: "hialeah" },
  { name: "Doral", code: "doral" },
  { name: "Kissimmee", code: "kissimmee" },
  { name: "Lakeland", code: "lakeland" },
  { name: "Brandon", code: "brandon" },
  { name: "Sarasota", code: "sarasota" },
  { name: "Naples", code: "naples" },
  { name: "Fort Myers", code: "fort-myers" },
  { name: "Cape Coral", code: "cape-coral" },
  { name: "Estero", code: "estero" },
  { name: "Bonita Springs", code: "bonita-springs" },
  { name: "Naples Park", code: "naples-park" },
  { name: "Tallahassee", code: "tallahassee" },
  { name: "Port St. Lucie", code: "port-st-lucie" },
  { name: "Gainesville", code: "gainesville" },
  { name: "Miramar", code: "miramar" },
  { name: "Palm Bay", code: "palm-bay" },
  { name: "Pompano Beach", code: "pompano-beach" },
  { name: "Davie", code: "davie" },
  { name: "Miami Beach", code: "miami-beach" },
  { name: "Sunrise", code: "sunrise" },
  { name: "Deltona", code: "deltona" },
  { name: "Plantation", code: "plantation" },
  { name: "Palm Coast", code: "palm-coast" },
  { name: "Largo", code: "largo" },
  { name: "Deerfield Beach", code: "deerfield-beach" },
  { name: "Melbourne", code: "melbourne" },
  { name: "Lauderhill", code: "lauderhill" },
  { name: "Fort Pierce", code: "fort-pierce" },
  { name: "Homestead", code: "homestead" },
  { name: "Daytona Beach", code: "daytona-beach" },
  { name: "Tamarac", code: "tamarac" },
  { name: "North Port", code: "north-port" },
  { name: "Ocala", code: "ocala" },
  { name: "Port Orange", code: "port-orange" },
  { name: "Sanford", code: "sanford" },
  { name: "Coconut Creek", code: "coconut-creek" },
  { name: "Margate", code: "margate" },
  { name: "Bradenton", code: "bradenton" },
  { name: "Palm Beach Gardens", code: "palm-beach-gardens" },
  { name: "Pinellas Park", code: "pinellas-park" }
];

export const FL_ACTIVE_CITIES: string[] = [
  "miami", "fort-lauderdale", "west-palm-beach", "orlando", "tampa",
  "st-petersburg", "clearwater", "jacksonville", "boca-raton", "delray-beach",
  "boynton-beach", "coral-springs", "pembroke-pines", "hollywood-fl", "hialeah",
  "doral", "kissimmee", "lakeland", "brandon", "sarasota", "naples",
  "fort-myers", "cape-coral", "estero", "bonita-springs", "naples-park"
];

// Texas cities
export const TX_CITIES: CityData[] = [
  { name: "Houston", code: "houston" },
  { name: "Dallas", code: "dallas" },
  { name: "San Antonio", code: "san-antonio" },
  { name: "Austin", code: "austin" },
  { name: "Fort Worth", code: "fort-worth" },
  { name: "El Paso", code: "el-paso" },
  { name: "Arlington", code: "arlington" },
  { name: "Corpus Christi", code: "corpus-christi" },
  { name: "Plano", code: "plano" },
  { name: "Laredo", code: "laredo" },
  { name: "Lubbock", code: "lubbock" },
  { name: "Garland", code: "garland" },
  { name: "Irving", code: "irving" },
  { name: "Frisco", code: "frisco" },
  { name: "McKinney", code: "mckinney" },
  { name: "Amarillo", code: "amarillo" },
  { name: "Grand Prairie", code: "grand-prairie" },
  { name: "Brownsville", code: "brownsville" },
  { name: "Killeen", code: "killeen" },
  { name: "Pasadena", code: "pasadena-tx" },
  { name: "Mesquite", code: "mesquite" },
  { name: "McAllen", code: "mcallen" },
  { name: "Denton", code: "denton" },
  { name: "Waco", code: "waco" },
  { name: "Midland", code: "midland" },
  { name: "Carrollton", code: "carrollton" },
  { name: "Round Rock", code: "round-rock" },
  { name: "Abilene", code: "abilene" },
  { name: "Pearland", code: "pearland" },
  { name: "Richardson", code: "richardson" }
];

// New York cities
export const NY_CITIES: CityData[] = [
  { name: "New York City", code: "new-york-city" },
  { name: "Buffalo", code: "buffalo" },
  { name: "Rochester", code: "rochester" },
  { name: "Yonkers", code: "yonkers" },
  { name: "Syracuse", code: "syracuse" },
  { name: "Albany", code: "albany" },
  { name: "New Rochelle", code: "new-rochelle" },
  { name: "Mount Vernon", code: "mount-vernon" },
  { name: "Schenectady", code: "schenectady" },
  { name: "Utica", code: "utica" },
  { name: "White Plains", code: "white-plains" },
  { name: "Hempstead", code: "hempstead" },
  { name: "Troy", code: "troy" },
  { name: "Niagara Falls", code: "niagara-falls" },
  { name: "Binghamton", code: "binghamton" },
  { name: "Freeport", code: "freeport" },
  { name: "Valley Stream", code: "valley-stream" },
  { name: "Long Beach", code: "long-beach-ny" },
  { name: "Spring Valley", code: "spring-valley" },
  { name: "Rome", code: "rome-ny" },
  { name: "Ithaca", code: "ithaca" },
  { name: "Poughkeepsie", code: "poughkeepsie" },
  { name: "Port Chester", code: "port-chester" },
  { name: "Jamestown", code: "jamestown" },
  { name: "Harrison", code: "harrison-ny" }
];

// Washington cities
export const WA_CITIES: CityData[] = [
  { name: "Seattle", code: "seattle" },
  { name: "Spokane", code: "spokane" },
  { name: "Tacoma", code: "tacoma" },
  { name: "Vancouver", code: "vancouver-wa" },
  { name: "Bellevue", code: "bellevue" },
  { name: "Kent", code: "kent" },
  { name: "Everett", code: "everett" },
  { name: "Renton", code: "renton" },
  { name: "Spokane Valley", code: "spokane-valley" },
  { name: "Federal Way", code: "federal-way" },
  { name: "Yakima", code: "yakima" },
  { name: "Bellingham", code: "bellingham" },
  { name: "Kirkland", code: "kirkland" },
  { name: "Kennewick", code: "kennewick" },
  { name: "Auburn", code: "auburn-wa" },
  { name: "Pasco", code: "pasco" },
  { name: "Marysville", code: "marysville" },
  { name: "Lakewood", code: "lakewood-wa" },
  { name: "Redmond", code: "redmond" },
  { name: "Shoreline", code: "shoreline" },
  { name: "Richland", code: "richland" },
  { name: "Sammamish", code: "sammamish" },
  { name: "Burien", code: "burien" },
  { name: "Olympia", code: "olympia" },
  { name: "Lacey", code: "lacey" }
];

// California cities
export const CA_CITIES: CityData[] = [
  { name: "Los Angeles", code: "los-angeles" },
  { name: "San Diego", code: "san-diego" },
  { name: "San Jose", code: "san-jose" },
  { name: "San Francisco", code: "san-francisco" },
  { name: "Fresno", code: "fresno" },
  { name: "Sacramento", code: "sacramento" },
  { name: "Long Beach", code: "long-beach" },
  { name: "Oakland", code: "oakland" },
  { name: "Bakersfield", code: "bakersfield" },
  { name: "Anaheim", code: "anaheim" },
  { name: "Santa Ana", code: "santa-ana" },
  { name: "Riverside", code: "riverside" },
  { name: "Stockton", code: "stockton" },
  { name: "Irvine", code: "irvine" },
  { name: "Chula Vista", code: "chula-vista" },
  { name: "Fremont", code: "fremont" },
  { name: "San Bernardino", code: "san-bernardino" },
  { name: "Modesto", code: "modesto" },
  { name: "Fontana", code: "fontana" },
  { name: "Moreno Valley", code: "moreno-valley" },
  { name: "Glendale", code: "glendale" },
  { name: "Huntington Beach", code: "huntington-beach" },
  { name: "Santa Clarita", code: "santa-clarita" },
  { name: "Garden Grove", code: "garden-grove" },
  { name: "Oceanside", code: "oceanside" },
  { name: "Rancho Cucamonga", code: "rancho-cucamonga" },
  { name: "Ontario", code: "ontario-ca" },
  { name: "Santa Rosa", code: "santa-rosa" },
  { name: "Elk Grove", code: "elk-grove" },
  { name: "Corona", code: "corona" }
];

// Arizona cities
export const AZ_CITIES: CityData[] = [
  { name: "Phoenix", code: "phoenix" },
  { name: "Tucson", code: "tucson" },
  { name: "Mesa", code: "mesa" },
  { name: "Chandler", code: "chandler" },
  { name: "Scottsdale", code: "scottsdale" },
  { name: "Glendale", code: "glendale-az" },
  { name: "Gilbert", code: "gilbert" },
  { name: "Tempe", code: "tempe" },
  { name: "Peoria", code: "peoria-az" },
  { name: "Surprise", code: "surprise" },
  { name: "Yuma", code: "yuma" },
  { name: "Avondale", code: "avondale" },
  { name: "Goodyear", code: "goodyear" },
  { name: "Flagstaff", code: "flagstaff" },
  { name: "Buckeye", code: "buckeye" },
  { name: "Lake Havasu City", code: "lake-havasu-city" },
  { name: "Casa Grande", code: "casa-grande" },
  { name: "Sierra Vista", code: "sierra-vista" },
  { name: "Maricopa", code: "maricopa" },
  { name: "Oro Valley", code: "oro-valley" },
  { name: "Prescott", code: "prescott" },
  { name: "Bullhead City", code: "bullhead-city" },
  { name: "Prescott Valley", code: "prescott-valley" },
  { name: "Apache Junction", code: "apache-junction" },
  { name: "Marana", code: "marana" }
];

// Georgia cities
export const GA_CITIES: CityData[] = [
  { name: "Atlanta", code: "atlanta" },
  { name: "Augusta", code: "augusta" },
  { name: "Columbus", code: "columbus-ga" },
  { name: "Macon", code: "macon" },
  { name: "Savannah", code: "savannah" },
  { name: "Athens", code: "athens-ga" },
  { name: "Sandy Springs", code: "sandy-springs" },
  { name: "Roswell", code: "roswell" },
  { name: "Johns Creek", code: "johns-creek" },
  { name: "Albany", code: "albany-ga" },
  { name: "Warner Robins", code: "warner-robins" },
  { name: "Alpharetta", code: "alpharetta" },
  { name: "Marietta", code: "marietta" },
  { name: "Valdosta", code: "valdosta" },
  { name: "Smyrna", code: "smyrna" },
  { name: "Brookhaven", code: "brookhaven" },
  { name: "Dunwoody", code: "dunwoody" },
  { name: "Peachtree Corners", code: "peachtree-corners" },
  { name: "Gainesville", code: "gainesville-ga" },
  { name: "Newnan", code: "newnan" },
  { name: "Milton", code: "milton-ga" },
  { name: "Douglasville", code: "douglasville" },
  { name: "Kennesaw", code: "kennesaw" },
  { name: "LaGrange", code: "lagrange" },
  { name: "Statesboro", code: "statesboro" }
];

// North Carolina cities
export const NC_CITIES: CityData[] = [
  { name: "Charlotte", code: "charlotte" },
  { name: "Raleigh", code: "raleigh" },
  { name: "Greensboro", code: "greensboro" },
  { name: "Durham", code: "durham" },
  { name: "Winston-Salem", code: "winston-salem" },
  { name: "Fayetteville", code: "fayetteville" },
  { name: "Cary", code: "cary" },
  { name: "Wilmington", code: "wilmington" },
  { name: "High Point", code: "high-point" },
  { name: "Concord", code: "concord" },
  { name: "Greenville", code: "greenville-nc" },
  { name: "Asheville", code: "asheville" },
  { name: "Gastonia", code: "gastonia" },
  { name: "Jacksonville", code: "jacksonville-nc" },
  { name: "Chapel Hill", code: "chapel-hill" },
  { name: "Huntersville", code: "huntersville" },
  { name: "Apex", code: "apex" },
  { name: "Rocky Mount", code: "rocky-mount" },
  { name: "Burlington", code: "burlington" },
  { name: "Kannapolis", code: "kannapolis" },
  { name: "Mooresville", code: "mooresville" },
  { name: "Wake Forest", code: "wake-forest" },
  { name: "Hickory", code: "hickory" },
  { name: "Indian Trail", code: "indian-trail" },
  { name: "Matthews", code: "matthews" }
];

// Ohio cities
export const OH_CITIES: CityData[] = [
  { name: "Columbus", code: "columbus" },
  { name: "Cleveland", code: "cleveland" },
  { name: "Cincinnati", code: "cincinnati" },
  { name: "Toledo", code: "toledo" },
  { name: "Akron", code: "akron" },
  { name: "Dayton", code: "dayton" },
  { name: "Parma", code: "parma" },
  { name: "Canton", code: "canton" },
  { name: "Youngstown", code: "youngstown" },
  { name: "Lorain", code: "lorain" },
  { name: "Hamilton", code: "hamilton" },
  { name: "Springfield", code: "springfield-oh" },
  { name: "Kettering", code: "kettering" },
  { name: "Elyria", code: "elyria" },
  { name: "Lakewood", code: "lakewood-oh" },
  { name: "Cuyahoga Falls", code: "cuyahoga-falls" },
  { name: "Middletown", code: "middletown" },
  { name: "Euclid", code: "euclid" },
  { name: "Newark", code: "newark-oh" },
  { name: "Mansfield", code: "mansfield" },
  { name: "Mentor", code: "mentor" },
  { name: "Beavercreek", code: "beavercreek" },
  { name: "Cleveland Heights", code: "cleveland-heights" },
  { name: "Strongsville", code: "strongsville" },
  { name: "Dublin", code: "dublin" }
];

// Pennsylvania cities
export const PA_CITIES: CityData[] = [
  { name: "Philadelphia", code: "philadelphia" },
  { name: "Pittsburgh", code: "pittsburgh" },
  { name: "Allentown", code: "allentown" },
  { name: "Reading", code: "reading" },
  { name: "Scranton", code: "scranton" },
  { name: "Bethlehem", code: "bethlehem" },
  { name: "Lancaster", code: "lancaster" },
  { name: "Harrisburg", code: "harrisburg" },
  { name: "Altoona", code: "altoona" },
  { name: "Erie", code: "erie" },
  { name: "York", code: "york" },
  { name: "Wilkes-Barre", code: "wilkes-barre" },
  { name: "Chester", code: "chester" },
  { name: "Williamsport", code: "williamsport" },
  { name: "Easton", code: "easton" },
  { name: "Lebanon", code: "lebanon-pa" },
  { name: "Hazleton", code: "hazleton" },
  { name: "New Castle", code: "new-castle" },
  { name: "Johnstown", code: "johnstown" },
  { name: "McKeesport", code: "mckeesport" },
  { name: "Chambersburg", code: "chambersburg" },
  { name: "State College", code: "state-college" },
  { name: "Norristown", code: "norristown" },
  { name: "King of Prussia", code: "king-of-prussia" },
  { name: "Bensalem", code: "bensalem" }
];

// Illinois cities
export const IL_CITIES: CityData[] = [
  { name: "Chicago", code: "chicago" },
  { name: "Aurora", code: "aurora" },
  { name: "Naperville", code: "naperville" },
  { name: "Joliet", code: "joliet" },
  { name: "Rockford", code: "rockford" },
  { name: "Springfield", code: "springfield-il" },
  { name: "Elgin", code: "elgin" },
  { name: "Peoria", code: "peoria" },
  { name: "Champaign", code: "champaign" },
  { name: "Waukegan", code: "waukegan" },
  { name: "Cicero", code: "cicero" },
  { name: "Bloomington", code: "bloomington-il" },
  { name: "Arlington Heights", code: "arlington-heights" },
  { name: "Evanston", code: "evanston" },
  { name: "Decatur", code: "decatur" },
  { name: "Schaumburg", code: "schaumburg" },
  { name: "Bolingbrook", code: "bolingbrook" },
  { name: "Palatine", code: "palatine" },
  { name: "Skokie", code: "skokie" },
  { name: "Des Plaines", code: "des-plaines" },
  { name: "Orland Park", code: "orland-park" },
  { name: "Tinley Park", code: "tinley-park" },
  { name: "Oak Lawn", code: "oak-lawn" },
  { name: "Berwyn", code: "berwyn" },
  { name: "Mount Prospect", code: "mount-prospect" }
];

// New Jersey cities
export const NJ_CITIES: CityData[] = [
  { name: "Newark", code: "newark" },
  { name: "Jersey City", code: "jersey-city" },
  { name: "Paterson", code: "paterson" },
  { name: "Elizabeth", code: "elizabeth" },
  { name: "Edison", code: "edison" },
  { name: "Woodbridge", code: "woodbridge" },
  { name: "Lakewood", code: "lakewood-nj" },
  { name: "Toms River", code: "toms-river" },
  { name: "Hamilton", code: "hamilton-nj" },
  { name: "Trenton", code: "trenton" },
  { name: "Clifton", code: "clifton" },
  { name: "Camden", code: "camden" },
  { name: "Brick", code: "brick" },
  { name: "Cherry Hill", code: "cherry-hill" },
  { name: "Passaic", code: "passaic" },
  { name: "Middletown", code: "middletown-nj" },
  { name: "Union City", code: "union-city" },
  { name: "Old Bridge", code: "old-bridge" },
  { name: "Gloucester Township", code: "gloucester-township" },
  { name: "East Orange", code: "east-orange" },
  { name: "North Bergen", code: "north-bergen" },
  { name: "Bayonne", code: "bayonne" },
  { name: "Vineland", code: "vineland" },
  { name: "Union", code: "union-nj" },
  { name: "Hoboken", code: "hoboken" }
];

// Michigan cities
export const MI_CITIES: CityData[] = [
  { name: "Detroit", code: "detroit" },
  { name: "Grand Rapids", code: "grand-rapids" },
  { name: "Warren", code: "warren" },
  { name: "Sterling Heights", code: "sterling-heights" },
  { name: "Ann Arbor", code: "ann-arbor" },
  { name: "Lansing", code: "lansing" },
  { name: "Flint", code: "flint" },
  { name: "Dearborn", code: "dearborn" },
  { name: "Livonia", code: "livonia" },
  { name: "Troy", code: "troy-mi" },
  { name: "Westland", code: "westland" },
  { name: "Farmington Hills", code: "farmington-hills" },
  { name: "Kalamazoo", code: "kalamazoo" },
  { name: "Wyoming", code: "wyoming-mi" },
  { name: "Southfield", code: "southfield" },
  { name: "Rochester Hills", code: "rochester-hills" },
  { name: "Taylor", code: "taylor" },
  { name: "Pontiac", code: "pontiac" },
  { name: "St. Clair Shores", code: "st-clair-shores" },
  { name: "Royal Oak", code: "royal-oak" },
  { name: "Novi", code: "novi" },
  { name: "Dearborn Heights", code: "dearborn-heights" },
  { name: "Battle Creek", code: "battle-creek" },
  { name: "Saginaw", code: "saginaw" },
  { name: "Kentwood", code: "kentwood" }
];

// Colorado cities
export const CO_CITIES: CityData[] = [
  { name: "Denver", code: "denver" },
  { name: "Colorado Springs", code: "colorado-springs" },
  { name: "Aurora", code: "aurora-co" },
  { name: "Fort Collins", code: "fort-collins" },
  { name: "Lakewood", code: "lakewood-co" },
  { name: "Thornton", code: "thornton" },
  { name: "Arvada", code: "arvada" },
  { name: "Westminster", code: "westminster" },
  { name: "Pueblo", code: "pueblo" },
  { name: "Centennial", code: "centennial" },
  { name: "Boulder", code: "boulder" },
  { name: "Greeley", code: "greeley" },
  { name: "Longmont", code: "longmont" },
  { name: "Loveland", code: "loveland" },
  { name: "Grand Junction", code: "grand-junction" },
  { name: "Broomfield", code: "broomfield" },
  { name: "Castle Rock", code: "castle-rock" },
  { name: "Commerce City", code: "commerce-city" },
  { name: "Parker", code: "parker" },
  { name: "Littleton", code: "littleton" },
  { name: "Northglenn", code: "northglenn" },
  { name: "Brighton", code: "brighton" },
  { name: "Englewood", code: "englewood" },
  { name: "Wheat Ridge", code: "wheat-ridge" },
  { name: "Fountain", code: "fountain" }
];

// Tennessee cities
export const TN_CITIES: CityData[] = [
  { name: "Nashville", code: "nashville" },
  { name: "Memphis", code: "memphis" },
  { name: "Knoxville", code: "knoxville" },
  { name: "Chattanooga", code: "chattanooga" },
  { name: "Clarksville", code: "clarksville" },
  { name: "Murfreesboro", code: "murfreesboro" },
  { name: "Franklin", code: "franklin" },
  { name: "Jackson", code: "jackson-tn" },
  { name: "Johnson City", code: "johnson-city" },
  { name: "Bartlett", code: "bartlett" },
  { name: "Hendersonville", code: "hendersonville" },
  { name: "Kingsport", code: "kingsport" },
  { name: "Collierville", code: "collierville" },
  { name: "Smyrna", code: "smyrna-tn" },
  { name: "Cleveland", code: "cleveland-tn" },
  { name: "Brentwood", code: "brentwood" },
  { name: "Germantown", code: "germantown" },
  { name: "Columbia", code: "columbia-tn" },
  { name: "La Vergne", code: "la-vergne" },
  { name: "Gallatin", code: "gallatin" },
  { name: "Cookeville", code: "cookeville" },
  { name: "Mount Juliet", code: "mount-juliet" },
  { name: "Lebanon", code: "lebanon-tn" },
  { name: "Morristown", code: "morristown" },
  { name: "Oak Ridge", code: "oak-ridge" }
];

// Virginia cities
export const VA_CITIES: CityData[] = [
  { name: "Virginia Beach", code: "virginia-beach" },
  { name: "Norfolk", code: "norfolk" },
  { name: "Chesapeake", code: "chesapeake" },
  { name: "Richmond", code: "richmond" },
  { name: "Newport News", code: "newport-news" },
  { name: "Alexandria", code: "alexandria" },
  { name: "Hampton", code: "hampton" },
  { name: "Roanoke", code: "roanoke" },
  { name: "Portsmouth", code: "portsmouth" },
  { name: "Suffolk", code: "suffolk" },
  { name: "Lynchburg", code: "lynchburg" },
  { name: "Harrisonburg", code: "harrisonburg" },
  { name: "Leesburg", code: "leesburg" },
  { name: "Charlottesville", code: "charlottesville" },
  { name: "Danville", code: "danville" },
  { name: "Blacksburg", code: "blacksburg" },
  { name: "Manassas", code: "manassas" },
  { name: "Petersburg", code: "petersburg" },
  { name: "Fredericksburg", code: "fredericksburg" },
  { name: "Winchester", code: "winchester" },
  { name: "Salem", code: "salem-va" },
  { name: "Staunton", code: "staunton" },
  { name: "Fairfax", code: "fairfax" },
  { name: "Hopewell", code: "hopewell" },
  { name: "Waynesboro", code: "waynesboro" }
];

// Indiana cities
export const IN_CITIES: CityData[] = [
  { name: "Indianapolis", code: "indianapolis" },
  { name: "Fort Wayne", code: "fort-wayne" },
  { name: "Evansville", code: "evansville" },
  { name: "South Bend", code: "south-bend" },
  { name: "Carmel", code: "carmel" },
  { name: "Fishers", code: "fishers" },
  { name: "Bloomington", code: "bloomington" },
  { name: "Hammond", code: "hammond" },
  { name: "Gary", code: "gary" },
  { name: "Lafayette", code: "lafayette" },
  { name: "Muncie", code: "muncie" },
  { name: "Terre Haute", code: "terre-haute" },
  { name: "Kokomo", code: "kokomo" },
  { name: "Anderson", code: "anderson" },
  { name: "Noblesville", code: "noblesville" },
  { name: "Greenwood", code: "greenwood" },
  { name: "Elkhart", code: "elkhart" },
  { name: "Mishawaka", code: "mishawaka" },
  { name: "Lawrence", code: "lawrence-in" },
  { name: "Jeffersonville", code: "jeffersonville" },
  { name: "Columbus", code: "columbus-in" },
  { name: "Portage", code: "portage" },
  { name: "New Albany", code: "new-albany" },
  { name: "Richmond", code: "richmond-in" },
  { name: "Westfield", code: "westfield" }
];

// Kansas cities
export const KS_CITIES: CityData[] = [
  { name: "Wichita", code: "wichita" },
  { name: "Overland Park", code: "overland-park" },
  { name: "Kansas City", code: "kansas-city-ks" },
  { name: "Olathe", code: "olathe" },
  { name: "Topeka", code: "topeka" },
  { name: "Lawrence", code: "lawrence" },
  { name: "Shawnee", code: "shawnee" },
  { name: "Manhattan", code: "manhattan-ks" },
  { name: "Lenexa", code: "lenexa" },
  { name: "Salina", code: "salina" },
  { name: "Hutchinson", code: "hutchinson" },
  { name: "Leavenworth", code: "leavenworth" },
  { name: "Leawood", code: "leawood" },
  { name: "Dodge City", code: "dodge-city" },
  { name: "Garden City", code: "garden-city" },
  { name: "Emporia", code: "emporia" },
  { name: "Derby", code: "derby" },
  { name: "Prairie Village", code: "prairie-village" },
  { name: "Junction City", code: "junction-city" },
  { name: "Hays", code: "hays" },
  { name: "Liberal", code: "liberal" },
  { name: "Gardner", code: "gardner" },
  { name: "Pittsburg", code: "pittsburg" },
  { name: "Newton", code: "newton" },
  { name: "Great Bend", code: "great-bend" }
];

// District of Columbia
export const DC_CITIES: CityData[] = [
  { name: "Washington DC", code: "washington-dc" },
  { name: "Georgetown", code: "georgetown" },
  { name: "Capitol Hill", code: "capitol-hill" },
  { name: "Dupont Circle", code: "dupont-circle" },
  { name: "Adams Morgan", code: "adams-morgan" },
  { name: "Columbia Heights", code: "columbia-heights" },
  { name: "U Street Corridor", code: "u-street" },
  { name: "Navy Yard", code: "navy-yard" },
  { name: "Foggy Bottom", code: "foggy-bottom" },
  { name: "Petworth", code: "petworth" },
  { name: "Shaw", code: "shaw" },
  { name: "Brookland", code: "brookland" },
  { name: "Anacostia", code: "anacostia" },
  { name: "Tenleytown", code: "tenleytown" },
  { name: "Cleveland Park", code: "cleveland-park" },
  { name: "Woodley Park", code: "woodley-park" },
  { name: "Logan Circle", code: "logan-circle" },
  { name: "NoMa", code: "noma" },
  { name: "H Street NE", code: "h-street" },
  { name: "Penn Quarter", code: "penn-quarter" }
];

// Oregon cities
export const OR_CITIES: CityData[] = [
  { name: "Portland", code: "portland" },
  { name: "Salem", code: "salem" },
  { name: "Eugene", code: "eugene" },
  { name: "Gresham", code: "gresham" },
  { name: "Hillsboro", code: "hillsboro" },
  { name: "Beaverton", code: "beaverton" },
  { name: "Bend", code: "bend" },
  { name: "Medford", code: "medford" },
  { name: "Springfield", code: "springfield-or" },
  { name: "Corvallis", code: "corvallis" },
  { name: "Albany", code: "albany-or" },
  { name: "Tigard", code: "tigard" },
  { name: "Lake Oswego", code: "lake-oswego" },
  { name: "Keizer", code: "keizer" },
  { name: "Grants Pass", code: "grants-pass" },
  { name: "Oregon City", code: "oregon-city" },
  { name: "McMinnville", code: "mcminnville" },
  { name: "Redmond", code: "redmond-or" },
  { name: "Tualatin", code: "tualatin" },
  { name: "West Linn", code: "west-linn" },
  { name: "Woodburn", code: "woodburn" },
  { name: "Ashland", code: "ashland" },
  { name: "Milwaukie", code: "milwaukie" },
  { name: "Newberg", code: "newberg" },
  { name: "Roseburg", code: "roseburg" }
];

// Alabama cities
export const AL_CITIES: CityData[] = [
  { name: "Birmingham", code: "birmingham" },
  { name: "Montgomery", code: "montgomery" },
  { name: "Huntsville", code: "huntsville" },
  { name: "Mobile", code: "mobile" },
  { name: "Tuscaloosa", code: "tuscaloosa" },
  { name: "Hoover", code: "hoover" },
  { name: "Dothan", code: "dothan" },
  { name: "Auburn", code: "auburn" },
  { name: "Decatur", code: "decatur" },
  { name: "Madison", code: "madison-al" },
  { name: "Florence", code: "florence" },
  { name: "Gadsden", code: "gadsden" },
  { name: "Vestavia Hills", code: "vestavia-hills" },
  { name: "Prattville", code: "prattville" },
  { name: "Phenix City", code: "phenix-city" },
  { name: "Alabaster", code: "alabaster" },
  { name: "Bessemer", code: "bessemer" },
  { name: "Enterprise", code: "enterprise" },
  { name: "Opelika", code: "opelika" },
  { name: "Homewood", code: "homewood" }
];

// Alaska cities
export const AK_CITIES: CityData[] = [
  { name: "Anchorage", code: "anchorage" },
  { name: "Fairbanks", code: "fairbanks" },
  { name: "Juneau", code: "juneau" },
  { name: "Sitka", code: "sitka" },
  { name: "Ketchikan", code: "ketchikan" },
  { name: "Wasilla", code: "wasilla" },
  { name: "Kenai", code: "kenai" },
  { name: "Kodiak", code: "kodiak" },
  { name: "Bethel", code: "bethel" },
  { name: "Palmer", code: "palmer" },
  { name: "Homer", code: "homer" },
  { name: "Soldotna", code: "soldotna" },
  { name: "Valdez", code: "valdez" },
  { name: "Nome", code: "nome" },
  { name: "Barrow", code: "barrow" }
];

// Arkansas cities
export const AR_CITIES: CityData[] = [
  { name: "Little Rock", code: "little-rock" },
  { name: "Fort Smith", code: "fort-smith" },
  { name: "Fayetteville", code: "fayetteville-ar" },
  { name: "Springdale", code: "springdale" },
  { name: "Jonesboro", code: "jonesboro" },
  { name: "North Little Rock", code: "north-little-rock" },
  { name: "Conway", code: "conway" },
  { name: "Rogers", code: "rogers" },
  { name: "Pine Bluff", code: "pine-bluff" },
  { name: "Bentonville", code: "bentonville" },
  { name: "Hot Springs", code: "hot-springs" },
  { name: "Benton", code: "benton" },
  { name: "Texarkana", code: "texarkana" },
  { name: "Sherwood", code: "sherwood" },
  { name: "Jacksonville", code: "jacksonville-ar" },
  { name: "Russellville", code: "russellville" },
  { name: "Bella Vista", code: "bella-vista" },
  { name: "West Memphis", code: "west-memphis" },
  { name: "Paragould", code: "paragould" },
  { name: "Cabot", code: "cabot" }
];

// Connecticut cities
export const CT_CITIES: CityData[] = [
  { name: "Bridgeport", code: "bridgeport" },
  { name: "New Haven", code: "new-haven" },
  { name: "Hartford", code: "hartford" },
  { name: "Stamford", code: "stamford" },
  { name: "Waterbury", code: "waterbury" },
  { name: "Norwalk", code: "norwalk" },
  { name: "Danbury", code: "danbury" },
  { name: "New Britain", code: "new-britain" },
  { name: "Bristol", code: "bristol" },
  { name: "Meriden", code: "meriden" },
  { name: "Milford", code: "milford" },
  { name: "West Haven", code: "west-haven" },
  { name: "Middletown", code: "middletown-ct" },
  { name: "Norwich", code: "norwich" },
  { name: "Shelton", code: "shelton" },
  { name: "Torrington", code: "torrington" },
  { name: "New London", code: "new-london" },
  { name: "Ansonia", code: "ansonia" },
  { name: "Derby", code: "derby-ct" },
  { name: "Groton", code: "groton" }
];

// Delaware cities
export const DE_CITIES: CityData[] = [
  { name: "Wilmington", code: "wilmington-de" },
  { name: "Dover", code: "dover" },
  { name: "Newark", code: "newark-de" },
  { name: "Middletown", code: "middletown-de" },
  { name: "Smyrna", code: "smyrna-de" },
  { name: "Milford", code: "milford-de" },
  { name: "Seaford", code: "seaford" },
  { name: "Georgetown", code: "georgetown-de" },
  { name: "Elsmere", code: "elsmere" },
  { name: "New Castle", code: "new-castle-de" },
  { name: "Millsboro", code: "millsboro" },
  { name: "Laurel", code: "laurel" },
  { name: "Harrington", code: "harrington" },
  { name: "Camden", code: "camden-de" },
  { name: "Clayton", code: "clayton" }
];

// Hawaii cities
export const HI_CITIES: CityData[] = [
  { name: "Honolulu", code: "honolulu" },
  { name: "Pearl City", code: "pearl-city" },
  { name: "Hilo", code: "hilo" },
  { name: "Kailua", code: "kailua" },
  { name: "Waipahu", code: "waipahu" },
  { name: "Kaneohe", code: "kaneohe" },
  { name: "Mililani Town", code: "mililani" },
  { name: "Kahului", code: "kahului" },
  { name: "Ewa Gentry", code: "ewa-gentry" },
  { name: "Kihei", code: "kihei" },
  { name: "Kapolei", code: "kapolei" },
  { name: "Lahaina", code: "lahaina" },
  { name: "Wailuku", code: "wailuku" },
  { name: "Aiea", code: "aiea" },
  { name: "Kona", code: "kona" }
];

// Idaho cities
export const ID_CITIES: CityData[] = [
  { name: "Boise", code: "boise" },
  { name: "Meridian", code: "meridian" },
  { name: "Nampa", code: "nampa" },
  { name: "Idaho Falls", code: "idaho-falls" },
  { name: "Caldwell", code: "caldwell" },
  { name: "Pocatello", code: "pocatello" },
  { name: "Coeur d'Alene", code: "coeur-dalene" },
  { name: "Twin Falls", code: "twin-falls" },
  { name: "Post Falls", code: "post-falls" },
  { name: "Lewiston", code: "lewiston" },
  { name: "Rexburg", code: "rexburg" },
  { name: "Moscow", code: "moscow-id" },
  { name: "Eagle", code: "eagle" },
  { name: "Kuna", code: "kuna" },
  { name: "Ammon", code: "ammon" },
  { name: "Mountain Home", code: "mountain-home" },
  { name: "Chubbuck", code: "chubbuck" },
  { name: "Hayden", code: "hayden" },
  { name: "Jerome", code: "jerome" },
  { name: "Blackfoot", code: "blackfoot" }
];

// Iowa cities
export const IA_CITIES: CityData[] = [
  { name: "Des Moines", code: "des-moines" },
  { name: "Cedar Rapids", code: "cedar-rapids" },
  { name: "Davenport", code: "davenport" },
  { name: "Sioux City", code: "sioux-city" },
  { name: "Iowa City", code: "iowa-city" },
  { name: "Waterloo", code: "waterloo-ia" },
  { name: "Ames", code: "ames" },
  { name: "West Des Moines", code: "west-des-moines" },
  { name: "Council Bluffs", code: "council-bluffs" },
  { name: "Ankeny", code: "ankeny" },
  { name: "Dubuque", code: "dubuque" },
  { name: "Urbandale", code: "urbandale" },
  { name: "Cedar Falls", code: "cedar-falls" },
  { name: "Marion", code: "marion" },
  { name: "Bettendorf", code: "bettendorf" },
  { name: "Mason City", code: "mason-city" },
  { name: "Marshalltown", code: "marshalltown" },
  { name: "Clinton", code: "clinton" },
  { name: "Burlington", code: "burlington-ia" },
  { name: "Ottumwa", code: "ottumwa" }
];

// Kentucky cities
export const KY_CITIES: CityData[] = [
  { name: "Louisville", code: "louisville" },
  { name: "Lexington", code: "lexington" },
  { name: "Bowling Green", code: "bowling-green" },
  { name: "Owensboro", code: "owensboro" },
  { name: "Covington", code: "covington" },
  { name: "Richmond", code: "richmond-ky" },
  { name: "Georgetown", code: "georgetown-ky" },
  { name: "Florence", code: "florence-ky" },
  { name: "Hopkinsville", code: "hopkinsville" },
  { name: "Nicholasville", code: "nicholasville" },
  { name: "Elizabethtown", code: "elizabethtown" },
  { name: "Henderson", code: "henderson" },
  { name: "Frankfort", code: "frankfort" },
  { name: "Independence", code: "independence" },
  { name: "Jeffersontown", code: "jeffersontown" },
  { name: "Paducah", code: "paducah" },
  { name: "Radcliff", code: "radcliff" },
  { name: "Ashland", code: "ashland-ky" },
  { name: "Madisonville", code: "madisonville" },
  { name: "Murray", code: "murray" }
];

// Louisiana cities
export const LA_CITIES: CityData[] = [
  { name: "New Orleans", code: "new-orleans" },
  { name: "Baton Rouge", code: "baton-rouge" },
  { name: "Shreveport", code: "shreveport" },
  { name: "Lafayette", code: "lafayette-la" },
  { name: "Lake Charles", code: "lake-charles" },
  { name: "Kenner", code: "kenner" },
  { name: "Bossier City", code: "bossier-city" },
  { name: "Monroe", code: "monroe" },
  { name: "Alexandria", code: "alexandria-la" },
  { name: "Houma", code: "houma" },
  { name: "Marrero", code: "marrero" },
  { name: "New Iberia", code: "new-iberia" },
  { name: "Laplace", code: "laplace" },
  { name: "Slidell", code: "slidell" },
  { name: "Central", code: "central" },
  { name: "Ruston", code: "ruston" },
  { name: "Sulphur", code: "sulphur" },
  { name: "Hammond", code: "hammond" },
  { name: "Zachary", code: "zachary" },
  { name: "Natchitoches", code: "natchitoches" }
];

// Maine cities
export const ME_CITIES: CityData[] = [
  { name: "Portland", code: "portland-me" },
  { name: "Lewiston", code: "lewiston-me" },
  { name: "Bangor", code: "bangor" },
  { name: "South Portland", code: "south-portland" },
  { name: "Auburn", code: "auburn-me" },
  { name: "Biddeford", code: "biddeford" },
  { name: "Sanford", code: "sanford-me" },
  { name: "Augusta", code: "augusta-me" },
  { name: "Saco", code: "saco" },
  { name: "Westbrook", code: "westbrook" },
  { name: "Waterville", code: "waterville" },
  { name: "Presque Isle", code: "presque-isle" },
  { name: "Brewer", code: "brewer" },
  { name: "Bath", code: "bath" },
  { name: "Ellsworth", code: "ellsworth" }
];

// Maryland cities
export const MD_CITIES: CityData[] = [
  { name: "Baltimore", code: "baltimore" },
  { name: "Columbia", code: "columbia-md" },
  { name: "Germantown", code: "germantown-md" },
  { name: "Silver Spring", code: "silver-spring" },
  { name: "Waldorf", code: "waldorf" },
  { name: "Frederick", code: "frederick" },
  { name: "Ellicott City", code: "ellicott-city" },
  { name: "Glen Burnie", code: "glen-burnie" },
  { name: "Gaithersburg", code: "gaithersburg" },
  { name: "Rockville", code: "rockville" },
  { name: "Bethesda", code: "bethesda" },
  { name: "Dundalk", code: "dundalk" },
  { name: "Towson", code: "towson" },
  { name: "Bowie", code: "bowie" },
  { name: "Aspen Hill", code: "aspen-hill" },
  { name: "Wheaton", code: "wheaton" },
  { name: "Severn", code: "severn" },
  { name: "Hagerstown", code: "hagerstown" },
  { name: "Annapolis", code: "annapolis" },
  { name: "College Park", code: "college-park" }
];

// Massachusetts cities
export const MA_CITIES: CityData[] = [
  { name: "Boston", code: "boston" },
  { name: "Worcester", code: "worcester" },
  { name: "Springfield", code: "springfield-ma" },
  { name: "Cambridge", code: "cambridge" },
  { name: "Lowell", code: "lowell" },
  { name: "Brockton", code: "brockton" },
  { name: "New Bedford", code: "new-bedford" },
  { name: "Quincy", code: "quincy" },
  { name: "Lynn", code: "lynn" },
  { name: "Fall River", code: "fall-river" },
  { name: "Newton", code: "newton" },
  { name: "Lawrence", code: "lawrence-ma" },
  { name: "Somerville", code: "somerville" },
  { name: "Framingham", code: "framingham" },
  { name: "Haverhill", code: "haverhill" },
  { name: "Waltham", code: "waltham" },
  { name: "Malden", code: "malden" },
  { name: "Brookline", code: "brookline" },
  { name: "Plymouth", code: "plymouth" },
  { name: "Medford", code: "medford-ma" }
];

// Minnesota cities
export const MN_CITIES: CityData[] = [
  { name: "Minneapolis", code: "minneapolis" },
  { name: "Saint Paul", code: "saint-paul" },
  { name: "Rochester", code: "rochester-mn" },
  { name: "Bloomington", code: "bloomington-mn" },
  { name: "Duluth", code: "duluth" },
  { name: "Brooklyn Park", code: "brooklyn-park" },
  { name: "Plymouth", code: "plymouth-mn" },
  { name: "Maple Grove", code: "maple-grove" },
  { name: "Woodbury", code: "woodbury" },
  { name: "St. Cloud", code: "st-cloud" },
  { name: "Eagan", code: "eagan" },
  { name: "Eden Prairie", code: "eden-prairie" },
  { name: "Coon Rapids", code: "coon-rapids" },
  { name: "Burnsville", code: "burnsville" },
  { name: "Blaine", code: "blaine" },
  { name: "Lakeville", code: "lakeville" },
  { name: "Minnetonka", code: "minnetonka" },
  { name: "Apple Valley", code: "apple-valley" },
  { name: "Edina", code: "edina" },
  { name: "St. Louis Park", code: "st-louis-park" }
];

// Mississippi cities
export const MS_CITIES: CityData[] = [
  { name: "Jackson", code: "jackson-ms" },
  { name: "Gulfport", code: "gulfport" },
  { name: "Southaven", code: "southaven" },
  { name: "Hattiesburg", code: "hattiesburg" },
  { name: "Biloxi", code: "biloxi" },
  { name: "Meridian", code: "meridian-ms" },
  { name: "Tupelo", code: "tupelo" },
  { name: "Olive Branch", code: "olive-branch" },
  { name: "Greenville", code: "greenville-ms" },
  { name: "Horn Lake", code: "horn-lake" },
  { name: "Pearl", code: "pearl" },
  { name: "Clinton", code: "clinton-ms" },
  { name: "Madison", code: "madison-ms" },
  { name: "Starkville", code: "starkville" },
  { name: "Vicksburg", code: "vicksburg" },
  { name: "Columbus", code: "columbus-ms" },
  { name: "Brandon", code: "brandon-ms" },
  { name: "Pascagoula", code: "pascagoula" },
  { name: "Oxford", code: "oxford" },
  { name: "Ridgeland", code: "ridgeland" }
];

// Missouri cities
export const MO_CITIES: CityData[] = [
  { name: "Kansas City", code: "kansas-city" },
  { name: "St. Louis", code: "st-louis" },
  { name: "Springfield", code: "springfield-mo" },
  { name: "Columbia", code: "columbia-mo" },
  { name: "Independence", code: "independence-mo" },
  { name: "Lee's Summit", code: "lees-summit" },
  { name: "O'Fallon", code: "ofallon" },
  { name: "St. Joseph", code: "st-joseph" },
  { name: "St. Charles", code: "st-charles" },
  { name: "St. Peters", code: "st-peters" },
  { name: "Blue Springs", code: "blue-springs" },
  { name: "Florissant", code: "florissant" },
  { name: "Joplin", code: "joplin" },
  { name: "Chesterfield", code: "chesterfield" },
  { name: "Jefferson City", code: "jefferson-city" },
  { name: "Cape Girardeau", code: "cape-girardeau" },
  { name: "Wildwood", code: "wildwood" },
  { name: "University City", code: "university-city" },
  { name: "Ballwin", code: "ballwin" },
  { name: "Raytown", code: "raytown" }
];

// Montana cities
export const MT_CITIES: CityData[] = [
  { name: "Billings", code: "billings" },
  { name: "Missoula", code: "missoula" },
  { name: "Great Falls", code: "great-falls" },
  { name: "Bozeman", code: "bozeman" },
  { name: "Butte", code: "butte" },
  { name: "Helena", code: "helena" },
  { name: "Kalispell", code: "kalispell" },
  { name: "Havre", code: "havre" },
  { name: "Anaconda", code: "anaconda" },
  { name: "Miles City", code: "miles-city" },
  { name: "Belgrade", code: "belgrade" },
  { name: "Livingston", code: "livingston" },
  { name: "Laurel", code: "laurel-mt" },
  { name: "Whitefish", code: "whitefish" },
  { name: "Lewistown", code: "lewistown" }
];

// Nebraska cities
export const NE_CITIES: CityData[] = [
  { name: "Omaha", code: "omaha" },
  { name: "Lincoln", code: "lincoln" },
  { name: "Bellevue", code: "bellevue-ne" },
  { name: "Grand Island", code: "grand-island" },
  { name: "Kearney", code: "kearney" },
  { name: "Fremont", code: "fremont-ne" },
  { name: "Hastings", code: "hastings" },
  { name: "Norfolk", code: "norfolk-ne" },
  { name: "North Platte", code: "north-platte" },
  { name: "Columbus", code: "columbus-ne" },
  { name: "Papillion", code: "papillion" },
  { name: "La Vista", code: "la-vista" },
  { name: "Scottsbluff", code: "scottsbluff" },
  { name: "South Sioux City", code: "south-sioux-city" },
  { name: "Beatrice", code: "beatrice" }
];

// Nevada cities
export const NV_CITIES: CityData[] = [
  { name: "Las Vegas", code: "las-vegas" },
  { name: "Henderson", code: "henderson-nv" },
  { name: "Reno", code: "reno" },
  { name: "North Las Vegas", code: "north-las-vegas" },
  { name: "Sparks", code: "sparks" },
  { name: "Carson City", code: "carson-city" },
  { name: "Fernley", code: "fernley" },
  { name: "Elko", code: "elko" },
  { name: "Mesquite", code: "mesquite-nv" },
  { name: "Boulder City", code: "boulder-city" },
  { name: "Fallon", code: "fallon" },
  { name: "Winnemucca", code: "winnemucca" },
  { name: "West Wendover", code: "west-wendover" },
  { name: "Ely", code: "ely" },
  { name: "Pahrump", code: "pahrump" }
];

// New Hampshire cities
export const NH_CITIES: CityData[] = [
  { name: "Manchester", code: "manchester" },
  { name: "Nashua", code: "nashua" },
  { name: "Concord", code: "concord-nh" },
  { name: "Derry", code: "derry" },
  { name: "Dover", code: "dover-nh" },
  { name: "Rochester", code: "rochester-nh" },
  { name: "Salem", code: "salem-nh" },
  { name: "Merrimack", code: "merrimack" },
  { name: "Hudson", code: "hudson-nh" },
  { name: "Londonderry", code: "londonderry" },
  { name: "Keene", code: "keene" },
  { name: "Bedford", code: "bedford" },
  { name: "Portsmouth", code: "portsmouth-nh" },
  { name: "Goffstown", code: "goffstown" },
  { name: "Laconia", code: "laconia" }
];

// New Mexico cities
export const NM_CITIES: CityData[] = [
  { name: "Albuquerque", code: "albuquerque" },
  { name: "Las Cruces", code: "las-cruces" },
  { name: "Rio Rancho", code: "rio-rancho" },
  { name: "Santa Fe", code: "santa-fe" },
  { name: "Roswell", code: "roswell" },
  { name: "Farmington", code: "farmington" },
  { name: "Clovis", code: "clovis" },
  { name: "Hobbs", code: "hobbs" },
  { name: "Alamogordo", code: "alamogordo" },
  { name: "Carlsbad", code: "carlsbad-nm" },
  { name: "Gallup", code: "gallup" },
  { name: "Deming", code: "deming" },
  { name: "Los Lunas", code: "los-lunas" },
  { name: "Sunland Park", code: "sunland-park" },
  { name: "Las Vegas", code: "las-vegas-nm" }
];

// North Dakota cities
export const ND_CITIES: CityData[] = [
  { name: "Fargo", code: "fargo" },
  { name: "Bismarck", code: "bismarck" },
  { name: "Grand Forks", code: "grand-forks" },
  { name: "Minot", code: "minot" },
  { name: "West Fargo", code: "west-fargo" },
  { name: "Williston", code: "williston" },
  { name: "Dickinson", code: "dickinson" },
  { name: "Mandan", code: "mandan" },
  { name: "Jamestown", code: "jamestown-nd" },
  { name: "Wahpeton", code: "wahpeton" },
  { name: "Devils Lake", code: "devils-lake" },
  { name: "Valley City", code: "valley-city" },
  { name: "Watford City", code: "watford-city" },
  { name: "Grafton", code: "grafton" },
  { name: "Beulah", code: "beulah" }
];

// Oklahoma cities
export const OK_CITIES: CityData[] = [
  { name: "Oklahoma City", code: "oklahoma-city" },
  { name: "Tulsa", code: "tulsa" },
  { name: "Norman", code: "norman" },
  { name: "Broken Arrow", code: "broken-arrow" },
  { name: "Edmond", code: "edmond" },
  { name: "Lawton", code: "lawton" },
  { name: "Moore", code: "moore" },
  { name: "Midwest City", code: "midwest-city" },
  { name: "Enid", code: "enid" },
  { name: "Stillwater", code: "stillwater" },
  { name: "Muskogee", code: "muskogee" },
  { name: "Bartlesville", code: "bartlesville" },
  { name: "Owasso", code: "owasso" },
  { name: "Shawnee", code: "shawnee-ok" },
  { name: "Ponca City", code: "ponca-city" },
  { name: "Ardmore", code: "ardmore" },
  { name: "Duncan", code: "duncan" },
  { name: "Del City", code: "del-city" },
  { name: "Bixby", code: "bixby" },
  { name: "Yukon", code: "yukon" }
];

// Rhode Island cities
export const RI_CITIES: CityData[] = [
  { name: "Providence", code: "providence" },
  { name: "Warwick", code: "warwick" },
  { name: "Cranston", code: "cranston" },
  { name: "Pawtucket", code: "pawtucket" },
  { name: "East Providence", code: "east-providence" },
  { name: "Woonsocket", code: "woonsocket" },
  { name: "Coventry", code: "coventry" },
  { name: "Cumberland", code: "cumberland" },
  { name: "North Providence", code: "north-providence" },
  { name: "South Kingstown", code: "south-kingstown" },
  { name: "West Warwick", code: "west-warwick" },
  { name: "Johnston", code: "johnston" },
  { name: "North Kingstown", code: "north-kingstown" },
  { name: "Newport", code: "newport" },
  { name: "Bristol", code: "bristol-ri" }
];

// South Carolina cities
export const SC_CITIES: CityData[] = [
  { name: "Charleston", code: "charleston" },
  { name: "Columbia", code: "columbia-sc" },
  { name: "North Charleston", code: "north-charleston" },
  { name: "Mount Pleasant", code: "mount-pleasant" },
  { name: "Rock Hill", code: "rock-hill" },
  { name: "Greenville", code: "greenville-sc" },
  { name: "Summerville", code: "summerville" },
  { name: "Goose Creek", code: "goose-creek" },
  { name: "Sumter", code: "sumter" },
  { name: "Hilton Head Island", code: "hilton-head" },
  { name: "Florence", code: "florence-sc" },
  { name: "Spartanburg", code: "spartanburg" },
  { name: "Myrtle Beach", code: "myrtle-beach" },
  { name: "Aiken", code: "aiken" },
  { name: "Anderson", code: "anderson-sc" },
  { name: "Mauldin", code: "mauldin" },
  { name: "North Augusta", code: "north-augusta" },
  { name: "Greer", code: "greer" },
  { name: "Conway", code: "conway-sc" },
  { name: "Bluffton", code: "bluffton" }
];

// South Dakota cities
export const SD_CITIES: CityData[] = [
  { name: "Sioux Falls", code: "sioux-falls" },
  { name: "Rapid City", code: "rapid-city" },
  { name: "Aberdeen", code: "aberdeen" },
  { name: "Brookings", code: "brookings" },
  { name: "Watertown", code: "watertown-sd" },
  { name: "Mitchell", code: "mitchell" },
  { name: "Yankton", code: "yankton" },
  { name: "Pierre", code: "pierre" },
  { name: "Huron", code: "huron" },
  { name: "Spearfish", code: "spearfish" },
  { name: "Vermillion", code: "vermillion" },
  { name: "Brandon", code: "brandon-sd" },
  { name: "Box Elder", code: "box-elder" },
  { name: "Madison", code: "madison-sd" },
  { name: "Sturgis", code: "sturgis" }
];

// Utah cities
export const UT_CITIES: CityData[] = [
  { name: "Salt Lake City", code: "salt-lake-city" },
  { name: "West Valley City", code: "west-valley-city" },
  { name: "Provo", code: "provo" },
  { name: "West Jordan", code: "west-jordan" },
  { name: "Orem", code: "orem" },
  { name: "Sandy", code: "sandy" },
  { name: "Ogden", code: "ogden" },
  { name: "St. George", code: "st-george" },
  { name: "Layton", code: "layton" },
  { name: "Taylorsville", code: "taylorsville" },
  { name: "South Jordan", code: "south-jordan" },
  { name: "Lehi", code: "lehi" },
  { name: "Logan", code: "logan" },
  { name: "Murray", code: "murray-ut" },
  { name: "Draper", code: "draper" },
  { name: "Bountiful", code: "bountiful" },
  { name: "Riverton", code: "riverton" },
  { name: "Herriman", code: "herriman" },
  { name: "Spanish Fork", code: "spanish-fork" },
  { name: "Roy", code: "roy" }
];

// Vermont cities
export const VT_CITIES: CityData[] = [
  { name: "Burlington", code: "burlington-vt" },
  { name: "South Burlington", code: "south-burlington" },
  { name: "Rutland", code: "rutland" },
  { name: "Barre", code: "barre" },
  { name: "Montpelier", code: "montpelier" },
  { name: "Winooski", code: "winooski" },
  { name: "St. Albans", code: "st-albans" },
  { name: "Newport", code: "newport-vt" },
  { name: "Vergennes", code: "vergennes" },
  { name: "Bennington", code: "bennington" },
  { name: "Brattleboro", code: "brattleboro" },
  { name: "Essex Junction", code: "essex-junction" },
  { name: "Milton", code: "milton-vt" },
  { name: "Hartford", code: "hartford-vt" },
  { name: "Middlebury", code: "middlebury" }
];

// West Virginia cities
export const WV_CITIES: CityData[] = [
  { name: "Charleston", code: "charleston-wv" },
  { name: "Huntington", code: "huntington" },
  { name: "Morgantown", code: "morgantown" },
  { name: "Parkersburg", code: "parkersburg" },
  { name: "Wheeling", code: "wheeling" },
  { name: "Weirton", code: "weirton" },
  { name: "Fairmont", code: "fairmont" },
  { name: "Martinsburg", code: "martinsburg" },
  { name: "Beckley", code: "beckley" },
  { name: "Clarksburg", code: "clarksburg" },
  { name: "South Charleston", code: "south-charleston" },
  { name: "Teays Valley", code: "teays-valley" },
  { name: "St. Albans", code: "st-albans-wv" },
  { name: "Vienna", code: "vienna" },
  { name: "Bluefield", code: "bluefield" }
];

// Wisconsin cities
export const WI_CITIES: CityData[] = [
  { name: "Milwaukee", code: "milwaukee" },
  { name: "Madison", code: "madison-wi" },
  { name: "Green Bay", code: "green-bay" },
  { name: "Kenosha", code: "kenosha" },
  { name: "Racine", code: "racine" },
  { name: "Appleton", code: "appleton" },
  { name: "Waukesha", code: "waukesha" },
  { name: "Oshkosh", code: "oshkosh" },
  { name: "Eau Claire", code: "eau-claire" },
  { name: "Janesville", code: "janesville" },
  { name: "West Allis", code: "west-allis" },
  { name: "La Crosse", code: "la-crosse" },
  { name: "Sheboygan", code: "sheboygan" },
  { name: "Wauwatosa", code: "wauwatosa" },
  { name: "Fond du Lac", code: "fond-du-lac" },
  { name: "New Berlin", code: "new-berlin" },
  { name: "Wausau", code: "wausau" },
  { name: "Brookfield", code: "brookfield-wi" },
  { name: "Beloit", code: "beloit" },
  { name: "Greenfield", code: "greenfield" }
];

// Wyoming cities
export const WY_CITIES: CityData[] = [
  { name: "Cheyenne", code: "cheyenne" },
  { name: "Casper", code: "casper" },
  { name: "Laramie", code: "laramie" },
  { name: "Gillette", code: "gillette" },
  { name: "Rock Springs", code: "rock-springs" },
  { name: "Sheridan", code: "sheridan" },
  { name: "Green River", code: "green-river" },
  { name: "Evanston", code: "evanston-wy" },
  { name: "Riverton", code: "riverton-wy" },
  { name: "Cody", code: "cody" },
  { name: "Jackson", code: "jackson" },
  { name: "Rawlins", code: "rawlins" },
  { name: "Lander", code: "lander" },
  { name: "Powell", code: "powell" },
  { name: "Douglas", code: "douglas" }
];

// State configurations
export const STATES: Record<string, StateDetailData> = {
  fl: {
    code: "fl",
    name: "Florida",
    fullName: "State of Florida",
    abbreviation: "FL",
    cities: FL_CITIES,
    activeCities: FL_ACTIVE_CITIES,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14503634.939573511!2d-79.77248745264295!3d27.440401301508807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c1766591562abf%3A0xf72e13d35bc74ed0!2sFlorida%2C%20USA!5e0!3m2!1sen!2s!4v1766839247453!5m2!1sen!2s",
    population: "22.6 million",
    timezone: "America/New_York",
    tagline: "Sunshine State Local SEO Excellence",
    description: "Helping Florida businesses shine brighter in local search results across the Sunshine State's dynamic markets."
  },
  tx: {
    code: "tx",
    name: "Texas",
    fullName: "State of Texas",
    abbreviation: "TX",
    cities: TX_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6903684.376591785!2d-103.05623365!3d31.46829205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864070360b823249%3A0x16eb1c8f1808de3c!2sTexas%2C%20USA!5e0!3m2!1sen!2s!4v1766839300000!5m2!1sen!2s",
    population: "30.5 million",
    timezone: "America/Chicago",
    tagline: "Lone Star State Local Search Domination",
    description: "Empowering Texas businesses to reach more customers through strategic local search optimization across the Lone Star State."
  },
  ny: {
    code: "ny",
    name: "New York",
    fullName: "State of New York",
    abbreviation: "NY",
    cities: NY_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6167447.467899783!2d-79.37849415!3d42.91707925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2s!4v1766839400000!5m2!1sen!2s",
    population: "19.3 million",
    timezone: "America/New_York",
    tagline: "Empire State Local Search Solutions",
    description: "Driving local visibility for businesses throughout New York, from Manhattan to Buffalo and everywhere in between."
  },
  wa: {
    code: "wa",
    name: "Washington",
    fullName: "State of Washington",
    abbreviation: "WA",
    cities: WA_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5560433.668959788!2d-124.04897365!3d47.42303265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485e5ffe7c3b0f9%3A0x944278686c5ff3ba!2sWashington%2C%20USA!5e0!3m2!1sen!2s!4v1766839500000!5m2!1sen!2s",
    population: "7.9 million",
    timezone: "America/Los_Angeles",
    tagline: "Evergreen State Local SEO Leadership",
    description: "Helping Washington businesses grow their local presence from Seattle to Spokane with proven search strategies."
  },
  ca: {
    code: "ca",
    name: "California",
    fullName: "State of California",
    abbreviation: "CA",
    cities: CA_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509170.989834093!2d-123.77216735!3d37.19472765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2s!4v1766839600000!5m2!1sen!2s",
    population: "39.0 million",
    timezone: "America/Los_Angeles",
    tagline: "Golden State Local Search Mastery",
    description: "Elevating California businesses in local search results across the most competitive markets in America."
  },
  az: {
    code: "az",
    name: "Arizona",
    fullName: "State of Arizona",
    abbreviation: "AZ",
    cities: AZ_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6713983.998641288!2d-114.01879365!3d34.39507655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0c6f6df1d4ef%3A0x23c6f4f203e712c2!2sArizona%2C%20USA!5e0!3m2!1sen!2s!4v1766839700000!5m2!1sen!2s",
    population: "7.4 million",
    timezone: "America/Phoenix",
    tagline: "Grand Canyon State Local SEO Solutions",
    description: "Boosting Arizona businesses in local search with strategies tailored for the desert Southwest market."
  },
  ga: {
    code: "ga",
    name: "Georgia",
    fullName: "State of Georgia",
    abbreviation: "GA",
    cities: GA_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6809892.667987045!2d-84.87874365!3d32.67907855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f135287c69c2c9%3A0x2e098c6ffa8a4c8!2sGeorgia%2C%20USA!5e0!3m2!1sen!2s!4v1766839800000!5m2!1sen!2s",
    population: "11.0 million",
    timezone: "America/New_York",
    tagline: "Peach State Local Search Expertise",
    description: "Growing Georgia businesses through targeted local SEO from Atlanta to Savannah and beyond."
  },
  nc: {
    code: "nc",
    name: "North Carolina",
    fullName: "State of North Carolina",
    abbreviation: "NC",
    cities: NC_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6611989.665493672!2d-82.16879365!3d35.55957755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a81%3A0xad3f30f5e922ae19!2sNorth%20Carolina%2C%20USA!5e0!3m2!1sen!2s!4v1766839900000!5m2!1sen!2s",
    population: "10.8 million",
    timezone: "America/New_York",
    tagline: "Tar Heel State Local SEO Specialists",
    description: "Connecting North Carolina businesses with local customers from the Blue Ridge Mountains to the Outer Banks."
  },
  oh: {
    code: "oh",
    name: "Ohio",
    fullName: "State of Ohio",
    abbreviation: "OH",
    cities: OH_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6212334.665493672!2d-84.05879365!3d40.36457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8836e1e58f9d8c29%3A0x4d1d8c1b6c5a5c8a!2sOhio%2C%20USA!5e0!3m2!1sen!2s!4v1766840000000!5m2!1sen!2s",
    population: "11.8 million",
    timezone: "America/New_York",
    tagline: "Buckeye State Local Search Champions",
    description: "Elevating Ohio businesses in local search results from Cleveland to Cincinnati and Columbus."
  },
  pa: {
    code: "pa",
    name: "Pennsylvania",
    fullName: "Commonwealth of Pennsylvania",
    abbreviation: "PA",
    cities: PA_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6112334.665493672!2d-78.05879365!3d40.87457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2e4d88b37f8b%3A0x2e098c6ffa8a4c8!2sPennsylvania%2C%20USA!5e0!3m2!1sen!2s!4v1766840100000!5m2!1sen!2s",
    population: "12.9 million",
    timezone: "America/New_York",
    tagline: "Keystone State Local SEO Authority",
    description: "Unlocking local search success for Pennsylvania businesses from Philadelphia to Pittsburgh."
  },
  il: {
    code: "il",
    name: "Illinois",
    fullName: "State of Illinois",
    abbreviation: "IL",
    cities: IL_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6212334.665493672!2d-89.39879365!3d40.00457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880b2d386f6e2619%3A0x7f15b841f15a2a00!2sIllinois%2C%20USA!5e0!3m2!1sen!2s!4v1766840200000!5m2!1sen!2s",
    population: "12.5 million",
    timezone: "America/Chicago",
    tagline: "Prairie State Local Search Excellence",
    description: "Driving local visibility for Illinois businesses from Chicago to Springfield and everywhere in between."
  },
  nj: {
    code: "nj",
    name: "New Jersey",
    fullName: "State of New Jersey",
    abbreviation: "NJ",
    cities: NJ_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6112334.665493672!2d-74.40879365!3d40.05457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c0fb959e00409f%3A0x39b83aec387c968!2sNew%20Jersey%2C%20USA!5e0!3m2!1sen!2s!4v1766840300000!5m2!1sen!2s",
    population: "9.3 million",
    timezone: "America/New_York",
    tagline: "Garden State Local SEO Growth",
    description: "Cultivating local search success for New Jersey businesses in one of America's most densely competitive markets."
  },
  mi: {
    code: "mi",
    name: "Michigan",
    fullName: "State of Michigan",
    abbreviation: "MI",
    cities: MI_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5912334.665493672!2d-85.60879365!3d44.34457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824c05a55c52e7d%3A0x2e098c6ffa8a4c8!2sMichigan%2C%20USA!5e0!3m2!1sen!2s!4v1766840400000!5m2!1sen!2s",
    population: "10.0 million",
    timezone: "America/Detroit",
    tagline: "Great Lakes State Local Search Power",
    description: "Boosting Michigan businesses in local search from Detroit to Grand Rapids and the Upper Peninsula."
  },
  co: {
    code: "co",
    name: "Colorado",
    fullName: "State of Colorado",
    abbreviation: "CO",
    cities: CO_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6312334.665493672!2d-105.55879365!3d39.05457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874014749b1856b7%3A0xc75483314990a7ff!2sColorado%2C%20USA!5e0!3m2!1sen!2s!4v1766840500000!5m2!1sen!2s",
    population: "5.9 million",
    timezone: "America/Denver",
    tagline: "Centennial State Local SEO Summit",
    description: "Taking Colorado businesses to new heights in local search from Denver to Boulder and beyond."
  },
  tn: {
    code: "tn",
    name: "Tennessee",
    fullName: "State of Tennessee",
    abbreviation: "TN",
    cities: TN_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6612334.665493672!2d-86.58879365!3d35.86457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88621c7c0a8afd89%3A0x1f04d7d3c1a3c8ff!2sTennessee%2C%20USA!5e0!3m2!1sen!2s!4v1766840600000!5m2!1sen!2s",
    population: "7.1 million",
    timezone: "America/Chicago",
    tagline: "Volunteer State Local Search Success",
    description: "Harmonizing local search visibility for Tennessee businesses from Nashville to Memphis."
  },
  va: {
    code: "va",
    name: "Virginia",
    fullName: "Commonwealth of Virginia",
    abbreviation: "VA",
    cities: VA_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6412334.665493672!2d-78.86879365!3d37.43457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884cd670bdbcb2cd%3A0xc04e4149b746a695!2sVirginia%2C%20USA!5e0!3m2!1sen!2s!4v1766840700000!5m2!1sen!2s",
    population: "8.6 million",
    timezone: "America/New_York",
    tagline: "Old Dominion Local SEO Leadership",
    description: "Building local search authority for Virginia businesses from Northern Virginia to Hampton Roads."
  },
  in: {
    code: "in",
    name: "Indiana",
    fullName: "State of Indiana",
    abbreviation: "IN",
    cities: IN_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6212334.665493672!2d-86.27879365!3d39.84957755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b50ffa7796a03%3A0xd68e9df640b9ea7c!2sIndiana%2C%20USA!5e0!3m2!1sen!2s!4v1766840800000!5m2!1sen!2s",
    population: "6.8 million",
    timezone: "America/Indiana/Indianapolis",
    tagline: "Hoosier State Local Search Victory",
    description: "Accelerating local search performance for Indiana businesses from Indianapolis to Fort Wayne."
  },
  ks: {
    code: "ks",
    name: "Kansas",
    fullName: "State of Kansas",
    abbreviation: "KS",
    cities: KS_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6412334.665493672!2d-98.48879365!3d38.50057755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87a2bd3b9f3b2e8d%3A0x756e7e2eb8c5d0a8!2sKansas%2C%20USA!5e0!3m2!1sen!2s!4v1766840900000!5m2!1sen!2s",
    population: "2.9 million",
    timezone: "America/Chicago",
    tagline: "Sunflower State Local SEO Growth",
    description: "Growing local search presence for Kansas businesses from Wichita to Kansas City."
  },
  dc: {
    code: "dc",
    name: "District of Columbia",
    fullName: "District of Columbia",
    abbreviation: "DC",
    cities: DC_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99370.14174073286!2d-77.0368707!3d38.9071923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2sWashington%2C%20DC%2C%20USA!5e0!3m2!1sen!2s!4v1766841000000!5m2!1sen!2s",
    population: "0.7 million",
    timezone: "America/New_York",
    tagline: "Nation's Capital Local SEO Experts",
    description: "Powering local search visibility for businesses in America's capital and the greater DC metropolitan area."
  },
  or: {
    code: "or",
    name: "Oregon",
    fullName: "State of Oregon",
    abbreviation: "OR",
    cities: OR_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5812334.665493672!2d-120.55879365!3d43.93457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54936247e4b0e5a1%3A0x123456789abcdef!2sOregon%2C%20USA!5e0!3m2!1sen!2s!4v1766841100000!5m2!1sen!2s",
    population: "4.2 million",
    timezone: "America/Los_Angeles",
    tagline: "Beaver State Local Search Innovation",
    description: "Innovating local search strategies for Oregon businesses from Portland to Eugene and beyond."
  },
  al: {
    code: "al",
    name: "Alabama",
    fullName: "State of Alabama",
    abbreviation: "AL",
    cities: AL_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6809892.667987045!2d-86.79874365!3d32.80907855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888689cd3df54f35%3A0xa9af2d1a9a48!2sAlabama%2C%20USA!5e0!3m2!1sen!2s!4v1766841200000!5m2!1sen!2s",
    population: "5.1 million",
    timezone: "America/Chicago",
    tagline: "Heart of Dixie Local SEO Services",
    description: "Driving local search success for Alabama businesses from Birmingham to Mobile with proven strategies."
  },
  ak: {
    code: "ak",
    name: "Alaska",
    fullName: "State of Alaska",
    abbreviation: "AK",
    cities: AK_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11012334.665493672!2d-153.36879365!3d64.00457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x51325d8dc7aa3f87%3A0x3e6f15a3e7abcd!2sAlaska%2C%20USA!5e0!3m2!1sen!2s!4v1766841300000!5m2!1sen!2s",
    population: "0.7 million",
    timezone: "America/Anchorage",
    tagline: "Last Frontier Local Search Pioneers",
    description: "Bringing local search excellence to Alaska businesses from Anchorage to Fairbanks across the vast frontier."
  },
  ar: {
    code: "ar",
    name: "Arkansas",
    fullName: "State of Arkansas",
    abbreviation: "AR",
    cities: AR_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6612334.665493672!2d-92.37879365!3d34.80457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d31e0f0fcff34b%3A0x6b8f82f8b3abcd!2sArkansas%2C%20USA!5e0!3m2!1sen!2s!4v1766841400000!5m2!1sen!2s",
    population: "3.0 million",
    timezone: "America/Chicago",
    tagline: "Natural State Local SEO Experts",
    description: "Growing local visibility for Arkansas businesses from Little Rock to Fayetteville with natural results."
  },
  ct: {
    code: "ct",
    name: "Connecticut",
    fullName: "State of Connecticut",
    abbreviation: "CT",
    cities: CT_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1512334.665493672!2d-72.75879365!3d41.55457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e653748f9c5e1d%3A0x4a6e0ca0f8f7abcd!2sConnecticut%2C%20USA!5e0!3m2!1sen!2s!4v1766841500000!5m2!1sen!2s",
    population: "3.6 million",
    timezone: "America/New_York",
    tagline: "Constitution State Local Search Mastery",
    description: "Strengthening local search presence for Connecticut businesses from Hartford to Stamford."
  },
  de: {
    code: "de",
    name: "Delaware",
    fullName: "State of Delaware",
    abbreviation: "DE",
    cities: DE_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d812334.665493672!2d-75.52879365!3d39.00457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c764b9d9e5a7e5%3A0x6d5e6a0c8b9abcd!2sDelaware%2C%20USA!5e0!3m2!1sen!2s!4v1766841600000!5m2!1sen!2s",
    population: "1.0 million",
    timezone: "America/New_York",
    tagline: "First State Local SEO Leadership",
    description: "Leading local search optimization for Delaware businesses from Wilmington to Dover."
  },
  hi: {
    code: "hi",
    name: "Hawaii",
    fullName: "State of Hawaii",
    abbreviation: "HI",
    cities: HI_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3812334.665493672!2d-157.52879365!3d20.80457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006636e79c9c99%3A0xab7a8c1e0a9abcd!2sHawaii%2C%20USA!5e0!3m2!1sen!2s!4v1766841700000!5m2!1sen!2s",
    population: "1.4 million",
    timezone: "Pacific/Honolulu",
    tagline: "Aloha State Local Search Paradise",
    description: "Bringing paradise-level local search results to Hawaii businesses across all islands."
  },
  id: {
    code: "id",
    name: "Idaho",
    fullName: "State of Idaho",
    abbreviation: "ID",
    cities: ID_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5512334.665493672!2d-114.72879365!3d44.24457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54afc6a1e4b7e1a5%3A0x9a8b7c6d5e4abcd!2sIdaho%2C%20USA!5e0!3m2!1sen!2s!4v1766841800000!5m2!1sen!2s",
    population: "2.0 million",
    timezone: "America/Boise",
    tagline: "Gem State Local Search Excellence",
    description: "Unearthing local search gems for Idaho businesses from Boise to Coeur d'Alene."
  },
  ia: {
    code: "ia",
    name: "Iowa",
    fullName: "State of Iowa",
    abbreviation: "IA",
    cities: IA_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6012334.665493672!2d-93.50879365!3d42.03457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ee5c5de6a0c1e3%3A0x8b9a7c6d5e4abcd!2sIowa%2C%20USA!5e0!3m2!1sen!2s!4v1766841900000!5m2!1sen!2s",
    population: "3.2 million",
    timezone: "America/Chicago",
    tagline: "Hawkeye State Local SEO Focus",
    description: "Sharpening local search focus for Iowa businesses from Des Moines to Cedar Rapids."
  },
  ky: {
    code: "ky",
    name: "Kentucky",
    fullName: "Commonwealth of Kentucky",
    abbreviation: "KY",
    cities: KY_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6412334.665493672!2d-85.76879365!3d37.84457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8841a3f2e0c1b5d7%3A0x7a6b5c4d3e2abcd!2sKentucky%2C%20USA!5e0!3m2!1sen!2s!4v1766842000000!5m2!1sen!2s",
    population: "4.5 million",
    timezone: "America/New_York",
    tagline: "Bluegrass State Local Search Champions",
    description: "Racing ahead in local search for Kentucky businesses from Louisville to Lexington."
  },
  la: {
    code: "la",
    name: "Louisiana",
    fullName: "State of Louisiana",
    abbreviation: "LA",
    cities: LA_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6912334.665493672!2d-91.96879365!3d31.16457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8621f4a9c5b7e3d1%3A0x6a5b4c3d2e1abcd!2sLouisiana%2C%20USA!5e0!3m2!1sen!2s!4v1766842100000!5m2!1sen!2s",
    population: "4.6 million",
    timezone: "America/Chicago",
    tagline: "Pelican State Local SEO Magic",
    description: "Creating local search magic for Louisiana businesses from New Orleans to Baton Rouge."
  },
  me: {
    code: "me",
    name: "Maine",
    fullName: "State of Maine",
    abbreviation: "ME",
    cities: ME_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5212334.665493672!2d-69.38879365!3d45.25457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb01f0f4b9e7a5d%3A0x5a4b3c2d1e0abcd!2sMaine%2C%20USA!5e0!3m2!1sen!2s!4v1766842200000!5m2!1sen!2s",
    population: "1.4 million",
    timezone: "America/New_York",
    tagline: "Pine Tree State Local Search Growth",
    description: "Growing local search presence for Maine businesses from Portland to Bangor."
  },
  md: {
    code: "md",
    name: "Maryland",
    fullName: "State of Maryland",
    abbreviation: "MD",
    cities: MD_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3212334.665493672!2d-76.64879365!3d39.04457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7dfb0c3e5a7b9%3A0x4a3b2c1d0e9abcd!2sMaryland%2C%20USA!5e0!3m2!1sen!2s!4v1766842300000!5m2!1sen!2s",
    population: "6.2 million",
    timezone: "America/New_York",
    tagline: "Old Line State Local SEO Authority",
    description: "Building local search authority for Maryland businesses from Baltimore to Bethesda."
  },
  ma: {
    code: "ma",
    name: "Massachusetts",
    fullName: "Commonwealth of Massachusetts",
    abbreviation: "MA",
    cities: MA_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912334.665493672!2d-71.38879365!3d42.36457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3652d0d3d311b%3A0x3a2b1c0d9e8abcd!2sMassachusetts%2C%20USA!5e0!3m2!1sen!2s!4v1766842400000!5m2!1sen!2s",
    population: "7.0 million",
    timezone: "America/New_York",
    tagline: "Bay State Local Search Innovation",
    description: "Innovating local search solutions for Massachusetts businesses from Boston to Worcester."
  },
  mn: {
    code: "mn",
    name: "Minnesota",
    fullName: "State of Minnesota",
    abbreviation: "MN",
    cities: MN_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5712334.665493672!2d-94.68879365!3d46.27457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b333909377bbbd%3A0x2a1b0c9d8e7abcd!2sMinnesota%2C%20USA!5e0!3m2!1sen!2s!4v1766842500000!5m2!1sen!2s",
    population: "5.7 million",
    timezone: "America/Chicago",
    tagline: "North Star State Local SEO Guidance",
    description: "Guiding Minnesota businesses to local search success from Minneapolis to Duluth."
  },
  ms: {
    code: "ms",
    name: "Mississippi",
    fullName: "State of Mississippi",
    abbreviation: "MS",
    cities: MS_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6812334.665493672!2d-89.39879365!3d32.74457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x862886c1c5e9f5b9%3A0x1a0b9c8d7e6abcd!2sMississippi%2C%20USA!5e0!3m2!1sen!2s!4v1766842600000!5m2!1sen!2s",
    population: "2.9 million",
    timezone: "America/Chicago",
    tagline: "Magnolia State Local Search Bloom",
    description: "Helping Mississippi businesses bloom in local search from Jackson to Biloxi."
  },
  mo: {
    code: "mo",
    name: "Missouri",
    fullName: "State of Missouri",
    abbreviation: "MO",
    cities: MO_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6312334.665493672!2d-92.60879365!3d38.46457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87df5c4d3e2b1a09%3A0x0a9b8c7d6e5abcd!2sMissouri%2C%20USA!5e0!3m2!1sen!2s!4v1766842700000!5m2!1sen!2s",
    population: "6.2 million",
    timezone: "America/Chicago",
    tagline: "Show-Me State Local SEO Results",
    description: "Showing Missouri businesses real local search results from Kansas City to St. Louis."
  },
  mt: {
    code: "mt",
    name: "Montana",
    fullName: "State of Montana",
    abbreviation: "MT",
    cities: MT_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6112334.665493672!2d-109.64879365!3d46.88457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x536220c9c3a5e1b7%3A0x9a8b7c6d5e4abcd!2sMontana%2C%20USA!5e0!3m2!1sen!2s!4v1766842800000!5m2!1sen!2s",
    population: "1.1 million",
    timezone: "America/Denver",
    tagline: "Treasure State Local Search Discovery",
    description: "Discovering local search treasures for Montana businesses from Billings to Missoula."
  },
  ne: {
    code: "ne",
    name: "Nebraska",
    fullName: "State of Nebraska",
    abbreviation: "NE",
    cities: NE_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5912334.665493672!2d-99.90879365!3d41.50457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x879a53b3d1e0f5c9%3A0x8a7b6c5d4e3abcd!2sNebraska%2C%20USA!5e0!3m2!1sen!2s!4v1766842900000!5m2!1sen!2s",
    population: "2.0 million",
    timezone: "America/Chicago",
    tagline: "Cornhusker State Local SEO Harvest",
    description: "Harvesting local search success for Nebraska businesses from Omaha to Lincoln."
  },
  nv: {
    code: "nv",
    name: "Nevada",
    fullName: "State of Nevada",
    abbreviation: "NV",
    cities: NV_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6512334.665493672!2d-116.92879365!3d38.80457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809940b3e5f1d7ab%3A0x7a6b5c4d3e2abcd!2sNevada%2C%20USA!5e0!3m2!1sen!2s!4v1766843000000!5m2!1sen!2s",
    population: "3.2 million",
    timezone: "America/Los_Angeles",
    tagline: "Silver State Local Search Jackpot",
    description: "Hitting the local search jackpot for Nevada businesses from Las Vegas to Reno."
  },
  nh: {
    code: "nh",
    name: "New Hampshire",
    fullName: "State of New Hampshire",
    abbreviation: "NH",
    cities: NH_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2812334.665493672!2d-71.57879365!3d43.45457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e17b2a6e5d3c1f%3A0x6a5b4c3d2e1abcd!2sNew%20Hampshire%2C%20USA!5e0!3m2!1sen!2s!4v1766843100000!5m2!1sen!2s",
    population: "1.4 million",
    timezone: "America/New_York",
    tagline: "Granite State Local SEO Strength",
    description: "Building rock-solid local search presence for New Hampshire businesses."
  },
  nm: {
    code: "nm",
    name: "New Mexico",
    fullName: "State of New Mexico",
    abbreviation: "NM",
    cities: NM_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6612334.665493672!2d-106.02879365!3d34.52457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0db5c3e1a5f7%3A0x5a4b3c2d1e0abcd!2sNew%20Mexico%2C%20USA!5e0!3m2!1sen!2s!4v1766843200000!5m2!1sen!2s",
    population: "2.1 million",
    timezone: "America/Denver",
    tagline: "Land of Enchantment Local Search Magic",
    description: "Creating enchanting local search results for New Mexico businesses."
  },
  nd: {
    code: "nd",
    name: "North Dakota",
    fullName: "State of North Dakota",
    abbreviation: "ND",
    cities: ND_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5312334.665493672!2d-100.47879365!3d47.53457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52cf27a5d3e1b7c9%3A0x4a3b2c1d0e9abcd!2sNorth%20Dakota%2C%20USA!5e0!3m2!1sen!2s!4v1766843300000!5m2!1sen!2s",
    population: "0.8 million",
    timezone: "America/Chicago",
    tagline: "Peace Garden State Local SEO Growth",
    description: "Cultivating local search growth for North Dakota businesses from Fargo to Bismarck."
  },
  ok: {
    code: "ok",
    name: "Oklahoma",
    fullName: "State of Oklahoma",
    abbreviation: "OK",
    cities: OK_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6412334.665493672!2d-97.52879365!3d35.48457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ab41d5c3e1f7a9%3A0x3a2b1c0d9e8abcd!2sOklahoma%2C%20USA!5e0!3m2!1sen!2s!4v1766843400000!5m2!1sen!2s",
    population: "4.0 million",
    timezone: "America/Chicago",
    tagline: "Sooner State Local Search Success",
    description: "Achieving local search success sooner for Oklahoma businesses from OKC to Tulsa."
  },
  ri: {
    code: "ri",
    name: "Rhode Island",
    fullName: "State of Rhode Island",
    abbreviation: "RI",
    cities: RI_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d612334.665493672!2d-71.48879365!3d41.68457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e444f4a5e1b7c3%3A0x2a1b0c9d8e7abcd!2sRhode%20Island%2C%20USA!5e0!3m2!1sen!2s!4v1766843500000!5m2!1sen!2s",
    population: "1.1 million",
    timezone: "America/New_York",
    tagline: "Ocean State Local SEO Expertise",
    description: "Navigating local search waters for Rhode Island businesses with expert precision."
  },
  sc: {
    code: "sc",
    name: "South Carolina",
    fullName: "State of South Carolina",
    abbreviation: "SC",
    cities: SC_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6712334.665493672!2d-80.94879365!3d33.84457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fe6a5c3e1d7b09%3A0x1a0b9c8d7e6abcd!2sSouth%20Carolina%2C%20USA!5e0!3m2!1sen!2s!4v1766843600000!5m2!1sen!2s",
    population: "5.3 million",
    timezone: "America/New_York",
    tagline: "Palmetto State Local Search Victory",
    description: "Winning local search battles for South Carolina businesses from Charleston to Greenville."
  },
  sd: {
    code: "sd",
    name: "South Dakota",
    fullName: "State of South Dakota",
    abbreviation: "SD",
    cities: SD_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5512334.665493672!2d-100.35879365!3d44.30457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x878eb5a3c1e5f7d9%3A0x0a9b8c7d6e5abcd!2sSouth%20Dakota%2C%20USA!5e0!3m2!1sen!2s!4v1766843700000!5m2!1sen!2s",
    population: "0.9 million",
    timezone: "America/Chicago",
    tagline: "Mount Rushmore State Local SEO Greatness",
    description: "Carving out local search greatness for South Dakota businesses."
  },
  ut: {
    code: "ut",
    name: "Utah",
    fullName: "State of Utah",
    abbreviation: "UT",
    cities: UT_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6212334.665493672!2d-111.68879365!3d39.32457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87520c3d5e1a7b99%3A0x9a8b7c6d5e4abcd!2sUtah%2C%20USA!5e0!3m2!1sen!2s!4v1766843800000!5m2!1sen!2s",
    population: "3.4 million",
    timezone: "America/Denver",
    tagline: "Beehive State Local Search Industry",
    description: "Building industrious local search success for Utah businesses from Salt Lake to St. George."
  },
  vt: {
    code: "vt",
    name: "Vermont",
    fullName: "State of Vermont",
    abbreviation: "VT",
    cities: VT_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2712334.665493672!2d-72.58879365!3d44.00457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb5358c3e1d5a7b%3A0x8a7b6c5d4e3abcd!2sVermont%2C%20USA!5e0!3m2!1sen!2s!4v1766843900000!5m2!1sen!2s",
    population: "0.6 million",
    timezone: "America/New_York",
    tagline: "Green Mountain State Local SEO Heights",
    description: "Reaching new local search heights for Vermont businesses from Burlington to Montpelier."
  },
  wv: {
    code: "wv",
    name: "West Virginia",
    fullName: "State of West Virginia",
    abbreviation: "WV",
    cities: WV_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6112334.665493672!2d-80.46879365!3d38.92457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884a6c3e1d5a7b99%3A0x7a6b5c4d3e2abcd!2sWest%20Virginia%2C%20USA!5e0!3m2!1sen!2s!4v1766844000000!5m2!1sen!2s",
    population: "1.8 million",
    timezone: "America/New_York",
    tagline: "Mountain State Local Search Peaks",
    description: "Scaling local search peaks for West Virginia businesses from Charleston to Morgantown."
  },
  wi: {
    code: "wi",
    name: "Wisconsin",
    fullName: "State of Wisconsin",
    abbreviation: "WI",
    cities: WI_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5712334.665493672!2d-89.78879365!3d44.78457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880259c5e1d7a3b9%3A0x6a5b4c3d2e1abcd!2sWisconsin%2C%20USA!5e0!3m2!1sen!2s!4v1766844100000!5m2!1sen!2s",
    population: "5.9 million",
    timezone: "America/Chicago",
    tagline: "Badger State Local SEO Champions",
    description: "Championing local search success for Wisconsin businesses from Milwaukee to Madison."
  },
  wy: {
    code: "wy",
    name: "Wyoming",
    fullName: "State of Wyoming",
    abbreviation: "WY",
    cities: WY_CITIES,
    activeCities: [],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5812334.665493672!2d-107.55879365!3d43.00457755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875910c1e5d7a3b9%3A0x5a4b3c2d1e0abcd!2sWyoming%2C%20USA!5e0!3m2!1sen!2s!4v1766844200000!5m2!1sen!2s",
    population: "0.6 million",
    timezone: "America/Denver",
    tagline: "Equality State Local Search Freedom",
    description: "Freeing local search potential for Wyoming businesses from Cheyenne to Jackson."
  }
};

// Get all active state codes
export const STATE_CODES = Object.keys(STATES);

// Import country-specific states for combined lookups
import { AU_STATES } from "./au-states-config";
import { UK_STATES } from "./uk-states-config";
import { CA_STATES } from "./ca-states-config";
import { DE_STATES } from "./de-states-config";
import { AE_STATES } from "./ae-states-config";
import { IT_STATES } from "./it-states-config";
import { MX_STATES } from "./mx-states-config";
import { MY_STATES } from "./my-states-config";
import { SG_STATES } from "./sg-states-config";
import { NZ_STATES } from "./nz-states-config";
import { SA_STATES } from "./sa-states-config";
import { QA_STATES } from "./qa-states-config";
import { EG_STATES } from "./eg-states-config";
import { PT_STATES } from "./pt-states-config";
import { OM_STATES } from "./om-states-config";
import { KW_STATES } from "./kw-states-config";
import { LU_STATES } from "./lu-states-config";
import { FR_STATES } from "./fr-states-config";
import { ES_STATES } from "./es-states-config";
import { CH_STATES } from "./ch-states-config";
import { IE_STATES } from "./ie-states-config";
import { BR_STATES } from "./br-states-config";
import { FI_STATES, NL_STATES, SE_STATES, NO_STATES, DK_STATES, BE_STATES, JO_STATES, ZA_STATES } from "./nordic-benelux-config";
import { SH_STATES } from "./sh-states-config";
import { LT_STATES } from "./lt-states-config";

// Get the state registry based on country code
const getStateRegistry = (countryCode: string): Record<string, StateDetailData> => {
  const code = countryCode.toLowerCase();
  if (code === 'au') return AU_STATES;
  if (code === 'uk') return UK_STATES;
  if (code === 'ca') return CA_STATES;
  if (code === 'de') return DE_STATES;
  if (code === 'ae') return AE_STATES;
  if (code === 'it') return IT_STATES;
  if (code === 'mx') return MX_STATES;
  if (code === 'my') return MY_STATES;
  if (code === 'sg') return SG_STATES;
  if (code === 'nz') return NZ_STATES;
  if (code === 'sa') return SA_STATES;
  if (code === 'qa') return QA_STATES;
  if (code === 'eg') return EG_STATES;
  if (code === 'pt') return PT_STATES;
  if (code === 'om') return OM_STATES;
  if (code === 'kw') return KW_STATES;
  if (code === 'lu') return LU_STATES;
  if (code === 'fr') return FR_STATES;
  if (code === 'es') return ES_STATES;
  if (code === 'ch') return CH_STATES;
  if (code === 'ie') return IE_STATES;
  if (code === 'br') return BR_STATES;
  if (code === 'fi') return FI_STATES;
  if (code === 'nl') return NL_STATES;
  if (code === 'se') return SE_STATES;
  if (code === 'no') return NO_STATES;
  if (code === 'dk') return DK_STATES;
  if (code === 'be') return BE_STATES;
  if (code === 'jo') return JO_STATES;
  if (code === 'za') return ZA_STATES;
  if (code === 'sh') return SH_STATES;
  if (code === 'lt') return LT_STATES;
  return STATES;
};

// Check if a state code is valid (for a specific country)
export const isValidState = (code: string, countryCode: string = 'us'): boolean => {
  const stateRegistry = getStateRegistry(countryCode);
  return code.toLowerCase() in stateRegistry;
};

// Get state data by code (for a specific country)
export const getStateData = (code: string, countryCode: string = 'us'): StateDetailData | undefined => {
  const stateRegistry = getStateRegistry(countryCode);
  return stateRegistry[code.toLowerCase()];
};

// Check if a city has an active page
export const isCityActive = (stateCode: string, cityCode: string, countryCode: string = 'us'): boolean => {
  const stateRegistry = getStateRegistry(countryCode);
  const state = stateRegistry[stateCode.toLowerCase()];
  return state?.activeCities.includes(cityCode.toLowerCase()) ?? false;
};

// Check if a city code is valid for a given state
export const isValidCity = (stateCode: string, cityCode: string, countryCode: string = 'us'): boolean => {
  const stateRegistry = getStateRegistry(countryCode);
  const state = stateRegistry[stateCode.toLowerCase()];
  if (!state) return false;
  return state.cities.some(c => c.code === cityCode.toLowerCase());
};