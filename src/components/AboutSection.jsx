import React from 'react';
import { User, Code2, Compass, Heart, ArrowUpRight, Github, Mail, ShieldCheck } from 'lucide-react';
import Card3D from './shared/Card3D';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest text-zinc-400 uppercase mb-4">
            ORIGIN & ARCHITECT
          </div>
          <h2 className="font-['Syncopate'] text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
            BEHIND NEXA
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base font-light">
            Built out of direct student frustration. Designed for every student who refuses to let administrative chaos steal their focus.
          </p>
        </div>

        {/* Builder Profile + Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Left: The Builder Profile */}
          <div className="lg:col-span-5">
            <Card3D depth={10} className="p-6 sm:p-8 bg-[#0b0b14]/90 border-white/20 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/25 flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                    <User className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-400">
                      FOUNDER & BUILDER
                    </span>
                    <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                      Kumar Shaurya
                    </h3>
                    <p className="text-xs text-zinc-400 font-mono mt-0.5">
                      Developer • Designer • System Architect
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                  <p>
                    "I built NEXA because I was exhausted. As an engineering student, my academic life was scattered across cluttered Gmail circulars, screenshot timetables in my photo gallery, WhatsApp groups for group dinner splits, and reminder apps that never understood what my university actually wanted from me."
                  </p>
                  <p>
                    "Every existing tool felt generic. AI chatbots gave generic boilerplate. Student planners were rigid spreadsheets. NEXA is the operating system I needed: fast, offline-capable, and genuinely intelligent."
                  </p>
                </div>
              </div>

              {/* Verified Links */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                <a
                  href="https://github.com/Kshaurya-07/NEXA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/05 hover:bg-white/10 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </Card3D>
          </div>

          {/* Right: The Vision & Future Direction */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <Card3D depth={8} className="p-6 sm:p-8 bg-[#08080f]/80 border-white/10 flex-1">
              <div className="flex items-center gap-2.5 mb-4 text-xs font-mono uppercase text-zinc-400">
                <Compass className="w-4 h-4 text-white" />
                <span>THE PRODUCT PHILOSOPHY</span>
              </div>
              <h4 className="text-lg font-bold text-white uppercase tracking-wide mb-3">
                Zero Friction. Calm Computing.
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                NEXA is engineered around privacy and calm. We don't sell student data or blast intrusive advertisements. We believe the best software disappears into your flow: handling routine administrative work silently so you can learn, build, and excel.
              </p>
            </Card3D>

            <Card3D depth={8} className="p-6 sm:p-8 bg-[#08080f]/80 border-white/10 flex-1">
              <div className="flex items-center gap-2.5 mb-4 text-xs font-mono uppercase text-zinc-400">
                <Code2 className="w-4 h-4 text-white" />
                <span>FUTURE DIRECTION</span>
              </div>
              <h4 className="text-lg font-bold text-white uppercase tracking-wide mb-3">
                What’s Next for NIA & NEXA
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-zinc-300">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/05">
                  <div className="text-white font-semibold mb-1">Local SLM Integration</div>
                  <div className="text-zinc-500 text-[11px]">Deploying sub-1B parameter models directly on smartphone NPUs.</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/05">
                  <div className="text-white font-semibold mb-1">Campus ERP Connectors</div>
                  <div className="text-zinc-500 text-[11px]">Direct bi-directional sync with university moodles & portals.</div>
                </div>
              </div>
            </Card3D>
          </div>
        </div>
      </div>
    </section>
  );
}
