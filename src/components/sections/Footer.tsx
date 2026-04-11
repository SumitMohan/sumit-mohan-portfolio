import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ExternalLink, GraduationCap, Heart, ArrowUpRight, MessageCircle, Star } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Mail, href: "mailto:sumitmohan91@gmail.com", label: "Email" },
    { icon: MessageCircle, href: "https://wa.me/919990562197", label: "WhatsApp" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sumitmohan1991/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/sumitmohan1", label: "GitHub" },
    { icon: GraduationCap, href: "https://scholar.google.com/citations?user=EVVD-Z0AAAAJ", label: "Scholar" },
    { icon: Star, href: "https://astromology.com", label: "Astromology" },
    { icon: ExternalLink, href: "https://code2crack.com", label: "Code2Crack" },
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#expertise" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Research", href: "#publications" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-[#0A0F1C] border-t border-slate-800/50 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-blue-500/10 to-transparent blur-3xl opacity-30" />
      </div>

      <div className="section-container relative z-10 py-16">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Logo className="w-10 h-10 drop-shadow-lg" />
              <div className="flex flex-col">
                <span className="font-heading text-xl font-black text-white tracking-tight leading-none mb-1">
                  Sumit Mohan
                </span>
                <span className="text-[0.65rem] font-bold tracking-[0.1em] text-cyan-400 uppercase">
                  GenAI Engineer
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm mb-6 max-w-sm leading-relaxed">
              Architecting intelligent AI systems and production-grade pipelines. Translating cutting-edge research into robust, real-world solutions.
            </p>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li>
                <a href="mailto:sumitmohan91@gmail.com" className="flex items-center gap-2.5 hover:text-cyan-400 transition-colors">
                  <Mail className="h-4 w-4 text-slate-500" />
                  sumitmohan91@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919990562197"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-cyan-400 transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-slate-500" />
                  +91-99905-62197
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-heading text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-heading text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-6">
              Connect
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 hover:border-cyan-500/30 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                  aria-label={link.label}
                  title={link.label}
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            
            <div className="mt-8 p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <p className="text-xs text-slate-400 leading-relaxed">
                Currently open to <span className="text-white font-medium">GenAI</span> & <span className="text-white font-medium">Data Engineering</span> roles worldwide.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Divider + Bottom */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-xs font-medium tracking-wide">
              © {currentYear} Sumit Mohan. All rights reserved.
            </p>
            <p className="text-slate-500 text-xs font-medium tracking-wide flex items-center gap-1.5">
              Designed with 
              <Heart className="w-3.5 h-3.5 text-rose-500/80 fill-rose-500/80" />
              for the future
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;