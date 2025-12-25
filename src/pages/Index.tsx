import Navigation from "@/components/portfolio/Navigation";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Services from "@/components/portfolio/Services";
import CaseStudies from "@/components/portfolio/CaseStudies";
import Testimonials from "@/components/portfolio/Testimonials";
import FullStackCTA from "@/components/portfolio/FullStackCTA";
import FAQ from "@/components/portfolio/FAQ";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import SEOHead from "@/components/SEOHead";

const Index = () => {
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
          <article id="about" aria-label="About section">
            <About />
          </article>
          <section id="services" aria-label="Services offered">
            <Services />
          </section>
          <section id="case-studies" aria-label="Client success stories">
            <CaseStudies />
          </section>
          <section id="testimonials" aria-label="Client testimonials">
            <Testimonials />
          </section>
          <aside aria-label="Call to action">
            <FullStackCTA />
          </aside>
          <section id="faq" aria-label="Frequently asked questions">
            <FAQ />
          </section>
          <section id="contact" aria-label="Contact information">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
