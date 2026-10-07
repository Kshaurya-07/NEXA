import React, { useState, useEffect } from 'react';
import { Compass, ChevronDown, ChevronUp, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function JourneyFlowGuide() {
  const [activeStage, setActiveStage] = useState('nia');
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const stages = [
    { id: 'nia', num: '01', title: 'Explore NIA', tag: 'Core Assistant' },
    { id: 'intelligence', num: '02', title: 'Understand Intelligence', tag: 'Dual Engine' },
    { id: 'nexa-app', num: '03', title: 'Explore NEXA', tag: '14 Pillars' },
    { id: 'features', num: '04', title: 'Interact with Features', tag: 'Spatial Cockpit' },
    { id: 'demo', num: '05', title: 'Watch Demo', tag: 'Real Product' },
    { id: 'about', num: '06', title: 'Meet Team Glitchers', tag: 'The Creators' },
    { id: 'download', num: '07', title: 'Download NEXA', tag: 'Get APK' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = totalScroll > 0 ? Math.min(100, Math.round((currentScroll / totalScroll) * 100)) : 0;
      setScrollProgress(progress);

      const sectionIds = ['download', 'about', 'demo', 'features', 'nexa-app', 'intelligence', 'nia'];
      const scrollPos = window.scrollY + 250;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveStage(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToStage = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsExpanded(false);
    }
  };

  const currentIdx = stages.findIndex((s) => s.id === activeStage);
  const currentStage = stages[currentIdx] || stages[0];
  const nextStage = currentIdx < stages.length - 1 ? stages[currentIdx + 1] : null;

  return (
    <>
      {/* Desktop Floating Right Rail Journey HUD */}
      <aside 
        aria-label="Product Journey Guide"
        className="fixed top-1/2 -translate-y-1/2 right-4 z-40 hidden xl:flex flex-col items-end pointer-events-auto"
      >
        <div className="p-2.5 rounded-2xl bg-[#090912]/85 border border-white/15 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300">
          {/* Header indicator */}
          <div className="px-2.5 py-1.5 border-b border-white/10 mb-2 flex items-center justify-between gap-3 text-[10px] font-mono text-zinc-400">
            <span className="flex items-center gap-1.5 text-white font-bold">
              <Compass className="w-3 h-3 text-white" />
              <span>JOURNEY</span>
            </span>
            <span className="text-zinc-500">{currentStage.num}/07</span>
          </div>

          {/* Vertical Step Markers */}
          <div className="space-y-1">
            {stages.map((stage, idx) => {
              const isActive = activeStage === stage.id;
              const isPast = currentIdx > idx;

              return (
                <button
                  key={stage.id}
                  onClick={() => scrollToStage(stage.id)}
                  className={`group w-full flex items-center justify-between gap-3 px-2.5 py-1.5 rounded-xl transition-all duration-200 text-left ${
                    isActive
                      ? 'bg-white/15 border border-white/25 text-white shadow-sm'
                      : 'hover:bg-white/05 text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full transition-all ${
                      isActive ? 'bg-white animate-pulse scale-125' : isPast ? 'bg-zinc-500' : 'bg-zinc-700'
                    }`} />
                    <span className="font-mono text-[10px]">{stage.num}</span>
                    <span className="text-[11px] font-medium tracking-wide">
                      {stage.title}
                    </span>
                  </div>
                  {isActive && (
                    <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-white text-black font-semibold">
                      NOW
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick Next Chapter Trigger */}
          {nextStage && (
            <div className="mt-2 pt-2 border-t border-white/10">
              <button
                onClick={() => scrollToStage(nextStage.id)}
                className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-white/05 hover:bg-white/10 text-[10px] font-mono text-zinc-300 hover:text-white transition-all"
              >
                <span>Next: {nextStage.title}</span>
                <ChevronDown className="w-3 h-3 ml-1 text-white animate-bounce" />
              </button>
            </div>
          )}
        </div>
      </aside>

      {/* Mobile Floating Bottom Journey Pill */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 xl:hidden">
        <div className="flex items-center gap-2 p-1.5 pl-3 pr-2 rounded-full bg-[#0b0b14]/90 border border-white/20 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.85)]">
          <div className="flex items-center gap-2 text-xs font-mono text-white">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span className="text-[11px] text-zinc-400">{currentStage.num}</span>
            <span className="font-bold uppercase tracking-wider text-[11px]">
              {currentStage.title}
            </span>
          </div>

          {nextStage ? (
            <button
              onClick={() => scrollToStage(nextStage.id)}
              className="px-2.5 py-1 rounded-full bg-white text-black text-[10px] font-mono uppercase font-semibold flex items-center gap-1 hover:bg-zinc-200 transition-all"
            >
              <span>Next</span>
              <ChevronDown className="w-3 h-3" />
            </button>
          ) : (
            <button
              onClick={() => scrollToStage('download')}
              className="px-2.5 py-1 rounded-full bg-white text-black text-[10px] font-mono uppercase font-semibold hover:bg-zinc-200 transition-all"
            >
              Get APK
            </button>
          )}

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 rounded-full text-zinc-400 hover:text-white"
            aria-label="Toggle full journey steps"
          >
            {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Expanded Drawer Modal */}
        {isExpanded && (
          <div className="absolute bottom-14 left-1/2 -translate-x-1/2 w-72 p-3 rounded-2xl bg-[#090912]/95 border border-white/20 backdrop-blur-2xl shadow-2xl animate-fadeIn space-y-1">
            <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 px-2 py-1 border-b border-white/10 mb-1">
              PRODUCT EXPERIENCE ROADMAP
            </div>
            {stages.map((stage) => (
              <button
                key={stage.id}
                onClick={() => scrollToStage(stage.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-xs ${
                  activeStage === stage.id
                    ? 'bg-white text-black font-semibold'
                    : 'text-zinc-300 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] opacity-75">{stage.num}</span>
                  <span>{stage.title}</span>
                </div>
                <span className="text-[10px] font-mono opacity-60">{stage.tag}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
