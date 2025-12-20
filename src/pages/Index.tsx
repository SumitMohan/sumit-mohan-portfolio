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

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Sumit Mohan | Head of Technical Training & AI Education Leader</title>
        <meta 
          name="description" 
          content="Sumit Mohan - Head of Technical Training and Academic Leader. Building industry-aligned training ecosystems through AI, curriculum design, and scalable assessment platforms. Creator of Code2Crack." 
        />
        <meta name="keywords" content="Sumit Mohan, Technical Training, AI Education, EdTech, Code2Crack, Academic Leadership, DSA Training, Curriculum Design" />
        <meta property="og:title" content="Sumit Mohan | Head of Technical Training" />
        <meta property="og:description" content="Building industry-aligned training ecosystems through AI, curriculum design, and scalable assessment platforms." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sumitmohan.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sumit Mohan | Head of Technical Training" />
        <meta name="twitter:description" content="Building industry-aligned training ecosystems through AI, curriculum design, and scalable assessment platforms." />
        <link rel="canonical" href="https://sumitmohan.com" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ExpertiseSection />
          <Code2CrackSection />
          <ExperienceSection />
          <AcademicLeadershipSection />
          <PublicationsSection />
          <AchievementsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
