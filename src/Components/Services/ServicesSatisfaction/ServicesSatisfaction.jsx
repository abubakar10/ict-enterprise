import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./ServicesSatisfaction.scss";
import monumentImage from "./../../../assets/images/services-side.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faLock, faBuilding, faCog, faNetworkWired, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const ServicesSatisfaction = () => {
  const [progressValues, setProgressValues] = useState(Array(6).fill(0));

  const satisfactionData = [
    { title: "Cloud Solutions", percentage: 99, icon: faCloud },
    { title: "Cybersecurity", percentage: 85, icon: faLock },
    { title: "Enterprise Solutions", percentage: 90, icon: faBuilding },
    { title: "IT Services", percentage: 85, icon: faCog },
    { title: "Network Solutions", percentage: 85, icon: faNetworkWired },
    { title: "Consulting", percentage: 85, icon: faBriefcase },
  ];


  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      satisfactionData.forEach((item, index) => {
        let currentProgress = 0;
        const targetProgress = item.percentage;
        const stepDuration = 10;

        const interval = setInterval(() => {
          if (currentProgress < targetProgress) {
            currentProgress += 1;
            setProgressValues((prev) => {
              const newValues = [...prev];
              newValues[index] = currentProgress;
              return newValues;
            });
          } else {
            clearInterval(interval);
          }
        }, stepDuration);
      });
    }
  }, [inView]);

  return (
    <section className="services-satisfaction" ref={ref}>
      <div className="satisfaction-container">
        <div className="satisfaction-content">
          <span className="section-badge">CUSTOMER SATISFACTION</span>
          <h2 className="section-title">Client Success Stories</h2>
          <p className="section-description">
            Our commitment to excellence has earned us recognition from industry leaders. 
            We've consistently received outstanding ratings from over 150 senior executives 
            across Pakistan's leading technology organizations.
          </p>

          <div className="satisfaction-scores">
            {satisfactionData.map((item, index) => (
              <div key={index} className="satisfaction-item">
                <div className="item-header">
                  <div className="item-info">
                    <span className="item-icon">
                      <FontAwesomeIcon icon={item.icon} />
                    </span>
                    <span className="item-title">{item.title}</span>
                  </div>
                  <span className="item-percentage">
                    {progressValues[index]}%
                  </span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{
                      width: `${progressValues[index]}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="satisfaction-stats">
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Industry Leaders Consulted</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">85%</div>
              <div className="stat-label">Overall Satisfaction Rate</div>
            </div>
          </div>
        </div>

        <div className="satisfaction-image">
          <div className="image-decoration"></div>
          <img src={monumentImage} alt="Customer Satisfaction" />
          <div className="image-overlay"></div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSatisfaction;

