import React, { useState } from "react";
import "./ContactForm.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const contactInfo = [
    {
      icon: faMapMarkerAlt,
      title: "Visit Us",
      description: "Blue Area Islamabad, Pakistan"
    },
    {
      icon: faEnvelope,
      title: "Email Us",
      description: "info@ictsolutions.com.pk"
    },
    {
      icon: faPhone,
      title: "Call Us",
      description: "1234567890\nMon-Fri: 9AM - 6PM"
    }
  ];

  return (
    <section className="contact-form-section">
      <div className="form-container">
        <div className="form-wrapper">
          <div className="form-header">
            <span className="form-badge">SEND MESSAGE</span>
            <h2>Get in Touch</h2>
            <p>Fill out the form below and we'll get back to you within 24 hours.</p>
          </div>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+92 300 1234567"
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  required
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your project..."
                rows="6"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        </div>

        <div className="contact-info">
          {contactInfo.map((info, index) => (
            <div key={index} className="info-card">
              <div className="card-number">0{index + 1}</div>
              <div className="info-icon-wrapper">
                <FontAwesomeIcon icon={info.icon} className="info-icon" />
              </div>
              <div className="card-content">
                <h3>{info.title}</h3>
                <p>{info.description.split("\n").map((line, idx) => <span key={idx}>{line}<br /></span>)}</p>
              </div>
              <div className="card-accent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;