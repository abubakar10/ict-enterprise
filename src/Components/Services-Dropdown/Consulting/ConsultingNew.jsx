import React, { useEffect } from 'react';
import '../_shared/service-common.scss';
import './ConsultingNew.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faChartBar, faBullseye, faLightbulb, faSearch, faTools, faUsers } from '@fortawesome/free-solid-svg-icons';


const ConsultingHero = () => (
  <section className="consulting-hero">
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-badge-wrapper">
          <span className="hero-badge">STRATEGIC CONSULTING</span>
        </div>
        
        <h1 className="hero-title">
          Unlock Your Business
          <span className="gradient-text"> Potential</span>
        </h1>

        <p className="hero-description">
          Expert IT consulting services to guide your digital transformation journey. 
          Align technology with business strategy for sustainable growth and innovation.
        </p>

        <div className="hero-actions">
          <button className="btn-primary">
            Get Expert Advice
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="btn-secondary">
            Explore Services
          </button>
        </div>
      </div>

      <div className="hero-expertise">
        <div className="expertise-card">
          <div className="expertise-icon">
            <FontAwesomeIcon icon={faChartBar} />
          </div>
          <div className="expertise-content">
            <div className="expertise-label">Expertise</div>
            <div className="expertise-value">Strategic Planning</div>
          </div>
        </div>

        <div className="expertise-card">
          <div className="expertise-icon">
            <FontAwesomeIcon icon={faBullseye} />
          </div>
          <div className="expertise-content">
            <div className="expertise-label">Focus</div>
            <div className="expertise-value">Business Alignment</div>
          </div>
        </div>

        <div className="expertise-card">
          <div className="expertise-icon">
            <FontAwesomeIcon icon={faLightbulb} />
          </div>
          <div className="expertise-content">
            <div className="expertise-label">Approach</div>
            <div className="expertise-value">Innovation Driven</div>
          </div>
        </div>
      </div>
    </div>

    <div className="hero-background-elements">
      <div className="bg-element element-1"></div>
      <div className="bg-element element-2"></div>
      <div className="bg-element element-3"></div>
    </div>
  </section>
);

const ConsultingFeatures = () => {
  const features = [
    { icon: faBullseye, title: 'IT Strategy & Planning', description: 'Develop comprehensive IT strategies aligned with your business objectives.' },
    { icon: faLightbulb, title: 'Digital Transformation', description: 'Guide your organization through successful digital transformation initiatives.' },
    { icon: faSearch, title: 'Technology Assessment', description: 'Evaluate your current technology landscape and identify improvement opportunities.' },
    { icon: faTools, title: 'Solution Architecture', description: 'Design scalable and efficient technology solutions for your business needs.' },
    { icon: faChartBar, title: 'Process Optimization', description: 'Streamline business processes through technology integration and automation.' },
    { icon: faUsers, title: 'Change Management', description: 'Ensure smooth technology adoption with comprehensive change management support.' }
  ];

  return (
    <section className="consulting-features">
      <div className="features-container">
        <div className="features-header">
          <span className="section-badge">CONSULTING SERVICES</span>
          <h2 className="section-title">Expert Guidance for Your Success</h2>
          <p className="section-description">
            Comprehensive consulting services designed to help you make strategic 
            technology decisions and achieve your business objectives.
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

const ConsultingCTA = () => (
  <section className="consulting-cta">
    <div className="cta-container">
      <div className="cta-main">
        <div className="cta-content">
          <span className="cta-badge">START YOUR JOURNEY</span>
          <h2 className="cta-title">
            Ready to Transform Your
            <span className="gradient-text"> IT Strategy?</span>
          </h2>
          <p className="cta-description">
            Partner with our expert consultants to navigate your digital transformation 
            and unlock new opportunities for growth and innovation.
          </p>
          <div className="cta-actions">
            <button className="btn-primary">
              Book Consultation
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
            <div className="stat-number">200+</div>
            <div className="stat-label">Projects Delivered</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">15+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">98%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">50+</div>
            <div className="stat-label">Expert Consultants</div>
          </div>
        </div>
      </div>
    </div>
    <div className="cta-decoration">
      <div className="decoration-circle circle-1"></div>
      <div className="decoration-circle circle-2"></div>
    </div>
  </section>
);

const ConsultingNew = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ConsultingHero />
      <ConsultingFeatures />
      <ConsultingCTA />
    </>
  );
};

export default ConsultingNew;

