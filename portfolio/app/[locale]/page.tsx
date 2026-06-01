import AboutSection from "./components/about-section";
import MoreInfo from "./components/more-info";
import { Navbar } from "./components/navbar";
import Skills from "./components/skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <AboutSection />
        <MoreInfo />
        <Skills />
      </main>
    </>
  );
}
