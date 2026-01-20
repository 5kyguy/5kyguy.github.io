'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const highlights = [
  {
    title: 'EigenCloud Developers on Times Square',
    excerpt: 'My name was featured on Times Square in New York City.',
    date: '2025-04-XX',
    link: '#',
  },
  {
    title: 'Invited to Arbitrum Hacker House, Bengaluru',
    excerpt: 'I was invited to the Arbitrum Hacker House in Bengaluru to hack on the Arbitrum network.',
    date: '2025-09-18 - 2025-09-20',
    link: '#',
  },
  {
    title: 'Attended ETHGlobal New Delhi',
    excerpt: 'I attended the Pragma New Delhi conference and ETHGlobal New Delhi Hackathon.',
    date: '2024-09-23 - 2024-09-26',
    link: '#',
  },
];

const FeaturedSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="featured" className="min-h-screen flex items-center py-20 px-6">
      <div ref={ref} className="max-w-4xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold mb-12"
        >
          Featured <span className="text-gradient">Highlights</span>
        </motion.h2>

        <div className="space-y-6">
          {highlights.map((highlight, index) => (
            <motion.a
              key={highlight.title}
              href={highlight.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group block p-6 bg-card border border-border rounded-lg hover:border-primary/50 hover:glow transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs text-muted-foreground">{highlight.date}</span>
                    <span className="text-muted-foreground">•</span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {highlight.title}
                  </h3>

                  <p className="text-muted-foreground mb-4">{highlight.excerpt}</p>
                </div>

                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 font-mono text-xs text-muted-foreground"
        >
          <span className="text-primary">logs_bloom:</span> 0x00...
          <span className="mx-4">|</span>
          <span className="text-primary">highlights:</span> {highlights.length}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedSection;
