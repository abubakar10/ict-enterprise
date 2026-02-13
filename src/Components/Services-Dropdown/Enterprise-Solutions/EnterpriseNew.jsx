import React, { useEffect } from 'react';
import '../_shared/service-common.scss';
import './EnterpriseNew.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faChartBar, faSync, faMobileAlt, faLink, faUsers} from '@fortawesome/free-solid-svg-icons';

const EnterpriseHero = () => (
  <section className="enterprise-hero">
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-badge-wrapper">
          <span className="hero-badge">ENTERPRISE EXCELLENCE</span>
        </div>
        
        <h1 className="hero-title">
          Scale Your Business with
          <span className="gradient-text"> Enterprise Solutions</span>
        </h1>

        <p className="hero-description">
          Comprehensive enterprise applications and integrated systems designed to 
          streamline operations, enhance productivity, and drive sustainable growth.
        </p>

        <div className="hero-actions">
          <button className="btn-primary">
            Discover Solutions
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="btn-secondary">
            Schedule Demo
          </button>
        </div>
      </div>

      <div className="hero-capabilities">
        <div className="capability-card">
          <div className="capability-icon">
            <FontAwesomeIcon icon={faChartBar} />
          </div>
          <div className="capability-content">
            <div className="capability-label">Integration</div>
            <div className="capability-value">Seamless Systems</div>
          </div>
        </div>

        <div className="capability-card">
          <div className="capability-icon">
            <FontAwesomeIcon icon={faSync} />
          </div>
          <div className="capability-content">
            <div className="capability-label">Automation</div>
            <div className="capability-value">Smart Workflows</div>
          </div>
        </div>

        <div className="capability-card">
          <div className="capability-icon">
            <FontAwesomeIcon icon={faBuilding} />
          </div>
          <div className="capability-content">
            <div className="capability-label">Scale</div>
            <div className="capability-value">Enterprise Ready</div>
          </div>
        </div>
      </div>
    </div>

    <div className="hero-background-elements">
      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>
      <div className="bg-shape shape-3"></div>
    </div>
  </section>
);

const EnterpriseFeatures = () => {
  const features = [
    { icon: faBuilding, title: 'ERP Systems', description: 'Comprehensive enterprise resource planning solutions for streamlined operations.' },
    { icon: faUsers, title: 'CRM Solutions', description: 'Customer relationship management platforms to enhance customer engagement.' },
    { icon: faChartBar, title: 'Business Intelligence', description: 'Data analytics and reporting tools for informed decision-making.' },
    { icon: faSync, title: 'Workflow Automation', description: 'Automate business processes for increased efficiency and reduced errors.' },
    { icon: faMobileAlt, title: 'Mobile Solutions', description: 'Enterprise mobile applications for on-the-go business management.' },
    { icon: faLink, title: 'System Integration', description: 'Seamlessly integrate existing systems for unified business operations.' }
  ];

  return (
    <section className="enterprise-features">
      <div className="features-container">
        <div className="features-header">
          <span className="section-badge">ENTERPRISE APPLICATIONS</span>
          <h2 className="section-title">Complete Business Solutions</h2>
          <p className="section-description">
            Integrated enterprise applications designed to optimize operations, 
            enhance collaboration, and accelerate business growth.
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

const EnterpriseCTA = () => (
  <section className="enterprise-cta">
    <div className="cta-container">
      <div className="cta-main">
        <div className="cta-content">
          <span className="cta-badge">TRANSFORM YOUR BUSINESS</span>
          <h2 className="cta-title">
            Ready to Scale Your
            <span className="gradient-text"> Enterprise?</span>
          </h2>
          <p className="cta-description">
            Discover how our enterprise solutions can streamline your operations, 
            improve efficiency, and drive measurable business results.
          </p>
          <div className="cta-actions">
            <button className="btn-primary">
              Request Demo
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="btn-secondary">
              Contact Sales
            </button>
          </div>
        </div>

        <div className="cta-stats-grid">
          <div className="stat-box">
            <div className="stat-number">150+</div>
            <div className="stat-label">Enterprise Clients</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">99.5%</div>
            <div className="stat-label">System Uptime</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">50M+</div>
            <div className="stat-label">Transactions</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support Available</div>
          </div>
        </div>
      </div>
    </div>
    <div className="cta-decoration">
      <div className="decoration-element elem-1"></div>
      <div className="decoration-element elem-2"></div>
    </div>
  </section>
);

const EnterpriseNew = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <EnterpriseHero />
      <EnterpriseFeatures />
      <EnterpriseCTA />
    </>
  );
};

export default EnterpriseNew;

