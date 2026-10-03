import { useRef } from "react";
import { motion, useSpring } from "framer-motion";
import {
  Sparkles,
  Cpu,
  Workflow,
  BarChart3,
  Database,
  Wand2,
  Layers,
  Video,
  TrendingUp,
  Code2,
  CheckCircle2,
  ArrowRight,
  Zap,
} from "lucide-react";
import { useReducedMotion } from "../hooks/useReducedMotion";

/* =========================================================================
   1. AI SKILLS — Interactive Holographic AI Studio
   ========================================================================= */
function AiStudioVisual() {
  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-gradient-to-b from-[#0B0F19] via-[#0D1224] to-[#0A0D18] p-4 text-white select-none">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -top-10 left-1/2 h-44 w-72 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 right-10 h-36 w-36 rounded-full bg-violet-600/20 blur-2xl" />

      {/* Top Console Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse" />
          <span className="font-mono text-[10px] font-semibold tracking-wider text-slate-300 uppercase">
            AI Creative Studio · Engine v4
          </span>
        </div>
        <span className="rounded-md border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 font-mono text-[9px] font-bold tracking-wider text-cyan-300 uppercase">
          Neural Core
        </span>
      </div>

      {/* Center 3D Holographic Orb & Particle Orbit */}
      <div className="relative my-auto flex h-24 items-center justify-center">
        {/* Outer Orbit Track */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          className="absolute h-24 w-24 rounded-full border border-indigo-400/25"
          style={{ borderStyle: "dashed" }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          className="absolute h-18 w-18 rounded-full border border-cyan-400/30"
        />

        {/* Orbiting Satellite Dots */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute h-24 w-24"
        >
          <span className="absolute top-0 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_#67e8f9]" />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute h-18 w-18"
        >
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_10px_#a78bfa]" />
        </motion.div>

        {/* Central Glowing Luminescent Orb */}
        <motion.div
          animate={{
            scale: [1, 1.06, 1],
            boxShadow: [
              "0 0 25px rgba(59, 130, 246, 0.45)",
              "0 0 45px rgba(147, 51, 234, 0.55)",
              "0 0 25px rgba(59, 130, 246, 0.45)",
            ],
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-600 to-violet-600 shadow-2xl"
        >
          <div className="absolute inset-0.5 rounded-2xl bg-gradient-to-tr from-white/35 via-transparent to-transparent opacity-80" />
          <Sparkles className="h-6 w-6 text-white drop-shadow-md" />
        </motion.div>
      </div>

      {/* Interactive Workflow Capabilities Shelf */}
      <div className="relative z-10 space-y-2">
        <div className="grid grid-cols-4 gap-1.5 text-center">
          {[
            { label: "Prompt", icon: Wand2, color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10" },
            { label: "Design", icon: Layers, color: "text-blue-400 border-blue-500/30 bg-blue-500/10" },
            { label: "Video", icon: Video, color: "text-violet-400 border-violet-500/30 bg-violet-500/10" },
            { label: "Growth", icon: TrendingUp, color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10" },
          ].map((item) => (
            <div
              key={item.label}
              className={`flex items-center justify-center gap-1 rounded-lg border px-1.5 py-1 text-[9px] font-bold tracking-wider uppercase backdrop-blur-sm ${item.color}`}
            >
              <item.icon className="h-2.5 w-2.5" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Live Prompt Status Terminal */}
        <div className="flex items-center justify-between rounded-lg border border-white/10 bg-black/40 px-2.5 py-1.5 font-mono text-[10px] text-slate-300">
          <span className="flex items-center gap-1.5 truncate text-slate-400">
            <span className="text-cyan-400 font-bold">&gt;</span>
            <span className="truncate text-cyan-200">ai.buildCampaign()</span>
          </span>
          <span className="ml-2 shrink-0 font-bold text-emerald-400">DONE 100%</span>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   2. CODING + AI AUTOMATION — Developer Copilot Studio
   ========================================================================= */
function CodeStudioVisual() {
  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-gradient-to-b from-[#0C101A] via-[#0E1320] to-[#0A0D16] p-4 text-white select-none">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -top-10 left-1/2 h-44 w-72 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />

      {/* Window Controls Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="ml-1.5 font-mono text-[10px] font-semibold text-slate-300">
            workflow.ts · AI Copilot
          </span>
        </div>
        <span className="flex items-center gap-1 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[9px] font-bold text-emerald-300">
          <CheckCircle2 className="h-2.5 w-2.5" />
          BUILD: PASS
        </span>
      </div>

      {/* Syntax Highlighted IDE Workspace */}
      <div className="relative z-10 my-auto rounded-lg border border-white/5 bg-black/45 p-2.5 font-mono text-[11px] leading-relaxed">
        <div className="flex items-start gap-2.5">
          <div className="select-none text-slate-600 text-right pr-1.5 border-r border-white/10 font-mono text-[10px]">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
          <div className="flex-1 overflow-hidden">
            <div>
              <span className="text-pink-400">import</span> &#123; <span className="text-indigo-300">aiCopilot</span>, <span className="text-indigo-300">deploy</span> &#125; <span className="text-pink-400">from</span> <span className="text-emerald-300">&quot;@brandsway&quot;</span>;
            </div>
            <div>
              <span className="text-pink-400">const</span> <span className="text-yellow-300">app</span> = <span className="text-pink-400">await</span> aiCopilot.<span className="text-blue-300">buildApp</span>();
            </div>
            <div>
              <span className="text-pink-400">await</span> deploy.<span className="text-blue-300">automate</span>(app, &#123; <span className="text-slate-400">live:</span> <span className="text-cyan-300">true</span> &#125;);
            </div>
            <div className="text-slate-500 italic text-[10px]">
              // Status: 0 errors · Port 3000 Active
            </div>
          </div>
        </div>
      </div>

      {/* Automated Pipeline Flow Bar */}
      <div className="relative z-10 space-y-2">
        <div className="flex items-center justify-between rounded-lg border border-white/10 bg-black/30 px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-slate-300">
          <div className="flex items-center gap-1.5 text-indigo-300 font-bold">
            <Code2 className="h-3 w-3" />
            <span>Code</span>
          </div>
          <ArrowRight className="h-2.5 w-2.5 text-slate-500" />
          <div className="flex items-center gap-1.5 text-cyan-300 font-bold">
            <Cpu className="h-3 w-3" />
            <span>AI Model</span>
          </div>
          <ArrowRight className="h-2.5 w-2.5 text-slate-500" />
          <div className="flex items-center gap-1.5 text-purple-300 font-bold">
            <Workflow className="h-3 w-3" />
            <span>Automate</span>
          </div>
          <ArrowRight className="h-2.5 w-2.5 text-slate-500" />
          <div className="flex items-center gap-1 text-emerald-400 font-bold">
            <Zap className="h-3 w-3" />
            <span>Live</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   3. DATA ANALYTICS — Linear/Stripe-tier Insights Visualizer
   ========================================================================= */
function DataAnalyticsVisual() {
  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-gradient-to-b from-[#090D16] via-[#0A101C] to-[#070A12] p-4 text-white select-none">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-10 left-1/2 h-44 w-72 -translate-x-1/2 rounded-full bg-cyan-600/20 blur-3xl" />

      {/* Subtle coordinate grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(to right, #06b6d4 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2">
        <div className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-md bg-cyan-500/20 text-cyan-400">
            <BarChart3 className="h-3 w-3" />
          </span>
          <span className="font-mono text-[10px] font-semibold tracking-wider text-slate-300 uppercase">
            Data Insights Model
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[9px] font-bold text-emerald-300">
            +128.4% YoY
          </span>
        </div>
      </div>

      {/* 3D Volumetric Bar Columns & Spline Curve */}
      <div className="relative z-10 my-auto flex h-24 items-end justify-between gap-2 px-1">
        {[
          { label: "SQL", height: 48, color: "from-cyan-500 to-blue-500" },
          { label: "Excel", height: 65, color: "from-blue-500 to-indigo-500" },
          { label: "BI", height: 80, color: "from-indigo-500 to-teal-500" },
          { label: "Python", height: 96, color: "from-teal-400 to-emerald-500" },
          { label: "Stats", height: 74, color: "from-emerald-400 to-cyan-400" },
        ].map((bar, i) => (
          <div key={bar.label} className="flex flex-1 flex-col items-center gap-1.5">
            {/* Explicit pixel height container to ensure 100% reliable rendering */}
            <div className="relative flex h-18 w-full items-end justify-center">
              <motion.div
                initial={{ height: "25%" }}
                animate={{
                  height: [`${bar.height}%`, `${bar.height - 15}%`, `${bar.height}%`],
                }}
                transition={{
                  duration: 3.2 + i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`w-full max-w-[28px] rounded-t-md bg-gradient-to-t ${bar.color} shadow-lg shadow-cyan-500/20`}
              >
                <div className="h-1 w-full rounded-t-md bg-white/40" />
              </motion.div>
            </div>
            <span className="font-mono text-[9px] text-slate-400 uppercase tracking-wider">
              {bar.label}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom Data Pipeline Strip */}
      <div className="relative z-10 flex items-center justify-between rounded-lg border border-white/10 bg-black/40 px-2.5 py-1.5 font-mono text-[10px] text-slate-300">
        <span className="flex items-center gap-1 text-cyan-300">
          <Database className="h-3 w-3 text-cyan-400" />
          <span>SELECT * FROM insights</span>
        </span>
        <span className="text-[9px] font-bold text-emerald-400">14ms · 1.4M ROWS</span>
      </div>
    </div>
  );
}

/* =========================================================================
   4. AI ENGINEERING MASTERY — Agent Workflow Visualizer
   ========================================================================= */
function AiEngineeringVisual() {
  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-gradient-to-b from-[#0A051A] via-[#10072B] to-[#0A0516] p-4 text-white select-none">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-10 left-1/2 h-44 w-72 -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-32 w-32 rounded-full bg-fuchsia-600/20 blur-3xl" />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2">
        <div className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-md bg-violet-500/20 text-violet-400">
            <Cpu className="h-3 w-3" />
          </span>
          <span className="font-mono text-[10px] font-semibold tracking-wider text-slate-300 uppercase">
            Agent Workflow
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="rounded-md border border-fuchsia-500/30 bg-fuchsia-500/10 px-2 py-0.5 font-mono text-[9px] font-bold text-fuchsia-300 flex items-center gap-1">
            <span className="flex h-1.5 w-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
            LIVE
          </span>
        </div>
      </div>

      {/* Center 3D Nodes Network */}
      <div className="relative z-10 my-auto flex h-24 items-center justify-center">
        {/* Core Node (LLM) */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 15px rgba(139, 92, 246, 0.4)", "0 0 25px rgba(139, 92, 246, 0.6)", "0 0 15px rgba(139, 92, 246, 0.4)"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[10%] flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-700 shadow-lg border border-violet-400/50 z-20"
        >
          <Wand2 className="h-4 w-4 text-white" />
        </motion.div>

        {/* API Node */}
        <motion.div
          className="absolute left-[35%] flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-pink-600 shadow-lg border border-fuchsia-400/50 z-20"
        >
          <Workflow className="h-3.5 w-3.5 text-white" />
        </motion.div>

        {/* RAG Node */}
        <motion.div
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[60%] flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 shadow-lg border border-indigo-400/50 z-20"
        >
          <Database className="h-4 w-4 text-white" />
        </motion.div>

        {/* Automation Node */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute left-[85%] flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 shadow-lg border border-cyan-400/50 z-20"
        >
          <Zap className="h-4 w-4 text-white" />
        </motion.div>

        {/* Connecting Lines */}
        <svg className="absolute inset-0 h-full w-full pointer-events-none z-10">
          {/* Path 1: LLM to API */}
          <path d="M 15% 50% L 35% 50%" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="2" strokeDasharray="4 4" />
          <motion.circle r="1.5" fill="#c084fc" animate={{ cx: ["15%", "35%"], cy: ["50%", "50%"] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} />
          
          {/* Path 2: API to RAG */}
          <path d="M 35% 50% L 60% 50%" stroke="rgba(217, 70, 239, 0.4)" strokeWidth="2" strokeDasharray="4 4" />
          <motion.circle r="1.5" fill="#e879f9" animate={{ cx: ["35%", "60%"], cy: ["50%", "50%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }} />

          {/* Path 3: RAG to Auto */}
          <path d="M 60% 50% L 85% 50%" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="2" strokeDasharray="4 4" />
          <motion.circle r="1.5" fill="#818cf8" animate={{ cx: ["60%", "85%"], cy: ["50%", "50%"] }} transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: 1 }} />
        </svg>

        {/* Floating Data Embeddings */}
        <motion.div
          animate={{ y: [0, -10, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-1 left-[50%] h-1.5 w-4 rounded-full bg-indigo-400/60 blur-[1px]"
        />
        <motion.div
          animate={{ y: [0, 8, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-2 left-[70%] h-1.5 w-3 rounded-full bg-cyan-400/60 blur-[1px]"
        />
      </div>

      {/* Bottom Data Pipeline Strip */}
      <div className="relative z-10 flex items-center justify-between rounded-lg border border-white/10 bg-black/40 px-2.5 py-1.5 font-mono text-[9px] text-slate-300">
        <span className="flex items-center gap-1.5 text-violet-300">
          <Code2 className="h-3 w-3 text-violet-400" />
          <span>agent.execute(workflow)</span>
        </span>
        <span className="text-[9px] font-bold text-fuchsia-400 animate-pulse">DEPLOYED</span>
      </div>
    </div>
  );
}

/* =========================================================================
   Main Export Component with Smooth Tilt Tracking
   ========================================================================= */
export default function Course3DVisual({ course, className = "", isInteractive = true }) {
  const containerRef = useRef(null);
  const reducedMotion = useReducedMotion();

  // Mouse tilt tracking springs
  const rotateX = useSpring(0, { stiffness: 160, damping: 22 });
  const rotateY = useSpring(0, { stiffness: 160, damping: 22 });

  const handleMouseMove = (e) => {
    if (reducedMotion || !isInteractive || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    rotateX.set(-y * 0.06);
    rotateY.set(x * 0.06);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const renderVisual = () => {
    if (course?.id === "ai-skills" || course?.slug?.includes("ai-skills")) {
      return <AiStudioVisual />;
    }
    if (course?.id === "coding-ai" || course?.slug?.includes("coding-ai")) {
      return <CodeStudioVisual />;
    }
    if (course?.id === "ai-engineering" || course?.slug?.includes("ai-engineering")) {
      return <AiEngineeringVisual />;
    }
    return <DataAnalyticsVisual />;
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: reducedMotion ? 0 : rotateX,
        rotateY: reducedMotion ? 0 : rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative h-60 w-full select-none ${className}`}
    >
      {renderVisual()}
    </motion.div>
  );
}
