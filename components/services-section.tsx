import {
  CalendarDays,
  Gem,
  Building2,
  UserRound,
  ArrowRight,
} from "lucide-react";
import { services } from "@/lib/data";
import { Button } from "@/components/ui/button";

const icons = [CalendarDays, Gem, Building2, UserRound];

export function ServicesSection() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <p className="text-sm font-semibold tracking-widest text-amber-600 uppercase">
            Наши услуги
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Услуги проката
          </h1>
          <p className="text-lg text-muted-foreground">
            Подберём автомобиль под любую задачу — от поездки на сутки до
            обслуживания корпоративного парка.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <div
                key={service.title}
                className="card-hover flex flex-col rounded-xl bg-card p-8 ring-1 ring-foreground/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/15 text-amber-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-6 text-xl font-semibold tracking-tight">
                  {service.title}
                </h2>
                <p className="mt-3 flex-1 text-muted-foreground">
                  {service.description}
                </p>
                <Button
                  variant="link"
                  className="mt-6 w-fit justify-start gap-1 px-0 text-amber-600 hover:text-amber-700"
                >
                  Подробнее
                  <ArrowRight />
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
