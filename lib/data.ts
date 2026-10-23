export type CarClass = "эконом" | "комфорт" | "бизнес";

export type Car = {
  name: string;
  className: CarClass;
  pricePerDay: number;
  description: string;
};

export const popularCars: Car[] = [
  {
    name: "Kia Rio",
    className: "эконом",
    pricePerDay: 1900,
    description: "Компактный и экономичный автомобиль для города.",
  },
  {
    name: "Hyundai Creta",
    className: "комфорт",
    pricePerDay: 2900,
    description: "Просторный кроссовер для города и загородных поездок.",
  },
  {
    name: "Toyota Camry",
    className: "бизнес",
    pricePerDay: 4200,
    description: "Представительский седан для деловых поездок.",
  },
  {
    name: "BMW 5 Series",
    className: "бизнес",
    pricePerDay: 5900,
    description: "Премиальный седан с характером и комфортом.",
  },
];

export const advantages = [
  {
    title: "Страховка включена",
    description:
      "Каждый автомобиль застрахован — вы в безопасности на всём маршруте.",
  },
  {
    title: "Подача за 15 минут",
    description: "Привезём автомобиль в любую точку города в течение 15 минут.",
  },
  {
    title: "Прозрачные цены",
    description:
      "Никаких скрытых платежей: финальная стоимость известна до бронирования.",
  },
];
