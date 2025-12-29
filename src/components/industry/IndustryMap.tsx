import { Globe, MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { IndustryData } from "@/lib/industries-config";

interface IndustryMapProps {
  industry: IndustryData;
}

const IndustryMap = ({ industry }: IndustryMapProps) => {
  const { t } = useLanguage();

  // World map embed URL
  const mapEmbedUrl = `https://www.google.com/maps/embed/v1/view?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&center=20,0&zoom=2&maptype=roadmap`;

  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Worldwide Service
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Serving {industry.name} Globally
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We provide specialized Local SEO services for {industry.name.toLowerCase()} businesses across the world, 
              helping you dominate your local market no matter where you're located.
            </p>
          </div>
        </ScrollReveal>

        {/* Map Container */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="glass rounded-3xl overflow-hidden">
            <div className="aspect-video relative">
              <iframe
                src={mapEmbedUrl}
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Worldwide Local SEO services for ${industry.name}`}
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Global Service Points */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {["North America", "Europe", "Middle East", "Asia Pacific"].map((region, index) => (
              <div key={index} className="glass rounded-xl p-4 text-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground text-sm">{region}</h4>
                <p className="text-xs text-muted-foreground mt-1">Full Coverage</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default IndustryMap;
