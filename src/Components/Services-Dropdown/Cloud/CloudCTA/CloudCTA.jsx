import React from 'react';
import './CloudCTA.scss';

const CloudCTA = () => {
  return (
    <section className="cloud-cta">
      <div className="cta-container">
        <div className="cta-main">
          <div className="cta-content">
            <span className="cta-badge">GET STARTED TODAY</span>
            <h2 className="cta-title">
              Ready to Scale Your Business with
              <span className="gradient-text"> Cloud Technology?</span>
            </h2>
            <p className="cta-description">
              Join hundreds of successful businesses that have transformed their operations 
              with our expert cloud solutions. Let's build your future together.
            </p>
            <div className="cta-actions">
              <button className="btn-primary">
                Start Free Consultation
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="btn-secondary">
                Explore Solutions
              </button>
            </div>
          </div>

          <div className="cta-stats-grid">
            <div className="stat-box">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime SLA</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Expert Support</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">500+</div>
              <div className="stat-label">Cloud Migrations</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">100+</div>
              <div className="stat-label">Enterprise Clients</div>
            </div>
          </div>
        </div>
      </div>
      <div className="cta-decoration">
        <div className="decoration-wave wave-1"></div>
        <div className="decoration-wave wave-2"></div>
      </div>
    </section>
  );
};

export default CloudCTA;

