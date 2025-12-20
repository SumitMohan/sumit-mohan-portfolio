import { Code, Brain, GraduationCap, FileCode, Target } from "lucide-react";

const expertise = [
  {
    icon: Code,
    title: "Data Structures & Competitive Programming",
    description: "Advanced DSA curriculum design and competitive programming mentorship for placement success.",
  },
  {
    icon: Brain,
    title: "AI / ML & Generative AI Education",
    description: "Cutting-edge AI/ML training programs aligned with current industry requirements.",
  },
  {
    icon: GraduationCap,
    title: "Academic & Technical Training Leadership",
    description: "Strategic leadership in academic program development and faculty coordination.",
  },
  {
    icon: FileCode,
    title: "Curriculum Design & Assessment Systems",
    description: "Industry-aligned curriculum frameworks with robust assessment methodologies.",
  },
  {
    icon: Target,
    title: "Placement Readiness & Industry Alignment",
    description: "End-to-end placement preparation ensuring students meet industry standards.",
  },
];

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="section-padding" style={{ background: 'var(--gradient-subtle)' }}>
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Core Areas of
            <span className="text-primary"> Specialization</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Deep expertise in technical education, curriculum development, and scalable training systems.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="card-elevated card-hover p-8 group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
