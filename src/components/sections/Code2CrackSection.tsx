import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  TrendingUp,
  Shield,
  Bot,
  LayoutDashboard,
  ArrowRight,
  Zap,
  Sparkles
} from "lucide-react";
import dashboardMockup from "@/assets/code2crack-dashboard.png";

const features = [
  {
    icon: Bot,
    title: "LLM-Based Tutoring",
    description: "AI-driven tutoring using retrieval mechanisms for personalized, context-aware learning.",
    gradient: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-500/10 to-pink-600/10",
  },
  {
    icon: TrendingUp,
    title: "Analytics Pipelines",
    description: "Student performance tracking with deep analytics for progress monitoring.",
    gradient: "from-cyan-500 to-blue-600",
    bgGradient: "from-cyan-500/10 to-blue-600/10",
  },
  {
    icon: Shield,
    title: "Secure Proctoring",
    description: "AI-powered lockdown browser preventing malpractice in examinations.",
    gradient: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-500/10 to-teal-600/10",
  },
  {
    icon: LayoutDashboard,
    title: "Multi-Tenant LMS",
    description: "White-label SaaS with Admin, Faculty & Student portals for delivery at scale.",
    gradient: "from-amber-500 to-orange-600",
    bgGradient: "from-amber-500/10 to-orange-600/10",
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
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute bottom-20 right-1/4 w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, hsl(192 100% 50% / 0.06) 0%, transparent 70%)' }}
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ duration: 14, repeat: Infinity }}
        />
      </div>

      <div className="section-container relative z-10" ref={containerRef}>
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center mb-16">
          {/* Dashboard Image — left side for variety */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-purple-500/15 rounded-2xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="relative card-elevated p-2 rounded-xl overflow-hidden">
                <img
                  src={dashboardMockup}
                  alt="Code2Crack - AI-Powered EdTech Platform Dashboard"
                  className="w-full h-auto rounded-lg object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent rounded-lg" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2"
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
              <span className="text-shimmer">Code2Crack</span>
            </h2>

            <p className="text-base md:text-lg font-heading font-semibold text-foreground/70 mb-5">
              AI-Powered EdTech Platform
            </p>

            <p className="text-base text-muted-foreground leading-relaxed mb-8 text-justify">
              Developed a comprehensive <span className="text-foreground font-medium">multi-tenant LMS SaaS platform</span> with
              AI-driven learning workflows. Integrated LLM-based tutoring using retrieval mechanisms and built
              <span className="text-foreground font-medium"> analytics pipelines for student performance tracking</span> at scale.
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
                onClick={() => window.open('https://code2crack.com', '_blank')}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Visit Platform
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl px-7 h-12 text-sm font-semibold border-border hover:bg-muted/50 hover:border-accent/30 transition-all"
                onClick={() => window.open('https://code2crack.com/features', '_blank')}
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Explore Features
              </Button>
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

export default Code2CrackSection;