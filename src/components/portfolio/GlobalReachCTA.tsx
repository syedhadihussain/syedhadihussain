import { memo, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Building2, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLanguage } from "@/contexts/LanguageContext";

const GlobalReachCTA = memo(() => {
  const { language } = useLanguage();

  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-secondary/10">
      <div className="container-narrow">
        <ScrollReveal animation="fade">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Worldwide Local SEO Excellence
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Dominate Local Search <span className="text-primary">Anywhere in the World</span>
            </h2>
            <p className="text-muted-foreground text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              From bustling cities to growing towns, we help businesses rank higher on Google Maps, 
              attract more customers, and outperform local competitors across every industry.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Areas We Serve Card */}
          <ScrollReveal animation="fade-up" delay={0.1}>
            <div className="glass rounded-2xl p-8 h-full flex flex-col hover:shadow-lg transition-shadow duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <div className="p-3 bg-primary/10 rounded-xl">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                50+ Countries Served
              </h3>
              
              <p className="text-muted-foreground mb-6 flex-grow">
                We deliver proven Local SEO strategies across the USA, UK, Canada, Australia, 
                UAE, and 45+ other countries. Find your location and see how we can help your 
                business dominate local search results.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {["🇺🇸 USA", "🇬🇧 UK", "🇨🇦 Canada", "🇦🇺 Australia", "🇦🇪 UAE"].map((country) => (
                  <span key={country} className="px-3 py-1 bg-secondary/50 rounded-full text-sm text-foreground">
                    {country}
                  </span>
                ))}
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm text-primary font-medium">
                  +45 more
                </span>
              </div>

              <Button asChild size="lg" className="w-full group-hover:bg-primary/90 transition-colors">
                <Link to={`/${language}/areas-we-serve`}>
                  Explore All Locations
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>

          {/* Industries We Serve Card */}
          <ScrollReveal animation="fade-up" delay={0.2}>
            <div className="glass rounded-2xl p-8 h-full flex flex-col hover:shadow-lg transition-shadow duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Users className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                100+ Industries Covered
              </h3>
              
              <p className="text-muted-foreground mb-6 flex-grow">
                Specialized Local SEO strategies tailored for your industry. Whether you're a 
                plumber, dentist, lawyer, restaurant, or real estate agent—we know exactly 
                how to get your business found by ready-to-buy customers.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {["Plumbers", "Dentists", "Lawyers", "Restaurants", "Real Estate"].map((industry) => (
                  <span key={industry} className="px-3 py-1 bg-secondary/50 rounded-full text-sm text-foreground">
                    {industry}
                  </span>
                ))}
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm text-primary font-medium">
                  +95 more
                </span>
              </div>

              <Button asChild size="lg" variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Link to={`/${language}/serving-industries`}>
                  Browse All Industries
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats Row */}
        <ScrollReveal animation="fade" delay={0.3}>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "50+", label: "Countries" },
              { value: "100+", label: "Industries" },
              { value: "500+", label: "Cities" },
              { value: "10K+", label: "Keywords Ranked" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
});

GlobalReachCTA.displayName = "GlobalReachCTA";

export default GlobalReachCTA;
