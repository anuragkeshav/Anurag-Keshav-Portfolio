import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative">
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
            Education & <span className="gradient-text">Training</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Academic background and professional development
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Education Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                <GraduationCap size={32} />
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold">Bachelor of Technology</h3>
                <p className="text-muted-foreground">Computer Science Engineering (IoT)</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar size={16} className="text-primary" />
                <span>2024 – 2028 (Expected)</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={16} className="text-primary" />
                <span>Banka, Bihar</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {['Programming Fundamentals', 'OOP', 'DSA', 'Operating Systems'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Internship Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                <Award size={32} />
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold">Web Development Internship</h3>
                <p className="text-muted-foreground">NIELIT Buxar</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar size={16} className="text-primary" />
                <span>Dec 2025 – Jan 2026</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {['HTML5', 'CSS3', 'JavaScript'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
