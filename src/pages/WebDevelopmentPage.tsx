import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import SEOHead from "@/components/SEOHead";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Code, Smartphone, Zap, Shield, Globe, Search, Gauge, Layers, Database, Lock, RefreshCw, HeadphonesIcon } from "lucide-react";

const features = [
  { icon: Smartphone, title: "Responsive Design", description: "Pixel-perfect websites that work flawlessly on all devices" },
  { icon: Zap, title: "Lightning Fast", description: "Optimized performance for better user experience & SEO" },
  { icon: Shield, title: "Secure & Reliable", description: "Built with security best practices and modern standards" },
  { icon: Search, title: "SEO-Ready", description: "Semantic HTML, structured data, and search-optimized code" },
];

const services = [
  "Custom Website Development",
  "WordPress Development",
  "E-commerce Solutions",
  "Landing Page Design",
  "Website Redesign",
  "Performance Optimization",
  "API Integration",
  "Database Development",
  "CMS Implementation",
  "Responsive Design",
  "Web Application Development",
  "Maintenance & Support",
];

const techStack = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "WordPress", category: "CMS" },
  { name: "Shopify", category: "E-commerce" },
];

const benefits = [
  { icon: Gauge, title: "Core Web Vitals Optimized", description: "Meet Google's performance standards for better rankings" },
  { icon: Layers, title: "Scalable Architecture", description: "Built to grow with your business needs" },
  { icon: Database, title: "Modern Tech Stack", description: "Using cutting-edge technologies for reliability" },
  { icon: Lock, title: "Security First", description: "SSL, security headers, and protected data" },
  { icon: RefreshCw, title: "Easy Updates", description: "Content management systems you can use" },
  { icon: HeadphonesIcon, title: "Ongoing Support", description: "Dedicated support for your website" },
];

const WebDevelopmentPage = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Development Services",
    "description": "Professional web development services including custom websites, WordPress, e-commerce, and web applications optimized for SEO and conversions.",
    "provider": {
      "@type": "Person",
      "@id": "https://syedhadihussain.com/#person",
      "name": "Syed Hadi Hussain"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "serviceType": "Web Development",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Website Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "WordPress Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-commerce Solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Application Development"
          }
        }
      ]
    }
  };

  return (
    <>
      <SEOHead 
        title="Professional Web Development Services – Custom Websites & E-commerce – Syed Hadi Hussain" 
        description="Get a fast, SEO-optimized, conversion-focused website built with modern technologies. Custom web development, WordPress, e-commerce, and web applications." 
        canonical="https://syedhadihussain.com/web-development"
        keywords="web development, custom website, WordPress development, e-commerce website, responsive design, SEO website, web application"
        breadcrumbs={[
          { name: "Home", url: "https://syedhadihussain.com" },
          { name: "Web Development", url: "https://syedhadihussain.com/web-development" }
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
                <Code className="w-16 h-16 text-primary mx-auto mb-6" />
                <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Web Development Services
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                  Build a powerful online presence with fast, secure, and SEO-optimized websites that convert visitors into customers.
                </p>
                <Button asChild size="lg" className="glow">
                  <a href="https://calendly.com/syedhadihussain" target="_blank" rel="noopener noreferrer">
                    Discuss Your Project
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

          {/* Services List */}
          <section className="section-padding bg-card/50">
            <div className="container-narrow">
              <ScrollReveal animation="fade-up">
                <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
                  What's Included
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

          {/* Tech Stack */}
          <section className="section-padding">
            <div className="container-narrow">
              <ScrollReveal animation="fade-up">
                <h2 className="font-display text-3xl font-bold text-foreground text-center mb-4">
                  Modern Tech Stack
                </h2>
                <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                  Built with the latest technologies for performance, security, and scalability
                </p>
              </ScrollReveal>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {techStack.map((tech, i) => (
                  <ScrollReveal key={i} animation="scale" delay={i * 50}>
                    <div className="glass rounded-xl p-4 text-center hover:glow-sm transition-all">
                      <h3 className="font-bold text-foreground">{tech.name}</h3>
                      <p className="text-xs text-muted-foreground">{tech.category}</p>
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
                  Why Choose My Web Development
                </h2>
              </ScrollReveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((b, i) => (
                  <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                    <div className="glass rounded-xl p-6 hover:glow-sm transition-all h-full">
                      <b.icon className="w-8 h-8 text-primary mb-4" />
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
                  <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                    Ready to Build Your Website?
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                    Let's discuss your project and create a website that drives results. Get a free consultation today.
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

export default WebDevelopmentPage;
