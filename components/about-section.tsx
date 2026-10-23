import { CarImage } from "@/components/car-image";
import { teamPhoto } from "@/lib/data";

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-20 sm:py-24">
      <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
        <CarImage
          src={teamPhoto.image}
          alt={teamPhoto.alt}
          className="aspect-[4/3] w-full"
        />
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            О компании
          </h2>
          <p className="text-lg text-muted-foreground">
            Мы — команда автопроката, которая делает аренду автомобилей простой
            и предсказуемой. Наш парк — это проверенные автомобили эконом,
            комфорт и бизнес-класса, а каждая поездка застрахована.
          </p>
          <p className="text-lg text-muted-foreground">
            Подача за 15 минут, прозрачные цены и поддержка на всём маршруте —
            всё, чтобы вы просто сели за руль и поехали.
          </p>
        </div>
      </div>
    </section>
  );
}
