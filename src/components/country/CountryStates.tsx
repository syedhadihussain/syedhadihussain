import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { CountryData } from "@/lib/countries-config";
import { AU_STATES } from "@/lib/au-states-config";
import { UK_STATES } from "@/lib/uk-states-config";
import { CA_STATES } from "@/lib/ca-states-config";
import { DE_STATES } from "@/lib/de-states-config";
import { AE_STATES } from "@/lib/ae-states-config";
import { IT_STATES } from "@/lib/it-states-config";
import { MX_STATES } from "@/lib/mx-states-config";
import { MY_STATES } from "@/lib/my-states-config";
import { SG_STATES } from "@/lib/sg-states-config";
import { NZ_STATES } from "@/lib/nz-states-config";
import { SA_STATES } from "@/lib/sa-states-config";
import { QA_STATES } from "@/lib/qa-states-config";
import { EG_STATES } from "@/lib/eg-states-config";
import { PT_STATES } from "@/lib/pt-states-config";
import { OM_STATES } from "@/lib/om-states-config";
import { KW_STATES } from "@/lib/kw-states-config";
import { LU_STATES } from "@/lib/lu-states-config";
import { FR_STATES } from "@/lib/fr-states-config";
import { ES_STATES } from "@/lib/es-states-config";
import { CH_STATES } from "@/lib/ch-states-config";
import { IE_STATES } from "@/lib/ie-states-config";
import { BR_STATES } from "@/lib/br-states-config";
import { SH_STATES } from "@/lib/sh-states-config";
import { LT_STATES } from "@/lib/lt-states-config";
import { FI_STATES, NL_STATES, SE_STATES, NO_STATES, DK_STATES, BE_STATES, JO_STATES, ZA_STATES } from "@/lib/nordic-benelux-config";
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

// Map country codes to their state registries
const COUNTRY_STATE_REGISTRIES: Record<string, Record<string, StateDetailData>> = {
  us: STATES,
  au: AU_STATES,
  uk: UK_STATES,
  ca: CA_STATES,
  de: DE_STATES,
  ae: AE_STATES,
  it: IT_STATES,
  mx: MX_STATES,
  my: MY_STATES,
  sg: SG_STATES,
  nz: NZ_STATES,
  sa: SA_STATES,
  qa: QA_STATES,
  eg: EG_STATES,
  pt: PT_STATES,
  om: OM_STATES,
  kw: KW_STATES,
  lu: LU_STATES,
  fr: FR_STATES,
  es: ES_STATES,
  ch: CH_STATES,
  ie: IE_STATES,
  br: BR_STATES,
  sh: SH_STATES,
  lt: LT_STATES,
  fi: FI_STATES,
  nl: NL_STATES,
  se: SE_STATES,
  no: NO_STATES,
  dk: DK_STATES,
  be: BE_STATES,
  jo: JO_STATES,
  za: ZA_STATES
};

const CountryStates = ({ country }: CountryStatesProps) => {
  const { t, language } = useLanguage();

  // Get states based on country code
  const getStates = (): StateDisplay[] => {
    const registry = COUNTRY_STATE_REGISTRIES[country.code.toLowerCase()];
    if (!registry) return [];
    
    return Object.values(registry).map((state: StateDetailData) => ({
      code: state.code,
      name: state.name,
      abbreviation: state.abbreviation,
      citiesCount: state.cities?.length || 0,
      tagline: state.tagline || ""
    }));
  };

  const states = getStates();

  if (states.length === 0) return null;

  // For 2-tier countries like Saint Helena, use "Districts" instead of "States/Regions"
  const isTwoTierCountry = country.code.toLowerCase() === "sh";
  const areaLabel = isTwoTierCountry ? "Districts" : "States/Regions";
  const citiesLabel = isTwoTierCountry ? "areas" : "cities";

  return (
    <section className="py-20 bg-muted/30" aria-labelledby="states-heading">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              {isTwoTierCountry ? "Service Districts" : t("country.serviceAreas")}
            </span>
            <h2 id="states-heading" className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
              {isTwoTierCountry 
                ? `Local SEO Services Across ${country.name} Districts`
                : t("country.statesHeading").replace("{country}", country.name)
              }
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {isTwoTierCountry
                ? `I provide expert local SEO services in all ${states.length} districts of ${country.name}, helping businesses dominate Google Maps and AI search.`
                : t("country.statesDescription")
                    .replace("{count}", String(states.length))
                    .replace("{country}", country.name)
              }
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
                title={`Local SEO services in ${state.name} - Google Maps & AI search optimization`}
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
                  Local SEO {state.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  Google Maps optimization across {state.abbreviation}
                </p>
                <div className="mt-3 flex items-center text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>View local SEO services</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default CountryStates;
