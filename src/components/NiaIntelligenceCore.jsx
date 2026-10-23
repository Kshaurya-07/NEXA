import React, { useState, useEffect, useRef } from 'react';
import { 
  Cpu, Database, Sparkles, CheckSquare, Zap, Activity, 
  ArrowRight, ShieldCheck, Layers, Radio, RefreshCw, Send, ChevronRight
} from 'lucide-react';

export default function NiaIntelligenceCore() {
  const [activeNode, setActiveNode] = useState('core'); // 'input' | 'graph' | 'core' | 'reasoning' | 'action'
  const [isCascading, setIsCascading] = useState(false);
  const [cascadeStage, setCascadeStage] = useState(null);
  const containerRef = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const nodes = {
    input: {
      id: 'input',
      title: 'DATA & PERCEPTION',
      subtitle: 'Multimodal Academic Ingestion',
      icon: Radio,
      color: 'cyan',
      metrics: 'Timetable Photos (OCR) • Gmail Notices • Voice & Text',
      latency: '12ms Ingestion',
      details: 'Converts unstructured campus documents, syllabus PDFs, and natural student queries into normalized schema objects.',
    },
    graph: {
      id: 'graph',
      title: 'CAMPUS CONTEXT GRAPH',
      subtitle: 'Relational Student State Matrix',
      icon: Database,
      color: 'teal',
      metrics: '148 Active Academic Entities • 75% Attendance Buffer',
      latency: 'Instant Sync',
      details: 'Tracks class locations, faculty details, bunk safety thresholds, pending LMS assignments, and hostel roommate debts.',
    },
    core: {
      id: 'core',
      title: 'NIA INTELLIGENCE CORE',
      subtitle: 'Autonomous Cognitive Engine',
      icon: Cpu,
      color: 'cyan',
      metrics: 'Dual-Engine Cognition • High-Reasoning Cloud + Local Cache',
      latency: '<10ms Local Execution',
      details: 'The central orchestration brain that interprets intent, predicts deadlines, and arbitrates conflicts without user prompting.',
    },
    reasoning: {
      id: 'reasoning',
      title: 'REASONING MATRIX',
      subtitle: 'Dual-Engine Computational Solver',
      icon: Sparkles,
      color: 'emerald',
      metrics: 'Gemini 1.5 Pro Cloud + Embedded SQLite Daemon',
      latency: 'Sub-10ms Math Solver',
      details: 'Runs high-order multi-step reasoning: splits group bills evenly, optimizes revision sprint windows, and distills 400-word emails.',
    },
    action: {
      id: 'action',
      title: 'ACTION DISPATCH',
      subtitle: 'Autonomous System State Mutations',
      icon: CheckSquare,
      color: 'white',
      metrics: '1-Tap UPI Links • Calendar Time-Locks • Alert Queues',
      latency: 'Zero Manual Sorting',
      details: 'Executes verified system updates directly inside the phone OS: updates calendar events, dispatches notifications, and generates UPI links.',
    },
  };

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      rx: (y / (rect.height / 2)) * -5,
      ry: (x / (rect.width / 2)) * 5,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0 });
  };

  const timeoutsRef = useRef([]);

  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach(t => clearTimeout(t));
      timeoutsRef.current = [];
    };
  }, []);

  const triggerCascade = () => {
    if (isCascading) return;
    timeoutsRef.current.forEach(t => clearTimeout(t));
    timeoutsRef.current = [];
    setIsCascading(true);

    const sequence = ['input', 'graph', 'core', 'reasoning', 'action'];
    sequence.forEach((nodeId, idx) => {
      const t = setTimeout(() => {
        setCascadeStage(nodeId);
        setActiveNode(nodeId);
      }, idx * 650);
      timeoutsRef.current.push(t);
    });

    const finalT = setTimeout(() => {
      setIsCascading(false);
      setCascadeStage(null);
      setActiveNode('core');
    }, sequence.length * 650 + 600);
    timeoutsRef.current.push(finalT);
  };

  const currentNode = nodes[activeNode] || nodes.core;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-5xl mx-auto my-14 p-6 sm:p-10 rounded-3xl bg-[#080812]/95 border border-white/20 shadow-[0_25px_90px_rgba(0,0,0,0.95),0_0_50px_rgba(6,182,212,0.12)] overflow-hidden perspective-1000 transition-all duration-300"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rx.toFixed(2)}deg) rotateY(${tilt.ry.toFixed(2)}deg)`,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* 3D Atmospheric Ambient Glow Cones */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/[0.03] rounded-full blur-[100px] pointer-events-none" />

      {/* Header Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5 mb-8">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center">
            <span className="w-3 h-3 rounded-full bg-cyan-400 animate-ping absolute opacity-75" />
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 relative" />
          </div>
          <div className="text-left">
            <h3 className="font-['Syncopate'] text-xs sm:text-sm font-bold uppercase tracking-widest text-white">
              NIA 3D INTELLIGENCE CORE
            </h3>
            <p className="text-[10px] font-mono text-zinc-400">
              Autonomous Multimodal Neural Architecture • Spatial Engine
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={triggerCascade}
            disabled={isCascading}
            className="group px-4 py-2 rounded-full bg-white text-black hover:bg-zinc-200 text-xs font-mono uppercase font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 disabled:opacity-60 flex items-center gap-2 cursor-pointer"
          >
            <Zap className={`w-3.5 h-3.5 fill-current text-cyan-700 ${isCascading ? 'animate-bounce' : ''}`} />
            <span>{isCascading ? 'TRANSMITTING CASCADE...' : 'SIMULATE LIVE FLOW'}</span>
          </button>
        </div>
      </div>

      {/* Main 3D Spatial Schematic Canvas & Nodes Constellation */}
      <div className="relative z-10 py-6 sm:py-10">
        <div className="relative w-full max-w-2xl mx-auto h-[320px] sm:h-[380px] flex items-center justify-center">
          
          {/* Background Connecting Cyber Conduits (SVG Layer) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
            <defs>
              <linearGradient id="cyberGlowCyan" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="cyberGlowTeal" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Top to Center Conduit */}
            <line 
              x1="50%" y1="18%" x2="50%" y2="50%" 
              stroke="url(#cyberGlowCyan)" 
              strokeWidth={cascadeStage === 'input' || activeNode === 'input' ? '2.5' : '1.2'} 
              strokeDasharray="4 4"
              className={isCascading ? 'animate-pulse' : ''}
            />

            {/* Right to Center Conduit */}
            <line 
              x1="82%" y1="50%" x2="50%" y2="50%" 
              stroke="url(#cyberGlowTeal)" 
              strokeWidth={cascadeStage === 'graph' || activeNode === 'graph' ? '2.5' : '1.2'} 
              strokeDasharray="4 4"
            />

            {/* Center to Left Conduit */}
            <line 
              x1="50%" y1="50%" x2="18%" y2="50%" 
              stroke="url(#cyberGlowCyan)" 
              strokeWidth={cascadeStage === 'reasoning' || activeNode === 'reasoning' ? '2.5' : '1.2'} 
              strokeDasharray="4 4"
            />

            {/* Center to Bottom Conduit */}
            <line 
              x1="50%" y1="50%" x2="50%" y2="82%" 
              stroke="#ffffff" 
              strokeWidth={cascadeStage === 'action' || activeNode === 'action' ? '2.5' : '1.2'} 
              strokeDasharray="4 4"
            />

            {/* Perimeter Orbital Ring */}
            <circle 
              cx="50%" cy="50%" r="38%" 
              fill="none" 
              stroke="rgba(255, 255, 255, 0.08)" 
              strokeWidth="1" 
              strokeDasharray="6 6" 
            />
          </svg>

          {/* Central Futuristic NIA Intelligence Core */}
          <div 
            onClick={() => setActiveNode('core')}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${
              activeNode === 'core' || cascadeStage === 'core' ? 'scale-110' : 'hover:scale-105'
            }`}
          >
            {/* Concentric Outer Rotating Orbital Rings */}
            <div className="absolute w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-cyan-500/25 border-dashed animate-[spin_24s_linear_infinite]" />
            <div className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-teal-400/20 animate-[spin_16s_linear_infinite_reverse]" />

            {/* Core Orb Container */}
            <div className={`relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl p-3 bg-black/90 border flex flex-col items-center justify-center backdrop-blur-2xl transition-all duration-300 ${
              activeNode === 'core' || cascadeStage === 'core'
                ? 'border-cyan-400 shadow-[0_0_50px_rgba(6,182,212,0.45)]'
                : 'border-white/25 shadow-[0_0_30px_rgba(0,0,0,0.9)] hover:border-white/50'
            }`}>
              <img 
                src="/logo.png" 
                alt="NIA Official Owl Core" 
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain filter drop-shadow-[0_0_12px_rgba(6,182,212,0.6)]" 
              />
              <span className="font-['Syncopate'] text-[9px] sm:text-[10px] font-bold tracking-widest text-white mt-1 uppercase">
                NIA CORE
              </span>
            </div>

            <span className="absolute -bottom-6 px-2.5 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-[9px] font-mono text-cyan-300 uppercase tracking-wider whitespace-nowrap backdrop-blur-md">
              COGNITIVE ENGINE
            </span>
          </div>

          {/* SATELLITE NODE 1: TOP (DATA / INPUT) */}
          <button
            onClick={() => setActiveNode('input')}
            className={`absolute top-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border backdrop-blur-xl transition-all duration-300 cursor-pointer ${
              activeNode === 'input' || cascadeStage === 'input'
                ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-[0_0_25px_rgba(6,182,212,0.4)] scale-105'
                : 'bg-black/80 border-white/15 text-zinc-300 hover:border-white/40 hover:text-white'
            }`}
          >
            <Radio className="w-4 h-4 text-cyan-400 shrink-0" />
            <div className="text-left">
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-white">
                DATA & PERCEPTION
              </div>
              <div className="text-[8px] font-mono text-zinc-400">Timetable OCR • Gmail Notices</div>
            </div>
          </button>

          {/* SATELLITE NODE 2: RIGHT (CAMPUS CONTEXT GRAPH) */}
          <button
            onClick={() => setActiveNode('graph')}
            className={`absolute top-1/2 right-0 sm:right-2 -translate-y-1/2 z-20 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border backdrop-blur-xl transition-all duration-300 cursor-pointer ${
              activeNode === 'graph' || cascadeStage === 'graph'
                ? 'bg-teal-500/20 border-teal-400 text-white shadow-[0_0_25px_rgba(20,184,166,0.4)] scale-105'
                : 'bg-black/80 border-white/15 text-zinc-300 hover:border-white/40 hover:text-white'
            }`}
          >
            <Database className="w-4 h-4 text-teal-400 shrink-0" />
            <div className="text-left">
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-white">
                CONTEXT GRAPH
              </div>
              <div className="text-[8px] font-mono text-zinc-400">75% Attendance • Debts</div>
            </div>
          </button>

          {/* SATELLITE NODE 3: LEFT (REASONING MATRIX) */}
          <button
            onClick={() => setActiveNode('reasoning')}
            className={`absolute top-1/2 left-0 sm:left-2 -translate-y-1/2 z-20 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border backdrop-blur-xl transition-all duration-300 cursor-pointer ${
              activeNode === 'reasoning' || cascadeStage === 'reasoning'
                ? 'bg-emerald-500/20 border-emerald-400 text-white shadow-[0_0_25px_rgba(16,185,129,0.4)] scale-105'
                : 'bg-black/80 border-white/15 text-zinc-300 hover:border-white/40 hover:text-white'
            }`}
          >
            <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
            <div className="text-left">
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-white">
                REASONING MATRIX
              </div>
              <div className="text-[8px] font-mono text-zinc-400">Dual-Engine • &lt;10ms Local</div>
            </div>
          </button>

          {/* SATELLITE NODE 4: BOTTOM (ACTION DISPATCH) */}
          <button
            onClick={() => setActiveNode('action')}
            className={`absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border backdrop-blur-xl transition-all duration-300 cursor-pointer ${
              activeNode === 'action' || cascadeStage === 'action'
                ? 'bg-white/25 border-white text-white shadow-[0_0_25px_rgba(255,255,255,0.4)] scale-105'
                : 'bg-black/80 border-white/15 text-zinc-300 hover:border-white/40 hover:text-white'
            }`}
          >
            <CheckSquare className="w-4 h-4 text-white shrink-0" />
            <div className="text-left">
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-white">
                ACTION DISPATCH
              </div>
              <div className="text-[8px] font-mono text-zinc-400">Calendar Locks • 1-Tap UPI</div>
            </div>
          </button>

        </div>
      </div>

      {/* Interactive Active Node Telemetry Card */}
      <div className="relative z-10 mt-6 p-5 sm:p-6 rounded-2xl bg-black/60 border border-white/15 text-left transition-all">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3 mb-3">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-['Syncopate'] text-xs uppercase font-bold text-white tracking-wider">
              {currentNode.title}
            </span>
            <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-white/10 text-cyan-300 border border-white/15">
              {currentNode.subtitle}
            </span>
          </div>
          <div className="text-[10px] font-mono text-emerald-400">
            ⚡ {currentNode.latency}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          <div className="md:col-span-8 text-xs text-zinc-300 font-light leading-relaxed">
            {currentNode.details}
          </div>
          <div className="md:col-span-4 p-3 rounded-xl bg-white/[0.03] border border-white/05 text-[11px] font-mono text-zinc-300">
            <span className="text-[9px] uppercase text-zinc-500 block mb-1">Live Telemetry</span>
            {currentNode.metrics}
          </div>
        </div>
      </div>

      {/* Bottom Architectural Status Bar */}
      <div className="relative z-10 mt-4 pt-3 border-t border-white/05 flex flex-wrap items-center justify-between text-[10px] font-mono text-zinc-500">
        <div className="flex items-center gap-2">
          <Activity className="w-3.5 h-3.5 text-cyan-400" />
          <span>Zero Server Dependencies for Core Attendance & Schedule</span>
        </div>
        <div>
          Real-time Multimodal Student Cognition
        </div>
      </div>
    </div>
  );
}
