import React, { useState } from 'react';
import { Mail, IndianRupee, Calendar, CheckSquare, Sparkles, MessageCircle, Send, ArrowRight } from 'lucide-react';
import Card3D from './shared/Card3D';

export default function NiaExamples() {
  const examples = [
    {
      id: 'email',
      icon: Mail,
      category: 'UNIVERSITY COMMUNICATION',
      student: "Summarize today's university emails.",
      nia: "4 important notices found.\n1 requires action before Friday.",
      subText: "Action: Registration form due Oct 10 • Fee: ₹0 • Dean's Office",
      status: "3 unread filtered out"
    },
    {
      id: 'finance',
      icon: IndianRupee,
      category: 'FINANCE LOGGING',
      student: "I spent ₹250 at the canteen.",
      nia: "Added ₹250 → Food → Canteen.",
      subText: "Monthly Canteen budget: ₹1,850 / ₹3,000 remaining • Logged at 1:45 PM",
      status: "Synced to Offline Ledger"
    },
    {
      id: 'classes',
      icon: Calendar,
      category: 'TIMETABLE LOOKUP',
      student: "What classes do I have tomorrow?",
      nia: "You have 3 classes tomorrow.\nYour first class starts at 9:00 AM.",
      subText: "09:00 AM: Operating Systems (LH-3) • 11:30 AM: DBMS Lab • 02:00 PM: Math-III",
      status: "Zero latency on-device cache"
    },
    {
      id: 'assignments',
      icon: CheckSquare,
      category: 'ACADEMIC DEADLINES',
      student: "What assignments are due this week?",
      nia: "3 assignments found.\nYour DSA assignment is due first.",
      subText: "DSA Lab #4: Tomorrow 11:59 PM • Computer Networks: Friday • Web Dev: Sunday",
      status: "Priority: Extremely Important"
    }
  ];

  const [activeExample, setActiveExample] = useState(0);
  const [customInput, setCustomInput] = useState('');
  const [customResponse, setCustomResponse] = useState(null);

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    setCustomResponse({
      student: customInput,
      nia: `Processed via NIA Engine: Analyzed "${customInput}". 1 verified academic update dispatched.`,
      status: 'Dual-Engine Verified'
    });
  };

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest text-zinc-400 uppercase mb-4">
            REAL-WORLD INTELLIGENCE
          </div>
          <h2 className="font-['Space_Grotesk'] font-semibold text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
            NIA IN ACTION
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base font-light">
            No robotic syntax. No rigid commands. Natural student speech resolved into structured certainty.
          </p>
        </div>

        {/* 4 Floating Translucent AI Interfaces */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {examples.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card3D
                key={item.id}
                depth={10}
                className="p-6 bg-[#0a0a10]/80 border-white/10 hover:border-white/25 flex flex-col justify-between"
              >
                <div>
                  {/* Category Pill */}
                  <div className="flex items-center justify-between border-b border-white/05 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-white/10 text-white">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[10px] font-mono tracking-wider uppercase text-zinc-400">
                        {item.category}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500">
                      EXAMPLE 0{index + 1}
                    </span>
                  </div>

                  {/* Student Bubble */}
                  <div className="mb-4">
                    <div className="text-[10px] font-mono text-zinc-500 uppercase mb-1">
                      Student
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/05 text-xs sm:text-sm text-zinc-200 font-mono">
                      "{item.student}"
                    </div>
                  </div>

                  {/* NIA Response Bubble */}
                  <div className="relative pl-3 border-l-2 border-white/40 mb-3">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase mb-1 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-white" />
                      NIA
                    </div>
                    <div className="text-xs sm:text-sm text-white font-medium whitespace-pre-line leading-relaxed">
                      "{item.nia}"
                    </div>
                  </div>
                </div>

                {/* Subtext info */}
                <div className="mt-4 pt-3 border-t border-white/05 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span className="line-clamp-1 text-zinc-300">{item.subText}</span>
                  <span className="text-[9px] uppercase px-2 py-0.5 rounded bg-white/05 text-zinc-400 shrink-0 ml-2">
                    {item.status}
                  </span>
                </div>
              </Card3D>
            );
          })}
        </div>

        {/* Interactive Try-it Floating Terminal */}
        <div className="mt-12 max-w-3xl mx-auto">
          <Card3D depth={8} className="p-5 bg-[#0e0e16]/85 border-white/15">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-white" />
              <span>TEST NIA QUERY PARSER</span>
            </div>

            <form onSubmit={handleCustomSubmit} className="flex gap-2">
              <input
                type="text"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                placeholder="Try: 'Did I pay Rahul for the lab kit?' or 'When is my OS exam?'"
                className="flex-1 bg-white/[0.04] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 font-mono"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-zinc-200 transition-all flex items-center gap-1.5 shrink-0"
              >
                <span>Ask NIA</span>
                <Send className="w-3 h-3" />
              </button>
            </form>

            {customResponse && (
              <div className="mt-4 p-3 rounded-xl bg-white/10 border border-white/20 animate-fadeIn">
                <div className="text-[10px] font-mono text-zinc-400 uppercase mb-1 flex items-center justify-between">
                  <span>Simulated NIA Execution</span>
                  <span className="text-emerald-400">{customResponse.status}</span>
                </div>
                <div className="text-xs text-white font-mono">
                  {customResponse.nia}
                </div>
              </div>
            )}
          </Card3D>
        </div>
      </div>
    </section>
  );
}
