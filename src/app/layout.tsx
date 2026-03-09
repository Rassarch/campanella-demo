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
    title: "Campanella Coffee & Eatery — Metro, Lampung",
    description:
      "Tiga zona nongkrong premium di Metro: indoor mewah, outdoor sawah, rooftop semi-terbuka.",
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
