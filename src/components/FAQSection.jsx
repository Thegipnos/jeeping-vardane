// src/components/FAQSection.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AnimatedSection from './AnimatedSection';

// ----------  FAQ  ----------
const faqs = [
  {
    question: 'Что взять с собой?',
    answer:
      'Удобную обувь с цепкой подошвой, ветровку, купальник/полотенце, бутылку воды и заряженный телефон.',
  },
  {
    question: 'Безопасно ли это?',
    answer:
      'Да. Маршрут проверен, водители — профи с опытом 5+ лет, техника регулярно проходит ТО.',
  },
  {
    question: 'Смогу ли я купаться в водопадах?',
    answer:
      'Да, мы делаем остановку возле чаш, где глубина и течение безопасны. По желанию можно окунуться.',
  },
  {
    question: 'Подходит ли тур детям?',
    answer:
      'Да, минимальный возраст — 4 года. В джипе есть детское кресло, а маршрут проходит без опасных троп.',
  },
  {
    question: 'Сколько времени занимает тур?',
    answer:
      'Полный тур — 6–7 часов «от двери до двери»: дорога, дегустации, прогулка и обратный трансфер.',
  },
  {
    question: 'Нужна ли предварительная бронь?',
    answer:
      'Да. Летом мы выходим почти ежедневно, но чтобы гарантировать место, лучше бронировать за 2–3 дня.',
  },
  {
    question: 'Какая погода подходит для поездки?',
    answer:
      'Мы ездим при любой погоде, кроме штормового предупреждения. Лёгкий дождь даже делает водопады зрелищнее.',
  },
  {
    question: 'Можно ли заказать индивидуальный тур?',
    answer:
      'Да — подберём время старта, сделаем больше остановок для фото и организуем пикник по вашему запросу.',
  },
  {
    question: 'Есть ли Wi-Fi или связь в горах?',
    answer:
      'Мобильная связь ловит 70 % маршрута. Wi-Fi нет — это шанс сделать цифровой детокс 😊.',
  },
  {
    question: 'Как оплатить тур?',
    answer:
      'Наличными, картой или по СБП после подтверждения даты. Предоплата 20 % — остальное на старте.',
  },
];

// ----------  FAQPage Schema  ----------
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

export default function FAQSection() {
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <HelmetProvider>
      <AnimatedSection className="py-20 px-6 bg-gray-50" id="faq">
        {/* SEO-скрипт */}
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        </Helmet>

        {/* Заголовок */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Часто задаваемые вопросы</h2>

          {/* Аккордеон */}
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-5 shadow hover:shadow-md transition"
              >
                <button
                  onClick={() => toggle(i)}
                  className="flex justify-between items-center w-full text-left font-medium text-gray-800"
                >
                  <span>{faq.question}</span>
                  <FaChevronDown
                    className={`ml-4 transition-transform ${
                      open === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-gray-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </HelmetProvider>
  );
}
