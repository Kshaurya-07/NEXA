import React, { useState } from 'react';
import { Download, QrCode, Smartphone, CheckCircle, ShieldCheck, ArrowRight, X, Sparkles, Terminal } from 'lucide-react';
import confetti from 'canvas-confetti';
import Card3D from './shared/Card3D';

export default function DownloadSection() {
  const [showQrModal, setShowQrModal] = useState(false);
  const [downloadTriggered, setDownloadTriggered] = useState(false);

  const handleDownload = () => {
    setDownloadTriggered(true);

    // Launch celebratory monochrome/silver confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#ffffff', '#d4d4d8', '#71717a', '#a1a1aa'],
      });
    } catch (e) {
      // safe fallback
    }

    // Create realistic APK download prompt
    setTimeout(() => {
      const element = document.createElement('a');
      const file = new Blob(
        [
          `NEXA Android Application Package (Preview Build v1.2.0)\nPowered by NIA — Nexa Intelligent Assistance\nSHA-256: 4f9b8c2901ef...`
        ],
        { type: 'text/plain' }
      );
      element.href = URL.createObjectURL(file);
      element.download = 'NEXA-v1.2.0-preview.apk';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }, 400);
  };

  return (
    <section id="download" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-white/[0.04] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest text-zinc-400 uppercase mb-6">
            FINAL RELEASE • GET STARTED
          </div>

          <h2 className="font-['Syncopate'] text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
            YOUR STUDENT LIFE IS <br />
            ALREADY COMPLICATED. <br />
            <span className="text-zinc-400 font-light">MANAGING IT SHOULDN'T BE.</span>
          </h2>

          <p className="mt-8 text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed">
            Install NEXA today and let NIA streamline your lectures, assignments, email circulars, and group expenses.
          </p>

          <div className="mt-8 font-['Syncopate'] text-xl font-bold tracking-widest text-white uppercase">
            GET NEXA
          </div>
        </div>

        {/* Installation Options Card */}
        <div className="max-w-4xl mx-auto">
          <Card3D depth={10} className="p-8 sm:p-10 bg-[#0c0c16]/90 border-white/20 shadow-[0_30px_90px_rgba(0,0,0,0.95)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Option 1: Direct Android APK */}
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase">
                  <Smartphone className="w-4 h-4 text-white" />
                  <span>OFFICIAL ANDROID RELEASE</span>
                </div>

                <h3 className="text-2xl font-bold text-white uppercase tracking-wide">
                  Download Android APK
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                  Latest stable build v1.2.0 with embedded NIA offline engine, instant timetable OCR parser, and smart group bill splitter.
                </p>

                <div className="space-y-2 text-xs font-mono text-zinc-400 pt-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-white" />
                    <span>Android 9.0+ compatible • Size: ~45 MB</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-white" />
                    <span>Zero telemetry trackers • Privacy verified</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <button
                    onClick={handleDownload}
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-all shadow-[0_0_25px_rgba(255,255,255,0.35)] hover:scale-105"
                  >
                    <Download className="w-4 h-4" />
                    <span>{downloadTriggered ? 'Downloading APK...' : 'Direct APK Download'}</span>
                  </button>

                  <button
                    onClick={() => setShowQrModal(true)}
                    className="inline-flex items-center gap-2 px-4 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-zinc-300 hover:text-white transition-all"
                  >
                    <QrCode className="w-4 h-4" />
                    <span>Scan QR</span>
                  </button>
                </div>
              </div>

              {/* Option 2: Google Play Store Channel */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4 text-left">
                <div className="text-xs font-mono text-zinc-400 uppercase flex items-center justify-between">
                  <span>GOOGLE PLAY STORE</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-white">COMING SOON</span>
                </div>

                <h4 className="text-base font-bold text-white uppercase tracking-wide">
                  Play Store Verification
                </h4>

                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  Currently undergoing Google Play Console review for instant updates. Download the standalone verified APK above for immediate access.
                </p>

                <div className="p-3 rounded-xl bg-black/40 border border-white/05 font-mono text-[11px] text-zinc-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-white shrink-0" />
                  <span>Play Protect Verified & Signed</span>
                </div>
              </div>
            </div>

            {/* Bottom Disclaimer */}
            <div className="mt-8 pt-6 border-t border-white/05 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-500">
              <div>Requires Android 9.0 or higher. No root or special permissions needed.</div>
              <div className="text-zinc-400">Release Build: 2026.10-NEXA-PROD</div>
            </div>
          </Card3D>
        </div>
      </div>

      {/* QR Code Scanner Modal */}
      {showQrModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-[#0e0e16] border border-white/20 rounded-3xl p-6 sm:p-8 max-w-sm w-full text-center relative shadow-2xl">
            <button
              onClick={() => setShowQrModal(false)}
              className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-4 text-white">
              <QrCode className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-bold text-white uppercase tracking-wide mb-1 font-['Syncopate']">
              Scan to Install
            </h3>
            <p className="text-xs text-zinc-400 font-mono mb-6">
              Point your phone camera to download NEXA directly.
            </p>

            {/* Futuristic QR Display */}
            <div className="p-4 bg-white rounded-2xl inline-block shadow-lg mx-auto">
              <svg
                className="w-44 h-44 text-black"
                viewBox="0 0 100 100"
                fill="currentColor"
              >
                {/* Clean geometric QR representation */}
                <rect x="10" y="10" width="24" height="24" rx="3" />
                <rect x="14" y="14" width="16" height="16" fill="white" rx="2" />
                <rect x="18" y="18" width="8" height="8" rx="1" />

                <rect x="66" y="10" width="24" height="24" rx="3" />
                <rect x="70" y="14" width="16" height="16" fill="white" rx="2" />
                <rect x="74" y="18" width="8" height="8" rx="1" />

                <rect x="10" y="66" width="24" height="24" rx="3" />
                <rect x="14" y="70" width="16" height="16" fill="white" rx="2" />
                <rect x="18" y="74" width="8" height="8" rx="1" />

                <rect x="42" y="14" width="6" height="6" />
                <rect x="52" y="14" width="6" height="10" />
                <rect x="42" y="26" width="12" height="6" />
                
                <rect x="14" y="42" width="8" height="6" />
                <rect x="28" y="42" width="10" height="10" />
                <rect x="14" y="52" width="6" height="8" />

                <rect x="44" y="44" width="12" height="12" rx="2" />
                <rect x="62" y="44" width="8" height="6" />
                <rect x="76" y="44" width="12" height="10" />

                <rect x="42" y="66" width="8" height="8" />
                <rect x="54" y="72" width="10" height="14" />
                <rect x="70" y="68" width="16" height="8" />
                <rect x="72" y="82" width="12" height="8" />
              </svg>
            </div>

            <div className="mt-6 text-[11px] font-mono text-zinc-500">
              Direct Package URL: nexa.ai/get/android
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
