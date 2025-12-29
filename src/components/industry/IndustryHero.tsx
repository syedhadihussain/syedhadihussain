import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, MapPin, Star, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { IndustryData } from "@/lib/industries-config";
import { Link, useLocation } from "react-router-dom";
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from "@/lib/i18n-config";

interface IndustryHeroProps {
  industry: IndustryData;
}

const IndustryHero = ({ industry }: IndustryHeroProps) => {
  const { t } = useLanguage();
  const location = useLocation();
  
  const pathParts = location.pathname.split('/').filter(Boolean);
  const currentLang = SUPPORTED_LANGUAGES.includes(pathParts[0] as any) ? pathParts[0] : DEFAULT_LANGUAGE;
  const langLink = (path: string) => `/${currentLang}${path}`;

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-card/50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow relative z-10 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          {/* Category Badge */}
          <ScrollReveal animation="fade-up">
            <Badge variant="outline" className="mb-6 px-4 py-2 text-sm border-primary/30 bg-primary/5">
              <span className="mr-2">{industry.icon}</span>
              {industry.category}
            </Badge>
          </ScrollReveal>

          {/* Main Heading */}
          <ScrollReveal animation="fade-up" delay={100}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
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
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              {industry.heroDescription}
            </p>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal animation="fade-up" delay={250}>
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              {industry.stats.map((stat, index) => (
                <div key={index} className="glass rounded-xl px-6 py-4 text-center min-w-[140px]">
                  <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal animation="fade-up" delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="btn-shine group">
                <Link to={langLink("/contact")}>
                  {t("hero.bookAudit")}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="https://wa.me/971523695036" target="_blank" rel="noopener noreferrer">
                  {t("hero.whatsapp")}
                </a>
              </Button>
            </div>
          </ScrollReveal>

          {/* Trust Signals */}
          <ScrollReveal animation="fade-up" delay={350}>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
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
      </div>
    </section>
  );
};

export default IndustryHero;
