import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, Sparkles, Rocket } from "lucide-react";

const experiences = [
  {
    role: "Founder / Platform Architect",
    institution: "Code2Crack & Astromology",
    period: "Ongoing",
    description: "Built a scalable multi-tenant EdTech SaaS platform with AI-driven learning and analytics. Designed and deployed LLM-based tutoring system using retrieval techniques. Built and deployed a production-grade GenAI application (Astromology) using RAG architecture and LLMs.",
    current: true,
  },
  {
    role: "Head – Technical Training",
    institution: "CodeQuotient Pvt. Ltd.",
    period: "Jan 2025 - Present",
    description: "Designed and delivered data science and machine learning pipelines including EDA, feature engineering, and model development. Mentored students on real-world AI/ML and GenAI projects, including LLM and RAG-based systems.",
    current: true,
  },
  {
    role: "Senior Technical Trainer",
    institution: "Sharda University, Greater Noida",
    period: "Apr 2023 - Jan 2025",
    description: "Delivered training in Python, Data Science, and Machine Learning with hands-on project implementation. Built end-to-end ML workflows covering data preprocessing, modeling, and evaluation.",
    current: false,
  },
  {
    role: "Head of Department – CSE",
    institution: "SDGI Global University, Ghaziabad",
    period: "Mar 2022 - Apr 2023",
    description: "Led curriculum modernization by integrating AI/ML and data science concepts. Strengthened industry collaboration for internships and technical training. Managed academic operations and faculty coordination.",
    current: false,
  },
  {
    role: "Training & Placement",
    institution: "BIET Jhansi – Autonomous Institute",
    period: "Mar 2019 - Feb 2022",
    description: "Delivered technical training aligned with industry hiring standards. Mentored students and coordinated internships and placement preparation.",
    current: false,
  },
];

const ExperienceSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative" style={{ background: 'var(--gradient-subtle)' }}>
      <div className="section-container" ref={containerRef}>
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
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
            Career Journey
          </motion.span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6 leading-[1.05]">
            Impact <span className="font-serif text-accent italic px-1">&</span> <span className="text-shimmer">Professional Journey</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            A progressive journey through AI engineering, platform building, and technical leadership.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <motion.div
              className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[3px] md:-translate-x-[1.5px] rounded-full"
              style={{ background: 'var(--gradient-accent)' }}
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex items-start gap-8 mb-12 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-6 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full border-4 border-background z-10"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.15 }}
                  style={{
                    background: exp.current ? 'var(--gradient-accent)' : 'hsl(var(--primary))',
                    boxShadow: exp.current ? '0 0 25px hsl(192 100% 50% / 0.5)' : undefined
                  }}
                />

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                  <motion.div
                    className="card-elevated p-7 group h-full overflow-hidden hover-lift"
                  >
                    {/* Top gradient accent on hover */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                    {exp.current && (
                      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold mb-4 tracking-wide">
                        <motion.span
                          className="w-2 h-2 rounded-full bg-accent"
                          animate={{ opacity: [1, 0.4, 1], scale: [1, 1.2, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        {index === 0 ? "Founder" : "Current Role"}
                      </span>
                    )}
                    <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-2">
                        {index === 0 ? <Rocket className="w-4 h-4 text-accent" /> : <MapPin className="w-4 h-4 text-accent" />}
                        {exp.institution}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground/90 dark:text-muted-foreground leading-relaxed text-justify">
                      {exp.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;