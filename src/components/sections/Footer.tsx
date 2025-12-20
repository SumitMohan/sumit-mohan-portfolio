import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Mail, href: "mailto:contact@sumitmohan.com", label: "Email" },
    { icon: Linkedin, href: "https://linkedin.com/in/sumitmohan", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/sumitmohan", label: "GitHub" },
    { icon: ExternalLink, href: "https://code2crack.com", label: "Code2Crack" },
  ];

  return (
    <footer className="py-12 bg-foreground">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <span className="text-xl font-bold text-background">
              Sumit Mohan
            </span>
            <p className="text-background/60 text-sm mt-1">
              Head of Technical Training
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center text-background/70 hover:bg-background/20 hover:text-background transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-background/50 text-sm">
            © {currentYear} Sumit Mohan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
