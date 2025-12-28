import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { StateDetailData } from "@/lib/states-config";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface StateCitiesProps {
  state: StateDetailData;
  countryCode: string;
}

const StateCities = ({ state, countryCode }: StateCitiesProps) => {
  const { t, language } = useLanguage();

  // Get first 3 cities for dynamic content (avoid duplication across states)
  const city1 = state.cities[0]?.name || "City 1";
  const city2 = state.cities[1]?.name || "City 2";
  const city3 = state.cities[2]?.name || "City 3";

  // All cities now have pages with the /local-seo-{citycode} format

  return (
    <section className="py-20 bg-muted/30" aria-labelledby="cities-heading">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              {t("state.serviceAreas")}
            </span>
            <h2 id="cities-heading" className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
              {t("state.citiesHeading").replace("{state}", state.name)}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("state.citiesDescription")
                .replace("{count}", String(state.cities.length))
                .replace("{state}", state.name)
                .replace("{city1}", city1)
                .replace("{city2}", city2)
                .replace("{city3}", city3)}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="bg-background rounded-2xl p-8 border border-border">
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="w-5 h-5 text-primary" />
              <h3 className="font-display text-lg font-semibold text-foreground">
                {t("state.allCitiesHeading").replace("{count}", String(state.cities.length))}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {state.cities.map((city) => (
                <Link
                  key={city.code}
                  to={`/${language}/local-seo-${city.code}`}
                  className="px-3 py-1.5 bg-muted hover:bg-primary/10 rounded-full text-sm text-muted-foreground hover:text-primary border border-border hover:border-primary/30 transition-all duration-200"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Major Cities Highlight - First 4 cities */}
        <ScrollReveal delay={0.3}>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {state.cities.slice(0, 4).map((city, index) => (
              <Link
                key={city.code}
                to={`/${language}/local-seo-${city.code}`}
                className="group relative bg-background rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                    #{index + 1}
                  </span>
                </div>
                <h4 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                  {city.name}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {t("state.localSEOIn")} {city.name}
                </p>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default StateCities;
