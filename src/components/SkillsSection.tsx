import { Code2, Terminal, BookOpen, Wrench } from 'lucide-react';

const skillsData = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'UI/UX Basics'],
  },
  {
    title: 'Programming',
    icon: Terminal,
    skills: ['C', 'Java (OOP)', 'Python', 'Problem Solving'],
  },
  {
    title: 'Currently Learning',
    icon: BookOpen,
    skills: ['Advanced JavaScript', 'DSA', 'Artificial Intelligence', 'React'],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    skills: ['GitHub', 'Netlify', 'VS Code', 'Canva', 'DaVinci Resolve'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title animate-fade-up">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle mx-auto animate-fade-up-delay-1">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((category, index) => (
            <div
              key={category.title}
              className="glass-card p-6 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-display font-semibold">{category.title}</h3>
              </div>

              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
