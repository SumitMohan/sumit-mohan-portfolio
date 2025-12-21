import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, ExternalLink, Sparkles, ChevronDown, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Clean Background with subtle gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-50 to-white" />

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.4]"
        style={{
          backgroundImage: `linear-gradient(#e5e7eb 1px, transparent 1px),
                           linear-gradient(90deg, #e5e7eb 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="section-container relative z-10 pt-32 pb-20 flex flex-col items-center justify-center text-center min-h-[90vh]">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-bold tracking-wide mb-8 border border-blue-100">
              <Sparkles className="w-4 h-4" />
              Transforming Engineering Education
            </span>
          </motion.div>

          {/* Headline - Code2Crack Style (Dark Green/Navy) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8"
          >
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-slate-900 mb-6">
              Bridging Academia & <span className="text-[#0ea5e9]">Industry</span>
              <br />
              <span className="text-[#0f172a]">with AI-Driven Education.</span>
            </h1>
          </motion.div>

          {/* Subheadline - Relaxed Grey */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Head of Technical Training & EdTech Founder building scalable, <span className="text-[#0ea5e9] font-bold">industry-aligned learning ecosystems.</span>
          </motion.h2>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <Button
              size="xl"
              className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-bold rounded-full px-8 py-4 text-base md:text-lg group shadow-lg shadow-blue-500/25"
              onClick={() => window.open('https://code2crack.com', '_blank')}
            >
              <Sparkles className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Explore Innovation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="xl"
              variant="outline"
              onClick={() => document.getElementById('publications')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full px-8 py-4 text-base md:text-lg font-semibold border-2 border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300"
            >
              <FileText className="mr-2 h-5 w-5 text-slate-500" />
              View Research
            </Button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-10 md:gap-16 mt-16 pt-16 border-t border-white/10"
          >
            {[
              { value: "7+", label: "Years Experience" },
              { value: "10K+", label: "Students Trained" },
              { value: "95%", label: "Placement Rate" },
              { value: "50+", label: "Courses Designed" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="group"
              >
                <div className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-500 text-sm font-bold tracking-wide uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.button
          className="flex flex-col items-center gap-3 group"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-slate-400 text-[10px] tracking-[0.3em] uppercase font-bold group-hover:text-slate-600 transition-colors">
            Scroll Down
          </span>
          <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-colors" />
        </motion.button>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-[5]" />
    </section>
  );
};

export default HeroSection;