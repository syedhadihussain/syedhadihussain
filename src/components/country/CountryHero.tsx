import { ArrowRight, MapPin, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { CountryData } from "@/data/countries";
import { cn } from "@/lib/utils";

interface CountryHeroProps {
  country: CountryData;
}

const CountryHero = ({ country }: CountryHeroProps) => {
  const { language, t } = useLanguage();

  const labels = {
    viewProjects: {
      en: "View Successful Projects",
      ar: "عرض المشاريع الناجحة",
      es: "Ver Proyectos Exitosos",
      pt: "Ver Projetos de Sucesso",
      fr: "Voir les Projets Réussis",
      it: "Vedi Progetti di Successo",
      de: "Erfolgreiche Projekte ansehen"
    },
    bookConsultation: {
      en: "Book Consultation",
      ar: "احجز استشارة",
      es: "Reservar Consulta",
      pt: "Agendar Consulta",
      fr: "Réserver une Consultation",
      it: "Prenota Consulenza",
      de: "Beratung buchen"
    },
    servingBusinesses: {
      en: "Serving businesses in",
      ar: "نخدم الشركات في",
      es: "Sirviendo a empresas en",
      pt: "Atendendo empresas em",
      fr: "Au service des entreprises en",
      it: "Al servizio delle aziende in",
      de: "Wir bedienen Unternehmen in"
    },
    localSeoExpert: {
      en: "Local SEO Expert",
      ar: "خبير SEO المحلي",
      es: "Experto en SEO Local",
      pt: "Especialista em SEO Local",
      fr: "Expert SEO Local",
      it: "Esperto SEO Locale",
      de: "Local SEO Experte"
    },
    yearsExp: {
      en: "Years Exp.",
      ar: "سنوات خبرة",
      es: "Años Exp.",
      pt: "Anos Exp.",
      fr: "Ans Exp.",
      it: "Anni Esp.",
      de: "Jahre Erf."
    },
    avgIncrease: {
      en: "Avg. Traffic Increase",
      ar: "متوسط زيادة الزيارات",
      es: "Aumento Promedio",
      pt: "Aumento Médio",
      fr: "Augmentation Moyenne",
      it: "Aumento Medio",
      de: "Durchschn. Steigerung"
    },
    clientsServed: {
      en: "Clients Served",
      ar: "عملاء تم خدمتهم",
      es: "Clientes Atendidos",
      pt: "Clientes Atendidos",
      fr: "Clients Servis",
      it: "Clienti Serviti",
      de: "Betreute Kunden"
    }
  };

  const getLabel = (key: keyof typeof labels) => labels[key][language as keyof typeof labels.viewProjects] || labels[key].en;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-muted/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Country Badge */}
          <div className={cn(
            "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in",
            language === 'ar' && "flex-row-reverse"
          )}>
            <span className="text-2xl">{country.flag}</span>
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              {getLabel('servingBusinesses')} {country.name[language]}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in delay-100">
            {country.heroTitle[language]}
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-primary font-semibold mb-6 animate-fade-in delay-200">
            {country.heroSubtitle[language]}
          </p>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in delay-300">
            {country.heroDescription[language]}
          </p>

          {/* CTA Buttons */}
          <div className={cn(
            "flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in delay-400",
            language === 'ar' && "sm:flex-row-reverse"
          )}>
            <Button asChild size="lg" className="text-lg px-8 py-6 group">
              <Link to={`/${language}/case-studies`}>
                {getLabel('viewProjects')}
                <ArrowRight className={cn("w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform", language === 'ar' && "rotate-180 mr-2 ml-0")} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
              <Link to={`/${language}/contact`}>
                {getLabel('bookConsultation')}
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className={cn(
            "grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-fade-in delay-500",
            language === 'ar' && "direction-rtl"
          )}>
            <div className="flex flex-col items-center p-4 rounded-xl bg-background/50 border border-border/50">
              <Star className="w-6 h-6 text-primary mb-2" />
              <span className="text-2xl font-bold text-foreground">5+</span>
              <span className="text-sm text-muted-foreground">{getLabel('yearsExp')}</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl bg-background/50 border border-border/50">
              <TrendingUp className="w-6 h-6 text-primary mb-2" />
              <span className="text-2xl font-bold text-foreground">300%</span>
              <span className="text-sm text-muted-foreground">{getLabel('avgIncrease')}</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl bg-background/50 border border-border/50">
              <MapPin className="w-6 h-6 text-primary mb-2" />
              <span className="text-2xl font-bold text-foreground">{country.regions.length}</span>
              <span className="text-sm text-muted-foreground">{language === 'en' ? 'States Covered' : t('hero.clients')}</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl bg-background/50 border border-border/50">
              <Star className="w-6 h-6 text-primary mb-2" />
              <span className="text-2xl font-bold text-foreground">50+</span>
              <span className="text-sm text-muted-foreground">{getLabel('clientsServed')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-scroll-indicator" />
        </div>
      </div>

      <style>{`
        @keyframes scroll-indicator {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(8px); opacity: 0.3; }
        }
        .animate-scroll-indicator {
          animation: scroll-indicator 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default CountryHero;
