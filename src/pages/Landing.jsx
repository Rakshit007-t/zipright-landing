import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import Marquee from '../components/landing/Marquee';
import TrustBar from '../components/landing/TrustBar';
import ProblemSection from '../components/landing/ProblemSection';
import HowItWorks from '../components/landing/HowItWorks';
import FeaturesSection from '../components/landing/FeaturesSection';
import VirtualTryOn from '../components/landing/VirtualTryOn';
import ComparisonSection from '../components/landing/ComparisonSection';
import SizingDemo from '../components/landing/SizingDemo';
import NotifySection from '../components/landing/NotifySection';
import ContactSection from '../components/landing/ContactSection';
import FooterSection from '../components/landing/FooterSection';
import StickyBar from '../components/landing/StickyBar';
import Starfield from '../components/landing/Starfield';

export default function Landing() {
  return (
    <div className="bg-obsidian text-cream font-body overflow-x-hidden relative">
      <Starfield />
      <Navbar />
      <Hero />
      <Marquee />
      <TrustBar />
      <ProblemSection />
      <HowItWorks />
      <FeaturesSection />
      <VirtualTryOn />
      <ComparisonSection />
      <SizingDemo />
      <NotifySection />
      <ContactSection />
      <FooterSection />
      <StickyBar />
    </div>
  );
}