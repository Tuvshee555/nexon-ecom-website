"use client";

import { useState } from "react";
import { List, X, ChatTeardropDots } from "@phosphor-icons/react";
import { NAV_LINKS, messengerHref } from "@/lib/site";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        {/* Brand. TODO: swap the mark for the real Sello AI logo. */}
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent text-accent-ink">
            <ChatTeardropDots size={20} weight="fill" />
          </span>
          <span className="text-[17px] font-bold tracking-tight">
            Sello AI
          </span>
        </a>

        {/* Desktop links on a single line */}
        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={messengerHref}
            className="hidden rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-ink transition-colors hover:bg-accent-hover active:translate-y-px sm:inline-block"
          >
            Холбоо барих
          </a>
          <button
            type="button"
            aria-label="Цэс"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg text-ink transition-colors hover:bg-surface-2 lg:hidden"
          >
            {open ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-bg lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-3 sm:px-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base font-medium text-ink transition-colors hover:bg-surface-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href={messengerHref}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-accent px-4 py-3 text-center text-base font-semibold text-accent-ink"
            >
              Холбоо барих
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
