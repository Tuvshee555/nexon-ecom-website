"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

export type Product = {
  name: string;
  price: string;
  /** descriptive picsum seed for a placeholder product photo */
  imageSeed: string;
  cta: string;
};

export type ChatMessage = {
  from: "user" | "bot";
  text: string;
  product?: Product;
};

/**
 * Plays a scripted Messenger-style conversation: user lines appear, bot lines
 * show a typing indicator first, then resolve. This is a live preview of the
 * real product (a text chatbot), not a mocked-up screenshot.
 */
export function ChatThread({
  script,
  size = "md",
}: {
  script: ChatMessage[];
  size?: "sm" | "md";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.35 });

  const [shown, setShown] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (reduce) {
      setShown(script.length);
      return;
    }
    if (!inView) return;

    const timers: ReturnType<typeof setTimeout>[] = [];
    let i = 0;

    const step = () => {
      if (i >= script.length) return;
      const msg = script[i];

      if (msg.from === "bot") {
        setTyping(true);
        timers.push(
          setTimeout(() => {
            setTyping(false);
            i += 1;
            setShown(i);
            timers.push(setTimeout(step, 750));
          }, 1150),
        );
      } else {
        i += 1;
        setShown(i);
        timers.push(setTimeout(step, 700));
      }
    };

    timers.push(setTimeout(step, 450));
    return () => timers.forEach(clearTimeout);
  }, [inView, reduce, script]);

  const gap = size === "sm" ? "gap-2.5" : "gap-3";
  const pad = size === "sm" ? "px-3 py-2 text-[13px]" : "px-4 py-2.5 text-[15px]";

  return (
    <div ref={ref} className={`flex flex-col ${gap}`}>
      {script.slice(0, shown).map((m, idx) => (
        <Bubble key={idx} message={m} pad={pad} reduce={!!reduce} />
      ))}
      {typing && <Typing />}
    </div>
  );
}

function Bubble({
  message,
  pad,
  reduce,
}: {
  message: ChatMessage;
  pad: string;
  reduce: boolean;
}) {
  const isBot = message.from === "bot";
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`flex ${isBot ? "justify-start" : "justify-end"}`}
    >
      <div
        className={[
          "max-w-[85%] leading-snug",
          pad,
          isBot
            ? "rounded-2xl rounded-bl-md bg-surface-2 text-ink"
            : "rounded-2xl rounded-br-md bg-accent text-accent-ink",
        ].join(" ")}
      >
        <span>{message.text}</span>
        {message.product && <ProductCard product={message.product} />}
      </div>
    </motion.div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <a
      href="#demo"
      className="mt-2 flex items-center gap-3 rounded-xl bg-surface p-2 ring-1 ring-border"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://picsum.photos/seed/${product.imageSeed}/120/120`}
        alt={product.name}
        width={48}
        height={48}
        loading="lazy"
        className="h-12 w-12 shrink-0 rounded-lg object-cover"
      />
      <div className="min-w-0 flex-1">
        <p className="truncate text-[13px] font-semibold text-ink">
          {product.name}
        </p>
        <p className="text-[13px] font-bold text-accent tabular-nums">
          {product.price}
        </p>
      </div>
      <span className="shrink-0 rounded-full bg-accent px-3 py-1.5 text-[12px] font-semibold text-accent-ink">
        {product.cta}
      </span>
    </a>
  );
}

function Typing() {
  return (
    <div className="flex justify-start">
      <div className="flex items-center gap-1 rounded-2xl rounded-bl-md bg-surface-2 px-4 py-3">
        <span className="nx-dot h-2 w-2 rounded-full bg-muted" />
        <span
          className="nx-dot h-2 w-2 rounded-full bg-muted"
          style={{ animationDelay: "0.2s" }}
        />
        <span
          className="nx-dot h-2 w-2 rounded-full bg-muted"
          style={{ animationDelay: "0.4s" }}
        />
      </div>
    </div>
  );
}
