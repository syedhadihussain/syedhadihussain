import { 
  MapPin, 
  Search, 
  Star, 
  FileText, 
  Zap, 
  BarChart3,
  Building2,
  Link2,
  LucideIcon
} from "lucide-react";
import { StateDetailData } from "@/lib/states-config";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { getStatePageCopy } from "@/lib/state-page-copy";

interface StateServicesProps {
  state: StateDetailData;
  countryName?: string;
}

const iconMap: LucideIcon[] = [MapPin, Search, Star, FileText, Building2, Link2];

const StateServices = ({ state, countryName }: StateServicesProps) => {
  const copy = getStatePageCopy(state, countryName);

  return (
    <section id="services" className="py-20 bg-background" aria-labelledby="services-heading">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              What I Offer
            </span>
            <h2 id="services-heading" className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
              {copy.servicesTitle}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {copy.servicesSubtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* Services Intro */}
        <ScrollReveal delay={0.1}>
          <div className="mb-12 max-w-3xl mx-auto">
            <p className="text-muted-foreground text-center leading-relaxed">
              {copy.servicesIntro}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {copy.serviceItems.map((service, index) => {
            const Icon = iconMap[index % iconMap.length];
            return (
              <ScrollReveal key={service.title} delay={index * 0.1}>
                <article className="group bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StateServices;
