import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Sumit's GenAI expertise is exceptional. His work on Astromology.com demonstrates a deep understanding of RAG pipelines and production-grade AI system design.",
    author: "Tech Industry Peer",
    role: "Senior AI Engineer",
    org: "AI/ML Community",
    initials: "TP",
  },
  {
    quote: "The Code2Crack platform transformed how our students practice coding. The AI-powered tutoring and analytics are spot on.",
    author: "Engineering Student",
    role: "Placed at Top MNC",
    org: "Class of 2024",
    initials: "ES",
  },
  {
    quote: "A visionary builder in AI and EdTech. His ability to take ideas from research to production deployment is remarkable.",
    author: "Industry Collaborator",
    role: "CTO",
    org: "Tech Startup",
    initials: "IC",
  }
];

const TestimonialsSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden professional-grid" style={{ background: 'var(--gradient-subtle)' }}>
      <div className="section-container relative z-10" ref={containerRef}>
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="section-badge mb-6 inline-flex"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            Endorsements
          </motion.span>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-black text-foreground mb-5">
            Trusted by the <span className="text-shimmer">Tech Community</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group hover-lift"
            >
              <div className="card-elevated p-6 h-full flex flex-col">
                {/* Quote icon */}
                <Quote className="w-6 h-6 text-accent/20 mb-4 group-hover:text-accent/40 transition-colors" />

                {/* Quote text */}
                <p className="text-muted-foreground text-sm md:text-base mb-6 leading-relaxed italic flex-1 text-justify">
                  "{item.quote}"
                </p>

                {/* Attribution */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/40 dark:border-white/[0.04]">
                  <div className="w-9 h-9 rounded-lg bg-muted dark:bg-white/[0.06] flex items-center justify-center text-xs font-bold text-muted-foreground">
                    {item.initials}
                  </div>
                  <div>
                    <div className="font-heading font-bold text-sm text-foreground">{item.author}</div>
                    <div className="text-xs text-muted-foreground">
                      {item.role}, {item.org}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
