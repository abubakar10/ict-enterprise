import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeSolutions.scss";
import cloud from "./../../../assets/logos/Cloud.png";
import cybersecurity from "./../../../assets/logos/Cybersecurity.png";
import consulting from "./../../../assets/logos/Consulting.png";
import enterpriseSol from "./../../../assets/logos/EnterpriseSol.png";
import itServices from "./../../../assets/logos/ITservices.png";
import networkSolutions from "./../../../assets/logos/NetworkSolutions.png";

const HomeSolutions = () => {
  const navigate = useNavigate();

  const solutions = [
    {
      logo: cloud,
      title: "Cloud",
      description: "Accelerate with Microsoft Cloud—Azure, M365, and seamless edge-to-cloud adoption for the modern enterprise.",
      path: "/services/cloud",
      color: "#4a9eff",
    },
    {
      logo: cybersecurity,
      title: "Cybersecurity",
      description: "Turn risk into resilience with proactive security, compliance, and a defense-ready posture.",
      path: "/services/cyber-security",
      color: "#6366f1",
    },
    {
      logo: consulting,
      title: "Consulting",
      description: "Navigate change with strategy that puts purpose, innovation, and sustainable growth at the center.",
      path: "/services/consulting",
      color: "#8b5cf6",
    },
    {
      logo: enterpriseSol,
      title: "Enterprise Solutions",
      description: "Connect people, data, and processes with intelligent applications and a holistic approach.",
      path: "/services/enterprise-solutions",
      color: "#3d8eef",
    },
    {
      logo: itServices,
      title: "IT Services",
      description: "Keep operations running smoothly with expert managed IT, support, and technology operations.",
      path: "/services/it-services",
      color: "#667eea",
    },
    {
      logo: networkSolutions,
      title: "Network Solutions",
      description: "Optimize performance and security with end-to-end network design, monitoring, and support.",
      path: "/services/network-solutions",
      color: "#0ea5e9",
    },
  ];

  return (
    <section className="home-solutions">
      <div className="solutions-container">
        <div className="solutions-header">
          <span className="section-badge">OUR EXPERTISE</span>
          <h2 className="section-title">Solutions That Scale With You</h2>
          <p className="section-description">
            From cloud and security to consulting and infrastructure, we deliver
            outcome-focused solutions backed by over a decade of experience and
            partnerships with leading technology providers.
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div
              className="solution-card"
              key={index}
              style={{ "--card-color": solution.color, "--i": index }}
              onClick={() => navigate(solution.path)}
            >
              <div className="card-glow" aria-hidden="true" />
              <div className="card-icon">
                <img src={solution.logo} alt={solution.title} />
              </div>
              <h3 className="card-title">{solution.title}</h3>
              <p className="card-description">{solution.description}</p>
              <button
                type="button"
                className="card-link"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(solution.path);
                }}
              >
                Explore {solution.title}
                <span className="link-arrow">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSolutions;
