import { Phone, Mail, Calendar, MapPin, Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { CityDetailData } from "@/lib/cities-config";
import { StateDetailData } from "@/lib/states-config";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import ContactForm from "@/components/ContactForm";

interface CityContactProps {
  city: CityDetailData;
  state: StateDetailData;
}

const CityContact = ({ city, state }: CityContactProps) => {
  const { t } = useLanguage();

  const contactMethods = [
    {
      icon: Calendar,
      title: "Book Your FREE Strategy Call",
      description: `30-minute deep-dive into your ${city.name} local SEO opportunities`,
      action: "Book Now – Limited Spots",
      href: "https://calendly.com/syedhadihussain",
    },
    {
      icon: Phone,
      title: "Quick WhatsApp Chat",
      description: `Got a quick question about ${city.name} local SEO? I respond within hours`,
      action: "Message Me Now",
      href: "https://wa.me/923214aborrar",
    },
    {
      icon: Mail,
      title: "Detailed Email Inquiry",
      description: `Send project details for a custom ${city.name} SEO proposal`,
      action: "Send Email",
      href: "mailto:contact@localseoexpert.com",
    },
    {
      icon: MapPin,
      title: "Service Area Coverage",
      description: `Serving all of ${city.name}, ${state.name} and surrounding 25+ mile radius`,
      action: "View Full Coverage",
      href: "#",
    },
  ];

  const auditIncludes = [
    "Complete Google Business Profile analysis",
    "Local keyword opportunity report",
    "Competitor ranking comparison",
    "Citation & NAP consistency check",
    "AI search readiness assessment",
    "Custom action plan for quick wins",
  ];

  return (
    <section id="contact" className="section-padding bg-muted/30" aria-labelledby="city-contact-heading">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <ScrollReveal>
              <span className="text-primary text-sm font-medium uppercase tracking-wider">
                Start Getting More {city.name} Customers Today
              </span>
              <h2 id="city-contact-heading" className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                Let's Make Your {city.name} Business Impossible to Ignore
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Right now, potential customers in {city.name} are searching for exactly what you offer. 
                The question is: are they finding YOU or your competitors? 
                Let's fix that with a custom local SEO strategy built for your {city.name}, {city.stateAbbreviation} business.
              </p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <ScrollReveal key={method.title} delay={index * 0.1}>
                  <a
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group p-4 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 block"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                        <method.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{method.title}</h3>
                        <p className="text-xs text-muted-foreground mb-2">{method.description}</p>
                        <span className="text-xs text-primary font-semibold group-hover:underline">
                          {method.action} →
                        </span>
                      </div>
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <ScrollReveal delay={0.2}>
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">FREE Audit – Usually Delivered Within 48 Hours</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                Get Your FREE {city.name} Local SEO Audit
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Discover exactly why your competitors are outranking you – and how to fix it fast.
              </p>
              
              {/* What's Included */}
              <div className="mb-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-xs font-semibold text-foreground mb-2">Your FREE audit includes:</p>
                <ul className="grid grid-cols-1 gap-1">
                  {auditIncludes.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CityContact;
