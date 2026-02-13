import React from 'react';
import './CloudHero.scss';

const CloudHero = () => {
  return (
    <section className="cloud-hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge-wrapper">
            <span className="hero-badge">CLOUD EXCELLENCE</span>
          </div>
          
          <h1 className="hero-title">
            Elevate Your Business to the
            <span className="gradient-text"> Cloud</span>
          </h1>

          <p className="hero-description">
            Harness the power of Microsoft Azure and cutting-edge cloud technologies 
            to accelerate innovation, enhance security, and scale your operations seamlessly.
          </p>

          <div className="hero-actions">
            <button className="btn-primary">
              Get Started
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="btn-secondary">
              Learn More
            </button>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat-card">
            <div className="stat-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="stat-content">
              <div className="stat-label">Certified Partner</div>
              <div className="stat-value">Microsoft Azure</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="stat-content">
              <div className="stat-label">Support Available</div>
              <div className="stat-value">24/7 Monitoring</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="stat-content">
              <div className="stat-label">Performance</div>
              <div className="stat-value">99.9% Uptime</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-background-elements">
        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>
        <div className="bg-orb orb-3"></div>
      </div>
    </section>
  );
};

export default CloudHero;

