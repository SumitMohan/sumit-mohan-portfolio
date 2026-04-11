import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Linkedin, Mail, Github, ArrowUpRight, MessageCircle } from "lucide-react";

const CTASection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0" style={{ background: 'var(--gradient-hero)' }} />
      <div className="absolute inset-0 z-0 professional-grid opacity-30" />

      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent/10 rounded-full blur-[100px] z-[1]" />

      {/* Noise */}
      <div className="absolute inset-0 z-[2] noise-overlay pointer-events-none" />

      <div className="section-container relative z-10" ref={containerRef}>
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Badge */}
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/[0.08] mb-8"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <MessageCircle className="w-3.5 h-3.5 text-accent" />
            <span className="text-white/60 text-xs font-semibold tracking-wider uppercase">Let's Connect</span>
          </motion.span>

          {/* Heading */}
          <motion.h2
            className="font-heading text-2xl md:text-3xl lg:text-4xl font-black text-white mb-5 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's Build Intelligent <span className="text-shimmer">AI Systems Together</span>
          </motion.h2>

          <motion.p
            className="text-base text-white/50 mb-10 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Interested in collaborating on GenAI projects, AI system design,
            or building production-grade applications? Let's connect.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/95 shadow-xl rounded-lg h-12 px-8 text-sm font-bold group"
              onClick={() => window.open('/Resume.pdf', '_blank')}
            >
              <FileText className="mr-2 h-4 w-4" />
              Download Resume
              <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sumitmohan91@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-bold transition-all duration-300 border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] text-white/80 rounded-lg px-8 h-12 backdrop-blur-sm"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
            </a>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <a
              href="mailto:sumitmohan91@gmail.com"
              className="p-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.07] transition-colors backdrop-blur-sm group border border-white/[0.06]"
            >
              <div className="mx-auto w-10 h-10 bg-white/[0.06] rounded-lg flex items-center justify-center mb-2 group-hover:bg-white/[0.1] transition-colors">
                <Mail className="h-5 w-5 text-white/70" />
              </div>
              <h3 className="text-white/90 font-semibold text-sm mb-0.5">Email</h3>
              <p className="text-white/40 text-xs">sumitmohan91@gmail.com</p>
            </a>

            <a
              href="https://www.linkedin.com/in/sumitmohan1991/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.07] transition-colors backdrop-blur-sm group border border-white/[0.06]"
            >
              <div className="mx-auto w-10 h-10 bg-white/[0.06] rounded-lg flex items-center justify-center mb-2 group-hover:bg-white/[0.1] transition-colors">
                <Linkedin className="h-5 w-5 text-white/70" />
              </div>
              <h3 className="text-white/90 font-semibold text-sm mb-0.5">LinkedIn</h3>
              <p className="text-white/40 text-xs">Connect Professionally</p>
            </a>

            <a
              href="https://github.com/sumitmohan1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.07] transition-colors backdrop-blur-sm group border border-white/[0.06]"
            >
              <div className="mx-auto w-10 h-10 bg-white/[0.06] rounded-lg flex items-center justify-center mb-2 group-hover:bg-white/[0.1] transition-colors">
                <Github className="h-5 w-5 text-white/70" />
              </div>
              <h3 className="text-white/90 font-semibold text-sm mb-0.5">GitHub</h3>
              <p className="text-white/40 text-xs">View Projects</p>
            </a>
          </motion.div>

          {/* Direct Email */}
          <motion.div
            className="mt-12 pt-8 border-t border-white/[0.06]"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <p className="text-white/30 text-xs mb-2">Or reach me directly at</p>
            <a
              href="mailto:sumitmohan91@gmail.com"
              className="text-lg font-heading font-bold text-shimmer hover:opacity-80 transition-opacity"
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