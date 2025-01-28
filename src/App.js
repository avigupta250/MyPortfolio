import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillSection from "./components/SkillSection";
import Leetcode from "./components/Leetcode"
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
      <div ref={homeRef} className="scroll-mt-[160px]">
        <HeroSection />
      </div>
      <div ref={skillsRef} className="scroll-mt-[90px]">
      
        <SkillSection />
      </div>
      <div ref={projectsRef} className="scroll-mt-[90px]">
        <ProjectsSection />
      </div>
      <div ref={contactRef} className="scroll-mt-[90px]">
        
      <Footer />
      </div>
    </div>
  );
}
export default App;
