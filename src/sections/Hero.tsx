import { Zap } from "lucide-preact";
import { heroNavItems } from "../data/navigation";
import { setAuthModalOpen } from "@/store/uiStore";

export function Hero() {
  return (
    <section
      className="h-dvh relative flex flex-col justify-between overflow-hidden"
      data-purpose="hero-section"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 text-center flex flex-col justify-center">
        <div>
          {/* Custom "Learn by doing" Graphic Layout */}
          <div className="relative w-full max-w-[800px] h-auto aspect-2/1  flex items-center justify-center select-none">
            {/* Background Grid Lines */}
            <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
              <div className="w-full h-px bg-gray-400 absolute top-[30%] left-0"></div>
              <div className="w-full h-px bg-gray-400 absolute top-[65%] left-0"></div>
            </div>

            {/* Left Box Chart Graphic (Behind 'Learn') */}
            <div className="absolute left-[8%] top-[15%] w-[120px] h-[100px] z-0 flex items-end gap-1 opacity-70">
              <div className="w-4 h-[30%] bg-purple-200 rounded-sm"></div>
              <div className="w-4 h-[60%] bg-purple-300 rounded-sm"></div>
              <div className="w-4 h-[45%] bg-blue-100 rounded-sm"></div>
              <div className="w-4 h-[80%] bg-gray-100 rounded-sm relative">
                <div className="absolute -top-8 -left-3 bg-purple-400 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm">
                  31%
                </div>
                {/* Dotted Line & Caret */}
                <div className="absolute -top-2 left-1/2 w-px h-20 border-l border-dashed border-gray-400"></div>
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border border-gray-300 rounded-full shadow-sm flex items-center justify-center z-10">
                  <span className="text-[8px] text-gray-500">▶</span>
                </div>
              </div>
              <div className="w-4 h-[55%] bg-gray-100 rounded-sm"></div>
            </div>

            {/* Hover Tooltips (between words) */}
            <div className="absolute left-[25%] top-[73%] z-20 flex flex-col items-start gap-1 transform -translate-y-1/2 -rotate-2">
              <div className="bg-white border text-blue-500 text-[10px] font-mono font-bold px-2 py-0.5 rounded-sm shadow-sm opacity-80 border-blue-100 flex items-center gap-1">
                <Zap size={10} /> while{" "}
                <span className="text-blue-200">learning ▾</span>
              </div>
              <div className="bg-white border text-blue-400 text-[10px] font-mono font-bold px-2 py-0.5 rounded-sm shadow-sm scale-90 translate-x-2 border-blue-50">
                if <span className="text-blue-200">doing ▾</span>
              </div>
              <div className="bg-blue-50 border border-blue-200 text-blue-600 text-[11px] font-mono font-bold px-3 py-1 rounded-sm shadow-md mt-1 scale-110 flex items-center gap-1">
                keep{" "}
                <span className="text-blue-400 font-normal">growing ▾</span>
              </div>
              <div className="bg-white border text-blue-300 text-[10px] font-mono font-bold px-2 py-0.5 rounded-sm shadow-sm opacity-60 scale-90 border-transparent">
                else
              </div>
              <div className="bg-white border text-blue-400 text-[10px] font-mono font-bold px-2 py-0.5 rounded-sm shadow-sm opacity-80 border-blue-100 translate-x-4">
                bummer
              </div>
            </div>

            {/* Right Scatter Plot Graphic */}
            <div className="absolute right-[15%] top-[20%] w-[150px] h-[80px] z-0 opacity-60 pointer-events-none">
              <svg width="100%" height="100%" overflow="visible">
                <path
                  d="M0,50 Q40,40 100,0"
                  fill="none"
                  stroke="#fdba74"
                  strokeWidth="1"
                  strokeDasharray="2 4"
                />
                <circle cx="20" cy="45" r="2" fill="#fb923c" />
                <circle cx="40" cy="35" r="3" fill="#fb923c" />
                <circle cx="60" cy="20" r="2" fill="#fb923c" />
                <circle cx="80" cy="10" r="1.5" fill="#fbd38d" />
                <circle cx="100" cy="5" r="1" fill="#fbd38d" />
                <circle cx="120" cy="0" r="1" fill="#fbd38d" />

                <circle cx="30" cy="60" r="1.5" fill="#fbd38d" />
                <circle cx="50" cy="45" r="1" fill="#fbd38d" />
                <circle cx="70" cy="30" r="1.5" fill="#fbd38d" />
                <circle cx="90" cy="25" r="2" fill="#fb923c" />
                <circle cx="110" cy="15" r="1.5" fill="#fbd38d" />
              </svg>
            </div>

            {/* Right Math Bezier Curve Graphic */}
            <div className="absolute right-[12%] bottom-[20%] w-[80px] h-[80px] z-0 opacity-70 pointer-events-none">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                overflow="visible"
              >
                <path
                  d="M 0 50 C 40 10 60 90 100 0"
                  fill="none"
                  stroke="#93c5fd"
                  strokeWidth="2"
                />
                <circle
                  cx="60"
                  cy="90"
                  r="6"
                  fill="#3b82f6"
                  fillOpacity="0.8"
                  className="shadow-lg"
                />
                <circle
                  cx="60"
                  cy="90"
                  r="10"
                  fill="none"
                  stroke="#bfdbfe"
                  strokeWidth="1"
                />
              </svg>
            </div>

            {/* Main Text Elements */}
            <h1 className="text-[9.5rem] font-thin text-black leading-[0.85] relative z-10 font-serif tracking-tight flex flex-col items-center">
              <div className="flex items-center relative">
                Learn
                {/* Orange Dots */}
                <div className="w-5 h-5 bg-[#ff945e] rounded-full absolute -right-6 bottom-4 shadow-sm z-20"></div>
                <div className="w-3.5 h-3.5 bg-[#f5a171] rounded-full absolute -right-1.5 bottom-8 z-20"></div>
              </div>
              <div className="flex items-center">
                by <span className={"w-30 h-2.5"}></span> doing
                <span className="text-[#3b82f6] text-[5rem] translate-y-2">
                  .
                </span>
              </div>
            </h1>
          </div>

          <p className="text-[21px] text-[#1c1d1f] max-w-[600px] mb-12 font-medium leading-[1.6] mt-8">
            Interactive problem solving that's effective and fun.
            <br /> Excel in math and coding.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center w-full max-w-[650px] z-10 relative">
            <button
              onClick={() => {
                setAuthModalOpen(true);
              }}
              className="flex-1 py-[16px] px-8 bg-[#22C55E] text-white text-[18px] font-bold rounded-full transition-all shadow-[0_4px_0_0_#16A34A] hover:shadow-[0_2px_0_0_#16A34A] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px] cursor-pointer"
            >
              Start Learning
            </button>
            {/* <button className="flex-1 py-[16px] px-8 bg-white border-2 border-gray-100 text-[#1c1d1f] text-[18px] font-bold rounded-full transition-all shadow-[0_4px_0_0_#D1D5DB] hover:shadow-[0_2px_0_0_#D1D5DB] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px] cursor-pointer">
              I'm a parent or teacher
            </button> */}
          </div>
        </div>
      </div>

      {/* Global Subject Navigation Bar (Sticky at bottom of hero) */}
      <div className="w-full border-t border-gray-100 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 h-20 flex justify-center items-center overflow-x-auto hide-scrollbar">
          <div className="flex justify-between items-center w-full max-w-5xl min-w-[700px] gap-4">
            {heroNavItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 hover:opacity-70 transition-opacity cursor-pointer text-[18px] font-medium text-[#1c1d1f]"
              >
                <div
                  className={`w-6 h-6 flex items-center justify-center ${item.textColor}`}
                >
                  {item.icon}
                </div>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
