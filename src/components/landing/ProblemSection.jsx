import useReveal from './useReveal';

const stats = [
  { num: '40%', label: 'of all fashion returns are due to incorrect sizing' },
  { num: '₹9K Cr', label: 'lost annually to returns across Indian e-commerce' },
  { num: '67%', label: 'of shoppers abandon cart due to size uncertainty' },
  { num: '3×', label: 'more repeat purchases after a perfect fit experience' },
];

const pains = [
  { icon: '📏', title: 'No standardised sizing in India', desc: 'An "M" in Libas fits nothing like an "M" in Biba or W. Every brand is different, every time.' },
  { icon: '📦', title: 'Returns destroy seller margins', desc: 'Reverse logistics and restocking eat 15–20% of revenue. Small sellers can\'t afford it.' },
  { icon: '😤', title: 'Buyers lose trust in online shopping', desc: 'One bad experience pushes shoppers away from buying fashion online entirely.' },
  { icon: '🌍', title: 'Returned fashion rarely gets resold', desc: 'Most returned garments end up in landfills. It\'s an environmental problem as much as an economic one.' },
];

export default function ProblemSection() {
  const ref = useReveal();

  return (
    <section id="problem" className="px-5 md:px-9 lg:px-[52px] py-16 md:py-[88px] bg-ob2 border-t border-b border-gold/[0.18]" ref={ref}>
      <div className="text-[11px] uppercase tracking-[3px] text-gold font-semibold mb-4 flex items-center gap-2.5">
        <span className="w-5 h-px bg-gold" />The Problem
      </div>
      <h2 className="font-display text-[clamp(36px,10vw,66px)] tracking-wide leading-[0.94] mb-5">
        India's fashion<br /><span className="text-white/50">return crisis</span>
      </h2>
      <p className="text-cream/65 text-[15px] md:text-[16px] max-w-[540px] leading-[1.8] font-light">
        Every year, millions of Indian shoppers receive clothes that don't fit. The root cause? Almost always the wrong size — and nobody has solved it for India's fragmented fashion market.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-[52px] mt-10 lg:mt-[52px]">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {stats.map(s => (
            <div key={s.num} className="reveal-item bg-ob3 border border-gold/[0.18] rounded-[14px] md:rounded-[18px] p-5 md:p-6 hover:border-gold/45 transition-colors">
              <div className="font-display text-4xl md:text-[44px] leading-none bg-gradient-to-br from-white to-white/50 bg-clip-text" style={{ WebkitTextFillColor: 'transparent' }}>
                {s.num}
              </div>
              <div className="text-[12px] md:text-[13px] text-cream/65 mt-2 leading-relaxed">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Pain points */}
        <div className="flex flex-col gap-3.5">
          {pains.map(p => (
            <div key={p.title} className="reveal-item flex items-start gap-4 p-4 md:p-5 bg-ob3 border border-cream/[0.06] rounded-[14px] hover:border-gold/[0.18] transition-colors">
              <span className="text-xl flex-shrink-0 mt-0.5">{p.icon}</span>
              <div>
                <div className="font-semibold text-[14px] mb-1.5 text-cream">{p.title}</div>
                <div className="text-[13px] text-cream/60 leading-[1.7]">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}