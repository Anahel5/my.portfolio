export default function Certificates() {
  return (
    <section id="certificates" className="section">
      <h2>Certificates</h2>
      <div className="projects-grid">
        
        {/* NEW CERTIFICATE: CompTIA Security+ */}
        <div className="cert-card">
          <h3>CompTIA Security+</h3>
          <p>
            Earned the globally recognized Security+ certification (SY0-701). 
            Validates core knowledge required to assess the security posture of an enterprise environment, 
            recommend and implement appropriate security solutions, and monitor and secure hybrid environments.
          </p>
          <div className="cert-meta" style={{ marginBottom: '1rem', fontSize: '0.9rem', color: '#666' }}>
            <span>Issued: Jan 2026</span> • <span>Code: f8c1be44109a4840a89cdbba2e7aff82</span>
          </div>
          <a 
            href="http://verify.CompTIA.org" 
            target="_blank" 
            rel="noreferrer"
            className="cert-link"
          >
            Verify Credential
          </a>
        </div>

        {/* EXISTING CERTIFICATE: Google Cybersecurity */}
        <div className="cert-card">
          <h3>Google Cybersecurity Professional Certificate</h3>
          <p>
            Completed Google’s rigorous certificate program covering threat detection, 
            incident response, and security foundations.
          </p>
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