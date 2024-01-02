import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillSection from "./components/SkillSection";
import { useRef } from "react";
function App() {
  const  mySkills=useRef(null);
  return (
    <div className="App overflow-x-hidden  bg-[#0E1630] mx-auto  w-[100vw] ">
     <div className="">
     <Header />
     </div>
      <HeroSection />
     <div ref={mySkills}>
     < SkillSection />
     </div>
      <ProjectsSection />
      <Footer />
    </div>
  );
}

export default App;
