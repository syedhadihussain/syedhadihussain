import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import SEOHead from "@/components/SEOHead";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Calendar, Mail, MessageCircle, MapPin, Clock, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead
        title="Start Ranking Higher on Google Maps Today – Contact Syed Hadi Hussain"
        description="Get in touch to improve your Google Maps rankings, Local SEO visibility, and inbound leads. Share your goals and receive a clear, actionable SEO plan."
        canonical="https://syedhadihussain.com/contact"
        keywords="Contact SEO specialist, Google Maps ranking, Local SEO consultation, SEO plan"
        breadcrumbs={[
          { name: "Home", url: "https://syedhadihussain.com" },
          { name: "Contact", url: "https://syedhadihussain.com/contact" }
        ]}
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-24">
          {/* Hero */}
          <section className="section-padding">
            <div className="container-narrow text-center">
              <ScrollReveal animation="fade-up">
                <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                  {t("nav.contact")}
                </span>
                <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  {t("contactPage.title")}
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  {t("contactPage.description")}
                </p>
              </ScrollReveal>
            </div>
          </section>

          {/* Contact Section */}
          <section className="section-padding bg-card/50">
            <div className="container-narrow">
              <div className="grid lg:grid-cols-5 gap-12">
                {/* Contact Info */}
                <div className="lg:col-span-2 space-y-8">
                  <ScrollReveal animation="fade-right">
                    <div className="glass rounded-2xl p-8">
                      <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                        {t("contactPage.quickContact")}
                      </h2>
                      
                      <div className="space-y-6">
                        <a 
                          href="mailto:contact.syedhadihussain@gmail.com" 
                          className="flex items-start gap-4 group"
                        >
                          <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <Mail className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{t("contact.email.label")}</p>
                            <p className="text-muted-foreground text-sm">contact.syedhadihussain@gmail.com</p>
                          </div>
                        </a>

                        <a 
                          href="https://wa.me/+971523695036" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-start gap-4 group"
                        >
                          <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <MessageCircle className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{t("contact.whatsapp.label")}</p>
                            <p className="text-muted-foreground text-sm">+971 52 369 5036</p>
                          </div>
                        </a>

                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-primary/10 text-primary">
                            <MapPin className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{t("contactPage.serviceAreas")}</p>
                            <p className="text-muted-foreground text-sm">{t("contact.worldwide")}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-primary/10 text-primary">
                            <Clock className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{t("contactPage.responseTime")}</p>
                            <p className="text-muted-foreground text-sm">{t("contactPage.within24h")}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal animation="fade-right" delay={200}>
                    <div className="glass rounded-2xl p-8 glow">
                      <Calendar className="w-10 h-10 text-primary mb-4" />
                      <h3 className="font-display text-xl font-bold text-foreground mb-2">
                        {t("contactPage.bookConsultation")}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-6">
                        {t("contactPage.consultationDesc")}
                      </p>
                      <Button asChild className="w-full glow group">
                        <a href="https://calendly.com/syedhadihussain" target="_blank" rel="noopener noreferrer">
                          {t("contactPage.scheduleCall")}
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </div>
                  </ScrollReveal>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-3">
                  <ScrollReveal animation="fade-left">
                    <div className="glass rounded-2xl p-8 lg:p-10">
                      <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                        {t("contactPage.sendMessage")}
                      </h2>
                      <p className="text-muted-foreground mb-8">
                        {t("contactPage.formDescription")}
                      </p>
                      <ContactForm />
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
