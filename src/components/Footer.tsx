import React from 'react';
import { Sparkles, Facebook, Instagram, MessageSquare, Phone, MapPin, Mail } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const currentYear = new Date().getFullYear();
  const instagramUrl = "https://www.instagram.com/nadineo1906?igsh=OHFzeTJ2MWRzZ3Zm";

  return (
    <footer className="footer-wrapper">
      <div className="container footer-container">
        
        {/* Brand Information column */}
        <div className="footer-col brand-col">
          <div className="footer-logo" onClick={() => setActiveTab('home')}>
            <div className="footer-logo-icon">
              <Sparkles size={16} />
            </div>
            <span>Nadine Home Beauty</span>
          </div>
          <p className="footer-tagline">Professional Beauty Services at Your Doorstep.</p>
          <p className="footer-brand-desc">
            Bringing salon-grade hair styling, facial treatments, nails, makeup, and relaxation therapies directly to your home in Cavite.
          </p>
          <div className="footer-socials">
            <a href="https://facebook.com/Nadine.o1906" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={16} />
            </a>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href="https://m.me/Nadine.o1906" target="_blank" rel="noopener noreferrer" aria-label="Messenger">
              <MessageSquare size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links column */}
        <div className="footer-col links-col">
          <h4>Quick Links</h4>
          <ul className="footer-links-list">
            <li><button onClick={() => setActiveTab('home')}>Home</button></li>
            <li><button onClick={() => setActiveTab('services')}>Services Menu</button></li>
            <li><button onClick={() => setActiveTab('gallery')}>Lookbook Portfolio</button></li>
            <li><button onClick={() => setActiveTab('about')}>About Nadine</button></li>
            <li><button onClick={() => setActiveTab('contact')}>Contact & FAQ</button></li>
          </ul>
        </div>

        {/* Contact column */}
        <div className="footer-col contact-col">
          <h4>Contact & Info</h4>
          <ul className="footer-contact-list">
            <li>
              <MapPin size={14} className="f-icon" />
              <span>Dasmariñas City, Cavite, Philippines</span>
            </li>
            <li>
              <Phone size={14} className="f-icon" />
              <span>+63 960 628 0788</span>
            </li>
            <li>
              <Mail size={14} className="f-icon" />
              <span>nadinebeauty@gmail.com</span>
            </li>
          </ul>
          <div className="footer-coverage-badge">
            <strong>Service Area</strong>
            <span>Dasmariñas City & adjacent areas</span>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom-bar">
        <div className="container bottom-bar-container">
          <p>&copy; {currentYear} Nadine Home Beauty Services. All Rights Reserved.</p>
          <p className="designer-credit">Designed for Premium Mobile Experiences</p>
        </div>
      </div>

      <style>{`
        .footer-wrapper {
          background: #1F1F1F;
          color: rgba(255, 255, 255, 0.7);
          padding: 60px 0 0 0;
          border-top: 1px solid rgba(183, 110, 121, 0.1);
          font-size: 13px;
        }

        .footer-container {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 40px;
          padding-bottom: 40px;
        }

        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }

        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        /* Logo styling */
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #fff;
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;
        }

        .footer-logo-icon {
          width: 30px;
          height: 30px;
          border-radius: var(--radius-full);
          background: rgba(183, 110, 121, 0.2);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer-tagline {
          font-style: italic;
          font-size: 13px;
          color: var(--primary);
          font-weight: 500;
        }

        .footer-brand-desc {
          line-height: 1.6;
          font-weight: 300;
        }

        /* Social icons styling */
        .footer-socials {
          display: flex;
          gap: 10px;
          margin-top: 8px;
        }

        .footer-socials a {
          width: 34px;
          height: 34px;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }

        .footer-socials a:hover {
          background: var(--accent);
          color: #fff;
          transform: translateY(-2px);
        }

        /* Col Headings */
        .footer-col h4 {
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
          position: relative;
          padding-bottom: 8px;
        }

        .footer-col h4::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 30px;
          height: 1.5px;
          background: var(--accent);
        }

        /* Links List */
        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-links-list button {
          background: transparent;
          border: none;
          color: rgba(255, 255, 255, 0.7);
          text-align: left;
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          cursor: pointer;
          transition: color var(--transition-fast);
          padding: 2px 0;
        }

        .footer-links-list button:hover {
          color: var(--primary);
        }

        /* Contact details list */
        .footer-contact-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-contact-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          line-height: 1.4;
        }

        .f-icon {
          color: var(--primary);
          margin-top: 2px;
          flex-shrink: 0;
        }

        .footer-coverage-badge {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
          padding: 12px;
          margin-top: 8px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .footer-coverage-badge strong {
          color: var(--primary);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .footer-coverage-badge span {
          font-size: 12px;
          font-weight: 300;
        }

        /* Bottom copyright bar */
        .footer-bottom-bar {
          background: #171717;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 20px 0;
          margin-top: 20px;
          font-size: 11px;
          color: rgba(255, 255, 255, 0.4);
        }

        .bottom-bar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
        }

        @media (max-width: 600px) {
          .bottom-bar-container {
            flex-direction: column;
            text-align: center;
          }
          .footer-wrapper {
            padding-bottom: var(--nav-bar-height); /* Ensure spacing above mobile bottom nav */
          }
        }

        .designer-credit {
          font-weight: 300;
        }
      `}</style>
    </footer>
  );
};
