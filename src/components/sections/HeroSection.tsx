import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, ExternalLink, Sparkles, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Premium Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 z-[1] overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full"
          style={{ 
            background: 'radial-gradient(circle, hsl(192 91% 36% / 0.3) 0%, transparent 70%)'
          }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full"
          style={{ 
            background: 'radial-gradient(circle, hsl(199 89% 48% / 0.2) 0%, transparent 70%)'
          }}
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{ 
            background: 'radial-gradient(circle, hsl(222 47% 25% / 0.5) 0%, transparent 60%)'
          }}
          animate={{ 
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      {/* Noise Texture */}
      <div className="absolute inset-0 z-[2] noise-overlay pointer-events-none" />

      <div className="section-container relative z-10 py-20 md:py-0">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-4 h-4 text-accent" />
              </motion.span>
              <span className="text-white/90 text-sm font-medium tracking-wide">
                sumitmohan.com
              </span>
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-6"
          >
            Sumit Mohan
          </motion.h1>

          {/* Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl font-medium text-white/80 mb-8"
          >
            Head of Technical Training
            <span className="hidden sm:inline text-white/40 mx-3">|</span>
            <br className="sm:hidden" />
            <span className="text-accent font-semibold">Academic & AI Education Leader</span>
          </motion.h2>

          {/* Positioning Statement */}
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mb-12 leading-relaxed font-light"
          >
            Building industry-aligned training ecosystems through AI, curriculum design, 
            and scalable assessment platforms for tomorrow's workforce.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              size="xl" 
              className="btn-premium bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:scale-[1.02] transition-all duration-300 rounded-full px-8"
              onClick={() => window.open('https://code2crack.com', '_blank')}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Explore Code2Crack
            </Button>
            <Button 
              size="xl" 
              variant="heroOutline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:bg-white/10 transition-all duration-300 rounded-full px-8"
            >
              <FileText className="mr-2 h-5 w-5" />
              View Resume
            </Button>
          </motion.div>

          {/* Secondary CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10"
          >
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors group"
            >
              <span className="text-sm font-medium tracking-wide">Learn More</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div 
          className="flex flex-col items-center gap-3"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase font-medium">Scroll</span>
          <ChevronDown className="w-5 h-5 text-white/40" />
        </motion.div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[5]" />
    </section>
  );
};

export default HeroSection;
