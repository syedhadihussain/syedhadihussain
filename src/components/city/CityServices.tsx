import { MapPin, Search, Star, TrendingUp, Bot, Globe, Building2, MessageSquare, LucideIcon } from "lucide-react";
import { CityDetailData } from "@/lib/cities-config";
import { StateDetailData } from "@/lib/states-config";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { getCityPageCopy } from "@/lib/city-page-copy";

interface CityServicesProps {
  city: CityDetailData;
  state?: StateDetailData;
}

const iconMap: LucideIcon[] = [MapPin, Building2, Star, Globe, Search, TrendingUp, Bot, MessageSquare];

const CityServices = ({ city, state }: CityServicesProps) => {
  // Create a minimal state object if not provided
  const stateData: StateDetailData = state || {
    name: city.stateName,
    code: city.stateAbbreviation?.toLowerCase() || "",
    fullName: city.stateName,
    abbreviation: city.stateAbbreviation || "",
    cities: [],
    activeCities: [],
    mapEmbed: "",
    timezone: "",
    tagline: "",
    description: "",
  };
  
  const copy = getCityPageCopy(city, stateData);

  return (
    <section className="section-padding bg-muted/30" aria-labelledby="city-services-heading">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Local SEO Services in {city.name}
            </span>
            <h2 id="city-services-heading" className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              {copy.servicesTitle}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {copy.servicesDescription}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {copy.serviceItems.map((service, index) => {
            const Icon = iconMap[index % iconMap.length];
            return (
              <ScrollReveal key={service.title} delay={index * 0.1}>
                <article className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                    <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Google Maps Section */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                {copy.mapsTitle}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {copy.mapsDescription}
              </p>
              <ul className="space-y-3">
                {copy.mapsPoints.slice(0, 4).map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                {copy.gbpTitle}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {copy.gbpDescription}
              </p>
              <ul className="space-y-3">
                {copy.gbpPoints.slice(0, 4).map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* Industries Served */}
        <ScrollReveal delay={0.4}>
          <div className="mt-16 text-center">
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              Industries I Serve in {city.name}
            </h3>
            <p className="text-muted-foreground mb-6">
              Whatever business you run in {city.name}, I have the local SEO expertise to help you get found.
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
                + 40 more industries
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CityServices;
