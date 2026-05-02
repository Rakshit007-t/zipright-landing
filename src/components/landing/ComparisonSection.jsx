import useReveal from './useReveal';

const rows = [
{ feature: 'AI size recommendation', us: '✓', gen: 'Partial', west: '✓' },
{ feature: 'Indian brand size charts (Libas, Biba, W…)', us: '✓', gen: '✗', west: '✗' },
{ feature: 'Reels-style immersive discover feed', us: '✓', gen: '✗', west: '✗' },
{ feature: 'Virtual try-on with your own body avatar', us: '✓', gen: '✗', west: 'Limited' },
{ feature: 'AI Stylist personalised to your fit', us: '✓', gen: '✗', west: '✗' },
{ feature: 'Size shown directly on product card', us: '✓', gen: '✗', west: '✗' },
{ feature: 'Works for ethnic & Indian silhouettes', us: '✓', gen: 'Partial', west: '✗' },
{ feature: 'Gamified rewards (ZipCoins, streaks)', us: '✓', gen: '✗', west: '✗' },
{ feature: 'DPDP Act 2023 compliance', us: '✓', gen: 'Partial', west: '✗' },
{ feature: 'Seller AI Model Generator', us: '✓', gen: '✗', west: '✗' }];


function CellValue({ value, isUs = false }) {
  if (value === '✓') return <span className={`text-[15px] ${isUs ? 'text-[#5dff8f]' : 'text-[#5dff8f]'}`}>✓</span>;
  if (value === '✗') return <span className="text-[15px] text-cream/20">✗</span>;
  return <span className="text-gold text-[11px] font-semibold">{value}</span>;
}

export default function ComparisonSection() {
  const ref = useReveal();

  return (
    <section id="compare" className="px-5 md:px-9 lg:px-[52px] py-16 md:py-[88px] bg-ob2 border-t border-gold/[0.18]" ref={ref}>
      <div className="text-[11px] uppercase tracking-[3px] text-gold font-semibold mb-4 flex items-center gap-2.5">
        <span className="w-5 h-px bg-gold" />Why ZipRIGHT
      </div>
      <h2 className="font-display text-[clamp(36px,10vw,66px)] tracking-wide leading-[0.94] mb-5">
        Not another<br /><span className="text-gold-light">shopping app.</span>
      </h2>
      <p className="text-cream/65 text-[15px] md:text-[16px] max-w-[540px] leading-[1.8] font-light">
        Most fashion apps were built for Western markets or just surface size charts. ZipRIGHT is the only platform built ground-up for how Indian bodies, brands, and buyers actually work.
      </p>

      <p className="md:hidden text-[12px] text-cream/40 italic text-center mt-4">← Scroll to compare →</p>

      <div className="reveal-item mt-9 lg:mt-12 rounded-[14px] md:rounded-[18px] overflow-hidden border border-gold/[0.18] overflow-x-auto" style={{ WebkitOverflowScrolling: 'touch' }}>
        <div className="min-w-[560px]">
          {/* Header */}
          <div className="grid grid-cols-[1.8fr_1fr_1fr_1fr] bg-ob3 border-b border-gold/[0.18]">
            <div className="p-3 md:p-4 text-[12px] text-cream/50 font-normal text-left">Feature</div>
            <div className="p-3 md:p-4 text-xs font-semibold text-gold-light text-center flex flex-col items-center gap-1">
              <span className="font-extrabold text-sm">Zip<span className="text-white">RIGHT</span></span>
              
            </div>
            <div className="p-3 md:p-4 text-[12px] text-cream/45 text-center">Generic<br />Shopping</div>
            <div className="p-3 md:p-4 text-[12px] text-cream/45 text-center">Western<br />Fit Tools</div>
          </div>

          {/* Rows */}
          {rows.map((r, i) =>
          <div key={i} className={`grid grid-cols-[1.8fr_1fr_1fr_1fr] hover:bg-gold/[0.03] transition-colors ${i < rows.length - 1 ? 'border-b border-cream/[0.06]' : ''}`}>
              <div className="p-3 md:px-4 md:py-3.5 text-[12px] md:text-[13px] text-cream/70 text-left flex items-center">{r.feature}</div>
              <div className="p-3 md:px-4 md:py-3.5 text-center flex items-center justify-center"><CellValue value={r.us} isUs /></div>
              <div className="p-3 md:px-4 md:py-3.5 text-center flex items-center justify-center"><CellValue value={r.gen} /></div>
              <div className="p-3 md:px-4 md:py-3.5 text-center flex items-center justify-center"><CellValue value={r.west} /></div>
            </div>
          )}
        </div>
      </div>

      <p className="mt-3.5 text-[12px] text-cream/35 text-center italic">
        Assessments are the view of ZipRIGHT's team based on publicly available information, 2025.
      </p>
    </section>);

}