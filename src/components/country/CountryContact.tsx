import { Phone, Mail, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { CountryData } from "@/lib/countries-config";
import ContactForm from "@/components/ContactForm";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface CountryContactProps {
  country: CountryData;
}

const CountryContact = ({ country }: CountryContactProps) => {
  const { t, language } = useLanguage();

  return (
    <section className="py-20 bg-background" id="contact" aria-labelledby="contact-heading">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              {t("country.contact.getStarted")}
            </span>
            <h2 id="contact-heading" className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
              {t("country.contact.title").replace("{country}", country.name)}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("country.contact.subtitle").replace("{country}", country.name)}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Contact Cards */}
          <div className="lg:col-span-1 space-y-4">
            <ScrollReveal delay={0.1}>
              <a
                href="https://calendly.com/hadinetwork-localseo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-6 rounded-xl flex items-start gap-4 hover:shadow-lg transition-all duration-300 group block"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {t("country.contact.bookCall")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("country.contact.bookCallDesc")}
                  </p>
                </div>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <a
                href="https://wa.me/971561948712"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-6 rounded-xl flex items-start gap-4 hover:shadow-lg transition-all duration-300 group block"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    WhatsApp
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("country.contact.whatsappDesc")}
                  </p>
                </div>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <a
                href="mailto:hadinetwork@outlook.com"
                className="glass p-6 rounded-xl flex items-start gap-4 hover:shadow-lg transition-all duration-300 group block"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    Email
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    hadinetwork@outlook.com
                  </p>
                </div>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="glass p-6 rounded-xl flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {t("country.contact.servingClients")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("country.contact.allStates").replace("{count}", String(country.statesCount || "all")).replace("{country}", country.name)}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ScrollReveal delay={0.2}>
              <div className="glass p-8 rounded-xl">
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                  {t("country.contact.sendMessage")}
                </h3>
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryContact;
