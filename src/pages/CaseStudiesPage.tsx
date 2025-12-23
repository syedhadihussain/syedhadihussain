import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import SEOHead from "@/components/SEOHead";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, ArrowRight } from "lucide-react";

const caseStudies = [
  {
    client: "Artful Orthodontics",
    industry: "Healthcare / Dental",
    location: "New York, USA",
    challenge: "Low visibility in local search results, minimal online presence",
    solution: "Complete GBP optimization, local content strategy, citation building",
    results: [
      { metric: "Organic Traffic", value: "+320%", description: "increase in 6 months" },
      { metric: "Map Pack Rankings", value: "Top 3", description: "for 15+ keywords" },
      { metric: "Monthly Leads", value: "+180%", description: "from Google Search" }
    ],
    testimonial: "Syed transformed our online presence. We went from invisible to dominating local search.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800"
  },
  {
    client: "Elite Plumbing Solutions",
    industry: "Home Services",
    location: "London, UK",
    challenge: "Competing against established competitors with stronger online presence",
    solution: "Aggressive local SEO campaign, review generation, technical optimization",
    results: [
      { metric: "Google Calls", value: "+250%", description: "direct from GBP" },
      { metric: "Website Traffic", value: "+400%", description: "organic growth" },
      { metric: "Revenue", value: "+85%", description: "year over year" }
    ],
    testimonial: "The ROI has been incredible. Every pound spent on SEO has returned tenfold.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800"
  },
  {
    client: "Gourmet Kitchen Design",
    industry: "Interior Design",
    location: "Dubai, UAE",
    challenge: "Breaking into a competitive luxury market with established players",
    solution: "Premium content strategy, high-authority backlinks, GBP optimization",
    results: [
      { metric: "Brand Searches", value: "+500%", description: "in 8 months" },
      { metric: "Lead Quality", value: "3x Higher", description: "conversion rate" },
      { metric: "Market Share", value: "Top 5", description: "in Dubai region" }
    ],
    testimonial: "We're now considered one of the top kitchen design firms in Dubai thanks to our online presence.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800"
  }
];

const CaseStudiesPage = () => {
  return (
    <>
      <SEOHead
        title="Case Studies | Local SEO Success Stories - Syed Hadi Hussain"
        description="Explore real results from local businesses that achieved significant growth through strategic Local SEO. See ROI-driven case studies."
        canonical="/case-studies"
        keywords="Local SEO case studies, SEO results, business growth, ROI, success stories"
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-24">
          {/* Hero */}
          <section className="section-padding">
            <div className="container-narrow text-center">
              <ScrollReveal animation="fade-up">
                <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                  Case Studies
                </span>
                <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Real Results for Real Businesses
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Discover how strategic Local SEO has transformed businesses across different industries and regions.
                </p>
              </ScrollReveal>
            </div>
          </section>

          {/* Case Studies */}
          <section className="section-padding bg-card/50">
            <div className="container-narrow space-y-16">
              {caseStudies.map((study, index) => (
                <ScrollReveal key={study.client} animation="fade-up" delay={index * 100}>
                  <div className="glass rounded-3xl overflow-hidden">
                    <div className="grid lg:grid-cols-2">
                      <div className="relative h-64 lg:h-auto">
                        <img
                          src={study.image}
                          alt={study.client}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent lg:bg-gradient-to-t" />
                      </div>
                      <div className="p-8 lg:p-12">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                          <span className="text-primary">{study.industry}</span>
                          <span>•</span>
                          <span>{study.location}</span>
                        </div>
                        <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
                          {study.client}
                        </h2>
                        
                        <div className="space-y-4 mb-6">
                          <div>
                            <h3 className="text-sm font-semibold text-foreground mb-1">Challenge</h3>
                            <p className="text-muted-foreground text-sm">{study.challenge}</p>
                          </div>
                          <div>
                            <h3 className="text-sm font-semibold text-foreground mb-1">Solution</h3>
                            <p className="text-muted-foreground text-sm">{study.solution}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {study.results.map((result) => (
                            <div key={result.metric} className="text-center p-3 rounded-lg bg-primary/10">
                              <div className="font-display text-xl font-bold text-primary">{result.value}</div>
                              <div className="text-xs text-muted-foreground">{result.metric}</div>
                            </div>
                          ))}
                        </div>

                        <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground">
                          "{study.testimonial}"
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="section-padding">
            <div className="container-narrow text-center">
              <ScrollReveal animation="scale">
                <div className="glass rounded-3xl p-12 glow">
                  <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                    Want Results Like These?
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                    Let's discuss how we can achieve similar or better results for your business.
                  </p>
                  <Button asChild size="lg" className="glow group">
                    <Link to="/contact">
                      Start Your Success Story
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

export default CaseStudiesPage;
