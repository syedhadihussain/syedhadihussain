// Industry Categories and Data Configuration
// Each industry has unique SEO-optimized content with semantic entities

export interface IndustryData {
  slug: string;
  name: string;
  keyword: string;
  category: string;
  categorySlug: string;
  icon: string;
  description: string;
  metaDescription: string;
  heroTagline: string;
  heroDescription: string;
  uniqueFeatures: string[];
  semanticEntities: string[];
  painPoints: string[];
  solutions: string[];
  stats: { label: string; value: string }[];
  faq: { question: string; answer: string }[];
}

export interface IndustryCategory {
  name: string;
  slug: string;
  icon: string;
  industries: string[];
}

// All industry categories with their industries
export const INDUSTRY_CATEGORIES: IndustryCategory[] = [
  {
    name: "Home Maintenance Businesses",
    slug: "home-maintenance",
    icon: "🏠",
    industries: [
      "plumbers", "electricians", "handyman-services", "hvac-services", "ac-repair-services",
      "boiler-repair-services", "gas-engineers", "locksmiths", "painters-decorators",
      "roofing-companies", "garage-door-repair-installation-services", "shutter-installation-services",
      "blinds-installation-services", "curtain-fitting-services", "awning-installation-services",
      "window-cleaning-services", "abseiling-window-cleaners", "facade-cleaning-services",
      "glass-repair-services", "emergency-glass-replacement", "double-glazing-repair",
      "mirror-installation-services", "flat-pack-furniture-assembly", "scaffolding-companies",
      "mold-remediation-professionals", "water-damage-restoration-professionals", "pressure-washing-professionals"
    ]
  },
  {
    name: "Cleaning Companies",
    slug: "cleaning",
    icon: "🧹",
    industries: [
      "home-cleaning-services", "deep-cleaning-services", "end-of-tenancy-cleaning",
      "carpet-cleaning-services", "warehouse-cleaning-services", "factory-cleaning-services",
      "industrial-cleaning-services", "commercial-kitchen-installation", "kitchen-extraction-ventilation-cleaning",
      "grease-trap-cleaning-services", "water-tank-cleaning", "pool-cleaning-services",
      "laundry-services", "dry-cleaning-services", "ironing-services", "holiday-let-cleaning-services",
      "mattress-cleaning-services", "blind-cleaning-services", "cleanroom-cleaning-services",
      "street-cleaning-contractors", "snow-clearance-services", "gritting-services",
      "winter-maintenance-services", "cryogenic-cleaning-services", "dry-ice-blasting-services", "shot-blasting-services"
    ]
  },
  {
    name: "Construction Firms",
    slug: "construction",
    icon: "🏗️",
    industries: [
      "builders", "construction-companies", "home-builders", "surveyors", "quantity-surveyors",
      "land-surveyors", "party-wall-surveyors", "dilapidation-survey-services", "snagging-inspection-services",
      "new-build-snagging-inspectors", "architects", "interior-designers", "structural-crack-monitoring-services",
      "building-control-inspectors", "building-envelope-consultants", "cladding-inspection-services",
      "external-wall-fire-review-ews1-services", "fire-compartmentation-services", "fire-door-inspection-services",
      "formwork-contractors", "steel-fabrication-companies", "aluminium-fabrication-services",
      "welding-services", "powder-coating-services", "concrete-cutting-services", "core-drilling-services",
      "waterproofing-services", "damp-proofing-services", "basement-tanking-services",
      "stone-masonry-restoration", "lime-mortar-repair-services", "dry-stone-walling-services"
    ]
  },
  {
    name: "Inspection Specialists",
    slug: "inspection",
    icon: "🔍",
    industries: [
      "surveying-mapping-services", "arboricultural-consultancy-services", "tree-risk-assessment-services",
      "ecology-consultants", "protected-species-surveys", "bat-surveys", "great-crested-newt-surveys",
      "drone-roof-inspection-services", "drone-survey-services", "thermal-imaging-inspection-services",
      "church-roof-inspection-services", "bell-tower-maintenance-services", "ground-investigation-services",
      "soil-testing-services", "archaeological-survey-services", "watching-brief-services",
      "flood-risk-assessment-consultants", "asbestos-re-inspection-services", "lead-paint-testing-services",
      "radon-testing-services", "air-quality-testing-services", "noise-assessment-consultants",
      "legionella-risk-assessment-services", "explosive-ordnance-disposal-surveys-uxo",
      "ndt-testing-services", "ultrasonic-testing-services", "magnetic-particle-inspection-services", "radiography-testing-services"
    ]
  },
  {
    name: "Pest Control Companies",
    slug: "pest-control",
    icon: "🐜",
    industries: [
      "pest-control-services", "bed-bug-control", "termite-control", "bird-control-services",
      "falconry-pest-control", "pest-proofing-services"
    ]
  },
  {
    name: "Waste & Recycling",
    slug: "waste-recycling",
    icon: "♻️",
    industries: [
      "waste-removal-services", "junk-removal-services", "skip-hire-services", "recycling-companies",
      "industrial-waste-management", "hazardous-waste-disposal", "septic-tank-cleaning",
      "septic-tank-installation", "animal-waste-removal-services", "fuel-tank-cleaning-services",
      "waste-oil-collection-services", "trade-waste-consultants", "fats-oils-grease-fog-management-services",
      "effluent-treatment-services", "sludge-management-services", "anaerobic-digestion-consultants"
    ]
  },
  {
    name: "Landscaping Businesses",
    slug: "landscaping",
    icon: "🌳",
    industries: [
      "gardeners", "landscaping-services", "tree-surgeons", "tree-removal-services",
      "hedgelaying-services", "ditch-clearance-services", "land-drainage-contractors"
    ]
  },
  {
    name: "Energy Consultants",
    slug: "energy",
    icon: "⚡",
    industries: [
      "solar-panel-installers", "ev-charging-installers", "ev-fleet-charging-services",
      "energy-auditors", "commercial-energy-consultants", "breeam-assessment-services",
      "carbon-footprint-assessment-services", "sustainable-building-consultants",
      "lightning-protection-installation", "lightning-protection-testing-services"
    ]
  },
  {
    name: "Security Companies",
    slug: "security",
    icon: "🔒",
    industries: [
      "cctv-installation-services", "security-system-installers", "smart-home-installers",
      "access-control-system-installers", "intercom-system-installers", "alarm-response-services",
      "key-holding-services", "remote-cctv-monitoring", "security-guard-services",
      "dog-security-services", "k9-security-services", "smart-lock-installation"
    ]
  },
  {
    name: "Healthcare Providers",
    slug: "healthcare",
    icon: "🏥",
    industries: [
      "family-doctors", "obstetricians", "gynecologists", "womens-health-doctors",
      "pediatricians", "child-doctors", "kids-health-specialists", "orthopedic-surgeons",
      "bone-specialists", "joint-doctors", "dermatologists", "skin-specialists",
      "dermatology-clinics", "cardiologists", "veterinary-clinics", "animal-hospitals",
      "pet-grooming-services", "pet-boarding-services", "dog-training-services",
      "veterinary-physiotherapy", "doctors-clinics", "private-doctors", "dentists",
      "cosmetic-dentists", "dental-implant-clinics", "orthodontists", "hospitals",
      "physiotherapy-clinics", "sports-physiotherapy-clinics", "chiropractors",
      "foot-clinics", "opticians", "eye-clinics", "endodontists", "skin-clinics",
      "mental-health-clinics", "psychologists", "psychiatrists", "nutritionists",
      "dietitians", "weight-loss-clinics", "fertility-clinics", "alternative-medicine-clinics"
    ]
  },
  {
    name: "Beauty Salons",
    slug: "beauty",
    icon: "💇",
    industries: [
      "hair-salons", "barber-shops", "beauty-salons", "beauty-parlours", "spas",
      "massage-centers", "nail-salons", "makeup-artists", "tattoo-studios",
      "body-piercing-studios", "laser-hair-removal-clinics", "hair-transplant-clinics"
    ]
  },
  {
    name: "Auto Repair Shops",
    slug: "automotive",
    icon: "🚗",
    industries: [
      "car-repair-shops", "auto-mechanics", "mobile-mechanics", "car-denting-painting",
      "auto-electricians", "hybrid-car-repair", "mot-test-centers", "tyre-shops",
      "mobile-tyre-fitting-services", "car-wash-services", "mobile-car-wash",
      "car-detailing-services", "car-towing-services", "breakdown-recovery-services",
      "roadside-assistance-services", "car-lockout-services", "used-car-dealers",
      "car-rental-services", "taxi-firms", "minicab-services", "airport-transfer-services",
      "chauffeur-services", "limousine-hire", "coach-hire-services", "minibus-hire-services"
    ]
  },
  {
    name: "Childcare Centers",
    slug: "childcare",
    icon: "👶",
    industries: [
      "childcare-centers", "daycare-nurseries", "preschools", "montessori-schools",
      "after-school-clubs", "schools", "private-schools", "colleges", "universities",
      "tuition-centers", "coaching-institutes", "language-schools", "music-schools",
      "dance-schools", "dance-studios", "art-classes", "painting-classes",
      "photography-training", "driving-schools", "ielts-training-centers",
      "pte-training-centers", "computer-training-institutes"
    ]
  },
  {
    name: "Elderly Care Providers",
    slug: "elderly-care",
    icon: "👴",
    industries: [
      "elderly-care-services", "home-care-services", "assisted-living-facilities",
      "care-homes", "home-nursing-services", "stairlift-installation",
      "mobility-lift-services", "access-ramp-installation", "disabled-access-services"
    ]
  },
  {
    name: "Funeral Directors",
    slug: "funeral-religious",
    icon: "⛪",
    industries: [
      "funeral-services", "cremation-services", "churches", "mosques", "temples", "religious-centers"
    ]
  },
  {
    name: "Law Firms",
    slug: "legal-financial",
    icon: "⚖️",
    industries: [
      "law-firms", "family-lawyers", "divorce-lawyers", "criminal-lawyers",
      "immigration-lawyers", "personal-injury-lawyers", "accident-claim-lawyers",
      "no-win-no-fee-lawyers", "employment-lawyers", "property-lawyers",
      "business-lawyers", "notary-public-services", "insurance-brokers",
      "mortgage-brokers", "loan-advisors", "financial-planners", "wealth-management-firms"
    ]
  },
  {
    name: "Real Estate Agents",
    slug: "real-estate",
    icon: "🏠",
    industries: [
      "real-estate-agencies", "property-dealers", "estate-agents", "letting-agents",
      "property-management-companies", "airbnb-management-services", "short-term-let-management",
      "serviced-apartment-management", "hmo-licensing-consultants", "selective-licensing-consultants",
      "tenant-reference-checks", "inventory-clerk-services", "check-in-check-out-inspection-services",
      "property-staging-services", "home-staging-consultants", "show-home-dressing-services"
    ]
  },
  {
    name: "Restaurants",
    slug: "food-beverage",
    icon: "🍽️",
    industries: [
      "restaurants", "cafes", "coffee-shops", "bakeries", "pizza-shops",
      "fast-food-restaurants", "takeaway-restaurants", "catering-services",
      "food-trucks", "street-food-vendors", "dark-kitchens", "cloud-kitchens",
      "butchers", "fishmongers", "greengrocers", "halal-meat-shops",
      "asian-grocery-stores", "organic-food-stores", "farm-shops", "cash-carry-wholesalers"
    ]
  },
  {
    name: "Hotels and Events",
    slug: "hospitality-events",
    icon: "🏨",
    industries: [
      "hotels", "motels", "guest-houses", "bed-and-breakfast", "caravan-parks",
      "holiday-parks", "wedding-planners", "event-management-companies",
      "photographers", "wedding-photographers", "videographers", "dj-services",
      "marquee-hire-services", "party-equipment-rental", "exhibition-stand-builders",
      "trade-show-stand-contractors"
    ]
  },
  {
    name: "IT Companies",
    slug: "technology",
    icon: "💻",
    industries: [
      "it-support-companies", "managed-it-services", "data-cabling-services",
      "structured-cabling-services", "server-installation-services", "pos-system-providers",
      "cybersecurity-services", "internet-service-providers", "telecom-service-providers"
    ]
  },
  {
    name: "Accounting Firms",
    slug: "professional-services",
    icon: "📊",
    industries: [
      "accountants", "bookkeepers", "tax-consultants", "business-consultants",
      "translation-services", "interpretation-services"
    ]
  },
  {
    name: "Manufacturing Businesses",
    slug: "manufacturing",
    icon: "🏭",
    industries: [
      "commercial-printing-services", "packaging-companies", "label-printing-services",
      "embroidery-services", "signage-companies", "sign-board-installation-services",
      "neon-sign-repair-services", "digital-display-installation", "billboard-advertising-companies"
    ]
  },
  {
    name: "Storage Facilities",
    slug: "storage-logistics",
    icon: "📦",
    industries: [
      "storage-facilities", "self-storage-units", "document-storage-services",
      "archive-management-services", "courier-services", "same-day-delivery-services",
      "logistics-companies", "freight-forwarders", "air-freight-services", "sea-freight-services"
    ]
  },
  {
    name: "Gyms and Fitness Centers",
    slug: "fitness",
    icon: "🏋️",
    industries: [
      "gyms", "fitness-centers", "yoga-studios", "pilates-studios", "personal-trainers",
      "martial-arts-schools", "karate-classes", "taekwondo-schools", "boxing-gyms", "shooting-ranges"
    ]
  },
  {
    name: "Specialized Trade Businesses",
    slug: "specialized-trades",
    icon: "🔧",
    industries: [
      "antique-restoration-services", "furniture-restoration-services", "upholstery-services",
      "clock-repair-services", "watch-repair-services", "shoe-repair-services",
      "key-cutting-services", "vending-machine-services", "atm-installation-services",
      "portable-toilet-hire", "luxury-toilet-trailer-hire", "film-tv-location-services",
      "3d-scanning-services", "3d-printing-services", "cnc-machining-services", "laser-cutting-services"
    ]
  }
];

// Generate SEO content for each industry
function generateIndustryContent(slug: string, name: string, category: string): Omit<IndustryData, 'slug' | 'name' | 'keyword' | 'category' | 'categorySlug' | 'icon'> {
  const industrySpecificContent: Record<string, Partial<IndustryData>> = {
    // Plumbers
    "plumbers": {
      metaDescription: `Professional Local SEO services for plumbers. Rank #1 on Google Maps, get more emergency calls, and dominate your local plumbing market with proven SEO strategies.`,
      heroTagline: "Dominate Local Search for Plumbing Services",
      heroDescription: "Get more emergency plumbing calls and scheduled appointments with our specialized Local SEO strategies for plumbers. We help plumbing businesses rank #1 in Google Maps and local search results.",
      uniqueFeatures: [
        "24/7 Emergency Service Optimization",
        "Google Business Profile Management for Plumbers",
        "Review Generation & Management",
        "Local Citation Building in Plumbing Directories",
        "Service Area Page Creation",
        "Mobile-First Website Optimization"
      ],
      semanticEntities: [
        "Emergency Plumber", "Drain Cleaning", "Pipe Repair", "Water Heater Installation",
        "Leak Detection", "Sewer Line Repair", "Bathroom Plumbing", "Kitchen Plumbing",
        "Commercial Plumbing", "Residential Plumbing", "Licensed Plumber", "24 Hour Plumber"
      ],
      painPoints: [
        "Not appearing in Google Maps 3-pack",
        "Losing emergency calls to competitors",
        "Low visibility in 'near me' searches",
        "Few online reviews compared to competitors"
      ],
      solutions: [
        "Optimize for 24/7 emergency plumbing searches",
        "Build strong review profile on Google",
        "Create hyper-local service area pages",
        "Implement schema markup for plumbing services"
      ],
      stats: [
        { label: "Average Traffic Increase", value: "312%" },
        { label: "More Phone Calls", value: "185%" },
        { label: "Map Pack Rankings", value: "Top 3" }
      ],
      faq: [
        {
          question: "How long does it take for plumbers to see SEO results?",
          answer: "Most plumbing businesses see significant improvements in 3-6 months, with emergency service keywords often ranking faster due to high search intent."
        },
        {
          question: "What makes SEO different for plumbers?",
          answer: "Plumbing SEO focuses heavily on emergency keywords, service area optimization, and review management since most customers need immediate service."
        },
        {
          question: "Do you help with Google Business Profile for plumbers?",
          answer: "Yes, we fully optimize and manage your Google Business Profile, including posts, services, Q&A, and review response strategies."
        }
      ]
    },
    // Electricians
    "electricians": {
      metaDescription: `Expert Local SEO for electricians. Increase service calls, rank higher on Google Maps, and grow your electrical business with targeted local search optimization.`,
      heroTagline: "Power Up Your Electrical Business Online",
      heroDescription: "Attract more residential and commercial electrical jobs with specialized Local SEO for electricians. We help electrical contractors dominate local search and generate consistent leads.",
      uniqueFeatures: [
        "Emergency Electrician Keyword Optimization",
        "Commercial & Residential Service Pages",
        "Electrical Contractor Directory Listings",
        "License & Certification Schema Markup",
        "Google Guaranteed Ads Integration",
        "Review Acquisition Campaigns"
      ],
      semanticEntities: [
        "Licensed Electrician", "Electrical Repair", "Panel Upgrade", "Wiring Installation",
        "EV Charger Installation", "Lighting Installation", "Emergency Electrician",
        "Commercial Electrician", "Residential Electrician", "Electrical Safety Inspection"
      ],
      painPoints: [
        "Competitors ranking above you in local search",
        "Missing out on commercial contract opportunities",
        "Low online visibility for specialty services",
        "Inconsistent lead flow"
      ],
      solutions: [
        "Target high-value commercial electrical keywords",
        "Optimize for emerging services like EV charger installation",
        "Build authority through industry-specific citations",
        "Create comprehensive service pages for all electrical work"
      ],
      stats: [
        { label: "Lead Increase", value: "267%" },
        { label: "Local Visibility", value: "+89%" },
        { label: "Revenue Growth", value: "156%" }
      ],
      faq: [
        {
          question: "How do you help electricians get more commercial clients?",
          answer: "We create targeted content for commercial electrical services, optimize for B2B keywords, and build citations in commercial contractor directories."
        },
        {
          question: "Can you help with Google Local Service Ads for electricians?",
          answer: "Yes, we integrate Local Service Ads with your SEO strategy to maximize visibility and lead generation for electrical services."
        },
        {
          question: "What areas do you cover for electrician SEO?",
          answer: "We serve electricians worldwide, creating localized strategies for your specific service areas and markets."
        }
      ]
    },
    // Dentists
    "dentists": {
      metaDescription: `Specialized Local SEO for dentists and dental practices. Attract new patients, rank #1 for dental services, and grow your practice with proven dental marketing strategies.`,
      heroTagline: "Grow Your Dental Practice with Local SEO",
      heroDescription: "Attract more new patients and fill your appointment book with specialized Local SEO for dental practices. We help dentists dominate local search and build a strong online reputation.",
      uniqueFeatures: [
        "New Patient Acquisition Optimization",
        "Dental Procedure Service Pages",
        "Patient Review Management",
        "HIPAA-Compliant SEO Strategies",
        "Dental Insurance Keyword Targeting",
        "Before/After Gallery Optimization"
      ],
      semanticEntities: [
        "General Dentist", "Cosmetic Dentistry", "Teeth Whitening", "Dental Implants",
        "Root Canal", "Dental Crowns", "Emergency Dentist", "Family Dentist",
        "Pediatric Dentist", "Invisalign Provider", "Dental Cleaning", "Tooth Extraction"
      ],
      painPoints: [
        "New patient acquisition costs too high",
        "Competitors dominating local search",
        "Negative reviews affecting reputation",
        "Low visibility for specialty services"
      ],
      solutions: [
        "Optimize for high-value cosmetic procedures",
        "Build 5-star review reputation on Google",
        "Create service pages for each dental procedure",
        "Implement dental practice schema markup"
      ],
      stats: [
        { label: "New Patient Increase", value: "245%" },
        { label: "Google Rankings", value: "Top 3" },
        { label: "ROI on SEO Investment", value: "8.5x" }
      ],
      faq: [
        {
          question: "How do you help dental practices get more patients?",
          answer: "We optimize your online presence to appear when potential patients search for dental services, manage your reputation, and create compelling content that converts visitors into appointments."
        },
        {
          question: "Is dental SEO different from regular SEO?",
          answer: "Yes, dental SEO requires understanding of healthcare marketing regulations, patient privacy concerns, and the specific search behaviors of dental patients."
        },
        {
          question: "How long until my dental practice sees SEO results?",
          answer: "Most dental practices see increased visibility within 3-4 months, with significant new patient growth by 6 months of consistent optimization."
        }
      ]
    },
    // Restaurants
    "restaurants": {
      metaDescription: `Local SEO services for restaurants. Get more diners, rank higher on Google Maps, and increase reservations with restaurant-focused SEO strategies.`,
      heroTagline: "Fill Every Table with Local SEO",
      heroDescription: "Attract more hungry customers and increase reservations with specialized Local SEO for restaurants. We help restaurants rank #1 in local search and food discovery platforms.",
      uniqueFeatures: [
        "Google Business Profile Optimization for Restaurants",
        "Menu Schema Markup Implementation",
        "Food Photography SEO",
        "Review Management & Response",
        "Local Food Blogger Outreach",
        "Delivery Platform Integration"
      ],
      semanticEntities: [
        "Restaurant Near Me", "Best Restaurant", "Fine Dining", "Casual Dining",
        "Family Restaurant", "Romantic Dinner", "Business Lunch", "Happy Hour",
        "Outdoor Dining", "Private Dining", "Takeout", "Food Delivery"
      ],
      painPoints: [
        "Empty tables during slow periods",
        "Low visibility on Google Maps",
        "Competitors ranking above you",
        "Few online reviews"
      ],
      solutions: [
        "Optimize for cuisine and location keywords",
        "Build review momentum on Google and Yelp",
        "Create optimized menu pages",
        "Implement restaurant schema for rich results"
      ],
      stats: [
        { label: "Reservation Increase", value: "189%" },
        { label: "Google Visibility", value: "+156%" },
        { label: "Revenue Growth", value: "134%" }
      ],
      faq: [
        {
          question: "How can SEO help my restaurant get more customers?",
          answer: "Local SEO helps your restaurant appear when hungry customers search for places to eat nearby, increasing visibility, foot traffic, and online orders."
        },
        {
          question: "Do you help with food delivery platform optimization?",
          answer: "Yes, we optimize your presence on delivery platforms while ensuring your direct website and Google Business Profile remain the primary traffic sources."
        },
        {
          question: "How important are reviews for restaurant SEO?",
          answer: "Reviews are critical for restaurant SEO. They influence rankings and customer decisions. We implement strategies to consistently generate positive reviews."
        }
      ]
    },
    // Law Firms
    "law-firms": {
      metaDescription: `Legal SEO services for law firms. Attract more clients, rank #1 for legal services, and grow your practice with attorney-focused Local SEO strategies.`,
      heroTagline: "Dominate Legal Search in Your Market",
      heroDescription: "Attract more clients and grow your law firm with specialized Legal SEO strategies. We help attorneys and law firms rank #1 in local search and generate high-quality leads.",
      uniqueFeatures: [
        "Practice Area Page Optimization",
        "Attorney Bio Schema Markup",
        "Legal Directory Citations",
        "Case Result Testimonials",
        "Bar Association Link Building",
        "Ethical SEO Compliance"
      ],
      semanticEntities: [
        "Law Firm", "Attorney", "Lawyer Near Me", "Legal Consultation",
        "Free Case Review", "Legal Services", "Law Office", "Legal Representation",
        "Court Representation", "Legal Advice", "Case Evaluation"
      ],
      painPoints: [
        "High cost per lead from paid ads",
        "Competitors dominating organic search",
        "Low visibility for practice areas",
        "Difficulty attracting quality clients"
      ],
      solutions: [
        "Target high-intent legal keywords",
        "Build authority with legal content marketing",
        "Optimize for practice-specific searches",
        "Generate and showcase client testimonials"
      ],
      stats: [
        { label: "Lead Quality Improvement", value: "178%" },
        { label: "Cost Per Lead Reduction", value: "-65%" },
        { label: "Organic Traffic Growth", value: "234%" }
      ],
      faq: [
        {
          question: "How is law firm SEO different from other industries?",
          answer: "Legal SEO requires understanding of bar association advertising rules, high-competition keywords, and the specific client journey for legal services."
        },
        {
          question: "Which practice areas benefit most from SEO?",
          answer: "Personal injury, family law, criminal defense, and immigration law see excellent ROI from SEO due to high search volume and client lifetime value."
        },
        {
          question: "How long until my law firm ranks on Google?",
          answer: "Legal SEO is competitive. Most firms see improvements in 4-6 months, with significant ranking gains by 9-12 months of consistent optimization."
        }
      ]
    },
    // Real Estate Agencies
    "real-estate-agencies": {
      metaDescription: `Local SEO for real estate agents and agencies. Get more listings, attract buyers, and dominate your local property market with real estate SEO strategies.`,
      heroTagline: "Close More Deals with Local SEO",
      heroDescription: "Attract more buyers and sellers with specialized Local SEO for real estate. We help agents and agencies rank #1 in local property searches and generate consistent leads.",
      uniqueFeatures: [
        "Neighborhood Page Optimization",
        "Property Listing Schema Markup",
        "IDX Website SEO Integration",
        "Real Estate Portal Link Building",
        "Agent Bio Optimization",
        "Market Report Content Strategy"
      ],
      semanticEntities: [
        "Real Estate Agent", "Homes for Sale", "Property Listings", "Buy a Home",
        "Sell My House", "Real Estate Market", "Property Value", "Home Appraisal",
        "First Time Home Buyer", "Investment Property", "Luxury Real Estate"
      ],
      painPoints: [
        "Zillow and Realtor.com dominating search",
        "Low visibility for neighborhood searches",
        "Difficulty generating seller leads",
        "Competing with large brokerages"
      ],
      solutions: [
        "Create hyper-local neighborhood content",
        "Optimize for buyer and seller intent keywords",
        "Build local authority through community involvement",
        "Implement property listing schema markup"
      ],
      stats: [
        { label: "Lead Generation Increase", value: "289%" },
        { label: "Listing Appointments", value: "+167%" },
        { label: "Website Traffic Growth", value: "312%" }
      ],
      faq: [
        {
          question: "How can real estate agents compete with large portals?",
          answer: "By focusing on hyper-local content, neighborhood expertise, and personal branding that large portals can't replicate."
        },
        {
          question: "Do you help with real estate website SEO?",
          answer: "Yes, we optimize IDX websites, property pages, and agent profiles to rank for local real estate searches."
        },
        {
          question: "How do you generate seller leads through SEO?",
          answer: "We target seller-intent keywords like 'sell my house fast' and create content that positions you as the local market expert."
        }
      ]
    },
    // Gyms
    "gyms": {
      metaDescription: `Local SEO for gyms and fitness centers. Attract more members, rank #1 for fitness searches, and grow your gym with specialized fitness industry SEO.`,
      heroTagline: "Pump Up Your Gym Membership with SEO",
      heroDescription: "Attract more members and fill your classes with specialized Local SEO for gyms and fitness centers. We help fitness businesses rank #1 in local search and drive consistent membership growth.",
      uniqueFeatures: [
        "Class Schedule Optimization",
        "Gym Amenities Page Creation",
        "Fitness Review Management",
        "Personal Trainer Profile Optimization",
        "Before/After Success Stories",
        "Local Fitness Event Marketing"
      ],
      semanticEntities: [
        "Gym Near Me", "Fitness Center", "Personal Training", "Group Fitness Classes",
        "Weight Training", "Cardio Equipment", "24 Hour Gym", "Women's Gym",
        "CrossFit Box", "Gym Membership", "Free Trial", "Fitness Goals"
      ],
      painPoints: [
        "Seasonal membership fluctuations",
        "Competition from big box gyms",
        "Low visibility for specialty programs",
        "High member churn rate"
      ],
      solutions: [
        "Target fitness goal keywords year-round",
        "Highlight unique offerings and atmosphere",
        "Showcase member success stories",
        "Optimize for class and program searches"
      ],
      stats: [
        { label: "Membership Inquiries", value: "+234%" },
        { label: "Free Trial Sign-ups", value: "178%" },
        { label: "Member Retention", value: "+45%" }
      ],
      faq: [
        {
          question: "How can SEO help my gym get more members?",
          answer: "Local SEO ensures your gym appears when people search for fitness options nearby, driving free trials and membership sign-ups."
        },
        {
          question: "Do you help with gym review management?",
          answer: "Yes, we implement review generation strategies and help you respond to reviews to build a positive reputation."
        },
        {
          question: "Can you optimize for specific fitness programs?",
          answer: "Absolutely. We create targeted pages for personal training, group classes, and specialty programs to attract specific member segments."
        }
      ]
    }
  };

  // Default content for industries without specific content
  const defaultContent: Omit<IndustryData, 'slug' | 'name' | 'keyword' | 'category' | 'categorySlug' | 'icon'> = {
    description: `Professional Local SEO services for ${name}. Rank higher on Google, get more customers, and grow your ${category.toLowerCase()} business with proven SEO strategies.`,
    metaDescription: `Professional Local SEO services for ${name}. Rank higher on Google, get more customers, and grow your ${category.toLowerCase()} business with proven SEO strategies.`,
    heroTagline: `Dominate Local Search for ${name}`,
    heroDescription: `Attract more customers and grow your business with specialized Local SEO for ${name}. We help ${category.toLowerCase()} businesses rank #1 in Google Maps and local search results.`,
    uniqueFeatures: [
      "Google Business Profile Optimization",
      "Local Citation Building",
      "Review Generation & Management",
      "Service Area Page Creation",
      "Mobile-First Website Optimization",
      "Local Link Building Strategies"
    ],
    semanticEntities: [
      `${name} Near Me`, `Best ${name}`, `Local ${name}`,
      `${name} Services`, `Professional ${name}`, `Affordable ${name}`,
      `Top Rated ${name}`, `${name} in My Area`
    ],
    painPoints: [
      "Not appearing in Google Maps 3-pack",
      "Losing customers to competitors",
      "Low visibility in 'near me' searches",
      "Few online reviews compared to competitors"
    ],
    solutions: [
      "Optimize Google Business Profile for maximum visibility",
      "Build strong review profile on Google",
      "Create hyper-local service area pages",
      "Implement industry-specific schema markup"
    ],
    stats: [
      { label: "Average Traffic Increase", value: "250%" },
      { label: "More Leads Generated", value: "180%" },
      { label: "Google Rankings", value: "Top 3" }
    ],
    faq: [
      {
        question: `How long does it take for ${name} to see SEO results?`,
        answer: `Most ${name.toLowerCase()} businesses see significant improvements in 3-6 months, with some keywords ranking faster depending on competition level.`
      },
      {
        question: `What makes SEO different for ${name}?`,
        answer: `${name} SEO focuses on local visibility, service area optimization, and industry-specific keywords that your potential customers are searching for.`
      },
      {
        question: `Do you help with Google Business Profile for ${name}?`,
        answer: `Yes, we fully optimize and manage your Google Business Profile, including posts, services, Q&A, and review response strategies.`
      }
    ]
  };

  const specificContent = industrySpecificContent[slug];
  if (specificContent) {
    return {
      ...defaultContent,
      ...specificContent,
      description: specificContent.metaDescription || defaultContent.description
    };
  }
  return defaultContent;
}

// Format industry slug to readable name
function formatIndustryName(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Generate full industry data
export function getIndustryData(slug: string): IndustryData | undefined {
  for (const category of INDUSTRY_CATEGORIES) {
    if (category.industries.includes(slug)) {
      const name = formatIndustryName(slug);
      const content = generateIndustryContent(slug, name, category.name);
      
      return {
        slug,
        name,
        keyword: `Local SEO services for ${name.toLowerCase()}`,
        category: category.name,
        categorySlug: category.slug,
        icon: category.icon,
        description: content.metaDescription,
        ...content
      };
    }
  }
  return undefined;
}

// Get all industry slugs
export function getAllIndustrySlugs(): string[] {
  return INDUSTRY_CATEGORIES.flatMap(category => category.industries);
}

// Get industries by category
export function getIndustriesByCategory(categorySlug: string): IndustryData[] {
  const category = INDUSTRY_CATEGORIES.find(c => c.slug === categorySlug);
  if (!category) return [];
  
  return category.industries.map(slug => getIndustryData(slug)!).filter(Boolean);
}

// Get related industries (same category, excluding current)
export function getRelatedIndustries(currentSlug: string, limit: number = 6): IndustryData[] {
  const currentIndustry = getIndustryData(currentSlug);
  if (!currentIndustry) return [];
  
  const category = INDUSTRY_CATEGORIES.find(c => c.slug === currentIndustry.categorySlug);
  if (!category) return [];
  
  return category.industries
    .filter(slug => slug !== currentSlug)
    .slice(0, limit)
    .map(slug => getIndustryData(slug)!)
    .filter(Boolean);
}

// Check if slug is valid industry
export function isValidIndustrySlug(slug: string): boolean {
  return getAllIndustrySlugs().includes(slug);
}

// Get all categories with their industries
export function getAllCategories(): IndustryCategory[] {
  return INDUSTRY_CATEGORIES;
}
