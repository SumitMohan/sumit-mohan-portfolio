import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Head - Technical Training",
    institution: "Chitkara University, Punjab",
    period: "Jan 2025 - Present",
    description: "Lead university-wide technical training initiatives for undergraduate cohorts across multiple programs. Design and standardize industry-aligned curricula for placement readiness.",
    current: true,
  },
  {
    role: "Senior Technical Trainer",
    institution: "Sharda University, Greater Noida",
    period: "Apr 2023 - Jan 2025",
    description: "Delivered structured training programs in Python, DSA, and Data Science. Conducted intensive coding bootcamps focused on interview preparation.",
    current: false,
  },
  {
    role: "Head of Department - CSE",
    institution: "SDGI Global University, Ghaziabad",
    period: "Mar 2022 - Apr 2023",
    description: "Led academic planning, curriculum updates, and faculty coordination for the CSE department. Strengthened industry interaction for student mentoring.",
    current: false,
  },
  {
    role: "Training & Placement Coordinator",
    institution: "BIET Jhansi - Autonomous Institute",
    period: "Mar 2019 - Feb 2022",
    description: "Conducted pre-placement technical training and career guidance sessions. Coordinated industry talks, internships, and alumni engagement.",
    current: false,
  },
  {
    role: "Assistant Professor",
    institution: "IIMT, Greater Noida",
    period: "Aug 2018 - Mar 2019",
    description: "Taught Programming and Data Structures & Algorithms. Mentored students in coding fundamentals and logic building.",
    current: false,
  },
];

const ExperienceSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding" style={{ background: 'var(--gradient-subtle)' }}>
      <div className="section-container" ref={containerRef}>
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            Career
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Experience &
            <span className="text-primary"> Leadership</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A progressive journey through technical education and academic leadership.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <motion.div 
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ transformOrigin: "top" }}
            />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <motion.div 
                  className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full border-4 border-background z-10"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.15 }}
                  style={{ 
                    backgroundColor: exp.current ? 'hsl(var(--accent))' : 'hsl(var(--primary))'
                  }}
                />

                {/* Connector Icon */}
                <motion.div 
                  className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-6 hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-background border-2 border-border z-10"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                >
                  <Briefcase className="w-4 h-4 text-primary" />
                </motion.div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-4rem)] ${
                  index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'
                }`}>
                  <motion.div 
                    className="card-elevated p-6 text-left w-full group hover:shadow-xl transition-shadow duration-300"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-3">
                        <motion.span 
                          className="w-1.5 h-1.5 rounded-full bg-accent"
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        Current
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-accent font-medium text-sm mb-1">
                      {exp.institution}
                    </p>
                    <p className="text-muted-foreground text-xs mb-3">
                      {exp.period}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
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
