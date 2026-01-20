'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const SectionNav = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'skills', name: 'Skills' },
    { id: 'experience', name: 'Experience' },
    { id: 'projects', name: 'Projects' },
    { id: 'featured', name: 'Featured' },
    { id: 'contact', name: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      {/* Progress bar */}
      <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-border">
        <motion.div
          style={{ scaleY, originY: 0 }}
          className="w-full h-full bg-primary"
        />
      </div>

      <div className="relative flex flex-col gap-4">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="group flex items-center gap-3 transition-all duration-300 py-2 -my-2 px-2 -mx-2 rounded-lg hover:bg-card/50"
              aria-label={`Navigate to ${section.name} section`}
            >
              <span className={`font-mono text-xs transition-all duration-300 text-right min-w-[80px] ${
                isActive 
                  ? 'text-primary font-semibold opacity-100' 
                  : 'text-muted-foreground opacity-70 group-hover:opacity-100'
              }`}>
                {section.name}
              </span>
              <div className="relative flex items-center">
                <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  isActive
                    ? 'bg-primary border-primary glow scale-125'
                    : 'bg-muted border-border group-hover:border-primary group-hover:bg-primary/20 group-hover:scale-110'
                }`} />
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default SectionNav;
