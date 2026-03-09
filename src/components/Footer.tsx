"use client";

import { InstagramLogo, WhatsappLogo, MapPin } from "@phosphor-icons/react";
import { BRAND } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-forest border-t border-gold/10 px-6 md:px-20 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">

        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold to-gold-dim
                          flex items-center justify-center
                          font-playfair font-bold text-forest text-sm">
            C
          </div>
          <span className="font-playfair tracking-wider text-gold-light">
            {BRAND.name}
          </span>
        </a>

        <p className="text-[0.6rem] tracking-wider text-moss">
          © {new Date().getFullYear()} {BRAND.full} · {BRAND.city}
        </p>

        {/* Social links with Phosphor icons */}
        <div className="flex items-center gap-5">
          <a
            href={`https://instagram.com/${BRAND.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex items-center gap-1.5 text-[0.6rem] tracking-widest uppercase
                       text-moss hover:text-gold-light transition-colors group"
          >
            <InstagramLogo
              size={15}
              weight="light"
              className="text-moss group-hover:text-gold-light transition-colors"
            />
            Instagram
          </a>
          <a
            href={`https://wa.me/${BRAND.wa}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex items-center gap-1.5 text-[0.6rem] tracking-widest uppercase
                       text-moss hover:text-gold-light transition-colors group"
          >
            <WhatsappLogo
              size={15}
              weight="light"
              className="text-moss group-hover:text-gold-light transition-colors"
            />
            WhatsApp
          </a>
          <a
            href={BRAND.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Maps"
            className="flex items-center gap-1.5 text-[0.6rem] tracking-widest uppercase
                       text-moss hover:text-gold-light transition-colors group"
          >
            <MapPin
              size={15}
              weight="light"
              className="text-moss group-hover:text-gold-light transition-colors"
            />
            Maps
          </a>
        </div>
      </div>
    </footer>
  );
}
