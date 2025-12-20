import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  BookOpen, 
  Users, 
  FileCheck, 
  Briefcase, 
  GraduationCap,
  Building2
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
    <section id="leadership" className="section-padding bg-background overflow-hidden">
      <div className="section-container" ref={containerRef}>
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            Leadership
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Academic &
            <span className="text-primary"> Administrative Leadership</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Strategic oversight of academic programs, faculty development, and institutional growth.
          </p>
        </motion.div>

        {/* Leadership Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadershipAreas.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, rotateX: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.2 } 
              }}
              className="relative p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm group overflow-hidden"
            >
              {/* Animated gradient background */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100"
                initial={false}
                transition={{ duration: 0.5 }}
              />
              
              <div className="relative z-10 flex items-start gap-4">
                <motion.div 
                  className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  <item.icon className="w-6 h-6" />
                </motion.div>
                <div>
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom accent line */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                style={{ transformOrigin: "left" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicLeadershipSection;
