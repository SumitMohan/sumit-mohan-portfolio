import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Linkedin, ExternalLink, Mail, Github, GraduationCap, ArrowUpRight } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sumitmohan1991/" },
  { icon: Github, label: "GitHub", href: "https://github.com/sumitmohan1" },
  { icon: GraduationCap, label: "Scholar", href: "https://scholar.google.com/citations?user=YOUR_ID" },
  { icon: ExternalLink, label: "Code2Crack", href: "https://code2crack.com" },
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
          className="absolute top-20 left-20 w-80 h-80 rounded-full"
          style={{ 
            background: 'radial-gradient(circle, hsl(192 91% 36% / 0.25) 0%, transparent 70%)'
          }}
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full"
          style={{ 
            background: 'radial-gradient(circle, hsl(199 89% 48% / 0.2) 0%, transparent 70%)'
          }}
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Noise Texture */}
      <div className="absolute inset-0 z-[2] noise-overlay pointer-events-none" />
      
      <div className="section-container relative z-10" ref={containerRef}>
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 text-white/80 text-sm font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Ready to Connect?
          </motion.span>

          <motion.h2 
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's Build Impactful
            <span className="block text-accent">Training Ecosystems</span>
          </motion.h2>

          <motion.p 
            className="text-lg text-white/60 mb-12 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Interested in collaborating on academic programs, EdTech solutions, 
            or training initiatives? Let's connect and explore opportunities.
          </motion.p>

          {/* Main CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button 
              size="lg"
              className="btn-premium bg-white text-primary hover:bg-white/90 shadow-xl rounded-full px-8"
            >
              <FileText className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              size="lg"
              variant="heroOutline"
              className="rounded-full px-8"
              onClick={() => window.location.href = 'mailto:sumitmohan91@gmail.com'}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get in Touch
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3"
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
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 hover:text-white hover:bg-white/20 transition-colors text-sm font-medium"
              >
                <link.icon className="w-4 h-4" />
                {link.label}
                <ArrowUpRight className="w-3 h-3 opacity-50" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
