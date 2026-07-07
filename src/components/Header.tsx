import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className={`header-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Brand Logo */}
        <div className="logo-section" onClick={() => setActiveTab('home')}>
          <div className="logo-icon-bg">
            <Sparkles size={18} className="logo-sparkle" />
          </div>
          <div className="logo-text">
            <span className="brand-name">Nadine</span>
            <span className="brand-sub">Home Beauty Services</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`nav-link-btn ${activeTab === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop Call to Action */}
        <div className="header-cta">
          <button 
            className="header-book-btn"
            onClick={() => setActiveTab('booking')}
          >
            <Calendar size={15} className="btn-icon" />
            <span>Book Now</span>
          </button>
        </div>
      </div>

      <style>{`
        .header-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: var(--header-height);
          z-index: 1000;
          transition: all var(--transition-normal);
          background: transparent;
          border-bottom: 1px solid transparent;
        }

        .header-wrapper.scrolled {
          background: var(--glass-bg);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: var(--shadow-subtle);
          border-bottom: 1px solid var(--border-color);
        }

        .header-container {
          max-width: var(--max-width);
          height: 100%;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo-section {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
        }

        .logo-icon-bg {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-full);
          background: rgba(183, 110, 121, 0.1);
          border: 1px solid rgba(183, 110, 121, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          transition: all var(--transition-normal);
        }

        .logo-section:hover .logo-icon-bg {
          transform: rotate(15deg) scale(1.05);
          background: var(--accent);
          color: var(--text-white);
        }

        .logo-sparkle {
          animation: floatAnimation 3s ease-in-out infinite;
        }

        @keyframes floatAnimation {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }

        .logo-text {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-weight: 700;
          color: var(--text-main);
          letter-spacing: 0.5px;
          line-height: 1.1;
        }

        .brand-sub {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--accent);
          font-weight: 500;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }
          .header-cta {
            display: none;
          }
        }

        .nav-link-btn {
          background: transparent;
          border: none;
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: var(--text-muted);
          cursor: pointer;
          position: relative;
          padding: 8px 0;
          transition: var(--transition-fast);
        }

        .nav-link-btn:hover {
          color: var(--accent);
        }

        .nav-link-btn::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1.5px;
          background: var(--accent);
          transition: var(--transition-normal);
        }

        .nav-link-btn.active {
          color: var(--accent);
          font-weight: 600;
        }

        .nav-link-btn.active::after {
          width: 100%;
        }

        .header-book-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--accent);
          color: var(--text-white);
          border: none;
          padding: 10px 20px;
          border-radius: var(--radius-full);
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(183, 110, 121, 0.2);
          transition: all var(--transition-normal);
        }

        .header-book-btn:hover {
          background: var(--accent-hover);
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(183, 110, 121, 0.3);
        }

        .btn-icon {
          color: inherit;
        }
      `}</style>
    </header>
  );
};
