import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, BookOpen, FileText, Brain, GraduationCap, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

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

const categories = [
  {
    key: "sci" as const,
    title: "SCI-Indexed",
    badge: "High Impact",
    items: publications.sci,
    accentColor: "text-amber-500",
    barColor: "from-amber-500 to-orange-500",
  },
  {
    key: "scopus" as const,
    title: "Scopus-Indexed",
    badge: "3 Papers",
    items: publications.scopus,
    accentColor: "text-cyan-500",
    barColor: "from-cyan-500 to-blue-500",
  },
  {
    key: "ugc" as const,
    title: "UGC-Care",
    badge: "2 Papers",
    items: publications.ugc,
    accentColor: "text-purple-500",
    barColor: "from-purple-500 to-pink-500",
  },
];

const PublicationsSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [openCategory, setOpenCategory] = useState<string | null>("sci");

  return (
    <section id="publications" className="section-padding relative overflow-hidden professional-grid" style={{ background: 'var(--gradient-subtle)' }}>
      <div className="section-container relative z-10" ref={containerRef}>
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="section-badge mb-6 inline-flex"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            Research
          </motion.span>

          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-black text-foreground mb-5 leading-tight">
            Publications & <span className="text-shimmer">Scholarly Impact</span>
          </h2>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Peer-reviewed publications in <span className="text-foreground font-medium">machine learning</span> and computing.
          </p>

          <Button
            onClick={() => window.open('https://scholar.google.com/citations?user=EVVD-Z0AAAAJ', '_blank')}
            variant="outline"
            className="gap-2 text-sm font-semibold border-border hover:bg-muted/50"
          >
            <GraduationCap className="w-4 h-4" />
            View Google Scholar
            <ExternalLink className="w-3.5 h-3.5 opacity-50" />
          </Button>
        </motion.div>

        {/* Publications List — Full Width */}
        <div className="max-w-3xl mx-auto space-y-4">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + catIndex * 0.1 }}
              className="card-elevated overflow-hidden"
            >
              {/* Category Header */}
              <button
                onClick={() => setOpenCategory(openCategory === cat.key ? null : cat.key)}
                className="w-full flex items-center justify-between p-5 hover:bg-muted/20 dark:hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-muted dark:bg-white/[0.06] flex items-center justify-center">
                    <BookOpen className={`w-5 h-5 ${cat.accentColor}`} />
                  </div>
                  <div className="text-left">
                    <h3 className="font-heading font-bold text-base text-foreground">{cat.title}</h3>
                    <span className="text-xs font-semibold text-muted-foreground">{cat.badge}</span>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: openCategory === cat.key ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-8 h-8 rounded-full bg-muted dark:bg-white/[0.04] flex items-center justify-center text-muted-foreground"
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>

              {/* Papers List */}
              <motion.div
                initial={false}
                animate={{
                  height: openCategory === cat.key ? "auto" : 0,
                  opacity: openCategory === cat.key ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-5 space-y-2">
                  {cat.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 dark:bg-white/[0.02] border border-transparent hover:border-accent/15 transition-all"
                    >
                      <div className="w-8 h-8 rounded-md bg-muted dark:bg-white/[0.04] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FileText className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground leading-relaxed">
                          {item.title}
                        </p>
                        {item.impact && (
                          <span className={`inline-flex items-center gap-1 text-xs font-bold ${cat.accentColor} mt-1.5`}>
                            ★ {item.impact}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;