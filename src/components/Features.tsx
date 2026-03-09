"use client";

import { useContext, useEffect, useRef } from "react";
import {
  MusicNotes, WifiHigh, Car, Door,
  Coffee, Basket, CreditCard, Baby,
} from "@phosphor-icons/react";
import { FEATURES } from "@/lib/data";
import SectionLabel from "./SectionLabel";
import { MyContext } from "@/context/MyProvider";

// Map icon name → component (keeps tree-shaking intact)
const ICON_MAP = {
  MusicNotes, WifiHigh, Car, Door,
  Coffee, Basket, CreditCard, Baby,
} as const;

type IconKey = keyof typeof ICON_MAP;

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const { value, setValue } = useContext(MyContext);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".rv");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="features" className="bg-forest py-28 px-6 md:px-20" ref={ref}>
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14 rv reveal">
          <SectionLabel>Fasilitas &amp; Keunggulan</SectionLabel>
          <h2 className="font-playfair font-semibold text-4xl md:text-5xl leading-[1.1] text-cream mt-1">
            Semua yang Kamu{" "}
            <em className="text-gold-light not-italic">Butuhkan</em>
          </h2>
        </div>

        {/* Grid of features */}
        <div
          className="rv reveal grid grid-cols-2 md:grid-cols-4 gap-px bg-gold/10"
          style={{ transitionDelay: "0.1s" }}
        >
          {FEATURES.map((f) => {
            const Icon = ICON_MAP[f.icon as IconKey];
            return (
              <div
                key={f.name}
                className="group bg-forest-2 px-7 py-10 text-center
                           transition-colors duration-300 hover:bg-[#162b1c]"
              >
                {/* Icon ring */}
                <div
                  className="w-14 h-14 rounded-full border border-gold/20 bg-gold/[0.05]
                              flex items-center justify-center mx-auto mb-5
                              transition-all duration-300
                              group-hover:border-gold/40 group-hover:bg-gold/[0.09]"
                >
                  {Icon && (
                    <Icon
                      size={26}
                      weight="thin"
                      className="text-gold transition-colors duration-300 group-hover:text-gold-light"
                    />
                  )}
                </div>

                <h4 className="font-playfair text-[1.05rem] text-cream mb-2">
                  {f.name}
                </h4>
                <p className="text-[0.73rem] leading-[1.7] text-moss">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}