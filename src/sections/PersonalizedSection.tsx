import { CheckCircle2 } from "lucide-preact";

export function PersonalizedSection() {
  return (
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
  );
}
