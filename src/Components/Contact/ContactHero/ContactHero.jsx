import React from "react";
import "./ContactHero.scss";

const ContactHero = () => {
  return (
    <section className="contact-hero">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-badge">GET IN TOUCH</span>
          <h1 className="hero-title">
            Let's Start a
            <span className="gradient-text"> Conversation</span>
          </h1>
          <p className="hero-description">
            Have a project in mind? Want to learn more about our services? 
            We're here to help. Reach out and let's build something amazing together.
          </p>
        </div>

        <div className="hero-quick-contact">
          <div className="quick-item">
            <div className="quick-icon">📧</div>
            <div className="quick-content">
              <div className="quick-label">Email</div>
              <div className="quick-value">info@ictsolutions.com.pk</div>
            </div>
          </div>
          <div className="quick-item">
            <div className="quick-icon">📞</div>
            <div className="quick-content">
              <div className="quick-label">Phone</div>
              <div className="quick-value">+92 12345678</div>
            </div>
          </div>
          <div className="quick-item">
            <div className="quick-icon">📍</div>
            <div className="quick-content">
              <div className="quick-label">Location</div>
              <div className="quick-value">Blue Area, Islamabad</div>
            </div>
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

export default ContactHero;

