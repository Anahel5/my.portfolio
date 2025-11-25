export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        
        {/* NEW PROJECT: KNIGHTHOOT */}
        <div className="project-card">
          <h3>KnightHoot</h3>
          <p>A real-time, interactive quiz platform for classrooms developed for COP 4331C. Teachers host live games via a web dashboard while students join on mobile using a unique PIN. Worked in a team of 7 to design and build this full MERN stack platform.</p>
          <div className="tech-tags">
            <span className="tech-tag">MERN Stack</span>
            <span className="tech-tag">MongoDB</span>
            <span className="tech-tag">Express</span>
            <span className="tech-tag">React</span>
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">Mobile Development</span>
            <span className="tech-tag">Socket.io</span>
            <span className="tech-tag">Teamwork</span>
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="https://www.linkedin.com/posts/dmmosh_knighthoot-knighthoot-is-a-real-time-interactive-activity-7394782454399647745-K_mf?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAECytyAB9RpmjldXsP-uRYq31tMeiEE8huE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-button"
              style={{ background: '#0077B5' }} /* LinkedIn Blue for the Demo */
            >
              <span>View Demo</span>
              {/* LinkedIn Icon */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="https://github.com/JamesDFogarty/COP4331-Large-Project" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-button"
            >
              <span>View on GitHub</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* EXISTING PROJECT: CONTACTTUBE */}
        <div className="project-card">
          <h3>ContactTube</h3>
          <p>A full-stack contact management web application built on a team of four for COP 4331 (Software Engineering). Features user authentication, CRUD operations for contacts, and search functionality. Developed using LAMP stack with REST API architecture and deployed on a remote server.</p>
          <div className="tech-tags">
            <span className="tech-tag">PHP</span>
            <span className="tech-tag">MySQL</span>
            <span className="tech-tag">JavaScript</span>
            <span className="tech-tag">HTML/CSS</span>
            <span className="tech-tag">REST API</span>
            <span className="tech-tag">SwaggerHub</span>
            <span className="tech-tag">Teamwork</span>
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="https://contacttube.me" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-button"
              style={{ background: '#667eea' }}
            >
              <span>Live Demo</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
              </svg>
            </a>
            <a 
              href="https://github.com/dmmosh/contacttube" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-button"
            >
              <span>View on GitHub</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </a>
          </div>
        </div>
        
        {/* EXISTING PROJECT: MySPIM */}
        <div className="project-card">
          <h3>MySPIM Processor Simulator</h3>
          <p>A mini processor simulator developed using the C programming language on a Unix platform. This project demonstrates understanding of computer architecture and low-level programming concepts.</p>
          <div className="tech-tags">
            <span className="tech-tag">C</span>
            <span className="tech-tag">Unix</span>
            <span className="tech-tag">Computer Architecture</span>
          </div>
          <a 
            href="https://github.com/Anahel5/Anahel-s-MySPIM" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-button"
          >
            <span>View on GitHub</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}