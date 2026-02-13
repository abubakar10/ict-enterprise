import React from "react";
import "./AboutValues.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faBullseye, faHandshake, faRocket, faUsers, faHeart } from "@fortawesome/free-solid-svg-icons";

const AboutValues = () => {
  const values = [
    {
      icon: faLightbulb,
      title: "Innovation",
      description: "Pioneering new approaches and leveraging emerging technologies to create breakthrough solutions that transform businesses."
    },
    {
      icon: faBullseye,
      title: "Excellence",
      description: "Delivering world-class quality in every project, exceeding expectations and setting new industry benchmarks."
    },
    {
      icon: faHandshake,
      title: "Integrity",
      description: "Operating with unwavering ethical standards, building lasting relationships founded on trust and respect."
    },
    {
      icon: faRocket,
      title: "Growth",
      description: "Fostering continuous improvement and empowering our team and clients to reach their full potential."
    },
    {
      icon: faUsers,
      title: "Collaboration",
      description: "Working together seamlessly, combining diverse talents to deliver exceptional outcomes for our clients."
    },
    {
      icon: faHeart,
      title: "Client Success",
      description: "Dedicated to understanding your unique needs and delivering solutions that drive measurable business value."
    }
  ];

  return (
    <section className="about-values">
      <div className="values-container">
        <div className="section-header">
          <span className="section-badge">OUR VALUES</span>
          <h2>The Foundation of Our Success</h2>
          <p>These fundamental beliefs shape our culture and drive everything we do</p>
        </div>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card" data-index={index}>
              <div className="card-header">
                <div className="value-icon-wrapper">
                  <FontAwesomeIcon icon={value.icon} className="value-icon" />
                </div>
                <div className="card-number">0{index + 1}</div>
              </div>
              <div className="card-content">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
              <div className="card-accent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;

