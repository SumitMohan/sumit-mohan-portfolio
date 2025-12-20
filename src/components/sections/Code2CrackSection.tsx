import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { 
  ExternalLink, 
  TrendingUp, 
  Shield, 
  BarChart3, 
  Bot, 
  Map,
  Sparkles,
  LayoutDashboard,
  ArrowRight
} from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Trending Courses",
    description: "500+ AI, ML & Full Stack outcome-based modules with industry-relevant coding problems.",
  },
  {
    icon: Shield,
    title: "Secure Proctoring",
    description: "AI-powered lockdown browser preventing malpractice in high-stakes examinations.",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "NBA/NAAC compliance tracking with deep performance analytics and insights.",
  },
  {
    icon: LayoutDashboard,
    title: "Dedicated LMS",
    description: "White-label ecosystem with Admin, Faculty & Student portals for seamless delivery.",
  },
  {
    icon: Bot,
    title: "AI Tutor",
    description: "Context-aware assistance inside tutorials and guided help during practice.",
  },
  {
    icon: Map,
    title: "Learning Paths",
    description: "Structured roadmaps with industry updates and conceptual clarity resources.",
  },
];

const platformStats = [
  { label: "Active Users", value: "10K+" },
  { label: "Courses", value: "500+" },
  { label: "Assessments", value: "1200+" },
  { label: "Modules", value: "50+" },
];

const Code2CrackSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="code2crack" className="section-padding bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10" ref={containerRef}>
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-semibold">Flagship Project</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-[1.1]">
              Code2Crack
            </h2>
            <p className="text-xl md:text-2xl text-primary font-medium mb-6">
              AI-Powered Training & Assessment Platform
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              A comprehensive EdTech platform delivering industry-aligned training, secure assessments, 
              and personalized AI-driven learning at scale. Transforming how institutions approach technical education.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="btn-premium bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/20 hover:shadow-accent/40 rounded-full px-8"
                onClick={() => window.open('https://code2crack.com', '_blank')}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Visit Platform
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="rounded-full px-8 group"
                onClick={() => window.open('https://code2crack.com/features', '_blank')}
              >
                Explore Features
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {platformStats.map((stat, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.03, y: -4 }}
                className="card-elevated p-6 text-center"
              >
                <div className="font-heading text-3xl md:text-4xl font-bold text-accent mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group p-6 rounded-2xl border border-border/60 bg-card/50 hover:bg-card hover:shadow-lg hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Code2CrackSection;
