import { memo, useMemo } from "react";
import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import SEOHead from "@/components/SEOHead";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, MapPin, Search, BarChart3, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

// Import portfolio images
import pizzaSeoResults from "@/assets/portfolio/pizza-seo-results.png";
import moesWebsiteClicks from "@/assets/portfolio/moes-website-clicks.png";
import moesInteractions from "@/assets/portfolio/moes-interactions.png";
import moesGoogleRanking from "@/assets/portfolio/moes-google-ranking.png";
import moesSearchConsole from "@/assets/portfolio/moes-search-console.png";
import seoGrowthChart from "@/assets/portfolio/seo-growth-chart.jpg";
import locustBeforeSeo from "@/assets/portfolio/locust-before-seo.png";
import locustAfterSeo from "@/assets/portfolio/locust-after-seo.png";

const seoProjects = [
  {
    title: "Moe's iRepair - Complete Local SEO Domination",
    industry: "Phone Repair",
    location: "Duncanville, TX",
    challenge:
      "New business with zero online visibility competing against established repair shops. No Google presence, no reviews, and no organic traffic.",
    solution:
      "Implemented full-stack local SEO strategy including GBP optimization, aggressive citation building, review generation campaign, and comprehensive on-page optimization.",
    results: [
      { metric: "5,187", label: "GBP Interactions" },
      { metric: "495", label: "Website Clicks" },
      { metric: "2,129", label: "Direction Requests" },
      { metric: "#1", label: "Map Pack Ranking" },
    ],
    images: [moesGoogleRanking, moesInteractions, moesWebsiteClicks, moesSearchConsole],
    strategy: [
      "Complete GBP optimization with all service categories, business attributes, and weekly posts",
      "Built 150+ high-quality citations across major directories",
      "Review generation campaign: grew from 0 to 1,300+ verified reviews",
      "Local schema markup and location-specific landing pages",
      "Targeted 50+ local keywords including 'phone repair near me', 'iphone repair duncanville'",
      "Monthly performance tracking and strategy adjustments",
    ],
  },
  {
    title: "Phone Repair Shop - Grid Domination in Locust City",
    industry: "Phone Repair",
    location: "Locust City, NC",
    challenge:
      "Business was ranking 20+ for most grid points in the local area. Competitors were dominating the map pack and taking all the local traffic.",
    solution:
      "Implemented aggressive local SEO grid strategy focusing on expanding visibility across the entire service area through systematic GBP optimization and localized content.",
    results: [
      { metric: "95%", label: "Grid Points #1" },
      { metric: "20+ → 1", label: "Ranking Improvement" },
      { metric: "5x", label: "More Map Visibility" },
      { metric: "Full", label: "Area Coverage" },
    ],
    images: [locustBeforeSeo, locustAfterSeo],
    beforeAfter: true,
    strategy: [
      "Comprehensive local grid analysis to identify weak coverage areas",
      "Strategic GBP category and service optimization",
      "Geo-targeted content creation for surrounding areas",
      "Citation consistency audit across 100+ directories",
      "Review velocity optimization with automated follow-up system",
      "Bi-weekly performance monitoring and ranking adjustments",
    ],
  },
  {
    title: "Neighborhood Pizza - Restaurant Local SEO",
    industry: "Restaurant",
    location: "Wilbraham, MA, USA",
    challenge:
      "Popular neighborhood restaurant was invisible in local searches despite excellent food and service. Missing out on thousands of potential customers.",
    solution:
      "GBP optimization with menu integration, local keyword targeting for high-volume restaurant searches, and structured data implementation.",
    results: [
      { metric: "36,164", label: "Profile Views" },
      { metric: "20,909", label: "Search Appearances" },
      { metric: "10K+", label: "Restaurant Searches" },
      { metric: "Top 3", label: "Map Pack Position" },
    ],
    images: [pizzaSeoResults],
    strategy: [
      "Complete GBP optimization with full menu integration and professional food photos",
      "Targeted high-volume keywords: 'restaurants near me', 'pizza near me', 'pasta restaurants'",
      "Restaurant and menu schema markup for rich snippets",
      "Local content strategy targeting neighborhood-specific searches",
      "Review management and response strategy",
      "Weekly posts featuring specials and seasonal items",
    ],
  },
  {
    title: "Website SEO - Sustainable Organic Growth",
    industry: "Multiple Clients",
    location: "Worldwide",
    challenge:
      "Clients needed sustainable organic traffic growth beyond just local pack rankings. Required comprehensive website optimization strategy.",
    solution:
      "Full website SEO including technical optimization, content strategy, on-page SEO, and strategic link building for long-term organic growth.",
    results: [
      { metric: "1.5K", label: "Total Clicks" },
      { metric: "41.8K", label: "Impressions" },
      { metric: "3.6%", label: "Average CTR" },
      { metric: "7.7", label: "Average Position" },
    ],
    images: [seoGrowthChart, moesSearchConsole],
    strategy: [
      "Thorough technical SEO audits to fix crawl issues and improve site speed",
      "Content cluster strategy around target keywords",
      "High-quality backlink building through guest posting and digital PR",
      "Schema markup implementation for rich snippets",
      "Core Web Vitals optimization for better user experience",
      "Monthly reporting with actionable insights and recommendations",
    ],
  },
];

const PortfolioPage = memo(() => {
  const { t, language } = useLanguage();
  const withLang = useMemo(() => (path: string) => (path === "/" ? `/${language}` : `/${language}${path}`), [language]);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={t("Proven Local SEO Portfolio With Real Rankings & Growth – Syed Hadi Hussain")}
        description={t(
          "View a curated portfolio of Local SEO projects showcasing Google Maps rankings, traffic growth, and lead generation across multiple industries and locations."
        )}
        canonical="https://syedhadihussain.com/portfolio"
        keywords="SEO portfolio, local SEO results, Google Maps rankings, traffic growth, lead generation"
        breadcrumbs={[
          { name: "Home", url: "https://syedhadihussain.com" },
          { name: "Portfolio", url: "https://syedhadihussain.com/portfolio" },
        ]}
      />
      <Navigation />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
          <div className="container-narrow">
            <ScrollReveal animation="fade-up">
              <div className="text-center max-w-3xl mx-auto">
                <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                  {t("nav.portfolio")}
                </span>
                <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
                  {t("SEO Results That Speak For Themselves")}
                </h1>
                <p className="text-muted-foreground text-lg mb-8">
                  {t(
                    "Real projects, real results. Every case study includes the exact strategies I used and the measurable outcomes achieved. No fluff, just proven SEO success."
                  )}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>{t("100+ Clients Served")}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>{t("Verified Screenshots")}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>{t("Real Business Impact")}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* SEO Portfolio */}
        <section className="section-padding">
          <div className="container-narrow">
            <div className="space-y-20">
              {seoProjects.map((project, index) => (
                <ScrollReveal key={index} animation="fade-up">
                  <div className="glass rounded-3xl overflow-hidden">
                    {/* Header */}
                    <div className="p-6 lg:p-8 bg-gradient-to-r from-primary/10 to-transparent border-b border-border">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className="px-4 py-1.5 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                          {t(project.industry)}
                        </span>
                        <span className="flex items-center gap-1 text-muted-foreground text-sm">
                          <MapPin className="w-4 h-4" />
                          {t(project.location)}
                        </span>
                      </div>
                      <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground">
                        {t(project.title)}
                      </h2>
                    </div>

                    {/* Content */}
                    <div className="p-6 lg:p-8">
                      {/* Challenge & Solution */}
                      <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <div>
                          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Search className="w-5 h-5 text-primary" />
                            {t("The Challenge")}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">{t(project.challenge)}</p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-primary" />
                            {t("The Solution")}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">{t(project.solution)}</p>
                        </div>
                      </div>

                      {/* Results Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {project.results.map((result, i) => (
                          <div
                            key={i}
                            className="bg-primary/5 border border-primary/20 rounded-xl p-4 text-center hover:bg-primary/10 transition-colors"
                          >
                            <div className="font-display text-2xl lg:text-3xl font-bold text-primary">{result.metric}</div>
                            <div className="text-xs text-muted-foreground mt-1">{t(result.label)}</div>
                          </div>
                        ))}
                      </div>

                      {/* Strategy */}
                      <div className="mb-8">
                        <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                          <BarChart3 className="w-5 h-5 text-primary" />
                          {t("Strategy & Execution")}
                        </h3>
                        <div className="grid md:grid-cols-2 gap-3">
                          {project.strategy.map((item, i) => (
                            <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{t(item)}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Screenshots */}
                      {project.beforeAfter ? (
                        <div>
                          <h3 className="font-semibold text-foreground mb-4">{t("Before & After Grid Rankings")}</h3>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="rounded-xl overflow-hidden border border-destructive/30 bg-destructive/5">
                              <div className="p-3 bg-destructive/10 text-center">
                                <span className="text-sm font-medium text-destructive">
                                  {t("BEFORE - Ranking 20+ (Red = Not Ranking)")}
                                </span>
                              </div>
                              <img
                                src={project.images[0]}
                                alt={t("Before SEO - poor rankings")}
                                loading="lazy"
                                width={600}
                                height={400}
                                className="w-full h-auto"
                              />
                            </div>
                            <div className="rounded-xl overflow-hidden border border-primary/30 bg-primary/5">
                              <div className="p-3 bg-primary/10 text-center">
                                <span className="text-sm font-medium text-primary">
                                  {t("AFTER - Ranking #1 (Green = Top Position)")}
                                </span>
                              </div>
                              <img
                                src={project.images[1]}
                                alt={t("After SEO - top rankings")}
                                loading="lazy"
                                width={600}
                                height={400}
                                className="w-full h-auto"
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <h3 className="font-semibold text-foreground mb-4">{t("Results Screenshots")}</h3>
                          <div
                            className={`grid gap-4 ${
                              project.images.length === 1
                                ? "grid-cols-1 max-w-2xl mx-auto"
                                : project.images.length === 2
                                  ? "md:grid-cols-2"
                                  : "md:grid-cols-2 lg:grid-cols-4"
                            }`}
                          >
                            {project.images.map((img, i) => (
                              <div
                                key={i}
                                className="rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-colors"
                              >
                                <img
                                  src={img}
                                  alt={t(`${project.title} results screenshot ${i + 1}`)}
                                  loading="lazy"
                                  width={600}
                                  height={400}
                                  className="w-full h-auto"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-card/50">
          <div className="container-narrow">
            <ScrollReveal animation="scale">
              <div className="glass rounded-3xl p-8 lg:p-12 text-center glow">
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                  {t("Ready for Similar Results?")}
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  {t("Get a professional SEO audit for just")}{" "}
                  <span className="text-primary font-semibold">$50</span>{" "}
                  {t("(50% OFF — book within 24 hours!) and discover your growth potential.")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="glow group">
                    <a href="https://calendly.com/syedhadihussain" target="_blank" rel="noopener noreferrer">
                      {t("hero.bookAudit")}
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to={withLang("/case-studies")}>{t("View Case Studies")}</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to={withLang("/contact")}>{t("Contact Me")}</Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
});

PortfolioPage.displayName = "PortfolioPage";

export default PortfolioPage;
