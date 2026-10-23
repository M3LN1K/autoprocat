import type { Metadata } from "next";
import { AboutPageSection } from "@/components/about-page-section";

export const metadata: Metadata = {
  title: "О нас | АвтоПрокат",
  description:
    "АвтоПрокат — компания по аренде автомобилей с 8-летним опытом, парком 40+ машин и 12 000 довольных клиентов. Страховка и прозрачные цены в каждой поездке.",
};

export default function AboutPage() {
  return (
    <>
      <AboutPageSection />
    </>
  );
}
