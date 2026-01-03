import { Check, Sparkles, ArrowRight, Timer, Zap, MapPin, Layers, Percent, Building2, Phone, Star, Clock, Gift, Shield, Globe, Award, TrendingUp, Code, Palette, PenTool, Share2, AlertTriangle, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

  // One-Time Services
  const oneTimeServices = [
    {
      nameKey: "pricing.gbpFullAudit",
      badge: t("pricing.badge.off25"),
      originalPrice: "$100",
      price: "$75",
      descriptionKey: "pricing.gbpFullAuditDesc",
      deliveryTime: "pricing.delivery.2to3days",
      urgentDelivery: "pricing.delivery.urgent",
      urgentPrice: "$100",
      features: [
        "pricing.feature.gbpAnalysis",
        "pricing.feature.competitorAnalysis3",
        "pricing.feature.localRankingCheck",
        "pricing.feature.napConsistency",
        "pricing.feature.recommendations",
        "pricing.feature.strategyCall30",
        "pricing.feature.locationStrategy",
        "pricing.feature.businessNameOptimization",
        "pricing.feature.categoryOptimization",
        "pricing.feature.rankingFactorsReview",
      ],
      ctaKey: "pricing.cta.getAuditNow",
      popular: true,
      type: "one-time",
    },
    {
      nameKey: "pricing.gbpVerification",
      badge: t("pricing.badge.off25"),
      originalPrice: "$267",
      price: "$200",
      descriptionKey: "pricing.gbpVerificationDesc",
      features: [
        "pricing.feature.gbpCreation",
        "pricing.feature.businessVerification",
        "pricing.feature.basicInfoSetup",
        "pricing.feature.categorySelection",
        "pricing.feature.serviceAreaSetup",
        "pricing.feature.hoursSetup",
        "pricing.feature.initialPhotos",
        "pricing.feature.verificationSupport",
      ],
      ctaKey: "pricing.cta.getStarted",
      popular: false,
      type: "one-time",
    },
    {
      nameKey: "pricing.gbpOptimization",
      badge: t("pricing.badge.off25"),
      originalPrice: "$400",
      price: "$300",
      descriptionKey: "pricing.gbpOptimizationDesc",
      deliveryTime: "pricing.delivery.20days",
      features: [
        "pricing.feature.fullProfileOptimization",
        "pricing.feature.keywordResearch",
        "pricing.feature.descriptionOptimization",
        "pricing.feature.servicesSetup",
        "pricing.feature.productsSetup",
        "pricing.feature.photoOptimization",
        "pricing.feature.qaSetup",
        "pricing.feature.competitorAnalysis3",
        "pricing.feature.strategyCall30",
      ],
      ctaKey: "pricing.cta.optimizeNow",
      popular: false,
      type: "one-time",
    },
    {
      nameKey: "pricing.fullBusinessAudit",
      badge: t("pricing.badge.off25"),
      originalPrice: "$267",
      price: "$200",
      descriptionKey: "pricing.fullBusinessAuditDesc",
      deliveryTime: "pricing.delivery.5to7days",
      features: [
        "pricing.feature.gbpAnalysis",
        "pricing.feature.websiteAudit",
        "pricing.feature.socialMediaAudit",
        "pricing.feature.onlineReputationCheck",
        "pricing.feature.competitorAnalysis3",
        "pricing.feature.localRankingCheck",
        "pricing.feature.fullPresenceReport",
        "pricing.feature.actionableRecommendations",
        "pricing.feature.strategyCall60",
      ],
      ctaKey: "pricing.cta.getFullAudit",
      popular: false,
      type: "one-time",
    },
  ];

  // Monthly Plans
  const monthlyPlans = [
    {
      nameKey: "pricing.starterPlan",
      badge: expired ? null : t("pricing.badge.affordable"),
      originalPrice: "$199",
      price: expired ? "$199" : "$149",
      periodKey: "pricing.perMonth",
      descriptionKey: "pricing.starterPlanDesc",
      features: [
        "pricing.feature.gbpPostsBiweeklySimple",
        "pricing.feature.basicPhotoUpdates",
        "pricing.feature.reviewResponseSimple",
        "pricing.feature.monthlyReport",
        "pricing.feature.emailSupport",
      ],
      ctaKey: "pricing.cta.getStarted",
      popular: false,
      tier: "starter",
    },
    {
      nameKey: "pricing.gbpManagement",
      badge: expired ? null : t("pricing.badge.mostPopular"),
      originalPrice: "$349",
      price: expired ? "$349" : "$249",
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
      popular: true,
      tier: "pro",
    },
    {
      nameKey: "pricing.fullStackSeo",
      badgeLeft: t("pricing.badge.resultGuarantee"),
      badgeRight: t("pricing.mostSubscribed"),
      originalPrice: "$599",
      price: expired ? "$599" : "$449",
      periodKey: "pricing.perMonth",
      descriptionKey: "pricing.fullStackSeoDesc",
      features: [
        "pricing.feature.everythingInGbp",
        "pricing.feature.websiteSeoIncluded",
        "pricing.feature.onPageSeo",
        "pricing.feature.localKeywordResearch",
        "pricing.feature.technicalSeo",
        "pricing.feature.schemaMarkup",
        "pricing.feature.weeklyCalls",
        "pricing.feature.prioritySupport",
        "pricing.feature.timelineAfterAudit",
      ],
      ctaKey: "pricing.cta.getStarted",
      popular: false,
      tier: "fullstack",
      featured: true,
      resultGuarantee: true,
      forBusinesses: true,
    },
  ];

  // 6-Month Plans (15% discount)
  const sixMonthPlans = [
    {
      nameKey: "pricing.starterPlan",
      badge: t("pricing.badge.save15"),
      originalPrice: "$894",
      price: "$759",
      periodKey: "pricing.per6Months",
      monthlyEquivalent: "$127",
      descriptionKey: "pricing.starterPlanDesc",
      features: [
        "pricing.feature.gbpPostsBiweeklySimple",
        "pricing.feature.basicPhotoUpdates",
        "pricing.feature.reviewResponseSimple",
        "pricing.feature.monthlyReport",
        "pricing.feature.emailSupport",
        "pricing.feature.priceLocked",
      ],
      ctaKey: "pricing.cta.subscribe6",
      popular: false,
      tier: "starter",
      savings: "$135",
    },
    {
      nameKey: "pricing.gbpManagement",
      badge: t("pricing.badge.save15"),
      originalPrice: "$1,494",
      price: "$1,269",
      periodKey: "pricing.per6Months",
      monthlyEquivalent: "$212",
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
        "pricing.feature.priceLocked",
      ],
      ctaKey: "pricing.cta.subscribe6",
      popular: true,
      tier: "pro",
      savings: "$225",
    },
    {
      nameKey: "pricing.fullStackSeo",
      badgeLeft: t("pricing.badge.resultGuarantee"),
      badgeRight: t("pricing.mostSubscribed"),
      originalPrice: "$2,694",
      price: "$2,289",
      periodKey: "pricing.per6Months",
      monthlyEquivalent: "$382",
      descriptionKey: "pricing.fullStackSeoDesc",
      features: [
        "pricing.feature.everythingInGbp",
        "pricing.feature.websiteSeoIncluded",
        "pricing.feature.onPageSeo",
        "pricing.feature.localKeywordResearch",
        "pricing.feature.technicalSeo",
        "pricing.feature.schemaMarkup",
        "pricing.feature.weeklyCalls",
        "pricing.feature.prioritySupport",
        "pricing.feature.priceLocked",
        "pricing.feature.timelineAfterAudit",
      ],
      ctaKey: "pricing.cta.subscribe6",
      popular: false,
      tier: "fullstack",
      savings: "$405",
      featured: true,
      resultGuarantee: true,
      forBusinesses: true,
    },
  ];

  // Annual Plans (25% discount)
  const annualPlans = [
    {
      nameKey: "pricing.starterPlan",
      badge: t("pricing.badge.save25"),
      originalPrice: "$1,788",
      price: "$1,349",
      periodKey: "pricing.perYear",
      monthlyEquivalent: "$112",
      descriptionKey: "pricing.starterPlanDesc",
      features: [
        "pricing.feature.gbpPostsBiweeklySimple",
        "pricing.feature.basicPhotoUpdates",
        "pricing.feature.reviewResponseSimple",
        "pricing.feature.monthlyReport",
        "pricing.feature.emailSupport",
        "pricing.feature.priceLocked",
        "pricing.feature.freeAudit",
      ],
      ctaKey: "pricing.cta.subscribe12",
      popular: false,
      tier: "starter",
      savings: "$439",
    },
    {
      nameKey: "pricing.gbpManagement",
      badge: t("pricing.badge.bestDeal"),
      originalPrice: "$2,988",
      price: "$2,249",
      periodKey: "pricing.perYear",
      monthlyEquivalent: "$187",
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
        "pricing.feature.priceLocked",
        "pricing.feature.freeAudit",
        "pricing.feature.bonusOptimization",
      ],
      ctaKey: "pricing.cta.subscribe12",
      popular: true,
      tier: "pro",
      savings: "$739",
    },
    {
      nameKey: "pricing.fullStackSeo",
      badgeLeft: t("pricing.badge.resultGuarantee"),
      badgeRight: t("pricing.mostSubscribed"),
      originalPrice: "$5,388",
      price: "$3,999",
      periodKey: "pricing.perYear",
      monthlyEquivalent: "$333",
      descriptionKey: "pricing.fullStackSeoDesc",
      features: [
        "pricing.feature.everythingInGbp",
        "pricing.feature.websiteSeoIncluded",
        "pricing.feature.onPageSeo",
        "pricing.feature.localKeywordResearch",
        "pricing.feature.technicalSeo",
        "pricing.feature.schemaMarkup",
        "pricing.feature.weeklyCalls",
        "pricing.feature.prioritySupport",
        "pricing.feature.priceLocked",
        "pricing.feature.freeAudit",
        "pricing.feature.bonusOptimization",
        "pricing.feature.quarterlyStrategy",
        "pricing.feature.timelineAfterAudit",
      ],
      ctaKey: "pricing.cta.subscribe12",
      popular: false,
      tier: "fullstack",
      savings: "$1,389",
      featured: true,
      resultGuarantee: true,
      forBusinesses: true,
    },
  ];

  // Add-On Services
  const addOnServices = [
    {
      nameKey: "pricing.localServiceAds",
      badge: t("pricing.badge.off50"),
      originalPrice: "$399",
      price: "$199",
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
    },
  ];

  // Other Services Plans
  const otherServices = [
    {
      nameKey: "pricing.webDevelopment",
      badge: t("pricing.badge.popular"),
      icon: Code,
      price: t("pricing.getCustomQuote"),
      descriptionKey: "pricing.webDevelopmentDesc",
      features: [
        "pricing.feature.responsiveDesign",
        "pricing.feature.seoOptimized",
        "pricing.feature.fastLoading",
        "pricing.feature.mobileFirst",
        "pricing.feature.customDesign",
        "pricing.feature.cmsIntegration",
        "pricing.feature.advancedTechStack",
        "pricing.feature.support30Days",
      ],
      ctaKey: "pricing.cta.getQuote",
      isQuoteBased: true,
    },
    {
      nameKey: "pricing.contentWriting",
      badge: null,
      icon: PenTool,
      price: t("pricing.getCustomQuote"),
      descriptionKey: "pricing.contentWritingDesc",
      features: [
        "pricing.feature.seoContent",
        "pricing.feature.blogPosts",
        "pricing.feature.productDescriptions",
        "pricing.feature.websiteCopy",
        "pricing.feature.keywordOptimized",
        "pricing.feature.unlimitedRevisions",
      ],
      ctaKey: "pricing.cta.getFreeQuote",
      isQuoteBased: true,
    },
    {
      nameKey: "pricing.graphicDesign",
      badge: null,
      icon: Palette,
      price: t("pricing.getCustomQuote"),
      descriptionKey: "pricing.graphicDesignDesc",
      features: [
        "pricing.feature.logoDesign",
        "pricing.feature.brandIdentity",
        "pricing.feature.socialGraphics",
        "pricing.feature.printMaterials",
        "pricing.feature.customIllustrations",
        "pricing.feature.sourceFiles",
      ],
      ctaKey: "pricing.cta.getFreeQuote",
      isQuoteBased: true,
    },
    {
      nameKey: "pricing.socialMediaMarketing",
      badge: t("pricing.badge.trending"),
      icon: Share2,
      price: t("pricing.getCustomQuote"),
      descriptionKey: "pricing.socialMediaMarketingDesc",
      features: [
        "pricing.feature.contentCalendar",
        "pricing.feature.dailyPosting",
        "pricing.feature.communityManagement",
        "pricing.feature.analyticsReporting",
        "pricing.feature.adManagement",
        "pricing.feature.influencerOutreach",
      ],
      ctaKey: "pricing.cta.getFreeQuote",
      isQuoteBased: true,
    },
    {
      nameKey: "pricing.aiReceptionist",
      badge: t("pricing.badge.new"),
      icon: Phone,
      price: t("pricing.getCustomQuote"),
      descriptionKey: "pricing.aiReceptionistDesc",
      features: [
        "pricing.feature.247Availability",
        "pricing.feature.callHandling",
        "pricing.feature.appointmentBooking",
        "pricing.feature.leadCapture",
        "pricing.feature.customVoice",
        "pricing.feature.integration",
      ],
      ctaKey: "pricing.cta.getFreeQuote",
      isQuoteBased: true,
    },
    {
      nameKey: "pricing.aiChatbots",
      badge: t("pricing.badge.trending"),
      icon: Bot,
      price: t("pricing.getCustomQuote"),
      descriptionKey: "pricing.aiChatbotsDesc",
      features: [
        "pricing.feature.automatedResponses",
        "pricing.feature.leadQualification",
        "pricing.feature.faqHandling",
        "pricing.feature.multiPlatform",
        "pricing.feature.analytics",
        "pricing.feature.customTraining",
      ],
      ctaKey: "pricing.cta.getFreeQuote",
      isQuoteBased: true,
    },
    {
      nameKey: "pricing.businessConsultation",
      badge: t("pricing.badge.free"),
      icon: Building2,
      price: t("pricing.free"),
      descriptionKey: "pricing.businessConsultationDesc",
      features: [
        "pricing.feature.onlinePresenceAudit",
        "pricing.feature.digitalStrategy",
        "pricing.feature.competitorAnalysis",
        "pricing.feature.growthPlan",
        "pricing.feature.implementationGuidance",
        "pricing.feature.ongoingSupport",
      ],
      ctaKey: "pricing.cta.bookFreeConsultation",
      isQuoteBased: false,
      calendlyLink: "https://calendly.com/syedhadihussain",
    },
  ];

  const renderPricingCard = (pkg: any, index: number, showSavings = false) => (
    <ScrollReveal key={index} delay={150 + index * 50}>
      <div className={`glass rounded-2xl p-6 h-full flex flex-col relative ${pkg.popular ? 'border-2 border-primary glow-sm' : ''} ${pkg.featured ? 'border-2 border-green-500 ring-2 ring-green-500/20' : ''}`}>
        {pkg.featured && pkg.badgeLeft && pkg.badgeRight && (
          <>
            <div className="absolute -top-3 -left-3">
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                <Shield className="w-3 h-3 mr-1" />
                {pkg.badgeLeft}
              </Badge>
            </div>
            <div className="absolute -top-3 -right-3">
              <Badge variant="outline" className="border-green-500/50 text-green-600 dark:text-green-400 bg-background">
                <Award className="w-3 h-3 mr-1" />
                {pkg.badgeRight}
              </Badge>
            </div>
          </>
        )}
        {pkg.popular && !pkg.featured && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <Badge className="bg-primary text-primary-foreground">
              {t("pricing.mostPopular")}
            </Badge>
          </div>
        )}
        {pkg.badge && !pkg.badgeLeft && (
          <div className="absolute -top-3 -right-3">
            <Badge variant={pkg.resultGuarantee ? "default" : "destructive"} className={`animate-pulse ${pkg.resultGuarantee ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white' : ''}`}>
              {pkg.resultGuarantee ? <Shield className="w-3 h-3 mr-1" /> : <Sparkles className="w-3 h-3 mr-1" />}
              {pkg.badge}
            </Badge>
          </div>
        )}
        
        <h3 className="font-display text-xl font-bold text-foreground mb-2 mt-2">
          {t(pkg.nameKey)}
        </h3>

        {pkg.forBusinesses && (
          <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg px-3 py-2 mb-3">
            <p className="text-xs font-medium text-orange-600 dark:text-orange-400 flex items-center gap-1.5">
              <AlertTriangle className="w-3 h-3" />
              {t("pricing.forBusinessesNote")}
            </p>
          </div>
        )}
        
        {pkg.resultGuarantee && !pkg.forBusinesses && (
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg px-3 py-2 mb-3">
            <p className="text-xs font-medium text-green-600 dark:text-green-400 flex items-center gap-1.5">
              <TrendingUp className="w-3 h-3" />
              {t("pricing.resultGuaranteeNote")}
            </p>
          </div>
        )}
        
        <div className="mb-2">
          {pkg.originalPrice && (
            <span className="text-muted-foreground line-through text-lg mr-2">
              {pkg.originalPrice}
            </span>
          )}
          <span className="font-display text-3xl font-bold text-foreground">
            {pkg.price}
          </span>
          {pkg.periodKey && (
            <span className="text-muted-foreground text-sm">{t(pkg.periodKey)}</span>
          )}
        </div>

        {pkg.monthlyEquivalent && (
          <p className="text-sm text-primary font-medium mb-2">
            {t("pricing.equivalent")} {pkg.monthlyEquivalent}{t("pricing.perMonth")}
          </p>
        )}

        {showSavings && pkg.savings && (
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg px-3 py-1.5 mb-3 inline-flex items-center gap-1.5 w-fit">
            <Gift className="w-4 h-4 text-green-500" />
            <span className="text-sm font-semibold text-green-600 dark:text-green-400">
              {t("pricing.youSave")} {pkg.savings}
            </span>
          </div>
        )}

        {pkg.highlightKey && (
          <p className="text-sm text-primary font-medium mb-3 flex items-center gap-1">
            <Timer className="w-3 h-3" />
            {t(pkg.highlightKey)}
          </p>
        )}

        {pkg.deliveryTime && (
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg px-3 py-2 mb-3">
            <p className="text-xs font-medium text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
              <Clock className="w-3 h-3" />
              {t(pkg.deliveryTime)}
            </p>
            {pkg.urgentDelivery && (
              <p className="text-xs text-blue-600 dark:text-blue-400 mt-1 flex items-center gap-1.5">
                <Zap className="w-3 h-3" />
                {t(pkg.urgentDelivery)}: {pkg.urgentPrice}
              </p>
            )}
          </div>
        )}
        
        <p className="text-muted-foreground text-sm mb-6">
          {t(pkg.descriptionKey)}
        </p>
        
        <ul className="space-y-3 mb-6 flex-1">
          {pkg.features.map((featureKey: string, i: number) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span className="text-foreground">{t(featureKey)}</span>
            </li>
          ))}
        </ul>
        
        <Button asChild className={`w-full ${pkg.popular || pkg.featured ? 'glow' : ''}`} variant={pkg.popular || pkg.featured ? 'default' : 'outline'}>
          <Link to={`/${language}/subscribe?plan=${encodeURIComponent(t(pkg.nameKey))}&price=${encodeURIComponent(pkg.price)}&duration=${pkg.periodKey ? (pkg.periodKey.includes('Year') ? 'annual' : pkg.periodKey.includes('6') ? '6-month' : 'monthly') : 'one-time'}&services=${encodeURIComponent(pkg.features.slice(0, 5).map((f: string) => t(f)).join(','))}`}>
            {t(pkg.ctaKey)}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
    </ScrollReveal>
  );

  return (
    <>
      <SEOHead
        title="Affordable Local SEO Pricing | GBP Optimization & Management Plans"
        description="Transparent, globally affordable Local SEO pricing. One-time GBP setup from $99, monthly management from $149. 6-month & annual plans with up to 25% discount."
        canonical="https://syedhadihussain.com/pricing"
        keywords="Local SEO pricing, GBP optimization cost, affordable SEO, SEO packages, GBP management, SEO subscription plans"
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
              <div className="flex items-center justify-center gap-2 mb-4">
                <Globe className="w-5 h-5 text-primary" />
                <span className="text-primary text-sm font-medium tracking-wider uppercase">
                  {t("pricing.globallyAffordable")}
                </span>
              </div>
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
                {t("pricing.title")}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
                {t("pricing.description")}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-primary" />
                  {t("pricing.noHiddenFees")}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-primary" />
                  {t("pricing.cancelAnytime")}
                </span>
                <span className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-primary" />
                  {t("pricing.resultsDriven")}
                </span>
              </div>
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
                          {t("pricing.launchOfferTitle")}
                        </h2>
                        <p className="text-muted-foreground mt-1">
                          {t("pricing.launchOfferDesc")}
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

          {/* One-Time Services Section */}
          <ScrollReveal delay={100}>
            <div className="mb-16">
              <div className="text-center mb-8">
                <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
                  <Zap className="w-3 h-3 mr-1" />
                  {t("pricing.oneTimeServices")}
                </Badge>
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-2">
                  {t("pricing.oneTimeTitle")}
                </h2>
                <p className="text-muted-foreground">
                  {t("pricing.oneTimeDesc")}
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {oneTimeServices.map((pkg, index) => renderPricingCard(pkg, index))}
              </div>
            </div>
          </ScrollReveal>

          {/* Featured Plan Banner */}
          <ScrollReveal delay={100}>
            <div className="relative overflow-hidden glass rounded-2xl p-6 lg:p-8 mb-12 border-2 border-green-500/30 bg-gradient-to-r from-green-500/5 to-emerald-500/5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4 text-center lg:text-left">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shrink-0">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 justify-center lg:justify-start mb-1">
                        <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                          <Shield className="w-3 h-3 mr-1" />
                          {t("pricing.badge.resultGuarantee")}
                        </Badge>
                        <Badge variant="outline" className="border-green-500/50 text-green-600 dark:text-green-400">
                          {t("pricing.mostSubscribed")}
                        </Badge>
                      </div>
                      <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground">
                        {t("pricing.fullStackSeo")}
                      </h2>
                      <p className="text-muted-foreground mt-1 max-w-xl">
                        {t("pricing.fullStackSeoFeaturedDesc")}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white glow group">
                      <Link to={`/${language}/subscribe?plan=${encodeURIComponent(t("pricing.fullStackSeo"))}&price=$449&duration=monthly&services=${encodeURIComponent("Full Website SEO, GBP Management, Technical SEO, Weekly Calls")}`}>
                        {t("pricing.cta.getStarted")}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="border-green-500/50 text-green-600 dark:text-green-400 hover:bg-green-500/10">
                      <Link to={`/${language}/blog/full-stack-local-seo-result-guarantee`}>
                        {t("pricing.learnAboutGuarantee")}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Subscription Plans Section */}
          <ScrollReveal delay={100}>
            <div className="mb-16">
              <div className="text-center mb-8">
                <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
                  <Star className="w-3 h-3 mr-1" />
                  {t("pricing.subscriptionPlans")}
                </Badge>
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-2">
                  {t("pricing.subscriptionTitle")}
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {t("pricing.subscriptionDesc")}
                </p>
              </div>

              <Tabs defaultValue="monthly" className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList className="glass">
                    <TabsTrigger value="monthly" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                      {t("pricing.monthly")}
                    </TabsTrigger>
                    <TabsTrigger value="6month" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                      {t("pricing.6month")}
                      <Badge variant="secondary" className="ml-2 text-xs bg-green-500/20 text-green-600 dark:text-green-400">
                        15% OFF
                      </Badge>
                    </TabsTrigger>
                    <TabsTrigger value="annual" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                      {t("pricing.annual")}
                      <Badge variant="secondary" className="ml-2 text-xs bg-green-500/20 text-green-600 dark:text-green-400">
                        25% OFF
                      </Badge>
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="monthly">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {monthlyPlans.map((pkg, index) => renderPricingCard(pkg, index))}
                  </div>
                </TabsContent>

                <TabsContent value="6month">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sixMonthPlans.map((pkg, index) => renderPricingCard(pkg, index, true))}
                  </div>
                </TabsContent>

                <TabsContent value="annual">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {annualPlans.map((pkg, index) => renderPricingCard(pkg, index, true))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </ScrollReveal>

          {/* Add-On Services */}
          <ScrollReveal delay={100}>
            <div className="mb-16">
              <div className="text-center mb-8">
                <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
                  <Layers className="w-3 h-3 mr-1" />
                  {t("pricing.addOnServices")}
                </Badge>
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-2">
                  {t("pricing.addOnTitle")}
                </h2>
                <p className="text-muted-foreground">
                  {t("pricing.addOnDesc")}
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {addOnServices.map((pkg, index) => renderPricingCard(pkg, index))}
              </div>
            </div>
          </ScrollReveal>

          {/* Other Services Section */}
          <ScrollReveal delay={100}>
            <div className="mb-16">
              <div className="text-center mb-8">
                <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
                  <Sparkles className="w-3 h-3 mr-1" />
                  {t("pricing.otherServices")}
                </Badge>
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-2">
                  {t("pricing.otherServicesTitle")}
                </h2>
                <p className="text-muted-foreground">
                  {t("pricing.otherServicesDesc")}
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {otherServices.map((service, index) => (
                  <ScrollReveal key={index} delay={150 + index * 50}>
                    <div className="glass rounded-2xl p-6 h-full flex flex-col relative">
                      {service.badge && (
                        <div className="absolute -top-3 -right-3">
                          <Badge variant="destructive" className="animate-pulse">
                            <Sparkles className="w-3 h-3 mr-1" />
                            {service.badge}
                          </Badge>
                        </div>
                      )}
                      
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      
                      <h3 className="font-display text-lg font-bold text-foreground mb-2">
                        {t(service.nameKey)}
                      </h3>
                      
                      <div className="mb-2">
                        <span className="font-display text-2xl font-bold text-foreground">
                          {service.price}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground text-sm mb-4">
                        {t(service.descriptionKey)}
                      </p>
                      
                      <ul className="space-y-2 mb-6 flex-1">
                        {service.features.map((featureKey: string, i: number) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-foreground">{t(featureKey)}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {service.calendlyLink ? (
                        <Button asChild variant="default" className="w-full glow">
                          <a href={service.calendlyLink} target="_blank" rel="noopener noreferrer">
                            {t(service.ctaKey)}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </a>
                        </Button>
                      ) : (
                        <Button asChild variant="outline" className="w-full">
                          <Link to={`/${language}/contact?service=${encodeURIComponent(t(service.nameKey))}`}>
                            {t(service.ctaKey)}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

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
                    {t("pricing.contactUs")}
                    <ArrowRight className="w-4 h-4 ml-2" />
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
