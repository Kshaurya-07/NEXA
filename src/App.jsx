import React from 'react';
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
import Footer from './components/Footer';
import FloatingAssistantWidget from './components/FloatingAssistantWidget';
import JourneyFlowGuide from './components/JourneyFlowGuide';
import BackgroundNetwork from './components/shared/BackgroundNetwork';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050508] text-white selection:bg-white selection:text-black overflow-hidden">
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
      </main>

      {/* Minimal Premium Monochrome Footer */}
      <Footer />

      {/* Persistent Floating Quick-Access Nexa HUD */}
      <FloatingAssistantWidget />

      {/* Floating Interactive 7-Stage Product Journey Guide */}
      <JourneyFlowGuide />
    </div>
  );
}
