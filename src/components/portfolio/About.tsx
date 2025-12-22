import { Award, CheckCircle, TrendingUp, Users } from "lucide-react";

const certifications = [
  "Google Analytics Certified",
  "Google Search Console Certified",
  "SEMrush SEO Toolkit Certified",
  "Local SEO Training at Opti-Rank Technologies",
];

const skills = [
  "Local SEO & Google Business Profile",
  "Service Area Business SEO",
  "On-Page & Technical SEO",
  "Keyword Research & Topical Authority",
  "GMB Reviews & Conversion Optimization",
  "Schema Markup & Local Citations",
  "SEO Content Strategy",
  "Voice Search Optimization",
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-card/50">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column */}
          <div>
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              About Me
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Results-Driven SEO Specialist
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I am a results-driven Local SEO specialist with hands-on experience helping service businesses dominate Google Search and Google Business Profile rankings. I focus on practical SEO strategies that generate real calls, leads, and revenue — not just traffic.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With over 4 years of professional experience, I've helped businesses across multiple industries achieve top rankings and measurable growth.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="glass rounded-xl p-5">
                <TrendingUp className="w-8 h-8 text-primary mb-3" />
                <div className="font-display text-2xl font-bold text-foreground">4+</div>
                <div className="text-sm text-muted-foreground">Years of Experience</div>
              </div>
              <div className="glass rounded-xl p-5">
                <Users className="w-8 h-8 text-primary mb-3" />
                <div className="font-display text-2xl font-bold text-foreground">Global</div>
                <div className="text-sm text-muted-foreground">Client Reach</div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <Award className="w-5 h-5 text-primary" />
                <h3 className="font-display text-xl font-semibold text-foreground">Certifications</h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-5">Key Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;