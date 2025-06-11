import React from 'react';
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
  return (
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
  );
}
