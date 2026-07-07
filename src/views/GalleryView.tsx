import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, RefreshCw } from 'lucide-react';
import hairImage from '../assets/hair_service.png';
import beauticianImage from '../assets/beautician.png';
import heroImage from '../assets/hero_salon.png';

interface GalleryItem {
  id: string;
  type: string;
  url: string;
  beforeUrl?: string;
  title: string;
  category: string;
  description: string;
}

interface GalleryViewProps {
  onOpenLightbox: (items: GalleryItem[], index: number) => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({ onOpenLightbox }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Treatments', 'Hair', 'Makeup & Nails', 'Before & After'];

  const galleryItems: GalleryItem[] = [
    {
      id: 'g1',
      type: 'standard',
      url: hairImage,
      title: 'Balayage Hair Styling & Blowout',
      category: 'Hair',
      description: 'Premium warm balayage blend styled with soft elegant waves.',
    },
    {
      id: 'g2',
      type: 'standard',
      url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80',
      title: 'Hydrating Face Skincare Session',
      category: 'Treatments',
      description: 'A customized collagen-infused mask giving our client a glass skin glow.',
    },
    {
      id: 'g3',
      type: 'before-after',
      url: hairImage, // AFTER
      beforeUrl: 'https://images.unsplash.com/photo-1595853035070-59a39fe84de3?auto=format&fit=crop&w=600&q=80', // BEFORE
      title: 'Dry to Silky Hair Restoration',
      category: 'Before & After',
      description: 'Intense keratin renewal therapy resolving frizzy ends and returning elasticity.',
    },
    {
      id: 'g4',
      type: 'standard',
      url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80',
      title: 'HD Bridal Makeup Styling',
      category: 'Makeup & Nails',
      description: 'Elegant, long-lasting wedding day makeup using clean brushes and premium sealants.',
    },
    {
      id: 'g5',
      type: 'standard',
      url: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=600&q=80',
      title: 'Rose Gold Metallic Gel Art',
      category: 'Makeup & Nails',
      description: 'Clean cuticle work styled with minimal gel overlays and rose gold striping.',
    },
    {
      id: 'g6',
      type: 'standard',
      url: beauticianImage,
      title: 'Nadine At-Home Work Setup',
      category: 'Treatments',
      description: 'Friendly, personalized consultation and setup inside our client\'s cozy living room.',
    },
    {
      id: 'g7',
      type: 'standard',
      url: heroImage,
      title: 'Sterilized Salon Tool Kit',
      category: 'Treatments',
      description: 'Top-shelf skin lotions, sanitizers, and luxury styling scissors prepared for appointment.',
    },
    {
      id: 'g8',
      type: 'before-after',
      url: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=600&q=80', // AFTER
      beforeUrl: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80', // BEFORE
      title: 'Deep Acne Treatment Cleanse',
      category: 'Before & After',
      description: 'Pore detoxifying extraction and calming tea-tree masks showing 1-hour redness reduction.',
    },
  ];

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => {
        if (activeFilter === 'Before & After') return item.type === 'before-after';
        return item.category === activeFilter;
      });

  const handleItemClick = (index: number) => {
    // Find absolute index in the galleryItems array to pass to the lightbox
    const selectedItem = filteredItems[index];
    const absoluteIndex = galleryItems.findIndex(item => item.id === selectedItem.id);
    onOpenLightbox(galleryItems, absoluteIndex);
  };

  return (
    <div className="gallery-view section-padding">
      <div className="container">
        <div className="section-title">
          <span className="badge-gold">Portfolio</span>
          <h2>Our Lookbook</h2>
          <p>Explore real results from our beauty sessions. Experience salon craftsmanship delivered home.</p>
        </div>

        {/* Gallery filters */}
        <div className="gallery-filters-scroll">
          <div className="gallery-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`g-filter-btn ${activeFilter === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Pinterest Masonry Grid */}
        <div className="pinterest-masonry-wrapper">
          <motion.div className="pinterest-grid" layout>
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="pinterest-item"
                  onClick={() => handleItemClick(index)}
                >
                  <div className="pin-card glass-effect">
                    <div className="pin-img-wrapper">
                      <img src={item.url} alt={item.title} loading="lazy" />
                      
                      {/* Interactive overlays */}
                      <div className="pin-overlay">
                        <div className="maximize-badge">
                          <Maximize2 size={16} />
                        </div>
                      </div>

                      {item.type === 'before-after' && (
                        <div className="before-after-pin-badge">
                          <RefreshCw size={12} className="rotate-icon" />
                          <span>Compare Slider</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="pin-footer">
                      <span className="pin-category">{item.category}</span>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <style>{`
        .gallery-view {
          background: var(--bg-gradient);
          padding-top: calc(var(--header-height) + 40px);
        }

        .gallery-filters-scroll {
          width: 100%;
          overflow-x: auto;
          margin-bottom: 36px;
          padding-bottom: 8px;
          display: flex;
          justify-content: center;
          scrollbar-width: none;
        }

        .gallery-filters-scroll::-webkit-scrollbar {
          display: none;
        }

        .gallery-filters {
          display: flex;
          gap: 12px;
          background: rgba(183, 110, 121, 0.04);
          border: 1px solid var(--border-color);
          padding: 6px;
          border-radius: var(--radius-full);
          white-space: nowrap;
        }

        @media (max-width: 768px) {
          .gallery-filters-scroll {
            justify-content: flex-start;
          }
          .gallery-filters {
            margin: 0 4px;
          }
        }

        .g-filter-btn {
          background: transparent;
          border: none;
          padding: 8px 18px;
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: var(--text-muted);
          border-radius: var(--radius-full);
          cursor: pointer;
          transition: all var(--transition-normal);
        }

        .g-filter-btn.active {
          background: var(--accent);
          color: var(--text-white);
          box-shadow: 0 4px 12px rgba(183, 110, 121, 0.2);
        }

        /* Pinterest Masonry Styling */
        .pinterest-masonry-wrapper {
          width: 100%;
        }

        .pinterest-grid {
          column-count: 3;
          column-gap: 20px;
          width: 100%;
        }

        @media (max-width: 992px) {
          .pinterest-grid {
            column-count: 2;
          }
        }

        @media (max-width: 600px) {
          .pinterest-grid {
            column-count: 1;
            column-gap: 0;
          }
        }

        .pinterest-item {
          break-inside: avoid;
          margin-bottom: 20px;
          cursor: pointer;
          width: 100%;
        }

        .pin-card {
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-subtle);
          transition: all var(--transition-normal);
          border-color: rgba(183, 110, 121, 0.1);
          background: var(--bg-card);
        }

        .pin-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-premium);
          border-color: rgba(183, 110, 121, 0.25);
        }

        .pin-img-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: #000;
        }

        .pin-img-wrapper img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .pin-card:hover .pin-img-wrapper img {
          transform: scale(1.03);
        }

        .pin-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(43, 43, 43, 0.2);
          opacity: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-normal);
        }

        .pin-card:hover .pin-overlay {
          opacity: 1;
        }

        .maximize-badge {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.9);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0,0,0,0.15);
          transform: scale(0.9);
          transition: all var(--transition-normal);
        }

        .pin-card:hover .maximize-badge {
          transform: scale(1);
        }

        .before-after-pin-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: var(--glass-bg);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid var(--glass-border);
          color: var(--accent);
          font-size: 10px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .rotate-icon {
          animation: spinIcon 10s linear infinite;
        }

        @keyframes spinIcon {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .pin-footer {
          padding: 16px;
        }

        .pin-category {
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--accent);
          font-weight: 600;
          display: block;
          margin-bottom: 4px;
        }

        .pin-footer h4 {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-main);
          margin-bottom: 6px;
        }

        .pin-footer p {
          font-size: 12px;
          color: var(--text-muted);
          line-height: 1.4;
          font-weight: 300;
        }
      `}</style>
    </div>
  );
};
