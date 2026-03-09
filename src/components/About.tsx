"use client";

import { useEffect, useRef } from "react";
import SectionLabel from "./SectionLabel";

const TAGS = [
  "Casual", "Cosy", "Quiet",
  "Family Friendly", "Good for Groups",
  "Laptop-Friendly", "Accepts Reservations",
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".rv");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="bg-forest-2 py-28 px-6 md:px-20" ref={ref}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-24 items-center">

        {/* Text */}
        <div className="rv reveal">
          <SectionLabel>Tentang Campanella</SectionLabel>
          <h2 className="font-playfair font-semibold text-4xl md:text-5xl leading-[1.1] text-cream mt-1">
            Bukan Sekadar<br />
            Kafe <em className="text-gold-light not-italic">Biasa</em>
          </h2>
          <div className="mt-6 space-y-4 text-[0.9rem] leading-[2] text-cream/60">
            <p>
              Campanella hadir sebagai ruang ketiga di Metro — tempat di mana pekerjaan, perayaan, dan kebersamaan bisa terjadi dalam satu atap yang sama. Dengan desain yang memadukan kemewahan dan kehangatan, setiap sudut dirancang untuk dirasakan.
            </p>
            <p>
              Dikelola oleh perempuan Metro, Campanella adalah bukti bahwa kualitas premium tidak harus jauh dari rumah. Dari brunch santai hingga dinner romantis — semua ada di sini.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-7">
            {TAGS.map((t) => (
              <span
                key={t}
                className="text-[0.57rem] tracking-wider uppercase px-3 py-1.5 border border-gold/22 text-gold bg-gold/[0.04]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Card */}
        <div className="rv reveal" style={{ transitionDelay: "0.2s" }}>
          {/* Quote card */}
          <div className="relative bg-gradient-to-br from-forest-4 to-forest border border-gold/20 px-10 py-12">
            {/* Inner border */}
            <div className="absolute inset-3.5 border border-gold/9 pointer-events-none" />
            <blockquote className="font-playfair text-[1.4rem] italic leading-[1.75] text-gold-light">
              "Indoor with luxury interior, outdoor with rice field view — and great taste."
            </blockquote>
            <p className="mt-5 text-[0.62rem] tracking-wider uppercase text-moss">
              — Google Reviews, 2024
            </p>
          </div>

          {/* Stat row */}
          <div className="grid grid-cols-3 border-t-0 divide-x divide-gold/15 border border-gold/15 mt-px">
            {[
              { n: "3", l: "Zona Ruang" },
              { n: "50K", l: "Mulai Dari" },
              { n: "11H", l: "Jam / Hari" },
            ].map((s) => (
              <div key={s.l} className="bg-forest-2 py-5 text-center">
                <p className="font-playfair text-[1.9rem] text-gold-light leading-none">
                  {s.n}
                </p>
                <p className="text-[0.53rem] tracking-wider uppercase text-moss mt-1">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
