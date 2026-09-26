import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Terminal, ArrowUpRight } from "lucide-react";
import InteractiveHeroPipeline from "./InteractiveHeroPipeline";

const ArchitectureSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="architecture" className="section-padding relative overflow-hidden bg-background">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-[140px] pointer-events-none" />

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
            transition={{ duration: 0.5 }}
          >
            <span className="section-badge">
              <Cpu className="w-3.5 h-3.5" />
              System Architecture
            </span>
          </motion.div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-foreground mb-4 leading-tight">
            Production AI Pipelines & <span className="text-shimmer">Engine Architectures</span>
          </h2>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Interactive breakdown of the production AI, multi-language execution, vision proctoring, and hybrid RAG architectures powering <a href="https://www.code2crack.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">www.code2crack.com</a> and <a href="https://www.astromology.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">www.astromology.com</a>.
          </p>
        </motion.div>

        {/* Interactive Pipeline Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <InteractiveHeroPipeline />
        </motion.div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
