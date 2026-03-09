"use client";

import { useEffect, useRef } from "react";
import {
  WhatsappLogo, MapPin as MapPinIcon,
  Clock, MapPin, Tag, Phone,
} from "@phosphor-icons/react";
import { BRAND, INFO_CELLS } from "@/lib/data";
import SectionLabel from "./SectionLabel";

const CELL_ICON_MAP = { Clock, MapPin, Tag, Phone } as const;
type CellIconKey = keyof typeof CELL_ICON_MAP;

export default function Visit() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".rv");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="visit"
      className="bg-forest-2 border-t border-gold/15 py-28 px-6 md:px-20"
      ref={ref}
    >
      {/* ── CTA block ── */}
      <div className="max-w-2xl mx-auto text-center rv reveal">
        <SectionLabel>Temukan Kami</SectionLabel>
        <h2 className="font-playfair font-semibold text-4xl md:text-5xl leading-[1.1] text-cream mt-1 mb-5">
          Siap Berkunjung ke{" "}
          <em className="text-gold-light not-italic">Campanella?</em>
        </h2>
        <p className="text-cream/60 text-[0.88rem] leading-[1.9] mb-8">
          Datang kapan saja — tidak perlu reservasi. Untuk acara spesial, group,
          atau private dining, hubungi kami lebih dulu agar kami siapkan yang terbaik.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
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
            Chat WhatsApp
          </a>
          <a
            href={BRAND.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-gold/35
                       text-gold-light text-[0.72rem] tracking-widest uppercase
                       hover:border-gold hover:bg-gold/[0.07] transition-all duration-300"
          >
            <MapPinIcon size={15} weight="light" />
            Buka di Maps
          </a>
        </div>
      </div>

      {/* ── Info cells ── */}
      <div
        className="max-w-4xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4
                   gap-px bg-gold/12 rv reveal"
        style={{ transitionDelay: "0.15s" }}
      >
        {INFO_CELLS.map((c) => {
          const Icon = CELL_ICON_MAP[c.icon as CellIconKey];
          return (
            <div key={c.label} className="bg-forest px-5 py-8 text-center group">
              {Icon && (
                <div className="w-11 h-11 rounded-full border border-gold/20 bg-gold/[0.05]
                                flex items-center justify-center mx-auto mb-3
                                transition-all duration-300
                                group-hover:border-gold/35 group-hover:bg-gold/[0.08]">
                  <Icon
                    size={20}
                    weight="thin"
                    className="text-gold"
                  />
                </div>
              )}
              <p className="text-[0.53rem] tracking-widest uppercase text-gold mb-1.5">
                {c.label}
              </p>
              <p className="font-playfair text-[0.95rem] text-cream leading-[1.55] whitespace-pre-line">
                {c.value}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
