import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/sections/Hero'
import { SocialProof } from '@/sections/SocialProof'
import { ConceptsSection } from '@/sections/ConceptsSection'
import { PersonalizedSection } from '@/sections/PersonalizedSection'
import { GuidedSection } from '@/sections/GuidedSection'
import { LearningGoalsSection } from '@/sections/LearningGoalsSection'
import { MotivationSection } from '@/sections/MotivationSection'
import { FunSection } from '@/sections/FunSection'
import { ContributorSection } from '@/sections/ContributorSection'
import { FinalCTA } from '@/sections/FinalCTA'
import { useState } from 'preact/hooks'

export const Route = createFileRoute('/' as any)({
  component: Index,
})

function Index() {
  const [activeCategory, setActiveCategory] = useState<
    "Math" | "ComputerScience" | "DataAnalysis" | "Science"
  >("ComputerScience");

  return (
    <>
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
    </>
  )
}
