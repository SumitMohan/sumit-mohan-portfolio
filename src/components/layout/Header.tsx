import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

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
        ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50"
        : "bg-transparent"
        }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className={`text-xl font-bold transition-colors ${isScrolled ? "text-foreground" : "text-slate-900"
              }`}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            SM
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${isScrolled
                  ? "text-muted-foreground hover:text-foreground hover:bg-muted"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              size="sm"
              className={isScrolled ? "" : "bg-[#0ea5e9] hover:bg-[#0284c7] text-white"}
              onClick={() => window.open("https://code2crack.com", "_blank")}
            >
              Code2Crack
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled
              ? "text-foreground hover:bg-muted"
              : "text-slate-900 hover:bg-slate-100"
              }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg">
            <nav className="flex flex-col p-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-3 text-left text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Button
                className="mt-4"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.open("https://code2crack.com", "_blank");
                }}
              >
                Explore Code2Crack
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
