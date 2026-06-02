import AboutSection from "./components/about-section";
import { ContactSection } from "./components/contact-section";
import { ExperienceSection } from "./components/experience-section";
import MoreInfo from "./components/more-info";
import { Navbar } from "./components/navbar";
import { ProjectsSection } from "./components/project-section";
import Skills from "./components/skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <AboutSection />
        <MoreInfo />
        <Skills />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </>
  );
}
