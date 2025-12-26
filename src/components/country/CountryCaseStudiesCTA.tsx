import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { CountryData } from "@/lib/countries-config";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface CountryCaseStudiesCTAProps {
  country: CountryData;
}

const CountryCaseStudiesCTA = ({ country }: CountryCaseStudiesCTAProps) => {
  const { t, language } = useLanguage();

  const results = [
    { label: t("country.cta.trafficIncrease"), value: "150%" },
    { label: t("country.cta.callsIncrease"), value: "3x" },
    { label: t("country.cta.topRankings"), value: "Top 3" }
  ];

  return (
    <section className="py-20 bg-primary/5 relative overflow-hidden" aria-labelledby="cta-heading">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />
      </div>

      <div className="container-narrow">
        <ScrollReveal>
          <div className="text-center mb-10">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              {t("country.cta.provenResults")}
            </span>
            <h2 id="cta-heading" className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
              {t("country.cta.title").replace("{country}", country.name)}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("country.cta.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        {/* Results Grid */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
            {results.map((result, index) => (
              <div key={index} className="text-center glass p-4 rounded-xl">
                <div className="font-display text-2xl sm:text-3xl font-bold text-primary">
                  {result.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {result.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Trust Points */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span>{t("country.cta.realClients")}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span>{t("country.cta.measurableResults")}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span>{t("country.cta.transparentProcess")}</span>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA Button */}
        <ScrollReveal delay={0.3}>
          <div className="text-center">
            <Button asChild size="lg" className="glow group">
              <Link to={`/${language}/case-studies`}>
                <TrendingUp className="w-5 h-5 mr-2" />
                {t("country.cta.viewCaseStudies").replace("{country}", country.name)}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CountryCaseStudiesCTA;
