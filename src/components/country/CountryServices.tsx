import { Search, MapPin, Star, TrendingUp, Globe, Cpu, FileText, BarChart3 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { CountryData } from "@/lib/countries-config";
import { getCountryPageCopy } from "@/lib/country-page-copy";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface CountryServicesProps {
  country: CountryData;
}

const CountryServices = ({ country }: CountryServicesProps) => {
  const { t } = useLanguage();
  const copy = getCountryPageCopy(country);

  const services = [
    {
      icon: Search,
      title: t("country.service.localSeo"),
      description: t("country.service.localSeoDesc").replace("{country}", country.name)
    },
    {
      icon: MapPin,
      title: t("country.service.gbp"),
      description: t("country.service.gbpDesc").replace("{country}", country.name)
    },
    {
      icon: Globe,
      title: t("country.service.mapSeo"),
      description: t("country.service.mapSeoDesc")
    },
    {
      icon: Cpu,
      title: t("country.service.aiSeo"),
      description: t("country.service.aiSeoDesc")
    },
    {
      icon: Star,
      title: t("country.service.reputation"),
      description: t("country.service.reputationDesc")
    },
    {
      icon: TrendingUp,
      title: t("country.service.localRankings"),
      description: t("country.service.localRankingsDesc").replace("{country}", country.name)
    },
    {
      icon: FileText,
      title: t("country.service.localContent"),
      description: t("country.service.localContentDesc").replace("{country}", country.name)
    },
    {
      icon: BarChart3,
      title: t("country.service.analytics"),
      description: t("country.service.analyticsDesc")
    }
  ];

  return (
    <section className="py-20 bg-muted/30" id="services" aria-labelledby="services-heading">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              {t("country.ourServices")}
            </span>
            <h2 id="services-heading" className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
              {t(copy.servicesTitle)}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t(copy.servicesSubtitle)}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <div className="glass p-6 rounded-xl hover:shadow-lg transition-all duration-300 group h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-display text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h2>
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
};

export default CountryServices;
