import { ArrowDown, FileText, Rocket, Cpu, Layers, Bot, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const keyHighlights = [
  { icon: Cpu, label: "7+ Yrs AI Architecture" },
  { icon: Layers, label: "Enterprise RAG" },
  { icon: Bot, label: "Autonomous Agents" },
  { icon: Zap, label: "Sub-Second Inference" },
];

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center justify-center pt-32 sm:pt-36 md:pt-40 pb-16 md:pb-20 overflow-hidden bg-slate-50/80 dark:bg-[#07090E] transition-colors duration-300"
    >
      {/* Background radial top aura */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_-10%,rgba(56,189,248,0.16),rgba(99,102,241,0.08),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(14,165,233,0.12),transparent)]" />
      <div className="absolute inset-0 z-0 professional-grid opacity-[0.05] dark:opacity-[0.14]" />

      {/* Primary ambient glow */}
      <div className="absolute top-[26%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[420px] bg-sky-400/12 dark:bg-cyan-500/[0.07] rounded-full blur-[150px] z-0 pointer-events-none" />
      {/* Secondary indigo accent glow */}
      <div className="absolute top-[40%] left-[25%] w-[450px] h-[320px] bg-indigo-400/[0.09] dark:bg-indigo-500/[0.05] rounded-full blur-[130px] z-0 pointer-events-none" />

      {/* Crisp dot grid pattern overlay */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px] opacity-60 dark:opacity-100 pointer-events-none" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6 sm:space-y-7 pt-2 md:pt-4">

          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-800 shadow-sm shadow-slate-200/70 dark:bg-slate-800/50 dark:border-slate-700/60 dark:text-slate-200 dark:shadow-none backdrop-blur-md transition-all duration-300 hover:border-emerald-500/40">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 dark:bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 dark:bg-emerald-400"></span>
              </span>
              <span className="text-[13px] font-semibold tracking-wide">
                Open to Senior GenAI & AI Roles
              </span>
            </div>
          </motion.div>

          {/* Majestic 2-Line Headline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="space-y-4 sm:space-y-5 max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] font-bold tracking-[-0.03em] leading-[1.14] text-center">
              <span className="block text-slate-900 dark:text-white">
                Building Intelligent Systems
              </span>
              <span className="block mt-1 sm:mt-1.5 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-300 dark:via-sky-300 dark:to-indigo-300 bg-clip-text text-transparent">
                From Research to Production
              </span>
            </h1>

            {/* Subtitle - Clean, uniform, elegant readability */}
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed font-normal pt-1">
              GenAI Engineer & Researcher with 7+ years architecting enterprise RAG pipelines, autonomous agents, and high-throughput AI platforms.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="flex flex-wrap items-center justify-center gap-3.5 pt-2 sm:pt-3"
          >
            <Button
              size="lg"
              className="bg-slate-900 text-white hover:bg-slate-800 shadow-md shadow-slate-900/15 dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-600 dark:hover:from-cyan-400 dark:hover:to-blue-500 dark:text-white dark:shadow-[0_4px_20px_-4px_rgba(6,182,212,0.4)] font-semibold h-11 px-7 rounded-xl text-sm transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
              onClick={() => document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Rocket className="w-4 h-4 text-white" />
              Explore Architecture
              <ArrowDown className="w-3.5 h-3.5 opacity-70" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="group h-11 px-7 rounded-xl border-slate-300/90 bg-white hover:bg-slate-100 hover:text-slate-950 hover:border-slate-400 text-slate-800 shadow-sm dark:border-slate-700/80 dark:bg-slate-800/40 dark:hover:bg-slate-800 dark:hover:text-white dark:hover:border-slate-600 dark:text-white text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 backdrop-blur-md"
              onClick={() => window.open("/Resume.pdf", "_blank")}
            >
              <FileText className="w-4 h-4 text-slate-500 group-hover:text-slate-950 dark:text-slate-400 dark:group-hover:text-white transition-colors" />
              <span>Download Resume</span>
            </Button>
          </motion.div>

          {/* Architectural Key Competency Strip */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="pt-2 sm:pt-3"
          >
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {keyHighlights.map((h, i) => {
                const IconComponent = h.icon;
                return (
                  <div
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200/90 text-slate-700 shadow-sm shadow-slate-200/50 dark:bg-slate-800/40 dark:border-slate-700/50 dark:text-slate-300 dark:shadow-none text-xs font-semibold"
                  >
                    <IconComponent className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                    <span>{h.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Scroll Prompt */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="pt-4 sm:pt-5"
          >
            <button
              onClick={() => document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex flex-col items-center gap-2 text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 transition-colors focus:outline-none"
            >
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase">Scroll to Explore</span>
              <div className="w-5 h-8 rounded-full border border-slate-300 dark:border-slate-600 flex items-start justify-center p-1 group-hover:border-slate-400 dark:group-hover:border-slate-400 transition-colors">
                <motion.div
                  className="w-1 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;