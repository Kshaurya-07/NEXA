import React, { useState } from 'react';
import { 
  Smartphone, Mail, Calendar, CheckSquare, GraduationCap, 
  Wallet, Users, FileText, Search, MessageSquare, Bell, ArrowRight, 
  Sparkles, Layers, ShieldCheck, IndianRupee, Clock, ArrowUpRight
} from 'lucide-react';
import Card3D from './shared/Card3D';
import JourneyNextButton from './shared/JourneyNextButton';

export default function NexaAppIntro() {
  const [selectedPillar, setSelectedPillar] = useState(0);

  const ecosystemPillars = [
    { 
      name: 'University Gmail', 
      icon: Mail, 
      tag: 'Autonomous Distillation',
      preview: {
        headline: 'Gmail Distiller',
        snippet: 'Circular #492 compressed from 420 words to 3 actions',
        detail: '• Registration portal closes Oct 15\n• ₹500 late fee thereafter\n• ERP verification verified',
        metric: '92% Reading Time Saved'
      }
    },
    { 
      name: 'Dynamic Timetable', 
      icon: Calendar, 
      tag: 'OCR & Live Schedule',
      preview: {
        headline: 'Live Dynamic Timetable',
        snippet: 'Wednesday Schedule • Next: Operating Systems',
        detail: '09:00 AM - 10:30 AM in LH-3 with Prof. Verma. Followed by DBMS Lab at 11:30 AM.',
        metric: '75% Rule Buffer: +4 Lectures Safe'
      }
    },
    { 
      name: 'Academic Deadlines', 
      icon: GraduationCap, 
      tag: 'Paced Reminders',
      preview: {
        headline: 'Deadlines & Pacing',
        snippet: 'DSA Assignment #4 closes Tomorrow 11:59 PM',
        detail: 'Weightage: 20% • Recommended prep window: 8:00 PM - 10:30 PM tonight.',
        metric: 'Priority: Extremely Important'
      }
    },
    { 
      name: 'Priority Tasks', 
      icon: CheckSquare, 
      tag: 'Extremely Important',
      preview: {
        headline: 'Priority Action Matrix',
        snippet: '4 Active Campus Tasks',
        detail: '1. DSA Lab code • 2. AI CAT-2 review • 3. OS Semaphore • 4. Hostel leave form.',
        metric: '1 Urgent Due Tomorrow'
      }
    },
    { 
      name: 'Exams & Quizzes', 
      icon: GraduationCap, 
      tag: 'Weightage Tracking',
      preview: {
        headline: 'Continuous Assessments',
        snippet: 'Mid-Term Examinations • 6 Days Remaining',
        detail: 'CS3002 AI (30%) • CS3004 DBMS (30%) • CS3006 OS (30%) • MA2001 (30%).',
        metric: 'Syllabus Coverage: 84%'
      }
    },
    { 
      name: 'Assignments', 
      icon: FileText, 
      tag: 'LMS Portal Linking',
      preview: {
        headline: 'LMS Assignment Conduit',
        snippet: 'Zero Manual Portal Searching',
        detail: 'Direct deep links to Moodle/Google Classroom with tokenized submission validation.',
        metric: 'Instant Portal Launch'
      }
    },
    { 
      name: 'Integrated Calendar', 
      icon: Calendar, 
      tag: 'Zero Schedule Clashes',
      preview: {
        headline: 'Unified Campus Calendar',
        snippet: 'Synchronized Academic + Social Schedule',
        detail: 'Automatically merges class timetables, society meetings, and study blocks.',
        metric: 'Zero Overlaps Guaranteed'
      }
    },
    { 
      name: 'Finance & Budgets', 
      icon: IndianRupee, 
      tag: 'Natural Language Logs',
      preview: {
        headline: 'Student Financial Ledger',
        snippet: 'Monthly Budget: ₹8,420 spent / ₹11,580 remaining',
        detail: 'Category Breakdown: Food ₹3,240, Travel ₹1,820, Shopping ₹1,460, Books ₹1,120, Misc ₹780.',
        metric: 'Burn Rate: Normal • On Track'
      }
    },
    { 
      name: 'Borrow & Lend', 
      icon: Wallet, 
      tag: 'Transparent Ledger',
      preview: {
        headline: 'Campus Debt Ledger',
        snippet: 'Net Balance: +₹600 receivable',
        detail: 'Rahul owes you ₹300 (Food Street) • Priya owes you ₹450 (Uber) • You owe Arjun ₹150.',
        metric: '1-Tap UPI Settlement'
      }
    },
    { 
      name: 'Shared Expenses', 
      icon: Users, 
      tag: '1-Tap Group Split',
      preview: {
        headline: 'Hostel Bill Splitter',
        snippet: 'Even and Custom Split Math',
        detail: '₹1,200 dinner split among 4 roommates = ₹300 each. Payment requests dispatched.',
        metric: 'Zero Awkward WhatsApp Texts'
      }
    },
    { 
      name: 'Student Documents', 
      icon: FileText, 
      tag: 'Offline PDF Store',
      preview: {
        headline: 'Offline Academic Vault',
        snippet: 'Instant Access Without Wi-Fi',
        detail: 'College ID card, fee receipts, syllabus PDFs, and lab manuals stored locally on device.',
        metric: 'Sub-10ms Encrypted Access'
      }
    },
    { 
      name: 'Contextual Search', 
      icon: Search, 
      tag: 'Semantic Retrieval',
      preview: {
        headline: 'Universal Semantic Search',
        snippet: 'Search Your Entire Campus Life',
        detail: 'Type "exam schedule" or "Rahul money" to jump straight to the exact record.',
        metric: 'Under 15ms Response Time'
      }
    },
    { 
      name: 'NIA AI Chat', 
      icon: MessageSquare, 
      tag: 'Live Campus Context',
      preview: {
        headline: 'Student AI Companion',
        snippet: 'Grounded in Real University Reality',
        detail: 'Understands your professors, campus blocks, attendance rules, and friend groups.',
        metric: 'Dual-Engine Cloud + Offline'
      }
    },
    { 
      name: 'Smart Notifications', 
      icon: Bell, 
      tag: 'Proactive Telemetry',
      preview: {
        headline: 'Calm Notification System',
        snippet: 'Only What Matters, When It Matters',
        detail: 'Gentle transit nudges 10 minutes before class. Zero spam, zero ad marketing.',
        metric: 'Calm Computing Verified'
      }
    },
  ];

  const currentPillar = ecosystemPillars[selectedPillar];

  return (
    <section id="nexa-app" className="py-24 md:py-32 relative overflow-hidden">
      {/* Ambient Radial Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-white/[0.02] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest text-zinc-400 uppercase mb-4 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            STAGE 03 • EXPLORE NEXA — THE STUDENT OPERATING SYSTEM
          </div>

          <h2 className="font-['Syncopate'] text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
            NIA IS THE INTELLIGENCE. <br />
            <span className="text-zinc-400 font-light text-glow">NEXA IS WHERE IT COMES TO LIFE.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-zinc-300 font-light leading-relaxed max-w-3xl mx-auto">
            NEXA is a <span className="text-white font-medium">spatial, mobile-first student ecosystem</span> engineered to eliminate administrative friction. Tap any of the 14 essential pillars below to inspect its live cockpit state.
          </p>
        </div>

        {/* 14 Interactive 3D Ecosystem Pillars */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {ecosystemPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isSelected = selectedPillar === idx;
            return (
              <button
                key={pillar.name}
                onClick={() => setSelectedPillar(idx)}
                className={`p-4 rounded-2xl border transition-all duration-300 flex flex-col items-center justify-between text-center gap-3 cursor-pointer ${
                  isSelected
                    ? 'bg-white/20 border-white/50 shadow-[0_0_25px_rgba(255,255,255,0.2)] -translate-y-1 scale-105'
                    : 'bg-white/[0.02] border-white/05 hover:bg-white/[0.06] hover:border-white/20'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                    isSelected
                      ? 'bg-white text-black shadow-md'
                      : 'bg-white/05 text-zinc-300'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white tracking-wide">
                    {pillar.name}
                  </div>
                  <div className="text-[9px] text-zinc-400 font-mono mt-1 line-clamp-1">
                    {pillar.tag}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic 3D Spatial Cockpit Preview Screen */}
        <div className="mt-14 max-w-4xl mx-auto">
          <Card3D depth={12} className="p-6 sm:p-10 bg-[#090912]/95 border-white/20 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Left Column: Brand Lockup & Specs */}
              <div className="md:col-span-5 text-left space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-black/85 border border-white/25 flex items-center justify-center shrink-0 p-2 text-white shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    <img
                      src="/logo.png"
                      alt="NEXA Official Logo"
                      className="w-full h-full object-contain filter drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white uppercase tracking-wider font-['Syncopate']">
                      NEXA COCKPIT
                    </h3>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-400">
                      PILLAR {selectedPillar + 1} OF 14 ACTIVE
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                  Zero endless scrolling feeds. Zero notifications without purpose. Sub-10ms offline local search.
                </p>

                <div className="pt-2">
                  <a
                    href="#features"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-all shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:scale-105"
                  >
                    <span>Launch 3D Feature Sandboxes</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: Live Telemetry Phone Screen for the Active Pillar */}
              <div className="md:col-span-7">
                <div className="p-6 rounded-2xl bg-black/75 border border-white/15 text-left space-y-4 shadow-inner">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-white">
                      <currentPillar.icon className="w-4 h-4 text-white" />
                      <span className="font-bold uppercase tracking-wider">{currentPillar.preview.headline}</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
                      {currentPillar.preview.metric}
                    </span>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-white mb-2">
                      {currentPillar.preview.snippet}
                    </div>
                    <p className="text-xs font-mono text-zinc-300 whitespace-pre-line leading-relaxed bg-white/[0.03] p-3.5 rounded-xl border border-white/05">
                      {currentPillar.preview.detail}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                    <span>Active Campus Context Synced</span>
                    <span className="text-zinc-500">Tap pillars above to switch</span>
                  </div>
                </div>
              </div>
            </div>
          </Card3D>
        </div>

        {/* Journey Transition to Stage 04 */}
        <JourneyNextButton
          targetId="features"
          stageNumber="04"
          stageTitle="Interact with Features"
          description="Deep-dive into live interactive sandboxes for Finance, OCR Timetable, Tasks, and Ledgers."
        />
      </div>
    </section>
  );
}
