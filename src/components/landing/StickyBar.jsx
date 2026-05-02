import { useState, useEffect } from 'react';

export default function StickyBar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const notify = document.getElementById('notify');
    if (!notify) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setVisible(!entries[0].isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(notify);
    return () => observer.disconnect();
  }, []);

  const scrollToNotify = (e) => {
    e.preventDefault();
    const el = document.getElementById('notify');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const input = el.querySelector('input[type="email"]');
        if (input) input.focus();
      }, 500);
    }
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-30 md:hidden flex gap-2.5 bg-obsidian/[0.97] backdrop-blur-xl border-t border-gold/[0.18] px-5 py-3 transition-transform duration-300"
      style={{
        paddingBottom: 'calc(12px + env(safe-area-inset-bottom, 0px))',
        WebkitBackdropFilter: 'blur(16px)',
        transform: visible ? 'translateY(0)' : 'translateY(100%)',
      }}
    >
      <div className="flex-1 flex items-center justify-center gap-2 bg-ob3 border border-gold text-gold-light rounded-xl py-3.5 text-[13px] font-medium min-h-[48px]">
        ▶ Google Play <span className="text-[10px] text-pink font-bold ml-1">Soon</span>
      </div>
      <a
        href="#notify"
        onClick={scrollToNotify}
        className="flex-1 flex items-center justify-center gap-2 bg-pink rounded-xl py-3.5 text-obsidian text-sm font-bold min-h-[48px] active:opacity-80"
      >
        🔔 Notify Me
      </a>
    </div>
  );
}