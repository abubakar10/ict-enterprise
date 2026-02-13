import React from "react";
import "./AboutHero.scss";

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-badge">ABOUT ICT</span>
          <h1 className="hero-title">
            Empowering Businesses Through
            <span className="gradient-text"> Digital Innovation</span>
          </h1>
          <p className="hero-description">
            We are a leading technology partner committed to delivering innovative solutions 
            that empower organizations to thrive in the digital age. Our expertise spans across 
            cloud computing, cybersecurity, enterprise solutions, and strategic IT consulting.
          </p>
        </div>

        <div className="hero-stats-grid">
          <div className="stat-card">
            <div className="stat-number">25+</div>
            <div className="stat-label">Years of Excellence</div>
            <div className="stat-accent"></div>
          </div>
          <div className="stat-card">
            <div className="stat-number">1000+</div>
            <div className="stat-label">Successful Projects</div>
            <div className="stat-accent"></div>
          </div>
          <div className="stat-card">
            <div className="stat-number">300+</div>
            <div className="stat-label">Trusted Partners</div>
            <div className="stat-accent"></div>
          </div>
          <div className="stat-card">
            <div className="stat-number">75+</div>
            <div className="stat-label">Expert Professionals</div>
            <div className="stat-accent"></div>
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

export default AboutHero;

