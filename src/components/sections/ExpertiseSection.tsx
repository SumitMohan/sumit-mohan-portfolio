import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Brain, GraduationCap, FileCode, Target, Cpu, Sparkles } from "lucide-react";

const expertise = [
  {
    icon: Code,
    title: "Data Structures & Algorithms",
    description: "Advanced DSA curriculum including Arrays, Trees, Graphs, DP, Greedy algorithms, and competitive programming mentorship.",
    gradient: "from-cyan-500 to-blue-600",
    bgGradient: "from-cyan-500/10 to-blue-600/10"
  },
  {
    icon: Brain,
    title: "AI / ML & Generative AI",
    description: "Cutting-edge GenAI training covering LLM Fundamentals, Prompt Engineering, and AI-first curriculum design.",
    gradient: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-500/10 to-pink-600/10"
  },
  {
    icon: GraduationCap,
    title: "Academic Leadership",
    description: "Strategic leadership in academic program development, faculty coordination, and university-wide training initiatives.",
    gradient: "from-amber-500 to-orange-600",
    bgGradient: "from-amber-500/10 to-orange-600/10"
  },
  {
    icon: FileCode,
    title: "Curriculum Design",
    description: "Industry-aligned curriculum frameworks with robust assessment methodologies and NBA/NAAC compliance.",
    gradient: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-500/10 to-teal-600/10"
  },
  {
    icon: Target,
    title: "Placement Readiness",
    description: "End-to-end placement preparation achieving 95%+ placement rates with industry-standard interview preparation.",
    gradient: "from-rose-500 to-red-600",
    bgGradient: "from-rose-500/10 to-red-600/10"
  },
  {
    icon: Cpu,
    title: "Technical Training",
    description: "Expert instruction in C, C++, Python, Java with focus on practical implementation and problem-solving.",
    gradient: "from-indigo-500 to-violet-600",
    bgGradient: "from-indigo-500/10 to-violet-600/10"
  },
];

const ExpertiseSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="expertise" className="section-padding relative overflow-hidden" style={{ background: 'var(--gradient-subtle)' }}>
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-[400px] h-[400px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, hsl(192 100% 50% / 0.08) 0%, transparent 70%)' }}
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, hsl(280 100% 60% / 0.08) 0%, transparent 70%)' }}
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
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
            <Sparkles className="w-3.5 h-3.5" />
            What I Do
          </motion.span>

          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-[1.05]">
            Core Areas of
            <span className="block text-shimmer mt-2">Specialization</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Deep expertise in technical education, curriculum development, and building 
            <span className="text-foreground font-medium"> scalable training ecosystems</span>.
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="card-elevated p-8 h-full relative overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Top Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Icon with Gradient Background */}
                  <motion.div 
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="font-heading text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Corner Decoration */}
                <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${item.bgGradient} rounded-tl-[3rem] opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;