import { ChatTeardropDots } from "@phosphor-icons/react/dist/ssr";
import { NAV_LINKS, CONTACT, telHref, mailHref } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          {/* Brand. TODO: replace mark with the real logo. */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent text-accent-ink">
                <ChatTeardropDots size={20} weight="fill" />
              </span>
              <span className="text-[17px] font-bold tracking-tight">
                Sello AI
              </span>
            </div>
            <p className="mt-4 leading-relaxed text-muted">
              Онлайн дэлгүүрийн мессежид 24/7 хариулж, борлуулалтыг тань
              нэмэгдүүлдэг Монгол AI худалдагч.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <div>
              <p className="text-sm font-semibold">Хуудас</p>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="transition-colors hover:text-ink"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold">Холбоо барих</p>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                <li>
                  <a href={telHref} className="transition-colors hover:text-ink">
                    {CONTACT.phone}
                  </a>
                </li>
                <li>
                  <a href={mailHref} className="transition-colors hover:text-ink">
                    {CONTACT.email}
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT.facebook}
                    className="transition-colors hover:text-ink"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>Nexon Digital Nova-н бүтээгдэхүүн</p>
          <p>© {year} Nexon Digital Nova. Бүх эрх хуулиар хамгаалагдсан.</p>
        </div>
      </div>
    </footer>
  );
}
