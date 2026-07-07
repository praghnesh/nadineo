import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, ArrowRight, ShieldCheck, Heart, Award, Star } from 'lucide-react';
import heroImage from '../assets/hero_salon.png';
import hairImage from '../assets/hair_service.png';

interface HomeViewProps {
  setActiveTab: (tab: string) => void;
  setSelectedService?: (service: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ setActiveTab, setSelectedService }) => {
  const whyChooseItems = [
    {
      icon: Award,
      title: '5+ Years Professional Experience',
      desc: 'Expert salon stylists and beauty specialists delivering exceptional results.',
    },
    {
      icon: ShieldCheck,
      title: 'Clean & Sanitized Equipment',
      desc: 'Sterilized tools and strict hygiene standards for your safety and peace of mind.',
    },
    {
      icon: Heart,
      title: 'Premium Safe Products',
      desc: 'We only use top-shelf, dermatologist-approved beauty brands and skin-safe cosmetics.',
    },
  ];

  const featuredServices = [
    {
      title: 'Luxury Hair Styling',
      price: '₱750',
      time: '60 mins',
      image: hairImage,
      category: 'Hair',
    },
    {
      title: 'Glass Skin Facial',
      price: '₱1,200',
      time: '75 mins',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80',
      category: 'Facial',
    },
    {
      title: 'Gel Nails & Art Combo',
      price: '₱650',
      time: '45 mins',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=600&q=80',
      category: 'Nails',
    },
  ];

  const testimonials = [
    {
      name: 'Maria Santos',
      rating: 5,
      date: '2 weeks ago',
      text: 'Nadine is amazing! Having a full hair treatment and pedicure done at home is the ultimate luxury. She is so clean, professional, and punctual. Highly recommended in Dasmariñas!',
    },
    {
      name: 'Jennifer Cruz',
      rating: 5,
      date: '1 month ago',
      text: 'I booked her for party makeup and hair coloring. My friends couldn\'t stop asking where I got my hair done! Extremely satisfied with her clean equipment and friendly attitude.',
    },
    {
      name: 'Kristine Gomez',
      rating: 5,
      date: '3 weeks ago',
      text: 'Hands down the best facial and massage in Cavite. Cozy salon vibes right in my own bedroom. The products she uses smell so premium and didn\'t cause any breakouts.',
    },
  ];

  const handleBookService = (serviceName: string) => {
    if (setSelectedService) {
      setSelectedService(serviceName);
    }
    setActiveTab('booking');
  };

  return (
    <div className="home-view">
      {/* 1. LUXURY HERO SECTION */}
      <section className="hero-section">
        <div className="hero-bg-overlay" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="gradient-overlay"></div>
        </div>
        
        <div className="container hero-content-container">
          <motion.div 
            className="hero-text-block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-badge">
              <Sparkles size={14} className="badge-sparkle" />
              <span>Professional Home Salon</span>
            </div>
            <h1>Nadine Home <br /><span className="accent-text">Beauty Services</span></h1>
            <p className="hero-subtitle">
              Professional salon-quality beauty services delivered straight to your doorstep in Dasmariñas City, Cavite. Pamper yourself in the comfort of your own home.
            </p>
            
            <div className="hero-actions">
              <button 
                className="btn btn-primary"
                onClick={() => setActiveTab('booking')}
              >
                <Calendar size={16} className="btn-icon-left" />
                Book Appointment
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => setActiveTab('services')}
              >
                Our Services
                <ArrowRight size={16} className="btn-icon-right" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. WHY CHOOSE NADINE */}
      <section className="why-choose-section section-padding">
        <div className="container">
          <div className="section-title">
            <span className="badge-gold">Our Philosophy</span>
            <h2>Why Choose Nadine</h2>
            <p>We redefine home salon service by bringing unmatched luxury, safety, and certified expertise to you.</p>
          </div>

          <div className="why-choose-grid">
            {whyChooseItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={idx}
                  className="why-choose-card card-premium"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="why-icon-bg">
                    <Icon size={24} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES */}
      <section className="featured-services-section section-padding">
        <div className="container">
          <div className="section-title">
            <span className="badge-gold">Popular Services</span>
            <h2>Featured Pampering</h2>
            <p>A selection of our most requested treatments. Pamper yourself today.</p>
          </div>

          <div className="services-showcase-grid">
            {featuredServices.map((service, idx) => (
              <motion.div 
                key={idx}
                className="service-feature-card card-premium"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="service-img-wrapper">
                  <img src={service.image} alt={service.title} />
                  <span className="service-category-badge">{service.category}</span>
                </div>
                <div className="service-info-body">
                  <h4>{service.title}</h4>
                  <div className="service-meta-row">
                    <span className="duration-tag">{service.time}</span>
                    <span className="price-tag">{service.price}</span>
                  </div>
                  <button 
                    className="btn btn-secondary card-action-btn"
                    onClick={() => handleBookService(service.title)}
                  >
                    Book This Service
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="center-action-row">
            <button 
              className="btn btn-secondary view-all-btn"
              onClick={() => setActiveTab('services')}
            >
              <span>View All Services</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 4. CUSTOMER REVIEWS (GOOGLE INTEGRATION STYLE) */}
      <section className="testimonials-section section-padding">
        <div className="container">
          <div className="section-title">
            <span className="badge-gold">Client Love</span>
            <h2>Customer Reviews</h2>
            <p>Read what our happy clients in Dasmariñas say about their experience.</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((review, idx) => (
              <motion.div 
                key={idx}
                className="testimonial-card card-premium"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="testimonial-header">
                  <div className="client-avatar">
                    {review.name.charAt(0)}
                  </div>
                  <div className="client-meta">
                    <h4>{review.name}</h4>
                    <span className="verified-badge">Verified Client</span>
                  </div>
                </div>
                <div className="stars-row">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="#B76E79" color="#B76E79" />
                  ))}
                  <span className="review-date">{review.date}</span>
                </div>
                <p className="review-text">"{review.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BOOK NOW CTA SECTION */}
      <section className="book-cta-section section-padding">
        <div className="container">
          <div className="cta-glass-card glass-effect">
            <div className="cta-content">
              <h3>Ready to Pamper Yourself?</h3>
              <p>Experience luxurious, relaxing salon treatments in the comfort and privacy of your home. Scheduling takes less than a minute.</p>
              <button 
                className="btn btn-primary cta-btn"
                onClick={() => setActiveTab('booking')}
              >
                <Calendar size={16} className="btn-icon-left" />
                Schedule Your Session
              </button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* Hero Section CSS */
        .hero-section {
          position: relative;
          height: 100vh;
          min-height: 650px;
          display: flex;
          align-items: center;
          color: var(--text-white);
          overflow: hidden;
          background: #000;
        }

        .hero-bg-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          transform: scale(1.05);
          animation: slowZoom 20s ease-out infinite alternate;
        }

        @keyframes slowZoom {
          0% { transform: scale(1.02); }
          100% { transform: scale(1.08); }
        }

        .gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to right, rgba(43, 43, 43, 0.85) 0%, rgba(43, 43, 43, 0.4) 60%, rgba(43, 43, 43, 0.7) 100%);
        }

        .hero-content-container {
          position: relative;
          z-index: 10;
        }

        .hero-text-block {
          max-width: 620px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          background: rgba(248, 215, 218, 0.15);
          border: 1px solid rgba(248, 215, 218, 0.3);
          border-radius: var(--radius-full);
          font-size: 12px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 24px;
          backdrop-filter: blur(4px);
        }

        .badge-sparkle {
          color: var(--primary);
        }

        .hero-text-block h1 {
          font-size: 56px;
          font-weight: 700;
          color: var(--text-white);
          margin-bottom: 20px;
          letter-spacing: 0.5px;
        }

        .accent-text {
          font-family: 'Playfair Display', serif;
          color: var(--primary);
          font-style: italic;
          font-weight: 400;
        }

        .hero-subtitle {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 36px;
          font-weight: 300;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn-icon-left {
          margin-right: 8px;
        }

        .btn-icon-right {
          margin-left: 8px;
          transition: transform var(--transition-fast);
        }

        .btn-secondary:hover .btn-icon-right {
          transform: translateX(4px);
        }

        @media (max-width: 768px) {
          .hero-section {
            height: 90vh;
            min-height: 520px;
          }
          .hero-text-block h1 {
            font-size: 38px;
          }
          .hero-subtitle {
            font-size: 14px;
            margin-bottom: 28px;
          }
          .hero-actions {
            flex-direction: column;
            gap: 12px;
            width: 100%;
          }
          .hero-actions .btn {
            width: 100%;
          }
        }

        /* Why Choose Section CSS */
        .why-choose-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
        }

        .why-choose-card {
          padding: 36px 28px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .why-icon-bg {
          width: 56px;
          height: 56px;
          border-radius: var(--radius-full);
          background: rgba(183, 110, 121, 0.08);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .why-choose-card h3 {
          font-size: 20px;
          margin-bottom: 12px;
          font-weight: 600;
        }

        .why-choose-card p {
          font-size: 14px;
          color: var(--text-muted);
        }

        /* Featured Services CSS */
        .services-showcase-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-bottom: 40px;
        }

        .service-feature-card {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .service-img-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 16/10;
          overflow: hidden;
        }

        .service-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .service-feature-card:hover .service-img-wrapper img {
          transform: scale(1.05);
        }

        .service-category-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          background: var(--glass-bg);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid var(--glass-border);
          color: var(--accent);
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding: 4px 12px;
          border-radius: var(--radius-full);
        }

        .service-info-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .service-info-body h4 {
          font-size: 20px;
          margin-bottom: 12px;
        }

        .service-meta-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .duration-tag {
          font-size: 13px;
          color: var(--text-light);
        }

        .price-tag {
          font-size: 18px;
          font-weight: 600;
          color: var(--accent);
        }

        .card-action-btn {
          width: 100%;
          font-size: 13px;
          padding: 10px;
        }

        .center-action-row {
          display: flex;
          justify-content: center;
          margin-top: 16px;
        }

        .view-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          padding: 12px 28px;
        }

        /* Testimonials Section CSS */
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
        }

        .testimonial-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .testimonial-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }

        .client-avatar {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-full);
          background: var(--primary);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 16px;
          border: 1px solid rgba(183, 110, 121, 0.2);
        }

        .client-meta h4 {
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 2px;
        }

        .verified-badge {
          font-size: 10px;
          color: var(--accent);
          font-weight: 500;
        }

        .stars-row {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-bottom: 12px;
        }

        .review-date {
          font-size: 11px;
          color: var(--text-light);
          margin-left: 8px;
        }

        .review-text {
          font-size: 13px;
          line-height: 1.6;
          color: var(--text-muted);
          font-style: italic;
        }

        /* Book CTA Section CSS */
        .cta-glass-card {
          border-radius: var(--radius-lg);
          padding: 60px 40px;
          text-align: center;
          box-shadow: var(--shadow-premium);
          border-color: rgba(183, 110, 121, 0.25);
          position: relative;
          overflow: hidden;
        }

        .cta-glass-card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(248, 215, 218, 0.25) 0%, transparent 70%);
          z-index: -1;
          pointer-events: none;
        }

        .cta-content {
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-content h3 {
          font-size: 32px;
          margin-bottom: 16px;
        }

        .cta-content p {
          font-size: 15px;
          margin-bottom: 28px;
          color: var(--text-muted);
        }

        .cta-btn {
          font-size: 14px;
          padding: 12px 32px;
        }

        @media (max-width: 768px) {
          .cta-glass-card {
            padding: 40px 20px;
          }
          .cta-content h3 {
            font-size: 24px;
          }
          .cta-content p {
            font-size: 13px;
          }
          .cta-btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};
