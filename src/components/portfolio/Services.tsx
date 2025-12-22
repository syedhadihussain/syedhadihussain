import { MapPin, Globe, Search, FileText, Code, BarChart3 } from "lucide-react";

const services = [
  {
    icon: MapPin,
    title: "Local SEO & Google Business Profile Optimization",
    description: "Complete optimization of your Google Business Profile to improve local rankings, visibility, and calls.",
  },
  {
    icon: Globe,
    title: "Service-Based Website SEO",
    description: "On-page SEO, service page optimization, and internal linking to rank for high-intent keywords.",
  },
  {
    icon: Search,
    title: "Keyword Research & Topical Authority Building",
    description: "Deep keyword research and content planning to make your website an authority in your niche.",
  },
  {
    icon: FileText,
    title: "SEO Content Writing & Optimization",
    description: "SEO-optimized blogs, service pages, and location pages written for both Google and users.",
  },
  {
    icon: Code,
    title: "Schema Markup & Technical SEO",
    description: "Advanced schema implementation to enhance search appearance and click-through rates.",
  },
  {
    icon: BarChart3,
    title: "Monthly SEO Management & Reporting",
    description: "Ongoing SEO campaigns with transparent reporting and measurable growth.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            SEO Services That Drive Results
          </h2>
          <p className="text-muted-foreground">
            Comprehensive Local SEO solutions tailored for service-based businesses ready to dominate their market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group glass rounded-2xl p-6 hover:glow-sm transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;