import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ExternalLink, GraduationCap, Phone, Heart, ArrowUpRight, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Mail, href: "mailto:sumitmohan91@gmail.com", label: "Email", gradient: "from-rose-500 to-red-600" },
    { icon: MessageCircle, href: "https://wa.me/919990562197", label: "WhatsApp", gradient: "from-emerald-500 to-teal-600" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sumitmohan1991/", label: "LinkedIn", gradient: "from-blue-500 to-blue-600" },
    { icon: Github, href: "https://github.com/sumitmohan1", label: "GitHub", gradient: "from-gray-500 to-gray-700" },
    { icon: GraduationCap, href: "https://scholar.google.com/citations?user=YOUR_ID", label: "Scholar", gradient: "from-purple-500 to-pink-600" },
    { icon: ExternalLink, href: "https://code2crack.com", label: "Code2Crack", gradient: "from-cyan-500 to-blue-500" },
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Experience", href: "#experience" },
    { label: "Code2Crack", href: "#code2crack" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 right-20 w-[300px] h-[300px] rounded-full"
          style={{ background: 'radial-gradient(circle, hsl(192 100% 50% / 0.1) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-[250px] h-[250px] rounded-full"
          style={{ background: 'radial-gradient(circle, hsl(280 100% 60% / 0.08) 0%, transparent 70%)' }}
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="section-container relative z-10 py-20">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="font-heading text-3xl font-black text-shimmer block mb-4">
              Sumit Mohan
            </span>
            <p className="text-white/70 text-base mb-6 max-w-xs leading-relaxed">
              Head of Technical Training & Academic Leader. Building industry-aligned training ecosystems.
            </p>
            <ul className="space-y-3 text-white/70 text-sm">
              <li>
                <a href="mailto:sumitmohan91@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors group">
                  <Mail className="h-4 w-4 group-hover:text-primary transition-colors" />
                  sumitmohan91@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919990562197"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors group"
                >
                  <MessageCircle className="h-4 w-4 group-hover:text-primary transition-colors" />
                  +91-99905-62197
                </a>
              </li>
              <li className="flex gap-4 pt-2">
                <a
                  href="https://github.com/SumitMohan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-muted hover:bg-primary/10 p-2 rounded-full transition-all hover:text-primary"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="http://www.linkedin.com/in/sumit-mohan-dsa-expert"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-muted hover:bg-primary/10 p-2 rounded-full transition-all hover:text-primary"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-heading text-sm font-bold text-white/70 uppercase tracking-[0.2em] mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white text-base transition-colors inline-flex items-center gap-2 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-heading text-sm font-bold text-white/70 uppercase tracking-[0.2em] mb-6">
              Connect
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('mailto') || link.href.startsWith('tel') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') || link.href.startsWith('tel') ? undefined : 'noopener noreferrer'}
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.gradient} flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                  aria-label={link.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p
              className="text-white/30 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              © {currentYear} Sumit Mohan. All rights reserved.
            </motion.p>
            <motion.p
              className="text-white/30 text-sm flex items-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Crafted with
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              </motion.span>
              for excellence in education
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;