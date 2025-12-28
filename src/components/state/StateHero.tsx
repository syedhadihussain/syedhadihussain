import { MapPin, Star, TrendingUp, Award, ArrowRight, Eye, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { StateDetailData } from "@/lib/states-config";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { getCountryData } from "@/lib/countries-config";
import profilePhoto from "@/assets/profile-photo.png";

interface StateHeroProps {
  state: StateDetailData;
  countryCode: string;
}

const StateHero = ({ state, countryCode }: StateHeroProps) => {
  const { t, language } = useLanguage();
  
  // Get country name for breadcrumb
  const country = getCountryData(countryCode);
  const countryName = country?.name || "Country";

  // Get first 4 cities for dynamic content (avoid duplication across states)
  const city1 = state.cities[0]?.name || "City 1";
  const city2 = state.cities[1]?.name || "City 2";
  const city3 = state.cities[2]?.name || "City 3";
  const city4 = state.cities[3]?.name || "City 4";

  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
      aria-labelledby="state-hero-heading"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
      </div>

      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 space-y-6">
            <ScrollReveal>
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
                {t("state.heroDescription")
                  .replace("{state}", state.name)
                  .replace("{count}", String(state.cities.length))
                  .replace("{city1}", city1)
                  .replace("{city2}", city2)
                  .replace("{city3}", city3)
                  .replace("{city4}", city4)}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="glow group">
                  <Link to={`/${language}/case-studies`}>
                    <Eye className="w-4 h-4 mr-2" />
                    View Portfolio
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <a href="https://calendly.com/syedhadihussain" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Book Consultation
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

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-2xl scale-110" />
              <figure className="relative gradient-border rounded-2xl overflow-hidden">
                <img
                  src={profilePhoto}
                  alt={`Local SEO Specialist serving businesses in ${state.name} - Syed Hadi Hussain`}
                  className="w-full max-w-md rounded-2xl object-cover"
                  loading="eager"
                  fetchPriority="high"
                  width="400"
                  height="500"
                />
              </figure>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 glass rounded-xl p-4 glow-sm animate-fade-up" style={{ animationDelay: "0.6s" }}>
                <div className="text-sm font-medium text-foreground">{t("country.localExpert")}</div>
                <div className="text-xs text-muted-foreground">{state.name} {t("country.specialist")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StateHero;
