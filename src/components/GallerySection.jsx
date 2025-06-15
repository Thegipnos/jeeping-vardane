import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react';

const imageSlides = [

    {
    src: 'https://res.cloudinary.com/dwvez3fyb/image/upload/f_auto,q_auto,w_1200/v1749983068/IMG_5602_fvbbh4.jpg',
    alt: 'IMG 5602',
  },
  {
    src: 'https://res.cloudinary.com/dwvez3fyb/image/upload/f_auto,q_auto,w_1200/v1749983068/IMG_5637_o28g4h.jpg',
    alt: 'IMG 5637',
  },

 
  
  {
    src: 'https://res.cloudinary.com/dwvez3fyb/image/upload/f_auto,q_auto,w_1200/v1749983063/IMG_5625_gjgo8s.jpg',
    alt: 'IMG 5625',
  },
  {
    src: 'https://res.cloudinary.com/dwvez3fyb/image/upload/f_auto,q_auto,w_1200/v1749983060/IMG_5634_jwwyrr.jpg',
    alt: 'IMG 5634',
  },
  {
    src: 'https://res.cloudinary.com/dwvez3fyb/image/upload/f_auto,q_auto,w_1200/v1749983059/IMG_5647_q1wvyl.jpg',
    alt: 'IMG 5647',
  },
  {
    src: 'https://res.cloudinary.com/dwvez3fyb/image/upload/f_auto,q_auto,w_1200/v1749983055/IMG_5529_j8izxq.jpg',
    alt: 'IMG 5529',
  },
  {
    src: 'https://res.cloudinary.com/dwvez3fyb/image/upload/f_auto,q_auto,w_1200/v1749983051/IMG_5601_swzv1c.jpg',
    alt: 'IMG 5601',
  },
  {
    src: 'https://res.cloudinary.com/dwvez3fyb/image/upload/f_auto,q_auto,w_1200/v1749983050/IMG_5615_uegtl5.jpg',
    alt: 'IMG 5615',
  },
  {
    src: 'https://res.cloudinary.com/dwvez3fyb/image/upload/f_auto,q_auto,w_1200/v1749983050/IMG_5584_fcfmgr.jpg',
    alt: 'IMG 5584',
  },
  {
    src: 'https://res.cloudinary.com/dwvez3fyb/image/upload/f_auto,q_auto,w_1200/v1749983043/IMG_5531_hawlfr.jpg',
    alt: 'IMG 5531',
  },
  {
    src: 'https://res.cloudinary.com/dwvez3fyb/image/upload/f_auto,q_auto,w_1200/v1749983040/IMG_5564_euxpxq.jpg',
    alt: 'IMG 5564',
  },
  {
    src: 'https://res.cloudinary.com/dwvez3fyb/image/upload/f_auto,q_auto,w_1200/v1749983038/IMG_5514_c3wwhl.jpg',
    alt: 'IMG 5514',
  },
  {
    src: 'https://res.cloudinary.com/dwvez3fyb/image/upload/f_auto,q_auto,w_1200/v1749983034/IMG_5537_i3u8hh.jpg',
    alt: 'IMG 5537',
  },
  {
    src: 'https://res.cloudinary.com/dwvez3fyb/image/upload/f_auto,q_auto,w_1200/v1749983030/IMG_5516_uwbxxa.jpg',
    alt: 'IMG 5516',
  },
   {
    src: 'https://res.cloudinary.com/dwvez3fyb/image/upload/f_auto,q_auto,w_1200/v1749983066/IMG_5672_nrdnkv.jpg',
    alt: 'IMG 5672',
  },
  {
    src: 'https://res.cloudinary.com/dwvez3fyb/image/upload/f_auto,q_auto,w_1200/v1749983063/IMG_5678_diypqv.jpg',
    alt: 'IMG 5678',
  },
];


const videoSlides = [
  {
    src: `${import.meta.env.BASE_URL}gallery/videos/tour1.mp4`,
    poster: `${import.meta.env.BASE_URL}gallery/poster1.jpg`,
    alt: 'Поездка по горам',
  },
  {
    src: `${import.meta.env.BASE_URL}gallery/videos/tour2.mp4`,
    poster: `${import.meta.env.BASE_URL}gallery/poster2.jpg`,
    alt: 'Водопад и река',
  },
];

function ImageCarousel({ slides }) {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((index + 1) % slides.length);
  const prev = () => setIndex((index - 1 + slides.length) % slides.length);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, info) => {
            if (info.offset.x < -100) next();
            if (info.offset.x > 100) prev();
          }}
          className="rounded-2xl overflow-hidden shadow-xl bg-black"
        >
          <img
            src={slides[index].src}
            alt={slides[index].alt}
            className="w-full aspect-video object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-yellow-400 hover:text-white text-black rounded-full p-2 shadow z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-yellow-400 hover:text-white text-black rounded-full p-2 shadow z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}

function VideoCarousel({ slides }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  const next = () => {
    setIndex((index + 1) % slides.length);
    setPlaying(false);
  };

  const prev = () => {
    setIndex((index - 1 + slides.length) % slides.length);
    setPlaying(false);
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={`${index}-${playing}`}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, info) => {
            if (info.offset.x < -100) next();
            if (info.offset.x > 100) prev();
          }}
          className="rounded-2xl overflow-hidden shadow-xl bg-black relative"
        >
          {!playing ? (
            <div
              className="relative cursor-pointer"
              onClick={() => setPlaying(true)}
            >
              <img
                src={slides[index].poster}
                alt={slides[index].alt}
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <PlayCircle className="w-16 h-16 text-white hover:text-yellow-400 transition" />
              </div>
            </div>
          ) : (
            <video
              src={slides[index].src}
              poster={slides[index].poster}
              controls
              autoPlay
              className="w-full aspect-video object-cover"
            />
          )}
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-yellow-400 hover:text-white text-black rounded-full p-2 shadow z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-yellow-400 hover:text-white text-black rounded-full p-2 shadow z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}

export default function GallerySection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-3xl mx-auto space-y-24">

        {/* Фото‑галерея */}
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-extrabold text-black dark:text-white">Фото‑галерея</h2>
          <p className="text-gray-600 dark:text-gray-400">Кадры с наших лучших путешествий</p>
          <ImageCarousel slides={imageSlides} />
        </div>

        {/* Видео‑галерея */}
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-extrabold text-black dark:text-white">Видео‑галерея</h2>
          <p className="text-gray-600 dark:text-gray-400">Посмотрите атмосферу вживую</p>
          <VideoCarousel slides={videoSlides} />
        </div>

      </div>
    </section>
  );
}
