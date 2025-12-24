import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import SEOHead from "@/components/SEOHead";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Megaphone, Shield, DollarSign, Phone, Star, TrendingUp, Users, BarChart3 } from "lucide-react";

const features = [
  { icon: Shield, title: "Google Guaranteed Badge", description: "Build trust with the Google Guaranteed badge on your ads" },
  { icon: DollarSign, title: "Pay Per Lead", description: "Only pay when customers contact you directly" },
  { icon: Phone, title: "Direct Calls", description: "Receive calls directly from potential customers" },
  { icon: Star, title: "Review Display", description: "Showcase your ratings prominently in ads" },
];

const services = [
  "LSA Account Setup & Verification", "Background Check Assistance", "License Verification", "Budget Optimization",
  "Lead Management", "Dispute Resolution", "Performance Tracking", "Bid Strategy", "Service Area Optimization", "Category Selection"
];

const caseStudies = [
  { client: "Plumbing Company", result: "+300% qualified leads", metric: "45 leads/month" },
  { client: "HVAC Services", result: "-40% cost per lead", metric: "$25 avg CPL" },
  { client: "Locksmith Business", result: "#1 LSA position", metric: "24/7 coverage" },
];

const LocalServiceAdsPage = () => {
  return (
    <>
      <SEOHead title="Local Service Ads | Google LSA Management" description="Expert Google Local Service Ads management. Get the Google Guaranteed badge and pay only for qualified leads." canonical="/local-service-ads" />
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-24">
          <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
            <div className="container-narrow text-center">
              <ScrollReveal animation="fade-up">
                <Megaphone className="w-16 h-16 text-primary mx-auto mb-6" />
                <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">Google Local Service Ads</h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">Get your business at the top of Google with the Google Guaranteed badge. Pay only for real leads, not clicks.</p>
                <Button asChild size="lg" className="glow"><a href="https://calendly.com/syedhadihussain" target="_blank" rel="noopener noreferrer">Start LSA Campaign<ArrowRight className="w-4 h-4 ml-2" /></a></Button>
              </ScrollReveal>
            </div>
          </section>

          <section className="section-padding">
            <div className="container-narrow">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((f, i) => (
                  <ScrollReveal key={i} animation="scale" delay={i * 100}>
                    <div className="glass rounded-xl p-6 text-center hover:glow-sm transition-all">
                      <f.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                      <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
                      <p className="text-sm text-muted-foreground">{f.description}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          <section className="section-padding bg-card/50">
            <div className="container-narrow">
              <ScrollReveal animation="fade-up"><h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">What's Included</h2></ScrollReveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
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

          <section className="section-padding">
            <div className="container-narrow">
              <ScrollReveal animation="fade-up"><h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">LSA Success Stories</h2></ScrollReveal>
              <div className="grid md:grid-cols-3 gap-6">
                {caseStudies.map((c, i) => (
                  <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                    <div className="glass rounded-xl p-6">
                      <TrendingUp className="w-8 h-8 text-primary mb-4" />
                      <h3 className="font-bold text-foreground mb-2">{c.client}</h3>
                      <p className="text-primary font-semibold mb-1">{c.result}</p>
                      <p className="text-sm text-muted-foreground">{c.metric}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          <section className="section-padding bg-card/50">
            <div className="container-narrow text-center">
              <ScrollReveal animation="scale">
                <div className="glass rounded-3xl p-8 lg:p-12 glow">
                  <h2 className="font-display text-3xl font-bold text-foreground mb-4">Ready to Get More Leads?</h2>
                  <p className="text-muted-foreground mb-8">Get started with Local Service Ads management for $50 consultation.</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="glow"><a href="https://calendly.com/syedhadihussain" target="_blank" rel="noopener noreferrer">Get Started — $50<ArrowRight className="w-4 h-4 ml-2" /></a></Button>
                    <Button asChild variant="outline" size="lg"><Link to="/contact">Contact Me</Link></Button>
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

export default LocalServiceAdsPage;
