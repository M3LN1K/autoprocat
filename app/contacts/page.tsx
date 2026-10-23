import type { Metadata } from "next";
import { ContactsSection } from "@/components/contacts-section";

export const metadata: Metadata = {
  title: "Контакты | АвтоПрокат",
  description:
    "Контакты автопроката «АвтоПрокат»: адрес в Москве, телефон, email, часы работы и форма обратной связи. Свяжитесь с нами для аренды автомобиля.",
};

export default function ContactsPage() {
  return <ContactsSection />;
}
