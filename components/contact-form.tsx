"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Send, CircleCheck, Loader2 } from "lucide-react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, "Укажите ваше имя")
    .max(60, "Имя не должно быть длиннее 60 символов"),
  phone: z
    .string()
    .min(1, "Укажите телефон")
    .regex(/^\+?[\d\s()-]{10,20}$/, "Введите корректный номер телефона"),
  email: z.string().min(1, "Укажите email").email("Введите корректный email"),
  message: z
    .string()
    .min(10, "Сообщение должно содержать не менее 10 символов")
    .max(2000, "Сообщение не должно быть длиннее 2000 символов"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;
type FieldName = keyof ContactFormValues;

const emptyValues: ContactFormValues = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(emptyValues);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  function handleChange(field: FieldName, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = contactFormSchema.safeParse(values);
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
      toast.success("Сообщение отправлено", {
        description:
          "Мы получили вашу заявку и свяжемся с вами в ближайшее время.",
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
      <div className="flex flex-col items-start gap-4 rounded-xl bg-card p-8 py-12 ring-1 ring-foreground/10">
        <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/15 text-amber-600">
          <CircleCheck className="h-6 w-6" />
        </span>
        <h3 className="text-xl font-semibold tracking-tight">
          Спасибо за обращение!
        </h3>
        <p className="text-muted-foreground">
          Ваше сообщение принято. Мы ответим вам в ближайшее время — обычно в
          течение 15 минут в рабочие часы.
        </p>
        <Button variant="outline" className="mt-2" onClick={handleReset}>
          Отправить ещё одно сообщение
        </Button>
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-card p-8 ring-1 ring-foreground/10">
      <h3 className="text-xl font-semibold tracking-tight">Написать нам</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Заполните форму — мы свяжемся с вами для уточнения деталей.
      </p>
      <form className="mt-6 space-y-5" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="contact-name" className="text-sm font-medium">
              Имя
            </label>
            <Input
              id="contact-name"
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
            <label htmlFor="contact-phone" className="text-sm font-medium">
              Телефон
            </label>
            <Input
              id="contact-phone"
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
          <label htmlFor="contact-email" className="text-sm font-medium">
            Email
          </label>
          <Input
            id="contact-email"
            type="email"
            placeholder="you@example.ru"
            autoComplete="email"
            value={values.email}
            onChange={(event) => handleChange("email", event.target.value)}
            aria-invalid={!!errors.email}
          />
          {errors.email ? (
            <p className="text-sm text-destructive">{errors.email}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <label htmlFor="contact-message" className="text-sm font-medium">
            Сообщение
          </label>
          <Textarea
            id="contact-message"
            rows={5}
            placeholder="Расскажите, какой автомобиль и на какой срок вам нужен"
            value={values.message}
            onChange={(event) => handleChange("message", event.target.value)}
            aria-invalid={!!errors.message}
          />
          {errors.message ? (
            <p className="text-sm text-destructive">{errors.message}</p>
          ) : null}
        </div>
        <Button
          type="submit"
          className="w-full gap-2 bg-amber-500 text-[#0b1b3a] hover:bg-amber-400 sm:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
          {isSubmitting ? "Отправляем…" : "Отправить сообщение"}
        </Button>
        <p className="text-sm text-muted-foreground">
          Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
        </p>
      </form>
    </div>
  );
}
