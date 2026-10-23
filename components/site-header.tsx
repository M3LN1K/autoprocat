"use client";

import { useState } from "react";
import Link from "next/link";
import { CarFront, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { appName, navLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold tracking-tight"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <CarFront className="h-4 w-4" />
            </div>
            {appName}
          </Link>
          <nav
            className="hidden lg:flex lg:items-center gap-1"
            aria-label="Основная навигация"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <Menu className={cn({ hidden: open })} />
            <X className={cn({ hidden: !open })} />
          </Button>
        </div>
      </div>
      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden border-b bg-background/95 shadow-lg",
          open
            ? "animate-in fade-in slide-in-from-top-4 duration-300"
            : "hidden"
        )}
      >
        <nav
          className="container mx-auto flex flex-col px-4"
          aria-label="Мобильная навигация"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
