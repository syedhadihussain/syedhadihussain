import { Quote, Star } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLanguage } from "@/contexts/LanguageContext";

const testimonials = [
  {
    quote: "Hadi transformed our Google Business Profile and now we receive daily calls from Google Maps. His local SEO knowledge is exceptional.",
    author: "Ahmed R.",
    role: "Service Business Owner",
    location: "Dubai, UAE"
  },
  {
    quote: "Clear communication, real results, and honest reporting. Our rankings and leads improved within the first month.",
    author: "Sarah M.",
    role: "Repair Shop Owner",
    location: "Texas, USA"
  },
  {
    quote: "Hadi understands competitive local SEO better than anyone we've worked with. Highly recommended.",
    author: "James T.",
    role: "Bail Bonds Agency",
    location: "California, USA"
  },
  {
    quote: "Our restaurant went from page 3 to the top 3 map pack results. We've seen a 200% increase in reservations from Google.",
    author: "Marco P.",
    role: "Restaurant Owner",
    location: "New York, USA"
  },
  {
    quote: "Professional, responsive, and delivers exactly what he promises. Our law firm now dominates local search in our area.",
    author: "Jennifer K.",
    role: "Law Firm Partner",
    location: "London, UK"
  },
  {
    quote: "Hadi's SEO strategy helped us expand to 3 new locations. Each one ranks in the top positions within months.",
    author: "David L.",
    role: "HVAC Business Owner",
    location: "Sydney, Australia"
  },
  {
    quote: "The best investment we made for our dental practice. Patient inquiries have tripled since working with Hadi.",
    author: "Dr. Fatima A.",
    role: "Dental Clinic Owner",
    location: "Abu Dhabi, UAE"
  },
  {
    quote: "Hadi doesn't just do SEO, he educates you on the process. His transparency and expertise are unmatched.",
    author: "Robert C.",
    role: "Auto Repair Shop Owner",
    location: "Florida, USA"
  },
  {
    quote: "We went from 0 to 50+ monthly calls from Google Maps. The ROI on Hadi's services is incredible.",
    author: "Maria G.",
    role: "Beauty Salon Owner",
    location: "Madrid, Spain"
  },
  {
    quote: "Our real estate agency now appears for every major local search term. Hadi's strategy was game-changing.",
    author: "Michael B.",
    role: "Real Estate Broker",
    location: "Toronto, Canada"
  },
  {
    quote: "The citation building and review management alone paid for the entire SEO package. Exceptional work!",
    author: "Lisa W.",
    role: "Pet Grooming Business",
    location: "Manchester, UK"
  },
  {
    quote: "Hadi helped us recover from a Google penalty and now we rank higher than ever. True expert in local SEO.",
    author: "Hassan M.",
    role: "Construction Company Owner",
    location: "Riyadh, KSA"
  },
  {
    quote: "Our plumbing business now gets 80% of leads from organic search. Hadi's work has been transformative.",
    author: "Steve J.",
    role: "Plumbing Company Owner",
    location: "Chicago, USA"
  }
];

const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-narrow">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              {t("nav.testimonials")}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {t("testimonials.title")}
            </h2>
            <p className="text-muted-foreground">
              {t("testimonials.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
              <div className="glass rounded-2xl p-6 lg:p-8 relative group hover:glow-sm transition-all duration-300 h-full">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-primary/20 mb-4" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-foreground leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-border">
                  <div className="font-display font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-primary mt-1">{testimonial.location}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
