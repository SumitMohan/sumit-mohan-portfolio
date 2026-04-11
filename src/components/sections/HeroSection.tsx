import { ArrowRight, FileText, ArrowDown, MousePointer2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const techPills = [
  "RAG Pipelines", "LLMs", "LangChain", "FastAPI", "PyTorch",
  "Vector Databases", "Prompt Engineering", "Transformers"
];

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
      {/* Background with Noise & Gradient */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay"></div>

      {/* Animated Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] animate-pulse-glow z-0"></div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="section-badge backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Building Production-Grade AI Systems
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-6 max-w-5xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] md:leading-tight">
              Building Intelligent AI Systems <br className="hidden md:block" />
              from <span className="gradient-text">Research to Production</span>
            </h1>
            <p className="mx-auto max-w-3xl text-muted-foreground text-lg md:text-xl leading-relaxed">
              <span className="text-foreground font-semibold">GenAI Engineer & Data Scientist</span> with 7+ years building scalable AI systems,
              LLM-powered products, and intelligent applications. Creator of{" "}
              <span className="text-foreground font-semibold">Astromology.com</span> &{" "}
              <span className="text-foreground font-semibold">Code2Crack</span>.
            </p>
          </motion.div>

          {/* Tech Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-2 max-w-2xl"
          >
            {techPills.map((pill, index) => (
              <motion.span
                key={pill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.06 }}
                className="px-4 py-1.5 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20 backdrop-blur-sm hover:bg-accent/20 transition-colors cursor-default"
              >
                {pill}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-5 w-full justify-center pt-4"
          >
            <Button
              size="lg"
              className="btn-gradient h-14 px-8 rounded-full text-base font-semibold tracking-wide hover-glow"
              onClick={() => window.open("https://astromology.com", "_blank")}
            >
              <Sparkles className="mr-2 h-5 w-5 animate-pulse" />
              Explore Astromology.com
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 rounded-full border-primary/20 bg-background/50 backdrop-blur-xl hover:bg-primary/5 text-base font-medium transition-all duration-300 hover:border-primary/50"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <FileText className="mr-2 h-5 w-5" />
              View Projects
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-primary/20 to-primary/50"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;