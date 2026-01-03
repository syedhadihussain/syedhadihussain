import { CheckCircle, Award, Clock, Users, TrendingUp, Shield, Target, DollarSign, LucideIcon } from "lucide-react";
import { CityDetailData } from "@/lib/cities-config";
import { StateDetailData } from "@/lib/states-config";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { getCityPageCopy } from "@/lib/city-page-copy";

interface CityWhyChooseProps {
  city: CityDetailData;
  state?: StateDetailData;
}

const iconMap: LucideIcon[] = [Target, TrendingUp, Users, Shield, CheckCircle, Award];

const CityWhyChoose = ({ city, state }: CityWhyChooseProps) => {
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
    <section className="section-padding" aria-labelledby="city-why-choose-heading">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Why Business Owners in {city.name} Choose Me
            </span>
            <h2 id="city-why-choose-heading" className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              {copy.whyChooseTitle}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {copy.whyChooseDescription}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {copy.whyChooseItems.map((reason, index) => {
            const Icon = iconMap[index % iconMap.length];
            return (
              <ScrollReveal key={reason.title} delay={index * 0.1}>
                <article className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                    <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Process Section */}
        <ScrollReveal delay={0.4}>
          <div className="mt-16">
            <div className="text-center mb-10">
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                {copy.processTitle}
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {copy.processDescription}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {copy.processSteps.map((step, index) => (
                <div 
                  key={step.title}
                  className="relative p-5 bg-muted/50 rounded-lg border border-border"
                >
                  <div className="absolute -top-3 left-5 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">
                    Step {index + 1}
                  </div>
                  <h4 className="font-display font-semibold text-foreground mt-2 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* CTA Section */}
        <ScrollReveal delay={0.5}>
          <div className="mt-16 text-center p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              {copy.ctaTitle}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto text-lg">
              {copy.ctaDescription}
            </p>
            <a 
              href="https://calendly.com/syedhadihussain" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors text-lg glow"
            >
              Schedule Your Free Strategy Call
            </a>
            <p className="text-xs text-muted-foreground mt-4">
              No obligation. Just actionable insights for your {city.name} business.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CityWhyChoose;
