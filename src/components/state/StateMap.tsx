import { useLanguage } from "@/contexts/LanguageContext";
import { StateDetailData } from "@/lib/states-config";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface StateMapProps {
  state: StateDetailData;
}

const StateMap = ({ state }: StateMapProps) => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-background" aria-labelledby="state-map-heading">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              {t("country.serviceArea")}
            </span>
            <h2 id="state-map-heading" className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
              {t("state.servingBusinessesIn").replace("{state}", state.name)}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("state.mapDescription").replace("{count}", String(state.cities.length)).replace("{state}", state.name)}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="relative bg-muted/50 rounded-2xl overflow-hidden border border-border">
            <iframe
              src={state.mapEmbed}
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map of ${state.name} - Local SEO Service Area`}
              className="w-full"
            />
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default StateMap;
