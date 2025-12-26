import { 
  CheckCircle, 
  Clock, 
  Users, 
  TrendingUp, 
  Shield, 
  Headphones 
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { StateDetailData } from "@/lib/states-config";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface StateWhyChooseProps {
  state: StateDetailData;
}

const StateWhyChoose = ({ state }: StateWhyChooseProps) => {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: TrendingUp,
      titleKey: "state.why1Title",
      descKey: "state.why1Desc"
    },
    {
      icon: Users,
      titleKey: "state.why2Title",
      descKey: "state.why2Desc"
    },
    {
      icon: Clock,
      titleKey: "state.why3Title",
      descKey: "state.why3Desc"
    },
    {
      icon: Shield,
      titleKey: "state.why4Title",
      descKey: "state.why4Desc"
    },
    {
      icon: Headphones,
      titleKey: "state.why5Title",
      descKey: "state.why5Desc"
    },
    {
      icon: CheckCircle,
      titleKey: "state.why6Title",
      descKey: "state.why6Desc"
    }
  ];

  return (
    <section className="py-20 bg-muted/30" aria-labelledby="why-choose-heading">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              {t("state.whyChooseLabel")}
            </span>
            <h2 id="why-choose-heading" className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
              {t("state.whyChooseHeading").replace("{state}", state.name)}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("state.whyChooseDescription").replace("{state}", state.name)}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <ScrollReveal key={reason.titleKey} delay={index * 0.1}>
              <div className="flex gap-4 p-6 bg-background rounded-xl border border-border hover:border-primary/30 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <reason.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {t(reason.titleKey)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(reason.descKey).replace("{state}", state.name)}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StateWhyChoose;
