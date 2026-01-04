import { forwardRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Linkedin, Facebook, Github, Mail, Globe, MessageCircle, ArrowUpRight, Shield, CreditCard } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from "@/lib/i18n-config";

const Footer = forwardRef<HTMLElement>((_, ref) => {
  const { t } = useLanguage();
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  // Get current language from URL
  const pathParts = location.pathname.split('/').filter(Boolean);
  const currentLang = SUPPORTED_LANGUAGES.includes(pathParts[0] as any) ? pathParts[0] : DEFAULT_LANGUAGE;
  
  // Helper to create language-prefixed links
  const langLink = (path: string) => `/${currentLang}${path}`;

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/syed-hadi-hussain-seo-specialist/", label: "LinkedIn" },
    { icon: Facebook, href: "https://www.facebook.com/syedhadihussainseo/", label: "Facebook" },
    { icon: Github, href: "https://github.com/syedhadihussain", label: "GitHub" },
  ];

  const quickLinks = [
    { label: t("nav.about"), href: langLink("/about") },
    { label: t("nav.services"), href: langLink("/services") },
    { label: t("nav.pricing"), href: langLink("/pricing") },
    { label: t("nav.portfolio"), href: langLink("/portfolio") },
    { label: t("nav.caseStudies"), href: langLink("/case-studies") },
    { label: t("nav.faq"), href: langLink("/faq") },
    { label: t("nav.blog"), href: langLink("/blog") },
    { label: t("nav.contact"), href: langLink("/contact") },
  ];

  const services = [
    { labelKey: "services.localSeo", href: langLink("/services") },
    { labelKey: "footer.service.localServiceAds", href: langLink("/local-service-ads") },
    { labelKey: "services.projectMgmt", href: langLink("/project-management") },
    { labelKey: "footer.service.webDevelopment", href: langLink("/web-development") },
    { labelKey: "footer.service.contentWriting", href: langLink("/content-writing") },
    { labelKey: "footer.service.graphicDesign", href: langLink("/graphic-design") },
    { labelKey: "footer.service.socialMedia", href: langLink("/social-media") },
    { label: "Industries We Serve", href: langLink("/serving-industries") },
    { label: "Areas We Serve", href: langLink("/areas-we-serve") },
  ];

  const paymentLogos = [
    { labelKey: "footer.payment.payoneer", color: "#FF4800" },
    { labelKey: "footer.payment.paypal", color: "#003087" },
    { labelKey: "footer.payment.bankTransfer", color: "#1e40af" },
    { labelKey: "footer.payment.usdt", color: "#26A17B" },
  ];

  return (
    <footer ref={ref} className="bg-card border-t border-border" role="contentinfo" aria-label="Site footer">
      {/* Main Footer Content */}
      <div className="container-narrow py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to={langLink("/")} className="font-display text-2xl font-bold text-foreground inline-block mb-2">
              Syed Hadi<span className="text-primary">.</span>
            </Link>
            <p className="text-sm text-primary font-medium mb-3">
              {t("footer.tagline")}
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {t("footer.description")}
            </p>
            
            {/* Trust Badges */}
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-xs text-muted-foreground">{t("footer.trustBadge")}</span>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary" />
                <span>{t("footer.servingWorldwide")}</span>
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
                  key={service.href}
                  to={service.href}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <span className="inline-flex items-center gap-1">
                    {service.label || t(service.labelKey!)}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-5">{t("footer.connect")}</h4>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              {t("footer.followTips")}
            </p>
            
            {/* Social & Contact Links */}
            <div className="flex items-center flex-wrap gap-2">
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
              
              {/* WhatsApp */}
              <a
                href="https://wa.me/+971523695036"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-[#25D366] hover:text-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              
              {/* Email */}
              <a
                href="mailto:contact.syedhadihussain@gmail.com"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
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
                  key={payment.labelKey}
                  className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-lg border border-border hover:border-primary/30 transition-colors"
                >
                  <div 
                    className="w-2.5 h-2.5 rounded-full" 
                    style={{ backgroundColor: payment.color }}
                  />
                  <span className="text-sm text-muted-foreground font-medium">{t(payment.labelKey)}</span>
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
              <Link to={langLink("/privacy")} className="hover:text-foreground transition-colors">
                {t("footer.privacy")}
              </Link>
              <Link to={langLink("/terms")} className="hover:text-foreground transition-colors">
                {t("footer.terms")}
              </Link>
              <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
