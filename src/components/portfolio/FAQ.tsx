import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What exactly is Local SEO and Map SEO?",
    answer: "Local SEO and Map SEO help your business appear on Google Maps, Apple Maps, Bing Maps, and local searches, making it easy for nearby customers to find you and contact you.",
  },
  {
    question: "What is Google Business Profile Management?",
    answer: "I optimize your Google Business Profile to ensure your business ranks higher in search, maps, and AI-powered platforms, showing accurate info to potential customers.",
  },
  {
    question: "How does Keyword Research & Semantic SEO help my business?",
    answer: "I find the right keywords your customers are searching for—including voice, AI, and generative search queries—so your business gets visible traffic that converts into leads.",
  },
  {
    question: "What is AI-Optimized Content & Generative SEO?",
    answer: "I create content optimized for search engines, AI assistants, and generative platforms like ChatGPT and Perplexity, helping your business stay ahead of future search trends.",
  },
  {
    question: "Can you manage my entire digital marketing?",
    answer: "Yes! I handle website design, campaigns, social media, ads, AI assistants, chatbots, and project management so you can focus on running your business while I grow it online.",
  },
  {
    question: "How do I start?",
    answer: "Just share your business goals, and we'll schedule a strategy call to create a custom plan for your growth. Every step is transparent, measurable, and designed to increase leads and revenue.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              FAQ
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Get answers to common questions about my SEO services and how I can help your business grow.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
