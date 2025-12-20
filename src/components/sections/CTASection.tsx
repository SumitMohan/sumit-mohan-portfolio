import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Linkedin, ExternalLink, Mail, Github, GraduationCap } from "lucide-react";

const CTASection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{ background: 'var(--gradient-hero)' }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-[1] overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 rounded-full bg-accent/20 blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-primary-foreground/10 blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <div className="section-container relative z-10" ref={containerRef}>
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Let's Build Impactful
            <span className="block mt-2">Training Ecosystems</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-primary-foreground/75 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Interested in collaborating on academic programs, EdTech solutions, or 
            training initiatives? Let's connect and explore opportunities.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button 
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <FileText className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              size="lg"
              variant="heroOutline"
              className="hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://www.linkedin.com/in/sumitmohan1991/', '_blank')}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              Connect on LinkedIn
            </Button>
            <Button 
              size="lg"
              variant="heroOutline"
              className="hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://code2crack.com', '_blank')}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Explore Code2Crack
            </Button>
            <Button 
              size="lg"
              variant="heroOutline"
              className="hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://github.com/sumitmohan1', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
            <Button 
              size="lg"
              variant="heroOutline"
              className="hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://scholar.google.com/citations?user=YOUR_ID', '_blank')}
            >
              <GraduationCap className="mr-2 h-5 w-5" />
              Google Scholar
            </Button>
            <Button 
              size="lg"
              variant="heroOutline"
              className="hover:scale-105 transition-all duration-300"
              onClick={() => window.location.href = 'mailto:sumitmohan91@gmail.com'}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
