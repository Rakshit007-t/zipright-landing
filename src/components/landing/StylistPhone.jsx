import PhoneMockup, { TabBar } from './PhoneMockup';

export default function StylistPhone({ className = '' }) {
  return (
    <PhoneMockup className={className}>
      <div className="p-0 flex-1 flex flex-col">
        {/* Header */}
        <div className="px-2.5 py-2 flex items-center gap-2 border-b border-white/5">
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-[11px]" style={{ background: 'linear-gradient(135deg, var(--gold), var(--pink))' }}>✨</div>
          <div>
            <div className="text-[9px] font-semibold text-cream">Zippi · AI Stylist</div>
            <div className="text-[7px] text-[#5dff8f]">● Online</div>
          </div>
        </div>

        {/* Chat messages */}
        <div className="px-2 py-2 flex flex-col gap-2 flex-1">
          <div className="self-start max-w-[80%] bg-ob3 border border-gold/[0.18] rounded-[3px_12px_12px_12px] px-2 py-[7px] text-[8.5px] leading-relaxed text-cream">
            Try draped anarkali, size M — perfect for Eid 🌙
          </div>
          <div className="self-end max-w-[72%] rounded-[12px_3px_12px_12px] px-2 py-[7px] text-[8.5px] text-white leading-relaxed" style={{ background: 'linear-gradient(135deg, var(--pink), #ff7a94)' }}>
            Something for college?
          </div>
          <div className="self-start max-w-[80%] bg-ob3 border border-gold/[0.18] rounded-[3px_12px_12px_12px] px-2 py-[7px] text-[8.5px] leading-relaxed text-cream">
            Co-ord sets! Your S/34 fits Biba's new drop perfectly ✨
          </div>
        </div>

        {/* Input */}
        <div className="flex gap-1.5 px-2 py-1.5 border-t border-white/5">
          <div className="flex-1 bg-ob3 border border-gold/[0.18] rounded-full px-2.5 py-1.5 text-[7.5px] text-grey">Ask your stylist...</div>
          <div className="w-6 h-6 rounded-full bg-pink flex items-center justify-center text-[10px]">➤</div>
        </div>
      </div>
      <TabBar activeTab="Stylist" />
    </PhoneMockup>
  );
}