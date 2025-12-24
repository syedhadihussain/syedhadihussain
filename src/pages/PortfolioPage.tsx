import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import SEOHead from "@/components/SEOHead";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Eye, MousePointer, MapPin, Search, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

// Import portfolio images
import pizzaSeoResults from "@/assets/portfolio/pizza-seo-results.png";
import moesWebsiteClicks from "@/assets/portfolio/moes-website-clicks.png";
import moesInteractions from "@/assets/portfolio/moes-interactions.png";
import moesGoogleRanking from "@/assets/portfolio/moes-google-ranking.png";
import moesSearchConsole from "@/assets/portfolio/moes-search-console.png";
import seoGrowthChart from "@/assets/portfolio/seo-growth-chart.jpg";

const webDevProjects = [
  {
    title: "Moe's iRepair",
    industry: "Phone Repair Shop",
    location: "Texas, USA",
    description: "Complete website redesign with local SEO optimization for a multi-location phone repair business.",
    features: ["Responsive Design", "Local SEO", "Online Booking", "Service Pages"],
    url: "https://moesirepair.net"
  },
  {
    title: "Neighborhood Pizza & Pasta House",
    industry: "Restaurant",
    location: "New York, USA",
    description: "Modern restaurant website with menu integration and online ordering system.",
    features: ["Menu System", "Online Ordering", "Google Maps Integration", "Mobile-First Design"],
  },
  {
    title: "Elite Bail Bonds",
    industry: "Legal Services",
    location: "California, USA",
    description: "Professional bail bonds website optimized for 24/7 emergency services and local search.",
    features: ["24/7 Contact Forms", "Service Area Pages", "Schema Markup", "Fast Loading"],
  },
  {
    title: "Premier HVAC Solutions",
    industry: "Home Services",
    location: "Florida, USA",
    description: "Service-based website with appointment scheduling and service area coverage.",
    features: ["Appointment Booking", "Service Areas", "Testimonials", "Emergency Contact"],
  },
];

const seoProjects = [
  {
    title: "Moe's iRepair - Full Local SEO",
    industry: "Phone Repair",
    location: "Duncanville, TX",
    challenge: "New business with zero online visibility competing against established repair shops.",
    solution: "Complete GBP optimization, citation building, review management, and on-page SEO.",
    results: [
      { metric: "5,187", label: "Business Profile Interactions" },
      { metric: "495", label: "Website Clicks from GBP" },
      { metric: "2,129", label: "Direction Requests" },
      { metric: "#1", label: "Map Pack Ranking" },
    ],
    images: [moesGoogleRanking, moesInteractions, moesWebsiteClicks],
    strategy: "Started with comprehensive GBP optimization including all service categories, business attributes, and weekly posts. Built 150+ citations across major directories. Implemented review generation campaign that grew reviews from 0 to 1,300+. Optimized website with local schema markup and location-specific landing pages."
  },
  {
    title: "Neighborhood Pizza - Restaurant SEO",
    industry: "Restaurant",
    location: "New York, USA",
    challenge: "Invisible in local searches despite being a popular neighborhood spot.",
    solution: "GBP optimization, menu schema markup, local keyword targeting, and review strategy.",
    results: [
      { metric: "36,164", label: "Profile Views" },
      { metric: "20,909", label: "Search Appearances" },
      { metric: "10K+", label: "Restaurant Searches" },
      { metric: "Top 3", label: "Map Pack Position" },
    ],
    images: [pizzaSeoResults],
    strategy: "Optimized GBP with complete menu integration and food photos. Targeted high-volume keywords like 'restaurants near me' and 'pizza near me'. Implemented structured data for restaurant and menu items. Created local content strategy targeting neighborhood-specific searches."
  },
  {
    title: "Website SEO - Organic Growth",
    industry: "Multiple Clients",
    location: "Worldwide",
    challenge: "Clients needed sustainable organic traffic growth beyond just local pack rankings.",
    solution: "Comprehensive website SEO including technical optimization, content strategy, and link building.",
    results: [
      { metric: "1.5K", label: "Total Clicks" },
      { metric: "41.8K", label: "Total Impressions" },
      { metric: "3.6%", label: "Average CTR" },
      { metric: "7.7", label: "Average Position" },
    ],
    images: [seoGrowthChart, moesSearchConsole],
    strategy: "Conducted thorough technical SEO audits to fix crawl issues and improve site speed. Developed content clusters around target keywords. Built high-quality backlinks through guest posting and digital PR. Implemented schema markup for rich snippets. Monthly reporting with actionable insights."
  },
];

const PortfolioPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Portfolio | Web Development & SEO Results - Syed Hadi Hussain"
        description="View our portfolio of successful web development projects and proven SEO results. See real case studies with measurable business growth."
        canonical="/portfolio"
      />
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding bg-card/50">
          <div className="container-narrow">
            <ScrollReveal animation="fade-up">
              <div className="text-center max-w-3xl mx-auto">
                <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                  {t("nav.portfolio")}
                </span>
                <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
                  {t("portfolio.title")}
                </h1>
                <p className="text-muted-foreground text-lg">
                  Real projects, real results. Explore our web development work and SEO success stories with detailed metrics and strategies.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Web Development Portfolio */}
        <section className="section-padding">
          <div className="container-narrow">
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                  {t("portfolio.webDev")}
                </h2>
                <p className="text-muted-foreground">
                  Custom websites built for local businesses across various industries
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              {webDevProjects.map((project, index) => (
                <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                  <div className="glass rounded-2xl p-6 lg:p-8 h-full hover:glow-sm transition-all duration-300">
                    <div className="flex items-center gap-2 text-primary text-sm mb-3">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{project.industry}</p>
                    <p className="text-foreground mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, i) => (
                        <span key={i} className="px-3 py-1 bg-secondary/50 rounded-full text-xs text-muted-foreground">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Portfolio */}
        <section className="section-padding bg-card/50">
          <div className="container-narrow">
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                  {t("portfolio.seo")}
                </h2>
                <p className="text-muted-foreground">
                  Detailed SEO case studies with strategies, metrics, and proven results
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-16">
              {seoProjects.map((project, index) => (
                <ScrollReveal key={index} animation="fade-up">
                  <div className="glass rounded-3xl overflow-hidden">
                    {/* Header */}
                    <div className="p-6 lg:p-8 border-b border-border">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                          {project.industry}
                        </span>
                        <span className="flex items-center gap-1 text-muted-foreground text-sm">
                          <MapPin className="w-4 h-4" />
                          {project.location}
                        </span>
                      </div>
                      <h3 className="font-display text-2xl font-bold text-foreground">
                        {project.title}
                      </h3>
                    </div>

                    {/* Content */}
                    <div className="p-6 lg:p-8">
                      <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <Search className="w-4 h-4 text-primary" />
                            The Challenge
                          </h4>
                          <p className="text-muted-foreground mb-4">{project.challenge}</p>
                          
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-primary" />
                            Our Solution
                          </h4>
                          <p className="text-muted-foreground">{project.solution}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <BarChart3 className="w-4 h-4 text-primary" />
                            Strategy & Execution
                          </h4>
                          <p className="text-muted-foreground text-sm">{project.strategy}</p>
                        </div>
                      </div>

                      {/* Results */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {project.results.map((result, i) => (
                          <div key={i} className="bg-secondary/30 rounded-xl p-4 text-center">
                            <div className="font-display text-2xl font-bold text-primary">{result.metric}</div>
                            <div className="text-xs text-muted-foreground">{result.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Screenshots */}
                      <div className="grid md:grid-cols-3 gap-4">
                        {project.images.map((img, i) => (
                          <div key={i} className="rounded-xl overflow-hidden border border-border">
                            <img src={img} alt={`${project.title} results screenshot ${i + 1}`} className="w-full h-auto" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container-narrow">
            <ScrollReveal animation="scale">
              <div className="glass rounded-3xl p-8 lg:p-12 text-center">
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                  Ready for Similar Results?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Get a professional SEO audit for just $50 (50% OFF if you book within 24 hours!) and discover your growth potential.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="glow group">
                    <a href="https://calendly.com/syedhadihussain" target="_blank" rel="noopener noreferrer">
                      Get SEO Audit — $50
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/contact">
                      Contact Me
                    </Link>
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
};

export default PortfolioPage;
