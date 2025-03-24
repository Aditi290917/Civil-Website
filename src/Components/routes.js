import { Routes, Route } from "react-router-dom";
import HeroSection from "./HeroSection";
import ProjectsPage from "./ProjectsPages";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="/projects" element={<ProjectsPage/>}/>
    </Routes>
  );
}

export default App;
