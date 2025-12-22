import { Linkedin, Facebook, Github } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/syed-hadi-hussain-seo-specialist/", label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/syedhadihussainseo/", label: "Facebook" },
  { icon: Github, href: "https://github.com/syedhadihussain", label: "GitHub" },
];

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="font-display text-xl font-bold text-foreground inline-block mb-2">
              Syed Hadi<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Syed Hadi Hussain. All rights reserved.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#case-studies" className="hover:text-foreground transition-colors">Case Studies</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;