import { Reveal } from "@/components/Reveal";

const steps = [
  {
    n: "01",
    title: "Холбоно",
    body: "Таны Facebook, Instagram хуудсыг Sello AI-тай холбоно.",
  },
  {
    n: "02",
    title: "Ачаална",
    body: "Бараа, үнэ, үлдэгдлийг систем рүү оруулна. Каталогаа өөрөө ачаалж бас болно.",
  },
  {
    n: "03",
    title: "Зарна",
    body: "Бот 24/7 хариулж, үйлчлүүлэгчийг худалдан авалт хүртэл хөтөлнө.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="bg-surface-2">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Гурван алхамд бэлэн.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            Та юу ч кодлох шаардлагагүй, тохируулгыг бид хийж өгнө.
          </p>
        </Reveal>

        <div className="relative mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
          {/* connector line on desktop */}
          <div
            aria-hidden
            className="absolute inset-x-8 top-7 hidden h-px bg-border md:block"
          />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="relative">
                <span className="relative z-10 grid h-14 w-14 place-items-center rounded-full border border-border bg-surface text-lg font-bold tabular-nums text-accent">
                  {s.n}
                </span>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 max-w-xs leading-relaxed text-muted">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
