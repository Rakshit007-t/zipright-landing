import PhoneMockup, { TabBar } from './PhoneMockup';

export default function ReelsPhone({ className = '' }) {
  return (
    <PhoneMockup className={className} style={{ width: 'min(220px, 58vw)' }}>
      <div className="relative h-[340px] sm:h-[380px] overflow-hidden">
        {/* Cloth background */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'linear-gradient(160deg,#1c2535 0%,#251c28 40%,#1a2420 100%)' }}>
          <svg width="108" height="200" viewBox="0 0 110 210">
            <defs>
              <linearGradient id="kg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C9A06C" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#7a5220" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            <path d="M42 20 Q55 30 68 20 Q60 40 55 42 Q50 40 42 20Z" fill="rgba(232,201,138,0.3)" stroke="rgba(201,160,108,0.6)" strokeWidth="1" />
            <path d="M20 22 Q10 38 8 60 L4 180 Q3 196 55 198 Q107 196 106 180 L102 60 Q100 38 90 22 Q72 16 55 16 Q38 16 20 22Z" fill="url(#kg)" />
            <path d="M20 22 Q4 30 2 55 Q8 60 20 55 Q18 38 28 28Z" fill="url(#kg)" opacity="0.9" />
            <path d="M90 22 Q106 30 108 55 Q102 60 90 55 Q92 38 82 28Z" fill="url(#kg)" opacity="0.9" />
            <ellipse cx="55" cy="70" rx="14" ry="18" fill="none" stroke="rgba(232,201,138,0.3)" strokeWidth="1" />
            <path d="M4 180 Q55 190 106 180" stroke="rgba(181,133,63,0.4)" strokeWidth="1" fill="none" />
          </svg>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg,rgba(0,0,0,0.08) 0%,rgba(0,0,0,0.7) 72%,rgba(0,0,0,0.92) 100%)' }} />

        {/* Scroll dots */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 flex gap-1">
          <div className="w-[5px] h-[5px] rounded-full bg-white/20" />
          <div className="w-[14px] h-[5px] rounded-[3px] bg-white" />
          <div className="w-[5px] h-[5px] rounded-full bg-white/20" />
          <div className="w-[5px] h-[5px] rounded-full bg-white/20" />
        </div>

        {/* Actions */}
        <div className="absolute right-2.5 bottom-[88px] flex flex-col items-center gap-4">
          {[
            { icon: '❤️', count: '2.4k', liked: true },
            { icon: '🔖', count: 'Save' },
            { icon: '🛒', count: 'Buy' },
            { icon: '↑', count: 'Share' },
          ].map((a, i) => (
            <div key={i} className="flex flex-col items-center gap-0.5">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center text-[15px] backdrop-blur-lg ${a.liked ? 'bg-pink/25 border border-pink/40' : 'bg-white/10'}`}>
                {a.icon}
              </div>
              <span className="text-[7.5px] text-white/70 font-medium">{a.count}</span>
            </div>
          ))}
        </div>

        {/* Size chip */}
        <div className="absolute left-2.5 bottom-[93px] bg-obsidian/[0.92] border border-gold rounded-[10px] p-2 backdrop-blur-xl" style={{ animation: 'chip-float 4s ease-in-out infinite' }}>
          <div className="text-[6px] text-gold font-semibold uppercase tracking-widest">Your Size</div>
          <div className="font-display text-[22px] text-cream leading-none">M</div>
          <div className="text-[6px] text-[#5dff8f] font-medium">✓ Great fit</div>
        </div>

        {/* Reel info */}
        <div className="absolute bottom-11 left-2.5 right-[52px]">
          <div className="text-[8px] text-gold-light uppercase tracking-widest font-semibold">W by Westside</div>
          <div className="text-xs font-semibold text-white mt-0.5">Block-Print Cotton Kurta</div>
          <div className="text-[11px] text-white/80">₹1,099 <s className="text-grey text-[9px]">₹1,899</s></div>
        </div>

        {/* Try-on button */}
        <div className="absolute bottom-2 left-2.5 right-2.5 bg-gradient-to-br from-gold/25 to-gold/10 border border-gold/45 rounded-lg py-[7px] text-center text-[9px] font-semibold text-gold-light flex items-center justify-center gap-1">
          🪞 Virtual Try-On
        </div>
      </div>
      <TabBar activeTab="Feed" />
    </PhoneMockup>
  );
}