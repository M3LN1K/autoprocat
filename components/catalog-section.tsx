import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CarImage } from "@/components/car-image";
import { BookingForm } from "@/components/booking-form";
import { catalogCars } from "@/lib/data";

export function CatalogSection() {
  return (
    <section className="bg-muted/40 py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <p className="text-sm font-semibold tracking-widest text-amber-600 uppercase">
            Наш автопарк
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Каталог автомобилей
          </h1>
          <p className="text-lg text-muted-foreground">
            Выберите автомобиль по классу и цене — эконом, комфорт или бизнес.
            Страховка включена в каждую поездку.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {catalogCars.map((car) => (
            <article
              key={car.name}
              className="card-hover flex flex-col rounded-xl bg-card p-4 ring-1 ring-foreground/10"
            >
              <CarImage
                src={car.image}
                alt={car.name}
                className="aspect-[4/3] w-full"
              />
              <div className="mt-5 flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold tracking-tight">
                    {car.name}
                  </h2>
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
                <Button
                  size="sm"
                  className="bg-amber-500 text-[#0b1b3a] hover:bg-amber-400"
                  render={<a href="#booking" />}
                >
                  Забронировать
                </Button>
              </div>
            </article>
          ))}
        </div>
        <div id="booking" className="mt-16 scroll-mt-24">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
