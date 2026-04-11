import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Brain,
  Search,
  Database,
  Server,
  Sparkles,
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
    description: "Retrieval-Augmented Generation for personalized astrology insights and analysis using contextual retrieval.",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    icon: Database,
    title: "Vector Database",
    description: "Semantic search and contextual response generation powered by vector embeddings and similarity search.",
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    icon: Server,
    title: "Scalable Backend",
    description: "Production-grade FastAPI backend with REST APIs designed for real-world deployment and scalable architecture.",
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    icon: Wand2,
    title: "Prompt Engineering",
    description: "Advanced embedding strategies and prompt design to improve response accuracy and contextual relevance.",
    gradient: "from-amber-500 to-orange-600"
  },
  {
    icon: Star,
    title: "Kundli Analysis",
    description: "AI-powered personalized horoscope generation and kundli analysis with deep astrological knowledge base.",
    gradient: "from-rose-500 to-red-600"
  },
  {
    icon: Globe,
    title: "Production Deployed",
    description: "Live platform serving real users with scalable architecture and API-based system for continuous improvement.",
    gradient: "from-indigo-500 to-violet-600"
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
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full opacity-40"
          style={{ background: 'radial-gradient(circle, hsl(280 100% 60% / 0.08) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-[600px] h-[600px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, hsl(192 100% 50% / 0.06) 0%, transparent 70%)' }}
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="section-container relative z-10" ref={containerRef}>
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="section-badge mb-8 inline-flex"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
            >
              <Zap className="w-3.5 h-3.5" />
              Flagship Project
            </motion.div>

            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4 leading-[1.05]">
              <span className="text-shimmer">Astromology.com</span>
            </h2>

            <p className="text-lg md:text-xl font-heading font-semibold text-foreground/80 mb-6">
              GenAI-Powered Astrology Platform
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-justify">
              Built and deployed a <span className="text-foreground font-medium">production-grade GenAI system</span> for
              personalized astrology insights and kundli analysis. Powered by a custom RAG pipeline with vector database
              integration for <span className="text-foreground font-medium">semantic search and contextual response generation</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="btn-gradient text-white font-bold rounded-full px-8 py-6 text-base group hover-glow"
                onClick={() => window.open('https://astromology.com', '_blank')}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Visit Astromology.com
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-base font-semibold border-2 hover:bg-accent/5 group"
                onClick={() => document.getElementById('code2crack')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Sparkles className="mr-2 h-4 w-4" />
                View More Projects
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 gap-5"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {platformStats.map((stat, index) => (
              <motion.div
                key={index}
                className="card-elevated card-hover p-8 text-center group hover-lift"
              >
                <div className={`font-heading text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium tracking-wide uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Dashboard Image */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-indigo-500/20 rounded-3xl blur-2xl opacity-50" />
            <div className="relative card-elevated p-3 rounded-2xl overflow-hidden">
              <img
                src={astromologyDashboard}
                alt="Astromology.com - GenAI Powered Astrology Platform Dashboard"
                className="w-full h-auto rounded-xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent rounded-xl" />
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group hover-lift"
            >
              <div className="card-elevated p-7 h-full relative overflow-hidden">
                {/* Top Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="flex items-start gap-5">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground/90 dark:text-muted-foreground leading-relaxed text-justify">
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
