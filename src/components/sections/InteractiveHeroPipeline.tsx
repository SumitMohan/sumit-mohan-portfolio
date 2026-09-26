import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Database,
  Cpu,
  ShieldCheck,
  Zap,
  ArrowRight,
  Code2,
  ExternalLink,
  Compass,
  Layers,
  ChevronRight,
  Terminal,
} from "lucide-react";

interface PipelineStep {
  title: string;
  description: string;
  icon: any;
  metric: string;
  tech: string;
}

interface PipelineScenario {
  id: string;
  label: string;
  url: string;
  tagline: string;
  techStack: string;
  query: string;
  steps: PipelineStep[];
  outputPreview: string;
}

const scenarios: PipelineScenario[] = [
  {
    id: "code2crack",
    label: "Code2Crack",
    url: "https://www.code2crack.com",
    tagline: "Multi-Tenant AI EdTech, Code Execution & Vision Proctoring Engine",
    techStack: "React 18 / Electron 39 / Capacitor 8 / Supabase",
    query: "Execute 5-language DP solution, analyze Big-O complexity, run TF.js proctoring frame check & stream Socratic hint",
    steps: [
      {
        title: "Multi-Language Sandbox",
        description: "Monaco Editor with 5-language execution, Pyodide ML/DL & sql.js WASM, ComplexityAnalyzer & plagiarism detection.",
        icon: Code2,
        metric: "5 Langs + WASM SQL",
        tech: "Monaco + Pyodide + Piston",
      },
      {
        title: "Vision AI Proctoring",
        description: "FaceMesh 3D head pose, MAR lip-movement variance, and COCO-SSD phone detection with rolling suspicion score.",
        icon: ShieldCheck,
        metric: "FaceMesh + COCO-SSD",
        tech: "TensorFlow.js + Electron 39",
      },
      {
        title: "Groq 120B & Voice",
        description: "Supabase Edge Functions routing to Groq gpt-oss-120b with adaptive backoff and whisper-large-v3-turbo STT.",
        icon: Cpu,
        metric: "gpt-oss-120b + Whisper",
        tech: "Supabase Edge + Groq",
      },
      {
        title: "Multi-Tenant & Offline",
        description: "White-label TenantBrandProvider, ps-list OS process monitor, and Dexie.js IndexedDB offline exam persistence.",
        icon: Layers,
        metric: "Zero Data Loss Queue",
        tech: "Dexie.js + Multi-Tenant",
      },
    ],
    outputPreview: "ComplexityAnalyzer: O(2^n) detected. Cache overlapping subproblems in 1D memo array for O(n). Proctoring Score: 0/100 (Verified Clean).",
  },
  {
    id: "astromology",
    label: "Astromology",
    url: "https://www.astromology.com",
    tagline: "Tara AI Assistant, Deterministic Vedic Kundli & Multi-Domain Hybrid RAG",
    techStack: "React 18 / Supabase pgvector / Deno Edge / i18next",
    query: "Analyze Vedic D1/D9 Kundli, active Saturn Mahadasha, and Chaldean Name-DOB alignment for career growth",
    steps: [
      {
        title: "Cosmic Grounding",
        description: "Vedic D1/D9/D10 charts, Vimshottari Mahadasha, Gochar transits, 36-Guna Milan & Chaldean/Pythagorean engine.",
        icon: Compass,
        metric: "D1/D9/D10 + Chaldean",
        tech: "expert-tools.ts Engine",
      },
      {
        title: "OpenAI Embeddings",
        description: "1536-dim L2-normalized vectors via text-embedding-3-small with intent routing across 5 knowledge domains.",
        icon: Brain,
        metric: "1536-dim L2 Vector",
        tech: "text-embedding-3-small",
      },
      {
        title: "pgvector Hybrid RAG",
        description: "Semantic cosine + keyword scoring in PostgreSQL filtered across 15+ metadata arrays for precision retrieval.",
        icon: Database,
        metric: "Semantic + Keyword",
        tech: "Supabase pgvector",
      },
      {
        title: "SSE Stream & Failover",
        description: "Cloudflare Turnstile-protected Deno Edge with deterministic chartPrefix injection, streaming Groq & Gemini in EN/HI.",
        icon: Zap,
        metric: "Real-Time SSE Stream",
        tech: "Groq LLaMA-3.3-70B + Gemini",
      },
    ],
    outputPreview: "Verified ChartPrefix: Capricorn Lagna | Saturn Mahadasha - Mercury Antardasha | 10th house transit activates leadership.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export const InteractiveHeroPipeline = () => {
  const [activeTab, setActiveTab] = useState<string>("code2crack");
  const currentScenario = scenarios.find((s) => s.id === activeTab) || scenarios[0];

  return (
    <div className="w-full max-w-[1120px] mx-auto mt-10">
      <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_20px_60px_-15px_rgba(0,0,0,0.08)] dark:bg-[#0a0f1a] dark:border-slate-800/60 dark:shadow-[0_24px_80px_-12px_rgba(0,0,0,0.6)]">

        {/* Subtle dot grid background */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, currentColor 0.5px, transparent 0.5px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Top accent bar */}
        <div className="h-[2px] w-full bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-blue-500/0 dark:via-cyan-400/60" />

        {/* Tab bar */}
        <div className="relative flex items-center justify-between px-7 md:px-9 py-4 border-b border-slate-100 dark:border-slate-800/60">
          <div className="flex items-center gap-1 p-1 rounded-lg bg-slate-100/80 border border-slate-200/60 dark:bg-slate-800/50 dark:border-slate-700/40">
            {scenarios.map((s) => {
              const isActive = activeTab === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveTab(s.id)}
                  className={`relative px-5 py-2 text-sm font-semibold rounded-md transition-all duration-200 ${
                    isActive
                      ? "text-slate-900 dark:text-white"
                      : "text-slate-400 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="arch-tab"
                      className="absolute inset-0 rounded-md bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] border border-slate-200/80 dark:bg-slate-700/60 dark:border-slate-600/50 dark:shadow-none"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{s.label}</span>
                </button>
              );
            })}
          </div>

          <a
            href={currentScenario.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-[13px] font-medium text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
          >
            Visit live site
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScenario.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative"
          >
            {/* Header */}
            <div className="px-7 md:px-9 pt-7 pb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[12px] font-mono text-slate-400 tracking-wide">
                  {currentScenario.techStack}
                </span>
              </div>
              <h3 className="text-[22px] md:text-[28px] font-bold text-slate-900 dark:text-white tracking-[-0.025em] leading-[1.2] mb-6">
                {currentScenario.tagline}
              </h3>

              {/* Input block - styled prompt */}
              <div className="rounded-xl bg-gradient-to-r from-slate-50 to-slate-50/50 border border-slate-200/80 dark:from-slate-800/50 dark:to-slate-800/30 dark:border-slate-700/40 px-5 py-3.5 flex items-start gap-3">
                <div className="flex items-center gap-2 shrink-0 mt-0.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-mono">
                    Input
                  </span>
                </div>
                <div className="h-4 w-px bg-slate-200 dark:bg-slate-700 shrink-0 mt-0.5" />
                <p className="text-[13.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  {currentScenario.query}
                </p>
              </div>
            </div>

            {/* Pipeline step cards with inline flow */}
            <div className="px-7 md:px-9 pb-7">
              {/* Section label */}
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent dark:from-slate-700 dark:to-transparent" />
                <span className="text-[10.5px] font-bold uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500 font-mono">
                  Pipeline Flow
                </span>
                <div className="h-px flex-1 bg-gradient-to-l from-slate-200 to-transparent dark:from-slate-700 dark:to-transparent" />
              </div>

              {/* Cards with flow arrows */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-0">
                {currentScenario.steps.map((step, idx) => {
                  const StepIcon = step.icon;
                  const isLast = idx === currentScenario.steps.length - 1;
                  return (
                    <div key={`${currentScenario.id}-${idx}`} className="flex items-stretch">
                      {/* Card */}
                      <motion.div
                        custom={idx}
                        initial="hidden"
                        animate="visible"
                        variants={cardVariants}
                        className="group relative flex flex-col flex-1 rounded-xl border border-slate-200/80 bg-white hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] dark:border-slate-700/50 dark:bg-slate-800/40 dark:hover:bg-slate-800/60 dark:hover:shadow-[0_8px_30px_-8px_rgba(6,182,212,0.04)] transition-all duration-300 hover:-translate-y-0.5"
                      >
                        {/* Card gradient top */}
                        <div className="h-[2px] rounded-t-xl bg-gradient-to-r from-cyan-400/50 via-blue-400/30 to-indigo-400/20 dark:from-cyan-500/50 dark:via-blue-500/30 dark:to-indigo-500/20" />

                        <div className="flex flex-col flex-1 p-5">
                          {/* Icon + Step */}
                          <div className="flex items-center justify-between mb-5">
                            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200/60 dark:from-cyan-500/10 dark:to-blue-500/10 dark:border-cyan-500/25 flex items-center justify-center group-hover:from-cyan-100 group-hover:to-blue-100 dark:group-hover:from-cyan-500/15 dark:group-hover:to-blue-500/15 transition-all duration-300 shadow-sm dark:shadow-none">
                              <StepIcon className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                            </div>
                            <div className="flex items-center gap-1.5">
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 dark:bg-emerald-500 animate-pulse" />
                              <span className="text-[10.5px] font-semibold text-slate-400 dark:text-slate-500 font-mono tracking-wide">
                                0{idx + 1}
                              </span>
                            </div>
                          </div>

                          {/* Title */}
                          <h4 className="text-[15px] font-bold text-slate-900 dark:text-white mb-2 leading-snug tracking-tight group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors duration-300">
                            {step.title}
                          </h4>

                          {/* Description */}
                          <p className="text-[13px] text-slate-500 dark:text-slate-300 leading-[1.65] mb-auto pb-4">
                            {step.description}
                          </p>

                          {/* Metrics - styled chips */}
                          <div className="pt-3 border-t border-slate-100 dark:border-slate-700/40 space-y-2">
                            <span className="inline-flex items-center text-[11.5px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200/60 dark:border-emerald-500/20 px-2.5 py-1 rounded-lg">
                              {step.metric}
                            </span>
                            <div className="text-[11px] text-slate-400 pl-0.5">
                              {step.tech}
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Arrow connector between cards (desktop only) */}
                      {!isLast && (
                        <div className="hidden lg:flex items-center justify-center w-6 shrink-0">
                          <div className="flex flex-col items-center gap-0.5">
                            <ChevronRight className="w-4 h-4 text-slate-300 dark:text-slate-600" />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Output section */}
            <div className="mx-7 md:mx-9 mb-7">
              <div className="rounded-xl bg-gradient-to-r from-slate-50 to-emerald-50/30 border border-slate-200/80 dark:from-slate-800/40 dark:to-emerald-900/10 dark:border-slate-700/50 p-5 flex flex-col sm:flex-row sm:items-start justify-between gap-5">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10.5px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider font-mono">
                      Production Output
                    </span>
                  </div>
                  <p className="text-[13.5px] text-slate-600 dark:text-slate-200 leading-relaxed">
                    {currentScenario.outputPreview}
                  </p>
                </div>
                <a
                  href={currentScenario.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 dark:from-cyan-500 dark:to-blue-500 dark:hover:from-cyan-400 dark:hover:to-blue-400 shadow-[0_2px_8px_-2px_rgba(6,182,212,0.4)] hover:shadow-[0_4px_16px_-4px_rgba(6,182,212,0.5)] transition-all shrink-0"
                >
                  Visit {currentScenario.label}
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default InteractiveHeroPipeline;
