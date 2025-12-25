import { ArrowLeft, ExternalLink, MapPin, Building, FileText, Search, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import SEOHead from "@/components/SEOHead";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLanguage } from "@/contexts/LanguageContext";

const FormGuideBlogPage = () => {
  const { t } = useLanguage();

  const steps = [
    {
      title: "Your Full Name (Client Name)",
      icon: FileText,
      description: "Enter your full legal name as it appears on official documents. This helps us maintain professional communication.",
      tip: "Use the name you'd like to be addressed by in our communications.",
    },
    {
      title: "Business Name",
      icon: Building,
      description: "Enter your exact business name as registered and as it appears on Google Business Profile. This is crucial for accurate SEO work.",
      tip: "If your business has a DBA (Doing Business As) name, use the name that appears on Google Maps.",
    },
    {
      title: "Business Address",
      icon: MapPin,
      description: "Provide your complete business address including street number, street name, and suite/unit number if applicable.",
      tip: "Use the exact address format that appears on your Google Business Profile for NAP consistency.",
    },
    {
      title: "City, State & Zipcode",
      icon: MapPin,
      description: "Enter your business city, state/province, and postal/zip code. These are essential for local SEO targeting.",
      tip: "Make sure these match your GBP listing exactly - inconsistencies can hurt your local rankings.",
    },
    {
      title: "Business Country",
      icon: MapPin,
      description: "Select or type your country. We serve clients worldwide.",
      tip: "This helps us understand your target market and local search landscape.",
    },
    {
      title: "Phone Number",
      icon: FileText,
      description: "Provide a valid phone number where we can reach you. Include country code for international numbers.",
      tip: "Use the same phone number that's listed on your Google Business Profile.",
    },
    {
      title: "Service Needed",
      icon: Search,
      description: "Select the service that best matches your needs. If you're unsure, choose 'Complete Business Audit' for a comprehensive review.",
      services: [
        "Full Stack Local SEO - Complete local search optimization",
        "GBP Management - Ongoing Google Business Profile optimization",
        "GBP Audit - One-time profile analysis and recommendations",
        "Website Audit - Technical and on-page SEO analysis",
        "Complete Business Audit - Full digital presence review",
        "Business Consultation - Strategy and planning session",
        "Complete Project Management - End-to-end digital project handling",
        "Website Development - Custom website design and development",
        "Local Service Ads - Google LSA setup and management",
        "Citations - Business directory listings",
        "Link Building - Quality backlink acquisition",
        "Website SEO - On-page and technical optimization",
      ],
    },
    {
      title: "Google Business Profile / Map Link",
      icon: ExternalLink,
      description: "This is one of the most important fields. Provide your Google Business Profile or Google Maps link so we can analyze your current standing.",
      howTo: [
        "Go to Google Maps (maps.google.com)",
        "Search for your business name",
        "Click on your business listing",
        "Click the 'Share' button",
        "Copy the link and paste it in the form",
      ],
      tip: "If you don't have a GBP yet, enter 'No GBP' and describe your situation in the message field.",
    },
    {
      title: "Competitor (Optional)",
      icon: Search,
      description: "If you know of a competitor who ranks well in your area, provide their name or website. This helps us understand your market.",
      tip: "You can add multiple competitors separated by commas.",
    },
    {
      title: "Your Message",
      icon: FileText,
      description: "Tell us about your goals, challenges, and what you hope to achieve. The more details you provide, the better we can help.",
      include: [
        "Your main business goals",
        "Current challenges with online visibility",
        "Target service area or locations",
        "Timeline expectations",
        "Any specific questions you have",
      ],
    },
  ];

  return (
    <>
      <SEOHead
        title="How to Fill the Contact Form - Complete Guide | Syed Hadi"
        description="Step-by-step guide on how to fill out the contact form correctly. Learn what information to provide for the best SEO consultation experience."
        canonical="https://syedhadi.com/blog/how-to-fill-contact-form"
      />
      <Navigation />
      
      <main className="min-h-screen pt-24 pb-16">
        <div className="container-narrow">
          {/* Back Link */}
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Contact Form
          </Link>

          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                Form Guide
              </span>
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
                How to Fill the Contact Form
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A complete guide to help you provide the right information for the best SEO consultation experience. Accurate details help us deliver better results.
              </p>
            </div>
          </ScrollReveal>

          {/* Why It Matters */}
          <ScrollReveal delay={100}>
            <div className="glass rounded-2xl p-8 mb-12">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Why Accurate Information Matters
              </h2>
              <p className="text-muted-foreground mb-6">
                Local SEO success depends heavily on accurate, consistent business information. When you provide precise details, we can:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  "Conduct accurate competitor analysis",
                  "Identify NAP inconsistencies",
                  "Create targeted local strategies",
                  "Set up proper geo-targeting",
                  "Optimize your Google Business Profile",
                  "Build relevant local citations",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <ScrollReveal key={index} delay={150 + index * 50}>
                <div className="glass rounded-2xl p-6 lg:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-foreground mb-2">
                        {index + 1}. {step.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      
                      {step.tip && (
                        <div className="bg-primary/5 rounded-lg p-4 border border-primary/10 mb-4">
                          <p className="text-sm text-foreground">
                            <strong className="text-primary">Pro Tip:</strong> {step.tip}
                          </p>
                        </div>
                      )}

                      {step.services && (
                        <div className="mt-4">
                          <h4 className="font-semibold text-foreground mb-2">Available Services:</h4>
                          <ul className="space-y-1">
                            {step.services.map((service, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-primary">•</span>
                                {service}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {step.howTo && (
                        <div className="mt-4">
                          <h4 className="font-semibold text-foreground mb-2">How to Get Your GBP Link:</h4>
                          <ol className="space-y-2">
                            {step.howTo.map((item, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center shrink-0">
                                  {i + 1}
                                </span>
                                {item}
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}

                      {step.include && (
                        <div className="mt-4">
                          <h4 className="font-semibold text-foreground mb-2">What to Include:</h4>
                          <ul className="space-y-1">
                            {step.include.map((item, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA */}
          <ScrollReveal delay={200}>
            <div className="mt-12 text-center">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground mb-6">
                Now that you know what information to provide, fill out the contact form to get your SEO consultation.
              </p>
              <Button asChild size="lg" className="glow">
                <Link to="/contact">
                  Go to Contact Form
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default FormGuideBlogPage;