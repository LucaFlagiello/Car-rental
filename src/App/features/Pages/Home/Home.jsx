import BannerSection from "../../Components/Banner Section/BannerSection";
import BookingSection from "../../Components/Booking Section/BookingSection";
import ButtonScrollToTop from "../../Components/ButtonScrollToTop/ButtonToTop";
import CarModelsSection from "../../Components/Car Models Section/CarModelsSection";
import ChooseSection from "../../Components/Choose Section/ChooseSection";
import DownloadSection from "../../Components/Download Section/DownloadSection";
import FaqSection from "../../Components/Faq Section/FaqSection";
import Footer from "../../Components/Footer/Footer";
import HeroSection from "../../Components/Hero Section/HeroSection";
import PlanTripSection from "../../Components/Plan Trip Section/PlanTripSection";
import TestimonialsSection from "../../Components/Testimonials Section/TestimonialsSection";
import '../../../../App.css'

const Home = () => {
  return (
    <div>
      <ButtonScrollToTop />
      <HeroSection />
      <BookingSection />
      <PlanTripSection />
      <CarModelsSection />
      <BannerSection />
      <ChooseSection />
      <TestimonialsSection />
      <FaqSection />
      <DownloadSection />
      <Footer />
    </div>
  )
}

export default Home;