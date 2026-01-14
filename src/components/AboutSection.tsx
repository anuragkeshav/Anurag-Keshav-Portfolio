import { MapPin, Briefcase } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Bold Statement */}
          <div className="animate-fade-up">
            <h2 className="section-title leading-tight">
              I build{' '}
              <span className="gradient-text">responsive web experiences</span>
              {' '}with clean, maintainable code.
            </h2>
          </div>

          {/* Right - Bio */}
          <div className="space-y-6 animate-fade-up-delay-2">
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a B.Tech Computer Science student specializing in IoT, with a passion for 
              creating modern web applications. From freelance projects to personal experiments, 
              I love turning ideas into reality through code.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              My focus areas include JavaScript development, exploring AI concepts, 
              and crafting smooth animations that enhance user experiences.
            </p>

            {/* Chips */}
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="chip">
                <MapPin size={16} className="text-primary" />
                India
              </span>
              <span className="chip chip-accent">
                <Briefcase size={16} />
                Open to internships & freelance
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
