import { CheckCircle, Globe, Map, Cpu, Search, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { CountryData } from "@/lib/countries-config";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface CountryAuthorityProps {
  country: CountryData;
}

const CountryAuthority = ({ country }: CountryAuthorityProps) => {
  const { t } = useLanguage();

  const authorityPoints = [
    {
      icon: Globe,
      title: t("country.multiStateExpertise"),
      description: t("country.multiStateDesc").replace("{count}", String(country.statesCount || "all")).replace("{country}", country.name)
    },
    {
      icon: Map,
      title: t("country.mapOptimization"),
      description: t("country.mapOptimizationDesc")
    },
    {
      icon: Cpu,
      title: t("country.aiSearchReady"),
      description: t("country.aiSearchReadyDesc")
    },
    {
      icon: Search,
      title: t("country.localSearchDominance"),
      description: t("country.localSearchDominanceDesc").replace("{country}", country.name)
    }
  ];

  return (
    <section className="py-20 bg-muted/30" aria-labelledby="authority-heading">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              {t("country.whyChooseUs")}
            </span>
            <h2 id="authority-heading" className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
              {t("country.authorityTitle").replace("{country}", country.name)}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("country.authoritySubtitle").replace("{country}", country.name)}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {authorityPoints.map((point, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="glass p-6 rounded-xl hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <point.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Trust Indicators */}
        <ScrollReveal delay={0.4}>
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>{t("country.googlePartner")}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>{t("country.provenResults")}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>{t("country.transparentReporting")}</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CountryAuthority;
