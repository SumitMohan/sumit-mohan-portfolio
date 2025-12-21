import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Linkedin, ExternalLink, Mail, Github, GraduationCap, ArrowUpRight, Sparkles, MessageCircle } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sumitmohan1991/", color: "from-blue-500 to-blue-600" },
  { icon: Github, label: "GitHub", href: "https://github.com/sumitmohan1", color: "from-gray-600 to-gray-700" },
  { icon: GraduationCap, label: "Scholar", href: "https://scholar.google.com/citations?user=YOUR_ID", color: "from-purple-500 to-purple-600" },
  { icon: ExternalLink, label: "Code2Crack", href: "https://code2crack.com", color: "from-cyan-500 to-blue-500" },
];

const CTASection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{ background: 'var(--gradient-hero)' }}
      />

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 z-[1] overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-[400px] h-[400px] rounded-full"
          style={{ 
            background: 'radial-gradient(circle, hsl(192 100% 50% / 0.2) 0%, transparent 70%)'
          }}
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 40, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full"
          style={{ 
            background: 'radial-gradient(circle, hsl(280 100% 60% / 0.15) 0%, transparent 70%)'
          }}
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ 
            background: 'radial-gradient(circle, hsl(220 100% 60% / 0.08) 0%, transparent 60%)'
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 z-[2] opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Noise Texture */}
      <div className="absolute inset-0 z-[3] noise-overlay pointer-events-none" />
      
      <div className="section-container relative z-10" ref={containerRef}>
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span 
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <MessageCircle className="w-4 h-4 text-accent" />
            <span className="text-white/80 text-sm font-semibold">Ready to Connect?</span>
          </motion.span>

          <motion.h2 
            className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-8 leading-[1.05]"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's Build Impactful
            <span className="block text-shimmer mt-2">Training Ecosystems</span>
          </motion.h2>

          <motion.p 
            className="text-lg md:text-xl text-white/50 mb-14 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Interested in collaborating on academic programs, EdTech solutions, 
            or training initiatives? <span className="text-white/70 font-medium">Let's connect and explore opportunities.</span>
          </motion.p>

          {/* Main CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-5 mb-14"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button 
              size="xl"
              className="bg-white text-primary hover:bg-white/95 shadow-2xl shadow-white/20 rounded-full px-10 py-7 text-lg font-bold group hover:scale-[1.02] transition-all duration-300"
            >
              <FileText className="mr-2 h-5 w-5" />
              Download Resume
              <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
            <Button 
              size="xl"
              className="rounded-full px-10 py-7 text-lg font-semibold border-2 border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              onClick={() => window.location.href = 'mailto:sumitmohan91@gmail.com'}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get in Touch
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] text-white/80 hover:text-white hover:bg-white/15 hover:border-white/20 transition-all duration-300 text-sm font-semibold group"
              >
                <span className={`w-8 h-8 rounded-lg bg-gradient-to-br ${link.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <link.icon className="w-4 h-4 text-white" />
                </span>
                {link.label}
              </motion.a>
            ))}
          </motion.div>

          {/* Email Direct */}
          <motion.div
            className="mt-12 pt-12 border-t border-white/10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <p className="text-white/40 text-sm mb-3">Or reach me directly at</p>
            <a 
              href="mailto:sumitmohan91@gmail.com" 
              className="text-xl md:text-2xl font-heading font-bold text-shimmer hover:opacity-80 transition-opacity"
            >
              sumitmohan91@gmail.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;