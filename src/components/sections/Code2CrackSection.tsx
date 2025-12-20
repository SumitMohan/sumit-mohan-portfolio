import { Button } from "@/components/ui/button";
import { 
  ExternalLink, 
  TrendingUp, 
  Shield, 
  BarChart3, 
  BookOpen, 
  Bot, 
  Map 
} from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Trending Courses & Coding Questions",
    description: "Industry-relevant courses and frequently asked coding interview problems curated by experts.",
  },
  {
    icon: Shield,
    title: "Secure Proctored Assessments",
    description: "Normal browser proctoring and dedicated lockdown browser for high-stakes examinations.",
  },
  {
    icon: BarChart3,
    title: "End-to-End Student Progress Tracking",
    description: "Comprehensive performance analytics with consistency and learning behavior insights.",
  },
  {
    icon: BookOpen,
    title: "Dedicated Learning Management System",
    description: "Structured content delivery with centralized tracking and reporting capabilities.",
  },
  {
    icon: Bot,
    title: "Personalized AI Tutor",
    description: "Context-aware assistance inside tutorials and guided help during coding problems.",
  },
  {
    icon: Map,
    title: "Roadmaps & Technical Blogs",
    description: "Structured learning paths with industry updates and conceptual clarity resources.",
  },
];

const Code2CrackSection = () => {
  return (
    <section id="code2crack" className="section-padding bg-background overflow-hidden">
      <div className="section-container">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            Flagship Project
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Code2Crack
            <span className="block text-primary text-2xl md:text-3xl lg:text-4xl font-semibold mt-2">
              AI-Powered Training & Assessment Platform
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Code2Crack is a comprehensive EdTech platform designed to deliver industry-aligned 
            training, secure assessments, and personalized AI-driven learning at scale. Built 
            to transform how institutions approach technical education.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90"
            onClick={() => window.open('https://code2crack.com', '_blank')}
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            Visit Code2Crack
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => window.open('https://code2crack.com/features', '_blank')}
          >
            View Platform Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Code2CrackSection;
