import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';

export default function ContactSection() {
  const contacts = [
    {
      icon: <FaPhoneAlt className="text-yellow-400 text-2xl mb-2" />,
      title: 'Позвонить',
      text: '+7 (928) 242-63-37',
      subtext: 'Звоните с 9:00 до 21:00',
      link: 'tel:+79282426337',
    },
    {
      icon: <FaMapMarkerAlt className="text-yellow-400 text-2xl mb-2" />,
      title: 'Наш адрес',
      text: 'Вардане, Сочи',
      subtext: 'Краснодарский край, Россия',
      link: 'https://yandex.ru/maps/?text=Вардане Сочи',
    },
    {
      icon: <FaWhatsapp className="text-yellow-400 text-2xl mb-2" />,
      title: 'WhatsApp',
      text: '+7 928 242-63-37',
      subtext: 'Напишите 24/7',
      link: 'https://wa.me/79282426337',
    },
  ];

  return (
    <AnimatedSection className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Контакты</h2>
        <p className="text-gray-600 mb-10">
          Свяжитесь с нами для бронирования, консультации или сотрудничества
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          {contacts.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target={item.link.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg hover:bg-yellow-50 transition-all duration-300 ring-1 ring-gray-100 hover:ring-yellow-300 cursor-pointer transform hover:scale-[1.02] block"
            >
              {item.icon}
              <p className="font-medium text-gray-800">{item.text}</p>
              <p className="text-sm text-gray-500 mt-1">{item.subtext}</p>
            </a>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
