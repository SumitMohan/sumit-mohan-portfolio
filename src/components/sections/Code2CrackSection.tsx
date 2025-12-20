import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  TrendingUp, 
  Shield, 
  BarChart3, 
  BookOpen, 
  Bot, 
  Map,
  Sparkles,
  Users,
  MonitorPlay,
  LayoutDashboard
} from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Trending Courses & Coding Questions",
    description: "500+ AI, ML & Full Stack outcome-based modules with frequently asked coding interview problems.",
  },
  {
    icon: Shield,
    title: "Secure Proctored Assessments",
    description: "AI-powered lockdown browser preventing tech malpractice for high-stakes examinations.",
  },
  {
    icon: BarChart3,
    title: "End-to-End Progress Tracking",
    description: "NBA/NAAC compliance tracking with performance analytics and learning behavior insights.",
  },
  {
    icon: LayoutDashboard,
    title: "Dedicated Learning Management System",
    description: "White-label ecosystem with Admin, Faculty & Student portals for structured content delivery.",
  },
  {
    icon: Bot,
    title: "Personalized AI Tutor",
    description: "Context-aware assistance inside tutorials and guided help during coding problems.",
  },
  {
    icon: Map,
    title: "Roadmaps & Technical Blogs",
    description: "Structured learning paths with industry updates and conceptual clarity resources.",
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
    <section id="code2crack" className="section-padding bg-background overflow-hidden">
      <div className="section-container" ref={containerRef}>
        {/* Header */}
        <motion.div 
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm border-accent/50 text-accent bg-accent/5">
            <Sparkles className="mr-2 h-3.5 w-3.5" />
            Flagship Project
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Code2Crack
            <span className="block text-primary text-2xl md:text-3xl lg:text-4xl font-semibold mt-2">
              AI-Powered Training & Assessment Platform
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Code2Crack is a comprehensive EdTech platform designed to deliver industry-aligned 
            training, secure assessments, and personalized AI-driven learning at scale. Built 
            to transform how institutions approach technical education.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 p-6 rounded-2xl bg-primary/5 border border-primary/10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {platformStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
              className="relative p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:shadow-lg transition-all duration-300 group overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex items-start gap-4">
                <motion.div 
                  className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon className="w-6 h-6" />
                </motion.div>
                <div>
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
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

        {/* CTA */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={() => window.open('https://code2crack.com', '_blank')}
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            Visit Code2Crack
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="hover:scale-105 transition-all duration-300"
            onClick={() => window.open('https://code2crack.com/features', '_blank')}
          >
            View Platform Features
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Code2CrackSection;
