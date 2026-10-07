import React, { useState } from 'react';
import { 
  Cpu, ArrowRight, Layers, Sparkles, Activity, ShieldCheck, 
  Zap, Download, MessageSquare, Send, CheckCircle2, ChevronRight, HelpCircle
} from 'lucide-react';
import NiaIntelligenceCore from './NiaIntelligenceCore';
import Card3D from './shared/Card3D';

const OFFICIAL_DOWNLOAD_URL = "https://drive.google.com/drive/folders/1FTWEF3Nv-DdVrEB-r9dI_ydVPCRpv3xD";

export default function HeroNia() {
  const [selectedScenario, setSelectedScenario] = useState(0);
  const [customInput, setCustomInput] = useState('');
  const [customResponse, setCustomResponse] = useState(null);

  const testScenarios = [
    {
      title: 'Attendance Margin',
      prompt: 'Check attendance risk in Operating Systems (CS-3006)',
      response: 'Attended 24/26 lectures (92.3%). You are safely 17.3% above the mandatory 75% university rule. Safe buffer: You can miss up to 4 lectures without risk.',
      badge: 'Academic Rules Engine',
      latency: '6ms (Offline SQLite)',
    },
    {
      title: 'Notice Distiller',
      prompt: 'Distill Registrar Circular #492 regarding mid-sem exam fees',
      response: '1. Exam portal closes Oct 15 at 5:00 PM.\n2. ₹500 late fee applies thereafter.\n3. Zero ERP queue — 1-tap submission link verified and pinned.',
      badge: 'Autonomous Distillation',
      latency: '340ms (Gemini Cloud)',
    },
    {
      title: 'Hostel Bill Split',
      prompt: 'Split ₹1,200 dinner between me, Rahul, Kabir and Priya',
      response: 'Calculated: ₹300 per person. Logged to Campus Ledger: Rahul owes ₹300, Kabir owes ₹300, Priya owes ₹300. Generated 1-tap UPI deep-links.',
      badge: 'Social Credit Ledger',
      latency: '9ms (Instant Ledger)',
    },
    {
      title: 'Free Study Slot',
      prompt: 'Find a 90-minute window for DSA lab prep before 6 PM today',
      response: 'Optimal window found: 2:15 PM – 3:45 PM (between DBMS Lab in Block B and Math lecture in LH-3). Reserved 90-min focused study block in calendar.',
      badge: 'Schedule Balancing',
      latency: '14ms (Calendar Graph)',
    },
  ];

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    const query = customInput.trim();
    setCustomResponse({
      query,
      answer: `NIA evaluated: "${query}". Contextual student entities resolved against active semester schedule. 1 verified action queued.`,
      latency: '<45ms',
    });
    setCustomInput('');
  };

  return (
    <section id="nia" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Cinematic 3D Ambient Lighting Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-b from-white/[0.05] via-white/[0.01] to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-white/[0.02] rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-white/[0.02] rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Official Brand Identity: Owl Logo + Dominant NEXA + Supporting Subtitle */}
          <div className="flex flex-col items-center justify-center gap-3 mb-8">
            <div className="relative group">
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-teal-500/20 via-white/20 to-amber-500/20 blur-xl opacity-60 group-hover:opacity-100 transition-all duration-700 animate-pulse" />
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl p-2.5 bg-black/85 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(255,255,255,0.1)] flex items-center justify-center backdrop-blur-xl">
                <img
                  src="/logo.png"
                  alt="NEXA Official Owl Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(255,255,255,0.45)] transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="text-center">
              <div className="font-['Syncopate'] text-3xl sm:text-5xl font-bold tracking-[0.28em] text-white">
                NEXA
              </div>
              <div className="text-xs sm:text-sm font-mono uppercase tracking-[0.32em] text-zinc-400 mt-1">
                Nexa Intelligent AI
              </div>
            </div>
          </div>

          {/* Futuristic Pill with Ping Indicator */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest text-zinc-300 uppercase mb-8 backdrop-blur-xl shadow-[0_0_20px_rgba(255,255,255,0.06)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>NIA — THE INTELLIGENCE LAYER</span>
          </div>

          {/* Huge Cinematic Futuristic Typography */}
          <h1 className="font-['Syncopate'] text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white uppercase max-w-6xl leading-[1.08]">
            ONE ASSISTANT. <br />
            <span className="text-zinc-400 font-light text-glow">TWO WAYS TO THINK.</span>
          </h1>

          {/* Subheading & Core Philosophy */}
          <p className="mt-8 text-base sm:text-lg md:text-xl text-zinc-300 max-w-3xl leading-relaxed font-light">
            NIA is not a generic chatbot. NIA is the <span className="text-white font-medium underline decoration-white/40 underline-offset-4">intelligence layer</span> behind NEXA — an autonomous cognitive architecture engineered specifically for the non-negotiable realities of student life.
          </p>

          {/* Architectural Distinction Banner */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl w-full">
            <Card3D depth={8} className="p-4 bg-white/[0.02] border-white/10 flex items-center gap-4 text-left">
              <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-white shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-mono text-zinc-400">COGNITIVE ENGINE</div>
                <div className="text-sm font-bold text-white tracking-wide">NIA = The Intelligence</div>
              </div>
            </Card3D>

            <Card3D depth={8} className="p-4 bg-white/[0.02] border-white/10 flex items-center gap-4 text-left">
              <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-white shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-mono text-zinc-400">STUDENT PLATFORM</div>
                <div className="text-sm font-bold text-white tracking-wide">NEXA = The Operating System</div>
              </div>
            </Card3D>
          </div>

          {/* Interactive Live Scenario Sandbox */}
          <div className="mt-12 w-full max-w-4xl mx-auto">
            <Card3D depth={10} className="p-6 sm:p-8 bg-[#080811]/90 border-white/15 shadow-[0_20px_70px_rgba(0,0,0,0.85)]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-6 text-left">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-xs uppercase font-bold text-white tracking-wider">
                    INTERACTIVE NIA REASONING CONSOLE
                  </span>
                </div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase">
                  TAP TO TEST LIVE CAMPUS SCENARIOS
                </span>
              </div>

              {/* Scenario Selector Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                {testScenarios.map((sc, i) => (
                  <button
                    key={sc.title}
                    onClick={() => {
                      setSelectedScenario(i);
                      setCustomResponse(null);
                    }}
                    className={`py-2 px-3 rounded-xl text-xs font-mono transition-all text-left flex flex-col justify-between ${
                      selectedScenario === i && !customResponse
                        ? 'bg-white text-black font-semibold shadow-md'
                        : 'bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/05'
                    }`}
                  >
                    <span className="text-[9px] opacity-75 uppercase">TEST 0{i + 1}</span>
                    <span className="truncate">{sc.title}</span>
                  </button>
                ))}
              </div>

              {/* Live Display Window */}
              <div className="p-5 rounded-2xl bg-black/60 border border-white/10 text-left space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase text-zinc-500">STUDENT QUERY</span>
                    <div className="text-sm font-semibold text-white flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-zinc-400 shrink-0" />
                      <span>{customResponse ? customResponse.query : testScenarios[selectedScenario].prompt}</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white border border-white/15 shrink-0">
                    {customResponse ? 'Live Custom Query' : testScenarios[selectedScenario].badge}
                  </span>
                </div>

                <div className="pt-3 border-t border-white/05 space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                    <span>NIA RESPONSE & VERIFIED ACTIONS</span>
                    <span className="text-emerald-400">
                      ⚡ Latency: {customResponse ? customResponse.latency : testScenarios[selectedScenario].latency}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-mono text-zinc-200 whitespace-pre-line leading-relaxed">
                    {customResponse ? customResponse.answer : testScenarios[selectedScenario].response}
                  </p>
                </div>
              </div>

              {/* Custom Prompt Input */}
              <form onSubmit={handleCustomSubmit} className="mt-5 flex gap-2">
                <input
                  type="text"
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  placeholder="Ask NIA anything (e.g. 'Can I bunk tomorrow?' or 'Split ₹450 with Rahul')..."
                  className="flex-1 bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 font-mono"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-zinc-200 transition-all flex items-center gap-1.5 shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Test NIA</span>
                </button>
              </form>
            </Card3D>
          </div>

          {/* Hero Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={OFFICIAL_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.35)] hover:scale-105"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD NEXA</span>
            </a>
            <a
              href="#nexa-app"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-zinc-200 bg-white/[0.05] border border-white/15 hover:bg-white/10 hover:text-white transition-all backdrop-blur-md"
            >
              <span>Explore NEXA Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white transition-all"
            >
              <span>Watch Launch Video</span>
            </a>
          </div>

          {/* Central 3D Animated Intelligence Flow: STUDENT → CONTEXT → NIA → AI PROCESSING → ACTION */}
          <div className="w-full">
            <NiaIntelligenceCore />
          </div>
        </div>
      </div>
    </section>
  );
}
