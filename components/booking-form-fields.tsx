"use client";

import { useState } from "react";
import { toast } from "sonner";
import { CalendarCheck, Loader2, CircleCheck } from "lucide-react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const bookingFormSchema = z.object({
  name: z
    .string()
    .min(1, "Укажите ваше имя")
    .max(60, "Имя не должно быть длиннее 60 символов"),
  phone: z
    .string()
    .min(1, "Укажите телефон")
    .regex(/^\+?[\d\s()-]{10,20}$/, "Введите корректный номер телефона"),
  car: z.string().min(1, "Укажите автомобиль"),
  pickUpDate: z.string().min(1, "Укажите дату начала аренды"),
  dropOffDate: z.string().min(1, "Укажите дату окончания аренды"),
  comment: z
    .string()
    .max(1000, "Комментарий не должен быть длиннее 1000 символов")
    .optional()
    .or(z.literal("")),
});

type BookingFormValues = z.infer<typeof bookingFormSchema>;
type FieldName = keyof BookingFormValues;

const emptyValues: BookingFormValues = {
  name: "",
  phone: "",
  car: "",
  pickUpDate: "",
  dropOffDate: "",
  comment: "",
};

export function BookingFormFields() {
  const [values, setValues] = useState<BookingFormValues>(emptyValues);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  function handleChange(field: FieldName, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = bookingFormSchema.safeParse(values);
    if (!result.success) {
      const nextErrors: Partial<Record<FieldName, string>> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as FieldName;
        if (field && !nextErrors[field]) {
          nextErrors[field] = issue.message;
        }
      }
      setErrors(nextErrors);
      toast.error("Проверьте форму", {
        description: "Заполните все поля корректно и попробуйте ещё раз.",
      });
      return;
    }
    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      setSent(true);
      toast.success("Заявка отправлена", {
        description:
          "Мы получили вашу заявку на бронирование и свяжемся с вами в ближайшее время.",
      });
    }, 800);
  }

  function handleReset() {
    setValues(emptyValues);
    setErrors({});
    setSent(false);
  }

  if (sent) {
    return (
      <div className="flex h-full flex-col items-start justify-center gap-4 rounded-xl bg-card p-8 text-card-foreground sm:p-10">
        <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/15 text-amber-600">
          <CircleCheck className="h-6 w-6" />
        </span>
        <h3 className="text-xl font-semibold tracking-tight">
          Заявка принята!
        </h3>
        <p className="text-muted-foreground">
          Спасибо за доверие. Менеджер свяжется с вами в течение 15 минут в
          рабочие часы, чтобы подтвердить бронирование.
        </p>
        <Button variant="outline" className="mt-2" onClick={handleReset}>
          Оставить ещё одну заявку
        </Button>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="booking-name" className="text-sm font-medium">
            Имя
          </label>
          <Input
            id="booking-name"
            placeholder="Как к вам обращаться"
            autoComplete="name"
            value={values.name}
            onChange={(event) => handleChange("name", event.target.value)}
            aria-invalid={!!errors.name}
          />
          {errors.name ? (
            <p className="text-sm text-destructive">{errors.name}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <label htmlFor="booking-phone" className="text-sm font-medium">
            Телефон
          </label>
          <Input
            id="booking-phone"
            type="tel"
            placeholder="+7 (___) ___-__-__"
            autoComplete="tel"
            value={values.phone}
            onChange={(event) => handleChange("phone", event.target.value)}
            aria-invalid={!!errors.phone}
          />
          {errors.phone ? (
            <p className="text-sm text-destructive">{errors.phone}</p>
          ) : null}
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="booking-car" className="text-sm font-medium">
          Автомобиль
        </label>
        <Input
          id="booking-car"
          placeholder="Например, Toyota Camry"
          autoComplete="off"
          value={values.car}
          onChange={(event) => handleChange("car", event.target.value)}
          aria-invalid={!!errors.car}
        />
        {errors.car ? (
          <p className="text-sm text-destructive">{errors.car}</p>
        ) : null}
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="booking-pickup" className="text-sm font-medium">
            Дата начала аренды
          </label>
          <Input
            id="booking-pickup"
            type="date"
            value={values.pickUpDate}
            onChange={(event) => handleChange("pickUpDate", event.target.value)}
            aria-invalid={!!errors.pickUpDate}
          />
          {errors.pickUpDate ? (
            <p className="text-sm text-destructive">{errors.pickUpDate}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <label htmlFor="booking-dropoff" className="text-sm font-medium">
            Дата окончания аренды
          </label>
          <Input
            id="booking-dropoff"
            type="date"
            value={values.dropOffDate}
            onChange={(event) =>
              handleChange("dropOffDate", event.target.value)
            }
            aria-invalid={!!errors.dropOffDate}
          />
          {errors.dropOffDate ? (
            <p className="text-sm text-destructive">{errors.dropOffDate}</p>
          ) : null}
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="booking-comment" className="text-sm font-medium">
          Комментарий
        </label>
        <Textarea
          id="booking-comment"
          rows={3}
          placeholder="Например, нужна подача к метро или детское кресло"
          value={values.comment}
          onChange={(event) => handleChange("comment", event.target.value)}
          aria-invalid={!!errors.comment}
        />
        {errors.comment ? (
          <p className="text-sm text-destructive">{errors.comment}</p>
        ) : null}
      </div>
      <Button
        type="submit"
        className="w-full gap-2 bg-amber-500 text-[#0b1b3a] hover:bg-amber-400"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <CalendarCheck className="h-4 w-4" />
        )}
        {isSubmitting ? "Отправляем…" : "Забронировать автомобиль"}
      </Button>
      <p className="text-sm text-muted-foreground">
        Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
      </p>
    </form>
  );
}
