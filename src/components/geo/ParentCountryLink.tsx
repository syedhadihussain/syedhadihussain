import { Link } from "react-router-dom";
import { ArrowRight, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface ParentCountryLinkProps {
  countryCode: string;
  countryName: string;
  stateName: string;
}

/**
 * Contextual internal link from state page to parent country page
 * Follows silo structure: State → Country
 */
const ParentCountryLink = ({
  countryCode,
  countryName,
  stateName,
}: ParentCountryLinkProps) => {
  const { language } = useLanguage();

  return (
    <ScrollReveal>
      <div className="bg-muted/30 rounded-xl p-6 border border-border">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <Globe className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">
              Serving Businesses Throughout {countryName}
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              My local SEO expertise extends beyond {stateName} to businesses across {countryName}. 
              From major metropolitan areas to growing regional markets, I help companies dominate 
              local search and attract more customers through strategic Google Maps optimization.
            </p>
            <Link
              to={`/${language}/${countryCode}`}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
            >
              <span>Explore Local SEO services across {countryName}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default ParentCountryLink;
