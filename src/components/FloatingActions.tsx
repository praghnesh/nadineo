import React, { useState } from 'react';
import { MessageCircle, Phone, Instagram, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FloatingActions: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Replace with actual Nadine service numbers/social links
  const phoneNumber = '+639606280788'; // Ph phone format
  const facebookUsername = 'Nadine.o1906'; 

  const actions = [
    {
      id: 'call',
      label: 'Call Us',
      icon: Phone,
      color: '#B76E79', // Rose gold
      url: `tel:${phoneNumber}`,
    },
    {
      id: 'instagram',
      label: 'Instagram',
      icon: Instagram,
      color: '#E1306C', // Instagram Pink
      url: 'https://www.instagram.com/nadineo1906?igsh=OHFzeTJ2MWRzZ3Zm',
    },
    {
      id: 'messenger',
      label: 'Messenger',
      icon: MessageCircle,
      color: '#0084FF', // Messenger Blue
      url: `https://m.me/${facebookUsername}`,
    },
  ];

  return (
    <div className="floating-actions-container">
      <AnimatePresence>
        {isOpen && (
          <div className="action-buttons-list">
            {actions.map((action, index) => {
              const Icon = action.icon;
              return (
                <motion.a
                  key={action.id}
                  href={action.url}
                  className="action-button-item"
                  initial={{ opacity: 0, y: 15, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.8 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  style={{ backgroundColor: action.color }}
                  title={action.label}
                >
                  <span className="action-tooltip">{action.label}</span>
                  <Icon size={20} color="#FFF" />
                </motion.a>
              );
            })}
          </div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`main-trigger-btn ${isOpen ? 'active' : ''}`}
        aria-label="Contact options"
      >
        <motion.div
          animate={{ rotate: isOpen ? 135 : 0 }}
          transition={{ duration: 0.3 }}
          className="trigger-icon-wrapper"
        >
          {isOpen ? <X size={22} /> : <MessageCircle size={22} className="chat-pulse" />}
        </motion.div>
      </button>

      <style>{`
        .floating-actions-container {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 998;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        @media (max-width: 768px) {
          .floating-actions-container {
            bottom: calc(var(--nav-bar-height) + 16px);
            right: 16px;
          }
        }

        .action-buttons-list {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .action-button-item {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
          cursor: pointer;
          position: relative;
          transition: transform var(--transition-fast);
        }

        .action-button-item:hover {
          transform: scale(1.1);
        }

        .action-tooltip {
          position: absolute;
          right: 60px;
          background: rgba(43, 43, 43, 0.9);
          color: var(--text-white);
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          font-size: 11px;
          font-weight: 500;
          white-space: nowrap;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          pointer-events: none;
          opacity: 0;
          transform: translateX(5px);
          transition: all var(--transition-fast);
        }

        .action-button-item:hover .action-tooltip {
          opacity: 1;
          transform: translateX(0);
        }

        /* Main floating button styling */
        .main-trigger-btn {
          width: 56px;
          height: 56px;
          border-radius: var(--radius-full);
          background: var(--accent);
          color: var(--text-white);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 6px 20px rgba(183, 110, 121, 0.35);
          transition: all var(--transition-normal);
        }

        .main-trigger-btn:hover {
          background: var(--accent-hover);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(183, 110, 121, 0.45);
        }

        .main-trigger-btn:active {
          transform: translateY(0);
        }

        .trigger-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .chat-pulse {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.06);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};
