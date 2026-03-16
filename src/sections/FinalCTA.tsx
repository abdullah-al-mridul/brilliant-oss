import { Play } from "lucide-preact";

export function FinalCTA() {
  return (
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
        <button className="px-12 py-4 bg-white text-black font-bold rounded-full mb-12 transition-all shadow-[0_4px_0_0_#D1D5DB] hover:shadow-[0_2px_0_0_#D1D5DB] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px] cursor-pointer">
          Get started for free
        </button>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-40">
          <button className="bg-[#1f1f1f] px-6 py-2 rounded-xl flex items-center gap-3 hover:bg-[#2a2a2a] active:scale-95 transition-all border border-white/5 hover:border-white/10 group cursor-pointer">
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
          <button className="bg-[#1f1f1f] px-6 py-2 rounded-xl flex items-center gap-3 hover:bg-[#2a2a2a] active:scale-95 transition-all border border-white/5 hover:border-white/10 group cursor-pointer">
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
  );
}
