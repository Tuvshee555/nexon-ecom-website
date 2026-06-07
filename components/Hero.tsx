import { ArrowRight, ChatsCircle } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";
import { PhoneFrame } from "@/components/PhoneFrame";
import { ChatThread, type ChatMessage } from "@/components/ChatThread";
import { messengerHref } from "@/lib/site";

const heroScript: ChatMessage[] = [
  { from: "user", text: "Энэ цүнх байгаа юу?" },
  {
    from: "bot",
    text: "Тийм, бэлэн байна. 129,000₮, 4 ширхэг үлдсэн.",
    product: {
      name: "Aspen хотын цүнх",
      price: "129,000₮",
      imageSeed: "nexon-aspen-bag",
      cta: "Авах",
    },
  },
  { from: "user", text: "Хар өнгөтэй юу?" },
  {
    from: "bot",
    text: "Тийм, хар, цагаан хоёр бэлэн. Хотод үнэгүй хүргэнэ.",
  },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* very subtle emerald wash, not a glow blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(60%_100%_at_70%_0%,var(--accent-soft),transparent_70%)]"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-28 lg:pt-20">
        {/* Left: message */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm font-medium text-muted">
              <ChatsCircle size={16} weight="fill" className="text-accent" />
              Messenger ба Instagram-д зориулсан AI худалдагч
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Удаан хариулаад
              <br />
              <span className="text-accent">борлуулалтаа</span> алдахаа боль.
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              Sello AI таны Facebook, Instagram мессежид агшин зуур хариулж,
              бодит цагийн үлдэгдэл, үнийг хэлээд худалдан авах линк илгээнэ. 24/7.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={messengerHref}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-base font-semibold text-accent-ink transition-colors hover:bg-accent-hover active:translate-y-px"
              >
                Холбоо барих
                <ArrowRight size={18} weight="bold" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-surface-2"
              >
                Үнэ харах
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right: live product preview */}
        <Reveal delay={0.2} className="w-full">
          <PhoneFrame>
            <ChatThread script={heroScript} size="sm" />
          </PhoneFrame>
        </Reveal>
      </div>
    </section>
  );
}
