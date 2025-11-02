import React, { useEffect, useRef } from "react";
import "./DigitalMarketing.css";
import DigitalMarketingImage from "../../assets/digitalmarketing.jpg";
import testvideo from "../../assets/testvideo.mp4";

const DigitalMarketing = () => {
  const videoRef = useRef(null);

  // Setup scroll reveals using our new design system
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="digital-marketing-page">
      {/* Hero Section */}
      <section className="hero section" aria-label="Digital Marketing Hero">
        <img
          src={DigitalMarketingImage}
          alt="Digital Marketing"
          className="hero__bg"
        />
        <div className="hero__overlay" />
        <div className="hero__content container reveal">
          <h1 className="hero__title">Digital Marketing</h1>
          <p className="hero__subtitle">
            Elevate your brand with our expert digital marketing strategies.
          </p>
          <h2 className="hero__subheading">Integrated Marketing Delivers</h2>
          <p className="hero__description">
            Saudi Arabia is one of the most competitive markets in the region—where brands are
            constantly fighting for visibility and attention. You need more than just a marketing
            agency; you need a partner that understands your audience, speaks their
            language, and uses data-driven creativity to convert attention into loyal customers.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section section">
        <div className="container">
          <div className="videoWrap reveal">
            <video
              ref={videoRef}
              className="digital-video"
              muted
              playsInline
              preload="metadata"
              poster={DigitalMarketingImage}
            >
              <source src={testvideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Services Grid */}
          <div className="services-grid">
            <div className="service-card reveal">
              <h3>Digital Marketing Strategy</h3>
              <p>
                Custom strategies aligned with your objectives, industry trends, and customer
                behavior in Saudi Arabia.
              </p>
            </div>

            <div className="service-card reveal">
              <h3>Social Media Management</h3>
              <p>
                Engaging content and day-to-day community management to keep your brand active
                and relevant.
              </p>
            </div>

            <div className="service-card reveal">
              <h3>Paid Advertising (PPC)</h3>
              <p>
                Target the right people at the right time via Google Ads, Meta, LinkedIn, and
                more.
              </p>
            </div>

            <div className="service-card reveal">
              <h3>Search Engine Optimization (SEO)</h3>
              <p>Sustainable, long-term organic traffic and higher visibility for your website.</p>
            </div>

            <div className="service-card reveal">
              <h3>Content Creation & Branding</h3>
              <p>Impactful visuals, videos, and copywriting that resonate with your audience.</p>
            </div>

            <div className="service-card reveal">
              <h3>Event Marketing & Offline Advertising</h3>
              <p>Booth design, activations, and campaigns that leave lasting impressions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section section">
        <div className="container">
          <h2 className="section__title reveal">Our Process</h2>
          <div className="process-list">
            <div className="process-step reveal">
              <h3>Understanding Your Business</h3>
              <p>Full brand and competitor analysis to set a solid foundation.</p>
            </div>
            <div className="process-step reveal">
              <h3>Planning the Strategy</h3>
              <p>A clear roadmap designed around measurable KPIs.</p>
            </div>
            <div className="process-step reveal">
              <h3>Creative Development</h3>
              <p>Crafting visuals, ads, and content tailored to your audience.</p>
            </div>
            <div className="process-step reveal">
              <h3>Execution & Monitoring</h3>
              <p>Launching campaigns across platforms with ongoing optimization.</p>
            </div>
            <div className="process-step reveal">
              <h3>Measuring Results</h3>
              <p>Monthly reports and ROI analysis to track success.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DigitalMarketing;