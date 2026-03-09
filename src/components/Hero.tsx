"use client";

import {
  WhatsappLogo,
  ArrowRight,
  GenderFemale,
  MusicNote,
  WifiHigh,
} from "@phosphor-icons/react";
import { BRAND } from "@/lib/data";

// Inline badge icons — direct imports, no dynamic lookup needed here
const BADGE_ICONS = {
  GenderFemale,
  MusicNote,
  WifiHigh,
} as const;

const HERO_BADGES = [
  { Icon: BADGE_ICONS.GenderFemale, title: "Women-Owned", sub: "Bisnis Perempuan Metro" },
  { Icon: BADGE_ICONS.MusicNote,    title: "Live Music",   sub: "Setiap Malam"          },
  { Icon: BADGE_ICONS.WifiHigh,     title: "Free Wi-Fi",   sub: "Laptop-Friendly"       },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Background ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 30%, rgba(201,168,76,0.1) 0%, transparent 55%), " +
            "radial-gradient(ellipse at 10% 80%, rgba(30,61,38,0.6) 0%, transparent 50%), " +
            "linear-gradient(160deg, #060e08 0%, #0d1f14 50%, #0a1a10 100%)",
        }}
      />

      {/* Botanical line art */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 600'%3E%3Cpath d='M200,600 Q180,500 220,400 Q260,300 180,200 Q100,100 200,0' stroke='%23c9a84c' stroke-width='1.5' fill='none'/%3E%3Cpath d='M200,400 Q150,380 120,340' stroke='%23c9a84c' stroke-width='1' fill='none'/%3E%3Cpath d='M200,400 Q250,370 270,320' stroke='%23c9a84c' stroke-width='1' fill='none'/%3E%3Cpath d='M210,300 Q160,280 140,250' stroke='%23c9a84c' stroke-width='1' fill='none'/%3E%3Cpath d='M210,300 Q260,270 275,240' stroke='%23c9a84c' stroke-width='1' fill='none'/%3E%3Cpath d='M205,200 Q155,185 140,160' stroke='%23c9a84c' stroke-width='1' fill='none'/%3E%3Cpath d='M205,200 Q255,175 265,145' stroke='%23c9a84c' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: "cover",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 px-6 md:px-20 pt-28 pb-16 max-w-3xl">

        {/* Pill */}
        <div
          className="inline-flex items-center gap-2 border border-gold/35 bg-gold/[0.07]
                     px-4 py-2 mb-8 opacity-0"
          style={{ animation: "fadeUp 0.9s 0.2s forwards" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          <span className="text-[0.62rem] tracking-widest uppercase text-gold">
            Metro Pusat, Lampung · Buka Setiap Hari 11.00–22.00
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-playfair font-semibold leading-[1.05] text-cream
                     text-5xl sm:text-6xl lg:text-[6.5rem] opacity-0"
          style={{ animation: "fadeUp 1s 0.4s forwards" }}
        >
          Tempat Terbaik
          <em className="block text-gold-light not-italic">untuk Setiap Momen</em>
        </h1>

        {/* Rule */}
        <div
          className="flex items-center gap-4 my-7 opacity-0"
          style={{ animation: "fadeUp 0.9s 0.6s forwards" }}
        >
          <div className="h-px w-14 bg-gold-dim" />
          <span className="text-[0.58rem] tracking-widest uppercase text-gold-dim">
            Coffee &amp; Eatery
          </span>
          <div className="h-px w-14 bg-gold-dim" />
        </div>

        {/* Sub */}
        <p
          className="text-[0.95rem] leading-[1.95] text-cream/60 max-w-[460px] opacity-0"
          style={{ animation: "fadeUp 0.9s 0.8s forwards" }}
        >
          {BRAND.subTagline}
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-3 mt-9 opacity-0"
          style={{ animation: "fadeUp 0.9s 1s forwards" }}
        >
          <a
            href={`https://wa.me/${BRAND.wa}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-gold text-forest
                       text-[0.72rem] tracking-widest uppercase font-medium
                       hover:bg-gold-light transition-all duration-300
                       shadow-[0_4px_20px_rgba(201,168,76,0.22)]
                       hover:shadow-[0_8px_28px_rgba(201,168,76,0.35)]
                       hover:-translate-y-0.5"
          >
            <WhatsappLogo size={16} weight="regular" />
            Reservasi WA
          </a>
          <a
            href="#spaces"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-gold/35
                       text-gold-light text-[0.72rem] tracking-widest uppercase
                       hover:border-gold hover:bg-gold/[0.07] transition-all duration-300"
          >
            Jelajahi Ruang
            <ArrowRight size={14} weight="light" />
          </a>
        </div>

        {/* Badges */}
        <div
          className="flex flex-wrap gap-8 mt-12 opacity-0"
          style={{ animation: "fadeUp 0.9s 1.2s forwards" }}
        >
          {HERO_BADGES.map(({ Icon, title, sub }) => (
            <div key={title} className="flex items-center gap-3">
              {/* Icon container — thin weight for luxury feel */}
              <div className="w-9 h-9 rounded-full border border-gold/25 bg-gold/[0.06]
                              flex items-center justify-center flex-shrink-0">
                <Icon size={17} weight="thin" className="text-gold" />
              </div>
              <div>
                <p className="text-[0.68rem] tracking-wide uppercase text-cream-warm font-medium leading-tight">
                  {title}
                </p>
                <p className="text-[0.6rem] tracking-wide uppercase text-moss">
                  {sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="hidden md:flex absolute bottom-10 right-20 flex-col items-center gap-3">
        <div className="w-px h-14 bg-gradient-to-b from-gold-dim to-transparent animate-scroll-pulse" />
        <span className="text-[0.55rem] tracking-widest uppercase text-moss [writing-mode:vertical-rl]">
          Scroll
        </span>
      </div>
    </section>
  );
}
