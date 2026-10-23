import { FileText, Shield } from "lucide-react";
import { privacyPolicy, rentalTerms } from "@/lib/data";

const documents = [privacyPolicy, rentalTerms];

export function PolicySection() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <p className="text-sm font-semibold tracking-widest text-amber-600 uppercase">
            Юридическая информация
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Политика
          </h1>
          <p className="text-lg text-muted-foreground">
            Прозрачные условия работы: политика конфиденциальности и условия
            аренды автомобилей.
          </p>
        </div>

        {documents.map((document, index) => {
          const DocumentIcon = index === 0 ? FileText : Shield;
          return (
            <div
              key={document.title}
              className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)]"
            >
              <div className="h-full rounded-xl bg-card p-6 ring-1 ring-foreground/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/15 text-amber-600">
                  <DocumentIcon className="h-5 w-5" />
                </div>
                <nav
                  className="mt-5 flex flex-col gap-1"
                  aria-label={`Оглавление: ${document.title}`}
                >
                  {document.sections.map((section) => (
                    <a
                      key={section.title}
                      href={`#${document.title}-section-${section.title}`}
                      className="rounded-lg px-3 py-1.5 text-left text-sm leading-snug text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
              <article className="rounded-xl bg-card p-8 ring-1 ring-foreground/10 sm:p-10">
                <p className="text-sm font-semibold tracking-widest text-amber-600 uppercase">
                  {document.lastUpdated}
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-balance sm:text-3xl">
                  {document.title}
                </h2>
                <p className="mt-5 text-lg text-muted-foreground">
                  {document.intro}
                </p>
                <ol className="mt-10 space-y-8">
                  {document.sections.map((section, sectionIndex) => (
                    <li
                      key={section.title}
                      id={`${document.title}-section-${section.title}`}
                      className="scroll-mt-28"
                    >
                      <h3 className="flex items-start gap-3 text-lg font-semibold tracking-tight">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-amber-500/15 text-sm font-bold text-amber-600">
                          {sectionIndex + 1}
                        </span>
                        {section.title}
                      </h3>
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="mt-3 text-base leading-relaxed text-muted-foreground"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </li>
                  ))}
                </ol>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}
