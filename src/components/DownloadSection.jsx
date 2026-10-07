import React, { useState } from 'react';
import { 
  Download, QrCode, Smartphone, CheckCircle, ShieldCheck, 
  ArrowRight, X, Sparkles, Terminal, ExternalLink, HardDrive, Cpu, FileCode2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import Card3D from './shared/Card3D';

const OFFICIAL_DOWNLOAD_URL = "https://drive.google.com/drive/folders/1FTWEF3Nv-DdVrEB-r9dI_ydVPCRpv3xD";

export default function DownloadSection() {
  const [showQrModal, setShowQrModal] = useState(false);
  const [downloadTriggered, setDownloadTriggered] = useState(false);

  const handleDownload = () => {
    setDownloadTriggered(true);

    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.7 },
        colors: ['#ffffff', '#e4e4e7', '#a1a1aa', '#71717a', '#38bdf8'],
      });
    } catch (e) {
      // safe fallback
    }

    // Open official Google Drive repository
    window.open(OFFICIAL_DOWNLOAD_URL, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setDownloadTriggered(false);
    }, 2500);
  };

  return (
    <section id="download" className="py-28 md:py-40 relative overflow-hidden">
      {/* 3D Giant Glow Hemisphere */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-t from-white/[0.07] via-white/[0.02] to-transparent rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA Header */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest text-zinc-400 uppercase mb-6 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            OFFICIAL PRODUCT DISTRIBUTION • BUILT BY TEAM GLITCHERS
          </div>

          {/* Official Brand Identity Lockup */}
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="relative group mb-5">
              <div className="absolute -inset-2 bg-gradient-to-r from-teal-500/20 via-white/20 to-amber-500/20 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-all duration-700 animate-pulse" />
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl p-3 bg-black/90 border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(255,255,255,0.15)] flex items-center justify-center backdrop-blur-2xl">
                <img
                  src="/logo.png"
                  alt="NEXA Official Owl Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Dominant Brand Typography */}
            <div className="font-['Syncopate'] text-5xl sm:text-7xl md:text-9xl font-bold tracking-widest text-white/95 uppercase text-glow leading-none">
              NEXA
            </div>
            <div className="mt-3 text-xs sm:text-sm md:text-base font-mono uppercase tracking-[0.35em] text-zinc-400">
              Nexa Assistant AI
            </div>
          </div>

          <h2 className="font-['Syncopate'] text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white leading-tight">
            YOUR STUDENT LIFE IS <br />
            ALREADY COMPLICATED. <br />
            <span className="text-zinc-400 font-light">MANAGING IT SHOULDN'T BE.</span>
          </h2>

          <p className="mt-8 text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed">
            Install NEXA today and let NIA automate your timetable, deadlines, Gmail circulars, and campus expenses.
          </p>
        </div>

        {/* Master Futuristic Download Cockpit */}
        <div className="max-w-4xl mx-auto">
          <Card3D depth={12} className="p-8 sm:p-12 bg-[#090912]/95 border-white/20 shadow-[0_35px_100px_rgba(0,0,0,0.95),0_0_50px_rgba(255,255,255,0.08)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Option 1: Direct Official Android APK on Google Drive */}
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase">
                  <Smartphone className="w-4 h-4 text-white" />
                  <span>OFFICIAL GOOGLE DRIVE REPOSITORY</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide font-['Syncopate']">
                  DOWNLOAD NEXA
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                  Direct download hosted on the official Google Drive distribution portal. Includes the complete offline NIA intelligence engine, timetable OCR scanner, and live peer credit ledger.
                </p>

                <div className="space-y-2 text-xs font-mono text-zinc-400 pt-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-white" />
                    <span>Package: application-677381be-b5ab-4235-8273-0349cea341ae.apk</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-white" />
                    <span>Android 9.0+ • Standalone APK • Zero Tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-white" />
                    <span>Instant offline SQLite cache • Dual Engine</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <a
                    href={OFFICIAL_DOWNLOAD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleDownload}
                    className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full text-xs font-semibold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.35)] hover:scale-105"
                  >
                    <Download className="w-4 h-4" />
                    <span>{downloadTriggered ? 'Opening Drive Portal...' : 'DOWNLOAD NEXA (DRIVE)'}</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                  </a>

                  <button
                    onClick={() => setShowQrModal(true)}
                    className="inline-flex items-center gap-2 px-5 py-4 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-zinc-300 hover:text-white transition-all backdrop-blur-md"
                  >
                    <QrCode className="w-4 h-4" />
                    <span>Scan QR</span>
                  </button>
                </div>
              </div>

              {/* Package Verification & Telemetry Specs */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4 text-left">
                <div className="text-xs font-mono text-zinc-400 uppercase flex items-center justify-between">
                  <span>PACKAGE VERIFICATION</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-white font-mono border border-white/20">
                    RELEASE BUILD v1.2.0
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-black/60 border border-white/10 font-mono space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-zinc-400">
                    <span>BUILD ARCH:</span>
                    <span className="text-white">arm64-v8a / universal</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-zinc-400">
                    <span>SIGNATURE:</span>
                    <span className="text-emerald-400">SHA-256 VERIFIED</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-zinc-400">
                    <span>AUTHORS:</span>
                    <span className="text-white">TEAM GLITCHERS</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-zinc-400">
                    <span>MIN RUNTIME:</span>
                    <span className="text-zinc-300">Android API 28+</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/05 font-mono text-[11px] text-zinc-300 flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-white shrink-0" />
                  <span>Verified Safe Package • No Root • 100% Privacy</span>
                </div>

                <a
                  href={OFFICIAL_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-white/05 hover:bg-white/10 border border-white/10 flex items-center justify-center gap-2 text-xs font-mono text-zinc-300 hover:text-white transition-all"
                >
                  <HardDrive className="w-3.5 h-3.5" />
                  <span>Access Google Drive Folder</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Bottom Specs Bar */}
            <div className="mt-8 pt-6 border-t border-white/05 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-500">
              <div>Requires Android 9.0 or higher. No special permissions or root required.</div>
              <div className="text-zinc-400">Release Build: 2026.10-GLITCHERS-PROD</div>
            </div>
          </Card3D>
        </div>
      </div>

      {/* QR Code Scanner Modal */}
      {showQrModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-[#0b0b14] border border-white/20 rounded-3xl p-6 sm:p-8 max-w-sm w-full text-center relative shadow-2xl">
            <button
              onClick={() => setShowQrModal(false)}
              className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-4 text-white shadow-md">
              <QrCode className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-bold text-white uppercase tracking-wide mb-1 font-['Syncopate']">
              Scan to Download
            </h3>
            <p className="text-xs text-zinc-400 font-mono mb-5">
              Point your smartphone camera to open the official Google Drive APK portal.
            </p>

            {/* Futuristic QR Display */}
            <div className="p-3 bg-white rounded-2xl inline-block shadow-2xl mx-auto border-4 border-white">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(OFFICIAL_DOWNLOAD_URL)}&color=0-0-0&bgcolor=255-255-255`}
                alt="Scan to download NEXA APK"
                className="w-48 h-48 block mx-auto rounded-lg"
              />
            </div>

            <div className="mt-5 space-y-2">
              <a
                href={OFFICIAL_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Open Google Drive Link</span>
              </a>
              <div className="text-[11px] font-mono text-zinc-500">
                Built by Team Glitchers • Official Release
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
