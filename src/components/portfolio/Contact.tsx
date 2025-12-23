import { Button } from "@/components/ui/button";
import { Calendar, Mail, MessageCircle, ArrowRight, MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-padding bg-card/50">
      <div className="container-narrow">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - CTA */}
            <ScrollReveal animation="fade-right">
              <div className="glass rounded-3xl p-8 lg:p-10 relative overflow-hidden glow">
                <div className="absolute inset-0 -z-10">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                </div>

                <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                  {t("contact.subtitle")}
                </span>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  {t("contact.title")}
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  {t("contact.description")}
                </p>

                <div className="flex flex-col gap-4 mb-8">
                  <Button asChild size="lg" className="glow group">
                    <a href="https://calendly.com/syedhadihussain" target="_blank" rel="noopener noreferrer">
                      <Calendar className="w-5 h-5 mr-2" />
                      {t("hero.bookAudit")}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="https://wa.me/+971523695036" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      {t("hero.whatsapp")}
                    </a>
                  </Button>
                </div>

                <div className="space-y-4 text-sm text-muted-foreground">
                  <a href="mailto:syedhadi.workid@gmail.com" className="flex items-center gap-3 hover:text-foreground transition-colors">
                    <Mail className="w-4 h-4 text-primary" />
                    syedhadi.workid@gmail.com
                  </a>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-primary" />
                    UAE, UK, USA, Australia
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column - Contact Form */}
            <ScrollReveal animation="fade-left" delay={200}>
              <div className="glass rounded-3xl p-8 lg:p-10">
                <h3 className="font-display text-xl font-bold text-foreground mb-6">
                  Send a Message
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

export default Contact;
