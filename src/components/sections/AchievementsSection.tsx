import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, FileCheck, Brain, Rocket, GraduationCap, Award } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "UGC-NET & GATE",
    description: "99th percentile in GATE",
    highlight: "99%ile",
  },
  {
    icon: FileCheck,
    title: "SCI Publications",
    description: "High impact factor research",
    highlight: "IF: 7",
  },
  {
    icon: Rocket,
    title: "Astromology.com",
    description: "GenAI-powered platform (Live)",
    highlight: "Live",
  },
  {
    icon: Brain,
    title: "Code2Crack",
    description: "AI EdTech platform at scale",
    highlight: "10K+",
  },
];

const qualifications = [
  { degree: "Ph.D. in Machine Learning", institution: "AKTU, Lucknow", year: "2026*" },
  { degree: "M.Tech in Computer Science", institution: "Computer Science", year: "2018" },
  { degree: "B.Tech in Computer Science", institution: "Computer Science", year: "2016" },
  { degree: "Polytechnic Diploma", institution: "Computer Science", year: "2013" },
];

const AchievementsSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="section-padding relative overflow-hidden bg-slate-50/50 dark:bg-[#07090E] transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Crisp dot grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="section-container relative z-10" ref={containerRef}>
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            <span className="section-badge inline-flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              Recognition & Credentials
            </span>
          </motion.div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-slate-900 dark:text-white mb-5 leading-tight">
            Key Achievements & <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-indigo-600 dark:from-cyan-400 dark:via-sky-300 dark:to-indigo-400 bg-clip-text text-transparent">Qualifications</span>
          </h2>

          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300">
            Academic milestones, competitive exam rankings, and academic degrees.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {achievements.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group p-5 rounded-2xl border border-slate-200/90 bg-white shadow-sm shadow-slate-200/50 hover:shadow-xl dark:border-slate-700/60 dark:bg-slate-800/40 dark:shadow-none dark:hover:bg-slate-800/70 transition-all duration-300 hover:-translate-y-1 text-center flex flex-col items-center justify-between"
              >
                <div className="w-11 h-11 rounded-xl bg-cyan-50 border border-cyan-200/70 dark:bg-cyan-500/10 dark:border-cyan-500/25 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <IconComponent className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                </div>
                <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                  {item.description}
                </p>
                <span className="px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 dark:bg-cyan-500/20 dark:border-cyan-500/30 dark:text-cyan-300 text-xs font-bold font-mono">
                  {item.highlight}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Qualifications Timeline Strip */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-slate-200/90 bg-white p-6 md:p-8 shadow-sm shadow-slate-200/50 dark:border-slate-700/60 dark:bg-slate-800/40">
          <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            Education Timeline
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {qualifications.map((q, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 dark:bg-slate-800/60 dark:border-slate-700/50">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-cyan-50 border border-cyan-200 text-cyan-800 dark:bg-cyan-500/20 dark:border-cyan-500/30 dark:text-cyan-300 mb-2 inline-block">
                  {q.year}
                </span>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white leading-snug mb-1">{q.degree}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">{q.institution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;