import React from 'react';
import './CyberHero.scss';

const CyberHero = () => {
  return (
    <section className="cyber-hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge-wrapper">
            <span className="hero-badge">SECURITY FIRST</span>
          </div>
          
          <h1 className="hero-title">
            Fortify Your Digital
            <span className="gradient-text"> Infrastructure</span>
          </h1>

          <p className="hero-description">
            Advanced cybersecurity solutions designed to protect your business from 
            evolving threats. Stay ahead with proactive defense and expert monitoring.
          </p>

          <div className="hero-actions">
            <button className="btn-primary">
              Secure Your Business
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="btn-secondary">
              Free Assessment
            </button>
          </div>
        </div>

        <div className="hero-security-features">
          <div className="security-card">
            <div className="security-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="security-content">
              <div className="security-label">Protection Level</div>
              <div className="security-value">Enterprise Grade</div>
            </div>
          </div>

          <div className="security-card">
            <div className="security-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="security-content">
              <div className="security-label">Monitoring</div>
              <div className="security-value">24/7 SOC</div>
            </div>
          </div>

          <div className="security-card">
            <div className="security-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="security-content">
              <div className="security-label">Compliance</div>
              <div className="security-value">ISO 27001</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-background-elements">
        <div className="bg-shield shield-1"></div>
        <div className="bg-shield shield-2"></div>
        <div className="bg-shield shield-3"></div>
      </div>
    </section>
  );
};

export default CyberHero;

