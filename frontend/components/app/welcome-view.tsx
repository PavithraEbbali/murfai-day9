import { Button } from '@/components/livekit/button';

function CyberMicIcon() {
  return (
    <div className="relative mb-4 group scale-75 transform-gpu"> 
      {/* Reduced scale to 0.75 to save space */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-32 w-32 rounded-full border-2 border-primary/30 border-t-primary animate-spin [animation-duration:3s]" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-24 w-24 rounded-full border-2 border-accent/30 border-b-accent animate-spin [animation-duration:5s] direction-reverse" />
      </div>
      
      <div className="relative z-10 flex items-center justify-center bg-background/50 backdrop-blur-md rounded-full p-3 border border-white/10 shadow-[0_0_30px_-5px_var(--color-primary)]">
        <svg className="h-12 w-12 text-primary group-hover:text-accent transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      </div>
    </div>
  );
}

function LightningIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

interface WelcomeViewProps {
  startButtonText: string;
  onStartCall: () => void;
}

export const WelcomeView = ({
  startButtonText,
  onStartCall,
  ref,
}: React.ComponentProps<'div'> & WelcomeViewProps) => {
  return (
    <div ref={ref} className="h-screen w-full bg-background relative overflow-hidden font-sans flex flex-col items-center justify-center">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 mask-image-gradient-b"></div>
      <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full mix-blend-screen animate-pulse"></div>
      
      {/* MAIN CONTENT WRAPPER - tightly packed */}
      <section className="relative z-10 w-full max-w-4xl mx-auto px-4 flex flex-col items-center gap-6">
        
        {/* 1. Header Section */}
        <div className="flex flex-col items-center text-center">
          <CyberMicIcon />
          
          <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-[10px] font-mono tracking-widest uppercase mb-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
            </span>
            System Online
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-accent drop-shadow-sm leading-tight">
            COMEDY ARENA
          </h1>
          
          <p className="text-base md:text-lg text-muted-foreground font-light tracking-wide mt-2">
            Man vs. Machine. <span className="text-primary font-medium">Improv Battle.</span>
          </p>
        </div>

        {/* 2. Compact Cards Section */}
        <div className="grid grid-cols-3 gap-3 w-full max-w-3xl">
            {[
                { icon: "🎲", title: "Generate", desc: "Get a chaotic scenario.", color: "border-primary/40" },
                { icon: "🎙️", title: "Perform", desc: "Act it out via voice.", color: "border-accent/40" },
                { icon: "🤖", title: "Judge", desc: "AI rates your logic.", color: "border-primary/40" }
            ].map((item, i) => (
                <div key={i} className={`group bg-card/40 backdrop-blur-sm border ${item.color} p-3 rounded-xl hover:bg-card/60 transition-all text-center`}>
                    <div className="text-xl mb-1 grayscale group-hover:grayscale-0">{item.icon}</div>
                    <h3 className="text-sm font-bold text-foreground font-mono uppercase">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-tight mt-1">{item.desc}</p>
                </div>
            ))}
        </div>

        {/* 3. Action Section */}
        <div className="mt-2">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-30 group-hover:opacity-80 transition duration-200"></div>
            <Button 
              onClick={onStartCall}
              size="lg"
              className="relative px-8 py-6 bg-background border border-primary/50 text-foreground font-mono text-lg uppercase tracking-widest hover:bg-background/80 hover:text-primary transition-all shadow-xl"
            >
              {startButtonText}
              <LightningIcon className="ml-2 w-4 h-4 text-accent" />
            </Button>
          </div>
          
          <div className="mt-4 text-[10px] text-muted-foreground font-mono text-center opacity-60">
             v2.0.4 // MIC PERMISSION REQUIRED
          </div>
        </div>

      </section>
    </div>
  );
};