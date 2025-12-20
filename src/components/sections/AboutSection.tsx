import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Award, Users, BookOpen, TrendingUp, ArrowUpRight } from "lucide-react";
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
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * value);
      setCount(current);
      if (progress < 1) window.requestAnimationFrame(step);
    };

    window.requestAnimationFrame(step);
  }, [isInView, value]);

  return (
    <div ref={ref} className="font-heading text-4xl md:text-5xl font-bold text-foreground">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

const AboutSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none">
        <div 
          className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'var(--gradient-glow)' }}
        />
      </div>

      <div className="section-container relative z-10" ref={containerRef}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-badge mb-6">
              About Me
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-[1.1]">
              Driving Excellence in
              <span className="block text-primary"> Technical Education</span>
            </h2>
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                Academic and Technical Training Leader with <strong className="text-foreground">7+ years of experience</strong> across 
                universities, specializing in Data Structures, AI/ML, GenAI, and placement-oriented curriculum design.
              </p>
              <p>
                Proven track record of leading university-wide training programs, mentoring large student cohorts, 
                improving placement outcomes, and aligning academic delivery with <strong className="text-foreground">industry hiring standards</strong>.
              </p>
              <p>
                Creator of <strong className="text-foreground">Code2Crack</strong> - an AI-powered EdTech platform transforming 
                how institutions approach technical education at scale.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8"
            >
              <a 
                href="#experience"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all group"
              >
                View My Journey
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Photo + Stats */}
          <div className="space-y-10">
            {/* Profile Image */}
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative group">
                {/* Glow Effect */}
                <motion.div 
                  className="absolute -inset-4 rounded-3xl opacity-60"
                  style={{ background: 'var(--gradient-glow)' }}
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.4, 0.6, 0.4]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                {/* Border Gradient */}
                <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-br from-accent/50 via-primary/30 to-accent/50 opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Image */}
                <img 
                  src={sumitPhoto} 
                  alt="Sumit Mohan" 
                  className="relative w-64 md:w-72 lg:w-80 h-64 md:h-72 lg:h-80 object-cover rounded-3xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="card-elevated card-hover p-6 text-center group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <div className="text-sm text-muted-foreground font-medium mt-2">
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
