import ReelsPhone from './ReelsPhone';
import StylistPhone from './StylistPhone';

export default function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative min-h-screen md:min-h-screen flex flex-col lg:flex-row items-start lg:items-center gap-9 lg:gap-14 px-5 md:px-9 lg:px-[52px] pt-24 md:pt-28 lg:pt-32 pb-20 lg:pb-[72px] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0" style={{ background: 'radial-gradient(ellipse 55% 50% at 75% 50%,rgba(200,200,200,0.04) 0%,transparent 70%), radial-gradient(ellipse 35% 40% at 15% 75%,rgba(150,150,150,0.03) 0%,transparent 65%)' }} />

      {/* Left content */}
      <div className="relative z-10 flex-1 min-w-0">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.15] px-4 py-[7px] rounded-full text-[10px] md:text-[11px] font-semibold uppercase tracking-widest text-cream/70 mb-5 md:mb-7">
          <span className="w-[5px] h-[5px] rounded-full bg-white/80 flex-shrink-0" style={{ animation: 'pulse-dot 2s ease infinite' }} />
          Launching Soon · Google Play
        </div>

        {/* Title */}
        <h1 className="leading-none font-bold mb-1.5">
          <span className="block text-[clamp(28px,8vw,52px)] font-extrabold tracking-tight">
            <span className="text-cream">Zip</span><span className="text-white">RIGHT</span>
          </span>
          <span className="block font-display text-[clamp(48px,13vw,100px)] tracking-wider leading-[0.9] mt-1.5">
            <span className="text-cream">WEAR </span>
            <span className="bg-gradient-to-r from-white to-cream/70 bg-clip-text" style={{ WebkitTextFillColor: 'transparent' }}>WHAT </span>
            <span className="text-white/50">FITS.</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-[15px] md:text-[17px] text-cream/70 leading-[1.75] max-w-full lg:max-w-[460px] mt-5 mb-7 md:mt-6 md:mb-10 font-light">
          India's first AI-powered fashion platform that gives you your <strong className="text-cream font-medium">exact size before you buy</strong> — with a Reels-style feed, virtual try-on, and a personal AI stylist built for Indian fashion.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5">
          <div className="flex items-center justify-center gap-2.5 bg-ob3 border border-gold text-gold-light px-5 py-3.5 rounded-xl text-sm font-medium min-h-[52px]">
            <span className="text-lg">▶</span>
            <div>
              <div className="text-[9px] text-grey uppercase tracking-widest leading-none">Coming Soon</div>
              <div className="text-sm font-semibold leading-tight mt-0.5 flex items-center gap-1.5">
                Google Play
                <span className="bg-pink/[0.12] border border-pink/30 text-pink text-[9px] font-bold uppercase tracking-wide px-[7px] py-px rounded-full">Soon</span>
              </div>
            </div>
          </div>
          <button onClick={() => scrollTo('#notify')} className="flex items-center justify-center gap-2 border border-gold/[0.18] text-cream/60 px-5 py-3.5 rounded-xl text-sm hover:border-gold-light hover:text-gold-light transition-colors min-h-[52px]">
            🔔 Notify Me
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-5 md:gap-8 mt-9 md:mt-[52px] pt-6 md:pt-8 border-t border-cream/[0.06]">
          {[
          { num: '40%', label: 'Returns are size-related' },
          { num: '₹9K Cr', label: 'Lost to returns yearly' },
          { num: '18+', label: 'Indian brands supported' }].
          map((s) =>
          <div key={s.num}>
              <div className="font-display text-[26px] md:text-[32px] text-white tracking-wide leading-none">{s.num}</div>
              <div className="text-[10px] md:text-[11px] text-cream/45 uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          )}
        </div>
      </div>

      {/* Right phones */}
      <div className="relative z-10 w-full lg:w-auto flex items-center justify-center gap-4 lg:gap-[18px] flex-shrink-0" style={{ filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.8))' }}>
        <StylistPhone className="hidden lg:flex flex-col w-[182px] opacity-60 scale-90 translate-y-6" />
        <ReelsPhone />
      </div>
    </section>);

}