import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
{ label: 'Problem', href: '#problem' },
{ label: 'How It Works', href: '#how' },
{ label: 'Try-On', href: '#tryon' },
{ label: 'Why Us', href: '#compare' }];


export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {document.body.style.overflow = '';};
  }, [open]);

  const scrollTo = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-5 md:px-7 bg-obsidian/[0.92] backdrop-blur-xl border-b border-gold/[0.18]" style={{ WebkitBackdropFilter: 'blur(20px)' }}>
        <a href="#" className="flex items-center gap-3 text-[22px] font-extrabold tracking-tight group">
          <img src="/logo.png" alt="ZipRIGHT Logo" className="w-7 h-7 object-contain transition-transform group-hover:scale-105" />
          <div className="w-px h-5 bg-white/15 rounded-full"></div>
          <div className="flex items-center">
            <span className="text-cream">Zip</span><span className="text-white">RIGHT</span>
          </div>
        </a>

        <ul className="px-4 hidden md:flex items-center gap-7">
          {navLinks.map((l) =>
          <li key={l.href}>
              <button onClick={() => scrollTo(l.href)} className="text-cream/50 px-1 text-xs font-medium uppercase tracking-widest hover:text-white transition-colors">
                {l.label}
              </button>
            </li>
          )}
        </ul>

        <button onClick={() => scrollTo('#notify')} className="hidden md:inline-flex bg-white/[0.07] border border-white/[0.2] text-cream px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide hover:bg-white/[0.14] hover:text-white transition-all">
          Get Notified
        </button>

        <button onClick={() => setOpen(!open)} className="md:hidden w-11 h-11 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors" aria-label="Menu">
          {open ? <X className="w-6 h-6 text-cream" /> : <Menu className="w-6 h-6 text-cream" />}
        </button>
      </nav>

      {/* Mobile drawer overlay */}
      {open && <div className="fixed inset-0 z-40 bg-black/50" onClick={() => setOpen(false)} />}

      {/* Mobile drawer */}
      <div className={`fixed top-16 left-0 right-0 bottom-0 z-40 bg-obsidian/[0.98] backdrop-blur-xl flex flex-col p-8 pb-10 transition-transform duration-300 md:hidden ${open ? 'translate-x-0' : 'translate-x-full'}`} style={{ WebkitBackdropFilter: 'blur(20px)' }}>
        <ul className="flex flex-col gap-1 flex-1">
          {navLinks.map((l) =>
          <li key={l.href}>
              <button onClick={() => scrollTo(l.href)} className="w-full text-left py-4 text-xl font-semibold text-cream/70 border-b border-cream/[0.06] hover:text-white transition-colors">
                {l.label}
              </button>
            </li>
          )}
        </ul>
        <button onClick={() => scrollTo('#notify')} className="mt-6 w-full text-center py-4 bg-white/10 border border-white/20 rounded-xl text-base font-bold text-white">
          🔔 Get Notified at Launch
        </button>
      </div>
    </>);

}


