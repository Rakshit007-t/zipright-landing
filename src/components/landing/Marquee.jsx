const items = [
  { text: 'AI SIZE ENGINE', gold: true },
  { text: 'FIT PROFILE', gold: false },
  { text: 'VIRTUAL TRY-ON', gold: true },
  { text: 'REELS-STYLE FEED', gold: false },
  { text: 'AI STYLIST', gold: true },
  { text: 'DIGITAL TWIN', gold: false },
  { text: 'ZIPCOIN REWARDS', gold: true },
  { text: 'ZERO RETURNS', gold: false },
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden py-3.5 md:py-[18px] bg-ob2 border-t border-b border-gold/[0.18]">
      <div className="flex w-max" style={{ animation: 'marquee-scroll 26s linear infinite' }}>
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`px-4 md:px-6 font-display text-[13px] md:text-[15px] tracking-[4px] whitespace-nowrap flex items-center gap-4 ${item.gold ? 'text-gold-light' : 'text-cream/[0.12]'}`}
          >
            {item.text}
            <span className="w-[5px] h-[5px] rounded-full bg-pink flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}