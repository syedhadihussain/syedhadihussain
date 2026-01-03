import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { IndustryData, getAllCategories, getIndustriesByCategory, INDUSTRY_CATEGORIES } from "@/lib/industries-config";
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from "@/lib/i18n-config";

interface RelatedIndustriesProps {
  industry: IndustryData;
}

// Map each category to its primary representative industry for category badge links
const CATEGORY_REPRESENTATIVE_INDUSTRIES: Record<string, string> = {
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

// Format slug to display name
const formatSlugToName = (slug: string): string => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const RelatedIndustries = ({ industry }: RelatedIndustriesProps) => {
  const { t } = useLanguage();
  const location = useLocation();
  
  const pathParts = location.pathname.split('/').filter(Boolean);
  const currentLang = SUPPORTED_LANGUAGES.includes(pathParts[0] as any) ? pathParts[0] : DEFAULT_LANGUAGE;
  const langLink = (path: string) => `/${currentLang}${path}`;

  // Get ALL industries in the same category (excluding current)
  const categoryIndustries = getIndustriesByCategory(industry.categorySlug)
    .filter(ind => ind.slug !== industry.slug);
  
  const allCategories = getAllCategories();
  
  // Get current category info
  const currentCategory = INDUSTRY_CATEGORIES.find(c => c.slug === industry.categorySlug);

  return (
    <section className="section-padding bg-card/50">
      <div className="container-narrow">
        {/* ALL Industries in Same Category - Primary Category Element */}
        {categoryIndustries.length > 0 && currentCategory && (
          <>
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-12">
                <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                  {currentCategory.icon} {currentCategory.name}
                </span>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  All {currentCategory.name} SEO Services
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Explore our specialized <Link to={langLink("/services")} className="text-primary hover:underline">Local SEO services</Link> for all {currentCategory.name.toLowerCase()} businesses
                </p>
              </div>
            </ScrollReveal>

            {/* Full list of ALL subcategories/industries in this category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
              {categoryIndustries.map((related, index) => (
                <ScrollReveal key={related.slug} animation="fade-up" delay={Math.min(index * 30, 300)}>
                  <Link
                    to={langLink(`/local-seo-services-for-${related.slug}`)}
                    className="glass rounded-xl p-5 flex items-center gap-4 hover:bg-primary/5 transition-all duration-300 group border border-transparent hover:border-primary/20"
                    title={`Local SEO for ${related.name} - Google Maps & local search optimization`}
                  >
                    <span className="text-2xl flex-shrink-0">{related.icon}</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                        {related.name} SEO
                      </h3>
                      <p className="text-sm text-muted-foreground truncate">Local search optimization</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </>
        )}

        {/* All Industry Categories Section */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              {t("industry.allIndustryCategories")}
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide <Link to={langLink("/serving-industries")} className="text-primary hover:underline">Local SEO services</Link> for businesses across all industries
            </p>
          </div>
        </ScrollReveal>

        {/* Category badges - each links to its representative industry page */}
        <div className="flex flex-wrap justify-center gap-3">
          {allCategories.map((category, index) => {
            const representativeSlug = CATEGORY_REPRESENTATIVE_INDUSTRIES[category.slug] || category.industries[0];
            const isCurrentCategory = category.slug === industry.categorySlug;
            
            return (
              <ScrollReveal key={category.slug} animation="fade-up" delay={Math.min(index * 20, 200)}>
                <Link
                  to={langLink(`/local-seo-services-for-${representativeSlug}`)}
                  className={`rounded-full px-4 py-2 flex items-center gap-2 transition-all text-sm border ${
                    isCurrentCategory 
                      ? 'bg-primary/20 border-primary text-primary font-medium' 
                      : 'glass border-transparent hover:bg-primary/10 hover:border-primary/30'
                  }`}
                  title={`Local SEO for ${category.name}`}
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
          <div className="text-center mt-10">
            <Link 
              to={langLink("/serving-industries")}
              className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-6 py-3 rounded-full font-medium transition-colors"
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
