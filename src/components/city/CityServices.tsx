import { MapPin, Search, Star, TrendingUp, Bot, Globe, Building2, MessageSquare, DollarSign, Users } from "lucide-react";
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
      title: `Google Maps Domination for ${city.name}`,
      description: `Your ${city.name} customers search Google Maps first. I'll get you into the coveted top 3 "Map Pack" results where 93% of local clicks happen. More visibility = more walk-ins and calls.`,
    },
    {
      icon: Bot,
      title: `AI Search Optimization`,
      description: `ChatGPT and AI assistants are the NEW search. I ensure your ${city.name} business gets recommended when customers ask AI "best [service] near me." Stay ahead of competitors still stuck in 2020.`,
    },
    {
      icon: Building2,
      title: `${city.stateAbbreviation} Citation Authority`,
      description: `I build your ${city.name} presence across 100+ authoritative directories. Consistent NAP data across the web tells Google you're THE trusted local business. Watch your rankings climb.`,
    },
    {
      icon: Star,
      title: `5-Star Review Machine`,
      description: `Reviews drive decisions. I implement proven systems that turn your happy ${city.name} customers into enthusiastic reviewers. More 5-star reviews = more trust = more customers.`,
    },
    {
      icon: Search,
      title: `High-Intent ${city.name} Keywords`,
      description: `I find the exact search terms your ${city.name} customers use when they're ready to buy. No vanity keywords – just terms that put cash in your register.`,
    },
    {
      icon: TrendingUp,
      title: `Competitor Destruction Strategy`,
      description: `I analyze exactly what's working for your ${city.name} competitors, then build a strategy to outrank them. Why let them steal YOUR customers?`,
    },
    {
      icon: Globe,
      title: `Local Authority Link Building`,
      description: `Earn powerful backlinks from ${city.name} and ${city.stateAbbreviation} sources that Google trusts. Local links = local relevance = higher rankings for every ${city.name} search.`,
    },
    {
      icon: MessageSquare,
      title: `Voice Search Capture`,
      description: `"Hey Siri, find a [your service] in ${city.name}." I optimize your content so you're THE answer to voice searches. 50%+ of searches are voice – don't miss these customers.`,
    },
  ];

  return (
    <section className="section-padding bg-muted/30" aria-labelledby="city-services-heading">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Local SEO Services in {city.name}
            </span>
            <h2 id="city-services-heading" className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Complete Local SEO Solutions That Put {city.name} Customers at Your Door
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Stop watching competitors take YOUR customers. I deliver full-spectrum local SEO for {city.name}, {city.stateAbbreviation} businesses – 
              from Google Maps mastery to AI search domination. Every strategy is designed for one thing: <strong>more customers, more revenue</strong>.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1}>
              <div className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
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
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              Local SEO for {city.name} Industries I've Mastered
            </h3>
            <p className="text-muted-foreground mb-6">
              Whatever your business, I've helped similar {city.name} companies dominate local search:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {city.industries.map((industry, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-primary/10 text-primary text-sm rounded-full border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                >
                  {industry}
                </span>
              ))}
              <span className="px-4 py-2 bg-muted text-muted-foreground text-sm rounded-full border border-border font-medium">
                + 46 More {city.name} Industries
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CityServices;
