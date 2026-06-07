// ------------------------------------------------------------------
//  Single source of truth for content + contact details.
//
//  >>> FILL THESE IN before going live <<<
//  - facebook: your Nexon Shop AI Facebook page. For a "message us" link,
//    use the m.me short link, e.g. "https://m.me/nexonshopai".
//  - phone:    e.g. "+976 8800 0000"
//  - email:    e.g. "sales@nexon.mn"
// ------------------------------------------------------------------
export const CONTACT = {
  facebook: "[FACEBOOK_PAGE_LINK]",
  phone: "[PHONE]",
  email: "[EMAIL]",
} as const;

export const messengerHref = CONTACT.facebook;
export const telHref = `tel:${CONTACT.phone.replace(/\s+/g, "")}`;
export const mailHref = `mailto:${CONTACT.email}`;

export const NAV_LINKS = [
  { href: "#features", label: "Боломжууд" },
  { href: "#how", label: "Хэрхэн ажилладаг" },
  { href: "#demo", label: "Жишээ чат" },
  { href: "#pricing", label: "Үнэ" },
] as const;

export type Tier = {
  name: string;
  latin: string;
  price: string;
  products: string;
  customers: string;
  popular?: boolean;
};

export const TIERS: Tier[] = [
  {
    name: "Эхлэл",
    latin: "Starter",
    price: "49,000",
    products: "50 хүртэл",
    customers: "250",
  },
  {
    name: "Өсөлт",
    latin: "Growth",
    price: "69,000",
    products: "150 хүртэл",
    customers: "800",
    popular: true,
  },
  {
    name: "Бизнес",
    latin: "Business",
    price: "99,000",
    products: "500 хүртэл",
    customers: "2,500",
  },
  {
    name: "Про",
    latin: "Pro",
    price: "229,000",
    products: "2,000 хүртэл",
    customers: "7,500",
  },
  {
    name: "Байгууллага",
    latin: "Enterprise",
    price: "449,000",
    products: "Хязгааргүй",
    customers: "25,000",
  },
];
