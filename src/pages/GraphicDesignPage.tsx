import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import SEOHead from "@/components/SEOHead";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Palette, Image, Layout, Wand2, Monitor, Package, FileImage, Megaphone, Layers, Eye, Zap, Brush } from "lucide-react";

const features = [
  { icon: Eye, title: "Brand Identity", description: "Memorable logos and visual identities that stand out" },
  { icon: Layers, title: "Consistent Branding", description: "Cohesive designs across all platforms and materials" },
  { icon: Zap, title: "Quick Turnaround", description: "Fast delivery without compromising on quality" },
  { icon: Wand2, title: "Creative Solutions", description: "Unique designs tailored to your business goals" },
];

const services = [
  "Logo Design",
  "Brand Identity",
  "Business Cards",
  "Social Media Graphics",
  "Flyer & Brochure Design",
  "Banner Design",
  "Infographic Design",
  "Presentation Design",
  "Email Templates",
  "Package Design",
  "Print Design",
  "UI/UX Design",
];

const designTypes = [
  { icon: Brush, title: "Brand Design", description: "Logos, color palettes, and complete brand guidelines" },
  { icon: Monitor, title: "Digital Design", description: "Web graphics, social media, and digital marketing assets" },
  { icon: Package, title: "Print Design", description: "Business cards, brochures, flyers, and packaging" },
  { icon: Megaphone, title: "Marketing Design", description: "Ad creatives, banners, and promotional materials" },
];

const benefits = [
  { title: "Strategic Design", description: "Every design decision is backed by marketing and branding principles" },
  { title: "Multi-Format Delivery", description: "Get files in all formats you need - print-ready and web-optimized" },
  { title: "Unlimited Revisions", description: "Work with me until you're 100% satisfied with the result" },
  { title: "Brand Consistency", description: "Designs that align with your existing brand or create a new identity" },
  { title: "Fast Communication", description: "Quick responses and clear communication throughout the project" },
  { title: "Source Files Included", description: "Full ownership with editable source files delivered" },
];

const GraphicDesignPage = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Graphic Design Services",
    "description": "Professional graphic design services including logo design, brand identity, social media graphics, and marketing materials for businesses.",
    "provider": {
      "@type": "Person",
      "@id": "https://syedhadihussain.com/#person",
      "name": "Syed Hadi Hussain"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "serviceType": "Graphic Design",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Graphic Design Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Logo Design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Brand Identity Design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Social Media Graphics"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Marketing Design"
          }
        }
      ]
    }
  };

  return (
    <>
      <SEOHead 
        title="Professional Graphic Design Services – Logo, Branding & Marketing Design – Syed Hadi Hussain" 
        description="Creative graphic design services for businesses. Logo design, brand identity, social media graphics, and marketing materials that make your brand stand out." 
        canonical="https://syedhadihussain.com/graphic-design"
        keywords="graphic design, logo design, brand identity, social media graphics, marketing design, business branding, visual design"
        breadcrumbs={[
          { name: "Home", url: "https://syedhadihussain.com" },
          { name: "Graphic Design", url: "https://syedhadihussain.com/graphic-design" }
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
                <Palette className="w-16 h-16 text-primary mx-auto mb-6" />
                <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Graphic Design Services
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                  Creative designs that capture attention, communicate your brand, and drive business results.
                </p>
                <Button asChild size="lg" className="glow">
                  <a href="https://calendly.com/syedhadihussain" target="_blank" rel="noopener noreferrer">
                    Start Your Design Project
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

          {/* Design Types */}
          <section className="section-padding bg-card/50">
            <div className="container-narrow">
              <ScrollReveal animation="fade-up">
                <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
                  Design Categories
                </h2>
              </ScrollReveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {designTypes.map((d, i) => (
                  <ScrollReveal key={i} animation="scale" delay={i * 100}>
                    <div className="glass rounded-xl p-6 text-center hover:glow-sm transition-all h-full">
                      <d.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                      <h3 className="font-bold text-foreground mb-2">{d.title}</h3>
                      <p className="text-sm text-muted-foreground">{d.description}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Services List */}
          <section className="section-padding">
            <div className="container-narrow">
              <ScrollReveal animation="fade-up">
                <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
                  All Design Services
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

          {/* Benefits */}
          <section className="section-padding bg-card/50">
            <div className="container-narrow">
              <ScrollReveal animation="fade-up">
                <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
                  Why Work With Me
                </h2>
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

          {/* CTA */}
          <section className="section-padding">
            <div className="container-narrow text-center">
              <ScrollReveal animation="scale">
                <div className="glass rounded-3xl p-8 lg:p-12 glow">
                  <Image className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                    Ready to Elevate Your Brand?
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                    Let's create stunning visuals that represent your brand and captivate your audience.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="glow">
                      <a href="https://calendly.com/syedhadihussain" target="_blank" rel="noopener noreferrer">
                        Get Free Consultation
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

export default GraphicDesignPage;
