import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/ui/Logo";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#architecture", label: "Architecture" },
  { href: "#expertise", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#publications", label: "Research" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Active section detection
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 100) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-2 bg-white/90 dark:bg-[#07090E]/85 backdrop-blur-2xl shadow-sm border-b border-slate-200/80 dark:border-white/[0.06]"
          : "py-2.5 sm:py-3 bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo Brand Lockup */}
          <a
            href="#"
            className="group focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="flex items-center gap-2.5 sm:gap-3 px-2.5 py-1.5 sm:px-3 rounded-xl border border-slate-200/80 bg-white/80 dark:bg-white/[0.04] dark:border-white/[0.08] shadow-sm backdrop-blur-md hover:border-cyan-500/30 transition-all duration-300">
              {/* Logo Container */}
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg border border-slate-800 bg-slate-900 dark:bg-white/[0.06] dark:border-white/[0.12] shadow-sm group-hover:scale-105 shrink-0 transition-all duration-300">
                <Logo className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
              </div>

              {/* Divider */}
              <div className="h-5 w-px hidden sm:block bg-slate-200 dark:bg-white/[0.08] transition-colors duration-300" />

              {/* Name & Title */}
              <div className="flex flex-col items-center justify-center min-w-0 text-center">
                <span className="text-[14.5px] sm:text-[15.5px] font-bold tracking-[-0.02em] leading-tight text-slate-900 dark:text-white transition-colors duration-300 whitespace-nowrap">
                  Sumit Mohan
                </span>
                <span className="text-[8.5px] sm:text-[9.5px] font-mono font-semibold tracking-[0.14em] uppercase mt-0.5 leading-none text-cyan-600 dark:text-cyan-400 transition-colors duration-300 whitespace-nowrap">
                  Principal GenAI & AI Systems Architect
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center p-1 rounded-full border border-slate-200/80 bg-white/80 dark:bg-white/[0.04] dark:border-white/[0.08] shadow-sm backdrop-blur-md transition-all duration-300">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-3 py-1.5 sm:px-3.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-slate-950 dark:text-white font-semibold"
                      : "text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-pill"
                      className="absolute inset-0 rounded-full bg-white shadow-sm border border-slate-200/90 dark:bg-white/[0.12] dark:border-white/[0.15]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2.5">
            <ThemeToggle isScrolled={isScrolled} />
            <Button
              size="sm"
              className="btn-gradient text-white font-semibold text-xs h-9 px-4 rounded-full shadow-[0_2px_8px_-2px_rgba(6,182,212,0.3)] hover:shadow-[0_4px_12px_-2px_rgba(6,182,212,0.4)] transition-all"
              onClick={() => handleNavClick("#contact")}
            >
              <Mail className="w-3.5 h-3.5 mr-1.5" />
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg border border-slate-200/80 bg-white/80 text-slate-900 shadow-sm dark:text-white dark:border-white/[0.08] dark:bg-white/[0.03] transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Modal */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 p-4 rounded-2xl bg-white/95 dark:bg-[#0B0F17]/95 backdrop-blur-2xl border border-slate-200/80 dark:border-white/[0.08] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]"
            >
              <nav className="flex flex-col space-y-0.5">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="px-4 py-2.5 text-left text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-50 dark:hover:bg-white/[0.03] rounded-xl transition-colors text-sm font-semibold"
                  >
                    {link.label}
                  </button>
                ))}
                <div className="pt-3 border-t border-slate-100 dark:border-white/[0.06] mt-2 flex items-center gap-2">
                  <Button
                    className="flex-1 btn-gradient text-white text-xs h-10 font-semibold rounded-xl shadow-md"
                    onClick={() => handleNavClick("#contact")}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Get in Touch
                  </Button>
                  <ThemeToggle isScrolled={true} />
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
