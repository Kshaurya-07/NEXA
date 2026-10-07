import React, { useState } from 'react';
import { 
  Users, Code2, Cpu, Shield, Compass, Sparkles, Terminal, 
  Layers, GitBranch, ArrowUpRight, Github 
} from 'lucide-react';
import Card3D from './shared/Card3D';

export default function AboutSection() {
  const [activeDomain, setActiveDomain] = useState('cognition');

  const teamDomains = [
    {
      id: 'cognition',
      name: 'Autonomous Cognition',
      lead: 'NIA Core Architecture',
      focus: 'Multimodal student context modeling, dynamic intent parsing, and dual-engine offline synchronization.',
      metrics: 'Dual-Engine • <45ms Local Latency'
    },
    {
      id: 'interaction',
      name: 'Spatial Product Design',
      lead: 'NEXA Human Interface',
      focus: 'Calm computing philosophy, one-thumb mobile workflows, and friction-free student interaction models.',
      metrics: 'Zero Clutter • Glass Depth Design'
    },
    {
      id: 'systems',
      name: 'On-Device Runtime',
      lead: 'Local Neural Systems',
      focus: 'Embedded SQLite caching, background action queues, and high-efficiency on-device mathematical solvers.',
      metrics: 'Zero Cloud Dependency for Core Tasks'
    },
    {
      id: 'privacy',
      name: 'Student Privacy Engineering',
      lead: 'Zero-Knowledge Protocol',
      focus: 'Student data isolation, client-side encryption, and zero third-party telemetry or ad-network tracking.',
      metrics: '100% Student-Centric • Zero Ad Tech'
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* 3D Wireframe Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-left max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest text-zinc-400 uppercase mb-4 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            ENGINEERING & VISION
          </div>
          
          <h2 className="font-['Space_Grotesk'] font-semibold text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white leading-tight">
            BUILT BY <br />
            <span className="text-zinc-400 font-light text-glow">TEAM GLITCHERS</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-zinc-300 font-light leading-relaxed max-w-2xl">
            “Technology designed around the way students actually live, learn and manage their day.”
          </p>

          <p className="mt-4 text-xs sm:text-sm text-zinc-500 font-mono max-w-xl mx-auto">
            A collective of multidisciplinary systems engineers, interface designers, and AI researchers engineering the next-generation operating system for academic life.
          </p>
        </div>

        {/* Futuristic Team Matrix & Collective Identity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Left Column: Team Ethos & Architecture Statement */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <Card3D depth={10} className="p-6 sm:p-8 bg-[#0a0a12]/90 border-white/15 h-full flex flex-col justify-between">
              <div>
                {/* Team Badge */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,255,255,0.15)]">
                      <Terminal className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">COLLECTIVE</span>
                      <h3 className="text-base font-bold text-white tracking-wider font-['Space_Grotesk'] font-semibold">TEAM GLITCHERS</h3>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/10 text-white border border-white/20">
                    LABS & CORE
                  </span>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                  <p>
                    Team Glitchers was forged from a shared dissatisfaction with fragmented student software. While enterprise workers have sophisticated orchestration suites, university students are forced to glue together screenshots, messy WhatsApp chats, forgotten email circulars, and clumsy spreadsheet tabs.
                  </p>
                  <p>
                    We built NEXA and NIA as a single, coherent cognitive fabric — combining high-reasoning multimodal cloud intelligence with resilient on-device autonomy that never leaves a student stranded without their schedule.
                  </p>
                </div>
              </div>

              {/* Verified Links & Team Telemetry */}
              <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span>CORE MISSION:</span>
                  <span className="text-white">Academic Cognitive Relief</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span>FOUNDATION:</span>
                  <span className="text-zinc-300">Privacy-First • Zero Ad Tech</span>
                </div>
                <div className="pt-2">
                  <a
                    href="https://github.com/Kshaurya-07/NEXA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/05 hover:bg-white/10 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>View NEXA on GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </Card3D>
          </div>

          {/* Right Column: Engineering Domains & Holographic Specializations */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider px-2 flex items-center justify-between">
              <span>SPECIALIZED ENGINEERING DIVISIONS</span>
              <span className="text-zinc-500">4 CORE FOCUS AREAS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {teamDomains.map((domain) => {
                const isSelected = activeDomain === domain.id;
                return (
                  <Card3D
                    key={domain.id}
                    depth={8}
                    onClick={() => setActiveDomain(domain.id)}
                    className={`p-5 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                      isSelected
                        ? 'bg-white/15 border-white/35 shadow-[0_0_30px_rgba(255,255,255,0.12)]'
                        : 'bg-[#08080f]/80 border-white/05 hover:border-white/20'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                          {domain.lead}
                        </span>
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        )}
                      </div>

                      <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-2">
                        {domain.name}
                      </h4>

                      <p className="text-xs text-zinc-300 font-light leading-relaxed">
                        {domain.focus}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/05 text-[10px] font-mono text-zinc-400 flex items-center justify-between">
                      <span className="text-zinc-500">METRICS</span>
                      <span className="text-white font-medium">{domain.metrics}</span>
                    </div>
                  </Card3D>
                );
              })}
            </div>

            {/* Futuristic Lab Ethos Card */}
            <Card3D depth={6} className="p-5 bg-white/[0.02] border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Compass className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider font-['Space_Grotesk'] font-semibold">
                    The Glitchers Philosophy
                  </div>
                  <p className="text-xs text-zinc-400 font-light mt-0.5">
                    "We don't build software to capture your screen time. We build software so you can put your phone down and focus on what matters."
                  </p>
                </div>
              </div>
            </Card3D>
          </div>
        </div>
      </div>
    </section>
  );
}
