import {
  ChatDots,
  Package,
  LinkSimple,
  ShareNetwork,
  Translate,
  SlidersHorizontal,
  HandPalm,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";

const cardBase =
  "flex h-full flex-col rounded-2xl border border-border bg-surface p-6 sm:p-7";
const iconChip =
  "grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent";

export function Features() {
  return (
    <section id="features" className="bg-bg">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Таны оронд зардаг ухаалаг туслах.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            Каталог, үлдэгдэлтэй тань холбогдоод үйлчлүүлэгчийн бүх асуултад өөрөө
            хариулна.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-6">
          {/* A: auto-answer with mini chat visual */}
          <Reveal className="md:col-span-3">
            <div className={cardBase}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className={iconChip}>
                    <ChatDots size={22} weight="duotone" />
                  </span>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight">
                    Каталогоосоо автоматаар хариулна
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted">
                    Бараа, үнэ, размер, өнгөний асуултад таны жагсаалтаас шууд,
                    зөв хариу өгнө.
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-2">
                <div className="self-end rounded-2xl rounded-br-md bg-accent px-3.5 py-2 text-sm text-accent-ink">
                  Энэ цамц M размертэй юу?
                </div>
                <div className="self-start rounded-2xl rounded-bl-md bg-surface-2 px-3.5 py-2 text-sm text-ink">
                  Тийм, M размер 5 ширхэг бэлэн байна.
                </div>
              </div>
            </div>
          </Reveal>

          {/* B: real-time stock with badges */}
          <Reveal delay={0.05} className="md:col-span-3">
            <div className={cardBase}>
              <span className={iconChip}>
                <Package size={22} weight="duotone" />
              </span>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">
                Бодит цагийн үлдэгдэл
              </h3>
              <p className="mt-2 leading-relaxed text-muted">
                «3 ширхэг үлдсэн», «дууссан» гэдгийг үргэлж зөв хэлнэ. Хуучирсан
                мэдээллээр захиалга алдахгүй.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-accent-soft px-3 py-1.5 text-sm font-medium text-accent">
                  3 ширхэг үлдсэн
                </span>
                <span className="rounded-full bg-surface-2 px-3 py-1.5 text-sm font-medium text-muted">
                  Дууссан
                </span>
                <span className="rounded-full bg-accent-soft px-3 py-1.5 text-sm font-medium text-accent">
                  Шинээр нэмэгдсэн
                </span>
              </div>
            </div>
          </Reveal>

          {/* C, D, E: medium tiles */}
          <FeatureCard
            className="md:col-span-2"
            delay={0}
            icon={LinkSimple}
            title="Худалдан авах линк"
            body="Сонирхсон хүнийг шууд таны вэбсайтын худалдан авах хуудас руу хөтөлнө."
          />
          <FeatureCard
            className="md:col-span-2"
            delay={0.05}
            icon={ShareNetwork}
            title="Messenger ба Instagram"
            body="Хоёр сувгийн мессеж, коммент дээр зэрэг ажиллана."
          />
          <FeatureCard
            className="md:col-span-2"
            delay={0.1}
            icon={Translate}
            title="Монгол хэлээр"
            body="Үйлчлүүлэгчтэй жинхэнэ хүн шиг, ойлгомжтой монголоор харьцана."
          />

          {/* F, G: bottom tiles */}
          <FeatureCard
            className="md:col-span-3"
            delay={0}
            icon={SlidersHorizontal}
            title="Энгийн админ самбар"
            body="Бараа, үнэ, үлдэгдлээ хэдхэн товшилтоор шинэчилнэ. Код бичих шаардлагагүй."
          />
          <FeatureCard
            className="md:col-span-3"
            delay={0.05}
            icon={HandPalm}
            title="Хүссэн үедээ өөрөө аваарай"
            body="Шаардлагатай үед ботыг түр зогсоож, чатыг өөрөө үргэлжлүүлж болно."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  body,
  className,
  delay,
}: {
  icon: React.ComponentType<{ size?: number; weight?: "duotone" }>;
  title: string;
  body: string;
  className?: string;
  delay: number;
}) {
  return (
    <Reveal delay={delay} className={className}>
      <div className={cardBase}>
        <span className={iconChip}>
          <Icon size={22} weight="duotone" />
        </span>
        <h3 className="mt-4 text-xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 leading-relaxed text-muted">{body}</p>
      </div>
    </Reveal>
  );
}
