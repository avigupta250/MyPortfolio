
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillSection from './components/SkillSection';

function App() {
  return (
    <div className="App  bg-[#0F172A] mx-auto  w-[100vw]">
    
     <Header/>
       <HeroSection/>
       <SkillSection/>
       <ProjectsSection/>

     </div>
     
  
  );
}

export default App;
