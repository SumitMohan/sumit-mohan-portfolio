import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Brain, GraduationCap, FileCode, Target, Cpu } from "lucide-react";

const expertise = [
  {
    icon: Code,
    title: "Data Structures & Algorithms",
    description: "Advanced DSA curriculum including Arrays, Trees, Graphs, DP, Greedy algorithms, and competitive programming mentorship.",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Brain,
    title: "AI / ML & Generative AI",
    description: "Cutting-edge GenAI training covering LLM Fundamentals, Prompt Engineering, and AI-first curriculum design.",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: GraduationCap,
    title: "Academic Leadership",
    description: "Strategic leadership in academic program development, faculty coordination, and university-wide training initiatives.",
    color: "from-amber-500/20 to-orange-500/20"
  },
  {
    icon: FileCode,
    title: "Curriculum Design",
    description: "Industry-aligned curriculum frameworks with robust assessment methodologies and NBA/NAAC compliance.",
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    icon: Target,
    title: "Placement Readiness",
    description: "End-to-end placement preparation achieving 95%+ placement rates with industry-standard interview preparation.",
    color: "from-rose-500/20 to-red-500/20"
  },
  {
    icon: Cpu,
    title: "Technical Training",
    description: "Expert instruction in C, C++, Python, Java with focus on practical implementation and problem-solving.",
    color: "from-indigo-500/20 to-violet-500/20"
  },
];

const ExpertiseSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="expertise" className="section-padding relative overflow-hidden" style={{ background: 'var(--gradient-subtle)' }}>
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10" ref={containerRef}>
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-badge mb-6">
            Expertise
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Core Areas of
            <span className="text-primary"> Specialization</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deep expertise in technical education, curriculum development, and building scalable training ecosystems.
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="card-elevated p-8 h-full relative overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <motion.div 
                    className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <item.icon className="w-7 h-7" />
                  </motion.div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
