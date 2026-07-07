import React from 'react';
// @ts-ignore
import { Check, X, Calendar, User, Clock, ShieldCheck, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BookingDetails {
  name: string;
  phone: string;
  email: string;
  address: string;
  date: string;
  time: string;
  service: string;
  requests: string;
}

interface SuccessPopupProps {
  isOpen: boolean;
  onClose: () => void;
  bookingData: BookingDetails | null;
}

export const SuccessPopup: React.FC<SuccessPopupProps> = ({ isOpen, onClose, bookingData }) => {
  if (!bookingData) return null;

  const whatsappNumber = '639171234567'; 
  const messageText = `Hi Nadine! I just requested a beauty service booking online:\n\n*Name:* ${bookingData.name}\n*Phone:* ${bookingData.phone}\n*Service:* ${bookingData.service}\n*Date:* ${bookingData.date}\n*Time:* ${bookingData.time}\n*Address:* ${bookingData.address}\n*Special Request:* ${bookingData.requests || 'None'}\n\nPlease confirm my slot!`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="popup-backdrop">
          <motion.div 
            className="popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          <motion.div 
            className="popup-content-card glass-effect"
            initial={{ scale: 0.9, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 30, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          >
            <button className="popup-close-btn" onClick={onClose} aria-label="Close popup">
              <X size={18} />
            </button>

            <div className="popup-header">
              <div className="success-icon-badge">
                <Check size={28} className="success-checkmark" />
              </div>
              <h3>Appointment Requested!</h3>
              <p>We have received your booking request. Nadine will get in touch shortly to confirm your schedule.</p>
            </div>

            <div className="booking-summary-box">
              <div className="summary-title">Booking Summary</div>
              
              <div className="summary-item">
                <User size={14} className="summary-icon" />
                <div>
                  <span className="summary-label">Client Name:</span>
                  <span className="summary-val">{bookingData.name}</span>
                </div>
              </div>

              <div className="summary-item">
                <ShieldCheck size={14} className="summary-icon" />
                <div>
                  <span className="summary-label">Service:</span>
                  <span className="summary-val accent-val">{bookingData.service}</span>
                </div>
              </div>

              <div className="summary-item">
                <Calendar size={14} className="summary-icon" />
                <div>
                  <span className="summary-label">Preferred Date:</span>
                  <span className="summary-val">{bookingData.date}</span>
                </div>
              </div>

              <div className="summary-item">
                <Clock size={14} className="summary-icon" />
                <div>
                  <span className="summary-label">Preferred Time:</span>
                  <span className="summary-val">{bookingData.time}</span>
                </div>
              </div>
            </div>

            <div className="popup-actions">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary whatsapp-confirm-btn"
              >
                <MessageSquare size={16} className="btn-icon-left" />
                Confirm via WhatsApp Fast
              </a>
              <button className="btn btn-secondary close-action-btn" onClick={onClose}>
                Done
              </button>
            </div>
          </motion.div>

          <style>{`
            .popup-backdrop {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: 2000;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 24px;
            }

            .popup-overlay {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: rgba(43, 43, 43, 0.4);
              backdrop-filter: blur(8px);
              -webkit-backdrop-filter: blur(8px);
            }

            .popup-content-card {
              position: relative;
              width: 100%;
              max-width: 440px;
              border-radius: var(--radius-lg);
              padding: 32px 24px;
              box-shadow: var(--shadow-floating);
              z-index: 2010;
              text-align: center;
              border-color: rgba(183, 110, 121, 0.25);
            }

            .popup-close-btn {
              position: absolute;
              top: 16px;
              right: 16px;
              background: transparent;
              border: none;
              color: var(--text-light);
              cursor: pointer;
              width: 30px;
              height: 30px;
              border-radius: var(--radius-full);
              display: flex;
              align-items: center;
              justify-content: center;
              transition: all var(--transition-fast);
            }

            .popup-close-btn:hover {
              background: rgba(183, 110, 121, 0.08);
              color: var(--accent);
            }

            .success-icon-badge {
              width: 64px;
              height: 64px;
              border-radius: var(--radius-full);
              background: rgba(37, 211, 102, 0.1);
              color: #25D366;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 16px;
              border: 1px solid rgba(37, 211, 102, 0.2);
            }

            .popup-header h3 {
              font-size: 22px;
              color: var(--text-main);
              margin-bottom: 8px;
            }

            .popup-header p {
              font-size: 13px;
              color: var(--text-muted);
              margin-bottom: 24px;
            }

            .booking-summary-box {
              background: rgba(183, 110, 121, 0.03);
              border: 1px solid var(--border-color);
              border-radius: var(--radius-md);
              padding: 16px;
              margin-bottom: 24px;
              text-align: left;
            }

            .summary-title {
              font-size: 11px;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 1px;
              color: var(--accent);
              margin-bottom: 12px;
              border-bottom: 1px dashed var(--border-color);
              padding-bottom: 6px;
            }

            .summary-item {
              display: flex;
              align-items: center;
              gap: 10px;
              margin-bottom: 10px;
              font-size: 13px;
            }

            .summary-item:last-child {
              margin-bottom: 0;
            }

            .summary-icon {
              color: var(--accent);
              flex-shrink: 0;
            }

            .summary-label {
              font-weight: 400;
              color: var(--text-muted);
              margin-right: 6px;
            }

            .summary-val {
              font-weight: 500;
              color: var(--text-main);
            }

            .accent-val {
              color: var(--accent);
            }

            .popup-actions {
              display: flex;
              flex-direction: column;
              gap: 12px;
            }

            .whatsapp-confirm-btn {
              background: #25D366;
              box-shadow: 0 4px 15px rgba(37, 211, 102, 0.2);
              border: none;
              font-size: 14px;
            }

            .whatsapp-confirm-btn:hover {
              background: #20ba59;
              box-shadow: 0 6px 20px rgba(37, 211, 102, 0.35);
            }

            .btn-icon-left {
              margin-right: 8px;
            }

            .close-action-btn {
              font-size: 14px;
              padding: 12px;
            }
          `}</style>
        </div>
      )}
    </AnimatePresence>
  );
};
