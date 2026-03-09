"use client";

import { useEffect, useRef } from "react";
import { SPACES } from "@/lib/data";
import SectionLabel from "./SectionLabel";

export default function Spaces() {
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
    <section id="spaces" className="bg-forest py-28 px-6 md:px-20" ref={ref}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 rv reveal">
          <SectionLabel>Pilih Suasanamu</SectionLabel>
          <h2 className="font-playfair font-semibold text-4xl md:text-5xl leading-[1.1] text-cream mt-1">
            Tiga Ruang,{" "}
            <em className="text-gold-light not-italic">Satu Jiwa</em>
          </h2>
          <p className="text-moss text-[0.87rem] mt-3">
            Setiap zona punya karakter. Mana yang paling kamu?
          </p>
        </div>

        {/* Grid */}
        <div
          className="rv reveal grid grid-cols-1 md:grid-cols-3 gap-px bg-gold/12"
          style={{ transitionDelay: "0.1s" }}
        >
          {SPACES.map((s) => (
            <div
              key={s.num}
              className={`
                group relative bg-forest-2 px-10 pt-10 pb-12
                transition-colors duration-400 hover:bg-[#162b1c]
                overflow-hidden
                ${s.featured ? "bg-[#162b1c]" : ""}
              `}
            >
              {/* Bottom gold line */}
              <div
                className={`
                  absolute bottom-0 left-0 right-0 h-0.5
                  bg-gradient-to-r from-gold to-transparent
                  transition-transform duration-500 origin-left
                  ${s.featured ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                `}
              />

              {/* Number */}
              <p
                className={`
                  font-playfair font-bold text-[5rem] leading-none mb-6
                  text-gold/7 transition-colors duration-400
                  group-hover:text-gold/14
                  ${s.featured ? "text-gold/14" : ""}
                `}
              >
                {s.num}
              </p>

              {/* Name */}
              <h3 className="font-playfair text-2xl text-cream mb-3">
                {s.name}{" "}
                <em className="text-gold-light not-italic">{s.nameItalic}</em>
              </h3>

              {/* Desc */}
              <p className="text-[0.8rem] leading-[1.9] text-cream/60">
                {s.desc}
              </p>

              {/* Tag */}
              <span className="inline-block mt-6 text-[0.56rem] tracking-widest uppercase text-gold border border-gold/25 bg-gold/[0.04] px-3 py-1">
                {s.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
