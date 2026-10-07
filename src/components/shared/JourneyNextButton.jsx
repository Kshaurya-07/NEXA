import React from 'react';
import { ArrowDown, ChevronDown, Sparkles } from 'lucide-react';

export default function JourneyNextButton({ targetId, stageNumber, stageTitle, description }) {
  const handleScroll = (e) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="pt-16 pb-4 flex flex-col items-center text-center relative z-20">
      <div className="w-px h-12 bg-gradient-to-b from-white/20 via-white/10 to-transparent mb-4" />
      
      <a
        href={`#${targetId}`}
        onClick={handleScroll}
        className="group relative inline-flex flex-col items-center p-3 sm:px-6 sm:py-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/30 backdrop-blur-xl transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:scale-105"
      >
        <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono tracking-widest uppercase text-zinc-400 group-hover:text-zinc-200">
          <span className="w-1.5 h-1.5 rounded-full bg-white/60 group-hover:bg-white animate-pulse" />
          <span>CONTINUE PRODUCT JOURNEY • STAGE {stageNumber}</span>
        </div>

        <div className="mt-1 flex items-center gap-2 text-sm sm:text-base font-bold text-white uppercase tracking-wider font-['Syncopate']">
          <span>{stageTitle}</span>
          <ChevronDown className="w-4 h-4 text-white transform group-hover:translate-y-1 transition-transform" />
        </div>

        {description && (
          <span className="text-[11px] text-zinc-400 font-mono mt-0.5 max-w-sm">
            {description}
          </span>
        )}
      </a>
    </div>
  );
}
