import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import SEOHead from "@/components/SEOHead";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, ArrowRight, MapPin, CheckCircle } from "lucide-react";

const caseStudies = [
  {
    client: "Moe's iRepair",
    industry: "Phone Repair",
    location: "Duncanville, Texas, USA",
    challenge: "New phone repair business with zero online presence competing against established shops with years of reviews and local authority.",
    solution: "Comprehensive local SEO strategy including GBP optimization, aggressive citation building across 150+ directories, review generation campaign, and location-specific landing pages.",
    results: [
      { metric: "GBP Interactions", value: "5,187", description: "monthly profile interactions" },
      { metric: "Website Clicks", value: "495", description: "from Google Business Profile" },
      { metric: "Reviews", value: "1,300+", description: "5-star verified reviews" },
      { metric: "Ranking", value: "#1", description: "for all target keywords" }
    ],
    testimonial: "Hadi took our business from invisible to #1 in Google Maps. We now get more calls than we can handle!",
    features: ["GBP Optimization", "Citation Building", "Review Management", "Local Content Strategy"]
  },
  {
    client: "Neighborhood Pizza & Pasta House",
    industry: "Restaurant",
    location: "Wilbraham, MA, USA",
    challenge: "Popular local restaurant was missing out on thousands of potential customers due to poor Google visibility despite excellent food and service.",
    solution: "GBP optimization with menu integration, restaurant schema markup, high-volume keyword targeting, and professional photo strategy.",
    results: [
      { metric: "Profile Views", value: "36,164", description: "in target period" },
      { metric: "Search Appearances", value: "20,909", description: "for restaurant searches" },
      { metric: "Map Position", value: "Top 3", description: "for competitive keywords" },
      { metric: "Revenue Increase", value: "+200%", description: "from Google customers" }
    ],
    testimonial: "We went from page 3 to the top 3 map pack results. Reservations from Google have more than doubled!",
    features: ["Menu Schema", "Photo Optimization", "Local Keywords", "Review Strategy"]
  },
  {
    client: "Artful Orthodontics",
    industry: "Healthcare / Dental",
    location: "Winter Garden, FL, USA",
    challenge: "Low visibility in local search results for dental services, minimal online presence despite quality patient care.",
    solution: "Complete GBP optimization, local content strategy targeting dental keywords, citation building in healthcare directories.",
    results: [
      { metric: "Organic Traffic", value: "+320%", description: "increase in 6 months" },
      { metric: "Map Pack Rankings", value: "Top 3", description: "for 15+ keywords" },
      { metric: "Monthly Leads", value: "+180%", description: "from Google Search" },
      { metric: "Patient Inquiries", value: "3x", description: "increase in new patients" }
    ],
    testimonial: "Hadi transformed our online presence. We went from invisible to dominating local search for dental services.",
    features: ["Healthcare SEO", "GBP Management", "Citation Building", "Content Strategy"]
  },
  {
    client: "Elite Plumbing Solutions",
    industry: "Home Services",
    location: "London, UK",
    challenge: "Competing against established competitors with stronger online presence and more reviews in the plumbing niche.",
    solution: "Aggressive local SEO campaign, review generation with automated follow-up, technical website optimization.",
    results: [
      { metric: "Google Calls", value: "+250%", description: "direct from GBP" },
      { metric: "Website Traffic", value: "+400%", description: "organic growth" },
      { metric: "Revenue", value: "+85%", description: "year over year" },
      { metric: "Lead Quality", value: "2x", description: "better conversion rate" }
    ],
    testimonial: "The ROI has been incredible. Every pound spent on SEO has returned tenfold. Highly recommend Hadi!",
    features: ["Service Area SEO", "Review Generation", "Technical SEO", "Lead Tracking"]
  },
  {
    client: "Gourmet Kitchen Design",
    industry: "Interior Design",
    location: "Dubai, UAE",
    challenge: "Breaking into a competitive luxury market in Dubai with established players dominating search results.",
    solution: "Premium content strategy targeting luxury keywords, high-authority backlink building, comprehensive GBP optimization.",
    results: [
      { metric: "Brand Searches", value: "+500%", description: "in 8 months" },
      { metric: "Lead Quality", value: "3x", description: "higher conversion rate" },
      { metric: "Market Position", value: "Top 5", description: "in Dubai region" },
      { metric: "Avg Project Value", value: "+60%", description: "increase in client budget" }
    ],
    testimonial: "We're now considered one of the top kitchen design firms in Dubai thanks to our improved online presence.",
    features: ["Luxury Market SEO", "Content Marketing", "Link Building", "Brand Building"]
  },
  {
    client: "24/7 Emergency Locksmith",
    industry: "Emergency Services",
    location: "Los Angeles, USA",
    challenge: "Emergency locksmith business needed to capture high-intent searches from people locked out at all hours.",
    solution: "Optimized for emergency and 24/7 keywords, fast-loading mobile site, call tracking implementation, service area expansion.",
    results: [
      { metric: "Emergency Calls", value: "+300%", description: "from Google Search" },
      { metric: "Response Time", value: "Top 3", description: "for 'locksmith near me'" },
      { metric: "Service Areas", value: "15+", description: "cities covered" },
      { metric: "Monthly Revenue", value: "+120%", description: "growth achieved" }
    ],
    testimonial: "Our phone rings constantly now. Hadi understood the urgency of our business and optimized accordingly.",
    features: ["Emergency Keywords", "Mobile Optimization", "Call Tracking", "Multi-Location SEO"]
  },
  {
    client: "Sunrise Medical Spa",
    industry: "Beauty & Wellness",
    location: "Miami, USA",
    challenge: "New medical spa in competitive Miami market needed to establish authority and attract high-value clients.",
    solution: "Premium positioning strategy, service-specific landing pages, review generation for trust building, before/after gallery optimization.",
    results: [
      { metric: "Appointments", value: "+400%", description: "online bookings" },
      { metric: "Treatment Pages", value: "15+", description: "ranking on page 1" },
      { metric: "Reviews", value: "200+", description: "5-star reviews" },
      { metric: "Revenue", value: "+180%", description: "in first year" }
    ],
    testimonial: "Hadi's SEO strategy helped us become one of the top-rated med spas in Miami. Outstanding results!",
    features: ["Med Spa SEO", "Service Pages", "Review Strategy", "Local Authority"]
  },
  {
    client: "Premium Auto Detailing",
    industry: "Automotive Services",
    location: "Phoenix, USA",
    challenge: "Auto detailing business in saturated market needed to stand out and attract luxury car owners.",
    solution: "Niche keyword targeting for luxury vehicles, portfolio gallery optimization, GBP posts showcasing work quality.",
    results: [
      { metric: "Luxury Car Clients", value: "+250%", description: "increase in bookings" },
      { metric: "Average Ticket", value: "+75%", description: "higher service value" },
      { metric: "Google Maps", value: "#1", description: "for premium detailing" },
      { metric: "Repeat Customers", value: "60%", description: "return rate" }
    ],
    testimonial: "We now attract exactly the type of clients we want - luxury car owners who value quality work.",
    features: ["Niche Targeting", "Portfolio SEO", "GBP Optimization", "Premium Positioning"]
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
          <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
            <div className="container-narrow text-center">
              <ScrollReveal animation="fade-up">
                <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                  Case Studies
                </span>
                <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Real Results for Real Businesses
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                  Discover how strategic Local SEO has transformed businesses across different industries and regions. Every case study shows real, measurable results.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <div className="text-center">
                    <div className="font-display text-3xl font-bold text-primary">100+</div>
                    <div className="text-sm text-muted-foreground">Clients Served</div>
                  </div>
                  <div className="text-center">
                    <div className="font-display text-3xl font-bold text-primary">15+</div>
                    <div className="text-sm text-muted-foreground">Industries</div>
                  </div>
                  <div className="text-center">
                    <div className="font-display text-3xl font-bold text-primary">95%</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* Case Studies */}
          <section className="section-padding">
            <div className="container-narrow space-y-12">
              {caseStudies.map((study, index) => (
                <ScrollReveal key={study.client} animation="fade-up" delay={index * 50}>
                  <div className="glass rounded-3xl overflow-hidden hover:glow-sm transition-all duration-300">
                    <div className="p-6 lg:p-8">
                      {/* Header */}
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                          {study.industry}
                        </span>
                        <span className="flex items-center gap-1 text-muted-foreground text-sm">
                          <MapPin className="w-4 h-4" />
                          {study.location}
                        </span>
                      </div>
                      
                      <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-6">
                        {study.client}
                      </h2>
                      
                      {/* Challenge & Solution */}
                      <div className="grid lg:grid-cols-2 gap-6 mb-8">
                        <div className="bg-secondary/30 rounded-xl p-5">
                          <h3 className="text-sm font-semibold text-foreground mb-2">🎯 Challenge</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{study.challenge}</p>
                        </div>
                        <div className="bg-primary/5 rounded-xl p-5">
                          <h3 className="text-sm font-semibold text-foreground mb-2">💡 Solution</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{study.solution}</p>
                        </div>
                      </div>

                      {/* Results */}
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {study.results.map((result) => (
                          <div key={result.metric} className="text-center p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                            <div className="font-display text-2xl font-bold text-primary">{result.value}</div>
                            <div className="text-xs font-medium text-foreground">{result.metric}</div>
                            <div className="text-xs text-muted-foreground mt-1">{result.description}</div>
                          </div>
                        ))}
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {study.features.map((feature) => (
                          <span key={feature} className="flex items-center gap-1 px-3 py-1.5 bg-secondary/50 rounded-full text-xs text-muted-foreground">
                            <CheckCircle className="w-3 h-3 text-primary" />
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Testimonial */}
                      <blockquote className="border-l-4 border-primary pl-4 py-2 italic text-muted-foreground bg-secondary/20 rounded-r-lg">
                        "{study.testimonial}"
                      </blockquote>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="section-padding bg-card/50">
            <div className="container-narrow text-center">
              <ScrollReveal animation="scale">
                <div className="glass rounded-3xl p-8 lg:p-12 glow">
                  <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                    Want Results Like These?
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                    Let's discuss how we can achieve similar or better results for your business. Get a professional SEO audit for just <span className="text-primary font-semibold">$50</span> (50% OFF if you book within 24 hours!)
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="glow group">
                      <a href="https://calendly.com/syedhadihussain" target="_blank" rel="noopener noreferrer">
                        Get SEO Audit — $50
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link to="/contact">
                        Start Your Success Story
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

export default CaseStudiesPage;
