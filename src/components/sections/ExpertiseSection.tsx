import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Cpu, BarChart3, Database, Server, Container } from "lucide-react";

const expertise = [
  {
    icon: Brain,
    title: "GenAI & LLMs",
    description: "RAG Pipelines, Prompt Engineering, LangChain, Transformers, LoRA, Embeddings, Vector Search, Semantic Retrieval",
    proficiency: 95,
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: BarChart3,
    title: "Machine Learning",
    description: "Scikit-learn, XGBoost, Model Tuning, Feature Engineering, Ensemble Methods, Classification & Regression",
    proficiency: 90,
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Cpu,
    title: "Deep Learning & NLP",
    description: "PyTorch, TensorFlow, Natural Language Processing, Neural Networks, Transfer Learning, Model Optimization",
    proficiency: 85,
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: BarChart3,
    title: "Data Science",
    description: "Pandas, NumPy, Exploratory Data Analysis, Data Visualization, Hypothesis Testing, Statistical Modeling",
    proficiency: 90,
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description: "FastAPI, REST APIs, Microservices Architecture, API Design, Authentication, System Design",
    proficiency: 85,
    color: "from-rose-500 to-red-500",
  },
  {
    icon: Database,
    title: "Databases & Deployment",
    description: "SQL, NoSQL, Vector DBs (FAISS, Pinecone), Docker, Cloud Deployment, CI/CD",
    proficiency: 80,
    color: "from-indigo-500 to-violet-500",
  },
];

const ExpertiseSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="expertise" className="section-padding relative overflow-hidden professional-grid" style={{ background: 'var(--gradient-subtle)' }}>
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
            Technical Skills
          </motion.span>

          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-black text-foreground mb-5 leading-tight">
            Core Areas of <span className="text-shimmer inline-block">Specialization</span>
          </h2>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Deep expertise in GenAI, Machine Learning, and building
            <span className="text-foreground font-medium"> production-level AI systems</span>.
          </p>
        </motion.div>

        {/* Expertise Grid — 2 columns for richer content */}
        <div className="grid md:grid-cols-2 gap-5">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group hover-lift"
            >
              <div className="card-elevated p-6 h-full relative overflow-hidden">
                {/* Left accent line */}
                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-r`} />

                <div className="flex items-start gap-5">
                  {/* Icon — monochrome bg */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-muted dark:bg-white/[0.06] flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-heading text-base font-bold text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-xs font-bold text-muted-foreground/60">{item.proficiency}%</span>
                    </div>

                    {/* Proficiency bar */}
                    <div className="w-full h-1 bg-muted dark:bg-white/[0.06] rounded-full mb-3 overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${item.proficiency}%` } : {}}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                      />
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;