'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

const SectionNav = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const sections = [
    { id: 'genesis', label: '00', name: 'Genesis' },
    { id: 'about', label: '01', name: 'About' },
    { id: 'skills', label: '02', name: 'Skills' },
    { id: 'experience', label: '03', name: 'Experience' },
    { id: 'projects', label: '04', name: 'Projects' },
    // { id: 'writing', label: '05', name: 'Writing' },
    { id: 'contact', label: '05', name: 'Contact' },
  ];

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

      <div className="relative flex flex-col gap-6">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group flex items-center gap-3"
          >
            <span className="font-mono text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity text-right">
              {section.name}
            </span>
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-muted border-2 border-border group-hover:border-primary group-hover:bg-primary/20 transition-colors" />
              <span className="absolute left-full ml-3 font-mono text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                #{section.label}
              </span>
            </div>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default SectionNav;
