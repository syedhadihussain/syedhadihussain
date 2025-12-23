import { ArrowUpRight, MapPin, TrendingUp, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    client: "Jewelry Repair of Atlanta",
    industry: "Jewelry Repair Services",
    location: "Atlanta, GA",
    challenge: "Low visibility for 'jewelry repair near me' searches",
    solution: "Optimized Google Business Profile, service pages, and local keywords",
    results: [
      { metric: "150%", label: "Increase in Local Impressions" },
      { metric: "Top 3", label: "'Near Me' Rankings" },
      { metric: "Daily", label: "Inbound Calls from Maps" },
    ],
  },
  {
    client: "Watkins Bail Bonds Vista",
    industry: "Bail Bonds Services",
    location: "Vista, CA",
    challenge: "Low ranking for bail bond services in Vista, CA",
    solution: "Optimized GBP, local citations, and targeted local keywords",
    results: [
      { metric: "180%", label: "Increase in Local Searches" },
      { metric: "Top 3", label: "'Bail Bonds Near Me' Queries" },
      { metric: "Immediate", label: "Inquiries Through Maps" },
    ],
  },
  {
    client: "Moe's iRepair Texas",
    industry: "Device Repair (Multi-Location)",
    location: "Texas",
    challenge: "Four locations across Texas with scattered online presence",
    solution: "Unified local SEO strategy, optimized each GBP, local content, and map listings",
    results: [
      { metric: "200%", label: "Increase in Local Visibility" },
      { metric: "Top 5", label: "Rankings Across All Locations" },
      { metric: "Daily", label: "Calls and Walk-ins from Maps" },
    ],
  },
  {
    client: "Tribeca Salon",
    industry: "Salon & Beauty",
    location: "South Tampa, FL",
    challenge: "Low bookings from local searches",
    solution: "Optimized Google Business Profile, service listings, and location keywords",
    results: [
      { metric: "160%", label: "Increase in Map Impressions" },
      { metric: "Top 3", label: "Local Rankings" },
      { metric: "Surge", label: "In Daily Appointments" },
    ],
  },
  {
    client: "Artful Orthodontics",
    industry: "Orthodontic Services",
    location: "Winter Garden, FL",
    challenge: "Low visibility for orthodontic services in Winter Garden, FL",
    solution: "Optimized service pages, GBP, and local keywords",
    results: [
      { metric: "150%", label: "Increase in Local Impressions" },
      { metric: "Top 3", label: "'Near Me' Rankings" },
      { metric: "Consistent", label: "Inbound Patient Inquiries" },
    ],
  },
  {
    client: "Pickup Truck Rental UAE",
    industry: "Vehicle Rental (Full-Stack)",
    location: "United Arab Emirates",
    challenge: "Low online visibility and scattered lead sources",
    solution: "Managed website design, SEO, Google Local Service Ads, Meta ads, social media campaigns, and AI-assisted chatbots",
    results: [
      { metric: "250%", label: "Increase in Leads" },
      { metric: "Top 3", label: "Local & Service Rankings" },
      { metric: "Automated", label: "Daily Booking Conversions" },
    ],
    featured: true,
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="section-padding bg-card/50">
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Case Studies
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Real Results for Real Businesses
          </h2>
          <p className="text-muted-foreground">
            See how I've helped service businesses dominate their local markets and increase revenue through proven Local SEO strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`glass rounded-2xl p-6 hover:glow-sm transition-all duration-300 group relative ${
                study.featured ? 'md:col-span-2 lg:col-span-1 ring-1 ring-primary/30' : ''
              }`}
            >
              {study.featured && (
                <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Full-Stack Project
                </div>
              )}

              {/* Header */}
              <div className="flex items-start justify-between mb-5 pt-1">
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">
                    {study.client}
                  </h3>
                  <p className="text-xs text-primary font-medium">{study.industry}</p>
                  <div className="flex items-center gap-1 mt-1 text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    <span className="text-xs">{study.location}</span>
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-3 mb-5">
                <div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">Challenge</span>
                  <p className="text-foreground text-sm mt-1">{study.challenge}</p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">Solution</span>
                  <p className="text-foreground text-sm mt-1">{study.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div className="pt-5 border-t border-border">
                <span className="text-xs uppercase tracking-wider text-primary mb-3 block">Results</span>
                <div className="grid grid-cols-3 gap-3">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="text-center">
                      <div className="font-display text-base font-bold text-foreground">{result.metric}</div>
                      <div className="text-xs text-muted-foreground leading-tight">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <a href="#contact">
              Want Similar Results?
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
