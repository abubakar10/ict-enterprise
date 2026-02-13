import React from "react";
import "./VisionContent.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faRocket, faLightbulb } from "@fortawesome/free-solid-svg-icons";

const VisionContent = () => {
  const visionPoints = [
    {
      icon: faBullseye,
      title: "Our Vision",
      description: "To be the leading technology partner in the region, driving digital transformation and innovation across industries. We envision a future where technology seamlessly integrates with business to create unprecedented value and opportunities."
    },
    {
      icon: faRocket,
      title: "Our Mission",
      description: "To deliver cutting-edge IT solutions that empower businesses to achieve their full potential. We are committed to excellence, innovation, and building lasting partnerships with our clients through reliable service and expert guidance."
    },
    {
      icon: faLightbulb,
      title: "Our Purpose",
      description: "We exist to simplify complex technology challenges and make innovation accessible to businesses of all sizes. By combining technical expertise with business understanding, we help organizations navigate the digital landscape confidently."
    }
  ];

  const coreValues = [
    {
      number: "01",
      title: "Innovation",
      description: "We embrace change and continuously seek new ways to solve problems and create value."
    },
    {
      number: "02",
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to client service."
    },
    {
      number: "03",
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices at all times."
    },
    {
      number: "04",
      title: "Collaboration",
      description: "We work together, leveraging diverse perspectives to achieve extraordinary results."
    },
    {
      number: "05",
      title: "Customer Focus",
      description: "We put our clients at the center, understanding their needs and exceeding expectations."
    },
    {
      number: "06",
      title: "Growth",
      description: "We invest in our people and foster continuous learning and professional development."
    }
  ];

  return (
    <>
      <section className="vision-content">
        <div className="content-container">
          <div className="vision-grid">
            {visionPoints.map((point, index) => (
              <div key={index} className="vision-card" data-index={index}>
                <div className="card-header">
                  <div className="card-icon-wrapper">
                    <FontAwesomeIcon icon={point.icon} className="card-icon" />
                  </div>
                  <div className="card-number">0{index + 1}</div>
                </div>
                <h2 className="card-title">{point.title}</h2>
                <p className="card-description">{point.description}</p>
                <div className="card-accent"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="core-values">
        <div className="values-container">
          <div className="section-header">
            <span className="section-badge">CORE VALUES</span>
            <h2>Principles That Drive Us</h2>
            <p>The fundamental beliefs that shape our decisions and actions every day</p>
          </div>
          <div className="values-grid">
            {coreValues.map((value, index) => (
              <div key={index} className="value-card" data-index={index}>
                <div className="value-header">
                  <div className="value-number">{value.number}</div>
                  <h3 className="value-title">{value.title}</h3>
                </div>
                <p className="value-description">{value.description}</p>
                <div className="value-line"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default VisionContent;

