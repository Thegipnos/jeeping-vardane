import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PlayCircle,
  XCircle,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const imageSlides = [
  { type: 'image', src: '/gallery/beach.jpg', alt: 'Закат на пляже' },
  { type: 'image', src: '/gallery/mountains.jpg', alt: 'Горы и лес' },
  { type: 'image', src: '/gallery/canyon.jpg', alt: 'Каньон' },
];

const videoSlides = [
  {
    type: 'video',
    src: '/gallery/videos/tour1.mp4',
    poster: '/gallery/poster1.jpg',
    alt: 'Поездка по горам',
  },
  {
    type: 'video',
    src: '/gallery/videos/tour2.mp4',
    poster: '/gallery/poster2.jpg',
    alt: 'Водопад и река',
  },
];


export default function GallerySection() {
  const [slides, setSlides] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openViewer = (items, index) => {
    setSlides(items);
    setSelectedIndex(index);
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % slides.length);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + slides.length) % slides.length);
    }
  };

  const handleClose = () => setSelectedIndex(null);

  useEffect(() => {
    const handleKey = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedIndex]);

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* Фото‑галерея */}
        <div>
          <header className="mb-10 text-center">
            <h2 className="text-4xl font-extrabold tracking-tight text-black dark:text-white">
              Фото‑галерея
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Кадры с наших лучших путешествий
            </p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {imageSlides.map((item, idx) => (
              <motion.div
                key={idx}
                className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={() => openViewer(imageSlides, idx)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  onError={(e) => (e.target.style.display = 'none')}
                  className="w-full h-60 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Видео‑галерея */}
        <div>
          <header className="mb-10 text-center">
            <h2 className="text-4xl font-extrabold tracking-tight text-black dark:text-white">
              Видео‑галерея
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Прокрутите самые яркие моменты в движении
            </p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {videoSlides.map((item, idx) => (
              <motion.div
                key={idx}
                className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={() => openViewer(videoSlides, idx)}
              >
                <img
                  src={item.poster}
                  alt={item.alt}
                  onError={(e) => (e.target.style.display = 'none')}
                  className="w-full h-60 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <PlayCircle className="w-12 h-12 text-white drop-shadow-lg" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Просмотрщик */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -100) handleNext();
                if (info.offset.x > 100) handlePrev();
              }}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[90vh] bg-black rounded-xl overflow-hidden shadow-2xl flex items-center justify-center"
            >
              {/* Закрыть */}
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 bg-white/80 text-black hover:text-yellow-500 rounded-full p-2 z-50 transition"
                aria-label="Закрыть"
              >
                <XCircle className="w-7 h-7" />
              </button>

              {/* Стрелки */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-black hover:text-yellow-500 bg-white/80 rounded-full p-2 z-40"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-black hover:text-yellow-500 bg-white/80 rounded-full p-2 z-40"
              >
                <ChevronRight className="w-7 h-7" />
              </button>

              {/* Контент */}
              {slides[selectedIndex].type === 'image' ? (
                <img
                  src={slides[selectedIndex].src}
                  alt={slides[selectedIndex].alt}
                  onError={(e) => (e.target.style.display = 'none')}
                  className="w-full h-full max-h-[90vh] object-contain"
                />
              ) : (
                <video
                  src={slides[selectedIndex].src}
                  poster={slides[selectedIndex].poster}
                  controls
                  autoPlay
                  onError={(e) => (e.target.style.display = 'none')}
                  className="w-full h-full max-h-[90vh] object-contain"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
