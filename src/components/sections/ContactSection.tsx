'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, Twitter, Linkedin, Mail, Send } from 'lucide-react';

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/5kyguy' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/0x5kyguy' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/aakashyadav' },
  { icon: Mail, label: 'Email', href: 'mailto:0x5kyguy@gmail.com' },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formState);
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-6">
      <div ref={ref} className="max-w-4xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold mb-6"
        >
          Let's <span className="text-gradient">Connect</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground text-lg mb-12 max-w-2xl"
        >
          Have a project in mind or want to discuss blockchain development? 
          I'm always open to new opportunities and interesting conversations.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <label className="font-mono text-xs text-muted-foreground mb-2 block">
                name
              </label>
              <input
                type="text"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="font-mono text-xs text-muted-foreground mb-2 block">
                email
              </label>
              <input
                type="email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="font-mono text-xs text-muted-foreground mb-2 block">
                message
              </label>
              <textarea
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display font-semibold rounded-lg hover:glow transition-all duration-300"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-xl font-bold mb-4">Connect Nodes</h3>
              <div className="flex gap-4">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card border border-border rounded-lg hover:border-primary hover:text-primary transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg">
              <div className="font-mono text-xs text-muted-foreground mb-2">wallet_address</div>
              <div className="font-mono text-sm text-foreground break-all">
                0x742d35Cc6634C0532925a3b844Bc454e4438f44e
              </div>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg">
              <div className="font-mono text-xs text-muted-foreground mb-2">ens_domain</div>
              <div className="text-primary font-display font-semibold">0x5kyguy.eth</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-border text-center"
        >
          <p className="font-mono text-xs text-muted-foreground">
            <span className="text-primary">chain:</span> Ethereum Mainnet
            <span className="mx-4">|</span>
            <span className="text-primary">block_finalized:</span> true
            <span className="mx-4">|</span>
            © {new Date().getFullYear()} SkyGuy
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
