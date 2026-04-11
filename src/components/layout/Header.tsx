import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Logo } from "@/components/ui/Logo";

const navLinks = [
  { href: "#about", label: "About" },
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
      setIsScrolled(window.scrollY > 50);

      // Active section detection
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) current = id;
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-background/80 backdrop-blur-xl shadow-sm border-b border-border/50"
        : "bg-transparent"
        }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <a
            href="#"
            className="hover:opacity-90 transition-opacity"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="flex items-center gap-3">
              {/* Monogram */}
              <Logo className="w-10 h-10 shadow-lg shadow-accent/20" />
              <div className="flex flex-col leading-none">
                <span className={`text-base md:text-lg font-black font-heading tracking-tight transition-colors duration-300 ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}>
                  Sumit Mohan
                </span>
                <span className={`text-[0.6rem] font-bold tracking-[0.15em] uppercase mt-0.5 transition-colors duration-300 ${
                  isScrolled ? 'text-accent' : 'text-accent/80'
                }`}>
                  GenAI Engineer
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive
                      ? (isScrolled ? "text-foreground" : "text-white")
                      : (isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/60 hover:text-white")
                  }`}
                >
                  {link.label}
                  {/* Active underline indicator */}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-accent transition-all duration-300 ${isActive ? "w-5 opacity-100" : "w-0 opacity-0"
                      }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button
              size="sm"
              className="btn-gradient text-white font-semibold text-sm shadow-lg shadow-accent/20"
              onClick={() => window.open("https://astromology.com", "_blank")}
            >
              Astromology.com
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-foreground hover:bg-muted' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-xl">
            <nav className="flex flex-col p-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-3 text-left text-foreground hover:text-accent hover:bg-muted/50 rounded-lg transition-colors text-sm font-medium"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-3 border-t border-border mt-2 flex flex-col gap-3">
                <Button
                  className="w-full btn-gradient text-white"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.open("https://astromology.com", "_blank");
                  }}
                >
                  Astromology.com
                </Button>
                <div className="flex justify-center">
                  <ThemeToggle />
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
