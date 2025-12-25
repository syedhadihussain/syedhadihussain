import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import SEOHead from "@/components/SEOHead";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, FileText, Search, Target, Brain, PenTool, BookOpen, MessageSquare, BarChart3, Sparkles, Users } from "lucide-react";

const features = [
  { icon: Search, title: "SEO-Optimized", description: "Content crafted for search engines and human readers alike" },
  { icon: Target, title: "Conversion-Focused", description: "Words that drive action and generate leads" },
  { icon: Brain, title: "AI-Ready Content", description: "Structured for AI search engines and featured snippets" },
  { icon: Sparkles, title: "Brand Voice", description: "Consistent messaging that reflects your unique identity" },
];

const services = [
  "Website Copywriting",
  "Blog Post Writing",
  "Product Descriptions",
  "Landing Page Copy",
  "Email Marketing Content",
  "Social Media Captions",
  "Press Releases",
  "Case Studies",
  "White Papers",
  "Technical Writing",
  "Content Strategy",
  "Content Audits",
];

const contentTypes = [
  { icon: FileText, title: "Website Copy", description: "Compelling homepage, about, and service page content" },
  { icon: BookOpen, title: "Blog Articles", description: "Long-form SEO content that ranks and engages" },
  { icon: MessageSquare, title: "Marketing Copy", description: "Email sequences, ads, and promotional content" },
  { icon: BarChart3, title: "Business Content", description: "Case studies, white papers, and reports" },
];

const benefits = [
  { title: "Semantic SEO", description: "Content structured around topics, not just keywords, for better AI search visibility" },
  { title: "Search Intent Matching", description: "Content that answers exactly what your audience is searching for" },
  { title: "E-E-A-T Optimized", description: "Demonstrating Experience, Expertise, Authority, and Trustworthiness" },
  { title: "Conversion Architecture", description: "Strategic CTAs and persuasive elements woven throughout" },
  { title: "Brand Differentiation", description: "Unique voice that sets you apart from generic competitors" },
  { title: "Multi-Platform Ready", description: "Content optimized for web, social, and AI platforms" },
];

const ContentWritingPage = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Content Writing Services",
    "description": "Professional SEO content writing services including website copy, blog posts, and marketing content optimized for search engines and conversions.",
    "provider": {
      "@type": "Person",
      "@id": "https://syedhadihussain.com/#person",
      "name": "Syed Hadi Hussain"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "serviceType": "Content Writing",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Content Writing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Copywriting"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Blog Post Writing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Content Strategy"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Marketing Copywriting"
          }
        }
      ]
    }
  };

  return (
    <>
      <SEOHead 
        title="SEO Content Writing Services – Blog Posts, Website Copy & Marketing Content – Syed Hadi Hussain" 
        description="Professional content writing services focused on SEO, conversions, and AI-readiness. Get website copy, blog posts, and marketing content that ranks and converts." 
        canonical="https://syedhadihussain.com/content-writing"
        keywords="content writing, SEO content, blog writing, website copywriting, marketing content, content strategy, semantic SEO"
        breadcrumbs={[
          { name: "Home", url: "https://syedhadihussain.com" },
          { name: "Content Writing", url: "https://syedhadihussain.com/content-writing" }
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-24">
          {/* Hero Section */}
          <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
            <div className="container-narrow text-center">
              <ScrollReveal animation="fade-up">
                <PenTool className="w-16 h-16 text-primary mx-auto mb-6" />
                <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Content Writing Services
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                  Words that rank, engage, and convert. SEO-optimized content crafted for search engines, AI platforms, and your target audience.
                </p>
                <Button asChild size="lg" className="glow">
                  <a href="https://calendly.com/syedhadihussain" target="_blank" rel="noopener noreferrer">
                    Discuss Content Goals
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </ScrollReveal>
            </div>
          </section>

          {/* Features */}
          <section className="section-padding">
            <div className="container-narrow">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((f, i) => (
                  <ScrollReveal key={i} animation="scale" delay={i * 100}>
                    <div className="glass rounded-xl p-6 text-center hover:glow-sm transition-all h-full">
                      <f.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                      <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
                      <p className="text-sm text-muted-foreground">{f.description}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* What Makes Us Different */}
          <section className="section-padding bg-card/50">
            <div className="container-narrow">
              <ScrollReveal animation="fade-up">
                <h2 className="font-display text-3xl font-bold text-foreground text-center mb-4">
                  Not Your Average Content Writer
                </h2>
                <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                  Unlike generic writers, I combine SEO expertise with conversion psychology to create content that actually delivers results.
                </p>
              </ScrollReveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((b, i) => (
                  <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                    <div className="glass rounded-xl p-6 hover:glow-sm transition-all h-full">
                      <h3 className="font-bold text-foreground mb-2">{b.title}</h3>
                      <p className="text-sm text-muted-foreground">{b.description}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Content Types */}
          <section className="section-padding">
            <div className="container-narrow">
              <ScrollReveal animation="fade-up">
                <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
                  Content Types
                </h2>
              </ScrollReveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {contentTypes.map((c, i) => (
                  <ScrollReveal key={i} animation="scale" delay={i * 100}>
                    <div className="glass rounded-xl p-6 text-center hover:glow-sm transition-all h-full">
                      <c.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                      <h3 className="font-bold text-foreground mb-2">{c.title}</h3>
                      <p className="text-sm text-muted-foreground">{c.description}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Services List */}
          <section className="section-padding bg-card/50">
            <div className="container-narrow">
              <ScrollReveal animation="fade-up">
                <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
                  Full Content Services
                </h2>
              </ScrollReveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {services.map((s, i) => (
                  <ScrollReveal key={i} animation="fade-up" delay={i * 30}>
                    <div className="flex items-center gap-2 bg-secondary/30 rounded-lg p-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{s}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="section-padding">
            <div className="container-narrow text-center">
              <ScrollReveal animation="scale">
                <div className="glass rounded-3xl p-8 lg:p-12 glow">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                    Ready to Create Content That Converts?
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                    Let's discuss your content goals and develop a strategy that drives traffic, engagement, and conversions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="glow">
                      <a href="https://calendly.com/syedhadihussain" target="_blank" rel="noopener noreferrer">
                        Discuss Content Strategy
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link to="/contact">Contact Me</Link>
                    </Button>
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

export default ContentWritingPage;
