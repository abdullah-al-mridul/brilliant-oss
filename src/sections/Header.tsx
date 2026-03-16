interface HeaderProps {
  isScrolled: boolean;
  onSignInClick: () => void;
}

export function Header({ isScrolled, onSignInClick }: HeaderProps) {
  return (
    <header
      className={`border-b transition-all duration-300 fixed top-0 left-0 w-full z-50 ${isScrolled ? "bg-white/95 backdrop-blur-md border-gray-200 py-2 shadow-sm" : "bg-transparent border-transparent py-4"}`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center cursor-pointer group">
          <span
            className={`text-3xl font-bold tracking-tight transition-colors ${isScrolled ? "text-gray-900" : "text-gray-900"}`}
          >
            Brilliant
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={onSignInClick}
            className="px-6 py-2 text-[15px] font-bold text-gray-700 bg-white border border-gray-200 shadow-[0_3px_0_0_#E5E7EB] hover:shadow-[0_1.5px_0_0_#E5E7EB] hover:translate-y-[1.5px] active:shadow-none active:translate-y-[3px] rounded-full transition-all cursor-pointer"
          >
            Sign in
          </button>
        </div>
      </nav>
    </header>
  );
}

