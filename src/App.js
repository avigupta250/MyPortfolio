import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillSection from "./components/SkillSection";

function App() {
  return (
    <div className="App  bg-[#0E1630] mx-auto  w-[100vw] ">
     <div className="">
     <Header />
     </div>
      <HeroSection />
      <SkillSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}

export default App;
