import { useLanguage } from "@/contexts/LanguageContext";
import { CityDetailData } from "@/lib/cities-config";
import { StateDetailData } from "@/lib/states-config";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface CityMapProps {
  city: CityDetailData;
  state: StateDetailData;
}

const CityMap = ({ city, state }: CityMapProps) => {
  const { t } = useLanguage();

  // Generate Google Maps embed URL for the city
  const mapQuery = encodeURIComponent(`${city.name}, ${state.abbreviation}, USA`);
  const mapEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${mapQuery}&zoom=12`;

  return (
    <section className="section-padding" aria-labelledby="city-map-heading">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="text-center mb-10">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              {t("Local SEO Service Area")}
            </span>
            <h2 id="city-map-heading" className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              {t("Serving")} {city.name}, {city.stateAbbreviation} {t("and Surrounding Areas")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("I provide expert local SEO services throughout")} {city.name} {t("and the greater")} {state.name} {t("region. Whether your customers are searching from downtown or neighboring communities, I will help your business get found.")}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-lg">
            <div className="aspect-[16/9] w-full">
              <iframe
                title={`${t("Map of")} ${city.name}, ${state.abbreviation} - ${t("Local SEO Service Area")}`}
                src={mapEmbedUrl}
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            {/* Overlay gradient for branding */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {city.name} {t("Local SEO Expert")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("Helping businesses in")} {city.name} {t("dominate Google Maps and AI search")}
                  </p>
                </div>
                <a
                  href="https://calendly.com/syedhadihussain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm"
                >
                  {t("Get 50% Off Audit")}
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Service Area Details */}
        <ScrollReveal delay={0.3}>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="p-5 bg-card rounded-xl border border-border text-center">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">{t("Mile Service Radius from")} {city.name}</div>
            </div>
            <div className="p-5 bg-card rounded-xl border border-border text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">{t("Remote and On-Site Flexibility")}</div>
            </div>
            <div className="p-5 bg-card rounded-xl border border-border text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">{t("Monitoring and Support")}</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CityMap;