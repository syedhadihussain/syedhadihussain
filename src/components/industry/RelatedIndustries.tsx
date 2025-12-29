import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { IndustryData, getRelatedIndustries, getAllCategories } from "@/lib/industries-config";
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from "@/lib/i18n-config";

interface RelatedIndustriesProps {
  industry: IndustryData;
}

const RelatedIndustries = ({ industry }: RelatedIndustriesProps) => {
  const { t } = useLanguage();
  const location = useLocation();
  
  const pathParts = location.pathname.split('/').filter(Boolean);
  const currentLang = SUPPORTED_LANGUAGES.includes(pathParts[0] as any) ? pathParts[0] : DEFAULT_LANGUAGE;
  const langLink = (path: string) => `/${currentLang}${path}`;

  const relatedIndustries = getRelatedIndustries(industry.slug, 6);
  const categories = getAllCategories();

  return (
    <section className="section-padding bg-card/50">
      <div className="container-narrow">
        {/* Related in Same Category */}
        {relatedIndustries.length > 0 && (
          <>
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-12">
                <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                  Related Services
                </span>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Other {industry.category} We Serve
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Explore our specialized Local SEO services for other businesses in the {industry.category.toLowerCase()} industry.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
              {relatedIndustries.map((related, index) => (
                <ScrollReveal key={related.slug} animation="fade-up" delay={index * 50}>
                  <Link
                    to={langLink(`/local-seo-services-for-${related.slug}`)}
                    className="glass rounded-xl p-6 flex items-center gap-4 hover:bg-primary/5 transition-all duration-300 group"
                  >
                    <span className="text-2xl">{related.icon}</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                        {related.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">Local SEO Services</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </>
        )}

        {/* All Categories */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12">
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              All Industry Categories
            </h3>
            <p className="text-muted-foreground">
              We provide Local SEO services for businesses across all industries
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category, index) => (
            <ScrollReveal key={category.slug} animation="fade-up" delay={index * 20}>
              <Link
                to={langLink(`/industries/${category.slug}`)}
                className="glass rounded-full px-4 py-2 flex items-center gap-2 hover:bg-primary/10 transition-colors text-sm"
              >
                <span>{category.icon}</span>
                <span className="text-foreground">{category.name}</span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedIndustries;
