import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Sumit's GenAI expertise is exceptional. His work on Astromology.com demonstrates a deep understanding of RAG pipelines and production-grade AI system design.",
    author: "AI/ML Community Peer",
    role: "Senior AI Engineer",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    quote: "The Code2Crack platform transformed how our students practice coding. The AI-powered tutoring and analytics are spot on.",
    author: "Engineering Student",
    role: "Placed at Top MNC, Class of 2024",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    quote: "A visionary builder in AI and EdTech. His ability to take ideas from research to production deployment is remarkable.",
    author: "Industry Collaborator",
    role: "CTO, Tech Startup",
    gradient: "from-amber-500 to-orange-500",
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
            <Star className="w-3.5 h-3.5" />
            Community Feedback
          </motion.span>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-5">
            What People <span className="text-shimmer">Say</span>
          </h2>
          <p className="text-sm text-muted-foreground">
            Feedback from peers, students, and collaborators across the tech community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group hover-lift"
            >
              <div className="card-elevated p-6 h-full flex flex-col relative overflow-hidden">
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${item.gradient}`} />

                {/* Star rating */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-muted-foreground text-sm md:text-base mb-6 leading-relaxed flex-1">
                  "{item.quote}"
                </p>

                {/* Attribution */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/40 dark:border-white/[0.04]">
                  <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-sm text-foreground">{item.author}</div>
                    <div className="text-xs text-muted-foreground">
                      {item.role}
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
