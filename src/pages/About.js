import React from 'react';
import './About.css';

function About() {
  return (
    <div className="body-container"> 
    <div className="about-container">
      <div className="about-header">
        <h1>About Our Job Portal</h1> 
        <p1>CONNECTING TALENT WITH OPPORTUNITY</p1>
      </div>

      <div className="about-content">
        <section className="mission">
          <h2>OUR MISSION</h2>
          <p2>
           Finding Your Next Big Move
          </p2>
        </section>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>1000+</h3>
            <p>ACTIVE JOBS</p>
          </div>
          <div className="stat-card">
            <h3>500+</h3>
            <p>COMPANIES</p>
          </div>
          <div className="stat-card">
            <h3>24/7</h3>
            <p>SUPPORT</p>
          </div>
        </div>

        <section className="features">
          <h2>FEATURES</h2>
          <ul>
            <li><strong>Verified Jobs:</strong> <p>  Our platform exclusively features vetted job listings from credible organizations to guarantee a secure hiring process.</p></li>
            <li><strong>Free for Candidates:</strong>  <p>  Our platform is 100% free for job seekers, with no hidden charges or subscription fees.</p> </li>
            <li><strong>Direct Contact:</strong> <p>Connect directly with hiring managers and HR teams without any middlemen or third-party interference. </p></li>
          </ul>
        </section>
      </div>
    </div>
    </div>
  );
}

export default About;