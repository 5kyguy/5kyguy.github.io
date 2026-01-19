'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    title: 'Backend + Blockchain Developer',
    company: 'Lampros Tech',
    period: 'June 2024 — Present',
    description: 'Working on TriggerX, an AVS leveraging EigenCloud and built for all EVM chains. Developing smart contracts and backend architecture. Participated in multiple hackathons and won 5th place at EigenCloud Microhacks.',
    tags: ['EigenCloud', 'Solidity', 'Golang', 'TypeScript'],
  },
  {
    title: 'Research Fellow',
    company: 'VL2G, IIT Jodhpur',
    period: 'Jan 2024 — Jun 2024',
    description: 'Worked under the guidance of Dr. Anand Mishra at VL2G labs. Designed automated generation pipeline for synthetic dataset (pptGEN) using OpenAI API and LangChain for Lecture Slides Understanding.',
    tags: ['Research', 'Python', 'LangChain', 'AI'],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="min-h-screen flex items-center py-20 px-6">
      <div ref={ref} className="max-w-4xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold mb-12"
        >
          Work <span className="text-gradient">History</span>
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border md:left-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className={`relative pl-8 md:pl-0 mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:pr-[calc(50%+2rem)] md:text-right' : 'md:pl-[calc(50%+2rem)]'
              }`}
            >
              {/* Timeline node */}
              <div
                className={`absolute w-4 h-4 bg-primary rounded-full border-4 border-background glow ${
                  index % 2 === 0 ? 'left-[-6px] md:left-auto md:right-[calc(50%-8px)]' : 'left-[-6px] md:left-[calc(50%-8px)]'
                } top-2`}
              />

              <div className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
                <div className="font-mono text-xs text-primary mb-2">{exp.period}</div>
                <h3 className="font-display text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                <div className="text-muted-foreground mb-3">{exp.company}</div>
                <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>
                
                <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 font-mono text-xs text-muted-foreground"
        >
          <span className="text-primary">block_time:</span> 12s
          <span className="mx-4">|</span>
          <span className="text-primary">transactions:</span> {experiences.length}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
