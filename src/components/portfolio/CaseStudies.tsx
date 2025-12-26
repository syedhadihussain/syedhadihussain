import { ArrowUpRight, MapPin, TrendingUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const { t } = useLanguage();

  const caseStudies = [
    {
      clientKey: "caseStudies.client1.name",
      industryKey: "caseStudies.client1.industry",
      locationKey: "caseStudies.client1.location",
      challengeKey: "caseStudies.client1.challenge",
      solutionKey: "caseStudies.client1.solution",
      results: [
        { metricKey: "caseStudies.client1.metric1", labelKey: "caseStudies.client1.label1" },
        { metricKey: "caseStudies.client1.metric2", labelKey: "caseStudies.client1.label2" },
        { metricKey: "caseStudies.client1.metric3", labelKey: "caseStudies.client1.label3" },
      ],
    },
    {
      clientKey: "caseStudies.client2.name",
      industryKey: "caseStudies.client2.industry",
      locationKey: "caseStudies.client2.location",
      challengeKey: "caseStudies.client2.challenge",
      solutionKey: "caseStudies.client2.solution",
      results: [
        { metricKey: "caseStudies.client2.metric1", labelKey: "caseStudies.client2.label1" },
        { metricKey: "caseStudies.client2.metric2", labelKey: "caseStudies.client2.label2" },
        { metricKey: "caseStudies.client2.metric3", labelKey: "caseStudies.client2.label3" },
      ],
    },
    {
      clientKey: "caseStudies.client3.name",
      industryKey: "caseStudies.client3.industry",
      locationKey: "caseStudies.client3.location",
      challengeKey: "caseStudies.client3.challenge",
      solutionKey: "caseStudies.client3.solution",
      results: [
        { metricKey: "caseStudies.client3.metric1", labelKey: "caseStudies.client3.label1" },
        { metricKey: "caseStudies.client3.metric2", labelKey: "caseStudies.client3.label2" },
        { metricKey: "caseStudies.client3.metric3", labelKey: "caseStudies.client3.label3" },
      ],
    },
    {
      clientKey: "caseStudies.client4.name",
      industryKey: "caseStudies.client4.industry",
      locationKey: "caseStudies.client4.location",
      challengeKey: "caseStudies.client4.challenge",
      solutionKey: "caseStudies.client4.solution",
      results: [
        { metricKey: "caseStudies.client4.metric1", labelKey: "caseStudies.client4.label1" },
        { metricKey: "caseStudies.client4.metric2", labelKey: "caseStudies.client4.label2" },
        { metricKey: "caseStudies.client4.metric3", labelKey: "caseStudies.client4.label3" },
      ],
    },
    {
      clientKey: "caseStudies.client5.name",
      industryKey: "caseStudies.client5.industry",
      locationKey: "caseStudies.client5.location",
      challengeKey: "caseStudies.client5.challenge",
      solutionKey: "caseStudies.client5.solution",
      results: [
        { metricKey: "caseStudies.client5.metric1", labelKey: "caseStudies.client5.label1" },
        { metricKey: "caseStudies.client5.metric2", labelKey: "caseStudies.client5.label2" },
        { metricKey: "caseStudies.client5.metric3", labelKey: "caseStudies.client5.label3" },
      ],
    },
    {
      clientKey: "caseStudies.client6.name",
      industryKey: "caseStudies.client6.industry",
      locationKey: "caseStudies.client6.location",
      challengeKey: "caseStudies.client6.challenge",
      solutionKey: "caseStudies.client6.solution",
      results: [
        { metricKey: "caseStudies.client6.metric1", labelKey: "caseStudies.client6.label1" },
        { metricKey: "caseStudies.client6.metric2", labelKey: "caseStudies.client6.label2" },
        { metricKey: "caseStudies.client6.metric3", labelKey: "caseStudies.client6.label3" },
      ],
      featured: true,
    },
  ];

  return (
    <section id="case-studies" className="section-padding bg-card/50">
      <div className="container-narrow">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              {t("caseStudies.badge")}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {t("caseStudies.title")}
            </h2>
            <p className="text-muted-foreground">
              {t("caseStudies.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
              <div
                className={`glass rounded-2xl p-6 hover:glow-sm transition-all duration-300 group relative h-full ${
                  study.featured ? 'ring-1 ring-primary/30' : ''
                }`}
              >
                {study.featured && (
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    {t("caseStudies.fullStack")}
                  </div>
                )}

                {/* Header */}
                <div className="flex items-start justify-between mb-5 pt-1">
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-1">
                      {t(study.clientKey)}
                    </h3>
                    <p className="text-xs text-primary font-medium">{t(study.industryKey)}</p>
                    <div className="flex items-center gap-1 mt-1 text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      <span className="text-xs">{t(study.locationKey)}</span>
                    </div>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <TrendingUp className="w-4 h-4 text-primary" />
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-3 mb-5">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">{t("caseStudies.challenge")}</span>
                    <p className="text-foreground text-sm mt-1">{t(study.challengeKey)}</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">{t("caseStudies.solution")}</span>
                    <p className="text-foreground text-sm mt-1">{t(study.solutionKey)}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="pt-5 border-t border-border">
                  <span className="text-xs uppercase tracking-wider text-primary mb-3 block">{t("caseStudies.results")}</span>
                  <div className="grid grid-cols-3 gap-3">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="text-center">
                        <div className="font-display text-base font-bold text-foreground">{t(result.metricKey)}</div>
                        <div className="text-xs text-muted-foreground leading-tight">{t(result.labelKey)}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={600}>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">
                {t("caseStudies.wantResults")}
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CaseStudies;
