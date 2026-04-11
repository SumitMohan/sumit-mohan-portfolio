import { ArrowRight, FileText, ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
      {/* Background: Deep gradient + dot grid */}
      <div className="absolute inset-0 z-0" style={{ background: 'var(--gradient-hero)' }} />
      <div className="absolute inset-0 z-0 professional-grid opacity-40" />

      {/* Subtle radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/10 rounded-full blur-[120px] z-0" />

      {/* Noise */}
      <div className="absolute inset-0 z-0 noise-overlay pointer-events-none" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center max-w-4xl mx-auto">

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/[0.08] text-white/70 text-xs font-semibold tracking-wider uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              Open to GenAI & AI Engineering Roles
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-[1.1] text-white">
              Architecting Intelligent Systems
              <br className="hidden md:block" />
              <span className="text-shimmer">from Research to Production</span>
            </h1>

            {/* Professional subtitle */}
            <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              <span className="text-white/80">GenAI Engineer & Data Scientist</span> with 7+ years
              building scalable AI systems, LLM-powered products, and production-grade applications.
            </p>
          </motion.div>

          {/* Status Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/40 text-sm font-medium"
          >
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent" />
              7+ Years Experience
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent" />
              6 Publications
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent" />
              2 Live Products
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent" />
              PhD Candidate
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Button
              size="lg"
              className="btn-gradient h-12 px-8 rounded-lg text-sm font-bold tracking-wide text-white"
              onClick={() => window.open("https://astromology.com", "_blank")}
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Explore Astromology.com
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 rounded-lg border-white/10 bg-white/[0.04] backdrop-blur-xl hover:bg-white/[0.08] text-white/80 text-sm font-semibold transition-all duration-300 hover:border-white/20"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <FileText className="mr-2 h-4 w-4" />
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] text-white/30 uppercase tracking-[0.25em] font-medium">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-transparent to-white/20" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;