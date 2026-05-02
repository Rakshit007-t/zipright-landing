import PhoneMockup, { TabBar } from './PhoneMockup';

export default function RewardsPhone({ className = '', style = {} }) {
  return (
    <PhoneMockup className={className} style={style}>
      <div className="flex flex-col bg-obsidian h-full">
        {/* Header */}
        <div className="px-3 py-2.5 flex items-center justify-between border-b border-cream/[0.06]">
          <span className="text-[11px] font-semibold text-cream">Rewards</span>
          <span className="bg-[#64b4ff]/[0.12] border border-[#64b4ff]/25 rounded-full px-2 py-0.5 text-[7px] font-semibold text-[#64b4ff] tracking-wide">LEVEL 3</span>
        </div>

        <div className="p-3 flex flex-col gap-3 flex-1">
          {/* Balance Card */}
          <div className="bg-gradient-to-br from-ob2 to-ob3 border border-gold/[0.15] rounded-xl p-3 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-12 h-12 bg-gold/10 rounded-full blur-xl" />
            <div className="text-[9px] text-cream/50 uppercase tracking-widest mb-1">ZipCoins Balance</div>
            <div className="text-2xl font-display text-gold-light tracking-wide flex items-center gap-1.5">
              <span className="text-lg">🪙</span> 1,250
            </div>
            <div className="text-[7px] text-[#5dff8f] mt-1 font-semibold bg-[#5dff8f]/10 px-1.5 py-0.5 rounded-full">+50 from last review</div>
          </div>

          {/* Streak */}
          <div className="bg-ob2 border border-cream/[0.06] rounded-xl p-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center text-xs">🔥</div>
              <div>
                <div className="text-[9px] font-semibold text-cream">5 Day Streak!</div>
                <div className="text-[7px] text-cream/50">Check in 2 more days</div>
              </div>
            </div>
            <div className="text-[9px] font-bold text-orange-400">5/7</div>
          </div>

          {/* Recent Activity */}
          <div className="flex flex-col gap-1.5 mt-1">
            <div className="text-[8px] uppercase tracking-widest text-cream/40 px-1 mb-0.5">Recent Activity</div>
            
            <div className="flex items-center justify-between bg-ob3 rounded-lg p-2 border border-cream/[0.04]">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px]">📸</span>
                <div>
                  <div className="text-[8px] text-cream">Fit Review</div>
                  <div className="text-[6px] text-cream/40">2 hours ago</div>
                </div>
              </div>
              <span className="text-[9px] font-semibold text-gold-light">+50</span>
            </div>
            
            <div className="flex items-center justify-between bg-ob3 rounded-lg p-2 border border-cream/[0.04]">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px]">✨</span>
                <div>
                  <div className="text-[8px] text-cream">Daily Check-in</div>
                  <div className="text-[6px] text-cream/40">Today</div>
                </div>
              </div>
              <span className="text-[9px] font-semibold text-gold-light">+10</span>
            </div>
          </div>
        </div>
      </div>
      <TabBar activeTab="Profile" />
    </PhoneMockup>
  );
}
