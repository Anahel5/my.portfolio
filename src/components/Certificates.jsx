import React from 'react';

export default function Certificates() {
  return (
    <section id="certificates" className="section">
      <h2>Certificates</h2>
      <div className="projects-grid">
        
        {/* CompTIA Security+ */}
        <div className="cert-card">
          <h3>CompTIA Security+</h3>
          <p>
            Earned the globally recognized Security+ certification (SY0-701). 
            Validates core knowledge required to assess the security posture of an enterprise environment, 
            recommend and implement appropriate security solutions, and monitor and secure hybrid environments.
          </p>
          <div className="cert-meta" style={{ marginBottom: '1rem', fontSize: '0.9rem', color: '#666' }}>
            <div style={{ marginBottom: '4px' }}><strong>Issued:</strong> Jan 2026</div>
            <div><strong>Code:</strong> f8c1be44109a4840a89cdbba2e7aff82</div>
          </div>
          <a 
            href="http://verify.CompTIA.org" 
            target="_blank" 
            rel="noreferrer"
            className="cert-link"
          >
            View Credential
          </a>
        </div>

        {/* NEW AWS Academy Graduate Badge */}
        <div className="cert-card">
          <h3>AWS Academy Graduate - Cloud Security Foundations</h3>
          <p>
            Demonstrates knowledge of AWS cloud security concepts, including identity and access management, 
            data encryption, and network security. Validates understanding of the AWS Shared Responsibility Model 
            and various compliance frameworks.
          </p>
          <div className="cert-meta" style={{ marginBottom: '1rem', fontSize: '0.9rem', color: '#666' }}>
            <strong>Issued:</strong> May 2026
          </div>
          <a 
            href="https://www.credly.com/badges/bd981733-3a99-4021-92b6-299c363c4402"
            target="_blank" 
            rel="noreferrer"
            className="cert-link"
          >
            View Credential
          </a>
        </div>

        {/* Google Cybersecurity */}
        <div className="cert-card">
          <h3>Google Cybersecurity Professional Certificate</h3>
          <p>
            Completed Google’s rigorous certificate program covering threat detection, 
            incident response, and security foundations.
          </p>
          <div className="cert-meta" style={{ marginBottom: '1rem', fontSize: '0.9rem', color: '#666' }}>
            <strong>Issued:</strong> Aug 2025
          </div>
          <a
            href="https://www.coursera.org/account/accomplishments/specialization/certificate/IISQSKL56UTB"
            target="_blank" 
            rel="noreferrer"
            className="cert-link"
          >
            View Credential
          </a>
        </div>
      </div>
    </section>
  );
}