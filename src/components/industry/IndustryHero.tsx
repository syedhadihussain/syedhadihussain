import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, MapPin, Star, MessageCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { IndustryData } from "@/lib/industries-config";
import { Link, useLocation } from "react-router-dom";
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from "@/lib/i18n-config";

// Industry-specific images mapping by individual industry slug for unique images per page
const INDUSTRY_HERO_IMAGES: Record<string, string> = {
  // Home Maintenance
  "plumbers": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
  "electricians": "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop",
  "handyman-services": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  "hvac-services": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&h=600&fit=crop",
  "ac-repair-services": "https://images.unsplash.com/photo-1631545806609-5a79ef2fdb0e?w=800&h=600&fit=crop",
  "locksmiths": "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop",
  "painters-decorators": "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=800&h=600&fit=crop",
  "roofing-companies": "https://images.unsplash.com/photo-1632759145354-d3e1e0cc8c4f?w=800&h=600&fit=crop",
  "garage-door-repair-installation-services": "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
  
  // Cleaning
  "home-cleaning-services": "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&h=600&fit=crop",
  "deep-cleaning-services": "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&h=600&fit=crop",
  "carpet-cleaning-services": "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&h=600&fit=crop",
  "pool-cleaning-services": "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&h=600&fit=crop",
  
  // Construction
  "builders": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
  "construction-companies": "https://images.unsplash.com/photo-1541976590-713941681591?w=800&h=600&fit=crop",
  "architects": "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
  "interior-designers": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
  "surveyors": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  
  // Pest Control
  "pest-control-services": "https://images.unsplash.com/photo-1632934969160-7d0e0b9a4d1a?w=800&h=600&fit=crop",
  "termite-control": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  
  // Waste & Recycling
  "waste-removal-services": "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop",
  "skip-hire-services": "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=800&h=600&fit=crop",
  "recycling-companies": "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=800&h=600&fit=crop",
  
  // Landscaping
  "gardeners": "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&h=600&fit=crop",
  "landscaping-services": "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&h=600&fit=crop",
  "tree-surgeons": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
  
  // Energy
  "solar-panel-installers": "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
  "ev-charging-installers": "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=600&fit=crop",
  "energy-auditors": "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop",
  
  // Security
  "cctv-installation-services": "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&h=600&fit=crop",
  "security-system-installers": "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop",
  "smart-home-installers": "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop",
  
  // Healthcare
  "dentists": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop",
  "doctors-clinics": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
  "physiotherapy-clinics": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
  "veterinary-clinics": "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800&h=600&fit=crop",
  "chiropractors": "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop",
  "mental-health-clinics": "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop",
  
  // Beauty
  "hair-salons": "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop",
  "barber-shops": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=600&fit=crop",
  "beauty-salons": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=600&fit=crop",
  "spas": "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop",
  "nail-salons": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=600&fit=crop",
  "tattoo-studios": "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=800&h=600&fit=crop",
  
  // Automotive
  "car-repair-shops": "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop",
  "auto-mechanics": "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800&h=600&fit=crop",
  "car-wash-services": "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&h=600&fit=crop",
  "tyre-shops": "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?w=800&h=600&fit=crop",
  "used-car-dealers": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop",
  "taxi-firms": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop",
  
  // Childcare
  "childcare-centers": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop",
  "daycare-nurseries": "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&h=600&fit=crop",
  "preschools": "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800&h=600&fit=crop",
  "schools": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop",
  "tuition-centers": "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
  "driving-schools": "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop",
  
  // Elderly Care
  "elderly-care-services": "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=600&fit=crop",
  "home-care-services": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=800&h=600&fit=crop",
  "care-homes": "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&h=600&fit=crop",
  
  // Funeral & Religious
  "funeral-services": "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&h=600&fit=crop",
  "churches": "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&h=600&fit=crop",
  
  // Legal & Financial
  "law-firms": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
  "accountants": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
  "mortgage-brokers": "https://images.unsplash.com/photo-1560472355-536de3962603?w=800&h=600&fit=crop",
  "insurance-brokers": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
  
  // Real Estate
  "real-estate-agencies": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
  "estate-agents": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
  "property-management-companies": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
  "letting-agents": "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&h=600&fit=crop",
  
  // Food & Beverage
  "restaurants": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
  "cafes": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop",
  "bakeries": "https://images.unsplash.com/photo-1517433670267-30f41c68b1f2?w=800&h=600&fit=crop",
  "pizza-shops": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop",
  "catering-services": "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&h=600&fit=crop",
  "food-trucks": "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=800&h=600&fit=crop",
  
  // Hospitality & Events
  "hotels": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
  "wedding-planners": "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
  "photographers": "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=600&fit=crop",
  "dj-services": "https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?w=800&h=600&fit=crop",
  
  // Technology
  "it-support-companies": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
  "cybersecurity-services": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
  
  // Professional Services
  "business-consultants": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  "translation-services": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
  
  // Manufacturing
  "signage-companies": "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop",
  "commercial-printing-services": "https://images.unsplash.com/photo-1534033483939-1edf7d07b7ac?w=800&h=600&fit=crop",
  
  // Storage & Logistics
  "storage-facilities": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
  "courier-services": "https://images.unsplash.com/photo-1568454537842-d933259bb258?w=800&h=600&fit=crop",
  "logistics-companies": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
  
  // Fitness
  "gyms": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
  "yoga-studios": "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800&h=600&fit=crop",
  "personal-trainers": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
  "martial-arts-schools": "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&h=600&fit=crop",
  
  // Specialized Trades
  "furniture-restoration-services": "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&h=600&fit=crop",
  "watch-repair-services": "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800&h=600&fit=crop",
  "shoe-repair-services": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop",
};

// Category fallback images for industries without specific images
const CATEGORY_FALLBACK_IMAGES: Record<string, string> = {
  "home-maintenance": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
  "cleaning": "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&h=600&fit=crop",
  "construction": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
  "inspection": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  "pest-control": "https://images.unsplash.com/photo-1632934969160-7d0e0b9a4d1a?w=800&h=600&fit=crop",
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

  // First try to get industry-specific image, then fall back to category image
  const heroImage = INDUSTRY_HERO_IMAGES[industry.slug] || CATEGORY_FALLBACK_IMAGES[industry.categorySlug] || CATEGORY_FALLBACK_IMAGES["home-maintenance"];

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
