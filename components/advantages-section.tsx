import { ShieldCheck, Timer, BadgeCheck } from "lucide-react";
import { advantages } from "@/lib/data";

const icons = [ShieldCheck, Timer, BadgeCheck];

export function AdvantagesSection() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Почему выбирают нас
          </h2>
          <p className="text-lg text-muted-foreground">
            Аренда автомобиля без хлопот: забота о вас начинается с первого
            клика.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((advantage, index) => {
            const Icon = icons[index];
            return (
              <div
                key={advantage.title}
                className="card-hover rounded-xl bg-card p-8 ring-1 ring-foreground/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/15 text-amber-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">
                  {advantage.title}
                </h3>
                <p className="mt-3 text-muted-foreground">
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
