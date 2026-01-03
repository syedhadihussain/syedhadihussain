import { 
  CheckCircle, 
  Clock, 
  Users, 
  TrendingUp, 
  Shield, 
  Headphones,
  LucideIcon
} from "lucide-react";
import { StateDetailData } from "@/lib/states-config";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { getStatePageCopy } from "@/lib/state-page-copy";

interface StateWhyChooseProps {
  state: StateDetailData;
  countryName?: string;
}

const iconMap: LucideIcon[] = [TrendingUp, Shield, Users, CheckCircle, Headphones, Clock];

const StateWhyChoose = ({ state, countryName }: StateWhyChooseProps) => {
  const copy = getStatePageCopy(state, countryName);

  return (
    <section className="py-20 bg-muted/30" aria-labelledby="why-choose-heading">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Why Choose Me
            </span>
            <h2 id="why-choose-heading" className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
              {copy.whyChooseTitle}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {copy.whyChooseDescription}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {copy.whyChooseItems.map((reason, index) => {
            const Icon = iconMap[index % iconMap.length];
            return (
              <ScrollReveal key={reason.title} delay={index * 0.1}>
                <article className="flex gap-4 p-6 bg-background rounded-xl border border-border hover:border-primary/30 transition-colors h-full">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
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
                  className="relative p-5 bg-card rounded-lg border border-border"
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
      </div>
    </section>
  );
};

export default StateWhyChoose;
