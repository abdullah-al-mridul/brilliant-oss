import type { ComponentChildren } from "preact";
import { useState } from "preact/hooks";
import {
  CheckCircle2,
  Zap,
  TerminalSquare,
  FunctionSquare,
  GitMerge,
  Cpu,
  BrainCircuit,
  Binary,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronRight,
  Play,
} from "lucide-preact";

const courses = {
  Math: [
    { name: "Algebra Fundamentals", icon: FunctionSquare },
    { name: "Geometry I", icon: GitMerge },
    { name: "Logic", icon: BrainCircuit },
    { name: "Probability", icon: Binary },
    { name: "Pre-Calculus", icon: FunctionSquare },
    { name: "Calculus in a Nutshell", icon: GitMerge },
  ],
  ComputerScience: [
    { name: "Thinking in Code", icon: Cpu },
    { name: "Programming with Variables", icon: TerminalSquare },
    { name: "Thinking in Python", icon: BrainCircuit },
    { name: "Programming with Functions", icon: FunctionSquare },
    { name: "Algorithmic Thinking", icon: GitMerge },
    { name: "Computer Science Fundamentals", icon: Binary },
  ],
  DataAnalysis: [
    { name: "Data Structures", icon: Database },
    { name: "Applied Probability", icon: Binary },
    { name: "Statistics Foundations", icon: BrainCircuit },
    { name: "Data Analytics I", icon: TerminalSquare },
    { name: "Machine Learning Basics", icon: Cpu },
    { name: "Neural Networks", icon: GitMerge },
  ],
  Science: [
    { name: "Scientific Thinking", icon: BrainCircuit },
    { name: "Physics of the Everyday", icon: Zap },
    { name: "Classical Mechanics", icon: GitMerge },
    { name: "Electricity and Magnetism", icon: Zap },
    { name: "Quantum Computing", icon: Cpu },
    { name: "Chemistry Fundamentals", icon: Binary },
  ],
};

// ... database import fix
import { Database } from "lucide-preact";

const heroNavItems = [
  {
    label: "Math",
    textColor: "text-blue-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <rect x="2" y="10" width="10" height="10" fill="#60a5fa" rx="1" />
        <rect x="12" y="2" width="10" height="10" fill="#3b82f6" rx="1" />
        <path d="M12 12 L22 12" stroke="white" strokeWidth="2" />
        <path d="M12 2 L12 12" stroke="white" strokeWidth="2" />
      </svg>
    ),
  },
  {
    label: "Computer Science",
    textColor: "text-purple-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path
          d="M4 8 L20 8 M4 16 L20 16"
          stroke="#9333ea"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="8" cy="8" r="3" fill="#c084fc" />
        <circle cx="16" cy="16" r="3" fill="#a855f7" />
      </svg>
    ),
  },
  {
    label: "Coding & AI",
    textColor: "text-indigo-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <circle cx="12" cy="6" r="4" fill="#818cf8" />
        <circle cx="6" cy="18" r="4" fill="#6366f1" />
        <circle cx="18" cy="18" r="4" fill="#a5b4fc" />
        <path d="M12 10 L6 14 M12 10 L18 14" stroke="#818cf8" strokeWidth="2" />
      </svg>
    ),
  },
  {
    label: "Data Analysis",
    textColor: "text-red-400",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path
          d="M2 20 L8 10 L14 16 L22 4"
          fill="none"
          stroke="#f87171"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="8" cy="10" r="2.5" fill="#fca5a5" />
        <circle cx="14" cy="16" r="2.5" fill="#ef4444" />
      </svg>
    ),
  },
  {
    label: "Science & Engineering",
    textColor: "text-yellow-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
        <circle cx="8" cy="12" r="5" fill="#eab308" />
        <circle cx="16" cy="8" r="4" fill="#facc15" />
        <circle cx="14" cy="16" r="4" fill="#ca8a04" />
      </svg>
    ),
  },
];

const categoryTabs = [
  {
    key: "Math",
    label: "Math",
    activeClass:
      "bg-linear-to-r from-white to-[#d6e4ff] text-[#0f1115] shadow-lg shadow-blue-500/20",
  },
  {
    key: "ComputerScience",
    label: "Computer Science",
    activeClass:
      "bg-linear-to-r from-white to-[#ebd6ff] text-[#0f1115] shadow-lg shadow-purple-500/20",
  },
  {
    key: "DataAnalysis",
    label: "Data Analysis",
    activeClass:
      "bg-linear-to-r from-white to-[#ffe0cf] text-[#0f1115] shadow-lg shadow-orange-500/20",
  },
  {
    key: "Science",
    label: "Science",
    activeClass:
      "bg-linear-to-r from-white to-[#fff0cc] text-[#0f1115] shadow-lg shadow-yellow-500/20",
  },
];

const footerLinksData = [
  {
    title: "Product",
    links: ["Courses", "Pricing", "Gift Brilliant", "Help"],
  },
  {
    title: "Company",
    links: ["About us", "Careers", "Educators"],
  },
];

const footerBehindScenesData = [
  ["AI at Brilliant", "AI Tools for Games", "Solving Equations"],
  ["Thinking in Code", "Visual Algebra", "Decomposition"],
];

const footerBottomLinks = ["Terms", "Privacy", "Cookies", "California"];

export function App() {
  const [activeCategory, setActiveCategory] = useState<
    "Math" | "ComputerScience" | "DataAnalysis" | "Science"
  >("ComputerScience");

  const renderCategoryVisualization = (category: any) => {
    const windowWrapper = (
      content: ComponentChildren,
      borderColor: string,
      isDark: boolean = false,
    ) => (
      <div
        className={`w-full max-w-sm ${isDark ? "bg-[#0d1117]" : "bg-white"} rounded-xl overflow-hidden shadow-2xl border ${borderColor} group transition-all duration-500 relative flex flex-col min-h-[220px]`}
      >
        <div
          className={`${isDark ? "bg-[#161b22] border-gray-800" : "bg-gray-50 border-gray-100"} px-4 py-2.5 flex gap-1.5 border-b`}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
        </div>
        <div className="flex-1 relative overflow-hidden flex items-center justify-center p-6">
          {content}
        </div>
      </div>
    );

    switch (category) {
      case "ComputerScience":
        return windowWrapper(
          <div className="font-mono text-xs leading-relaxed w-full">
            <p className="text-gray-500 mb-2">// algorithm.py</p>
            <div className="space-y-1">
              <p>
                <span className="text-purple-400">def</span>{" "}
                <span className="text-blue-400">binary_search</span>(arr,
                target):
              </p>
              <p className="pl-4 text-purple-400">
                left, right = <span className="text-orange-400">0</span>,
                len(arr) - <span className="text-orange-400">1</span>
              </p>
              <p className="pl-4 text-purple-400">
                while <span className="text-white">left &lt;= right:</span>
              </p>
              <p className="pl-8 text-gray-400"># Finding the middle</p>
              <p className="pl-8">
                mid = (left + right) //{" "}
                <span className="text-orange-400">2</span>
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-green-500 font-bold tracking-widest text-[10px] uppercase">
                  Running...
                </span>
                <span className="text-white animate-pulse">|</span>
              </div>
            </div>
          </div>,
          "border-gray-800 hover:border-blue-500/50",
          true,
        );
      case "Math":
        return windowWrapper(
          <div className="w-full h-full flex items-center justify-center">
            <div className="relative w-48 h-40 border-l border-b border-gray-700">
              {/* x and y axis labels */}
              <div className="absolute -bottom-5 right-0 text-[10px] text-gray-500 font-mono">
                x
              </div>
              <div className="absolute -left-4 top-0 text-[10px] text-gray-500 font-mono">
                y
              </div>

              {/* Coordinate Grid */}
              <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 opacity-10">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="border border-gray-600"></div>
                ))}
              </div>

              <svg
                className="absolute inset-0 w-full h-full overflow-visible"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="mathGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <path
                  d="M 5 95 Q 40 95 60 50 T 95 5"
                  fill="none"
                  stroke="url(#mathGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="animate-[draw-path_3s_ease-out_infinite]"
                  vectorEffect="non-scaling-stroke"
                />
                <circle
                  cx="60"
                  cy="50"
                  r="3"
                  fill="#3b82f6"
                  className="animate-pulse"
                />
              </svg>

              <div className="absolute top-0 right-0 bg-blue-500/10 text-blue-400 text-[10px] px-2 py-1 rounded-md font-bold shadow-sm border border-blue-500/20 transition-transform group-hover:scale-110">
                f(x) = sin(x) + x
              </div>
            </div>
          </div>,
          "border-gray-800 hover:border-blue-500/50",
          true,
        );
      case "DataAnalysis":
        return windowWrapper(
          <div className="w-full flex flex-col justify-end h-full pt-4">
            <div className="flex items-end h-32 gap-3 justify-center mb-2">
              {[
                { h: "h-[45%]", val: "22%", color: "bg-orange-500/20" },
                { h: "h-[65%]", val: "31%", color: "bg-orange-500/40" },
                {
                  h: "h-[90%]",
                  val: "47%",
                  color: "bg-orange-500",
                  primary: true,
                },
                { h: "h-[35%]", val: "15%", color: "bg-orange-500/20" },
              ].map((bar, i) => (
                <div
                  key={i}
                  className={`w-8 ${bar.h} ${bar.color} rounded-t-lg transition-all duration-700 group-hover:scale-y-105 relative`}
                >
                  <div
                    className={`absolute -top-6 w-full text-center text-[9px] font-bold font-mono ${bar.primary ? "text-orange-400" : "text-gray-500"}`}
                  >
                    {bar.val}
                  </div>
                  {bar.primary && (
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between px-2 text-[9px] text-gray-500 font-bold font-mono border-t border-gray-800 pt-3 uppercase tracking-tighter">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
            </div>
          </div>,
          "border-gray-800 hover:border-orange-500/50",
          true,
        );
      case "Science":
        return windowWrapper(
          <div className="relative w-full h-40 flex items-center justify-center">
            {/* Orbit / Atomic path */}
            <div className="absolute w-32 h-32 border border-yellow-200/50 rounded-full animate-[spin_8s_linear_infinite]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-500 rounded-full shadow-lg shadow-yellow-500/30"></div>
            </div>
            <div className="absolute w-20 h-20 border border-yellow-300/30 rounded-full animate-[spin_4s_linear_infinite_reverse]">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-yellow-400 rounded-full"></div>
            </div>

            {/* Nucleus / Center */}
            <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center shadow-inner relative overflow-hidden group-hover:scale-110 transition-transform">
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <Zap size={14} className="text-white" fill="currentColor" />
            </div>

            <div className="absolute bottom-2 right-2 flex items-center gap-1.5 bg-yellow-500/10 border border-yellow-500/20 px-2 py-1 rounded-md">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-ping"></div>
              <span className="text-[9px] font-bold text-yellow-500 uppercase tracking-widest">
                Observable
              </span>
            </div>
          </div>,
          "border-gray-800 hover:border-yellow-700/50",
          true,
        );
      default:
        return null;
    }
  };

  return (
    <main className="bg-white text-gray-900 overflow-x-hidden antialiased">
      <div className={"min-h-dvh flex flex-col"}>
        <header className="border-b border-gray-200 sticky top-0 bg-white/95 backdrop-blur-md z-50">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
            <div className="flex items-center cursor-pointer group">
              <span className="text-3xl font-bold tracking-tight text-gray-900 transition-colors">
                Brilliant
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-6 py-2.5 text-[15px] font-bold text-gray-700 hover:text-gray-900 transition-all border border-gray-300 rounded-full hover:bg-gray-50 hover:shadow-sm">
                Sign in
              </button>
            </div>
          </nav>
        </header>

        {/* BEGIN: Hero Section */}
        <section
          className=" pb-0 h-full relative flex-1 flex flex-col justify-between overflow-hidden"
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
                <button className="flex-1 py-[18px] bg-[#22c55e] hover:bg-[#1fb355] text-white text-[17px] font-bold rounded-full transition-all shadow-[0_4px_14px_0_rgba(34,197,94,0.39)] hover:shadow-[0_6px_20px_rgba(34,197,94,0.23)] hover:-translate-y-0.5 active:translate-y-0">
                  I'm a learner
                </button>
                <button className="flex-1 py-[18px] bg-white border-2 border-gray-200 text-black text-[17px] font-bold rounded-full transition-all hover:border-gray-300 hover:bg-gray-50 hover:-translate-y-0.5 active:translate-y-0 shadow-sm">
                  I'm a parent or teacher
                </button>
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
        {/* END: Hero Section */}
      </div>

      {/* BEGIN: Social Proof */}
      <section
        className="py-16 bg-gray-50 border-y border-gray-100"
        data-purpose="social-proof"
      >
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-3xl font-bold text-gray-800 mb-12 font-serif">
            Join a thriving open-source community
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 items-center gap-8 md:gap-12 opacity-80 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="flex flex-col items-center justify-center hover:scale-110 transition-transform cursor-default gap-2">
              <div className="w-8 h-8 flex items-center justify-center text-gray-900">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="24"
                  height="24"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-gray-500">
                GitHub Ready
              </span>
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-110 transition-transform cursor-default gap-2">
              <span className="text-xl font-bold text-gray-900">500+</span>
              <span className="text-sm font-bold uppercase tracking-widest text-gray-500">
                Contributors
              </span>
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-110 transition-transform cursor-default">
              <div className="flex text-yellow-500 text-xs mb-1">★★★★★</div>
              <span className="text-[9px] uppercase tracking-widest font-bold text-center">
                Community Approved
              </span>
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-110 transition-transform cursor-default gap-2">
              <span className="text-xl font-bold text-gray-900">100% Free</span>
              <span className="text-sm font-bold uppercase tracking-widest text-gray-500">
                Open Source
              </span>
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-110 transition-transform cursor-default gap-2">
              <span className="text-xl font-bold text-gray-900">Global</span>
              <span className="text-sm font-bold uppercase tracking-widest text-gray-500">
                Collaboration
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* END: Social Proof */}

      {/* BEGIN: Concepts that click */}
      <section
        className="py-24 bg-[linear-gradient(90deg,rgb(248,248,248)0%,rgb(234,247,246)100%)]"
        data-purpose="feature-concepts"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative group cursor-pointer h-[350px] flex items-center justify-center">
              {/* Outer Flat "Window" */}
              <div className="relative w-full max-w-[440px] bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-500 group-hover:border-blue-200">
                <div className="h-8 bg-gray-50 border-b border-gray-100 flex items-center px-4 gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-200"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-200"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-200"></div>
                </div>
                <div className="p-8">
                  <div className="flex gap-6 items-center">
                    {/* Interactive Puzzle/Block Graphic */}
                    <div className="relative w-48 h-48 bg-blue-50/50 rounded-2xl flex items-center justify-center overflow-hidden">
                      {/* Main central block */}
                      <div className="w-20 h-20 bg-blue-500 rounded-xl shadow-blue-500/20 shadow-lg z-10 transition-all duration-500 group-hover:scale-105"></div>
                      {/* Decorative orbiting fragments that 'click' on hover */}
                      <div className="absolute top-4 left-4 w-10 h-10 bg-blue-300 rounded-lg opacity-40 transition-all duration-700 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:opacity-100 group-hover:bg-blue-400"></div>
                      <div className="absolute bottom-4 right-4 w-12 h-12 bg-blue-200 rounded-lg opacity-40 transition-all duration-700 group-hover:-translate-x-8 group-hover:-translate-y-8 group-hover:opacity-80 group-hover:bg-blue-300"></div>
                      <div className="absolute top-1/2 -right-2 w-8 h-8 bg-blue-100 rounded-lg opacity-20 transition-all duration-1000 group-hover:-translate-x-12 group-hover:opacity-60"></div>
                    </div>
                    {/* Flatter UI representation */}
                    <div className="flex-1 space-y-4">
                      <div className="h-2 w-full bg-blue-100/50 rounded-full overflow-hidden">
                        <div className="h-full w-0 bg-blue-400 rounded-full transition-all duration-1500 group-hover:w-full"></div>
                      </div>
                      <div className="h-2 w-3/4 bg-gray-100 rounded-full"></div>
                      <div className="h-2 w-5/6 bg-gray-100 rounded-full"></div>
                      <div className="pt-4 flex gap-2">
                        <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-1000">
                          <CheckCircle2 size={16} />
                        </div>
                        <div className="flex-1 h-8 bg-gray-50 rounded-lg border border-dashed border-gray-200"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Background accent ring (Flatter) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-dashed border-blue-100 rounded-full -z-10 group-hover:scale-110 transition-transform duration-1000 opacity-50"></div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
                Concepts that click
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Step-by-step interactive lessons make even complex ideas feel
                intuitive. Custom, intelligent feedback catches mistakes as you
                learn.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* END: Concepts that click */}

      {/* BEGIN: Personalized learning */}
      <section
        className="py-24 bg-linear-to-b from-[#fdfbff] to-[#faf8ff]"
        data-purpose="feature-personalized"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
                Personalized learning
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Brilliant tracks the concepts you've mastered, designs practice
                sets based on your progress, and adapts to your pace.
              </p>
            </div>
            <div className="relative group cursor-pointer flex items-center justify-center h-[350px]">
              {/* Outer Flat "Window" */}
              <div className="relative w-full max-w-[440px] bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-500 group-hover:border-purple-200">
                <div className="h-8 bg-gray-50 border-b border-gray-100 flex items-center px-4 gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-200"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-200"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-200"></div>
                </div>
                <div className="p-8 relative min-h-[220px] flex items-center justify-center overflow-hidden">
                  {/* Grid System Representation */}
                  <div className="grid grid-cols-6 gap-3 opacity-10 grayscale transition-all duration-700 group-hover:opacity-20 group-hover:grayscale-0">
                    {Array.from({ length: 18 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 border border-purple-100 rounded-lg bg-purple-50 flex items-center justify-center"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-200"></div>
                      </div>
                    ))}
                  </div>
                  {/* Floating Profile/Next Topic Card (Flatter) */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 shadow-lg rounded-xl border border-purple-50 w-64 transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl group-hover:border-purple-100 z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold shadow-inner relative overflow-hidden">
                        <CheckCircle2
                          size={20}
                          className="z-10 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </div>
                      <div>
                        <p className="text-[9px] font-bold text-purple-400 uppercase tracking-widest mb-0.5">
                          Personalized for you
                        </p>
                        <p className="text-base font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                          Linear Algebra
                        </p>
                        <div className="mt-1.5 h-1.5 w-24 bg-purple-50 rounded-full overflow-hidden">
                          <div className="h-full w-2/3 bg-purple-500 rounded-full transition-all duration-1000 group-hover:w-[90%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Floating Micro-bubbles */}
                  <div className="absolute top-4 right-10 w-2 h-2 bg-purple-200 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 group-hover:-translate-y-4"></div>
                  <div className="absolute bottom-4 left-10 w-1.5 h-1.5 bg-purple-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:translate-y-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: Personalized learning */}

      {/* BEGIN: Guided lessons */}
      <section
        className="py-24 bg-linear-to-b from-[#f7f2fb] to-[#f4ebfa]"
        data-purpose="feature-guided"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group cursor-pointer h-[350px] flex items-center justify-center">
              {/* Outer Flat "Window" */}
              <div className="relative w-full max-w-[440px] bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-500 group-hover:border-purple-200">
                <div className="h-8 bg-gray-50 border-b border-gray-100 flex items-center px-4 gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-200"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-200"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-200"></div>
                </div>
                <div className="p-12 relative flex items-center justify-center min-h-[220px]">
                  <div className="relative w-40 h-40 flex items-center justify-center">
                    {/* Flatter stack of 'lessons' */}
                    <div className="absolute w-36 h-36 bg-purple-50 rounded-2xl border border-purple-100 -rotate-3 transition-all duration-500 group-hover:-rotate-6 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
                    <div className="absolute w-36 h-36 bg-purple-100 rounded-2xl border border-purple-200 rotate-3 transition-all duration-500 group-hover:rotate-6 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                    <div className="relative z-10 w-36 h-36 bg-white rounded-2xl border border-purple-300 shadow-sm flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-105">
                      <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center relative shadow-inner overflow-hidden">
                        <CheckCircle2
                          size={32}
                          className="text-white z-10 transition-transform duration-700 group-hover:scale-110"
                          strokeWidth={2.5}
                        />
                        <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
                Guided lessons
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Stay on track, see your progress, and build your problem solving
                skills one concept at a time.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* END: Guided lessons */}

      {/* BEGIN: Reach big learning goals */}
      <section
        className="py-24 bg-linear-to-b from-[#1b1c1b] via-[#242926] to-[#2f352e] text-white"
        data-purpose="course-categories"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 font-serif">
            Reach big learning goals
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categoryTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveCategory(tab.key as any)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === tab.key
                    ? tab.activeClass
                    : "bg-white/10 hover:bg-white/20 hover:text-white text-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 bg-[#2d2d2d] rounded-4xl overflow-hidden text-left shadow-2xl border border-white/5 transition-all duration-300">
            <div className="p-12 md:p-16">
              <h3 className="text-2xl font-bold mb-8 font-serif transition-colors">
                {activeCategory === "ComputerScience"
                  ? "Computer Science"
                  : activeCategory === "DataAnalysis"
                    ? "Data Analysis"
                    : activeCategory}{" "}
                Courses
              </h3>
              <ul className="space-y-4 text-gray-400 font-medium">
                {courses[activeCategory].map((course, index) => {
                  const IconComponent = course.icon;
                  return (
                    <li
                      key={index}
                      className="hover:text-white cursor-pointer transition-all flex items-center gap-3 group hover:translate-x-1"
                    >
                      <div className="w-6 h-6 rounded-md bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                        <IconComponent size={14} />
                      </div>
                      {course.name}
                    </li>
                  );
                })}
                <li className="text-sm text-gray-500 mt-8 cursor-pointer hover:text-gray-300 flex items-center gap-1 group w-max transition-colors">
                  4 additional courses{" "}
                  <ChevronRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </li>
              </ul>
            </div>
            <div className="bg-white/5 p-12 flex items-center justify-center relative border-l border-white/5">
              {renderCategoryVisualization(activeCategory)}
              <div className="absolute bottom-8 right-8 text-white/5 font-bold text-4xl italic uppercase tracking-wider select-none pointer-events-none transition-all duration-500">
                {activeCategory === "ComputerScience"
                  ? "Python"
                  : activeCategory === "DataAnalysis"
                    ? "DATA"
                    : activeCategory === "Math"
                      ? "CALCULUS"
                      : "PHYSICS"}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: Reach big learning goals */}

      {/* BEGIN: Stay motivated */}
      <section
        className="py-24 bg-linear-to-b from-[#f2fcf2] to-[#e9f8ed]"
        data-purpose="motivation-section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
                Stay motivated
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Finish every day smarter with engaging lessons, competitive
                features, and daily encouragement.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center relative h-[350px] group cursor-pointer">
              {/* Outer Flat "Window" */}
              <div className="relative w-full max-w-[440px] bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-500 group-hover:border-yellow-300">
                <div className="h-8 bg-gray-50 border-b border-gray-100 flex items-center px-4 gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-200"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-200"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-200"></div>
                </div>
                <div className="p-8 pb-4 relative flex flex-col items-center justify-center min-h-[220px]">
                  {/* Flatter Streak Bar Chart */}
                  <div className="flex gap-6 items-end h-32 mb-6">
                    {[
                      {
                        label: "M",
                        height: "h-14",
                        color: "bg-yellow-50",
                        active: false,
                      },
                      {
                        label: "T",
                        height: "h-20",
                        color: "bg-yellow-100",
                        active: false,
                      },
                      {
                        label: "W",
                        height: "h-28",
                        color: "bg-yellow-500",
                        active: true,
                      },
                    ].map((bar, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center group/bar"
                      >
                        <div
                          className={`w-10 ${bar.height} ${bar.active ? bar.color + " shadow-lg shadow-yellow-500/20" : bar.color + " border border-yellow-100"} rounded-xl transition-all duration-500 group-hover/bar:-translate-y-1 flex items-center justify-center overflow-hidden`}
                        >
                          <Zap
                            size={bar.active ? 18 : 14}
                            className={`${bar.active ? "text-white" : "text-yellow-400 opacity-40"} transition-all duration-500`}
                            fill="currentColor"
                          />
                        </div>
                        <span
                          className={`mt-2 font-bold ${bar.active ? "text-gray-900" : "text-gray-400"} text-[10px] tracking-widest uppercase`}
                        >
                          {bar.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  {/* Flatter Mascot Bubble */}
                  <div className="absolute top-6 right-6 w-20 h-14 bg-green-500 rounded-xl flex items-center justify-center shadow-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-3 overflow-hidden border border-green-400">
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="w-8 h-6 bg-white rounded-md flex items-center justify-center gap-1 shadow-sm">
                      <div className="w-1 h-1 bg-black rounded-full animate-bounce"></div>
                      <div className="w-1 h-1 bg-black rounded-full animate-bounce delay-100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: Stay motivated */}

      {/* BEGIN: More effective, more fun */}
      <section
        className="py-24 bg-linear-to-b from-[#f0f9f8] to-[#e6f4f4]"
        data-purpose="feature-fun"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1 group cursor-pointer h-[350px] flex items-center justify-center">
              {/* Outer Flat "Window" */}
              <div className="relative w-full max-w-[440px] bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-500 group-hover:border-green-200">
                <div className="h-8 bg-gray-50 border-b border-gray-100 flex items-center px-4 gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-200"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-200"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-200"></div>
                </div>
                <div className="p-8 relative min-h-[220px] flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex-1 max-w-[140px] h-2 bg-gray-50 rounded-full overflow-hidden border border-gray-100">
                      <div className="h-full w-2/3 bg-green-500 group-hover:w-[90%] transition-all duration-1000 ease-out"></div>
                    </div>
                    <div className="flex items-center gap-1.5 bg-yellow-50 px-3 py-1 rounded-full border border-yellow-100">
                      <Zap
                        size={12}
                        className="text-yellow-500"
                        fill="currentColor"
                      />
                      <span className="text-yellow-600 font-bold text-[10px]">
                        Level 4
                      </span>
                    </div>
                  </div>

                  <div className="aspect-video bg-gray-50/50 rounded-xl grid grid-cols-4 p-3 gap-3 mb-6 transition-colors group-hover:bg-green-50/30">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={i}
                        className={`rounded-lg transition-all duration-500 hover:scale-105 ${i === 2 ? "bg-purple-500 shadow-md shadow-purple-500/20" : "bg-white border border-gray-100"}`}
                      ></div>
                    ))}
                  </div>

                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-100 flex items-center gap-3 transition-all duration-500 group-hover:bg-white group-hover:border-purple-100">
                    <div className="w-7 h-7 rounded-md bg-gray-900 flex items-center justify-center text-green-400">
                      <TerminalSquare size={14} />
                    </div>
                    <div className="font-mono text-[10px] text-gray-600">
                      while <span className="text-purple-600">learning:</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight font-serif">
                More effective,
                <br />
                more fun
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Brilliant's interactive approach helps you master concepts in
                less time, with more purpose and joy.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* END: More effective, more fun */}

      {/* BEGIN: Contributor Section */}
      <section
        className="py-32 border-t border-gray-100 bg-white"
        data-purpose="contributor-logos"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 font-serif">
            Designed by contributors
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mb-16">
            {[
              {
                name: "Linux",
                color: "hover:text-orange-500 hover:border-orange-200",
                icon: <CheckCircle2 size={16} />,
              },
              {
                name: "Apache",
                color: "hover:text-red-600 hover:border-red-200",
                icon: <CheckCircle2 size={16} />,
              },
              {
                name: "Mozilla",
                color: "hover:text-blue-500 hover:border-blue-200",
                icon: <CheckCircle2 size={16} />,
              },
              {
                name: "Python",
                color: "hover:text-yellow-600 hover:border-yellow-200",
                icon: <CheckCircle2 size={16} />,
              },
              {
                name: "Node.js",
                color: "hover:text-green-600 hover:border-green-200",
                icon: <CheckCircle2 size={16} />,
              },
              {
                name: "Rust",
                color: "hover:text-red-500 hover:border-red-200",
                icon: <CheckCircle2 size={16} />,
              },
            ].map((foundation) => (
              <div
                key={foundation.name}
                className={`flex items-center gap-2.5 px-6 py-3 bg-gray-50/50 border border-gray-100 rounded-full transition-all duration-300 cursor-default grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:bg-white hover:shadow-md ${foundation.color}`}
              >
                <span className="text-current">{foundation.icon}</span>
                <span className="font-bold text-lg tracking-tight">
                  {foundation.name}
                </span>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-gray-500 mb-10 leading-relaxed">
              Our interactive curriculums are built and maintained by a global
              network of over{" "}
              <span className="text-gray-900 font-bold">
                500 expert contributors
              </span>{" "}
              and open-source advocates.
            </p>
            <button className="px-10 py-3.5 bg-white border border-gray-200 text-gray-900 rounded-full font-bold hover:bg-gray-50 hover:border-gray-300 hover:scale-105 active:scale-95 transition-all shadow-sm">
              Join as a contributor
            </button>
          </div>
        </div>
      </section>
      {/* END: Contributor Section */}

      {/* BEGIN: Final CTA */}
      <section
        className="py-24 bg-linear-to-b from-[#1c1b1a] via-[#1a1b18] to-[#141513] text-white text-center relative overflow-hidden"
        data-purpose="final-cta"
      >
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-serif">
            Everyone is a math person
          </h2>
          <p className="text-xl text-gray-400 mb-10 font-serif">
            Join over 10 million people learning interactively.
          </p>
          <button className="px-10 py-4 bg-white text-black font-bold rounded-full mb-12 hover:bg-gray-200 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-white/10">
            Get started for free
          </button>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-40">
            <button className="bg-[#1f1f1f] px-6 py-2 rounded-xl flex items-center gap-3 hover:bg-[#2a2a2a] active:scale-95 transition-all border border-white/5 hover:border-white/10 group">
              <span className="text-gray-400 group-hover:text-white transition-colors">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="24"
                  width="24"
                >
                  <path d="M14.716 1.157c-1.341 0-3.084.81-4.004 1.905-.836.966-1.503 2.502-1.259 3.992 1.487.054 3.098-.829 4.027-1.921.848-.99 1.439-2.525 1.236-3.976zm3.328 10.975c-.021-2.521 2.067-3.737 2.164-3.805-1.168-1.705-2.992-1.932-3.649-1.956-1.554-.153-3.033.916-3.83.916-.799 0-2.012-.892-3.298-.868-1.683.023-3.238.973-4.103 2.478-1.748 3.027-.446 7.513 1.259 9.972.836 1.21 1.83 2.571 3.149 2.524 1.258-.046 1.769-.81 3.297-.81 1.503 0 1.95.81 3.298.786 1.343-.021 2.185-1.237 2.993-2.43.945-1.378 1.334-2.732 1.354-2.8-.024-.01-2.613-1.002-2.634-4.002z" />
                </svg>
              </span>
              <div className="text-left">
                <div className="text-[10px] leading-none text-gray-500 uppercase font-bold group-hover:text-gray-400 transition-colors">
                  Download on the
                </div>
                <div className="text-sm font-bold">App Store</div>
              </div>
            </button>
            <button className="bg-[#1f1f1f] px-6 py-2 rounded-xl flex items-center gap-3 hover:bg-[#2a2a2a] active:scale-95 transition-all border border-white/5 hover:border-white/10 group">
              <span className="text-gray-400 group-hover:text-white transition-colors">
                <Play size={20} fill="currentColor" />
              </span>
              <div className="text-left">
                <div className="text-[10px] leading-none text-gray-500 uppercase font-bold group-hover:text-gray-400 transition-colors">
                  GET IT ON
                </div>
                <div className="text-sm font-bold">Google Play</div>
              </div>
            </button>
          </div>
        </div>

        {/* Decorative Bottom Bars */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center items-end gap-1.5 z-0 group">
          <div className="w-[38px] md:w-[48px] h-28 bg-[#ff8f00] rounded-t-full transition-transform duration-500 group-hover:-translate-y-4"></div>
          <div className="w-[38px] md:w-[48px] h-36 bg-[#bc61ff] rounded-t-full transition-transform duration-500 delay-75 group-hover:-translate-y-8"></div>
          <div className="w-[38px] md:w-[48px] h-44 bg-[#0bd353] rounded-t-full transition-transform duration-500 delay-100 group-hover:-translate-y-12"></div>
          <div className="w-[38px] md:w-[48px] h-40 bg-[#348bf6] rounded-t-full transition-transform duration-500 delay-150 group-hover:-translate-y-8"></div>
          <div className="w-[38px] md:w-[48px] h-32 bg-[#ff6868] rounded-t-full transition-transform duration-500 delay-200 group-hover:-translate-y-4"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent pointer-events-none z-10 opacity-60"></div>
      </section>
      {/* END: Final CTA */}

      {/* BEGIN: Footer */}
      <footer
        className="bg-black text-gray-500 py-24 border-t border-white/5"
        data-purpose="site-footer"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-20">
            <div className="col-span-2 lg:col-span-1">
              <span className="text-2xl font-bold text-white block mb-8 hover:text-blue-400 transition-colors cursor-pointer w-max">
                Brilliant
              </span>
            </div>
            {footerLinksData.map((section, idx) => (
              <div key={idx}>
                <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-wider">
                  {section.title}
                </h4>
                <ul className="space-y-4 text-sm font-medium">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        className="hover:text-white transition-colors"
                        href="#"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="col-span-2 lg:col-span-2">
              <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-wider">
                Behind the scenes
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm font-medium">
                {footerBehindScenesData.map((col, colIdx) => (
                  <ul key={colIdx} className="space-y-4">
                    {col.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <a
                          className="hover:text-white transition-colors"
                          href="#"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/10 gap-8">
            <div className="flex gap-6 text-gray-500">
              <a
                className="hover:text-white hover:-translate-y-1 transition-all"
                href="#"
              >
                <Facebook size={20} />
              </a>
              <a
                className="hover:text-white hover:-translate-y-1 transition-all"
                href="#"
              >
                <Instagram size={20} />
              </a>
              <a
                className="hover:text-white hover:-translate-y-1 transition-all"
                href="#"
              >
                <Twitter size={20} />
              </a>
              <a
                className="hover:text-white hover:-translate-y-1 transition-all"
                href="#"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-[10px] uppercase font-bold tracking-[0.2em] text-gray-600">
              {footerBottomLinks.map((link, idx) => (
                <a
                  key={idx}
                  className="hover:text-white transition-colors"
                  href="#"
                >
                  {link}
                </a>
              ))}
              <span className="text-gray-700">
                © 2024 Brilliant Worldwide, Inc.
              </span>
            </div>
          </div>
        </div>
      </footer>
      {/* END: Footer */}
    </main>
  );
}
