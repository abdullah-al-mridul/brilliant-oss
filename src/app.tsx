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

export function App() {
  const [activeCategory, setActiveCategory] = useState<
    "Math" | "ComputerScience" | "DataAnalysis" | "Science"
  >("ComputerScience");

  const getCodeSnippet = (category) => {
    switch (category) {
      case "ComputerScience":
        return (
          <>
            <p className="text-gray-500 mb-2"># Python 3</p>
            <p className="text-purple-400">
              while <span className="text-white">active:</span>
            </p>
            <p className="pl-4 text-blue-400">solve_problem()</p>
            <p className="pl-4 text-green-500/80"># Learning happens here</p>
            <p className="text-purple-400">
              if <span className="text-white">done:</span>
            </p>
            <p className="pl-4 text-blue-400">celebrate()</p>
          </>
        );
      case "Math":
        return (
          <>
            <p className="text-gray-500 mb-2">% Calculus</p>
            <p className="text-blue-400">
              f(x) = <span className="text-white">x^2 + 2x + 1</span>
            </p>
            <p className="pl-4 text-green-500/80">% Derivative</p>
            <p className="text-purple-400">
              f'(x) = <span className="text-white">2x + 2</span>
            </p>
          </>
        );
      case "DataAnalysis":
        return (
          <>
            <p className="text-gray-500 mb-2">-- SQL</p>
            <p className="text-purple-400">
              SELECT{" "}
              <span className="text-blue-400">user_id, learning_streak</span>
            </p>
            <p className="text-purple-400">
              FROM <span className="text-white">users</span>
            </p>
            <p className="text-purple-400">
              WHERE <span className="text-white">active = true</span>
            </p>
            <p className="pl-4 text-green-500/80">-- Query optimization</p>
          </>
        );
      case "Science":
        return (
          <>
            <p className="text-gray-500 mb-2">/* Physics Simulation */</p>
            <p className="text-blue-400">
              const <span className="text-white">gravity = -9.81;</span>
            </p>
            <p className="text-purple-400">
              function <span className="text-blue-400">updatePosition</span>
              <span className="text-white">(dt) {"{"}</span>
            </p>
            <p className="pl-4 text-white">velocity += gravity * dt;</p>
            <p className="text-white">{"}"}</p>
          </>
        );
    }
  };

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden antialiased">
      {/* BEGIN: Top Banner */}
      <div
        className="bg-black text-white py-2 text-center text-sm font-medium hover:bg-gray-900 transition-colors cursor-pointer"
        data-purpose="announcement-banner"
      >
        <p>Pi Day Sale! Save 20% on Premium today only.</p>
      </div>
      {/* END: Top Banner */}

      {/* BEGIN: Header */}
      <header className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-md z-50 transition-shadow duration-300 hover:shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center cursor-pointer group">
            <span className="text-2xl font-bold tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors">
              Brilliant
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-gray-900 hover:bg-gray-50 border border-gray-200 rounded-md transition-all active:scale-95">
              Sign in
            </button>
          </div>
        </nav>
      </header>
      {/* END: Header */}

      {/* BEGIN: Hero Section */}
      <section className="pt-16 pb-24" data-purpose="hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Hero Illustration */}
          <div className="mb-12 flex justify-center relative">
            <div className="relative w-full max-w-2xl h-64 flex flex-col items-center justify-center">
              {/* Decorative elements */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-full h-px bg-gray-100 absolute top-1/4"></div>
                <div className="w-full h-px bg-gray-100 absolute top-2/4"></div>
                <div className="w-full h-px bg-gray-100 absolute top-3/4"></div>
                <div className="h-full w-px bg-gray-100 absolute left-1/4"></div>
                <div className="h-full w-px bg-gray-100 absolute left-2/4"></div>
                <div className="h-full w-px bg-gray-100 absolute left-3/4"></div>
              </div>
              <h1 className="text-6xl md:text-[5rem] font-bold text-gray-900 leading-tight relative z-10 font-serif">
                Learn
                <br />
                by doing
              </h1>
              {/* Floating pill-like decorations */}
              <div className="absolute top-0 right-1/4 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-[10px] font-bold text-purple-600 rotate-12 hover:rotate-0 transition-transform cursor-default shadow-sm">
                25%
              </div>
              <div className="absolute bottom-10 left-1/4 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-500 float-anim border border-blue-200 shadow-sm bg-white hover:scale-110 transition-transform">
                <CheckCircle2 size={16} strokeWidth={3} />
              </div>
            </div>
          </div>
          <h2 className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
            Interactive problem solving that's effective and fun. Excel in math
            and coding.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-[#22c55e] hover:bg-green-600 text-white font-bold rounded-full transition-all transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
              I'm a learner
            </button>
            <button className="px-10 py-4 bg-white border-2 border-gray-100 hover:border-gray-200 text-gray-800 font-bold rounded-full transition-all shadow-sm hover:shadow active:scale-95 hover:bg-gray-50">
              I'm a parent or teacher
            </button>
          </div>
          {/* Subject Nav */}
          <div className="mt-20 flex flex-wrap justify-center gap-8 text-sm font-semibold text-gray-500">
            <div className="flex items-center gap-2 hover:text-blue-500 cursor-pointer group">
              <span className="w-4 h-4 bg-blue-200 rounded-sm group-hover:bg-blue-300 transition-colors"></span>{" "}
              Math
            </div>
            <div className="flex items-center gap-2 hover:text-purple-500 cursor-pointer group">
              <span className="w-4 h-4 bg-purple-200 rounded-sm group-hover:bg-purple-300 transition-colors"></span>{" "}
              Computer Science
            </div>
            <div className="flex items-center gap-2 hover:text-pink-500 cursor-pointer group">
              <span className="w-4 h-4 bg-pink-200 rounded-sm group-hover:bg-pink-300 transition-colors"></span>{" "}
              Coding &amp; AI
            </div>
            <div className="flex items-center gap-2 hover:text-orange-500 cursor-pointer group">
              <span className="w-4 h-4 bg-orange-200 rounded-sm group-hover:bg-orange-300 transition-colors"></span>{" "}
              Data Analysis
            </div>
            <div className="flex items-center gap-2 hover:text-yellow-500 cursor-pointer group">
              <span className="w-4 h-4 bg-yellow-200 rounded-sm group-hover:bg-yellow-300 transition-colors"></span>{" "}
              Science &amp; Engineering
            </div>
          </div>
        </div>
      </section>
      {/* END: Hero Section */}

      {/* BEGIN: Social Proof */}
      <section
        className="py-16 bg-gray-50 border-y border-gray-100"
        data-purpose="social-proof"
      >
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-3xl font-bold text-gray-800 mb-12 font-serif">
            Join over 10 million learners worldwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 items-center gap-8 md:gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="flex justify-center hover:scale-110 transition-transform cursor-default">
              <span className="text-xl font-serif font-bold italic whitespace-nowrap">
                The New York Times
              </span>
            </div>
            <div className="flex justify-center hover:scale-110 transition-transform cursor-default">
              <span className="text-xl font-serif font-bold italic whitespace-nowrap">
                The Atlantic
              </span>
            </div>
            <div className="flex flex-col items-center justify-center hover:scale-110 transition-transform cursor-default">
              <div className="flex text-yellow-500 text-xs mb-1">★★★★★</div>
              <span className="text-[9px] uppercase tracking-widest font-bold text-center">
                Over 100,000 5-star reviews
              </span>
            </div>
            <div className="flex justify-center hover:scale-110 transition-transform cursor-default">
              <span className="text-xl font-bold italic whitespace-nowrap">
                Editors' Choice
              </span>
            </div>
            <div className="flex justify-center hover:scale-110 transition-transform cursor-default">
              <span className="text-xl font-serif font-bold italic whitespace-nowrap">
                Featured App
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* END: Social Proof */}

      {/* BEGIN: Concepts that click */}
      <section className="py-24 bg-[#f1f9fc]" data-purpose="feature-concepts">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative group cursor-pointer">
              <div className="relative bg-white rounded-xl shadow-2xl p-8 border border-gray-100 float-anim transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-3xl">
                <div className="flex flex-col gap-6">
                  <div className="h-4 w-32 bg-gray-100 rounded"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-square bg-blue-50 rounded-xl flex items-center justify-center overflow-hidden relative group-hover:bg-blue-100 transition-colors">
                      <div className="w-12 h-12 bg-blue-500 rounded-lg absolute group-hover:scale-110 transition-transform duration-300"></div>
                    </div>
                    <div className="aspect-square bg-blue-50 rounded-xl grid grid-cols-2 p-3 gap-2 group-hover:bg-blue-100 transition-colors">
                      <div className="bg-blue-200 rounded"></div>
                      <div className="bg-blue-400 rounded"></div>
                      <div className="bg-blue-300 rounded"></div>
                      <div className="bg-blue-100 rounded"></div>
                    </div>
                  </div>
                  <div className="h-3 w-full bg-gray-50 rounded"></div>
                </div>
              </div>
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-blue-100/50 rounded-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
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
      <section className="py-24 bg-white" data-purpose="feature-personalized">
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
            <div className="relative group cursor-pointer">
              <div className="grid grid-cols-4 gap-6 p-8 opacity-30 transition-opacity duration-300 group-hover:opacity-50">
                <div className="w-12 h-12 bg-purple-500 rounded-full"></div>
                <div className="w-12 h-12 bg-purple-200 rounded-full"></div>
                <div className="w-12 h-12 bg-purple-300 rounded-full"></div>
                <div className="w-12 h-12 bg-purple-100 rounded-full"></div>
                <div className="w-12 h-12 bg-purple-100 rounded-full"></div>
                <div className="w-12 h-12 bg-purple-400 rounded-full"></div>
                <div className="w-12 h-12 bg-purple-500 rounded-full"></div>
                <div className="w-12 h-12 bg-purple-200 rounded-full"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 shadow-2xl rounded-2xl border border-purple-50 w-64 transition-transform duration-300 group-hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold shadow-inner">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-purple-400 uppercase tracking-widest">
                      Next Topic
                    </p>
                    <p className="text-lg font-bold group-hover:text-purple-700 transition-colors">
                      Linear Algebra
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: Personalized learning */}

      {/* BEGIN: Guided lessons */}
      <section className="py-24 bg-[#f8f6ff]" data-purpose="feature-guided">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative flex justify-center group cursor-pointer">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-purple-200 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <div className="w-48 h-48 bg-white rounded-3xl rotate-12 shadow-xl flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:rotate-0">
                    <div className="w-32 h-32 bg-purple-600 rounded-2xl flex items-center justify-center shadow-inner -rotate-12 transition-transform duration-500 group-hover:rotate-0">
                      <span className="text-white">
                        <CheckCircle2 size={64} strokeWidth={2.5} />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-100 rounded-full opacity-50 group-hover:scale-125 transition-transform duration-500"></div>
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
        className="py-24 bg-[#1b1b1b] text-white"
        data-purpose="course-categories"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 font-serif">
            Reach big learning goals
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button
              onClick={() => setActiveCategory("Math")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${activeCategory === "Math" ? "bg-purple-500 shadow-lg shadow-purple-500/20" : "bg-gray-800 hover:bg-gray-700 hover:text-white text-gray-300"}`}
            >
              Math
            </button>
            <button
              onClick={() => setActiveCategory("ComputerScience")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${activeCategory === "ComputerScience" ? "bg-purple-500 shadow-lg shadow-purple-500/20" : "bg-gray-800 hover:bg-gray-700 hover:text-white text-gray-300"}`}
            >
              Computer Science
            </button>
            <button
              onClick={() => setActiveCategory("DataAnalysis")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${activeCategory === "DataAnalysis" ? "bg-purple-500 shadow-lg shadow-purple-500/20" : "bg-gray-800 hover:bg-gray-700 hover:text-white text-gray-300"}`}
            >
              Data Analysis
            </button>
            <button
              onClick={() => setActiveCategory("Science")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${activeCategory === "Science" ? "bg-purple-500 shadow-lg shadow-purple-500/20" : "bg-gray-800 hover:bg-gray-700 hover:text-white text-gray-300"}`}
            >
              Science
            </button>
          </div>
          <div className="grid md:grid-cols-2 bg-[#2d2d2d] rounded-[2rem] overflow-hidden text-left shadow-2xl border border-white/5 transition-all duration-300">
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
              <div className="w-full max-w-sm bg-[#0d1117] rounded-xl overflow-hidden shadow-2xl border border-gray-800 group hover:border-gray-700 transition-colors cursor-text">
                <div className="bg-[#161b22] px-4 py-2 flex gap-2 border-b border-gray-800">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 cursor-pointer"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 cursor-pointer"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 cursor-pointer"></div>
                </div>
                <div className="p-6 font-mono text-xs leading-relaxed min-h-[160px]">
                  {getCodeSnippet(activeCategory)}
                  <div className="mt-4 flex gap-2 animate-pulse">
                    <span className="text-white">_</span>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-8 right-8 text-white/5 font-bold text-4xl italic uppercase tracking-wider select-none pointer-events-none transition-all duration-500">
                {activeCategory === "ComputerScience"
                  ? "Python"
                  : activeCategory === "DataAnalysis"
                    ? "SQL"
                    : activeCategory === "Math"
                      ? "Math"
                      : "Physics"}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: Reach big learning goals */}

      {/* BEGIN: Stay motivated */}
      <section className="py-24 bg-[#f1fcf4]" data-purpose="motivation-section">
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
            <div className="flex flex-col items-center justify-center relative">
              <div className="flex gap-4 items-end">
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="w-16 h-24 bg-yellow-100 rounded-t-full flex items-center justify-center border-b-4 border-yellow-200 transition-all duration-300 group-hover:h-28 group-hover:bg-yellow-200">
                    <span className="text-yellow-400 group-hover:text-yellow-500 transition-colors opacity-40">
                      <Zap size={24} fill="currentColor" />
                    </span>
                  </div>
                  <span className="mt-4 font-bold text-gray-400">M</span>
                </div>
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="w-16 h-32 bg-yellow-200 rounded-t-full flex items-center justify-center border-b-4 border-yellow-300 transition-all duration-300 group-hover:h-36 group-hover:bg-yellow-300">
                    <span className="text-yellow-500 group-hover:text-yellow-600 transition-colors">
                      <Zap size={28} fill="currentColor" />
                    </span>
                  </div>
                  <span className="mt-4 font-bold text-gray-400">T</span>
                </div>
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="w-20 h-40 bg-yellow-400 rounded-t-full flex items-center justify-center border-b-4 border-yellow-500 shadow-lg transition-all duration-300 group-hover:h-44 group-hover:bg-yellow-500 group-hover:shadow-xl">
                    <span className="text-white drop-shadow-sm">
                      <Zap size={36} fill="currentColor" />
                    </span>
                  </div>
                  <span className="mt-4 font-bold text-gray-900">W</span>
                </div>
              </div>
              <div className="absolute -top-16 right-0 w-24 h-24 bg-green-500 rounded-2xl rotate-12 flex items-center justify-center shadow-xl hover:rotate-6 hover:-translate-y-2 transition-all cursor-pointer">
                <div className="w-12 h-10 bg-white rounded-md relative shadow-inner">
                  <div className="absolute top-2 left-2 w-2 h-2 bg-black rounded-full animate-bounce"></div>
                  <div
                    className="absolute top-2 right-2 w-2 h-2 bg-black rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: Stay motivated */}

      {/* BEGIN: More effective, more fun */}
      <section className="py-24 bg-white" data-purpose="feature-fun">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1 group cursor-pointer">
              <div className="bg-white border border-gray-100 rounded-3xl shadow-2xl p-6 max-w-md mx-auto relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                <div className="flex items-center justify-between mb-6">
                  <div className="h-2 w-1/2 bg-green-100 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-green-500 group-hover:w-[80%] transition-all duration-1000 ease-out"></div>
                  </div>
                  <span className="text-yellow-500 font-bold flex items-center gap-1">
                    <Zap size={16} fill="currentColor" /> 4
                  </span>
                </div>
                <div className="aspect-square bg-gray-50 rounded-xl grid grid-cols-4 p-4 gap-4 mb-6 transition-colors group-hover:bg-gray-100">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div
                      key={i}
                      className={`rounded-lg transition-all duration-300 hover:scale-110 ${i === 3 ? "bg-purple-500 shadow-md shadow-purple-500/20" : "bg-blue-100"}`}
                    ></div>
                  ))}
                </div>
                <div className="bg-gray-900 rounded-lg p-3 text-xs font-mono text-green-400 flex items-center gap-2 group-hover:ring-2 ring-gray-800 transition-all">
                  <TerminalSquare size={14} className="text-gray-500" />
                  <span>
                    while <span className="text-white">gems_remain:</span>
                  </span>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-50 rounded-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
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

      {/* BEGIN: Expert Section */}
      <section
        className="py-24 border-t border-gray-100"
        data-purpose="expert-logos"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 font-serif">
            Designed by experts
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <span className="font-bold text-xl tracking-tight cursor-default hover:text-blue-600 transition-colors">
              Stanford
            </span>
            <span className="font-bold text-xl tracking-tight cursor-default hover:text-red-700 transition-colors">
              MIT
            </span>
            <span className="font-bold text-xl tracking-tight cursor-default hover:text-blue-500 transition-colors">
              Google
            </span>
            <span className="font-bold text-xl tracking-tight cursor-default hover:text-orange-500 transition-colors">
              Caltech
            </span>
            <span className="font-bold text-xl tracking-tight cursor-default hover:text-red-800 transition-colors">
              HARVARD
            </span>
            <span className="font-bold text-xl tracking-tight cursor-default hover:text-blue-600 transition-colors">
              Microsoft
            </span>
          </div>
          <p className="text-gray-500 mb-10 max-w-2xl mx-auto font-medium">
            All of our courses are crafted by award-winning teachers and
            professionals from top institutions.
          </p>
          <button className="px-8 py-3 border border-gray-300 rounded-xl font-bold text-gray-800 hover:bg-gray-50 hover:border-gray-400 active:scale-95 transition-all">
            Learn more
          </button>
        </div>
      </section>
      {/* END: Expert Section */}

      {/* BEGIN: Final CTA */}
      <section
        className="py-24 bg-[#0a0a0a] text-white text-center relative overflow-hidden"
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
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
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
          <div className="flex justify-center items-end gap-1 px-4 group">
            <div className="w-10 md:w-14 h-28 bg-orange-400 rounded-t-full transition-transform duration-500 group-hover:-translate-y-4 shadow-xl"></div>
            <div className="w-10 md:w-14 h-36 bg-purple-500 rounded-t-full transition-transform duration-500 delay-75 group-hover:-translate-y-8 shadow-xl"></div>
            <div className="w-10 md:w-14 h-44 bg-green-500 rounded-t-full transition-transform duration-500 delay-100 group-hover:-translate-y-12 shadow-xl"></div>
            <div className="w-10 md:w-14 h-40 bg-blue-500 rounded-t-full transition-transform duration-500 delay-150 group-hover:-translate-y-8 shadow-xl"></div>
            <div className="w-10 md:w-14 h-32 bg-red-400 rounded-t-full transition-transform duration-500 delay-200 group-hover:-translate-y-4 shadow-xl"></div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
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
            <div>
              <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-wider">
                Product
              </h4>
              <ul className="space-y-4 text-sm font-medium">
                <li>
                  <a className="hover:text-white transition-colors" href="#">
                    Courses
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition-colors" href="#">
                    Pricing
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition-colors" href="#">
                    Gift Brilliant
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition-colors" href="#">
                    Help
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-4 text-sm font-medium">
                <li>
                  <a className="hover:text-white transition-colors" href="#">
                    About us
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition-colors" href="#">
                    Careers
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition-colors" href="#">
                    Educators
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 lg:col-span-2">
              <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-wider">
                Behind the scenes
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm font-medium">
                <ul className="space-y-4">
                  <li>
                    <a className="hover:text-white transition-colors" href="#">
                      AI at Brilliant
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-white transition-colors" href="#">
                      AI Tools for Games
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-white transition-colors" href="#">
                      Solving Equations
                    </a>
                  </li>
                </ul>
                <ul className="space-y-4">
                  <li>
                    <a className="hover:text-white transition-colors" href="#">
                      Thinking in Code
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-white transition-colors" href="#">
                      Visual Algebra
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-white transition-colors" href="#">
                      Decomposition
                    </a>
                  </li>
                </ul>
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
              <a className="hover:text-white transition-colors" href="#">
                Terms
              </a>
              <a className="hover:text-white transition-colors" href="#">
                Privacy
              </a>
              <a className="hover:text-white transition-colors" href="#">
                Cookies
              </a>
              <a className="hover:text-white transition-colors" href="#">
                California
              </a>
              <span className="text-gray-700">
                © 2024 Brilliant Worldwide, Inc.
              </span>
            </div>
          </div>
        </div>
      </footer>
      {/* END: Footer */}
    </div>
  );
}
