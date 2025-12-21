import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Award, Users, BookOpen, TrendingUp, ArrowUpRight, Sparkles } from "lucide-react";
import sumitPhoto from "@/assets/sumit-photo-new.jpg";
import teachingImg from "@/assets/teaching.jpg";



const AnimatedCounter = ({ value, suffix, color }: { value: number; suffix: string; color: string }) => {
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
    <div ref={ref} className={`font-heading text-3xl md:text-4xl font-black bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
      {count.toLocaleString()}{suffix}
    </div>
  );
};

const AboutSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none">
        <motion.div
          className="absolute top-40 right-40 w-[500px] h-[500px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, hsl(192 100% 50% / 0.1) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 pointer-events-none">
        <motion.div
          className="absolute bottom-20 left-20 w-[300px] h-[300px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, hsl(280 100% 60% / 0.1) 0%, transparent 70%)' }}
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="section-container relative z-10" ref={containerRef}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span
              className="section-badge mb-8 inline-flex"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              About Me
            </motion.span>

            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-black text-foreground mb-8 leading-tight">
              Driving Excellence in
              <span className="block text-shimmer mt-2">Technical Education</span>
            </h2>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                As an <span className="text-foreground font-semibold">Academic Leader & Technologist</span>, I believe that the gap between
                university curriculum and industry expectations is not just a syllabus issue—it's a <span className="text-foreground font-semibold">pedagogical challenge</span>.
              </p>
              <p>
                My work focuses on building <span className="text-foreground font-semibold">scalable learning ecosystems</span> that integrate
                AI-driven personalized learning with rigorous, outcome-based assessment models.
              </p>
              <p>
                Creator of <span className="gradient-text-static font-bold">Code2Crack</span> — an AI-powered EdTech platform that has transformed
                technical training for over <span className="text-foreground font-bold">10,000 students</span>, proving that high-quality education can be democratized at scale.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10"
            >
              <a
                href="#experience"
                className="inline-flex items-center gap-3 text-accent font-bold text-lg hover:gap-4 transition-all group"
              >
                <span className="relative">
                  View My Journey
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Photo + Stats */}
          <div className="space-y-12">
            {/* Profile Image */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative group">
                {/* Animated Glow */}
                <motion.div
                  className="absolute -inset-6 rounded-[2rem] blur-2xl"
                  style={{ background: 'linear-gradient(135deg, hsl(192 100% 50% / 0.2) 0%, hsl(280 100% 60% / 0.15) 100%)' }}
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.4, 0.6, 0.4]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                {/* Gradient Border */}
                <div
                  className="absolute -inset-[3px] rounded-[2rem] opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'var(--gradient-accent)' }}
                />
                {/* Image Container */}
                <div className="relative bg-background p-1 rounded-[2rem]">
                  <img
                    src={sumitPhoto}
                    alt="Sumit Mohan - Head of Technical Training"
                    className="relative w-full max-w-[350px] md:max-w-[400px] h-auto object-cover rounded-[1.75rem] group-hover:scale-[1.02] transition-transform duration-700 shadow-2xl"
                  />
                </div>
                {/* Floating Badge */}
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-card rounded-2xl px-5 py-3 shadow-2xl border border-border/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-sm font-semibold text-foreground">Available for Consulting</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card-elevated p-0 relative overflow-hidden mt-8 group"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img
                  src={teachingImg}
                  alt="Mentoring Students"
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background/95" />
              </div>

              <div className="relative z-10 p-8">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-purple-500" />
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-accent" />
                  My Mission
                </h3>
                <p className="text-muted-foreground text-lg italic relative">
                  <span className="text-5xl text-accent/20 absolute -top-4 -left-2 font-serif">"</span>
                  To empower the next generation of engineers with the cognitive tools and technical adaptability required to thrive in an AI-first world.
                  <span className="text-5xl text-accent/20 absolute -bottom-8 right-0 font-serif">"</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;