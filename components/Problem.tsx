import {
  ChatsCircle,
  ClockCountdown,
  ArrowBendUpRight,
  DeviceMobileCamera,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";

const pains = [
  {
    icon: ChatsCircle,
    title: "«Хэдэн төгрөг вэ?» өдөр шөнөгүй",
    body: "«Байгаа юу?», «размер?», «үнэ?» гэсэн мессеж, коммент таслахгүй ирнэ.",
  },
  {
    icon: ClockCountdown,
    title: "Хариу хожимддог",
    body: "Та завтай болж хариулах үед үйлчлүүлэгч аль хэдийн хүйтэрчихсэн байдаг.",
  },
  {
    icon: ArrowBendUpRight,
    title: "Худалдан авагч өрсөлдөгч рүү",
    body: "Удаан хариу хүлээснээс залхаад хурдан хариулдаг дэлгүүрээс авчихдаг.",
  },
  {
    icon: DeviceMobileCamera,
    title: "Та Messenger-т гинжлэгдсэн",
    body: "Бизнесээ ургуулахын оронд утсаа ширтэж өдрийг өнгөрөөнө.",
  },
];

export function Problem() {
  return (
    <section id="problem" className="bg-surface-2">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Хамгийн хурдан хариулсан дэлгүүр л зардаг.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            Гэтэл та ганцаараа. Мессеж бүрт тэр дороо хариулах аргагүй, тэр хооронд
            бэлэн байсан борлуулалт өрсөлдөгч рүү алдагдана.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {pains.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="flex h-full gap-4 bg-surface p-6 sm:p-7">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                  <p.icon size={22} weight="duotone" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 leading-relaxed text-muted">{p.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
