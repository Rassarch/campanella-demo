import type { Metadata, Viewport } from "next";
import "./globals.css";
import MyProvider from "@/context/MyProvider";

export const metadata: Metadata = {
  title: "Campanella Coffee & Eatery — Metro, Lampung",
  description:
    "Tiga zona nongkrong premium: indoor mewah, outdoor sawah, rooftop semi-terbuka. Coffee & Eatery terbaik di Metro, Lampung.",
  keywords: [
    "cafe metro lampung",
    "campanella coffee",
    "kafe metro",
    "tempat nongkrong metro",
    "coffee eatery lampung",
  ],
  authors: [{ name: "Campanella Coffee & Eatery" }],
  openGraph: {
    title: "Coffee Shop Metro Terbaik - Campanella Coffee & Eatery",
    description:
      "Coffee shop Metro terbaik dengan 3 zona premium: indoor mewah, outdoor sawah, rooftop semi-terbuka. Menu kopi signature, promo harian, buka 11.00-22.00.",
    type: "website",
    locale: "id_ID",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d1f14",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="grain">
      <body>
        <MyProvider>
          {children}
        </MyProvider>
      </body>
    </html>
  );
}
