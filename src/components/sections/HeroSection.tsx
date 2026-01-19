'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Building decentralized infrastructure with EigenCloud AVS and smart contracts.';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="genesis" className="min-h-screen flex items-center justify-center relative px-6">
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl font-bold mb-6 text-gradient glow-text"
        >
          SkyGuy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-mono text-lg md:text-xl text-muted-foreground mb-8 h-8"
        >
          {displayText}
          <span className="animate-pulse text-primary">|</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#about"
            className="px-6 py-3 bg-primary text-primary-foreground font-display font-semibold rounded-lg hover:glow transition-all duration-300"
          >
            Explore Chain →
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-primary/50 text-primary font-display font-semibold rounded-lg hover:bg-primary/10 transition-all duration-300"
          >
            Connect Node
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 font-mono text-xs text-muted-foreground"
        >
          <span className="text-primary">hash:</span> 0x7f3a9b2c...
          <span className="mx-4">|</span>
          <span className="text-primary">timestamp:</span> {new Date().toISOString().slice(0, 10)}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
