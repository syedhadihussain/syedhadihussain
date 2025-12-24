import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar, MessageCircle, Eye, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
      </div>

      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              {t("hero.available")}
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              {t("hero.greeting")}
              <span className="block text-primary">{t("hero.title")}</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl animate-fade-up" style={{ animationDelay: "0.3s" }}>
              {t("hero.description")}
            </p>

            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.35s" }}>
              <MapPin className="w-4 h-4 text-primary" />
              <span>{t("hero.location")}</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Button asChild size="lg" className="glow group relative">
                <a href="https://calendly.com/syedhadihussain" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-4 h-4 mr-2" />
                  {t("hero.bookAudit")}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-destructive text-destructive-foreground text-xs font-bold rounded-full animate-pulse flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    50% OFF
                  </span>
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="https://wa.me/+971523695036" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {t("hero.whatsapp")}
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link to="/portfolio">
                  <Eye className="w-4 h-4 mr-2" />
                  {t("hero.viewProjects")}
                </Link>
              </Button>
            </div>

            <p className="text-xs text-primary font-medium mt-3 animate-fade-up" style={{ animationDelay: "0.45s" }}>
              {t("hero.auditDiscount")}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border animate-fade-up" style={{ animationDelay: "0.5s" }}>
              <div>
                <div className="font-display text-3xl font-bold text-foreground">7+</div>
                <div className="text-sm text-muted-foreground">{t("hero.years")}</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-foreground">100+</div>
                <div className="text-sm text-muted-foreground">{t("hero.clients")}</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-primary">150%</div>
                <div className="text-sm text-muted-foreground">{t("hero.traffic")}</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-2xl scale-110" />
              <div className="relative gradient-border rounded-2xl overflow-hidden">
                <img
                  src={profilePhoto}
                  alt="Syed Hadi Hussain - Senior Local SEO Specialist"
                  className="w-full max-w-md rounded-2xl object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 glass rounded-xl p-4 glow-sm animate-fade-up" style={{ animationDelay: "0.6s" }}>
                <div className="text-sm font-medium text-foreground">Google Certified</div>
                <div className="text-xs text-muted-foreground">Analytics & Search Console</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
