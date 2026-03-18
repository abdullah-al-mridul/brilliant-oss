import motivationImage from "../assets/images/home/stay-motivated.png";

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
          <div className="flex flex-col items-center justify-center relative group">
            <img
              src={motivationImage}
              alt="Stay motivated"
              className="w-full max-w-[440px] h-auto drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
