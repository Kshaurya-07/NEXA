import React, { useState } from 'react';
import { 
  Mail, Brain, AlertCircle, CheckSquare, Calendar, Bell, 
  ArrowRight, Play, RefreshCw, CheckCircle2, Sparkles
} from 'lucide-react';
import Card3D from './shared/Card3D';

export default function EverythingConnected() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const pipeline = [
    {
      step: '01',
      title: 'UNIVERSITY EMAIL',
      subtitle: 'Raw Incoming Signal',
      icon: Mail,
      content: 'Email from Dean: "All CS-301 students must submit Term Paper Draft by Friday Oct 16, 5:00 PM to ERP."',
      badge: 'Unstructured Data',
    },
    {
      step: '02',
      title: 'NIA UNDERSTANDS',
      subtitle: 'Autonomous Parsing',
      icon: Brain,
      content: 'Entities recognized: Subject = CS-301, Item = Term Paper Draft, Due Date = Oct 16 5:00 PM, Target = ERP.',
      badge: 'Cognitive Layer',
    },
    {
      step: '03',
      title: 'DEADLINE DETECTED',
      subtitle: 'Severity Classification',
      icon: AlertCircle,
      content: 'Assigned Priority: EXTREMELY IMPORTANT. Weightage: 20% of final semester grade. Time remaining: 9 days.',
      badge: 'Risk Assessment',
    },
    {
      step: '04',
      title: 'TASK CREATED',
      subtitle: 'Direct Mutation',
      icon: CheckSquare,
      content: 'Generated actionable task: "Draft CS-301 Paper" with checklist: Literature Review, Method, Conclusion.',
      badge: 'Task Manager',
    },
    {
      step: '05',
      title: 'CALENDAR UPDATED',
      subtitle: 'Schedule Balancing',
      icon: Calendar,
      content: 'Automatically blocked 2-hour writing sprint on Thursday afternoon (LH-3 free window detected).',
      badge: 'Smart Calendar',
    },
    {
      step: '06',
      title: 'SMART REMINDER',
      subtitle: 'Gentle Pacing Notification',
      icon: Bell,
      content: '"You have 2 hours free before DBMS lab. Good time to complete CS-301 Draft."',
      badge: 'Proactive Alert',
    },
  ];

  const handleRunCascade = () => {
    setIsPlaying(true);
    setActiveStep(0);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < pipeline.length) {
        setActiveStep(step);
      } else {
        clearInterval(interval);
        setIsPlaying(false);
      }
    }, 1100);
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-transparent via-[#08080e]/80 to-transparent">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-white/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest text-zinc-400 uppercase mb-4">
            THE CONNECTED GRAPH
          </div>
          <h2 className="font-['Syncopate'] text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white leading-tight">
            EVERYTHING IS CONNECTED
          </h2>

          <div className="mt-6 p-4 rounded-xl bg-white/[0.03] border border-white/10 max-w-xl mx-auto">
            <p className="font-['Syncopate'] text-base sm:text-lg font-bold text-white uppercase tracking-wider">
              "ONE PIECE OF INFORMATION. <br />
              <span className="text-zinc-400">MULTIPLE USEFUL ACTIONS."</span>
            </p>
          </div>

          <p className="mt-4 text-zinc-400 text-sm sm:text-base font-light max-w-2xl mx-auto">
            Watch how a single university email automatically ripples through NIA into calendar reservations, prioritised tasks, and gentle reminders without touching a single button.
          </p>

          {/* Interactive Trigger Button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleRunCascade}
              disabled={isPlaying}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-all shadow-[0_0_25px_rgba(255,255,255,0.3)] disabled:opacity-50"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{isPlaying ? 'Executing Autonomous Cascade...' : 'Simulate Email → Action Cascade'}</span>
            </button>
          </div>
        </div>

        {/* 6-Node Visual Cascade Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {pipeline.map((item, idx) => {
            const Icon = item.icon;
            const isCurrent = activeStep === idx;
            const isCompleted = activeStep > idx;

            return (
              <Card3D
                key={item.step}
                depth={8}
                onClick={() => setActiveStep(idx)}
                className={`p-6 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-white/15 border-white/40 shadow-[0_0_35px_rgba(255,255,255,0.18)] scale-[1.02]'
                    : isCompleted
                    ? 'bg-[#0f0f18]/80 border-white/20'
                    : 'bg-[#09090e]/60 border-white/05 opacity-60'
                }`}
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-lg ${isCurrent ? 'bg-white text-black' : 'bg-white/10 text-white'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-xs text-white font-bold tracking-wider">
                        STEP {item.step}
                      </span>
                    </div>

                    <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-white/10 text-zinc-300 border border-white/10">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <div className="text-[10px] text-zinc-400 font-mono mb-3">
                    {item.subtitle}
                  </div>

                  <p className="text-xs text-zinc-200 font-mono leading-relaxed bg-white/[0.02] p-3 rounded-xl border border-white/05">
                    {item.content}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/05 flex items-center justify-between text-[10px] font-mono">
                  <span className="text-zinc-500">Autonomous Link #{idx + 1}</span>
                  {isCompleted && (
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      COMPLETED
                    </span>
                  )}
                  {isCurrent && (
                    <span className="text-white flex items-center gap-1 font-bold animate-pulse">
                      <Sparkles className="w-3 h-3" />
                      EXECUTING NOW
                    </span>
                  )}
                </div>
              </Card3D>
            );
          })}
        </div>
      </div>
    </section>
  );
}
