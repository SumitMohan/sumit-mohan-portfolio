import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, BookOpen, FileText } from "lucide-react";

const publications = {
  sci: [
    {
      title: "COVID-19 Impact Prediction Using Hybrid ML Models",
      impact: "Impact Factor: 7",
    },
  ],
  scopus: [
    {
      title: "Self-Driving Car – Lane Detection and Collision Prevention",
    },
    {
      title: "COVID-19 Impact on Academics – A Sentiment Analysis Approach",
    },
    {
      title: "Advanced Collision Prevention System Using Machine Vision",
    },
  ],
  ugc: [
    {
      title: "Optimized Dynamic Round Robin Scheduling",
    },
    {
      title: "Optimal Time Quantum Selection for Dynamic Round Robin",
    },
  ],
};

const PublicationCategory = ({ 
  title, 
  badge, 
  items, 
  delay,
  isInView,
  color = "accent"
}: { 
  title: string; 
  badge: string; 
  items: { title: string; impact?: string }[]; 
  delay: number;
  isInView: boolean;
  color?: "accent" | "primary" | "secondary";
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const colorClasses = {
    accent: "bg-accent/10 text-accent",
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary text-secondary-foreground"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="border border-border rounded-xl overflow-hidden bg-card/50 hover:shadow-lg transition-shadow"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 hover:bg-muted/50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <motion.div 
            className={`w-10 h-10 rounded-lg flex items-center justify-center ${colorClasses[color]}`}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <BookOpen className="w-5 h-5" />
          </motion.div>
          <div className="text-left">
            <h3 className="font-bold text-foreground">{title}</h3>
            <span className="text-xs text-accent font-medium">{badge}</span>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
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
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ x: 5 }}
              className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group cursor-default"
            >
              <FileText className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                  {item.title}
                </p>
                {item.impact && (
                  <span className="text-xs text-accent font-semibold mt-1 inline-block">
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
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            Research
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
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
            color="accent"
          />
          <PublicationCategory
            title="Scopus-Indexed Publications"
            badge="3 Publications"
            items={publications.scopus}
            delay={0.3}
            isInView={isInView}
            color="primary"
          />
          <PublicationCategory
            title="UGC-Care Publications"
            badge="2 Publications"
            items={publications.ugc}
            delay={0.4}
            isInView={isInView}
            color="secondary"
          />
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
