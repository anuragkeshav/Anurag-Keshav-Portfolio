import { Code2, Terminal, BookOpen, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

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
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
