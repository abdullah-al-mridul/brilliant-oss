import { CheckCircle2 } from "lucide-preact";

export function ContributorSection() {
  return (
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
          <button className="px-10 py-3.5 bg-white border-2 border-gray-100 text-[#1c1d1f] rounded-full font-bold transition-all shadow-[0_4px_0_0_#D1D5DB] hover:shadow-[0_2px_0_0_#D1D5DB] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px] cursor-pointer">
            Join as a contributor
          </button>
        </div>
      </div>
    </section>
  );
}
