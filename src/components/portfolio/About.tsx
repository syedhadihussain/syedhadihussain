import { memo } from "react";
import { Award, CheckCircle, TrendingUp, Users, Mail, Phone, Calendar, Linkedin, Facebook, Github, Youtube, Globe, Zap } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLanguage } from "@/contexts/LanguageContext";

const About = memo(() => {
  const { t } = useLanguage();

  const certifications = [
    t("cert.localSeo"),
    t("cert.hubspot"),
    t("cert.projectMgmt"),
    t("cert.googleAnalytics"),
    t("cert.searchConsole"),
    t("cert.googleAds"),
  ];

  const skills = [
    { name: t("skill.localSeo"), category: "seo" },
    { name: t("skill.gbp"), category: "seo" },
    { name: t("skill.keywordResearch"), category: "seo" },
    { name: t("skill.onPage"), category: "seo" },
    { name: t("skill.technical"), category: "seo" },
    { name: t("skill.content"), category: "marketing" },
    { name: t("skill.linkBuilding"), category: "seo" },
    { name: t("skill.citation"), category: "seo" },
    { name: t("skill.conversion"), category: "marketing" },
    { name: t("skill.analytics"), category: "analytics" },
    { name: t("skill.projectMgmt"), category: "management" },
    { name: t("skill.clientComm"), category: "management" },
    { name: t("skill.teamCollab"), category: "management" },
    { name: t("skill.strategic"), category: "management" },
    { name: t("skill.performance"), category: "analytics" },
  ];

  const contactLinks = [
    {
      icon: Mail,
      label: t("contact.email.label"),
      value: "contact.syedhadihussain@gmail.com",
      href: "mailto:contact.syedhadihussain@gmail.com"
    },
    {
      icon: Phone,
      label: t("contact.whatsapp.label"),
      value: "+971 52 369 5036",
      href: "https://wa.me/+971523695036"
    },
    {
      icon: Calendar,
      label: t("about.scheduleMeeting"),
      value: t("about.bookOnCalendly"),
      href: "https://calendly.com/syedhadihussain"
    }
  ];

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/syed-hadi-hussain-seo-specialist/" },
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/syedhadihussainseo/" },
    { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@SyedHadiHussainLocalSeo" },
    { icon: Github, label: "GitHub", href: "https://github.com/syedhadihussain" },
    { icon: Globe, label: "Gravatar", href: "https://gravatar.com/syedhadihussainseoexpert" }
  ];

  return (
    <section id="about" className="section-padding bg-card/50">
      <div className="container-narrow">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Left Column - About Text */}
          <ScrollReveal animation="fade-left">
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              {t("about.title")}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              {t("about.heading")}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              {t("about.para1")}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5">
              {t("about.para2")}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t("about.para3")}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-xl p-5 text-center">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="font-display text-3xl font-bold text-foreground">7+</div>
                <div className="text-sm text-muted-foreground">{t("about.yearsExp")}</div>
              </div>
              <div className="glass rounded-xl p-5 text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="font-display text-3xl font-bold text-foreground">100+</div>
                <div className="text-sm text-muted-foreground">{t("about.clientsServed")}</div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column - Contact & Certifications */}
          <ScrollReveal animation="fade-right" delay={200} className="space-y-6">
            {/* Contact Card */}
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">{t("about.getInTouch")}</h3>
              
              <div className="space-y-3 mb-5">
                {contactLinks.map((contact, index) => (
                  <a key={index} href={contact.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group hover:bg-secondary/50 rounded-lg p-2 -mx-2 transition-colors">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <contact.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">{contact.label}</div>
                      <div className="text-foreground text-sm font-medium truncate">{contact.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-border">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-3">{t("about.connectWithMe")}</div>
                <div className="flex gap-2">
                  {socialLinks.map((social, index) => (
                    <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:scale-110 transition-all group" title={social.label}>
                      <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-primary" />
                <h3 className="font-display text-lg font-semibold text-foreground">{t("about.certifications")}</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Key Skills - Full Width Below */}
        <ScrollReveal animation="fade-up" delay={300}>
          <div className="glass rounded-2xl p-8">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Zap className="w-6 h-6 text-primary" />
              <h3 className="font-display text-2xl font-bold text-foreground text-center">{t("about.keySkills")}</h3>
            </div>
          
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {skills.map((skill, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl bg-secondary/50 hover:bg-primary/20 border border-border hover:border-primary/30 p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/5">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CheckCircle className="w-5 h-5 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-foreground relative z-10">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;
