import { 
  MapPin, 
  Globe, 
  Search, 
  FileText, 
  Code, 
  BarChart3, 
  Map, 
  Wrench, 
  Link, 
  LineChart, 
  FolderKanban, 
  MessageSquare, 
  Sparkles 
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const services = [
  {
    icon: MapPin,
    title: "Local SEO Optimization",
    description: "I boost your visibility on Google Search with local SEO strategies that attract high-intent customers in your local area.",
  },
  {
    icon: Globe,
    title: "Google Business Profile Management",
    description: "I handle the complete setup, optimization, and management of your Google Business Profile to maximize visibility in search, maps, and AI-powered listings.",
  },
  {
    icon: Map,
    title: "Map SEO – Google, Apple, Bing",
    description: "I optimize your presence on Google Maps, Apple Maps, Bing Maps, and other location-based platforms to effectively capture local searches.",
  },
  {
    icon: Search,
    title: "Keyword Research & Semantic SEO",
    description: "I identify the best keywords for your business, including voice search and AI-generated queries, to drive relevant traffic that converts.",
  },
  {
    icon: FileText,
    title: "On-Page SEO",
    description: "I optimize website pages with meta tags, headings, structured data, and semantic markup to improve rankings and relevance for search engines and AI assistants.",
  },
  {
    icon: Wrench,
    title: "Technical SEO",
    description: "I fix site performance, speed, mobile-friendliness, indexing, and crawl issues so your website works flawlessly for both Google and AI-powered search engines.",
  },
  {
    icon: Code,
    title: "Content Strategy & AI-Optimized Content",
    description: "I create high-quality, AI-ready content for service pages, blogs, FAQs, and landing pages to rank on search engines, maps, and generative platforms.",
  },
  {
    icon: Link,
    title: "Link Building & Local Citations",
    description: "I build high-authority links and local citations to boost trust signals and improve visibility across search engines, maps, and AI-driven platforms.",
  },
  {
    icon: LineChart,
    title: "Conversion Tracking & Analytics",
    description: "I set up GA4, GTM, UTM tracking, and advanced analytics to track traffic, calls, map clicks, and conversions with actionable insights.",
  },
  {
    icon: FolderKanban,
    title: "Full-Stack Project Management",
    description: "I manage all SEO, AI, and map optimization projects end-to-end, ensuring timely execution, performance tracking, and alignment with business goals.",
  },
  {
    icon: MessageSquare,
    title: "Client Communication & Reporting",
    description: "I provide transparent, regular updates with insights on search performance, map visibility, AI ranking signals, and lead generation.",
  },
  {
    icon: Sparkles,
    title: "Advanced AI & Generative SEO",
    description: "I implement strategies to get your business cited by ChatGPT, Perplexity, Bing AI, You.com, and other generative engines for future-ready SEO.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container-narrow">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Services
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              My Services Designed to Boost Business Growth
            </h2>
            <p className="text-muted-foreground">
              I provide full-stack SEO and local growth services, designed for businesses that want measurable results, AI-ready strategies, and top local map visibility.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={index} animation="scale" delay={index * 100}>
              <div className="group glass rounded-2xl p-6 hover:glow-sm transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
