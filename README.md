# Nexon Shop AI — маркетингийн вэбсайт

Онлайн дэлгүүрт зориулсан AI худалдагч **Nexon Shop AI**-н танилцуулга, нэг хуудаст
маркетингийн вэбсайт. Next.js (App Router) + TypeScript + Tailwind CSS v4. Статик
сайт, Vercel дээр шууд байршуулна. Нэвтрэх / бүртгүүлэх / төлбөр / dashboard байхгүй.

Бренд: **Nexon Shop AI** · Хуулийн этгээд: **Nexon Digital Nova**.

## Эхлүүлэх

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## >>> Бөглөх шаардлагатай зүйлс <<<

Холбоо барих мэдээллийг нэг газар, `lib/site.ts` дотор төвлөрүүлсэн. Зөвхөн дараах
3 утгыг солино:

```ts
// lib/site.ts
export const CONTACT = {
  facebook: "[FACEBOOK_PAGE_LINK]", // ж: "https://m.me/nexonshopai"
  phone: "[PHONE]",                 // ж: "+976 8800 0000"
  email: "[EMAIL]",                 // ж: "sales@nexon.mn"
};
```

- `facebook` — Messenger руу шууд бичих бол `m.me/<хуудас>` богино линк хэрэглэнэ.
- Утас (`tel:`) болон имэйл (`mailto:`) линк нь эдгээр утгаас автоматаар үүснэ.

**Лого:** `components/Nav.tsx` болон `components/Footer.tsx` дотор түр зуурын
chat-bubble тэмдэг тавьсан. Жинхэнэ логогоо тэр хоёр газар солих (`TODO` тэмдэглэгээтэй).

## Бүтэц

- `app/layout.tsx` — фонт (Golos Text, Монгол кирилл бүрэн), meta, хэл `mn`.
- `app/page.tsx` — хэсгүүдийн дараалал.
- `components/` — Nav, Hero, Problem, Features, HowItWorks, ChatDemo, Pricing,
  Contact, Footer, ChatThread (амьд жишээ чат), PhoneFrame, Reveal.
- `lib/site.ts` — холбоо барих мэдээлэл, цэс, үнийн багцууд.

## Тэмдэглэл

- Жишээ чат доторх барааны зураг нь `picsum.photos`-н түр зураг. Бодит бараагаар
  солих боломжтой.
- Сайт нь зөвхөн мэдээлэл өгөх зорилготой — төлбөр төлдөггүй, хэрэглэгчийн данс байхгүй.
