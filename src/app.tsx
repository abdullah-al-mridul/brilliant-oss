export function App() {
  return (
    <div className="bg-white text-gray-900 overflow-x-hidden antialiased">
      {/* BEGIN: Top Banner */}
      <div
        className="bg-black text-white py-2 text-center text-sm font-medium"
        data-purpose="announcement-banner"
      >
        <p>Pi Day Sale! Save 20% on Premium today only.</p>
      </div>
      {/* END: Top Banner */}

      {/* BEGIN: Header */}
      <header className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-md z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold tracking-tight text-gray-900">
              Brilliant
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-gray-900 border border-gray-200 rounded-md">
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
              <div className="absolute top-0 right-1/4 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-[10px] font-bold text-purple-600 rotate-12">
                25%
              </div>
              <div className="absolute bottom-10 left-1/4 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-500 float-anim border border-blue-200 shadow-sm bg-white">
                <span className="text-sm font-bold">✓</span>
              </div>
            </div>
          </div>
          <h2 className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
            Interactive problem solving that's effective and fun. Excel in math
            and coding.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-[#22c55e] hover:bg-green-600 text-white font-bold rounded-full transition-all transform hover:scale-105">
              I'm a learner
            </button>
            <button className="px-10 py-4 bg-white border-2 border-gray-100 hover:border-gray-200 text-gray-800 font-bold rounded-full transition-all shadow-sm">
              I'm a parent or teacher
            </button>
          </div>
          {/* Subject Nav */}
          <div className="mt-20 flex flex-wrap justify-center gap-8 text-sm font-semibold text-gray-500">
            <div className="flex items-center gap-2 hover:text-blue-500 cursor-pointer">
              <span className="w-4 h-4 bg-blue-200 rounded-sm"></span> Math
            </div>
            <div className="flex items-center gap-2 hover:text-purple-500 cursor-pointer">
              <span className="w-4 h-4 bg-purple-200 rounded-sm"></span>{" "}
              Computer Science
            </div>
            <div className="flex items-center gap-2 hover:text-pink-500 cursor-pointer">
              <span className="w-4 h-4 bg-pink-200 rounded-sm"></span> Coding
              &amp; AI
            </div>
            <div className="flex items-center gap-2 hover:text-orange-500 cursor-pointer">
              <span className="w-4 h-4 bg-orange-200 rounded-sm"></span> Data
              Analysis
            </div>
            <div className="flex items-center gap-2 hover:text-yellow-500 cursor-pointer">
              <span className="w-4 h-4 bg-yellow-200 rounded-sm"></span> Science
              &amp; Engineering
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
          <div className="grid grid-cols-2 md:grid-cols-5 items-center gap-8 md:gap-12 opacity-40 grayscale">
            <div className="flex justify-center">
              <span className="text-xl font-serif font-bold italic whitespace-nowrap">
                The New York Times
              </span>
            </div>
            <div className="flex justify-center">
              <span className="text-xl font-serif font-bold italic whitespace-nowrap">
                The Atlantic
              </span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex text-yellow-500 text-xs mb-1">★★★★★</div>
              <span className="text-[9px] uppercase tracking-widest font-bold text-center">
                Over 100,000 5-star reviews
              </span>
            </div>
            <div className="flex justify-center">
              <span className="text-xl font-bold italic whitespace-nowrap">
                Editors' Choice
              </span>
            </div>
            <div className="flex justify-center">
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
            <div className="order-2 md:order-1 relative">
              <div className="relative bg-white rounded-xl shadow-2xl p-8 border border-gray-100 float-anim">
                <div className="flex flex-col gap-6">
                  <div className="h-4 w-32 bg-gray-100 rounded"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-square bg-blue-50 rounded-xl flex items-center justify-center">
                      <div className="w-12 h-12 bg-blue-500 rounded-lg"></div>
                    </div>
                    <div className="aspect-square bg-blue-50 rounded-xl grid grid-cols-2 p-3 gap-2">
                      <div className="bg-blue-200 rounded"></div>
                      <div className="bg-blue-400 rounded"></div>
                      <div className="bg-blue-300 rounded"></div>
                      <div className="bg-blue-100 rounded"></div>
                    </div>
                  </div>
                  <div className="h-3 w-full bg-gray-50 rounded"></div>
                </div>
              </div>
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-blue-100/50 rounded-full -z-10"></div>
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
            <div className="relative">
              <div className="grid grid-cols-4 gap-6 p-8 opacity-30">
                <div className="w-12 h-12 bg-purple-500 rounded-full"></div>
                <div className="w-12 h-12 bg-purple-200 rounded-full"></div>
                <div className="w-12 h-12 bg-purple-300 rounded-full"></div>
                <div className="w-12 h-12 bg-purple-100 rounded-full"></div>
                <div className="w-12 h-12 bg-purple-100 rounded-full"></div>
                <div className="w-12 h-12 bg-purple-400 rounded-full"></div>
                <div className="w-12 h-12 bg-purple-500 rounded-full"></div>
                <div className="w-12 h-12 bg-purple-200 rounded-full"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 shadow-2xl rounded-2xl border border-purple-50 w-64">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-purple-400 uppercase tracking-widest">
                      Next Topic
                    </p>
                    <p className="text-lg font-bold">Linear Algebra</p>
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
            <div className="relative flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-purple-200 rounded-full blur-3xl opacity-20"></div>
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <div className="w-48 h-48 bg-white rounded-3xl rotate-12 shadow-xl flex items-center justify-center overflow-hidden">
                    <div className="w-32 h-32 bg-purple-600 rounded-2xl flex items-center justify-center shadow-inner -rotate-12">
                      <span className="text-white text-5xl">✓</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-100 rounded-full opacity-50"></div>
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
            <button className="px-6 py-2 rounded-full bg-gray-800 text-sm font-semibold hover:bg-gray-700 transition-colors">
              Math
            </button>
            <button className="px-6 py-2 rounded-full bg-purple-500 text-sm font-semibold">
              Computer Science
            </button>
            <button className="px-6 py-2 rounded-full bg-gray-800 text-sm font-semibold hover:bg-gray-700 transition-colors">
              Data Analysis
            </button>
            <button className="px-6 py-2 rounded-full bg-gray-800 text-sm font-semibold hover:bg-gray-700 transition-colors">
              Science
            </button>
          </div>
          <div className="grid md:grid-cols-2 bg-[#2d2d2d] rounded-[2rem] overflow-hidden text-left shadow-2xl">
            <div className="p-12 md:p-16">
              <h3 className="text-2xl font-bold mb-8 font-serif">
                Computer Science Courses
              </h3>
              <ul className="space-y-4 text-gray-400 font-medium">
                <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-purple-500 rounded-full"></span>{" "}
                  Thinking in Code
                </li>
                <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-purple-500 rounded-full"></span>{" "}
                  Programming with Variables
                </li>
                <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-purple-500 rounded-full"></span>{" "}
                  Thinking in Python
                </li>
                <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-purple-500 rounded-full"></span>{" "}
                  Programming with Functions
                </li>
                <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-purple-500 rounded-full"></span>{" "}
                  Algorithmic Thinking
                </li>
                <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-purple-500 rounded-full"></span>{" "}
                  Computer Science Fundamentals
                </li>
                <li className="text-sm text-gray-500 mt-6 underline cursor-pointer hover:text-gray-300">
                  4 additional courses
                </li>
              </ul>
            </div>
            <div className="bg-white/5 p-12 flex items-center justify-center relative border-l border-white/5">
              <div className="w-full max-w-sm bg-[#0d1117] rounded-xl overflow-hidden shadow-2xl border border-gray-800">
                <div className="bg-[#161b22] px-4 py-2 flex gap-2 border-b border-gray-800">
                  <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                </div>
                <div className="p-6 font-mono text-xs leading-relaxed">
                  <p className="text-gray-500 mb-2"># Python 3</p>
                  <p className="text-purple-400">
                    while <span className="text-white">active:</span>
                  </p>
                  <p className="pl-4 text-blue-400">solve_problem()</p>
                  <p className="pl-4 text-green-500/80">
                    # Learning happens here
                  </p>
                  <p className="text-purple-400">
                    if <span className="text-white">done:</span>
                  </p>
                  <p className="pl-4 text-blue-400">celebrate()</p>
                  <div className="mt-4 flex gap-2">
                    <span className="text-white">_</span>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-8 right-8 text-white/10 font-bold text-4xl italic">
                Python
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
                <div className="flex flex-col items-center">
                  <div className="w-16 h-24 bg-yellow-100 rounded-t-full flex items-center justify-center border-b-4 border-yellow-200">
                    <span className="text-2xl grayscale opacity-30">⚡</span>
                  </div>
                  <span className="mt-4 font-bold text-gray-400">M</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-32 bg-yellow-200 rounded-t-full flex items-center justify-center border-b-4 border-yellow-300">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <span className="mt-4 font-bold text-gray-400">T</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-40 bg-yellow-400 rounded-t-full flex items-center justify-center border-b-4 border-yellow-500 shadow-lg">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <span className="mt-4 font-bold text-gray-900">W</span>
                </div>
              </div>
              <div className="absolute -top-16 right-0 w-24 h-24 bg-green-500 rounded-2xl rotate-12 flex items-center justify-center shadow-xl">
                <div className="w-12 h-10 bg-white rounded-md relative">
                  <div className="absolute top-2 left-2 w-2 h-2 bg-black rounded-full"></div>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-black rounded-full"></div>
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
            <div className="relative order-2 md:order-1">
              <div className="bg-white border border-gray-100 rounded-3xl shadow-2xl p-6 max-w-md mx-auto relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="h-2 w-1/2 bg-green-100 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-green-500"></div>
                  </div>
                  <span className="text-yellow-500 font-bold">⚡ 4</span>
                </div>
                <div className="aspect-square bg-gray-50 rounded-xl grid grid-cols-4 p-4 gap-4 mb-6">
                  <div className="bg-blue-100 rounded-lg"></div>
                  <div className="bg-blue-100 rounded-lg"></div>
                  <div className="bg-blue-100 rounded-lg"></div>
                  <div className="bg-purple-500 rounded-lg"></div>
                  <div className="bg-blue-100 rounded-lg"></div>
                  <div className="bg-blue-100 rounded-lg"></div>
                  <div className="bg-blue-100 rounded-lg"></div>
                  <div className="bg-blue-100 rounded-lg"></div>
                  <div className="bg-blue-100 rounded-lg"></div>
                  <div className="bg-blue-100 rounded-lg"></div>
                  <div className="bg-blue-100 rounded-lg"></div>
                  <div className="bg-blue-100 rounded-lg"></div>
                  <div className="bg-blue-100 rounded-lg"></div>
                  <div className="bg-blue-100 rounded-lg"></div>
                  <div className="bg-blue-100 rounded-lg"></div>
                  <div className="bg-blue-100 rounded-lg"></div>
                </div>
                <div className="bg-gray-900 rounded-lg p-3 text-xs font-mono text-green-400">
                  while <span className="text-white">gems_remain:</span>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-50 rounded-full -z-10"></div>
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
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-40 grayscale mb-16">
            <span className="font-bold text-xl tracking-tight">Stanford</span>
            <span className="font-bold text-xl tracking-tight">MIT</span>
            <span className="font-bold text-xl tracking-tight">Google</span>
            <span className="font-bold text-xl tracking-tight">Caltech</span>
            <span className="font-bold text-xl tracking-tight">HARVARD</span>
            <span className="font-bold text-xl tracking-tight">Microsoft</span>
          </div>
          <p className="text-gray-500 mb-10 max-w-2xl mx-auto font-medium">
            All of our courses are crafted by award-winning teachers and
            professionals from top institutions.
          </p>
          <button className="px-8 py-3 border border-gray-300 rounded-xl font-bold text-gray-800 hover:bg-gray-50 transition-colors">
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
          <button className="px-10 py-4 bg-white text-black font-bold rounded-full mb-12 hover:bg-gray-200 transition-colors shadow-lg shadow-white/10">
            Get started for free
          </button>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
            <button className="bg-[#1f1f1f] px-6 py-2 rounded-xl flex items-center gap-3 hover:bg-[#2a2a2a] transition-colors border border-white/5">
              <span className="text-2xl"></span>
              <div className="text-left">
                <div className="text-[10px] leading-none text-gray-500 uppercase font-bold">
                  Download on the
                </div>
                <div className="text-sm font-bold">App Store</div>
              </div>
            </button>
            <button className="bg-[#1f1f1f] px-6 py-2 rounded-xl flex items-center gap-3 hover:bg-[#2a2a2a] transition-colors border border-white/5">
              <span className="text-2xl">▶</span>
              <div className="text-left">
                <div className="text-[10px] leading-none text-gray-500 uppercase font-bold">
                  GET IT ON
                </div>
                <div className="text-sm font-bold">Google Play</div>
              </div>
            </button>
          </div>
          <div className="flex justify-center items-end gap-1 px-4">
            <div className="w-10 md:w-14 h-28 bg-orange-400 rounded-t-full transition-transform hover:-translate-y-2"></div>
            <div className="w-10 md:w-14 h-36 bg-purple-500 rounded-t-full transition-transform hover:-translate-y-2"></div>
            <div className="w-10 md:w-14 h-44 bg-green-500 rounded-t-full transition-transform hover:-translate-y-2"></div>
            <div className="w-10 md:w-14 h-40 bg-blue-500 rounded-t-full transition-transform hover:-translate-y-2"></div>
            <div className="w-10 md:w-14 h-32 bg-red-400 rounded-t-full transition-transform hover:-translate-y-2"></div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
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
              <span className="text-2xl font-bold text-white block mb-8">
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
            <div className="flex gap-8 text-lg">
              <a className="hover:text-white transition-colors" href="#">
                f
              </a>
              <a className="hover:text-white transition-colors" href="#">
                ig
              </a>
              <a className="hover:text-white transition-colors" href="#">
                x
              </a>
              <a className="hover:text-white transition-colors" href="#">
                in
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
