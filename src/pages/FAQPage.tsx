import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import SEOHead from "@/components/SEOHead";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is Local SEO and why does my business need it?",
    answer:
      "Local SEO is the process of optimizing your online presence to attract more customers from local searches. It includes optimizing your Google Business Profile, building local citations, managing reviews, and ensuring your website ranks for location-based searches. If you serve customers in a specific geographic area, Local SEO is essential for visibility.",
  },
  {
    question: "How long does it take to see results from Local SEO?",
    answer:
      "Most businesses start seeing improvements within 3-6 months. Quick wins like GBP optimization can show results in weeks, while competitive keywords may take longer. The timeline depends on your current online presence, competition level, and the scope of optimization needed.",
  },
  {
    question: "What's the difference between Local SEO and regular SEO?",
    answer:
      "Traditional SEO focuses on ranking nationally or globally, while Local SEO targets customers in specific geographic areas. Local SEO involves Google Business Profile optimization, local citations, review management, and location-specific content—strategies designed to appear in the Google Map Pack and local search results.",
  },
  {
    question: "How much does Local SEO cost?",
    answer:
      "Local SEO pricing varies based on your business size, competition, and goals. I offer customized packages starting from basic GBP optimization to comprehensive local SEO campaigns. Schedule a free consultation to get a tailored quote based on your specific needs.",
  },
  {
    question: "Do you guarantee first page rankings?",
    answer:
      "While no ethical SEO professional can guarantee specific rankings (Google's algorithm is always evolving), I guarantee to implement proven strategies that have consistently delivered results. My track record shows 90%+ of clients achieve significant ranking improvements within 6 months.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "I've worked with diverse industries including healthcare, home services, legal, real estate, restaurants, retail, and professional services. Local SEO principles apply across industries, and I customize strategies based on your specific market and competition.",
  },
  {
    question: "How do you measure success?",
    answer:
      "Success is measured through multiple metrics: ranking improvements for target keywords, organic traffic growth, Google Business Profile insights (calls, directions, website clicks), lead generation, and ultimately, revenue impact. I provide detailed monthly reports showing all key performance indicators.",
  },
  {
    question: "Can you help with negative reviews?",
    answer:
      "Yes! Review management is a key part of my services. I help develop response strategies for negative reviews, implement review generation campaigns to increase positive reviews, and work on reputation recovery when needed. A proactive review strategy is essential for local rankings.",
  },
  {
    question: "Do you offer ongoing support or one-time services?",
    answer:
      "I offer both options. One-time services like GBP optimization or technical audits are available, but Local SEO is most effective as an ongoing effort. Continuous optimization, content updates, and monitoring ensure sustained results and adaptation to algorithm changes.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "I work with businesses worldwide. Local SEO strategies can be implemented remotely, and I use local expertise and tools to optimize for any market. Time zone differences are easily managed through scheduled calls and async communication.",
  },
];

const FAQPage = () => {
  const { t, language } = useLanguage();
  const withLang = (path: string) => (path === "/" ? `/${language}` : `/${language}${path}`);

  const translatedFaqs = faqs.map((faq) => ({
    question: t(faq.question),
    answer: t(faq.answer),
  }));

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: translatedFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <SEOHead
        title={t("Local SEO Questions Answered Clearly & Honestly – Syed Hadi Hussain")}
        description={t(
          "Find clear answers to common Local SEO questions about Google Maps, Business Profiles, rankings, timelines, and what actually drives results."
        )}
        canonical="/faq"
        keywords="Local SEO FAQ, Google Maps questions, Business Profile help, SEO rankings, SEO timelines"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "FAQ", url: "/faq" }]}
      />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main id="main-content" role="main" aria-label="FAQ page" className="pt-24">
          {/* Hero */}
          <section className="section-padding">
            <div className="container-narrow text-center">
              <ScrollReveal animation="fade-up">
                <HelpCircle className="w-16 h-16 text-primary mx-auto mb-6" />
                <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  {t("Frequently Asked Questions")}
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  {t(
                    "Everything you need to know about Local SEO and how it can help your business grow."
                  )}
                </p>
              </ScrollReveal>
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="section-padding bg-card/50">
            <div className="container-narrow max-w-3xl">
              <ScrollReveal animation="fade-up">
                <Accordion type="single" collapsible className="space-y-4">
                  {translatedFaqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="glass rounded-xl px-6 border-none"
                    >
                      <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-6">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-6">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </ScrollReveal>
            </div>
          </section>

          {/* CTA */}
          <section className="section-padding">
            <div className="container-narrow text-center">
              <ScrollReveal animation="scale">
                <div className="glass rounded-3xl p-12 glow">
                  <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                    {t("Still Have Questions?")}
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                    {t(
                      "I'm happy to answer any specific questions about your business and how Local SEO can help."
                    )}
                  </p>
                  <Button asChild size="lg" className="glow group">
                    <Link to={withLang("/contact")}>
                      {t("Get in Touch")}
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

export default FAQPage;
