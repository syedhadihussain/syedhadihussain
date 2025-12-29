import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, MapPin, Star, MessageCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { IndustryData } from "@/lib/industries-config";
import { Link, useLocation } from "react-router-dom";
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from "@/lib/i18n-config";

// Industry-specific images mapping by category
const INDUSTRY_HERO_IMAGES: Record<string, string> = {
  "home-maintenance": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
  "cleaning": "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&h=600&fit=crop",
  "construction": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
  "inspection": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  "pest-control": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  "waste-recycling": "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop",
  "landscaping": "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&h=600&fit=crop",
  "energy": "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
  "security": "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop",
  "healthcare": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
  "beauty": "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop",
  "automotive": "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop",
  "childcare": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop",
  "elderly-care": "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=600&fit=crop",
  "funeral-religious": "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&h=600&fit=crop",
  "legal-financial": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
  "real-estate": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
  "food-beverage": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
  "hospitality-events": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
  "technology": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
  "professional-services": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  "manufacturing": "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop",
  "storage-logistics": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
  "fitness": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
  "specialized-trades": "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&h=600&fit=crop",
};

interface IndustryHeroProps {
  industry: IndustryData;
}

const IndustryHero = ({ industry }: IndustryHeroProps) => {
  const { t } = useLanguage();
  const location = useLocation();
  
  const pathParts = location.pathname.split('/').filter(Boolean);
  const currentLang = SUPPORTED_LANGUAGES.includes(pathParts[0] as any) ? pathParts[0] : DEFAULT_LANGUAGE;
  const langLink = (path: string) => `/${currentLang}${path}`;

  const heroImage = INDUSTRY_HERO_IMAGES[industry.categorySlug] || INDUSTRY_HERO_IMAGES["home-maintenance"];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-background via-background to-card/50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow relative z-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            {/* Category Badge */}
            <ScrollReveal animation="fade-up">
              <Badge variant="outline" className="mb-6 px-4 py-2 text-sm border-primary/30 bg-primary/5">
                <span className="mr-2">{industry.icon}</span>
                {industry.category}
              </Badge>
            </ScrollReveal>

            {/* Main Heading */}
            <ScrollReveal animation="fade-up" delay={100}>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {industry.keyword.split(' ').map((word, index) => (
                  word.toLowerCase() === 'seo' || word.toLowerCase() === 'local' ? (
                    <span key={index} className="text-primary">{word} </span>
                  ) : (
                    <span key={index}>{word} </span>
                  )
                ))}
              </h1>
            </ScrollReveal>

            {/* Tagline */}
            <ScrollReveal animation="fade-up" delay={150}>
              <p className="text-xl md:text-2xl text-primary font-medium mb-4">
                {industry.heroTagline}
              </p>
            </ScrollReveal>

            {/* Description */}
            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {industry.heroDescription}
              </p>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal animation="fade-up" delay={250}>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="btn-shine group">
                  <Link to={langLink("/contact")}>
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {t("hero.bookConsultation")}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to={langLink("/case-studies")}>
                    View Case Studies
                  </Link>
                </Button>
              </div>
            </ScrollReveal>

            {/* Trust Signals */}
            <ScrollReveal animation="fade-up" delay={300}>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span>5-Star Rated</span>
                </div>
                <div className="h-4 w-px bg-border" />
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Serving Worldwide</span>
                </div>
                <div className="h-4 w-px bg-border" />
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>100+ {industry.name} Clients</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-2xl scale-110" />
                <figure className="relative gradient-border rounded-2xl overflow-hidden">
                  <img
                    src={heroImage}
                    alt={`${industry.name} - Professional Local SEO Services`}
                    className="w-full max-w-lg rounded-2xl object-cover aspect-[4/3]"
                    loading="eager"
                    fetchPriority="high"
                    width="600"
                    height="450"
                  />
                </figure>
                {/* Stats Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl p-4 glow-sm">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {industry.stats.slice(0, 3).map((stat, index) => (
                      <div key={index}>
                        <p className="text-lg font-bold text-primary">{stat.value}</p>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryHero;
