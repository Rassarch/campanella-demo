"use client";

import { useEffect, useState } from "react";
import { WhatsappLogo, List, X } from "@phosphor-icons/react";
import { BRAND } from "@/lib/data";

const NAV_LINKS = [
  { href: "#about",    label: "Tentang"   },
  { href: "#spaces",   label: "Ruang"     },
  { href: "#menu",     label: "Menu"      },
  { href: "#features", label: "Fasilitas" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between
                  px-6 md:px-20 py-5 transition-all duration-500
                  ${scrolled
                    ? "bg-forest/95 backdrop-blur-md border-b border-gold/10"
                    : "bg-transparent"}`}
    >
      {/* ── Logo ── */}
      <a href="#hero" className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold to-gold-dim
                        flex items-center justify-center
                        font-playfair font-bold text-forest text-sm">
          C
        </div>
        <span className="font-playfair text-lg tracking-wider text-gold-light">
          {BRAND.name}
        </span>
      </a>

      {/* ── Desktop nav ── */}
      <ul className="hidden md:flex items-center gap-10 list-none">
        {NAV_LINKS.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-xs tracking-widest uppercase text-cream-warm/70
                         hover:text-gold-light transition-colors duration-300"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      {/* ── Desktop CTA ── */}
      <a
        href={`https://wa.me/${BRAND.wa}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline-flex items-center gap-2 text-xs tracking-widest uppercase
                   px-5 py-2.5 border border-gold text-gold
                   hover:bg-gold hover:text-forest transition-all duration-300"
      >
        <WhatsappLogo size={14} weight="regular" />
        Reservasi
      </a>

      {/* ── Mobile hamburger ── */}
      <button
        className="md:hidden p-1 text-gold-light"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen
          ? <X size={22} weight="light" />
          : <List size={22} weight="light" />}
      </button>

      {/* ── Mobile drawer ── */}
      <div
        className={`absolute top-full left-0 right-0 bg-forest-2/98 backdrop-blur-md
                    border-b border-gold/10 transition-all duration-300 md:hidden
                    ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <ul className="list-none flex flex-col py-6 px-6 gap-5">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block text-sm tracking-widest uppercase
                           text-cream-warm/70 hover:text-gold-light transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`https://wa.me/${BRAND.wa}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-2 text-xs tracking-widest uppercase
                         px-5 py-2.5 border border-gold text-gold"
            >
              <WhatsappLogo size={14} weight="regular" />
              Reservasi via WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
