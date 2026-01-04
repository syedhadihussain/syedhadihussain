import { lazy, Suspense, memo } from "react";
import Navigation from "@/components/portfolio/Navigation";
import Hero from "@/components/portfolio/Hero";
import SEOHead from "@/components/SEOHead";

// Lazy load below-the-fold components for faster LCP
const About = lazy(() => import("@/components/portfolio/About"));
const Services = lazy(() => import("@/components/portfolio/Services"));
const CaseStudies = lazy(() => import("@/components/portfolio/CaseStudies"));
const Testimonials = lazy(() => import("@/components/portfolio/Testimonials"));
const GlobalReachCTA = lazy(() => import("@/components/portfolio/GlobalReachCTA"));
const FullStackCTA = lazy(() => import("@/components/portfolio/FullStackCTA"));
const FAQ = lazy(() => import("@/components/portfolio/FAQ"));
const Contact = lazy(() => import("@/components/portfolio/Contact"));
const Footer = lazy(() => import("@/components/portfolio/Footer"));

// Minimal loading fallback for sections
const SectionLoader = memo(() => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
  </div>
));
SectionLoader.displayName = "SectionLoader";

const Index = memo(() => {
  return (
    <>
      <SEOHead 
        title="Local SEO That Drives Calls, Leads & Google Maps Rankings – Syed Hadi Hussain"
        description="Grow your business with powerful Local SEO strategies that boost Google Maps rankings, increase calls, and turn searches into paying customers using proven, AI-ready optimization."
        canonical="/"
        keywords="Local SEO, Google Maps rankings, Google Business Profile, local search optimization, lead generation"
        breadcrumbs={[{ name: "Home", url: "/" }]}
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        <main id="main-content" role="main">
          <Hero />
          <Suspense fallback={<SectionLoader />}>
            <article id="about" aria-label="About section">
              <About />
            </article>
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <section id="services" aria-label="Services offered">
              <Services />
            </section>
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <section id="case-studies" aria-label="Client success stories">
              <CaseStudies />
            </section>
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <section id="testimonials" aria-label="Client testimonials">
              <Testimonials />
            </section>
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <section id="global-reach" aria-label="Global reach and industries">
              <GlobalReachCTA />
            </section>
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <aside aria-label="Call to action">
              <FullStackCTA />
            </aside>
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <section id="faq" aria-label="Frequently asked questions">
              <FAQ />
            </section>
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <section id="contact" aria-label="Contact information">
              <Contact />
            </section>
          </Suspense>
        </main>
        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
});

Index.displayName = "Index";

export default Index;
