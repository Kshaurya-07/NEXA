import React, { useState } from 'react';
import { 
  Brain, FileSearch, FileText, Share2, Search, Sparkles, 
  Bell, MessageSquare, FolderKanban, HelpCircle, CheckSquare,
  ArrowRight, Terminal
} from 'lucide-react';
import Card3D from './shared/Card3D';

export default function NiaCapabilities() {
  const capabilities = [
    {
      id: 'understand',
      name: 'Understand',
      icon: Brain,
      tagline: 'Semantic intent decoding',
      exampleInput: 'Student: "Got midsems starting next Monday 10am."',
      output: 'NIA: Decoded 4 midsem exams, created priority prep blocks in study calendar.',
      telemetry: 'Confidence: 99.4% • Context: Exam Season • Priority: High'
    },
    {
      id: 'analyze',
      name: 'Analyze',
      icon: FileSearch,
      tagline: 'Deep syllabus & timetable evaluation',
      exampleInput: 'Student uploads messy PDF syllabus & attendance sheet.',
      output: 'NIA: Analyzed 5 course modules, flagged 75% attendance threshold risk in DBMS.',
      telemetry: 'OCR Tokens: 1,420 • Attendance Alert: 76.2% safe margin'
    },
    {
      id: 'summarize',
      name: 'Summarize',
      icon: FileText,
      tagline: 'Zero-fluff distillation of academic noise',
      exampleInput: 'Long 400-word university circular from Dean of Academics.',
      output: 'NIA: "Registration closes Friday 5 PM. ₹500 late fee thereafter."',
      telemetry: 'Compression: 92% • Action Required: Fee submission'
    },
    {
      id: 'connect',
      name: 'Connect',
      icon: Share2,
      tagline: 'Cross-domain student information fabric',
      exampleInput: 'Gmail notice → Assignment notice → Friend owed money for lab kit.',
      output: 'NIA: Connected lab kit expense (₹120) with pending Friday lab submission task.',
      telemetry: 'Graph Links: 3 Entities connected across Email & Finance'
    },
    {
      id: 'search',
      name: 'Search',
      icon: Search,
      tagline: 'Instant semantic lookup across your student life',
      exampleInput: 'Student: "Where is the submission link Prof Sharma sent last week?"',
      output: 'NIA: Found in Google Classroom email #4882 sent Oct 2nd at 3:14 PM.',
      telemetry: 'Query time: 18ms • Source: Gmail index • Match: Exact'
    },
    {
      id: 'recommend',
      name: 'Recommend',
      icon: Sparkles,
      tagline: 'Contextual smart pacing & gentle guidance',
      exampleInput: '2 assignments due in 48 hours + 3 morning classes tomorrow.',
      output: 'NIA: Recommends finishing DSA module tonight before 11 PM to prevent sleep deficit.',
      telemetry: 'Pacing Model: Cognitive load optimization active'
    },
    {
      id: 'remind',
      name: 'Remind',
      icon: Bell,
      tagline: 'Timely gentle notifications with real context',
      exampleInput: 'DBMS lab commences in 15 minutes across campus.',
      output: 'NIA: "DBMS Lab in 10 mins (Block B, Room 302). Don\'t forget your printout."',
      telemetry: 'Trigger: Geolocation / Schedule delta • Tone: Gentle'
    },
    {
      id: 'answer',
      name: 'Answer',
      icon: MessageSquare,
      tagline: 'Direct factual answers grounded in your reality',
      exampleInput: 'Student: "Do I have any pending dues with Arjun?"',
      output: 'NIA: "Yes, you owe Arjun ₹200 from Friday\'s group canteen bill."',
      telemetry: 'Ledger status: Unsettled • Quick Settle: Enabled'
    },
    {
      id: 'organize',
      name: 'Organize',
      icon: FolderKanban,
      tagline: 'Autonomous classification of academic chaos',
      exampleInput: 'Unsorted documents, random expenses, unassigned homework notes.',
      output: 'NIA: Structured into Semester 5 → Subject Folders & Monthly Spend Ledger.',
      telemetry: 'Classification: Automated • Manual sorting required: 0'
    },
    {
      id: 'assist',
      name: 'Assist',
      icon: HelpCircle,
      tagline: 'Real-time companion for daily student chores',
      exampleInput: 'Student: "Draft an email requesting sick leave for tomorrow\'s lab."',
      output: 'NIA: Drafted formal request tailored to Prof. Verma with course code CS-301.',
      telemetry: 'Context: Department guidelines verified'
    },
    {
      id: 'actions',
      name: 'Take Supported Actions',
      icon: CheckSquare,
      tagline: 'Dispatches real system state changes',
      exampleInput: 'Student: "Mark DSA assignment done and split dinner ₹600 with Rahul."',
      output: 'NIA: Marked task 100% complete; logged ₹300 pending debt from Rahul.',
      telemetry: 'Mutations: 2 Database records updated in 24ms'
    }
  ];

  const [selectedCap, setSelectedCap] = useState(capabilities[0]);

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest text-zinc-400 uppercase mb-4">
            CAPABILITY MATRIX
          </div>
          <h2 className="font-['Space_Grotesk'] font-semibold text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
            WHAT NIA CAN DO
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base font-light">
            NIA operates across 11 cognitive dimensions — processing raw university signals into immediate, structured student actions.
          </p>
        </div>

        {/* Interactive Capability Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Capability Pill Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              const isSelected = selectedCap.id === cap.id;
              return (
                <button
                  key={cap.id}
                  onClick={() => setSelectedCap(cap)}
                  className={`p-3.5 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between gap-3 group ${
                    isSelected
                      ? 'bg-white/15 border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.15)] scale-[1.02]'
                      : 'bg-white/[0.02] border-white/05 hover:bg-white/[0.06] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-white text-black' : 'bg-white/05 text-zinc-300 group-hover:text-white'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    )}
                  </div>
                  <div>
                    <div className={`text-xs font-semibold tracking-wide ${isSelected ? 'text-white' : 'text-zinc-300'}`}>
                      {cap.name}
                    </div>
                    <div className="text-[10px] text-zinc-500 font-mono mt-0.5 line-clamp-1">
                      {cap.tagline}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Live Floating Simulation Preview */}
          <div className="lg:col-span-5 sticky top-28">
            <Card3D depth={10} className="p-6 bg-[#0a0a10]/90 border-white/15 shadow-2xl">
              {/* Terminal Titlebar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-zinc-400" />
                  <span className="font-mono text-xs text-zinc-300 uppercase tracking-wider">
                    NIA LIVE REASONING • {selectedCap.name.toUpperCase()}
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-zinc-300 border border-white/10">
                  REALTIME
                </span>
              </div>

              {/* Input Simulation */}
              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/05">
                  <div className="text-[10px] uppercase font-mono text-zinc-500 mb-1">
                    Student Context / Prompt
                  </div>
                  <div className="text-xs text-zinc-200 font-mono leading-relaxed">
                    {selectedCap.exampleInput}
                  </div>
                </div>

                {/* Transition Arrow */}
                <div className="flex items-center justify-center my-1">
                  <div className="w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-white rotate-90" />
                  </div>
                </div>

                {/* NIA Output */}
                <div className="p-3.5 rounded-xl bg-white/10 border border-white/20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/05 rounded-full blur-xl pointer-events-none" />
                  <div className="text-[10px] uppercase font-mono text-zinc-400 mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-white" />
                    NIA Autonomous Execution
                  </div>
                  <div className="text-xs text-white font-medium leading-relaxed">
                    {selectedCap.output}
                  </div>
                </div>

                {/* Telemetry Footer */}
                <div className="pt-3 border-t border-white/05 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                  <span>TELEMETRY:</span>
                  <span className="text-zinc-300 text-right">{selectedCap.telemetry}</span>
                </div>
              </div>
            </Card3D>
          </div>
        </div>
      </div>
    </section>
  );
}
