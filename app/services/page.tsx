import type { Metadata } from "next";
import { ServicesSection } from "@/components/services-section";

export const metadata: Metadata = {
  title: "Услуги проката | АвтоПрокат",
  description:
    "Услуги автопроката: прокат на сутки, аренда на свадьбу, корпоративный парк и аренда с водителем. Страховка включена, подача за 15 минут.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesSection />
    </>
  );
}
