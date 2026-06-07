import { Check } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";
import { TIERS, messengerHref } from "@/lib/site";

export function Pricing() {
  return (
    <section id="pricing" className="bg-surface-2">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Үнийн багц
          </span>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Дэлгүүрийнхээ хэмжээнд тохирох багцаа сонго.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            Сараар төлнө. Хүссэн үедээ дээшлүүлж болно. Нуугдмал төлбөргүй.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {TIERS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05}>
              <div
                className={[
                  "flex h-full flex-col rounded-2xl border bg-surface p-6",
                  t.popular
                    ? "border-accent ring-1 ring-accent shadow-[0_30px_60px_-30px_rgba(4,120,87,0.45)]"
                    : "border-border",
                ].join(" ")}
              >
                {t.popular ? (
                  <span className="mb-4 inline-flex w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-ink">
                    Хамгийн их сонгогддог
                  </span>
                ) : (
                  <span className="mb-4 h-[26px]" aria-hidden />
                )}

                <h3 className="text-xl font-bold tracking-tight">{t.name}</h3>
                <p className="mt-0.5 text-sm text-muted">{t.latin}</p>

                <p className="mt-5 flex items-baseline gap-1.5">
                  <span className="text-3xl font-extrabold tabular-nums tracking-tight">
                    {t.price}
                  </span>
                  <span className="text-sm font-medium text-muted">₮ / сар</span>
                </p>

                <dl className="mt-6 space-y-3 border-t border-border pt-5 text-sm">
                  <div className="flex items-start gap-2.5">
                    <Check
                      size={18}
                      weight="bold"
                      className="mt-0.5 shrink-0 text-accent"
                    />
                    <dd>
                      <span className="font-semibold tabular-nums">
                        {t.products}
                      </span>{" "}
                      <span className="text-muted">бүтээгдэхүүн</span>
                    </dd>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check
                      size={18}
                      weight="bold"
                      className="mt-0.5 shrink-0 text-accent"
                    />
                    <dd>
                      <span className="font-semibold tabular-nums">
                        {t.customers}
                      </span>{" "}
                      <span className="text-muted">харилцагч / сар</span>
                    </dd>
                  </div>
                </dl>

                <a
                  href={messengerHref}
                  className={[
                    "mt-7 rounded-full px-4 py-2.5 text-center text-sm font-semibold transition-colors active:translate-y-px",
                    t.popular
                      ? "bg-accent text-accent-ink hover:bg-accent-hover"
                      : "border border-border bg-surface text-ink hover:bg-surface-2",
                  ].join(" ")}
                >
                  Холбоо барих
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Add-ons + setup notes */}
        <Reveal delay={0.1}>
          <div className="mt-8 grid gap-3 rounded-2xl border border-border bg-surface p-6 text-sm leading-relaxed text-muted sm:grid-cols-3">
            <p>
              <span className="font-semibold text-ink">Нэмэлт хуудас</span>{" "}
              (FB / IG): +30,000₮ / сар.
            </p>
            <p>
              <span className="font-semibold text-ink">
                Нэг удаагийн суурилуулалт
              </span>
              : 100,000-250,000₮ (хуудас холбох, бараа оруулах).
            </p>
            <p>
              <span className="font-semibold text-ink">
                25,000+ харилцагч / сар
              </span>
              : захиалгат үнэ, холбоо барина уу.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
