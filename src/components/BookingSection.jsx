import { useState } from 'react';
import { IMaskInput } from 'react-imask';
import AnimatedSection from './AnimatedSection';

export default function BookingSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');

  const today = new Date().toISOString().split('T')[0]; // формат YYYY-MM-DD

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `👋 Заявка на джипинг\n\nИмя: ${name}\nТелефон: ${phone}\nДата поездки: ${date}`;
    const url = `https://wa.me/79282426337?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <AnimatedSection className="py-20 px-6 bg-white">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Забронировать поездку</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 bg-gray-50 p-6 rounded-xl shadow-md text-left"
        >
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="name">Ваше имя</label>
            <input
              id="name"
              type="text"
              placeholder="Иван"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="phone">Телефон</label>
            <IMaskInput
              id="phone"
              mask="+7 (000) 000-00-00"
              lazy={false}
              unmask={true}
              value={phone}
              onAccept={(value) => setPhone(value)}
              placeholder="+7 (___) ___-__-__"
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="date">Дата поездки</label>
            <input
              id="date"
              type="date"
              min={today}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            />
          </div>

          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full transition shadow-lg"
          >
            Отправить заявку в WhatsApp
          </button>
        </form>
      </div>
    </AnimatedSection>
  );
}
