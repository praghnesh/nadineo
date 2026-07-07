import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Sparkles, Smile, Target, Eye, Award } from 'lucide-react';
import beauticianImage from '../assets/beautician.png';

interface AboutViewProps {
  setActiveTab: (tab: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ setActiveTab }) => {
  const brandValues = [
    {
      icon: ShieldCheck,
      title: 'Clean & Sanitized Equipment',
      desc: 'Hygiene is our highest priority. All tools are sterilized before and after every session, and disposable materials are used wherever applicable.',
    },
    {
      icon: Heart,
      title: 'Safe Beauty Products',
      desc: 'We use premium, gentle, and dermatologist-tested products from reputable international brands to protect and nurture your skin and hair.',
    },
    {
      icon: Smile,
      title: 'Friendly & Trusted Service',
      desc: 'Nadine is known for her warm, personalized approach. We listen to your preferences to create a custom look that accentuates your natural beauty.',
    },
    {
      icon: Sparkles,
      title: 'Professional Home Service',
      desc: 'Skip the traffic and salon queues. We bring the complete luxury salon experience, lighting, and equipment directly to your private space.',
    },
  ];

  return (
    <div className="about-view section-padding">
      <div className="container">
        {/* Main Bio Section */}
        <div className="bio-container">
          <motion.div 
            className="bio-image-wrapper"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="portrait-frame">
              <img src={beauticianImage} alt="Nadine - Professional Beautician" />
              <div className="experience-tag-bubble">
                <Award size={18} />
                <span>5+ Yrs Exp</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bio-text-block"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge-gold">Meet the Stylist</span>
            <h2>Nadine</h2>
            <p className="bio-lead">
              Professional Beautician & Founder of Nadine Home Beauty Services
            </p>
            <p className="bio-desc">
              Based in the heart of Dasmariñas City, Cavite, Nadine has dedicated her career to providing high-end salon treatments to clients who value comfort, privacy, and personal care. With over 5 years of hands-on experience in makeup artistry, advanced hair styling, and skincare treatments, Nadine brings professional craftsmanship directly to your living room.
            </p>
            <p className="bio-desc">
              "I believe that beauty treatments are not just about aesthetics; they are about self-care and confidence. By bringing salon-quality services to your home, I aim to provide a relaxing sanctuary where you can pause, recharge, and feel truly pampered without any stress."
            </p>
            
            <div className="signature-block">
              <div className="signature-text">Nadine</div>
              <span className="signature-title">Founder & Lead Stylist</span>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="mv-section-container">
          <motion.div 
            className="mv-card card-premium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mv-icon-bg">
              <Target size={24} />
            </div>
            <h3>Our Mission</h3>
            <p>
              To deliver premium, safe, and hygienic beauty salon services in the sanctuary of our clients' homes, ensuring ultimate comfort, personalized attention, and professional results that elevate self-confidence.
            </p>
          </motion.div>

          <motion.div 
            className="mv-card card-premium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="mv-icon-bg">
              <Eye size={24} />
            </div>
            <h3>Our Vision</h3>
            <p>
              To become the most trusted and preferred home-service beauty brand in Dasmariñas City and Cavite, recognized for our commitment to absolute hygiene, premium product quality, and friendly, personalized care.
            </p>
          </motion.div>
        </div>

        {/* Brand Core Values */}
        <div className="values-section">
          <div className="section-title">
            <span className="badge-gold">Our Standards</span>
            <h2>Our Core Values</h2>
            <p>Every session is performed under strict professional parameters to guarantee you look and feel your best.</p>
          </div>

          <div className="values-grid">
            {brandValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div 
                  key={idx}
                  className="value-card card-premium"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                >
                  <div className="val-icon-header">
                    <Icon size={20} className="val-icon" />
                    <h4>{val.title}</h4>
                  </div>
                  <p>{val.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Page Bottom */}
        <div className="about-cta-box">
          <button 
            className="btn btn-primary"
            onClick={() => setActiveTab('booking')}
          >
            Book Nadine Now
          </button>
        </div>
      </div>

      <style>{`
        .about-view {
          background: var(--bg-gradient);
          padding-top: calc(var(--header-height) + 40px);
        }

        /* Bio Container styling */
        .bio-container {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
          align-items: center;
          margin-bottom: 80px;
        }

        .bio-image-wrapper {
          display: flex;
          justify-content: center;
        }

        .portrait-frame {
          position: relative;
          width: 100%;
          max-width: 380px;
          aspect-ratio: 4/5;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-premium);
          border: 1px solid var(--border-color);
        }

        .portrait-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .experience-tag-bubble {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: var(--glass-bg);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid var(--glass-border);
          padding: 8px 16px;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          color: var(--accent);
          box-shadow: 0 4px 15px rgba(183, 110, 121, 0.15);
        }

        .bio-text-block h2 {
          font-size: 42px;
          margin-bottom: 6px;
        }

        .bio-lead {
          font-size: 16px;
          font-weight: 500;
          color: var(--accent);
          margin-bottom: 20px;
        }

        .bio-desc {
          font-size: 14px;
          color: var(--text-muted);
          margin-bottom: 16px;
          font-weight: 300;
        }

        .signature-block {
          margin-top: 32px;
          border-left: 2px solid var(--accent);
          padding-left: 16px;
        }

        .signature-text {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 26px;
          color: var(--accent);
          font-weight: 400;
          line-height: 1.2;
        }

        .signature-title {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--text-light);
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .bio-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .portrait-frame {
            max-width: 320px;
          }
          .bio-text-block h2 {
            font-size: 32px;
          }
        }

        /* Mission and Vision Grid */
        .mv-section-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-bottom: 80px;
        }

        .mv-card {
          padding: 40px 32px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .mv-icon-bg {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-full);
          background: rgba(183, 110, 121, 0.08);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .mv-card h3 {
          font-size: 22px;
          margin-bottom: 12px;
        }

        .mv-card p {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .mv-section-container {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        /* Core Values Grid */
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
        }

        .value-card {
          padding: 28px;
          height: 100%;
        }

        .val-icon-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .val-icon {
          color: var(--accent);
          flex-shrink: 0;
        }

        .value-card h4 {
          font-size: 16px;
          font-weight: 600;
          color: var(--text-main);
        }

        .value-card p {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .about-cta-box {
          display: flex;
          justify-content: center;
          margin-top: 60px;
        }

        .about-cta-box .btn {
          padding: 14px 44px;
        }

        @media (max-width: 768px) {
          .about-cta-box .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};
