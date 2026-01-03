import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { StateDetailData, getStateData } from "@/lib/states-config";
import { getCountryData } from "@/lib/countries-config";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface RelatedCitiesProps {
  countryCode: string;
  stateCode: string;
  currentCityCode: string;
  maxCities?: number;
}

const RelatedCities = ({
  countryCode,
  stateCode,
  currentCityCode,
  maxCities = 8,
}: RelatedCitiesProps) => {
  const { t, language } = useLanguage();

  const state = getStateData(stateCode, countryCode);
  const country = getCountryData(countryCode);

  if (!state || !country) return null;

  // Get nearby cities (exclude current city)
  const currentCityIndex = state.cities.findIndex(
    (c) => c.code === currentCityCode
  );
  
  // Get cities around the current city for relevance
  const allOtherCities = state.cities.filter((c) => c.code !== currentCityCode);
  
  // Prioritize nearby cities (by index proximity) then fill with others
  const sortedCities = [...allOtherCities].sort((a, b) => {
    const aIndex = state.cities.findIndex((c) => c.code === a.code);
    const bIndex = state.cities.findIndex((c) => c.code === b.code);
    return Math.abs(aIndex - currentCityIndex) - Math.abs(bIndex - currentCityIndex);
  });

  const relatedCities = sortedCities.slice(0, maxCities);

  if (relatedCities.length === 0) return null;

  // Get the current city name for display
  const currentCity = state.cities.find((c) => c.code === currentCityCode);

  return (
    <section className="py-16 bg-muted/30" aria-labelledby="related-cities-heading">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="text-center mb-10">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              {t("relatedCities.subtitle")}
            </span>
            <h2
              id="related-cities-heading"
              className="font-display text-2xl sm:text-3xl font-bold text-foreground mt-2 mb-3"
            >
              {t("relatedCities.heading").replace("{state}", state.name)}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              {t("relatedCities.description")
                .replace("{state}", state.name)
                .replace("{city}", currentCity?.name || "")}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {relatedCities.map((city) => (
              <Link
                key={city.code}
                to={`/${language}/${countryCode}/${stateCode}/local-seo-${city.code}`}
                className="group flex items-center gap-2 p-3 sm:p-4 bg-background rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300"
                title={`Local SEO services for businesses in ${city.name}`}
              >
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base truncate block">
                    Local SEO {city.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Google Maps optimization
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100 flex-shrink-0" />
              </Link>
            ))}
          </div>
        </ScrollReveal>

        {/* Link to full state page */}
        <ScrollReveal delay={0.3}>
          <div className="mt-8 text-center">
            <Link
              to={`/${language}/${countryCode}/${stateCode}`}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Explore all Local SEO services in {state.name}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default RelatedCities;