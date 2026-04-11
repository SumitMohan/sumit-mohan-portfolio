import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, Rocket } from "lucide-react";

const experiences = [
  {
    role: "Founder / Platform Architect",
    institution: "Code2Crack & Astromology",
    period: "Ongoing",
    description: "Built a scalable multi-tenant EdTech SaaS platform with AI-driven learning and analytics. Designed and deployed LLM-based tutoring system using retrieval techniques. Built and deployed a production-grade GenAI application (Astromology) using RAG architecture and LLMs.",
    current: true,
    tag: "Founding",
    tagColor: "bg-purple-500/15 text-purple-600 dark:bg-purple-400/15 dark:text-purple-400 border-purple-500/20",
    initial: "FA",
    dotColor: "from-purple-500 to-pink-500",
  },
  {
    role: "Head – Technical Training",
    institution: "CodeQuotient Pvt. Ltd.",
    period: "Jan 2025 — Present",
    description: "Designed and delivered data science and machine learning pipelines including EDA, feature engineering, and model development. Mentored students on real-world AI/ML and GenAI projects, including LLM and RAG-based systems.",
    current: true,
    tag: "Leadership",
    tagColor: "bg-cyan-500/15 text-cyan-600 dark:bg-cyan-400/15 dark:text-cyan-400 border-cyan-500/20",
    initial: "CQ",
    dotColor: "from-cyan-500 to-blue-500",
  },
  {
    role: "Senior Technical Trainer",
    institution: "Sharda University, Greater Noida",
    period: "Apr 2023 — Jan 2025",
    description: "Delivered training in Python, Data Science, and Machine Learning with hands-on project implementation. Built end-to-end ML workflows covering data preprocessing, modeling, and evaluation.",
    current: false,
    tag: "Technical",
    tagColor: "bg-amber-500/15 text-amber-600 dark:bg-amber-400/15 dark:text-amber-400 border-amber-500/20",
    initial: "SU",
    dotColor: "from-amber-500 to-orange-500",
  },
  {
    role: "Head of Department – CSE",
    institution: "SDGI Global University, Ghaziabad",
    period: "Mar 2022 — Apr 2023",
    description: "Led curriculum modernization by integrating AI/ML and data science concepts. Strengthened industry collaboration for internships and technical training. Managed academic operations and faculty coordination.",
    current: false,
    tag: "Leadership",
    tagColor: "bg-cyan-500/15 text-cyan-600 dark:bg-cyan-400/15 dark:text-cyan-400 border-cyan-500/20",
    initial: "SG",
    dotColor: "from-cyan-500 to-blue-500",
  },
  {
    role: "Training & Placement",
    institution: "BIET Jhansi – Autonomous Institute",
    period: "Mar 2019 — Feb 2022",
    description: "Delivered technical training aligned with industry hiring standards. Mentored students and coordinated internships and placement preparation.",
    current: false,
    tag: "Technical",
    tagColor: "bg-amber-500/15 text-amber-600 dark:bg-amber-400/15 dark:text-amber-400 border-amber-500/20",
    initial: "BJ",
    dotColor: "from-amber-500 to-orange-500",
  },
];

const ExperienceSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative" style={{ background: 'var(--gradient-subtle)' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, hsl(192 100% 50% / 0.08) 0%, transparent 70%)' }}
          animate={{ x: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="section-container relative z-10" ref={containerRef}>
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="section-badge mb-6 inline-flex"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            Career Journey
          </motion.span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-black text-foreground mb-5 leading-tight">
            Professional <span className="text-shimmer">Experience</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            A progressive journey through AI engineering, platform building, and technical leadership.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical Line with gradient */}
            <motion.div
              className="absolute left-[27px] top-0 bottom-0 w-[2px] rounded-full"
              style={{ background: 'linear-gradient(to bottom, hsl(192 100% 50%), hsl(220 100% 60%), hsl(280 100% 60%), hsl(220 14% 80%))' }}
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeOut" }}
              // @ts-ignore
              style2={{ transformOrigin: 'top' }}
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
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xs font-black border-[3px] border-background bg-gradient-to-br ${exp.dotColor} text-white shadow-lg`}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.12, type: "spring", stiffness: 200 }}
                    style={{
                      boxShadow: exp.current ? '0 0 20px hsl(192 100% 50% / 0.3)' : undefined
                    }}
                  >
                    {exp.initial}
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className="flex-1 min-w-0">
                  <div className="card-elevated p-6 group hover-lift relative overflow-hidden">
                    {/* Top gradient line on hover */}
                    <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${exp.dotColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                    {/* Tags row */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      {exp.current && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[0.65rem] font-bold tracking-wide border border-emerald-500/20">
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

                    <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1.5">
                        {index === 0 ? <Rocket className="w-3.5 h-3.5 text-accent" /> : <Briefcase className="w-3.5 h-3.5 text-muted-foreground" />}
                        <span className="font-medium">{exp.institution}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                    </div>

                    {/* Separator */}
                    <div className="w-full h-px bg-border/50 dark:bg-white/[0.04] mb-4" />

                    <p className="text-sm text-muted-foreground leading-relaxed text-justify">
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