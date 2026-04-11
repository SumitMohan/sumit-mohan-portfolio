import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, FileCheck, Users, Brain, Rocket, GraduationCap, Sparkles, Award } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "UGC-NET & GATE",
    description: "Achieved 99th percentile in GATE examination",
    highlight: "99%ile",
    gradient: "from-amber-500 to-orange-600"
  },
  {
    icon: FileCheck,
    title: "SCI Publications",
    description: "Published research with high impact factor",
    highlight: "IF: 7",
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    icon: Rocket,
    title: "Astromology.com",
    description: "Built & deployed GenAI-powered astrology platform",
    highlight: "Live",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    icon: Brain,
    title: "Code2Crack",
    description: "Built AI-powered EdTech platform at scale",
    highlight: "10K+",
    gradient: "from-cyan-500 to-blue-600"
  },
];

const qualifications = [
  { degree: "Ph.D. in Machine Learning", institution: "AKTU, Lucknow", year: "2026*", gradient: "from-purple-500 to-pink-500" },
  { degree: "M.Tech in Computer Science", institution: "Computer Science", year: "2018", gradient: "from-cyan-500 to-blue-500" },
  { degree: "B.Tech in Computer Science", institution: "Computer Science", year: "2016", gradient: "from-emerald-500 to-teal-500" },
  { degree: "Polytechnic Diploma", institution: "Computer Science", year: "2013", gradient: "from-amber-500 to-orange-500" },
];

const AchievementsSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="section-padding bg-background overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-40 right-20 w-[400px] h-[400px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, hsl(192 100% 50% / 0.08) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-[300px] h-[300px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, hsl(280 100% 60% / 0.08) 0%, transparent 70%)' }}
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="section-container relative z-10" ref={containerRef}>
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="section-badge mb-8 inline-flex"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            <Award className="w-3.5 h-3.5" />
            Recognition
          </motion.span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6 leading-tight">
            Achievements <span className="font-serif text-accent italic px-1">&</span> <span className="text-shimmer">Credentials</span>
          </h2>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="card-elevated p-8 h-full text-center relative overflow-hidden border border-border/40 bg-card/80 dark:bg-white/5 backdrop-blur-sm">
                {/* Top gradient line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Gradient Background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500`} />

                <div className="relative z-10">
                  <motion.div
                    className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className={`font-heading text-4xl font-black bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-2`}>
                    {item.highlight}
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="text-center mb-10">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground inline-flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-accent" />
              Educational Background
            </h3>
          </div>
          <div className="space-y-4">
            {qualifications.map((qual, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ x: 10 }}
                className="group"
              >
                <div className="flex items-center gap-5 p-6 rounded-2xl bg-card border border-border/40 hover:border-accent/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  {/* Left gradient accent */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${qual.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />

                  <motion.div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${qual.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <GraduationCap className="w-7 h-7 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors">{qual.degree}</h4>
                    <p className="text-muted-foreground">{qual.institution}</p>
                  </div>
                  <span className={`text-sm font-bold bg-gradient-to-r ${qual.gradient} bg-clip-text text-transparent px-4 py-2 rounded-full border border-border/50 group-hover:border-accent/30`}>
                    {qual.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">* Expected completion</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;