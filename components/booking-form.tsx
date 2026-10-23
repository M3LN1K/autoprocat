import { BookingFormFields } from "@/components/booking-form-fields";
import { CalendarDays, ShieldCheck } from "lucide-react";

export function BookingForm() {
  return (
    <div className="overflow-hidden rounded-2xl bg-[#0b1b3a] text-white">
      <div className="grid items-stretch lg:grid-cols-5">
        <div className="relative flex flex-col justify-center gap-4 p-8 sm:p-10 lg:col-span-2">
          <div className="pattern-grid absolute inset-0 opacity-20" />
          <div className="absolute -top-24 -left-16 h-64 w-64 rounded-full bg-amber-500/20 blur-3xl" />
          <div className="relative space-y-4">
            <p className="text-sm font-semibold tracking-widest text-amber-400 uppercase">
              Бронирование
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl">
              Забронируйте автомобиль онлайн
            </h2>
            <p className="text-lg text-blue-100/80">
              Оставьте заявку — менеджер свяжется с вами в течение 15 минут в
              рабочие часы, уточнит детали и закрепит автомобиль за вами.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 shrink-0 text-amber-400" />
                <span className="text-blue-100/80">
                  Страховка включена в стоимость
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CalendarDays className="h-5 w-5 shrink-0 text-amber-400" />
                <span className="text-blue-100/80">
                  Бронирование бесплатно и ни к чему не обязывает
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-[#0b1b3a] p-8 sm:p-10 lg:col-span-3">
          <BookingFormFields />
        </div>
      </div>
    </div>
  );
}
