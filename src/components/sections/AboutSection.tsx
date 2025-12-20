import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Award, Users, BookOpen, TrendingUp } from "lucide-react";
import sumitPhoto from "@/assets/sumit-photo.png";

const stats = [
  { icon: Award, value: 7, suffix: "+", label: "Years Experience" },
  { icon: Users, value: 10000, suffix: "+", label: "Students Trained" },
  { icon: BookOpen, value: 50, suffix: "+", label: "Courses Designed" },
  { icon: TrendingUp, value: 95, suffix: "%", label: "Placement Rate" },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTimestamp: number | null = null;
    const duration = 2000;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const current = Math.floor(progress * value);
      setCount(current);
      if (progress < 1) window.requestAnimationFrame(step);
    };

    window.requestAnimationFrame(step);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-bold text-foreground mb-2">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

const AboutSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background overflow-hidden">
      <div className="section-container" ref={containerRef}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
              About
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Driving Excellence in
              <span className="text-primary"> Technical Education</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Academic and Technical Training Leader with 7+ years of experience across universities, 
                specializing in Data Structures, AI/ML, GenAI, and placement-oriented curriculum design.
              </p>
              <p>
                Proven track record of leading university-wide training programs, mentoring large student cohorts, 
                improving placement outcomes, and aligning academic delivery with industry hiring standards.
              </p>
              <p>
                Experienced in academic administration, faculty coordination, and building scalable, 
                industry-ready learning ecosystems across institutions.
              </p>
            </div>

            {/* Profile Image for Mobile */}
            <motion.div 
              className="mt-8 lg:hidden flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl" />
                <img 
                  src={sumitPhoto} 
                  alt="Sumit Mohan" 
                  className="relative w-64 h-64 object-cover rounded-2xl shadow-2xl border-4 border-background"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Photo + Stats */}
          <div className="space-y-8">
            {/* Profile Image for Desktop */}
            <motion.div 
              className="hidden lg:flex justify-center mb-8"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="relative group">
                <motion.div 
                  className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-xl"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.7, 0.5]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <img 
                  src={sumitPhoto} 
                  alt="Sumit Mohan" 
                  className="relative w-72 h-72 object-cover rounded-2xl shadow-2xl border-4 border-background group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="card-elevated card-hover p-6 md:p-8 text-center group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 text-accent mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
