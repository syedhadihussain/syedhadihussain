import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/contexts/LanguageContext";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSelector from "@/components/LanguageSelector";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: isHomePage ? "#about" : "/about", label: t("nav.about"), isAnchor: isHomePage },
    { href: isHomePage ? "#services" : "/services", label: t("nav.services"), isAnchor: isHomePage },
    { href: isHomePage ? "#case-studies" : "/case-studies", label: t("nav.caseStudies"), isAnchor: isHomePage },
    { href: isHomePage ? "#testimonials" : "/#testimonials", label: t("nav.testimonials"), isAnchor: isHomePage },
    { href: isHomePage ? "#faq" : "/faq", label: t("nav.faq"), isAnchor: isHomePage },
    { href: isHomePage ? "#contact" : "/contact", label: t("nav.contact"), isAnchor: isHomePage },
  ];

  const handleNavClick = (link: { href: string; isAnchor: boolean }) => {
    if (link.isAnchor) {
      scrollToSection(link.href.replace("#", ""));
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "py-5"
      }`}
    >
      <div className="container-narrow flex items-center justify-between">
        <Link to="/" className="font-display text-xl font-bold text-foreground">
          Syed Hadi<span className="text-primary">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            link.isAnchor ? (
              <button
                key={link.href}
                onClick={() => handleNavClick(link)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            )
          ))}
          
          <div className="flex items-center gap-2 ml-2 pl-2 border-l border-border">
            <ThemeToggle />
            <LanguageSelector />
          </div>
          
          <Button asChild size="sm" className="glow-sm">
            <a href="https://calendly.com/syedhadihussain" target="_blank" rel="noopener noreferrer">
              {t("nav.bookCall")}
            </a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <LanguageSelector />
          <button
            className="text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass border-t border-border mt-3 animate-fade-in">
          <div className="container-narrow py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              link.isAnchor ? (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link)}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2 text-left"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {link.label}
                </Link>
              )
            ))}
            <Button asChild className="w-full mt-2">
              <a href="https://calendly.com/syedhadihussain" target="_blank" rel="noopener noreferrer">
                {t("nav.bookCall")}
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
