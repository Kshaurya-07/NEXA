import React, { useState, useEffect, useRef } from 'react';
import { User, Database, Cpu, Sparkles, CheckSquare, Zap, Activity } from 'lucide-react';

export default function NiaIntelligenceCore() {
  const [activeTier, setActiveTier] = useState(2); // default: NIA Core
  const containerRef = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const tiers = [
    {
      id: 0,
      label: 'STUDENT',
      sub: 'Input & Perception',
      icon: User,
      telemetry: 'Voice, photo timetable upload, natural queries',
      status: 'RECEIVING SIGNALS',
    },
    {
      id: 1,
      label: 'CONTEXT / DATA',
      sub: 'Academic Knowledge Graph',
      icon: Database,
      telemetry: 'Gmail notices, course syllabus, peer debts, ERP schedules',
      status: 'ACTIVE GRAPH SYNC',
    },
    {
      id: 2,
      label: 'NIA CORE',
      sub: 'Central Intelligence Engine',
      icon: Cpu,
      telemetry: 'Dual-Engine Cognition • Gemini Cloud + Local Neural Cache',
      status: 'AUTONOMOUS CORE',
    },
    {
      id: 3,
      label: 'AI PROCESSING',
      sub: 'Multimodal Execution & Tools',
      icon: Sparkles,
      telemetry: '12 structured action tools, OCR extraction, priority ranking',
      status: 'EVALUATING DISPATCH',
    },
    {
      id: 4,
      label: 'PERSONALIZED ACTION',
      sub: 'System State Mutations',
      icon: CheckSquare,
      telemetry: 'Auto-calendar blocks, urgent deadline cards, split ledgers',
      status: 'VERIFIED MUTATION',
    },
  ];

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      rx: (y / (rect.height / 2)) * -6,
      ry: (x / (rect.width / 2)) * 6,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-4xl mx-auto my-12 p-6 sm:p-10 rounded-3xl bg-[#08080f]/90 border border-white/15 shadow-[0_20px_80px_rgba(0,0,0,0.85),0_0_40px_rgba(255,255,255,0.04)] overflow-hidden perspective-1000 transition-transform duration-200"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rx.toFixed(2)}deg) rotateY(${tilt.ry.toFixed(2)}deg)`,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Background Holographic Atmosphere */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/[0.04] rounded-full blur-[100px] pointer-events-none" />

      {/* Top Telemetry Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 mb-8">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-mono text-xs uppercase tracking-widest text-white font-bold">
            NIA REAL-TIME COGNITIVE ARCHITECTURE
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-400">
          <Activity className="w-3.5 h-3.5 text-white animate-pulse" />
          <span>DUAL-ENGINE REALTIME STREAM</span>
        </div>
      </div>

      {/* The 5-Tier 3D System Pipeline */}
      <div className="relative z-10 space-y-4">
        {tiers.map((tier, idx) => {
          const Icon = tier.icon;
          const isCore = tier.id === 2;
          const isSelected = activeTier === tier.id;

          return (
            <div key={tier.id} className="relative group">
              <div
                onClick={() => setActiveTier(tier.id)}
                className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  isCore
                    ? isSelected
                      ? 'bg-white/20 border-white/50 shadow-[0_0_35px_rgba(255,255,255,0.25)] scale-[1.02]'
                      : 'bg-white/10 border-white/25 shadow-[0_0_20px_rgba(255,255,255,0.1)]'
                    : isSelected
                    ? 'bg-white/15 border-white/35 shadow-[0_0_25px_rgba(255,255,255,0.12)]'
                    : 'bg-white/[0.02] border-white/05 hover:bg-white/[0.06] hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-4">
                  {/* Tier Number & Icon */}
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] text-zinc-500 font-bold">
                      0{idx + 1}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                        isCore
                          ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.6)]'
                          : isSelected
                          ? 'bg-white text-black'
                          : 'bg-white/05 text-zinc-300 group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h4
                        className={`text-sm font-bold uppercase tracking-wider ${
                          isCore ? 'text-white font-["Syncopate"]' : 'text-zinc-100'
                        }`}
                      >
                        {tier.label}
                      </h4>
                      {isCore && (
                        <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded-full bg-white/20 text-white border border-white/30">
                          THE CORE
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-zinc-400 font-mono mt-0.5">
                      {tier.sub}
                    </div>
                  </div>
                </div>

                {/* Right Telemetry Details */}
                <div className="sm:text-right pl-12 sm:pl-0">
                  <div className="text-xs text-zinc-300 font-mono">
                    {tier.telemetry}
                  </div>
                  <div className="text-[10px] text-emerald-400 font-mono mt-1 flex items-center sm:justify-end gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                    <span>{tier.status}</span>
                  </div>
                </div>
              </div>

              {/* Luminous Animated Conduit Between Tiers */}
              {idx < tiers.length - 1 && (
                <div className="relative h-4 flex items-center justify-center pointer-events-none">
                  <div className="w-0.5 h-full bg-gradient-to-b from-white/30 to-white/10 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Live System Telemetry Ticker */}
      <div className="relative z-10 mt-8 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-400">
        <div className="flex items-center gap-2">
          <Zap className="w-3.5 h-3.5 text-white" />
          <span className="text-zinc-200">
            Current Tier Focus: {tiers[activeTier].label}
          </span>
        </div>
        <div className="text-zinc-500">
          Autonomous Data Pipeline • 60 FPS Telemetry
        </div>
      </div>
    </div>
  );
}
