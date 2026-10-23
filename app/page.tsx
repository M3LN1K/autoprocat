import type { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";
import { AdvantagesSection } from "@/components/advantages-section";
import { PopularCarsSlider } from "@/components/popular-cars-slider";
import { AboutSection } from "@/components/about-section";
import { BookingSection } from "@/components/booking-section";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "АвтоПрокат — аренда автомобилей без залога | Главная",
  description:
    "АвтоПрокат — аренда и прокат автомобилей в Москве: эконом, комфорт и бизнес-класс. Страховка включена, подача за 15 минут, прозрачные цены за сутки.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AdvantagesSection />
      <PopularCarsSlider />
      <BookingSection />
      <AboutSection />
      <CtaSection />
    </>
  );
}
