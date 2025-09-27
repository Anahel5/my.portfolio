export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>ContactTube</h3>
          <p>A full-stack contact management web application built for COP 4331 (Software Engineering). Features user authentication, CRUD operations for contacts, and search functionality. Developed using LAMP stack with REST API architecture and deployed on a remote server.</p>
          <div className="tech-tags">
            <span className="tech-tag">PHP</span>
            <span className="tech-tag">MySQL</span>
            <span className="tech-tag">JavaScript</span>
            <span className="tech-tag">HTML/CSS</span>
            <span className="tech-tag">REST API</span>
            <span className="tech-tag">SwaggerHub</span>
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