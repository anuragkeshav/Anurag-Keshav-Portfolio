import { Sparkles, Code, Rocket, Target } from 'lucide-react';

const journeyData = [
  {
    title: 'The Beginning',
    icon: Sparkles,
    description: 'Started with curiosity about how websites work. Dove into programming basics and discovered my passion for creating digital experiences.',
  },
  {
    title: 'Building Skills',
    icon: Code,
    description: 'Focused on mastering responsive UI design and clean code practices. Built foundational projects to strengthen my understanding.',
  },
  {
    title: 'Real-World Projects',
    icon: Rocket,
    description: 'Took on personal and freelance projects. Deepened my JavaScript knowledge and started exploring data structures & algorithms.',
  },
  {
    title: 'Current Focus',
    icon: Target,
    description: 'Advancing in JavaScript frameworks, AI concepts, and building scalable web applications. Always learning, always growing.',
  },
];

const JourneySection = () => {
  return (
    <section id="journey" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title animate-fade-up">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle mx-auto animate-fade-up-delay-1">
            The path that shaped my development career
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {journeyData.map((item, index) => (
            <div
              key={item.title}
              className="relative pl-16 pb-12 last:pb-0 animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Timeline Line */}
              {index < journeyData.length - 1 && <div className="timeline-line" />}

              {/* Timeline Dot */}
              <div className="timeline-dot flex items-center justify-center">
                <item.icon size={12} className="text-primary" />
              </div>

              {/* Content Card */}
              <div className="glass-card p-6">
                <h3 className="text-xl font-display font-semibold mb-3 flex items-center gap-3">
                  <item.icon size={20} className="text-primary" />
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
