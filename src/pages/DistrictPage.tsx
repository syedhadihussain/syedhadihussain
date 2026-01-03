// District Page for territories with 2-tier structure (Country → District)
// Used for: Saint Helena (sh)

import { useParams, Navigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { isValidCountry, getCountryData } from "@/lib/countries-config";
import { getSHStateData, isValidSHState } from "@/lib/sh-states-config";
import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import { Helmet } from "react-helmet-async";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import Testimonials from "@/components/portfolio/Testimonials";
import CaseStudies from "@/components/portfolio/CaseStudies";
import FullStackCTA from "@/components/portfolio/FullStackCTA";
import FAQ from "@/components/portfolio/FAQ";
import GeoBreadcrumb from "@/components/geo/GeoBreadcrumb";
import ParentCountryLink from "@/components/geo/ParentCountryLink";
import IndustriesWeServe from "@/components/geo/IndustriesWeServe";
import {
  Search,
  MapPin,
  TrendingUp,
  Users,
  Star,
  Clock,
  Target,
  Award,
  CheckCircle2,
  Globe,
  Smartphone,
  BarChart3,
  Bot,
} from "lucide-react";
import { Link } from "react-router-dom";

// Countries that use 2-tier structure (no intermediate state level)
const TWO_TIER_COUNTRIES = ["sh"];

const DistrictPage = () => {
  const { districtCode } = useParams<{ districtCode: string }>();
  const { t, language } = useLanguage();
  
  // For now, this page only handles Saint Helena (sh)
  const countryCode = "sh";

  // Validate district code based on country
  let district: ReturnType<typeof getSHStateData> = undefined;
  
  if (!districtCode || !isValidSHState(districtCode)) {
    return <Navigate to={`/${language}/${countryCode}`} replace />;
  }
  district = getSHStateData(districtCode);

  const country = getCountryData(countryCode);

  if (!district || !country) {
    return <Navigate to={`/${language}/${countryCode}`} replace />;
  }

  // Generate unique SEO metadata
  const pageTitle = `Local SEO Services ${district.name}, ${country.name} | Google Maps & AI Search Expert`;
  const pageDescription = district.description || 
    `Expert Local SEO services in ${district.name}, ${country.name}. Boost your Google Maps rankings, optimize your Google Business Profile, and dominate AI search results. 7+ years experience.`;
  const keywords = [
    `local SEO ${district.name}`,
    `SEO services ${district.name} ${country.name}`,
    `Google Maps optimization ${district.name}`,
    `Google Business Profile ${district.name}`,
    `local SEO consultant ${country.name}`,
    `AI search optimization ${district.name}`,
    `${district.name} SEO expert`,
    `local search marketing ${country.name}`
  ].join(", ");

  const canonicalUrl = `https://syedhadihussain.com/${language}/${countryCode}/${districtCode}`;

  // Services data
  const services = [
    {
      icon: Search,
      title: t("Google Business Profile Optimization"),
      description: t(`Maximize your ${district.name} business visibility on Google Maps with expert GBP optimization, ensuring customers find you first.`),
    },
    {
      icon: MapPin,
      title: t("Local Citations & NAP Consistency"),
      description: t(`Build authoritative local citations across ${country.name} directories with consistent NAP data for stronger local rankings.`),
    },
    {
      icon: TrendingUp,
      title: t("Local Keyword Research & Strategy"),
      description: t(`Target high-intent local keywords that ${district.name} customers actually search for, driving qualified traffic to your business.`),
    },
    {
      icon: Bot,
      title: t("AI Search Optimization (AIO)"),
      description: t(`Future-proof your business for AI-powered search engines like ChatGPT, Claude, and Google AI Overview.`),
    },
    {
      icon: Star,
      title: t("Review Management & Generation"),
      description: t(`Build a stellar reputation with strategic review generation and management that attracts more ${district.name} customers.`),
    },
    {
      icon: Globe,
      title: t("Local Content Marketing"),
      description: t(`Create compelling ${district.name}-focused content that resonates with local audiences and drives organic traffic.`),
    },
  ];

  // Why choose data
  const whyChooseReasons = [
    {
      icon: Award,
      title: t("7+ Years of Proven Results"),
      description: t(`Extensive experience delivering measurable local SEO success for businesses across ${country.name}.`),
    },
    {
      icon: Target,
      title: t(`${district.name} Market Expertise`),
      description: t(`Deep understanding of the local market dynamics and customer behavior in ${district.name}.`),
    },
    {
      icon: BarChart3,
      title: t("Data-Driven Strategies"),
      description: t("Every recommendation is backed by analytics and designed to deliver measurable ROI."),
    },
    {
      icon: Clock,
      title: t("Dedicated Support"),
      description: t("Direct access to your SEO specialist with regular updates and transparent reporting."),
    },
  ];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: `Syed Hadi Hussain - Local SEO Expert ${district.name}`,
            description: pageDescription,
            url: canonicalUrl,
            areaServed: {
              "@type": "Place",
              name: `${district.name}, ${country.name}`,
            },
            serviceArea: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: country.mapCenter[0],
                longitude: country.mapCenter[1],
              },
              geoRadius: "50000",
            },
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        <main id="main-content" role="main">
          {/* Breadcrumb Navigation */}
          <div className="container-narrow pt-24 pb-4">
            <GeoBreadcrumb
              countryCode={countryCode}
              stateName={district.name}
              stateCode={district.code}
            />
          </div>

          {/* Hero Section */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
            <div className="container-narrow">
              <ScrollReveal>
                <div className="text-center max-w-4xl mx-auto">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                    {country.flag} {t("Local SEO Expert")} • {district.name}
                  </span>
                  <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                    {t("Local SEO Services in")} <span className="text-primary">{district.name}</span>, {country.name}
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                    {district.tagline || t(`Dominate Google Maps and AI search in ${district.name}. I help local businesses increase visibility, attract more customers, and grow revenue.`)}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="https://calendly.com/syedhadihussain"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                      {t("Get 50% Off Audit")}
                    </a>
                    <Link
                      to={`/${language}/contact`}
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-card border border-border text-foreground rounded-xl font-semibold hover:bg-accent transition-all duration-300"
                    >
                      {t("Contact Me")}
                    </Link>
                  </div>
                </div>
              </ScrollReveal>

              {/* Stats */}
              <ScrollReveal delay={0.2}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                  <div className="text-center p-6 bg-card rounded-2xl border border-border">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">7+</div>
                    <div className="text-sm text-muted-foreground">{t("Years Experience")}</div>
                  </div>
                  <div className="text-center p-6 bg-card rounded-2xl border border-border">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">150+</div>
                    <div className="text-sm text-muted-foreground">{t("Clients Served")}</div>
                  </div>
                  <div className="text-center p-6 bg-card rounded-2xl border border-border">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.9★</div>
                    <div className="text-sm text-muted-foreground">{t("Average Rating")}</div>
                  </div>
                  <div className="text-center p-6 bg-card rounded-2xl border border-border">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">312%</div>
                    <div className="text-sm text-muted-foreground">{t("Avg Traffic Increase")}</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* Map Section */}
          <section className="section-padding" aria-labelledby="district-map-heading">
            <div className="container-narrow">
              <ScrollReveal>
                <div className="text-center mb-10">
                  <span className="text-primary text-sm font-medium uppercase tracking-wider">
                    {t("Local SEO Service Area")}
                  </span>
                  <h2 id="district-map-heading" className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                    {t("Serving")} {district.name}, {country.name}
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    {t("I provide expert local SEO services throughout")} {district.name} {t("and across")} {country.name}.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="relative rounded-2xl overflow-hidden border border-border shadow-lg">
                  <div className="aspect-[16/9] w-full">
                    <iframe
                      title={`${t("Map of")} ${district.name}, ${country.name}`}
                      src={district.mapEmbed}
                      className="w-full h-full"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <h3 className="font-display text-lg font-semibold text-foreground">
                          {district.name} {t("Local SEO Expert")}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {t("Helping businesses in")} {district.name} {t("dominate Google Maps and AI search")}
                        </p>
                      </div>
                      <a
                        href="https://calendly.com/syedhadihussain"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm"
                      >
                        {t("Get 50% Off Audit")}
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Service Area Details */}
              <ScrollReveal delay={0.3}>
                <div className="mt-10 grid md:grid-cols-3 gap-6">
                  <div className="p-5 bg-card rounded-xl border border-border text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{district.population || "N/A"}</div>
                    <div className="text-sm text-muted-foreground">{t("Population")}</div>
                  </div>
                  <div className="p-5 bg-card rounded-xl border border-border text-center">
                    <div className="text-3xl font-bold text-primary mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">{t("Remote and On-Site Flexibility")}</div>
                  </div>
                  <div className="p-5 bg-card rounded-xl border border-border text-center">
                    <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">{t("Monitoring and Support")}</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* Services Section */}
          <section className="section-padding bg-muted/30" aria-labelledby="services-heading">
            <div className="container-narrow">
              <ScrollReveal>
                <div className="text-center mb-12">
                  <span className="text-primary text-sm font-medium uppercase tracking-wider">
                    {t("Expert Local SEO Services")}
                  </span>
                  <h2 id="services-heading" className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                    {t("Local SEO Services in")} {district.name}
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    {t("Comprehensive local SEO solutions tailored for")} {district.name} {t("businesses to dominate Google Maps and AI search.")}
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <ScrollReveal key={service.title} delay={index * 0.1}>
                    <div className="p-6 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 h-full">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {service.description}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Section */}
          <section className="section-padding" aria-labelledby="why-choose-heading">
            <div className="container-narrow">
              <ScrollReveal>
                <div className="text-center mb-12">
                  <span className="text-primary text-sm font-medium uppercase tracking-wider">
                    {t("Why Choose Me")}
                  </span>
                  <h2 id="why-choose-heading" className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                    {t("Your")} {district.name} {t("Local SEO Partner")}
                  </h2>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 gap-6">
                {whyChooseReasons.map((reason, index) => (
                  <ScrollReveal key={reason.title} delay={index * 0.1}>
                    <div className="flex gap-4 p-6 bg-card rounded-2xl border border-border">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <reason.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                          {reason.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Parent Country Link */}
          <section className="py-12 bg-background">
            <div className="container-narrow">
              <ParentCountryLink
                countryCode={countryCode}
                countryName={country.name}
                stateName={district.name}
              />
            </div>
          </section>

          {/* Industries We Serve */}
          <IndustriesWeServe locationName={district.name} />

          {/* Case Studies */}
          <section id="case-studies" aria-label="Client case studies">
            <CaseStudies />
          </section>

          {/* Testimonials */}
          <section id="testimonials" aria-label="Client testimonials">
            <Testimonials />
          </section>

          {/* CTA */}
          <FullStackCTA />

          {/* FAQ */}
          <section id="faq" aria-label="Frequently asked questions">
            <FAQ />
          </section>

          {/* Contact Section */}
          <section className="section-padding bg-muted/30" aria-labelledby="contact-heading">
            <div className="container-narrow">
              <ScrollReveal>
                <div className="text-center max-w-3xl mx-auto">
                  <span className="text-primary text-sm font-medium uppercase tracking-wider">
                    {t("Get Started Today")}
                  </span>
                  <h2 id="contact-heading" className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                    {t("Ready to Dominate")} {district.name} {t("Local Search?")}
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    {t("Let's discuss how I can help your")} {district.name} {t("business attract more local customers and grow your revenue.")}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="https://calendly.com/syedhadihussain"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      {t("Schedule Free Consultation")}
                    </a>
                    <Link
                      to={`/${language}/contact`}
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-card border border-border text-foreground rounded-xl font-semibold hover:bg-accent transition-all duration-300"
                    >
                      {t("Contact Me")}
                    </Link>
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

export default DistrictPage;
