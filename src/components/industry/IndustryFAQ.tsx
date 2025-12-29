import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { IndustryData } from "@/lib/industries-config";

interface IndustryFAQProps {
  industry: IndustryData;
}

const IndustryFAQ = ({ industry }: IndustryFAQProps) => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-card/50">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                FAQ
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {t("Frequently Asked Questions About SEO for")} {industry.name}
              </h2>
              <p className="text-muted-foreground text-lg">
                {t("Get answers to common questions about Local SEO services for")} {industry.name.toLowerCase()} {t("businesses")}.
              </p>
            </div>
          </ScrollReveal>

          {/* FAQ Accordion */}
          <ScrollReveal animation="fade-up" delay={100}>
            <Accordion type="single" collapsible className="space-y-4">
              {industry.faq.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass rounded-xl px-6 border-none"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                    {t(item.question)}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {t(item.answer)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default IndustryFAQ;
