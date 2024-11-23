import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillSection from "./components/SkillSection";
import { useRef } from "react";
function App() {
  // Define refs for each section
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="App overflow-x-hidden bg-[#0E1630] mx-auto w-[100vw]">
      {/* Header */}
      <Header homeRef={homeRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef} />

      {/* Sections */}
      <div ref={homeRef}>
        <HeroSection />
      </div>
      <div ref={skillsRef}>
        <SkillSection />
      </div>
      <div ref={projectsRef}>
        <ProjectsSection />
      </div>
      <div ref={contactRef}>
        
      <Footer />
      </div>
    </div>
  );
}
export default App;
