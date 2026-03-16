import { WindowWrapper } from "./WindowWrapper";

interface CategoryVisualizationProps {
  category: "Math" | "ComputerScience" | "DataAnalysis" | "Science";
}

export function CategoryVisualization({
  category,
}: CategoryVisualizationProps) {
  switch (category) {
    case "ComputerScience":
      return (
        <WindowWrapper
          borderColor="border-gray-800 hover:border-blue-500/50"
          isDark
        >
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#0d1117]">
            <svg viewBox="0 0 200 120" className="w-full max-w-[280px]">
              {/* Connections */}
              <line
                x1="100"
                y1="20"
                x2="60"
                y2="50"
                stroke="#374151"
                strokeWidth="1"
              />
              <line
                x1="100"
                y1="20"
                x2="140"
                y2="50"
                stroke="#374151"
                strokeWidth="1"
              />
              <line
                x1="60"
                y1="50"
                x2="40"
                y2="80"
                stroke="#374151"
                strokeWidth="1"
              />
              <line
                x1="60"
                y1="50"
                x2="80"
                y2="80"
                stroke="#374151"
                strokeWidth="1"
              />
              <line
                x1="140"
                y1="50"
                x2="160"
                y2="80"
                stroke="#3b82f6"
                strokeWidth="2"
                className="animate-[draw-path_2s_infinite]"
              />

              {/* Nodes */}
              <circle cx="100" cy="20" r="8" fill="#1f2937" stroke="#374151" />
              <circle cx="60" cy="50" r="8" fill="#1f2937" stroke="#374151" />
              <circle cx="140" cy="50" r="8" fill="#1e3a8a" stroke="#3b82f6" />
              <circle cx="40" cy="80" r="8" fill="#1f2937" stroke="#374151" />
              <circle cx="80" cy="80" r="8" fill="#1f2937" stroke="#374151" />
              <circle
                cx="160"
                cy="80"
                r="8"
                fill="#1e3a8a"
                stroke="#3b82f6"
                className=""
              />
            </svg>
            <div className="mt-4 text-center">
              <p className="text-blue-400 font-mono text-[10px] uppercase tracking-widest">
                Searching 42...
              </p>
            </div>
          </div>
        </WindowWrapper>
      );
    case "Math":
      return (
        <WindowWrapper
          borderColor="border-gray-800 hover:border-blue-500/50"
          isDark
        >
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#0d1117]">
            <div className="relative w-40 h-40 flex items-center justify-center border border-gray-800 rounded-full">
              {/* Unit Circle Axes */}
              <div className="absolute w-full h-px bg-gray-800"></div>
              <div className="absolute h-full w-px bg-gray-800"></div>

              {/* Radius & Projection */}
              <div className="absolute w-full h-full animate-[rotate-unit_5s_linear_infinite]">
                <div className="absolute top-1/2 left-1/2 w-20 h-0.5 bg-blue-400 origin-left"></div>
                <div className="absolute top-1/2 left-[calc(50%+80px)] -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
              </div>

              {/* Static Unit Circle */}
              <div className="absolute w-full h-full border border-blue-500/20 rounded-full"></div>
            </div>
            <div className="mt-4 text-[10px] font-mono text-blue-400/80 uppercase tracking-widest">
              sin(θ) + cos(θ) = 1
            </div>
          </div>
        </WindowWrapper>
      );
    case "DataAnalysis":
      return (
        <WindowWrapper
          borderColor="border-gray-800 hover:border-orange-500/50"
          isDark
        >
          <div className="w-full h-full flex items-center justify-center p-6 bg-[#0d1117]">
            <div className="relative w-full max-w-[200px] aspect-square grid grid-cols-10 grid-rows-10 gap-0.5 border border-gray-800 p-0.5">
              {[...Array(100)].map((_, i) => {
                const x = i % 10;
                const y = Math.floor(i / 10);
                const isTrend = Math.abs(y - (9 - x)) <= 1;
                return (
                  <div
                    key={i}
                    className={`w-full h-full transition-colors duration-1000 ${
                      isTrend
                        ? "bg-orange-500/80 animate-[data-grid-fade_3s_infinite]"
                        : "bg-orange-500/10"
                    }`}
                    style={{ animationDelay: `${(x + y) * 0.1}s` }}
                  ></div>
                );
              })}
              {/* Trend Line */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 bg-orange-200/30 -rotate-45 scale-x-125"></div>
            </div>
          </div>
        </WindowWrapper>
      );
    case "Science":
      return (
        <WindowWrapper
          borderColor="border-gray-800 hover:border-yellow-700/50"
          isDark
        >
          <div className="w-full h-full flex items-center justify-center p-6 bg-[#0d1117]">
            <div className="relative w-48 h-32 flex items-center justify-center overflow-hidden">
              <svg
                viewBox="0 0 120 80"
                className="w-full h-full overflow-visible"
              >
                {/* Prism */}
                <path
                  d="M 60 10 L 40 70 L 80 70 Z"
                  fill="none"
                  stroke="#4b5563"
                  strokeWidth="1"
                />

                {/* Input Light */}
                <line
                  x1="0"
                  y1="40"
                  x2="53"
                  y2="40"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeOpacity="0.8"
                  strokeDasharray="4 4"
                  className="animate-[draw-axis_4s_linear_infinite]"
                />

                {/* Refracted Spectrum */}
                {[
                  "#ef4444",
                  "#f97316",
                  "#eab308",
                  "#22c55e",
                  "#3b82f6",
                  "#8b5cf6",
                ].map((color, i) => (
                  <path
                    key={color}
                    d={`M 67 ${40 + i * 0.5} L 120 ${30 + i * 10}`}
                    stroke={color}
                    strokeWidth="4"
                    strokeOpacity="0.4"
                    className="animate-[prism-refract_5s_linear_infinite] blur-[2px]"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </svg>
            </div>
          </div>
        </WindowWrapper>
      );
    default:
      return null;
  }
}
