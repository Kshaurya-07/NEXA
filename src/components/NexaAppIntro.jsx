import React from 'react';
import { 
  Smartphone, Mail, Calendar, CheckSquare, GraduationCap, 
  Wallet, Users, FileText, Search, MessageSquare, Bell, ArrowRight, Layers
} from 'lucide-react';
import Card3D from './shared/Card3D';

export default function NexaAppIntro() {
  const ecosystemPillars = [
    { name: 'University Gmail', icon: Mail },
    { name: 'Dynamic Timetable', icon: Calendar },
    { name: 'Academic Deadlines', icon: GraduationCap },
    { name: 'Priority Tasks', icon: CheckSquare },
    { name: 'Exams & Quizzes', icon: GraduationCap },
    { name: 'Course Assignments', icon: FileText },
    { name: 'Integrated Calendar', icon: Calendar },
    { name: 'Finance & Budgets', icon: Wallet },
    { name: 'Borrow & Lend', icon: Wallet },
    { name: 'Shared Expenses', icon: Users },
    { name: 'Student Documents', icon: FileText },
    { name: 'Contextual Search', icon: Search },
    { name: 'NIA AI Chat', icon: MessageSquare },
    { name: 'Smart Notifications', icon: Bell },
  ];

  return (
    <section id="nexa-app" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Transition Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest text-zinc-400 uppercase mb-4">
            THE PLATFORM
          </div>

          {/* Key Quote / Transition */}
          <h2 className="font-['Syncopate'] text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white leading-tight">
            NIA IS THE INTELLIGENCE. <br />
            <span className="text-zinc-400">NEXA IS WHERE IT COMES TO LIFE.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-3xl mx-auto">
            NEXA is a <span className="text-white font-medium">mobile-first AI student operating platform</span> engineered from scratch. It unifies the 14 essential pillars of university life into a singular, cohesive glass interface powered natively by NIA.
          </p>
        </div>

        {/* Floating 3D Ecosystem Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {ecosystemPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.name}
                className="p-3.5 rounded-xl bg-white/[0.02] border border-white/05 hover:bg-white/[0.06] hover:border-white/20 transition-all text-center flex flex-col items-center justify-center gap-2.5 group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/05 group-hover:bg-white/10 border border-white/10 flex items-center justify-center text-zinc-300 group-hover:text-white transition-all">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs font-medium text-zinc-300 group-hover:text-white transition-colors">
                  {pillar.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Central Platform Statement */}
        <div className="mt-14 max-w-4xl mx-auto">
          <Card3D depth={10} className="p-6 sm:p-8 bg-[#090910]/80 border-white/15">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white uppercase tracking-wider font-['Syncopate']">
                    Mobile-First Native Architecture
                  </h3>
                  <p className="text-xs text-zinc-400 font-light mt-1">
                    Designed for one-thumb speed between classes, instant offline cache, and zero bloat.
                  </p>
                </div>
              </div>

              <a
                href="#features"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                <span>View All Features</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </Card3D>
        </div>
      </div>
    </section>
  );
}
