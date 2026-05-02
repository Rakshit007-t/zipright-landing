import { useState } from 'react';
import useReveal from './useReveal';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';

export default function ContactSection() {
  const ref = useReveal();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('loading');
    try {
      await addDoc(collection(db, 'contacts'), {
        name: form.name,
        email: form.email,
        message: form.message,
        timestamp: serverTimestamp()
      });
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error("Error submitting contact form: ", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-obsidian px-5 py-16 text-center flex flex-col items-center md:px-9 lg:px-[52px] md:py-[88px] border-t border-white/[0.08]" ref={ref}>
      <div className="text-[11px] uppercase tracking-[3px] text-white/40 font-semibold mb-4 flex items-center justify-center gap-2.5">
        <span className="w-5 h-px bg-white/30" />Contact<span className="w-5 h-px bg-white/30" />
      </div>
      <h2 className="font-display text-[clamp(36px,10vw,66px)] tracking-wide leading-[0.94] mb-4 text-center">
        Get in <span className="text-white/40">touch.</span>
      </h2>
      <p className="text-cream/55 text-sm md:text-[15px] max-w-[520px] mx-auto leading-relaxed md:leading-[1.8] font-light mb-10 text-center">
        Have a question, partnership idea, or just want to say hello? We'd love to hear from you.
      </p>

      <div className="max-w-[560px] w-full reveal-item">
        <form onSubmit={handleSubmit} className="bg-ob2 border border-white/[0.08] rounded-[20px] p-6 md:p-8 flex flex-col gap-4 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] uppercase tracking-widest text-white/30">Name *</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="bg-ob3 border border-white/[0.08] rounded-xl px-4 py-3.5 text-sm text-cream font-body outline-none focus:border-white/30 placeholder:text-white/25 transition-colors"
                style={{ WebkitAppearance: 'none' }} />

            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] uppercase tracking-widest text-white/30">Email *</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="bg-ob3 border border-white/[0.08] rounded-xl px-4 py-3.5 text-sm text-cream font-body outline-none focus:border-white/30 placeholder:text-white/25 transition-colors"
                style={{ WebkitAppearance: 'none' }} />

            </div>
          </div>

          <div className="flex flex-col gap-1.5">









          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] uppercase tracking-widest text-white/30">Message *</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Tell us more..."
              className="bg-ob3 border border-white/[0.08] rounded-xl px-4 py-3.5 text-sm text-cream font-body outline-none focus:border-white/30 placeholder:text-white/25 transition-colors resize-none"
              style={{ WebkitAppearance: 'none' }} />

          </div>

          {status === 'error' &&
            <p className="text-pink text-xs">Something went wrong. Please try again.</p>
          }

          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className={`w-full rounded-xl py-4 text-sm font-bold min-h-[52px] transition-all ${status === 'success' ?
                'bg-white/20 text-white' :
                status === 'loading' ?
                  'bg-white/30 text-black cursor-not-allowed' :
                  'bg-white text-black hover:bg-white/90 active:bg-white/80'}`
            }>

            {status === 'loading' ? 'Sending…' : status === 'success' ? '✓ Message Sent!' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>);

}