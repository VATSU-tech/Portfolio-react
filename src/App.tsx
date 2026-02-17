import ContactSection from "./components/sections/ContactSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import HeroSection from "./components/sections/HeroSection";
import IotSection from "./components/sections/IotSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import SiteFooter from "./components/sections/SiteFooter";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll";
import Skill from './components/sections/skill';

export default function App() {
  useRevealOnScroll();

  return (
    <div className="min-h-screen text-ink">
      <HeroSection />
      <ProjectsSection />
      <Skill />
      {/* <IotSection /> */}
      <ExperienceSection />
      <ContactSection />
      <SiteFooter />
    </div>
  );
}
