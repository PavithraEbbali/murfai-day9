import { forwardRef } from 'react';
import { Button } from '@/components/livekit/button';

// --- Icons (Tech/Geometric Style) ---

function BrainCircuitIcon() {
  return (
    <div className="relative mb-10 group">
      {/* Outer Rotating Ring */}
      <div className="absolute inset-0 -m-4 border border-cyan-500/30 rounded-full animate-[spin_10s_linear_infinite]" />
      <div className="absolute inset-0 -m-4 border border-cyan-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse] scale-110" />
      
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-full group-hover:bg-cyan-400/30 transition-all duration-500" />

      {/* Main Icon */}
      <div className="relative h-24 w-24 bg-slate-900 rounded-2xl border border-cyan-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)] backdrop-blur-md">
        <svg className="h-12 w-12 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
        
        {/* Tech Accents */}
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-violet-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>
    </div>
  );
}

function ScanIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H5v3a1 1 0 01-2 0V4zM20 4a1 1 0 00-1-1h-4a1 1 0 000 2h3v3a1 1 0 002 0V4zM3 20a1 1 0 001 1h4a1 1 0 000-2H5v-3a1 1 0 00-2 0v3zM20 20a1 1 0 01-1 1h-4a1 1 0 010-2h3v-3a1 1 0 012 0v3zM12 8v8M8 12h8" />
    </svg>
  );
}

// --- Main Component ---

interface WelcomeViewProps extends React.ComponentProps<'div'> {
  startButtonText: string;
  onStartCall: () => void;
}

export const WelcomeView = forwardRef<HTMLDivElement, WelcomeViewProps>(
  ({ startButtonText, onStartCall, className, ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className="min-h-screen bg-[#050B14] relative overflow-hidden flex flex-col items-center justify-center font-sans text-slate-100"
        {...props}
      >
        {/* Background Grid & Cyber Effects */}
        <div className="absolute inset-0 z-0">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
          
          {/* Spotlight */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-900/20 blur-[100px] rounded-full" />
        </div>

        <div className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center text-center">
          
          <BrainCircuitIcon />

          <div className="space-y-4 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-800 bg-cyan-950/30 text-cyan-400 text-xs tracking-[0.2em] uppercase font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              System Online
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              Nova<span className="text-cyan-400">Cart</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto leading-relaxed">
              Experience the next generation of commerce. 
              <span className="block text-cyan-200/80 mt-1">Powered by Neural Voice Synthesis.</span>
            </p>
          </div>

          {/* Tech Specs / Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-12">
            {[
              { title: "Semantic Search", desc: "Context-aware product discovery", icon: "⦿" },
              { title: "Voice Checkout", desc: "Secure biometric authentication", icon: "◈" },
              { title: "Real-time Analytics", desc: "Live inventory tracking", icon: "⚡" }
            ].map((feature, idx) => (
              <div key={idx} className="group bg-slate-900/50 border border-slate-800 p-4 rounded-lg hover:border-cyan-500/50 transition-colors duration-300">
                <div className="text-cyan-500 text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="font-semibold text-slate-200 text-sm">{feature.title}</h3>
                <p className="text-xs text-slate-500 mt-1">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Control Interface */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-lg blur opacity-20 group-hover:opacity-50 transition duration-1000"></div>
            <Button
              variant="default"
              size="lg"
              onClick={onStartCall}
              className="relative w-full md:w-80 h-14 bg-slate-950 text-cyan-50 border border-cyan-800 hover:bg-cyan-950 hover:border-cyan-400 transition-all uppercase tracking-widest text-sm font-bold flex items-center justify-center gap-3"
            >
              <ScanIcon className="w-5 h-5" />
              Initialize Session
            </Button>
          </div>
          
          <div className="mt-6 font-mono text-[10px] text-slate-600 uppercase tracking-widest">
            v2.4.0 • Secure Connection • 12ms Latency
          </div>

        </div>
      </div>
    );
  }
);

WelcomeView.displayName = 'WelcomeView';