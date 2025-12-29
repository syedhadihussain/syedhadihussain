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
  Target, 
  ArrowRight,
  MapPin,
  Search,
  Settings,
  Code,
  MessageSquare,
  Bot,
  Megaphone,
  BarChart3,
  Briefcase,
  Globe
} from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const certifications = [
  "Google Analytics Certified",
  "Google Search Console Certified",
  "SEMrush SEO Toolkit Certified",
  "Local SEO Training (Opti-Rank Technologies)",
  "HubSpot Content Marketing Certified",
  "Google Ads Certified"
];

const skills = [
  { icon: Target, title: "Local SEO & GBP", description: "Google Business Profile optimization for maximum local visibility" },
  { icon: MapPin, title: "Map SEO Optimization", description: "Dominate Google Maps, Apple Maps, and Bing Maps rankings" },
  { icon: TrendingUp, title: "Technical SEO", description: "Site audits, speed optimization, and structured data implementation" },
  { icon: Users, title: "Citation Building", description: "NAP consistency across 100+ authoritative directories" },
  { icon: Award, title: "Review Management", description: "Reputation building and review generation strategies" },
  { icon: Search, title: "Keyword Research", description: "Semantic SEO and voice search optimization" },
  { icon: MessageSquare, title: "SEO Consultation", description: "Strategic planning and ongoing SEO advisory services" },
  { icon: Code, title: "Web Development", description: "SEO-optimized websites with modern technologies" },
  { icon: Bot, title: "AI Assistants & Chatbots", description: "AI-powered customer service solutions for businesses" },
  { icon: Megaphone, title: "Google Local Service Ads", description: "LSA setup, optimization, and management" },
  { icon: Globe, title: "Social Media Marketing", description: "Social media management and growth strategies" },
  { icon: BarChart3, title: "Meta Ads & PPC", description: "Facebook, Instagram, and paid advertising campaigns" },
  { icon: Briefcase, title: "Project Management", description: "End-to-end digital marketing project coordination" },
  { icon: Settings, title: "Analytics & Tracking", description: "GA4, GTM, and conversion tracking setup" }
];

const AboutPage = () => {
  const { language } = useLanguage();
  const withLang = (path: string) => (path === "/" ? `/${language}` : `/${language}${path}`);

  return (
    <>
      <SEOHead
        title="Meet Your Local SEO Growth Partner Behind Real Google Maps Results – Syed Hadi Hussain"
        description="Discover how Syed Hadi Hussain helps service-based businesses grow through Local SEO, Google Business Profile optimization, and data-backed strategies that generate real leads."
        canonical="/about"
        keywords="Local SEO expert, SEO specialist, Syed Hadi Hussain, Google Business Profile expert, local search growth partner"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "About", url: "/about" }]}
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
                        alt="Syed Hadi Hussain - Senior Local SEO Specialist"
                        className="w-full rounded-2xl object-cover"
                      />
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal animation="fade-left" delay={200}>
                  <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                    About Me
                  </span>
                  <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    Your Partner in Local Search Success
                  </h1>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    I am a results-driven Local SEO specialist with hands-on experience helping service businesses dominate Google Search and Google Business Profile rankings. I focus on practical SEO strategies that generate real calls, leads, and revenue—not just traffic.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    With 7+ years of professional SEO experience and 100+ clients served worldwide, I've developed proven methodologies that consistently deliver measurable results for local businesses.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <Button asChild size="lg" className="glow group min-w-[160px] justify-center">
                      <Link to={withLang("/case-studies")}>
                        View Case Studies
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="min-w-[160px] justify-center">
                      <Link to={withLang("/services")}>
                        Explore Services
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="min-w-[160px] justify-center">
                      <Link to={withLang("/contact")}>
                        Get In Touch
                      </Link>
                    </Button>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="section-padding bg-card/50">
            <div className="container-narrow">
              <ScrollReveal animation="fade-up">
                <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
                  Certifications & Training
                </h2>
              </ScrollReveal>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <ScrollReveal key={cert} animation="scale" delay={index * 100}>
                    <div className="glass rounded-xl p-6 text-center hover:glow-sm transition-all duration-300">
                      <CheckCircle className="w-8 h-8 text-primary mx-auto mb-4" />
                      <p className="font-medium text-foreground">{cert}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="section-padding">
            <div className="container-narrow">
              <ScrollReveal animation="fade-up">
                <div className="text-center mb-12">
                  <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                    Core Expertise
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    A comprehensive skill set covering all aspects of local SEO, digital marketing, and web development.
                  </p>
                </div>
              </ScrollReveal>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <ScrollReveal key={skill.title} animation="fade-up" delay={index * 50}>
                    <div className="glass rounded-xl p-6 hover:glow-sm transition-all duration-300 group h-full">
                      <skill.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="font-display text-lg font-bold text-foreground mb-2">{skill.title}</h3>
                      <p className="text-muted-foreground text-sm">{skill.description}</p>
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
                    <div className="text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="font-display text-4xl lg:text-5xl font-bold text-primary mb-2">100+</div>
                    <div className="text-muted-foreground">Clients Served</div>
                  </div>
                  <div className="text-center">
                    <div className="font-display text-4xl lg:text-5xl font-bold text-primary mb-2">15+</div>
                    <div className="text-muted-foreground">Industries</div>
                  </div>
                  <div className="text-center">
                    <div className="font-display text-4xl lg:text-5xl font-bold text-primary mb-2">95%</div>
                    <div className="text-muted-foreground">Success Rate</div>
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
