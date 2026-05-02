import PhoneMockup, { TabBar } from './PhoneMockup';

function AvatarSVG({ width = 130, height = 230, id = '1', outfit = 'gold' }) {
  const outfits = {
    gold: { start: '#C9A06C', end: '#7a4f20', accent: 'rgba(232,201,138,0.3)', stroke: 'rgba(181,133,63,0.35)' },
    blue: { start: '#64b4ff', end: '#1a5c9e', accent: 'rgba(100,180,255,0.3)', stroke: 'rgba(100,180,255,0.35)' },
    pink: { start: '#ff7eb3', end: '#a81e59', accent: 'rgba(255,126,179,0.3)', stroke: 'rgba(255,126,179,0.35)' }
  };
  const c = outfits[outfit] || outfits.gold;

  return (
    <svg width={width} height={height} viewBox="0 0 130 230">
      <defs>
        <linearGradient id={`skin${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c68642" stopOpacity="1" />
          <stop offset="100%" stopColor="#a0522d" stopOpacity="1" />
        </linearGradient>
        <linearGradient id={`dg${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={c.start} stopOpacity="0.85" />
          <stop offset="100%" stopColor={c.end} stopOpacity="0.6" />
        </linearGradient>
      </defs>
      <ellipse cx="65" cy="28" rx="16" ry="18" fill={`url(#skin${id})`} />
      <path d="M49 22 Q52 8 65 8 Q78 8 81 22 Q74 14 65 14 Q56 14 49 22Z" fill="#2a1a0a" />
      <rect x="61" y="44" width="8" height="10" fill={`url(#skin${id})`} rx="2" />
      {outfit === 'gold' && (
        <>
          <path d={`M35 52 Q25 65 22 85 L18 190 Q17 202 65 204 Q113 202 112 190 L108 85 Q105 65 95 52 Q82 46 65 46 Q48 46 35 52Z`} fill={`url(#dg${id})`} />
          <path d="M35 52 Q18 60 16 80 Q22 85 34 80 Q32 65 42 58Z" fill={`url(#dg${id})`} opacity="0.9" />
          <path d="M95 52 Q112 60 114 80 Q108 85 96 80 Q98 65 88 58Z" fill={`url(#dg${id})`} opacity="0.9" />
          <path d="M55 54 Q65 64 75 54 Q68 72 65 73 Q62 72 55 54Z" fill={c.accent} />
          <path d="M17 190 Q65 200 113 190" stroke={c.stroke} strokeWidth="1" fill="none" />
        </>
      )}

      {outfit === 'blue' && (
        <>
          <path d="M45 130 L40 200 L55 200 L60 130 Z" fill="#2d3748" />
          <path d="M85 130 L90 200 L75 200 L70 130 Z" fill="#2d3748" />
          <path d={`M35 52 Q25 65 28 85 L26 150 Q25 155 65 155 Q105 155 104 150 L102 85 Q105 65 95 52 Q82 46 65 46 Q48 46 35 52Z`} fill={`url(#dg${id})`} />
          <path d="M35 52 Q18 60 14 100 Q20 102 30 100 Q32 65 42 58Z" fill={`url(#dg${id})`} opacity="0.9" />
          <path d="M95 52 Q112 60 116 100 Q110 102 100 100 Q98 65 88 58Z" fill={`url(#dg${id})`} opacity="0.9" />
          <path d="M60 48 L65 65 L70 48 Z" fill={c.accent} />
        </>
      )}

      {outfit === 'pink' && (
        <>
          <path d={`M30 90 L20 190 Q18 202 65 204 Q112 202 110 190 L100 90 Q65 95 30 90Z`} fill={`url(#dg${id})`} />
          <path d="M19 190 Q65 200 111 190" stroke={c.stroke} strokeWidth="1" fill="none" />
          <path d={`M38 52 Q35 65 35 80 Q65 85 95 80 Q95 65 92 52 Q82 46 65 46 Q48 46 38 52Z`} fill={`url(#dg${id})`} opacity="0.95" />
          <path d="M30 90 Q65 110 100 90" stroke={c.accent} strokeWidth="4" fill="none" />
        </>
      )}
      <ellipse cx="16" cy="80" rx="6" ry="5" fill={`url(#skin${id})`} />
      <ellipse cx="114" cy="80" rx="6" ry="5" fill={`url(#skin${id})`} />
      <rect x="50" y="202" width="12" height="24" fill="#3a2a1a" rx="3" />
      <rect x="68" y="202" width="12" height="24" fill="#3a2a1a" rx="3" />
    </svg>
  );
}

export default function TryOnPhone({ className = '', title = 'Virtual Try-On', badge = 'BETA', showFull = false, outfit = 'gold' }) {
  return (
    <PhoneMockup className={className} style={showFull ? { width: 'min(230px, 70vw)' } : {}}>
      <div className="flex flex-col" style={{ height: showFull ? 'auto' : undefined }}>
        {/* Header */}
        <div className="px-3 py-2.5 flex items-center gap-2 border-b border-cream/[0.06]">
          <span className="text-sm text-grey">←</span>
          <span className="text-[11px] font-semibold text-cream flex-1">{title}</span>
          <span className="bg-pink/[0.12] border border-pink/25 rounded-full px-2 py-0.5 text-[7px] font-semibold text-pink tracking-wide">{badge}</span>
        </div>

        {/* Canvas */}
        <div className="relative flex items-center justify-center min-h-[270px]" style={{ background: 'linear-gradient(180deg,#1a1520 0%,#0f1a14 100%)', height: showFull ? 380 : 270 }}>
          <AvatarSVG width={showFull ? 145 : 130} height={showFull ? 260 : 230} id={showFull ? 'full' : 'sm'} outfit={outfit} />
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#5dff8f]/[0.12] border border-[#5dff8f]/35 rounded-full px-2.5 py-0.5 text-[7px] text-[#5dff8f] font-semibold tracking-wide">
            ✓ Perfect Fit · Size M
          </div>
        </div>

        {/* Controls */}
        <div className="p-2 flex gap-1.5 border-t border-cream/[0.06]">
          <button className="flex-1 py-[7px] rounded-lg text-[8px] font-semibold text-center bg-ob3 border border-gold/[0.18] text-gold-light">
            ← {showFull ? 'Try Another' : 'Change Outfit'}
          </button>
          <button className="flex-1 py-[7px] rounded-lg text-[8px] font-semibold text-center bg-pink text-white">
            Add to Cart 🛒
          </button>
        </div>
      </div>
      <TabBar activeTab="Feed" />
    </PhoneMockup>
  );
}