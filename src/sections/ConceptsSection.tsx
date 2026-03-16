import { CheckCircle2 } from "lucide-preact";

export function ConceptsSection() {
  return (
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
  );
}
