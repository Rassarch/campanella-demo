import { TICKER_ITEMS } from "@/lib/data";

export default function Ticker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="border-y border-gold/15 py-3.5 overflow-hidden bg-gold/[0.03]">
      <div className="flex w-max animate-ticker">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="text-[0.67rem] tracking-widest uppercase text-gold px-8 whitespace-nowrap">
              {item}
            </span>
            <span className="text-gold/25 text-sm">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
