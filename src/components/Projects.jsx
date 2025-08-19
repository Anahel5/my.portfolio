export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Password Strength Checker</h3>
          <p>Simple React app that scores password strength and suggests improvements.</p>
          <span className="tech-tag">React</span>
          <span className="tech-tag">JavaScript</span>
        </div>
        <div className="project-card">
          <h3>Log Parser</h3>
          <p>Node script that parses server logs and outputs a summary CSV.</p>
          <span className="tech-tag">Node.js</span>
        </div>
        <div className="project-card">
          <h3>Coursework: Algorithms</h3>
          <p>Implemented sorting, searching, and AVL trees in Java; wrote runtime analyses.</p>
          <span className="tech-tag">Java</span>
          <span className="tech-tag">Algorithms</span>
        </div>
      </div>
    </section>
  );
}