import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { StateDetailData } from "@/lib/states-config";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface StateContactProps {
  state: StateDetailData;
}

const StateContact = ({ state }: StateContactProps) => {
  const { t, language } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-primary/5" aria-labelledby="contact-heading">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              {t("state.readyToGrow")}
            </span>
            <h2 id="contact-heading" className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
              {t("state.contactHeading").replace("{state}", state.name)}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              {t("state.contactDescription").replace("{state}", state.name)}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link to={`/${language}/contact`}>
                  {t("state.getStarted")}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to={`/${language}/pricing`}>
                  {t("state.viewPricing")}
                </Link>
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-12 p-6 bg-background rounded-xl border border-border">
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">24-48h</div>
                  <div className="text-sm text-muted-foreground">{t("state.responseTime")}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">{t("state.freeLabel")}</div>
                  <div className="text-sm text-muted-foreground">{t("state.initialAudit")}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">{t("state.satisfaction")}</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default StateContact;
