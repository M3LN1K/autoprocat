import type { Metadata } from "next";
import { CatalogSection } from "@/components/catalog-section";

export const metadata: Metadata = {
  title: "Каталог автомобилей | АвтоПрокат",
  description:
    "Каталог автомобилей в аренду: эконом, комфорт и бизнес-класс. Прозрачные цены за сутки, страховка включена. Забронируйте автомобиль онлайн.",
};

export default function CatalogPage() {
  return (
    <>
      <CatalogSection />
    </>
  );
}
