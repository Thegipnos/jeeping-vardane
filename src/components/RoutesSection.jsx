import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XCircle } from 'lucide-react';

// Локальные изображения — лежат в src/assets/routes/
import img1 from '../assets/routes/route1.jpg';
import img2 from '../assets/routes/route2.jpg';
import img3 from '../assets/routes/route3.jpg';
import img4 from '../assets/routes/route4.jpg';
import img5 from '../assets/routes/route5.jpg';
import img6 from '../assets/routes/route6.jpg';

const stages = [
  {
    title: '1. Выезд и путь к водопадам',
    description: 'Сбор группы, посадка в джипы, выезд по живописной дороге вдоль реки Шахе. По пути — остановка у тюльпанового дерева.',
    image: img1,
  },
  {
    title: '2. Дегустации у пасеки и сыроварни',
    description: 'Остановка на ферме: пробуем свежий мёд, сыр, чай и вино. Небольшой рынок с местными продуктами.',
    image: img2,
  },
  {
    title: '3. Поездка на чайную плантацию',
    description: 'После сыроварни отправляемся на одну из старейших чайных плантаций. Узнаем, как выращивают чай, и пробуем свежезаваренный сбор с видом на горы.',
    image: img3,
  },
  {
    title: '4. Прогулка к водопадам',
    description: 'Маршрут по оборудованным мостикам вдоль каскадов. Около 13 водопадов с возможностью купания в чашах.',
    image: img4,
  },
  {
    title: '5. Обед и кавказское застолье',
    description: 'Шашлык, домашняя форель, застолье с музыкой и танцами. По желанию — участие в шоу.',
    image: img5,
  },
  {
    title: '6. Возвращение и отдых',
    description: 'Обратная дорога с возможностью купить сувениры или чай. Вечером возвращаемся в Вардане — уставшие, но счастливые.',
    image: img6,
  },
];

export default function RoutesSection() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="routes" className="py-24 px-6 bg-gradient-to-b from-[#fdfaf6] to-[#fff]">
<div className="max-w-[1000px] w-full mx-auto px-4 sm:px-6">
        <h2 className="text-center text-4xl font-bold text-gray-900 mb-4">
  Программа нашего тура
</h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-4">
          Премиальное приключение: от ароматного чая до горных купален
        </p>
      </div>

      <div className="space-y-16">
        {stages.map((stage, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 60, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.1 }}
            className={`flex flex-col md:flex-row ${
              idx % 2 === 1 ? 'md:flex-row-reverse' : ''
            } items-center gap-10 bg-white/70 rounded-3xl shadow-lg p-6 md:p-10`}
          >
            {/* Обёртка изображения с overflow-hidden */}
            <div className="relative group md:w-1/2 w-full cursor-pointer overflow-hidden rounded-2xl shadow-md">
              <img
                src={stage.image}
                alt={stage.title}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                onClick={() => setSelectedImage(stage.image)}
              />
            </div>

            {/* Текст */}
            <div className="md:w-1/2 text-left">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">{stage.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{stage.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Модальное окно */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage} alt="Просмотр" className="w-full rounded-xl shadow-xl" />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 text-white hover:text-red-400 transition"
              >
                <XCircle size={38} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
