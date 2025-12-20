import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ExternalLink, GraduationCap, Phone, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Mail, href: "mailto:sumitmohan91@gmail.com", label: "Email" },
    { icon: Phone, href: "tel:+919990562197", label: "Phone" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sumitmohan1991/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/sumitmohan1", label: "GitHub" },
    { icon: GraduationCap, href: "https://scholar.google.com/citations?user=YOUR_ID", label: "Scholar" },
    { icon: ExternalLink, href: "https://code2crack.com", label: "Code2Crack" },
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Experience", href: "#experience" },
    { label: "Code2Crack", href: "#code2crack" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="py-16 bg-foreground relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground to-foreground/95" />
      
      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="font-heading text-2xl font-bold text-background block mb-3">
              Sumit Mohan
            </span>
            <p className="text-background/60 text-sm mb-4 max-w-xs">
              Head of Technical Training & Academic Leader. Building industry-aligned training ecosystems.
            </p>
            <p className="text-background/40 text-sm">
              +91 99905 62197
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-heading text-sm font-semibold text-background/80 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-background/60 hover:text-background text-sm transition-colors"
                  >
                    {link.label}
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
            <h4 className="font-heading text-sm font-semibold text-background/80 uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('mailto') || link.href.startsWith('tel') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') || link.href.startsWith('tel') ? undefined : 'noopener noreferrer'}
                  className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center text-background/60 hover:bg-accent hover:text-white transition-all duration-300"
                  aria-label={link.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/40 text-sm">
              © {currentYear} Sumit Mohan. All rights reserved.
            </p>
            <p className="text-background/40 text-sm flex items-center gap-1.5">
              Crafted with <Heart className="w-3.5 h-3.5 text-accent" /> for excellence in education
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
