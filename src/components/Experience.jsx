import React from 'react';

export default function Experience({ id }) {
  const experiences = [
    {
      title: "Cybersecurity & IT Specialist",
      company: "Kramer America Inc.",
      location: "Apopka, FL",
      duration: "09/2025 - Present",
      type: "Part-time",
      responsibilities: [
        "Orchestrated company-wide migration from Google Workspace to Microsoft 365, managing 1TB+ of R&D data and 50+ user mailboxes.",
        "Configured Microsoft Entra ID (Azure AD) for centralized identity management and implemented multi-factor authentication (MFA).",
        "Deployed enterprise-grade EDR (Bitdefender) and configured security policies to harden endpoint posture.",
        "Engineered a multi-layer backup strategy leveraging M365 and Synology Active Backup for disaster recovery readiness.",
        "Configured UniFi UDM Pro firewalls, implementing network segmentation and strict security policies.",
        "Managed DNS configuration (SPF, DKIM, DMARC) across multiple providers to ensure mail deliverability and prevent spoofing.",
        "Implemented asset management lifecycle tracking (Snipe-IT) to optimize hardware utilization and inventory visibility.",
        "Developed standardized playbooks (SOPs) for onboarding/offboarding and system restoration, improving process efficiency."
      ],
      technologies: ["Microsoft 365", "Entra ID", "Bitdefender EDR", "UniFi UDM Pro", "Synology", "Snipe-IT", "DNS Security"]
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
              <h4>Key Accomplishments:</h4>
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