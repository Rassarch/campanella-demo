export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.58rem] tracking-widest uppercase text-gold mb-2.5">
      {children}
    </p>
  );
}
