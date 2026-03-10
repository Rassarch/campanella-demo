import type { Metadata, Viewport } from "next";
import "./globals.css";
import MyProvider from "@/context/MyProvider";

export const metadata: Metadata = {
  title: "Coffee Shop Metro Terbaik - Campanella Coffee & Eatery",
  description: "Coffee shop Metro terbaik dengan 3 zona premium: indoor mewah, outdoor sawah, rooftop. Menu kopi signature, promo harian, buka 11.00-22.00. Pesan sekarang!",
  keywords: [
    "coffee shop Metro", "kafe Metro Lampung", "campanella coffee", 
    "tempat nongkrong Metro", "kopi enak Metro", "coffee eatery Lampung"
  ],
  authors: [{ name: "Campanella Coffee & Eatery", url: "https://campanella-demo.vercel.app" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Coffee Shop Metro Terbaik - Campanella Coffee & Eatery",
    description: "Coffee shop Metro terbaik dengan 3 zona premium: indoor mewah, outdoor sawah, rooftop semi-terbuka. Menu kopi signature, promo harian, buka 11.00-22.00.",
    type: "website",
    locale: "id_ID",
    images: ["/og-image.jpg"],  // Buat foto 1200x630px
    siteName: "Campanella Coffee",
    url: "https://campanella-demo.vercel.app"
  },
  twitter: {
    card: "summary_large_image",
    title: "Coffee Shop Metro Terbaik - Campanella Coffee",
    images: ["/twitter-image.jpg"]
  },
  verification: {
    google: "google-site-verification=google76f2e0479c83d0d9"  // Dari GSC file
  }
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
