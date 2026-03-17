import { useEffect, useState } from "preact/hooks";
import { AlertTriangle, X } from "lucide-preact";

interface DisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DisclaimerModal({ isOpen, onClose }: DisclaimerModalProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      document.body.style.overflow = "hidden";
    } else {
      const timer = setTimeout(() => setIsAnimating(false), 300);
      document.body.style.overflow = "unset";
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen && !isAnimating) return null;

  return (
    <div
      className={`fixed inset-0 z-100 flex items-center justify-center p-4 transition-all duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        className={`relative w-full max-w-[440px] bg-white rounded-4xl shadow-2xl overflow-hidden transform transition-all duration-300 ${
          isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
      >
        <div className="p-10 md:p-12">
          <div className="flex flex-col items-center text-center">
            {/* Icon Section - Matching AuthModal style */}
            <div className="relative mb-8 w-24 h-24 mx-auto flex items-center justify-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-yellow-100/40 blur-3xl rounded-full"></div>
              <div className="relative z-10 w-16 h-16 bg-linear-to-tr from-yellow-400 to-orange-400 rounded-2xl shadow-xl shadow-yellow-500/20 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-b from-white/20 to-transparent"></div>
                <AlertTriangle
                  size={32}
                  className="text-white"
                  strokeWidth={2.5}
                />
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Disclaimer
            </h2>

            <div className="space-y-4 text-gray-500 text-[15px] leading-relaxed font-medium">
              <p>
                This website is a{" "}
                <span className="text-gray-900 font-bold">
                  fan-made, open-source alternative
                </span>{" "}
                of{" "}
                <a
                  href="https://brilliant.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-bold border-b border-blue-100 pb-0.5"
                >
                  brilliant.org
                </a>
                .
              </p>
              <p>
                Please note that this project is{" "}
                <span className="text-gray-900 font-bold">
                  not affiliated with, endorsed by, or associated with
                </span>{" "}
                Brilliant.org in any way.
              </p>
              <p>All trademarks belong to their respective owners.</p>
            </div>

            <button
              onClick={onClose}
              className="mt-10 w-full py-4 px-4 bg-yellow-500 text-white rounded-full transition-all font-bold 
  shadow-[0_4px_0_0_#ca8a04] 
  hover:shadow-[0_2px_0_0_#ca8a04] 
  hover:translate-y-[2px] 
  active:shadow-none active:translate-y-[4px] 
  cursor-pointer"
            >
              I Understand
            </button>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-8 right-8 p-2 text-gray-400 hover:text-gray-900 transition-colors cursor-pointer"
        >
          <X size={20} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
