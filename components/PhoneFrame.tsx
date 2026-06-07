import type { ReactNode } from "react";
import { Storefront } from "@phosphor-icons/react/dist/ssr";

/** Stylized phone shell with a Messenger-style chat header. */
export function PhoneFrame({
  shopName = "Миний Дэлгүүр",
  children,
}: {
  shopName?: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-[340px] rounded-[2.4rem] border border-border bg-surface p-2.5 shadow-[0_40px_80px_-32px_rgba(4,120,87,0.28)]">
      <div className="overflow-hidden rounded-[1.9rem] bg-bg">
        {/* chat header */}
        <div className="flex items-center gap-3 border-b border-border bg-surface px-4 py-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-accent-soft text-accent">
            <Storefront size={18} weight="fill" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-ink">{shopName}</p>
            <p className="flex items-center gap-1.5 text-xs text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Идэвхтэй
            </p>
          </div>
        </div>
        {/* chat body */}
        <div className="px-3.5 py-4">{children}</div>
      </div>
    </div>
  );
}
