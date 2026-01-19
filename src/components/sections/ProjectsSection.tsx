'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'TriggerX',
    description: 'An AVS leveraging EigenCloud and built for all EVM chains. Continuation of Keeper Network with full AVS functionality. Working on contracts and backend architecture with Othentic Stack integration.',
    image: '/placeholder.svg',
    tags: ['EigenCloud', 'Solidity', 'Golang', 'EVM'],
    github: 'https://github.com/5kyguy/triggerx-contracts',
    live: '#',
    stats: { status: 'Active', type: 'AVS' },
  },
  {
    title: 'Keeper Network',
    description: 'EigenCloud AVS architecture for a keeper network. Developed Solidity contracts during EigenCloud Microhacks, winning 5th place. Introduced to EigenCloud and AVS concepts.',
    image: '/placeholder.svg',
    tags: ['EigenCloud', 'Solidity', 'Foundry', 'AVS'],
    github: '#',
    live: '#',
    stats: { award: '5th Place', event: 'Microhacks' },
  },
  {
    title: 'pptGEN',
    description: 'Automated generation pipeline for synthetic dataset creation. Designed for Lecture Slides Understanding using OpenAI API and LangChain. Covers 4 subjects with multiple visual and textual elements.',
    image: '/placeholder.svg',
    tags: ['Python', 'LangChain', 'OpenAI', 'Research'],
    github: '#',
    stats: { subjects: '4', type: 'Research' },
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 px-6">
      <div ref={ref} className="max-w-5xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold mb-12"
        >
          Featured <span className="text-gradient">Builds</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 hover:glow transition-all duration-300"
            >
              <div className="aspect-video bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                <div className="absolute bottom-2 right-2 flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-background/80 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-background/80 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 font-mono text-xs text-muted-foreground">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <span key={key}>
                      <span className="text-primary">{key}:</span> {value}
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
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 font-mono text-xs text-muted-foreground"
        >
          <span className="text-primary">state_root:</span> 0x4a5b6c...
          <span className="mx-4">|</span>
          <span className="text-primary">contracts_deployed:</span> 12
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
