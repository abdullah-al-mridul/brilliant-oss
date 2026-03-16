import { createFileRoute, redirect, useNavigate } from '@tanstack/react-router'
import { authStore } from '@/store/authStore'
import { useStore } from '@tanstack/preact-store'
import { useEffect } from 'preact/hooks'
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
  beforeLoad: () => {
    if (authStore.state.status === 'authenticated') {
      throw redirect({
        to: '/home',
      })
    }
  },
  component: Index,
})

function Index() {
  const { status } = useStore(authStore)
  const navigate = useNavigate()

  useEffect(() => {
    if (status === 'authenticated') {
      navigate({ to: '/home' })
    }
  }, [status, navigate])

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
