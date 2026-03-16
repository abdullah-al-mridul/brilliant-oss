import { useState, useEffect } from "preact/hooks";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { SocialProof } from "./sections/SocialProof";
import { ConceptsSection } from "./sections/ConceptsSection";
import { PersonalizedSection } from "./sections/PersonalizedSection";
import { GuidedSection } from "./sections/GuidedSection";
import { LearningGoalsSection } from "./sections/LearningGoalsSection";
import { MotivationSection } from "./sections/MotivationSection";
import { FunSection } from "./sections/FunSection";
import { ContributorSection } from "./sections/ContributorSection";
import { FinalCTA } from "./sections/FinalCTA";
import { FooterSection } from "./sections/Footer";

export function App() {
  const [activeCategory, setActiveCategory] = useState<
    "Math" | "ComputerScience" | "DataAnalysis" | "Science"
  >("ComputerScience");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-white text-gray-900 antialiased relative">
      <Header isScrolled={isScrolled} />
      <Hero />
      <SocialProof />
      <ConceptsSection />
      <PersonalizedSection />
      <GuidedSection />
      <LearningGoalsSection
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <MotivationSection />
      <FunSection />
      <ContributorSection />
      <FinalCTA />
      <FooterSection />
    </main>
  );
}
