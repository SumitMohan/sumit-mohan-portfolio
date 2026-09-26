import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Code2,
  ShieldCheck,
  Bot,
  LayoutDashboard,
  ArrowRight,
  Globe
} from "lucide-react";
import dashboardMockup from "@/assets/code2crack-dashboard.png";

const features = [
  {
    icon: Bot,
    title: "Groq 120B Tutoring & Voice Interview",
    description: "Socratic AI feedback with openai/gpt-oss-120b JSON reasoning, AutoExplanationEngine, and whisper-large-v3-turbo voice mock interview speech-to-text.",
    gradient: "from-purple-500 via-indigo-500 to-cyan-500",
  },
  {
    icon: Code2,
    title: "Multi-Language Sandbox & Complexity Analyzer",
    description: "Monaco Editor with 5-language test-runner (Python, JS, Java, C++, C), in-browser Pyodide ML/DL & sql.js WASM, plus Big-O Time/Space static complexity analysis.",
    gradient: "from-cyan-500 via-sky-500 to-blue-500",
  },
  {
    icon: ShieldCheck,
    title: "TensorFlow.js Vision AI Proctoring",
    description: "In-browser FaceMesh 3D head pose (yaw/pitch/roll), Mouth Aspect Ratio (MAR) lip movement tracking, and COCO-SSD object detection with rolling suspicion scoring.",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
  },
  {
    icon: LayoutDashboard,
    title: "Electron 39 Lockdown & Multi-Tenant LMS",
    description: "Native cross-platform lockdown browser (ps-list process inspection, virtual camera block) with Dexie.js offline persistence, Capacitor Android app, and white-label university portals.",
    gradient: "from-amber-500 via-orange-500 to-yellow-500",
  },
];

const platformStats = [
  { label: "Execution", value: "5 Langs + SQL", gradient: "from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400" },
  { label: "Vision Proctor", value: "TF.js + Electron", gradient: "from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400" },
  { label: "AI Engines", value: "Groq 120B + Whisper", gradient: "from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400" },
  { label: "Architecture", value: "Multi-Tenant", gradient: "from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400" },
];

const Code2CrackSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="code2crack" className="section-padding relative overflow-hidden bg-slate-50/50 dark:bg-[#07090E] transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[140px]" />
      </div>

      {/* Crisp dot grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="section-container relative z-10" ref={containerRef}>
        {/* Main Project Row */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center mb-16">
          {/* Dashboard Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/15 via-cyan-500/15 to-blue-500/15 rounded-2xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="relative p-2 rounded-2xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/60 dark:bg-slate-800 dark:border-slate-700/60 dark:shadow-none overflow-hidden">
                <img
                  src={dashboardMockup}
                  alt="Code2Crack EdTech & Vision AI Dashboard"
                  loading="lazy"
                  className="w-full h-auto rounded-xl object-cover group-hover:scale-[1.01] transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>

          {/* Details & Specs */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="section-badge mb-6 inline-flex items-center gap-1.5"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
            >
              <Globe className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              www.code2crack.com
            </motion.div>

            <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-slate-900 dark:text-white mb-3 leading-tight">
              <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-indigo-600 dark:from-cyan-400 dark:via-sky-300 dark:to-indigo-400 bg-clip-text text-transparent">
                Code2Crack
              </span>
            </h2>

            <p className="text-base md:text-lg font-heading font-semibold text-slate-700 dark:text-slate-200 mb-5">
              Multi-Tenant AI EdTech, Code Execution & Vision Proctoring Platform
            </p>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              Architected and deployed <span className="text-slate-900 dark:text-white font-semibold">www.code2crack.com</span> ("Learn - Build - Grow"), featuring a <span className="text-slate-900 dark:text-white font-semibold">multi-language coding playground</span> (Python, JS, Java, C++, C, in-browser Pyodide & SQLite WASM), static Big-O complexity diagnostics, <span className="text-slate-900 dark:text-white font-semibold">TensorFlow.js vision AI proctoring</span> (FaceMesh 3D pose, MAR lip tracking & COCO-SSD), native <span className="text-slate-900 dark:text-white font-semibold">Electron 39 Lockdown Browser</span> with OS process guards, and voice mock interviews (Groq + Whisper STT).
            </p>

            {/* Stats pills in 2 lines (2x2 grid) */}
            <div className="grid grid-cols-2 gap-3.5 mb-8">
              {platformStats.map((stat, index) => (
                <div key={index} className="p-3.5 text-center rounded-2xl bg-white border border-slate-200/90 shadow-sm shadow-slate-200/50 dark:bg-slate-800/40 dark:border-slate-700/60 dark:shadow-none hover:-translate-y-0.5 hover:border-cyan-500/30 hover:shadow-md transition-all duration-300 flex flex-col justify-center items-center">
                  <div className={`font-heading text-lg sm:text-xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent leading-tight`}>
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="bg-slate-900 text-white hover:bg-slate-800 shadow-md dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-600 dark:hover:from-cyan-400 dark:hover:to-blue-500 text-white font-semibold rounded-xl px-7 h-11 text-sm group"
                onClick={() => window.open('https://www.code2crack.com', '_blank')}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Visit www.code2crack.com
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl px-7 h-11 text-sm font-semibold border-slate-300 bg-white hover:bg-slate-100 hover:text-slate-950 hover:border-slate-400 text-slate-800 shadow-sm dark:border-slate-700/80 dark:bg-slate-800/40 dark:text-white dark:hover:bg-slate-800 dark:hover:text-white transition-all"
                onClick={() => window.open('https://www.code2crack.com', '_blank')}
              >
                Security & Lockdown Whitepaper
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col rounded-2xl border border-slate-200/90 bg-white shadow-sm shadow-slate-200/50 hover:shadow-xl dark:border-slate-700/60 dark:bg-slate-800/40 dark:shadow-none dark:hover:bg-slate-800/70 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Top gradient line */}
                <div className={`h-[2px] rounded-t-2xl bg-gradient-to-r ${feature.gradient}`} />

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-cyan-50 border border-cyan-200/70 dark:bg-cyan-500/10 dark:border-cyan-500/25 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <IconComponent className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Code2CrackSection;