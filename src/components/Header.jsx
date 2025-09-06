import React, { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="site-header">
      <nav className="nav">
        <h1 className="logo">Anahel Bour</h1>
        
        {/* Hamburger Menu Button */}
        <button 
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Navigation Links */}
        <ul className={`navlinks ${isMenuOpen ? 'nav-open' : ''}`}>
          <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
          <li><a href="#hardware-projects" onClick={() => setIsMenuOpen(false)}>Hardware</a></li>
          <li><a href="#achievements" onClick={() => setIsMenuOpen(false)}>Achievements</a></li>
          <li><a href="#certificates" onClick={() => setIsMenuOpen(false)}>Certificates</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}