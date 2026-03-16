import { Zap } from "lucide-preact";

export function MotivationSection() {
  return (
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
  );
}
