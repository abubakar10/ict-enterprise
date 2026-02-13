import React from "react";
import "./AboutTeam.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faPalette, faLock, faChartBar } from "@fortawesome/free-solid-svg-icons";

const AboutTeam = () => {
  const teamStats = [
    {
      number: "75+",
      label: "Specialists",
      description: "Top-tier talent across technology domains"
    },
    {
      number: "25+",
      label: "Certifications",
      description: "World-class professional credentials"
    },
    {
      number: "15+",
      label: "Years Average",
      description: "Deep industry expertise per team member"
    }
  ];

  const departments = [
    {
      icon: faLaptopCode,
      title: "Engineering Team",
      count: "30+ Developers",
      skills: ["Full Stack", "Mobile Apps", "Cloud Native", "DevOps"]
    },
    {
      icon: faPalette,
      title: "Creative Team",
      count: "12+ Designers",
      skills: ["UI/UX Design", "Visual Design", "Brand Identity", "Animation"]
    },
    {
      icon: faLock,
      title: "Security Team",
      count: "10+ Analysts",
      skills: ["Penetration Testing", "Risk Assessment", "Security Audit", "SOC Operations"]
    },
    {
      icon: faChartBar,
      title: "Strategy Team",
      count: "15+ Advisors",
      skills: ["Digital Strategy", "Transformation", "Project Management", "Business Analysis"]
    }
  ];

  return (
    <section className="about-team">
      <div className="team-container">
        <div className="section-header">
          <span className="section-badge">OUR TEAM</span>
          <h2>The Talented Minds Driving Innovation</h2>
          <p>Our diverse team brings together exceptional talent, creativity, and expertise to deliver outstanding results</p>
        </div>

        <div className="team-stats-grid">
          {teamStats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-description">{stat.description}</div>
              <div className="stat-accent"></div>
            </div>
          ))}
        </div>

        <div className="departments-grid">
          {departments.map((dept, index) => (
            <div key={index} className="dept-card">
              <div className="card-top">
                <div className="dept-icon-wrapper">
                  <FontAwesomeIcon icon={dept.icon} className="dept-icon" />
                </div>
                <div className="dept-number">0{index + 1}</div>
              </div>
              <div className="card-content">
                <h3>{dept.title}</h3>
                <p className="dept-count">{dept.count}</p>
                <div className="skills-list">
                  {dept.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="card-accent"></div>
            </div>
          ))}
        </div>

        <div className="join-cta">
          <div className="cta-content">
            <h3>Ready to Make an Impact?</h3>
            <p>Join a dynamic team where innovation meets opportunity. Explore exciting career paths with us</p>
            <a href="/careers" className="cta-button">
              Explore Career Opportunities
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;

