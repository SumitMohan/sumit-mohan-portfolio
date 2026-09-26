import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ExternalLink, GraduationCap, Heart, MessageCircle, Globe } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Mail, href: "mailto:sumitmohan91@gmail.com", label: "Email" },
    { icon: MessageCircle, href: "https://wa.me/919990562197", label: "WhatsApp" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sumit-mohan-dsa-expert/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/SumitMohan", label: "GitHub" },
    { icon: GraduationCap, href: "https://scholar.google.com/citations?user=EVVD-Z0AAAAJ&hl=en", label: "Google Scholar" },
    { icon: Globe, href: "https://www.astromology.com", label: "Astromology" },
    { icon: ExternalLink, href: "https://www.code2crack.com", label: "Code2Crack" },
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Architecture", href: "#architecture" },
    { label: "Skills", href: "#expertise" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Research", href: "#publications" },
    { label: "Contact", href: "#contact" },
  ];

  const ecosystemProjects = [
    {
      name: "Astromology.com",
      role: "Founder & Lead Architect",
      desc: "GenAI-powered astrological intelligence platform.",
      href: "https://www.astromology.com",
    },
    {
      name: "Code2Crack.com",
      role: "Creator & Engineer",
      desc: "Multi-tenant tech assessment & ed-tech ecosystem.",
      href: "https://www.code2crack.com",
    },
  ];

  return (
    <footer className="relative bg-slate-100/90 dark:bg-[#07090E] border-t border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300 overflow-hidden">
      {/* Top subtle glow bar */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 dark:via-cyan-500/50 to-transparent" />

      {/* Radial background ambient light */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-gradient-to-b from-cyan-500/5 via-indigo-500/5 to-transparent blur-3xl opacity-60 dark:opacity-40" />
      </div>

      <div className="section-container relative z-10 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          {/* Column 1: Brand & Status */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-start"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 dark:bg-white/[0.06] dark:border-white/15 shadow-md shadow-cyan-500/10 shrink-0">
                <Logo className="w-7 h-7" />
              </div>
              <div className="flex flex-col items-start">
                <span className="font-heading text-lg font-bold text-slate-900 dark:text-white tracking-[-0.02em] leading-tight">
                  Sumit Mohan
                </span>
                <span className="text-[10px] font-mono font-semibold tracking-[0.14em] text-cyan-600 dark:text-cyan-400 uppercase leading-tight mt-0.5">
                  Principal GenAI Architect
                </span>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
              Architecting production-grade GenAI systems, multi-agent pipelines, and high-throughput machine learning infrastructure.
            </p>

            {/* Live Availability Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available for GenAI & AI Architecture
            </div>
          </motion.div>

          {/* Column 2: Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-5">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white text-xs sm:text-sm transition-all duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-cyan-500 dark:group-hover:bg-cyan-400 group-hover:scale-125 transition-all" />
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Ecosystem & Live Projects */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-5">
              Ecosystem
            </h4>
            <div className="space-y-3">
              {ecosystemProjects.map((proj, idx) => (
                <a
                  key={idx}
                  href={proj.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 rounded-xl bg-white border border-slate-200/80 dark:bg-white/[0.03] dark:border-white/10 hover:border-cyan-500/40 dark:hover:border-cyan-500/30 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {proj.name}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                    {proj.desc}
                  </p>
                </a>
              ))}

              <a
                href="https://scholar.google.com/citations?user=EVVD-Z0AAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 dark:bg-white/[0.03] dark:border-white/10 hover:border-cyan-500/40 dark:hover:border-cyan-500/30 hover:shadow-md transition-all duration-300 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 group"
              >
                <GraduationCap className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span>Google Scholar Citations (12+)</span>
              </a>
            </div>
          </motion.div>

          {/* Column 4: Direct Contact & Social Connections */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-5">
              Direct Contact
            </h4>
            <div className="space-y-2.5 mb-6">
              <a
                href="mailto:sumitmohan91@gmail.com"
                className="flex items-center gap-2.5 text-xs text-slate-600 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400 transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-slate-200/70 dark:bg-white/5 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>sumitmohan91@gmail.com</span>
              </a>

              <a
                href="https://wa.me/919990562197"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs text-slate-600 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400 transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-slate-200/70 dark:bg-white/5 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  <MessageCircle className="w-3.5 h-3.5" />
                </div>
                <span>+91-99905-62197</span>
              </a>
            </div>

            <h5 className="text-[11px] font-mono font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">
              Social Profiles
            </h5>
            {/* Social Buttons - Centered Flex Container */}
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="w-9 h-9 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center text-slate-600 hover:text-cyan-600 hover:border-cyan-500/40 hover:bg-cyan-500/10 dark:bg-white/[0.05] dark:border-white/10 dark:text-slate-300 dark:hover:text-cyan-400 dark:hover:bg-cyan-400/10 dark:hover:border-cyan-400/30 hover:-translate-y-0.5 transition-all duration-200"
                  aria-label={link.label}
                  title={link.label}
                >
                  <link.icon className="w-4 h-4 shrink-0" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Utility Bar */}
        <div className="pt-8 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p className="font-medium">
            © {currentYear} Sumit Mohan. All rights reserved.
          </p>

          <p className="flex items-center gap-1 font-medium">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for high-scale AI</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;