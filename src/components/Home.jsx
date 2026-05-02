import React from 'react';

export default function Home() {
  const handleImageError = (e) => {
    e.target.style.display = 'none';
    const container = document.querySelector('.profile-image-container');
    if (container) {
      container.innerHTML = `
        <div class="profile-placeholder">
          <span>AB</span>
        </div>
      `;
    }
  };

  return (
    <section id="home" className="section">
      <div className="home-container">
        <div className="profile-image-container">
          <img 
            src="./images/proheadshot.jpg" 
            alt="Anahel Bour" 
            className="profile-image"
            onError={handleImageError}
          />
        </div>
        
        <div className="home-content">
          <h2>About Me</h2>
          <div className="about-card">
            <h3 className="about-heading">Hi, I'm Anahel 👋</h3>
            
            <p className="about-text">
              Aspiring Cybersecurity Specialist and Computer Science student at UCF with hands-on experience in <strong>enterprise IT operations</strong>. 
              Currently leading a large-scale infrastructure migration to <strong>Microsoft 365</strong> at Kramer America LLC, 
              where I manage <strong>Entra ID governance</strong>, <strong>Bitdefender EDR</strong>, and <strong>UniFi network security</strong>. 
            </p>
            <p className="about-text">
              With a strong foundation in C, Python, and Java, I combine my academic studies in 
              <strong> Secure Operating Systems</strong> with professional certifications like 
              <strong> CompTIA Security+</strong>. I am passionate about engineering resilient 
              security architectures and implementing NIST-aligned controls.
            </p>

            <div className="tags-center mt-4">
              <span className="tech-tag">Identity Management</span>
              <span className="tech-tag">Network Security</span>
              <span className="tech-tag">Cloud Migration</span>
              <span className="tech-tag">Incident Response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}