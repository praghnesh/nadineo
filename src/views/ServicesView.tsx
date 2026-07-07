import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Tag, Calendar } from 'lucide-react';
import hairImage from '../assets/hair_service.png';

interface ServicesViewProps {
  setActiveTab: (tab: string) => void;
  setSelectedService: (service: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ setActiveTab, setSelectedService }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Hair', 'Face & Eyes', 'Makeup', 'Nails', 'Spa'];

  const services = [
    // HAIR
    {
      id: 'haircut',
      category: 'Hair',
      title: 'Signature Haircut & Style',
      description: 'Custom professional scissor cut, styled to match your face structure, finished with premium nourishing serum.',
      time: '45 mins',
      price: '₱400',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'haircolor',
      category: 'Hair',
      title: 'Luxury Hair Coloring',
      description: 'Full head coloring or highlights using ammonia-free, damage-protecting formulas. Includes blowout.',
      time: '120 mins',
      price: '₱1,500',
      image: hairImage,
    },
    {
      id: 'hairtreatment',
      category: 'Hair',
      title: 'Intense Hair Restoration Treatment',
      description: 'Deep repair conditioning for dry, colored, or damaged hair. Restores shine and softness.',
      time: '60 mins',
      price: '₱850',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'hairspa',
      category: 'Hair',
      title: 'Nourishing Hair Spa',
      description: 'Steam therapy, scalp massage, and organic cream bath treatment to stimulate hair follicles.',
      time: '60 mins',
      price: '₱750',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'keratin',
      category: 'Hair',
      title: 'Brazilian Keratin Blowout',
      description: 'Ultimate straightening and anti-frizz styling. Locks in hydration for up to 3 months.',
      time: '150 mins',
      price: '₱2,200',
      image: 'https://images.unsplash.com/photo-1595853035070-59a39fe84de3?auto=format&fit=crop&w=600&q=80',
    },

    // FACE & EYES
    {
      id: 'facial',
      category: 'Face & Eyes',
      title: 'Glass Skin Facial',
      description: 'Deep cleaning, light extraction, massage, and hydrating sheet mask for a luminous, glass-like skin finish.',
      time: '60 mins',
      price: '₱1,000',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'acnefacial',
      category: 'Face & Eyes',
      title: 'Acne Control Facial',
      description: 'High-frequency sterilization, soothing tea-tree extraction, and anti-inflammatory cool mask.',
      time: '75 mins',
      price: '₱1,200',
      image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'whiteningfacial',
      category: 'Face & Eyes',
      title: 'Premium Whitening Facial',
      description: 'Vitamin C infusion therapy, light peel, and bright-glow clay mask to fade spots and even skin tone.',
      time: '75 mins',
      price: '₱1,300',
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'eyebrow',
      category: 'Face & Eyes',
      title: 'Eyebrow Grooming & Threading',
      description: 'Precise shaping matching your natural arches. Finished with soothing organic aloe gel.',
      time: '15 mins',
      price: '₱150',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'eyelash',
      category: 'Face & Eyes',
      title: 'Premium Eyelash Extensions',
      description: 'Soft, lightweight silk lashes applied individually. Choose between Natural or Glam volume.',
      time: '90 mins',
      price: '₱900',
      image: 'https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'waxing',
      category: 'Face & Eyes',
      title: 'Underarm Waxing (Honey)',
      description: 'Gentle organic honey hair removal that leaves skin smooth and limits hair regrowth.',
      time: '20 mins',
      price: '₱350',
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80',
    },

    // MAKEUP
    {
      id: 'bridalmakeup',
      category: 'Makeup',
      title: 'Bridal Makeup & Styling',
      description: 'Complete high-definition makeup session including setting spray, falsies, and elegant bridal hair styling.',
      time: '150 mins',
      price: '₱4,500',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'partymakeup',
      category: 'Makeup',
      title: 'Glam Party / Event Makeup',
      description: 'Full glam makeup for birthdays, debuts, or weddings. Includes false lashes and custom hair styling.',
      time: '90 mins',
      price: '₱1,800',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'everydaymakeup',
      category: 'Makeup',
      title: 'Fresh Everyday Makeup',
      description: 'Soft, natural dewy makeup look for professional photo shoots, interviews, or casual functions.',
      time: '60 mins',
      price: '₱1,000',
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80',
    },

    // NAILS
    {
      id: 'manicure',
      category: 'Nails',
      title: 'Classic Spa Manicure',
      description: 'Nail shaping, cuticle grooming, moisturizing hand scrub massage, and premium polish finish.',
      time: '30 mins',
      price: '₱250',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'pedicure',
      category: 'Nails',
      title: 'Classic Spa Pedicure',
      description: 'Relaxing foot soak, dead skin filing, cuticle grooming, leg scrub massage, and classic polish.',
      time: '40 mins',
      price: '₱300',
      image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'gelpolish',
      category: 'Nails',
      title: 'Premium Gel Polish (Hands/Feet)',
      description: 'Long-lasting, scratch-resistant gel polish cured under UV. Retains shine for 3+ weeks.',
      time: '45 mins',
      price: '₱450',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'nailart',
      category: 'Nails',
      title: 'Custom Nail Art detailing',
      description: 'Hand-painted minimalist lines, florals, gold accents, or gems. Priced per set.',
      time: '60 mins',
      price: '₱600',
      image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=600&q=80',
    },

    // SPA
    {
      id: 'massage',
      category: 'Spa',
      title: 'Relaxing Swedish Massage',
      description: 'Full body Swedish massage using warm chamomile essential oils. Relieves muscle tension.',
      time: '60 mins',
      price: '₱700',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'homespa',
      category: 'Spa',
      title: 'Signature Home Spa Ritual',
      description: 'Combination of full body lavender oil massage, reflexology, and foot spa bath treatment.',
      time: '90 mins',
      price: '₱1,200',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const filteredServices = activeFilter === 'All'
    ? services
    : services.filter(s => s.category === activeFilter);

  const handleBook = (title: string) => {
    setSelectedService(title);
    setActiveTab('booking');
  };

  return (
    <div className="services-view section-padding">
      <div className="container">
        <div className="section-title">
          <span className="badge-gold">Pamper Menu</span>
          <h2>Our Beauty Services</h2>
          <p>Luxurious hair, skin, nail, and body treatments tailored to accentuate your unique natural radiance.</p>
        </div>

        {/* Categories filters */}
        <div className="filter-scroll-wrapper">
          <div className="filters-container">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`filter-tab-btn ${activeFilter === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Services grid */}
        <motion.div 
          className="services-catalog-grid"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="service-catalog-card card-premium"
              >
                <div className="card-img-frame">
                  <img src={service.image} alt={service.title} loading="lazy" />
                  <span className="card-cat-badge">{service.category}</span>
                </div>
                <div className="card-info-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  
                  <div className="card-meta-block">
                    <div className="meta-tag">
                      <Clock size={14} />
                      <span>{service.time}</span>
                    </div>
                    <div className="meta-price">
                      <Tag size={14} />
                      <span>{service.price}</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => handleBook(service.title)}
                    className="btn btn-primary card-booking-btn"
                  >
                    <Calendar size={14} className="btn-icon-left" />
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        .services-view {
          background: var(--bg-gradient);
          padding-top: calc(var(--header-height) + 40px);
        }

        /* Responsive horizontal scroll for filter tabs on mobile */
        .filter-scroll-wrapper {
          width: 100%;
          overflow-x: auto;
          margin-bottom: 40px;
          padding-bottom: 8px;
          display: flex;
          justify-content: center;
          scrollbar-width: none; /* Firefox */
        }
        
        .filter-scroll-wrapper::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }

        .filters-container {
          display: flex;
          gap: 12px;
          background: rgba(183, 110, 121, 0.04);
          border: 1px solid var(--border-color);
          padding: 6px;
          border-radius: var(--radius-full);
          white-space: nowrap;
        }

        @media (max-width: 768px) {
          .filter-scroll-wrapper {
            justify-content: flex-start;
          }
          .filters-container {
            padding: 4px;
            margin: 0 4px;
          }
        }

        .filter-tab-btn {
          background: transparent;
          border: none;
          padding: 8px 20px;
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: var(--text-muted);
          border-radius: var(--radius-full);
          cursor: pointer;
          transition: all var(--transition-normal);
        }

        .filter-tab-btn.active {
          background: var(--accent);
          color: var(--text-white);
          box-shadow: 0 4px 12px rgba(183, 110, 121, 0.2);
        }

        /* Services Catalog Grid */
        .services-catalog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
        }

        .service-catalog-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: var(--bg-card);
        }

        .card-img-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 4/3;
          overflow: hidden;
          background: #000;
        }

        .card-img-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .service-catalog-card:hover .card-img-frame img {
          transform: scale(1.04);
        }

        .card-cat-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background: var(--glass-bg);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid var(--glass-border);
          color: var(--accent);
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding: 3px 10px;
          border-radius: var(--radius-full);
        }

        .card-info-content {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .card-info-content h3 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 8px;
          color: var(--text-main);
        }

        .card-info-content p {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: 16px;
          font-weight: 300;
          flex-grow: 1;
        }

        .card-meta-block {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          padding-top: 12px;
          border-top: 1px solid rgba(183, 110, 121, 0.08);
        }

        .meta-tag, .meta-price {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: var(--text-muted);
          font-weight: 500;
        }

        .meta-price span {
          color: var(--accent);
          font-weight: 600;
          font-size: 15px;
        }

        .card-booking-btn {
          width: 100%;
          font-size: 13px;
          padding: 10px;
        }
      `}</style>
    </div>
  );
};
