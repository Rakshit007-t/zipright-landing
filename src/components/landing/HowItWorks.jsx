import useReveal from './useReveal';

const steps = [
{ n: '01', icon: '📐', title: 'Build your Fit Profile', desc: 'Enter measurements or answer a few questions. Your personal sizing fingerprint is created in under 2 minutes — saved for every brand.', tag: 'Fit Profile' },
{ n: '02', icon: '🤖', title: 'AI analyses the garment', desc: 'Gemini AI cross-references your profile with brand-specific size charts for 18+ Indian fashion labels — fabric, cut, and fit type included.', tag: 'AI Engine' },
{ n: '03', icon: '✅', title: 'See your size on every product', desc: 'Your size badge floats right on the product card in the feed. No digging into charts. No guessing. Just there, every time.', tag: 'Size Badge' },
{ n: '04', icon: '🪞', title: 'Try it on virtually', desc: 'Use your Digital Twin to see how a garment drapes on your actual body before placing the order. What you see is what you get.', tag: 'Virtual Try-On' }];


export default function HowItWorks() {
  const ref = useReveal();

  return (
    <section id="how" className="px-5 md:px-9 lg:px-[52px] py-16 md:py-[88px]" ref={ref}>
      <div className="text-[11px] uppercase tracking-[3px] text-gold font-semibold mb-4 flex items-center gap-2.5">
        <span className="w-5 h-px bg-gold" />How It Works
      </div>
      <h2 className="font-display text-[clamp(36px,10vw,66px)] tracking-wide leading-[0.94] mb-5">
        Size intelligence<br />in <span className="text-gold-light">4 steps</span>
      </h2>
      <p className="text-cream/65 text-[15px] md:text-[16px] max-w-[540px] leading-[1.8] font-light">
        ZipRIGHT doesn't guess a size — it learns your body, cross-references brand charts, and tells you exactly how a garment will fit before you click Buy.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mt-10 lg:mt-[52px]">
        {steps.map((s) =>
        <div key={s.n} className="reveal-item relative bg-ob2 border border-cream/[0.06] rounded-[18px] p-5 md:p-6 overflow-hidden hover:border-gold/[0.18] hover:-translate-y-1 transition-all duration-300">
            <span className="text-gold/[0.06] px-3 py-6 text-4xl font-display leading-none absolute -top-2 right-2.5 md:text-[68px] select-none">{s.n}</span>
            <span className="text-[28px] block mb-3.5">{s.icon}</span>
            <div className="text-[14px] font-semibold mb-2 text-cream">{s.title}</div>
            <div className="text-[13px] text-cream/60 leading-[1.7]">{s.desc}</div>
            <span className="inline-block mt-3 bg-gold/[0.08] border border-gold/20 rounded-full px-2.5 py-[3px] text-[10px] text-gold-light uppercase tracking-widest">{s.tag}</span>
          </div>
        )}
      </div>
    </section>);

}
