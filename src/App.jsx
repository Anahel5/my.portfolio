import React from 'react';
import Header from "./components/Header";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import HardwareProjects from "./components/HardwareProjects";
import Certificates from "./components/Certificates"; 
import Achievements from "./components/Achievements"; 
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  React.useEffect(() => {
    // Set the main title
    document.title = "Anahel Bour | Portfolio";
    
    const handleHashChange = () => {
      if (window.location.hash) {
        const element = document.getElementById(window.location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          
          // Update title based on current section
          const sectionTitles = {
            'home': 'Anahel Bour | Portfolio',
            'experience': 'Anahel Bour | Experience',
            'projects': 'Anahel Bour | Projects',
            'hardware-projects': 'Anahel Bour | Hardware Projects',
            'certificates': 'Anahel Bour | Certificates',
            'achievements': 'Anahel Bour | Achievements',
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
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div>
      <Header />
      <main>
        <Home id="home" />
        <Experience id="experience" />
        <Projects id="projects" />
        <HardwareProjects id="hardware-projects" />
        <Certificates id="certificates" /> 
        <Achievements id="achievements" />
        <Contact id="contact" />
      </main>
      <Footer />
    </div>
  );
}

export default App;