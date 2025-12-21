import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, BookOpen, FileText, Sparkles, Mic2 } from "lucide-react";
import conferenceImg from "@/assets/conference.jpg";

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
  gradient,
  iconGradient
}: {
  title: string;
  badge: string;
  items: { title: string; impact?: string }[];
  delay: number;
  isInView: boolean;
  gradient: string;
  iconGradient: string;
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="card-elevated overflow-hidden group"
    >
      {/* Top gradient line */}
      <div className={`h-1 bg-gradient-to-r ${gradient} opacity-60`} />

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 hover:bg-muted/30 transition-colors"
      >
        <div className="flex items-center gap-5">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${iconGradient} flex items-center justify-center shadow-lg`}>
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div className="text-left">
            <h3 className="font-heading font-bold text-lg text-foreground">{title}</h3>
            <span className={`text-xs font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent uppercase tracking-wider`}>
              {badge}
            </span>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-accent/10 group-hover:text-accent transition-colors"
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
              whileHover={{ x: 8 }}
              className="flex items-start gap-4 p-5 rounded-xl bg-muted/30 hover:bg-muted/50 border border-transparent hover:border-accent/20 transition-all group/item cursor-default"
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${iconGradient} bg-opacity-20 flex items-center justify-center flex-shrink-0`}>
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-foreground font-medium group-hover/item:text-primary transition-colors leading-relaxed">
                  {item.title}
                </p>
                {item.impact && (
                  <span className={`inline-flex items-center gap-1 text-xs font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mt-2`}>
                    ★ {item.impact}
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
    <section id="publications" className="section-padding relative overflow-hidden" style={{ background: 'var(--gradient-subtle)' }}>
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-[350px] h-[350px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, hsl(192 100% 50% / 0.06) 0%, transparent 70%)' }}
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-[400px] h-[400px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, hsl(280 100% 60% / 0.06) 0%, transparent 70%)' }}
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="section-container relative z-10" ref={containerRef}>
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="section-badge mb-8 inline-flex"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Research
          </motion.span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-[1.05]">
            Publications &
            <span className="block text-shimmer mt-2">Research Work</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Peer-reviewed publications in <span className="text-foreground font-medium">machine learning</span> and computing.
          </p>
        </motion.div>



        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Publications List - Left Side */}
          <div className="lg:col-span-3 space-y-5">
            <PublicationCategory
              title="SCI-Indexed Publications"
              badge="High Impact Factor"
              items={publications.sci}
              delay={0.2}
              isInView={isInView}
              gradient="from-amber-500 to-orange-500"
              iconGradient="from-amber-500 to-orange-600"
            />
            <PublicationCategory
              title="Scopus-Indexed Publications"
              badge="3 Publications"
              items={publications.scopus}
              delay={0.3}
              isInView={isInView}
              gradient="from-cyan-500 to-blue-500"
              iconGradient="from-cyan-500 to-blue-600"
            />
            <PublicationCategory
              title="UGC-Care Publications"
              badge="2 Publications"
              items={publications.ugc}
              delay={0.4}
              isInView={isInView}
              gradient="from-purple-500 to-pink-500"
              iconGradient="from-purple-500 to-pink-600"
            />
          </div>

          {/* Conference Image - Right Side */}
          <motion.div
            className="lg:col-span-2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="sticky top-24">
              <div className="card-elevated p-3 rounded-2xl bg-white/5 border border-white/10 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
                  <img
                    src={conferenceImg}
                    alt="Speaking at Tech Conference"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider mb-3">
                      <Mic2 className="w-3.5 h-3.5" />
                      Keynote Speaker
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 text-shadow-sm">
                      Driving Thought Leadership
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Delivering talks on AI in Education, Future of Work, and Scalable Learning Ecosystems at premier tech summits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section >
  );
};

export default PublicationsSection;