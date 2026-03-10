import type { Metadata, Viewport } from "next";
import "./globals.css";
import MyProvider from "@/context/MyProvider";
import { BRAND } from "@/lib/data"; // data global kamu

export const metadata: Metadata = {
  title: `Coffee Shop Metro Terbaik - ${BRAND.full}`,
  description: BRAND.subTagline,
  keywords: [
    "coffee shop Metro", "kafe Metro Lampung", "campanella coffee",
    "tempat nongkrong Metro", "kopi enak Metro", "coffee eatery Lampung"
  ],
  authors: [{ name: BRAND.full, url: "https://campanella-demo.vercel.app" }],
  metadataBase: new URL("https://campanella-demo.vercel.app"),
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: BRAND.full,
    description: BRAND.subTagline,
    url: "https://campanella-demo.vercel.app",
    siteName: BRAND.name,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: BRAND.full }],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Coffee Shop Metro Terbaik - ${BRAND.full}`,
    description: BRAND.subTagline,
    images: ["/twitter-image.jpg"],
  },
  verification: {
    google: "google76f2e0479c83d0d9",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d1f14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Structured Data (JSON-LD) menggunakan data dari lib/data.ts
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CafeOrCoffeeShop',
    'name': BRAND.full,
    'description': BRAND.subTagline,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': BRAND.address,
      'addressLocality': 'Metro',
      'addressRegion': 'Lampung',
      'addressCountry': 'ID',
    },
    'telephone': BRAND.phone,
    'openingHours': 'Mo-Su 11:00-22:00',
    'priceRange': BRAND.priceRange,
    'image': 'https://campanella-demo.vercel.app/og-image.jpg',
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': -5.113,
      'longitude': 105.307,
    },
  };

  return (
    <html lang="id" className="grain">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <MyProvider>{children}</MyProvider>
      </body>
    </html>
  );
}