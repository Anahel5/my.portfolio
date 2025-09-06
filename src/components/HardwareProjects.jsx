export default function HardwareProjects() {
  const handlePC1ImageError = (e) => {
    e.target.style.display = 'none';
    e.target.parentElement.innerHTML = `
      <div class="hardware-placeholder">
        <span>🎮</span>
      </div>
    `;
  };

  const handlePC2ImageError = (e) => {
    e.target.style.display = 'none';
    e.target.parentElement.innerHTML = `
      <div class="hardware-placeholder">
        <span>💻</span>
      </div>
    `;
  };

  return (
    <section id="hardware-projects" className="section">
      <h2>Hardware Projects</h2>
      <div className="projects-grid">
        
        <div className="project-card">
          <div className="hardware-image-container">
            <img 
              src="./images/pc1.jpg" 
              alt="Budget Gaming PC" 
              className="hardware-image"
              onError={handlePC1ImageError}
            />
            <div className="hardware-placeholder" style={{display: 'none'}}>
              <span>🎮</span>
            </div>
          </div>
          <h3>Budget Gaming PC</h3>
          <div className="build-date">Built: 2019</div>
          <p>My first custom gaming build focused on solid 1080p performance at an affordable price point. Has served me well for years of gaming recently sold.</p>
          
          <div className="specs-section">
            <h4>Key Specifications:</h4>
            <ul className="specs-list">
              <li><strong>CPU:</strong> Intel Core i5-8400</li>
              <li><strong>GPU:</strong> NVIDIA GeForce GTX 1050 Ti</li>
              <li><strong>RAM:</strong> 16GB DDR4</li>
              <li><strong>Performance:</strong> 1080p Gaming</li>
            </ul>
          </div>

          <div className="tech-tags">
            <span className="tech-tag">Budget Build</span>
            <span className="tech-tag">Intel</span>
            <span className="tech-tag">NVIDIA</span>
            <span className="tech-tag">1080p Gaming</span>
          </div>
        </div>

        <div className="project-card">
          <div className="hardware-image-container">
            <img 
              src="./images/newpc.jpg" 
              alt="High-End Gaming PC" 
              className="hardware-image"
              onError={handlePC2ImageError}
            />
            <div className="hardware-placeholder" style={{display: 'none'}}>
              <span>💻</span>
            </div>
          </div>
          <h3>High-End Gaming PC</h3>
          <div className="build-date">Built: 2025</div>
          <p>Latest high-performance gaming build designed for 4K gaming and high speed performance. Features modern components and clean cable management with stylish lighting.</p>
          
          <div className="specs-section">
            <h4>Key Specifications:</h4>
            <ul className="specs-list">
              <li><strong>CPU:</strong> AMD Ryzen 7 7700</li>
              <li><strong>GPU:</strong> AMD Radeon RX 7800 XT</li>
              <li><strong>RAM:</strong> 32GB DDR5</li>
              <li><strong>Performance:</strong> 4K/1440p Gaming</li>
              <li><strong>Lighting:</strong> Custom RGB Setup</li>
            </ul>
          </div>

          <div className="tech-tags">
            <span className="tech-tag">High-End</span>
            <span className="tech-tag">AMD</span>
            <span className="tech-tag">Radeon</span>
            <span className="tech-tag">4K Gaming</span>
            <span className="tech-tag">Modern</span>
            <span className="tech-tag">RGB</span>
          </div>
        </div>

      </div>
    </section>
  );
}