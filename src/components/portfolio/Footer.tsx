import { Link } from "react-router-dom";
import { Linkedin, Facebook, Github, Mail, MapPin, Phone, ArrowUpRight, CreditCard } from "lucide-react";
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
  { label: "Full Stack Local SEO", href: "/services#local-seo" },
  { label: "GBP & Map SEO", href: "/services#gbp" },
  { label: "Website SEO", href: "/services#website-seo" },
  { label: "Citation Building", href: "/services#citations" },
  { label: "Local Service Ads", href: "/services#lsa" },
  { label: "Project Management", href: "/services#project-management" },
];

const paymentMethods = [
  "Payoneer",
  "Wise",
  "Bank Transfer",
  "Binance (USDT)",
  "PayPal",
];

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer Content */}
      <div className="container-narrow py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-display text-2xl font-bold text-foreground inline-block mb-3">
              Syed Hadi<span className="text-primary">.</span>
            </Link>
            <p className="text-sm text-primary font-medium mb-4">
              {t("footer.tagline")}
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
              {t("about.description")}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm text-muted-foreground">
              <a href="mailto:syedhadi.workid@gmail.com" className="flex items-center gap-3 hover:text-foreground transition-colors group">
                <Mail className="w-4 h-4 text-primary" />
                <span>syedhadi.workid@gmail.com</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://wa.me/+971523695036" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-foreground transition-colors group">
                <Phone className="w-4 h-4 text-primary" />
                <span>+971 52 369 5036</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span>UAE, UK, USA, Australia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-6">{t("common.learnMore")}</h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <span className="inline-flex items-center gap-2">
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-6">{t("nav.services")}</h4>
            <nav className="space-y-3">
              {services.map((service) => (
                <Link
                  key={service.href}
                  to={service.href}
                  className="block text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <span className="inline-flex items-center gap-2">
                    {service.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-6">Connect</h4>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Follow me on social media for tips, insights, and updates on local SEO strategies.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
            >
              <span>{t("common.getAudit")} — $50</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Accepted Payments */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <CreditCard className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">{t("footer.payments")}:</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {paymentMethods.map((method, index) => (
                <span key={index} className="px-3 py-1.5 bg-secondary/50 rounded-full text-sm text-muted-foreground">
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-narrow py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>
              © {currentYear} Syed Hadi Hussain. {t("footer.rights")}
            </p>
            <div className="flex items-center gap-6">
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
