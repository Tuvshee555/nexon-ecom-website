import {
  ArrowRight,
  Phone,
  EnvelopeSimple,
  FacebookLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";
import { CONTACT, messengerHref, telHref, mailHref } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="bg-bg">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <div className="rounded-3xl border border-border bg-accent-soft px-6 py-14 text-center sm:px-12 sm:py-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
              Борлуулалт алдахаа болих цаг боллоо.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted">
              Nexon Shop AI таны дэлгүүрт хэрхэн ажиллахыг үнэгүй үзүүлье.
              Messenger-ээр бичих эсвэл залгаарай, нэг өдрийн дотор тохируулна.
            </p>

            <div className="mt-9 flex justify-center">
              <a
                href={messengerHref}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-semibold text-accent-ink transition-colors hover:bg-accent-hover active:translate-y-px"
              >
                Холбоо барих
                <ArrowRight size={18} weight="bold" />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm font-medium">
              <a
                href={telHref}
                className="inline-flex items-center gap-2 text-ink transition-colors hover:text-accent"
              >
                <Phone size={18} weight="fill" className="text-accent" />
                {CONTACT.phone}
              </a>
              <a
                href={mailHref}
                className="inline-flex items-center gap-2 text-ink transition-colors hover:text-accent"
              >
                <EnvelopeSimple size={18} weight="fill" className="text-accent" />
                {CONTACT.email}
              </a>
              <a
                href={CONTACT.facebook}
                className="inline-flex items-center gap-2 text-ink transition-colors hover:text-accent"
              >
                <FacebookLogo size={18} weight="fill" className="text-accent" />
                Facebook хуудас
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
