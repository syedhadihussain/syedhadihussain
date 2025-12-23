import { Award, CheckCircle, TrendingUp, Users, Mail, Phone, Calendar, Linkedin, Facebook, Github, Youtube, Globe, Zap } from "lucide-react";
const certifications = ["Local SEO Certified", "HubSpot SEO Certification", "Project Management Certification", "Google Analytics Certified", "Google Search Console Certified", "Google Ads Search Certified"];
const skills = [{
  name: "Local SEO",
  category: "seo"
}, {
  name: "Google Business Profile",
  category: "seo"
}, {
  name: "Keyword Research",
  category: "seo"
}, {
  name: "On-Page SEO",
  category: "seo"
}, {
  name: "Technical SEO",
  category: "seo"
}, {
  name: "Content Strategy",
  category: "marketing"
}, {
  name: "Link Building",
  category: "seo"
}, {
  name: "Citation Management",
  category: "seo"
}, {
  name: "Conversion Optimization",
  category: "marketing"
}, {
  name: "Analytics & Reporting",
  category: "analytics"
}, {
  name: "Project Management",
  category: "management"
}, {
  name: "Client Communication",
  category: "management"
}, {
  name: "Team Collaboration",
  category: "management"
}, {
  name: "Strategic Planning",
  category: "management"
}, {
  name: "Performance Tracking",
  category: "analytics"
}];
const contactLinks = [{
  icon: Mail,
  label: "Email",
  value: "syedhadi.workid@gmail.com",
  href: "mailto:syedhadi.workid@gmail.com"
}, {
  icon: Phone,
  label: "WhatsApp",
  value: "+971 52 369 5036",
  href: "https://wa.me/+971523695036"
}, {
  icon: Calendar,
  label: "Schedule a Meeting",
  value: "Book on Calendly",
  href: "https://calendly.com/syedhadihussain"
}];
const socialLinks = [{
  icon: Linkedin,
  label: "LinkedIn",
  href: "https://www.linkedin.com/in/syed-hadi-hussain-seo-specialist/"
}, {
  icon: Facebook,
  label: "Facebook",
  href: "https://www.facebook.com/syedhadihussainseo/"
}, {
  icon: Youtube,
  label: "YouTube",
  href: "https://www.youtube.com/@SyedHadiHussainLocalSeo"
}, {
  icon: Github,
  label: "GitHub",
  href: "https://github.com/syedhadihussain"
}, {
  icon: Globe,
  label: "Gravatar",
  href: "https://gravatar.com/syedhadihussainseoexpert"
}];
const About = () => {
  return <section id="about" className="section-padding bg-card/50">
      <div className="container-narrow">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Left Column - About Text */}
          <div>
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              About Me
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Full-Stack Local SEO Specialist
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              I'm Syed Hadi Hussain, a full-stack local SEO specialist who helps local and service-based businesses get more visibility on Google and turn searches into real leads.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5">
              I don't just focus on rankings. I focus on what actually matters to your business, calls, inquiries, and customers. I manage the complete SEO process from strategy to execution, so you don't have to deal with multiple people or confusion.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With 7+ years of experience and 100+ clients served, I help businesses grow through clear, proven, and result-focused local SEO.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-xl p-5 text-center">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="font-display text-3xl font-bold text-foreground">7+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="glass rounded-xl p-5 text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="font-display text-3xl font-bold text-foreground">100+</div>
                <div className="text-sm text-muted-foreground">Clients Served</div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact & Certifications */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">Get in Touch</h3>
              
              <div className="space-y-3 mb-5">
                {contactLinks.map((contact, index) => <a key={index} href={contact.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group hover:bg-secondary/50 rounded-lg p-2 -mx-2 transition-colors">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <contact.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">{contact.label}</div>
                      <div className="text-foreground text-sm font-medium truncate">{contact.value}</div>
                    </div>
                  </a>)}
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-border">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Connect with Me</div>
                <div className="flex gap-2">
                  {socialLinks.map((social, index) => <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:scale-110 transition-all group" title={social.label}>
                      <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                    </a>)}
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-primary" />
                <h3 className="font-display text-lg font-semibold text-foreground">Certifications</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert, index) => <div key={index} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{cert}</span>
                  </div>)}
              </div>
            </div>
          </div>
        </div>

        {/* Key Skills - Full Width Below */}
        <div className="glass rounded-2xl p-8">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Zap className="w-6 h-6 text-primary" />
            <h3 className="font-display text-2xl font-bold text-foreground text-center">Key Skills & Expertise</h3>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {skills.map((skill, index) => <div key={index} className="group relative overflow-hidden rounded-xl bg-secondary/50 hover:bg-primary/20 border border-border hover:border-primary/30 p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/5">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CheckCircle className="w-5 h-5 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-foreground relative z-10">{skill.name}</span>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default About;