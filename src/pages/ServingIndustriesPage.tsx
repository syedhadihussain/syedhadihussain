import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  Users,
  TrendingUp,
  Star,
  CheckCircle2,
  Search,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import { INDUSTRY_CATEGORIES, getIndustryData } from "@/lib/industries-config";
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from "@/lib/i18n-config";

// Industry-specific images mapping
const INDUSTRY_IMAGES: Record<string, string> = {
  "home-maintenance":
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop",
  cleaning:
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop",
  construction:
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
  inspection:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
  "pest-control":
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
  "waste-recycling":
    "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop",
  landscaping:
    "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=600&h=400&fit=crop",
  energy:
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
  security:
    "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop",
  healthcare:
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop",
  beauty:
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop",
  automotive:
    "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop",
  childcare:
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop",
  "elderly-care":
    "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&h=400&fit=crop",
  "funeral-religious":
    "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=600&h=400&fit=crop",
  "legal-financial":
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
  "real-estate":
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
  "food-beverage":
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
  "hospitality-events":
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
  technology:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
  "professional-services":
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
  manufacturing:
    "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=400&fit=crop",
  "storage-logistics":
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
  fitness:
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
  "specialized-trades":
    "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=600&h=400&fit=crop",
};

// Get description for category
const getCategoryDescription = (categorySlug: string): string => {
  const descriptions: Record<string, string> = {
    "home-maintenance":
      "Boost your home service business visibility. From plumbers to electricians, we help local tradespeople dominate Google Maps and attract more customers.",
    cleaning:
      "Get more cleaning contracts with targeted Local SEO. We help cleaning companies rank for high-intent searches in their service areas.",
    construction:
      "Build your online presence like you build structures. Our construction-focused SEO brings qualified leads directly to your business.",
    inspection:
      "Position your inspection business as the trusted local expert. We optimize for the specific searches your potential clients use.",
    "pest-control":
      "Capture emergency pest control searches. When pests strike, make sure customers find you first with our targeted SEO strategies.",
    "waste-recycling":
      "Dominate local waste management searches. We help recycling and waste companies connect with commercial and residential clients.",
    landscaping:
      "Grow your landscaping business organically. Our SEO strategies put you in front of homeowners and property managers actively seeking services.",
    energy:
      "Lead the green energy revolution locally. We help solar installers and energy consultants capture the growing eco-conscious market.",
    security:
      "Secure your position in local search. From CCTV to security guards, we help security companies build trust and visibility online.",
    healthcare:
      "Attract more patients with healthcare-specific SEO. We understand HIPAA compliance and the unique needs of medical practices.",
    beauty:
      "Make your beauty business the first choice. We help salons, spas, and beauty professionals attract clients seeking their services.",
    automotive:
      "Drive more customers to your auto business. From repair shops to car washes, we optimize for the searches that matter.",
    childcare:
      "Build trust with parents through strong local presence. We help childcare providers and schools connect with families in their community.",
    "elderly-care":
      "Help families find your care services. We optimize for the sensitive searches families make when seeking senior care.",
    "funeral-religious":
      "Provide compassionate visibility during difficult times. We help funeral and religious services reach those who need them most.",
    "legal-financial":
      "Establish authority in local legal and financial services. We help practices attract clients seeking professional expertise.",
    "real-estate":
      "List your agency at the top of local property searches. We help real estate professionals capture buyers and sellers in their market.",
    "food-beverage":
      "Fill more seats and increase orders. Our restaurant SEO strategies drive hungry customers to your establishment.",
    "hospitality-events":
      "Book more events and stays. We help hotels and event planners capture celebrations and accommodations in their area.",
    technology:
      "Connect with local businesses needing IT support. We help tech companies establish themselves as the go-to local solution.",
    "professional-services":
      "Position your firm as the trusted local expert. From accountants to consultants, we build your professional reputation online.",
    manufacturing:
      "Get found by local businesses needing manufacturing services. We help B2B manufacturers connect with their target market.",
    "storage-logistics":
      "Capture storage and logistics searches. We help facilities and couriers reach customers needing their services.",
    fitness:
      "Get more members through your doors. We help gyms and fitness studios attract health-conscious locals.",
    "specialized-trades":
      "Stand out in niche markets. We help specialized tradespeople reach the specific clients who need their unique skills.",
  };
  return (
    descriptions[categorySlug] ||
    "Boost your local business visibility with our specialized SEO services tailored for your industry."
  );
};

const ServingIndustriesPage = () => {
  const location = useLocation();

  // Get current language from URL
  const pathParts = location.pathname.split("/").filter(Boolean);
  const currentLang = SUPPORTED_LANGUAGES.includes(pathParts[0] as any)
    ? pathParts[0]
    : DEFAULT_LANGUAGE;

  // Helper to create language-prefixed links
  const langLink = (path: string) => `/${currentLang}${path}`;

  const stats = [
    { icon: Building2, value: "300+", label: "Industries Served" },
    { icon: Users, value: "5,000+", label: "Businesses Helped" },
    { icon: TrendingUp, value: "97%", label: "Client Satisfaction" },
    { icon: Star, value: "4.9/5", label: "Average Rating" },
  ];

  const [industryQuery, setIndustryQuery] = useState("");
  const normalizedQuery = industryQuery.trim().toLowerCase();

  const matchedSlugs = useMemo(() => {
    if (!normalizedQuery) return null;

    const matches = new Set<string>();
    for (const category of INDUSTRY_CATEGORIES) {
      for (const slug of category.industries) {
        const industry = getIndustryData(slug);
        if (!industry) continue;

        const haystack = `${industry.name} ${industry.slug} ${industry.keyword} ${category.name}`.toLowerCase();
        if (haystack.includes(normalizedQuery)) matches.add(slug);
      }
    }

    return matches;
  }, [normalizedQuery]);

  const categoriesToRender = useMemo(() => {
    if (!matchedSlugs) return INDUSTRY_CATEGORIES;

    return INDUSTRY_CATEGORIES.map((category) => ({
      ...category,
      industries: category.industries.filter((slug) => matchedSlugs.has(slug)),
    })).filter((category) => category.industries.length > 0);
  }, [matchedSlugs]);

  const totalMatchCount = matchedSlugs ? matchedSlugs.size : 0;

  return (
    <>
      <Helmet>
        <title>
          Local SEO Services for All Industries | Industry-Specific SEO Experts
        </title>
        <meta
          name="description"
          content="Specialized Local SEO services for 300+ industries. From plumbers to doctors, restaurants to law firms - we help local businesses dominate Google Maps and attract more customers."
        />
        <meta
          name="keywords"
          content="local seo services, industry seo, business seo, google maps seo, local search optimization"
        />
        <link
          rel="canonical"
          href={`https://syedhadihussain.com${langLink("/serving-industries")}`}
        />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container-narrow">
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                300+ Industries Served Worldwide
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
                Local SEO Services for{" "}
                <span className="text-primary">Every Industry</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                No matter your industry, we understand the unique challenges local
                businesses face. Our specialized Local SEO strategies are tailored
                to your specific market, helping you attract more customers and
                grow your business.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-card rounded-xl border border-border"
                  >
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-16 lg:py-24">
          <div className="container-narrow">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Browse Industries by Category
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Select your industry to discover how our specialized Local SEO
                services can help your business thrive.
              </p>

              {/* Search */}
              <div className="mt-8 max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    value={industryQuery}
                    onChange={(e) => setIndustryQuery(e.target.value)}
                    placeholder="Search your industry (e.g., plumber, dentist, restaurant)"
                    aria-label="Search industries"
                    className="h-12 pl-12 pr-12"
                  />
                  {industryQuery.trim().length > 0 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => setIndustryQuery("")}
                      className="absolute right-1 top-1/2 -translate-y-1/2"
                      aria-label="Clear search"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  )}
                </div>

                {normalizedQuery ? (
                  <p className="mt-3 text-sm text-muted-foreground">
                    {totalMatchCount > 0
                      ? `Showing ${totalMatchCount} matching industries for "${industryQuery}".`
                      : `No matches for "${industryQuery}".`}
                  </p>
                ) : (
                  <p className="mt-3 text-sm text-muted-foreground">
                    Search by trade, service, or niche—then click through to your
                    dedicated industry page.
                  </p>
                )}
              </div>
            </div>

            {/* No results */}
            {normalizedQuery && totalMatchCount === 0 && (
              <Card className="mb-10 border-primary/20 bg-primary/5">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                    <div>
                      <h3 className="text-xl font-display font-bold text-foreground">
                        Can’t find your industry?
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Send us your niche and we’ll confirm how we can help (or
                        build a dedicated industry page for you).
                      </p>
                    </div>
                    <Button asChild>
                      <Link to={langLink("/contact")}>
                        Contact us for confirmation
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="space-y-16">
              {categoriesToRender.map((category) => (
                <div
                  key={category.slug}
                  className="scroll-mt-24"
                  id={category.slug}
                >
                  {/* Category Header - Links to Category Page */}
                  <Link 
                    to={langLink(`/local-seo-for-${category.slug}`)}
                    className="flex items-center gap-3 mb-8 group"
                  >
                    <span className="text-3xl">{category.icon}</span>
                    <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                      Local SEO for {category.name}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </Link>

                  {/* Category Description Card */}
                  <Card className="mb-8 overflow-hidden border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex flex-col lg:flex-row gap-6 items-center">
                        <div className="w-full lg:w-1/3">
                          <img
                            src={
                              INDUSTRY_IMAGES[category.slug] ||
                              INDUSTRY_IMAGES["home-maintenance"]
                            }
                            alt={`Local SEO services for ${category.name}`}
                            className="w-full h-48 object-cover rounded-lg"
                            loading="lazy"
                          />
                        </div>
                        <div className="w-full lg:w-2/3">
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {getCategoryDescription(category.slug)}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {category.industries.slice(0, 5).map((industrySlug) => {
                              const industry = getIndustryData(industrySlug);
                              return industry ? (
                                <span
                                  key={industrySlug}
                                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                                >
                                  {industry.name}
                                </span>
                              ) : null;
                            })}
                            {category.industries.length > 5 && !normalizedQuery && (
                              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                                +{category.industries.length - 5} more
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Industry Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.industries.map((industrySlug) => {
                      const industry = getIndustryData(industrySlug);
                      if (!industry) return null;

                      return (
                        <Card
                          key={industrySlug}
                          className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                        >
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                                {industry.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                  {industry.keyword}
                                </h4>
                                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                  Rank #1 for {industry.name.toLowerCase()} searches
                                  in your area. Get more leads and grow your
                                  business.
                                </p>
                                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                                  <CheckCircle2 className="w-4 h-4 text-primary" />
                                  <span>Google Maps Optimization</span>
                                </div>
                                <Button
                                  asChild
                                  size="sm"
                                  variant="outline"
                                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                                >
                                  <Link
                                    to={langLink(
                                      `/local-seo-services-for-${industrySlug}`
                                    )}
                                  >
                                    View SEO Services
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                  </Link>
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-primary/5">
          <div className="container-narrow">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Don&apos;t See Your Industry?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We work with businesses across all sectors. Contact us to discuss
                how our Local SEO services can be customized for your specific
                industry needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to={langLink("/contact")}>
                    Get a Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a
                    href="https://calendly.com/syedhadihussain"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a Call
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ServingIndustriesPage;
