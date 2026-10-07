import React, { useState } from 'react';
import { 
  Smartphone, Mail, Calendar, CheckSquare, GraduationCap, 
  Wallet, Users, FileText, Search, MessageSquare, Bell, ArrowRight, 
  Sparkles, Layers, ShieldCheck
} from 'lucide-react';
import Card3D from './shared/Card3D';

export default function NexaAppIntro() {
  const [hoveredPillar, setHoveredPillar] = useState(null);

  const ecosystemPillars = [
    { name: 'University Gmail', icon: Mail, tag: 'Autonomous Distillation' },
    { name: 'Dynamic Timetable', icon: Calendar, tag: 'OCR & Live Schedule' },
    { name: 'Academic Deadlines', icon: GraduationCap, tag: 'Paced Reminders' },
    { name: 'Priority Tasks', icon: CheckSquare, tag: 'Extremely Important' },
    { name: 'Exams & Quizzes', icon: GraduationCap, tag: 'Weightage Tracking' },
    { name: 'Assignments', icon: FileText, tag: 'LMS Portal Linking' },
    { name: 'Integrated Calendar', icon: Calendar, tag: 'Zero Schedule Clashes' },
    { name: 'Finance & Budgets', icon: Wallet, tag: 'Natural Language Logs' },
    { name: 'Borrow & Lend', icon: Wallet, tag: 'Transparent Ledger' },
    { name: 'Shared Expenses', icon: Users, tag: '1-Tap Group Split' },
    { name: 'Student Documents', icon: FileText, tag: 'Offline PDF Store' },
    { name: 'Contextual Search', icon: Search, tag: 'Semantic Retrieval' },
    { name: 'NIA AI Chat', icon: MessageSquare, tag: 'Live Campus Context' },
    { name: 'Smart Notifications', icon: Bell, tag: 'Proactive Telemetry' },
  ];

  return (
    <section id="nexa-app" className="py-24 md:py-32 relative overflow-hidden">
      {/* Ambient Radial Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-white/[0.02] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest text-zinc-400 uppercase mb-4 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            THE STUDENT OPERATING SYSTEM
          </div>

          <h2 className="font-['Syncopate'] text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
            NIA IS THE INTELLIGENCE. <br />
            <span className="text-zinc-400 font-light text-glow">NEXA IS WHERE IT COMES TO LIFE.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-zinc-300 font-light leading-relaxed max-w-3xl mx-auto">
            NEXA is a <span className="text-white font-medium">spatial, mobile-first student ecosystem</span> engineered to eliminate administrative friction. It unifies the 14 essential pillars of campus existence into a single, cohesive glass cockpit.
          </p>
        </div>

        {/* 14 Floating 3D Ecosystem Pillars */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {ecosystemPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isHovered = hoveredPillar === idx;
            return (
              <div
                key={pillar.name}
                onMouseEnter={() => setHoveredPillar(idx)}
                onMouseLeave={() => setHoveredPillar(null)}
                className={`p-4 rounded-2xl border transition-all duration-300 flex flex-col items-center justify-between text-center gap-3 cursor-default ${
                  isHovered
                    ? 'bg-white/15 border-white/40 shadow-[0_0_25px_rgba(255,255,255,0.15)] -translate-y-1'
                    : 'bg-white/[0.02] border-white/05 hover:bg-white/[0.06] hover:border-white/20'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                    isHovered
                      ? 'bg-white text-black shadow-md'
                      : 'bg-white/05 text-zinc-300'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white tracking-wide">
                    {pillar.name}
                  </div>
                  <div className="text-[9px] text-zinc-500 font-mono mt-1 line-clamp-1">
                    {pillar.tag}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Master Futuristic Platform Showcase */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card3D depth={10} className="p-6 sm:p-8 bg-[#090912]/90 border-white/20 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-black/80 border border-white/25 flex items-center justify-center shrink-0 p-2 text-white shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  <img
                    src="/logo.png"
                    alt="NEXA App Official Logo"
                    className="w-full h-full object-contain filter drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-white uppercase tracking-wider font-['Syncopate']">
                      NEXA Cockpit
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white border border-white/20">
                      Nexa Assistant AI
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-400 font-light mt-1">
                    Zero endless scrolling feeds. Zero notifications without purpose. Sub-10ms offline local search.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href="#features"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-all shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:scale-105"
                >
                  <span>Interactive 3D Cockpit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </Card3D>
        </div>
      </div>
    </section>
  );
}
