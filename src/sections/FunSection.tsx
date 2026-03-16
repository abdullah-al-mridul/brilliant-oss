import { Zap, TerminalSquare } from "lucide-preact";

export function FunSection() {
  return (
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
              BrilliantOSS's interactive approach helps you master concepts in
              less time, with more purpose and joy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
