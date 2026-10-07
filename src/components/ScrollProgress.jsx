import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? Math.min(100, (window.scrollY / total) * 100) : 0);
      setShowTop(window.scrollY > 600);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Thin scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-white/5" aria-hidden="true">
        <div
          className="h-full bg-violet-500 shadow-[0_0_12px_rgba(139,92,246,0.8)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Back-to-top button */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-24 right-6 z-50 w-11 h-11 rounded-full bg-violet-500 hover:bg-violet-400 text-white flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all animate-fadeIn"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
