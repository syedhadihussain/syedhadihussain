import { Phone, Mail, Calendar, MapPin } from "lucide-react";
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
      title: "Book a Call",
      description: `Schedule a free 30-minute strategy session for your ${city.name} business`,
      action: "Book Now",
      href: "https://calendly.com/syedhadihussain",
    },
    {
      icon: Phone,
      title: "WhatsApp",
      description: `Quick questions about ${city.name} local SEO? Message me directly`,
      action: "Chat Now",
      href: "https://wa.me/923214aborrar",
    },
    {
      icon: Mail,
      title: "Email",
      description: `Send detailed inquiries about your ${city.name} project`,
      action: "Send Email",
      href: "mailto:contact@localseoexpert.com",
    },
    {
      icon: MapPin,
      title: "Service Area",
      description: `Proudly serving ${city.name}, ${state.name} and surrounding areas`,
      action: "View Coverage",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-muted/30" aria-labelledby="city-contact-heading">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <ScrollReveal>
              <span className="text-primary text-sm font-medium uppercase tracking-wider">
                Get Started Today
              </span>
              <h2 id="city-contact-heading" className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                Ready to Grow Your {city.name} Business?
              </h2>
              <p className="text-muted-foreground mb-8">
                Whether you're a new business in {city.name} looking to establish local presence, 
                or an established company wanting to dominate local search, I'm here to help. 
                Let's create a custom strategy for your {city.name}, {city.stateAbbreviation} business.
              </p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <ScrollReveal key={method.title} delay={index * 0.1}>
                  <a
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 block"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <method.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-1">{method.title}</h3>
                        <p className="text-xs text-muted-foreground mb-2">{method.description}</p>
                        <span className="text-xs text-primary font-medium group-hover:underline">
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
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Get Your Free {city.name} SEO Audit
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Fill out the form below and I'll analyze your current {city.name} local search presence 
                and send you actionable recommendations.
              </p>
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CityContact;
