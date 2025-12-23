import { Button } from "@/components/ui/button";
import { Calendar, Mail, MessageCircle, ArrowRight, MapPin } from "lucide-react";
const Contact = () => {
  return <section id="contact" className="section-padding bg-card/50">
      <div className="container-narrow">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <div className="glass rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden glow">
            {/* Background Decoration */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            </div>

            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Let's Work Together
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Ready to Dominate Google?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 text-center">
              Book a free Local SEO audit and discover how to outrank your competitors and generate more leads from Google.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="glow group">
                <a href="https://calendly.com/syedhadihussain" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Free SEO Audit
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="https://wa.me/+971523695036" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Me
                </a>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
              <a href="mailto:syedhadi.workid@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" />
                syedhadi.workid@gmail.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                UAE, UK, USA, Australia
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;