const items = [
  { emoji: '🇮🇳', highlight: 'Made in Patna, India', rest: '' },
  { emoji: '🔐', highlight: 'DPDP 2023', rest: 'Compliant' },
  { emoji: '🤖', highlight: 'Gemini AI', rest: 'Powered' },
  { emoji: '📦', highlight: '18+ brands', rest: 'supported' },
  { emoji: '♻️', highlight: '', rest: 'Fighting', after: 'fashion waste' },
];

export default function TrustBar() {
  return (
    <div className="grid grid-cols-2 md:flex md:items-center md:justify-center gap-3 md:gap-8 px-5 md:px-[52px] py-5 md:py-6 border-b border-cream/[0.06]">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-2 text-[12px] md:text-[13px] text-cream/50">
          <span>{item.emoji}</span>
          {item.highlight && <span className="text-gold-light font-medium">{item.highlight}</span>}
          {item.rest && <span>{item.rest}</span>}
          {item.after && <span className="text-gold-light font-medium">{item.after}</span>}
        </div>
      ))}
    </div>
  );
}