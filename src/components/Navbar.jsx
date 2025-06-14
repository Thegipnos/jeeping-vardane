import React, { useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const links = [
  { href: '#about', label: 'О нас' },
  { href: '#routes', label: 'Программа тура' },
  { href: '#gallery', label: 'Галерея' },
  { href: '#booking', label: 'Бронь' },
  { href: '#contacts', label: 'Контакты' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappNumber = '79876543210'; // замените на свой номер
  const whatsappMessage = 'Здравствуйте! Хочу записаться на джип-тур.';

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-extrabold text-gray-900 tracking-tight">
          🏔 Джипинг Вардане
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-800 text-sm font-medium hover:text-yellow-500 transition px-2 py-1 rounded hover:bg-yellow-100"
            >
              {link.label}
            </a>
          ))}

          <a
            href="tel:+79000000000"
            className="flex items-center gap-2 text-white bg-green-500 hover:bg-green-600 font-semibold text-sm px-3 py-1.5 rounded-full transition shadow-sm"
          >
            <Phone size={16} />
            Позвонить
          </a>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white bg-gradient-to-r from-green-400 to-green-600 hover:to-green-700 font-semibold text-sm px-3 py-1.5 rounded-full transition shadow-sm"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </nav>

        {/* Burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
  <div className="md:hidden bg-white/95 mx-3 mt-2 px-3 py-2 rounded-lg shadow-sm border border-gray-200 space-y-2 text-sm">
    {links.map(link => (
      <a
        key={link.href}
        href={link.href}
        onClick={() => setMenuOpen(false)}
        className="block text-gray-800 hover:text-yellow-500 transition"
      >
        {link.label}
      </a>
    ))}

    <a
      href="tel:+79000000000"
      className="block text-center bg-green-500 hover:bg-green-600 text-white font-semibold text-sm py-2 rounded-full transition"
    >
      📞 Позвонить
    </a>

    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block text-center bg-gradient-to-r from-green-400 to-green-600 hover:to-green-700 text-white font-semibold text-sm py-2 rounded-full transition"
    >
      💬 WhatsApp
    </a>
  </div>
)}



    </header>
  );
}
