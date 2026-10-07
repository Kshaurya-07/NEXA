import React, { useState } from 'react';
import { 
  Calendar, CheckSquare, Mail, IndianRupee, Users, 
  FileText, Search, MessageSquare, Bell, ArrowRight, 
  Sparkles, Upload, Clock, AlertCircle, CheckCircle, ShieldCheck
} from 'lucide-react';
import Card3D from './shared/Card3D';

export default function FeaturesShowcase() {
  const [activeTab, setActiveTab] = useState('academic');
  const [taskCompleted, setTaskCompleted] = useState(false);
  const [splitSettled, setSplitSettled] = useState(false);
  const [emailSummarized, setEmailSummarized] = useState(true);
  const [ocrScanning, setOcrScanning] = useState(false);

  const tabs = [
    { id: 'academic', name: 'Academic & Timetable', icon: Calendar },
    { id: 'tasks', name: 'Task Manager', icon: CheckSquare },
    { id: 'email', name: 'University Gmail', icon: Mail },
    { id: 'finance', name: 'Finance & Split', icon: IndianRupee },
    { id: 'chat', name: 'Contextual AI Chat', icon: MessageSquare },
    { id: 'notifications', name: 'Smart Alerts', icon: Bell },
  ];

  const handleScanTimetable = () => {
    setOcrScanning(true);
    setTimeout(() => {
      setOcrScanning(false);
    }, 1200);
  };

  return (
    <section id="features" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest text-zinc-400 uppercase mb-4">
            DEEP FEATURE DEMONSTRATION
          </div>
          <h2 className="font-['Syncopate'] text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
            EXPLORE THE PRODUCT
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base font-light">
            Every feature is engineered for zero friction. Tap through the interactive NEXA phone cockpit below to experience real student workflows.
          </p>

          {/* Interactive Feature Category Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                    isActive
                      ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.25)]'
                      : 'bg-white/[0.03] text-zinc-400 border border-white/05 hover:bg-white/[0.06] hover:text-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Master 3D Phone Cockpit + Feature Deep Dive Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          {/* Left Column: Feature Specifications & Controls */}
          <div className="lg:col-span-6 space-y-6">
            {activeTab === 'academic' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="inline-block font-mono text-xs text-zinc-400 uppercase tracking-wider">
                  FEATURE 01 • ACADEMIC INTELLIGENCE
                </div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-wide">
                  Timetable, Exams & Syllabus OCR
                </h3>
                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                  Never decipher confusing timetable screenshots again. Snap a photo of your schedule or upload your university PDF. NIA evaluates classroom locations, professor names, and period intervals into a live schedule with smart travel reminders.
                </p>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 text-xs font-mono">
                  <div className="text-white font-medium flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-white" />
                    AUTONOMOUS SCHEDULE PIPELINE
                  </div>
                  <div className="text-zinc-400">
                    Timetable Upload → NIA Multimodal OCR → Calendar Event Slots → Classroom Alerts
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={handleScanTimetable}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-zinc-200 transition-all shadow-md"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>{ocrScanning ? 'Scanning OCR...' : 'Simulate Timetable Scan'}</span>
                  </button>
                  <span className="text-xs text-zinc-500 font-mono">Manual setup also supported</span>
                </div>
              </div>
            )}

            {activeTab === 'tasks' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="inline-block font-mono text-xs text-zinc-400 uppercase tracking-wider">
                  FEATURE 02 • TASK ARCHITECTURE
                </div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-wide">
                  Smart Deadlines & Priority Tracking
                </h3>
                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                  "Submit DSA assignment tomorrow." That's all you need to say. NEXA extracts the deadline, labels it <span className="text-white font-medium">Extremely Important</span>, and schedules gentle pacing notifications before the cutoff.
                </p>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 text-xs font-mono">
                  <div className="text-white font-medium flex items-center gap-2">
                    <Clock className="w-4 h-4 text-white" />
                    DEADLINE PACING ENGINE
                  </div>
                  <div className="text-zinc-400">
                    Tasks aren't just a static list. NIA recalculates reminders based on exam dates and lab workloads.
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setTaskCompleted(!taskCompleted)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs font-semibold uppercase tracking-wider hover:bg-white/20 transition-all"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-white" />
                    <span>Toggle DSA Task Status ({taskCompleted ? 'Completed' : 'Pending'})</span>
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'email' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="inline-block font-mono text-xs text-zinc-400 uppercase tracking-wider">
                  FEATURE 03 • COMMUNICATION DISTILLATION
                </div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-wide">
                  University Gmail Summarization
                </h3>
                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                  Stop wading through 500-word circulars from the administration. NIA filters out academic boilerplate, highlights deadlines in bold, and attaches direct submission links.
                </p>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 text-xs font-mono">
                  <div className="text-white font-medium flex items-center gap-2">
                    <Mail className="w-4 h-4 text-white" />
                    INTELLIGENT COMPRESSION
                  </div>
                  <div className="text-zinc-400">
                    Transforms unstructured notice emails into 3 crisp bullet points + 1-click action buttons.
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setEmailSummarized(!emailSummarized)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs font-semibold uppercase tracking-wider hover:bg-white/20 transition-all"
                  >
                    <span>View {emailSummarized ? 'Raw Cluttered Email' : 'NIA Smart Summary'}</span>
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'finance' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="inline-block font-mono text-xs text-zinc-400 uppercase tracking-wider">
                  FEATURE 04 • CAMPUS FINANCE & DEBTS
                </div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-wide">
                  Natural Spends, Split & Borrow/Lend
                </h3>
                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                  Type or say "I spent ₹180 at Food Street" and NIA instantly structures amount, category, merchant, and date. Split group canteen meals effortlessly without opening separate apps.
                </p>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 text-xs font-mono">
                  <div className="text-white font-medium flex items-center gap-2">
                    <Users className="w-4 h-4 text-white" />
                    GROUP SPLIT DEMO
                  </div>
                  <div className="text-zinc-400">
                    Dinner Bill = ₹800 • 4 Students • Individual Share: ₹200 each • Arjun paid.
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setSplitSettled(!splitSettled)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-zinc-200 transition-all"
                  >
                    <span>{splitSettled ? 'Reset Split Simulation' : 'Settle Group Share (₹200)'}</span>
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'chat' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="inline-block font-mono text-xs text-zinc-400 uppercase tracking-wider">
                  FEATURE 05 • NATIVE ASSISTANT
                </div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-wide">
                  Contextual AI Chat Inside NEXA
                </h3>
                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                  Not a disconnected chat window. NIA knows what semester you are in, what subjects you study, who owes you money, and when your next class begins.
                </p>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 text-xs font-mono">
                  <div className="text-white font-medium flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-white" />
                    REAL STUDENT QUERIES
                  </div>
                  <div className="text-zinc-400">
                    "When is my next exam?" • "How much did I spend this week?" • "Summarize today's university notices."
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="inline-block font-mono text-xs text-zinc-400 uppercase tracking-wider">
                  FEATURE 06 • SMART TELEMETRY
                </div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-wide">
                  Context-Aware Push Alerts
                </h3>
                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                  Zero spam. Notifications trigger only when actionable: 10 minutes before lecture start with room number, or the evening before an assignment is due.
                </p>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 text-xs font-mono">
                  <div className="text-white font-medium flex items-center gap-2">
                    <Bell className="w-4 h-4 text-white" />
                    SAMPLE ALERTS
                  </div>
                  <div className="text-zinc-400">
                    "DBMS starts in 10 minutes (Room 302)" • "Your DSA assignment is due tomorrow."
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: 3D High-End Phone Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[360px] rounded-[48px] p-3.5 bg-gradient-to-b from-[#22222c] via-[#121218] to-[#0c0c12] border-2 border-white/20 shadow-[0_25px_70px_rgba(0,0,0,0.9),0_0_40px_rgba(255,255,255,0.06)]">
              {/* Phone Speaker & Dynamic Island */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-center border border-white/10">
                <div className="w-2.5 h-2.5 rounded-full bg-white/20 mr-2" />
                <div className="w-8 h-1 rounded-full bg-zinc-800" />
              </div>

              {/* Phone Screen Area */}
              <div className="relative rounded-[38px] bg-[#07070b] overflow-hidden border border-white/10 h-[590px] flex flex-col justify-between pt-10 pb-6 px-4">
                {/* Top Status Bar */}
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 px-2 pb-3 border-b border-white/05">
                  <span className="font-semibold text-white">09:41</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-white/10 text-emerald-400">NIA READY</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                </div>

                {/* Main Dynamic Screen Content */}
                <div className="flex-1 overflow-y-auto py-3 space-y-3 pr-1 text-left">
                  {/* Screen: ACADEMIC */}
                  {activeTab === 'academic' && (
                    <div className="space-y-3 animate-fadeIn">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                          TODAY'S SCHEDULE
                        </span>
                        <span className="text-[10px] text-zinc-400 font-mono">WEDNESDAY</span>
                      </div>

                      {ocrScanning ? (
                        <div className="p-8 rounded-2xl bg-white/[0.04] border border-white/20 text-center space-y-3">
                          <Sparkles className="w-8 h-8 text-white mx-auto animate-spin" />
                          <div className="text-xs font-mono text-white">Scanning Timetable PDF...</div>
                          <div className="text-[10px] text-zinc-400 font-mono">Extracting 5 course modules & LH rooms</div>
                        </div>
                      ) : (
                        <>
                          {/* Class 1 */}
                          <div className="p-3.5 rounded-2xl bg-white/10 border border-white/20">
                            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 mb-1">
                              <span>09:00 AM - 10:15 AM</span>
                              <span className="text-emerald-400">CURRENT</span>
                            </div>
                            <div className="text-sm font-bold text-white">Operating Systems (LH-3)</div>
                            <div className="text-xs text-zinc-300 font-mono mt-0.5">Prof. R. Verma • Attendance: 88%</div>
                          </div>

                          {/* Class 2 */}
                          <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/05">
                            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 mb-1">
                              <span>11:30 AM - 01:00 PM</span>
                              <span>NEXT</span>
                            </div>
                            <div className="text-sm font-semibold text-zinc-200">DBMS Lab (Room 302)</div>
                            <div className="text-xs text-zinc-400 font-mono mt-0.5">Practical Evaluation #3</div>
                          </div>

                          {/* Class 3 */}
                          <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/05">
                            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 mb-1">
                              <span>02:00 PM - 03:15 PM</span>
                              <span>AFTERNOON</span>
                            </div>
                            <div className="text-sm font-semibold text-zinc-200">Discrete Mathematics</div>
                            <div className="text-xs text-zinc-400 font-mono mt-0.5">LH-1 • Quiz revision</div>
                          </div>
                        </>
                      )}
                    </div>
                  )}

                  {/* Screen: TASKS */}
                  {activeTab === 'tasks' && (
                    <div className="space-y-3 animate-fadeIn">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                          PRIORITY TASKS
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">
                          1 CRITICAL
                        </span>
                      </div>

                      {/* Main Featured Task */}
                      <div className={`p-4 rounded-2xl border transition-all ${
                        taskCompleted
                          ? 'bg-emerald-950/20 border-emerald-500/30 line-through text-zinc-400'
                          : 'bg-white/10 border-white/20'
                      }`}>
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className="flex items-center gap-1.5 text-[10px] font-mono text-rose-400 font-bold mb-1">
                              <AlertCircle className="w-3 h-3" />
                              <span>EXTREMELY IMPORTANT</span>
                            </div>
                            <div className="text-sm font-bold text-white">DSA Lab Assignment #4</div>
                            <div className="text-xs text-zinc-300 font-mono mt-1">Due Tomorrow • 11:59 PM</div>
                          </div>
                          <input
                            type="checkbox"
                            checked={taskCompleted}
                            onChange={() => setTaskCompleted(!taskCompleted)}
                            className="mt-1 w-4 h-4 rounded border-white/30 text-white focus:ring-0 bg-transparent"
                          />
                        </div>
                      </div>

                      {/* Secondary Tasks */}
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/05 flex items-center justify-between">
                        <div>
                          <div className="text-xs font-medium text-zinc-200">OS Semaphore Notes Revision</div>
                          <div className="text-[10px] text-zinc-400 font-mono">Due Friday • Medium Priority</div>
                        </div>
                        <CheckCircle className="w-4 h-4 text-zinc-600" />
                      </div>

                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/05 flex items-center justify-between">
                        <div>
                          <div className="text-xs font-medium text-zinc-200">Submit Canteen Bill to Hostel Warden</div>
                          <div className="text-[10px] text-zinc-400 font-mono">Sunday • Low Priority</div>
                        </div>
                        <CheckCircle className="w-4 h-4 text-zinc-600" />
                      </div>
                    </div>
                  )}

                  {/* Screen: EMAIL */}
                  {activeTab === 'email' && (
                    <div className="space-y-3 animate-fadeIn">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                          UNIVERSITY NOTICE
                        </span>
                        <span className="text-[10px] font-mono text-zinc-400">GMAIL SYNC</span>
                      </div>

                      {emailSummarized ? (
                        <div className="p-4 rounded-2xl bg-white/10 border border-white/25 space-y-2.5">
                          <div className="flex items-center gap-1.5 text-[10px] font-mono text-white">
                            <Sparkles className="w-3.5 h-3.5 text-white" />
                            <span>NIA AUTONOMOUS SUMMARY</span>
                          </div>
                          <div className="text-xs font-semibold text-white">
                            Mid-Semester Examination Registration
                          </div>
                          <div className="space-y-1.5 text-[11px] text-zinc-200 font-mono">
                            <div>• Portal opens: Oct 8th (Tomorrow 10 AM)</div>
                            <div>• Final deadline: Oct 15th without late fee</div>
                            <div>• Hall tickets generate immediately after form</div>
                          </div>
                          <button className="w-full mt-2 py-2 rounded-lg bg-white text-black text-[11px] font-bold uppercase tracking-wider">
                            Open Examination Portal
                          </button>
                        </div>
                      ) : (
                        <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/05 space-y-2 text-[11px] text-zinc-400 font-mono">
                          <div className="text-zinc-300 font-bold">From: dean_academic@univ.edu</div>
                          <div className="text-zinc-500">Subject: Circular No. 2026/EX-8839/General</div>
                          <p className="line-clamp-6 leading-relaxed">
                            It is hereby informed to all regular undergraduate students that the mid-term examinations for the autumn semester shall commence according to the schedule notified earlier. All students must ensure their course registration form is submitted through the online ERP interface...
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Screen: FINANCE */}
                  {activeTab === 'finance' && (
                    <div className="space-y-3 animate-fadeIn">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                          SPENDS & SPLIT
                        </span>
                        <span className="text-[10px] font-mono text-emerald-400">OCTOBER</span>
                      </div>

                      {/* Natural Spend parsed */}
                      <div className="p-3.5 rounded-2xl bg-white/10 border border-white/20">
                        <div className="text-[10px] font-mono text-zinc-400 uppercase mb-1">
                          NATURAL LANGUAGE LOG
                        </div>
                        <div className="text-xs text-white font-mono">"I spent ₹180 at Food Street"</div>
                        <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                          <span className="text-zinc-300">Food Street (Food)</span>
                          <span className="text-white font-bold">- ₹180</span>
                        </div>
                      </div>

                      {/* Group Split card */}
                      <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                          <span>SHARED EXPENSE • DINNER</span>
                          <span className="text-white font-bold">TOTAL: ₹800</span>
                        </div>
                        <div className="text-xs text-zinc-200">Arjun paid for 4 people</div>
                        <div className="flex items-center justify-between text-xs font-mono pt-1">
                          <span className="text-zinc-400">Your Share:</span>
                          <span className="text-rose-400 font-bold">₹200 owed</span>
                        </div>
                        <div className="text-[10px] font-mono text-zinc-400">
                          Status: {splitSettled ? '✓ Settled via UPI' : 'Pending settlement'}
                        </div>
                      </div>

                      {/* Borrow Lend Balance */}
                      <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono">
                        <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/05">
                          <div className="text-[9px] text-zinc-500 uppercase">You are owed</div>
                          <div className="text-emerald-400 font-bold mt-0.5">₹1,450</div>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/05">
                          <div className="text-[9px] text-zinc-500 uppercase">You owe</div>
                          <div className="text-rose-400 font-bold mt-0.5">{splitSettled ? '₹120' : '₹320'}</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Screen: CHAT */}
                  {activeTab === 'chat' && (
                    <div className="space-y-3 animate-fadeIn">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                          NIA CONTEXTUAL CHAT
                        </span>
                        <span className="text-[10px] font-mono text-zinc-400">LIVE APP CONTEXT</span>
                      </div>

                      <div className="space-y-2.5 text-xs font-mono">
                        <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/05 max-w-[85%] ml-auto text-right text-zinc-200">
                          "What do I have tomorrow?"
                        </div>
                        <div className="p-3 rounded-xl bg-white/10 border border-white/20 max-w-[90%] text-white space-y-1">
                          <div className="text-[9px] uppercase font-bold text-zinc-400">NIA ASSISTANT</div>
                          <div>You have 3 classes starting at 9:00 AM. Also, your DSA assignment is due before midnight!</div>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/05 max-w-[85%] ml-auto text-right text-zinc-200">
                          "When is my next exam?"
                        </div>
                        <div className="p-3 rounded-xl bg-white/10 border border-white/20 max-w-[90%] text-white space-y-1">
                          <div className="text-[9px] uppercase font-bold text-zinc-400">NIA ASSISTANT</div>
                          <div>Operating Systems Midsem on Oct 19th at 10:00 AM (LH-2). 12 days left to revise.</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Screen: NOTIFICATIONS */}
                  {activeTab === 'notifications' && (
                    <div className="space-y-3 animate-fadeIn">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                          SMART NOTIFICATIONS
                        </span>
                        <span className="text-[10px] font-mono text-zinc-400">ACTIONABLE</span>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-white/15 border border-white/30 space-y-1">
                        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-300">
                          <span>NEXA • TIMETABLE</span>
                          <span>10m ago</span>
                        </div>
                        <div className="text-xs font-bold text-white">DBMS starts in 10 minutes</div>
                        <div className="text-[11px] text-zinc-300 font-mono">Block B, Room 302 • Bring Lab Notebook</div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-white/10 border border-white/20 space-y-1">
                        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-300">
                          <span>NEXA • DEADLINE</span>
                          <span>1h ago</span>
                        </div>
                        <div className="text-xs font-bold text-white">Your DSA assignment is due tomorrow</div>
                        <div className="text-[11px] text-zinc-300 font-mono">Priority: Extremely Important • Portal closes 11:59 PM</div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/05 space-y-1">
                        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                          <span>NEXA • FINANCE</span>
                          <span>3h ago</span>
                        </div>
                        <div className="text-xs font-semibold text-zinc-300">Split settled with Rahul</div>
                        <div className="text-[11px] text-zinc-400 font-mono">₹300 credited towards Canteen Fund</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Dock / Home Bar */}
                <div className="pt-2 border-t border-white/05 flex items-center justify-around text-zinc-500">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div className="w-12 h-1 bg-white/30 rounded-full" />
                  <div className="text-[10px] font-mono text-zinc-400">NEXA OS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
