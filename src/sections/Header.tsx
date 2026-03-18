import { Link } from "@tanstack/react-router";
interface HeaderProps {
  isScrolled: boolean;
  onSignInClick: () => void;
  isAuthenticated: boolean;
}

import { useState, useRef, useEffect } from "preact/hooks";
import { logout } from "@/store/authStore";
import { Home, BookOpen, Zap, Menu, Star, Github } from "lucide-preact";

export function Header({
  isScrolled,
  onSignInClick,
  isAuthenticated,
}: HeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <header
      className={`border-b transition-all duration-300 fixed top-0 left-0 w-full z-50 ${isScrolled ? "bg-white/95 backdrop-blur-md border-gray-200 py-1.5 shadow-sm" : "bg-white border-gray-100 py-2.5"}`}
    >
      <nav className="max-w-[1100px] mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <div className="flex items-center cursor-pointer group">
            <span className="text-2xl font-black tracking-tighter text-gray-900">
              BrilliantOSS
            </span>
          </div>

          {isAuthenticated && (
            <div className="hidden md:flex items-center gap-8 text-[15px] font-bold text-gray-400">
              <Link
                to="/home"
                className="flex items-center gap-2 pb-1 transition-colors cursor-pointer"
                activeProps={{
                  className: "text-gray-900 border-b-[3px] border-gray-900",
                }}
                inactiveProps={{
                  className:
                    "hover:text-gray-900 border-b-[3px] border-transparent",
                }}
              >
                <Home size={18} strokeWidth={2.5} />
                <span>Home</span>
              </Link>
              <Link
                to="/courses"
                className="flex items-center gap-2 pb-1 transition-colors cursor-pointer"
                activeProps={{
                  className: "text-gray-900 border-b-[3px] border-gray-900",
                }}
                inactiveProps={{
                  className:
                    "hover:text-gray-900 border-b-[3px] border-transparent",
                }}
              >
                <BookOpen size={18} strokeWidth={2.5} />
                <span>Courses</span>
              </Link>
            </div>
          )}
        </div>

        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <button className="px-5 flex items-center gap-2 py-2 bg-white border-2 border-gray-100 text-[#1c1d1f] font-bold text-sm rounded-full transition-all shadow-[0_4px_0_0_#D1D5DB] hover:shadow-[0_2px_0_0_#D1D5DB] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px] cursor-pointer group">
                <Github size={16} strokeWidth={2.5} />
                Star 25
                <Star
                  size={16}
                  fill="currentColor"
                  className="text-yellow-500 group-hover:animate-spin"
                />
              </button>

              <div className="px-5 flex items-center gap-2 py-2 bg-white border-2 border-gray-100 text-[#1c1d1f] font-bold text-sm rounded-full transition-all shadow-[0_4px_0_0_#D1D5DB] hover:shadow-[0_2px_0_0_#D1D5DB] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px] cursor-pointer">
                <span className="font-bold text-gray-700 text-sm">0</span>
                <Zap size={16} fill="currentColor" className="text-gray-700" />
              </div>

              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="p-2 text-gray-900 hover:text-black transition-colors cursor-pointer"
                >
                  <Menu size={20} strokeWidth={2.5} />
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-48 bg-white border border-gray-100 rounded-xl shadow-[0_5px_20px_-5px_rgba(0,0,0,0.1)] py-1 z-50 animate-in fade-in zoom-in duration-200">
                    {/* Popover Arrow */}
                    <div className="absolute -top-1.5 right-3.5 w-3 h-3 bg-white border-t border-l border-gray-100 rotate-45" />

                    <Link
                      to="/settings"
                      onClick={() => setIsDropdownOpen(false)}
                      className="w-full block text-left px-5 py-3 text-[15px] font-medium text-gray-800 hover:bg-gray-50 transition-colors cursor-pointer border-none"
                    >
                      Settings
                    </Link>

                    <div className="h-px bg-gray-100 mx-0" />

                    <button className="w-full text-left px-5 py-3 text-[15px] font-medium text-gray-800 hover:bg-gray-50 transition-colors cursor-pointer border-none">
                      About
                    </button>
                    <button className="w-full text-left px-5 py-3 text-[15px] font-medium text-gray-800 hover:bg-gray-50 transition-colors cursor-pointer border-none">
                      Help
                    </button>

                    <div className="h-px bg-gray-100 mx-0" />

                    <button
                      onClick={() => {
                        logout();
                        setIsDropdownOpen(false);
                      }}
                      className="w-full text-left px-5 py-3 text-[15px] font-medium text-gray-800 hover:bg-gray-50 transition-colors cursor-pointer border-none"
                    >
                      Log out
                    </button>
                  </div>
                )}
              </div>
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
