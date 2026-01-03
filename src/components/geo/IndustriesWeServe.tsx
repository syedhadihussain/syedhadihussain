import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { INDUSTRY_CATEGORIES } from "@/lib/industries-config";

interface IndustriesWeServeProps {
  locationName: string;
}

/**
 * Industries We Serve - Flat list of all industries with links to their dedicated pages
 * Appears on all location pages (country, state, city)
 * Each link points to /local-seo-services-for-{industry}
 */
const IndustriesWeServe = ({ locationName }: IndustriesWeServeProps) => {
  const { language } = useLanguage();

  // Flatten all industries from all categories into a single list with category info
  const allIndustries = INDUSTRY_CATEGORIES.flatMap(category =>
    category.industries.map(industrySlug => ({
      slug: industrySlug,
      name: formatIndustryName(industrySlug),
      categoryIcon: category.icon,
      categoryName: category.name,
    }))
  );

  // Get one representative industry per category for the compact view
  const categoryRepresentatives = INDUSTRY_CATEGORIES.map(category => ({
    slug: category.industries[0],
    name: category.name,
    icon: category.icon,
  }));

  return (
    <section className="py-16 bg-muted/30" aria-labelledby="industries-heading">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="text-center mb-10">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Industries We Serve
            </span>
            <h2 
              id="industries-heading"
              className="font-display text-2xl sm:text-3xl font-bold text-foreground mt-2 mb-3"
            >
              Local SEO Services for Every Industry in {locationName}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Specialized local search strategies tailored to the unique needs of your business
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <nav aria-label="Industries navigation">
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {categoryRepresentatives.map((industry) => (
                <li key={industry.slug}>
                  <Link
                    to={`/${language}/local-seo-services-for-${industry.slug}`}
                    className="flex items-center gap-2 p-3 bg-card rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                    title={`Local SEO services for ${industry.name}`}
                  >
                    <span className="text-lg flex-shrink-0" aria-hidden="true">
                      {industry.icon}
                    </span>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">
                      {industry.name} SEO
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </ScrollReveal>

        {/* Additional industries list - more compact */}
        <ScrollReveal delay={0.3}>
          <div className="mt-8 p-6 bg-card rounded-xl border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              More Industries We Specialize In
            </h3>
            <div className="flex flex-wrap gap-2">
              {getAdditionalIndustries().map((industry) => (
                <Link
                  key={industry.slug}
                  to={`/${language}/local-seo-services-for-${industry.slug}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm bg-muted/50 rounded-full hover:bg-primary/10 hover:text-primary transition-colors border border-transparent hover:border-primary/30"
                  title={`${industry.name} SEO Services`}
                >
                  <span aria-hidden="true">{industry.icon}</span>
                  <span>{industry.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* CTA to view all industries */}
        <ScrollReveal delay={0.4}>
          <div className="mt-8 text-center">
            <Link
              to={`/${language}/serving-industries`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
            >
              See all 300+ industries we provide Local SEO Services for
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

// Format industry slug to readable name
function formatIndustryName(slug: string): string {
  return slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Get additional featured industries across categories
function getAdditionalIndustries() {
  const featured = [
    { slug: "dentists", name: "Dentists", icon: "🦷" },
    { slug: "restaurants", name: "Restaurants", icon: "🍽️" },
    { slug: "real-estate-agencies", name: "Real Estate Agents", icon: "🏠" },
    { slug: "law-firms", name: "Law Firms", icon: "⚖️" },
    { slug: "gyms", name: "Gyms", icon: "🏋️" },
    { slug: "hotels", name: "Hotels", icon: "🏨" },
    { slug: "car-repair-shops", name: "Auto Repair", icon: "🚗" },
    { slug: "hair-salons", name: "Hair Salons", icon: "💇" },
    { slug: "veterinary-clinics", name: "Veterinary Clinics", icon: "🐾" },
    { slug: "accountants", name: "Accountants", icon: "📊" },
    { slug: "chiropractors", name: "Chiropractors", icon: "🏥" },
    { slug: "photographers", name: "Photographers", icon: "📷" },
    { slug: "solar-panel-installers", name: "Solar Installers", icon: "☀️" },
    { slug: "landscaping-services", name: "Landscaping", icon: "🌳" },
    { slug: "pest-control-services", name: "Pest Control", icon: "🐜" },
    { slug: "catering-services", name: "Catering", icon: "🍴" },
    { slug: "yoga-studios", name: "Yoga Studios", icon: "🧘" },
    { slug: "personal-trainers", name: "Personal Trainers", icon: "💪" },
    { slug: "wedding-planners", name: "Wedding Planners", icon: "💒" },
    { slug: "cctv-installation-services", name: "CCTV Installers", icon: "📹" },
  ];
  return featured;
}

export default IndustriesWeServe;
