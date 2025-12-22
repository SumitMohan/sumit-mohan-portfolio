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
  ArrowRight,
  Zap
} from "lucide-react";
import dashboardMockup from "@/assets/code2crack-dashboard.png";

const features = [
  {
    icon: TrendingUp,
    title: "Trending Courses",
    description: "500+ AI, ML & Full Stack outcome-based modules with industry-relevant coding problems.",
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    icon: Shield,
    title: "Secure Proctoring",
    description: "AI-powered lockdown browser preventing malpractice in high-stakes examinations.",
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "NBA/NAAC compliance tracking with deep performance analytics and insights.",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    icon: LayoutDashboard,
    title: "Dedicated LMS",
    description: "White-label ecosystem with Admin, Faculty & Student portals for seamless delivery.",
    gradient: "from-amber-500 to-orange-600"
  },
  {
    icon: Bot,
    title: "AI Tutor",
    description: "Context-aware assistance inside tutorials and guided help during practice.",
    gradient: "from-rose-500 to-red-600"
  },
  {
    icon: Map,
    title: "Learning Paths",
    description: "Structured roadmaps with industry updates and conceptual clarity resources.",
    gradient: "from-indigo-500 to-violet-600"
  },
];

const platformStats = [
  { label: "Active Users", value: "10K+", gradient: "from-cyan-500 to-blue-500" },
  { label: "Courses", value: "500+", gradient: "from-purple-500 to-pink-500" },
  { label: "Assessments", value: "1200+", gradient: "from-amber-500 to-orange-500" },
  { label: "Modules", value: "50+", gradient: "from-emerald-500 to-teal-500" },
];

const Code2CrackSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="code2crack" className="section-padding bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full opacity-40"
          style={{ background: 'radial-gradient(circle, hsl(192 100% 50% / 0.08) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-[600px] h-[600px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, hsl(280 100% 60% / 0.06) 0%, transparent 70%)' }}
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
              <span className="text-shimmer">Code2Crack</span>
            </h2>

            <p className="text-lg md:text-xl font-heading font-semibold text-foreground/80 mb-6">
              AI-Powered Training & Assessment Platform
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-justify">
              A comprehensive EdTech platform delivering <span className="text-foreground font-medium">industry-aligned training</span>,
              secure assessments, and personalized AI-driven learning at scale.
              Transforming how institutions approach technical education.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="btn-gradient text-white font-bold rounded-full px-8 py-6 text-base group hover-glow"
                onClick={() => window.open('https://code2crack.com', '_blank')}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Visit Platform
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-base font-semibold border-2 hover:bg-accent/5 group"
                onClick={() => window.open('https://code2crack.com/features', '_blank')}
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Explore Features
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
                <div className={`font-heading text-4xl md:text-5xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium tracking-wide uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Desktop Dashboard Mockup (Absolute positioned or Grid) */}
          <motion.div
            className="hidden lg:block absolute top-20 right-0 w-[50%] h-full z-[-1] opacity-40 pointer-events-none"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 0.4, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <div className="relative w-full h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/20 to-background z-10" />
              <img src={dashboardMockup} alt="Dashboard Preview" className="w-full h-full object-cover object-left-top mask-image-gradient" />
            </div>
          </motion.div>
        </div>

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
      </div >
    </section >
  );
};

export default Code2CrackSection;