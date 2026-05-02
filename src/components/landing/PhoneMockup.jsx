export default function PhoneMockup({ children, className = '', style = {} }) {
  return (
    <div
      className={`bg-ob2 rounded-[34px] border-[1.5px] border-gold/25 overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.04),inset_0_1px_0_rgba(255,255,255,0.07)] flex-shrink-0 ${className}`}
      style={style}
    >
      {/* Notch */}
      <div className="h-[22px] bg-obsidian flex items-center justify-center">
        <div className="w-[62px] h-[9px] bg-black rounded-full" />
      </div>
      {/* Screen */}
      <div className="bg-obsidian">
        {children}
      </div>
    </div>
  );
}

export function TabBar({ activeTab = 'Feed' }) {
  const tabs = [
    { icon: '🏠', label: 'Home' },
    { icon: '🎬', label: 'Feed' },
    { icon: '✨', label: 'Stylist' },
    { icon: '👤', label: 'Me' },
  ];
  return (
    <div className="flex bg-[#0e0e0e]/[0.98] border-t border-white/5 py-2">
      {tabs.map(t => (
        <div key={t.label} className={`flex-1 flex flex-col items-center gap-0.5 text-[6.5px] ${t.label === activeTab ? 'text-white' : 'text-grey'}`}>
          <span className="text-sm">{t.icon}</span>
          <span>{t.label}</span>
        </div>
      ))}
    </div>
  );
}