import React, { useEffect } from 'react';
import '../_shared/service-common.scss';
import './ITServicesNew.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faClock, faWrench, faCheck, faDesktop, faBroadcastTower, faSync, faSave, faEye, faPhone} from '@fortawesome/free-solid-svg-icons';
const ITHero = () => (
  <section className="it-hero">
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-badge-wrapper">
          <span className="hero-badge">MANAGED IT SERVICES</span>
        </div>
        
        <h1 className="hero-title">
          Focus on Growth, We Handle
          <span className="gradient-text"> Your Technology</span>
        </h1>

        <p className="hero-description">
          Comprehensive managed IT services designed to keep your business running smoothly. 
          From round-the-clock support to proactive infrastructure management, we've got you covered.
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

      <div className="hero-services">
        <div className="service-card">
          <div className="service-icon">
            <FontAwesomeIcon icon={faClock} />
          </div>
          <div className="service-content">
            <div className="service-label">Support</div>
            <div className="service-value">24/7 Available</div>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <FontAwesomeIcon icon={faWrench} />
          </div>
          <div className="service-content">
            <div className="service-label">Monitoring</div>
            <div className="service-value">Proactive Management</div>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <div className="service-content">
            <div className="service-label">Reliability</div>
            <div className="service-value">99.9% Uptime</div>
          </div>
        </div>
      </div>
    </div>

    <div className="hero-background-elements">
      <div className="bg-gear gear-1"></div>
      <div className="bg-gear gear-2"></div>
      <div className="bg-gear gear-3"></div>
    </div>
  </section>
);

const ITFeatures = () => {
  const features = [
    { icon: faDesktop, title: 'Help Desk Support', description: '24/7 technical support for all your IT needs with fast response times.' },
    { icon: faBroadcastTower, title: 'Infrastructure Management', description: 'Complete management of your IT infrastructure for optimal performance.' },
    { icon: faSync, title: 'System Maintenance', description: 'Regular updates, patches, and maintenance to keep systems running smoothly.' },
    { icon: faSave, title: 'Backup & Recovery', description: 'Automated backup solutions with rapid disaster recovery capabilities.' },
    { icon: faEye, title: 'Network Monitoring', description: 'Proactive monitoring to identify and resolve issues before they impact your business.' },
    { icon: faPhone, title: 'Remote Support', description: 'Quick resolution of IT issues with secure remote assistance.' }
  ];

  return (
    <section className="it-features">
      <div className="features-container">
        <div className="features-header">
          <span className="section-badge">IT SERVICES</span>
          <h2 className="section-title">Comprehensive IT Management</h2>
          <p className="section-description">
            End-to-end managed IT services designed to keep your business running 
            at peak performance with minimal downtime.
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, idx) => (
            <div className="feature-card" key={idx} data-index={idx}>
              <div className="card-header">
                <div className="card-icon-wrapper">
                  <FontAwesomeIcon icon={feature.icon} className="card-icon" />
                </div>
                <div className="card-number">0{idx + 1}</div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{feature.title}</h3>
                <p className="card-description">{feature.description}</p>
              </div>
              <div className="card-accent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ITCTA = () => (
  <section className="it-cta">
    <div className="cta-container">
      <div className="cta-main">
        <div className="cta-content">
          <span className="cta-badge">GET STARTED TODAY</span>
          <h2 className="cta-title">
            Let Us Manage Your
            <span className="gradient-text"> IT Infrastructure</span>
          </h2>
          <p className="cta-description">
            Experience worry-free IT management with our comprehensive services. 
            Focus on your business while we handle all your technology needs.
          </p>
          <div className="cta-actions">
            <button className="btn-primary">
              Start Free Trial
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="btn-secondary">
              Contact Expert
            </button>
          </div>
        </div>

        <div className="cta-stats-grid">
          <div className="stat-box">
            <div className="stat-number">400+</div>
            <div className="stat-label">Managed Systems</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">&lt;5min</div>
            <div className="stat-label">Response Time</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">99.9%</div>
            <div className="stat-label">System Uptime</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Expert Support</div>
          </div>
        </div>
      </div>
    </div>
    <div className="cta-decoration">
      <div className="decoration-gear gear-1"></div>
      <div className="decoration-gear gear-2"></div>
    </div>
  </section>
);

const ITServicesNew = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ITHero />
      <ITFeatures />
      <ITCTA />
    </>
  );
};

export default ITServicesNew;

