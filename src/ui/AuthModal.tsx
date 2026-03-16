import { useEffect, useState } from "preact/hooks";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      setTimeout(() => setIsVisible(false), 300);
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!isOpen && !isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-100 flex items-center justify-center p-4 transition-all duration-300 ${
        isOpen && isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        className={`relative w-full max-w-[440px] bg-white rounded-4xl shadow-2xl p-8 md:p-12 transform transition-all duration-300 flex flex-col items-center text-center ${
          isOpen && isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
      >
        {/* Logo Section */}
        <div className="relative mb-8 w-32 h-32 flex items-center justify-center">
          {/* Light Beam */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-yellow-100/30 blur-3xl rounded-full"></div>
          
          {/* Green Logo Body */}
          <div className="relative z-10 w-20 h-20 bg-linear-to-tr from-[#22c55e] to-[#4ade80] rounded-3xl shadow-xl shadow-green-500/20 rotate-12 flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 bg-linear-to-b from-white/20 to-transparent"></div>
             {/* Stylized symbol */}
             <div className="w-10 h-10 border-4 border-white rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
             </div>
          </div>
          
          {/* Decorative light ray */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-64 bg-linear-to-t from-yellow-200/0 via-yellow-200/20 to-transparent -rotate-45 z-0"></div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-8">Sign in</h2>

        <div className="w-full space-y-3">
          {/* Google Button */}
          <button className="w-full py-3 px-4 bg-white border border-gray-200 rounded-full flex items-center justify-center gap-3 font-bold text-gray-700 shadow-[0_3px_0_0_#E5E7EB] hover:shadow-[0_1.5px_0_0_#E5E7EB] hover:translate-y-[1.5px] active:shadow-none active:translate-y-[3px] transition-all cursor-pointer">
            <svg viewBox="0 0 24 24" width="20" height="20">

              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Sign in with Google
          </button>

          {/* Facebook Button */}
          <button className="w-full py-3 px-4 bg-white border border-gray-200 rounded-full flex items-center justify-center gap-3 font-bold text-gray-700 shadow-[0_3px_0_0_#E5E7EB] hover:shadow-[0_1.5px_0_0_#E5E7EB] hover:translate-y-[1.5px] active:shadow-none active:translate-y-[3px] transition-all cursor-pointer">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="#1877F2">

              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Sign in with Facebook
          </button>

          {/* Apple Button */}
          <button className="w-full py-3 px-4 bg-white border border-gray-200 rounded-full flex items-center justify-center gap-3 font-bold text-gray-700 shadow-[0_3px_0_0_#E5E7EB] hover:shadow-[0_1.5px_0_0_#E5E7EB] hover:translate-y-[1.5px] active:shadow-none active:translate-y-[3px] transition-all cursor-pointer">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">

              <path d="M17.073 10.117c.012-2.32 1.898-3.41 1.986-3.46-1.077-1.574-2.753-1.789-3.344-1.815-1.416-.144-2.76.837-3.476.837s-1.83-.816-3.018-.79c-1.558.022-2.996.907-3.793 2.29-1.614 2.798-.415 6.94 1.157 9.213.766 1.11 1.678 2.348 2.873 2.306 1.15-.045 1.586-.74 2.977-.74s1.785.74 2.99.718c1.228-.022 2.016-1.117 2.766-2.217.868-1.268 1.226-2.492 1.246-2.556-.026-.011-2.39-.916-2.413-3.796zM14.716 5.152c.635-.77 1.063-1.84 0.947-2.91-1.01.04-2.227.674-2.95 1.52-.647.747-1.213 1.848-1.06 2.893 1.144.024 2.3-0.56 3.063-1.503z" />
            </svg>
            Continue with Apple
          </button>

          <div className="py-2"></div>

          {/* Email Button */}
          <button className="w-full py-3.5 px-4 bg-[#1c1d1f] hover:bg-black text-white rounded-full transition-all font-bold shadow-[0_4px_0_0_#000000] hover:shadow-[0_2px_0_0_#000000] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px] cursor-pointer">
            Sign in with email
          </button>

        </div>

        <div className="mt-12 text-gray-500 text-sm font-medium">
          New user?{" "}
          <button className="text-blue-600 hover:text-blue-700 font-bold border-b border-blue-200 pb-0.5">
            Sign up
          </button>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-900 transition-colors"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  );
}
