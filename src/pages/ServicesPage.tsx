import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import SEOHead from "@/components/SEOHead";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  MapPin,
  Search,
  FileText,
  Building,
  Star,
  Settings,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const services = [
  {
    icon: MapPin,
    title: "Google Business Profile Optimization",
    description: "Complete GBP setup, optimization, and management for maximum local visibility and customer engagement.",
    features: [
      "Profile verification & setup",
      "Category & attribute optimization",
      "Photo & video strategy",
      "Q&A management",
      "Posts & updates scheduling"
    ]
  },
  {
    icon: Search,
    title: "Local Keyword Research",
    description: "In-depth keyword research to identify high-intent local search terms that drive qualified traffic.",
    features: [
      "Competitor keyword analysis",
      "Service-area targeting",
      "Long-tail keyword discovery",
      "Search intent mapping",
      "Keyword prioritization"
    ]
  },
  {
    icon: FileText,
    title: "On-Page Local SEO",
    description: "Optimize your website's content and structure for local search dominance.",
    features: [
      "Title & meta optimization",
      "Local content creation",
      "Schema markup implementation",
      "Internal linking strategy",
      "Mobile optimization"
    ]
  },
  {
    icon: Building,
    title: "Citation Building & NAP",
    description: "Build consistent NAP citations across authoritative directories to boost local rankings.",
    features: [
      "NAP audit & cleanup",
      "Directory submissions",
      "Data aggregator distribution",
      "Industry-specific citations",
      "Ongoing monitoring"
    ]
  },
  {
    icon: Star,
    title: "Review Management",
    description: "Comprehensive review strategy to build your online reputation and trust.",
    features: [
      "Review generation campaigns",
      "Response templates",
      "Negative review handling",
      "Review monitoring alerts",
      "Reputation scoring"
    ]
  },
  {
    icon: Settings,
    title: "Technical SEO Audit",
    description: "Complete technical audit to identify and fix issues affecting your local search performance.",
    features: [
      "Site speed optimization",
      "Mobile-first analysis",
      "Crawl error resolution",
      "Core Web Vitals",
      "Structured data validation"
    ]
  }
];

const ServicesPage = () => {
  return (
    <>
      <SEOHead
        title="Local SEO Services | Syed Hadi Hussain"
        description="Comprehensive Local SEO services including Google Business Profile optimization, citation building, review management, and technical SEO audits."
        canonical="/services"
        keywords="Local SEO services, GBP optimization, citation building, review management, technical SEO"
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-24">
          {/* Hero */}
          <section className="section-padding">
            <div className="container-narrow text-center">
              <ScrollReveal animation="fade-up">
                <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                  Services
                </span>
                <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Local SEO Services That Drive Results
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Comprehensive strategies tailored to boost your local visibility, attract more customers, and grow your business.
                </p>
              </ScrollReveal>
            </div>
          </section>

          {/* Services Grid */}
          <section className="section-padding bg-card/50">
            <div className="container-narrow">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <ScrollReveal key={service.title} animation="scale" delay={index * 100}>
                    <div className="glass rounded-2xl p-8 h-full hover:glow-sm transition-all duration-300 group">
                      <service.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                      <h2 className="font-display text-xl font-bold text-foreground mb-4">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
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
          <section className="section-padding">
            <div className="container-narrow text-center">
              <ScrollReveal animation="scale">
                <div className="glass rounded-3xl p-12 glow">
                  <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                    Ready to Dominate Local Search?
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                    Book a free consultation and discover how these services can transform your local visibility.
                  </p>
                  <Button asChild size="lg" className="glow group">
                    <Link to="/contact">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
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
