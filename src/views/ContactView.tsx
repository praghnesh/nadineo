import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageSquare, Facebook, Instagram, Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item card-premium" onClick={() => setIsOpen(!isOpen)}>
      <div className="faq-question-header">
        <h4>{question}</h4>
        <div className="faq-toggle-icon">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="faq-answer-container"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p className="faq-answer-text">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .faq-item {
          padding: 20px 24px;
          cursor: pointer;
          background: var(--bg-card);
          margin-bottom: 16px;
        }

        .faq-question-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .faq-question-header h4 {
          font-size: 15px;
          font-weight: 600;
          color: var(--text-main);
          font-family: 'Poppins', sans-serif;
        }

        .faq-toggle-icon {
          color: var(--accent);
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .faq-answer-container {
          overflow: hidden;
        }

        .faq-answer-text {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.6;
          padding-top: 12px;
          border-top: 1px dashed var(--border-color);
          margin-top: 12px;
          font-weight: 300;
        }
      `}</style>
    </div>
  );
};

export const ContactView: React.FC = () => {
  const businessHours = [
    { day: 'Monday to Sunday', hours: '09:00 AM - 07:00 PM' },
    { day: 'Public Holidays', hours: 'Prior booking requested' },
  ];

  const faqs = [
    {
      question: 'Do you provide services outside Dasmariñas City, Cavite?',
      answer: 'Our main service area covers Dasmariñas City, Cavite. However, we also cater to nearby areas (such as Imus, Bacoor, Silang, and General Trias) for a small out-of-town transpo fee depending on the service volume requested.',
    },
    {
      question: 'Do I need to prepare any equipment at home?',
      answer: 'No. Nadine brings the entire portable salon setup, including a foldable professional massage bed, styling chair, ring lights, blow dryers, sanitized towels, and premium beauty products. We only need access to a power outlet and clean water.',
    },
    {
      question: 'What payment options do you accept?',
      answer: 'For your convenience, we accept Cash on Delivery (COD), GCash, Maya, and online bank transfers (BDO, BPI, UnionBank) immediately after the service is rendered.',
    },
    {
      question: 'How far in advance should I book?',
      answer: 'We highly recommend booking 2-3 days in advance, especially for weekend slots which fill up rapidly. For bridal and large party styling, 2-4 weeks advance notice is preferred.',
    },
    {
      question: 'Are your cosmetic and facial products safe for sensitive skin?',
      answer: 'Absolutely. We only use high-grade, dermatologist-tested, hypoallergenic skin products and premium organic makeup. If you have specific skin conditions or product allergies, please let us know in the booking request.',
    },
  ];

  return (
    <div className="contact-view section-padding">
      <div className="container">
        
        {/* Contact Grid Info Cards */}
        <div className="contact-grid">
          
          {/* Card 1: Contact Methods */}
          <motion.div 
            className="contact-card card-premium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="card-header-icon">
              <Phone size={20} />
            </div>
            <h3>Connect with Nadine</h3>
            <p className="card-desc">Call us directly or chat on messaging networks for instant answers.</p>

            <div className="contact-info-list">
              <div className="info-row">
                <MapPin size={16} className="info-icon" />
                <div>
                  <strong>Location</strong>
                  <span>Dasmariñas City, Cavite, PH</span>
                </div>
              </div>

              <div className="info-row">
                <Phone size={16} className="info-icon" />
                <div>
                  <strong>Phone Line</strong>
                  <span>+63 960 628 0788</span>
                </div>
              </div>

              <div className="info-row">
                <Mail size={16} className="info-icon" />
                <div>
                  <strong>Email</strong>
                  <span>nadinebeauty@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="contact-social-row">
              <a href="https://facebook.com/NadineHomeBeauty" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/nadineo1906?igsh=OHFzeTJ2MWRzZ3Zm" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://m.me/NadineHomeBeauty" target="_blank" rel="noopener noreferrer" aria-label="Messenger">
                <MessageSquare size={18} />
              </a>
            </div>
          </motion.div>

          {/* Card 2: Operating Hours */}
          <motion.div 
            className="contact-card card-premium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="card-header-icon">
              <Clock size={20} />
            </div>
            <h3>Service Schedule</h3>
            <p className="card-desc">We operate every day to ensure you can look radiant for any event.</p>

            <div className="hours-block">
              {businessHours.map((h, i) => (
                <div key={i} className="hours-row">
                  <span className="hours-day">{h.day}</span>
                  <span className="hours-time">{h.hours}</span>
                </div>
              ))}
            </div>

            <div className="service-alert-box">
              <strong>Service Coverage Area</strong>
              <p>Serving all barangays of Dasmariñas City, Cavite (including Salawag, Langkaan, Paliparan, and Burol) without transport fees.</p>
            </div>
          </motion.div>
        </div>

        {/* Map Embed */}
        <motion.div 
          className="map-embed-container card-premium"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Real Google Maps interactive iframe for Dasmariñas Cavite */}
          <iframe 
            title="Nadine Home Beauty Service Coverage Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61845.5414848529!2d120.9161759556858!3d14.331206103632971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d43f11e3b2e7%3A0x6ec0c5c4e9be9db9!2sDasmari%C3%B1as%2C%20Cavite!5e0!3m2!1sen!2sph!4v1715012345678!5m2!1sen!2sph" 
            width="100%" 
            height="400" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        {/* FAQ Section */}
        <div className="faq-section">
          <div className="section-title">
            <span className="badge-gold">Queries</span>
            <h2>Frequently Asked Questions</h2>
            <p>Here are answers to the most common questions our clients ask.</p>
          </div>

          <div className="faq-list-wrapper">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .contact-view {
          background: var(--bg-gradient);
          padding-top: calc(var(--header-height) + 40px);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-bottom: 50px;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        .contact-card {
          padding: 36px;
        }

        .card-header-icon {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-full);
          background: rgba(183, 110, 121, 0.08);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .contact-card h3 {
          font-size: 22px;
          margin-bottom: 8px;
        }

        .card-desc {
          font-size: 13px;
          color: var(--text-muted);
          margin-bottom: 24px;
          font-weight: 300;
        }

        /* Info Row */
        .contact-info-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 24px;
        }

        .info-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 13px;
        }

        .info-icon {
          color: var(--accent);
          margin-top: 2px;
          flex-shrink: 0;
        }

        .info-row strong {
          display: block;
          color: var(--text-main);
          font-weight: 500;
          margin-bottom: 2px;
        }

        .info-row span {
          color: var(--text-muted);
        }

        /* Social Icons */
        .contact-social-row {
          display: flex;
          gap: 12px;
          border-top: 1px solid rgba(183, 110, 121, 0.1);
          padding-top: 20px;
        }

        .contact-social-row a {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-full);
          background: rgba(183, 110, 121, 0.05);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }

        .contact-social-row a:hover {
          background: var(--accent);
          color: #fff;
          transform: translateY(-2px);
        }

        /* Hours styling */
        .hours-block {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 28px;
        }

        .hours-row {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          padding-bottom: 10px;
          border-bottom: 1px dashed var(--border-color);
        }

        .hours-day {
          font-weight: 500;
          color: var(--text-main);
        }

        .hours-time {
          color: var(--accent);
          font-weight: 600;
        }

        .service-alert-box {
          background: rgba(183, 110, 121, 0.03);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 16px;
        }

        .service-alert-box strong {
          display: block;
          font-size: 12px;
          color: var(--accent);
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .service-alert-box p {
          font-size: 12px;
          color: var(--text-muted);
          line-height: 1.5;
        }

        /* Map Embed styling */
        .map-embed-container {
          overflow: hidden;
          width: 100%;
          border-radius: var(--radius-lg);
          margin-bottom: 60px;
        }

        .map-embed-container iframe {
          display: block;
        }

        /* FAQ accordion layout styling */
        .faq-section {
          margin-top: 40px;
        }

        .faq-list-wrapper {
          max-width: 800px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};
