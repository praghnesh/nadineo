import React from 'react';
import { Home, Sparkles, Image, Calendar, PhoneCall } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  const items = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'services', label: 'Services', icon: Sparkles },
    { id: 'booking', label: 'Book Now', icon: Calendar, isCenter: true },
    { id: 'gallery', label: 'Gallery', icon: Image },
    { id: 'contact', label: 'Contact', icon: PhoneCall },
  ];

  return (
    <nav className="bottom-nav-bar glass-effect">
      <div className="bottom-nav-container">
        {items.map((item) => {
          const Icon = item.icon;
          if (item.isCenter) {
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`nav-item-center ${activeTab === item.id ? 'active' : ''}`}
                aria-label={item.label}
              >
                <div className="center-icon-bg">
                  <Icon size={24} strokeWidth={2} />
                </div>
                <span className="center-label">{item.label}</span>
              </button>
            );
          }

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`nav-item-standard ${activeTab === item.id ? 'active' : ''}`}
            >
              <Icon size={20} strokeWidth={activeTab === item.id ? 2.2 : 1.8} className="nav-icon" />
              <span className="nav-label">{item.label}</span>
            </button>
          );
        })}
      </div>

      <style>{`
        .bottom-nav-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          height: var(--nav-bar-height);
          z-index: 999;
          border-top: 1px solid var(--glass-border);
          border-bottom: none;
          box-shadow: 0 -8px 30px rgba(183, 110, 121, 0.08);
          border-radius: var(--radius-lg) var(--radius-lg) 0 0;
          display: none; /* Hidden on desktop */
        }

        @media (max-width: 768px) {
          .bottom-nav-bar {
            display: block;
          }
        }

        .bottom-nav-container {
          display: flex;
          align-items: center;
          justify-content: space-around;
          height: 100%;
          padding: 0 12px;
          position: relative;
        }

        .nav-item-standard {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          color: var(--text-light);
          cursor: pointer;
          flex: 1;
          height: 100%;
          gap: 4px;
          transition: all var(--transition-fast);
        }

        .nav-item-standard.active {
          color: var(--accent);
        }

        .nav-icon {
          transition: transform var(--transition-fast);
        }

        .nav-item-standard:active .nav-icon {
          transform: scale(0.85);
        }

        .nav-label {
          font-size: 10px;
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          letter-spacing: 0.2px;
        }

        /* Center prominent Book Now button */
        .nav-item-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          cursor: pointer;
          position: relative;
          z-index: 10;
          margin-top: -32px; /* Pulls button upward */
          width: 72px;
          height: 80px;
        }

        .center-icon-bg {
          width: 56px;
          height: 56px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, var(--accent) 0%, #d88995 100%);
          color: var(--text-white);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(183, 110, 121, 0.4);
          border: 4px solid var(--secondary);
          transition: all var(--transition-normal);
        }

        .nav-item-center.active .center-icon-bg {
          background: linear-gradient(135deg, var(--accent-hover) 0%, var(--accent) 100%);
          transform: scale(1.05);
          box-shadow: 0 10px 28px rgba(183, 110, 121, 0.5);
        }

        .nav-item-center:active .center-icon-bg {
          transform: scale(0.95);
        }

        .center-label {
          font-size: 10px;
          font-weight: 600;
          color: var(--accent);
          margin-top: 4px;
          letter-spacing: 0.2px;
        }
      `}</style>
    </nav>
  );
};
