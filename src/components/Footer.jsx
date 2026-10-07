import React from 'react';
import { ArrowUp, Github, Sparkles } from 'lucide-react';

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
          {/* Brand Wordmark & Distinction */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-['Syncopate'] text-lg font-bold tracking-[0.25em] text-white">
                NEXA
              </span>
              <span className="text-[10px] text-zinc-400 border border-white/10 px-2 py-0.5 rounded-full">
                POWERED BY NIA
              </span>
            </div>
            <p className="text-zinc-500 max-w-sm text-xs font-light font-sans leading-relaxed">
              NIA — Nexa Intelligent Assistance. The autonomous intelligence layer and student operating system.
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
              href="https://github.com/Kshaurya-07/NEXA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white/05 hover:bg-white/10 border border-white/10 text-white transition-all flex items-center justify-center self-end md:self-auto"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} NEXA. Designed & Developed by Kumar Shaurya. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Dual Cognitive Engine v2.4 Active</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
