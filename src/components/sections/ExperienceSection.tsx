import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, Rocket, Award } from "lucide-react";

const experiences = [
  {
    role: "Founder / Platform Architect",
    institution: "Code2Crack & Astromology",
    period: "Ongoing",
    description: "Built a scalable multi-tenant EdTech SaaS platform with AI-driven learning and analytics. Designed and deployed LLM-based tutoring system using retrieval techniques. Built and deployed a production-grade GenAI application (Astromology) using RAG architecture and LLMs.",
    current: true,
    tag: "Founding",
    tagColor: "bg-purple-50 text-purple-900 border-purple-200 dark:bg-purple-500/15 dark:text-purple-300 dark:border-purple-500/30",
    initial: "FA",
    dotColor: "from-purple-500 to-pink-500",
  },
  {
    role: "Head - Technical Training",
    institution: "CodeQuotient Pvt. Ltd.",
    period: "Jan 2025 - Present",
    description: "Designed and delivered data science and machine learning pipelines including EDA, feature engineering, and model development. Mentored students on real-world AI/ML and GenAI projects, including LLM and RAG-based systems.",
    current: true,
    tag: "Leadership",
    tagColor: "bg-cyan-50 text-cyan-900 border-cyan-200 dark:bg-cyan-500/15 dark:text-cyan-300 dark:border-cyan-500/30",
    initial: "CQ",
    dotColor: "from-cyan-500 to-blue-500",
  },
  {
    role: "Senior Technical Trainer",
    institution: "Sharda University, Greater Noida",
    period: "Apr 2023 - Jan 2025",
    description: "Delivered training in Python, Data Science, and Machine Learning with hands-on project implementation. Built end-to-end ML workflows covering data preprocessing, modeling, and evaluation.",
    current: false,
    tag: "Technical",
    tagColor: "bg-amber-50 text-amber-900 border-amber-200 dark:bg-amber-500/15 dark:text-amber-300 dark:border-amber-500/30",
    initial: "SU",
    dotColor: "from-amber-500 to-orange-500",
  },
  {
    role: "Head of Department - CSE",
    institution: "SDGI Global University, Ghaziabad",
    period: "Mar 2022 - Apr 2023",
    description: "Led curriculum modernization by integrating AI/ML and data science concepts. Strengthened industry collaboration for internships and technical training. Managed academic operations and faculty coordination.",
    current: false,
    tag: "Leadership",
    tagColor: "bg-cyan-50 text-cyan-900 border-cyan-200 dark:bg-cyan-500/15 dark:text-cyan-300 dark:border-cyan-500/30",
    initial: "SG",
    dotColor: "from-cyan-500 to-blue-500",
  },
  {
    role: "Training & Placement",
    institution: "BIET Jhansi - Autonomous Institute",
    period: "Mar 2019 - Feb 2022",
    description: "Delivered technical training aligned with industry hiring standards. Mentored students and coordinated internships and placement preparation.",
    current: false,
    tag: "Technical",
    tagColor: "bg-amber-50 text-amber-900 border-amber-200 dark:bg-amber-500/15 dark:text-amber-300 dark:border-amber-500/30",
    initial: "BJ",
    dotColor: "from-amber-500 to-orange-500",
  },
];

const ExperienceSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative overflow-hidden bg-slate-50/50 dark:bg-[#07090E] transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Crisp dot grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="section-container relative z-10" ref={containerRef}>
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
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
              Career Journey
            </span>
          </motion.div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-slate-900 dark:text-white mb-5 leading-tight">
            Professional <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-indigo-600 dark:from-cyan-400 dark:via-sky-300 dark:to-indigo-400 bg-clip-text text-transparent">Experience</span>
          </h2>

          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300">
            A progressive journey through AI engineering, platform building, and technical leadership.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical Line with gradient */}
            <motion.div
              className="absolute left-[27px] top-0 bottom-0 w-[2px] rounded-full"
              style={{ background: 'linear-gradient(to bottom, #06b6d4, #3b82f6, #6366f1, #cbd5e1)', transformOrigin: 'top' }}
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex items-start gap-6 mb-8 last:mb-0"
              >
                {/* Timeline Dot + Avatar */}
                <div className="relative z-10 shrink-0">
                  <motion.div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xs font-bold border-4 border-slate-50 dark:border-[#07090E] bg-gradient-to-br ${exp.dotColor} text-white shadow-lg`}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.12, type: "spring", stiffness: 200 }}
                  >
                    {exp.initial}
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className="flex-1 min-w-0">
                  <div className="group relative flex flex-col rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm shadow-slate-200/50 hover:shadow-xl dark:border-slate-700/60 dark:bg-slate-800/40 dark:shadow-none dark:hover:bg-slate-800/70 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                    {/* Top gradient line */}
                    <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${exp.dotColor}`} />

                    {/* Tags row */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      {exp.current && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-300 dark:border-emerald-500/30 text-[0.65rem] font-bold tracking-wide">
                          <motion.span
                            className="w-1.5 h-1.5 rounded-full bg-emerald-500"
                            animate={{ opacity: [1, 0.4, 1], scale: [1, 1.3, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                          Current
                        </span>
                      )}
                      <span className={`px-3 py-1 rounded-lg text-[0.65rem] font-bold tracking-wide border ${exp.tagColor}`}>
                        {exp.tag}
                      </span>
                    </div>

                    <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {exp.role}
                    </h3>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500 dark:text-slate-400 mb-4">
                      <span className="flex items-center gap-1.5">
                        {index === 0 ? <Rocket className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" /> : <Briefcase className="w-3.5 h-3.5" />}
                        <span className="font-semibold text-slate-700 dark:text-slate-200">{exp.institution}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                    </div>

                    {/* Separator */}
                    <div className="w-full h-px bg-slate-100 dark:bg-slate-700/60 mb-4" />

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;