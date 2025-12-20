import { Button } from "@/components/ui/button";
import { FileText, Linkedin, ExternalLink, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
            Let's Build Impactful
            <span className="block mt-2">Training Ecosystems</span>
          </h2>
          <p className="text-lg text-primary-foreground/75 mb-10 max-w-2xl mx-auto">
            Interested in collaborating on academic programs, EdTech solutions, or 
            training initiatives? Let's connect and explore opportunities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <FileText className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              size="lg"
              variant="heroOutline"
              onClick={() => window.open('https://linkedin.com/in/sumitmohan', '_blank')}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              Connect on LinkedIn
            </Button>
            <Button 
              size="lg"
              variant="heroOutline"
              onClick={() => window.open('https://code2crack.com', '_blank')}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Explore Code2Crack
            </Button>
            <Button 
              size="lg"
              variant="heroOutline"
              onClick={() => window.location.href = 'mailto:contact@sumitmohan.com'}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
