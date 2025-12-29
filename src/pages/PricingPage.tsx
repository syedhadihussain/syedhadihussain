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
  const { t, language } = useLanguage();
  const { expired } = useDiscountTimer();

  const packages = [
    {
      nameKey: "pricing.seoAudit",
      badge: expired ? null : t("pricing.badge.off50"),
      originalPrice: "$100",
      price: expired ? "$100" : "$50",
      descriptionKey: "pricing.seoAuditDesc",
      features: [
        "pricing.feature.gbpAnalysis",
        "pricing.feature.websiteAudit",
        "pricing.feature.competitorAnalysis3",
        "pricing.feature.localRankingCheck",
        "pricing.feature.napConsistency",
        "pricing.feature.recommendations",
        "pricing.feature.strategyCall30",
      ],
      ctaKey: "pricing.cta.getAuditNow",
      popular: true,
      highlightKey: expired ? null : "pricing.signUpHighlight",
    },
    {
      nameKey: "pricing.gbpManagement",
      badge: expired ? null : t("pricing.badge.off25"),
      originalPrice: "$399",
      price: expired ? "$399" : "$299",
      periodKey: "pricing.perMonth",
      descriptionKey: "pricing.gbpManagementDesc",
      features: [
        "pricing.feature.weeklyPosts",
        "pricing.feature.photoVideo",
        "pricing.feature.reviewManagement",
        "pricing.feature.qaMonitoring",
        "pricing.feature.categoryOptimization",
        "pricing.feature.monthlyReport",
        "pricing.feature.competitorMonitoring",
        "pricing.feature.prioritySupport",
      ],
      ctaKey: "pricing.cta.getStarted",
      popular: false,
    },
    {
      nameKey: "pricing.fullStackSeo",
      badge: expired ? null : t("pricing.badge.off25"),
      originalPrice: "$799",
      price: expired ? "$799" : "$599",
      periodKey: "pricing.perMonth",
      descriptionKey: "pricing.fullStackSeoDesc",
      features: [
        "pricing.feature.everythingInGbp",
        "pricing.feature.onPageSeo",
        "pricing.feature.localKeywordResearch",
        "pricing.feature.citationBuilding",
        "pricing.feature.linkBuilding",
        "pricing.feature.technicalSeo",
        "pricing.feature.schemaMarkup",
        "pricing.feature.weeklyCalls",
        "pricing.feature.prioritySupport",
      ],
      ctaKey: "pricing.cta.getStarted",
      popular: false,
    },
    {
      nameKey: "pricing.completeAudit",
      badge: expired ? null : t("pricing.badge.off25"),
      originalPrice: "$265",
      price: expired ? "$265" : "$199",
      descriptionKey: "pricing.completeAuditDesc",
      features: [
        "pricing.feature.fullWebsiteAudit",
        "pricing.feature.gbpLocalAnalysis",
        "pricing.feature.competitorDeepDive",
        "pricing.feature.socialMediaReview",
        "pricing.feature.brandConsistency",
        "pricing.feature.technicalPerformance",
        "pricing.feature.pdfReport",
        "pricing.feature.strategyCall60",
        "pricing.feature.emailSupport30",
      ],
      ctaKey: "pricing.cta.orderAudit",
      popular: false,
    },
    {
      nameKey: "pricing.projectManagement",
      price: t("pricing.custom"),
      descriptionKey: "pricing.projectManagementDesc",
      features: [
        "pricing.feature.dedicatedPM",
        "pricing.feature.webDevelopment",
        "pricing.feature.seoMarketingStrategy",
        "pricing.feature.socialMediaManagement",
        "pricing.feature.adCampaignManagement",
        "pricing.feature.vendorCoordination",
        "pricing.feature.weeklyReports",
        "pricing.feature.support247",
        "pricing.feature.customDashboard",
      ],
      ctaKey: "pricing.cta.getQuote",
      popular: false,
    },
    {
      nameKey: "pricing.localServiceAds",
      badge: expired ? null : t("pricing.badge.off25"),
      originalPrice: "$532",
      price: expired ? "$532" : "$399",
      periodKey: "pricing.perMonthAdSpend",
      descriptionKey: "pricing.localServiceAdsDesc",
      features: [
        "pricing.feature.lsaSetup",
        "pricing.feature.profileOptimization",
        "pricing.feature.badgeVerification",
        "pricing.feature.leadResponse",
        "pricing.feature.disputeHandling",
        "pricing.feature.performanceOptimization",
        "pricing.feature.weeklyReporting",
        "pricing.feature.budgetRecommendations",
      ],
      ctaKey: "pricing.cta.getStarted",
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
                            {t("pricing.limitedTime")}
                          </Badge>
                        </div>
                        <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground">
                          {t("pricing.specialOfferTitle")}
                        </h2>
                        <p className="text-muted-foreground mt-1">
                          {t("pricing.specialOfferDesc")}
                        </p>
                      </div>
                    </div>
                    
                    <DiscountCountdown />
                  </div>
                  
                  <div className="flex justify-center mt-6">
                    <Button asChild size="lg" className="glow group">
                      <Link to={`/${language}/contact`}>
                        {t("pricing.claimDiscount")}
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
                        {t("pricing.mostPopular")}
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
                    {t(pkg.nameKey)}
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
                    {pkg.periodKey && (
                      <span className="text-muted-foreground">{t(pkg.periodKey)}</span>
                    )}
                  </div>

                  {pkg.highlightKey && (
                    <p className="text-sm text-primary font-medium mb-3 flex items-center gap-1">
                      <Timer className="w-3 h-3" />
                      {t(pkg.highlightKey)}
                    </p>
                  )}
                  
                  <p className="text-muted-foreground text-sm mb-6">
                    {t(pkg.descriptionKey)}
                  </p>
                  
                  <ul className="space-y-3 mb-6 flex-1">
                    {pkg.features.map((featureKey, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground">{t(featureKey)}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Multi-location/Multi-service note */}
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 mb-4">
                    <p className="text-xs text-muted-foreground flex items-start gap-1.5">
                      <Sparkles className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-foreground">{t("pricing.multiLocationNote")}</strong> {t("pricing.useCode")} <span className="text-primary font-semibold">MULTI-DISCOUNT</span> {t("pricing.forSpecialPricing")}
                      </span>
                    </p>
                  </div>
                  
                  <Button asChild className={`w-full ${pkg.popular ? 'glow' : ''}`} variant={pkg.popular ? 'default' : 'outline'}>
                    <Link to={`/${language}/contact`}>
                      {t(pkg.ctaKey)}
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
                    {t("pricing.multiLocationDiscount")}
                  </Badge>
                  <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    {t("pricing.multiLocationTitle")}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    {t("pricing.multiLocationDesc")}
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="glass rounded-xl p-6 text-center hover:glow-sm transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">
                      {t("pricing.multiLocationSeo")}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t("pricing.multiLocationSeoDesc")}
                    </p>
                  </div>

                  <div className="glass rounded-xl p-6 text-center hover:glow-sm transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Layers className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">
                      {t("pricing.bundledServices")}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t("pricing.bundledServicesDesc")}
                    </p>
                  </div>

                  <div className="glass rounded-xl p-6 text-center hover:glow-sm transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Building2 className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">
                      {t("pricing.enterpriseSolutions")}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t("pricing.enterpriseDesc")}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild size="lg" className="glow group">
                    <a href="https://calendly.com/syedhadihussain" target="_blank" rel="noopener noreferrer">
                      <Phone className="w-4 h-4 mr-2" />
                      {t("pricing.bookStrategyCall")}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to={`/${language}/contact`}>
                      {t("pricing.requestCustomQuote")}
                    </Link>
                  </Button>
                </div>

                <p className="text-center text-sm text-muted-foreground mt-6">
                  <Sparkles className="w-4 h-4 inline mr-1 text-primary" />
                  {t("pricing.mentionCode")}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* FAQ CTA */}
          <ScrollReveal delay={150}>
            <div className="text-center">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                {t("pricing.haveQuestions")}
              </h2>
              <p className="text-muted-foreground mb-6">
                {t("pricing.questionsDesc")}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" size="lg">
                  <Link to={`/${language}/faq`}>{t("pricing.viewFaq")}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to={`/${language}/case-studies`}>{t("pricing.viewCaseStudies")}</Link>
                </Button>
                <Button asChild className="glow" size="lg">
                  <Link to={`/${language}/contact`}>
                    {t("pricing.contactUs")} <ArrowRight className="w-4 h-4 ml-2" />
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
