import { CheckCircle, Award, Clock, Users, TrendingUp, Shield, Zap, Target, DollarSign, ThumbsUp } from "lucide-react";
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
      icon: DollarSign,
      title: "ROI That Actually Matters",
      description: `I don't chase vanity metrics. Every ${city.name} local SEO strategy I implement is laser-focused on one thing: putting more paying customers in front of your business. Track your ROI, not just rankings.`,
    },
    {
      icon: Award,
      title: "7 Years of Battle-Tested Success",
      description: `Seven years. Hundreds of businesses. Thousands of page-one rankings. I've refined local SEO strategies across ${city.stateName} markets so you get what works – not experiments.`,
    },
    {
      icon: Users,
      title: "50+ Industries Conquered",
      description: `Restaurants, lawyers, plumbers, dentists – I've dominated local search in 50+ industries. Whatever your ${city.name} business does, I know exactly how to get you found.`,
    },
    {
      icon: TrendingUp,
      title: "150%+ Visibility Guaranteed",
      description: `My ${city.name} clients typically see 150%+ improvement in local search visibility within 90 days. If you're not seeing massive growth, we keep working until you do.`,
    },
    {
      icon: Clock,
      title: "Direct Expert Access – No Middlemen",
      description: `You work directly with ME – not junior staff or overseas teams. Faster decisions, better strategies, and someone who actually knows your ${city.name} business.`,
    },
    {
      icon: Zap,
      title: "AI-Future Ready Today",
      description: `While competitors optimize for yesterday's Google, I prepare your ${city.name} business for tomorrow's AI-powered search. ChatGPT, Gemini, voice assistants – I've got you covered.`,
    },
    {
      icon: Shield,
      title: "100% Transparent Reporting",
      description: `No black boxes. No confusing reports. I show you exactly what I'm doing, why I'm doing it, and the specific results it's generating for your ${city.name} business.`,
    },
    {
      icon: Target,
      title: "Hyper-Local ${city.name} Focus",
      description: `I understand ${city.name}'s unique market dynamics. Neighborhood targeting, local competitor analysis, and community-based strategies that generic SEO agencies completely miss.`,
    },
  ];

  return (
    <section className="section-padding" aria-labelledby="city-why-choose-heading">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Why {city.name} Business Owners Choose Me
            </span>
            <h2 id="city-why-choose-heading" className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              The Only {city.name} Local SEO Partner You'll Ever Need
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Your competitors hire big agencies that treat them like account numbers. 
              Smart {city.name} business owners hire me and get a dedicated partner obsessed with their growth.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <ScrollReveal key={reason.title} delay={index * 0.1}>
              <div className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
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

        {/* Urgency CTA Section */}
        <ScrollReveal delay={0.5}>
          <div className="mt-16 text-center p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Dominate {city.name} Local Search?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto text-lg">
              Every day you wait, your competitors capture more of YOUR customers. 
              Let's build a strategy that puts your {city.name} business exactly where customers are searching.
            </p>
            <a 
              href="https://calendly.com/syedhadihussain" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors text-lg glow"
            >
              Claim Your FREE {city.name} SEO Audit Now
            </a>
            <p className="text-xs text-muted-foreground mt-4">
              No obligation. No sales pressure. Just actionable insights for your business.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CityWhyChoose;
