import { HeroSection } from "@/components/hero-section";
import { AdvantagesSection } from "@/components/advantages-section";
import { PopularCarsSlider } from "@/components/popular-cars-slider";
import { AboutSection } from "@/components/about-section";
import { CtaSection } from "@/components/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AdvantagesSection />
      <PopularCarsSlider />
      <AboutSection />
      <CtaSection />
    </>
  );
}
