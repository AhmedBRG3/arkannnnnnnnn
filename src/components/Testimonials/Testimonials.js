import React, { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import "./Testimonials.css";

const Testimonials = () => {
  const { t } = useTranslation();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = useMemo(() => [
    {
      id: 1,
      name: t('testimonials.items.1.name'),
      company: t('testimonials.items.1.company'),
      content: t('testimonials.items.1.content'),
      rating: 5
    },
    {
      id: 2,
      name: t('testimonials.items.2.name'),
      company: t('testimonials.items.2.company'),
      content: t('testimonials.items.2.content'),
      rating: 5
    },
    {
      id: 3,
      name: t('testimonials.items.3.name'),
      company: t('testimonials.items.3.company'),
      content: t('testimonials.items.3.content'),
      rating: 5
    },
    {
      id: 4,
      name: t('testimonials.items.4.name'),
      company: t('testimonials.items.4.company'),
      content: t('testimonials.items.4.content'),
      rating: 5
    },
    {
      id: 5,
      name: t('testimonials.items.5.name'),
      company: t('testimonials.items.5.company'),
      content: t('testimonials.items.5.content'),
      rating: 5
    }
  ], [t]);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        viewBox="0 0 24 24"
        fill={index < rating ? "#d3aa8b" : "rgba(211, 170, 139, 0.3)"}
        className="star-icon"
      >
        <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
      </svg>
    ));
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header reveal">
          <span className="section__subtitle">{t('testimonials.subtitle')}</span>
          <h2 className="section__title">{t('testimonials.title')}</h2>
          <p className="section__description">
            {t('testimonials.description')}
          </p>
        </div>

        <div className="testimonials-container reveal">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="testimonial-rating">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
              <blockquote className="testimonial-text">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4 className="author-name">{testimonials[currentTestimonial].name}</h4>
                  <p className="author-company">{testimonials[currentTestimonial].company}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonials-navigation">
            <button 
              className="nav-button prev" 
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              className="nav-button next" 
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="testimonials-stats reveal">
          <div className="stat-item">
            <span className="stat-number">98%</span>
            <span className="stat-label">{t('testimonials.stats.satisfaction')}</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">{t('testimonials.stats.clients')}</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">3+</span>
            <span className="stat-label">{t('testimonials.stats.experience')}</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">95%</span>
            <span className="stat-label">{t('testimonials.stats.repeat')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
