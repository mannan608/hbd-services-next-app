import AchieversVoices from "./components/home/achievers/AchieversVoices";
import CertificationAwardsSection from "./components/home/certification-awards/CertificationAwardsSection";
import DestinationSection from "./components/home/DestinationSection";
import DigitalPlatformSection from "./components/home/digital-platform/DigitalPlatformSection";
import ConsultationFormSection from "./components/forms/ConsultationFormSection";
import FeaturesSection from "./components/home/hero/FeaturesSection";
import HeroSection from "./components/home/hero/HeroSection";
import LanguageAcademySection from "./components/home/language-academy/LanguageAcademySection";
import UniversityMarqueeSection from "./components/patners/UniversityMarqueeSection";
import ReviewsSection from "./components/reviews/ReviewsSection";
import ServicesSection from "./components/home/services/ServicesSection";

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
      <ConsultationFormSection />
    </div>
  );
}
