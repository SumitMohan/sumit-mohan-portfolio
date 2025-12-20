import { Trophy, Award, Users, Sparkles } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "UGC-NET & GATE Qualified",
    subtitle: "99th Percentile",
    description: "Cleared national-level competitive examinations demonstrating academic excellence.",
  },
  {
    icon: Award,
    title: "SCI-Indexed Publications",
    subtitle: "Research Impact",
    description: "Published research in high-impact, peer-reviewed international journals.",
  },
  {
    icon: Users,
    title: "10,000+ Students Mentored",
    subtitle: "Large-Scale Impact",
    description: "Trained and mentored students across multiple institutions and programs.",
  },
  {
    icon: Sparkles,
    title: "AI & GenAI Training Programs",
    subtitle: "Industry Pioneer",
    description: "Designed and delivered cutting-edge AI training programs for academic institutions.",
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-padding bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            Recognition
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Achievements &
            <span className="text-primary"> Credentials</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Key milestones and credentials that demonstrate expertise and impact.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="card-elevated card-hover p-8"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <achievement.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-accent font-semibold text-sm mb-3">
                    {achievement.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
