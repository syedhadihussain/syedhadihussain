import { Link } from "react-router-dom";
import { ArrowRight, Building2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface IndustryLink {
  slug: string;
  name: string;
  description: string;
}

interface IndustryLinksSectionProps {
  locationName: string;
  industries?: IndustryLink[];
}

// Default featured industries with descriptive anchor text
const DEFAULT_INDUSTRIES: IndustryLink[] = [
  { slug: "plumbers", name: "Plumbers", description: "Local SEO for plumbing businesses" },
  { slug: "electricians", name: "Electricians", description: "SEO services for electrical contractors" },
  { slug: "dentists", name: "Dentists", description: "Local search optimization for dental practices" },
  { slug: "restaurants", name: "Restaurants", description: "Google Maps optimization for restaurants" },
  { slug: "real-estate-agents", name: "Real Estate Agents", description: "SEO for real estate professionals" },
  { slug: "chiropractors", name: "Chiropractors", description: "Local SEO for chiropractic clinics" },
  { slug: "hvac-services", name: "HVAC Services", description: "Search visibility for HVAC companies" },
  { slug: "auto-repair-shops", name: "Auto Repair Shops", description: "Local SEO for automotive services" },
];

/**
 * Industry linking section - links to industry pages with contextual anchor text
 * Industry pages are independent silos and should NOT link to geo pages
 */
const IndustryLinksSection = ({
  locationName,
  industries = DEFAULT_INDUSTRIES,
}: IndustryLinksSectionProps) => {
  const { language } = useLanguage();

  return (
    <section className="py-16 bg-background">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="text-center mb-10">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Industry Expertise
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mt-2 mb-3">
              Local SEO for Every Industry in {locationName}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Specialized local search strategies tailored to the unique needs of your industry
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                to={`/${language}/local-seo-services-for-${industry.slug}`}
                className="group p-4 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                title={industry.description}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors text-sm block truncate">
                      {industry.name}
                    </span>
                    <span className="text-xs text-muted-foreground">SEO Services</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-8 text-center">
            <Link
              to={`/${language}/serving-industries`}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              View all industries we serve
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default IndustryLinksSection;
