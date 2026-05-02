import React from 'react';
import Header from "./components/Header";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import HardwareProjects from "./components/HardwareProjects";
import Certificates from "./components/Certificates"; 
import Education from "./components/Education"; 
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  React.useEffect(() => {
    document.title = "Anahel Bour | Portfolio";
    
    const handleHashChange = () => {
      if (window.location.hash) {
        const element = document.getElementById(window.location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          
          const sectionTitles = {
            'home': 'Anahel Bour | Portfolio',
            'experience': 'Anahel Bour | Experience',
            'certificates': 'Anahel Bour | Certificates',
            'projects': 'Anahel Bour | Projects',
            'hardware-projects': 'Anahel Bour | Hardware',
            'education': 'Anahel Bour | Education',
            'contact': 'Anahel Bour | Contact'
          };
          
          const sectionId = window.location.hash.substring(1);
          if (sectionTitles[sectionId]) {
            document.title = sectionTitles[sectionId];
          }
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div>
      <Header />
      <main>
        {/* 1. SUMMARY */}
        <Home id="home" />
        
        {/* 2. EXPERIENCE */}
        <Experience id="experience" />
        
        {/* 3. CERTIFICATIONS (Moved Up) */}
        <Certificates id="certificates" /> 
        
        {/* 4. PORTFOLIO */}
        <Projects id="projects" />
        <HardwareProjects id="hardware-projects" />
        
        {/* 5. EDUCATION */}
        <Education id="education" />
        
        <Contact id="contact" />
      </main>
      <Footer />
    </div>
  );
}

export default App;