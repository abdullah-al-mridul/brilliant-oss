interface HeaderProps {
  isScrolled: boolean;
  onSignInClick: () => void;
  isAuthenticated: boolean;
}

import { logout } from "@/store/authStore";
import { Home, BookOpen, Shield, Zap, Menu } from "lucide-preact";

export function Header({ isScrolled, onSignInClick, isAuthenticated }: HeaderProps) {
  return (
    <header
      className={`border-b transition-all duration-300 fixed top-0 left-0 w-full z-50 ${isScrolled ? "bg-white/95 backdrop-blur-md border-gray-200 py-1.5 shadow-sm" : "bg-white border-gray-100 py-2.5"}`}
    >
      <nav className="max-w-[1100px] mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <div className="flex items-center cursor-pointer group">
            <span className="text-2xl font-black tracking-tighter text-gray-900">
              Brilliant
            </span>
          </div>
          
          {isAuthenticated && (
            <div className="hidden md:flex items-center gap-8 text-[15px] font-bold text-gray-400">
              <button className="flex items-center gap-2 text-gray-900 border-b-2 border-gray-900 pb-1 cursor-pointer">
                <Home size={18} strokeWidth={2.5} />
                <span>Home</span>
              </button>
              <button className="flex items-center gap-2 hover:text-gray-900 transition-colors cursor-pointer">
                <BookOpen size={18} strokeWidth={2.5} />
                <span>Courses</span>
              </button>
            </div>
          )}
        </div>

        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <button className="hidden md:block px-5 py-2 bg-white border border-gray-200 text-gray-900 rounded-full font-bold text-sm shadow-[0_2px_0_0_#E5E7EB] hover:shadow-none hover:translate-y-px transition-all cursor-pointer">
                Go Premium
              </button>
              
              {/* Stats */}
              <div className="flex items-center gap-2 border border-gray-200 rounded-full px-3 py-1 bg-white shadow-xs">
                <span className="font-bold text-gray-900 text-sm">2</span>
                <Shield size={16} fill="currentColor" className="text-yellow-500" />
              </div>
              
              <div className="flex items-center gap-2 border border-gray-200 rounded-full px-3 py-1 bg-white shadow-xs">
                <span className="font-bold text-gray-200 text-sm">0</span>
                <Zap size={16} fill="currentColor" className="text-gray-100" />
              </div>

              <button 
                onClick={() => logout()}
                className="p-2 text-gray-900 hover:text-black transition-colors cursor-pointer"
              >
                <Menu size={20} strokeWidth={2.5} />
              </button>
            </>
          ) : (
            <button
              onClick={onSignInClick}
              className="px-6 py-2 text-[15px] font-bold text-gray-700 bg-white border border-gray-200 shadow-[0_3px_0_0_#E5E7EB] hover:shadow-[0_1.5px_0_0_#E5E7EB] hover:translate-y-[1.5px] active:shadow-none active:translate-y-[3px] rounded-full transition-all cursor-pointer"
            >
              Sign in
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}

