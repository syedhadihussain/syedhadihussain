import { MapPin, Search, Star, TrendingUp, Globe, Bot, Building2, FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { CountryData } from "@/data/countries";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface CountryServicesProps {
  country: CountryData;
}

const CountryServices = ({ country }: CountryServicesProps) => {
  const { language, t } = useLanguage();

  const labels = {
    ourServices: {
      en: "Our Services",
      ar: "خدماتنا",
      es: "Nuestros Servicios",
      pt: "Nossos Serviços",
      fr: "Nos Services",
      it: "I Nostri Servizi",
      de: "Unsere Dienstleistungen"
    },
    localSeoServicesIn: {
      en: `Local SEO Services in ${country.name[language]}`,
      ar: `خدمات SEO المحلي في ${country.name[language]}`,
      es: `Servicios de SEO Local en ${country.name[language]}`,
      pt: `Serviços de SEO Local em ${country.name[language]}`,
      fr: `Services SEO Local en ${country.name[language]}`,
      it: `Servizi SEO Locale in ${country.name[language]}`,
      de: `Lokale SEO-Dienste in ${country.name[language]}`
    },
    servicesDescription: {
      en: "Comprehensive Local SEO solutions tailored for businesses across all regions",
      ar: "حلول SEO المحلي الشاملة مصممة للشركات في جميع المناطق",
      es: "Soluciones integrales de SEO Local adaptadas para empresas en todas las regiones",
      pt: "Soluções abrangentes de SEO Local adaptadas para empresas em todas as regiões",
      fr: "Solutions SEO Local complètes adaptées aux entreprises de toutes les régions",
      it: "Soluzioni SEO Locale complete adattate per le aziende in tutte le regioni",
      de: "Umfassende Local SEO-Lösungen für Unternehmen in allen Regionen"
    }
  };

  const getLabel = (key: keyof typeof labels) => {
    const label = labels[key];
    if (typeof label === 'string') return label;
    return label[language as keyof typeof label] || label.en;
  };

  const services = [
    {
      icon: MapPin,
      title: {
        en: `Google Maps SEO in ${country.name.en}`,
        ar: `تحسين خرائط جوجل في ${country.name[language]}`,
        es: `SEO en Google Maps en ${country.name[language]}`,
        pt: `SEO no Google Maps em ${country.name[language]}`,
        fr: `SEO Google Maps en ${country.name[language]}`,
        it: `SEO Google Maps in ${country.name[language]}`,
        de: `Google Maps SEO in ${country.name[language]}`
      },
      description: {
        en: "Dominate local map packs and drive foot traffic to your business locations across all regions.",
        ar: "سيطر على حزم الخرائط المحلية وجذب المزيد من العملاء إلى مواقع عملك في جميع المناطق.",
        es: "Domina los paquetes de mapas locales y atrae tráfico a tus ubicaciones comerciales en todas las regiones.",
        pt: "Domine os pacotes de mapas locais e atraia tráfego para suas localizações comerciais em todas as regiões.",
        fr: "Dominez les packs de cartes locales et attirez du trafic vers vos emplacements commerciaux dans toutes les régions.",
        it: "Domina i pacchetti di mappe locali e porta traffico alle tue sedi aziendali in tutte le regioni.",
        de: "Dominieren Sie lokale Kartenpakete und generieren Sie Laufkundschaft für Ihre Geschäftsstandorte in allen Regionen."
      }
    },
    {
      icon: Building2,
      title: {
        en: `Google Business Profile Optimization`,
        ar: `تحسين ملف Google التجاري`,
        es: `Optimización de Perfil de Google Business`,
        pt: `Otimização do Perfil do Google Business`,
        fr: `Optimisation du Profil Google Business`,
        it: `Ottimizzazione Profilo Google Business`,
        de: `Google Business Profil Optimierung`
      },
      description: {
        en: `Complete GBP optimization for ${country.name.en} businesses including photos, posts, Q&A, and review management.`,
        ar: `تحسين كامل لملف GBP للشركات في ${country.name[language]} بما في ذلك الصور والمنشورات والأسئلة وإدارة التقييمات.`,
        es: `Optimización completa de GBP para empresas en ${country.name[language]} incluyendo fotos, publicaciones, Q&A y gestión de reseñas.`,
        pt: `Otimização completa do GBP para empresas em ${country.name[language]} incluindo fotos, posts, Q&A e gestão de avaliações.`,
        fr: `Optimisation complète du GBP pour les entreprises en ${country.name[language]} incluant photos, posts, Q&A et gestion des avis.`,
        it: `Ottimizzazione completa GBP per le aziende in ${country.name[language]} incluse foto, post, Q&A e gestione recensioni.`,
        de: `Komplette GBP-Optimierung für Unternehmen in ${country.name[language]} inkl. Fotos, Posts, Q&A und Bewertungsmanagement.`
      }
    },
    {
      icon: Search,
      title: {
        en: `Local Search Optimization`,
        ar: `تحسين البحث المحلي`,
        es: `Optimización de Búsqueda Local`,
        pt: `Otimização de Busca Local`,
        fr: `Optimisation de Recherche Locale`,
        it: `Ottimizzazione Ricerca Locale`,
        de: `Lokale Suchoptimierung`
      },
      description: {
        en: "Target high-intent local keywords and capture customers actively searching for your services.",
        ar: "استهدف الكلمات المفتاحية المحلية ذات النية العالية واجذب العملاء الذين يبحثون عن خدماتك.",
        es: "Apunta a palabras clave locales de alta intención y captura clientes que buscan activamente tus servicios.",
        pt: "Mire em palavras-chave locais de alta intenção e capture clientes que buscam ativamente seus serviços.",
        fr: "Ciblez des mots-clés locaux à forte intention et captez les clients recherchant activement vos services.",
        it: "Mira a parole chiave locali ad alta intenzione e cattura clienti che cercano attivamente i tuoi servizi.",
        de: "Zielen Sie auf lokale Keywords mit hoher Kaufabsicht und gewinnen Sie Kunden, die aktiv nach Ihren Diensten suchen."
      }
    },
    {
      icon: Star,
      title: {
        en: `Review & Reputation Management`,
        ar: `إدارة التقييمات والسمعة`,
        es: `Gestión de Reseñas y Reputación`,
        pt: `Gestão de Avaliações e Reputação`,
        fr: `Gestion des Avis et Réputation`,
        it: `Gestione Recensioni e Reputazione`,
        de: `Bewertungs- & Reputationsmanagement`
      },
      description: {
        en: "Build trust with potential customers through strategic review acquisition and professional response management.",
        ar: "بناء الثقة مع العملاء المحتملين من خلال الحصول على التقييمات الاستراتيجية وإدارة الردود المهنية.",
        es: "Construye confianza con clientes potenciales a través de la adquisición estratégica de reseñas y gestión profesional de respuestas.",
        pt: "Construa confiança com clientes potenciais através da aquisição estratégica de avaliações e gestão profissional de respostas.",
        fr: "Construisez la confiance avec les clients potentiels grâce à l'acquisition stratégique d'avis et une gestion professionnelle des réponses.",
        it: "Costruisci fiducia con i potenziali clienti attraverso l'acquisizione strategica di recensioni e la gestione professionale delle risposte.",
        de: "Bauen Sie Vertrauen bei potenziellen Kunden durch strategische Bewertungsakquise und professionelles Antwortmanagement auf."
      }
    },
    {
      icon: Globe,
      title: {
        en: `Multi-Platform Map SEO`,
        ar: `تحسين الخرائط متعددة المنصات`,
        es: `SEO de Mapas Multi-Plataforma`,
        pt: `SEO de Mapas Multi-Plataforma`,
        fr: `SEO Cartes Multi-Plateforme`,
        it: `SEO Mappe Multi-Piattaforma`,
        de: `Multi-Plattform Karten-SEO`
      },
      description: {
        en: "Optimize presence on Google Maps, Apple Maps, Bing Maps, and other navigation platforms.",
        ar: "تحسين التواجد على خرائط جوجل وآبل وبينج ومنصات التنقل الأخرى.",
        es: "Optimiza la presencia en Google Maps, Apple Maps, Bing Maps y otras plataformas de navegación.",
        pt: "Otimize a presença no Google Maps, Apple Maps, Bing Maps e outras plataformas de navegação.",
        fr: "Optimisez la présence sur Google Maps, Apple Maps, Bing Maps et autres plateformes de navigation.",
        it: "Ottimizza la presenza su Google Maps, Apple Maps, Bing Maps e altre piattaforme di navigazione.",
        de: "Optimieren Sie die Präsenz auf Google Maps, Apple Maps, Bing Maps und anderen Navigationsplattformen."
      }
    },
    {
      icon: Bot,
      title: {
        en: `AI & Generative Search Optimization`,
        ar: `تحسين البحث بالذكاء الاصطناعي`,
        es: `Optimización para Búsqueda IA`,
        pt: `Otimização para Busca IA`,
        fr: `Optimisation pour Recherche IA`,
        it: `Ottimizzazione per Ricerca IA`,
        de: `KI- & Generative Suchoptimierung`
      },
      description: {
        en: "Future-proof your business for AI assistants like ChatGPT, Google SGE, and voice search.",
        ar: "جهز عملك للمستقبل مع مساعدي الذكاء الاصطناعي مثل ChatGPT و Google SGE والبحث الصوتي.",
        es: "Prepara tu negocio para el futuro con asistentes IA como ChatGPT, Google SGE y búsqueda por voz.",
        pt: "Prepare seu negócio para o futuro com assistentes IA como ChatGPT, Google SGE e busca por voz.",
        fr: "Préparez votre entreprise pour l'avenir avec les assistants IA comme ChatGPT, Google SGE et la recherche vocale.",
        it: "Prepara il tuo business per il futuro con assistenti IA come ChatGPT, Google SGE e ricerca vocale.",
        de: "Machen Sie Ihr Unternehmen zukunftssicher für KI-Assistenten wie ChatGPT, Google SGE und Sprachsuche."
      }
    },
    {
      icon: FileText,
      title: {
        en: `Local Content Strategy`,
        ar: `استراتيجية المحتوى المحلي`,
        es: `Estrategia de Contenido Local`,
        pt: `Estratégia de Conteúdo Local`,
        fr: `Stratégie de Contenu Local`,
        it: `Strategia di Contenuto Locale`,
        de: `Lokale Content-Strategie`
      },
      description: {
        en: "Create location-specific content that resonates with local audiences and search engines.",
        ar: "إنشاء محتوى خاص بالموقع يتوافق مع الجماهير المحلية ومحركات البحث.",
        es: "Crea contenido específico de ubicación que resuene con las audiencias locales y los motores de búsqueda.",
        pt: "Crie conteúdo específico de localização que ressoe com audiências locais e mecanismos de busca.",
        fr: "Créez du contenu spécifique à l'emplacement qui résonne avec les audiences locales et les moteurs de recherche.",
        it: "Crea contenuti specifici per località che risuonino con il pubblico locale e i motori di ricerca.",
        de: "Erstellen Sie standortspezifische Inhalte, die bei lokalen Zielgruppen und Suchmaschinen Anklang finden."
      }
    },
    {
      icon: TrendingUp,
      title: {
        en: `Analytics & Reporting`,
        ar: `التحليلات والتقارير`,
        es: `Análisis e Informes`,
        pt: `Análises e Relatórios`,
        fr: `Analyses et Rapports`,
        it: `Analisi e Reportistica`,
        de: `Analysen & Berichte`
      },
      description: {
        en: "Comprehensive tracking of rankings, traffic, calls, and conversions with monthly reports.",
        ar: "تتبع شامل للتصنيفات والزيارات والمكالمات والتحويلات مع تقارير شهرية.",
        es: "Seguimiento integral de rankings, tráfico, llamadas y conversiones con informes mensuales.",
        pt: "Rastreamento abrangente de rankings, tráfego, chamadas e conversões com relatórios mensais.",
        fr: "Suivi complet des classements, du trafic, des appels et des conversions avec des rapports mensuels.",
        it: "Tracciamento completo di ranking, traffico, chiamate e conversioni con report mensili.",
        de: "Umfassende Verfolgung von Rankings, Traffic, Anrufen und Conversions mit monatlichen Berichten."
      }
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <div className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6",
              language === 'ar' && "flex-row-reverse"
            )}>
              <Search className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{getLabel('ourServices')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              {getLabel('localSeoServicesIn')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {getLabel('servicesDescription')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
              <div className="group h-full p-6 bg-muted/30 rounded-2xl border border-border hover:border-primary/30 hover:bg-muted/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {service.title[language] || service.title.en}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description[language] || service.description.en}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountryServices;
