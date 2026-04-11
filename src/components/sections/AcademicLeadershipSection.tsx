import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  BookOpen,
  Users,
  FileCheck,
  Briefcase,
  GraduationCap,
  Building2,
} from "lucide-react";

const leadershipAreas = [
  {
    icon: BookOpen,
    title: "Curriculum Design",
    description: "Industry-aligned curriculum development for UG-PG technical training delivery",
  },
  {
    icon: Users,
    title: "Faculty Development",
    description: "Training and coordination for academic excellence across departments",
  },
  {
    icon: FileCheck,
    title: "Examination Operations",
    description: "Center Superintendent role with compliance & academic logistics oversight",
  },
  {
    icon: Briefcase,
    title: "Training & Placement",
    description: "Student career guidance, placement coordination, and industry engagement",
  },
  {
    icon: GraduationCap,
    title: "Student Mentorship",
    description: "Placement readiness, technical interview preparation, and career development",
  },
  {
    icon: Building2,
    title: "Industry Collaboration",
    description: "Building partnerships for internships, projects, and hiring opportunities",
  },
];

const AcademicLeadershipSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="leadership" className="section-padding bg-background overflow-hidden relative">
      <div className="section-container relative z-10" ref={containerRef}>
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="section-badge mb-6 inline-flex"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            Leadership
          </motion.span>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-black text-foreground mb-5 leading-tight">
            Academic & <span className="text-shimmer">Administrative Leadership</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Strategic oversight of academic programs, faculty development, and institutional growth.
          </p>
        </motion.div>

        {/* Leadership Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {leadershipAreas.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group hover-lift"
            >
              <div className="h-full card-elevated p-6 relative overflow-hidden">
                {/* Left accent on hover */}
                <div className="absolute top-0 left-0 w-1 h-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-r" />

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-muted dark:bg-white/[0.06] flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-foreground mb-1.5 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
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

export default AcademicLeadershipSection;