import React from 'react';

export default function Experience({ id }) {
  const experiences = [
    {
      title: "IT Support Specialist",
      company: "Smartliner USA (Kramer America Inc)",
      location: "Apopka, FL",
      duration: "9/2025 - Present",
      type: "Part-time",
      responsibilities: [
        "Provide comprehensive IT support for 22-25 employees across multiple departments",
        "Manage hardware inventory and asset tracking using Snipe-IT systems",
        "Handle employee onboarding/offboarding including Google Workspace and Microsoft 365 account setup",
        "Troubleshoot hardware, software, and network connectivity issues",
        "Maintain meeting room AV equipment and implement backup solutions",
        "Coordinate with vendors for internet, phone, and software support",
        "Perform regular maintenance on printers, PCs, and network infrastructure"
      ],
      technologies: ["Google Workspace", "Microsoft 365", "Snipe-IT", "Windows", "macOS", "Network Troubleshooting"]
    }
  ];

  return (
    <section id={id} className="section">
      <h2>Professional Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <div className="experience-title-section">
                <h3 className="experience-title">{exp.title}</h3>
                <div className="company-info">
                  <a href="https://www.smartliner-usa.com" target="_blank" rel="noopener noreferrer" className="company-name-link">
                    <span className="company-name">{exp.company}</span>
                  </a>
                  <span className="location">{exp.location}</span>
                </div>
              </div>
              <div className="experience-meta">
                <span className="duration">{exp.duration}</span>
                <span className="job-type">{exp.type}</span>
              </div>
            </div>
            
            <div className="responsibilities">
              <h4>Key Responsibilities:</h4>
              <ul className="responsibilities-list">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
            
            <div className="technologies-used">
              <h4>Technologies & Tools:</h4>
              <div className="tech-tags">
                {exp.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}