import { MapPin, Search, Star, TrendingUp, Bot, Globe, Building2, MessageSquare } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { CityDetailData } from "@/lib/cities-config";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface CityServicesProps {
  city: CityDetailData;
}

const CityServices = ({ city }: CityServicesProps) => {
  const { language } = useLanguage();

  const services = [
    {
      icon: MapPin,
      title: `Google Maps Optimization`,
      description: `Dominate the ${city.name} map pack. I optimize your Google Business Profile to appear prominently when ${city.name} customers search for your services locally.`,
    },
    {
      icon: Bot,
      title: `AI Search Readiness`,
      description: `Prepare your ${city.name} business for the AI revolution. I ensure ChatGPT, Gemini, and other AI assistants recommend your business to ${city.name} searchers.`,
    },
    {
      icon: Building2,
      title: `Local Citation Building`,
      description: `Build authoritative citations across ${city.name} and ${city.stateName} directories. Consistent NAP (Name, Address, Phone) data boosts your local search credibility.`,
    },
    {
      icon: Star,
      title: `Review Generation Strategy`,
      description: `Grow your ${city.name} reputation with authentic 5-star reviews. I implement proven strategies that encourage happy customers to share their experiences.`,
    },
    {
      icon: Search,
      title: `Local Keyword Targeting`,
      description: `Capture high-intent ${city.name} searches. I identify and target the exact keywords your ${city.name} customers use when looking for businesses like yours.`,
    },
    {
      icon: TrendingUp,
      title: `Competitor Analysis`,
      description: `Outrank your ${city.name} competitors strategically. I analyze what's working for top-ranking ${city.name} businesses and develop strategies to surpass them.`,
    },
    {
      icon: Globe,
      title: `Local Link Building`,
      description: `Earn authoritative backlinks from ${city.name} and ${city.stateAbbreviation} sources. Local links signal relevance to search engines and boost your ${city.name} rankings.`,
    },
    {
      icon: MessageSquare,
      title: `Voice Search Optimization`,
      description: `Be the answer to "${city.name}" voice searches. I optimize your content for natural language queries used with Siri, Alexa, and Google Assistant.`,
    },
  ];

  return (
    <section className="section-padding bg-muted/30" aria-labelledby="city-services-heading">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              {city.name} SEO Services
            </span>
            <h2 id="city-services-heading" className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Comprehensive Local SEO for {city.name} Businesses
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From Google Maps dominance to AI search readiness, I provide {city.name}, {city.stateAbbreviation} businesses 
              with everything needed to capture more local customers and outperform competitors.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1}>
              <div className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Industries Served */}
        <ScrollReveal delay={0.4}>
          <div className="mt-16 text-center">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">
              Industries I Serve in {city.name}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {city.industries.map((industry, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                >
                  {industry}
                </span>
              ))}
              <span className="px-4 py-2 bg-muted text-muted-foreground text-sm rounded-full border border-border">
                + 46 More Industries
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CityServices;
