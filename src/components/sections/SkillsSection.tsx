'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ratedSkills = [
  { name: 'Golang', level: 95, category: 'Backend' },
  { name: 'Solidity', level: 95, category: 'Smart Contracts' },
  { name: 'Docker', level: 95, category: 'DevOps' },
  { name: 'Bash', level: 85, category: 'Scripting' },
  { name: 'TypeScript', level: 85, category: 'Languages' },
  { name: 'Foundry', level: 85, category: 'Tools' },
  { name: 'Python', level: 85, category: 'Languages' },
];

const unratedSkills = [
  { name: 'Git', category: 'Version Control' },
  { name: 'Linux / VPS', category: 'Infrastructure' },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 px-6">
      <div ref={ref} className="max-w-4xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold mb-12"
        >
          Technology <span className="text-gradient">Stack</span>
        </motion.h2>

        <div className="grid gap-4 mb-8">
          {ratedSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground px-2 py-0.5 bg-secondary rounded">
                    {skill.category}
                  </span>
                </div>
                <span className="font-mono text-sm text-primary">{skill.level}%</span>
              </div>
              
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-primary to-amber-400 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8"
        >
          <h3 className="font-display text-xl font-semibold mb-4 text-muted-foreground">Also Familiar With</h3>
          <div className="flex flex-wrap gap-3">
            {unratedSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                className="px-4 py-2 bg-card border border-border rounded-lg"
              >
                <span className="font-display font-semibold text-foreground">{skill.name}</span>
                <span className="font-mono text-xs text-muted-foreground ml-2">({skill.category})</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 font-mono text-xs text-muted-foreground"
        >
          <span className="text-primary">gas_used:</span> 21000
          <span className="mx-4">|</span>
          <span className="text-primary">difficulty:</span> 0x1
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
