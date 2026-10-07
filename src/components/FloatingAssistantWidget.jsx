import React, { useState } from 'react';
import { 
  Sparkles, X, Mail, IndianRupee, CheckSquare, Calendar, 
  MessageSquare, ArrowUpRight, ChevronRight, Shield, Zap, Send
} from 'lucide-react';

export default function FloatingAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('email');
  const [quickInput, setQuickInput] = useState('');
  const [chatLog, setChatLog] = useState([
    { role: 'assistant', text: 'NIA Floating HUD online. How can I assist your schedule?' }
  ]);

  const navItems = [
    { id: 'email', label: 'Email', icon: Mail },
    { id: 'finance', label: 'Finance', icon: IndianRupee },
    { id: 'tasks', label: 'Tasks', icon: CheckSquare },
    { id: 'calendar', label: 'Calendar', icon: Calendar },
    { id: 'ai', label: 'NIA AI', icon: Sparkles },
  ];

  const handleSendPrompt = (e) => {
    e.preventDefault();
    if (!quickInput.trim()) return;

    const userText = quickInput;
    setQuickInput('');
    setChatLog((prev) => [
      ...prev,
      { role: 'user', text: userText },
      { role: 'assistant', text: `NIA parsed: "${userText}". Action queued in background without app switch.` }
    ]);
  };

  return (
    <>
      {/* Persistent Floating Quick-Access Trigger Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-black/90 border border-white/20 text-white shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(255,255,255,0.15)] hover:border-white/40 hover:scale-105 transition-all duration-300 backdrop-blur-xl"
          aria-label="Open Floating NEXA Assistant"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping motion-reduce:animate-none" />
          <div className="w-5 h-5 rounded-md bg-white/10 flex items-center justify-center">
            <Sparkles className="w-3 h-3 text-white" />
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
        <div className="fixed bottom-20 right-6 z-50 w-[92vw] sm:w-[380px] rounded-3xl bg-[#090910]/95 border border-white/20 shadow-[0_25px_60px_-10px_rgba(0,0,0,0.9),0_0_35px_rgba(255,255,255,0.1)] backdrop-blur-2xl overflow-hidden animate-fadeIn">
          {/* Top Bar */}
          <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse motion-reduce:animate-none" />
              <span className="font-mono text-xs uppercase font-bold text-white tracking-wider">
                NIA FLOATING HUD
              </span>
              <span className="text-[9px] font-mono text-zinc-500 uppercase px-1.5 py-0.5 rounded bg-white/05">
                NO APP SWITCH
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Tab Selector */}
          <div className="grid grid-cols-5 border-b border-white/05 bg-black/40 p-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`py-2 flex flex-col items-center gap-1 rounded-xl transition-all ${
                    isActive
                      ? 'bg-white/15 text-white shadow-sm'
                      : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-mono font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Window */}
          <div className="p-4 min-h-[220px] max-h-[300px] overflow-y-auto space-y-3 text-left">
            {/* EMAIL TAB */}
            {activeTab === 'email' && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                  <span>UNREAD UNIVERSITY NOTICES</span>
                  <span className="text-white">1 ACTION DUE</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 space-y-1">
                  <div className="text-xs font-semibold text-white">Dean of Academics</div>
                  <div className="text-[11px] text-zinc-300 font-mono">
                    "Midsem exam timetable published. Final verification by Oct 12."
                  </div>
                  <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-emerald-400">
                    <span>Deadline: Oct 12</span>
                    <span className="text-zinc-400 underline cursor-pointer">Quick Acknowledge</span>
                  </div>
                </div>
              </div>
            )}

            {/* FINANCE TAB */}
            {activeTab === 'finance' && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                  <span>MONTHLY SPEND STATUS</span>
                  <span className="text-emerald-400">HEALTHY</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-400">October Total</span>
                    <span className="text-white font-bold">₹4,280 / ₹7,000</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-white h-full w-[61%]" />
                  </div>
                  <div className="text-[10px] font-mono text-zinc-400 pt-1">
                    Pending Friend Debts: Rahul owes you ₹300
                  </div>
                </div>
              </div>
            )}

            {/* TASKS TAB */}
            {activeTab === 'tasks' && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                  <span>UPCOMING DEADLINES</span>
                  <span className="text-rose-400 font-bold">1 URGENT</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-mono text-rose-400">
                    <span>EXTREMELY IMPORTANT</span>
                    <span>TOMORROW</span>
                  </div>
                  <div className="text-xs font-bold text-white">DSA Assignment #4</div>
                  <div className="text-[10px] text-zinc-400 font-mono">Closes at 11:59 PM on LMS</div>
                </div>
              </div>
            )}

            {/* CALENDAR TAB */}
            {activeTab === 'calendar' && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                  <span>NEXT UP TODAY</span>
                  <span className="text-zinc-400">WEDNESDAY</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 space-y-1">
                  <div className="text-[10px] font-mono text-emerald-400">STARTS IN 18 MINS</div>
                  <div className="text-xs font-bold text-white">DBMS Practical Evaluation</div>
                  <div className="text-[10px] text-zinc-400 font-mono">Block B, Room 302 • Prof. Sharma</div>
                </div>
              </div>
            )}

            {/* AI CHAT TAB */}
            {activeTab === 'ai' && (
              <div className="space-y-2">
                <div className="space-y-2 text-xs font-mono max-h-[140px] overflow-y-auto">
                  {chatLog.map((msg, i) => (
                    <div
                      key={i}
                      className={`p-2.5 rounded-xl ${
                        msg.role === 'user'
                          ? 'bg-white/10 border border-white/15 ml-4 text-right text-zinc-200'
                          : 'bg-white/[0.04] border border-white/05 mr-4 text-left text-zinc-300'
                      }`}
                    >
                      {msg.text}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSendPrompt} className="flex gap-2 pt-2">
                  <input
                    type="text"
                    value={quickInput}
                    onChange={(e) => setQuickInput(e.target.value)}
                    placeholder="Quick prompt for NIA..."
                    className="flex-1 bg-white/[0.04] border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 font-mono"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 rounded-xl bg-white text-black text-xs font-semibold hover:bg-zinc-200"
                  >
                    <Send className="w-3 h-3" />
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Footer of HUD */}
          <div className="px-4 py-2.5 border-t border-white/10 bg-black/60 flex items-center justify-between text-[10px] font-mono text-zinc-500">
            <span>NIA Background Runtime</span>
            <span className="text-zinc-400">Zero App Launch Overhead</span>
          </div>
        </div>
      )}
    </>
  );
}
