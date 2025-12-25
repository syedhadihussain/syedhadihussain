import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import SEOHead from "@/components/SEOHead";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const PrivacyPolicyPage = () => {
  return (
    <>
      <SEOHead 
        title="Privacy Policy – Syed Hadi Hussain" 
        description="Privacy Policy for Syed Hadi Hussain's website. Learn how we collect, use, and protect your personal information." 
        canonical="https://syedhadihussain.com/privacy"
        keywords="privacy policy, data protection, personal information, GDPR"
        breadcrumbs={[
          { name: "Home", url: "https://syedhadihussain.com" },
          { name: "Privacy Policy", url: "https://syedhadihussain.com/privacy" }
        ]}
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-24">
          <section className="section-padding">
            <div className="container-narrow max-w-4xl">
              <ScrollReveal animation="fade-up">
                <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-8">
                  Privacy Policy
                </h1>
                <p className="text-muted-foreground mb-8">
                  Last updated: December 25, 2025
                </p>
              </ScrollReveal>

              <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
                <ScrollReveal animation="fade-up" delay={100}>
                  <section className="glass rounded-xl p-6 lg:p-8">
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Welcome to Syed Hadi Hussain's website. I respect your privacy and am committed to protecting your personal data. This privacy policy explains how I collect, use, and safeguard your information when you visit my website or use my services.
                    </p>
                  </section>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={150}>
                  <section className="glass rounded-xl p-6 lg:p-8">
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">2. Information I Collect</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">I may collect the following types of information:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li><strong className="text-foreground">Contact Information:</strong> Name, email address, phone number, and company name when you fill out contact forms</li>
                      <li><strong className="text-foreground">Business Information:</strong> Business name, address, website URL, and Google Business Profile links for service delivery</li>
                      <li><strong className="text-foreground">Usage Data:</strong> Pages visited, time spent on site, browser type, and device information</li>
                      <li><strong className="text-foreground">Communication Data:</strong> Records of correspondence when you contact me</li>
                    </ul>
                  </section>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={200}>
                  <section className="glass rounded-xl p-6 lg:p-8">
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">3. How I Use Your Information</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">Your information is used to:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Respond to your inquiries and provide requested services</li>
                      <li>Deliver Local SEO, web development, and marketing services</li>
                      <li>Send project updates and relevant communications</li>
                      <li>Improve website functionality and user experience</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </section>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={250}>
                  <section className="glass rounded-xl p-6 lg:p-8">
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">4. Data Protection</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      I implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes secure data storage, encrypted communications, and limited access to personal data.
                    </p>
                  </section>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={300}>
                  <section className="glass rounded-xl p-6 lg:p-8">
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">5. Third-Party Services</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">I may use third-party services that collect information:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li><strong className="text-foreground">Analytics:</strong> To understand website usage patterns</li>
                      <li><strong className="text-foreground">Calendly:</strong> For booking consultations</li>
                      <li><strong className="text-foreground">Payment Processors:</strong> For secure payment handling</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      These services have their own privacy policies governing the use of your information.
                    </p>
                  </section>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={350}>
                  <section className="glass rounded-xl p-6 lg:p-8">
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">6. Cookies</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      This website may use cookies to enhance your browsing experience. Cookies are small text files stored on your device. You can control cookie settings through your browser preferences. Essential cookies are necessary for the website to function properly.
                    </p>
                  </section>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={400}>
                  <section className="glass rounded-xl p-6 lg:p-8">
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">7. Your Rights</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Access your personal data</li>
                      <li>Request correction of inaccurate data</li>
                      <li>Request deletion of your data</li>
                      <li>Object to processing of your data</li>
                      <li>Request data portability</li>
                      <li>Withdraw consent at any time</li>
                    </ul>
                  </section>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={450}>
                  <section className="glass rounded-xl p-6 lg:p-8">
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">8. Data Retention</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      I retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements. Contact form submissions are retained for the duration of our business relationship.
                    </p>
                  </section>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={500}>
                  <section className="glass rounded-xl p-6 lg:p-8">
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">9. International Transfers</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      As I serve clients worldwide, your data may be processed in different countries. I ensure appropriate safeguards are in place to protect your information regardless of where it is processed.
                    </p>
                  </section>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={550}>
                  <section className="glass rounded-xl p-6 lg:p-8">
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">10. Changes to This Policy</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      I may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date. I encourage you to review this policy periodically.
                    </p>
                  </section>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={600}>
                  <section className="glass rounded-xl p-6 lg:p-8">
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">11. Contact Me</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If you have any questions about this privacy policy or wish to exercise your rights, please contact me at:
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

export default PrivacyPolicyPage;
