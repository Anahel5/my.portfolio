export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <h2>Achievements</h2>
      <div className="projects-grid">
        <div className="achievement-card">
          <h3>UCF Foundation Exam</h3>
          <p>Successfully passed the Computer Science Foundation Exam at UCF.</p>
        </div>
        <div className="achievement-card">
          <h3>1st Place - Horse Plinko Cyber Challenge</h3>
          <p>Participated on team "Enumclaw Engineers" earning 1st place in the Horse Plinko Cyber Challenge Season 1 competition hosted by Hack@UCF.</p>
          <p className="achievement-desc">
            Horse Plinko is a beginner-friendly cyber defense competition focused on practical cybersecurity skills 
            including Linux/Windows system administration, SIEM and firewall management, and industry best practices.
          </p>
          <a 
            href="https://www.linkedin.com/posts/collegiate-cyber-defense-club-at-ucf_congratulations-to-the-winners-of-horse-plinko-ugcPost-7118461881735880705-Dz_G?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAECytyAB9RpmjldXsP-uRYq31tMeiEE8huE"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-post-button"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            View LinkedIn Post
          </a>
          <div className="tech-tags">
            <span className="tech-tag">Cybersecurity</span>
            <span className="tech-tag">Team Competition</span>
            <span className="tech-tag">Defense</span>
            <span className="tech-tag">Linux</span>
            <span className="tech-tag">Firewall Management</span>
            <span className="tech-tag">SIEM Tools</span>
          </div>
        </div>
        <div className="achievement-card">
          <h3>Relevant Coursework</h3>
          <p>Completed advanced coursework including:</p>
          <ul className="coursework-list">
            <li>Computer Science I & II</li>
            <li>Object-Oriented Programming</li>
            <li>Security in Computing</li>
            <li>Discrete Structures</li>
            <li>Systems Software</li>
            <li>Computer Logic & Organization</li>
            <li>Calculus I, II, & III</li>
            <li>Physics with Calculus</li>
            <li>Statistical Methods</li>
          </ul>
        </div>
        <div className="achievement-card">
          <h3>Academic Performance</h3>
          <p>Maintained a <strong>3.3 GPA</strong> while completing rigorous Computer Science curriculum at UCF.</p>
        </div>
      </div>
    </section>
  );
}