import { useLocation, Navigate, useParams } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { INDUSTRY_CATEGORIES, getIndustriesByCategory, isValidCategorySlug } from "@/lib/industries-config";
import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Phone, Star, TrendingUp, MapPin } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from "@/lib/i18n-config";

const IndustryCategoryPage = () => {
  const location = useLocation();
  const { language } = useLanguage();
  const params = useParams<{ categorySlug?: string }>();
  
  // Try to get slug from params first, then fallback to URL parsing
  let categorySlug = params.categorySlug || '';
  
  // If no slug from params, extract from URL path
  if (!categorySlug) {
    const pathParts = location.pathname.split('/').filter(Boolean);
    const categorySegment = pathParts.find(part => part.startsWith('local-seo-for-'));
    categorySlug = categorySegment 
      ? categorySegment.replace('local-seo-for-', '')
      : '';
  }

  if (!categorySlug || !isValidCategorySlug(categorySlug)) {
    return <Navigate to={`/${language}/404`} replace />;
  }

  const category = INDUSTRY_CATEGORIES.find(c => c.slug === categorySlug);
  
  if (!category) {
    return <Navigate to={`/${language}/404`} replace />;
  }

  const industries = getIndustriesByCategory(categorySlug);
  
  const pathParts = location.pathname.split('/').filter(Boolean);
  const currentLang = SUPPORTED_LANGUAGES.includes(pathParts[0] as any) ? pathParts[0] : DEFAULT_LANGUAGE;
  const langLink = (path: string) => `/${currentLang}${path}`;

  // SEO metadata
  const title = `Local SEO for ${category.name} | Rank #1 on Google Maps`;
  const description = `Professional Local SEO services for ${category.name.toLowerCase()}. We help ${category.industries.length}+ ${category.name.toLowerCase()} rank higher on Google Maps & local search.`;
  const canonicalUrl = `https://syedhadihussain.com/${currentLang}/local-seo-for-${categorySlug}`;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 bg-gradient-to-b from-primary/5 via-background to-background overflow-hidden">
          <div className="container-narrow relative z-10">
            {/* Breadcrumb */}
            <ScrollReveal animation="fade-up">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                <Link to={langLink("/")} className="hover:text-primary transition-colors">Home</Link>
                <span>/</span>
                <Link to={langLink("/serving-industries")} className="hover:text-primary transition-colors">Industries</Link>
                <span>/</span>
                <span className="text-foreground font-medium">{category.name}</span>
              </nav>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <div className="text-center max-w-4xl mx-auto">
                <span className="text-6xl mb-6 block">{category.icon}</span>
                <h1 className="font-display text-4xl lg:text-6xl font-bold text-foreground mb-6">
                  Local SEO for <span className="text-primary">{category.name}</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Dominate Google Maps and local search results with our specialized SEO strategies for {category.name.toLowerCase()}. We serve {industries.length}+ subcategories.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    to={langLink("/contact")}
                    className="btn-primary px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Get Free Consultation
                  </Link>
                  <a
                    href="#industries"
                    className="bg-card border border-border hover:border-primary/50 px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 transition-colors"
                  >
                    View All Services
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
                <div className="glass rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{industries.length}+</div>
                  <div className="text-sm text-muted-foreground">Subcategories</div>
                </div>
                <div className="glass rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">300%</div>
                  <div className="text-sm text-muted-foreground">Avg. Traffic Boost</div>
                </div>
                <div className="glass rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">Top 3</div>
                  <div className="text-sm text-muted-foreground">Map Rankings</div>
                </div>
                <div className="glass rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">200%</div>
                  <div className="text-sm text-muted-foreground">More Leads</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="section-padding bg-card/50">
          <div className="container-narrow">
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Why {category.name} Choose Our Local SEO
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  We understand the unique challenges {category.name.toLowerCase()} face in local search
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ScrollReveal animation="fade-up" delay={100}>
                <div className="glass rounded-xl p-6">
                  <MapPin className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Google Maps Dominance</h3>
                  <p className="text-muted-foreground text-sm">
                    Get your {category.name.toLowerCase()} business in the Google Maps 3-pack for local searches.
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal animation="fade-up" delay={200}>
                <div className="glass rounded-xl p-6">
                  <Star className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Review Management</h3>
                  <p className="text-muted-foreground text-sm">
                    Build trust with potential customers through strategic review generation and management.
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal animation="fade-up" delay={300}>
                <div className="glass rounded-xl p-6">
                  <TrendingUp className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Increased Leads</h3>
                  <p className="text-muted-foreground text-sm">
                    Convert local searches into calls, visits, and customers for your {category.name.toLowerCase()}.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* All Industries in Category */}
        <section id="industries" className="section-padding">
          <div className="container-narrow">
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-12">
                <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                  {category.icon} {industries.length}+ Subcategories
                </span>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  All {category.name} SEO Services
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Choose your specific industry for tailored Local SEO strategies
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {industries.map((industry, index) => (
                <ScrollReveal key={industry.slug} animation="fade-up" delay={Math.min(index * 30, 300)}>
                  <Link
                    to={langLink(`/local-seo-services-for-${industry.slug}`)}
                    className="glass rounded-xl p-5 flex items-center gap-4 hover:bg-primary/5 transition-all duration-300 group border border-transparent hover:border-primary/20"
                    title={`Local SEO for ${industry.name} - Google Maps & local search optimization`}
                  >
                    <span className="text-2xl flex-shrink-0">{industry.icon}</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                        {industry.name} SEO
                      </h3>
                      <p className="text-sm text-muted-foreground truncate">Local search optimization</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Other Categories */}
        <section className="section-padding bg-card/50">
          <div className="container-narrow">
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-10">
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  Explore Other Industry Categories
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We provide <Link to={langLink("/serving-industries")} className="text-primary hover:underline">Local SEO services</Link> for businesses across all industries
                </p>
              </div>
            </ScrollReveal>

            <div className="flex flex-wrap justify-center gap-3">
              {INDUSTRY_CATEGORIES.filter(c => c.slug !== categorySlug).map((cat, index) => (
                <ScrollReveal key={cat.slug} animation="fade-up" delay={Math.min(index * 20, 200)}>
                  <Link
                    to={langLink(`/local-seo-for-${cat.slug}`)}
                    className="glass rounded-full px-4 py-2 flex items-center gap-2 transition-all text-sm border border-transparent hover:bg-primary/10 hover:border-primary/30"
                    title={`Local SEO for ${cat.name}`}
                  >
                    <span>{cat.icon}</span>
                    <span className="text-foreground">{cat.name} SEO</span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal animation="fade-up" delay={100}>
              <div className="text-center mt-10">
                <Link 
                  to={langLink("/serving-industries")}
                  className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-6 py-3 rounded-full font-medium transition-colors"
                >
                  View All 300+ Industries
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-narrow">
            <ScrollReveal animation="fade-up">
              <div className="glass rounded-2xl p-8 lg:p-12 text-center">
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Ready to Dominate Local Search?
                </h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                  Get a free SEO audit and consultation for your {category.name.toLowerCase()} business
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    to={langLink("/contact")}
                    className="btn-primary px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Get Free Consultation
                  </Link>
                  <Link
                    to={langLink("/pricing")}
                    className="bg-card border border-border hover:border-primary/50 px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 transition-colors"
                  >
                    View Pricing
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default IndustryCategoryPage;
