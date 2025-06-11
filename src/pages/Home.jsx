import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import RoutesSection from '../components/RoutesSection';
import AdvantagesSection from '../components/AdvantagesSection';
import GallerySection from '../components/GallerySection';
import ReviewsSection from '../components/ReviewsSection';
import PricesSection from '../components/PricesSection';
import BookingSection from '../components/BookingSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <RoutesSection />
      <AdvantagesSection />
      <GallerySection />
      <ReviewsSection />
      <WhyGoSection />
      <BookingSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
