import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import SEOHead from "@/components/SEOHead";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Share2, TrendingUp, Users, MessageCircle, Calendar, BarChart3, Target, Zap, Heart, Eye, Video, Camera } from "lucide-react";

const features = [
  { icon: TrendingUp, title: "Growth Strategy", description: "Data-driven strategies to grow your audience organically" },
  { icon: Calendar, title: "Content Calendar", description: "Consistent posting schedule across all platforms" },
  { icon: Users, title: "Community Building", description: "Engage with your audience and build loyal followers" },
  { icon: BarChart3, title: "Analytics & Reporting", description: "Track performance and optimize for better results" },
];

const services = [
  "Social Media Strategy",
  "Content Creation",
  "Community Management",
  "Paid Social Advertising",
  "Influencer Outreach",
  "Brand Monitoring",
  "Hashtag Research",
  "Competitor Analysis",
  "Content Calendar Planning",
  "Engagement Optimization",
  "Platform Setup",
  "Monthly Reporting",
];

const platforms = [
  { name: "Facebook", description: "Business page management and advertising" },
  { name: "Instagram", description: "Visual content, Stories, and Reels" },
  { name: "LinkedIn", description: "B2B content and professional networking" },
  { name: "Twitter/X", description: "Real-time engagement and brand voice" },
  { name: "TikTok", description: "Short-form video content creation" },
  { name: "YouTube", description: "Video content strategy and optimization" },
];

const contentTypes = [
  { icon: Camera, title: "Visual Content", description: "Eye-catching images, carousels, and graphics" },
  { icon: Video, title: "Video Content", description: "Reels, Stories, and short-form videos" },
  { icon: MessageCircle, title: "Engagement Posts", description: "Interactive content that sparks conversations" },
  { icon: Heart, title: "Community Content", description: "User-generated content and testimonials" },
];

const benefits = [
  { title: "Brand Awareness", description: "Increase visibility and reach your target audience effectively" },
  { title: "Lead Generation", description: "Convert followers into leads and customers" },
  { title: "Customer Loyalty", description: "Build relationships that turn customers into advocates" },
  { title: "SEO Benefits", description: "Social signals that support your overall SEO strategy" },
  { title: "Competitive Edge", description: "Stay ahead of competitors with consistent presence" },
  { title: "Real-Time Insights", description: "Understand your audience through engagement data" },
];

const SocialMediaPage = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Social Media Management & Marketing",
    "description": "Comprehensive social media management and marketing services including content creation, community management, paid advertising, and analytics for business growth.",
    "provider": {
      "@type": "Person",
      "@id": "https://syedhadihussain.com/#person",
      "name": "Syed Hadi Hussain"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "serviceType": "Social Media Marketing",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Social Media Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Social Media Strategy"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Content Creation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Community Management"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Paid Social Advertising"
          }
        }
      ]
    }
  };

  return (
    <>
      <SEOHead 
        title="Social Media Marketing & Management Services That Grow Brands – Syed Hadi Hussain" 
        description="Results-driven social media marketing and management services designed to build brand presence, increase engagement, and generate leads consistently." 
        canonical="https://syedhadihussain.com/social-media"
        keywords="social media management, social media marketing, content creation, community management, social media strategy, paid social ads, brand growth"
        breadcrumbs={[
          { name: "Home", url: "https://syedhadihussain.com" },
          { name: "Social Media Marketing", url: "https://syedhadihussain.com/social-media" }
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
                <Share2 className="w-16 h-16 text-primary mx-auto mb-6" />
                <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Social Media Management & Marketing
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                  Build a powerful social media presence that grows your audience, engages customers, and drives business results.
                </p>
                <Button asChild size="lg" className="glow">
                  <a href="https://calendly.com/syedhadihussain" target="_blank" rel="noopener noreferrer">
                    Get Social Media Strategy
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

          {/* Platforms */}
          <section className="section-padding bg-card/50">
            <div className="container-narrow">
              <ScrollReveal animation="fade-up">
                <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
                  Platforms We Manage
                </h2>
              </ScrollReveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {platforms.map((p, i) => (
                  <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                    <div className="glass rounded-xl p-6 hover:glow-sm transition-all h-full">
                      <h3 className="font-bold text-foreground mb-2">{p.name}</h3>
                      <p className="text-sm text-muted-foreground">{p.description}</p>
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
                  Content We Create
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
                  Full Service Offerings
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
          <section className="section-padding">
            <div className="container-narrow">
              <ScrollReveal animation="fade-up">
                <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
                  Why Invest in Social Media
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
          <section className="section-padding bg-card/50">
            <div className="container-narrow text-center">
              <ScrollReveal animation="scale">
                <div className="glass rounded-3xl p-8 lg:p-12 glow">
                  <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                    Ready to Grow Your Social Presence?
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                    Let's create a social media strategy that builds your brand and drives real business results.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="glow">
                      <a href="https://calendly.com/syedhadihussain" target="_blank" rel="noopener noreferrer">
                        Get Free Strategy Call
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

export default SocialMediaPage;
