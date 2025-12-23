import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import SEOHead from "@/components/SEOHead";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CheckCircle, Award, Users, TrendingUp, Target } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const certifications = [
  "Google Analytics Certified",
  "Google Search Console Certified",
  "SEMrush SEO Toolkit Certified",
  "Local SEO Training (Opti-Rank Technologies)"
];

const skills = [
  { icon: Target, title: "Local SEO & GBP", description: "Google Business Profile optimization for maximum visibility" },
  { icon: TrendingUp, title: "Technical SEO", description: "Site audits, speed optimization, and structured data" },
  { icon: Users, title: "Citation Building", description: "NAP consistency across authoritative directories" },
  { icon: Award, title: "Review Management", description: "Reputation building and review generation strategies" }
];

const AboutPage = () => {
  return (
    <>
      <SEOHead
        title="About Syed Hadi Hussain | Local SEO Expert"
        description="Learn about Syed Hadi Hussain, a certified Local SEO specialist with 7+ years of experience helping businesses dominate Google rankings."
        canonical="/about"
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-24">
          {/* Hero Section */}
          <section className="section-padding">
            <div className="container-narrow">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <ScrollReveal animation="fade-right">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-2xl scale-110" />
                    <div className="relative gradient-border rounded-2xl overflow-hidden">
                      <img
                        src={profilePhoto}
                        alt="Syed Hadi Hussain - Senior Local SEO Specialist"
                        className="w-full rounded-2xl object-cover"
                      />
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal animation="fade-left" delay={200}>
                  <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                    About Me
                  </span>
                  <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    Your Partner in Local Search Success
                  </h1>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    I am a results-driven Local SEO specialist with hands-on experience helping service businesses dominate Google Search and Google Business Profile rankings. I focus on practical SEO strategies that generate real calls, leads, and revenue—not just traffic.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    With 7+ years of professional SEO experience and 100+ clients served across UAE, UK, USA, and Australia, I've developed proven methodologies that consistently deliver measurable results for local businesses.
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="section-padding bg-card/50">
            <div className="container-narrow">
              <ScrollReveal animation="fade-up">
                <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
                  Certifications & Training
                </h2>
              </ScrollReveal>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {certifications.map((cert, index) => (
                  <ScrollReveal key={cert} animation="scale" delay={index * 100}>
                    <div className="glass rounded-xl p-6 text-center hover:glow-sm transition-all duration-300">
                      <CheckCircle className="w-8 h-8 text-primary mx-auto mb-4" />
                      <p className="font-medium text-foreground">{cert}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="section-padding">
            <div className="container-narrow">
              <ScrollReveal animation="fade-up">
                <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
                  Core Expertise
                </h2>
              </ScrollReveal>
              <div className="grid sm:grid-cols-2 gap-8">
                {skills.map((skill, index) => (
                  <ScrollReveal key={skill.title} animation="fade-up" delay={index * 100}>
                    <div className="glass rounded-xl p-8 hover:glow-sm transition-all duration-300 group">
                      <skill.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="font-display text-xl font-bold text-foreground mb-2">{skill.title}</h3>
                      <p className="text-muted-foreground">{skill.description}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
