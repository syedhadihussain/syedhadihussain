import { useParams, Link, Navigate } from "react-router-dom";
import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import SEOHead from "@/components/SEOHead";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { getPostBySlug, getRelatedPosts, BLOG_POSTS } from "@/lib/blog-posts-config";
import { getContentBySlug } from "@/lib/blog-content-config";
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag, User, BookOpen } from "lucide-react";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, language } = useLanguage();
  const withLang = (path: string) => `/${language}${path}`;

  const post = slug ? getPostBySlug(slug) : undefined;
  const content = slug ? getContentBySlug(slug) : undefined;
  const relatedPosts = slug ? getRelatedPosts(slug, 3) : [];

  if (!post) {
    return <Navigate to={withLang("/blog")} replace />;
  }

  return (
    <>
      <SEOHead
        title={post.metaTitle}
        description={post.metaDescription}
        canonical={`https://syedhadihussain.com/blog/${post.slug}`}
        keywords={post.keywords.join(", ")}
        breadcrumbs={[
          { name: "Home", url: "https://syedhadihussain.com" },
          { name: "Blog", url: "https://syedhadihussain.com/blog" },
          { name: post.title, url: `https://syedhadihussain.com/blog/${post.slug}` },
        ]}
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-24">
          {/* Hero */}
          <article>
            <header className="section-padding pb-8">
              <div className="container-narrow">
                <ScrollReveal animation="fade-up">
                  <Link to={withLang("/blog")} className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
                    <ArrowLeft className="w-4 h-4" />
                    {t("Back to Blog")}
                  </Link>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      <Tag className="w-3 h-3" />
                      {t(post.category)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h1 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                    {t(post.title)}
                  </h1>
                  <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                    {t(post.excerpt)}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{post.author.name}</p>
                      <p className="text-sm text-muted-foreground">{post.author.role}</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </header>

            {/* Featured Image */}
            <div className="container-narrow mb-12">
              <ScrollReveal animation="scale">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  className="w-full h-64 md:h-96 object-cover rounded-2xl"
                  loading="eager"
                />
              </ScrollReveal>
            </div>

            {/* Table of Contents */}
            {post.tableOfContents.length > 0 && (
              <div className="container-narrow mb-12">
                <ScrollReveal animation="fade-up">
                  <div className="glass rounded-2xl p-6">
                    <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-primary" />
                      {t("Table of Contents")}
                    </h2>
                    <nav>
                      <ol className="space-y-2">
                        {post.tableOfContents.map((item, index) => (
                          <li key={item.id}>
                            <a
                              href={`#${item.id}`}
                              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                            >
                              <span className="text-primary font-medium">{index + 1}.</span>
                              {t(item.title)}
                            </a>
                          </li>
                        ))}
                      </ol>
                    </nav>
                  </div>
                </ScrollReveal>
              </div>
            )}

            {/* Content */}
            <div className="container-narrow">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {content ? (
                  <>
                    <ScrollReveal animation="fade-up">
                      <div className="text-lg text-muted-foreground leading-relaxed mb-12 whitespace-pre-line">
                        {content.introduction}
                      </div>
                    </ScrollReveal>

                    {content.sections.map((section, index) => (
                      <ScrollReveal key={section.id} animation="fade-up" delay={index * 50}>
                        <section id={section.id} className="mb-12 scroll-mt-24">
                          <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
                            {t(section.title)}
                          </h2>
                          <div className="text-muted-foreground leading-relaxed whitespace-pre-line mb-4">
                            {section.content}
                          </div>

                          {section.subsections?.map((sub) => (
                            <div key={sub.title} className="ml-4 mb-4">
                              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                                {t(sub.title)}
                              </h3>
                              <p className="text-muted-foreground leading-relaxed">
                                {sub.content}
                              </p>
                            </div>
                          ))}

                          {section.listItems && (
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                              {section.listItems.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          )}

                          {section.tips && (
                            <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg mb-4">
                              <p className="font-semibold text-primary mb-2">💡 Pro Tips:</p>
                              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                {section.tips.map((tip, i) => (
                                  <li key={i}>{tip}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {section.warnings && (
                            <div className="bg-destructive/5 border-l-4 border-destructive p-4 rounded-r-lg mb-4">
                              <p className="font-semibold text-destructive mb-2">⚠️ Warnings:</p>
                              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                {section.warnings.map((warning, i) => (
                                  <li key={i}>{warning}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </section>
                      </ScrollReveal>
                    ))}

                    <ScrollReveal animation="fade-up">
                      <div className="text-lg text-muted-foreground leading-relaxed mb-12 whitespace-pre-line">
                        {content.conclusion}
                      </div>
                    </ScrollReveal>

                    {/* FAQ */}
                    {content.faq && content.faq.length > 0 && (
                      <ScrollReveal animation="fade-up">
                        <section className="mb-12">
                          <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-6">
                            {t("Frequently Asked Questions")}
                          </h2>
                          <div className="space-y-4">
                            {content.faq.map((item, index) => (
                              <div key={index} className="glass rounded-xl p-6">
                                <h3 className="font-semibold text-foreground mb-2">{item.question}</h3>
                                <p className="text-muted-foreground">{item.answer}</p>
                              </div>
                            ))}
                          </div>
                        </section>
                      </ScrollReveal>
                    )}

                    {/* CTA */}
                    <ScrollReveal animation="scale">
                      <div className="glass rounded-2xl p-8 text-center glow mb-12">
                        <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                          {t(content.callToAction.title)}
                        </h2>
                        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                          {t(content.callToAction.description)}
                        </p>
                        <Button asChild size="lg" className="glow">
                          <Link to={withLang(content.callToAction.buttonUrl)}>
                            {t(content.callToAction.buttonText)}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </ScrollReveal>
                  </>
                ) : (
                  <ScrollReveal animation="fade-up">
                    <div className="text-center py-12">
                      <p className="text-muted-foreground mb-6">
                        {t("Full article content coming soon. Check back for the complete guide!")}
                      </p>
                      <Button asChild>
                        <Link to={withLang("/contact")}>
                          {t("Get Personalized Advice")}
                        </Link>
                      </Button>
                    </div>
                  </ScrollReveal>
                )}
              </div>
            </div>

            {/* Internal Links */}
            <div className="container-narrow my-12">
              <ScrollReveal animation="fade-up">
                <div className="glass rounded-2xl p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">
                    {t("Explore More Resources")}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {post.internalLinks.map((link, index) => (
                      <Link
                        key={index}
                        to={withLang(link.url)}
                        className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-medium"
                      >
                        {t(link.text)}
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </article>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="section-padding bg-card/50">
              <div className="container-narrow">
                <ScrollReveal animation="fade-up">
                  <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">
                    {t("Related Articles")}
                  </h2>
                </ScrollReveal>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedPosts.map((relPost, index) => (
                    <ScrollReveal key={relPost.id} animation="scale" delay={index * 100}>
                      <Link to={withLang(`/blog/${relPost.slug}`)} className="block group">
                        <article className="glass rounded-xl overflow-hidden h-full hover:glow-sm transition-all">
                          <img
                            src={relPost.image}
                            alt={relPost.imageAlt}
                            className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="p-4">
                            <span className="text-xs text-primary font-medium">{relPost.category}</span>
                            <h3 className="font-semibold text-foreground mt-1 line-clamp-2 group-hover:text-primary transition-colors">
                              {t(relPost.title)}
                            </h3>
                          </div>
                        </article>
                      </Link>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </section>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BlogPostPage;
