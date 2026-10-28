import DestinationSection from "./components/Destinations/DestinationSection";
import DigitalPlatformSection from "./components/DigitalPlatform/DigitalPlatformSection";
import FeaturesSection from "./components/hero/FeaturesSection";
import HeroSection from "./components/hero/HeroSection";
import LanguageAcademySection from "./components/LanguageAcademy/LanguageAcademySection";
import UniversityMarqueeSection from "./components/Patners/UniversityMarqueeSection";
import ServicesSection from "./components/Services/ServicesSection";

export default function Home() {
  return (
    <div className="">
    <HeroSection />
    <FeaturesSection />
    <UniversityMarqueeSection />
    <DestinationSection />
    <ServicesSection />
    <LanguageAcademySection />
    <DigitalPlatformSection />
    <UniversityMarqueeSection />
    </div>
  );
}
