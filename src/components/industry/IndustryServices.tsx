import { CheckCircle, Target, TrendingUp, Users, Star, Search, MapPin, Globe } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { IndustryData } from "@/lib/industries-config";

interface IndustryServicesProps {
  industry: IndustryData;
}

const IndustryServices = ({ industry }: IndustryServicesProps) => {
  const { t } = useLanguage();

  const serviceIcons = [Target, TrendingUp, Users, Star, Search, MapPin, Globe, CheckCircle];

  return (
    <section className="section-padding bg-card/50">
      <div className="container-narrow">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Our Services
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Local SEO Solutions for {industry.name}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive Local SEO strategies tailored specifically for {industry.name.toLowerCase()} businesses
            </p>
          </div>
        </ScrollReveal>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {industry.uniqueFeatures.map((feature, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            return (
              <ScrollReveal key={index} animation="fade-up" delay={index * 50}>
                <div className="glass rounded-2xl p-6 h-full hover:bg-primary/5 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {feature}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Specialized optimization for {industry.name.toLowerCase()} to increase visibility and drive more customers.
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Pain Points & Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pain Points */}
          <ScrollReveal animation="fade-up">
            <div className="glass rounded-2xl p-8">
              <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="text-2xl">😰</span>
                Common Challenges for {industry.name}
              </h3>
              <ul className="space-y-4">
                {industry.painPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-destructive text-sm">✗</span>
                    </span>
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Solutions */}
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="glass rounded-2xl p-8 border-primary/20">
              <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="text-2xl">🚀</span>
                Our Solutions
              </h3>
              <ul className="space-y-4">
                {industry.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </span>
                    <span className="text-foreground">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default IndustryServices;
