import ParticleNetwork from "@/components/ParticleNetwork";
import SectionNav from "@/components/SectionNav";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
// import WritingSection from "@/components/sections/WritingSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleNetwork />
      <SectionNav />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        {/* <WritingSection /> */}
        <ContactSection />
      </main>
    </div>
  );
}
