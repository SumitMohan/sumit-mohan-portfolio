import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import Code2CrackSection from "@/components/sections/Code2CrackSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import AcademicLeadershipSection from "@/components/sections/AcademicLeadershipSection";
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
        <title>Sumit Mohan | Bridging Academia & Industry with AI</title>
        <meta
          name="description"
          content="Sumit Mohan - Head of Technical Training & EdTech Founder. Bridging the gap between university curriculum and industry expectations through AI-driven education ecosystems."
        />
        <meta name="keywords" content="Sumit Mohan, Technical Training, AI Education, EdTech, Code2Crack, Academic Leadership, Engineering Education, Curriculum Design" />
        <meta property="og:title" content="Sumit Mohan | Head of Technical Training & EdTech Founder" />
        <meta property="og:description" content="Bridging the gap between university curriculum and industry expectations through AI-driven education ecosystems." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sumitmohan.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sumit Mohan | Head of Technical Training" />
        <meta name="twitter:description" content="Bridging the gap between university curriculum and industry expectations through AI-driven education ecosystems." />
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
          <Code2CrackSection />
          <ExperienceSection />
          <AcademicLeadershipSection />
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
