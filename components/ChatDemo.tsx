import {
  Storefront,
  Lightning,
  ImageSquare,
  SealCheck,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";
import { ChatThread, type ChatMessage } from "@/components/ChatThread";

const demoScript: ChatMessage[] = [
  { from: "user", text: "Энэ гутал 42 размертэй байгаа юу?" },
  {
    from: "bot",
    text: "Тийм, Nova Runner спорт гутал, 189,000₮. 42 размер 3 ширхэг үлдсэн.",
    product: {
      name: "Nova Runner спорт гутал",
      price: "189,000₮",
      imageSeed: "nexon-novarunner-42",
      cta: "Худалдаж авах",
    },
  },
  { from: "user", text: "Улаан өнгөтэй юу?" },
  {
    from: "bot",
    text: "Улаан дууссан байна. Хар, цагаан хоёр өнгө бэлэн. Худалдан авах линк доор.",
  },
];

const points = [
  { icon: Lightning, label: "Агшин зуур хариу" },
  { icon: ImageSquare, label: "Зураг хэрэггүй" },
  { icon: SealCheck, label: "Үргэлж зөв үлдэгдэл" },
];

export function ChatDemo() {
  return (
    <section id="demo" className="bg-bg">
      <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 lg:py-28">
        <Reveal>
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Цэвэрхэн чат, шуурхай хариу.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted">
            Зураг, видео шаардлагагүй. Зөвхөн тодорхой текст, бодит үлдэгдэл,
            худалдан авах линк.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 max-w-md overflow-hidden rounded-3xl border border-border bg-surface text-left shadow-[0_40px_90px_-40px_rgba(4,120,87,0.3)]">
            <div className="flex items-center gap-3 border-b border-border px-5 py-3.5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-accent-soft text-accent">
                <Storefront size={18} weight="fill" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold">Миний Дэлгүүр</p>
                <p className="flex items-center gap-1.5 text-xs text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Sello AI хариулж байна
                </p>
              </div>
            </div>
            <div className="bg-bg px-4 py-5">
              <ChatThread script={demoScript} size="md" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <ul className="mx-auto mt-8 flex max-w-md flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {points.map((p) => (
              <li
                key={p.label}
                className="inline-flex items-center gap-2 text-sm font-medium text-muted"
              >
                <p.icon size={18} weight="fill" className="text-accent" />
                {p.label}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
