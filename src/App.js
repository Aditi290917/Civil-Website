import { Routes, Route } from "react-router-dom";
import HeroSection from "./Components/header";
import AboutUs from "./Components/aboutus";
import Services from "./Components/services";
import ProjectsPage from "./Components/ProjectsPages";
import CompanyProducts from "./Components/products";
import Footer from "./Components/footer";
import ProjectCards from "./Components/projects";
import WhyChoose from "./Components/whyChoose";
import ContactUs from "./Components/ContactUs";
import IndustriesWeServe from "./Components/industriesWeServe";
import OurProcess from "./Components/ourProcess";
import Testimonials from "./Components/Testimonials";
import FAQ from "./Components/FAQ";

function App() {
  return (
    <Routes>
      {/* Main route to display HeroSection, AboutUs, and other components */}
      <Route
        path="/"
        element={
          <>
            <HeroSection />
            <AboutUs />
            <Services />
            <ProjectCards /> {/* Now part of Routes */}
            <IndustriesWeServe></IndustriesWeServe>
            <OurProcess></OurProcess>
            <WhyChoose />
            <Testimonials></Testimonials>
            <FAQ></FAQ>
            <CompanyProducts />
            <ContactUs></ContactUs>
            <Footer />
          </>
        }
      />
      
      {/* Route for the ProjectsPage */}
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
  );
}

export default App;
