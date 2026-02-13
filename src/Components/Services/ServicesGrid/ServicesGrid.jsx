import React from "react";
import { useNavigate } from "react-router-dom";
import "./ServicesGrid.scss";
import cloud from "./../../../assets/logos/SCloud.png";
import cybersecurity from "./../../../assets/logos/SCybersecurity.png";
import consulting from "./../../../assets/logos/SConsulting.png";
import enterpriseSol from "./../../../assets/logos/SEnterpriseSol.png";
import itServices from "./../../../assets/logos/SITservices.png";
import networkSolutions from "./../../../assets/logos/SNetworkSolutions.png";

const ServicesGrid = () => {
  const navigate = useNavigate();

  const services = [
    {
      logo: cloud,
      title: "Cloud Solutions",
      description: "Harness the power of cloud computing to scale your operations, reduce costs, and enhance agility with our comprehensive cloud services.",
      path: "/services/cloud",
      features: ["Cloud Migration", "Infrastructure Setup", "Scalability Solutions"]
    },
    {
      logo: cybersecurity,
      title: "Cybersecurity",
      description: "Protect your digital assets with advanced security measures designed to safeguard against evolving cyber threats.",
      path: "/services/cyber-security",
      features: ["Risk Assessment", "Security Monitoring", "Compliance Management"]
    },
    {
      logo: consulting,
      title: "IT Consulting",
      description: "Strategic guidance and expert insights to help you navigate complex technology decisions and achieve your business objectives.",
      path: "/services/consulting",
      features: ["Technology Roadmap", "Digital Strategy", "Expert Advisory"]
    },
    {
      logo: enterpriseSol,
      title: "Enterprise Solutions",
      description: "Comprehensive enterprise-grade applications and systems that streamline operations and drive organizational efficiency.",
      path: "/services/enterprise-solutions",
      features: ["Custom Applications", "System Integration", "Data Analytics"]
    },
    {
      logo: itServices,
      title: "IT Services",
      description: "Reliable managed IT services ensuring your technology infrastructure runs smoothly and efficiently at all times.",
      path: "/services/it-services",
      features: ["Proactive Monitoring", "System Maintenance", "Technical Support"]
    },
    {
      logo: networkSolutions,
      title: "Network Solutions",
      description: "Build robust, secure, and high-performance network infrastructures that support your business growth and connectivity needs.",
      path: "/services/network-solutions",
      features: ["Network Architecture", "Security Protocols", "Performance Optimization"]
    },
  ];

  return (
    <section className="services-grid-section">
      <div className="services-grid-container">
        <div className="services-grid-header">
          <span className="section-badge">OUR SERVICES</span>
          <h2 className="section-title">Comprehensive Technology Solutions</h2>
          <p className="section-description">
            Explore our range of specialized services designed to address your 
            technology challenges and accelerate business growth
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="card-inner">
                <div className="card-front">
                  <div className="card-icon">
                    <img src={service.logo} alt={service.title} />
                  </div>
                  <h3 className="card-title">{service.title}</h3>
                  <p className="card-description">{service.description}</p>
                  <div className="card-hover-indicator">
                    <span>Learn more</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="card-back">
                  <h4 className="back-title">What's Included</h4>
                  <ul className="features-list">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="explore-btn"
                    onClick={() => navigate(service.path)}
                  >
                    View Details
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;

