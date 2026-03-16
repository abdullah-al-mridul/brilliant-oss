import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { PreactQueryDevtools } from '@tanstack/preact-query-devtools'
import { Header } from '@/sections/Header'
import { FooterSection } from '@/sections/Footer'
import { AuthModal } from '@/ui/AuthModal'
import { useStore } from '@tanstack/preact-store'
import { uiStore, setAuthModalOpen } from '@/store/uiStore'
import { useState, useEffect } from 'preact/hooks'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const { isAuthModalOpen } = useStore(uiStore)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased relative">
      <Header
        isScrolled={isScrolled}
        onSignInClick={() => setAuthModalOpen(true)}
      />
      <Outlet />
      <FooterSection />
      
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />

      <TanStackRouterDevtools />
      <PreactQueryDevtools />
    </div>
  )
}
