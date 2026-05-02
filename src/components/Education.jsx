import React from 'react';

export default function Education() {
  return (
    <section id="education" className="section">
      <h2>Education</h2>
      <div className="projects-grid">
        
        {/* Academic Honors - Redesigned for a cleaner look */}
        <div className="achievement-card border-t-4 border-blue-500">
          <h3 className="text-gray-900">UCF Academic Honors</h3>
          <div className="my-4">
            <span className="text-3xl font-bold text-gray-800">3.56</span>
            <span className="text-gray-500 ml-2">Cumulative GPA</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center text-sm text-gray-700">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              <span><strong>President's Honor Roll</strong> — Fall 2023</span>
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
              <span><strong>Dean's List</strong> — Fall 2024</span>
            </div>
          </div>
        </div>

        {/* UCF Milestones */}
        <div className="achievement-card">
          <h3>UCF Foundation Exam</h3>
          <p className="text-gray-600 mt-2">
            Successfully passed the Computer Science Foundation Exam (COT 3960) at UCF, 
            a major milestone demonstrating mastery of algorithms and discrete structures.
          </p>
        </div>

        {/* Competition Wins */}
        <div className="achievement-card">
          <div className="flex justify-between items-start">
            <h3>Horse Plinko Cyber Challenge</h3>
            <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">1st Place</span>
          </div>
          <p className="mt-2">Participated on team "Enumclaw Engineers" earning first place in the Season 1 challenge hosted by Hack@UCF.</p>
          <p className="achievement-desc text-sm text-gray-500 mt-2">
            Focused on practical skills including Linux/Windows administration, SIEM management, and firewall defense.
          </p>
          <a 
            href="https://www.linkedin.com/posts/collegiate-cyber-defense-club-at-ucf_congratulations-to-the-winners-of-horse-plinko-ugcPost-7118461881735880705-Dz_G"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-post-button mt-4 inline-flex items-center"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            View Results
          </a>
        </div>

        {/* Specialized Coursework */}
        <div className="achievement-card">
          <h3>Advanced Coursework</h3>
          <p className="text-sm text-gray-500 mb-3">B.S. in Computer Science (Expected 2027)</p>
          <ul className="coursework-list space-y-1">
            <li><span className="font-semibold text-gray-700">Secure Cloud Computing</span></li>
            <li><span className="font-semibold text-gray-700">Secure Software Development</span></li>
            <li><span className="font-semibold text-gray-700">Secure Operating Systems & Networks</span></li>
            <li><span className="font-semibold text-gray-700">Security in Computing</span></li>
            <li className="text-gray-600">Computer Science I & II (Data Structures)</li>
            <li className="text-gray-600">Linear & Matrix Algebra</li>
            <li className="text-gray-600">Calculus I, II, & III</li>
          </ul>
        </div>

        {/* Quick-view Certifications */}
        <div className="achievement-card">
          <h3>Certifications</h3>
          <div className="tech-tags mt-4">
            <span className="tech-tag border border-blue-400">CompTIA Security+</span>
            <span className="tech-tag border border-orange-500 bg-orange-50 text-orange-700">AWS Academy Graduate</span>
            <span className="tech-tag border border-blue-400">Google Cybersecurity Professional</span>
          </div>
        </div>

      </div>
    </section>
  );
}