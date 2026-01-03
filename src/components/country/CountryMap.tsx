import { MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { CountryData } from "@/lib/countries-config";
import { getCountryPageCopy } from "@/lib/country-page-copy";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface CountryMapProps {
  country: CountryData;
}

const CountryMap = ({ country }: CountryMapProps) => {
  const { t } = useLanguage();
  const copy = getCountryPageCopy(country);

  return (
    <section className="py-20 bg-background" aria-labelledby="map-heading">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              {t("country.serviceArea")}
            </span>
            <h2 id="map-heading" className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
              {copy.mapTitle}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {copy.mapDescription}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="relative bg-muted/50 rounded-2xl p-8 border border-border overflow-hidden">
            {country.mapEmbed ? (
              <div className="relative flex flex-col items-center">
                <div className="w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden">
                  <iframe 
                    src={country.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${country.name} showing regions where we provide Local SEO services`}
                    className="w-full h-full"
                  />
                </div>
                <div className="mt-6 glass rounded-lg px-4 py-3">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                    <span className="text-foreground font-medium">
                      {country.statesCount} {t("country.statesServed")}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-20">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-foreground font-medium">{t("country.servingAllRegions").replace("{country}", country.name)}</p>
              </div>
            )}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default CountryMap;
