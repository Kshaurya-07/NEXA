import React, { useState } from 'react';
import { XCircle, CheckCircle2, ArrowRight, Layers, Shuffle, Check } from 'lucide-react';
import Card3D from './shared/Card3D';

export default function WhyNexa() {
  const [viewMode, setViewMode] = useState('both'); // 'before' | 'after' | 'both'

  const beforePoints = [
    'Important university notices buried in 50 daily spam emails',
    'Assignment deadlines forgotten until 1 hour before midnight',
    'Class timetables saved as awkward gallery screenshots',
    'Shared canteen & rent expenses lost in WhatsApp group chats',
    'Borrow/lend debts forgotten between friends',
    'Endless switching between 6+ disjointed utility apps',
    'Wasting 45 minutes every day simply searching for information',
  ];

  const afterPoints = [
    'Autonomous AI summaries of Gmail notices with action tags',
    'Smart gentle countdowns & priority deadlines tracked automatically',
    'Scanned timetable converted into live calendar & classroom alerts',
    'Group bill split with one tap (₹800 ÷ 4 = ₹200) with settlement ledger',
    'Transparent who-owes-whom tracking with friendly reminders',
    'Single unified mobile cockpit built specifically for students',
    'Zero manual sorting — NIA connects information into verified actions',
  ];

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest text-zinc-400 uppercase mb-4">
            THE STUDENT REALITY
          </div>
          <h2 className="font-['Space_Grotesk'] font-semibold text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
            WHY NEXA EXISTS
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base font-light">
            University isn't overwhelming because the material is hard. 
            It is overwhelming because the administrative friction is completely scattered.
          </p>

          {/* Core Mantra Quote */}
          <div className="mt-10 p-6 rounded-2xl bg-white/[0.03] border border-white/10 max-w-xl">
            <div className="font-['Space_Grotesk'] font-semibold text-lg sm:text-xl font-bold tracking-wider text-white uppercase space-y-1">
              <div>LESS REMEMBERING.</div>
              <div>LESS SEARCHING.</div>
              <div>LESS SWITCHING.</div>
              <div className="text-zinc-400">MORE DOING.</div>
            </div>
          </div>
        </div>

        {/* Before vs After Dual Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {/* BEFORE NEXA */}
          <Card3D
            depth={8}
            className="p-6 sm:p-8 bg-[#0d090a]/80 border-rose-950/40 hover:border-zinc-700/50 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between border-b border-white/05 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400">
                    <XCircle className="w-5 h-5 text-zinc-400" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">THE OLD WAY</span>
                    <h3 className="text-base font-bold text-zinc-300 uppercase tracking-wide">Before NEXA</h3>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-500 border border-zinc-800">
                  FRAGMENTED
                </span>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-zinc-400 font-light">
                {beforePoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="text-zinc-600 font-mono text-xs mt-0.5">✕</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/05 text-xs font-mono text-zinc-500">
              Result: Constant anxiety, missed deadlines, cognitive exhaustion.
            </div>
          </Card3D>

          {/* WITH NEXA */}
          <Card3D
            depth={12}
            className="p-6 sm:p-8 bg-[#0b0c14]/90 border-white/20 hover:border-white/40 shadow-[0_0_40px_rgba(255,255,255,0.06)] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/25 flex items-center justify-center text-white">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">THE INTELLIGENT WAY</span>
                    <h3 className="text-base font-bold text-white uppercase tracking-wide">With NEXA</h3>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/15 text-white border border-white/25 shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                  AUTONOMOUS
                </span>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-zinc-200 font-light">
                {afterPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="text-white font-mono text-xs mt-0.5">✓</span>
                    <span className="text-zinc-200">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-xs font-mono text-white flex items-center justify-between">
              <span>Result: Mental clarity, total control, academic momentum.</span>
            </div>
          </Card3D>
        </div>
      </div>
    </section>
  );
}
