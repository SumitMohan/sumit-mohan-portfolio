import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, ExternalLink } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 z-[1] opacity-[0.03]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="section-container relative z-10 py-20 md:py-0">
        <div className="max-w-4xl">
          {/* Name Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8 animate-fade-up opacity-0">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-primary-foreground/90 text-sm font-medium tracking-wide">
              sumitmohan.com
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6 animate-fade-up opacity-0 delay-100">
            Sumit Mohan
          </h1>

          {/* Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-primary-foreground/90 mb-6 animate-fade-up opacity-0 delay-200">
            Head of Technical Training
            <span className="hidden sm:inline"> | </span>
            <br className="sm:hidden" />
            <span className="text-accent">Academic & AI Education Leader</span>
          </h2>

          {/* Positioning Statement */}
          <p className="text-lg md:text-xl text-primary-foreground/75 max-w-2xl mb-10 leading-relaxed animate-fade-up opacity-0 delay-300">
            Building industry-aligned training ecosystems through AI, curriculum design, and scalable assessment platforms.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0 delay-400">
            <Button 
              size="xl" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl"
              onClick={() => window.open('https://code2crack.com', '_blank')}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Explore Code2Crack
            </Button>
            <Button 
              size="xl" 
              variant="heroOutline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <FileText className="mr-2 h-5 w-5" />
              View Resume
            </Button>
          </div>

          {/* Secondary CTA */}
          <div className="mt-8 animate-fade-up opacity-0 delay-500">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors group"
            >
              <span className="text-sm font-medium">Contact Me</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-fade-up opacity-0 delay-500">
        <div className="flex flex-col items-center gap-2">
          <span className="text-primary-foreground/50 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
