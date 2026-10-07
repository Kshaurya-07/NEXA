import React, { useState } from 'react';
import { Cloud, WifiOff, CheckCircle2, ArrowRight, Zap, Shield, Cpu, RefreshCw, Layers } from 'lucide-react';
import Card3D from './shared/Card3D';

export default function NiaTwoWays() {
  const [activeMode, setActiveMode] = useState('connected');

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-transparent via-[#08080d]/60 to-transparent">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest text-zinc-400 uppercase mb-4">
            DUAL-ENGINE COGNITION
          </div>
          <h2 className="font-['Syncopate'] text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
            ONE ASSISTANT. <br />
            <span className="text-zinc-400">TWO WAYS TO THINK.</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base font-light">
            Campus Wi-Fi drops. Basement lecture halls have zero bars. NIA never stops. 
            A seamless dual-engine architecture that balances deep cloud reasoning with instant local resilience.
          </p>

          {/* Interactive Switcher */}
          <div className="mt-8 inline-flex p-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setActiveMode('connected')}
              className={`flex items-center gap-2 px-6 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 ${
                activeMode === 'connected'
                  ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Cloud className="w-3.5 h-3.5" />
              <span>Connected / Cloud Mode</span>
            </button>
            <button
              onClick={() => setActiveMode('offline')}
              className={`flex items-center gap-2 px-6 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 ${
                activeMode === 'offline'
                  ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <WifiOff className="w-3.5 h-3.5" />
              <span>Offline / On-Device Mode</span>
            </button>
          </div>
        </div>

        {/* Dual Cards Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card A: Connected / Cloud Mode */}
          <Card3D
            depth={12}
            className={`p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
              activeMode === 'connected'
                ? 'bg-[#0f0f18]/90 border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.08)]'
                : 'bg-[#09090e]/60 border-white/05 opacity-75'
            }`}
          >
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                    <Cloud className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">MODE A</span>
                    <h3 className="text-lg font-bold text-white tracking-wide">Connected / Cloud Mode</h3>
                  </div>
                </div>
                <span className="font-mono text-[10px] uppercase px-2.5 py-1 rounded-full bg-white/10 text-white border border-white/20">
                  Richer Cloud Intelligence
                </span>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed mb-6">
                Unlocks the full cognitive ceiling of multimodal foundation models. Understands scanned documents, resolves ambiguous cross-subject requests, and executes multi-step university workflows.
              </p>

              {/* Capability Checklist */}
              <div className="space-y-3 font-mono text-xs text-zinc-300 border-t border-white/05 pt-6">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  <span><strong>Gemini Multimodal Reasoning:</strong> Cross-document logic</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  <span><strong>Computer Vision & OCR:</strong> Scans handwritten notes & PDFs</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  <span><strong>Live App Context:</strong> Synthesizes Gmail, calendar & debts</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  <span><strong>12 Structured Action Tools:</strong> Automated database mutations</span>
                </div>
              </div>
            </div>

            {/* Bottom Example Bar */}
            <div className="mt-8 pt-4 border-t border-white/10 bg-white/[0.02] p-4 rounded-xl">
              <div className="text-[10px] font-mono uppercase text-zinc-500 mb-1">LIVE CLOUD TASK</div>
              <div className="text-xs text-zinc-200 font-mono">
                "Analyze 12-page PDF syllabus → extract all assignment deadlines and exam weightages into my NEXA schedule."
              </div>
            </div>
          </Card3D>

          {/* Card B: Offline / On-Device Mode */}
          <Card3D
            depth={12}
            className={`p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
              activeMode === 'offline'
                ? 'bg-[#0f0f18]/90 border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.08)]'
                : 'bg-[#09090e]/60 border-white/05 opacity-75'
            }`}
          >
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                    <WifiOff className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">MODE B</span>
                    <h3 className="text-lg font-bold text-white tracking-wide">Offline / On-Device Mode</h3>
                  </div>
                </div>
                <span className="font-mono text-[10px] uppercase px-2.5 py-1 rounded-full bg-white/10 text-white border border-white/20">
                  Zero Network Required
                </span>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed mb-6">
                Essential student functions continue locally with sub-millisecond responsiveness. When network connectivity returns, queued student updates synchronize cleanly without conflicts.
              </p>

              {/* Capability Checklist */}
              <div className="space-y-3 font-mono text-xs text-zinc-300 border-t border-white/05 pt-6">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  <span><strong>Local Intent Parsing:</strong> Instant interpretation on-device</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  <span><strong>Offline Timetable Lookup:</strong> Classroom & period search in &lt;5ms</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  <span><strong>Offline Math Support:</strong> Built-in numerical calculation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  <span><strong>Resilient Action Queues:</strong> Automatically syncs when reconnected</span>
                </div>
              </div>
            </div>

            {/* Bottom Disclaimer & Example */}
            <div className="mt-8 pt-4 border-t border-white/10 bg-white/[0.02] p-4 rounded-xl">
              <div className="text-[10px] font-mono uppercase text-zinc-500 mb-1 flex items-center justify-between">
                <span>ON-DEVICE RESILIENCE</span>
                <span className="text-[9px] text-zinc-400">SUPPORTED CORE ACTIONS ONLY</span>
              </div>
              <div className="text-xs text-zinc-200 font-mono">
                "What classroom is Physics Lab in?" → "Block C, Room 104 (cached locally • 0kb data used)."
              </div>
            </div>
          </Card3D>
        </div>

        {/* Architecture Note Alert */}
        <div className="mt-10 p-4 rounded-xl bg-white/[0.02] border border-white/10 max-w-3xl mx-auto flex items-start gap-3 text-xs text-zinc-400 font-light">
          <Shield className="w-4 h-4 text-white shrink-0 mt-0.5" />
          <div>
            <strong className="text-white font-medium">Clear & Honest Promise:</strong> While offline mode ensures you are never stranded without your timetable, tasks, or calculators, heavy multimodal OCR and live web indexing naturally engage when connectivity is present.
          </div>
        </div>
      </div>
    </section>
  );
}
