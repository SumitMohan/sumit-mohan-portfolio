import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Brain,
  Database,
  Server,
  Wand2,
  ArrowRight,
  Zap,
  Star,
  Globe
} from "lucide-react";
import astromologyDashboard from "@/assets/astromology-dashboard.png";

const features = [
  {
    icon: Brain,
    title: "RAG Pipeline",
    description: "Retrieval-Augmented Generation for personalized astrology insights using contextual retrieval.",
    gradient: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-500/10 to-pink-600/10",
  },
  {
    icon: Database,
    title: "Vector Database",
    description: "Semantic search powered by vector embeddings and similarity search.",
    gradient: "from-cyan-500 to-blue-600",
    bgGradient: "from-cyan-500/10 to-blue-600/10",
  },
  {
    icon: Server,
    title: "Scalable Backend",
    description: "Production-grade FastAPI backend with REST APIs for real-world deployment.",
    gradient: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-500/10 to-teal-600/10",
  },
  {
    icon: Wand2,
    title: "Prompt Engineering",
    description: "Advanced embedding strategies and prompt design for contextual relevance.",
    gradient: "from-amber-500 to-orange-600",
    bgGradient: "from-amber-500/10 to-orange-600/10",
  },
];

const platformStats = [
  { label: "Architecture", value: "RAG", gradient: "from-purple-500 to-pink-500" },
  { label: "Backend", value: "FastAPI", gradient: "from-cyan-500 to-blue-500" },
  { label: "Search", value: "Vector DB", gradient: "from-amber-500 to-orange-500" },
  { label: "Status", value: "Live", gradient: "from-emerald-500 to-teal-500" },
];

const AstromologySection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="astromology" className="section-padding relative overflow-hidden" style={{ background: 'var(--gradient-subtle)' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, hsl(280 100% 60% / 0.06) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="section-container relative z-10" ref={containerRef}>
        {/* Header + Stats row */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="section-badge mb-6 inline-flex"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
            >
              <Zap className="w-3.5 h-3.5" />
              Flagship Project
            </motion.div>

            <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-black text-foreground mb-3 leading-tight">
              <span className="text-shimmer">Astromology.com</span>
            </h2>

            <p className="text-base md:text-lg font-heading font-semibold text-foreground/70 mb-5">
              GenAI-Powered Astrology Platform
            </p>

            <p className="text-base text-muted-foreground leading-relaxed mb-8 text-justify">
              Built and deployed a <span className="text-foreground font-medium">production-grade GenAI system</span> for
              personalized astrology insights and kundli analysis. Powered by a custom RAG pipeline with vector database
              integration for <span className="text-foreground font-medium">semantic search and contextual response generation</span>.
            </p>

            {/* Stats pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {platformStats.map((stat, index) => (
                <div key={index} className="card-elevated p-3 text-center group hover-lift">
                  <div className={`font-heading text-lg md:text-xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-[0.6rem] text-muted-foreground font-bold tracking-wider uppercase mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="btn-gradient text-white font-bold rounded-xl px-7 h-12 text-sm group"
                onClick={() => window.open('https://astromology.com', '_blank')}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Visit Astromology.com
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl px-7 h-12 text-sm font-semibold border-border hover:bg-muted/50 hover:border-accent/30 transition-all group"
                onClick={() => document.getElementById('code2crack')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View More Projects
              </Button>
            </div>
          </motion.div>

          {/* Dashboard Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/15 via-cyan-500/15 to-indigo-500/15 rounded-2xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="relative card-elevated p-2 rounded-xl overflow-hidden">
                <img
                  src={astromologyDashboard}
                  alt="Astromology.com - GenAI Powered Astrology Platform Dashboard"
                  className="w-full h-auto rounded-lg object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent rounded-lg" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid — Rich cards with gradient icons */}
        <div className="grid sm:grid-cols-2 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group hover-lift"
            >
              <div className="card-elevated p-6 h-full relative overflow-hidden">
                {/* Hover background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="flex items-start gap-4 relative z-10">
                  <motion.div
                    className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300`}
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-foreground mb-1.5 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
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

export default AstromologySection;
