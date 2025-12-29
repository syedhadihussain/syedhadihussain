import { CheckCircle, Target, TrendingUp, Users, Star, Search, MapPin, Globe, Building, FileText, MessageSquare, BarChart } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { IndustryData } from "@/lib/industries-config";
import { Link, useLocation } from "react-router-dom";
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from "@/lib/i18n-config";

interface IndustryServicesProps {
  industry: IndustryData;
}

// Comprehensive Local SEO services list
const LOCAL_SEO_SERVICES = [
  {
    title: "Google Business Profile Optimization",
    description: "Complete GBP setup, optimization, and management for maximum local visibility",
    icon: Building
  },
  {
    title: "Local Citation Building",
    description: "Build and manage citations across 100+ local directories and industry platforms",
    icon: FileText
  },
  {
    title: "Review Generation & Management",
    description: "Automated review requests and professional response management",
    icon: MessageSquare
  },
  {
    title: "Local Keyword Research",
    description: "Target high-intent local search terms specific to your industry",
    icon: Search
  },
  {
    title: "Google Maps SEO",
    description: "Rank in the coveted Google Maps 3-pack for local searches",
    icon: MapPin
  },
  {
    title: "Local Link Building",
    description: "Acquire high-quality backlinks from local businesses and organizations",
    icon: Globe
  },
  {
    title: "NAP Consistency Audit",
    description: "Ensure Name, Address, Phone consistency across all platforms",
    icon: Target
  },
  {
    title: "Local Schema Markup",
    description: "Implement LocalBusiness schema for enhanced search visibility",
    icon: BarChart
  },
  {
    title: "Competitor Analysis",
    description: "Analyze local competitors and identify ranking opportunities",
    icon: TrendingUp
  },
  {
    title: "Service Area Pages",
    description: "Create optimized landing pages for each service area you cover",
    icon: Users
  },
  {
    title: "GBP Posts & Updates",
    description: "Regular Google Business Profile posts to engage local customers",
    icon: Star
  },
  {
    title: "Monthly Reporting",
    description: "Detailed reports on rankings, traffic, and conversion metrics",
    icon: CheckCircle
  }
];

const IndustryServices = ({ industry }: IndustryServicesProps) => {
  const { t } = useLanguage();
  const location = useLocation();
  
  const pathParts = location.pathname.split('/').filter(Boolean);
  const currentLang = SUPPORTED_LANGUAGES.includes(pathParts[0] as any) ? pathParts[0] : DEFAULT_LANGUAGE;
  const langLink = (path: string) => `/${currentLang}${path}`;

  return (
    <section className="section-padding bg-card/50">
      <div className="container-narrow">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Our Local SEO Services
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Comprehensive <Link to={langLink("/services")} className="text-primary hover:underline">Local SEO Solutions</Link> for {industry.name}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From <Link to={langLink("/services")} className="text-primary hover:underline">Google Business Profile optimization</Link> to local citation building, we provide complete Local SEO services tailored for {industry.name.toLowerCase()} businesses
            </p>
          </div>
        </ScrollReveal>

        {/* Local SEO Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {LOCAL_SEO_SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={index} animation="fade-up" delay={index * 50}>
                <div className="glass rounded-2xl p-6 h-full hover:bg-primary/5 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Industry-Specific Features */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Specialized Features for {industry.name}
            </h3>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {industry.uniqueFeatures.map((feature, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 30}>
              <div className="flex items-center gap-3 glass rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{feature}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Pain Points & Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pain Points */}
          <ScrollReveal animation="fade-up">
            <div className="glass rounded-2xl p-8">
              <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="text-2xl">😰</span>
                Common Challenges for {industry.name}
              </h3>
              <ul className="space-y-4">
                {industry.painPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-destructive text-sm">✗</span>
                    </span>
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Solutions */}
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="glass rounded-2xl p-8 border-primary/20">
              <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="text-2xl">🚀</span>
                Our Solutions
              </h3>
              <ul className="space-y-4">
                {industry.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </span>
                    <span className="text-foreground">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default IndustryServices;
