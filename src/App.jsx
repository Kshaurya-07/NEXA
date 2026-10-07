import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroNia from './components/HeroNia';
import NiaCapabilities from './components/NiaCapabilities';
import NiaTwoWays from './components/NiaTwoWays';
import NiaArchitecture from './components/NiaArchitecture';
import NiaExamples from './components/NiaExamples';
import NexaAppIntro from './components/NexaAppIntro';
import WhyNexa from './components/WhyNexa';
import FeaturesShowcase from './components/FeaturesShowcase';
import EverythingConnected from './components/EverythingConnected';
import DemoVideo from './components/DemoVideo';
import AboutSection from './components/AboutSection';
import DownloadSection from './components/DownloadSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingAssistantWidget from './components/FloatingAssistantWidget';
import BackgroundNetwork from './components/shared/BackgroundNetwork';
import { ChevronUp } from 'lucide-react';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#050508] text-white selection:bg-white selection:text-black overflow-hidden">
      {/* Top Subtle Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-cyan-400 via-teal-300 to-white z-[60] transition-all duration-150 pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* 3D Dynamic Particle Neural Background */}
      <BackgroundNetwork />

      {/* Floating Sticky Glass Header */}
      <Header />

      {/* Content strictly adhering to the requested storytelling order */}
      <main className="relative z-10">
        {/* 1. NIA */}
        <HeroNia />
        <NiaCapabilities />
        <NiaTwoWays />
        <NiaArchitecture />
        <NiaExamples />

        {/* 2. NEXA APP */}
        <NexaAppIntro />
        <WhyNexa />

        {/* 3. FEATURES */}
        <FeaturesShowcase />
        <EverythingConnected />

        {/* 4. DEMO VIDEO */}
        <DemoVideo />

        {/* 5. ABOUT */}
        <AboutSection />

        {/* 6. DOWNLOAD NEXA */}
        <DownloadSection />

        {/* 7. CONTACT / QUERY (TALK TO TEAM GLITCHERS) */}
        <ContactSection />
      </main>

      {/* Minimal Premium Monochrome Footer */}
      <Footer />

      {/* Persistent Floating Quick-Access Nexa HUD */}
      <FloatingAssistantWidget />

      {/* Floating Back to Top Control */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-black/80 border border-white/20 text-zinc-300 hover:text-white hover:border-white/40 shadow-xl backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer group"
          aria-label="Scroll back to top"
        >
          <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
        </button>
      )}
    </div>
  );
}
