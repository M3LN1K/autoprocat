import {
  Clock3,
  Car,
  ShieldCheck,
  CalendarDays,
  UsersRound,
  BadgeCheck,
} from "lucide-react";
import { companyStats, companyStory } from "@/lib/data";
import { PhotoPlaceholder } from "@/components/photo-placeholder";

const storyIcons = [Clock3, Car, ShieldCheck];
const statIcons = [CalendarDays, Car, UsersRound];

export function AboutPageSection() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <p className="text-sm font-semibold tracking-widest text-amber-600 uppercase">
            О компании
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            О нас
          </h1>
          <p className="text-lg text-muted-foreground">
            Мы — автопрокат, который делает аренду автомобилей простой,
            прозрачной и предсказуемой каждый день.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {companyStory.map((block, index) => {
            const Icon = storyIcons[index];
            return (
              <div
                key={block.title}
                className="card-hover flex flex-col rounded-xl bg-card p-8 ring-1 ring-foreground/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/15 text-amber-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-6 text-xl font-semibold tracking-tight">
                  {block.title}
                </h2>
                {block.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-3 text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-2xl bg-[#0b1b3a] py-14 sm:py-16">
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <p className="text-sm font-semibold tracking-widest text-amber-400 uppercase">
              Компания в цифрах
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Цифры, которым можно доверять
            </h2>
          </div>
          <div className="mt-10 grid gap-6 text-center sm:grid-cols-3">
            {companyStats.map((stat, index) => {
              const Icon = statIcons[index];
              return (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/15 text-amber-400">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="mt-4 text-4xl font-bold tracking-tight text-amber-400 sm:text-5xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-lg font-semibold text-white">
                    {stat.label}
                  </span>
                  <span className="mt-1 text-sm text-blue-100/80">
                    {stat.description}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <PhotoPlaceholder label="команда" className="aspect-[4/3] w-full" />
          <div className="space-y-4">
            <p className="text-sm font-semibold tracking-widest text-amber-600 uppercase">
              Наша команда
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl">
              Люди, которые заботятся о вашей поездке
            </h2>
            <p className="text-lg text-muted-foreground">
              Фото пока нет, но мы уже готовы встретить вас: менеджеры по
              подбору авто, механики, которые проверяют каждую машину перед
              выдачей, и водители, доставляющие автомобиль в любую точку города.
            </p>
            <ul className="mt-4 space-y-2">
              {companyStory.map((block) => (
                <li key={block.title} className="flex items-start gap-3">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                  <span className="text-muted-foreground">
                    {block.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
