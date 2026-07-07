import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

// Components
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { FloatingActions } from './components/FloatingActions';
import { Lightbox } from './components/Lightbox';
import { SuccessPopup } from './components/SuccessPopup';
import { Footer } from './components/Footer';

// Views
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ServicesView } from './views/ServicesView';
import { GalleryView } from './views/GalleryView';
import { BookingView } from './views/BookingView';
import { ContactView } from './views/ContactView';

interface GalleryItem {
  id: string;
  type: string;
  url: string;
  beforeUrl?: string;
  title: string;
  category: string;
  description: string;
}

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

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedService, setSelectedService] = useState<string>('');

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxItems, setLightboxItems] = useState<GalleryItem[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  // Success Popup State
  const [successOpen, setSuccessOpen] = useState(false);
  const [successData, setSuccessData] = useState<BookingDetails | null>(null);

  // Initial Loading Animation Screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to top when active tab changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const handleOpenLightbox = (items: GalleryItem[], index: number) => {
    setLightboxItems(items);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleBookingSubmit = (data: BookingDetails) => {
    setSuccessData(data);
    setSuccessOpen(true);
  };

  const renderView = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView setActiveTab={setActiveTab} setSelectedService={setSelectedService} />;
      case 'about':
        return <AboutView setActiveTab={setActiveTab} />;
      case 'services':
        return <ServicesView setActiveTab={setActiveTab} setSelectedService={setSelectedService} />;
      case 'gallery':
        return <GalleryView onOpenLightbox={handleOpenLightbox} />;
      case 'booking':
        return (
          <BookingView
            selectedService={selectedService}
            setSelectedService={setSelectedService}
            onSubmitSuccess={handleBookingSubmit}
          />
        );
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView setActiveTab={setActiveTab} setSelectedService={setSelectedService} />;
    }
  };

  return (
    <>
      {/* 1. PREMIUM LOGO LOADING ANIMATION SCREEN */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="loading-screen"
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <div className="loader-content">
              <motion.div
                className="loader-logo-ring"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles size={36} color="#B76E79" />
              </motion.div>
              <h2 className="loader-brand-name">Nadine</h2>
              <span className="loader-sub">Home Beauty Services</span>
              <div className="loading-bar-wrapper">
                <motion.div
                  className="loading-bar"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.2, ease: 'easeInOut' }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. CORE WEBSITE WRAPPER */}
      {!isLoading && (
        <div className="app-container">
          {/* Header (Top Nav) */}
          <Header activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Main Display Area */}
          <main className="main-display-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="tab-view-container"
              >
                {renderView()}
              </motion.div>
            </AnimatePresence>
          </main>

          {/* Footer */}
          <Footer setActiveTab={setActiveTab} />

          {/* Bottom Nav Bar (Mobile-only sticky bar) */}
          <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Floating Action Menu (Quick Call / Chat) */}
          <FloatingActions />

          {/* Lightbox Modal (Zoomed Gallery items & Before/After Slider) */}
          <Lightbox
            isOpen={lightboxOpen}
            onClose={() => setLightboxOpen(false)}
            items={lightboxItems}
            currentIndex={lightboxIndex}
            setCurrentIndex={setLightboxIndex}
          />

          {/* Success Booking Modal */}
          <SuccessPopup
            isOpen={successOpen}
            onClose={() => setSuccessOpen(false)}
            bookingData={successData}
          />
        </div>
      )}

      <style>{`
        /* Loader screen styling */
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #FFF8F5;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .loader-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .loader-logo-ring {
          width: 80px;
          height: 80px;
          border-radius: var(--radius-full);
          border: 1px dashed rgba(183, 110, 121, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .loader-brand-name {
          font-family: 'Playfair Display', serif;
          font-size: 32px;
          color: var(--text-main);
          font-weight: 700;
          letter-spacing: 1px;
          line-height: 1;
        }

        .loader-sub {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--accent);
          font-weight: 600;
          margin-top: 6px;
        }

        .loading-bar-wrapper {
          width: 120px;
          height: 2px;
          background: rgba(183, 110, 121, 0.1);
          margin-top: 24px;
          border-radius: var(--radius-full);
          overflow: hidden;
        }

        .loading-bar {
          height: 100%;
          background: var(--accent);
        }

        /* App Display Frame layout */
        .main-display-panel {
          flex-grow: 1;
          width: 100%;
        }

        .tab-view-container {
          width: 100%;
          min-height: 100%;
        }
      `}</style>
    </>
  );
}

export default App;
