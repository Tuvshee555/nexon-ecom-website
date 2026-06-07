import type { Metadata, Viewport } from "next";
import { Golos_Text } from "next/font/google";
import "./globals.css";

// Golos Text (Paratype) carries full Mongolian Cyrillic, including Ө/Ү,
// so words like "Өсөлт" and "үлдсэн" never fall back mid-word.
const golos = Golos_Text({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
  display: "swap",
  variable: "--font-golos",
});

export const metadata: Metadata = {
  title: "Nexon Shop AI - Онлайн дэлгүүрт зориулсан AI худалдагч",
  description:
    "Facebook, Instagram мессежид агшин зуур хариулж, бодит цагийн үлдэгдлээс үнэ, тоо ширхгийг хэлээд худалдан авах линк илгээдэг Монгол AI туслах. 24/7 ажиллаж, борлуулалт алдуулахгүй.",
  metadataBase: new URL("https://nexonshop.ai"),
  openGraph: {
    title: "Nexon Shop AI - Онлайн дэлгүүрт зориулсан AI худалдагч",
    description:
      "Үйлчлүүлэгчийн «байгаа юу? хэдэн төгрөг вэ? үлдсэн үү?» гэсэн асуултад бодит үлдэгдлээс шууд хариулж, худалдан авах линк илгээнэ.",
    locale: "mn_MN",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f7f4" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0d0c" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="mn" className={golos.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
