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
        "Deployed enterprise-grade EDR (Bitdefender) as a key security initiative to harden endpoint protection",
        "Implemented multi-layer backup strategy using Google Workspace, M365, Synology Active Backup, and Cloud Sync for disaster recovery readiness",
        "Configured network firewalls and security policies on UniFi UDM Pro for improved network segmentation and traffic control",
        "Performed vendor management and contract negotiation resulting in operational cost savings",
        "Centralized account management to improve access control, auditing, and compliance visibility",
        "Built comprehensive playbooks for employee onboarding/offboarding and system restoration",
        "Implementing hardware lifecycle and asset management workflows using Snipe-IT",
        "Provide daily helpdesk support for 25+ employees, managing tickets for hardware, software, and network issues"
      ],
      technologies: ["Bitdefender EDR", "UniFi UDM Pro", "Synology", "Google Workspace", "Microsoft 365", "Snipe-IT", "Disaster Recovery"]
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