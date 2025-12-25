import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import SEOHead from "@/components/SEOHead";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Complete Guide to Google Business Profile Optimization in 2024",
    excerpt: "Learn how to fully optimize your Google Business Profile for maximum visibility and customer engagement. From verification to posts, this guide covers everything.",
    category: "GBP Optimization",
    date: "December 15, 2024",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800"
  },
  {
    id: 2,
    title: "Local Keyword Research: A Step-by-Step Strategy",
    excerpt: "Discover how to find and prioritize local keywords that will drive qualified traffic and leads to your business. Includes tools and techniques.",
    category: "Keyword Research",
    date: "December 10, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
  },
  {
    id: 3,
    title: "The Ultimate Citation Building Strategy for Local SEO",
    excerpt: "NAP consistency is crucial for local rankings. Learn how to build and manage citations effectively across directories and aggregators.",
    category: "Citation Building",
    date: "December 5, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
  },
  {
    id: 4,
    title: "Review Management: Turn Customer Feedback into Rankings",
    excerpt: "Reviews impact both rankings and conversions. Learn strategies for generating more reviews and responding effectively to feedback.",
    category: "Review Management",
    date: "November 28, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800"
  },
  {
    id: 5,
    title: "Technical SEO Audit Checklist for Local Businesses",
    excerpt: "A comprehensive checklist to identify and fix technical issues affecting your local search performance. Core Web Vitals, mobile optimization, and more.",
    category: "Technical SEO",
    date: "November 20, 2024",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800"
  },
  {
    id: 6,
    title: "AI and Local SEO: What's Changing in 2025",
    excerpt: "How AI is transforming local search and what businesses need to do to stay ahead. SGE, AI overviews, and future-proofing your strategy.",
    category: "Industry Trends",
    date: "November 15, 2024",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800"
  }
];

const BlogPage = () => {
  return (
    <>
      <SEOHead
        title="Local SEO Insights, Google Maps Tips & Growth Strategies – Syed Hadi Hussain"
        description="Actionable blog content covering Local SEO, Google Maps ranking, AI SEO, tracking, and advanced strategies for sustainable business growth."
        canonical="https://syedhadihussain.com/blog"
        keywords="Local SEO blog, Google Maps tips, AI SEO, growth strategies, local search ranking"
        breadcrumbs={[
          { name: "Home", url: "https://syedhadihussain.com" },
          { name: "Blog", url: "https://syedhadihussain.com/blog" }
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
                  Blog
                </span>
                <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Local SEO Insights & Strategies
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Actionable tips, industry trends, and proven strategies to help you dominate local search.
                </p>
              </ScrollReveal>
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="section-padding bg-card/50">
            <div className="container-narrow">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <ScrollReveal key={post.id} animation="scale" delay={index * 100}>
                    <article className="glass rounded-2xl overflow-hidden h-full group hover:glow-sm transition-all duration-300">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          loading="lazy"
                          width={800}
                          height={450}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                            <Tag className="w-3 h-3" />
                            {post.category}
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
                          {post.title}
                        </h2>
                        <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                          {post.excerpt}
                        </p>
                        <Button variant="ghost" size="sm" className="group/btn p-0 h-auto text-primary">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </article>
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
                    Get Local SEO Tips in Your Inbox
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                    Join hundreds of business owners receiving weekly insights on improving their local search presence.
                  </p>
                  <Button asChild size="lg" className="glow group">
                    <Link to="/contact">
                      Subscribe to Newsletter
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
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
