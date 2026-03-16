import { CheckCircle2 } from "lucide-preact";

export function GuidedSection() {
  return (
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
  );
}
