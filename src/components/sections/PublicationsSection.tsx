import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, BookOpen, FileText, ExternalLink } from "lucide-react";

const publications = {
  sci: [
    {
      title: "COVID-19 Impact Prediction Using Hybrid ML Models",
      impact: "Impact Factor: 7",
    },
  ],
  scopus: [
    { title: "Self-Driving Car – Lane Detection and Collision Prevention" },
    { title: "COVID-19 Impact on Academics – A Sentiment Analysis Approach" },
    { title: "Advanced Collision Prevention System Using Machine Vision" },
  ],
  ugc: [
    { title: "Optimized Dynamic Round Robin Scheduling" },
    { title: "Optimal Time Quantum Selection for Dynamic Round Robin" },
  ],
};

const PublicationCategory = ({ 
  title, 
  badge, 
  items, 
  delay,
  isInView,
  accentColor = "accent"
}: { 
  title: string; 
  badge: string; 
  items: { title: string; impact?: string }[]; 
  delay: number;
  isInView: boolean;
  accentColor?: "accent" | "primary" | "secondary";
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const colorStyles = {
    accent: "bg-accent/10 text-accent border-accent/20",
    primary: "bg-primary/10 text-primary border-primary/20",
    secondary: "bg-muted text-foreground border-border"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="card-elevated overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 hover:bg-muted/50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorStyles[accentColor]}`}>
            <BookOpen className="w-5 h-5" />
          </div>
          <div className="text-left">
            <h3 className="font-heading font-bold text-foreground">{title}</h3>
            <span className="text-xs font-semibold text-accent">{badge}</span>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-muted-foreground"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      
      <motion.div
        initial={false}
        animate={{ 
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 space-y-3">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isOpen ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              whileHover={{ x: 6 }}
              className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 hover:bg-muted/60 transition-all group cursor-default"
            >
              <FileText className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                  {item.title}
                </p>
                {item.impact && (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent mt-2">
                    {item.impact}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const PublicationsSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="publications" className="section-padding" style={{ background: 'var(--gradient-subtle)' }}>
      <div className="section-container" ref={containerRef}>
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-badge mb-6">
            Research
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Publications &
            <span className="text-primary"> Research</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Peer-reviewed publications in machine learning and computing.
          </p>
        </motion.div>

        {/* Publications */}
        <div className="max-w-3xl mx-auto space-y-4">
          <PublicationCategory
            title="SCI-Indexed Publications"
            badge="High Impact Factor"
            items={publications.sci}
            delay={0.2}
            isInView={isInView}
            accentColor="accent"
          />
          <PublicationCategory
            title="Scopus-Indexed Publications"
            badge="3 Publications"
            items={publications.scopus}
            delay={0.3}
            isInView={isInView}
            accentColor="primary"
          />
          <PublicationCategory
            title="UGC-Care Publications"
            badge="2 Publications"
            items={publications.ugc}
            delay={0.4}
            isInView={isInView}
            accentColor="secondary"
          />
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
