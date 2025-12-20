import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Head - Technical Training",
    institution: "Chitkara University, Punjab",
    period: "Jan 2025 - Present",
    description: "Lead university-wide technical training initiatives for undergraduate cohorts. Design and standardize industry-aligned curricula for placement readiness.",
    current: true,
  },
  {
    role: "Senior Technical Trainer",
    institution: "Sharda University, Greater Noida",
    period: "Apr 2023 - Jan 2025",
    description: "Delivered structured training in Python, DSA, and Data Science. Conducted intensive coding bootcamps for interview preparation.",
    current: false,
  },
  {
    role: "Head of Department - CSE",
    institution: "SDGI Global University, Ghaziabad",
    period: "Mar 2022 - Apr 2023",
    description: "Led academic planning, curriculum updates, and faculty coordination. Strengthened industry interaction for student mentoring.",
    current: false,
  },
  {
    role: "Training & Placement Coordinator",
    institution: "BIET Jhansi - Autonomous Institute",
    period: "Mar 2019 - Feb 2022",
    description: "Conducted pre-placement training and career guidance. Coordinated industry talks, internships, and alumni engagement.",
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
    <section id="experience" className="section-padding relative" style={{ background: 'var(--gradient-subtle)' }}>
      <div className="section-container" ref={containerRef}>
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-badge mb-6">
            Career Journey
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Professional
            <span className="text-primary"> Experience</span>
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
              className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-[1px]"
              style={{ background: 'linear-gradient(to bottom, hsl(var(--accent)), hsl(var(--primary)), hsl(var(--accent) / 0.3))' }}
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
                className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <motion.div 
                  className="absolute left-6 md:left-1/2 w-[14px] h-[14px] -translate-x-1/2 rounded-full border-[3px] border-background z-10"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.15 }}
                  style={{ 
                    backgroundColor: exp.current ? 'hsl(var(--accent))' : 'hsl(var(--primary))',
                    boxShadow: exp.current ? '0 0 20px hsl(var(--accent) / 0.5)' : undefined
                  }}
                />

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <motion.div 
                    className="card-elevated p-6 group hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -4 }}
                  >
                    {exp.current && (
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-4">
                        <motion.span 
                          className="w-2 h-2 rounded-full bg-accent"
                          animate={{ opacity: [1, 0.4, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        Current Role
                      </span>
                    )}
                    <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-accent" />
                        {exp.institution}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
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
