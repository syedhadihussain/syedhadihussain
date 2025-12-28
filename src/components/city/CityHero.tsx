import { MapPin, Star, TrendingUp, Award, ArrowRight, Eye, MessageCircle, CheckCircle, Phone, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { CityDetailData } from "@/lib/cities-config";
import { StateDetailData } from "@/lib/states-config";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import profilePhoto from "@/assets/profile-photo.png";

interface CityHeroProps {
  city: CityDetailData;
  state: StateDetailData;
}

const CityHero = ({ city, state }: CityHeroProps) => {
  const { t, language } = useLanguage();

  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
      aria-labelledby="city-hero-heading"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-primary/8 rounded-full blur-2xl" />
      </div>

      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 space-y-6">
            <ScrollReveal>
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground mb-4 flex-wrap">
                <Link to={`/${language}/`} className="hover:text-primary transition-colors">
                  Home
                </Link>
                <span>/</span>
                <Link to={`/${language}/us/`} className="hover:text-primary transition-colors">
                  United States
                </Link>
                <span>/</span>
                <Link to={`/${language}/us/${state.code}/`} className="hover:text-primary transition-colors">
                  {state.name}
                </Link>
                <span>/</span>
                <span className="text-foreground font-medium">{city.name}</span>
              </nav>

              {/* Urgency Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <Zap className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">
                  {city.name} Businesses: Stop Losing Customers to Competitors
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 id="city-hero-heading" className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {city.tagline}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                {city.description}
              </p>
            </ScrollReveal>

            {/* Results-Focused Features */}
            <ScrollReveal delay={0.25}>
              <div className="grid grid-cols-2 gap-3">
                {city.uniqueFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="glow group">
                  <a href="https://calendly.com/syedhadihussain" target="_blank" rel="noopener noreferrer">
                    <Phone className="w-4 h-4 mr-2" />
                    Get Your FREE {city.name} SEO Audit
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link to={`/${language}/case-studies`}>
                    <Eye className="w-4 h-4 mr-2" />
                    See Real Results
                  </Link>
                </Button>
              </div>
            </ScrollReveal>

            {/* Trust Indicators */}
            <ScrollReveal delay={0.4}>
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-primary mb-1">
                    <Star className="w-4 h-4 fill-primary" />
                    <span className="font-bold text-xl text-foreground">7+</span>
                  </div>
                  <span className="text-xs text-muted-foreground">Years Proven Results</span>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-primary mb-1">
                    <TrendingUp className="w-4 h-4" />
                    <span className="font-bold text-xl text-foreground">150%+</span>
                  </div>
                  <span className="text-xs text-muted-foreground">Average Visibility Boost</span>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-primary mb-1">
                    <Award className="w-4 h-4" />
                    <span className="font-bold text-xl text-foreground">50+</span>
                  </div>
                  <span className="text-xs text-muted-foreground">Industries Mastered</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-2xl scale-110" />
              <figure className="relative gradient-border rounded-2xl overflow-hidden">
                <img
                  src={profilePhoto}
                  alt={`${city.name} Local SEO Expert - Syed Hadi Hussain - Helping ${city.stateAbbreviation} businesses rank #1 on Google`}
                  className="w-full max-w-md rounded-2xl object-cover"
                  loading="eager"
                  fetchPriority="high"
                  width="400"
                  height="500"
                />
              </figure>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 glass rounded-xl p-4 glow-sm animate-fade-up" style={{ animationDelay: "0.6s" }}>
                <div className="text-sm font-bold text-foreground">Your {city.name} Local SEO Expert</div>
                <div className="text-xs text-muted-foreground">Trusted by {state.name} Businesses</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityHero;
