import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  BookOpen, 
  Users, 
  FileCheck, 
  Briefcase, 
  GraduationCap,
  Building2,
  Sparkles
} from "lucide-react";

const leadershipAreas = [
  {
    icon: BookOpen,
    title: "Curriculum Design",
    description: "Industry-aligned curriculum development for UG-PG technical training delivery",
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    icon: Users,
    title: "Faculty Development",
    description: "Training and coordination for academic excellence across departments",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    icon: FileCheck,
    title: "Examination Operations",
    description: "Center Superintendent role with compliance & academic logistics oversight",
    gradient: "from-amber-500 to-orange-600"
  },
  {
    icon: Briefcase,
    title: "Training & Placement",
    description: "Student career guidance, placement coordination, and industry engagement",
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    icon: GraduationCap,
    title: "Student Mentorship",
    description: "Placement readiness, technical interview preparation, and career development",
    gradient: "from-rose-500 to-red-600"
  },
  {
    icon: Building2,
    title: "Industry Collaboration",
    description: "Building partnerships for internships, projects, and hiring opportunities",
    gradient: "from-indigo-500 to-violet-600"
  },
];

const AcademicLeadershipSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="leadership" className="section-padding bg-background overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-20 right-20 w-[400px] h-[400px] rounded-full opacity-25"
          style={{ background: 'radial-gradient(circle, hsl(192 100% 50% / 0.08) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.15, 1], x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-40 left-10 w-[350px] h-[350px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, hsl(280 100% 60% / 0.08) 0%, transparent 70%)' }}
          animate={{ scale: [1.1, 1, 1.1], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="section-container relative z-10" ref={containerRef}>
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
            Leadership
          </motion.span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-[1.05]">
            Academic &
            <span className="block text-shimmer mt-2">Administrative Leadership</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Strategic oversight of academic programs, faculty development, and institutional growth.
          </p>
        </motion.div>

        {/* Leadership Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {leadershipAreas.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="h-full card-elevated p-8 relative overflow-hidden">
                {/* Top gradient line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Corner decoration */}
                <div className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${item.gradient} rounded-tl-[3rem] opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicLeadershipSection;