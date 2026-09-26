import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Linkedin, Mail, Github, ArrowUpRight, MessageCircle, Copy, Check } from "lucide-react";
import { toast } from "sonner";

const CTASection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("sumitmohan91@gmail.com");
    setCopied(true);
    toast.success("Email copied to clipboard: sumitmohan91@gmail.com");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-slate-50/60 dark:bg-[#07090E] transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/10 dark:bg-cyan-500/[0.08] rounded-full blur-[140px] pointer-events-none" />
      
      {/* Crisp dot grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="section-container relative z-10" ref={containerRef}>
        <motion.div
          className="max-w-4xl mx-auto rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/50 dark:bg-[#0A0F1A] dark:border-slate-800/60 dark:shadow-[0_24px_80px_-12px_rgba(0,0,0,0.6)] p-8 md:p-12 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Top accent border line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500/30 via-sky-500 to-indigo-500/30 dark:from-cyan-400/50 dark:via-sky-400 dark:to-indigo-400/50" />

          {/* Badge */}
          <motion.div
            className="mb-6 inline-flex"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100/80 border border-slate-200/80 text-slate-700 dark:bg-slate-800/50 dark:border-slate-700/60 dark:text-slate-300 text-xs font-semibold tracking-wider uppercase">
              <MessageCircle className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              Let's Connect
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's Build Intelligent{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-indigo-600 dark:from-cyan-400 dark:via-sky-300 dark:to-indigo-400 bg-clip-text text-transparent">
              AI Systems Together
            </span>
          </motion.h2>

          <motion.p
            className="text-base text-slate-600 dark:text-slate-300 mb-10 max-w-xl mx-auto leading-relaxed font-normal"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Available for full-time GenAI and AI engineering opportunities, technical architecture consulting, and collaborative research initiatives.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-3.5 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-slate-900 text-white hover:bg-slate-800 shadow-md shadow-slate-900/15 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 rounded-xl h-11 px-7 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
              onClick={() => window.open('/Resume.pdf', '_blank')}
            >
              <FileText className="h-4 w-4" />
              Download Resume
              <ArrowUpRight className="h-4 w-4 opacity-70" />
            </Button>

            <a
              href="mailto:sumitmohan91@gmail.com"
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-semibold transition-all duration-300 border border-slate-200/90 bg-white hover:bg-slate-50 text-slate-800 rounded-xl px-7 h-11 shadow-sm dark:bg-slate-800/50 dark:border-slate-700/60 dark:text-white dark:hover:bg-slate-800 hover:-translate-y-0.5"
            >
              <Mail className="mr-2 h-4 w-4 text-cyan-600 dark:text-cyan-400" />
              Send Direct Email
            </a>

            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center justify-center whitespace-nowrap text-xs font-mono transition-all duration-300 border border-slate-200/80 bg-slate-50 hover:bg-white text-slate-600 hover:text-slate-900 dark:border-slate-700/50 dark:bg-slate-800/30 dark:text-slate-300 dark:hover:text-white rounded-xl px-4 h-11 shadow-sm"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500 mr-1.5" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 mr-1.5 opacity-60" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <a
              href="mailto:sumitmohan91@gmail.com"
              className="p-5 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:border-cyan-500/40 hover:shadow-md dark:bg-slate-800/40 dark:border-slate-700/50 dark:hover:bg-slate-800/70 transition-all duration-300 group"
            >
              <div className="mx-auto w-10 h-10 bg-cyan-50 border border-cyan-200/70 dark:bg-cyan-500/10 dark:border-cyan-500/25 rounded-xl flex items-center justify-center mb-3 group-hover:scale-105 transition-all">
                <Mail className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-slate-900 dark:text-white font-bold text-sm mb-1">Email</h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs font-mono truncate">sumitmohan91@gmail.com</p>
            </a>

            <a
              href="https://www.linkedin.com/in/sumit-mohan-dsa-expert/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:border-cyan-500/40 hover:shadow-md dark:bg-slate-800/40 dark:border-slate-700/50 dark:hover:bg-slate-800/70 transition-all duration-300 group"
            >
              <div className="mx-auto w-10 h-10 bg-cyan-50 border border-cyan-200/70 dark:bg-cyan-500/10 dark:border-cyan-500/25 rounded-xl flex items-center justify-center mb-3 group-hover:scale-105 transition-all">
                <Linkedin className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-slate-900 dark:text-white font-bold text-sm mb-1">LinkedIn</h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs font-mono truncate">sumit-mohan-dsa-expert</p>
            </a>

            <a
              href="https://github.com/SumitMohan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:border-cyan-500/40 hover:shadow-md dark:bg-slate-800/40 dark:border-slate-700/50 dark:hover:bg-slate-800/70 transition-all duration-300 group"
            >
              <div className="mx-auto w-10 h-10 bg-cyan-50 border border-cyan-200/70 dark:bg-cyan-500/10 dark:border-cyan-500/25 rounded-xl flex items-center justify-center mb-3 group-hover:scale-105 transition-all">
                <Github className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-slate-900 dark:text-white font-bold text-sm mb-1">GitHub</h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs font-mono truncate">SumitMohan</p>
            </a>
          </motion.div>

          {/* Response Time Indicator */}
          <div className="mt-8 inline-flex items-center gap-2 text-xs font-mono text-slate-400 dark:text-slate-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
            Typically responds within 24 hours
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;