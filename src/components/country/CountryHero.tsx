import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, MessageCircle, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import profilePhoto from "@/assets/profile-photo.png";
import { CountryData } from "@/lib/countries-config";
import { getCountryPageCopy } from "@/lib/country-page-copy";

interface CountryHeroProps {
  country: CountryData;
}

const CountryHero = ({ country }: CountryHeroProps) => {
  const { t, language } = useLanguage();
  const copy = getCountryPageCopy(country);

  return (
    <section 
      id="hero" 
      aria-label={`Local SEO Services in ${country.name}`}
      className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
      </div>

      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <span className="text-lg">{country.flag}</span>
              {t("country.servingIn")} {country.name}
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              {t(copy.heroTitlePrefix)}
              <span className="block text-primary">{country.name}</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-xl animate-fade-up" style={{ animationDelay: "0.3s" }}>
              {t(copy.heroDescription)}
            </p>
            
            <p className="text-base text-foreground/80 font-medium mb-8 max-w-xl animate-fade-up" style={{ animationDelay: "0.35s" }}>
              {t("country.expertIn")} {country.name}. {t("country.aiReady")}
            </p>

            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <MapPin className="w-4 h-4 text-primary" />
              <span>
                {/* For 2-tier countries like Saint Helena, use "districts" instead of "states" */}
                {country.code.toLowerCase() === "sh" 
                  ? `Working with businesses in all ${country.statesCount || 8} districts across ${country.name}`
                  : t("country.servingAllStates").replace("{count}", String(country.statesCount || "all")) + " " + country.name
                }
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.45s" }}>
              <Button asChild size="lg" className="glow group">
                <Link to={`/${language}/portfolio`}>
                  <Eye className="w-4 h-4 mr-2" />
                  {t("country.viewProjects")}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link to={`/${language}/contact`}>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {t("country.getConsultation")}
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border animate-fade-up" style={{ animationDelay: "0.5s" }}>
              <div>
                <div className="font-display text-3xl font-bold text-foreground">7+</div>
                <div className="text-sm text-muted-foreground">{t("hero.years")}</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-foreground">100+</div>
                <div className="text-sm text-muted-foreground">{t("hero.clients")}</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-primary">150%</div>
                <div className="text-sm text-muted-foreground">{t("hero.traffic")}</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-2xl scale-110" />
              <figure className="relative gradient-border rounded-2xl overflow-hidden">
                <img
                  src={profilePhoto}
                  alt={`Local SEO Specialist serving businesses in ${country.name} - Syed Hadi Hussain`}
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
                <div className="text-xs text-muted-foreground">{country.name} {t("country.specialist")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryHero;
