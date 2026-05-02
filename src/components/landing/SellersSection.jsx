import useReveal from './useReveal';

const cards = [
  { icon: '🤖', title: 'AI Model Generator', desc: 'Generate professional fashion model photos from product images. No photoshoot. Multiple Indian skin tones and backgrounds.' },
  { icon: '📊', title: 'Analytics Dashboard', desc: 'Track views, conversions, and return rates by product. Understand your size-match rate and what\'s working.' },
  { icon: '📏', title: 'Size Chart Sync', desc: 'Upload your measurement chart once. ZipRIGHT auto-maps every buyer\'s Fit Profile to the right size for your garments.' },
  { icon: '💸', title: 'Return Cost Reduction', desc: 'Brands on ZipRIGHT see up to 60% fewer size-related returns. Less reverse logistics, more margin.' },
];

const barHeights = ['28%', '42%', '35%', '60%', '50%', '75%', '100%'];

export default function SellersSection() {
  const ref = useReveal();

  return (
    <section id="sellers" className="px-5 md:px-9 lg:px-[52px] py-16 md:py-[88px]" ref={ref}>
      <div className="text-[10px] uppercase tracking-[3px] text-gold font-semibold mb-3.5 flex items-center gap-2.5">
        <span className="w-5 h-px bg-gold" />For Sellers
      </div>
      <h2 className="font-display text-[clamp(36px,10vw,66px)] tracking-wide leading-[0.94] mb-4">
        Fewer returns.<br /><span className="text-gold-light">More revenue.</span>
      </h2>
      <p className="text-cream/55 text-sm md:text-[15px] max-w-[520px] leading-relaxed md:leading-[1.8] font-light">
        ZipRIGHT works both ways. Buyers get the right size — your return rate drops. It's the first platform where fixing buyer experience directly improves your bottom line.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-[52px] mt-9 lg:mt-[52px]">
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {cards.map(c => (
            <div key={c.title} className="reveal-item bg-ob2 border border-cream/[0.06] rounded-2xl p-4 md:p-5 hover:-translate-y-1 hover:border-gold/[0.18] transition-all duration-300">
              <span className="text-2xl block mb-2.5">{c.icon}</span>
              <div className="font-semibold text-[13px] mb-1.5 text-cream">{c.title}</div>
              <div className="text-[11px] text-cream/45 leading-relaxed">{c.desc}</div>
            </div>
          ))}
          {/* Full-width card */}
          <div className="reveal-item sm:col-span-2 bg-ob2 border border-cream/[0.06] rounded-2xl p-4 md:p-5 hover:-translate-y-1 hover:border-gold/[0.18] transition-all duration-300">
            <span className="text-2xl block mb-2.5">🚀</span>
            <div className="font-semibold text-[13px] mb-1.5 text-cream">Early Partner Program</div>
            <div className="text-[11px] text-cream/45 leading-relaxed">We're onboarding founding seller partners at no cost during our launch phase. Get in early, shape the platform, and grow with us.</div>
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="reveal-item bg-ob2 border border-gold/[0.18] rounded-[18px] p-4 md:p-[18px]">
          <div className="flex justify-between items-center mb-3.5 pb-3 border-b border-cream/[0.06]">
            <div className="text-[11px] font-semibold text-gold-light uppercase tracking-widest">Seller Dashboard</div>
            <div className="bg-[#5dff8f]/[0.08] border border-[#5dff8f]/20 rounded-full px-2.5 py-0.5 text-[9px] text-[#5dff8f]">↑ 23% this week</div>
          </div>
          <div className="grid grid-cols-2 gap-2.5 mb-3.5">
            {[
              { val: '2,841', label: 'Product Views' },
              { val: '94%', label: 'Size Match Rate' },
              { val: '12', label: 'Returns This Month', color: 'text-pink' },
              { val: '₹1.2L', label: 'Revenue Saved' },
            ].map(m => (
              <div key={m.label} className="bg-ob3 border border-cream/[0.06] rounded-[10px] p-2.5">
                <div className={`font-display text-[22px] ${m.color || 'text-gold-light'}`}>{m.val}</div>
                <div className="text-[8px] text-grey uppercase tracking-widest">{m.label}</div>
              </div>
            ))}
          </div>
          <div className="text-[9px] text-grey uppercase tracking-widest mb-2">Weekly Revenue</div>
          <div className="flex items-end gap-1 h-[42px]">
            {barHeights.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-[3px]"
                style={{
                  height: h,
                  background: i === barHeights.length - 1
                    ? 'linear-gradient(180deg, var(--pink), rgba(255,77,109,0.25))'
                    : 'linear-gradient(180deg, var(--gold), rgba(181,133,63,0.25))',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}