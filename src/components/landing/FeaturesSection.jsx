import useReveal from './useReveal';
import TryOnPhone from './TryOnPhone';
import RewardsPhone from './RewardsPhone';

const features = [
  { icon: '🎬', bg: 'bg-gold/[0.12]', title: 'Reels-Style Discover Feed', desc: 'Scroll through fashion like Instagram Reels — full-screen, vertical, and immersive. Every product already shows your exact size and fit confidence. No more opening product pages to check.' },
  { icon: '✨', bg: 'bg-pink/[0.12]', title: 'AI Stylist — Zippi', desc: 'Chat with your personal AI stylist. Get outfit suggestions for occasions, style advice for your body type — all in conversation, all in your correct size.' },
  { icon: '🪞', bg: 'bg-[#5dff8f]/10', title: 'Virtual Try-On', desc: 'See how a garment actually looks on your body before buying. Powered by your Digital Twin — a 3D avatar built from just 5 photos of you.' },
  { icon: '🪙', bg: 'bg-[#64b4ff]/10', title: 'ZipCoins & Rewards', desc: 'Earn coins for Fit Reviews, daily streaks, and sharing outfits. Redeem them for discounts. Shopping that actually rewards getting it right.' },
];

export default function FeaturesSection() {
  const ref = useReveal();

  return (
    <section id="features" className="px-5 md:px-9 lg:px-[52px] py-16 md:py-[88px] bg-ob2" ref={ref}>
      <div className="text-[11px] uppercase tracking-[3px] text-gold font-semibold mb-4 flex items-center gap-2.5">
        <span className="w-5 h-px bg-gold" />Features
      </div>
      <h2 className="font-display text-[clamp(36px,10vw,66px)] tracking-wide leading-[0.94] mb-5">
        Built different.<br /><span className="text-gold-light">Built for India.</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-16 mt-10 lg:mt-[52px]">
        {/* Feature list */}
        <div className="flex flex-col gap-4">
          {features.map(f => (
            <div key={f.title} className="reveal-item flex gap-4 p-4 md:p-5 bg-ob3 border border-cream/[0.06] rounded-[14px] hover:border-gold/[0.18] transition-all duration-200">
              <div className={`w-[40px] h-[40px] md:w-[44px] md:h-[44px] rounded-[10px] flex-shrink-0 flex items-center justify-center text-lg ${f.bg}`}>
                {f.icon}
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-[14px] mb-1.5 text-cream">{f.title}</div>
                <div className="text-[13px] text-cream/60 leading-[1.7]">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Phone mockups */}
        <div className="flex justify-center items-center relative h-full">
          <div className="relative flex justify-center w-full max-w-[280px]">
            <RewardsPhone className="absolute -right-4 lg:-right-8 top-12 w-[160px] lg:w-[170px] opacity-70 z-0 hidden sm:block scale-95" style={{ transform: 'rotate(6deg)' }} />
            <TryOnPhone outfit="pink" className="w-[min(210px,62vw)] lg:w-[216px] z-10 relative sm:-left-8" style={{ animation: 'float-gentle 6s ease-in-out infinite', filter: 'drop-shadow(20px 20px 40px rgba(0,0,0,0.8))' }} />
          </div>
        </div>
      </div>
    </section>
  );
}