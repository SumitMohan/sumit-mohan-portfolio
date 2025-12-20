import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, FileCheck, Users, Brain, Trophy, GraduationCap } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "UGC-NET & GATE Qualified",
    description: "Achieved 99th percentile in GATE examination",
    highlight: "99 Percentile",
  },
  {
    icon: FileCheck,
    title: "SCI-Indexed Publications",
    description: "Published research with Impact Factor 7 in peer-reviewed journals",
    highlight: "IF: 7",
  },
  {
    icon: Users,
    title: "Student Mentorship",
    description: "Mentored 10,000+ students across multiple batches for competitive programming",
    highlight: "10K+ Students",
  },
  {
    icon: Brain,
    title: "AI & GenAI Training",
    description: "Designed and delivered structured programs in Python, DSA, AI, and GenAI",
    highlight: "50+ Programs",
  },
];

const qualifications = [
  { degree: "Ph.D. in Machine Learning", institution: "AKTU, Lucknow", year: "Expected 2026" },
  { degree: "M.Tech in Computer Science", institution: "Computer Science", year: "2018" },
  { degree: "B.Tech in Computer Science", institution: "Computer Science", year: "2016" },
  { degree: "Polytechnic Diploma", institution: "Computer Science", year: "2013" },
];

const AchievementsSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="section-padding bg-background overflow-hidden">
      <div className="section-container" ref={containerRef}>
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            Recognition
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Achievements &
            <span className="text-primary"> Credentials</span>
          </h2>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative p-6 rounded-2xl border border-border bg-gradient-to-br from-card to-card/50 group overflow-hidden"
            >
              {/* Hover Glow */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                >
                  <item.icon className="w-7 h-7" />
                </motion.div>
                <div className="text-2xl font-bold text-accent mb-2">{item.highlight}</div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-xl font-bold text-center text-foreground mb-8">
            Educational Qualifications
          </h3>
          <div className="space-y-4">
            {qualifications.map((qual, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border/50 group hover:border-primary/30 transition-colors"
              >
                <motion.div 
                  className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <GraduationCap className="w-6 h-6" />
                </motion.div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">{qual.degree}</h4>
                  <p className="text-sm text-muted-foreground">{qual.institution}</p>
                </div>
                <span className="text-sm font-medium text-accent">{qual.year}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
