import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="bg-background pb-20 sm:pb-24">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl bg-[#0b1b3a] px-6 py-16 text-center text-white sm:px-12 sm:py-20">
          <div className="pattern-grid absolute inset-0 opacity-20" />
          <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-amber-500/20 blur-3xl" />
          <div className="relative mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Готовы сесть за руль?
            </h2>
            <p className="text-lg text-blue-100/80">
              Забронируйте автомобиль прямо сейчас — подача за 15 минут в любую
              точку города.
            </p>
            <Button
              size="lg"
              className="bg-amber-500 text-[#0b1b3a] hover:bg-amber-400"
              render={<a href="#catalog" />}
            >
              Забронировать
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
