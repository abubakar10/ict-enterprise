import React from "react";
import "./VisionHero.scss";

const VisionHero = () => {
  return (
    <section className="vision-hero">
      <div className="hero-container">
        <div className="hero-left">
          <span className="hero-badge">OUR FOUNDATION</span>
          <h1 className="hero-title">
            Building Tomorrow's
            <span className="gradient-text"> Technology Today</span>
          </h1>
          <p className="hero-description">
            We are driven by a clear vision and unwavering mission to transform 
            businesses through innovative technology solutions that create lasting impact.
          </p>
        </div>
        <div className="hero-right">
          <div className="stat-box">
            <div className="stat-number">25+</div>
            <div className="stat-label">Years of Excellence</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">1000+</div>
            <div className="stat-label">Projects Delivered</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">300+</div>
            <div className="stat-label">Trusted Partners</div>
          </div>
        </div>
      </div>
      <div className="hero-decoration">
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
        <div className="decoration-circle circle-3"></div>
      </div>
    </section>
  );
};

export default VisionHero;

