import { memo, useMemo } from "react";
import { 
  MapPin, 
  Globe, 
  Search, 
  FileText, 
  Code, 
  BarChart3, 
  Map, 
  Wrench, 
  Link, 
  LineChart, 
  FolderKanban, 
  MessageSquare, 
  Sparkles 
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = memo(() => {
  const { t } = useLanguage();

  const services = [
    { icon: MapPin, title: t("services.localSeo"), description: t("services.localSeoDesc") },
    { icon: Globe, title: t("services.gbp"), description: t("services.gbpDesc") },
    { icon: Map, title: t("services.mapSeo"), description: t("services.mapSeoDesc") },
    { icon: Search, title: t("services.keywordResearch"), description: t("services.keywordResearchDesc") },
    { icon: FileText, title: t("services.onPage"), description: t("services.onPageDesc") },
    { icon: Wrench, title: t("services.technical"), description: t("services.technicalDesc") },
    { icon: Code, title: t("services.content"), description: t("services.contentDesc") },
    { icon: Link, title: t("services.linkBuilding"), description: t("services.linkBuildingDesc") },
    { icon: LineChart, title: t("services.analytics"), description: t("services.analyticsDesc") },
    { icon: FolderKanban, title: t("services.projectMgmt"), description: t("services.projectMgmtDesc") },
    { icon: MessageSquare, title: t("services.clientComm"), description: t("services.clientCommDesc") },
    { icon: Sparkles, title: t("services.aiSeo"), description: t("services.aiSeoDesc") },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-narrow">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              {t("services.badge")}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {t("services.heading")}
            </h2>
            <p className="text-muted-foreground">
              {t("services.description")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={index} animation="scale" delay={index * 100}>
              <div className="group glass rounded-2xl p-6 hover:glow-sm transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
});

Services.displayName = "Services";

export default Services;
