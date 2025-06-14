import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full h-[100svh] overflow-hidden flex items-center justify-center text-white"
    >
      {/* Фон-картинка */}
      <img
  src={`${import.meta.env.BASE_URL}hero.jpg`}
  alt="Фон джипинга"
  className="absolute inset-0 w-full h-full object-cover object-[50%_70%] sm:object-center"
/>


      {/* Затемнение */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Контент */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-xl">
          Джипинг в Вардане, Лоо, Сочи
        </h1>

        <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-8 text-white/90 drop-shadow-md">
          Ощути свободу, драйв и красоту дикой природы в каждом маршруте
        </p>

        {/* Кнопка бронирования */}
        <motion.a
  href="#booking"
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
  className="inline-block px-7 py-3 rounded-xl text-base font-medium bg-white text-gray-900 border border-gray-300 hover:shadow-md hover:border-gray-400 transition-all duration-200"
>
  Забронировать поездку
</motion.a>



        {/* Номер телефона на новой строке */}
        <motion.a
          href="tel:+79282426337"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 block text-white text-lg font-medium"
        >
          📞 +7 928 242-63-37
        </motion.a>
      </motion.div>
    </section>
  );
}
