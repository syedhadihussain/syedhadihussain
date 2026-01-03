import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe, MapPin, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface AreasWeServeProps {
  industryName: string;
}

const topCountries = [
  { code: "us", name: "United States", flag: "🇺🇸", slug: "united-states" },
  { code: "uk", name: "United Kingdom", flag: "🇬🇧", slug: "united-kingdom" },
  { code: "ca", name: "Canada", flag: "🇨🇦", slug: "canada" },
  { code: "au", name: "Australia", flag: "🇦🇺", slug: "australia" },
  { code: "de", name: "Germany", flag: "🇩🇪", slug: "germany" },
  { code: "fr", name: "France", flag: "🇫🇷", slug: "france" },
  { code: "ae", name: "United Arab Emirates", flag: "🇦🇪", slug: "united-arab-emirates" },
  { code: "sa", name: "Saudi Arabia", flag: "🇸🇦", slug: "saudi-arabia" },
  { code: "sg", name: "Singapore", flag: "🇸🇬", slug: "singapore" },
  { code: "ie", name: "Ireland", flag: "🇮🇪", slug: "ireland" },
  { code: "nz", name: "New Zealand", flag: "🇳🇿", slug: "new-zealand" },
  { code: "nl", name: "Netherlands", flag: "🇳🇱", slug: "netherlands" },
];

const AreasWeServe = ({ industryName }: AreasWeServeProps) => {
  const { language } = useLanguage();
  
  const langLink = (path: string) => `/${language}${path}`;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Globe className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Global Coverage</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              We Serve {industryName} Worldwide
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our local SEO experts help {industryName.toLowerCase()} dominate search results in their local markets across the globe.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 mb-12">
            {topCountries.map((country) => (
              <Link
                key={country.code}
                to={langLink(`/${country.slug}`)}
                className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {country.flag}
                </span>
                <span className="text-sm font-medium text-foreground text-center group-hover:text-primary transition-colors">
                  {country.name}
                </span>
              </Link>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 border border-primary/20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Don't See Your Area? We've Got You Covered!
                </h3>
                <p className="text-muted-foreground mb-4 max-w-xl">
                  We provide local SEO services for {industryName.toLowerCase()} in 50+ countries and 10,000+ cities worldwide.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    50+ Countries
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    500+ States/Regions
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    10,000+ Cities
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                >
                  <Link to={langLink("/areas-we-serve")}>
                    <MapPin className="h-5 w-5 mr-2" />
                    Find Your Area
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="group border-primary/30 hover:border-primary hover:bg-primary/5"
                >
                  <Link to={langLink("/contact")}>
                    Get Free Consultation
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AreasWeServe;
