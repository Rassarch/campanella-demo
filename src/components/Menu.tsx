"use client";

import { useEffect, useRef } from "react";
import { MENU_ITEMS, PROMO } from "@/lib/data";
import SectionLabel from "./SectionLabel";

export default function Menu() {
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
    <section id="menu" className="bg-forest-2 py-28 px-6 md:px-20" ref={ref}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 rv reveal">
          <div>
            <SectionLabel>Hidangan &amp; Minuman</SectionLabel>
            <h2 className="font-playfair font-semibold text-4xl md:text-5xl leading-[1.1] text-cream mt-1">
              Menu <em className="text-gold-light not-italic">Unggulan</em>
            </h2>
          </div>
          <p className="text-moss text-[0.84rem] leading-[1.8] max-w-[260px] md:text-right">
            Western, Asia, Oriental — semua ada. Harga bersahabat, rasa tidak mengecewakan.
          </p>
        </div>

        {/* Menu grid */}
        <div
          className="rv reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10"
          style={{ transitionDelay: "0.1s" }}
        >
          {MENU_ITEMS.map((item) => (
            <div
              key={item.name}
              className="bg-forest px-7 py-8 transition-colors duration-300 hover:bg-[#0f2116] group"
            >
              <p className="text-[0.53rem] tracking-widest uppercase text-gold mb-2">
                {item.category}
              </p>
              <h4 className="font-playfair text-[1.18rem] text-cream mb-1.5">
                {item.name}
              </h4>
              <p className="text-[0.76rem] leading-[1.75] text-moss">
                {item.desc}
              </p>
              <p className="font-playfair text-[1rem] text-gold-light mt-3.5">
                {item.price}
              </p>
            </div>
          ))}
        </div>

        {/* Promo block */}
        <div
          className="rv reveal mt-px flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6
                     px-8 py-7 bg-gradient-to-br from-gold/10 to-gold/[0.04] border border-gold/25"
          style={{ transitionDelay: "0.2s" }}
        >
          <div>
            <h4 className="font-playfair text-[1.25rem] text-gold-light mb-1.5">
              {PROMO.label}
            </h4>
            <p className="text-[0.8rem] leading-[1.75] text-cream/60 whitespace-pre-line">
              {PROMO.desc}
            </p>
          </div>
          <div className="text-center flex-shrink-0">
            <p className="font-playfair text-[2.5rem] text-gold leading-none">
              {PROMO.price}
            </p>
            <p className="text-[0.6rem] tracking-wider uppercase text-moss mt-0.5">
              {PROMO.priceSub}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
