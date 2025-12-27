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
  }
};

// Get all active state codes
export const STATE_CODES = Object.keys(STATES);

// Check if a state code is valid
export const isValidState = (code: string): boolean => {
  return code.toLowerCase() in STATES;
};

// Get state data by code
export const getStateData = (code: string): StateDetailData | undefined => {
  return STATES[code.toLowerCase()];
};

// Check if a city has an active page
export const isCityActive = (stateCode: string, cityCode: string): boolean => {
  const state = STATES[stateCode.toLowerCase()];
  return state?.activeCities.includes(cityCode.toLowerCase()) ?? false;
};