import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  BookOpen,
  Users,
  FileCheck,
  Briefcase,
  GraduationCap,
  Building2,
  Award
} from "lucide-react";

const leadershipAreas = [
  {
    icon: BookOpen,
    title: "Curriculum Design",
    description: "Industry-aligned curriculum development for UG-PG technical training delivery",
  },
  {
    icon: Users,
    title: "Faculty Development",
    description: "Training and coordination for academic excellence across departments",
  },
  {
    icon: FileCheck,
    title: "Examination Operations",
    description: "Center Superintendent role with compliance & academic logistics oversight",
  },
  {
    icon: Briefcase,
    title: "Training & Placement",
    description: "Student career guidance, placement coordination, and industry engagement",
  },
  {
    icon: GraduationCap,
    title: "Student Mentorship",
    description: "Placement readiness, technical interview preparation, and career development",
  },
  {
    icon: Building2,
    title: "Industry Collaboration",
    description: "Building partnerships for internships, projects, and hiring opportunities",
  },
];

const AcademicLeadershipSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="leadership" className="section-padding relative overflow-hidden bg-slate-50/50 dark:bg-[#07090E] transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

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
              Administrative Impact
            </span>
          </motion.div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-slate-900 dark:text-white mb-5 leading-tight">
            Academic & Institutional <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-indigo-600 dark:from-cyan-400 dark:via-sky-300 dark:to-indigo-400 bg-clip-text text-transparent">Leadership</span>
          </h2>

          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300">
            Key areas of administrative responsibility, curriculum innovation, and academic operations.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {leadershipAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm shadow-slate-200/50 hover:shadow-xl dark:border-slate-700/60 dark:bg-slate-800/40 dark:shadow-none dark:hover:bg-slate-800/70 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Top gradient line */}
                <div className="h-[2px] absolute top-0 left-0 right-0 bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-cyan-50 border border-cyan-200/70 dark:bg-cyan-500/10 dark:border-cyan-500/25 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <IconComponent className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {area.description}
                    </p>
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

export default AcademicLeadershipSection;