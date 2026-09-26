import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Brain, Cpu, BarChart3, Database, Server, Layers, Sparkles } from "lucide-react";

interface SkillCategory {
  icon: any;
  title: string;
  tag: string;
  primarySkills: string[];
  secondarySkills: string[];
  gradient: string;
  accentBorder: string;
  badge: string;
}

const expertise: SkillCategory[] = [
  {
    icon: Brain,
    title: "GenAI & LLMs",
    tag: "genai",
    primarySkills: ["RAG Pipelines", "Transformers", "LoRA", "Vector Search"],
    secondarySkills: ["Prompt Engineering", "LangChain", "LlamaIndex", "Embeddings", "Semantic Retrieval", "Guardrails"],
    gradient: "from-cyan-500 via-sky-500 to-blue-500",
    accentBorder: "border-cyan-500/30",
    badge: "Core Focus",
  },
  {
    icon: BarChart3,
    title: "Machine Learning",
    tag: "ml",
    primarySkills: ["Scikit-learn", "XGBoost", "Feature Engineering"],
    secondarySkills: ["Model Tuning", "Ensemble Methods", "Classification", "Regression", "Cross-Validation"],
    gradient: "from-blue-500 via-indigo-500 to-cyan-500",
    accentBorder: "border-blue-500/30",
    badge: "Foundation",
  },
  {
    icon: Cpu,
    title: "Deep Learning & NLP",
    tag: "dl",
    primarySkills: ["PyTorch", "TensorFlow", "Attention Mechanisms"],
    secondarySkills: ["Natural Language Processing", "Neural Networks", "Transfer Learning", "Tokenization"],
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    accentBorder: "border-indigo-500/30",
    badge: "Specialization",
  },
  {
    icon: BarChart3,
    title: "Data Science & Analytics",
    tag: "ds",
    primarySkills: ["Pandas", "Exploratory Data Analysis", "Statistical Modeling"],
    secondarySkills: ["NumPy", "Hypothesis Testing", "Matplotlib", "Seaborn"],
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    accentBorder: "border-emerald-500/30",
    badge: "Applied",
  },
  {
    icon: Server,
    title: "Backend & Microservices",
    tag: "backend",
    primarySkills: ["FastAPI", "Python AsyncIO", "Microservices Architecture"],
    secondarySkills: ["RESTful APIs", "API Security", "WebSockets", "Rate Limiting"],
    gradient: "from-sky-500 via-blue-600 to-indigo-600",
    accentBorder: "border-sky-500/30",
    badge: "Production",
  },
  {
    icon: Database,
    title: "Databases & MLOps",
    tag: "mlops",
    primarySkills: ["FAISS", "Pinecone", "PostgreSQL", "Docker"],
    secondarySkills: ["ChromaDB", "SQLite", "CI/CD Pipelines", "Cloud Deployment", "Git"],
    gradient: "from-violet-500 via-purple-500 to-indigo-500",
    accentBorder: "border-violet-500/30",
    badge: "Infrastructure",
  },
];

const filterTabs = [
  { id: "all", label: "All Skills" },
  { id: "genai", label: "GenAI & LLMs" },
  { id: "ml", label: "Machine Learning" },
  { id: "dl", label: "Deep Learning" },
  { id: "backend", label: "Backend & MLOps" },
];

export const ExpertiseSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredSkills = expertise.filter((item) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "backend") return item.tag === "backend" || item.tag === "mlops";
    return item.tag === activeFilter;
  });

  return (
    <section id="expertise" className="section-padding relative overflow-hidden bg-slate-50/50 dark:bg-[#07090E] transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Structured dot grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="section-container relative z-10" ref={containerRef}>
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10"
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
              <Layers className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              Technical Arsenal
            </span>
          </motion.div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-slate-900 dark:text-white mb-4 leading-tight">
            Core Areas of <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-indigo-600 dark:from-cyan-400 dark:via-sky-300 dark:to-indigo-400 bg-clip-text text-transparent">Specialization</span>
          </h2>

          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Deep technical expertise across generative AI, machine learning architectures, and production-grade AI platforms.
          </p>

          {/* Styled Filter Pill Bar */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 mt-7 max-w-fit mx-auto rounded-full bg-white/90 border border-slate-200/80 shadow-sm dark:bg-slate-800/60 dark:border-slate-700/60 backdrop-blur-md">
            {filterTabs.map((tab) => {
              const isSelected = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`relative px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                    isSelected
                      ? "text-slate-900 dark:text-white"
                      : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="active-skill-tab"
                      className="absolute inset-0 rounded-full bg-slate-100 border border-slate-300/80 shadow-sm dark:bg-slate-700 dark:border-slate-600"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="group relative flex flex-col rounded-2xl border border-slate-200/90 bg-white shadow-sm shadow-slate-200/60 hover:shadow-xl hover:shadow-slate-200/80 dark:border-slate-700/60 dark:bg-slate-800/40 dark:shadow-none dark:hover:bg-slate-800/70 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Accent Top Gradient Edge */}
                  <div className={`h-[2px] rounded-t-2xl bg-gradient-to-r ${item.gradient}`} />

                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      {/* Card Header: Icon + Title + Category Badge */}
                      <div className="flex items-start justify-between gap-4 mb-5">
                        <div className="flex items-center gap-3.5">
                          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200/70 dark:from-cyan-500/10 dark:to-blue-500/10 dark:border-cyan-500/25 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-sm dark:shadow-none">
                            <IconComponent className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                          </div>
                          <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                            {item.title}
                          </h3>
                        </div>

                        <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100/90 border border-slate-200/80 text-slate-600 dark:bg-slate-700/60 dark:border-slate-600 dark:text-slate-300 shrink-0">
                          {item.badge}
                        </span>
                      </div>

                      {/* Highlighted Primary Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {item.primarySkills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-3 py-1 rounded-lg bg-cyan-50 border border-cyan-200/80 text-cyan-900 dark:bg-cyan-500/15 dark:border-cyan-500/30 dark:text-cyan-300 text-xs font-bold transition-all duration-200 hover:-translate-y-0.5 shadow-sm dark:shadow-none"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Secondary Tech Chips */}
                      <div className="flex flex-wrap gap-1.5">
                        {item.secondarySkills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/70 text-slate-600 hover:bg-white hover:border-slate-300 hover:text-slate-900 dark:bg-slate-800/50 dark:border-slate-700/50 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white text-xs font-medium transition-all duration-200 hover:-translate-y-0.5"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;