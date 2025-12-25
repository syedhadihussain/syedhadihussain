import { Button } from "@/components/ui/button";
import { Calendar, Mail, MessageCircle, ArrowRight, MapPin, Phone } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-padding bg-card/50">
      <div className="container-narrow">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                {t("contact.subtitle")}
              </span>
              <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4">
                {t("contact.title")}
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                {t("contact.description")}
              </p>
            </div>
          </ScrollReveal>

          {/* Quick Contact Cards */}
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              <a 
                href="https://calendly.com/syedhadihussain" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass rounded-2xl p-6 text-center hover:bg-primary/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{t("contact.bookCall")}</h3>
                <p className="text-sm text-muted-foreground">{t("contact.scheduleMeeting")}</p>
              </a>

              <a 
                href="https://wa.me/+971523695036" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass rounded-2xl p-6 text-center hover:bg-primary/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{t("contact.whatsapp")}</h3>
                <p className="text-sm text-muted-foreground">{t("contact.quickChat")}</p>
              </a>

              <a 
                href="mailto:contact.syedhadihussain@gmail.com"
                className="glass rounded-2xl p-6 text-center hover:bg-primary/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{t("contact.email")}</h3>
                <p className="text-sm text-muted-foreground">contact.syedhadihussain@gmail.com</p>
              </a>

              <div className="glass rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{t("contact.worldwide")}</h3>
                <p className="text-sm text-muted-foreground">Worldwide</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal animation="fade-up" delay={200}>
            <div className="glass rounded-3xl p-6 sm:p-8 lg:p-10">
              <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground mb-6 text-center">
                {t("contact.sendInquiry")}
              </h3>
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
