import React, { useState } from 'react';
import { 
  User, Database, Cpu, GitFork, Sparkles, ArrowDown, 
  Bell, FileText, TrendingUp, Lightbulb, MessageSquare, CheckSquare
} from 'lucide-react';
import Card3D from './shared/Card3D';

export default function NiaArchitecture() {
  const [activeStep, setActiveStep] = useState(2);

  const steps = [
    {
      step: '01',
      title: 'STUDENT',
      subtitle: 'Voice, text, photo, or automatic time trigger',
      icon: User,
      details: 'Captures immediate student input: natural language commands, snapped photos of lecture whiteboards, or geofenced campus triggers.'
    },
    {
      step: '02',
      title: 'STUDENT DATA & CONTEXT',
      subtitle: 'Gmail, Timetable, Spends, Course syllabus',
      icon: Database,
      details: 'Unifies fragmented silos: university email inbox, semester timetable records, ledger balance, and pending assignments into an active semantic graph.'
    },
    {
      step: '03',
      title: 'NIA AI PROCESSING',
      subtitle: 'Intent parsing, Entity extraction, Cross-linking',
      icon: Cpu,
      details: 'Dissects the request: identifies dates, entities, currency values, professors, and course codes. Matches against contextual student priorities.'
    },
    {
      step: '04',
      title: 'CONNECTED vs ON-DEVICE ROUTER',
      subtitle: 'Cloud Gemini multimodal or local offline execution',
      icon: GitFork,
      details: 'Intelligently determines path: sub-10ms offline local execution for timetable/math vs high-reasoning Gemini cloud processing for multi-page documents.'
    },
    {
      step: '05',
      title: 'PERSONALIZED OUTPUT & ACTIONS',
      subtitle: 'Six direct student deliverables',
      icon: Sparkles,
      details: 'Executes verified system updates and renders clean, actionable results on the student’s phone.'
    }
  ];

  const outputs = [
    { name: 'Reminders', icon: Bell, desc: '"DBMS in 10 mins (Block B)"' },
    { name: 'Summaries', icon: FileText, desc: '3-bullet Gmail notices' },
    { name: 'Insights', icon: TrendingUp, desc: 'Weekly canteen spend trends' },
    { name: 'Recommendations', icon: Lightbulb, desc: 'Paced homework block before lab' },
    { name: 'Answers', icon: MessageSquare, desc: 'Direct syllabus answers' },
    { name: 'Actions', icon: CheckSquare, desc: 'Auto-scheduled calendar & debt ledger' },
  ];

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest text-zinc-400 uppercase mb-4">
            02 · PIPELINE ARCHITECTURE
          </div>
          <h2 className="font-['Space_Grotesk'] font-semibold text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
            HOW NIA WORKS
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base font-light">
            A synchronized, end-to-end cognitive telemetry pipeline converting unstructured academic chaos into deterministic execution.
          </p>
        </div>

        {/* 5-Step Futuristic Pipeline */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            const isLast = idx === steps.length - 1;
            const isSelected = activeStep === idx;

            return (
              <div key={item.step} className="relative">
                <div
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                    isSelected
                      ? 'bg-white/10 border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.12)] translate-x-1'
                      : 'bg-white/[0.02] border-white/05 hover:bg-white/[0.05] hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="font-mono text-xs px-2.5 py-1 rounded bg-white/10 text-white border border-white/20 shrink-0">
                      STEP {item.step}
                    </div>
                    <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-white text-black' : 'bg-white/05 text-zinc-300'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white tracking-wide">
                        {item.title}
                      </div>
                      <div className="text-xs text-zinc-400 font-mono">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>

                  <div className="md:max-w-xs text-xs text-zinc-300 font-light pl-14 md:pl-0">
                    {item.details}
                  </div>
                </div>

                {/* Animated connecting line with arrow */}
                {!isLast && (
                  <div className="flex justify-center my-2">
                    <div className="w-0.5 h-6 bg-gradient-to-b from-white/30 to-white/05 relative">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Personalized Outputs Grid */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
              GENERATED OUTPUTS & ACTIONS
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {outputs.map((out) => {
              const OutIcon = out.icon;
              return (
                <div
                  key={out.name}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/25 transition-all text-left"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <OutIcon className="w-4 h-4 text-white" />
                    <span className="text-xs font-semibold text-white">{out.name}</span>
                  </div>
                  <div className="text-[11px] text-zinc-400 font-mono">
                    {out.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
