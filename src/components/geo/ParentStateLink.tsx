import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface ParentStateLinkProps {
  countryCode: string;
  stateCode: string;
  stateName: string;
  cityName: string;
}

/**
 * Contextual internal link from city page to parent state page
 * Follows silo structure: City → State
 */
const ParentStateLink = ({
  countryCode,
  stateCode,
  stateName,
  cityName,
}: ParentStateLinkProps) => {
  const { language } = useLanguage();

  return (
    <ScrollReveal>
      <div className="bg-muted/30 rounded-xl p-6 border border-border">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <MapPin className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">
              Local SEO Services Across {stateName}
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Beyond {cityName}, I provide comprehensive local SEO services throughout {stateName}. 
              Whether you operate multiple locations or want to expand your reach, my strategies 
              help businesses dominate Google Maps and AI search results across the entire region.
            </p>
            <Link
              to={`/${language}/${countryCode}/${stateCode}`}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
            >
              <span>View all Local SEO services in {stateName}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default ParentStateLink;
