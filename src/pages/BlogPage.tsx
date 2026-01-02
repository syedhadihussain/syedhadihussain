import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import SEOHead from "@/components/SEOHead";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { BLOG_POSTS, getAllCategories } from "@/lib/blog-posts-config";
import { useState } from "react";

const BlogPage = () => {
  const { t, language } = useLanguage();
  const withLang = (path: string) => (path === "/" ? `/${language}` : `/${language}${path}`);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = getAllCategories();
  const filteredPosts = selectedCategory 
    ? BLOG_POSTS.filter(post => post.category === selectedCategory)
    : BLOG_POSTS;

  return (
    <>
      <SEOHead
        title={t("Local SEO Blog | Google Maps Tips & Growth Strategies – Syed Hadi Hussain")}
        description={t(
          "Comprehensive local SEO guides, Google Maps ranking tips, and proven strategies for business growth. Expert insights from 7+ years of experience."
        )}
        canonical="https://syedhadihussain.com/blog"
        keywords="Local SEO blog, Google Maps tips, AI SEO, growth strategies, local search ranking, GBP optimization"
        breadcrumbs={[
          { name: "Home", url: "https://syedhadihussain.com" },
          { name: "Blog", url: "https://syedhadihussain.com/blog" },
        ]}
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-24">
          {/* Hero */}
          <section className="section-padding">
            <div className="container-narrow text-center">
              <ScrollReveal animation="fade-up">
                <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                  {t("Local SEO Knowledge Hub")}
                </span>
                <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  {t("Local SEO Guides & Strategies")}
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                  {t(
                    "In-depth guides, actionable tips, and proven strategies to help you dominate Google Maps and local search results."
                  )}
                </p>
                <p className="text-primary font-medium">
                  {BLOG_POSTS.length} {t("comprehensive articles")} • {t("Updated for 2025")}
                </p>
              </ScrollReveal>
            </div>
          </section>

          {/* Category Filter */}
          <section className="pb-8">
            <div className="container-narrow">
              <ScrollReveal animation="fade-up">
                <div className="flex flex-wrap justify-center gap-2">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      !selectedCategory 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    {t("All Articles")}
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedCategory === category 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted text-muted-foreground hover:bg-muted/80'
                      }`}
                    >
                      {t(category)}
                    </button>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="section-padding bg-card/50">
            <div className="container-narrow">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <ScrollReveal key={post.id} animation="scale" delay={index * 50}>
                    <Link to={withLang(`/blog/${post.slug}`)} className="block h-full">
                      <article className="glass rounded-2xl overflow-hidden h-full group hover:glow-sm transition-all duration-300">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.imageAlt}
                            loading="lazy"
                            width={800}
                            height={450}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                              <Tag className="w-3 h-3" />
                              {t(post.category)}
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {post.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {post.readTime}
                            </span>
                          </div>
                          <h2 className="font-display text-lg font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                            {t(post.title)}
                          </h2>
                          <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                            {t(post.excerpt)}
                          </p>
                          <span className="inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                            {t("Read Full Guide")}
                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </article>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Newsletter CTA */}
          <section className="section-padding">
            <div className="container-narrow text-center">
              <ScrollReveal animation="scale">
                <div className="glass rounded-3xl p-12 glow">
                  <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                    {t("Ready to Dominate Local Search?")}
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                    {t(
                      "Get a free local SEO audit and personalized strategy to outrank your competitors on Google Maps."
                    )}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="glow group">
                      <Link to={withLang("/contact")}>
                        {t("Get Free SEO Audit")}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <Link to={withLang("/case-studies")}>
                        {t("View Case Studies")}
                      </Link>
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

export default BlogPage;
