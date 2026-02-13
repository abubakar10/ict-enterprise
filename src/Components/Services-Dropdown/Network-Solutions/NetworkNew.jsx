import React, { useEffect } from 'react';
import '../_shared/service-common.scss';
import './NetworkNew.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faLock, faBolt, faChartLine, faSearch, faTools, faProjectDiagram, faShieldAlt, faWifi } from '@fortawesome/free-solid-svg-icons';

const NetworkHero = () => (
  <section className="network-hero">
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-badge-wrapper">
          <span className="hero-badge">NETWORK INFRASTRUCTURE</span>
        </div>
        
        <h1 className="hero-title">
          Build Secure and High-Performance
          <span className="gradient-text"> Network Solutions</span>
        </h1>

        <p className="hero-description">
          Design, implement, and manage robust network infrastructure that ensures 
          seamless connectivity, optimal performance, and enterprise-grade security.
        </p>

        <div className="hero-actions">
          <button className="btn-primary">
            Get Free Assessment
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="btn-secondary">
            Explore Solutions
          </button>
        </div>
      </div>

      <div className="hero-attributes">
        <div className="attribute-card">
          <div className="attribute-icon">
            <FontAwesomeIcon icon={faLock} />
          </div>
          <div className="attribute-content">
            <div className="attribute-label">Security</div>
            <div className="attribute-value">Enterprise-Grade</div>
          </div>
        </div>

        <div className="attribute-card">
          <div className="attribute-icon">
            <FontAwesomeIcon icon={faBolt} />
          </div>
          <div className="attribute-content">
            <div className="attribute-label">Performance</div>
            <div className="attribute-value">High-Speed</div>
          </div>
        </div>

        <div className="attribute-card">
          <div className="attribute-icon">
            <FontAwesomeIcon icon={faChartLine} />
          </div>
          <div className="attribute-content">
            <div className="attribute-label">Monitoring</div>
            <div className="attribute-value">Real-Time</div>
          </div>
        </div>
      </div>
    </div>

    <div className="hero-background-elements">
      <div className="bg-node node-1"></div>
      <div className="bg-node node-2"></div>
      <div className="bg-node node-3"></div>
    </div>
  </section>
);

const NetworkFeatures = () => {
  const features = [
    { icon: faProjectDiagram, title: 'Network Design', description: 'Custom network architecture tailored to your business requirements.' },
    { icon: faShieldAlt, title: 'Security Implementation', description: 'Advanced firewalls, VPNs, and security protocols to protect your network.' },
    { icon: faWifi, title: 'Wireless Solutions', description: 'Enterprise-grade WiFi solutions for seamless connectivity.' },
    { icon: faChartLine, title: 'Performance Optimization', description: 'Network optimization for maximum speed and reliability.' },
    { icon: faSearch, title: 'Network Monitoring', description: 'Proactive monitoring and management for peak performance.' },
    { icon: faTools, title: 'Maintenance & Support', description: '24/7 network support and maintenance services.' }
  ];

  return (
    <section className="network-features">
      <div className="features-container">
        <div className="features-header">
          <span className="section-badge">NETWORK SERVICES</span>
          <h2 className="section-title">Complete Network Infrastructure</h2>
          <p className="section-description">
            From design to deployment and ongoing management, we handle all aspects 
            of your network infrastructure with expertise and precision.
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

const NetworkCTA = () => (
  <section className="network-cta">
    <div className="cta-container">
      <div className="cta-main">
        <div className="cta-content">
          <span className="cta-badge">UPGRADE YOUR NETWORK</span>
          <h2 className="cta-title">
            Transform Your
            <span className="gradient-text"> Network Infrastructure</span>
          </h2>
          <p className="cta-description">
            Get a free network assessment and discover how we can improve your 
            connectivity, security, and performance with our expert solutions.
          </p>
          <div className="cta-actions">
            <button className="btn-primary">
              Free Assessment
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="btn-secondary">
              Contact Team
            </button>
          </div>
        </div>

        <div className="cta-stats-grid">
          <div className="stat-box">
            <div className="stat-number">250+</div>
            <div className="stat-label">Networks Deployed</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">99.99%</div>
            <div className="stat-label">Network Uptime</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">10Gbps+</div>
            <div className="stat-label">Max Speeds</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support Available</div>
          </div>
        </div>
      </div>
    </div>
    <div className="cta-decoration">
      <div className="decoration-node node-1"></div>
      <div className="decoration-node node-2"></div>
    </div>
  </section>
);

const NetworkNew = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NetworkHero />
      <NetworkFeatures />
      <NetworkCTA />
    </>
  );
};

export default NetworkNew;

