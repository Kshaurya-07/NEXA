import React, { useState, useEffect, useRef } from 'react';
import { 
  Calendar, CheckSquare, Mail, IndianRupee, Users, 
  FileText, Search, MessageSquare, Bell, ArrowRight, 
  Sparkles, Upload, Clock, AlertCircle, CheckCircle, ShieldCheck,
  ChevronRight, RefreshCw, Smartphone, Eye
} from 'lucide-react';
import Card3D from './shared/Card3D';

export default function FeaturesShowcase() {
  const [activeTab, setActiveTab] = useState('academic');
  const [taskCompleted, setTaskCompleted] = useState(false);
  const [splitAmount, setSplitAmount] = useState(800);
  const [studentCount, setStudentCount] = useState(4);
  const [splitSettled, setSplitSettled] = useState(false);
  const [emailSummarizing, setEmailSummarizing] = useState(false);
  const [emailSummaryDone, setEmailSummaryDone] = useState(true);
  const [ocrScanning, setOcrScanning] = useState(false);
  
  // 3D Phone tilt on mouse
  const phoneRef = useRef(null);
  const [phoneTilt, setPhoneTilt] = useState({ x: 0, y: 0 });

  const tabs = [
    { id: 'academic', name: 'Timetable & OCR', icon: Calendar },
    { id: 'tasks', name: 'Task Manager', icon: CheckSquare },
    { id: 'email', name: 'Gmail Distiller', icon: Mail },
    { id: 'finance', name: 'Live Bill Split', icon: IndianRupee },
    { id: 'chat', name: 'Campus AI Chat', icon: MessageSquare },
    { id: 'notifications', name: 'Push Telemetry', icon: Bell },
  ];

  const handlePhoneMove = (e) => {
    if (!phoneRef.current) return;
    const rect = phoneRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPhoneTilt({
      x: (y / (rect.height / 2)) * -8,
      y: (x / (rect.width / 2)) * 8,
    });
  };

  const handlePhoneLeave = () => {
    setPhoneTilt({ x: 0, y: 0 });
  };

  const triggerTimetableScan = () => {
    setOcrScanning(true);
    setTimeout(() => {
      setOcrScanning(false);
    }, 1200);
  };

  const triggerEmailSummarizer = () => {
    setEmailSummarizing(true);
    setEmailSummaryDone(false);
    setTimeout(() => {
      setEmailSummarizing(false);
      setEmailSummaryDone(true);
    }, 900);
  };

  return (
    <section id="features" className="py-24 md:py-32 relative overflow-hidden">
      {/* 3D Atmospheric Light Cones */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-white/[0.025] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest text-zinc-400 uppercase mb-4 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            SPATIAL PRODUCT ENGINE
          </div>

          <h2 className="font-['Space_Grotesk'] font-semibold text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
            NEXA IN 3D SPACE
          </h2>
          {/* Stat callouts */}
          <div className="mt-10 grid grid-cols-3 gap-3 max-w-2xl mx-auto">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5">
              <div className="text-2xl sm:text-3xl font-bold text-violet-300">12+</div>
              <div className="mt-1 text-[11px] font-mono uppercase tracking-widest text-zinc-400">AI capabilities</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5">
              <div className="text-2xl sm:text-3xl font-bold text-violet-300">02</div>
              <div className="mt-1 text-[11px] font-mono uppercase tracking-widest text-zinc-400">Cognitive engines</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5">
              <div className="text-2xl sm:text-3xl font-bold text-violet-300">100%</div>
              <div className="mt-1 text-[11px] font-mono uppercase tracking-widest text-zinc-400">Offline-ready</div>
            </div>
          </div>

          <p className="mt-4 text-zinc-400 text-sm sm:text-base font-light">
            Every feature is alive. Interact with the 3D mobile cockpit below to see real-time data calculations, autonomous OCR, and live task dispatch.
          </p>

          {/* Interactive Navigation Tabs */}
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
                      ? 'bg-white text-black shadow-[0_0_25px_rgba(255,255,255,0.35)] scale-105'
                      : 'bg-white/[0.03] text-zinc-400 border border-white/05 hover:bg-white/[0.08] hover:text-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Master 3D Spatial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column: Interactive Feature Controls & Deep Dive */}
          <div className="lg:col-span-6 space-y-6">
            {/* TAB: ACADEMIC */}
            {activeTab === 'academic' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="inline-block font-mono text-[10px] text-zinc-400 uppercase tracking-widest px-2.5 py-1 rounded bg-white/05 border border-white/10">
                  AUTONOMOUS TIMETABLE REASONING
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide font-['Space_Grotesk'] font-semibold">
                  Instant Schedule OCR
                </h3>
                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                  Upload an image or PDF of your university timetable. NIA extracts professor names, lecture halls, and subject codes into a synchronized calendar with smart transit reminders before every class.
                </p>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                  <div className="text-xs font-mono text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-white" />
                    <span>LIVE OCR CONDUIT</span>
                  </div>
                  <div className="text-xs text-zinc-400 font-mono">
                    Scans course codes: CS-301, CS-304, MA-201 • Calculates attendance thresholds automatically.
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={triggerTimetableScan}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-zinc-200 transition-all shadow-md"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>{ocrScanning ? 'Processing OCR Stream...' : 'Simulate Timetable Upload'}</span>
                  </button>
                  <span className="text-xs text-zinc-500 font-mono">Sub-10ms Local Cache</span>
                </div>
              </div>
            )}

            {/* TAB: TASKS */}
            {activeTab === 'tasks' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="inline-block font-mono text-[10px] text-zinc-400 uppercase tracking-widest px-2.5 py-1 rounded bg-white/05 border border-white/10">
                  CRITICAL PATH DISPATCHER
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide font-['Space_Grotesk'] font-semibold">
                  Deadlines & Priority
                </h3>
                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                  "Submit DSA assignment tomorrow." NEXA labels the task <span className="text-white font-medium">Extremely Important</span> and balances study sprints around your free timetable intervals.
                </p>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                  <div className="text-xs font-mono text-white flex items-center gap-2">
                    <Clock className="w-4 h-4 text-white" />
                    <span>COGNITIVE PACING</span>
                  </div>
                  <div className="text-xs text-zinc-400 font-mono">
                    Proactive gentle reminders trigger 24h, 6h, and 1h prior to cutoff without alarming you.
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setTaskCompleted(!taskCompleted)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-zinc-200 transition-all shadow-md"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-black" />
                    <span>{taskCompleted ? 'Reset Assignment Status' : 'Mark DSA Assignment Completed'}</span>
                  </button>
                </div>
              </div>
            )}

            {/* TAB: EMAIL */}
            {activeTab === 'email' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="inline-block font-mono text-[10px] text-zinc-400 uppercase tracking-widest px-2.5 py-1 rounded bg-white/05 border border-white/10">
                  GMAIL COGNITIVE COMPRESSOR
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide font-['Space_Grotesk'] font-semibold">
                  Zero Academic Fluff
                </h3>
                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                  Long 400-word university notices are autonomously parsed into 3 concise bullet points with direct action buttons and deadline synchronization.
                </p>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                  <div className="text-xs font-mono text-white flex items-center gap-2">
                    <Mail className="w-4 h-4 text-white" />
                    <span>SEMANTIC DISTILLATION</span>
                  </div>
                  <div className="text-xs text-zinc-400 font-mono">
                    Extracts fee dates, submission portals, and room venues instantly from administrative text.
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={triggerEmailSummarizer}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-zinc-200 transition-all shadow-md"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${emailSummarizing ? 'animate-spin' : ''}`} />
                    <span>{emailSummarizing ? 'Generating Live Summary...' : 'Re-run Email Summary'}</span>
                  </button>
                </div>
              </div>
            )}

            {/* TAB: FINANCE */}
            {activeTab === 'finance' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="inline-block font-mono text-[10px] text-zinc-400 uppercase tracking-widest px-2.5 py-1 rounded bg-white/05 border border-white/10">
                  CAMPUS SPLIT & LEDGER
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide font-['Space_Grotesk'] font-semibold">
                  Natural Spend & Split
                </h3>
                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                  "I spent ₹180 at Food Street" automatically structures the amount, place, and date. Split group canteen bills live using the interactive calculator below.
                </p>

                {/* Live Split Interactive Controls */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-zinc-400">Total Group Bill:</span>
                    <span className="text-base font-bold text-white font-mono">₹{splitAmount}</span>
                  </div>
                  <input
                    type="range"
                    min="400"
                    max="2000"
                    step="100"
                    value={splitAmount}
                    onChange={(e) => setSplitAmount(Number(e.target.value))}
                    className="w-full accent-white cursor-pointer"
                  />

                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-400">Number of Students:</span>
                    <div className="flex gap-2">
                      {[2, 3, 4, 5].map((num) => (
                        <button
                          key={num}
                          onClick={() => setStudentCount(num)}
                          className={`w-7 h-7 rounded-lg text-xs font-bold transition-all ${
                            studentCount === num
                              ? 'bg-white text-black'
                              : 'bg-white/10 text-zinc-400 hover:text-white'
                          }`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/05 flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-400">Your Individual Share:</span>
                    <span className="text-white font-bold text-sm">
                      ₹{Math.round(splitAmount / studentCount)} / person
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setSplitSettled(!splitSettled)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-zinc-200 transition-all shadow-md"
                  >
                    <span>{splitSettled ? 'Reset Settlement' : 'Mark Share Settled (UPI)'}</span>
                  </button>
                </div>
              </div>
            )}

            {/* TAB: CHAT */}
            {activeTab === 'chat' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="inline-block font-mono text-[10px] text-zinc-400 uppercase tracking-widest px-2.5 py-1 rounded bg-white/05 border border-white/10">
                  CONTEXTUAL STUDENT COMPANION
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide font-['Space_Grotesk'] font-semibold">
                  NIA Native AI Chat
                </h3>
                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                  Grounds every answer in your reality: your classroom timetable, upcoming exam dates, friend balances, and pending homework without requiring manual explanation.
                </p>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                  <div className="text-xs font-mono text-white flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-white" />
                    <span>CONTEXT AWARENESS</span>
                  </div>
                  <div className="text-xs text-zinc-400 font-mono">
                    "When is my next exam?" → Returns exact hall, time, syllabus coverage, and revision days left.
                  </div>
                </div>
              </div>
            )}

            {/* TAB: NOTIFICATIONS */}
            {activeTab === 'notifications' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="inline-block font-mono text-[10px] text-zinc-400 uppercase tracking-widest px-2.5 py-1 rounded bg-white/05 border border-white/10">
                  SMART NOTIFICATION STACK
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide font-['Space_Grotesk'] font-semibold">
                  Gentle Proactive Alerts
                </h3>
                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                  Only delivers notifications when they matter: 10 minutes before class with the room number, or the evening before an assignment is due.
                </p>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                  <div className="text-xs font-mono text-white flex items-center gap-2">
                    <Bell className="w-4 h-4 text-white" />
                    <span>ZERO SPAM TELEMETRY</span>
                  </div>
                  <div className="text-xs text-zinc-400 font-mono">
                    "DBMS starts in 10 minutes (Room 302)" • "Your DSA assignment is due tomorrow."
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: 3D Smartphone Device Mockup with Spatial Floating HUD */}
          <div className="lg:col-span-6 flex justify-center perspective-1000">
            <div
              ref={phoneRef}
              onMouseMove={handlePhoneMove}
              onMouseLeave={handlePhoneLeave}
              className="relative w-full max-w-[340px] sm:max-w-[360px] rounded-[50px] p-3.5 bg-gradient-to-b from-[#2a2a38] via-[#151520] to-[#0c0c14] border-2 border-white/20 shadow-[0_30px_90px_rgba(0,0,0,0.95),0_0_50px_rgba(255,255,255,0.08)] transition-transform duration-150 ease-out"
              style={{
                transform: `perspective(1000px) rotateX(${phoneTilt.x.toFixed(2)}deg) rotateY(${phoneTilt.y.toFixed(2)}deg)`,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Phone Dynamic Island / Camera Reticle */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-center border border-white/10 shadow-inner">
                <div className="w-2.5 h-2.5 rounded-full bg-white/20 mr-2" />
                <div className="w-8 h-1 rounded-full bg-zinc-800" />
              </div>

              {/* High-Resolution Screen Glass */}
              <div className="relative rounded-[40px] bg-[#07070c] overflow-hidden border border-white/10 h-[610px] flex flex-col justify-between pt-10 pb-6 px-4">
                {/* Top Status Bar */}
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 px-2 pb-3 border-b border-white/05">
                  <span className="font-semibold text-white">09:41</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-white/10 text-emerald-400 font-bold">
                      NIA READY
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                </div>

                {/* Main Dynamic Screen Content */}
                <div className="flex-1 overflow-y-auto py-3 space-y-3 pr-1 text-left">
                  {/* SCREEN: ACADEMIC */}
                  {activeTab === 'academic' && (
                    <div className="space-y-3 animate-fadeIn">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                          TODAY'S SCHEDULE
                        </span>
                        <span className="text-[10px] text-zinc-400 font-mono">WEDNESDAY</span>
                      </div>

                      {ocrScanning ? (
                        <div className="p-8 rounded-2xl bg-white/[0.04] border border-white/25 text-center space-y-3">
                          <Sparkles className="w-8 h-8 text-white mx-auto animate-spin" />
                          <div className="text-xs font-mono text-white font-bold">Scanning Timetable PDF...</div>
                          <div className="text-[10px] text-zinc-400 font-mono">Parsing 5 course modules & LH rooms</div>
                        </div>
                      ) : (
                        <>
                          <div className="p-3.5 rounded-2xl bg-white/15 border border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.08)]">
                            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 mb-1">
                              <span>09:00 AM - 10:15 AM</span>
                              <span className="text-emerald-400 font-bold">NOW IN LH-3</span>
                            </div>
                            <div className="text-sm font-bold text-white">Operating Systems</div>
                            <div className="text-xs text-zinc-300 font-mono mt-0.5">Prof. R. Verma • Attendance: 88%</div>
                          </div>

                          <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/05">
                            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 mb-1">
                              <span>11:30 AM - 01:00 PM</span>
                              <span>NEXT PERIOD</span>
                            </div>
                            <div className="text-sm font-semibold text-zinc-200">DBMS Lab (Room 302)</div>
                            <div className="text-xs text-zinc-400 font-mono mt-0.5">Practical Evaluation #3</div>
                          </div>

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

                  {/* SCREEN: TASKS */}
                  {activeTab === 'tasks' && (
                    <div className="space-y-3 animate-fadeIn">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                          PRIORITY TASKS
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 font-bold">
                          1 URGENT
                        </span>
                      </div>

                      <div className={`p-4 rounded-2xl border transition-all ${
                        taskCompleted
                          ? 'bg-emerald-950/20 border-emerald-500/30 line-through text-zinc-500'
                          : 'bg-white/15 border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.08)]'
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

                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/05 flex items-center justify-between">
                        <div>
                          <div className="text-xs font-medium text-zinc-200">OS Semaphore Notes Revision</div>
                          <div className="text-[10px] text-zinc-400 font-mono">Due Friday • Medium Priority</div>
                        </div>
                        <CheckCircle className="w-4 h-4 text-zinc-600" />
                      </div>
                    </div>
                  )}

                  {/* SCREEN: EMAIL */}
                  {activeTab === 'email' && (
                    <div className="space-y-3 animate-fadeIn">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                          UNIVERSITY NOTICE
                        </span>
                        <span className="text-[10px] font-mono text-zinc-400">GMAIL SYNC</span>
                      </div>

                      {emailSummaryDone ? (
                        <div className="p-4 rounded-2xl bg-white/15 border border-white/30 space-y-2.5">
                          <div className="flex items-center gap-1.5 text-[10px] font-mono text-white font-bold">
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
                        <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/15 text-center space-y-2">
                          <Sparkles className="w-6 h-6 text-white mx-auto animate-spin" />
                          <div className="text-xs font-mono text-white">Compressing 420-word circular...</div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* SCREEN: FINANCE */}
                  {activeTab === 'finance' && (
                    <div className="space-y-3 animate-fadeIn">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                          CAMPUS SPENDS & SPLIT
                        </span>
                        <span className="text-[10px] font-mono text-emerald-400">LIVE MATH</span>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-white/15 border border-white/30 space-y-2">
                        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-300">
                          <span>SHARED DINNER SPLIT</span>
                          <span className="text-white font-bold">TOTAL: ₹{splitAmount}</span>
                        </div>
                        <div className="text-xs text-zinc-200">
                          {studentCount} students • Arjun paid
                        </div>
                        <div className="flex items-center justify-between text-xs font-mono pt-1">
                          <span className="text-zinc-400">Your Share:</span>
                          <span className="text-white font-bold text-sm">
                            ₹{Math.round(splitAmount / studentCount)}
                          </span>
                        </div>
                        <div className="text-[10px] font-mono text-emerald-400">
                          Status: {splitSettled ? '✓ Settled via UPI' : 'Pending settlement'}
                        </div>
                      </div>

                      {/* Natural Spend Log Preview */}
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/05 text-xs font-mono">
                        <div className="text-[9px] text-zinc-500 uppercase mb-1">Recent Natural Log</div>
                        <div className="text-zinc-200">"I spent ₹180 at Food Street"</div>
                        <div className="text-zinc-400 text-[10px] mt-1">→ Categorized: Food • -₹180</div>
                      </div>
                    </div>
                  )}

                  {/* SCREEN: CHAT */}
                  {activeTab === 'chat' && (
                    <div className="space-y-3 animate-fadeIn">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                          NIA CONTEXTUAL CHAT
                        </span>
                        <span className="text-[10px] font-mono text-zinc-400">NATIVE OS</span>
                      </div>

                      <div className="space-y-2.5 text-xs font-mono">
                        <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/05 max-w-[85%] ml-auto text-right text-zinc-200">
                          "What do I have tomorrow?"
                        </div>
                        <div className="p-3 rounded-xl bg-white/15 border border-white/25 max-w-[90%] text-white space-y-1">
                          <div className="text-[9px] uppercase font-bold text-zinc-400">NIA ASSISTANT</div>
                          <div>You have 3 classes starting at 9:00 AM. Also, your DSA assignment is due before midnight!</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SCREEN: NOTIFICATIONS */}
                  {activeTab === 'notifications' && (
                    <div className="space-y-3 animate-fadeIn">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                          PUSH ALERTS
                        </span>
                        <span className="text-[10px] font-mono text-zinc-400">TIMELY</span>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-white/20 border border-white/40 space-y-1 shadow-[0_0_20px_rgba(255,255,255,0.12)]">
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
                        <div className="text-[11px] text-zinc-300 font-mono">Priority: Extremely Important</div>
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
