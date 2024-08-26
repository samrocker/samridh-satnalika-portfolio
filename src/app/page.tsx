import AboutSection from "@/components/LandingPage/AboutSection";
import ExperienceDetails from "@/components/LandingPage/ExperienceDetails";
import HeroSection from "@/components/LandingPage/HeroSection";
import ProjectsSection from "@/components/LandingPage/ProjectsSection";
import TechStackSection from "@/components/LandingPage/TechStackSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceDetails />
      <ProjectsSection />
      <TechStackSection />
    </>
  );
}
