import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const productLinks = [
  {
    label: 'Fit Profile',
    desc: 'A one-time setup where users enter basic body details like height, waist, and fit preference. This data is stored securely and used to match the user to the correct size across different brand size charts, removing guesswork and reducing returns.',
  },
  {
    label: 'AI Stylist',
    desc: 'A personal AI stylist that works like a conversation. Users can ask what to wear for occasions, budgets, or styles, and it suggests outfits that match their size, body type, and preferences using their profile and activity.',
  },
  {
    label: 'Virtual Try-On',
    desc: 'Users take a few simple photos to generate a 3D digital twin of their body. Clothes are then rendered on this model to show how they will actually fit and look before purchase, improving confidence and reducing returns.',
  },
  {
    label: 'Discover Feed',
    desc: 'A full-screen scrolling feed similar to short video platforms, where every product already displays the user\'s size, fit confidence, price, and actions like save or buy, making discovery fast and frictionless.',
  },
  {
    label: 'ZipCoins',
    desc: 'A reward system where users earn coins for actions like completing profiles, logging in, reviewing products, or referrals, and redeem them for discounts on purchases within the platform.',
  },
];

const companyLinks = [
  {
    label: 'About',
    desc: 'ZipRIGHT is an AI-powered fashion sizing platform built to solve inconsistent sizing across Indian brands. It helps users find the right fit before buying and helps sellers reduce returns and improve customer satisfaction.',
  },
  {
    label: 'Blog',
    desc: 'Educational and SEO-focused content covering topics like sizing differences across brands, measuring yourself correctly, how AI is improving fashion, and insights for both buyers and sellers.',
  },
  {
    label: 'Careers',
    desc: 'Join a fast-moving team building a fashion-tech platform from Patna. Open to engineers, designers, AI specialists, and marketers who want to work on real problems with real impact.',
  },
  {
    label: 'Privacy Policy',
    desc: 'Explains what user data is collected, including account details, measurements, and photos, how it is securely stored, and how it is used only for personalization and core features, with full user control over deletion.',
  },
  {
    label: 'Terms of Use',
    desc: 'Covers platform rules, account responsibilities, reward system usage, content guidelines, seller responsibilities, and legal terms governing the use of the platform.',
  },
];

function AccordionList({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <ul className="flex flex-col">
      {items.map((item, i) => (
        <li key={item.label} className="border-b border-cream/[0.08] last:border-b-0">
          <button
            onClick={() => toggle(i)}
            className="w-full flex items-center justify-between gap-3 py-3.5 text-left text-[13px] text-cream/55 hover:text-cream transition-colors group"
          >
            <span className={`font-medium leading-snug ${openIndex === i ? 'text-cream' : ''}`}>{item.label}</span>
            <ChevronDown
              className={`w-3.5 h-3.5 flex-shrink-0 transition-transform duration-300 ease-in-out ${openIndex === i ? 'rotate-180 text-gold-light' : 'text-cream/30 group-hover:text-cream/60'}`}
            />
          </button>
          <div
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{ maxHeight: openIndex === i ? '240px' : '0px', opacity: openIndex === i ? 1 : 0 }}
          >
            <p className="text-[12.5px] text-cream/55 leading-[1.75] pb-4 pr-2">{item.desc}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function FooterSection() {
  return (
    <footer className="bg-ob2 border-t border-cream/[0.08] px-5 md:px-9 lg:px-[52px] pt-12 md:pt-[60px] pb-8 md:pb-10">
      <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-10 lg:gap-14">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo.png" alt="ZipRIGHT Logo" className="w-6 h-6 object-contain" />
            <div className="w-px h-4 bg-white/15 rounded-full"></div>
            <div className="text-xl font-extrabold tracking-tight"><span className="text-cream">Zip</span><span className="text-white">RIGHT</span></div>
          </div>
          <p className="text-[13px] text-cream/50 leading-[1.75] max-w-[260px]">
            India's AI-powered fashion sizing platform — helping buyers shop confidently and sellers reduce returns through intelligent fit technology.
          </p>
        </div>

        <div>
          <h4 className="text-[11px] uppercase tracking-widest text-gold-light font-semibold mb-4">Product</h4>
          <AccordionList items={productLinks} />
        </div>

        <div>
          <h4 className="text-[11px] uppercase tracking-widest text-gold-light font-semibold mb-4">Company</h4>
          <AccordionList items={companyLinks} />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between pt-6 border-t border-cream/[0.08] text-[11px] md:text-[12px] text-cream/35 gap-2">
        <span>© 2025 ZipRIGHT Technologies Pvt. Ltd. All rights reserved.</span>
        <span className="font-display text-[15px] tracking-[3px] text-gold/20">WEAR WHAT FITS</span>
      </div>
    </footer>
  );
}