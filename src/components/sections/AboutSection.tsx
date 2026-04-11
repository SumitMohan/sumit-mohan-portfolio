import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowUpRight, Rocket, Code2, Sparkles, TrendingUp, BrainCircuit, Server } from "lucide-react";
import sumitPhoto from "@/assets/sumit-tech-portrait.png";

const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let startTimestamp: number | null = null;
    const duration = 1800;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * value));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const highlights = [
  { icon: Sparkles, label: "PhD Candidate (ML)", color: "from-purple-500 to-pink-500" },
  { icon: TrendingUp, label: "Published Researcher", color: "from-cyan-500 to-blue-500" },
  { icon: Code2, label: "2 Live Products", color: "from-emerald-500 to-teal-500" },
  { icon: Rocket, label: "99%ile GATE", color: "from-amber-500 to-orange-500" },
];

const stats = [
  { value: 7, suffix: "+", label: "Years Exp." },
  { value: 6, suffix: "", label: "Publications" },
  { value: 10, suffix: "K+", label: "Users" },
];

const AboutSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none">
        <div className="absolute top-40 right-20 w-[400px] h-[400px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, hsl(192 100% 50% / 0.08) 0%, transparent 70%)' }}
        />
      </div>

      <div className="section-container relative z-10" ref={containerRef}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Section Badge — above heading with margin */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="section-badge">
                <Sparkles className="w-3.5 h-3.5" />
                About Me
              </span>
            </motion.div>

            <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-black text-foreground mb-6 leading-[1.1]">
              Engineering Intelligent
              <span className="block gradient-text mt-1" style={{ backgroundImage: 'var(--gradient-text)' }}>AI Solutions</span>
            </h2>

            {/* Quick Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-8">
              <span className="px-3.5 py-1.5 rounded-full bg-purple-500/10 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-500/20 text-xs font-bold tracking-wide">
                PhD Candidate (ML)
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 text-xs font-bold tracking-wide">
                Published Researcher
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-500/20 text-xs font-bold tracking-wide">
                GenAI Specialist
              </span>
            </div>

            <div className="space-y-6 text-muted-foreground text-base leading-relaxed">
              <p className="text-foreground/90 font-medium">
                With a strong foundation in deep learning and data science, I specialize in building scalable, production-ready AI architectures. My work bridges complex academic research with high-impact industrial applications.
              </p>
              
              {/* Expertise Cards */}
              <div className="flex flex-col gap-3 mt-8">
                <div className="group flex items-start gap-4 p-4 lg:p-5 rounded-2xl bg-card border border-border/50 hover:border-accent/40 shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <BrainCircuit className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold font-heading text-foreground mb-1.5 text-sm tracking-wide uppercase">LLMs & Applied Logic</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">Deep expertise in designing advanced Retrieval-Augmented Generation (RAG) pipelines and reasoning agents.</p>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-4 lg:p-5 rounded-2xl bg-card border border-border/50 hover:border-purple-500/40 shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Server className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-bold font-heading text-foreground mb-1.5 text-sm tracking-wide uppercase">Scalable MLOps</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">Proficient in architecting low-latency microservices using FastAPI, vector databases, and cloud-native deployments.</p>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-4 lg:p-5 rounded-2xl bg-card border border-border/50 hover:border-orange-500/40 shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold font-heading text-foreground mb-1.5 text-sm tracking-wide uppercase">Zero-to-One Products</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">Sole architect and creator of robust platforms like Astromology.com and the EdTech engine Code2Crack.</p>
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
                className="inline-flex items-center gap-2 text-accent font-bold text-sm tracking-wide hover:gap-3 transition-all group"
              >
                <span className="relative">
                  Explore My Architecture
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-accent/30 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
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
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative group">
                {/* Animated background glow */}
                <motion.div
                  className="absolute -inset-4 rounded-2xl blur-2xl opacity-30"
                  style={{ background: 'linear-gradient(135deg, hsl(192 100% 50% / 0.25) 0%, hsl(280 100% 60% / 0.15) 100%)' }}
                  animate={{ opacity: [0.2, 0.35, 0.2] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
                {/* Gradient border */}
                <div
                  className="absolute -inset-[2px] rounded-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'linear-gradient(135deg, hsl(192 100% 50%) 0%, hsl(220 100% 60%) 50%, hsl(280 100% 60%) 100%)' }}
                />
                {/* Image */}
                <div className="relative bg-background p-[2px] rounded-2xl">
                  <img
                    src={sumitPhoto}
                    alt="Sumit Mohan - GenAI Engineer & Data Scientist"
                    className="relative w-full max-w-[350px] md:max-w-[400px] h-auto object-cover rounded-[0.875rem] group-hover:scale-[1.01] transition-transform duration-700 shadow-2xl"
                  />
                </div>
                {/* Floating badge */}
                <motion.div
                  className="absolute -bottom-3 -right-3 bg-card dark:bg-card/90 rounded-xl px-4 py-2.5 shadow-xl border border-border/50 dark:border-white/10 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-foreground">Open to AI/GenAI Roles</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Mission Card — Premium blockquote */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card-elevated p-0 relative overflow-hidden group hover-lift"
            >
              {/* Top gradient line */}
              <div className="h-1 bg-gradient-to-r from-accent via-blue-500 to-purple-500 opacity-80" />

              <div className="p-6 relative">
                {/* Left accent bar */}
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-purple-500" />

                <div className="pl-4">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <Rocket className="w-5 h-5 text-accent" />
                    My Mission
                  </h3>
                  <p className="text-muted-foreground text-base italic leading-relaxed relative">
                    <span className="text-4xl text-accent/15 absolute -top-3 -left-2 font-serif">"</span>
                    To build production-grade AI systems that solve real-world problems — from intelligent platforms like Astromology.com to scalable EdTech solutions that democratize learning at scale.
                    <span className="text-4xl text-accent/15 absolute -bottom-5 right-0 font-serif">"</span>
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