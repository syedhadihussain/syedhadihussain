import { CheckCircle, Award, Clock, Users, TrendingUp, Shield, Zap, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { CityDetailData } from "@/lib/cities-config";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface CityWhyChooseProps {
  city: CityDetailData;
}

const CityWhyChoose = ({ city }: CityWhyChooseProps) => {
  const { language } = useLanguage();

  const reasons = [
    {
      icon: Award,
      title: "7+ Years of Proven Results",
      description: `With over seven years specializing in local SEO, I've helped businesses across ${city.name} and ${city.stateName} achieve sustainable growth in search rankings.`,
    },
    {
      icon: Users,
      title: "50+ Industries Expertise",
      description: `From restaurants to law firms, I've optimized local search for businesses in over 50 industries. Whatever your ${city.name} business does, I've got proven strategies.`,
    },
    {
      icon: TrendingUp,
      title: "150%+ Average Growth",
      description: `My ${city.name} clients typically see 150% or more improvement in local search visibility within the first 6 months. Real results, not empty promises.`,
    },
    {
      icon: Clock,
      title: "Dedicated Personal Attention",
      description: `Unlike agencies where you're just a number, I provide hands-on attention to your ${city.name} business. Direct communication, faster results.`,
    },
    {
      icon: Zap,
      title: "AI-Ready Optimization",
      description: `I don't just optimize for today's Google—I prepare your ${city.name} business for AI assistants like ChatGPT and Gemini that are reshaping local search.`,
    },
    {
      icon: Shield,
      title: "Transparent Reporting",
      description: `No black-box tactics. I provide clear, actionable reports showing exactly how your ${city.name} local SEO investment is performing and where we're headed.`,
    },
    {
      icon: Target,
      title: "Hyper-Local Focus",
      description: `I understand the ${city.name} market specifically. Local nuances, neighborhood targeting, and community-based strategies that national agencies miss.`,
    },
    {
      icon: CheckCircle,
      title: "Guaranteed Satisfaction",
      description: `I stand behind my work for ${city.name} businesses. If you're not seeing measurable improvements, we'll work together until you do.`,
    },
  ];

  return (
    <section className="section-padding" aria-labelledby="city-why-choose-heading">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Why {city.name} Businesses Choose Me
            </span>
            <h2 id="city-why-choose-heading" className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Your {city.name} Local SEO Partner
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              When {city.name} business owners need results-driven local SEO, they choose 
              a specialist who understands their market and delivers measurable outcomes.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <ScrollReveal key={reason.title} delay={index * 0.1}>
              <div className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA Section */}
        <ScrollReveal delay={0.5}>
          <div className="mt-16 text-center p-8 bg-primary/5 rounded-2xl border border-primary/20">
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Ready to Dominate {city.name} Local Search?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Let's discuss how I can help your {city.name} business attract more local customers 
              through strategic SEO that actually works.
            </p>
            <a 
              href="https://calendly.com/syedhadihussain" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Book Your Free Strategy Call
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CityWhyChoose;
