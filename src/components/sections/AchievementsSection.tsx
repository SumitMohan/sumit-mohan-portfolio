import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, FileCheck, Users, Brain, GraduationCap } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "UGC-NET & GATE",
    description: "Achieved 99th percentile in GATE examination",
    highlight: "99%ile",
    color: "from-amber-500 to-orange-500"
  },
  {
    icon: FileCheck,
    title: "SCI Publications",
    description: "Published research with high impact factor",
    highlight: "IF: 7",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: Users,
    title: "Student Impact",
    description: "Mentored across multiple batches",
    highlight: "10K+",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Brain,
    title: "Training Programs",
    description: "AI, DSA, Python, GenAI programs",
    highlight: "50+",
    color: "from-purple-500 to-pink-500"
  },
];

const qualifications = [
  { degree: "Ph.D. in Machine Learning", institution: "AKTU, Lucknow", year: "2026*" },
  { degree: "M.Tech in Computer Science", institution: "Computer Science", year: "2018" },
  { degree: "B.Tech in Computer Science", institution: "Computer Science", year: "2016" },
];

const AchievementsSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="section-padding bg-background overflow-hidden">
      <div className="section-container" ref={containerRef}>
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-badge mb-6">
            Recognition
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Achievements &
            <span className="text-primary"> Credentials</span>
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
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="card-elevated p-8 h-full text-center relative overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <motion.div 
                    className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                  >
                    <item.icon className="w-8 h-8" />
                  </motion.div>
                  <div className="font-heading text-4xl font-bold text-accent mb-2">{item.highlight}</div>
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
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="font-heading text-2xl font-bold text-center text-foreground mb-8">
            Educational Background
          </h3>
          <div className="space-y-4">
            {qualifications.map((qual, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ x: 8 }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-muted/50 border border-border/50 group hover:border-accent/30 hover:shadow-md transition-all"
              >
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <GraduationCap className="w-6 h-6" />
                </motion.div>
                <div className="flex-1">
                  <h4 className="font-heading font-semibold text-foreground">{qual.degree}</h4>
                  <p className="text-sm text-muted-foreground">{qual.institution}</p>
                </div>
                <span className="text-sm font-semibold text-accent px-3 py-1 rounded-full bg-accent/10">
                  {qual.year}
                </span>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">* Expected completion</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
