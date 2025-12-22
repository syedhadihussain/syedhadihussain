import { TrendingUp, Phone, Star, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    client: "Jewelry Repair of Atlanta",
    industry: "Jewelry Repair Services",
    challenge: "Low visibility for 'jewelry repair near me' searches",
    solution: "Optimized Google Business Profile, service pages, and local keywords",
    results: [
      { metric: "150%", label: "Increase in Local Impressions" },
      { metric: "Top 3", label: "Rankings for 'Near Me' Keywords" },
      { metric: "Daily", label: "Inbound Calls from Maps" },
    ],
  },
  {
    client: "Watkins Bail Bonds",
    industry: "Bail Bonds (San Diego & Vista)",
    challenge: "Highly competitive local bail bonds market",
    solution: "GMB optimization, service descriptions, reviews strategy, and local SEO",
    results: [
      { metric: "Top 3", label: "Google Maps Rankings" },
      { metric: "2x", label: "Emergency Call Volume" },
      { metric: "Strong", label: "Brand Trust & Visibility" },
    ],
  },
  {
    client: "Moe's iRepair",
    industry: "Device Repair (Texas)",
    challenge: "Needed rankings across multiple device repair services",
    solution: "Semantic SEO, service-based content, local area targeting",
    results: [
      { metric: "20+", label: "Repair Keywords Ranked" },
      { metric: "Higher", label: "Call Volume from Area" },
      { metric: "Better", label: "Website Conversions" },
    ],
  },
  {
    client: "Pickup Truck Rental Dubai",
    industry: "Vehicle Rental (UAE)",
    challenge: "New website with zero authority",
    solution: "Keyword strategy, homepage SEO, service pages, voice search optimization",
    results: [
      { metric: "Weeks", label: "To First Rankings" },
      { metric: "Visible", label: "For 'Pickup Rental Dubai'" },
      { metric: "Steady", label: "Organic Lead Growth" },
    ],
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
            See how I've helped service businesses dominate their local markets and increase revenue.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 lg:p-8 hover:glow-sm transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">
                    {study.client}
                  </h3>
                  <p className="text-sm text-primary">{study.industry}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <ArrowUpRight className="w-5 h-5 text-primary" />
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-4 mb-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">Challenge</span>
                  <p className="text-foreground mt-1">{study.challenge}</p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">Solution</span>
                  <p className="text-foreground mt-1">{study.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div className="pt-6 border-t border-border">
                <span className="text-xs uppercase tracking-wider text-primary mb-4 block">Results</span>
                <div className="grid grid-cols-3 gap-4">
                  {study.results.map((result, idx) => (
                    <div key={idx}>
                      <div className="font-display text-lg font-bold text-foreground">{result.metric}</div>
                      <div className="text-xs text-muted-foreground">{result.label}</div>
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