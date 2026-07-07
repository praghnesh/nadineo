import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryItem {
  id: string;
  type: string;
  url: string;
  beforeUrl?: string; // Optional before image for comparison
  title: string;
  category: string;
  description: string;
}

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  items: GalleryItem[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  items,
  currentIndex,
  setCurrentIndex,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0-100)
  const [isDragging, setIsDragging] = useState(false);

  if (!isOpen || currentIndex < 0 || currentIndex >= items.length) return null;

  const currentItem = items[currentIndex];
  const isBeforeAfter = !!currentItem.beforeUrl;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSliderPosition(50);
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSliderPosition(50);
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  const handleMove = (clientX: number, containerRect: DOMRect) => {
    const x = clientX - containerRect.left;
    const percentage = Math.max(0, Math.min(100, (x / containerRect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isBeforeAfter) return;
    const container = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, container);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isBeforeAfter || (!isDragging && e.buttons !== 1)) return;
    const container = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, container);
  };

  return (
    <AnimatePresence>
      <div className="lightbox-backdrop">
        {/* Backdrop Overlay */}
        <motion.div
          className="lightbox-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Close Button */}
        <button className="lightbox-close" onClick={onClose} aria-label="Close Lightbox">
          <X size={24} />
        </button>

        {/* Navigation Controls */}
        <button className="nav-arrow prev" onClick={handlePrev} aria-label="Previous image">
          <ChevronLeft size={24} />
        </button>
        <button className="nav-arrow next" onClick={handleNext} aria-label="Next image">
          <ChevronRight size={24} />
        </button>

        {/* Main Content Area */}
        <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
          <div className="media-stage">
            {isBeforeAfter ? (
              /* Before/After Split Screen Comparison Slider */
              <div
                className="ba-slider-container"
                onTouchMove={handleTouchMove}
                onMouseMove={handleMouseMove}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
              >
                {/* AFTER image (base) */}
                <img
                  src={currentItem.url}
                  alt={`${currentItem.title} After`}
                  className="slider-img after-img"
                  draggable="false"
                />
                <span className="slider-badge after-label">After</span>

                {/* BEFORE image (clipped overlay) */}
                <div
                  className="before-wrapper"
                  style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
                >
                  <img
                    src={currentItem.beforeUrl}
                    alt={`${currentItem.title} Before`}
                    className="slider-img before-img"
                    draggable="false"
                  />
                  <span className="slider-badge before-label">Before</span>
                </div>

                {/* Drag Handle Bar */}
                <div
                  className="slider-bar-handle"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="slider-handle-center">
                    <Sparkles size={16} />
                  </div>
                </div>
              </div>
            ) : (
              /* Standard Single Image Viewer */
              <motion.img
                key={currentItem.url}
                src={currentItem.url}
                alt={currentItem.title}
                className="lightbox-main-img"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              />
            )}
          </div>

          {/* Info Details Section */}
          <div className="lightbox-info-overlay glass-effect">
            <span className="info-tag">{currentItem.category}</span>
            <h4 className="info-title">{currentItem.title}</h4>
            <p className="info-desc">{currentItem.description}</p>
          </div>
        </div>

        <style>{`
          .lightbox-backdrop {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 3000;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 24px;
          }

          .lightbox-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(26, 26, 26, 0.95);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
          }

          .lightbox-close {
            position: fixed;
            top: 24px;
            right: 24px;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: var(--text-white);
            width: 44px;
            height: 44px;
            border-radius: var(--radius-full);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 3020;
            transition: all var(--transition-fast);
          }

          .lightbox-close:hover {
            background: var(--accent);
            border-color: var(--accent);
            transform: scale(1.05);
          }

          .nav-arrow {
            position: fixed;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.15);
            color: var(--text-white);
            width: 50px;
            height: 50px;
            border-radius: var(--radius-full);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 3010;
            transition: all var(--transition-fast);
          }

          .nav-arrow:hover {
            background: var(--accent);
            border-color: var(--accent);
          }

          .nav-arrow.prev { left: 32px; }
          .nav-arrow.next { right: 32px; }

          @media (max-width: 768px) {
            .nav-arrow {
              top: auto;
              bottom: 40px;
              transform: none;
            }
            .nav-arrow.prev { left: calc(50% - 70px); }
            .nav-arrow.next { right: calc(50% - 70px); }
            .lightbox-close {
              top: 16px;
              right: 16px;
            }
          }

          .lightbox-container {
            position: relative;
            z-index: 3010;
            max-width: 800px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
          }

          .media-stage {
            width: 100%;
            aspect-ratio: 4/3;
            max-height: 60vh;
            border-radius: var(--radius-lg);
            overflow: hidden;
            background: #000;
            box-shadow: 0 20px 50px rgba(0,0,0,0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
          }

          .lightbox-main-img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
          }

          /* Before After Comparison CSS */
          .ba-slider-container {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
            cursor: ew-resize;
            user-select: none;
          }

          .slider-img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            pointer-events: none;
          }

          .before-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
          }

          .slider-badge {
            position: absolute;
            bottom: 16px;
            padding: 4px 10px;
            background: rgba(43, 43, 43, 0.7);
            color: #fff;
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-radius: var(--radius-sm);
            z-index: 5;
          }

          .before-label { left: 16px; }
          .after-label { right: 16px; }

          .slider-bar-handle {
            position: absolute;
            top: 0;
            bottom: 0;
            width: 2px;
            background: #fff;
            z-index: 10;
            pointer-events: none;
            transform: translateX(-50%);
          }

          .slider-handle-center {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 36px;
            height: 36px;
            border-radius: var(--radius-full);
            background: #fff;
            border: 2px solid var(--accent);
            color: var(--accent);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 10px rgba(0,0,0,0.25);
          }

          /* Bottom information banner */
          .lightbox-info-overlay {
            width: 100%;
            border-radius: var(--radius-md);
            padding: 20px;
            color: var(--text-white);
            border-color: rgba(255,255,255,0.1);
            background: rgba(255, 255, 255, 0.08);
          }

          .info-tag {
            display: inline-block;
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            color: var(--primary);
            font-weight: 600;
            margin-bottom: 6px;
          }

          .info-title {
            color: #fff;
            font-size: 18px;
            margin-bottom: 6px;
          }

          .info-desc {
            color: rgba(255, 255, 255, 0.7);
            font-size: 13px;
          }
        `}</style>
      </div>
    </AnimatePresence>
  );
};
