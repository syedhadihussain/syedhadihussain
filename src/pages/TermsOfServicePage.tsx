import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import SEOHead from "@/components/SEOHead";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const TermsOfServicePage = () => {
  return (
    <>
      <SEOHead 
        title="Terms of Service – Syed Hadi Hussain" 
        description="Terms of Service for Syed Hadi Hussain's SEO and digital marketing services. Read our terms and conditions before engaging our services." 
        canonical="https://syedhadihussain.com/terms"
        keywords="terms of service, terms and conditions, service agreement, SEO services terms"
        breadcrumbs={[
          { name: "Home", url: "https://syedhadihussain.com" },
          { name: "Terms of Service", url: "https://syedhadihussain.com/terms" }
        ]}
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-24">
          <section className="section-padding">
            <div className="container-narrow max-w-4xl">
              <ScrollReveal animation="fade-up">
                <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-8">
                  Terms of Service
                </h1>
                <p className="text-muted-foreground mb-8">
                  Last updated: December 25, 2025
                </p>
              </ScrollReveal>

              <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
                <ScrollReveal animation="fade-up" delay={100}>
                  <section className="glass rounded-xl p-6 lg:p-8">
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      By accessing or using the services provided by Syed Hadi Hussain ("I", "me", "my"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use my services. These terms apply to all clients, visitors, and users of my website and services.
                    </p>
                  </section>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={150}>
                  <section className="glass rounded-xl p-6 lg:p-8">
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">2. Services Offered</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">I provide the following digital marketing and development services:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Local SEO and Google Business Profile optimization</li>
                      <li>Web development and design</li>
                      <li>Content writing and copywriting</li>
                      <li>Graphic design and branding</li>
                      <li>Social media management and marketing</li>
                      <li>Local Service Ads management</li>
                      <li>Project management services</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Specific deliverables, timelines, and pricing will be agreed upon in writing before work begins.
                    </p>
                  </section>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={200}>
                  <section className="glass rounded-xl p-6 lg:p-8">
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">3. Payment Terms</h2>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Payment terms will be specified in the project proposal or invoice</li>
                      <li>A deposit may be required before work begins</li>
                      <li>Accepted payment methods include Payoneer, PayPal, Bank Transfer, and USDT</li>
                      <li>Late payments may incur additional fees or result in service suspension</li>
                      <li>All prices are in USD unless otherwise specified</li>
                    </ul>
                  </section>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={250}>
                  <section className="glass rounded-xl p-6 lg:p-8">
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">4. Client Responsibilities</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">As a client, you agree to:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Provide accurate and complete information necessary for service delivery</li>
                      <li>Grant necessary access to accounts, platforms, and tools required for the work</li>
                      <li>Respond to requests for feedback or approval in a timely manner</li>
                      <li>Make payments according to the agreed schedule</li>
                      <li>Ensure you have the rights to any materials you provide</li>
                    </ul>
                  </section>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={300}>
                  <section className="glass rounded-xl p-6 lg:p-8">
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">5. Intellectual Property</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Upon full payment, you will own the final deliverables created specifically for your project. However:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>I retain the right to showcase work in my portfolio unless otherwise agreed</li>
                      <li>Pre-existing tools, templates, and methodologies remain my property</li>
                      <li>Third-party assets (fonts, images, plugins) are subject to their respective licenses</li>
                      <li>Source files may be provided upon request and additional payment if not included in the original scope</li>
                    </ul>
                  </section>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={350}>
                  <section className="glass rounded-xl p-6 lg:p-8">
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">6. Confidentiality</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      I will maintain the confidentiality of all proprietary information shared during our engagement. This includes business strategies, financial data, customer information, and trade secrets. I will not disclose such information to third parties without your written consent, except as required by law.
                    </p>
                  </section>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={400}>
                  <section className="glass rounded-xl p-6 lg:p-8">
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">7. Results Disclaimer</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      While I employ industry best practices and proven strategies, I cannot guarantee specific results such as search rankings, traffic increases, or revenue growth. SEO and digital marketing results depend on many factors including competition, market conditions, algorithm changes, and your implementation of recommendations. Past results do not guarantee future performance.
                    </p>
                  </section>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={450}>
                  <section className="glass rounded-xl p-6 lg:p-8">
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">8. Revisions and Changes</h2>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>The number of revisions included will be specified in the project scope</li>
                      <li>Additional revisions beyond the agreed scope may incur extra charges</li>
                      <li>Major scope changes may require a new proposal and timeline</li>
                      <li>Revision requests should be submitted in writing with clear feedback</li>
                    </ul>
                  </section>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={500}>
                  <section className="glass rounded-xl p-6 lg:p-8">
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">9. Termination</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">Either party may terminate the engagement with written notice. Upon termination:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Payment is due for all work completed up to the termination date</li>
                      <li>Completed deliverables will be provided upon payment</li>
                      <li>Refunds for prepaid services will be calculated based on work completed</li>
                      <li>I reserve the right to terminate services for non-payment or breach of terms</li>
                    </ul>
                  </section>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={550}>
                  <section className="glass rounded-xl p-6 lg:p-8">
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">10. Limitation of Liability</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      To the maximum extent permitted by law, I shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities. My total liability for any claim arising from my services shall not exceed the amount paid for the specific service in question.
                    </p>
                  </section>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={600}>
                  <section className="glass rounded-xl p-6 lg:p-8">
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">11. Third-Party Services</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      My services may involve or recommend third-party tools, platforms, or services (Google, Meta, hosting providers, etc.). I am not responsible for the terms, conditions, or actions of these third parties. Any costs associated with third-party services are separate from my service fees unless otherwise specified.
                    </p>
                  </section>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={650}>
                  <section className="glass rounded-xl p-6 lg:p-8">
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">12. Dispute Resolution</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Any disputes arising from these terms or my services shall first be addressed through good-faith negotiation. If resolution cannot be reached, disputes may be submitted to mediation or arbitration. These terms shall be governed by applicable international commercial law.
                    </p>
                  </section>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={700}>
                  <section className="glass rounded-xl p-6 lg:p-8">
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">13. Changes to Terms</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      I reserve the right to modify these Terms of Service at any time. Changes will be posted on this page with an updated revision date. Continued use of my services after changes constitutes acceptance of the new terms. For ongoing projects, the terms in effect at the start of the project will apply unless mutually agreed otherwise.
                    </p>
                  </section>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={750}>
                  <section className="glass rounded-xl p-6 lg:p-8">
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">14. Contact Information</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If you have any questions about these Terms of Service, please contact me at:
                    </p>
                    <div className="mt-4 text-foreground">
                      <p><strong>Email:</strong> contact.syedhadihussain@gmail.com</p>
                      <p><strong>WhatsApp:</strong> +971 52 369 5036</p>
                    </div>
                  </section>
                </ScrollReveal>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default TermsOfServicePage;
