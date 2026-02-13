import React from 'react';
import './CyberCTA.scss';

const CyberCTA = () => {
  return (
    <section className="cyber-cta">
      <div className="cta-container">
        <div className="cta-main">
          <div className="cta-content">
            <span className="cta-badge">SECURE YOUR BUSINESS</span>
            <h2 className="cta-title">
              Don't Wait for a
              <span className="gradient-text"> Security Breach</span>
            </h2>
            <p className="cta-description">
              Proactive protection is the key to business continuity. Get started with 
              a comprehensive security assessment and fortify your defenses today.
            </p>
            <div className="cta-actions">
              <button className="btn-primary">
                Request Security Audit
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="btn-secondary">
                Speak with Expert
              </button>
            </div>
          </div>

          <div className="cta-stats-grid">
            <div className="stat-box">
              <div className="stat-number">0</div>
              <div className="stat-label">Security Breaches</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">24/7</div>
              <div className="stat-label">SOC Monitoring</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">300+</div>
              <div className="stat-label">Protected Clients</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Threat Detection</div>
            </div>
          </div>
        </div>
      </div>
      <div className="cta-decoration">
        <div className="decoration-shield shield-1"></div>
        <div className="decoration-shield shield-2"></div>
      </div>
    </section>
  );
};

export default CyberCTA;

