"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CarImage } from "@/components/car-image";
import { popularCars } from "@/lib/data";

export function PopularCarsSlider() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-slide]");
    const step = card ? card.offsetWidth + 24 : 320;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section id="catalog" className="bg-muted/40 py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Популярные модели
            </h2>
            <p className="text-lg text-muted-foreground">
              Самые востребованные автомобили нашего парка — уже в наличии.
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              aria-label="Предыдущие модели"
              onClick={() => scrollBy(-1)}
            >
              <ChevronLeft />
            </Button>
            <Button
              variant="outline"
              size="icon"
              aria-label="Следующие модели"
              onClick={() => scrollBy(1)}
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
        <div
          ref={trackRef}
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 scroll-smooth"
        >
          {popularCars.map((car) => (
            <article
              key={car.name}
              data-slide
              className="card-hover w-[280px] shrink-0 snap-start rounded-xl bg-card p-4 ring-1 ring-foreground/10 sm:w-[320px]"
            >
              <CarImage
                src={car.image}
                alt={car.name}
                className="aspect-[4/3] w-full"
              />
              <div className="mt-5 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {car.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {car.description}
                  </p>
                </div>
                <Badge variant="secondary" className="shrink-0">
                  {car.className}
                </Badge>
              </div>
              <div className="mt-5 flex items-center justify-between gap-3">
                <p className="text-sm text-muted-foreground">
                  от{" "}
                  <span className="text-xl font-bold text-foreground">
                    {car.pricePerDay} ₽
                  </span>{" "}
                  / сутки
                </p>
                <Button size="sm" render={<a href="/catalog#booking" />}>
                  Забронировать
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
