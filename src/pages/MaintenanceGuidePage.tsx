import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FolderTree, 
  FileCode, 
  Globe, 
  Shield, 
  Settings, 
  AlertTriangle,
  CheckCircle,
  Link2,
  Search,
  Database,
  Users,
  Layout,
  ArrowRight
} from "lucide-react";

const MaintenanceGuidePage = () => {
  const { language } = useLanguage();

  return (
    <>
      <Helmet>
        <title>Website Maintenance Guide | Internal Documentation | Syed Hadi Hussain</title>
        <meta name="description" content="Comprehensive internal guide for maintaining the Local SEO portfolio website. Covers architecture, content management, SEO safety rules, and long-term maintenance." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Navigation />

      <main className="min-h-screen pt-24 pb-16">
        <div className="container-narrow max-w-4xl mx-auto">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Internal Documentation</Badge>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Website Maintenance &amp; Management Guide
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                This guide explains how the website is structured, where files are located, 
                and how to safely make changes without breaking SEO or functionality.
              </p>
            </div>
          </ScrollReveal>

          {/* Table of Contents */}
          <ScrollReveal delay={0.1}>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileCode className="w-5 h-5 text-primary" />
                  Table of Contents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <nav className="grid sm:grid-cols-2 gap-2">
                  {[
                    { href: "#architecture", label: "Website Architecture" },
                    { href: "#folder-structure", label: "Folder Structure" },
                    { href: "#content-editing", label: "Content Editing Guide" },
                    { href: "#seo-system", label: "SEO System (Metadata)" },
                    { href: "#internal-linking", label: "Internal Linking Structure" },
                    { href: "#never-change", label: "What Must NEVER Change" },
                    { href: "#adding-content", label: "Adding New Content Safely" },
                    { href: "#seo-safety-rules", label: "SEO Safety Rules" },
                  ].map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors text-foreground hover:text-primary"
                    >
                      <ArrowRight className="w-4 h-4" />
                      {item.label}
                    </a>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Section 1: Website Architecture */}
          <ScrollReveal delay={0.2}>
            <section id="architecture" className="mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Layout className="w-5 h-5 text-primary" />
                    Website Architecture Overview
                  </CardTitle>
                  <CardDescription>
                    Understanding how the site is built and structured
                  </CardDescription>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                  <p>
                    This website is built using <strong>React + Vite</strong> with <strong>TypeScript</strong>. 
                    It uses a Single Page Application (SPA) architecture with client-side routing.
                  </p>
                  
                  <h4>Technology Stack:</h4>
                  <ul>
                    <li><strong>Frontend:</strong> React 18, TypeScript, Vite</li>
                    <li><strong>Styling:</strong> Tailwind CSS with custom design tokens</li>
                    <li><strong>UI Components:</strong> shadcn/ui (Radix primitives)</li>
                    <li><strong>Backend:</strong> Supabase (Lovable Cloud)</li>
                    <li><strong>SEO:</strong> react-helmet-async for meta tags</li>
                    <li><strong>Routing:</strong> react-router-dom v6</li>
                  </ul>

                  <h4>Silo Structure:</h4>
                  <p>The site follows a strict SEO silo structure:</p>
                  <ul>
                    <li><strong>Global Hub:</strong> Areas We Serve page</li>
                    <li><strong>Country Pages:</strong> /en/us, /en/uk, /en/ca, etc.</li>
                    <li><strong>State Pages:</strong> /en/us/fl, /en/us/tx, etc.</li>
                    <li><strong>City Pages:</strong> /en/us/fl/local-seo-miami, etc.</li>
                    <li><strong>Industry Pages:</strong> /en/local-seo-services-for-plumbers</li>
                    <li><strong>Industry Categories:</strong> /en/local-seo-for-home-maintenance</li>
                  </ul>

                  <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-4 mt-4">
                    <p className="flex items-center gap-2 text-green-700 dark:text-green-300 font-medium mb-2">
                      <CheckCircle className="w-4 h-4" />
                      Key Architecture Benefits
                    </p>
                    <ul className="text-green-700 dark:text-green-300 text-sm">
                      <li>Clean URL hierarchy matching physical locations</li>
                      <li>Clear parent-child relationships for internal linking</li>
                      <li>No duplicate content across locations</li>
                      <li>Scalable to 100k+ pages without redesign</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>
          </ScrollReveal>

          {/* Section 2: Folder Structure */}
          <ScrollReveal delay={0.3}>
            <section id="folder-structure" className="mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FolderTree className="w-5 h-5 text-primary" />
                    Folder Structure Explanation
                  </CardTitle>
                  <CardDescription>
                    Where files live and what they do
                  </CardDescription>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                  <div className="bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <pre>{`src/
├── pages/              # All page components
│   ├── Index.tsx       # Homepage
│   ├── CountryPage.tsx # Country landing pages
│   ├── StatePage.tsx   # State landing pages
│   ├── CityPage.tsx    # City landing pages
│   ├── IndustryPage.tsx # Industry service pages
│   └── portal/         # Client portal pages
│
├── components/         # Reusable components
│   ├── portfolio/      # Main site components
│   ├── country/        # Country page components
│   ├── state/          # State page components
│   ├── city/           # City page components
│   ├── industry/       # Industry page components
│   ├── geo/            # Geo-specific components
│   ├── portal/         # Portal components
│   └── ui/             # shadcn/ui components
│
├── lib/                # Configuration & utilities
│   ├── countries-config.ts   # Country data
│   ├── states-config.ts      # State/city data
│   ├── industries-config.ts  # Industry data
│   └── i18n-config.ts        # Language settings
│
├── hooks/              # Custom React hooks
├── contexts/           # React contexts
└── assets/             # Images and static files

public/
├── robots.txt          # Search engine directives
├── sitemap.xml         # Sitemap for crawlers
└── favicon.ico         # Site favicon

supabase/
└── functions/          # Edge functions (backend)
`}</pre>
                  </div>

                  <h4 className="mt-6">Key File Purposes:</h4>
                  <ul>
                    <li><strong>src/lib/countries-config.ts:</strong> All country data including states, map coordinates, SEO keywords</li>
                    <li><strong>src/lib/states-config.ts:</strong> State details with cities, active cities, descriptions</li>
                    <li><strong>src/lib/industries-config.ts:</strong> Industry categories and individual industry content</li>
                    <li><strong>src/App.tsx:</strong> Main routing configuration (DO NOT modify routes)</li>
                    <li><strong>src/contexts/LanguageContext.tsx:</strong> All translations</li>
                  </ul>
                </CardContent>
              </Card>
            </section>
          </ScrollReveal>

          {/* Section 3: Content Editing */}
          <ScrollReveal delay={0.4}>
            <section id="content-editing" className="mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileCode className="w-5 h-5 text-primary" />
                    Content Editing Guide
                  </CardTitle>
                  <CardDescription>
                    How to safely edit content on different page types
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Country Pages */}
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Globe className="w-4 h-4 text-primary" />
                      Editing Country Pages
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Country data is stored in <code className="bg-muted px-1 rounded">src/lib/countries-config.ts</code>
                    </p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Edit country names, codes, flags, and SEO keywords here</li>
                      <li>• States array controls which states appear on country page</li>
                      <li>• Map embed URLs can be updated for each country</li>
                      <li>• Country-specific copy is in <code className="bg-muted px-1 rounded">src/lib/country-page-copy.ts</code></li>
                    </ul>
                  </div>

                  {/* State/City Pages */}
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Globe className="w-4 h-4 text-primary" />
                      Editing State &amp; City Pages
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      State data is in <code className="bg-muted px-1 rounded">src/lib/states-config.ts</code> 
                      and country-specific configs like <code className="bg-muted px-1 rounded">src/lib/uk-states-config.ts</code>
                    </p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Each state has: code, name, cities array, tagline, description</li>
                      <li>• <code>activeCities</code> array controls which cities have pages</li>
                      <li>• City page copy is in <code className="bg-muted px-1 rounded">src/lib/city-page-copy.ts</code></li>
                      <li>• State page copy is in <code className="bg-muted px-1 rounded">src/lib/state-page-copy.ts</code></li>
                    </ul>
                  </div>

                  {/* Industry Pages */}
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Search className="w-4 h-4 text-primary" />
                      Editing Industry Pages
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Industry data is in <code className="bg-muted px-1 rounded">src/lib/industries-config.ts</code>
                    </p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Categories are defined in <code>INDUSTRY_CATEGORIES</code> array</li>
                      <li>• Each industry has: slug, name, metaDescription, FAQ, stats</li>
                      <li>• Semantic entities help with AI search visibility</li>
                      <li>• Industry page copy in <code className="bg-muted px-1 rounded">src/lib/industry-page-copy.ts</code></li>
                    </ul>
                  </div>

                  {/* Blog Posts */}
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <FileCode className="w-4 h-4 text-primary" />
                      Editing Blog Posts
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Blog configuration in <code className="bg-muted px-1 rounded">src/lib/blog-posts-config.ts</code>
                    </p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Each post has: slug, title, excerpt, content, author, date</li>
                      <li>• Blog content in <code className="bg-muted px-1 rounded">src/lib/blog-content-config.ts</code></li>
                      <li>• Images should go in <code className="bg-muted px-1 rounded">src/assets/</code></li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>
          </ScrollReveal>

          {/* Section 4: SEO System */}
          <ScrollReveal delay={0.5}>
            <section id="seo-system" className="mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="w-5 h-5 text-primary" />
                    SEO System (Metadata)
                  </CardTitle>
                  <CardDescription>
                    How meta titles, descriptions, and structured data work
                  </CardDescription>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                  <p>
                    Each page type has a dedicated SEO head component that generates unique metadata:
                  </p>
                  <ul>
                    <li><strong>CountrySEOHead:</strong> For country pages</li>
                    <li><strong>StateSEOHead:</strong> For state pages</li>
                    <li><strong>CitySEOHead:</strong> For city pages</li>
                    <li><strong>IndustrySEOHead:</strong> For industry pages</li>
                  </ul>

                  <h4>Metadata Generation:</h4>
                  <p>
                    Meta titles and descriptions are generated dynamically using functions in 
                    <code className="bg-muted px-1 rounded">src/lib/seo-metadata-generator.ts</code>:
                  </p>
                  <ul>
                    <li><code>generateCityMetaTitle()</code> - Unique titles per city</li>
                    <li><code>generateCityMetaDescription()</code> - Unique descriptions</li>
                    <li><code>generateStateMetaTitle()</code> - State-level titles</li>
                    <li><code>generateIndustryMetaTitle()</code> - Industry titles</li>
                  </ul>

                  <h4>Structured Data (JSON-LD):</h4>
                  <p>Each page includes schema.org structured data for:</p>
                  <ul>
                    <li>LocalBusiness schema</li>
                    <li>Service schema</li>
                    <li>BreadcrumbList schema</li>
                    <li>FAQPage schema (where applicable)</li>
                  </ul>

                  <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mt-4">
                    <p className="flex items-center gap-2 text-blue-700 dark:text-blue-300 font-medium mb-2">
                      <CheckCircle className="w-4 h-4" />
                      SEO Best Practice
                    </p>
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
                      Always ensure metadata is unique per page. Use the generator functions 
                      rather than hardcoding to avoid duplicates across locations.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>
          </ScrollReveal>

          {/* Section 5: Internal Linking */}
          <ScrollReveal delay={0.6}>
            <section id="internal-linking" className="mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Link2 className="w-5 h-5 text-primary" />
                    Internal Linking Structure
                  </CardTitle>
                  <CardDescription>
                    How pages link to each other following SEO silo rules
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="prose prose-sm max-w-none dark:prose-invert">
                    <h4>Location Silo Linking Rules:</h4>
                  </div>
                  
                  <div className="grid gap-3">
                    <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">City → State (Parent)</p>
                        <p className="text-sm text-muted-foreground">
                          Every city page links to its parent state via <code>ParentStateLink</code> component
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">State → Country (Parent)</p>
                        <p className="text-sm text-muted-foreground">
                          Every state page links to its parent country via <code>ParentCountryLink</code> component
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Country → Areas Hub</p>
                        <p className="text-sm text-muted-foreground">
                          All countries are linked from the global Areas We Serve hub page
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">City → Related Cities</p>
                        <p className="text-sm text-muted-foreground">
                          Cities link to other cities in the same state via <code>RelatedCities</code> component
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">All Location Pages → Industries</p>
                        <p className="text-sm text-muted-foreground">
                          The <code>IndustriesWeServe</code> component appears on all location pages linking to industry pages
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="prose prose-sm max-w-none dark:prose-invert mt-6">
                    <h4>Industry Linking Rules:</h4>
                    <p>
                      Industry pages are <strong>global</strong> (not location-specific). They are linked 
                      from all location pages through the <code>IndustriesWeServe</code> component which shows:
                    </p>
                    <ul>
                      <li>Category links to category pages (e.g., /local-seo-for-home-maintenance)</li>
                      <li>Direct industry links (e.g., /local-seo-services-for-plumbers)</li>
                      <li>Featured industries quick links</li>
                    </ul>
                  </div>

                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Breadcrumb Structure:</h4>
                    <p className="text-sm text-muted-foreground">
                      Breadcrumbs match URL hierarchy exactly:
                    </p>
                    <code className="text-sm block mt-2">
                      Home → Country → State → City
                    </code>
                  </div>
                </CardContent>
              </Card>
            </section>
          </ScrollReveal>

          {/* Section 6: What Must NEVER Change */}
          <ScrollReveal delay={0.7}>
            <section id="never-change" className="mb-12">
              <Card className="border-red-200 dark:border-red-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-600 dark:text-red-400">
                    <AlertTriangle className="w-5 h-5" />
                    What Must NEVER Change
                  </CardTitle>
                  <CardDescription>
                    Critical elements that will break SEO or functionality if modified
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg p-4">
                      <h4 className="font-semibold text-red-700 dark:text-red-300 mb-3">
                        🚫 NEVER Modify These:
                      </h4>
                      <ul className="space-y-2 text-sm text-red-700 dark:text-red-300">
                        <li className="flex items-start gap-2">
                          <span>❌</span>
                          <span><strong>URL Slugs:</strong> Never change country codes, state codes, city slugs, or industry slugs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span>❌</span>
                          <span><strong>Route Patterns:</strong> Do not modify routing patterns in App.tsx</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span>❌</span>
                          <span><strong>Silo Structure:</strong> Never merge location levels or change hierarchy</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span>❌</span>
                          <span><strong>Industry URL Prefix:</strong> Keep "local-seo-services-for-" prefix exactly</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span>❌</span>
                          <span><strong>Category URL Prefix:</strong> Keep "local-seo-for-" prefix exactly</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span>❌</span>
                          <span><strong>Language Prefixes:</strong> All URLs must start with /en/, /ar/, etc.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span>❌</span>
                          <span><strong>Canonical Tags:</strong> Never remove or duplicate canonical URLs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span>❌</span>
                          <span><strong>Internal Link Components:</strong> Do not remove ParentStateLink, RelatedCities, etc.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                      <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">
                        ⚠️ Modify With Extreme Caution:
                      </h4>
                      <ul className="space-y-2 text-sm text-yellow-700 dark:text-yellow-300">
                        <li>• Meta title/description generators (ensure uniqueness)</li>
                        <li>• Structured data schemas</li>
                        <li>• robots.txt directives</li>
                        <li>• Sitemap generation script</li>
                        <li>• Access control/authentication logic</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </ScrollReveal>

          {/* Section 7: Adding New Content */}
          <ScrollReveal delay={0.8}>
            <section id="adding-content" className="mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-5 h-5 text-primary" />
                    Adding New Content Safely
                  </CardTitle>
                  <CardDescription>
                    Step-by-step guides for adding new locations and industries
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Adding a new country */}
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-3">Adding a New Country:</h4>
                    <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                      <li>Add country object to <code className="bg-muted px-1 rounded">COUNTRIES</code> array in countries-config.ts</li>
                      <li>Include: code (lowercase), name, flag, states array, mapCenter, seoKeywords</li>
                      <li>Create a new states config file: <code className="bg-muted px-1 rounded">src/lib/XX-states-config.ts</code></li>
                      <li>Import and register states in states-config.ts getStateData function</li>
                      <li>Add country to sitemap generator script</li>
                      <li>Verify internal links work correctly</li>
                    </ol>
                  </div>

                  {/* Adding a new state */}
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-3">Adding a New State:</h4>
                    <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                      <li>Add state to the country's states array in countries-config.ts</li>
                      <li>Add full state data in the appropriate states config file</li>
                      <li>Include: code, name, cities array, activeCities, tagline, description</li>
                      <li>Update getStateData function to include new state</li>
                      <li>Verify breadcrumbs and parent links work</li>
                    </ol>
                  </div>

                  {/* Adding a new city */}
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-3">Adding a New City:</h4>
                    <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                      <li>Add city object to the state's <code className="bg-muted px-1 rounded">cities</code> array</li>
                      <li>Add city code to <code className="bg-muted px-1 rounded">activeCities</code> array to enable page</li>
                      <li>City URL will automatically be: /en/[country]/[state]/local-seo-[city]</li>
                      <li>Verify RelatedCities component shows new city</li>
                    </ol>
                  </div>

                  {/* Adding a new industry */}
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-3">Adding a New Industry:</h4>
                    <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                      <li>Add industry slug to appropriate category in INDUSTRY_CATEGORIES</li>
                      <li>Add industry-specific content to industrySpecificContent object</li>
                      <li>Include: metaDescription, heroTagline, uniqueFeatures, FAQ, stats</li>
                      <li>Industry page will be: /en/local-seo-services-for-[slug]</li>
                      <li>Verify industry appears in IndustriesWeServe component</li>
                    </ol>
                  </div>
                </CardContent>
              </Card>
            </section>
          </ScrollReveal>

          {/* Section 8: SEO Safety Rules */}
          <ScrollReveal delay={0.9}>
            <section id="seo-safety-rules" className="mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    SEO Safety Rules for Long-Term Use
                  </CardTitle>
                  <CardDescription>
                    Guidelines to maintain SEO performance over time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-green-700 dark:text-green-300">✓ DO: Keep URLs Stable</h4>
                        <p className="text-sm text-green-600 dark:text-green-400">
                          Once a page is indexed, never change its URL. Use 301 redirects only if absolutely necessary.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-green-700 dark:text-green-300">✓ DO: Keep Metadata Unique</h4>
                        <p className="text-sm text-green-600 dark:text-green-400">
                          Every page must have a unique title and description. Use generator functions for consistency.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-green-700 dark:text-green-300">✓ DO: Maintain Internal Links</h4>
                        <p className="text-sm text-green-600 dark:text-green-400">
                          Every page should link to its parent and related sibling pages. Follow the silo structure.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-green-700 dark:text-green-300">✓ DO: Test Before Deploy</h4>
                        <p className="text-sm text-green-600 dark:text-green-400">
                          Always verify new pages render correctly, have proper meta tags, and links work.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg">
                      <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-red-700 dark:text-red-300">✗ DON'T: Create Duplicate Content</h4>
                        <p className="text-sm text-red-600 dark:text-red-400">
                          Never copy content between location pages. Each page needs unique, valuable content.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg">
                      <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-red-700 dark:text-red-300">✗ DON'T: Remove Indexed Pages</h4>
                        <p className="text-sm text-red-600 dark:text-red-400">
                          Deleting pages that are indexed will cause 404 errors. Redirect instead.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg">
                      <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-red-700 dark:text-red-300">✗ DON'T: Skip Canonical Tags</h4>
                        <p className="text-sm text-red-600 dark:text-red-400">
                          Every page needs a canonical tag pointing to itself to prevent duplicate indexing.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </ScrollReveal>

          {/* Back to Dashboard */}
          <ScrollReveal delay={1.0}>
            <div className="text-center">
              <Link
                to={`/${language}/portal/dashboard`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Return to Portal Dashboard
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default MaintenanceGuidePage;
