import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import SEOHead from "@/components/SEOHead";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  MapPin,
  Search,
  FileText,
  Building,
  Star,
  Settings,
  ArrowRight,
  CheckCircle,
  Globe,
  Map,
  Wrench,
  Code,
  LineChart,
  FolderKanban,
  MessageSquare,
  Sparkles
} from "lucide-react";

const services = [
  {
    icon: MapPin,
    title: "Local SEO Optimization",
    description: "Boost your visibility on Google Search with local SEO strategies that attract high-intent customers in your local area.",
    features: [
      "Service area targeting",
      "Local keyword optimization",
      "Competitor analysis",
      "Local content strategy",
      "Performance tracking"
    ]
  },
  {
    icon: Globe,
    title: "Google Business Profile Management",
    description: "Complete setup, optimization, and management of your Google Business Profile to maximize visibility in search, maps, and AI-powered listings.",
    features: [
      "Profile verification & setup",
      "Category & attribute optimization",
      "Photo & video strategy",
      "Q&A management",
      "Posts & updates scheduling"
    ]
  },
  {
    icon: Map,
    title: "Map SEO – Google, Apple, Bing",
    description: "Optimize your presence on Google Maps, Apple Maps, Bing Maps, and other location-based platforms to effectively capture local searches.",
    features: [
      "Multi-platform optimization",
      "Location accuracy verification",
      "Map ranking strategies",
      "Geo-grid tracking",
      "Competitor positioning"
    ]
  },
  {
    icon: Search,
    title: "Keyword Research & Semantic SEO",
    description: "Identify the best keywords for your business, including voice search and AI-generated queries, to drive relevant traffic that converts.",
    features: [
      "Competitor keyword analysis",
      "Service-area targeting",
      "Long-tail keyword discovery",
      "Search intent mapping",
      "Voice search optimization"
    ]
  },
  {
    icon: FileText,
    title: "On-Page SEO",
    description: "Optimize your website's content and structure with meta tags, headings, structured data, and semantic markup for better rankings.",
    features: [
      "Title & meta optimization",
      "Local content creation",
      "Schema markup implementation",
      "Internal linking strategy",
      "Mobile optimization"
    ]
  },
  {
    icon: Wrench,
    title: "Technical SEO",
    description: "Fix site performance, speed, mobile-friendliness, indexing, and crawl issues so your website works flawlessly for search engines.",
    features: [
      "Site speed optimization",
      "Mobile-first analysis",
      "Crawl error resolution",
      "Core Web Vitals",
      "Structured data validation"
    ]
  },
  {
    icon: Building,
    title: "Citation Building & NAP",
    description: "Build consistent NAP citations across authoritative directories to boost local rankings and trust signals.",
    features: [
      "NAP audit & cleanup",
      "Directory submissions (150+)",
      "Data aggregator distribution",
      "Industry-specific citations",
      "Ongoing monitoring"
    ]
  },
  {
    icon: Star,
    title: "Review Management",
    description: "Comprehensive review strategy to build your online reputation, generate more reviews, and manage customer feedback.",
    features: [
      "Review generation campaigns",
      "Response templates",
      "Negative review handling",
      "Review monitoring alerts",
      "Reputation scoring"
    ]
  },
  {
    icon: Code,
    title: "Content Strategy & AI-Optimized Content",
    description: "Create high-quality, AI-ready content for service pages, blogs, FAQs, and landing pages to rank on search engines and generative platforms.",
    features: [
      "Service page content",
      "Blog strategy & creation",
      "FAQ optimization",
      "Location pages",
      "AI-optimized formatting"
    ]
  },
  {
    icon: Settings,
    title: "Link Building & Local Citations",
    description: "Build high-authority links and local citations to boost trust signals and improve visibility across all platforms.",
    features: [
      "Local link building",
      "Guest posting",
      "Digital PR",
      "Resource page links",
      "Competitor backlink analysis"
    ]
  },
  {
    icon: LineChart,
    title: "Conversion Tracking & Analytics",
    description: "Set up GA4, GTM, UTM tracking, and advanced analytics to track traffic, calls, map clicks, and conversions with actionable insights.",
    features: [
      "GA4 setup & configuration",
      "Goal tracking",
      "Call tracking integration",
      "Custom dashboards",
      "Monthly reporting"
    ]
  },
  {
    icon: FolderKanban,
    title: "Full-Stack Project Management",
    description: "Manage all SEO, AI, and map optimization projects end-to-end, ensuring timely execution and alignment with business goals.",
    features: [
      "Project planning",
      "Task coordination",
      "Timeline management",
      "Performance tracking",
      "Strategy adjustments"
    ]
  },
  {
    icon: MessageSquare,
    title: "Client Communication & Reporting",
    description: "Transparent, regular updates with insights on search performance, map visibility, AI ranking signals, and lead generation.",
    features: [
      "Weekly status updates",
      "Monthly performance reports",
      "Strategy recommendations",
      "ROI tracking",
      "Client dashboard access"
    ]
  },
  {
    icon: Sparkles,
    title: "Advanced AI & Generative SEO",
    description: "Implement strategies to get your business cited by ChatGPT, Perplexity, Bing AI, and other generative engines for future-ready SEO.",
    features: [
      "AI citation optimization",
      "Generative engine optimization",
      "Structured data for AI",
      "FAQ schema markup",
      "AI-ready content formatting"
    ]
  }
];

const ServicesPage = () => {
  const { language } = useLanguage();
  const withLang = (path: string) => (path === "/" ? `/${language}` : `/${language}${path}`);

  return (
    <>
      <SEOHead
        title="High-Impact Local SEO Services for Google Maps & Search Visibility – Syed Hadi Hussain"
        description="Comprehensive Local SEO services including Google Business Profile optimization, Map Pack ranking, technical SEO, content, tracking, and AI-focused optimization."
        canonical="/services"
        keywords="Local SEO services, Google Maps optimization, GBP management, Map Pack ranking, technical SEO, AI SEO"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Services", url: "/services" }]}
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        <main id="main-content" role="main" aria-label="SEO services page" className="pt-24">
          {/* Hero */}
          <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
            <div className="container-narrow text-center">
              <ScrollReveal animation="fade-up">
                <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                  Services
                </span>
                <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Local SEO Services That Drive Results
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                  Comprehensive strategies tailored to boost your local visibility, attract more customers, and grow your business.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="glow group">
                    <Link to={withLang("/project-management")}>
                      Project Management
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to={withLang("/local-service-ads")}>
                      Local Service Ads
                    </Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* Services Grid */}
          <section className="section-padding">
            <div className="container-narrow">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <ScrollReveal key={service.title} animation="scale" delay={index * 50}>
                    <div className="glass rounded-2xl p-6 h-full hover:glow-sm transition-all duration-300 group">
                      <service.icon className="w-10 h-10 text-primary mb-5 group-hover:scale-110 transition-transform" />
                      <h2 className="font-display text-lg font-bold text-foreground mb-3">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="section-padding bg-card/50">
            <div className="container-narrow text-center">
              <ScrollReveal animation="scale">
                <div className="glass rounded-3xl p-8 lg:p-12 glow">
                  <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                    Ready to Dominate Local Search?
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                    Get a professional SEO audit for just <span className="text-primary font-semibold">$50</span> (50% OFF — book within 24 hours!) and discover how these services can transform your local visibility.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="glow group">
                      <a href="https://calendly.com/syedhadihussain" target="_blank" rel="noopener noreferrer">
                        Get SEO Audit — $50
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link to={withLang("/contact")}>
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
    </>
  );
};

export default ServicesPage;
