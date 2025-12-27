import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { CountryData, ALL_US_STATES } from "@/lib/countries-config";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import usStatesMap from "@/assets/us-states-map.png";

interface CountryMapProps {
  country: CountryData;
}

const CountryMap = ({ country }: CountryMapProps) => {
  const { t, language } = useLanguage();

  // Only show detailed map for US currently
  const isUS = country.code === "us";

  return (
    <section className="py-20 bg-background" aria-labelledby="map-heading">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              {t("country.serviceArea")}
            </span>
            <h2 id="map-heading" className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
              {t("country.servingBusinesses").replace("{country}", country.name)}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("country.mapDescription").replace("{count}", String(country.statesCount || "all")).replace("{country}", country.name)}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="relative bg-muted/50 rounded-2xl p-8 border border-border overflow-hidden">
            {/* US Map Image */}
            {isUS && (
              <div className="relative flex flex-col items-center">
                <img 
                  src={usStatesMap} 
                  alt={`Map of the ${country.name} showing all ${country.statesCount} states where we provide Local SEO services`}
                  className="w-full max-w-4xl h-auto mx-auto"
                  loading="lazy"
                />
                
                {/* Legend */}
                <div className="mt-6 glass rounded-lg px-4 py-3">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                    <span className="text-foreground font-medium">
                      {country.statesCount} {t("country.statesServed")}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* For non-US countries, show a placeholder or different visualization */}
            {!isUS && (
              <div className="text-center py-20">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-foreground font-medium">{t("country.servingAllRegions").replace("{country}", country.name)}</p>
              </div>
            )}
          </div>
        </ScrollReveal>

        {/* State list for accessibility and SEO - with internal links for active states only */}
        {isUS && (
          <ScrollReveal delay={0.3}>
            <div className="mt-8 p-6 bg-muted/30 rounded-xl">
              <h3 className="font-display text-lg font-semibold text-foreground mb-4 text-center">
                {t("country.allStatesHeading")}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {ALL_US_STATES.map((stateName) => {
                  // Only Florida has an active page
                  const isActive = stateName === "Florida";
                  
                  if (isActive) {
                    return (
                      <Link 
                        key={stateName}
                        to={`/${language}/${country.code}/fl/`}
                        className="px-3 py-1 bg-background rounded-full text-sm text-muted-foreground border border-border hover:border-primary hover:text-primary hover:bg-primary/5 transition-colors"
                      >
                        {stateName}
                      </Link>
                    );
                  }
                  
                  return (
                    <span 
                      key={stateName}
                      className="px-3 py-1 bg-background rounded-full text-sm text-muted-foreground border border-border"
                    >
                      {stateName}
                    </span>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
};

export default CountryMap;
