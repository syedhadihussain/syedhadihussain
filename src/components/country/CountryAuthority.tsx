import { CheckCircle, Globe, MapPin, Bot, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { CountryData } from "@/data/countries";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import profilePhoto from "@/assets/profile-photo.png";

interface CountryAuthorityProps {
  country: CountryData;
}

const CountryAuthority = ({ country }: CountryAuthorityProps) => {
  const { language } = useLanguage();

  const labels = {
    localSeoExpert: {
      en: "Local SEO Expert",
      ar: "خبير SEO المحلي",
      es: "Experto en SEO Local",
      pt: "Especialista em SEO Local",
      fr: "Expert SEO Local",
      it: "Esperto SEO Locale",
      de: "Local SEO Experte"
    },
    yourTrustedPartner: {
      en: `Your Trusted Local SEO Partner in ${country.name.en}`,
      ar: `شريكك الموثوق في SEO المحلي في ${country.name[language]}`,
      es: `Tu Socio de Confianza en SEO Local en ${country.name[language]}`,
      pt: `Seu Parceiro de Confiança em SEO Local em ${country.name[language]}`,
      fr: `Votre Partenaire de Confiance en SEO Local en ${country.name[language]}`,
      it: `Il Tuo Partner di Fiducia per SEO Locale in ${country.name[language]}`,
      de: `Ihr vertrauenswürdiger Local SEO Partner in ${country.name[language]}`
    },
    description: {
      en: `I specialize in helping businesses across ${country.name.en} dominate local search results. With expertise spanning all ${country.regions.length} ${country.slug === 'us' ? 'states' : 'regions'}, I understand the unique challenges and opportunities of local markets.`,
      ar: `أتخصص في مساعدة الشركات في ${country.name[language]} على السيطرة على نتائج البحث المحلي. مع خبرة تمتد عبر جميع ${country.regions.length} منطقة، أفهم التحديات والفرص الفريدة للأسواق المحلية.`,
      es: `Me especializo en ayudar a empresas en ${country.name[language]} a dominar los resultados de búsqueda local. Con experiencia en las ${country.regions.length} regiones, entiendo los desafíos y oportunidades únicos de los mercados locales.`,
      pt: `Especializo-me em ajudar empresas em ${country.name[language]} a dominar os resultados de busca local. Com experiência em todas as ${country.regions.length} regiões, entendo os desafios e oportunidades únicos dos mercados locais.`,
      fr: `Je me spécialise dans l'aide aux entreprises en ${country.name[language]} pour dominer les résultats de recherche locaux. Avec une expertise couvrant les ${country.regions.length} régions, je comprends les défis et opportunités uniques des marchés locaux.`,
      it: `Sono specializzato nell'aiutare le aziende in ${country.name[language]} a dominare i risultati di ricerca locali. Con esperienza in tutte le ${country.regions.length} regioni, comprendo le sfide e le opportunità uniche dei mercati locali.`,
      de: `Ich bin darauf spezialisiert, Unternehmen in ${country.name[language]} zu helfen, lokale Suchergebnisse zu dominieren. Mit Expertise in allen ${country.regions.length} Regionen verstehe ich die einzigartigen Herausforderungen und Chancen lokaler Märkte.`
    }
  };

  const getLabel = (key: keyof typeof labels) => {
    const label = labels[key];
    if (typeof label === 'string') return label;
    return label[language as keyof typeof label] || label.en;
  };

  const expertise = [
    {
      icon: MapPin,
      title: {
        en: "Multi-Region Expertise",
        ar: "خبرة متعددة المناطق",
        es: "Experiencia Multi-Regional",
        pt: "Experiência Multi-Regional",
        fr: "Expertise Multi-Régions",
        it: "Esperienza Multi-Regionale",
        de: "Multi-Regionen-Expertise"
      },
      description: {
        en: `Proven track record across all ${country.regions.length} ${country.slug === 'us' ? 'states' : 'regions'} with tailored strategies for each market.`,
        ar: `سجل حافل في جميع ${country.regions.length} منطقة مع استراتيجيات مخصصة لكل سوق.`,
        es: `Historial probado en las ${country.regions.length} regiones con estrategias personalizadas para cada mercado.`,
        pt: `Histórico comprovado em todas as ${country.regions.length} regiões com estratégias personalizadas para cada mercado.`,
        fr: `Bilan prouvé dans les ${country.regions.length} régions avec des stratégies adaptées à chaque marché.`,
        it: `Track record comprovato in tutte le ${country.regions.length} regioni con strategie personalizzate per ogni mercato.`,
        de: `Bewährte Erfolgsbilanz in allen ${country.regions.length} Regionen mit maßgeschneiderten Strategien für jeden Markt.`
      }
    },
    {
      icon: Globe,
      title: {
        en: "Google Maps, Apple Maps & Bing",
        ar: "خرائط جوجل وآبل وبينج",
        es: "Google Maps, Apple Maps y Bing",
        pt: "Google Maps, Apple Maps e Bing",
        fr: "Google Maps, Apple Maps et Bing",
        it: "Google Maps, Apple Maps e Bing",
        de: "Google Maps, Apple Maps & Bing"
      },
      description: {
        en: "Comprehensive optimization across all major mapping and navigation platforms for maximum visibility.",
        ar: "تحسين شامل عبر جميع منصات الخرائط والملاحة الرئيسية لأقصى قدر من الظهور.",
        es: "Optimización integral en todas las principales plataformas de mapas y navegación para máxima visibilidad.",
        pt: "Otimização abrangente em todas as principais plataformas de mapas e navegação para máxima visibilidade.",
        fr: "Optimisation complète sur toutes les principales plateformes de cartographie et de navigation pour une visibilité maximale.",
        it: "Ottimizzazione completa su tutte le principali piattaforme di mappe e navigazione per massima visibilità.",
        de: "Umfassende Optimierung auf allen wichtigen Karten- und Navigationsplattformen für maximale Sichtbarkeit."
      }
    },
    {
      icon: Bot,
      title: {
        en: "AI Search Readiness",
        ar: "جاهزية البحث بالذكاء الاصطناعي",
        es: "Preparación para Búsqueda IA",
        pt: "Prontidão para Busca IA",
        fr: "Préparation à la Recherche IA",
        it: "Prontezza per Ricerca IA",
        de: "KI-Suche-Bereitschaft"
      },
      description: {
        en: "Future-proof strategies that prepare your business for AI assistants, voice search, and generative search engines.",
        ar: "استراتيجيات مستقبلية تجهز عملك لمساعدي الذكاء الاصطناعي والبحث الصوتي ومحركات البحث التوليدية.",
        es: "Estrategias preparadas para el futuro que preparan tu negocio para asistentes IA, búsqueda por voz y motores de búsqueda generativos.",
        pt: "Estratégias preparadas para o futuro que preparam seu negócio para assistentes IA, busca por voz e mecanismos de busca generativos.",
        fr: "Des stratégies pérennes qui préparent votre entreprise pour les assistants IA, la recherche vocale et les moteurs de recherche génératifs.",
        it: "Strategie a prova di futuro che preparano il tuo business per assistenti IA, ricerca vocale e motori di ricerca generativi.",
        de: "Zukunftssichere Strategien, die Ihr Unternehmen auf KI-Assistenten, Sprachsuche und generative Suchmaschinen vorbereiten."
      }
    },
    {
      icon: Shield,
      title: {
        en: "Google Certified Expert",
        ar: "خبير معتمد من جوجل",
        es: "Experto Certificado por Google",
        pt: "Especialista Certificado pelo Google",
        fr: "Expert Certifié Google",
        it: "Esperto Certificato Google",
        de: "Google-zertifizierter Experte"
      },
      description: {
        en: "Official Google certifications in Analytics and Search Console with years of hands-on experience.",
        ar: "شهادات جوجل الرسمية في التحليلات و Search Console مع سنوات من الخبرة العملية.",
        es: "Certificaciones oficiales de Google en Analytics y Search Console con años de experiencia práctica.",
        pt: "Certificações oficiais do Google em Analytics e Search Console com anos de experiência prática.",
        fr: "Certifications Google officielles en Analytics et Search Console avec des années d'expérience pratique.",
        it: "Certificazioni Google ufficiali in Analytics e Search Console con anni di esperienza pratica.",
        de: "Offizielle Google-Zertifizierungen in Analytics und Search Console mit jahrelanger praktischer Erfahrung."
      }
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <ScrollReveal animation="fade-right">
            <div>
              <div className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6",
                language === 'ar' && "flex-row-reverse"
              )}>
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">{getLabel('localSeoExpert')}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                {getLabel('yourTrustedPartner')}
              </h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {getLabel('description')}
              </p>

              {/* Profile */}
              <div className={cn(
                "flex items-center gap-4 p-4 bg-muted/30 rounded-xl border border-border",
                language === 'ar' && "flex-row-reverse"
              )}>
                <img
                  src={profilePhoto}
                  alt="Syed Hadi Hussain - Local SEO Expert"
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <h3 className="font-semibold text-foreground">Syed Hadi Hussain</h3>
                  <p className="text-sm text-muted-foreground">
                    {language === 'en' 
                      ? 'Local SEO Specialist & Map SEO Consultant'
                      : getLabel('localSeoExpert')}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Content - Expertise Cards */}
          <ScrollReveal animation="fade-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className="p-5 bg-muted/30 rounded-xl border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {item.title[language] || item.title.en}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description[language] || item.description.en}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CountryAuthority;
