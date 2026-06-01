import AboutSection from "./components/about-section";
import { Navbar } from "./components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <AboutSection />
      </main>
    </>
  );
}
