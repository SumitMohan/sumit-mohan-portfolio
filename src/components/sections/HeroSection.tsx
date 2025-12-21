import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, ExternalLink, Sparkles, ChevronDown, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Premium Gradient Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 z-[1] overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
          style={{ 
            background: 'radial-gradient(circle, hsl(192 100% 50% / 0.25) 0%, transparent 70%)'
          }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/4 -left-20 w-[400px] h-[400px] rounded-full"
          style={{ 
            background: 'radial-gradient(circle, hsl(280 100% 60% / 0.15) 0%, transparent 70%)'
          }}
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{ 
            background: 'radial-gradient(circle, hsl(220 100% 60% / 0.1) 0%, transparent 60%)'
          }}
          animate={{ 
            scale: [1, 1.15, 1],
            x: [0, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 z-[2] opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 z-[3] noise-overlay pointer-events-none" />

      <div className="section-container relative z-10 py-20 md:py-0">
        <div className="max-w-5xl">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] mb-10">
              <motion.span
                animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Sparkles className="w-4 h-4 text-accent" />
              </motion.span>
              <span className="text-white/80 text-sm font-semibold tracking-wide">
                Welcome to My Portfolio
              </span>
            </span>
          </motion.div>

          {/* Name with Gradient */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6"
          >
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-black leading-[0.95] tracking-tight">
              <span className="text-white">Hi, I'm </span>
              <span className="relative">
                <span className="text-shimmer">Sumit Mohan</span>
                <motion.span 
                  className="absolute -bottom-2 left-0 right-0 h-1 rounded-full"
                  style={{ background: 'var(--gradient-accent)' }}
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </span>
            </h1>
          </motion.div>

          {/* Title with Gradient Accent */}
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-white/70 mb-10 leading-relaxed"
          >
            <span className="text-white font-semibold">Head of Technical Training</span>
            <span className="text-white/30 mx-4">•</span>
            <span className="gradient-text-static font-bold">AI & EdTech Innovator</span>
          </motion.h2>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl lg:text-2xl text-white/50 max-w-3xl mb-14 leading-relaxed font-light"
          >
            Transforming technical education through <span className="text-white/80 font-medium">AI-powered platforms</span>, 
            industry-aligned curriculum, and <span className="text-white/80 font-medium">scalable training solutions</span> that 
            prepare tomorrow's workforce.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <Button 
              size="xl" 
              className="btn-gradient text-white font-bold rounded-full px-10 py-7 text-lg group"
              onClick={() => window.open('https://code2crack.com', '_blank')}
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Explore Code2Crack
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="xl" 
              variant="heroOutline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full px-10 py-7 text-lg font-semibold border-2 border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
            >
              <FileText className="mr-2 h-5 w-5" />
              Download Resume
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
                <div className="text-3xl md:text-4xl font-heading font-black text-shimmer mb-1">
                  {stat.value}
                </div>
                <div className="text-white/40 text-sm font-medium tracking-wide uppercase">
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
          <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase font-semibold group-hover:text-white/50 transition-colors">
            Scroll Down
          </span>
          <ChevronDown className="w-5 h-5 text-white/30 group-hover:text-white/50 transition-colors" />
        </motion.button>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-[5]" />
    </section>
  );
};

export default HeroSection;