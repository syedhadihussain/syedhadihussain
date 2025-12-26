import { 
  MapPin, 
  Search, 
  Star, 
  FileText, 
  Zap, 
  BarChart3 
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { StateDetailData } from "@/lib/states-config";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface StateServicesProps {
  state: StateDetailData;
}

const StateServices = ({ state }: StateServicesProps) => {
  const { t } = useLanguage();

  const services = [
    {
      icon: MapPin,
      titleKey: "state.service1Title",
      descKey: "state.service1Desc"
    },
    {
      icon: Search,
      titleKey: "state.service2Title",
      descKey: "state.service2Desc"
    },
    {
      icon: Star,
      titleKey: "state.service3Title",
      descKey: "state.service3Desc"
    },
    {
      icon: FileText,
      titleKey: "state.service4Title",
      descKey: "state.service4Desc"
    },
    {
      icon: Zap,
      titleKey: "state.service5Title",
      descKey: "state.service5Desc"
    },
    {
      icon: BarChart3,
      titleKey: "state.service6Title",
      descKey: "state.service6Desc"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background" aria-labelledby="services-heading">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              {t("state.whatIOffer")}
            </span>
            <h2 id="services-heading" className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
              {t("state.servicesHeading").replace("{state}", state.name)}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("state.servicesDescription").replace("{state}", state.name)}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.titleKey} delay={index * 0.1}>
              <div className="group bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-2">
                  {t(service.titleKey).replace("{state}", state.name)}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(service.descKey).replace("{state}", state.name)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StateServices;
