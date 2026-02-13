import React from "react";
import "./AboutStory.scss";
import aboutImage from "./../../../assets/images/about-us-s2.webp";

const AboutStory = () => {
  return (
    <section className="about-story">
      <div className="story-container">
        <div className="story-image">
          <div className="image-wrapper">
            <img src={aboutImage} alt="About ICT" />
            <div className="image-glow"></div>
          </div>
        </div>

        <div className="story-content">
          <span className="section-badge">OUR JOURNEY</span>
          <h2>Pioneering Digital Transformation Since 1999</h2>
          <p className="lead-text">
            From humble beginnings to becoming a trusted technology leader, ICT has consistently 
            evolved to meet the ever-changing demands of the digital landscape. Our journey is 
            marked by innovation, dedication, and an unwavering commitment to client success.
          </p>
          <div className="story-highlights">
            <div className="highlight-card">
              <div className="highlight-number">01</div>
              <div className="highlight-content">
                <h4>Industry Leaders</h4>
                <p>Recognized experts with advanced certifications and real-world expertise</p>
              </div>
            </div>
            <div className="highlight-card">
              <div className="highlight-number">02</div>
              <div className="highlight-content">
                <h4>Global Reach</h4>
                <p>Delivering transformative solutions to businesses worldwide</p>
              </div>
            </div>
            <div className="highlight-card">
              <div className="highlight-number">03</div>
              <div className="highlight-content">
                <h4>Innovation First</h4>
                <p>Continuously adopting latest technologies to solve complex challenges</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;

