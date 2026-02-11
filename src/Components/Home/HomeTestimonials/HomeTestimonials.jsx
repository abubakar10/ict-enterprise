import React, { useState, useEffect } from "react";
import "./HomeTestimonials.scss";

const HomeTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      company: "Pak Elektron",
      role: "Head of IT",
      text: "ICT delivered a complete infrastructure overhaul on schedule. Our systems are now more reliable, and their team remains our first call for any critical IT decision.",
      rating: 5,
    },
    {
      company: "Nishat Mills",
      role: "Chief Technology Officer",
      text: "Our Microsoft 365 migration was handled end-to-end by ICT. Minimal downtime, clear communication, and we're already seeing gains in collaboration and security.",
      rating: 5,
    },
    {
      company: "Getz Pharma",
      role: "Manager IT",
      text: "From a single support call to a full-day recovery of our domain environment—ICT stayed with us until everything was back online. That level of commitment is rare.",
      rating: 5,
    },
    {
      company: "Faysal Bank",
      role: "IT Operations Lead",
      text: "We needed a partner who understood both technology and compliance. ICT brought both, and their cybersecurity and consulting teams have become an extension of ours.",
      rating: 5,
    },
    {
      company: "A leading FMCG group",
      role: "Director of Digital",
      text: "Whether it's cloud, networks, or day-to-day IT support, ICT responds quickly and keeps our operations running. A true long-term partner.",
      rating: 5,
    },
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const t = setTimeout(() => setIsAnimating(false), 400);
    return () => clearTimeout(t);
  }, [activeIndex]);

  return (
    <section className="home-testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <span className="section-badge">VOICES OF TRUST</span>
          <h2 className="section-title">What Our Clients Say About Us</h2>
          <p className="section-description">
            Real feedback from organizations that rely on us for technology and growth
          </p>
        </div>

        <div className="testimonials-slider-wrap">
          <button
            type="button"
            className="slider-arrow slider-arrow-prev"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="testimonials-slider">
            <div className="slider-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div className="testimonial-card" key={index}>
                  <div className="card-accent" aria-hidden="true" />
                  <span className="card-quote" aria-hidden="true">"</span>
                  <div className="card-stars">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="card-text">{testimonial.text}</blockquote>
                  <footer className="card-author">
                    <span className="author-initial" aria-hidden="true">
                      {testimonial.company.charAt(0)}
                    </span>
                    <div className="author-meta">
                      <cite className="author-company">{testimonial.company}</cite>
                      <span className="author-role">{testimonial.role}</span>
                    </div>
                  </footer>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="slider-arrow slider-arrow-next"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="slider-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`dot ${index === activeIndex ? "dot-active" : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
