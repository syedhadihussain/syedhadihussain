import { Award, CheckCircle, TrendingUp, Users } from "lucide-react";

const certifications = [
  "Local SEO Certified",
  "HubSpot SEO Certification",
  "Project Management Certification",
  "Google Analytics Certified",
  "Google Search Console Certified",
  "Google Ads Search Certified",
];

const skills = [
  "Local SEO",
  "Google Business Profile Management",
  "Keyword Research",
  "On-Page SEO",
  "Technical SEO",
  "Content Strategy",
  "Link Building",
  "Citation Management",
  "Conversion Optimization",
  "Analytics & Reporting",
  "Project Management",
  "Client Communication",
  "Team Collaboration",
  "Strategic Planning",
  "Performance Tracking",
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
              Full-Stack Local SEO Specialist
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm Syed Hadi Hussain, a full-stack local SEO specialist who helps local and service-based businesses get more visibility on Google and turn searches into real leads.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I don't just focus on rankings. I focus on what actually matters to your business — calls, inquiries, and customers. I manage the complete SEO process from strategy to execution, so you don't have to deal with multiple people or confusion.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With 7+ years of experience and 100+ clients served, I help businesses grow through clear, proven, and result-focused local SEO.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="glass rounded-xl p-5">
                <TrendingUp className="w-8 h-8 text-primary mb-3" />
                <div className="font-display text-2xl font-bold text-foreground">7+</div>
                <div className="text-sm text-muted-foreground">Years of Experience</div>
              </div>
              <div className="glass rounded-xl p-5">
                <Users className="w-8 h-8 text-primary mb-3" />
                <div className="font-display text-2xl font-bold text-foreground">100+</div>
                <div className="text-sm text-muted-foreground">Clients Served</div>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{cert}</span>
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
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-xs"
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
