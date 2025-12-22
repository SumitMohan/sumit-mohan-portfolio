import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Impact" },
  { href: "#code2crack", label: "Ventures" },
  { href: "#publications", label: "Research" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-white/5"
        : "bg-transparent py-4"
        }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-bold font-heading text-foreground tracking-tight hover:opacity-80 transition-opacity"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="flex flex-col leading-none">
              <span className="text-xl md:text-2xl font-black font-heading text-shimmer tracking-tight">
                Sumit Mohan
              </span>
              <div className="flex justify-between items-center w-full mt-0.5 px-0.5">
                <span className="text-[0.55rem] md:text-[0.65rem] font-semibold text-muted-foreground/80 tracking-tight">Bridging</span>
                <span className="text-[0.55rem] md:text-[0.65rem] font-semibold text-muted-foreground/80 tracking-tight">Academia</span>
                <span className="text-[0.55rem] md:text-[0.65rem] font-semibold text-muted-foreground/80 tracking-tight">&</span>
                <span className="text-[0.55rem] md:text-[0.65rem] font-semibold text-muted-foreground/80 tracking-tight">Industry</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105 ${isScrolled
                  ? "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  : "text-foreground/80 hover:text-foreground hover:bg-white/5"
                  }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Button
              size="sm"
              className="btn-gradient text-white font-semibold shadow-lg hover-glow transition-all duration-300"
              onClick={() => window.open("https://code2crack.com", "_blank")}
            >
              Code2Crack
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:bg-white/5 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 shadow-2xl">
            <nav className="flex flex-col p-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-3 text-left text-foreground hover:text-accent hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2 flex flex-col gap-4">
                <Button
                  className="w-full btn-gradient"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.open("https://code2crack.com", "_blank");
                  }}
                >
                  Explore Code2Crack
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
