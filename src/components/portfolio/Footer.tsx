import { Link } from "react-router-dom";
import { Linkedin, Facebook, Github, Mail, Globe, Phone, ArrowUpRight, Shield, CreditCard } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/syed-hadi-hussain-seo-specialist/", label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/syedhadihussainseo/", label: "Facebook" },
  { icon: Github, href: "https://github.com/syedhadihussain", label: "GitHub" },
];

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "Full Stack Local SEO", href: "/services" },
  { label: "GBP & Map SEO", href: "/services" },
  { label: "Website SEO", href: "/services" },
  { label: "Citation Building", href: "/services" },
  { label: "Local Service Ads", href: "/local-service-ads" },
  { label: "Project Management", href: "/project-management" },
];

const paymentLogos = [
  { name: "Payoneer", color: "#FF4800" },
  { name: "Wise", color: "#9FE870" },
  { name: "PayPal", color: "#003087" },
  { name: "Bank Transfer", color: "#1e40af" },
  { name: "USDT", color: "#26A17B" },
];

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer Content */}
      <div className="container-narrow py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-display text-2xl font-bold text-foreground inline-block mb-2">
              Syed Hadi<span className="text-primary">.</span>
            </Link>
            <p className="text-sm text-primary font-medium mb-3">
              {t("footer.tagline")}
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Helping local businesses dominate Google Search and Maps with proven SEO strategies that deliver real results.
            </p>
            
            {/* Trust Badges */}
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-xs text-muted-foreground">100+ Clients Worldwide</span>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="mailto:syedhadi.workid@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors group">
                <Mail className="w-4 h-4 text-primary" />
                <span>syedhadi.workid@gmail.com</span>
              </a>
              <a href="https://wa.me/+971523695036" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors group">
                <Phone className="w-4 h-4 text-primary" />
                <span>+971 52 369 5036</span>
              </a>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary" />
                <span>Serving Clients Worldwide</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-5">{t("common.learnMore")}</h4>
            <nav className="space-y-2.5">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <span className="inline-flex items-center gap-1">
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-5">{t("nav.services")}</h4>
            <nav className="space-y-2.5">
              {services.map((service) => (
                <Link
                  key={service.label}
                  to={service.href}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <span className="inline-flex items-center gap-1">
                    {service.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-5">Connect</h4>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              Follow me for tips and updates on local SEO strategies.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-2 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group text-sm"
            >
              <span>{t("common.getAudit")} — $50</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Accepted Payments */}
        <div className="mt-10 pt-8 border-t border-border">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <CreditCard className="w-4 h-4 text-primary" />
              <span className="font-medium text-foreground text-sm">{t("footer.payments")}</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {paymentLogos.map((payment) => (
                <div 
                  key={payment.name}
                  className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-lg border border-border hover:border-primary/30 transition-colors"
                >
                  <div 
                    className="w-2.5 h-2.5 rounded-full" 
                    style={{ backgroundColor: payment.color }}
                  />
                  <span className="text-sm text-muted-foreground font-medium">{payment.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-secondary/30">
        <div className="container-narrow py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
            <p>
              © {currentYear} Syed Hadi Hussain. {t("footer.rights")}
            </p>
            <div className="flex items-center gap-4">
              <Link to="/privacy" className="hover:text-foreground transition-colors">
                {t("footer.privacy")}
              </Link>
              <Link to="/terms" className="hover:text-foreground transition-colors">
                {t("footer.terms")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
