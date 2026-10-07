import React, { useState, useEffect } from 'react';
import { 
  X, IndianRupee, Calendar, CheckSquare, Mail, 
  Users, Sparkles, TrendingUp, AlertTriangle, CheckCircle, 
  Clock, ArrowRight, ShieldCheck, ChevronRight, RefreshCw, Send,
  Sliders, Plus, Wallet, FileText, Smartphone
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function FeatureModal({ featureId, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  // Finance state
  const [spentAmount, setSpentAmount] = useState(8420);
  const [budgetLimit] = useState(20000);
  const remainingBudget = budgetLimit - spentAmount;
  const [simulatedCategory, setSimulatedCategory] = useState('Food');
  const [simulatedAmount, setSimulatedAmount] = useState(250);
  const [financeTransactions, setFinanceTransactions] = useState([
    { id: 1, desc: 'Dominos Pizza (Hostel Delivery)', cat: 'Food', amount: 480, date: 'Today, 2:30 PM' },
    { id: 2, desc: 'Auto Rickshaw to City Mall', cat: 'Travel', amount: 160, date: 'Yesterday' },
    { id: 3, desc: 'Amazon Engineering Notebooks', cat: 'Shopping', amount: 350, date: 'Oct 5' },
    { id: 4, desc: 'Campus Canteen Lunch', cat: 'Food', amount: 120, date: 'Oct 4' },
  ]);

  // Timetable & Attendance state
  const [selectedDay, setSelectedDay] = useState('Wednesday');
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const [courses, setCourses] = useState([
    { code: 'CS3002', name: 'Artificial Intelligence', attended: 22, total: 25, faculty: 'Dr. Ramesh K.', room: 'LH-3' },
    { code: 'CS3004', name: 'Database Management Systems', attended: 19, total: 25, faculty: 'Prof. Ananya S.', room: 'Lab 2' },
    { code: 'CS3006', name: 'Operating Systems', attended: 24, total: 26, faculty: 'Dr. V. Prasad', room: 'LH-1' },
    { code: 'MA2001', name: 'Discrete Mathematics', attended: 20, total: 25, faculty: 'Prof. Mohan G.', room: 'LH-5' },
  ]);

  // Tasks state
  const [tasks, setTasks] = useState([
    { id: 1, title: 'DSA Lab Assignment #4 (Dynamic Programming)', priority: 'Extremely Important', due: 'Tomorrow 11:59 PM', done: false },
    { id: 2, title: 'AI Continuous Assessment Test-2 Review', priority: 'High', due: 'In 2 days', done: false },
    { id: 3, title: 'OS Semaphore Simulation submission', priority: 'Medium', due: 'Friday', done: true },
    { id: 4, title: 'Submit Hostel Leave Application', priority: 'Low', due: 'Sunday', done: false },
  ]);

  // Borrow & Lend state
  const [peers, setPeers] = useState([
    { id: 1, name: 'Rahul Sharma', type: 'owes_you', amount: 300, reason: 'Food Street Dinner split', settled: false },
    { id: 2, name: 'Priya Patel', type: 'owes_you', amount: 450, reason: 'Weekend Uber Cab', settled: false },
    { id: 3, name: 'Arjun Verma', type: 'you_owe', amount: 150, reason: 'Lab Manual Color Printouts', settled: false },
    { id: 4, name: 'Sneha Rao', type: 'owes_you', amount: 180, reason: 'Stationary & Pens', settled: true },
  ]);

  // Email distillation demo
  const [emailDistilled, setEmailDistilled] = useState(true);

  // AI chat playground
  const [userQuery, setUserQuery] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', text: 'Hello! I am NIA. How can I optimize your campus schedule or finances today?' }
  ]);

  const handleSimulateExpense = (e) => {
    e.preventDefault();
    if (!simulatedAmount || simulatedAmount <= 0) return;
    setSpentAmount((prev) => prev + Number(simulatedAmount));
    setFinanceTransactions((prev) => [
      {
        id: Date.now(),
        desc: `Quick Expense: ${simulatedCategory}`,
        cat: simulatedCategory,
        amount: Number(simulatedAmount),
        date: 'Just now',
      },
      ...prev,
    ]);
    try {
      confetti({ particleCount: 35, spread: 60, origin: { y: 0.6 } });
    } catch (_) {}
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const settlePeer = (id) => {
    setPeers((prev) =>
      prev.map((p) => (p.id === id ? { ...p, settled: true } : p))
    );
    try {
      confetti({ particleCount: 40, spread: 70, origin: { y: 0.5 } });
    } catch (_) {}
  };

  const handleAskNia = (e) => {
    e.preventDefault();
    if (!userQuery.trim()) return;
    const q = userQuery;
    setUserQuery('');
    setChatMessages((prev) => [...prev, { role: 'user', text: q }]);

    setTimeout(() => {
      let reply = `NIA evaluated: "${q}". All academic parameters are safe.`;
      const lower = q.toLowerCase();
      if (lower.includes('bunk') || lower.includes('attendance')) {
        reply = 'Attendance Alert: DBMS is at 76% (19/25). If you miss today’s class, it drops to 73.07% (Debarred threshold is <75%). Recommendation: Do NOT bunk DBMS today.';
      } else if (lower.includes('spend') || lower.includes('money') || lower.includes('budget') || lower.includes('weekend')) {
        reply = 'Financial Pacing: You have ₹11,580 remaining from your ₹20,000 monthly budget. At ₹271/day, you have safe headroom. Recommend keeping Saturday party spend below ₹450.';
      } else if (lower.includes('class') || lower.includes('timetable') || lower.includes('schedule')) {
        reply = 'Schedule Check: Today is Wednesday. Next lecture: Operating Systems at 09:00 AM in LH-3 with Prof. R. Verma. Followed by DBMS Lab in Room 302 at 11:30 AM.';
      } else if (lower.includes('task') || lower.includes('assignment') || lower.includes('exam')) {
        reply = 'Priority Reminder: DSA Lab Assignment #4 is marked EXTREMELY IMPORTANT and closes tomorrow at 11:59 PM. Block 8:00 PM - 10:30 PM for completion.';
      }
      setChatMessages((prev) => [...prev, { role: 'assistant', text: reply }]);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-2xl animate-fadeIn overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-[#090913] border border-white/20 rounded-3xl shadow-[0_30px_100px_rgba(0,0,0,0.95),0_0_50px_rgba(255,255,255,0.08)] overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-black/80 border border-white/25 p-1 flex items-center justify-center shadow-md">
              <img src="/logo.png" alt="NEXA" className="w-full h-full object-contain filter drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-['Syncopate'] text-sm font-bold tracking-widest text-white uppercase">
                  NEXA LIVE COCKPIT
                </span>
                <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
                  REAL DATA STREAM
                </span>
              </div>
              <div className="text-[10px] font-mono text-zinc-400">
                Nexa Assistant AI • Spatial Telemetry Engine
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-[10px] font-mono text-zinc-500">
              Press [ESC] to exit
            </span>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/05 hover:bg-white/15 border border-white/10 text-zinc-300 hover:text-white transition-all"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Dynamic Body based on featureId */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto text-left space-y-6">
          
          {/* ========================================================== */}
          {/* 1. FINANCE DASHBOARD MODAL */}
          {/* ========================================================== */}
          {featureId === 'finance' && (
            <div className="space-y-6 animate-fadeIn">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <div className="inline-block text-[10px] font-mono text-zinc-400 uppercase tracking-widest px-2.5 py-0.5 rounded bg-white/05 border border-white/10 mb-2">
                    FINANCIAL INTELLIGENCE COCKPIT
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide font-['Syncopate']">
                    Campus Spends & Budget
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono text-emerald-400 font-bold">OCTOBER CYCLE ACTIVE</span>
                </div>
              </div>

              {/* Exact Required Spec Cards: ₹8,420 spent, ₹11,580 remaining */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/15 space-y-1">
                  <div className="text-[11px] font-mono text-zinc-400 uppercase">Total Monthly Budget</div>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-white">₹{budgetLimit.toLocaleString()}</div>
                  <div className="text-[10px] font-mono text-zinc-500">Fixed student allowance</div>
                </div>

                <div className="p-5 rounded-2xl bg-white/10 border border-white/25 space-y-1 shadow-[0_0_25px_rgba(255,255,255,0.06)]">
                  <div className="text-[11px] font-mono text-rose-300 uppercase flex items-center justify-between">
                    <span>Total Spent</span>
                    <span className="text-[10px] text-zinc-400 font-mono">42.1%</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-white">₹{spentAmount.toLocaleString()}</div>
                  <div className="text-[10px] font-mono text-zinc-400">Tracked via Natural Spends</div>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-1">
                  <div className="text-[11px] font-mono text-emerald-400 uppercase flex items-center justify-between">
                    <span>Remaining Balance</span>
                    <span className="text-[10px] text-emerald-300 font-mono">57.9%</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400">₹{remainingBudget.toLocaleString()}</div>
                  <div className="text-[10px] font-mono text-zinc-400">Paced for 42 remaining days</div>
                </div>
              </div>

              {/* Budget Progress Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span>BUDGET UTILIZATION</span>
                  <span className="text-white font-bold">{Math.round((spentAmount / budgetLimit) * 100)}%</span>
                </div>
                <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden flex">
                  <div
                    style={{ width: `${Math.min(100, (spentAmount / budgetLimit) * 100)}%` }}
                    className="h-full bg-gradient-to-r from-emerald-400 via-amber-400 to-rose-400 transition-all duration-500 rounded-full"
                  />
                </div>
              </div>

              {/* Exact Required Breakdown: Food ₹3,240, Travel ₹1,820, Shopping ₹1,460, Books ₹1,120, Others ₹780 */}
              <div className="p-6 rounded-2xl bg-[#0e0e1a] border border-white/15 space-y-4">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider flex items-center justify-between">
                  <span>EXPENDITURE BREAKDOWN BY CATEGORY</span>
                  <span className="text-zinc-500">5 ACTIVE CHANNELS</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/05">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">Food & Dining</div>
                    <div className="text-lg font-bold font-mono text-white mt-1">₹3,240</div>
                    <div className="text-[9px] text-zinc-500 font-mono">38.5% of spends</div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/05">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">Travel & Auto</div>
                    <div className="text-lg font-bold font-mono text-white mt-1">₹1,820</div>
                    <div className="text-[9px] text-zinc-500 font-mono">21.6% of spends</div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/05">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">Shopping</div>
                    <div className="text-lg font-bold font-mono text-white mt-1">₹1,460</div>
                    <div className="text-[9px] text-zinc-500 font-mono">17.3% of spends</div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/05">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">Books & Academics</div>
                    <div className="text-lg font-bold font-mono text-white mt-1">₹1,120</div>
                    <div className="text-[9px] text-zinc-500 font-mono">13.3% of spends</div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/05 col-span-2 sm:col-span-1">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">Others / Recharges</div>
                    <div className="text-lg font-bold font-mono text-white mt-1">₹780</div>
                    <div className="text-[9px] text-zinc-500 font-mono">9.3% of spends</div>
                  </div>
                </div>
              </div>

              {/* Exact NIA Insight Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-teal-950/40 via-[#0d1520] to-teal-950/30 border border-teal-500/30 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-400/20 border border-teal-400/40 flex items-center justify-center shrink-0 text-teal-300">
                  <Sparkles className="w-5 h-5 text-teal-300 animate-pulse" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-mono text-teal-300 font-bold uppercase tracking-wider flex items-center gap-2">
                    <span>NIA AUTONOMOUS FINANCIAL INSIGHT</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-teal-400/20 text-teal-200">PREDICTIVE</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-200 font-light leading-relaxed">
                    “At current burn rate of <span className="text-white font-medium">₹271/day</span>, your remaining <span className="text-white font-semibold">₹11,580</span> budget will comfortably last <span className="text-emerald-400 font-semibold">42 more days</span>. Weekend spending spike detected on dining; recommending capping Saturday dining at <span className="text-amber-300 font-medium">₹450</span> to keep total monthly savings positive.”
                  </p>
                </div>
              </div>

              {/* Interactive Natural Spend Simulator */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                <div className="text-xs font-mono text-white uppercase font-bold flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-white" />
                  <span>Interactive Spend Simulator (Test Live Budget Pacing)</span>
                </div>
                <form onSubmit={handleSimulateExpense} className="flex flex-wrap items-center gap-3">
                  <select
                    value={simulatedCategory}
                    onChange={(e) => setSimulatedCategory(e.target.value)}
                    className="bg-black/60 border border-white/20 rounded-xl px-3 py-2 text-xs font-mono text-white"
                  >
                    <option value="Food">Food (Canteen/Hostel)</option>
                    <option value="Travel">Travel (Auto/Uber)</option>
                    <option value="Shopping">Shopping & Gadgets</option>
                    <option value="Books">Books & Prints</option>
                    <option value="Others">Others</option>
                  </select>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-zinc-400">₹</span>
                    <input
                      type="number"
                      value={simulatedAmount}
                      onChange={(e) => setSimulatedAmount(e.target.value)}
                      className="w-28 bg-black/60 border border-white/20 rounded-xl px-3 py-2 text-xs font-mono text-white"
                      placeholder="Amount"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-zinc-200 transition-all shadow-md"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Log Spend & Recalculate</span>
                  </button>
                </form>
              </div>

              {/* Recent Spends Feed */}
              <div className="space-y-2">
                <div className="text-xs font-mono text-zinc-400 uppercase">Recent Natural Spends Logged</div>
                <div className="space-y-2">
                  {financeTransactions.slice(0, 4).map((tx) => (
                    <div key={tx.id} className="p-3 rounded-xl bg-white/[0.02] border border-white/05 flex items-center justify-between text-xs font-mono">
                      <div>
                        <div className="text-zinc-200 font-sans font-medium">{tx.desc}</div>
                        <div className="text-[10px] text-zinc-500">{tx.cat} • {tx.date}</div>
                      </div>
                      <div className="text-white font-bold">-₹{tx.amount}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================== */}
          {/* 2. TIMETABLE & ATTENDANCE MODAL */}
          {/* ========================================================== */}
          {featureId === 'academic' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <div className="inline-block text-[10px] font-mono text-zinc-400 uppercase tracking-widest px-2.5 py-0.5 rounded bg-white/05 border border-white/10 mb-2">
                    AUTONOMOUS SCHEDULE & ATTENDANCE
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide font-['Syncopate']">
                    Academic Timetable & 75% Tracker
                  </h3>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
                  FALL SEMESTER 2026
                </span>
              </div>

              {/* Day Switcher */}
              <div className="flex flex-wrap gap-2">
                {days.map((d) => (
                  <button
                    key={d}
                    onClick={() => setSelectedDay(d)}
                    className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all ${
                      selectedDay === d
                        ? 'bg-white text-black font-bold shadow-md'
                        : 'bg-white/[0.03] text-zinc-400 border border-white/05 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>

              {/* Courses & Attendance Thresholds */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-zinc-400 uppercase flex items-center justify-between">
                  <span>SUBJECTS & ATTENDANCE SAFETY MARGINS</span>
                  <span className="text-zinc-500">MANDATORY 75% RULE</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {courses.map((c) => {
                    const pct = Math.round((c.attended / c.total) * 100);
                    const isBorderline = pct < 80;
                    return (
                      <div key={c.code} className="p-4 rounded-2xl bg-white/[0.03] border border-white/15 space-y-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="text-[10px] font-mono text-zinc-400 uppercase">{c.code}</span>
                            <div className="text-sm font-bold text-white">{c.name}</div>
                            <div className="text-[11px] text-zinc-400 font-mono mt-0.5">{c.faculty} • {c.room}</div>
                          </div>
                          <div className={`px-2 py-1 rounded-lg text-xs font-mono font-bold ${
                            isBorderline ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                          }`}>
                            {pct}%
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                          <div
                            style={{ width: `${pct}%` }}
                            className={`h-full ${isBorderline ? 'bg-amber-400' : 'bg-emerald-400'}`}
                          />
                        </div>

                        <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                          <span>Attended: {c.attended}/{c.total} classes</span>
                          <span className={isBorderline ? 'text-amber-300 font-bold' : 'text-zinc-400'}>
                            {isBorderline ? '⚠️ 1 bunk allowed' : '✓ Safe margin'}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Live Bunk & Attendance Calculator Insight */}
              <div className="p-5 rounded-2xl bg-[#0d131f] border border-blue-500/30 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-blue-300 font-bold uppercase">
                  <AlertTriangle className="w-4 h-4 text-blue-300" />
                  <span>NIA ATTENDANCE ARBITRATION ENGINE</span>
                </div>
                <p className="text-xs text-zinc-300 font-light leading-relaxed">
                  "Can I bunk DBMS Lab today?" → <strong className="text-white">NIA Verdict: CRITICAL NO.</strong> Your DBMS attendance currently stands at 76.0% (19/25). Missing today's session drops attendance to 73.07%, putting you on the official debarred list for Midterm exams.
                </p>
              </div>
            </div>
          )}

          {/* ========================================================== */}
          {/* 3. TASKS & CRITICAL PATH MODAL */}
          {/* ========================================================== */}
          {featureId === 'tasks' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <div className="inline-block text-[10px] font-mono text-zinc-400 uppercase tracking-widest px-2.5 py-0.5 rounded bg-white/05 border border-white/10 mb-2">
                    CRITICAL PATH DISPATCHER
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide font-['Syncopate']">
                    Student Priority Tasks
                  </h3>
                </div>
                <div className="text-xs font-mono text-zinc-400">
                  {tasks.filter(t => !t.done).length} Pending Deadlines
                </div>
              </div>

              <div className="space-y-3">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    onClick={() => toggleTask(task.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                      task.done
                        ? 'bg-emerald-950/20 border-emerald-500/30 opacity-60'
                        : task.priority === 'Extremely Important'
                        ? 'bg-rose-950/30 border-rose-500/40 shadow-[0_0_25px_rgba(244,63,94,0.15)]'
                        : 'bg-white/[0.03] border-white/15 hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-lg border flex items-center justify-center transition-all ${
                        task.done ? 'bg-emerald-400 border-emerald-400 text-black' : 'border-white/30 bg-transparent'
                      }`}>
                        {task.done && <CheckSquare className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`text-[9px] font-mono px-2 py-0.5 rounded uppercase font-bold ${
                            task.priority === 'Extremely Important'
                              ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                              : task.priority === 'High'
                              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                              : 'bg-white/10 text-zinc-300'
                          }`}>
                            {task.priority}
                          </span>
                          <span className="text-[10px] font-mono text-zinc-400">Due: {task.due}</span>
                        </div>
                        <div className={`text-sm font-semibold mt-1 ${task.done ? 'line-through text-zinc-500' : 'text-white'}`}>
                          {task.title}
                        </div>
                      </div>
                    </div>

                    <div className="text-xs font-mono text-zinc-400 shrink-0">
                      {task.done ? 'Completed' : 'Click to complete'}
                    </div>
                  </div>
                ))}
              </div>

              {/* Paced Reminder Schedule Visualizer */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                <div className="text-xs font-mono text-white uppercase font-bold flex items-center gap-2">
                  <Clock className="w-4 h-4 text-white" />
                  <span>Cognitive Paced Reminders Architecture</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/05">
                    <div className="text-zinc-400">T-24 Hours</div>
                    <div className="text-zinc-200 mt-1 font-semibold">Gentle Digest Notification</div>
                    <div className="text-[10px] text-zinc-500 mt-1">Appears during evening wind-down</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/05">
                    <div className="text-zinc-400">T-6 Hours</div>
                    <div className="text-zinc-200 mt-1 font-semibold">Study Sprint Allocation</div>
                    <div className="text-[10px] text-zinc-500 mt-1">Auto-blocks free timetable slot</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/05">
                    <div className="text-rose-400 font-bold">T-1 Hour</div>
                    <div className="text-white mt-1 font-semibold">Submission Lock Reminder</div>
                    <div className="text-[10px] text-zinc-400 mt-1">Direct upload portal CTA button</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================== */}
          {/* 4. GMAIL DISTILLER MODAL */}
          {/* ========================================================== */}
          {featureId === 'email' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <div className="inline-block text-[10px] font-mono text-zinc-400 uppercase tracking-widest px-2.5 py-0.5 rounded bg-white/05 border border-white/10 mb-2">
                    UNIVERSITY GMAIL DISTILLATION
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide font-['Syncopate']">
                    Zero Fluff Notice Reader
                  </h3>
                </div>
                <button
                  onClick={() => setEmailDistilled(!emailDistilled)}
                  className="px-4 py-2 rounded-xl bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-zinc-200 transition-all flex items-center gap-2"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>{emailDistilled ? 'Show Raw 420-Word Email' : 'Distill with NIA AI'}</span>
                </button>
              </div>

              {emailDistilled ? (
                <div className="p-6 rounded-2xl bg-white/10 border border-white/25 space-y-4 shadow-xl">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-mono text-emerald-400 font-bold uppercase">
                        NIA DISTILLED ACTION CARD
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400">92% TEXT COMPRESSED</span>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-white">
                      Subject: Mandatory Mid-Semester Exam Hall Registration
                    </h4>
                    <div className="text-xs text-zinc-400 font-mono mt-0.5">
                      From: Controller of Examinations (coe@university.edu)
                    </div>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm text-zinc-200 font-mono bg-black/40 p-4 rounded-xl border border-white/05">
                    <div className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span>Portal Window: Opens tomorrow 10:00 AM, closes strictly Oct 15th 11:59 PM.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span>Requirement: Verify course registrations and select open-elective slot B2.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span>Late Penalty: ₹1,000 fine for any registration beyond deadline.</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    <button className="px-5 py-2.5 rounded-xl bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-all">
                      Open Student Portal (1-Tap)
                    </button>
                    <span className="text-[11px] font-mono text-zinc-400">
                      ✓ Auto-added to NEXA Academic Deadlines
                    </span>
                  </div>
                </div>
              ) : (
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3 font-mono text-xs text-zinc-400 leading-relaxed max-h-[300px] overflow-y-auto">
                  <div className="text-zinc-500 uppercase text-[10px]">RAW UNIVERSITY CIRCULAR TEXT</div>
                  <p>
                    Respected Faculty and Dear Students, Greetings from the Office of the Controller of Examinations. This is to formally notify all undergraduate students across engineering branches regarding the commencement of the registration process for the upcoming Mid-Semester Examinations for the Fall Semester 2026-27...
                  </p>
                  <p>
                    All enrolled students are hereby instructed to log in to their student portal using their institutional credentials starting from 08th October 2026 at 10:00 AM. Please meticulously cross-check all elective courses...
                  </p>
                </div>
              )}
            </div>
          )}

          {/* ========================================================== */}
          {/* 5. BORROW & LEND LEDGER MODAL */}
          {/* ========================================================== */}
          {featureId === 'borrow' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <div className="inline-block text-[10px] font-mono text-zinc-400 uppercase tracking-widest px-2.5 py-0.5 rounded bg-white/05 border border-white/10 mb-2">
                    PEER CREDIT LEDGER
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide font-['Syncopate']">
                    Borrow & Lend Transparent Debt
                  </h3>
                </div>
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-right">
                  <div className="text-[10px] font-mono text-emerald-400 uppercase">Net Balance</div>
                  <div className="text-lg font-bold font-mono text-emerald-400">+₹600 To Receive</div>
                </div>
              </div>

              <div className="space-y-3">
                {peers.map((p) => (
                  <div key={p.id} className="p-4 rounded-2xl bg-white/[0.03] border border-white/15 flex items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-bold text-white">{p.name}</div>
                        <span className={`text-[9px] font-mono px-2 py-0.5 rounded uppercase font-bold ${
                          p.type === 'owes_you' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'
                        }`}>
                          {p.type === 'owes_you' ? 'Owes You' : 'You Owe'}
                        </span>
                      </div>
                      <div className="text-xs text-zinc-400 font-mono mt-0.5">{p.reason}</div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-base font-bold font-mono text-white">₹{p.amount}</div>
                      {p.settled ? (
                        <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                          <CheckCircle className="w-3.5 h-3.5" />
                          <span>Settled</span>
                        </span>
                      ) : (
                        <button
                          onClick={() => settlePeer(p.id)}
                          className="px-3 py-1.5 rounded-lg bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-all"
                        >
                          Settle UPI
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================== */}
          {/* 6. CAMPUS AI CHAT MODAL */}
          {/* ========================================================== */}
          {(featureId === 'chat' || featureId === 'ai') && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <div className="inline-block text-[10px] font-mono text-zinc-400 uppercase tracking-widest px-2.5 py-0.5 rounded bg-white/05 border border-white/10 mb-2">
                    NATIVE CAMPUS AI COMPANION
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide font-['Syncopate']">
                    NIA Conversational Core
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Gemini 1.5 Pro + Local Neural Cache</span>
                </div>
              </div>

              {/* Chat Thread */}
              <div className="h-[280px] overflow-y-auto space-y-3 p-4 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs">
                {chatMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`p-3.5 rounded-2xl max-w-[85%] ${
                      msg.role === 'user'
                        ? 'bg-white/15 border border-white/20 ml-auto text-right text-white'
                        : 'bg-white/[0.04] border border-white/10 mr-auto text-left text-zinc-200'
                    }`}
                  >
                    <div className="text-[9px] uppercase font-bold text-zinc-400 mb-1">
                      {msg.role === 'user' ? 'YOU' : 'NIA ASSISTANT'}
                    </div>
                    <div className="leading-relaxed font-sans text-xs sm:text-sm">{msg.text}</div>
                  </div>
                ))}
              </div>

              {/* Sample Prompts */}
              <div className="flex flex-wrap gap-2 text-[11px] font-mono">
                <span className="text-zinc-500 py-1">Try asking:</span>
                {[
                  'Can I bunk DBMS today?',
                  'How much can I spend this weekend?',
                  'What classes do I have today?',
                  'What are my urgent assignments?'
                ].map((promptText) => (
                  <button
                    key={promptText}
                    onClick={() => {
                      setUserQuery(promptText);
                    }}
                    className="px-3 py-1 rounded-full bg-white/[0.03] hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-all"
                  >
                    "{promptText}"
                  </button>
                ))}
              </div>

              {/* Input Form */}
              <form onSubmit={handleAskNia} className="flex gap-2">
                <input
                  type="text"
                  value={userQuery}
                  onChange={(e) => setUserQuery(e.target.value)}
                  placeholder="Ask NIA anything about your classes, attendance, or spending..."
                  className="flex-1 bg-white/[0.04] border border-white/15 rounded-2xl px-4 py-3 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 font-mono"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-2xl bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-zinc-200 transition-all flex items-center gap-1.5 shadow-md"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Ask</span>
                </button>
              </form>
            </div>
          )}

        </div>

        {/* Modal Bottom Dock */}
        <div className="px-6 py-3.5 border-t border-white/10 bg-white/[0.01] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-white" />
            <span>Encrypted SQLite On-Device Storage • Zero Tracking</span>
          </div>
          <div className="text-zinc-400">
            Powered by Team Glitchers • NEXA v1.2.0
          </div>
        </div>
      </div>
    </div>
  );
}
