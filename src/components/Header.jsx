import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight, Cpu, Download } from 'lucide-react';

export default function Header() {
  const [activeSection, setActiveSection] = useState('nia');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'NIA', href: '#nia', id: 'nia' },
    { name: 'NEXA APP', href: '#nexa-app', id: 'nexa-app' },
    { name: 'FEATURES', href: '#features', id: 'features' },
    { name: 'DEMO', href: '#demo', id: 'demo' },
    { name: 'ABOUT', href: '#about', id: 'about' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ['nia', 'nexa-app', 'features', 'demo', 'about', 'download'];
      const scrollPos = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className={`mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 border ${
              isScrolled
                ? 'bg-[#09090f]/85 backdrop-blur-xl border-white/10 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.8)]'
                : 'bg-[#0c0c14]/60 backdrop-blur-md border-white/05 shadow-[0_4px_20px_rgba(0,0,0,0.5)]'
            }`}
          >
            {/* Logo */}
            <a
              href="#nia"
              onClick={(e) => scrollToSection(e, '#nia')}
              className="flex items-center gap-2.5 group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center transition-transform group-hover:scale-105 group-hover:border-white/40">
                <div className="w-3.5 h-3.5 bg-white rounded-sm rotate-45 flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
              </div>
              <div className="flex flex-col">
                <span className="font-['Syncopate'] text-base font-bold tracking-[0.22em] text-white group-hover:text-glow transition-all">
                  NEXA
                </span>
                <span className="text-[9px] uppercase tracking-[0.28em] text-zinc-400 font-mono -mt-0.5 flex items-center gap-1">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  VIA NIA
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/05 px-3 py-1.5 rounded-full">
              {navLinks.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wider transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'text-white'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]'
                    }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 bg-violet-500/15 border border-violet-400/40 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.35)] -z-10" />
                    )}
                    {item.name}
                  </a>
                );
              })}
            </div>

            {/* Right Action CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#download"
                onClick={(e) => scrollToSection(e, '#download')}
                className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase bg-violet-500 text-white hover:bg-violet-400 transition-all duration-200 shadow-[0_0_20px_rgba(139,92,246,0.45)] hover:shadow-[0_0_25px_rgba(139,92,246,0.65)] hover:scale-[1.02]"
              >
                <Download className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
                <span>DOWNLOAD NEXA</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href="#download"
                onClick={(e) => scrollToSection(e, '#download')}
                className="px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-violet-500 text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]"
              >
                GET NEXA
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-white/05 border border-white/10 text-zinc-300 hover:text-white"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-2xl md:hidden pt-24 px-6 flex flex-col justify-between pb-10 animate-fadeIn">
          <div className="flex flex-col gap-3">
            <div className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 mb-2">
              Navigation
            </div>
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`flex items-center justify-between p-3.5 rounded-xl border transition-all ${
                  activeSection === item.id
                    ? 'bg-violet-500/15 border-violet-400/40 text-white'
                    : 'bg-white/[0.02] border-white/05 text-zinc-300 hover:bg-white/[0.05]'
                }`}
              >
                <span className="font-medium tracking-wide text-sm">{item.name}</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400" />
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10">
            <a
              href="#download"
              onClick={(e) => scrollToSection(e, '#download')}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold uppercase tracking-wider text-sm bg-violet-500 text-white hover:bg-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.45)]"
            >
              <Download className="w-4 h-4" />
              DOWNLOAD NEXA FOR ANDROID
            </a>
            <div className="text-center text-xs text-zinc-500 font-mono mt-3">
              NIA v2.4 • Offline & Cloud Intelligence
            </div>
          </div>
        </div>
      )}
    </>
  );
}
