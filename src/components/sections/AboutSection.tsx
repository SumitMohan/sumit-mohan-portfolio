import { Award, Users, BookOpen, TrendingUp } from "lucide-react";

const stats = [
  { icon: Award, value: "7+", label: "Years Experience" },
  { icon: Users, value: "10K+", label: "Students Trained" },
  { icon: BookOpen, value: "50+", label: "Courses Designed" },
  { icon: TrendingUp, value: "95%", label: "Placement Rate" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
              About
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Driving Excellence in
              <span className="text-primary"> Technical Education</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                With over 7 years of experience in academic leadership and technical training, 
                I specialize in designing and implementing industry-aligned curriculum that 
                bridges the gap between academia and industry demands.
              </p>
              <p>
                My expertise spans Data Structures & Algorithms, AI/ML, and Generative AI education, 
                with a focus on measurable outcomes and scalable training systems. I have worked 
                across multiple universities, building placement-oriented programs that consistently 
                deliver results.
              </p>
              <p>
                As the creator of Code2Crack, I am committed to democratizing quality technical 
                education through AI-powered learning platforms and secure assessment systems.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="card-elevated card-hover p-6 md:p-8 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 text-accent mb-4">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
