import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { scrollToSection } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/contexts/LanguageContext";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSelector from "@/components/LanguageSelector";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language } = useLanguage();
  const location = useLocation();
  // Check if on homepage - account for language prefix
  const isHomePage = location.pathname === "/" || location.pathname === `/${language}` || location.pathname === `/${language}/`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceLinks = [
    { href: "/services", label: t("nav.localSeo") },
    { href: "/local-service-ads", label: t("nav.localServiceAds") },
    { href: "/project-management", label: t("nav.projectManagement") },
    { href: "/web-development", label: "Web Development" },
    { href: "/content-writing", label: "Content Writing" },
    { href: "/graphic-design", label: "Graphic Design" },
    { href: "/social-media", label: "Social Media Marketing" },
    { href: "/serving-industries", label: "Industries We Serve" },
  ];

  const navLinks = [
    { href: "/about", label: t("nav.about"), isDropdown: false },
    { href: "/services", label: t("nav.services"), isDropdown: true },
    { href: "/pricing", label: t("nav.pricing"), isDropdown: false },
    { href: "/portfolio", label: t("nav.portfolio"), isDropdown: false },
    { href: "/case-studies", label: t("nav.caseStudies"), isDropdown: false },
    { href: "/faq", label: t("nav.faq"), isDropdown: false },
    { href: "/blog", label: t("nav.blog"), isDropdown: false },
    { href: "/contact", label: t("nav.contact"), isDropdown: false },
  ];

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
        <div className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            link.isDropdown ? (
              <DropdownMenu key={link.href}>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors outline-none">
                  {link.label}
                  <ChevronDown className="h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="bg-background border border-border z-50">
                  {serviceLinks.map((service) => (
                    <DropdownMenuItem key={service.href} asChild>
                      <Link
                        to={service.href}
                        className="w-full cursor-pointer"
                      >
                        {service.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
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
          
          <Button asChild variant="outline" size="sm">
            <Link to="/portal/login">
              Client Portal
            </Link>
          </Button>
          
          <Button asChild size="sm" className="glow-sm">
            <a href="https://calendly.com/syedhadihussain" target="_blank" rel="noopener noreferrer">
              {t("nav.bookCall")}
            </a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center gap-2">
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
        <div className="lg:hidden glass border-t border-border mt-3 animate-fade-in">
          <div className="container-narrow py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              link.isDropdown ? (
                <div key={link.href} className="flex flex-col gap-2">
                  <span className="text-foreground font-medium py-2">{link.label}</span>
                  <div className="pl-4 flex flex-col gap-2">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.href}
                        to={service.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-muted-foreground hover:text-foreground transition-colors py-1"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
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
            <Button asChild variant="outline" className="w-full mt-2">
              <Link to="/portal/login" onClick={() => setIsMobileMenuOpen(false)}>
                Client Portal
              </Link>
            </Button>
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
