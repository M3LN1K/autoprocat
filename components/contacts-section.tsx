import { MapPin, Phone, Mail, Clock3, Map } from "lucide-react";
import { companyContacts } from "@/lib/data";
import { ContactForm } from "@/components/contact-form";

const contactCards = [
  {
    icon: MapPin,
    title: "Адрес",
    value: companyContacts.address,
    href: null,
  },
  {
    icon: Phone,
    title: "Телефон",
    value: companyContacts.phone,
    href: companyContacts.phoneHref,
  },
  {
    icon: Mail,
    title: "Email",
    value: companyContacts.email,
    href: companyContacts.emailHref,
  },
] as const;

export function ContactsSection() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <p className="text-sm font-semibold tracking-widest text-amber-600 uppercase">
            Свяжитесь с нами
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Контакты
          </h1>
          <p className="text-lg text-muted-foreground">
            Позвоните, напишите или приезжайте в офис — мы подберём автомобиль
            под вашу задачу и ответим на все вопросы.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="card-hover flex flex-col gap-3 rounded-xl bg-card p-6 ring-1 ring-foreground/10"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/15 text-amber-600">
                  <Icon className="h-6 w-6" />
                </span>
                <h2 className="text-sm font-semibold tracking-widest uppercase">
                  {card.title}
                </h2>
                {card.href ? (
                  <a
                    href={card.href}
                    className="text-lg font-semibold tracking-tight break-words transition-colors hover:text-amber-600"
                  >
                    {card.value}
                  </a>
                ) : (
                  <p className="text-lg font-semibold tracking-tight break-words">
                    {card.value}
                  </p>
                )}
              </div>
            );
          })}

          <div className="card-hover flex flex-col gap-3 rounded-xl bg-card p-6 ring-1 ring-foreground/10">
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/15 text-amber-600">
              <Clock3 className="h-6 w-6" />
            </span>
            <h2 className="text-sm font-semibold tracking-widest uppercase">
              Часы работы
            </h2>
            <p className="text-lg font-semibold tracking-tight break-words">
              {companyContacts.hours}
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-4 rounded-xl bg-muted text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-600">
                <Map className="h-8 w-8" />
              </span>
              <div className="px-6">
                <p className="text-base font-semibold text-foreground">
                  Здесь будет интерактивная карта
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Карта проезда появится в ближайшем обновлении
                </p>
              </div>
            </div>
            <div className="rounded-xl bg-card p-6 ring-1 ring-foreground/10">
              <p className="text-sm font-semibold tracking-widest uppercase">
                Как нас найти
              </p>
              <p className="mt-2 text-muted-foreground">
                Мы находимся в центре города, в 5 минутах ходьбы от метро. Для
                клиентов доступна бесплатная парковка у офиса. Карта появится
                здесь в ближайшем обновлении.
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
