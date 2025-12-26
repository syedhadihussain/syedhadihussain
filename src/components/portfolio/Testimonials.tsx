import { Quote, Star } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonialKeys = [
  { quoteKey: "testimonials.t1.quote", authorKey: "testimonials.t1.author", roleKey: "testimonials.t1.role", locationKey: "testimonials.t1.location" },
  { quoteKey: "testimonials.t2.quote", authorKey: "testimonials.t2.author", roleKey: "testimonials.t2.role", locationKey: "testimonials.t2.location" },
  { quoteKey: "testimonials.t3.quote", authorKey: "testimonials.t3.author", roleKey: "testimonials.t3.role", locationKey: "testimonials.t3.location" },
  { quoteKey: "testimonials.t4.quote", authorKey: "testimonials.t4.author", roleKey: "testimonials.t4.role", locationKey: "testimonials.t4.location" },
  { quoteKey: "testimonials.t5.quote", authorKey: "testimonials.t5.author", roleKey: "testimonials.t5.role", locationKey: "testimonials.t5.location" },
  { quoteKey: "testimonials.t6.quote", authorKey: "testimonials.t6.author", roleKey: "testimonials.t6.role", locationKey: "testimonials.t6.location" },
  { quoteKey: "testimonials.t7.quote", authorKey: "testimonials.t7.author", roleKey: "testimonials.t7.role", locationKey: "testimonials.t7.location" },
  { quoteKey: "testimonials.t8.quote", authorKey: "testimonials.t8.author", roleKey: "testimonials.t8.role", locationKey: "testimonials.t8.location" },
  { quoteKey: "testimonials.t9.quote", authorKey: "testimonials.t9.author", roleKey: "testimonials.t9.role", locationKey: "testimonials.t9.location" },
  { quoteKey: "testimonials.t10.quote", authorKey: "testimonials.t10.author", roleKey: "testimonials.t10.role", locationKey: "testimonials.t10.location" },
  { quoteKey: "testimonials.t11.quote", authorKey: "testimonials.t11.author", roleKey: "testimonials.t11.role", locationKey: "testimonials.t11.location" },
  { quoteKey: "testimonials.t12.quote", authorKey: "testimonials.t12.author", roleKey: "testimonials.t12.role", locationKey: "testimonials.t12.location" },
  { quoteKey: "testimonials.t13.quote", authorKey: "testimonials.t13.author", roleKey: "testimonials.t13.role", locationKey: "testimonials.t13.location" },
  { quoteKey: "testimonials.t14.quote", authorKey: "testimonials.t14.author", roleKey: "testimonials.t14.role", locationKey: "testimonials.t14.location" },
  { quoteKey: "testimonials.t15.quote", authorKey: "testimonials.t15.author", roleKey: "testimonials.t15.role", locationKey: "testimonials.t15.location" },
  { quoteKey: "testimonials.t16.quote", authorKey: "testimonials.t16.author", roleKey: "testimonials.t16.role", locationKey: "testimonials.t16.location" },
  { quoteKey: "testimonials.t17.quote", authorKey: "testimonials.t17.author", roleKey: "testimonials.t17.role", locationKey: "testimonials.t17.location" },
  { quoteKey: "testimonials.t18.quote", authorKey: "testimonials.t18.author", roleKey: "testimonials.t18.role", locationKey: "testimonials.t18.location" },
  { quoteKey: "testimonials.t19.quote", authorKey: "testimonials.t19.author", roleKey: "testimonials.t19.role", locationKey: "testimonials.t19.location" },
  { quoteKey: "testimonials.t20.quote", authorKey: "testimonials.t20.author", roleKey: "testimonials.t20.role", locationKey: "testimonials.t20.location" },
  { quoteKey: "testimonials.t21.quote", authorKey: "testimonials.t21.author", roleKey: "testimonials.t21.role", locationKey: "testimonials.t21.location" },
  { quoteKey: "testimonials.t22.quote", authorKey: "testimonials.t22.author", roleKey: "testimonials.t22.role", locationKey: "testimonials.t22.location" },
  { quoteKey: "testimonials.t23.quote", authorKey: "testimonials.t23.author", roleKey: "testimonials.t23.role", locationKey: "testimonials.t23.location" },
];

const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="section-padding overflow-hidden">
      <div className="container-narrow">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-12">
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

        <ScrollReveal animation="fade-up" delay={200}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonialKeys.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
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
                    <p className="text-foreground leading-relaxed mb-6 line-clamp-5">
                      "{t(testimonial.quoteKey)}"
                    </p>

                    {/* Author */}
                    <div className="pt-4 border-t border-border mt-auto">
                      <div className="font-display font-semibold text-foreground">{t(testimonial.authorKey)}</div>
                      <div className="text-sm text-muted-foreground">{t(testimonial.roleKey)}</div>
                      <div className="text-xs text-primary mt-1">{t(testimonial.locationKey)}</div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 bg-secondary hover:bg-primary hover:text-primary-foreground" />
              <CarouselNext className="static translate-y-0 bg-secondary hover:bg-primary hover:text-primary-foreground" />
            </div>
          </Carousel>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Testimonials;
