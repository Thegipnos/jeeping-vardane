import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import RoutesSection from './components/RoutesSection';
import AdvantagesSection from './components/AdvantagesSection';
import GallerySection from './components/GallerySection';
import ReviewsSection from './components/ReviewsSection';
import WhyGoSection from './components/WhyGoSection';
import BookingSection from './components/BookingSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Джиппинг в Вардане — Премиум Туры на Джипах</title>
        <meta
          name="description"
          content="Незабываемые джип-туры по горам и водопадам Сочи и Вардане. Уникальные маршруты, живая природа и море эмоций. Бронируй тур прямо сейчас!"
        />
      </Helmet>

      <div className="font-sans scroll-smooth">
        <Navbar />
        <HeroSection />
        <section id="about"><AboutSection /></section>
        <section id="routes"><RoutesSection /></section>
        <AdvantagesSection />
        <section id="gallery"><GallerySection /></section>
        <ReviewsSection />
        <WhyGoSection />
        <section id="booking"><BookingSection /></section>
        <FAQSection />
        <section id="contacts"><ContactSection /></section>
      </div>
    </>
  );
}
