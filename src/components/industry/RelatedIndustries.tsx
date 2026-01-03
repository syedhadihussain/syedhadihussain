import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { IndustryData, getRelatedIndustries, getAllCategories, getIndustriesByCategory } from "@/lib/industries-config";
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
                  {t("industry.relatedServices")}
                </span>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  {t("industry.otherCategoryWeServe").replace("{category}", industry.category)}
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  {t("industry.exploreSpecialized")} <Link to={langLink("/services")} className="text-primary hover:underline">{t("nav.services")}</Link> {t("industry.forOtherBusinesses").replace("{category}", industry.category.toLowerCase())}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
              {relatedIndustries.map((related, index) => (
                <ScrollReveal key={related.slug} animation="fade-up" delay={index * 50}>
                  <Link
                    to={langLink(`/local-seo-services-for-${related.slug}`)}
                    className="glass rounded-xl p-6 flex items-center gap-4 hover:bg-primary/5 transition-all duration-300 group"
                    title={`Local SEO services for ${related.name} businesses - Google Maps optimization`}
                  >
                    <span className="text-2xl">{related.icon}</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                        SEO Services for {related.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">Google Maps & local search</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </>
        )}

        {/* All Categories with Representative Industry Link */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12">
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              {t("industry.allIndustryCategories")}
            </h3>
            <p className="text-muted-foreground">
              {t("industry.weProvide")} <Link to={langLink("/serving-industries")} className="text-primary hover:underline">{t("industry.localSeoServices")}</Link> {t("industry.forBusinessesAcrossAll")}
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category, index) => {
            // Map each category to its representative/main industry slug for correct linking
            const categoryToRepresentativeIndustry: Record<string, string> = {
              "home-maintenance": "plumbers",
              "cleaning": "home-cleaning-services",
              "construction": "builders",
              "inspection": "surveying-mapping-services",
              "pest-control": "pest-control-services",
              "waste-recycling": "waste-removal-services",
              "landscaping": "gardeners",
              "energy": "solar-panel-installers",
              "security": "cctv-installation-services",
              "healthcare": "doctors-clinics",
              "beauty": "hair-salons",
              "automotive": "car-repair-shops",
              "childcare": "childcare-centers",
              "elderly-care": "elderly-care-services",
              "funeral-religious": "funeral-services",
              "legal-financial": "law-firms",
              "real-estate": "real-estate-agencies",
              "food-beverage": "restaurants",
              "hospitality-events": "hotels",
              "technology": "it-support-companies",
              "professional-services": "accountants",
              "manufacturing": "commercial-printing-services",
              "storage-logistics": "storage-facilities",
              "fitness": "gyms",
              "specialized-trades": "furniture-restoration-services",
            };
            
            const representativeSlug = categoryToRepresentativeIndustry[category.slug] || category.industries[0];
            const industryLink = langLink(`/local-seo-services-for-${representativeSlug}`);
            
            return (
              <ScrollReveal key={category.slug} animation="fade-up" delay={index * 20}>
                <Link
                  to={industryLink}
                  className="glass rounded-full px-4 py-2 flex items-center gap-2 hover:bg-primary/10 transition-colors text-sm"
                  title={`Local SEO for ${category.name} businesses`}
                >
                  <span>{category.icon}</span>
                  <span className="text-foreground">{category.name} SEO</span>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        {/* View All Industries Link */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="text-center mt-8">
            <Link 
              to={langLink("/serving-industries")}
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              {t("industry.viewAll300")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default RelatedIndustries;
