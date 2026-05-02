import useReveal from './useReveal';
import TryOnPhone from './TryOnPhone';

const steps = [
  { n: '01', title: 'Capture 5 photos', desc: 'Take photos from different angles using your phone. No special equipment needed.' },
  { n: '02', title: 'AI builds your Digital Twin', desc: 'Our engine constructs a 3D avatar matching your measurements, proportions, and body shape — uniquely you.' },
  { n: '03', title: 'Try any garment on your twin', desc: 'Tap "Virtual Try-On" on any product. See the garment draped accurately on your body before buying.' },
  { n: '04', title: 'Buy with complete confidence', desc: 'When it looks right on your Digital Twin, it fits right on you. Add to cart knowing exactly what you\'re getting.' },
];

export default function VirtualTryOn() {
  const ref = useReveal();

  return (
    <section id="tryon" className="px-5 md:px-9 lg:px-[52px] py-16 md:py-[88px]" ref={ref}>
      <div className="text-[11px] uppercase tracking-[3px] text-gold font-semibold mb-4 flex items-center gap-2.5">
        <span className="w-5 h-px bg-gold" />Virtual Try-On
      </div>
      <h2 className="font-display text-[clamp(36px,10vw,66px)] tracking-wide leading-[0.94] mb-5">
        See it on <span className="text-gold-light">you,</span><br />before you <span className="text-pink">buy it.</span>
      </h2>
      <p className="text-cream/65 text-[15px] md:text-[16px] max-w-[540px] leading-[1.8] font-light">
        Most apps show a model who looks nothing like you. ZipRIGHT builds a digital twin of your actual body and lets you try clothes on it — so what you see is genuinely what you get.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[60px] mt-10 lg:mt-[52px]">
        {/* Phone first on mobile */}
        <div className="flex justify-center lg:order-2" style={{ animation: 'float-gentle 5s ease-in-out infinite' }}>
          <TryOnPhone showFull title="Block-Print Kurta · W" badge="Size M" outfit="blue" />
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-4 lg:order-1">
          {steps.map(s => (
            <div key={s.n} className="reveal-item flex items-center gap-4 p-4 md:p-5 bg-ob2 border border-cream/[0.06] rounded-[14px]">
              <span className="font-display text-[28px] text-gold leading-none min-w-[26px]">{s.n}</span>
              <div>
                <div className="text-[14px] font-medium mb-1 text-cream">{s.title}</div>
                <div className="text-[13px] text-cream/60 leading-[1.7]">{s.desc}</div>
              </div>
            </div>
          ))}

          {/* Privacy note */}
          <div className="reveal-item p-4 bg-gold/5 border border-gold/[0.18] rounded-xl text-[13px] text-cream/55 leading-[1.7]">
            🔒 Your photos are processed locally and never shared. ZipRIGHT is <strong className="text-cream/75">DPDP Act 2023</strong> compliant.
          </div>
        </div>
      </div>
    </section>
  );
}