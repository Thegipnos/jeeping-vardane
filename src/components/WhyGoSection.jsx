import { motion } from 'framer-motion';
import { Mountain, UtensilsCrossed, Car } from 'lucide-react';

const reasons = [
  {
    icon: <Mountain className="w-10 h-10 text-yellow-500 mb-4" />,
    title: 'Пейзажи как на открытках',
    text: 'Горы, водопады и чайные плантации — всё как в лучших поездках, только ближе.',
  },
  {
    icon: <UtensilsCrossed className="w-10 h-10 text-yellow-500 mb-4" />,
    title: 'Аутентичные вкусы',
    text: 'Мёд, сыр, вино и шашлык от местных фермеров. Пробуем всё на месте.',
  },
  {
    icon: <Car className="w-10 h-10 text-yellow-500 mb-4" />,
    title: 'Комфортный драйв',
    text: 'Тест драйв без риска: море эмоций, но безопасно. Идеально даже с детьми.',
  },
];

export default function WhyGoSection() {
  return (
    <section className="py-20 px-6 bg-white" id="why">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">3 причины поехать с нами</h2>
        <p className="text-lg text-gray-600">Один день — чтобы почувствовать, как оживает лето</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reasons.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              {item.icon}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
