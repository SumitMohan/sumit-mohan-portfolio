const experiences = [
  {
    role: "Head - Technical Training",
    institution: "Current Position",
    description: "Leading institution-wide technical training initiatives and EdTech product development.",
    current: true,
  },
  {
    role: "Senior Technical Trainer",
    institution: "EdTech & Academic",
    description: "Delivered advanced DSA, AI/ML training to 5000+ students with measurable placement outcomes.",
    current: false,
  },
  {
    role: "Head of Department - CSE",
    institution: "Academic Institution",
    description: "Led department operations, faculty development, and industry collaboration initiatives.",
    current: false,
  },
  {
    role: "Training & Placement Coordinator",
    institution: "Academic Institution",
    description: "Orchestrated placement drives achieving 95%+ placement rates across multiple batches.",
    current: false,
  },
  {
    role: "Assistant Professor",
    institution: "Computer Science & Engineering",
    description: "Taught core CS subjects with focus on practical implementation and industry relevance.",
    current: false,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding" style={{ background: 'var(--gradient-subtle)' }}>
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-6 md:gap-12 mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 -translate-x-1.5 md:-translate-x-2 rounded-full border-4 border-background z-10"
                  style={{ 
                    backgroundColor: exp.current ? 'hsl(var(--accent))' : 'hsl(var(--primary))'
                  }}
                />

                {/* Content Card */}
                <div className={`ml-8 md:ml-0 md:w-[calc(50%-3rem)] ${
                  index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'
                }`}>
                  <div className="card-elevated p-6 inline-block text-left w-full">
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        Current
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-accent font-medium text-sm mb-3">
                      {exp.institution}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
