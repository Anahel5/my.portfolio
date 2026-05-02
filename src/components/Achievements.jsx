import React from 'react';

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <h2>Achievements & Education</h2>
      <div className="projects-grid">
        {/* UCF Milestones */}
        <div className="achievement-card">
          <div className="achievement-badge">Passed</div>
          <h3>UCF Foundation Exam</h3>
          <p>Successfully passed the Computer Science Foundation Exam (COT 3960) at UCF, a major milestone demonstrating mastery of algorithms and discrete structures.</p>
        </div>

        {/* Competition Wins */}
        <div className="achievement-card">
          <div className="achievement-badge">1st Place</div>
          <h3>Horse Plinko Cyber Challenge</h3>
          <p>Participated on team "Enumclaw Engineers" earning 1st place in the Horse Plinko Cyber Challenge Season 1 hosted by Hack@UCF.</p>
          <p className="achievement-desc">
            Focused on practical skills including Linux/Windows administration, SIEM management, and firewall defense.
          </p>
          <a 
            href="https://www.linkedin.com/posts/collegiate-cyber-defense-club-at-ucf_congratulations-to-the-winners-of-horse-plinko-ugcPost-7118461881735880705-Dz_G"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-post-button"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            View Results
          </a>
        </div>

        {/* Coursework */}
        <div className="achievement-card">
          <h3>Advanced Coursework</h3>
          <p>B.S. in Computer Science (Expected 2027) with focus on security:</p>
          <ul className="coursework-list">
            <li><strong>Secure Operating Systems & Networks</strong></li>
            <li><strong>Security in Computing</strong></li>
            <li><strong>Systems Software</strong></li>
            <li>Computer Science I & II (Data Structures)</li>
            <li>Computer Logic & Organization</li>
            <li>Calculus I, II, & III</li>
          </ul>
        </div>

        {/* Quick-view Certifications */}
        <div className="achievement-card">
          <h3>Certifications</h3>
          <div className="tech-tags mt-2">
            <span className="tech-tag border border-blue-400">CompTIA Security+</span>
            <span className="tech-tag border border-orange-500 bg-orange-50">AWS Academy Graduate</span>
            <span className="tech-tag border border-blue-400">Google Cybersecurity Professional</span>
          </div>
        </div>
      </div>
    </section>
  );
}