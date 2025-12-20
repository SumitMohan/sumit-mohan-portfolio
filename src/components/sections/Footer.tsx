import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ExternalLink, GraduationCap, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Mail, href: "mailto:sumitmohan91@gmail.com", label: "Email" },
    { icon: Phone, href: "tel:+919990562197", label: "Phone" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sumitmohan1991/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/sumitmohan1", label: "GitHub" },
    { icon: GraduationCap, href: "https://scholar.google.com/citations?user=YOUR_ID", label: "Google Scholar" },
    { icon: ExternalLink, href: "https://code2crack.com", label: "Code2Crack" },
  ];

  return (
    <footer className="py-12 bg-foreground relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground to-foreground/95" />
      
      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Name */}
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-xl font-bold text-background">
              Sumit Mohan
            </span>
            <p className="text-background/60 text-sm mt-1">
              Head of Technical Training | Academic Leader
            </p>
            <p className="text-background/40 text-xs mt-1">
              +91-99905-62197
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target={link.href.startsWith('mailto') || link.href.startsWith('tel') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') || link.href.startsWith('tel') ? undefined : 'noopener noreferrer'}
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center text-background/70 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label={link.label}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.p 
            className="text-background/50 text-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            © {currentYear} Sumit Mohan. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
