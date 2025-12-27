import { ArrowRight, Calendar, MessageCircle, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { StateDetailData } from "@/lib/states-config";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import ContactForm from "@/components/ContactForm";

interface StateContactProps {
  state: StateDetailData;
}

const StateContact = ({ state }: StateContactProps) => {
  const { t, language } = useLanguage();

  const quickContactOptions = [
    {
      icon: Calendar,
      labelKey: "contact.bookCall",
      href: "https://calendly.com/syedhadihussain",
      external: true,
    },
    {
      icon: MessageCircle,
      labelKey: "contact.whatsapp",
      href: "https://wa.me/+971523695036",
      external: true,
    },
    {
      icon: Mail,
      labelKey: "contact.email",
      href: "mailto:contact.syedhadihussain@gmail.com",
      external: true,
    },
    {
      icon: MapPin,
      labelKey: "contact.location",
      href: "#",
      external: false,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-primary/5" aria-labelledby="contact-heading">
      <div className="container-narrow">
        <div className="text-center mb-12">
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
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Quick Contact & Stats */}
          <div className="space-y-8">
            <ScrollReveal>
              <div className="grid sm:grid-cols-2 gap-4">
                {quickContactOptions.map((option, index) => (
                  <a
                    key={index}
                    href={option.href}
                    target={option.external ? "_blank" : undefined}
                    rel={option.external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300 group min-w-0"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <option.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground truncate">{t(option.labelKey)}</span>
                  </a>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="p-6 bg-background rounded-xl border border-border">
                <div className="grid grid-cols-3 gap-6 text-center">
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

            <ScrollReveal delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4">
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
          </div>

          {/* Right Column - Contact Form */}
          <ScrollReveal delay={0.3}>
            <div className="bg-background rounded-2xl border border-border p-6 sm:p-8 shadow-sm">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                {t("contact.formTitle")}
              </h3>
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default StateContact;
