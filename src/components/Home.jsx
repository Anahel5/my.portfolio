export default function Home() {
  const handleImageError = (e) => {
    e.target.style.display = 'none';
    document.querySelector('.profile-image-container').innerHTML = `
      <div class="profile-placeholder">
        <span>AB</span>
      </div>
    `;
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
              Computer Science student at the University of Central Florida with a strong foundation 
              in <strong>C, Python, and Java</strong>. Currently pursuing expertise in cybersecurity through coursework 
              in Security in Computing and completion of the 
              <strong> Google Cybersecurity Professional Certificate</strong>. Skilled in <strong>Linux, 
              SQL, Wireshark, and SIEM platforms</strong>, with experience in applying 
              NIST frameworks and security controls. Passionate about problem-solving and eager to 
              contribute to cybersecurity teams through incident response, threat modeling, and security 
              hardening.
            </p>

            <div className="tags-center">
              <span className="tech-tag">Cybersecurity</span>
              <span className="tech-tag">Programming</span>
              <span className="tech-tag">Problem-Solving</span>
              <span className="tech-tag">Software Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}