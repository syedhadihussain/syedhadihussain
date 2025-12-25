import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import SEOHead from "@/components/SEOHead";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Briefcase, Users, BarChart3, Settings, Globe, Target, Megaphone, Code, Bot, TrendingUp } from "lucide-react";

const services = [
  { icon: Target, title: "Local SEO Strategy", description: "Complete local search optimization" },
  { icon: Globe, title: "Google Business Profile", description: "GBP setup and management" },
  { icon: Code, title: "Website Development", description: "SEO-optimized websites" },
  { icon: Megaphone, title: "Paid Advertising", description: "Google Ads, Meta Ads, LSA" },
  { icon: Bot, title: "AI Chatbots", description: "24/7 customer support automation" },
  { icon: BarChart3, title: "Analytics & Tracking", description: "GA4, GTM, conversion tracking" },
  { icon: Users, title: "Social Media", description: "Management and marketing" },
  { icon: Settings, title: "Technical SEO", description: "Site speed and optimization" },
];

const caseStudies = [
  { client: "Multi-Location Phone Repair", result: "5,000+ monthly GBP interactions", services: ["SEO", "GBP", "Reviews"] },
  { client: "Restaurant Chain", result: "36K+ profile views", services: ["Local SEO", "Content", "Ads"] },
  { client: "Home Services Company", result: "+400% organic traffic", services: ["Full Stack SEO", "Website"] },
];

const ProjectManagementPage = () => {
  return (
    <>
      <SEOHead 
        title="Full-Stack Project Management From Strategy to Scalable Growth – Syed Hadi Hussain" 
        description="End-to-end project management covering SEO, development, content, tracking, and optimization to deliver structured execution, faster results, and long-term growth." 
        canonical="https://syedhadihussain.com/project-management"
        keywords="full-stack project management, SEO strategy, scalable growth, digital project execution, content optimization"
        breadcrumbs={[
          { name: "Home", url: "https://syedhadihussain.com" },
          { name: "Project Management", url: "https://syedhadihussain.com/project-management" }
        ]}
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-24">
          <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
            <div className="container-narrow text-center">
              <ScrollReveal animation="fade-up">
                <Briefcase className="w-16 h-16 text-primary mx-auto mb-6" />
                <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">Complete Online Business Management</h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">Let me handle your entire online presence - from strategy to execution. One point of contact, all services managed professionally.</p>
                <Button asChild size="lg" className="glow"><a href="https://calendly.com/syedhadihussain" target="_blank" rel="noopener noreferrer">Book Consultation<ArrowRight className="w-4 h-4 ml-2" /></a></Button>
              </ScrollReveal>
            </div>
          </section>

          <section className="section-padding">
            <div className="container-narrow">
              <ScrollReveal animation="fade-up"><h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">Services We Manage</h2></ScrollReveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((s, i) => (
                  <ScrollReveal key={i} animation="scale" delay={i * 50}>
                    <div className="glass rounded-xl p-6 text-center hover:glow-sm transition-all">
                      <s.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                      <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                      <p className="text-sm text-muted-foreground">{s.description}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          <section className="section-padding bg-card/50">
            <div className="container-narrow">
              <ScrollReveal animation="fade-up"><h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">Project Success Stories</h2></ScrollReveal>
              <div className="grid md:grid-cols-3 gap-6">
                {caseStudies.map((c, i) => (
                  <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                    <div className="glass rounded-xl p-6">
                      <TrendingUp className="w-8 h-8 text-primary mb-4" />
                      <h3 className="font-bold text-foreground mb-2">{c.client}</h3>
                      <p className="text-primary font-semibold mb-3">{c.result}</p>
                      <div className="flex flex-wrap gap-2">{c.services.map((s, j) => (<span key={j} className="px-2 py-1 bg-secondary/50 rounded text-xs text-muted-foreground">{s}</span>))}</div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          <section className="section-padding">
            <div className="container-narrow text-center">
              <ScrollReveal animation="scale">
                <div className="glass rounded-3xl p-8 lg:p-12 glow">
                  <h2 className="font-display text-3xl font-bold text-foreground mb-4">Ready to Streamline Your Business?</h2>
                  <p className="text-muted-foreground mb-8">Get a $50 consultation to discuss your project needs.</p>
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

export default ProjectManagementPage;
