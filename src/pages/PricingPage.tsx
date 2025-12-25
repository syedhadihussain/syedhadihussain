import { Check, Sparkles, ArrowRight, Timer, Zap, MapPin, Layers, Percent, Building2, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import SEOHead from "@/components/SEOHead";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLanguage } from "@/contexts/LanguageContext";
import DiscountCountdown from "@/components/DiscountCountdown";
import { useDiscountTimer } from "@/hooks/useDiscountTimer";

const PricingPage = () => {
  const { t } = useLanguage();
  const { expired } = useDiscountTimer();

  // Calculate discounted prices (25% off)
  const calculateDiscount = (price: number) => {
    const discounted = price * 0.75;
    return `$${discounted.toFixed(0)}`;
  };

  const packages = [
    {
      name: "SEO Audit",
      badge: expired ? null : "50% OFF",
      originalPrice: "$100",
      price: expired ? "$100" : "$50",
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
      highlight: expired ? null : "Sign up within 3 days for 50% OFF!",
    },
    {
      name: "GBP Management",
      badge: expired ? null : "25% OFF",
      originalPrice: "$399",
      price: expired ? "$399" : "$299",
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
      badge: expired ? null : "25% OFF",
      originalPrice: "$799",
      price: expired ? "$799" : "$599",
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
      badge: expired ? null : "25% OFF",
      originalPrice: "$265",
      price: expired ? "$265" : "$199",
      description: "Comprehensive analysis of your entire digital presence with a detailed action plan.",
      features: [
        "Full Website SEO Audit",
        "GBP & Local SEO Analysis",
        "Competitor Deep Dive (5 competitors)",
        "Social Media Presence Review",
        "Brand Consistency Check",
        "Technical Performance Analysis",
        "Detailed PDF Report",
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
      badge: expired ? null : "25% OFF",
      originalPrice: "$532",
      price: expired ? "$532" : "$399",
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


  return (
    <>
      <SEOHead
        title="Simple & Transparent Local SEO Pricing That Delivers ROI – Syed Hadi Hussain"
        description="Explore flexible Local SEO pricing plans built for businesses that want better Google Maps rankings, more traffic, and consistent inbound leads without hidden costs."
        canonical="https://syedhadihussain.com/pricing"
        keywords="Local SEO pricing, SEO packages, GBP management cost, SEO audit price, affordable SEO services, ROI"
        breadcrumbs={[
          { name: "Home", url: "https://syedhadihussain.com" },
          { name: "Pricing", url: "https://syedhadihussain.com/pricing" }
        ]}
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

          {/* Special Offer Banner with Countdown */}
          {!expired && (
            <ScrollReveal delay={100}>
              <div className="relative overflow-hidden glass rounded-2xl p-6 lg:p-8 mb-12 border-2 border-primary/30 glow">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
                
                <div className="relative">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-4 text-center lg:text-left">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shrink-0">
                        <Zap className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 justify-center lg:justify-start mb-1">
                          <Badge variant="destructive" className="animate-pulse">
                            <Timer className="w-3 h-3 mr-1" />
                            Limited Time
                          </Badge>
                        </div>
                        <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground">
                          50% OFF SEO Audit!
                        </h2>
                        <p className="text-muted-foreground mt-1">
                          Book within 3 days and get your audit for just $50
                        </p>
                      </div>
                    </div>
                    
                    <DiscountCountdown />
                  </div>
                  
                  <div className="flex justify-center mt-6">
                    <Button asChild size="lg" className="glow group">
                      <Link to="/contact">
                        Claim Your 50% Discount
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {packages.map((pkg, index) => (
              <ScrollReveal key={index} delay={150 + index * 50}>
                <div className={`glass rounded-2xl p-6 h-full flex flex-col relative ${pkg.popular ? 'border-2 border-primary glow-sm' : ''}`}>
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
                    {pkg.originalPrice && !expired && (
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
                    <p className="text-sm text-primary font-medium mb-3 flex items-center gap-1">
                      <Timer className="w-3 h-3" />
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

                  {/* Multi-location/Multi-service note */}
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 mb-4">
                    <p className="text-xs text-muted-foreground flex items-start gap-1.5">
                      <Sparkles className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-foreground">Multi-location or need more services?</strong> Use code <span className="text-primary font-semibold">MULTI-DISCOUNT</span> for special pricing!
                      </span>
                    </p>
                  </div>
                  
                  <Button asChild className={`w-full ${pkg.popular ? 'glow' : ''}`} variant={pkg.popular ? 'default' : 'outline'}>
                    <Link to="/contact">
                      {pkg.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </ScrollReveal>
            ))}
          </div>


          {/* Multi-Location & Custom Plans CTA */}
          <ScrollReveal delay={100}>
            <div className="relative overflow-hidden glass rounded-3xl p-8 lg:p-12 mb-12 border border-primary/20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative">
                <div className="text-center mb-8">
                  <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
                    <Percent className="w-3 h-3 mr-1" />
                    Special Multi-Location Discount
                  </Badge>
                  <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    Managing Multiple Locations or Need Multiple Services?
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Get a custom quote with exclusive discounts for businesses with multiple Google Business Profiles, 
                    franchise locations, or those needing a combination of SEO, web development, content, and marketing services.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="glass rounded-xl p-6 text-center hover:glow-sm transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">
                      Multi-Location SEO
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Managing 2+ GBP locations? Get volume discounts up to 30% off per location.
                    </p>
                  </div>

                  <div className="glass rounded-xl p-6 text-center hover:glow-sm transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Layers className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">
                      Bundled Services
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Combine SEO + Web Dev + Content + Social Media for up to 25% bundle discount.
                    </p>
                  </div>

                  <div className="glass rounded-xl p-6 text-center hover:glow-sm transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Building2 className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">
                      Enterprise Solutions
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Franchise or agency? Custom pricing with dedicated account management.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild size="lg" className="glow group">
                    <a href="https://calendly.com/syedhadihussain" target="_blank" rel="noopener noreferrer">
                      <Phone className="w-4 h-4 mr-2" />
                      Book a Strategy Call
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/contact">
                      Request Custom Quote
                    </Link>
                  </Button>
                </div>

                <p className="text-center text-sm text-muted-foreground mt-6">
                  <Sparkles className="w-4 h-4 inline mr-1 text-primary" />
                  Mention "MULTI-DISCOUNT" when you reach out to unlock exclusive pricing
                </p>
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
                <Button asChild variant="outline" size="lg">
                  <Link to="/faq">View FAQ</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/case-studies">View Case Studies</Link>
                </Button>
                <Button asChild className="glow" size="lg">
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
