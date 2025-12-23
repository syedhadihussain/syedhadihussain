import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Globe, MessageSquare, Bot, BarChart3 } from "lucide-react";

const capabilities = [
  { icon: Globe, label: "SEO & Website Design" },
  { icon: BarChart3, label: "Google Local Service Ads" },
  { icon: MessageSquare, label: "Social Media Marketing" },
  { icon: Bot, label: "AI Assistants & Chatbots" },
  { icon: Briefcase, label: "Complete Digital Marketing" },
];

const FullStackCTA = () => {
  return (
    <section className="section-padding bg-card/50">
      <div className="container-narrow">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            </div>

            <div className="text-center mb-8">
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                Beyond SEO
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Grow Your Business Online – From SEO to Full Digital Solutions
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                As a Local SEO specialist, I help businesses get more visibility, leads, and sales online. Beyond that, you can also hire me as your full-stack project manager to manage everything — so your business grows smoothly without juggling multiple vendors.
              </p>
            </div>

            {/* Capabilities */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {capabilities.map((cap, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full text-sm text-foreground"
                >
                  <cap.icon className="w-4 h-4 text-primary" />
                  {cap.label}
                </div>
              ))}
            </div>

            <p className="text-center text-muted-foreground mb-8">
              My goal is simple: deliver more leads, more sales, and better online visibility with a clear, custom strategy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="glow group">
                <a href="https://calendly.com/syedhadihussain" target="_blank" rel="noopener noreferrer">
                  Book a Strategy Call
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">
                  Share Your Goals
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullStackCTA;
