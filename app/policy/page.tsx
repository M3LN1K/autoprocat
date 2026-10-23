import type { Metadata } from "next";
import { PolicySection } from "@/components/policy-section";

export const metadata: Metadata = {
  title: "Политика | АвтоПрокат",
  description:
    "Политика конфиденциальности и условия аренды автомобилей АвтоПрокат: обработка данных, страховка, оплата, бронирование и ответственность.",
};

export default function PolicyPage() {
  return (
    <>
      <PolicySection />
    </>
  );
}
