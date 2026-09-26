import { motion } from "framer-motion";
import { Briefcase, BookOpen, Users, Rocket, GraduationCap } from "lucide-react";

const metrics = [
  { icon: Briefcase, value: "7+", label: "Years Experience" },
  { icon: BookOpen, value: "6", label: "Publications" },
  { icon: Users, value: "10K+", label: "Users Served" },
  { icon: Rocket, value: "2", label: "Live Products" },
  { icon: GraduationCap, value: "99%", label: "GATE Percentile" },
];

const TrustSection = () => {
  return (
    <section className="relative py-8 md:py-10 border-y border-border/40 bg-muted/30 dark:bg-white/[0.015]">
      <div className="section-container">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="flex items-center gap-3 justify-center md:justify-start"
            >
              <div className="w-9 h-9 rounded-lg bg-accent/10 dark:bg-accent/10 flex items-center justify-center flex-shrink-0">
                <metric.icon className="w-4 h-4 text-accent" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold font-heading text-foreground leading-none">
                  {metric.value}
                </span>
                <span className="text-[0.65rem] font-semibold text-muted-foreground uppercase tracking-wider mt-0.5">
                  {metric.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
