import React, { useState, useEffect } from 'react';
import { 
  X, IndianRupee, Calendar, CheckSquare, Mail, 
  Users, Sparkles, TrendingUp, AlertTriangle, CheckCircle, 
  Clock, ArrowRight, ShieldCheck, ChevronRight, RefreshCw, Send,
  Sliders, Plus, Wallet, FileText, Smartphone, Search, Bell,
  BookOpen, QrCode, Lock, GraduationCap, MapPin, Eye, ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function FeatureModal({ featureId, onClose }) {
  // Close on Escape key & lock body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose]);

  // 1. Finance & Budget State
  const [spentAmount, setSpentAmount] = useState(8420);
  const [budgetLimit, setBudgetLimit] = useState(20000);
  const remainingBudget = budgetLimit - spentAmount;
  const [simulatedCategory, setSimulatedCategory] = useState('Food');
  const [simulatedAmount, setSimulatedAmount] = useState(250);
  const [financeTransactions, setFinanceTransactions] = useState([
    { id: 1, desc: 'Dominos Pizza (Hostel Delivery)', cat: 'Food', amount: 480, date: 'Today, 2:30 PM' },
    { id: 2, desc: 'Auto Rickshaw to City Mall', cat: 'Travel', amount: 160, date: 'Yesterday' },
    { id: 3, desc: 'Amazon Engineering Notebooks', cat: 'Shopping', amount: 350, date: 'Oct 5' },
    { id: 4, desc: 'Campus Canteen Lunch', cat: 'Food', amount: 120, date: 'Oct 4' },
  ]);

  // 2. Timetable & Attendance State
  const [selectedDay, setSelectedDay] = useState('Wednesday');
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const [attendedClasses, setAttendedClasses] = useState(24);
  const [totalClasses, setTotalClasses] = useState(26);
  const attendancePct = totalClasses > 0 ? ((attendedClasses / totalClasses) * 100).toFixed(1) : 0;
  const courses = [
    { code: 'CS3002', name: 'Artificial Intelligence', attended: 22, total: 25, faculty: 'Dr. Ramesh K.', room: 'LH-3' },
    { code: 'CS3004', name: 'Database Management Systems', attended: 19, total: 25, faculty: 'Prof. Ananya S.', room: 'Lab 2' },
    { code: 'CS3006', name: 'Operating Systems', attended: attendedClasses, total: totalClasses, faculty: 'Dr. V. Prasad', room: 'LH-1' },
    { code: 'MA2001', name: 'Discrete Mathematics', attended: 20, total: 25, faculty: 'Prof. Mohan G.', room: 'LH-5' },
  ];

  // 3. Tasks State
  const [tasks, setTasks] = useState([
    { id: 1, title: 'DSA Lab Assignment #4 (Dynamic Programming)', priority: 'Extremely Important', due: 'Tomorrow 11:59 PM', done: false },
    { id: 2, title: 'AI Continuous Assessment Test-2 Review', priority: 'High', due: 'In 2 days', done: false },
    { id: 3, title: 'OS Semaphore Simulation submission', priority: 'Medium', due: 'Friday', done: true },
    { id: 4, title: 'Submit Hostel Leave Application', priority: 'Low', due: 'Sunday', done: false },
  ]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  // 4. Borrow & Lend State
  const [peers, setPeers] = useState([
    { id: 1, name: 'Rahul Sharma', type: 'owes_you', amount: 300, reason: 'Food Street Dinner split', settled: false },
    { id: 2, name: 'Priya Patel', type: 'owes_you', amount: 450, reason: 'Weekend Uber Cab', settled: false },
    { id: 3, name: 'Arjun Verma', type: 'you_owe', amount: 150, reason: 'Lab Manual Color Printouts', settled: false },
    { id: 4, name: 'Sneha Rao', type: 'owes_you', amount: 180, reason: 'Stationary & Pens', settled: true },
  ]);

  // 5. Shared Expenses Split Calculator State
  const [billTotal, setBillTotal] = useState(1200);
  const [numPeople, setNumPeople] = useState(4);
  const splitPerPerson = numPeople > 0 ? (billTotal / numPeople).toFixed(0) : 0;
  const [splitDone, setSplitDone] = useState(false);

  // 6. Contextual Search State
  const [searchQuery, setSearchQuery] = useState('');
  const allSearchable = [
    { title: 'Operating Systems Mid-Sem Syllabus', cat: 'Exams', snippet: 'Modules 1 to 4: CPU Scheduling, Deadlocks, Memory Management' },
    { title: 'Rahul Sharma (Debts)', cat: 'Ledger', snippet: 'Owes you ₹300 from Food Street Dinner' },
    { title: 'Registrar Circular #492', cat: 'Email', snippet: 'Fee payment portal closes Oct 15 at 5:00 PM' },
    { title: 'DBMS Practical Exam in Room 302', cat: 'Timetable', snippet: 'Wednesdays 11:30 AM with Prof. Ananya' },
    { title: 'DSA Assignment #4 Code Repository', cat: 'Tasks', snippet: 'Due tomorrow at 11:59 PM on LMS Portal' },
  ];
  const searchResults = searchQuery.trim() 
    ? allSearchable.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.snippet.toLowerCase().includes(searchQuery.toLowerCase()))
    : allSearchable;

  // 7. AI Chat State
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', text: 'Hello! I am NIA, your student intelligence companion. I know your semester timetable, pending assignments, and campus debts. What would you like to solve?' }
  ]);

  // 8. Notifications State
  const [quietHours, setQuietHours] = useState(false);
  const [notifs, setNotifs] = useState([
    { id: 1, title: 'Operating Systems Lecture', desc: 'Starts in 12 mins • LH-1 (Block B) • Prof. Prasad', time: 'Just now', priority: 'High' },
    { id: 2, title: 'Notice Distilled: Dean of Academics', desc: 'Mid-term schedule published. Pinned to calendar.', time: '18m ago', priority: 'Normal' },
    { id: 3, title: 'Debt Settlement Reminder', desc: 'Rahul Sharma received your UPI payment link for ₹300.', time: '1h ago', priority: 'Normal' }
  ]);

  // Handler: Add Simulated Expense
  const handleAddExpense = (e) => {
    e.preventDefault();
    if (!simulatedAmount || simulatedAmount <= 0) return;
    const val = Number(simulatedAmount);
    setSpentAmount(prev => prev + val);
    setFinanceTransactions(prev => [
      { id: Date.now(), desc: `Quick Log: ${simulatedCategory}`, cat: simulatedCategory, amount: val, date: 'Just now' },
      ...prev
    ]);
    setSimulatedAmount(150);
  };

  // Handler: Toggle Task
  const toggleTask = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  // Handler: Add Task
  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    setTasks(prev => [
      ...prev,
      { id: Date.now(), title: newTaskTitle.trim(), priority: 'Normal', due: 'This Week', done: false }
    ]);
    setNewTaskTitle('');
  };

  // Handler: Settle Peer
  const handleSettle = (id) => {
    setPeers(prev => prev.map(p => p.id === id ? { ...p, settled: true } : p));
    try {
      confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
    } catch (e) {}
  };

  // Handler: Send Chat
  const handleSendChat = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const query = chatInput.trim();
    setChatMessages(prev => [...prev, { role: 'user', text: query }]);
    setChatInput('');

    setTimeout(() => {
      let reply = `NIA analyzed: "${query}". Context verified against your campus timetable and LMS tasks. 1 verified update queued.`;
      const lower = query.toLowerCase();
      if (lower.includes('bunk') || lower.includes('attendance')) {
        reply = `Attendance Check: Your overall attendance is ${attendancePct}%. You are currently +17% above the mandatory 75% rule. You can safely miss up to 4 more classes.`;
      } else if (lower.includes('class') || lower.includes('timetable') || lower.includes('schedule')) {
        reply = 'Schedule Check: Today is Wednesday. Next lecture: Operating Systems at 09:00 AM in LH-1 with Dr. Prasad. Followed by DBMS Lab at 11:30 AM.';
      } else if (lower.includes('task') || lower.includes('assignment') || lower.includes('exam')) {
        reply = 'Priority Reminder: DSA Lab Assignment #4 is marked EXTREMELY IMPORTANT and closes tomorrow at 11:59 PM. Block 8:00 PM - 10:30 PM for completion.';
      } else if (lower.includes('money') || lower.includes('spend') || lower.includes('debt')) {
        reply = `Finance Audit: You have spent ₹${spentAmount.toLocaleString()} this month, leaving ₹${remainingBudget.toLocaleString()} remaining. Rahul Sharma still owes you ₹300.`;
      }
      setChatMessages(prev => [...prev, { role: 'assistant', text: reply }]);
    }, 400);
  };

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-2xl animate-fadeIn overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-[#090913] border border-white/20 rounded-3xl shadow-[0_30px_100px_rgba(0,0,0,0.98),0_0_60px_rgba(6,182,212,0.15)] overflow-hidden my-auto max-h-[92vh] flex flex-col transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Bar inside Modal — CLOSE BUTTON IS ALWAYS VISIBLE */}
        <div className="sticky top-0 z-[100] px-4 sm:px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#090913]/95 backdrop-blur-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-black/85 border border-white/20 p-1.5 flex items-center justify-center shadow-md shrink-0">
              <img src="/logo.png" alt="NEXA" className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-['Syncopate'] text-xs sm:text-sm font-bold tracking-widest text-white uppercase">
                  NEXA LIVE COCKPIT
                </span>
                <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-cyan-400/20 text-cyan-300 border border-cyan-400/30">
                  INTERACTIVE
                </span>
              </div>
              <div className="text-[10px] font-mono text-zinc-400">
                Nexa Intelligent AI • Autonomous Student Engine
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-[10px] font-mono text-zinc-500">
              [ESC] to exit
            </span>
            {/* Always visible, fixed touch-friendly close button */}
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 text-white hover:text-white transition-all shadow-md active:scale-95 cursor-pointer"
              aria-label="Close feature overlay"
            >
              <X className="w-4 h-4" />
              <span className="text-xs uppercase font-mono font-bold tracking-wider">CLOSE</span>
            </button>
          </div>
        </div>

        {/* Modal Dynamic Body based on featureId */}
        <div className="p-4 sm:p-6 md:p-8 overflow-y-auto flex-1 text-left space-y-6">

          {/* ========================================================== */}
          {/* 1. FINANCE & BUDGET */}
          {/* ========================================================== */}
          {(featureId === 'finance' || featureId === 'budgets') && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
                    FINANCIAL TELEMETRY & SPENDS
                  </div>
                  <h3 className="text-2xl font-bold text-white font-['Syncopate'] uppercase">
                    Campus Expense Ledger
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">
                    Velocity: ₹386/day (Optimal)
                  </span>
                </div>
              </div>

              {/* Live Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                  <div className="text-xs font-mono text-zinc-400">Total Spent This Month</div>
                  <div className="text-2xl font-bold text-white font-mono">₹{spentAmount.toLocaleString()}</div>
                  <div className="text-[10px] text-zinc-500 font-mono">From Canteen, Travel, Books</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                  <div className="text-xs font-mono text-zinc-400">Remaining Budget</div>
                  <div className="text-2xl font-bold text-emerald-400 font-mono">₹{remainingBudget.toLocaleString()}</div>
                  <div className="text-[10px] text-zinc-500 font-mono">Limit: ₹{budgetLimit.toLocaleString()}</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                  <div className="text-xs font-mono text-zinc-400">Predicted End-Month</div>
                  <div className="text-2xl font-bold text-cyan-300 font-mono">₹4,280 Surplus</div>
                  <div className="text-[10px] text-zinc-500 font-mono">Safe margin verified</div>
                </div>
              </div>

              {/* Interactive Quick Spend Logger */}
              <div className="p-5 rounded-2xl bg-black/60 border border-white/15 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-white">
                  <span>TEST LIVE EXPENSE LOGGING</span>
                  <span className="text-zinc-500">Updates budget in real time</span>
                </div>
                <form onSubmit={handleAddExpense} className="flex flex-wrap items-center gap-3">
                  <select 
                    value={simulatedCategory}
                    onChange={(e) => setSimulatedCategory(e.target.value)}
                    className="bg-white/[0.05] border border-white/15 rounded-xl px-3 py-2 text-xs text-white font-mono focus:outline-none"
                  >
                    <option value="Food" className="bg-black text-white">Food (Canteen / Dinner)</option>
                    <option value="Travel" className="bg-black text-white">Travel (Auto / Metro)</option>
                    <option value="Shopping" className="bg-black text-white">Shopping (Stationary / Notes)</option>
                    <option value="Others" className="bg-black text-white">Others</option>
                  </select>
                  <div className="relative flex-1 min-w-[120px]">
                    <span className="absolute left-3 top-2 text-xs font-mono text-zinc-400">₹</span>
                    <input 
                      type="number"
                      value={simulatedAmount}
                      onChange={(e) => setSimulatedAmount(e.target.value)}
                      className="w-full bg-white/[0.05] border border-white/15 rounded-xl pl-7 pr-3 py-2 text-xs text-white font-mono focus:outline-none"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all shrink-0"
                  >
                    + Log Expense
                  </button>
                </form>
              </div>

              {/* Transactions List */}
              <div className="space-y-2">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Recent Verified Ledger Entries
                </div>
                <div className="space-y-2 max-h-[180px] overflow-y-auto">
                  {financeTransactions.map(tx => (
                    <div key={tx.id} className="p-3 rounded-xl bg-white/[0.02] border border-white/05 flex items-center justify-between text-xs font-mono">
                      <div>
                        <div className="text-white font-medium">{tx.desc}</div>
                        <div className="text-[10px] text-zinc-500">{tx.cat} • {tx.date}</div>
                      </div>
                      <div className="text-rose-400 font-bold">-₹{tx.amount}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================== */}
          {/* 2. TIMETABLE & ATTENDANCE & EXAMS & CALENDAR */}
          {/* ========================================================== */}
          {(featureId === 'timetable' || featureId === 'academic' || featureId === 'calendar' || featureId === 'exams' || featureId === 'assignments') && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
                    AUTONOMOUS SCHEDULE & 75% ATTENDANCE ENGINE
                  </div>
                  <h3 className="text-2xl font-bold text-white font-['Syncopate'] uppercase">
                    Timetable & Exam Matrix
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                    Mandatory 75% Rule Active
                  </span>
                </div>
              </div>

              {/* Day Switcher */}
              <div className="flex flex-wrap gap-2">
                {days.map(d => (
                  <button
                    key={d}
                    onClick={() => setSelectedDay(d)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                      selectedDay === d
                        ? 'bg-white text-black font-semibold shadow-md'
                        : 'bg-white/[0.03] text-zinc-400 hover:text-white border border-white/05'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>

              {/* Attendance Margin Calculator */}
              <div className="p-5 rounded-2xl bg-black/60 border border-white/15 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-white font-bold">OPERATING SYSTEMS (CS3006) ATTENDANCE AUDIT</span>
                  <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                    attendancePct >= 75 ? 'bg-emerald-400/20 text-emerald-400 border border-emerald-400/30' : 'bg-rose-400/20 text-rose-400 border border-rose-400/30'
                  }`}>
                    {attendancePct}% Attendance
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono text-zinc-400">
                    <span>Classes Attended: {attendedClasses} / {totalClasses}</span>
                    <span className="text-emerald-400">
                      {attendedClasses >= Math.ceil(totalClasses * 0.75) 
                        ? `✓ Safe margin: Can miss ${Math.max(0, Math.floor((attendedClasses - 0.75 * totalClasses) / 0.75))} classes`
                        : `⚠ Warning: Must attend next ${Math.ceil((0.75 * totalClasses - attendedClasses) / 0.25)} classes`}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setAttendedClasses(prev => Math.max(0, prev - 1))}
                      className="px-3 py-1 rounded-lg bg-white/10 text-white font-mono text-xs hover:bg-white/20"
                    >
                      - Miss Class
                    </button>
                    <div className="flex-1 bg-white/10 h-2 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-300 ${attendancePct >= 75 ? 'bg-cyan-400' : 'bg-rose-500'}`} 
                        style={{ width: `${Math.min(100, attendancePct)}%` }} 
                      />
                    </div>
                    <button
                      onClick={() => {
                        setAttendedClasses(prev => prev + 1);
                        setTotalClasses(prev => prev + 1);
                      }}
                      className="px-3 py-1 rounded-lg bg-white text-black font-mono text-xs hover:bg-zinc-200"
                    >
                      + Attend Class
                    </button>
                  </div>
                </div>
              </div>

              {/* Day's Schedule List */}
              <div className="space-y-2">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  {selectedDay} Lecture Schedule
                </div>
                <div className="space-y-2">
                  {courses.map(course => (
                    <div key={course.code} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/05 flex items-center justify-between text-xs font-mono">
                      <div>
                        <div className="text-white font-bold">{course.code} — {course.name}</div>
                        <div className="text-zinc-400 text-[11px]">{course.faculty} • Room: {course.room}</div>
                      </div>
                      <div className="text-right">
                        <span className="text-zinc-300 font-semibold">{course.attended}/{course.total} classes</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================== */}
          {/* 3. TASKS & CHECKLISTS */}
          {/* ========================================================== */}
          {(featureId === 'tasks') && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
                    AUTONOMOUS TASK MANAGEMENT
                  </div>
                  <h3 className="text-2xl font-bold text-white font-['Syncopate'] uppercase">
                    Academic Action Matrix
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-rose-400/10 text-rose-400 border border-rose-400/20">
                    1 Extremely Important
                  </span>
                </div>
              </div>

              {/* Add New Task Form */}
              <form onSubmit={handleAddTask} className="flex gap-2">
                <input
                  type="text"
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  placeholder="Add academic task (e.g. 'Complete AI CAT-2 prep')..."
                  className="flex-1 bg-white/[0.04] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 font-mono focus:outline-none focus:border-cyan-400/50"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Task</span>
                </button>
              </form>

              {/* Interactive Checklist */}
              <div className="space-y-2.5">
                {tasks.map(task => (
                  <div
                    key={task.id}
                    onClick={() => toggleTask(task.id)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between gap-4 ${
                      task.done
                        ? 'bg-white/[0.01] border-white/05 opacity-60'
                        : 'bg-white/[0.04] border-white/15 hover:border-cyan-400/40 shadow-sm'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                        task.done ? 'bg-white border-white text-black' : 'border-white/30 bg-transparent'
                      }`}>
                        {task.done && <CheckCircle className="w-4 h-4" />}
                      </div>
                      <div>
                        <div className={`text-xs font-semibold ${task.done ? 'line-through text-zinc-500' : 'text-white'}`}>
                          {task.title}
                        </div>
                        <div className="text-[10px] font-mono text-zinc-400 mt-0.5">
                          Due: {task.due}
                        </div>
                      </div>
                    </div>

                    <span className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded border shrink-0 ${
                      task.priority === 'Extremely Important'
                        ? 'bg-rose-400/20 text-rose-300 border-rose-400/30'
                        : task.priority === 'High'
                        ? 'bg-amber-400/20 text-amber-300 border-amber-400/30'
                        : 'bg-white/10 text-zinc-300 border-white/15'
                    }`}>
                      {task.priority}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================== */}
          {/* 4. EMAIL INTELLIGENCE / GMAIL DISTILLER */}
          {/* ========================================================== */}
          {(featureId === 'email' || featureId === 'mail') && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
                    SEMANTIC EXTRACTION ENGINE
                  </div>
                  <h3 className="text-2xl font-bold text-white font-['Syncopate'] uppercase">
                    Gmail Distiller
                  </h3>
                </div>
                <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                  92% Reading Time Compressed
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Raw 420-word Email */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                  <div className="text-xs font-mono text-zinc-500 uppercase flex items-center justify-between">
                    <span>RAW UNIVERSITY CIRCULAR</span>
                    <span>420 WORDS</span>
                  </div>
                  <div className="text-xs font-semibold text-zinc-300">From: Dean of Academic Affairs</div>
                  <p className="text-[11px] font-mono text-zinc-400 leading-relaxed bg-black/40 p-3 rounded-xl border border-white/05">
                    "This is to bring to the notice of all undergraduate B.Tech students enrolled in the 5th semester that the portal for the submission of mid-semester examination registration forms and course electives validation will strictly commence on the 10th of October and shall conclusively terminate on the 15th of October at exactly 17:00 IST. Failure to register within the stipulated duration shall incur a non-refundable penalty fee of ₹500..."
                  </p>
                </div>

                {/* NIA Distilled Output */}
                <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 space-y-3">
                  <div className="text-xs font-mono text-cyan-300 uppercase flex items-center justify-between">
                    <span>NIA AUTONOMOUS DISTILLATION</span>
                    <span className="text-emerald-400">3 ACTION POINTS</span>
                  </div>
                  <div className="space-y-2 text-xs font-mono text-white">
                    <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-start gap-2">
                      <span className="text-cyan-400 font-bold">01.</span>
                      <span>Mid-sem registration closes <strong>Oct 15 at 5:00 PM</strong>.</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-start gap-2">
                      <span className="text-rose-400 font-bold">02.</span>
                      <span>Late fee penalty of <strong>₹500</strong> applies after deadline.</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">03.</span>
                      <span>Verified action: Portal link pinned to your dashboard.</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      alert('Simulated: Direct ERP registration portal launched with pre-filled course codes.');
                    }}
                    className="w-full py-2.5 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>1-Tap Launch ERP Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================== */}
          {/* 5. BORROW & LEND & SHARED EXPENSES */}
          {/* ========================================================== */}
          {(featureId === 'borrow' || featureId === 'shared_expenses' || featureId === 'shared expenses') && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
                    CAMPUS CREDIT LEDGER & GROUP EXPENSES
                  </div>
                  <h3 className="text-2xl font-bold text-white font-['Syncopate'] uppercase">
                    Borrow & Lend Settle
                  </h3>
                </div>
                <div className="text-emerald-400 font-mono text-xs font-bold">
                  NET BALANCE: +₹600 RECEIVABLE
                </div>
              </div>

              {/* Group Bill Split Calculator */}
              <div className="p-5 rounded-2xl bg-black/60 border border-white/15 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-white">
                  <span>INTERACTIVE GROUP BILL SPLITTER</span>
                  <span className="text-cyan-400">1-Tap Math</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-[10px] font-mono text-zinc-400 block mb-1">Total Bill (₹)</label>
                    <input 
                      type="number"
                      value={billTotal}
                      onChange={(e) => setBillTotal(Number(e.target.value))}
                      className="w-full bg-white/[0.05] border border-white/15 rounded-xl px-3 py-2 text-xs text-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-zinc-400 block mb-1">Roommates / Friends</label>
                    <input 
                      type="number"
                      value={numPeople}
                      onChange={(e) => setNumPeople(Number(e.target.value))}
                      className="w-full bg-white/[0.05] border border-white/15 rounded-xl px-3 py-2 text-xs text-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-zinc-400 block mb-1">Per Person Split</label>
                    <div className="h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center font-mono font-bold text-white text-sm">
                      ₹{splitPerPerson} each
                    </div>
                  </div>
                </div>
              </div>

              {/* Friend Debts List */}
              <div className="space-y-2">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Campus Friend Balances
                </div>
                <div className="space-y-2">
                  {peers.map(peer => (
                    <div key={peer.id} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/05 flex items-center justify-between text-xs font-mono">
                      <div>
                        <div className="text-white font-bold">{peer.name}</div>
                        <div className="text-[10px] text-zinc-400">{peer.reason}</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`font-bold ${peer.settled ? 'text-zinc-500 line-through' : peer.type === 'owes_you' ? 'text-emerald-400' : 'text-rose-400'}`}>
                          {peer.type === 'owes_you' ? `+₹${peer.amount}` : `-₹${peer.amount}`}
                        </span>
                        {!peer.settled && (
                          <button
                            onClick={() => handleSettle(peer.id)}
                            className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white text-zinc-200 hover:text-black text-[10px] uppercase font-semibold transition-all"
                          >
                            1-Tap UPI Settle
                          </button>
                        )}
                        {peer.settled && (
                          <span className="text-[10px] text-emerald-400">✓ Settled</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================== */}
          {/* 6. CONTEXTUAL SEARCH & DOCUMENTS */}
          {/* ========================================================== */}
          {(featureId === 'search' || featureId === 'documents') && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
                    UNIVERSAL SEMANTIC SEARCH & OFFLINE VAULT
                  </div>
                  <h3 className="text-2xl font-bold text-white font-['Syncopate'] uppercase">
                    Campus Knowledge Search
                  </h3>
                </div>
                <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                  Sub-15ms Query Latency
                </span>
              </div>

              {/* Search Input */}
              <div className="relative">
                <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search university notices, course codes, friend debts, or notes..."
                  className="w-full bg-white/[0.04] border border-white/15 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 font-mono focus:outline-none focus:border-cyan-400/50"
                />
              </div>

              {/* Search Results */}
              <div className="space-y-2">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Indexed Campus Entities ({searchResults.length} matches)
                </div>
                <div className="space-y-2 max-h-[220px] overflow-y-auto">
                  {searchResults.map((res, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/05 space-y-1 text-xs font-mono">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-bold">{res.title}</span>
                        <span className="text-[9px] uppercase px-2 py-0.5 rounded bg-white/10 text-zinc-300">
                          {res.cat}
                        </span>
                      </div>
                      <div className="text-[11px] text-zinc-400">{res.snippet}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================== */}
          {/* 7. AI CHAT / NIA ASSISTANT */}
          {/* ========================================================== */}
          {(featureId === 'chat' || featureId === 'ai' || featureId === 'hud') && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
                    DUAL-ENGINE REAL-TIME CONVERSATION
                  </div>
                  <h3 className="text-2xl font-bold text-white font-['Syncopate'] uppercase">
                    NIA AI Companion
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-mono text-zinc-300">Gemini Cloud + Local SQLite Cache</span>
                </div>
              </div>

              {/* Chat Log Window */}
              <div className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-3 min-h-[220px] max-h-[300px] overflow-y-auto text-xs font-mono">
                {chatMessages.map((msg, i) => (
                  <div 
                    key={i} 
                    className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                      msg.role === 'user'
                        ? 'ml-auto bg-white/15 text-white border border-white/20 text-right'
                        : 'mr-auto bg-white/[0.04] text-zinc-200 border border-white/05 text-left'
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>

              {/* Quick Prompt Pill Buttons */}
              <div className="flex flex-wrap gap-2">
                {[
                  'Can I bunk tomorrow?',
                  'What classes do I have next?',
                  'How much money is left?',
                  'Are any assignments due?'
                ].map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => {
                      setChatInput(prompt);
                    }}
                    className="px-3 py-1 rounded-full bg-white/[0.03] hover:bg-white/10 border border-white/10 text-[10px] font-mono text-zinc-300 transition-all"
                  >
                    "{prompt}"
                  </button>
                ))}
              </div>

              {/* Chat Input Form */}
              <form onSubmit={handleSendChat} className="flex gap-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask NIA anything about your classes, dues, or schedule..."
                  className="flex-1 bg-white/[0.04] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 font-mono focus:outline-none focus:border-cyan-400/50"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send</span>
                </button>
              </form>
            </div>
          )}

          {/* ========================================================== */}
          {/* 8. SMART NOTIFICATIONS */}
          {/* ========================================================== */}
          {(featureId === 'notifications') && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
                    PROACTIVE TELEMETRY DISPATCH
                  </div>
                  <h3 className="text-2xl font-bold text-white font-['Syncopate'] uppercase">
                    Smart Notifications
                  </h3>
                </div>
                <button
                  onClick={() => setQuietHours(!quietHours)}
                  className={`px-3 py-1 rounded-full text-xs font-mono transition-all border ${
                    quietHours ? 'bg-cyan-400/20 text-cyan-300 border-cyan-400/30' : 'bg-white/10 text-zinc-400 border-white/15'
                  }`}
                >
                  Quiet Study Hours: {quietHours ? 'ON' : 'OFF'}
                </button>
              </div>

              <div className="space-y-3">
                {notifs.map(n => (
                  <div key={n.id} className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start justify-between gap-4 text-xs font-mono">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300 shrink-0">
                        <Bell className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-white font-bold">{n.title}</div>
                        <div className="text-zinc-400 text-[11px] mt-0.5">{n.desc}</div>
                      </div>
                    </div>
                    <span className="text-[10px] text-zinc-500 shrink-0">{n.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
