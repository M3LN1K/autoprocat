import { BookingForm } from "@/components/booking-form";

export function BookingSection() {
  return (
    <section id="booking" className="scroll-mt-24 bg-background py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <BookingForm />
      </div>
    </section>
  );
}
