import { FaMountain, FaLeaf, FaSmileBeam, FaMapMarkedAlt } from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';

export default function AdvantagesSection() {
  const advantages = [
    {
      icon: <FaMountain className="text-4xl text-rose-500 mb-4" />,
      title: 'Горы и воздух вместо пробок',
      text: 'Джипинг в Сочи — это свежий воздух, Кавказские вершины, лесные тропы и звуки природы. Всё, чего так не хватает в городе.',
    },
    {
      icon: <FaLeaf className="text-4xl text-green-500 mb-4" />,
      title: 'Живой отдых в стиле “экотур”',
      text: 'Водопады, чайные плантации, родники — никакой суеты. Только ты и настоящая природа Сочи.',
    },
    {
      icon: <FaSmileBeam className="text-4xl text-yellow-500 mb-4" />,
      title: 'Эмоции, которые останутся с тобой',
      text: 'Этот день — не про фото в Инстаграм, а про восторг, смех, всплеск энергии и ощущение “я живу”.',
    },
    {
      icon: <FaMapMarkedAlt className="text-4xl text-blue-500 mb-4" />,
      title: 'Легендарные маршруты без толпы',
      text: 'Скрытые локации, куда не доезжает обычный транспорт. Мы покажем Сочи, которого нет в путеводителях.',
    },
  ];

  return (
    <AnimatedSection className="py-24 px-4 sm:px-6 bg-gradient-to-b from-[#fefcf9] to-white">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Почему выбирают наш джип-тур в Сочи</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Это не просто экскурсия — это вдохновение, свобода и настоящие открытия.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {advantages.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-100 rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
          >
            {item.icon}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
