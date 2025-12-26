import { MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { CountryData, US_STATE_COORDS } from "@/lib/countries-config";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface CountryMapProps {
  country: CountryData;
}

const CountryMap = ({ country }: CountryMapProps) => {
  const { t } = useLanguage();

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
            {/* SVG Map for US */}
            {isUS && (
              <div className="relative">
                {/* US Map SVG - Simplified outline with state pins */}
                <svg 
                  viewBox="0 0 960 600" 
                  className="w-full h-auto"
                  aria-label={`Map of ${country.name} showing all ${country.statesCount} states we serve`}
                  role="img"
                >
                  {/* US Outline - simplified path */}
                  <path
                    d="M 158,453 L 185,453 L 185,502 L 158,502 Z M 103,386 L 136,376 L 156,413 L 143,440 L 102,440 Z M 852,285 L 852,302 L 870,302 L 870,285 Z M 874,287 L 874,302 L 892,302 L 892,287 Z M 830,330 L 830,357 L 870,357 L 870,330 Z"
                    className="fill-primary/5 stroke-primary/20"
                    strokeWidth="2"
                  />
                  
                  {/* State dots with labels */}
                  {country.states?.map((state, index) => {
                    const coords = US_STATE_COORDS[state];
                    if (!coords) return null;
                    
                    // Convert lat/lng to approximate SVG coordinates
                    // US bounds roughly: lat 24-50, lng -125 to -66
                    const x = ((coords[1] + 125) / 59) * 800 + 80;
                    const y = ((50 - coords[0]) / 26) * 450 + 50;
                    
                    return (
                      <g key={state} className="group cursor-pointer">
                        <circle
                          cx={x}
                          cy={y}
                          r="8"
                          className="fill-primary/60 stroke-primary stroke-2 transition-all duration-300 group-hover:fill-primary group-hover:r-10"
                        />
                        <circle
                          cx={x}
                          cy={y}
                          r="4"
                          className="fill-background"
                        />
                        {/* Tooltip on hover - hidden by default */}
                        <title>{state}</title>
                      </g>
                    );
                  })}
                </svg>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 glass rounded-lg p-3">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                    <span className="text-foreground font-medium">{country.statesCount} {t("country.statesServed")}</span>
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

        {/* State list for accessibility and SEO */}
        {isUS && country.states && (
          <ScrollReveal delay={0.3}>
            <div className="mt-8 p-6 bg-muted/30 rounded-xl">
              <h3 className="font-display text-lg font-semibold text-foreground mb-4 text-center">
                {t("country.allStatesHeading")}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {country.states.map((state) => (
                  <span 
                    key={state}
                    className="px-3 py-1 bg-background rounded-full text-sm text-muted-foreground border border-border hover:border-primary hover:text-primary transition-colors"
                  >
                    {state}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
};

export default CountryMap;
