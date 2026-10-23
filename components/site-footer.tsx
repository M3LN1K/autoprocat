import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { appName, companyContacts, navLinks } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold tracking-tight"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Phone className="h-4 w-4" />
              </div>
              {appName}
            </Link>
            <p className="text-sm text-muted-foreground">
              Аренда автомобилей эконом, комфорт и бизнес-класса. Страховка
              включена, подача за 15 минут, прозрачные цены.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold">Разделы</p>
            <nav
              className="mt-4 flex flex-col gap-2"
              aria-label="Навигация в подвале"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="text-sm font-semibold">Контакты</p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={companyContacts.phoneHref}
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  {companyContacts.phone}
                </a>
              </li>
              <li>
                <a
                  href={companyContacts.emailHref}
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {companyContacts.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0" />
                {companyContacts.address}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto px-4 py-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {appName}. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
