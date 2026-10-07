import React from 'react';
import { Cpu, ArrowRight, Layers, Sparkles, Activity, ShieldCheck, Zap, Download } from 'lucide-react';
import NiaIntelligenceCore from './NiaIntelligenceCore';
import Card3D from './shared/Card3D';

const OFFICIAL_DOWNLOAD_URL = "https://drive.google.com/drive/folders/1FTWEF3Nv-DdVrEB-r9dI_ydVPCRpv3xD";

export default function HeroNia() {
  return (
    <section id="nia" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
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
              <div className="font-['Syncopate'] text-2xl sm:text-4xl font-bold tracking-[0.28em] text-white">
                NEXA
              </div>
              <div className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.3em] text-zinc-400 mt-1">
                Nexa Assistant AI
              </div>
            </div>
          </div>

          {/* Futuristic Pill with Ping Indicator */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest text-zinc-300 uppercase mb-8 backdrop-blur-xl shadow-[0_0_20px_rgba(255,255,255,0.06)]">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span>NIA — NEXA INTELLIGENT ASSISTANCE</span>
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

          {/* Hero Action CTAs: Direct Download NEXA + Explore + Video */}
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
