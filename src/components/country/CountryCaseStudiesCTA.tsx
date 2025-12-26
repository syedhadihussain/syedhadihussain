import { ArrowRight, Award, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { CountryData } from "@/data/countries";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface CountryCaseStudiesCTAProps {
  country: CountryData;
}

const CountryCaseStudiesCTA = ({ country }: CountryCaseStudiesCTAProps) => {
  const { language } = useLanguage();

  const labels = {
    provenResults: {
      en: "Proven Results",
      ar: "نتائج مثبتة",
      es: "Resultados Comprobados",
      pt: "Resultados Comprovados",
      fr: "Résultats Prouvés",
      it: "Risultati Comprovati",
      de: "Bewährte Ergebnisse"
    },
    viewCaseStudies: {
      en: `View ${country.name.en}-Based Case Studies`,
      ar: `عرض دراسات الحالة في ${country.name[language]}`,
      es: `Ver Casos de Estudio en ${country.name[language]}`,
      pt: `Ver Estudos de Caso em ${country.name[language]}`,
      fr: `Voir les Études de Cas en ${country.name[language]}`,
      it: `Vedi Casi di Studio in ${country.name[language]}`,
      de: `Fallstudien aus ${country.name[language]} ansehen`
    },
    description: {
      en: "See how we've helped businesses across the country achieve top rankings, increased calls, and consistent lead generation.",
      ar: "شاهد كيف ساعدنا الشركات في جميع أنحاء البلاد على تحقيق أعلى التصنيفات وزيادة المكالمات وتوليد العملاء المحتملين.",
      es: "Vea cómo hemos ayudado a empresas en todo el país a lograr los primeros puestos, aumentar llamadas y generar leads consistentes.",
      pt: "Veja como ajudamos empresas em todo o país a alcançar primeiros lugares, aumentar chamadas e gerar leads consistentes.",
      fr: "Découvrez comment nous avons aidé des entreprises à travers le pays à atteindre les premiers rangs, augmenter les appels et générer des leads.",
      it: "Scopri come abbiamo aiutato le aziende in tutto il paese a raggiungere i primi posti, aumentare le chiamate e generare lead costanti.",
      de: "Sehen Sie, wie wir Unternehmen im ganzen Land zu Top-Rankings, mehr Anrufen und konstanter Lead-Generierung verholfen haben."
    },
    viewAllCaseStudies: {
      en: "View All Case Studies",
      ar: "عرض جميع دراسات الحالة",
      es: "Ver Todos los Casos de Estudio",
      pt: "Ver Todos os Estudos de Caso",
      fr: "Voir Toutes les Études de Cas",
      it: "Vedi Tutti i Casi di Studio",
      de: "Alle Fallstudien ansehen"
    },
    businessesHelped: {
      en: "Businesses Helped",
      ar: "شركات تم مساعدتها",
      es: "Empresas Ayudadas",
      pt: "Empresas Ajudadas",
      fr: "Entreprises Aidées",
      it: "Aziende Aiutate",
      de: "Unternehmen geholfen"
    },
    avgRankingImprovement: {
      en: "Avg. Ranking Improvement",
      ar: "متوسط تحسن الترتيب",
      es: "Mejora Promedio de Ranking",
      pt: "Melhoria Média de Ranking",
      fr: "Amélioration Moyenne du Classement",
      it: "Miglioramento Medio Ranking",
      de: "Durchschn. Ranking-Verbesserung"
    },
    clientSatisfaction: {
      en: "Client Satisfaction",
      ar: "رضا العملاء",
      es: "Satisfacción del Cliente",
      pt: "Satisfação do Cliente",
      fr: "Satisfaction Client",
      it: "Soddisfazione Cliente",
      de: "Kundenzufriedenheit"
    }
  };

  const getLabel = (key: keyof typeof labels) => {
    const label = labels[key];
    if (typeof label === 'string') return label;
    return label[language as keyof typeof label] || label.en;
  };

  return (
    <section className="py-20 bg-primary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="max-w-4xl mx-auto text-center">
            <div className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6",
              language === 'ar' && "flex-row-reverse"
            )}>
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{getLabel('provenResults')}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              {getLabel('viewCaseStudies')}
            </h2>

            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              {getLabel('description')}
            </p>

            {/* Stats */}
            <div className={cn(
              "grid grid-cols-1 md:grid-cols-3 gap-6 mb-10",
              language === 'ar' && "direction-rtl"
            )}>
              <div className="bg-background rounded-xl p-6 border border-border">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">50+</div>
                <div className="text-sm text-muted-foreground">{getLabel('businessesHelped')}</div>
              </div>
              <div className="bg-background rounded-xl p-6 border border-border">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">+15</div>
                <div className="text-sm text-muted-foreground">{getLabel('avgRankingImprovement')}</div>
              </div>
              <div className="bg-background rounded-xl p-6 border border-border">
                <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">98%</div>
                <div className="text-sm text-muted-foreground">{getLabel('clientSatisfaction')}</div>
              </div>
            </div>

            <Button asChild size="lg" className="text-lg px-8 py-6 group">
              <Link to={`/${language}/case-studies`}>
                {getLabel('viewAllCaseStudies')}
                <ArrowRight className={cn("w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform", language === 'ar' && "rotate-180 mr-2 ml-0")} />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CountryCaseStudiesCTA;
