import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { IndustryData } from "@/lib/industries-config";

interface IndustryEntitiesProps {
  industry: IndustryData;
}

const IndustryEntities = ({ industry }: IndustryEntitiesProps) => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Keywords & Entities
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Search Terms We Target for {industry.name}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our semantic SEO approach targets these high-intent keywords and entities to maximize your visibility in local search results.
            </p>
          </div>
        </ScrollReveal>

        {/* Entities Cloud */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {industry.semanticEntities.map((entity, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors cursor-default"
              >
                {entity}
              </Badge>
            ))}
          </div>
        </ScrollReveal>

        {/* Additional Context */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="mt-12 glass rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="font-display text-xl font-bold text-foreground mb-4 text-center">
              Why Semantic SEO Matters for {industry.name}
            </h3>
            <p className="text-muted-foreground text-center leading-relaxed">
              Google's algorithm understands context and relationships between words. 
              By optimizing for semantic entities related to {industry.name.toLowerCase()}, 
              we help your business appear for a wider range of relevant searches, 
              not just exact keyword matches. This approach drives more qualified traffic 
              and higher conversion rates.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default IndustryEntities;
