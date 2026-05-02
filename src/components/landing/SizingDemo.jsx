import { useState } from 'react';
import useReveal from './useReveal';

const brands = [
  { name: 'Libas', standard: 'L', ai: 'M', fit: 'Regular', confidence: 94 },
  { name: 'Biba', standard: 'L', ai: 'XL', fit: 'Fitted', confidence: 91 },
  { name: 'W', standard: 'L', ai: 'M', fit: 'Relaxed', confidence: 97 },
  { name: 'Global Desi', standard: 'L', ai: 'L', fit: 'Loose', confidence: 88 },
];

const measurements = [
  { label: 'Chest', value: '36"', match: true },
  { label: 'Waist', value: '30"', match: true },
  { label: 'Hips', value: '38"', match: false },
  { label: 'Shoulder', value: '14.5"', match: true },
];

function ConfidenceBar({ pct, animate }) {
  return (
    <div className="w-full h-1.5 bg-white/[0.07] rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-700 ease-out"
        style={{
          width: animate ? `${pct}%` : '0%',
          background: 'linear-gradient(90deg, #666 0%, #e8e8e8 100%)',
        }}
      />
    </div>
  );
}

export default function SizingDemo() {
  const [aiMode, setAiMode] = useState(false);
  const [animating, setAnimating] = useState(false);
  const ref = useReveal();

  const toggle = () => {
    setAnimating(false);
    setAiMode((v) => !v);
    setTimeout(() => setAnimating(true), 80);
  };

  return (
    <section
      id="sizing-demo"
      ref={ref}
      className="px-5 md:px-9 lg:px-[52px] py-16 md:py-[88px] border-t border-white/[0.07]"
    >
      {/* Header */}
      <div className="text-[11px] uppercase tracking-[3px] text-white/40 font-semibold mb-4 flex items-center gap-2.5">
        <span className="w-5 h-px bg-white/30" />AI vs Standard Sizing
      </div>
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 lg:mb-12">
        <div>
          <h2 className="font-display text-[clamp(34px,9vw,62px)] tracking-wide leading-[0.94]">
            See the difference<br />
            <span className="text-white/40">before you buy.</span>
          </h2>
          <p className="text-cream/55 text-[15px] md:text-[16px] max-w-[480px] leading-[1.8] font-light mt-4">
            Standard charts give every brand the same "L". ZipRIGHT's AI reads each brand's actual cut, fabric, and silhouette — and gives you the size that actually fits.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <span className={`text-sm font-medium transition-colors duration-300 ${!aiMode ? 'text-white' : 'text-white/35'}`}>
            Standard Chart
          </span>
          <button
            onClick={toggle}
            className={`relative w-[56px] h-[30px] rounded-full border transition-all duration-300 ${
              aiMode ? 'bg-white/15 border-white/30' : 'bg-white/[0.06] border-white/[0.12]'
            }`}
          >
            <span
              className={`absolute top-[3px] w-6 h-6 rounded-full transition-all duration-300 shadow-lg ${
                aiMode
                  ? 'left-[26px] bg-white'
                  : 'left-[3px] bg-white/40'
              }`}
            />
          </button>
          <span className={`text-sm font-medium transition-colors duration-300 ${aiMode ? 'text-white' : 'text-white/35'}`}>
            AI Sizing
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-6 lg:gap-10">

        {/* Left — Brand size cards */}
        <div className="flex flex-col gap-3">
          {brands.map((b, i) => (
            <div
              key={b.name}
              className="reveal-item flex items-center justify-between bg-ob2 border rounded-[14px] px-5 py-4 transition-all duration-300"
              style={{
                borderColor: aiMode ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.06)',
                transitionDelay: `${i * 60}ms`,
              }}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-[11px] font-bold text-cream/60 uppercase tracking-wider">
                  {b.name.slice(0, 2)}
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-cream">{b.name}</div>
                  <div className="text-[11px] text-cream/40 mt-0.5">{b.fit} cut</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {/* Standard size badge — always visible but faded in AI mode */}
                <div className={`text-center transition-all duration-300 ${aiMode ? 'opacity-30' : 'opacity-100'}`}>
                  <div className="text-[10px] text-white/30 uppercase tracking-wider mb-1">Chart</div>
                  <div className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-sm font-bold text-cream">
                    {b.standard}
                  </div>
                </div>

                {/* Arrow */}
                {aiMode && (
                  <div className="text-white/20 text-sm">→</div>
                )}

                {/* AI size badge */}
                <div className={`text-center transition-all duration-500 ${aiMode ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                  <div className="text-[10px] text-white/50 uppercase tracking-wider mb-1">AI Fit</div>
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold"
                    style={{
                      background: b.ai !== b.standard ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.06)',
                      border: b.ai !== b.standard ? '1px solid rgba(255,255,255,0.3)' : '1px solid rgba(255,255,255,0.1)',
                      color: b.ai !== b.standard ? '#fff' : '#aaa',
                    }}
                  >
                    {b.ai}
                  </div>
                </div>

                {/* Confidence */}
                {aiMode && (
                  <div className="w-16 hidden sm:block">
                    <div className="text-[10px] text-white/35 uppercase tracking-wider mb-1.5">{b.confidence}% match</div>
                    <ConfidenceBar pct={b.confidence} animate={animating} />
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Legend */}
          {aiMode && (
            <div className="flex items-center gap-5 pt-1 px-1 text-[11px] text-white/30 transition-all duration-300">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded border border-white/30 bg-white/12 inline-block" />
                Size differs from chart
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded border border-white/10 bg-white/06 inline-block" />
                Same as chart
              </span>
            </div>
          )}
        </div>

        {/* Right — Measurement panel */}
        <div className="reveal-item bg-ob2 border border-white/[0.08] rounded-[18px] p-5 md:p-7 flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[11px] text-white/35 uppercase tracking-widest mb-1">Your Fit Profile</div>
              <div className="text-[14px] font-semibold text-cream">Body Measurements</div>
            </div>
            <div
              className={`text-[11px] font-semibold px-3 py-1.5 rounded-full border transition-all duration-500 ${
                aiMode
                  ? 'bg-white/10 border-white/25 text-white'
                  : 'bg-white/[0.04] border-white/[0.08] text-white/30'
              }`}
            >
              {aiMode ? '⚡ AI Active' : '○ Standard'}
            </div>
          </div>

          {/* Measurements */}
          <div className="grid grid-cols-2 gap-3">
            {measurements.map((m) => (
              <div
                key={m.label}
                className="bg-ob3 border rounded-[12px] p-3.5 transition-all duration-300"
                style={{
                  borderColor:
                    aiMode && !m.match
                      ? 'rgba(255,255,255,0.2)'
                      : 'rgba(255,255,255,0.06)',
                }}
              >
                <div className="text-[11px] text-white/35 uppercase tracking-wider mb-1">{m.label}</div>
                <div className="text-[18px] font-display text-cream tracking-wide">{m.value}</div>
                {aiMode && !m.match && (
                  <div className="mt-1.5 text-[10px] text-white/50 flex items-center gap-1">
                    ⚠ Needs brand adjustment
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* AI insight box */}
          <div
            className={`rounded-[14px] border p-4 transition-all duration-500 overflow-hidden ${
              aiMode
                ? 'max-h-[200px] opacity-100 border-white/[0.14] bg-white/[0.04]'
                : 'max-h-0 opacity-0 border-transparent p-0'
            }`}
          >
            <div className="text-[11px] text-white/40 uppercase tracking-widest mb-2">AI Insight</div>
            <p className="text-[13px] text-cream/70 leading-[1.7]">
              Your hip measurement falls outside standard "L" sizing for <strong className="text-cream">Biba's fitted cut</strong>. ZipRIGHT recommends <strong className="text-cream">XL</strong> for a comfortable fit — not because you're bigger, but because their size chart runs 2cm narrow at the hip.
            </p>
          </div>

          {/* CTA */}
          <div className="pt-1 border-t border-white/[0.06]">
            <div className="text-[12px] text-white/30 text-center">
              {aiMode
                ? 'AI cross-referenced 18+ Indian brand charts with your profile'
                : 'Toggle AI Sizing above to see personalized recommendations'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}