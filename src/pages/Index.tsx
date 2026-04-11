import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import AstromologySection from "@/components/sections/AstromologySection";
import Code2CrackSection from "@/components/sections/Code2CrackSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import TechToolkitSection from "@/components/sections/AcademicLeadershipSection";
import PublicationsSection from "@/components/sections/PublicationsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";
import TrustSection from "@/components/sections/TrustSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ScrollProgress from "@/components/ui/ScrollProgress";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Sumit Mohan | GenAI Engineer | Data Scientist | AI Systems Builder</title>
        <meta
          name="description"
          content="Sumit Mohan - GenAI Engineer & Data Scientist with 7+ years building scalable AI systems, LLM-powered products, and intelligent applications. Creator of Astromology.com and Code2Crack."
        />
        <meta name="keywords" content="Sumit Mohan, GenAI Engineer, Data Scientist, AI Systems Builder, Astromology, Code2Crack, RAG, LLMs, Machine Learning, Deep Learning, FastAPI" />
        <meta property="og:title" content="Sumit Mohan | GenAI Engineer & Data Scientist" />
        <meta property="og:description" content="Building production-grade AI systems with RAG pipelines, LLMs, and scalable architecture. Creator of Astromology.com and Code2Crack." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sumitmohan.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sumit Mohan | GenAI Engineer & Data Scientist" />
        <meta name="twitter:description" content="Building production-grade AI systems with RAG pipelines, LLMs, and scalable architecture." />
        <link rel="canonical" href="https://sumitmohan.com" />
      </Helmet>

      <div className="min-h-screen">
        <ScrollProgress />
        <Header />
        <main>
          <HeroSection />
          <TrustSection />
          <AboutSection />
          <ExpertiseSection />
          <div id="projects">
            <AstromologySection />
            <Code2CrackSection />
          </div>
          <ExperienceSection />
          <TechToolkitSection />
          <PublicationsSection />
          <AchievementsSection />
          <TestimonialsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
