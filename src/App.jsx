import React from 'react';
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import HardwareProjects from "./components/HardwareProjects";
import Certificates from "./components/Certificates"; 
import Achievements from "./components/Achievements"; 
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  React.useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash) {
        const element = document.getElementById(window.location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
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