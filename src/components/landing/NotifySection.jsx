import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';

export default function NotifySection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (email.trim() && !loading) {
      setLoading(true);
      try {
        await addDoc(collection(db, 'waitlist_emails'), {
          email: email.trim(),
          createdAt: serverTimestamp()
        });
        setSubmitted(true);
      } catch (error) {
        console.error("Error adding to waitlist: ", error);
        alert("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <section
      id="notify" className="px-5 py-20 text-center md:px-9 lg:px-[52px] md:py-[88px] md:pb-20"

      style={{ background: 'radial-gradient(ellipse 80% 55% at 50% 50%,rgba(180,180,180,0.05) 0%,transparent 72%)' }}>
      
      <div className="text-[11px] uppercase tracking-[3px] text-gold font-semibold mb-4 flex items-center justify-center gap-2.5">
        <span className="w-5 h-px bg-gold" />Coming Soon
      </div>
      <h2 className="font-display text-[clamp(36px,10vw,66px)] tracking-wide leading-[0.94] mb-5 text-center">
      Shop without<br /><span className="text-white/50">guessing.</span>
      </h2>
      <p className="text-cream/65 text-[15px] md:text-[16px] max-w-[520px] mx-auto leading-[1.8] font-light text-center mb-10">
        ZipRIGHT is launching soon on Google Play. Drop your email — we'll notify you the moment it's live. Be first.
      </p>

      <div className="inline-flex flex-col items-center gap-3.5 bg-ob2 border border-gold/[0.18] rounded-[20px] p-5 md:p-7 max-w-[460px] w-full">
        <div className="text-[11px] text-cream/45 uppercase tracking-widest">Available Soon On</div>
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <div className="inline-flex items-center gap-2.5 bg-ob3 border border-white/15 rounded-xl px-4 py-2.5 opacity-75">
            <span className="text-2xl">▶</span>
            <div className="text-left">
              <div className="text-[9px] text-grey uppercase tracking-widest">Get it on</div>
              <div className="text-sm font-semibold text-cream">Google Play</div>
            </div>
          </div>
          <div className="bg-white/[0.07] border border-white/[0.15] rounded-full px-3.5 py-1.5 text-[11px] font-semibold text-cream/70 flex items-center gap-1.5">
            ⏳ Coming Soon
          </div>
        </div>

        <div className="text-[13px] text-cream/60">Get notified when we launch</div>

        <div className="flex flex-col sm:flex-row gap-2 w-full">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 min-w-0 bg-ob3 border border-gold/[0.18] rounded-xl px-3.5 py-3.5 text-base text-cream font-body outline-none focus:border-gold-light placeholder:text-grey min-h-[52px]"
            style={{ WebkitAppearance: 'none' }} />
          
          <button
            onClick={handleSubmit}
            disabled={loading || submitted}
            className={`rounded-xl px-4 py-3.5 text-base font-bold min-h-[52px] transition-all ${submitted ? 'bg-white/20 text-white' : loading ? 'bg-white/50 text-black cursor-not-allowed' : 'bg-white text-black hover:bg-white/90 active:bg-white/80'}`}>
            
            {loading ? 'Wait...' : submitted ? '✓ Done!' : 'Notify Me'}
          </button>
        </div>

        <div className="text-[12px] text-cream/40">No spam. Just one email when we launch.</div>
      </div>
    </section>);

}