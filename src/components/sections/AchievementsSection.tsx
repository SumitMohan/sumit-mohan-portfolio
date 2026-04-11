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
    description: "GenAI-powered platform — Live",
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
    <section id="achievements" className="section-padding bg-background overflow-hidden relative">
      <div className="section-container relative z-10" ref={containerRef}>
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="section-badge mb-6 inline-flex"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            <Award className="w-3.5 h-3.5" />
            Recognition
          </motion.span>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-black text-foreground mb-5 leading-tight">
            Achievements & <span className="text-shimmer">Credentials</span>
          </h2>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group hover-lift"
            >
              <div className="card-elevated p-6 h-full text-center">
                <div className="w-12 h-12 mx-auto rounded-xl bg-muted dark:bg-white/[0.06] flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                </div>
                <div className="text-2xl font-black font-heading text-accent mb-1">
                  {item.highlight}
                </div>
                <h3 className="font-heading font-bold text-sm text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground inline-flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-accent" />
              Educational Background
            </h3>
          </div>
          <div className="space-y-3">
            {qualifications.map((qual, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.08 }}
                className="group"
              >
                <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 dark:bg-white/[0.02] border border-border/40 dark:border-white/[0.04] hover:border-accent/20 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-muted dark:bg-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors">
                    <GraduationCap className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-heading font-bold text-sm text-foreground group-hover:text-primary transition-colors">{qual.degree}</h4>
                    <p className="text-xs text-muted-foreground">{qual.institution}</p>
                  </div>
                  <span className="text-xs font-bold text-muted-foreground bg-muted dark:bg-white/[0.04] px-3 py-1.5 rounded-md flex-shrink-0">
                    {qual.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-4">* Expected completion</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;