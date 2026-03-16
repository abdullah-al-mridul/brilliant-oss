import { createFileRoute, redirect, useNavigate } from '@tanstack/react-router'
import { authStore, logout } from '@/store/authStore'
import { useStore } from '@tanstack/preact-store'
import { useEffect } from 'preact/hooks'

export const Route = createFileRoute('/home' as any)({
  beforeLoad: () => {
    const state = authStore.state;
    if (state.status === 'unauthenticated') {
      throw redirect({
        to: '/',
      })
    }
  },
  component: HomeComponent,
})

function HomeComponent() {
  const { user, status } = useStore(authStore)
  const navigate = useNavigate()

  useEffect(() => {
    if (status === 'unauthenticated') {
      navigate({ to: '/' })
    }
  }, [status, navigate])

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="max-w-md w-full">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome back!</h1>
        <p className="text-gray-600 mb-8">
          Logged in as <span className="font-semibold text-gray-900">{user?.email || user?.name || 'User'}</span>
        </p>
        
        <div className="p-12 bg-gray-50 rounded-3xl border border-dashed border-gray-300 mb-8">
          <p className="text-gray-400 font-medium italic">Empty Home Page</p>
        </div>

        <button
          onClick={() => logout()}
          className="px-8 py-3 bg-white border border-gray-200 rounded-full font-bold text-gray-700 shadow-[0_2px_0_0_#E5E7EB] hover:shadow-none hover:translate-y-[2px] transition-all cursor-pointer"
        >
          Sign out
        </button>
      </div>
    </div>
  )
}
