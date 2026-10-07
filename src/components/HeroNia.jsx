import React, { useState } from 'react';
import { Cpu, ArrowRight, ShieldCheck, Sparkles, Layers, Activity, Zap } from 'lucide-react';
import Card3D from './shared/Card3D';

export default function HeroNia() {
  const [pulseActive, setPulseActive] = useState(true);

  return (
    <section id="nia" className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      {/* Decorative ambient radial lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-white/[0.035] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Intelligence Pill */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest text-zinc-300 uppercase mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span>NIA — NEXA INTELLIGENT ASSISTANCE</span>
          </div>

          {/* Main Cinematic Heading */}
          <h1 className="font-['Syncopate'] text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white uppercase max-w-5xl leading-[1.1]">
            ONE ASSISTANT. <br />
            <span className="text-zinc-400 font-light">TWO WAYS TO THINK.</span>
          </h1>

          {/* Subheading & Core Philosophy */}
          <p className="mt-8 text-base sm:text-lg md:text-xl text-zinc-300 max-w-3xl leading-relaxed font-light">
            NIA is not a generic chatbot. NIA is the <span className="text-white font-medium">intelligence layer</span> behind NEXA — an autonomous cognitive engine engineered exclusively for student reality.
          </p>

          {/* Key Architectural Distinction Banner */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl w-full">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-center gap-4 text-left">
              <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs uppercase font-mono text-zinc-400">Core Engine</div>
                <div className="text-sm font-semibold text-white tracking-wide">NIA = The Intelligence</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-center gap-4 text-left">
              <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs uppercase font-mono text-zinc-400">Mobile Surface</div>
                <div className="text-sm font-semibold text-white tracking-wide">NEXA = Student-Life Platform</div>
              </div>
            </div>
          </div>

          {/* Hero Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#nexa-app"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:scale-[1.02]"
            >
              <span>Explore NEXA Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-zinc-300 bg-white/[0.03] border border-white/10 hover:bg-white/[0.07] hover:text-white transition-all backdrop-blur-md"
            >
              <span>Watch Launch Video</span>
            </a>
          </div>

          {/* 3D Floating Intelligence Core HUD Visual */}
          <div className="mt-16 w-full max-w-4xl">
            <Card3D depth={14} className="p-6 sm:p-8 bg-[#0b0b12]/80 border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]">
              {/* Header Telemetry */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-white/20 border border-white/40 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                    NIA LIVE COGNITIVE FEED
                  </span>
                </div>
                <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-500">
                  <Activity className="w-3.5 h-3.5 text-zinc-400 animate-pulse" />
                  <span>DUAL-ENGINE ACTIVE</span>
                </div>
              </div>

              {/* Grid of Intelligence Layers */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/05 hover:border-white/20 transition-all">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                    <span>LAYER 01</span>
                    <span className="text-white">ON-DEVICE</span>
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">Instant Intent & Cache</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    Sub-10ms local timetable lookup, math solvers, and resilient offline queueing without relying on cell service.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/05 hover:border-white/20 transition-all">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                    <span>LAYER 02</span>
                    <span className="text-white">CONNECTED</span>
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">Gemini Multimodal</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    OCR for scanned class timetables, deep contextual university Gmail parsing, and multi-step reasoning.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/05 hover:border-white/20 transition-all">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                    <span>LAYER 03</span>
                    <span className="text-white">ACTIONS</span>
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">12 Structured Tools</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    Direct dispatcher creating verified calendar slots, priority deadlines, split bills, and gentle notifications.
                  </p>
                </div>
              </div>

              {/* Bottom Quote ticker */}
              <div className="mt-6 pt-4 border-t border-white/05 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-white" />
                  <span className="text-zinc-300">Target latency: &lt;45ms local • &lt;320ms multimodal</span>
                </div>
                <div className="text-zinc-500">
                  Zero generic chatter. Pure academic utility.
                </div>
              </div>
            </Card3D>
          </div>
        </div>
      </div>
    </section>
  );
}
