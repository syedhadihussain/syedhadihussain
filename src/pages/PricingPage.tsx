import { Check, Sparkles, ArrowRight, Clock, Star, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import SEOHead from "@/components/SEOHead";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLanguage } from "@/contexts/LanguageContext";

const PricingPage = () => {
  const { t } = useLanguage();

  const packages = [
    {
      name: "SEO Audit",
      badge: "50% OFF",
      originalPrice: "$100",
      price: "$50",
      description: "Perfect for understanding your current SEO standing and getting actionable recommendations.",
      features: [
        "Complete GBP Analysis",
        "Website SEO Audit",
        "Competitor Analysis (3 competitors)",
        "Local Ranking Check",
        "NAP Consistency Review",
        "Actionable Recommendations Report",
        "30-min Strategy Call",
      ],
      cta: "Get Audit Now",
      popular: true,
      highlight: "Book within 24 hours for 50% OFF!",
    },
    {
      name: "GBP Management",
      price: "$299",
      period: "/month",
      description: "Ongoing Google Business Profile optimization to keep you ranking high in local search.",
      features: [
        "Weekly GBP Posts & Updates",
        "Photo & Video Optimization",
        "Review Response Management",
        "Q&A Monitoring & Responses",
        "Category & Service Optimization",
        "Monthly Performance Report",
        "Competitor Monitoring",
        "Priority Support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Full Stack Local SEO",
      price: "$599",
      period: "/month",
      description: "Complete local SEO solution for businesses serious about dominating their market.",
      features: [
        "Everything in GBP Management",
        "On-Page SEO Optimization",
        "Local Keyword Research",
        "Citation Building (20/month)",
        "Link Building (5 quality links/month)",
        "Technical SEO Fixes",
        "Schema Markup Implementation",
        "Weekly Strategy Calls",
        "Priority Support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Complete Business Audit",
      price: "$199",
      description: "Comprehensive analysis of your entire digital presence with a detailed action plan.",
      features: [
        "Full Website SEO Audit",
        "GBP & Local SEO Analysis",
        "Competitor Deep Dive (5 competitors)",
        "Social Media Presence Review",
        "Brand Consistency Check",
        "Technical Performance Analysis",
        "Detailed PDF Report (50+ pages)",
        "60-min Strategy Call",
        "30-day Email Support",
      ],
      cta: "Order Audit",
      popular: false,
    },
    {
      name: "Project Management",
      price: "Custom",
      description: "End-to-end digital project management for businesses that need a full-stack solution.",
      features: [
        "Dedicated Project Manager",
        "Website Development",
        "SEO & Marketing Strategy",
        "Social Media Management",
        "Advertising Campaign Management",
        "Vendor Coordination",
        "Weekly Progress Reports",
        "24/7 Priority Support",
        "Custom Dashboard Access",
      ],
      cta: "Get Quote",
      popular: false,
    },
    {
      name: "Local Service Ads",
      price: "$399",
      period: "/month + ad spend",
      description: "Google Local Service Ads management to get guaranteed leads for your service business.",
      features: [
        "LSA Account Setup",
        "Profile Optimization",
        "Badge Verification Support",
        "Lead Response Management",
        "Dispute Handling",
        "Performance Optimization",
        "Weekly Reporting",
        "Budget Recommendations",
      ],
      cta: "Get Started",
      popular: false,
    },
  ];

  const guarantees = [
    {
      icon: Shield,
      title: "Results Guaranteed",
      description: "If you don't see improvement in 90 days, we'll work for free until you do.",
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Audit reports delivered within 48-72 hours. No long waits.",
    },
    {
      icon: Star,
      title: "Proven Track Record",
      description: "100+ businesses helped with an average 150% traffic increase.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Pricing - Local SEO Packages & Services | Syed Hadi"
        description="Affordable local SEO pricing packages. Get your SEO audit for just $50 (50% OFF). Monthly SEO management starting at $299. View all service packages."
        canonical="https://syedhadi.com/pricing"
      />
      <Navigation />
      
      <main className="min-h-screen pt-24 pb-16">
        <div className="container-narrow">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                {t("pricing.subtitle")}
              </span>
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
                {t("pricing.title")}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("pricing.description")}
              </p>
            </div>
          </ScrollReveal>

          {/* Special Offer Banner */}
          <ScrollReveal delay={100}>
            <div className="relative overflow-hidden glass rounded-2xl p-6 lg:p-8 mb-12 border-2 border-primary/30">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-foreground">
                      Limited Time Offer: 50% OFF SEO Audit
                    </h2>
                    <p className="text-muted-foreground">
                      Book within 24 hours and get your comprehensive SEO audit for just $50!
                    </p>
                  </div>
                </div>
                <Button asChild size="lg" className="glow shrink-0">
                  <a href="https://calendly.com/syedhadihussain" target="_blank" rel="noopener noreferrer">
                    Claim Offer <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {packages.map((pkg, index) => (
              <ScrollReveal key={index} delay={150 + index * 50}>
                <div className={`glass rounded-2xl p-6 h-full flex flex-col relative ${pkg.popular ? 'border-2 border-primary' : ''}`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  {pkg.badge && (
                    <div className="absolute -top-3 -right-3">
                      <Badge variant="destructive" className="animate-pulse">
                        <Sparkles className="w-3 h-3 mr-1" />
                        {pkg.badge}
                      </Badge>
                    </div>
                  )}
                  
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {pkg.name}
                  </h3>
                  
                  <div className="mb-4">
                    {pkg.originalPrice && (
                      <span className="text-muted-foreground line-through text-lg mr-2">
                        {pkg.originalPrice}
                      </span>
                    )}
                    <span className="font-display text-3xl font-bold text-foreground">
                      {pkg.price}
                    </span>
                    {pkg.period && (
                      <span className="text-muted-foreground">{pkg.period}</span>
                    )}
                  </div>

                  {pkg.highlight && (
                    <p className="text-sm text-primary font-medium mb-3">
                      {pkg.highlight}
                    </p>
                  )}
                  
                  <p className="text-muted-foreground text-sm mb-6">
                    {pkg.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6 flex-1">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild className={`w-full ${pkg.popular ? 'glow' : ''}`} variant={pkg.popular ? 'default' : 'outline'}>
                    <Link to="/contact">
                      {pkg.cta}
                    </Link>
                  </Button>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Guarantees */}
          <ScrollReveal delay={100}>
            <div className="glass rounded-2xl p-8 lg:p-12 mb-12">
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground text-center mb-8">
                Our Guarantees
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {guarantees.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* FAQ CTA */}
          <ScrollReveal delay={150}>
            <div className="text-center">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Have Questions?
              </h2>
              <p className="text-muted-foreground mb-6">
                Check our FAQ or get in touch for custom solutions tailored to your needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline">
                  <Link to="/faq">View FAQ</Link>
                </Button>
                <Button asChild className="glow">
                  <Link to="/contact">
                    Contact Us <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PricingPage;