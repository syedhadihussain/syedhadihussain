import { MapPin, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { CountryData } from "@/data/countries";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface CountryMapProps {
  country: CountryData;
}

const CountryMap = ({ country }: CountryMapProps) => {
  const { language } = useLanguage();

  const labels = {
    servingAllRegions: {
      en: "Serving All Regions",
      ar: "نخدم جميع المناطق",
      es: "Sirviendo a Todas las Regiones",
      pt: "Atendendo Todas as Regiões",
      fr: "Au Service de Toutes les Régions",
      it: "Al Servizio di Tutte le Regioni",
      de: "Alle Regionen bedienen"
    },
    comprehensiveCoverage: {
      en: "Comprehensive Coverage",
      ar: "تغطية شاملة",
      es: "Cobertura Integral",
      pt: "Cobertura Abrangente",
      fr: "Couverture Complète",
      it: "Copertura Completa",
      de: "Umfassende Abdeckung"
    },
    allStates: {
      en: "All 50 States",
      ar: "جميع الولايات الـ 50",
      es: "Los 50 Estados",
      pt: "Todos os 50 Estados",
      fr: "Les 50 États",
      it: "Tutti i 50 Stati",
      de: "Alle 50 Bundesstaaten"
    },
    googleMaps: {
      en: "Google Maps SEO",
      ar: "تحسين خرائط جوجل",
      es: "SEO en Google Maps",
      pt: "SEO no Google Maps",
      fr: "SEO Google Maps",
      it: "SEO Google Maps",
      de: "Google Maps SEO"
    },
    appleMaps: {
      en: "Apple Maps Optimization",
      ar: "تحسين خرائط آبل",
      es: "Optimización Apple Maps",
      pt: "Otimização Apple Maps",
      fr: "Optimisation Apple Maps",
      it: "Ottimizzazione Apple Maps",
      de: "Apple Maps Optimierung"
    },
    bingPlaces: {
      en: "Bing Places SEO",
      ar: "تحسين Bing Places",
      es: "SEO Bing Places",
      pt: "SEO Bing Places",
      fr: "SEO Bing Places",
      it: "SEO Bing Places",
      de: "Bing Places SEO"
    },
    aiSearch: {
      en: "AI Search Ready",
      ar: "جاهز للبحث بالذكاء الاصطناعي",
      es: "Listo para Búsqueda IA",
      pt: "Pronto para Busca IA",
      fr: "Prêt pour la Recherche IA",
      it: "Pronto per Ricerca IA",
      de: "KI-Suche bereit"
    }
  };

  const getLabel = (key: keyof typeof labels) => labels[key][language as keyof typeof labels.servingAllRegions] || labels[key].en;

  // Group regions into columns
  const columnCount = 4;
  const regionsPerColumn = Math.ceil(country.regions.length / columnCount);
  const regionColumns = [];
  for (let i = 0; i < columnCount; i++) {
    regionColumns.push(country.regions.slice(i * regionsPerColumn, (i + 1) * regionsPerColumn));
  }

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--primary)) 0%, transparent 50%),
                           radial-gradient(circle at 80% 50%, hsl(var(--primary)) 0%, transparent 50%)`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12">
            <div className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6",
              language === 'ar' && "flex-row-reverse"
            )}>
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{getLabel('servingAllRegions')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              {getLabel('comprehensiveCoverage')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {country.mapDescription[language]}
            </p>
          </div>
        </ScrollReveal>

        {/* Map Placeholder with SVG US Map */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="max-w-5xl mx-auto mb-12">
            <div className="relative bg-background rounded-2xl border border-border p-8 shadow-lg">
              {/* Simple US Map SVG */}
              <div className="aspect-[16/9] bg-muted/50 rounded-xl flex items-center justify-center relative overflow-hidden">
                <svg viewBox="0 0 960 600" className="w-full h-full p-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Simplified US map outline */}
                  <path
                    d="M158 130 L270 120 L350 100 L450 95 L550 100 L650 110 L750 140 L850 180 L880 230 L890 300 L870 380 L820 440 L750 480 L650 500 L550 510 L450 505 L350 490 L250 460 L180 420 L140 360 L120 280 L130 200 Z"
                    fill="hsl(var(--primary) / 0.1)"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                  />
                  {/* State pins */}
                  {[
                    { x: 200, y: 350, name: "CA" },
                    { x: 280, y: 280, name: "NV" },
                    { x: 350, y: 330, name: "AZ" },
                    { x: 400, y: 400, name: "TX" },
                    { x: 500, y: 380, name: "OK" },
                    { x: 550, y: 350, name: "KS" },
                    { x: 600, y: 400, name: "AR" },
                    { x: 650, y: 350, name: "MO" },
                    { x: 700, y: 380, name: "TN" },
                    { x: 750, y: 330, name: "VA" },
                    { x: 800, y: 280, name: "PA" },
                    { x: 820, y: 230, name: "NY" },
                    { x: 700, y: 250, name: "OH" },
                    { x: 650, y: 280, name: "IL" },
                    { x: 600, y: 240, name: "WI" },
                    { x: 550, y: 200, name: "MN" },
                    { x: 480, y: 300, name: "CO" },
                    { x: 350, y: 200, name: "MT" },
                    { x: 280, y: 180, name: "WA" },
                    { x: 250, y: 230, name: "OR" },
                    { x: 750, y: 420, name: "FL" },
                  ].map((pin, i) => (
                    <g key={i} className="animate-pulse" style={{ animationDelay: `${i * 100}ms` }}>
                      <circle
                        cx={pin.x}
                        cy={pin.y}
                        r="8"
                        fill="hsl(var(--primary))"
                        className="drop-shadow-md"
                      />
                      <circle
                        cx={pin.x}
                        cy={pin.y}
                        r="12"
                        fill="hsl(var(--primary) / 0.3)"
                      />
                    </g>
                  ))}
                </svg>

                {/* Map overlay text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center bg-background/80 backdrop-blur-sm rounded-xl px-6 py-4 border border-border">
                    <span className="text-4xl mb-2 block">{country.flag}</span>
                    <p className="font-semibold text-foreground">{getLabel('allStates')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Map Features */}
        <ScrollReveal animation="fade-up" delay={300}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {[
              { label: getLabel('googleMaps'), icon: "🗺️" },
              { label: getLabel('appleMaps'), icon: "🍎" },
              { label: getLabel('bingPlaces'), icon: "🔍" },
              { label: getLabel('aiSearch'), icon: "🤖" },
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border">
                <span className="text-2xl">{feature.icon}</span>
                <span className="text-sm font-medium text-foreground">{feature.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* All States List */}
        <ScrollReveal animation="fade-up" delay={400}>
          <div className="bg-background rounded-2xl border border-border p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              {language === 'en' 
                ? `Serving Businesses in All ${country.regions.length} ${country.slug === 'us' ? 'States' : 'Regions'}`
                : country.mapDescription[language]}
            </h3>
            <div className={cn(
              "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3",
              language === 'ar' && "direction-rtl"
            )}>
              {country.regions.map((region, index) => (
                <div
                  key={region}
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{region}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CountryMap;
