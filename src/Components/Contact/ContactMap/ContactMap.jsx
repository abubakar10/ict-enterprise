import React from "react";
import "./ContactMap.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot, faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactMap = () => {
  const offices = [
    // {
    //   city: "Karachi",
    //   address: "6/K Block 2, P.E.C.H.S, Karachi, Pakistan",
    //   phone: "021 111-482-711",
    //   email: "karachi@ict.com.pk"
    // },
    // {
    //   city: "Lahore",
    //   address: "Office No. 32, 1st Floor, I.T Tower 73-E/1، Hali Rd, Block A Gulberg III Lahore, Pakistan",
    //   phone: "042 378-74358   ",
    //   email: "lahore@ict.com.pk"
    // },
    {
      city: "Islamabad",
      address: "Blue Area, Islamabad",
      phone: "+92 12345678",
      email: "info@ictsolutions.com.pk"
    }
  ];

  return (
    <section className="contact-map-section">
      <div className="map-container">
        <div className="section-header">
          <span className="section-badge">OUR LOCATION</span>
          <h2>Find Us</h2>
          <p>Visit our office or get in touch remotely.</p>
        </div>

        <div className="offices-grid">
          {offices.map((office, index) => (
            <div key={index} className="office-card">
              <div className="card-header">
                <div className="office-icon-wrapper">
                  <FontAwesomeIcon icon={faMapLocationDot} className="office-icon" />
                </div>
                <div className="card-number">0{index + 1}</div>
              </div>
              <div className="card-content">
                <h3>{office.city}</h3>
                <div className="office-details">
                  <p className="office-address">
                    <FontAwesomeIcon icon={faLocationDot} className="detail-icon" />
                    {office.address}
                  </p>
                  <p className="office-phone">
                    <FontAwesomeIcon icon={faPhone} className="detail-icon" />
                    {office.phone}
                  </p>
                  <p className="office-email">
                    <FontAwesomeIcon icon={faEnvelope} className="detail-icon" />
                    {office.email}
                  </p>
                </div>
              </div>
              <button className="directions-btn">
                Get Directions
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="card-accent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactMap;

