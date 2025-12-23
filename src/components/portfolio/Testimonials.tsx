import { Quote, Star } from "lucide-react";
const testimonials = [{
  quote: "Hadi transformed our Google Business Profile and now we receive daily calls from Google Maps. His local SEO knowledge is exceptional.",
  author: "Ahmed R.",
  role: "Service Business Owner"
}, {
  quote: "Clear communication, real results, and honest reporting. Our rankings and leads improved within the first month.",
  author: "Sarah M.",
  role: "Repair Shop Owner"
}, {
  quote: "Hadi understands competitive local SEO better than anyone we've worked with. Highly recommended.",
  author: "James T.",
  role: "Bail Bonds Agency"
}];
const Testimonials = () => {
  return <section id="testimonials" className="section-padding">
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Clients Say
          </h2>
          <p className="text-muted-foreground">
            Don't just take my word for it, here's what business owners have to say about working with me.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => <div key={index} className="glass rounded-2xl p-6 lg:p-8 relative group hover:glow-sm transition-all duration-300">
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/20 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
              </div>

              {/* Quote Text */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-border">
                <div className="font-display font-semibold text-foreground">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Testimonials;