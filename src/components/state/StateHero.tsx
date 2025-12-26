import { MapPin, Star, TrendingUp, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { StateDetailData } from "@/lib/states-config";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface StateHeroProps {
  state: StateDetailData;
  countryCode: string;
}

const StateHero = ({ state, countryCode }: StateHeroProps) => {
  const { t, language } = useLanguage();

  return (
    <section 
      className="relative min-h-[90vh] flex items-center overflow-hidden pt-20"
      aria-labelledby="state-hero-heading"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <ScrollReveal>
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Link to={`/${language}/`} className="hover:text-primary transition-colors">
                  {t("nav.home")}
                </Link>
                <span>/</span>
                <Link to={`/${language}/${countryCode}/`} className="hover:text-primary transition-colors">
                  {t("state.unitedStates")}
                </Link>
                <span>/</span>
                <span className="text-foreground font-medium">{state.name}</span>
              </nav>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  {t("state.servingCities").replace("{count}", String(state.cities.length)).replace("{state}", state.name)}
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 id="state-hero-heading" className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {t("state.heroTitle").replace("{state}", state.name)}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                {t("state.heroDescription").replace("{state}", state.name).replace("{count}", String(state.cities.length))}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="group">
                  <a href="#contact">
                    {t("state.getFreeAudit")}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#services">
                    {t("state.viewServices")}
                  </a>
                </Button>
              </div>
            </ScrollReveal>

            {/* Trust Indicators */}
            <ScrollReveal delay={0.4}>
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-primary mb-1">
                    <Star className="w-4 h-4 fill-primary" />
                    <span className="font-bold text-xl text-foreground">7+</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{t("state.yearsExperience")}</span>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-primary mb-1">
                    <TrendingUp className="w-4 h-4" />
                    <span className="font-bold text-xl text-foreground">150%+</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{t("state.avgGrowth")}</span>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-primary mb-1">
                    <Award className="w-4 h-4" />
                    <span className="font-bold text-xl text-foreground">50+</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{t("state.citiesServed")}</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Map Embed */}
          <ScrollReveal delay={0.2}>
            <div className="relative">
              <div className="relative bg-card rounded-2xl overflow-hidden shadow-2xl border border-border">
                <iframe
                  src={state.mapEmbed}
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${state.name} - Local SEO Service Area`}
                  className="w-full"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default StateHero;
