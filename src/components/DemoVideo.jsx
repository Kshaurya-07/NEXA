import React, { useState } from 'react';
import { Play, Sparkles, Monitor, Maximize2, ExternalLink, Clock, CheckCircle } from 'lucide-react';
import Card3D from './shared/Card3D';
import JourneyNextButton from './shared/JourneyNextButton';

export default function DemoVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);
  const videoId = 'YdRgdgZewSU';

  const chapters = [
    { time: '00:15', title: 'Timetable OCR Upload', desc: 'Instant extraction of course codes, professors, and class schedules.' },
    { time: '00:45', title: 'Gmail Notice Distiller', desc: 'Compressing complex academic emails into 3 concise action points.' },
    { time: '01:10', title: 'Campus Bill Split', desc: '1-tap bill calculation, debt ledger syncing, and UPI settlement.' },
    { time: '01:40', title: 'Offline Dual Engine', desc: 'Seamless sub-10ms performance even with zero campus Wi-Fi.' },
  ];

  return (
    <section id="demo" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest text-zinc-400 uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            STAGE 05 • WATCH THE DEMO
          </div>
          <h2 className="font-['Syncopate'] text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
            SEE NEXA IN ACTION
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base font-light">
            Watch the real product, real student workflows, and NIA autonomous execution live.
          </p>
        </div>

        {/* Cinematic 3D Video Frame */}
        <div className="max-w-5xl mx-auto">
          <Card3D depth={8} className="p-3 sm:p-5 bg-[#0a0a12]/90 border-white/20 shadow-[0_30px_90px_rgba(0,0,0,0.9),0_0_50px_rgba(255,255,255,0.05)]">
            {/* Top Frame Bar */}
            <div className="flex items-center justify-between pb-3 px-2 border-b border-white/10 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-zinc-400 font-mono text-[11px] uppercase tracking-wider">
                  NEXA LAUNCH SHOWCASE • YOUTUBE
                </span>
              </div>
              <a
                href={`https://youtu.be/${videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[11px] text-zinc-400 hover:text-white transition-colors"
              >
                <span>Watch on YouTube</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Video Player Container */}
            <div className="relative mt-3 w-full aspect-video rounded-2xl overflow-hidden bg-black border border-white/10 group">
              {!isPlaying ? (
                /* Cinematic Cover / Play Overlay */
                <div
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 cursor-pointer flex flex-col items-center justify-center bg-gradient-to-t from-black via-black/60 to-black/30 group-hover:bg-black/50 transition-all duration-300"
                >
                  {/* Backdrop thumbnail from YouTube high-res */}
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    alt="NEXA Product Demo Video"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity duration-300 group-hover:scale-105"
                  />

                  {/* Play Button */}
                  <div className="relative z-10 w-20 h-20 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.4)] group-hover:scale-110 group-hover:shadow-[0_0_50px_rgba(255,255,255,0.6)] transition-all duration-300">
                    <Play className="w-8 h-8 fill-current translate-x-0.5" />
                  </div>

                  <div className="relative z-10 mt-5 text-center">
                    <div className="font-['Syncopate'] text-base sm:text-lg font-bold text-white uppercase tracking-wider">
                      PLAY OFFICIAL DEMO
                    </div>
                    <div className="text-xs text-zinc-400 font-mono mt-1">
                      Full Walkthrough • High Definition • No Autoplay Sound
                    </div>
                  </div>
                </div>
              ) : (
                /* YouTube Embed (No autoplay sound, clean privacy-enhanced) */
                <iframe
                  className="w-full h-full border-0"
                  src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                  title="NEXA Official Demo Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
            </div>

            {/* Interactive Chapter Bookmarks */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2.5 text-left">
                PRODUCT CHAPTER BOOKMARKS
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {chapters.map((chap, i) => (
                  <button
                    key={chap.time}
                    onClick={() => {
                      setActiveChapter(i);
                      setIsPlaying(true);
                    }}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      activeChapter === i
                        ? 'bg-white/15 border-white/40 text-white shadow-sm'
                        : 'bg-white/[0.02] border-white/05 text-zinc-400 hover:text-white hover:bg-white/[0.05]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="font-bold text-white">{chap.time}</span>
                      <Clock className="w-3 h-3 text-zinc-500" />
                    </div>
                    <div className="text-xs font-semibold mt-1 text-white truncate">
                      {chap.title}
                    </div>
                    <div className="text-[10px] text-zinc-400 font-mono line-clamp-1 mt-0.5">
                      {chap.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Specs Bar */}
            <div className="mt-4 pt-3 border-t border-white/05 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span>Features demonstrated: Timetable upload, NIA OCR, Email summarizer & Bill splitter</span>
              </div>
              <div className="text-zinc-500">
                Official Release Walkthrough
              </div>
            </div>
          </Card3D>
        </div>

        {/* Journey Transition to Stage 06 */}
        <JourneyNextButton
          targetId="about"
          stageNumber="06"
          stageTitle="Meet Team Glitchers"
          description="Discover the engineering philosophy and creators behind NEXA and NIA."
        />
      </div>
    </section>
  );
}
