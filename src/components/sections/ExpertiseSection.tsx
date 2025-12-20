import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Brain, GraduationCap, FileCode, Target, Cpu, Database, Users } from "lucide-react";

const expertise = [
  {
    icon: Code,
    title: "Data Structures & Competitive Programming",
    description: "Advanced DSA curriculum design including Arrays, Trees, Graphs, DP, Greedy, and Recursion. Competitive programming mentorship for placement success.",
  },
  {
    icon: Brain,
    title: "AI / ML & Generative AI Education",
    description: "Cutting-edge GenAI training covering LLM Fundamentals, Prompt Engineering, and AI Curriculum Design for industry readiness.",
  },
  {
    icon: GraduationCap,
    title: "Academic & Technical Training Leadership",
    description: "Strategic leadership in academic program development, faculty coordination, and university-wide training initiatives.",
  },
  {
    icon: FileCode,
    title: "Curriculum Design & Assessment Systems",
    description: "Industry-aligned curriculum frameworks with robust assessment methodologies and NBA/NAAC compliance tracking.",
  },
  {
    icon: Target,
    title: "Placement Readiness & Industry Alignment",
    description: "End-to-end placement preparation ensuring students meet industry standards with 95%+ placement rates.",
  },
  {
    icon: Cpu,
    title: "Programming Languages",
    description: "Expert instruction in C, C++, Python, and Java with focus on practical implementation and interview preparation.",
  },
];

const ExpertiseSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="expertise" className="section-padding" style={{ background: 'var(--gradient-subtle)' }}>
      <div className="section-container" ref={containerRef}>
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Core Areas of
            <span className="text-primary"> Specialization</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Deep expertise in technical education, curriculum development, and scalable training systems.
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="card-elevated p-8 group relative overflow-hidden"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <motion.div 
                  className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className="w-7 h-7" />
                </motion.div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
