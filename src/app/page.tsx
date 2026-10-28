import DestinationSection from "./components/Destinations/DestinationSection";
import FeaturesSection from "./components/hero/FeaturesSection";
import HeroSection from "./components/hero/HeroSection";
import ServicesSection from "./components/Services/ServicesSection";

export default function Home() {
  return (
    <div className="">
    <HeroSection />
    <FeaturesSection />
    <DestinationSection />
    <ServicesSection />
    </div>
  );
}
