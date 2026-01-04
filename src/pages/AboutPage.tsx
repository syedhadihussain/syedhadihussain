import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import SEOHead from "@/components/SEOHead";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  CheckCircle, 
  Award, 
  Users, 
  TrendingUp, 
  ArrowRight,
  MapPin,
  Search,
  Globe,
  Bot,
  Megaphone,
  BarChart3,
  Briefcase,
  Lightbulb,
  Zap,
  Shield,
  Rocket,
  HeartHandshake,
  Target,
  Settings,
  Workflow
} from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

// Certification keys for translation
const certificationKeys = [
  "about.cert.googleAnalytics",
  "about.cert.googleSearchConsole",
  "about.cert.semrush",
  "about.cert.localSeo",
  "about.cert.hubspot",
  "about.cert.googleAds"
];

// Process steps for "How I Work" section
const processStepKeys = [
  { icon: Search, titleKey: "about.process.step1Title", descKey: "about.process.step1Desc" },
  { icon: MapPin, titleKey: "about.process.step2Title", descKey: "about.process.step2Desc" },
  { icon: Globe, titleKey: "about.process.step3Title", descKey: "about.process.step3Desc" },
  { icon: Bot, titleKey: "about.process.step4Title", descKey: "about.process.step4Desc" },
  { icon: Megaphone, titleKey: "about.process.step5Title", descKey: "about.process.step5Desc" },
  { icon: BarChart3, titleKey: "about.process.step6Title", descKey: "about.process.step6Desc" },
];

// Why clients choose me
const whyChooseKeys = [
  { icon: Target, titleKey: "about.why.localSeoSpecialist" },
  { icon: Lightbulb, titleKey: "about.why.clearPractical" },
  { icon: Shield, titleKey: "about.why.bestFitSolutions" },
  { icon: Zap, titleKey: "about.why.aiAutomation" },
  { icon: Rocket, titleKey: "about.why.scalable" },
  { icon: Settings, titleKey: "about.why.futureReady" },
  { icon: HeartHandshake, titleKey: "about.why.endToEnd" },
];

// Core expertise keys
const expertiseKeys = [
  { icon: MapPin, titleKey: "about.expertise.localSeoGbp", descKey: "about.expertise.localSeoGbpDesc" },
  { icon: Search, titleKey: "about.expertise.voiceMapSeo", descKey: "about.expertise.voiceMapSeoDesc" },
  { icon: Globe, titleKey: "about.expertise.webDev", descKey: "about.expertise.webDevDesc" },
  { icon: Bot, titleKey: "about.expertise.aiChatbots", descKey: "about.expertise.aiChatbotsDesc" },
  { icon: Workflow, titleKey: "about.expertise.automation", descKey: "about.expertise.automationDesc" },
  { icon: Megaphone, titleKey: "about.expertise.digitalMarketing", descKey: "about.expertise.digitalMarketingDesc" },
  { icon: Briefcase, titleKey: "about.expertise.projectManagement", descKey: "about.expertise.projectManagementDesc" },
  { icon: TrendingUp, titleKey: "about.expertise.scalable", descKey: "about.expertise.scalableDesc" },
];

const AboutPage = () => {
  const { language, t } = useLanguage();
  const withLang = (path: string) => (path === "/" ? `/${language}` : `/${language}${path}`);

  return (
    <>
      <SEOHead
        title={t("about.seoTitle")}
        description={t("about.seoDescription")}
        canonical="/about"
        keywords={t("about.seoKeywords")}
        breadcrumbs={[{ name: t("nav.home"), url: "/" }, { name: t("nav.about"), url: "/about" }]}
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        <main id="main-content" role="main" aria-label="About page content" className="pt-24">
          {/* Hero Section */}
          <section className="section-padding">
            <div className="container-narrow">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <ScrollReveal animation="fade-right">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-2xl scale-110" />
                    <div className="relative gradient-border rounded-2xl overflow-hidden">
                      <img
                        src={profilePhoto}
                        alt={t("about.imageAlt")}
                        className="w-full rounded-2xl object-cover"
                      />
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal animation="fade-left" delay={200}>
                  <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                    {t("about.subtitle")}
                  </span>
                  <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    {t("about.title")}
                  </h1>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {t("about.description1")}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {t("about.description2")}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <Button asChild size="lg" className="glow group min-w-[160px] justify-center">
                      <Link to={withLang("/case-studies")}>
                        {t("about.viewCaseStudies")}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="min-w-[160px] justify-center">
                      <Link to={withLang("/services")}>
                        {t("about.exploreServices")}
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="min-w-[160px] justify-center">
                      <Link to={withLang("/contact")}>
                        {t("about.getInTouch")}
                      </Link>
                    </Button>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>

          {/* How I Work Section */}
          <section className="section-padding bg-card/50">
            <div className="container-narrow">
              <ScrollReveal animation="fade-up">
                <div className="text-center mb-12">
                  <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                    {t("about.processTitle")}
                  </h2>
                </div>
              </ScrollReveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {processStepKeys.map((step, index) => (
                  <ScrollReveal key={step.titleKey} animation="fade-up" delay={index * 100}>
                    <div className="glass rounded-xl p-6 hover:glow-sm transition-all duration-300 group h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <step.icon className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-xs font-bold text-primary/60 bg-primary/5 px-3 py-1 rounded-full">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-bold text-foreground mb-2">{t(step.titleKey)}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{t(step.descKey)}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Why Clients Choose Me */}
          <section className="section-padding">
            <div className="container-narrow">
              <ScrollReveal animation="fade-up">
                <div className="text-center mb-12">
                  <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                    {t("about.whyChooseTitle")}
                  </h2>
                </div>
              </ScrollReveal>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {whyChooseKeys.map((item, index) => (
                  <ScrollReveal key={item.titleKey} animation="scale" delay={index * 50}>
                    <div className="glass rounded-xl p-5 text-center hover:glow-sm transition-all duration-300 group h-full flex flex-col items-center">
                      <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                      <p className="text-foreground font-medium text-sm">{t(item.titleKey)}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="section-padding bg-card/50">
            <div className="container-narrow">
              <ScrollReveal animation="fade-up">
                <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
                  {t("about.certificationsTitle")}
                </h2>
              </ScrollReveal>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificationKeys.map((certKey, index) => (
                  <ScrollReveal key={certKey} animation="scale" delay={index * 100}>
                    <div className="glass rounded-xl p-6 text-center hover:glow-sm transition-all duration-300">
                      <Award className="w-8 h-8 text-primary mx-auto mb-4" />
                      <p className="font-medium text-foreground">{t(certKey)}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Core Expertise */}
          <section className="section-padding">
            <div className="container-narrow">
              <ScrollReveal animation="fade-up">
                <div className="text-center mb-12">
                  <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                    {t("about.coreExpertiseTitle")}
                  </h2>
                </div>
              </ScrollReveal>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {expertiseKeys.map((skill, index) => (
                  <ScrollReveal key={skill.titleKey} animation="fade-up" delay={index * 50}>
                    <div className="glass rounded-xl p-6 hover:glow-sm transition-all duration-300 group h-full">
                      <skill.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="font-display text-base font-bold text-foreground mb-2">{t(skill.titleKey)}</h3>
                      <p className="text-muted-foreground text-sm">{t(skill.descKey)}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="section-padding bg-primary/5">
            <div className="container-narrow">
              <ScrollReveal animation="scale">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="font-display text-4xl lg:text-5xl font-bold text-primary mb-2">7+</div>
                    <div className="text-muted-foreground">{t("about.yearsExperience")}</div>
                  </div>
                  <div className="text-center">
                    <div className="font-display text-4xl lg:text-5xl font-bold text-primary mb-2">100+</div>
                    <div className="text-muted-foreground">{t("about.clientsServed")}</div>
                  </div>
                  <div className="text-center">
                    <div className="font-display text-4xl lg:text-5xl font-bold text-primary mb-2">15+</div>
                    <div className="text-muted-foreground">{t("about.industries")}</div>
                  </div>
                  <div className="text-center">
                    <div className="font-display text-4xl lg:text-5xl font-bold text-primary mb-2">95%</div>
                    <div className="text-muted-foreground">{t("about.successRate")}</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};


export default AboutPage;
