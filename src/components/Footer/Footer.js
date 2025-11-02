import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.css";
import arkansmall from "../../assets/arkansmall.svg";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaGlobe,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Company Information */}
        <div className="footer-section">
          <div className="footer-brand">
            <img src={arkansmall} alt="ARKAN AL-TAFAWUQ Logo" className="footer-logo" />
            <h3>ARKAN AL-TAFAWUQ</h3>
            <p className="footer-description">
              {t('footer.description')}
            </p>
            <div className="footer-badges">
              <span className="badge">{t('footer.badges.experience')}</span>
              <span className="badge">{t('footer.badges.projects')}</span>
              <span className="badge">{t('footer.badges.satisfaction')}</span>
            </div>
            <div className="social-links">
              <a 
                href="https://www.instagram.com/arkan_altafawuq_production?igsh=N253dXZ5bTBvYThr&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <FaInstagram className="social-icon" />
                <span>Instagram</span>
              </a>
              <a 
                href="https://www.facebook.com/share/15Kg8ZPNLhH/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Facebook"
              >
                <FaFacebook className="social-icon" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h4>{t('footer.services.title')}</h4>
          <ul className="footer-links">
            <li>
              <Link to="/production" className="footer-link">
                {t('footer.services.production')}
              </Link>
            </li>
            <li>
              <Link to="/about" className="footer-link">
                {t('footer.services.design')}
              </Link>
            </li>
            <li>
              <Link to="/ContactUs" className="footer-link">
                {t('footer.services.consultation')}
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
          <h4>{t('footer.contact.title')}</h4>
          <div>
            <div className="contact-item">
              <FaPhoneAlt className="contact-icon" />
              <div className="contact-details">
                <a href="tel:+966549462381" className="contact-link">
                  +966 54 946 2381
                </a>
                <a href="tel:+966549472381" className="contact-link">
                  +966 54 947 2381
                </a>
              </div>
            </div>
            
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div className="contact-details">
                <a href="mailto:info@arkanaltafawuq.com" className="contact-link">
                  info@arkanaltafawuq.com
                </a>
              </div>
            </div>
            
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div className="contact-details">
                <a 
                  href="https://maps.app.goo.gl/zMjJ4NWnqta9pVMr7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  KSA - Riyadh Al Aylaiah District, Building 7573
                </a>
                <span className="contact-text">P.O. Box: 2160-12222</span>
              </div>
            </div>
            
            <div className="contact-item">
              <FaClock className="contact-icon" />
              <div className="contact-details">
                <span className="contact-text">{t('footer.contact.businessHours')}</span>
                <span className="contact-text">{t('footer.contact.businessHoursTime')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Our Services */}
        <div className="footer-section">
          <h4>{t('footer.services.title')}</h4>
          <div className="services-list">
            <div className="service-item">
              <span>{t('footer.services.list.design')}</span>
            </div>
            <div className="service-item">
              <span>{t('footer.services.list.production')}</span>
            </div>
            <div className="service-item">
              <span>{t('footer.services.list.exhibition')}</span>
            </div>
            <div className="service-item">
              <span>{t('footer.services.list.consultation')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="footer-bottom-left">
            <p>
              &copy; {currentYear} <span className="brand-name">ARKAN AL-TAFAWUQ</span>. 
              {t('footer.bottom.copyright')}
            </p>
          </div>
          
          <div className="footer-bottom-right">
            <div className="footer-bottom-links">
              <a href="#" className="footer-bottom-link">{t('footer.bottom.privacy')}</a>
              <a href="#" className="footer-bottom-link">{t('footer.bottom.terms')}</a>
              <a href="#" className="footer-bottom-link">{t('footer.bottom.cookie')}</a>
            </div>
            
            <div className="footer-location">
              <FaGlobe className="location-icon" />
              <span>{t('footer.bottom.location')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;