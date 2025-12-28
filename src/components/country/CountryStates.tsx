import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { CountryData } from "@/lib/countries-config";
import { AU_STATES } from "@/lib/au-states-config";
import { UK_STATES } from "@/lib/uk-states-config";
import { STATES, StateDetailData } from "@/lib/states-config";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface CountryStatesProps {
  country: CountryData;
}

interface StateDisplay {
  code: string;
  name: string;
  abbreviation: string;
  citiesCount: number;
  tagline: string;
}

const CountryStates = ({ country }: CountryStatesProps) => {
  const { t, language } = useLanguage();

  // Get states based on country code
  const getStates = (): StateDisplay[] => {
    if (country.code === "au") {
      return Object.values(AU_STATES).map((state: StateDetailData) => ({
        code: state.code,
        name: state.name,
        abbreviation: state.abbreviation,
        citiesCount: state.cities.length,
        tagline: state.tagline
      }));
    } else if (country.code === "uk") {
      return Object.values(UK_STATES).map((state: StateDetailData) => ({
        code: state.code,
        name: state.name,
        abbreviation: state.abbreviation,
        citiesCount: state.cities.length,
        tagline: state.tagline
      }));
    } else if (country.code === "us") {
      return Object.values(STATES).map((state: StateDetailData) => ({
        code: state.code,
        name: state.name,
        abbreviation: state.abbreviation,
        citiesCount: state.cities.length,
        tagline: state.tagline
      }));
    }
    return [];
  };

  const states = getStates();

  if (states.length === 0) return null;

  return (
    <section className="py-20 bg-muted/30" aria-labelledby="states-heading">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              {t("country.serviceAreas")}
            </span>
            <h2 id="states-heading" className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
              {t("country.statesHeading").replace("{country}", country.name)}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("country.statesDescription")
                .replace("{count}", String(states.length))
                .replace("{country}", country.name)}
            </p>
          </div>
        </ScrollReveal>

        {/* States Grid */}
        <ScrollReveal delay={0.2}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {states.map((state, index) => (
              <Link
                key={state.code}
                to={`/${language}/${country.code}/${state.code}`}
                className="group relative bg-background rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                    {state.citiesCount} {t("country.cities")}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                  {state.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {state.abbreviation}
                </p>
                <div className="mt-3 flex items-center text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>{t("country.viewState")}</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>

        {/* All States Tags */}
        <ScrollReveal delay={0.3}>
          <div className="mt-12 bg-background rounded-2xl p-8 border border-border">
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="w-5 h-5 text-primary" />
              <h3 className="font-display text-lg font-semibold text-foreground">
                {t("country.allStatesHeading").replace("{count}", String(states.length))}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {states.map((state) => (
                <Link
                  key={state.code}
                  to={`/${language}/${country.code}/${state.code}`}
                  className="px-3 py-1.5 bg-muted hover:bg-primary/10 rounded-full text-sm text-muted-foreground hover:text-primary border border-border hover:border-primary/30 transition-all duration-200"
                >
                  {state.name}
                </Link>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CountryStates;
