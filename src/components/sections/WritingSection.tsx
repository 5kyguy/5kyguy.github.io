'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const posts = [
  {
    title: 'Building EigenCloud AVS: A Deep Dive into TriggerX',
    excerpt: 'Exploring the architecture and implementation of an Actively Validated Service on EigenCloud, built for all EVM chains.',
    date: '2024-09-15',
    readTime: '10 min',
    tags: ['EigenCloud', 'AVS', 'EVM'],
    link: '#',
  },
  {
    title: 'Smart Contract Development with Foundry',
    excerpt: 'Best practices for building gas-efficient and secure smart contracts using Foundry framework.',
    date: '2024-06-20',
    readTime: '12 min',
    tags: ['Foundry', 'Solidity', 'Security'],
    link: '#',
  },
  {
    title: 'Keeper Networks on EigenCloud',
    excerpt: 'Lessons learned from building a keeper network AVS during EigenCloud Microhacks.',
    date: '2024-05-10',
    readTime: '8 min',
    tags: ['EigenCloud', 'Keeper', 'Microhacks'],
    link: '#',
  },
];

const WritingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="writing" className="min-h-screen flex items-center py-20 px-6">
      <div ref={ref} className="max-w-4xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold mb-12"
        >
          Blog & <span className="text-gradient">Articles</span>
        </motion.h2>

        <div className="space-y-6">
          {posts.map((post, index) => (
            <motion.a
              key={post.title}
              href={post.link}
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
                    <span className="font-mono text-xs text-muted-foreground">{post.date}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="font-mono text-xs text-muted-foreground">{post.readTime}</span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
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
          <span className="text-primary">posts:</span> {posts.length}
        </motion.div>
      </div>
    </section>
  );
};

export default WritingSection;
