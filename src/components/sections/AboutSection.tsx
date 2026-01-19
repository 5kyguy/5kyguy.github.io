'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-6">
      <div ref={ref} className="max-w-4xl mx-auto w-full">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Backend + <span className="text-gradient">Blockchain</span> Developer
            </h2>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Hi, I'm SkyGuy (Aakash Yadav), a backend and blockchain developer currently working at Lampros Tech, 
                building TriggerX—an AVS leveraging EigenCloud and built for all EVM chains. 
                With expertise in Solidity, Golang, and TypeScript, I specialize in creating 
                secure smart contracts and scalable backend systems.
              </p>
              <p>
                My journey includes winning 5th place at EigenCloud Microhacks, contributing 
                to research at IIT Jodhpur, and continuously pushing the boundaries of 
                decentralized infrastructure.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <div className="p-4 bg-card border border-border rounded-lg">
              <div className="font-mono text-xs text-muted-foreground mb-2">current_status</div>
              <div className="text-primary font-display font-semibold">Backend + Blockchain Dev</div>
            </div>
            
            <div className="p-4 bg-card border border-border rounded-lg">
              <div className="font-mono text-xs text-muted-foreground mb-2">primary_focus</div>
              <div className="text-foreground font-display font-semibold">EigenCloud AVS</div>
            </div>
            
            <div className="p-4 bg-card border border-border rounded-lg">
              <div className="font-mono text-xs text-muted-foreground mb-2">education</div>
              <div className="text-foreground font-display font-semibold">BTech CS @ SVNIT</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 font-mono text-xs text-muted-foreground"
        >
          <span className="text-primary">prev_hash:</span> 0x7f3a9b2c...
          <span className="mx-4">|</span>
          <span className="text-primary">nonce:</span> 42
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
