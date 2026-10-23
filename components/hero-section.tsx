import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PhotoPlaceholder } from "@/components/photo-placeholder";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-3.5rem)] items-center overflow-hidden bg-[#0b1b3a] text-white">
      <div className="pattern-grid absolute inset-0 opacity-20" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="container relative mx-auto grid items-center gap-12 px-4 py-16 lg:grid-cols-2 lg:py-24">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm font-semibold tracking-widest text-amber-400 uppercase">
              Аренда автомобилей
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Автомобиль, когда он нужен вам
            </h1>
            <p className="max-w-xl text-lg text-blue-100/80">
              Прокат автомобилей эконом, комфорт и бизнес-класса. Страховка
              включена, подача за 15 минут, прозрачные цены без сюрпризов.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              className="bg-amber-500 text-[#0b1b3a] hover:bg-amber-400"
              render={<a href="#catalog" />}
            >
              Забронировать
              <ArrowRight />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
              render={<a href="#about" />}
            >
              О компании
            </Button>
          </div>
        </div>
        <PhotoPlaceholder
          label="автомобиль"
          className="aspect-[4/3] w-full bg-white/10 text-blue-100/70"
        />
      </div>
    </section>
  );
}
