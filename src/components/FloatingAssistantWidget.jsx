import React, { useState, useEffect } from 'react';
import { 
  Sparkles, X, Mail, IndianRupee, CheckSquare, Calendar, 
  Clock, ArrowUpRight, ChevronRight, Shield, Zap, Send, Maximize2
} from 'lucide-react';
import FeatureModal from './FeatureModal';

export default function FloatingAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('ai');
  const [quickInput, setQuickInput] = useState('');
  const [activeCockpitModal, setActiveCockpitModal] = useState(null);
  const [chatLog, setChatLog] = useState([
    { role: 'assistant', text: 'NIA Floating HUD online. I can check your timetable, priority tasks, campus expenses, and emails.' }
  ]);

  // Support ESC key to close HUD
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const navItems = [
    { id: 'ai', label: 'AI', icon: Sparkles },
    { id: 'timetable', label: 'TIMETABLE', icon: Clock },
    { id: 'tasks', label: 'TASKS', icon: CheckSquare },
    { id: 'finance', label: 'FINANCE', icon: IndianRupee },
    { id: 'email', label: 'EMAIL', icon: Mail },
    { id: 'calendar', label: 'CALENDAR', icon: Calendar },
  ];

  const handleSendPrompt = (e) => {
    e.preventDefault();
    if (!quickInput.trim()) return;

    const userText = quickInput.trim();
    setQuickInput('');
    setChatLog((prev) => [
      ...prev,
      { role: 'user', text: userText }
    ]);

    setTimeout(() => {
      let reply = `NIA resolved: "${userText}". Context evaluated against semester schedule.`;
      const lower = userText.toLowerCase();
      if (lower.includes('class') || lower.includes('timetable') || lower.includes('next')) {
        reply = 'Next Class: Operating Systems at 09:00 AM in LH-1 (Block B). Attendance is 88% (Safe).';
      } else if (lower.includes('task') || lower.includes('assignment') || lower.includes('due')) {
        reply = 'Urgent: DSA Lab Assignment #4 is due tomorrow at 11:59 PM. Priority: Extremely Important.';
      } else if (lower.includes('spend') || lower.includes('money') || lower.includes('balance')) {
        reply = 'Finance: ₹8,420 spent this month. ₹11,580 safe runway remaining. Rahul owes ₹300.';
      }
      setChatLog((prev) => [
        ...prev,
        { role: 'assistant', text: reply }
      ]);
    }, 350);
  };

  const handleExpandToCockpit = (featureId) => {
    setIsOpen(false);
    setActiveCockpitModal(featureId);
  };

  return (
    <>
      {/* Persistent Floating Quick-Access Trigger Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-black/90 border border-white/20 text-white shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(6,182,212,0.2)] hover:border-cyan-400/50 hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-xl cursor-pointer"
          aria-label="Open Floating NEXA Assistant HUD"
          aria-expanded={isOpen}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
          <div className="w-5 h-5 rounded-md bg-white/10 flex items-center justify-center">
            <Sparkles className="w-3 h-3 text-cyan-300" />
          </div>
          <span className="font-['Syncopate'] text-[11px] font-bold tracking-widest uppercase">
            NEXA HUD
          </span>
          <span className="text-[10px] font-mono text-zinc-400 border-l border-white/10 pl-2">
            QUICK
          </span>
        </button>
      </div>

      {/* Floating Translucent HUD Modal */}
      {isOpen && (
        <div 
          className="fixed bottom-20 right-4 sm:right-6 z-50 w-[94vw] sm:w-[420px] rounded-3xl bg-[#090913]/98 border border-white/20 shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_40px_rgba(6,182,212,0.15)] backdrop-blur-2xl overflow-hidden animate-fadeIn flex flex-col"
          role="dialog"
          aria-label="NEXA Command HUD"
        >
          {/* Top Bar with Prominent ✕ CLOSE Button */}
          <div className="sticky top-0 z-20 px-4 py-3.5 border-b border-white/10 flex items-center justify-between bg-black/40 backdrop-blur-xl">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <div className="flex flex-col text-left">
                <span className="font-['Syncopate'] text-[11px] uppercase font-bold text-white tracking-widest">
                  NEXA HUD
                </span>
                <span className="text-[9px] font-mono text-zinc-400 -mt-0.5">
                  Nexa Intelligent AI • Command Matrix
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="hidden sm:inline-block text-[9px] font-mono text-zinc-500 uppercase">
                ESC to close
              </span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-zinc-200 hover:text-white transition-all active:scale-95 cursor-pointer"
                aria-label="Close NEXA HUD"
              >
                <X className="w-3.5 h-3.5" />
                <span className="text-[10px] font-mono uppercase font-bold tracking-wider">CLOSE</span>
              </button>
            </div>
          </div>

          {/* Quick Tab Selector with all 6 required shortcuts */}
          <div className="grid grid-cols-6 border-b border-white/10 bg-black/60 p-1 gap-0.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`py-2 px-1 flex flex-col items-center justify-center gap-1 rounded-xl transition-all cursor-pointer ${
                    isActive
                      ? 'bg-white/20 text-white shadow-[0_0_12px_rgba(255,255,255,0.15)] font-bold'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/05'
                  }`}
                  aria-label={`Open ${item.label} tab`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span className="text-[8px] font-mono tracking-tight uppercase truncate max-w-full">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Window */}
          <div className="p-4 min-h-[220px] max-h-[320px] overflow-y-auto space-y-3 text-left">
            {/* 1. AI CHAT TAB */}
            {activeTab === 'ai' && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                  <span>NIA DUAL ENGINE COMMS</span>
                  <span className="text-cyan-400 font-bold">&lt;10ms LOCAL CACHE</span>
                </div>

                <div className="space-y-2 text-xs font-mono max-h-[140px] overflow-y-auto pr-1">
                  {chatLog.map((msg, i) => (
                    <div
                      key={i}
                      className={`p-2.5 rounded-xl ${
                        msg.role === 'user'
                          ? 'bg-cyan-500/15 border border-cyan-500/30 ml-4 text-right text-cyan-100'
                          : 'bg-white/[0.04] border border-white/10 mr-2 text-left text-zinc-200'
                      }`}
                    >
                      {msg.text}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSendPrompt} className="flex gap-2 pt-1">
                  <input
                    type="text"
                    value={quickInput}
                    onChange={(e) => setQuickInput(e.target.value)}
                    placeholder="Ask NIA anything..."
                    className="flex-1 bg-white/[0.04] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400/50 font-mono"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-2 rounded-xl bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-colors cursor-pointer"
                    aria-label="Send prompt to NIA"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>

                <button
                  type="button"
                  onClick={() => handleExpandToCockpit('chat')}
                  className="w-full mt-1 py-1.5 px-3 rounded-lg bg-white/05 hover:bg-white/10 border border-white/10 text-[10px] font-mono text-zinc-300 hover:text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Maximize2 className="w-3 h-3 text-cyan-400" />
                  <span>Launch Full AI Companion Cockpit</span>
                </button>
              </div>
            )}

            {/* 2. TIMETABLE TAB */}
            {activeTab === 'timetable' && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                  <span>TODAY'S TIMETABLE</span>
                  <span className="text-cyan-400 font-bold">WEDNESDAY</span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-white">Operating Systems (CS3006)</span>
                    <span className="text-[10px] font-mono text-emerald-400 px-1.5 py-0.5 rounded bg-emerald-400/10">
                      09:00 AM
                    </span>
                  </div>
                  <div className="text-[11px] text-zinc-300 font-mono">
                    LH-1 (Block B) • Dr. V. Prasad
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pt-1 border-t border-white/05">
                    <span>Attendance: 88%</span>
                    <span className="text-emerald-400">✓ Safe above 75% rule</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/05 text-[11px] font-mono text-zinc-400 flex items-center justify-between">
                  <span>Next: DBMS Lab (11:30 AM)</span>
                  <span className="text-zinc-500">Room 302</span>
                </div>

                <button
                  type="button"
                  onClick={() => handleExpandToCockpit('timetable')}
                  className="w-full py-1.5 px-3 rounded-lg bg-white/05 hover:bg-white/10 border border-white/10 text-[10px] font-mono text-zinc-300 hover:text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Maximize2 className="w-3 h-3 text-cyan-400" />
                  <span>Expand Timetable & 75% Calculator</span>
                </button>
              </div>
            )}

            {/* 3. TASKS TAB */}
            {activeTab === 'tasks' && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                  <span>ACTIVE DEADLINES</span>
                  <span className="text-rose-400 font-bold">1 CRITICAL</span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] font-mono text-rose-400">
                    <span className="font-bold">EXTREMELY IMPORTANT</span>
                    <span>TOMORROW</span>
                  </div>
                  <div className="text-xs font-bold text-white">DSA Assignment #4 (Dynamic Programming)</div>
                  <div className="text-[10px] text-zinc-400 font-mono">
                    Due at 11:59 PM • LMS Upload Required
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/05 text-[11px] font-mono text-zinc-300 flex items-center justify-between">
                  <span>AI Continuous Assessment Review</span>
                  <span className="text-amber-400 text-[10px]">In 2 days</span>
                </div>

                <button
                  type="button"
                  onClick={() => handleExpandToCockpit('tasks')}
                  className="w-full py-1.5 px-3 rounded-lg bg-white/05 hover:bg-white/10 border border-white/10 text-[10px] font-mono text-zinc-300 hover:text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Maximize2 className="w-3 h-3 text-cyan-400" />
                  <span>Launch Task Manager Cockpit</span>
                </button>
              </div>
            )}

            {/* 4. FINANCE TAB */}
            {activeTab === 'finance' && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                  <span>MONTHLY SPEND STATUS</span>
                  <span className="text-emerald-400 font-bold">HEALTHY</span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-400">Spent This Month</span>
                    <span className="text-white font-bold">₹8,420 / ₹20,000</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-full w-[42%]" />
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pt-1">
                    <span>Safe Runway: ₹11,580</span>
                    <span className="text-emerald-400">+₹600 Debt Receivable</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleExpandToCockpit('finance')}
                  className="w-full py-1.5 px-3 rounded-lg bg-white/05 hover:bg-white/10 border border-white/10 text-[10px] font-mono text-zinc-300 hover:text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Maximize2 className="w-3 h-3 text-cyan-400" />
                  <span>Expand Campus Finance Ledger</span>
                </button>
              </div>
            )}

            {/* 5. EMAIL TAB */}
            {activeTab === 'email' && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                  <span>UNREAD UNIVERSITY NOTICES</span>
                  <span className="text-amber-400 font-bold">1 ACTION DUE</span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 space-y-1.5">
                  <div className="text-xs font-semibold text-white">Dean of Academics Notice #492</div>
                  <div className="text-[11px] text-zinc-300 font-mono">
                    "Mid-Sem exam registration closes Oct 15 at 5:00 PM without late fee."
                  </div>
                  <div className="pt-1 flex items-center justify-between text-[10px] font-mono text-emerald-400">
                    <span>Distilled from 420 words</span>
                    <span className="text-cyan-300 font-bold">Action: Verify Hall Ticket</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleExpandToCockpit('email')}
                  className="w-full py-1.5 px-3 rounded-lg bg-white/05 hover:bg-white/10 border border-white/10 text-[10px] font-mono text-zinc-300 hover:text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Maximize2 className="w-3 h-3 text-cyan-400" />
                  <span>Expand Gmail Notice Distiller</span>
                </button>
              </div>
            )}

            {/* 6. CALENDAR TAB */}
            {activeTab === 'calendar' && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                  <span>ACADEMIC CALENDAR</span>
                  <span className="text-white font-bold">SEMESTER 5</span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 space-y-1.5">
                  <div className="text-[10px] font-mono text-cyan-400">UPCOMING MILESTONE</div>
                  <div className="text-xs font-bold text-white">Mid-Semester Theory Examinations</div>
                  <div className="text-[10px] text-zinc-400 font-mono">Begins Oct 24 • 16 days to prepare</div>
                </div>

                <button
                  type="button"
                  onClick={() => handleExpandToCockpit('calendar')}
                  className="w-full py-1.5 px-3 rounded-lg bg-white/05 hover:bg-white/10 border border-white/10 text-[10px] font-mono text-zinc-300 hover:text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Maximize2 className="w-3 h-3 text-cyan-400" />
                  <span>Launch Full Calendar Matrix</span>
                </button>
              </div>
            )}
          </div>

          {/* Footer of HUD */}
          <div className="px-4 py-2.5 border-t border-white/10 bg-black/80 flex items-center justify-between text-[10px] font-mono text-zinc-500">
            <span>NIA On-Device Daemon</span>
            <span className="text-cyan-400 font-medium">Ready</span>
          </div>
        </div>
      )}

      {/* Cockpit Modal triggered from HUD shortcuts */}
      {activeCockpitModal && (
        <FeatureModal
          featureId={activeCockpitModal}
          onClose={() => setActiveCockpitModal(null)}
        />
      )}
    </>
  );
}
