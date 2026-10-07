import React from 'react';
import { ArrowUp, Github, Sparkles, Download, ExternalLink, ArrowUpRight } from 'lucide-react';

const OFFICIAL_DOWNLOAD_URL = "https://drive.google.com/drive/folders/1FTWEF3Nv-DdVrEB-r9dI_ydVPCRpv3xD";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'NIA', href: '#nia' },
    { name: 'NEXA APP', href: '#nexa-app' },
    { name: 'FEATURES', href: '#features' },
    { name: 'DEMO', href: '#demo' },
    { name: 'ABOUT', href: '#about' },
    { name: 'DOWNLOAD', href: '#download' },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#050508] py-14 text-zinc-400 font-mono text-xs relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/05">
          {/* Brand Identity Lockup with Official Owl Logo */}
          <div>
            <div className="flex items-center gap-3.5 mb-3">
              <div className="w-10 h-10 rounded-xl bg-black/80 border border-white/20 p-1 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(255,255,255,0.15)]">
                <img
                  src="/logo.png"
                  alt="NEXA Brand Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]"
                />
              </div>
              <div>
                <span className="font-['Syncopate'] text-xl font-bold tracking-[0.25em] text-white block leading-none">
                  NEXA
                </span>
                <span className="text-[10px] uppercase font-mono tracking-[0.22em] text-zinc-400 mt-1 block">
                  Nexa Assistant AI
                </span>
              </div>
              <span className="ml-3 text-[10px] text-zinc-400 border border-white/10 px-2.5 py-0.5 rounded-full font-mono">
                POWERED BY NIA
              </span>
            </div>
            <p className="text-zinc-400 max-w-md text-xs font-light font-sans leading-relaxed">
              NIA — Nexa Intelligent Assistance. The autonomous intelligence layer and student operating system built by Team Glitchers.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href={OFFICIAL_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-zinc-300 font-semibold transition-colors flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-full border border-white/15"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD APK</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://github.com/Kshaurya-07/NEXA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>NEXA Repo</span>
            </a>
            <a
              href="https://github.com/kunal4060/GLITCHERS"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Team Glitchers</span>
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white/05 hover:bg-white/10 border border-white/10 text-white transition-all flex items-center justify-center self-end md:self-auto hover:scale-105"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom copyright & attribution line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} NEXA. Built by Team Glitchers. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Dual Cognitive Engine v2.4 Active • Zero Telemetry</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
