import AchieversVoices from "./components/achievers/AchieversVoices";
import CertificationAwardsSection from "./components/certification-awards/CertificationAwardsSection";
import DestinationSection from "./components/destinations/DestinationSection";
import DigitalPlatformSection from "./components/digital-platform/DigitalPlatformSection";
import ConsultationForm from "./components/forms/ConsultationForm";
import FeaturesSection from "./components/hero/FeaturesSection";
import HeroSection from "./components/hero/HeroSection";
import LanguageAcademySection from "./components/language-academy/LanguageAcademySection";
import UniversityMarqueeSection from "./components/patners/UniversityMarqueeSection";
import ReviewsSection from "./components/reviews/ReviewsSection";
import ServicesSection from "./components/services/ServicesSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <FeaturesSection />
      <DestinationSection />
      <ServicesSection />
      <LanguageAcademySection />
      <DigitalPlatformSection />
      <UniversityMarqueeSection />
      <AchieversVoices />
      <CertificationAwardsSection />
      <ReviewsSection />
      <ConsultationForm />
    </div>
  );
}
