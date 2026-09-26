import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BrainCircuit, Server, Rocket, ArrowUpRight, Cpu } from "lucide-react";
import techPortrait from "/src/assets/sumit-tech-portrait.png";

const AboutSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-slate-50/50 dark:bg-[#07090E] transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-40 right-20 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      {/* Crisp dot grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="section-container relative z-10" ref={containerRef}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left Side - Story & Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-8">
              <motion.span
                className="section-badge mb-4 inline-flex items-center gap-1.5"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
              >
                <Cpu className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                About Me
              </motion.span>

              <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-slate-900 dark:text-white mb-6 leading-[1.15]">
                Engineering Intelligent{" "}
                <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-indigo-600 dark:from-cyan-400 dark:via-sky-300 dark:to-indigo-400 bg-clip-text text-transparent">
                  AI Solutions
                </span>
              </h2>

              {/* Highlight Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mb-8">
                <span className="px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-800 dark:bg-purple-500/20 dark:border-purple-500/30 dark:text-purple-300 text-xs font-bold tracking-wide shadow-sm dark:shadow-none">
                  PhD Candidate (ML)
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 dark:bg-cyan-500/20 dark:border-cyan-500/30 dark:text-cyan-300 text-xs font-bold tracking-wide shadow-sm dark:shadow-none">
                  Published Researcher
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 dark:bg-blue-500/20 dark:border-blue-500/30 dark:text-blue-300 text-xs font-bold tracking-wide shadow-sm dark:shadow-none">
                  GenAI Specialist
                </span>
              </div>
            </div>

            {/* Main Narrative */}
            <div className="space-y-6 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              <p className="text-slate-800 dark:text-slate-200 font-medium">
                With a strong foundation in deep learning and data science, I specialize in building scalable, production-ready AI architectures. My work bridges complex academic research with high-impact industrial applications.
              </p>

              {/* Expertise Cards */}
              <div className="flex flex-col gap-3.5 mt-8">
                <div className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm shadow-slate-200/50 hover:shadow-md hover:border-cyan-500/40 dark:bg-slate-800/40 dark:border-slate-700/60 dark:shadow-none transition-all duration-300 hover:-translate-y-0.5">
                  <div className="w-11 h-11 rounded-xl bg-cyan-50 border border-cyan-200/70 dark:bg-cyan-500/10 dark:border-cyan-500/25 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <BrainCircuit className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-bold font-heading text-slate-900 dark:text-white mb-1.5 text-sm tracking-wide uppercase">LLMs & Applied Logic</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">Deep expertise in designing advanced Retrieval-Augmented Generation (RAG) pipelines and reasoning agents.</p>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm shadow-slate-200/50 hover:shadow-md hover:border-purple-500/40 dark:bg-slate-800/40 dark:border-slate-700/60 dark:shadow-none transition-all duration-300 hover:-translate-y-0.5">
                  <div className="w-11 h-11 rounded-xl bg-purple-50 border border-purple-200/70 dark:bg-purple-500/10 dark:border-purple-500/25 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Server className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-bold font-heading text-slate-900 dark:text-white mb-1.5 text-sm tracking-wide uppercase">Scalable MLOps</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">Proficient in architecting low-latency microservices using FastAPI, vector databases, and cloud-native deployments.</p>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm shadow-slate-200/50 hover:shadow-md hover:border-orange-500/40 dark:bg-slate-800/40 dark:border-slate-700/60 dark:shadow-none transition-all duration-300 hover:-translate-y-0.5">
                  <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200/70 dark:bg-orange-500/10 dark:border-orange-500/25 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Rocket className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-bold font-heading text-slate-900 dark:text-white mb-1.5 text-sm tracking-wide uppercase">Zero-to-One Products</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">Sole architect and creator of robust platforms like Astromology.com and the EdTech engine Code2Crack.</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold text-sm tracking-wide hover:gap-3 transition-all group"
              >
                <span className="relative">
                  Explore My Architecture
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-cyan-500/30 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Photo + Mission */}
          <div className="space-y-6">
            {/* Profile Image with premium treatment */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative group">
                {/* Ambient Glow behind image */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 blur-2xl opacity-50 dark:opacity-40" />

                {/* Main Image Container */}
                <div className="relative bg-white dark:bg-slate-800 p-2 rounded-2xl border border-slate-200/90 dark:border-slate-700/60 shadow-xl shadow-slate-200/60 dark:shadow-none">
                  <img
                    src={techPortrait}
                    alt="Sumit Mohan - GenAI Architect"
                    className="relative w-full max-w-[350px] md:max-w-[400px] h-auto object-cover rounded-xl group-hover:scale-[1.01] transition-transform duration-700 shadow-sm"
                  />
                </div>

                {/* Floating badge */}
                <motion.div
                  className="absolute -bottom-3 -right-3 bg-white border border-slate-200/90 rounded-xl px-4 py-2.5 shadow-xl dark:bg-slate-800 dark:border-slate-700/60 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-slate-900 dark:text-white">Open to AI/GenAI Roles</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Mission Card - Premium blockquote */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-2xl bg-white border border-slate-200/90 shadow-md shadow-slate-200/50 dark:bg-slate-800/50 dark:border-slate-700/60 relative overflow-hidden group hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Top gradient line */}
              <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-90" />

              <div className="p-6 relative">
                {/* Left accent bar */}
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-indigo-500" />

                <div className="pl-4">
                  <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                    <Rocket className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                    My Mission
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-base italic leading-relaxed relative">
                    <span className="text-4xl text-cyan-500/20 absolute -top-3 -left-2 font-serif">"</span>
                    To build production-grade AI systems that solve real-world problems - from intelligent platforms like Astromology.com to scalable EdTech solutions that democratize learning at scale.
                    <span className="text-4xl text-cyan-500/20 absolute -bottom-5 right-0 font-serif">"</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;