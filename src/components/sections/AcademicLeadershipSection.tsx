import { 
  ClipboardList, 
  Users, 
  FileCheck, 
  Target, 
  Building2, 
  GraduationCap 
} from "lucide-react";

const leadershipAreas = [
  {
    icon: ClipboardList,
    title: "Academic Planning & Curriculum Governance",
    description: "Strategic curriculum development aligned with industry standards and accreditation requirements.",
  },
  {
    icon: Users,
    title: "Faculty Development & Coordination",
    description: "Training and mentoring faculty members on modern pedagogical approaches and technical skills.",
  },
  {
    icon: FileCheck,
    title: "Examination Operations & Compliance",
    description: "Ensuring examination integrity and regulatory compliance across academic programs.",
  },
  {
    icon: Target,
    title: "Training & Placement Strategy",
    description: "End-to-end placement program design achieving consistently high placement outcomes.",
  },
  {
    icon: Building2,
    title: "Industry Collaboration",
    description: "Building partnerships with tech companies for internships, projects, and placement opportunities.",
  },
  {
    icon: GraduationCap,
    title: "Student Mentoring",
    description: "Personalized guidance for career development and technical skill enhancement.",
  },
];

const AcademicLeadershipSection = () => {
  return (
    <section id="leadership" className="section-padding bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            Leadership
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Academic &
            <span className="text-primary"> Administrative Leadership</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Strategic leadership across academic operations, faculty development, and industry partnerships.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadershipAreas.map((area, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-xl border border-border/50 bg-card/30 hover:bg-card hover:border-border transition-all duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <area.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">
                  {area.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicLeadershipSection;
